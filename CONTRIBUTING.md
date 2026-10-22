# Contributing

Add a project by editing [`data/projects.toml`](data/projects.toml). Do not edit `README.md`; the build script writes it.

## What belongs here

- Libraries, tools, templates, and apps that use or extend [Foldkit](https://foldkit.dev).
- Docs, talks, and articles about Foldkit.

Star count does not matter. A working project with one star is fine. A dead link is not.

## What does not belong

- Projects named "foldkit" that are not about the Foldkit framework. Add those to `[[ignore]]` so the weekly search stops reporting them.
- Private repositories.

## Weekly search

A GitHub Action runs `scripts/discover.mjs` every Monday and opens the issue "New Foldkit projects to review". The script finds repositories through GitHub code search, the foldkit/foldkit dependency graph, repository search, and npm search. It lists a repository only when one of its `package.json` files depends on `foldkit` or an `@foldkit/*` package. It skips matches in vendored folders such as `.repos/` and `node_modules/`.

To review the issue:

- Add the real projects to `data/projects.toml`.
- Tick the box of an entry you do not want, or close the issue. The next run records every entry that is not in `data/projects.toml` as rejected in `data/radar-seen.json`. Rejected entries do not show again. To show one again, delete it from that file.

Code search needs the `RADAR_TOKEN` secret: a fine-grained personal access token with read access to public repositories. The token of the GitHub Action cannot use code search. To run the search on your machine:

```sh
RADAR_TOKEN=$(gh auth token) npm run discover
```

## Entry format

```toml
[[project]]
section = "ui"                      # an id from the [[section]] list
repo = "owner/name"                 # GitHub repo, if there is one
npm = ["package-name"]              # npm packages, optional
url = "https://..."                 # main link when it is not the repo, optional
name = "Display name"               # optional
description = "What it does, in one sentence ending with a period."
```

- Say what the project does. Do not use words such as "powerful", "blazing", or "production-ready".
- Do not add stars, dates, or download counts. The build script reads them.

## Check your change

```sh
npm install
GITHUB_TOKEN=$(gh auth token) npm run build
```

Commit `data/projects.toml` only. The GitHub Action rebuilds `README.md` after the merge.
