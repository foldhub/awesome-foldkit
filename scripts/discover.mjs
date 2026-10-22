// Finds Foldkit projects on GitHub and npm that are not in data/projects.toml.
// Writes Markdown for an issue body to stdout, or nothing when there is
// nothing to review. Updates data/radar-seen.json.
//
// Sources:
//   1. GitHub code search for package.json, vite.config.ts, and main.ts
//      files that mention foldkit. Needs a personal token: GitHub Actions tokens
//      cannot use code search.
//   2. The GitHub dependency graph of foldkit/foldkit ("Used by").
//   3. GitHub repository search by name, description, and topics.
//   4. npm search.
//   5. Pending entries from data/radar-seen.json.
//
// Every GitHub candidate is checked by reading its package.json files. A
// repository counts as a Foldkit project when foldkit or an @foldkit/*
// package is in dependencies, devDependencies, or peerDependencies.
//
// Usage:
//   RADAR_TOKEN=... node scripts/discover.mjs [--previous issue.json]
//
// --previous takes the last discovery issue as JSON with `body` and `state`
// fields (`gh issue view --json body,state`). Entries in it that are not in
// data/projects.toml are recorded as rejected when the issue is closed, or
// when their box is ticked. Rejected entries do not show again.

import { readFile, writeFile } from 'node:fs/promises'
import { parseArgs } from 'node:util'
import { parse } from 'smol-toml'

const DATA_PATH = new URL('../data/projects.toml', import.meta.url)
const SEEN_PATH = new URL('../data/radar-seen.json', import.meta.url)

const CODE_QUERIES = [
  'foldkit filename:package.json',
  'foldkit filename:vite.config.ts',
  '"foldkit/html" filename:main.ts',
]
// Code search indexes files up to 384 KB.
const MAX_FILE_SIZE = 400_000
const CODE_SEARCH_LIMIT = 1000
// Code search drops results from large result sets without an error, so
// ranges are split well below the 1000 result limit.
const SPLIT_THRESHOLD = 400
const PAGE_SIZE = 100
// Code search allows 10 requests per minute.
const CODE_SEARCH_GAP_MS = 6500
const RETRIES = 3
const MAX_RATE_LIMIT_WAIT_MS = 120_000
const GRAPHQL_BATCH = 10
const MAX_MANIFESTS_PER_REPO = 8
const DEPENDENT_PACKAGES = ['foldkit', '@foldkit/ui']
const MAX_DEPENDENT_PAGES = 30
const RECENT_DAYS = 90
const DAY_MS = 24 * 60 * 60 * 1000

const VENDORED_PATH =
  /(^|\/)(\.?repos|externals?|\.reference|node_modules|vendor|third_party|\.cache)\//i
const TOOLING_PACKAGES = new Set(['@foldkit/oxlint-plugin', '@foldkit/devtools-mcp'])
const TEMPLATE_WORDS = /\b(template|starter|scaffold|boilerplate)\b/i

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const log = message => console.error(message)

const { values: options } = parseArgs({ options: { previous: { type: 'string' } } })

const token = process.env.RADAR_TOKEN || process.env.GITHUB_TOKEN || process.env.GH_TOKEN
if (!token) {
  throw new Error('Set RADAR_TOKEN (or GITHUB_TOKEN) to a token that can read public repositories.')
}

const today = new Date().toISOString().slice(0, 10)
const now = Date.now()

const data = parse(await readFile(DATA_PATH, 'utf8'))
const projects = data.project ?? []
const ignorePatterns = (data.ignore ?? []).flatMap(entry => entry.match ?? [])

const knownRepos = new Set([
  'foldkit/foldkit',
  ...projects.flatMap(project => (project.repo ? [project.repo.toLowerCase()] : [])),
])
const knownPackages = new Set(projects.flatMap(project => project.npm ?? []))

const isIgnored = name =>
  ignorePatterns.some(pattern =>
    pattern.endsWith('*')
      ? name.toLowerCase().startsWith(pattern.slice(0, -1).toLowerCase())
      : name.toLowerCase() === pattern.toLowerCase(),
  )

const repoKey = name => name.toLowerCase()
const packageKey = name => `npm:${name}`

// SEEN LIST

const readJson = async (path, fallback) => {
  try {
    return JSON.parse(await readFile(path, 'utf8'))
  } catch (error) {
    if (error.code === 'ENOENT') {
      return fallback
    }
    throw error
  }
}

const seen = await readJson(SEEN_PATH, {})

const recordPreviousIssue = async path => {
  const issue = JSON.parse(await readFile(path, 'utf8'))
  const isClosed = issue.state?.toUpperCase() === 'CLOSED'
  const entry = /^- \[([ xX])\] \[([^\]]+)\]\((https:\/\/[^)]+)\)/

  for (const line of (issue.body ?? '').split('\n')) {
    const match = line.match(entry)
    if (!match) {
      continue
    }

    const [, box, name, url] = match
    const isPackage = url.startsWith('https://www.npmjs.com/')
    const key = isPackage ? packageKey(name) : repoKey(name)
    const isKnown = isPackage ? knownPackages.has(name) : knownRepos.has(key)
    if (isKnown || !(isClosed || box !== ' ')) {
      continue
    }

    seen[key] = { ...seen[key], firstSeen: seen[key]?.firstSeen ?? today, verdict: 'rejected' }
  }
}

if (options.previous) {
  await recordPreviousIssue(options.previous)
}

const isRejected = key => seen[key]?.verdict === 'rejected'

// GITHUB REQUESTS

const rateLimitWait = response => {
  const retryAfter = Number(response.headers.get('retry-after'))
  if (retryAfter > 0) {
    return retryAfter * 1000
  }
  if (response.headers.get('x-ratelimit-remaining') === '0') {
    return Number(response.headers.get('x-ratelimit-reset')) * 1000 - Date.now() + 1000
  }
  return undefined
}

const request = async (url, init = {}) => {
  for (let attempt = 1; ; attempt += 1) {
    const response = await fetch(url, init)
    if (response.ok) {
      return response
    }

    const wait = rateLimitWait(response)
    const canRetry = attempt < RETRIES && (wait !== undefined || response.status >= 500)
    if (!canRetry || (wait ?? 0) > MAX_RATE_LIMIT_WAIT_MS) {
      const detail = (await response.text()).slice(0, 500)
      throw new Error(`${init.method ?? 'GET'} ${url} returned ${response.status}: ${detail}`)
    }

    log(`${url} returned ${response.status}, retrying.`)
    await sleep(Math.max(wait ?? attempt * 5000, 1000))
  }
}

const apiHeaders = {
  accept: 'application/vnd.github+json',
  authorization: `bearer ${token}`,
}

const github = async path =>
  (await request(`https://api.github.com${path}`, { headers: apiHeaders })).json()

const graphql = async query => {
  const response = await request('https://api.github.com/graphql', {
    method: 'POST',
    headers: { ...apiHeaders, 'content-type': 'application/json' },
    body: JSON.stringify({ query }),
  })
  const body = await response.json()
  const failures = (body.errors ?? []).filter(error => error.type !== 'NOT_FOUND')
  if (failures.length > 0) {
    throw new Error(`GraphQL failed: ${JSON.stringify(failures).slice(0, 500)}`)
  }
  return body.data ?? {}
}

// CANDIDATES

const candidates = new Map()

const addCandidate = (name, source, fields = {}) => {
  const key = repoKey(name)
  const candidate = candidates.get(key) ?? {
    name,
    sources: new Set(),
    manifestPaths: new Set(),
    importPaths: new Set(),
    vendoredPaths: new Set(),
  }
  candidate.sources.add(source)
  Object.assign(candidate, fields)
  candidates.set(key, candidate)
  return candidate
}

// SOURCE: CODE SEARCH

const searchCodePage = async (query, low, high, page) => {
  const q = encodeURIComponent(`${query} size:${low}..${high}`)
  const path = `/search/code?q=${q}&per_page=${PAGE_SIZE}&page=${page}`

  for (let attempt = 1; ; attempt += 1) {
    await sleep(CODE_SEARCH_GAP_MS)
    const body = await github(path)
    if (!body.incomplete_results) {
      return body
    }
    if (attempt === RETRIES) {
      throw new Error(`Code search returned incomplete results: ${query} size:${low}..${high}`)
    }
    log(`Incomplete results for ${query} size:${low}..${high}, retrying.`)
  }
}

const collectCodeHit = item => {
  const name = item.repository.full_name
  if (item.repository.fork) {
    return
  }

  const candidate = addCandidate(name, 'code search')
  if (VENDORED_PATH.test(item.path)) {
    candidate.vendoredPaths.add(item.path)
  } else if (item.path.endsWith('package.json')) {
    candidate.manifestPaths.add(item.path)
  } else {
    candidate.importPaths.add(item.path)
  }
}

const searchCodeRange = async (query, low, high) => {
  const first = await searchCodePage(query, low, high, 1)
  log(`  size:${low}..${high}: ${first.total_count} results`)

  if (first.total_count > SPLIT_THRESHOLD && high > low) {
    const middle = Math.floor((low + high) / 2)
    await searchCodeRange(query, low, middle)
    await searchCodeRange(query, middle + 1, high)
    return
  }

  first.items.forEach(collectCodeHit)

  const pages = Math.ceil(Math.min(first.total_count, CODE_SEARCH_LIMIT) / PAGE_SIZE)
  for (let page = 2; page <= pages; page += 1) {
    const body = await searchCodePage(query, low, high, page)
    body.items.forEach(collectCodeHit)
    if (body.items.length === 0) {
      break
    }
  }
}

for (const query of CODE_QUERIES) {
  log(`Code search: ${query}`)
  await searchCodeRange(query, 0, MAX_FILE_SIZE)
}

// SOURCE: DEPENDENCY GRAPH

const dependentsPage = async url =>
  (await request(url, { headers: { accept: 'text/html' } })).text()

const dependentPackageIds = html => {
  const ids = new Map()
  const item =
    /href="[^"]*network\/dependents\?package_id=([^"&]+)"[\s\S]*?select-menu-item-text">\s*([^<\s]+)\s*</g
  for (const [, id, name] of html.matchAll(item)) {
    ids.set(name, id)
  }
  return ids
}

const dependentRepos = html =>
  [...html.matchAll(/data-hovercard-type="repository"[^>]*href="\/([^/"]+\/[^/"]+)"/g)].map(
    ([, name]) => name,
  )

const nextDependentsUrl = html =>
  html.match(/href="(https:\/\/github\.com\/[^"]*network\/dependents\?[^"]*dependents_after=[^"]*)"/)?.[1]
    ?.replaceAll('&amp;', '&')

const dependentsRoot = 'https://github.com/foldkit/foldkit/network/dependents'
const packageIds = dependentPackageIds(await dependentsPage(dependentsRoot))
if (packageIds.size === 0) {
  throw new Error('Found no packages on the dependents page. GitHub may have changed the page.')
}

for (const packageName of DEPENDENT_PACKAGES) {
  const id = packageIds.get(packageName)
  if (!id) {
    log(`The dependents page lists no package ${packageName}.`)
    continue
  }

  let url = `${dependentsRoot}?dependent_type=REPOSITORY&package_id=${id}`
  for (let page = 1; url && page <= MAX_DEPENDENT_PAGES; page += 1) {
    const html = await dependentsPage(url)
    for (const name of dependentRepos(html)) {
      addCandidate(name, 'dependency graph')
    }
    url = nextDependentsUrl(html)
  }
}

// SOURCE: REPOSITORY SEARCH

const searchRepos = await github(
  '/search/repositories?q=foldkit+in:name,description,topics+fork:false&per_page=100&sort=updated',
)
for (const item of searchRepos.items) {
  addCandidate(item.full_name, 'name search')
}

// SOURCE: EARLIER RUNS
// Code search returns a different subset on each run, so a candidate found
// once stays listed until it is added or rejected.

for (const [key, entry] of Object.entries(seen)) {
  if (entry.verdict === 'pending' && !key.startsWith('npm:')) {
    const candidate = addCandidate(key, 'earlier run')
    for (const path of entry.manifests ?? []) {
      candidate.manifestPaths.add(path)
    }
  }
}

// VERIFY

const pending = [...candidates.entries()].filter(
  ([key, candidate]) => !knownRepos.has(key) && !isIgnored(candidate.name) && !isRejected(key),
)

const manifestPathsFor = candidate => {
  const paths = new Set(['package.json', ...candidate.manifestPaths])
  for (const file of candidate.importPaths) {
    const parts = file.split('/').slice(0, -1)
    for (let depth = parts.length; depth > 0; depth -= 1) {
      paths.add([...parts.slice(0, depth), 'package.json'].join('/'))
    }
  }
  return [...paths].slice(0, MAX_MANIFESTS_PER_REPO)
}

const foldkitDependencies = text => {
  let manifest
  try {
    manifest = JSON.parse(text)
  } catch {
    return { names: [], isPeer: false }
  }

  const fields = ['dependencies', 'devDependencies', 'peerDependencies']
  const names = fields.flatMap(field =>
    Object.keys(manifest[field] ?? {}).filter(
      name => name === 'foldkit' || name.startsWith('@foldkit/'),
    ),
  )
  const isPeer = Object.keys(manifest.peerDependencies ?? {}).some(
    name => name === 'foldkit' || name.startsWith('@foldkit/'),
  )
  return { names, isPeer: isPeer && manifest.private !== true }
}

for (let start = 0; start < pending.length; start += GRAPHQL_BATCH) {
  const batch = pending.slice(start, start + GRAPHQL_BATCH)
  const fields = batch
    .map(([, candidate], index) => {
      const [owner, name] = candidate.name.split('/')
      candidate.checkedPaths = manifestPathsFor(candidate)
      const files = candidate.checkedPaths
        .map(
          (path, fileIndex) =>
            `f${fileIndex}: object(expression: ${JSON.stringify(`HEAD:${path}`)}) { ... on Blob { text } }`,
        )
        .join(' ')
      return `r${index}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) { nameWithOwner description stargazerCount pushedAt isFork isArchived isTemplate homepageUrl ${files} }`
    })
    .join('\n')

  const result = await graphql(`query {\n${fields}\n}`)

  batch.forEach(([, candidate], index) => {
    const info = result[`r${index}`]
    if (!info) {
      candidate.missing = true
      return
    }

    const manifests = candidate.checkedPaths.flatMap((path, fileIndex) => {
      const text = info[`f${fileIndex}`]?.text
      return text ? [{ path, ...foldkitDependencies(text) }] : []
    })

    Object.assign(candidate, {
      name: info.nameWithOwner,
      description: info.description ?? '',
      stars: info.stargazerCount,
      pushedAt: info.pushedAt,
      isFork: info.isFork,
      isArchived: info.isArchived,
      isTemplate: info.isTemplate,
      homepage: info.homepageUrl,
      dependencies: new Set(manifests.flatMap(manifest => manifest.names)),
      isLibrary: manifests.some(manifest => manifest.isPeer),
      foldkitManifests: manifests
        .filter(manifest => manifest.names.length > 0)
        .map(manifest => manifest.path),
    })
  })
}

// CLASSIFY

const isRecent = candidate =>
  candidate.pushedAt && now - Date.parse(candidate.pushedAt) < RECENT_DAYS * DAY_MS

const groupOf = candidate => {
  const hasOnlyVendoredHits =
    candidate.vendoredPaths.size > 0 &&
    candidate.manifestPaths.size === 0 &&
    candidate.importPaths.size === 0

  if (candidate.missing || candidate.isFork || candidate.isArchived) {
    return 'dropped'
  }
  if (hasOnlyVendoredHits && candidate.dependencies.size === 0) {
    return 'vendored'
  }
  if (candidate.dependencies.size === 0) {
    return candidate.sources.has('code search') && candidate.sources.size === 1
      ? 'no dependency'
      : 'unverified'
  }
  if ([...candidate.dependencies].every(name => TOOLING_PACKAGES.has(name))) {
    return 'tooling'
  }
  if (candidate.isTemplate || TEMPLATE_WORDS.test(`${candidate.name} ${candidate.description}`)) {
    return 'template'
  }
  if (candidate.isLibrary) {
    return 'library'
  }
  return 'app'
}

const byRecencyThenStars = (left, right) =>
  Number(isRecent(right)) - Number(isRecent(left)) || (right.stars ?? 0) - (left.stars ?? 0)

const groups = new Map()
for (const [, candidate] of pending) {
  const group = groupOf(candidate)
  groups.set(group, [...(groups.get(group) ?? []), candidate])
}

// SOURCE: NPM

const npmResponse = await request('https://registry.npmjs.org/-/v1/search?text=foldkit&size=250')
const npmBody = await npmResponse.json()

const repoFromUrl = url => url?.match(/github\.com[/:]([^/]+\/[^/.#]+)/)?.[1]?.toLowerCase()

const newPackages = npmBody.objects
  .map(({ package: pkg }) => ({
    name: pkg.name,
    description: pkg.description ?? '',
    repo: repoFromUrl(pkg.links?.repository),
  }))
  .filter(
    pkg =>
      !pkg.name.startsWith('@foldkit/') &&
      !knownPackages.has(pkg.name) &&
      !(pkg.repo && knownRepos.has(pkg.repo)) &&
      !isIgnored(pkg.name) &&
      !isRejected(packageKey(pkg.name)),
  )

// SEEN LIST UPDATE

const listedGroups = ['app', 'library', 'template', 'tooling', 'unverified']
const listedRepos = listedGroups.flatMap(group => groups.get(group) ?? [])
const listedKeys = [
  ...listedRepos.map(candidate => repoKey(candidate.name)),
  ...newPackages.map(pkg => packageKey(pkg.name)),
]

const isNew = key => !seen[key]
const newKeys = new Set(listedKeys.filter(isNew))
for (const key of listedKeys) {
  seen[key] ??= { firstSeen: today, verdict: 'pending' }
}
for (const candidate of listedRepos) {
  if (candidate.foldkitManifests.length > 0) {
    seen[repoKey(candidate.name)].manifests = candidate.foldkitManifests
  }
}
for (const key of Object.keys(seen)) {
  const isAdded = key.startsWith('npm:')
    ? knownPackages.has(key.slice('npm:'.length))
    : knownRepos.has(key)
  if (isAdded) {
    delete seen[key]
  }
}

const sortedSeen = Object.fromEntries(
  Object.entries(seen).sort(([left], [right]) => left.localeCompare(right)),
)
await writeFile(SEEN_PATH, `${JSON.stringify(sortedSeen, null, 2)}\n`)

// ISSUE BODY

if (listedKeys.length === 0) {
  process.exit(0)
}

const GROUP_TITLES = {
  app: 'Apps',
  library: 'Libraries and integrations',
  template: 'Templates',
  tooling: 'Tooling only (no Foldkit UI)',
  unverified: 'Not verified (no foldkit dependency found in package.json)',
}

const repoLine = candidate => {
  const facts = [
    `${candidate.stars ?? 0} stars`,
    candidate.pushedAt ? `pushed ${candidate.pushedAt.slice(0, 10)}` : undefined,
    candidate.homepage ? `[site](${candidate.homepage})` : undefined,
    candidate.importPaths.size > 0 ? `${candidate.importPaths.size} source ${candidate.importPaths.size === 1 ? 'file' : 'files'} match` : undefined,
    [...candidate.sources].join(', '),
  ].filter(Boolean)
  const mark = newKeys.has(repoKey(candidate.name)) ? ' **new**' : ''
  const description = candidate.description ? `: ${candidate.description}` : ''
  return `- [ ] [${candidate.name}](https://github.com/${candidate.name})${mark} (${facts.join(', ')})${description}`
}

const lines = [
  'The weekly search found projects that use Foldkit and are not in the list yet.',
  '',
  '- Add the real ones to `data/projects.toml`.',
  '- Tick the box of an entry you do not want. The next run records it as rejected in `data/radar-seen.json`, and it does not show again.',
  '- When you close this issue, the next run records every entry that is not in `data/projects.toml` as rejected.',
  '',
]

for (const group of listedGroups) {
  const members = (groups.get(group) ?? []).sort(byRecencyThenStars)
  if (members.length === 0) {
    continue
  }
  if (group === 'unverified') {
    lines.push(
      `<details><summary>${GROUP_TITLES[group]}: ${members.length}</summary>`,
      '',
      ...members.map(repoLine),
      '',
      '</details>',
      '',
    )
  } else {
    lines.push(`## ${GROUP_TITLES[group]}`, '', ...members.map(repoLine), '')
  }
}

if (newPackages.length > 0) {
  lines.push('## npm', '')
  for (const pkg of newPackages) {
    const repo = pkg.repo ? ` ([repo](https://github.com/${pkg.repo}))` : ''
    const mark = newKeys.has(packageKey(pkg.name)) ? ' **new**' : ''
    lines.push(
      `- [ ] [${pkg.name}](https://www.npmjs.com/package/${pkg.name})${mark}${repo}: ${pkg.description}`,
    )
  }
  lines.push('')
}

const skipped = ['vendored', 'no dependency', 'dropped'].flatMap(group =>
  (groups.get(group) ?? []).map(candidate => `${candidate.name} (${group})`),
)
if (skipped.length > 0) {
  lines.push(
    `<details><summary>Skipped ${skipped.length} repositories</summary>`,
    '',
    'Vendored: foldkit shows only in a vendored folder. No dependency: code search matched the word, but no package.json depends on foldkit. Dropped: fork, archived, or not found.',
    '',
    ...skipped.sort().map(entry => `- ${entry}`),
    '',
    '</details>',
    '',
  )
}

console.log(lines.join('\n'))
