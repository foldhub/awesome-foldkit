// Builds README.md from data/projects.toml.
// Fetches GitHub stars, last push, and archive state, plus npm monthly
// downloads, then sorts each section by stars.
// Usage: GITHUB_TOKEN=... node scripts/build.mjs

import { readFile, writeFile } from 'node:fs/promises'
import { parse } from 'smol-toml'

const DATA_PATH = new URL('../data/projects.toml', import.meta.url)
const SNAPSHOT_PATH = new URL('../data/snapshot.json', import.meta.url)
const README_PATH = new URL('../README.md', import.meta.url)
const STALE_DAYS = 180
const GRAPHQL_BATCH = 40
const DAY_MS = 24 * 60 * 60 * 1000
const NPM_RETRIES = 4
const NPM_RETRY_DELAY_MS = 2000
const NPM_REQUEST_GAP_MS = 250

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN

const data = parse(await readFile(DATA_PATH, 'utf8'))
const sections = data.section ?? []
const projects = data.project ?? []

const fetchRepos = async repos => {
  const result = new Map()
  if (!token) {
    console.warn('No GITHUB_TOKEN: stars and dates are left empty.')
    return result
  }

  for (let start = 0; start < repos.length; start += GRAPHQL_BATCH) {
    const batch = repos.slice(start, start + GRAPHQL_BATCH)
    const fields = batch
      .map((repo, index) => {
        const [owner, name] = repo.split('/')
        return `r${index}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) { nameWithOwner stargazerCount pushedAt isArchived description }`
      })
      .join('\n')

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        authorization: `bearer ${token}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({ query: `query {\n${fields}\n}` }),
    })
    const body = await response.json()

    batch.forEach((repo, index) => {
      const info = body.data?.[`r${index}`]
      if (info) {
        result.set(repo, info)
      } else {
        console.warn(`Repository not found: ${repo}`)
      }
    })
  }

  return result
}

const fetchDownloads = async packages => {
  const result = new Map()

  for (const name of packages) {
    let response = await fetch(
      `https://api.npmjs.org/downloads/point/last-month/${name}`,
    )
    for (let attempt = 1; response.status === 429 && attempt <= NPM_RETRIES; attempt++) {
      await sleep(NPM_RETRY_DELAY_MS * attempt)
      response = await fetch(
        `https://api.npmjs.org/downloads/point/last-month/${name}`,
      )
    }
    await sleep(NPM_REQUEST_GAP_MS)

    if (response.ok) {
      const body = await response.json()
      result.set(name, body.downloads ?? 0)
    } else {
      console.warn(`npm downloads unavailable (${response.status}): ${name}`)
    }
  }

  return result
}

const repos = [...new Set(projects.flatMap(p => (p.repo ? [p.repo] : [])))]
const packages = [...new Set(projects.flatMap(p => p.npm ?? []))]
const [repoInfo, downloads] = await Promise.all([
  fetchRepos(repos),
  fetchDownloads(packages),
])

const formatCount = count =>
  count >= 1000 ? `${(count / 1000).toFixed(count >= 10000 ? 0 : 1)}k` : `${count}`

const now = Date.now()
const today = new Date(now).toISOString().slice(0, 10)

const enrich = project => {
  const info = project.repo ? repoInfo.get(project.repo) : undefined
  const monthly = (project.npm ?? []).reduce(
    (sum, name) => sum + (downloads.get(name) ?? 0),
    0,
  )
  const pushedAt = info?.pushedAt ? new Date(info.pushedAt) : undefined
  const isStale = pushedAt ? now - pushedAt.getTime() > STALE_DAYS * DAY_MS : false

  return {
    ...project,
    stars: info?.stargazerCount ?? 0,
    pushedAt: pushedAt?.toISOString().slice(0, 10),
    isArchived: info?.isArchived ?? false,
    isStale,
    monthly,
  }
}

const enriched = projects.map(enrich)

const ICON_ALT = {
  repo: 'GitHub',
  npm: 'npm',
  web: 'Website',
  docs: 'Docs',
  chat: 'Chat',
  article: 'Article',
  compare: 'Comparison',
}

const projectName = project =>
  project.name ?? project.repo ?? project.npm?.[0] ?? project.url

const projectUrl = project =>
  project.url ??
  (project.repo
    ? `https://github.com/${project.repo}`
    : `https://www.npmjs.com/package/${project.npm[0]}`)

const projectIcon = project => {
  const icon =
    project.icon ?? (project.url ? 'web' : project.repo ? 'repo' : 'npm')
  return `<img src="assets/icons/${icon}.svg" alt="${ICON_ALT[icon] ?? icon}">`
}

const starsBadge = project =>
  project.repo
    ? `[![GitHub stars](https://img.shields.io/github/stars/${project.repo}?style=social)](https://github.com/${project.repo}/stargazers)`
    : undefined

const npmBadge = project =>
  project.npm?.length
    ? `[![npm downloads](https://img.shields.io/npm/dm/${project.npm[0]}?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/${project.npm[0]})`
    : undefined

const statusNote = project => {
  if (project.isArchived) {
    return ' **Archived.**'
  } else if (project.isStale) {
    return ` No commits since ${project.pushedAt}.`
  } else {
    return ''
  }
}

const projectLine = project => {
  const docs = project.docs ? ` [Docs](${project.docs}).` : ''
  const badges = [starsBadge(project), npmBadge(project)].filter(Boolean)
  const tail = badges.length > 0 ? ` ${badges.join(' ')}` : ''

  return `- ${projectIcon(project)} [${projectName(project)}](${projectUrl(project)}) - ${project.description}${statusNote(project)}${docs}${tail}`
}

const pillImage = section =>
  section.pill
    ? `<img src="assets/pills/${section.pill}.svg" alt="" align="top"> `
    : ''

const sectionBlock = section => {
  const level = section.level ?? 2
  const heading = `${'#'.repeat(level)} ${pillImage(section)}${section.title}`

  if (section.heading_only) {
    return [heading, '', section.intro, ''].join('\n')
  }

  const members = enriched.filter(project => project.section === section.id)
  const ordered =
    section.sort === 'manual'
      ? members
      : [...members].sort((a, b) => b.stars - a.stars || b.monthly - a.monthly)

  return [heading, '', section.intro, '', ...ordered.map(projectLine), ''].join('\n')
}

const anchor = title =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/ /g, '-')

const contentsLine = section =>
  `${(section.level ?? 2) === 3 ? '  ' : ''}- [${section.title}](#${anchor(section.title)})`

const communityCount = enriched.filter(
  project => !['start', 'compare', 'core', 'examples', 'community'].includes(project.section),
).length
const totalStars = enriched
  .filter(project => project.repo)
  .reduce((sum, project) => sum + project.stars, 0)
const coreDownloads = enriched
  .filter(project => project.section === 'core')
  .reduce((sum, project) => sum + project.monthly, 0)

const formatThousands = count => count.toLocaleString('en-US')

const escapeXml = text =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const bannerSvg = () => {
  const stats = `${communityCount} community projects  ·  ${formatThousands(totalStars)} stars  ·  ${formatCount(coreDownloads)} core downloads a month`
  return `<svg xmlns="http://www.w3.org/2000/svg" width="880" height="200" viewBox="0 0 880 200" role="img" aria-label="Awesome Foldkit">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0f1115"/>
      <stop offset="1" stop-color="#1c2230"/>
    </linearGradient>
  </defs>
  <rect width="880" height="200" rx="16" fill="url(#bg)"/>
  <g transform="translate(48,52)" fill="#ffffff">
    <rect width="34" height="96"/>
    <rect x="40" width="34" height="18"/>
    <rect x="40" y="26" width="34" height="18"/>
  </g>
  <g font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif">
    <text x="150" y="92" fill="#ffffff" font-size="44" font-weight="700">Awesome Foldkit</text>
    <text x="152" y="124" fill="#aab3c2" font-size="18">Projects, tools, and apps around the Elm Architecture on Effect</text>
    <text x="152" y="158" fill="#7ee2a8" font-size="15">${escapeXml(stats)}</text>
  </g>
</svg>
`
}

const updatedSvg = () => {
  const label = 'updated'
  const value = today
  const labelWidth = 62
  const valueWidth = 82
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${labelWidth + valueWidth}" height="20" role="img" aria-label="${label}: ${value}">
  <rect width="${labelWidth}" height="20" rx="3" fill="#555"/>
  <rect x="${labelWidth - 3}" width="${valueWidth + 3}" height="20" rx="3" fill="#2f9e64"/>
  <rect x="${labelWidth - 3}" width="4" height="20" fill="#2f9e64"/>
  <g fill="#fff" font-family="Verdana, DejaVu Sans, sans-serif" font-size="11" text-anchor="middle">
    <text x="${labelWidth / 2}" y="14">${label}</text>
    <text x="${labelWidth + valueWidth / 2 - 1}" y="14">${value}</text>
  </g>
</svg>
`
}

const readme = [
  '<a href="https://github.com/tao-io/awesome-foldkit"><img src="assets/banner.svg" alt="Awesome Foldkit" width="100%"></a>',
  '',
  '# Awesome Foldkit [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)',
  '',
  'Libraries, tools, apps, and docs for [Foldkit](https://foldkit.dev), the TypeScript frontend framework built on [Effect](https://effect.website) with the Elm Architecture: one Model, a Message union, a pure update, and Commands for side effects.',
  '',
  '<img src="assets/pills/updated.svg" alt="Last updated"> [![Foldkit stars](https://img.shields.io/github/stars/foldkit/foldkit?style=social)](https://github.com/foldkit/foldkit) [![foldkit on npm](https://img.shields.io/npm/v/foldkit?style=flat-square&label=foldkit&color=cb3837)](https://www.npmjs.com/package/foldkit)',
  '',
  'Star and download badges load live. Every day a GitHub Action re-sorts the ecosystem by stars and flags archived or inactive projects. Every week it searches GitHub and npm for new projects.',
  '',
  '> A Foldkit community project by [tao-io](https://github.com/tao-io). To add a project, edit [`data/projects.toml`](data/projects.toml) and open a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md).',
  '',
  '## Contents',
  '',
  ...sections.map(contentsLine),
  '- [How this list stays current](#how-this-list-stays-current)',
  '',
  ...sections.map(sectionBlock),
  '## How this list stays current',
  '',
  '- Badges come from [shields.io](https://shields.io) and show live star and download counts.',
  '- [`build.yml`](.github/workflows/build.yml) runs every day. It reads GitHub and npm, sorts each ecosystem section by stars, flags archived projects and projects with no commits for 180 days, and redraws the banner.',
  '- [`discover.yml`](.github/workflows/discover.yml) runs every week. It searches GitHub and npm for new Foldkit projects and lists the ones that are not here yet in an issue.',
  '',
  '## License',
  '',
  '[CC0 1.0](LICENSE). The Foldkit name and logo follow the [Foldkit community branding guidelines](https://github.com/foldkit/foldkit/blob/main/BRANDING.md).',
  '',
].join('\n')

await writeFile(README_PATH, readme)
await writeFile(new URL('../assets/banner.svg', import.meta.url), bannerSvg())
await writeFile(new URL('../assets/pills/updated.svg', import.meta.url), updatedSvg())
await writeFile(
  SNAPSHOT_PATH,
  `${JSON.stringify(
    {
      builtAt: today,
      projects: enriched.map(({ section, repo, npm, url, stars, monthly, pushedAt, isArchived }) => ({
        section,
        repo,
        npm,
        url,
        stars,
        monthly,
        pushedAt,
        isArchived,
      })),
    },
    null,
    2,
  )}\n`,
)

console.log(`README.md written: ${enriched.length} entries, ${communityCount} community projects, ${totalStars} stars.`)
