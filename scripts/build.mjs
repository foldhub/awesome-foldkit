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

const projectName = project =>
  project.name ?? project.repo?.split('/')[1] ?? project.npm?.[0] ?? project.url

const projectUrl = project =>
  project.url ??
  (project.repo
    ? `https://github.com/${project.repo}`
    : `https://www.npmjs.com/package/${project.npm[0]}`)

const starsBadge = project =>
  project.repo
    ? `[![GitHub stars](https://img.shields.io/github/stars/${project.repo}?style=social)](https://github.com/${project.repo}/stargazers)`
    : undefined

const npmBadge = project =>
  project.npm?.length
    ? `[![npm downloads](https://img.shields.io/npm/dm/${project.npm[0]}?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/${project.npm[0]})`
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
  const badges = [starsBadge(project), npmBadge(project)].filter(Boolean).join(' ')
  const title = `**[${projectName(project)}](${projectUrl(project)})**`
  const head = badges ? `${title} ${badges}` : title

  return `- ${head}<br>${project.description}${statusNote(project)}`
}

const sectionList = section => {
  const lines = enriched
    .filter(project => project.section === section.id)
    .sort((a, b) => b.stars - a.stars || b.monthly - a.monthly)
    .map(projectLine)

  return [`## ${section.title}`, '', section.intro, '', ...lines, ''].join('\n')
}

const anchor = title =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/ /g, '-')

const totalStars = enriched.reduce((sum, project) => sum + project.stars, 0)

const readme = [
  '# Awesome Foldkit [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)',
  '',
  'A list of projects, tools, and apps around [Foldkit](https://foldkit.dev), the TypeScript frontend framework built on [Effect](https://effect.website) with the Elm Architecture.',
  '',
  `${enriched.length} projects. Star and download badges load live. A GitHub Action re-sorts each section by stars and flags archived or inactive projects every day. Last build: ${today}.`,
  '',
  'Not official. Maintained by the community. To add a project, edit [`data/projects.toml`](data/projects.toml) and open a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md).',
  '',
  '## Contents',
  '',
  ...sections.map(section => `- [${section.title}](#${anchor(section.title)})`),
  '',
  ...sections.map(sectionList),
  '## How this list stays current',
  '',
  '- Badges come from [shields.io](https://shields.io) and show the live star and download counts.',
  '- [`build.yml`](.github/workflows/build.yml) runs every day. It reads GitHub and npm, sorts each section by stars, flags archived projects and projects with no commits for 180 days, and commits the new README.',
  '- [`discover.yml`](.github/workflows/discover.yml) runs every week. It searches GitHub and npm for new Foldkit projects and lists the ones that are not here yet in an issue.',
  '',
  `<sub>Total stars across listed repositories at last build: ${totalStars}.</sub>`,
  '',
].join('\n')

await writeFile(README_PATH, readme)
await writeFile(
  SNAPSHOT_PATH,
  `${JSON.stringify(
    {
      builtAt: today,
      projects: enriched.map(({ section, repo, npm, stars, monthly, pushedAt, isArchived }) => ({
        section,
        repo,
        npm,
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

console.log(`README.md written: ${enriched.length} projects, ${totalStars} stars.`)
