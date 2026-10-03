// Finds Foldkit projects on GitHub and npm that are not in data/projects.toml.
// Prints Markdown for an issue body, or nothing when there is nothing new.
// Usage: GITHUB_TOKEN=... node scripts/discover.mjs

import { readFile } from 'node:fs/promises'
import { parse } from 'smol-toml'

const DATA_PATH = new URL('../data/projects.toml', import.meta.url)
const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN

const data = parse(await readFile(DATA_PATH, 'utf8'))
const projects = data.project ?? []
const ignorePatterns = (data.ignore ?? []).flatMap(entry => entry.match ?? [])

const knownRepos = new Set(
  projects.flatMap(project => (project.repo ? [project.repo.toLowerCase()] : [])),
)
const knownPackages = new Set(projects.flatMap(project => project.npm ?? []))

const isIgnored = name =>
  ignorePatterns.some(pattern =>
    pattern.endsWith('*')
      ? name.toLowerCase().startsWith(pattern.slice(0, -1).toLowerCase())
      : name.toLowerCase() === pattern.toLowerCase(),
  )

const github = async path => {
  const response = await fetch(`https://api.github.com${path}`, {
    headers: {
      accept: 'application/vnd.github+json',
      ...(token ? { authorization: `bearer ${token}` } : {}),
    },
  })
  return response.ok ? response.json() : { items: [] }
}

const repoFromUrl = url =>
  url?.match(/github\.com[/:]([^/]+\/[^/.#]+)/)?.[1]?.toLowerCase()

const searchRepos = await github(
  '/search/repositories?q=foldkit+in:name,description,topics+fork:false&per_page=100&sort=updated',
)
const searchCode = token
  ? await github('/search/code?q=%22foldkit%22+filename:package.json&per_page=100')
  : { items: [] }

const repoCandidates = new Map()
for (const item of searchRepos.items ?? []) {
  repoCandidates.set(item.full_name.toLowerCase(), {
    name: item.full_name,
    stars: item.stargazers_count,
    description: item.description ?? '',
  })
}
for (const item of searchCode.items ?? []) {
  const name = item.repository.full_name
  if (!repoCandidates.has(name.toLowerCase())) {
    repoCandidates.set(name.toLowerCase(), {
      name,
      stars: undefined,
      description: item.repository.description ?? '',
    })
  }
}

const newRepos = [...repoCandidates.entries()]
  .filter(([key, repo]) => key !== 'foldkit/foldkit' && !knownRepos.has(key) && !isIgnored(repo.name))
  .map(([, repo]) => repo)

const npmResponse = await fetch(
  'https://registry.npmjs.org/-/v1/search?text=foldkit&size=250',
)
const npmBody = npmResponse.ok ? await npmResponse.json() : { objects: [] }

const newPackages = (npmBody.objects ?? [])
  .map(({ package: pkg }) => ({
    name: pkg.name,
    description: pkg.description ?? '',
    repo: repoFromUrl(pkg.links?.repository),
  }))
  .filter(
    pkg =>
      !pkg.name.startsWith('@foldkit/') &&
      !knownPackages.has(pkg.name) &&
      !(pkg.repo && (knownRepos.has(pkg.repo) || pkg.repo === 'foldkit/foldkit')) &&
      !isIgnored(pkg.name),
  )

if (newRepos.length === 0 && newPackages.length === 0) {
  process.exit(0)
}

const lines = [
  'The weekly search found projects that mention Foldkit and are not in the list yet.',
  'Add the real ones to `data/projects.toml`. Add name collisions to `[[ignore]]`.',
  '',
]

if (newRepos.length > 0) {
  lines.push('## GitHub', '')
  for (const repo of newRepos) {
    const stars = repo.stars === undefined ? '' : ` (${repo.stars} stars)`
    lines.push(`- [ ] [${repo.name}](https://github.com/${repo.name})${stars}: ${repo.description}`)
  }
  lines.push('')
}

if (newPackages.length > 0) {
  lines.push('## npm', '')
  for (const pkg of newPackages) {
    const repo = pkg.repo ? ` ([repo](https://github.com/${pkg.repo}))` : ''
    lines.push(`- [ ] [${pkg.name}](https://www.npmjs.com/package/${pkg.name})${repo}: ${pkg.description}`)
  }
  lines.push('')
}

console.log(lines.join('\n'))
