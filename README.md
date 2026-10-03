<a href="https://github.com/foldhub/awesome-foldkit"><img src="assets/banner.svg" alt="Awesome Foldkit" width="100%"></a>

# Awesome Foldkit [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

Libraries, tools, apps, and docs for [Foldkit](https://foldkit.dev), the TypeScript frontend framework built on [Effect](https://effect.website) with the Elm Architecture: one Model, a Message union, a pure update, and Commands for side effects.

<img src="assets/pills/updated.svg" alt="Last updated"> [![Foldkit stars](https://img.shields.io/github/stars/foldkit/foldkit?style=social)](https://github.com/foldkit/foldkit) [![foldkit on npm](https://img.shields.io/npm/v/foldkit?style=flat-square&label=foldkit&color=cb3837)](https://www.npmjs.com/package/foldkit)

Star and download badges load live. Every day a GitHub Action re-sorts the ecosystem by stars and flags archived or inactive projects. Every week it searches GitHub and npm for new projects.

> A Foldkit community project by [Foldhub](https://github.com/foldhub). To add a project, edit [`data/projects.toml`](data/projects.toml) and open a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Contents

- [Start here](#start-here)
- [Compare and migrate](#compare-and-migrate)
- [Core packages](#core-packages)
- [Examples by the Foldkit team](#examples-by-the-foldkit-team)
- [Ecosystem](#ecosystem)
  - [Full stack and deployment](#full-stack-and-deployment)
  - [UI kits and styling](#ui-kits-and-styling)
  - [AI and agents](#ai-and-agents)
  - [Interop and tooling](#interop-and-tooling)
- [Apps built with Foldkit](#apps-built-with-foldkit)
- [Community](#community)
- [How this list stays current](#how-this-list-stays-current)

## <img src="assets/pills/start.svg" alt="" align="top"> Start here

Foldkit docs and resources.

- <img src="assets/icons/web.svg" alt="Website"> [foldkit.dev](https://foldkit.dev) - Docs, guides, and the API reference.
- <img src="assets/icons/docs.svg" alt="Docs"> [Get started](https://foldkit.dev/get-started) - Create a project from a starter, read the generated structure, or add Foldkit to an existing app.
- <img src="assets/icons/docs.svg" alt="Docs"> [Why Foldkit](https://foldkit.dev/introduction/why-foldkit) - Why Foldkit exists and the principles behind its design.
- <img src="assets/icons/docs.svg" alt="Docs"> [Architecture](https://foldkit.dev/core/architecture) - How Model, Messages, update, view, Commands, Subscriptions, and the Runtime fit together.
- <img src="assets/icons/docs.svg" alt="Docs"> [Counter example](https://foldkit.dev/core/counter-example) - A minimal app traced through its Model, Message Schema, update, view, and init.
- <img src="assets/icons/web.svg" alt="Website"> [Playground](https://foldkit.dev/playground) - Edit and run a Foldkit app in the browser.
- <img src="assets/icons/docs.svg" alt="Docs"> [Testing](https://foldkit.dev/testing) - Story tests drive update directly; Scene tests drive the rendered view.
- <img src="assets/icons/docs.svg" alt="Docs"> [Server rendering](https://foldkit.dev/core/server-rendering) - Render the same app to HTML at request time or build time, then hydrate it.
- <img src="assets/icons/docs.svg" alt="Docs"> [AI overview](https://foldkit.dev/ai/overview) - Agent skills, the DevTools MCP server, and llms.txt for coding agents.
- <img src="assets/icons/docs.svg" alt="Docs"> [llms.txt](https://foldkit.dev/llms.txt) - Index of every docs page for language models; append .md to any page URL for Markdown.
- <img src="assets/icons/docs.svg" alt="Docs"> [Roadmap](https://foldkit.dev/introduction/roadmap) - Where Foldkit is today and the work left before 1.0.
- <img src="assets/icons/docs.svg" alt="Docs"> [Performance](https://foldkit.dev/faq/performance) - Rendering cost model and TodoMVC benchmark results.

## <img src="assets/pills/compare.svg" alt="" align="top"> Compare and migrate

Side-by-side builds and migration guides.

- <img src="assets/icons/compare.svg" alt="Comparison"> [Foldkit vs React](https://foldkit.dev/react/foldkit-vs-react-side-by-side) - The same pixel art editor built in both, compared on state, side effects, testing, and performance.
- <img src="assets/icons/compare.svg" alt="Comparison"> [Foldkit vs React + Effect Atom](https://foldkit.dev/react/foldkit-vs-react-effect-atom) - One Model and a Message union compared with state spread across atoms, for teams that already use Effect.
- <img src="assets/icons/compare.svg" alt="Comparison"> [Foldkit vs Elm](https://foldkit.dev/elm/foldkit-vs-elm-side-by-side) - The same app in both: ports vs Commands, decoders vs Schema.
- <img src="assets/icons/docs.svg" alt="Docs"> [Coming from React](https://foldkit.dev/react/coming-from-react) - How one Model and Messages replace component state and useEffect.
- <img src="assets/icons/docs.svg" alt="Docs"> [Coming from TanStack Query](https://foldkit.dev/react/coming-from-tanstack-query) - How AsyncData in the Model replaces useQuery.

## <img src="assets/pills/core.svg" alt="" align="top"> Core packages

Published from the [foldkit/foldkit](https://github.com/foldkit/foldkit) monorepo. All versions move together.

- <img src="assets/icons/npm.svg" alt="npm"> [foldkit](https://www.npmjs.com/package/foldkit) - The framework: Runtime, html builders, routing, Commands, Subscriptions, Mounts, Story and Scene tests. [Docs](https://foldkit.dev/core/architecture). [![GitHub stars](https://img.shields.io/github/stars/foldkit/foldkit?style=social)](https://github.com/foldkit/foldkit/stargazers) [![npm downloads](https://img.shields.io/npm/dm/foldkit?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/foldkit)
- <img src="assets/icons/npm.svg" alt="npm"> [@foldkit/ui](https://www.npmjs.com/package/@foldkit/ui) - Headless, accessible components (Dialog, Menu, Listbox, Combobox, Popover, Calendar, and more) built as Submodels. [Docs](https://foldkit.dev/ui/overview). [![npm downloads](https://img.shields.io/npm/dm/@foldkit/ui?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/@foldkit/ui)
- <img src="assets/icons/npm.svg" alt="npm"> [create-foldkit-app](https://www.npmjs.com/package/create-foldkit-app) - Scaffold a new Foldkit app. [Docs](https://foldkit.dev/get-started). [![npm downloads](https://img.shields.io/npm/dm/create-foldkit-app?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/create-foldkit-app)
- <img src="assets/icons/npm.svg" alt="npm"> [@foldkit/vite-plugin](https://www.npmjs.com/package/@foldkit/vite-plugin) - Vite plugin with state-preserving live reload, view identity, and server rendering in dev. [Docs](https://foldkit.dev/core/preserve-scroll). [![npm downloads](https://img.shields.io/npm/dm/@foldkit/vite-plugin?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/@foldkit/vite-plugin)
- <img src="assets/icons/npm.svg" alt="npm"> [@foldkit/devtools](https://www.npmjs.com/package/@foldkit/devtools) - In-browser DevTools overlay with Message history, Model diffs, and time travel. [Docs](https://foldkit.dev/core/devtools). [![npm downloads](https://img.shields.io/npm/dm/@foldkit/devtools?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/@foldkit/devtools)
- <img src="assets/icons/npm.svg" alt="npm"> [@foldkit/devtools-mcp](https://www.npmjs.com/package/@foldkit/devtools-mcp) - MCP server that lets coding agents read the Model, dispatch Messages, and time travel in a running app. [Docs](https://foldkit.dev/ai/mcp). [![npm downloads](https://img.shields.io/npm/dm/@foldkit/devtools-mcp?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/@foldkit/devtools-mcp)
- <img src="assets/icons/npm.svg" alt="npm"> [@foldkit/oxlint-plugin](https://www.npmjs.com/package/@foldkit/oxlint-plugin) - Oxlint rules for Foldkit conventions. [Docs](https://foldkit.dev/tooling/oxlint-plugin). [![npm downloads](https://img.shields.io/npm/dm/@foldkit/oxlint-plugin?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/@foldkit/oxlint-plugin)
- <img src="assets/icons/npm.svg" alt="npm"> [@foldkit/markdown](https://www.npmjs.com/package/@foldkit/markdown) - Write Markdown files and get Foldkit views with live islands. [![npm downloads](https://img.shields.io/npm/dm/@foldkit/markdown?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/@foldkit/markdown)

## <img src="assets/pills/examples.svg" alt="" align="top"> Examples by the Foldkit team

Apps and examples from the Foldkit maintainers.

- <img src="assets/icons/repo.svg" alt="GitHub"> [foldkit/coverchart](https://github.com/foldkit/coverchart) - App for writing chord charts with lyrics. [![GitHub stars](https://img.shields.io/github/stars/foldkit/coverchart?style=social)](https://github.com/foldkit/coverchart/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [foldkit/patch-match](https://github.com/foldkit/patch-match) - Game: match the patch. [![GitHub stars](https://img.shields.io/github/stars/foldkit/patch-match?style=social)](https://github.com/foldkit/patch-match/stargazers)
- <img src="assets/icons/web.svg" alt="Website"> [Example apps](https://foldkit.dev/example-apps) - From a counter to multiplayer games, each with source and a playground.
- <img src="assets/icons/web.svg" alt="Website"> [Typing Terminal](https://typingterminal.com) - Multiplayer typing game; its source is in packages/typing-game of the Foldkit repo.

## <img src="assets/pills/stack.svg" alt="" align="top"> Ecosystem

Community libraries and tools. Each subsection is sorted by GitHub stars.

### Full stack and deployment

Backends, hosting, and starters around a Foldkit frontend.

- <img src="assets/icons/web.svg" alt="Website"> [Alchemy examples](https://github.com/alchemy-run/alchemy/tree/main/examples) - Infrastructure as Effect code, with Foldkit examples for Cloudflare (static and SSR), AWS, Fly, Hetzner, Railway, Neon, and Prisma. [![GitHub stars](https://img.shields.io/github/stars/alchemy-run/alchemy?style=social)](https://github.com/alchemy-run/alchemy/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [Confect (@confect/foldkit)](https://github.com/rjdellecese/confect) - Convex with Effect, with client bindings for Foldkit apps. [![GitHub stars](https://img.shields.io/github/stars/rjdellecese/confect?style=social)](https://github.com/rjdellecese/confect/stargazers) [![npm downloads](https://img.shields.io/npm/dm/@confect/foldkit?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/@confect/foldkit)
- <img src="assets/icons/repo.svg" alt="GitHub"> [NolanGC/foldkit-alchemy-starter](https://github.com/NolanGC/foldkit-alchemy-starter) - Starter for full-stack apps with Foldkit and Alchemy. [![GitHub stars](https://img.shields.io/github/stars/NolanGC/foldkit-alchemy-starter?style=social)](https://github.com/NolanGC/foldkit-alchemy-starter/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [lloydrichards/stack-effect](https://github.com/lloydrichards/stack-effect) - Scaffolds Effect apps from composable modules, with a Foldkit client module. [![GitHub stars](https://img.shields.io/github/stars/lloydrichards/stack-effect?style=social)](https://github.com/lloydrichards/stack-effect/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [mwarger/foldkit-convex-clerk-lab](https://github.com/mwarger/foldkit-convex-clerk-lab) - Architecture lab for Foldkit with Convex, Clerk, and Confect. [![GitHub stars](https://img.shields.io/github/stars/mwarger/foldkit-convex-clerk-lab?style=social)](https://github.com/mwarger/foldkit-convex-clerk-lab/stargazers)
- <img src="assets/icons/npm.svg" alt="npm"> [create-foldkit-alchemy-app](https://www.npmjs.com/package/create-foldkit-alchemy-app) - Scaffolds a Foldkit, Alchemy, and Cloudflare full-stack app. [![npm downloads](https://img.shields.io/npm/dm/create-foldkit-alchemy-app?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/create-foldkit-alchemy-app)
- <img src="assets/icons/repo.svg" alt="GitHub"> [elianiva/nook](https://github.com/elianiva/nook) - Monorepo template with a Foldkit frontend, Effect RPC backend, Cloudflare KV state, and Alchemy infrastructure. [![GitHub stars](https://img.shields.io/github/stars/elianiva/nook?style=social)](https://github.com/elianiva/nook/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [Potti1234/zero-foldkit](https://github.com/Potti1234/zero-foldkit) - Rocicorp Zero sync engine bindings for Foldkit. [![GitHub stars](https://img.shields.io/github/stars/Potti1234/zero-foldkit?style=social)](https://github.com/Potti1234/zero-foldkit/stargazers)

### UI kits and styling

Components, styling systems, and icons. Several kits follow the shadcn/ui copy-in model, so check this list before you start a new one.

- <img src="assets/icons/repo.svg" alt="GitHub"> [elianiva/foldcn](https://github.com/elianiva/foldcn) - shadcn/ui components ported to Foldkit. [![GitHub stars](https://img.shields.io/github/stars/elianiva/foldcn?style=social)](https://github.com/elianiva/foldcn/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [bjacobso/foldworks](https://github.com/bjacobso/foldworks) - Themeable components, a data grid, and a form builder for Foldkit, styled with StyleX. [![GitHub stars](https://img.shields.io/github/stars/bjacobso/foldworks?style=social)](https://github.com/bjacobso/foldworks/stargazers) [![npm downloads](https://img.shields.io/npm/dm/@foldworks/ui?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/@foldworks/ui)
- <img src="assets/icons/repo.svg" alt="GitHub"> [boozedog/foldstylex](https://github.com/boozedog/foldstylex) - shadcn-inspired styling for Foldkit with StyleX. [![GitHub stars](https://img.shields.io/github/stars/boozedog/foldstylex?style=social)](https://github.com/boozedog/foldstylex/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [boozedog/foldstryx](https://github.com/boozedog/foldstryx) - Astryx-inspired styling for Foldkit with StyleX. [![GitHub stars](https://img.shields.io/github/stars/boozedog/foldstryx?style=social)](https://github.com/boozedog/foldstryx/stargazers) [![npm downloads](https://img.shields.io/npm/dm/@foldstryx/foldkit?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/@foldstryx/foldkit)
- <img src="assets/icons/repo.svg" alt="GitHub"> [classy-foldkit](https://github.com/djgrant/classy) - Typed component factories with CSS classes for Foldkit views. [![GitHub stars](https://img.shields.io/github/stars/djgrant/classy?style=social)](https://github.com/djgrant/classy/stargazers) [![npm downloads](https://img.shields.io/npm/dm/@djgrant/classy-foldkit?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/@djgrant/classy-foldkit)
- <img src="assets/icons/repo.svg" alt="GitHub"> [oleksandr-antonenko/foldkit-extras](https://github.com/oleksandr-antonenko/foldkit-extras) - Command palette, time-grid scheduler, and grouped side navigation components. [![GitHub stars](https://img.shields.io/github/stars/oleksandr-antonenko/foldkit-extras?style=social)](https://github.com/oleksandr-antonenko/foldkit-extras/stargazers) [![npm downloads](https://img.shields.io/npm/dm/foldkit-command-palette?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/foldkit-command-palette)
- <img src="assets/icons/repo.svg" alt="GitHub"> [foldkit-viz](https://github.com/opsydyn/fold-kit-experiments) - Chart and visualization primitives for Foldkit without D3. [![GitHub stars](https://img.shields.io/github/stars/opsydyn/fold-kit-experiments?style=social)](https://github.com/opsydyn/fold-kit-experiments/stargazers) [![npm downloads](https://img.shields.io/npm/dm/@opsydyn/foldkit-viz?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/@opsydyn/foldkit-viz)
- <img src="assets/icons/repo.svg" alt="GitHub"> [Potti1234/foldkit-lucide-icons](https://github.com/Potti1234/foldkit-lucide-icons) - Lucide icons as Foldkit views. [![GitHub stars](https://img.shields.io/github/stars/Potti1234/foldkit-lucide-icons?style=social)](https://github.com/Potti1234/foldkit-lucide-icons/stargazers) [![npm downloads](https://img.shields.io/npm/dm/foldkit-lucide-icons?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/foldkit-lucide-icons)
- <img src="assets/icons/repo.svg" alt="GitHub"> [peterje/foldui](https://github.com/peterje/foldui) - Foldkit-native UI registry. [![GitHub stars](https://img.shields.io/github/stars/peterje/foldui?style=social)](https://github.com/peterje/foldui/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [birbprophet/shadcn-ui-foldkit](https://github.com/birbprophet/shadcn-ui-foldkit) - shadcn/ui port for Foldkit. [![GitHub stars](https://img.shields.io/github/stars/birbprophet/shadcn-ui-foldkit?style=social)](https://github.com/birbprophet/shadcn-ui-foldkit/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [birbprophet/untitled-ui-foldkit](https://github.com/birbprophet/untitled-ui-foldkit) - Untitled UI port for Foldkit. [![GitHub stars](https://img.shields.io/github/stars/birbprophet/untitled-ui-foldkit?style=social)](https://github.com/birbprophet/untitled-ui-foldkit/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [birbprophet/boneyard-foldkit](https://github.com/birbprophet/boneyard-foldkit) - Responsive skeleton loaders for Foldkit views. [![GitHub stars](https://img.shields.io/github/stars/birbprophet/boneyard-foldkit?style=social)](https://github.com/birbprophet/boneyard-foldkit/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [MentalGear/foldkit-shadcn](https://github.com/MentalGear/foldkit-shadcn) - shadcn/ui port for Foldkit. [![GitHub stars](https://img.shields.io/github/stars/MentalGear/foldkit-shadcn?style=social)](https://github.com/MentalGear/foldkit-shadcn/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [skoshx/foldkit-icons](https://github.com/skoshx/foldkit-icons) - Icon views for Foldkit. [![GitHub stars](https://img.shields.io/github/stars/skoshx/foldkit-icons?style=social)](https://github.com/skoshx/foldkit-icons/stargazers)

### AI and agents

Tools that give coding agents or in-app agents access to a Foldkit app.

- <img src="assets/icons/repo.svg" alt="GitHub"> [doeixd/foldkit-plus](https://github.com/doeixd/foldkit-plus) - Exposes a Foldkit app's Model and Messages to agents through WebMCP, MCP, and A2A, plus forms, CRUD, sync, and server rendering packages. [![GitHub stars](https://img.shields.io/github/stars/doeixd/foldkit-plus?style=social)](https://github.com/doeixd/foldkit-plus/stargazers) [![npm downloads](https://img.shields.io/npm/dm/foldkit-agent?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/foldkit-agent)
- <img src="assets/icons/repo.svg" alt="GitHub"> [tao-io/foldcase](https://github.com/tao-io/foldcase) - Headless test loop for Foldkit components with Schema reports and an MCP catalog for coding agents. [![GitHub stars](https://img.shields.io/github/stars/tao-io/foldcase?style=social)](https://github.com/tao-io/foldcase/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [mpsuesser/scraped-docs-foldkit](https://github.com/mpsuesser/scraped-docs-foldkit) - Foldkit docs as Markdown, refreshed automatically, for agent context. [![GitHub stars](https://img.shields.io/github/stars/mpsuesser/scraped-docs-foldkit?style=social)](https://github.com/mpsuesser/scraped-docs-foldkit/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [dallenpyrah/creasekit](https://github.com/dallenpyrah/creasekit) - Inspect elements, leave notes, and share that context with coding agents through MCP. [![GitHub stars](https://img.shields.io/github/stars/dallenpyrah/creasekit?style=social)](https://github.com/dallenpyrah/creasekit/stargazers) [![npm downloads](https://img.shields.io/npm/dm/creasekit?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/creasekit)
- <img src="assets/icons/repo.svg" alt="GitHub"> [deracs/effect-webmcp](https://github.com/deracs/effect-webmcp) - Effect tools and layers for the WebMCP browser API, usable from Foldkit Commands. [![GitHub stars](https://img.shields.io/github/stars/deracs/effect-webmcp?style=social)](https://github.com/deracs/effect-webmcp/stargazers) [![npm downloads](https://img.shields.io/npm/dm/effect-webmcp?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/effect-webmcp)
- <img src="assets/icons/repo.svg" alt="GitHub"> [tao-io/foldkit-design](https://github.com/tao-io/foldkit-design) - Claude Design template and Claude Code skill for prototyping Foldkit apps. [![GitHub stars](https://img.shields.io/github/stars/tao-io/foldkit-design?style=social)](https://github.com/tao-io/foldkit-design/stargazers)

### Interop and tooling

Bridges to React, Astro, and Storybook, plus developer tools.

- <img src="assets/icons/repo.svg" alt="GitHub"> [Aniket-508/foldocs](https://github.com/Aniket-508/foldocs) - Documentation site framework built on Foldkit. [![GitHub stars](https://img.shields.io/github/stars/Aniket-508/foldocs?style=social)](https://github.com/Aniket-508/foldocs/stargazers) [![npm downloads](https://img.shields.io/npm/dm/foldocs?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/foldocs)
- <img src="assets/icons/repo.svg" alt="GitHub"> [Potti1234/wide-effect](https://github.com/Potti1234/wide-effect) - Interaction correlation and sanitized diagnostic timelines for Foldkit. [![GitHub stars](https://img.shields.io/github/stars/Potti1234/wide-effect?style=social)](https://github.com/Potti1234/wide-effect/stargazers) [![npm downloads](https://img.shields.io/npm/dm/@wide-effect/foldkit?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/@wide-effect/foldkit)
- <img src="assets/icons/repo.svg" alt="GitHub"> [causeeffect (foldkit-jsx)](https://github.com/crutchcorn/causeeffect) - JSX for Effect, with a JSX adapter for Foldkit's typed view builders. [![GitHub stars](https://img.shields.io/github/stars/crutchcorn/causeeffect?style=social)](https://github.com/crutchcorn/causeeffect/stargazers) [![npm downloads](https://img.shields.io/npm/dm/@causeeffect/foldkit-jsx?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/@causeeffect/foldkit-jsx)
- <img src="assets/icons/web.svg" alt="Website"> [@opsydyn/astro-foldkit](https://github.com/opsydyn/fold-kit-experiments) - Astro integration and renderer for Foldkit. [![npm downloads](https://img.shields.io/npm/dm/@opsydyn/astro-foldkit?style=flat-square&label=npm&color=cb3837)](https://www.npmjs.com/package/@opsydyn/astro-foldkit)
- <img src="assets/icons/repo.svg" alt="GitHub"> [rodygosset/react-foldkit](https://github.com/rodygosset/react-foldkit) - React bindings that use Foldkit's Command, Message, Update, and Subscription vocabulary. [![GitHub stars](https://img.shields.io/github/stars/rodygosset/react-foldkit?style=social)](https://github.com/rodygosset/react-foldkit/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [birbprophet/react-foldkit-converter](https://github.com/birbprophet/react-foldkit-converter) - Converts React components to Foldkit views. [![GitHub stars](https://img.shields.io/github/stars/birbprophet/react-foldkit-converter?style=social)](https://github.com/birbprophet/react-foldkit-converter/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [birbprophet/storybook-renderer-foldkit](https://github.com/birbprophet/storybook-renderer-foldkit) - Storybook renderer that mounts the real Foldkit runtime per story. [![GitHub stars](https://img.shields.io/github/stars/birbprophet/storybook-renderer-foldkit?style=social)](https://github.com/birbprophet/storybook-renderer-foldkit/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [birbprophet/astro-renderer-foldkit](https://github.com/birbprophet/astro-renderer-foldkit) - Astro renderer for Foldkit views. [![GitHub stars](https://img.shields.io/github/stars/birbprophet/astro-renderer-foldkit?style=social)](https://github.com/birbprophet/astro-renderer-foldkit/stargazers)

## <img src="assets/pills/apps.svg" alt="" align="top"> Apps built with Foldkit

Open source applications you can read to learn real patterns.

- <img src="assets/icons/repo.svg" alt="GitHub"> [Effect-TS/slopcop](https://github.com/Effect-TS/slopcop) - Effect's GitHub triage bot, with a Foldkit UI and Foldkit agent skills. [![GitHub stars](https://img.shields.io/github/stars/Effect-TS/slopcop?style=social)](https://github.com/Effect-TS/slopcop/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [IMax153/twitch-integrations](https://github.com/IMax153/twitch-integrations) - Twitch integrations built with Effect, with a broadcaster page as a Foldkit app. [![GitHub stars](https://img.shields.io/github/stars/IMax153/twitch-integrations?style=social)](https://github.com/IMax153/twitch-integrations/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [SyahrulBhudiF/Dearly](https://github.com/SyahrulBhudiF/Dearly) - Private diary for dated memories on a freeform canvas. [![GitHub stars](https://img.shields.io/github/stars/SyahrulBhudiF/Dearly?style=social)](https://github.com/SyahrulBhudiF/Dearly/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [tomrford/vscope](https://github.com/tomrford/vscope) - Local daemon and Foldkit UI for an embedded debug interface. [![GitHub stars](https://img.shields.io/github/stars/tomrford/vscope?style=social)](https://github.com/tomrford/vscope/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [filipfalcon/skoreova](https://github.com/filipfalcon/skoreova) - Women's soccer in Czechia: clubs, players, fixtures, and charts. [![GitHub stars](https://img.shields.io/github/stars/filipfalcon/skoreova?style=social)](https://github.com/filipfalcon/skoreova/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [mwarger/corefour](https://github.com/mwarger/corefour) - Pick four games that shaped you and share them as a poster, on Cloudflare Workers. [![GitHub stars](https://img.shields.io/github/stars/mwarger/corefour?style=social)](https://github.com/mwarger/corefour/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [solcik/agent-grilling](https://github.com/solcik/agent-grilling) - Local inbox where agents post decisions and you answer them in one browser panel. [![GitHub stars](https://img.shields.io/github/stars/solcik/agent-grilling?style=social)](https://github.com/solcik/agent-grilling/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [arijit-gogoi/web-forth](https://github.com/arijit-gogoi/web-forth) - Forth VM with a Foldkit and CodeMirror REPL. [![GitHub stars](https://img.shields.io/github/stars/arijit-gogoi/web-forth?style=social)](https://github.com/arijit-gogoi/web-forth/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [fellz/booking_widget_effect](https://github.com/fellz/booking_widget_effect) - Hotel booking widget ported from Vue 3 to Foldkit, with an audit of state-modelling holes. [![GitHub stars](https://img.shields.io/github/stars/fellz/booking_widget_effect?style=social)](https://github.com/fellz/booking_widget_effect/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [dearlordylord/pathfinder-armor-puzzle-solver](https://github.com/dearlordylord/pathfinder-armor-puzzle-solver) - Pathfinder armor puzzle solver. [![GitHub stars](https://img.shields.io/github/stars/dearlordylord/pathfinder-armor-puzzle-solver?style=social)](https://github.com/dearlordylord/pathfinder-armor-puzzle-solver/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [jordangarrison/tic-tac-toe-4-in-a-row](https://github.com/jordangarrison/tic-tac-toe-4-in-a-row) - 8x8 exact-four scoring game. [![GitHub stars](https://img.shields.io/github/stars/jordangarrison/tic-tac-toe-4-in-a-row?style=social)](https://github.com/jordangarrison/tic-tac-toe-4-in-a-row/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [roottool/retort](https://github.com/roottool/retort) - Page that shows the infrastructure that serves it. [![GitHub stars](https://img.shields.io/github/stars/roottool/retort?style=social)](https://github.com/roottool/retort/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [tao-io/foldkit-gallery](https://github.com/tao-io/foldkit-gallery) - Every @foldkit/ui component on its own page, with Model assertions. [![GitHub stars](https://img.shields.io/github/stars/tao-io/foldkit-gallery?style=social)](https://github.com/tao-io/foldkit-gallery/stargazers)
- <img src="assets/icons/repo.svg" alt="GitHub"> [erlangxk/foldkit-learn](https://github.com/erlangxk/foldkit-learn) - Learning Foldkit with PixiJS. [![GitHub stars](https://img.shields.io/github/stars/erlangxk/foldkit-learn?style=social)](https://github.com/erlangxk/foldkit-learn/stargazers)

## <img src="assets/pills/community.svg" alt="" align="top"> Community

Places to ask questions and follow releases.

- <img src="assets/icons/chat.svg" alt="Chat"> [Discord](https://discord.gg/kav8VNxqGm) - Foldkit Discord server.
- <img src="assets/icons/chat.svg" alt="Chat"> [GitHub Discussions](https://github.com/foldkit/foldkit/discussions) - Ideas, questions, and show-and-tell.
- <img src="assets/icons/article.svg" alt="Article"> [Blog](https://foldkit.dev/blog) - Release announcements and deep dives. [RSS](https://foldkit.dev/blog/rss.xml).
- <img src="assets/icons/article.svg" alt="Article"> [Newsletter](https://foldkit.dev/newsletter) - Release news by email.
- <img src="assets/icons/chat.svg" alt="Chat"> [Elm Discourse thread](https://discourse.elm-lang.org/t/foldkit-the-elm-architecture-in-typescript-powered-by-effect/10579) - Foldkit introduced to the Elm community.
- <img src="assets/icons/repo.svg" alt="GitHub"> [Marve10s/awesome-effect](https://github.com/Marve10s/awesome-effect) - Awesome list for the whole Effect ecosystem. [![GitHub stars](https://img.shields.io/github/stars/Marve10s/awesome-effect?style=social)](https://github.com/Marve10s/awesome-effect/stargazers)

## How this list stays current

- Badges come from [shields.io](https://shields.io) and show live star and download counts.
- [`build.yml`](.github/workflows/build.yml) runs every day. It reads GitHub and npm, sorts each ecosystem section by stars, flags archived projects and projects with no commits for 180 days, and redraws the banner.
- [`discover.yml`](.github/workflows/discover.yml) runs every week. It searches GitHub and npm for new Foldkit projects and lists the ones that are not here yet in an issue.

## License

[CC0 1.0](LICENSE). The Foldkit name and logo follow the [Foldkit community branding guidelines](https://github.com/foldkit/foldkit/blob/main/BRANDING.md).
