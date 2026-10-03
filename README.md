# Awesome Foldkit [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A list of projects, tools, and apps around [Foldkit](https://foldkit.dev), the TypeScript frontend framework built on [Effect](https://effect.website) with the Elm Architecture.

66 projects. Star and download badges load live. A GitHub Action refreshes the order, the last push dates, and the archive flags every day. Last build: 2026-10-03.

Not official. Maintained by the community. To add a project, edit [`data/projects.toml`](data/projects.toml) and open a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Contents

- [Official](#official)
- [Full stack and deployment](#full-stack-and-deployment)
- [UI kits and styling](#ui-kits-and-styling)
- [AI and agents](#ai-and-agents)
- [Interop and tooling](#interop-and-tooling)
- [Apps built with Foldkit](#apps-built-with-foldkit)
- [Learning and community](#learning-and-community)

## Official

Packages and repositories from the Foldkit maintainers.

| Project | Stars | npm / month | Last push | What it does |
| --- | --- | --- | --- | --- |
| [Foldkit](https://foldkit.dev) | [![stars](https://img.shields.io/github/stars/foldkit/foldkit?style=flat-square&label=%E2%98%85&color=555)](https://github.com/foldkit/foldkit/stargazers) | [![foldkit](https://img.shields.io/npm/dm/foldkit?style=flat-square&label=foldkit)](https://www.npmjs.com/package/foldkit) | 2026-10-03 | TypeScript frontend framework on Effect with the Elm Architecture: one Model, a Message union, a pure update, and Commands for side effects. |
| [coverchart](https://github.com/foldkit/coverchart) | [![stars](https://img.shields.io/github/stars/foldkit/coverchart?style=flat-square&label=%E2%98%85&color=555)](https://github.com/foldkit/coverchart/stargazers) |  | 2026-08-26 | App for writing chord charts with lyrics. |
| [patch-match](https://github.com/foldkit/patch-match) | [![stars](https://img.shields.io/github/stars/foldkit/patch-match?style=flat-square&label=%E2%98%85&color=555)](https://github.com/foldkit/patch-match/stargazers) |  | 2026-09-06 | Game: match the patch. |
| [@foldkit/vite-plugin](https://www.npmjs.com/package/@foldkit/vite-plugin) |  | [![@foldkit/vite-plugin](https://img.shields.io/npm/dm/@foldkit/vite-plugin?style=flat-square&label=%40foldkit%2Fvite-plugin)](https://www.npmjs.com/package/@foldkit/vite-plugin) |  | Vite plugin with state-preserving live reload, view identity, and server rendering in dev. |
| [@foldkit/devtools-mcp](https://foldkit.dev/ai/mcp) |  | [![@foldkit/devtools-mcp](https://img.shields.io/npm/dm/@foldkit/devtools-mcp?style=flat-square&label=%40foldkit%2Fdevtools-mcp)](https://www.npmjs.com/package/@foldkit/devtools-mcp) |  | MCP server that lets coding agents read the Model, dispatch Messages, and time travel in a running app. |
| [@foldkit/ui](https://foldkit.dev/ui/overview) |  | [![@foldkit/ui](https://img.shields.io/npm/dm/@foldkit/ui?style=flat-square&label=%40foldkit%2Fui)](https://www.npmjs.com/package/@foldkit/ui) |  | Headless, accessible UI components (Dialog, Menu, Listbox, Combobox, Popover, Calendar, and more) built as Submodels. |
| [@foldkit/devtools](https://www.npmjs.com/package/@foldkit/devtools) |  | [![@foldkit/devtools](https://img.shields.io/npm/dm/@foldkit/devtools?style=flat-square&label=%40foldkit%2Fdevtools)](https://www.npmjs.com/package/@foldkit/devtools) |  | In-browser DevTools overlay with Message history and time travel. |
| [@foldkit/oxlint-plugin](https://www.npmjs.com/package/@foldkit/oxlint-plugin) |  | [![@foldkit/oxlint-plugin](https://img.shields.io/npm/dm/@foldkit/oxlint-plugin?style=flat-square&label=%40foldkit%2Foxlint-plugin)](https://www.npmjs.com/package/@foldkit/oxlint-plugin) |  | Oxlint rules for Foldkit conventions. |
| [create-foldkit-app](https://www.npmjs.com/package/create-foldkit-app) |  | [![create-foldkit-app](https://img.shields.io/npm/dm/create-foldkit-app?style=flat-square&label=create-foldkit-app)](https://www.npmjs.com/package/create-foldkit-app) |  | Scaffold a new Foldkit app. |
| [@foldkit/markdown](https://www.npmjs.com/package/@foldkit/markdown) |  | [![@foldkit/markdown](https://img.shields.io/npm/dm/@foldkit/markdown?style=flat-square&label=%40foldkit%2Fmarkdown)](https://www.npmjs.com/package/@foldkit/markdown) |  | Write Markdown files and get Foldkit views with live islands. |

## Full stack and deployment

Backends, hosting, and starters around a Foldkit frontend.

| Project | Stars | npm / month | Last push | What it does |
| --- | --- | --- | --- | --- |
| [Alchemy examples](https://github.com/alchemy-run/alchemy/tree/main/examples) | [![stars](https://img.shields.io/github/stars/alchemy-run/alchemy?style=flat-square&label=%E2%98%85&color=555)](https://github.com/alchemy-run/alchemy/stargazers) |  | 2026-10-03 | Infrastructure as Effect code, with Foldkit examples for Cloudflare (static and SSR), AWS, Fly, Hetzner, Railway, Neon, and Prisma. |
| [Confect (@confect/foldkit)](https://github.com/rjdellecese/confect) | [![stars](https://img.shields.io/github/stars/rjdellecese/confect?style=flat-square&label=%E2%98%85&color=555)](https://github.com/rjdellecese/confect/stargazers) | [![@confect/foldkit](https://img.shields.io/npm/dm/@confect/foldkit?style=flat-square&label=%40confect%2Ffoldkit)](https://www.npmjs.com/package/@confect/foldkit) | 2026-10-03 | Convex with Effect, with client bindings for Foldkit apps. |
| [foldkit-alchemy-starter](https://github.com/NolanGC/foldkit-alchemy-starter) | [![stars](https://img.shields.io/github/stars/NolanGC/foldkit-alchemy-starter?style=flat-square&label=%E2%98%85&color=555)](https://github.com/NolanGC/foldkit-alchemy-starter/stargazers) |  | 2026-07-10 | Starter for full-stack apps with Foldkit and Alchemy. |
| [stack-effect](https://github.com/lloydrichards/stack-effect) | [![stars](https://img.shields.io/github/stars/lloydrichards/stack-effect?style=flat-square&label=%E2%98%85&color=555)](https://github.com/lloydrichards/stack-effect/stargazers) |  | 2026-10-01 | Scaffolds Effect apps from composable modules, with a Foldkit client module. |
| [foldkit-convex-clerk-lab](https://github.com/mwarger/foldkit-convex-clerk-lab) | [![stars](https://img.shields.io/github/stars/mwarger/foldkit-convex-clerk-lab?style=flat-square&label=%E2%98%85&color=555)](https://github.com/mwarger/foldkit-convex-clerk-lab/stargazers) |  | 2026-06-19 | Architecture lab for Foldkit with Convex, Clerk, and Confect. |
| [create-foldkit-alchemy-app](https://www.npmjs.com/package/create-foldkit-alchemy-app) |  | [![create-foldkit-alchemy-app](https://img.shields.io/npm/dm/create-foldkit-alchemy-app?style=flat-square&label=create-foldkit-alchemy-app)](https://www.npmjs.com/package/create-foldkit-alchemy-app) |  | Scaffolds a Foldkit, Alchemy, and Cloudflare full-stack app. |
| [nook](https://github.com/elianiva/nook) | [![stars](https://img.shields.io/github/stars/elianiva/nook?style=flat-square&label=%E2%98%85&color=555)](https://github.com/elianiva/nook/stargazers) |  | 2026-10-03 | Monorepo template with a Foldkit frontend, Effect RPC backend, Cloudflare KV state, and Alchemy infrastructure. |
| [zero-foldkit](https://github.com/Potti1234/zero-foldkit) | [![stars](https://img.shields.io/github/stars/Potti1234/zero-foldkit?style=flat-square&label=%E2%98%85&color=555)](https://github.com/Potti1234/zero-foldkit/stargazers) |  | 2026-09-24 | Rocicorp Zero sync engine bindings for Foldkit. |

## UI kits and styling

Components, styling systems, and icons. Several kits follow the shadcn/ui copy-in model.

| Project | Stars | npm / month | Last push | What it does |
| --- | --- | --- | --- | --- |
| [foldcn](https://github.com/elianiva/foldcn) | [![stars](https://img.shields.io/github/stars/elianiva/foldcn?style=flat-square&label=%E2%98%85&color=555)](https://github.com/elianiva/foldcn/stargazers) |  | 2026-10-01 | shadcn/ui components ported to Foldkit. |
| [foldworks](https://github.com/bjacobso/foldworks) | [![stars](https://img.shields.io/github/stars/bjacobso/foldworks?style=flat-square&label=%E2%98%85&color=555)](https://github.com/bjacobso/foldworks/stargazers) | [![@foldworks/ui](https://img.shields.io/npm/dm/@foldworks/ui?style=flat-square&label=%40foldworks%2Fui)](https://www.npmjs.com/package/@foldworks/ui) [![@foldworks/data-grid](https://img.shields.io/npm/dm/@foldworks/data-grid?style=flat-square&label=%40foldworks%2Fdata-grid)](https://www.npmjs.com/package/@foldworks/data-grid) [![@foldworks/form-builder](https://img.shields.io/npm/dm/@foldworks/form-builder?style=flat-square&label=%40foldworks%2Fform-builder)](https://www.npmjs.com/package/@foldworks/form-builder) | 2026-10-03 | Themeable components, a data grid, and a form builder for Foldkit, styled with StyleX. |
| [foldstylex](https://github.com/boozedog/foldstylex) | [![stars](https://img.shields.io/github/stars/boozedog/foldstylex?style=flat-square&label=%E2%98%85&color=555)](https://github.com/boozedog/foldstylex/stargazers) |  | 2026-08-10 | shadcn-inspired styling for Foldkit with StyleX. |
| [foldstryx](https://github.com/boozedog/foldstryx) | [![stars](https://img.shields.io/github/stars/boozedog/foldstryx?style=flat-square&label=%E2%98%85&color=555)](https://github.com/boozedog/foldstryx/stargazers) | [![@foldstryx/foldkit](https://img.shields.io/npm/dm/@foldstryx/foldkit?style=flat-square&label=%40foldstryx%2Ffoldkit)](https://www.npmjs.com/package/@foldstryx/foldkit) | 2026-08-26 | Astryx-inspired styling for Foldkit with StyleX. |
| [classy-foldkit](https://github.com/djgrant/classy) | [![stars](https://img.shields.io/github/stars/djgrant/classy?style=flat-square&label=%E2%98%85&color=555)](https://github.com/djgrant/classy/stargazers) | [![@djgrant/classy-foldkit](https://img.shields.io/npm/dm/@djgrant/classy-foldkit?style=flat-square&label=%40djgrant%2Fclassy-foldkit)](https://www.npmjs.com/package/@djgrant/classy-foldkit) | 2026-07-30 | Typed component factories with CSS classes for Foldkit views. |
| [foldkit-extras](https://github.com/oleksandr-antonenko/foldkit-extras) | [![stars](https://img.shields.io/github/stars/oleksandr-antonenko/foldkit-extras?style=flat-square&label=%E2%98%85&color=555)](https://github.com/oleksandr-antonenko/foldkit-extras/stargazers) | [![foldkit-command-palette](https://img.shields.io/npm/dm/foldkit-command-palette?style=flat-square&label=foldkit-command-palette)](https://www.npmjs.com/package/foldkit-command-palette) [![foldkit-scheduler](https://img.shields.io/npm/dm/foldkit-scheduler?style=flat-square&label=foldkit-scheduler)](https://www.npmjs.com/package/foldkit-scheduler) [![foldkit-sidenav](https://img.shields.io/npm/dm/foldkit-sidenav?style=flat-square&label=foldkit-sidenav)](https://www.npmjs.com/package/foldkit-sidenav) | 2026-09-24 | Command palette, time-grid scheduler, and grouped side navigation components. |
| [foldkit-viz](https://github.com/opsydyn/fold-kit-experiments) | [![stars](https://img.shields.io/github/stars/opsydyn/fold-kit-experiments?style=flat-square&label=%E2%98%85&color=555)](https://github.com/opsydyn/fold-kit-experiments/stargazers) | [![@opsydyn/foldkit-viz](https://img.shields.io/npm/dm/@opsydyn/foldkit-viz?style=flat-square&label=%40opsydyn%2Ffoldkit-viz)](https://www.npmjs.com/package/@opsydyn/foldkit-viz) | 2026-09-20 | Chart and visualization primitives for Foldkit without D3. |
| [foldkit-lucide-icons](https://github.com/Potti1234/foldkit-lucide-icons) | [![stars](https://img.shields.io/github/stars/Potti1234/foldkit-lucide-icons?style=flat-square&label=%E2%98%85&color=555)](https://github.com/Potti1234/foldkit-lucide-icons/stargazers) | [![foldkit-lucide-icons](https://img.shields.io/npm/dm/foldkit-lucide-icons?style=flat-square&label=foldkit-lucide-icons)](https://www.npmjs.com/package/foldkit-lucide-icons) | 2026-07-21 | Lucide icons as Foldkit views. |
| [foldui](https://github.com/peterje/foldui) | [![stars](https://img.shields.io/github/stars/peterje/foldui?style=flat-square&label=%E2%98%85&color=555)](https://github.com/peterje/foldui/stargazers) |  | 2026-08-28 | Foldkit-native UI registry. |
| [shadcn-ui-foldkit](https://github.com/birbprophet/shadcn-ui-foldkit) | [![stars](https://img.shields.io/github/stars/birbprophet/shadcn-ui-foldkit?style=flat-square&label=%E2%98%85&color=555)](https://github.com/birbprophet/shadcn-ui-foldkit/stargazers) |  | 2026-09-04 | shadcn/ui port for Foldkit. |
| [untitled-ui-foldkit](https://github.com/birbprophet/untitled-ui-foldkit) | [![stars](https://img.shields.io/github/stars/birbprophet/untitled-ui-foldkit?style=flat-square&label=%E2%98%85&color=555)](https://github.com/birbprophet/untitled-ui-foldkit/stargazers) |  | 2026-09-06 | Untitled UI port for Foldkit. |
| [boneyard-foldkit](https://github.com/birbprophet/boneyard-foldkit) | [![stars](https://img.shields.io/github/stars/birbprophet/boneyard-foldkit?style=flat-square&label=%E2%98%85&color=555)](https://github.com/birbprophet/boneyard-foldkit/stargazers) |  | 2026-09-16 | Responsive skeleton loaders for Foldkit views. |
| [foldkit-shadcn](https://github.com/MentalGear/foldkit-shadcn) | [![stars](https://img.shields.io/github/stars/MentalGear/foldkit-shadcn?style=flat-square&label=%E2%98%85&color=555)](https://github.com/MentalGear/foldkit-shadcn/stargazers) |  | 2026-09-05 | shadcn/ui port for Foldkit. |
| [foldkit-icons](https://github.com/skoshx/foldkit-icons) | [![stars](https://img.shields.io/github/stars/skoshx/foldkit-icons?style=flat-square&label=%E2%98%85&color=555)](https://github.com/skoshx/foldkit-icons/stargazers) |  | 2026-08-13 | Icon views for Foldkit. |

## AI and agents

Tools that give coding agents or in-app agents access to a Foldkit app.

| Project | Stars | npm / month | Last push | What it does |
| --- | --- | --- | --- | --- |
| [foldkit-plus](https://github.com/doeixd/foldkit-plus) | [![stars](https://img.shields.io/github/stars/doeixd/foldkit-plus?style=flat-square&label=%E2%98%85&color=555)](https://github.com/doeixd/foldkit-plus/stargazers) | [![foldkit-agent](https://img.shields.io/npm/dm/foldkit-agent?style=flat-square&label=foldkit-agent)](https://www.npmjs.com/package/foldkit-agent) [![foldkit-agent-webmcp](https://img.shields.io/npm/dm/foldkit-agent-webmcp?style=flat-square&label=foldkit-agent-webmcp)](https://www.npmjs.com/package/foldkit-agent-webmcp) [![foldkit-agent-mcp](https://img.shields.io/npm/dm/foldkit-agent-mcp?style=flat-square&label=foldkit-agent-mcp)](https://www.npmjs.com/package/foldkit-agent-mcp) | 2026-10-03 | Exposes a Foldkit app's Model and Messages to agents through WebMCP, MCP, and A2A, plus forms, CRUD, sync, and server rendering packages. |
| [foldcase](https://github.com/tao-io/foldcase) | [![stars](https://img.shields.io/github/stars/tao-io/foldcase?style=flat-square&label=%E2%98%85&color=555)](https://github.com/tao-io/foldcase/stargazers) |  | 2026-09-29 | Headless test loop for Foldkit components with Schema reports and an MCP catalog for coding agents. |
| [scraped-docs-foldkit](https://github.com/mpsuesser/scraped-docs-foldkit) | [![stars](https://img.shields.io/github/stars/mpsuesser/scraped-docs-foldkit?style=flat-square&label=%E2%98%85&color=555)](https://github.com/mpsuesser/scraped-docs-foldkit/stargazers) |  | 2026-10-03 | Foldkit docs as Markdown, refreshed automatically, for agent context. |
| [creasekit](https://github.com/dallenpyrah/creasekit) | [![stars](https://img.shields.io/github/stars/dallenpyrah/creasekit?style=flat-square&label=%E2%98%85&color=555)](https://github.com/dallenpyrah/creasekit/stargazers) | [![creasekit](https://img.shields.io/npm/dm/creasekit?style=flat-square&label=creasekit)](https://www.npmjs.com/package/creasekit) | 2026-09-12 | Inspect elements, leave notes, and share that context with coding agents through MCP. |
| [effect-webmcp](https://github.com/deracs/effect-webmcp) | [![stars](https://img.shields.io/github/stars/deracs/effect-webmcp?style=flat-square&label=%E2%98%85&color=555)](https://github.com/deracs/effect-webmcp/stargazers) | [![effect-webmcp](https://img.shields.io/npm/dm/effect-webmcp?style=flat-square&label=effect-webmcp)](https://www.npmjs.com/package/effect-webmcp) | 2026-09-17 | Effect tools and layers for the WebMCP browser API, usable from Foldkit Commands. |
| [foldkit-design](https://github.com/tao-io/foldkit-design) | [![stars](https://img.shields.io/github/stars/tao-io/foldkit-design?style=flat-square&label=%E2%98%85&color=555)](https://github.com/tao-io/foldkit-design/stargazers) |  |  | Claude Design template and Claude Code skill for prototyping Foldkit apps. |

## Interop and tooling

Bridges to React, Astro, and Storybook, plus developer tools.

| Project | Stars | npm / month | Last push | What it does |
| --- | --- | --- | --- | --- |
| [foldocs](https://github.com/Aniket-508/foldocs) | [![stars](https://img.shields.io/github/stars/Aniket-508/foldocs?style=flat-square&label=%E2%98%85&color=555)](https://github.com/Aniket-508/foldocs/stargazers) | [![foldocs](https://img.shields.io/npm/dm/foldocs?style=flat-square&label=foldocs)](https://www.npmjs.com/package/foldocs) [![foldocs-ui](https://img.shields.io/npm/dm/foldocs-ui?style=flat-square&label=foldocs-ui)](https://www.npmjs.com/package/foldocs-ui) [![create-foldocs](https://img.shields.io/npm/dm/create-foldocs?style=flat-square&label=create-foldocs)](https://www.npmjs.com/package/create-foldocs) | 2026-09-21 | Documentation site framework built on Foldkit. |
| [wide-effect](https://github.com/Potti1234/wide-effect) | [![stars](https://img.shields.io/github/stars/Potti1234/wide-effect?style=flat-square&label=%E2%98%85&color=555)](https://github.com/Potti1234/wide-effect/stargazers) | [![@wide-effect/foldkit](https://img.shields.io/npm/dm/@wide-effect/foldkit?style=flat-square&label=%40wide-effect%2Ffoldkit)](https://www.npmjs.com/package/@wide-effect/foldkit) | 2026-09-01 | Interaction correlation and sanitized diagnostic timelines for Foldkit. |
| [causeeffect (foldkit-jsx)](https://github.com/crutchcorn/causeeffect) | [![stars](https://img.shields.io/github/stars/crutchcorn/causeeffect?style=flat-square&label=%E2%98%85&color=555)](https://github.com/crutchcorn/causeeffect/stargazers) | [![@causeeffect/foldkit-jsx](https://img.shields.io/npm/dm/@causeeffect/foldkit-jsx?style=flat-square&label=%40causeeffect%2Ffoldkit-jsx)](https://www.npmjs.com/package/@causeeffect/foldkit-jsx) | 2026-10-02 | JSX for Effect, with a JSX adapter for Foldkit's typed view builders. |
| [@opsydyn/astro-foldkit](https://github.com/opsydyn/fold-kit-experiments) |  | [![@opsydyn/astro-foldkit](https://img.shields.io/npm/dm/@opsydyn/astro-foldkit?style=flat-square&label=%40opsydyn%2Fastro-foldkit)](https://www.npmjs.com/package/@opsydyn/astro-foldkit) |  | Astro integration and renderer for Foldkit. |
| [react-foldkit](https://github.com/rodygosset/react-foldkit) | [![stars](https://img.shields.io/github/stars/rodygosset/react-foldkit?style=flat-square&label=%E2%98%85&color=555)](https://github.com/rodygosset/react-foldkit/stargazers) |  | 2026-10-02 | React bindings that use Foldkit's Command, Message, Update, and Subscription vocabulary. |
| [react-foldkit-converter](https://github.com/birbprophet/react-foldkit-converter) | [![stars](https://img.shields.io/github/stars/birbprophet/react-foldkit-converter?style=flat-square&label=%E2%98%85&color=555)](https://github.com/birbprophet/react-foldkit-converter/stargazers) |  | 2026-09-04 | Converts React components to Foldkit views. |
| [storybook-renderer-foldkit](https://github.com/birbprophet/storybook-renderer-foldkit) | [![stars](https://img.shields.io/github/stars/birbprophet/storybook-renderer-foldkit?style=flat-square&label=%E2%98%85&color=555)](https://github.com/birbprophet/storybook-renderer-foldkit/stargazers) |  | 2026-09-17 | Storybook renderer that mounts the real Foldkit runtime per story. |
| [astro-renderer-foldkit](https://github.com/birbprophet/astro-renderer-foldkit) | [![stars](https://img.shields.io/github/stars/birbprophet/astro-renderer-foldkit?style=flat-square&label=%E2%98%85&color=555)](https://github.com/birbprophet/astro-renderer-foldkit/stargazers) |  | 2026-10-02 | Astro renderer for Foldkit views. |

## Apps built with Foldkit

Open source applications you can read to learn real patterns.

| Project | Stars | npm / month | Last push | What it does |
| --- | --- | --- | --- | --- |
| [slopcop](https://github.com/Effect-TS/slopcop) | [![stars](https://img.shields.io/github/stars/Effect-TS/slopcop?style=flat-square&label=%E2%98%85&color=555)](https://github.com/Effect-TS/slopcop/stargazers) |  | 2026-08-19 | Effect's GitHub triage bot, with a Foldkit UI and Foldkit agent skills. |
| [twitch-integrations](https://github.com/IMax153/twitch-integrations) | [![stars](https://img.shields.io/github/stars/IMax153/twitch-integrations?style=flat-square&label=%E2%98%85&color=555)](https://github.com/IMax153/twitch-integrations/stargazers) |  | 2026-10-01 | Twitch integrations built with Effect, with a broadcaster page as a Foldkit app. |
| [Dearly](https://github.com/SyahrulBhudiF/Dearly) | [![stars](https://img.shields.io/github/stars/SyahrulBhudiF/Dearly?style=flat-square&label=%E2%98%85&color=555)](https://github.com/SyahrulBhudiF/Dearly/stargazers) |  | 2026-09-03 | Private diary for dated memories on a freeform canvas. |
| [vscope](https://github.com/tomrford/vscope) | [![stars](https://img.shields.io/github/stars/tomrford/vscope?style=flat-square&label=%E2%98%85&color=555)](https://github.com/tomrford/vscope/stargazers) |  | 2026-08-19 | Local daemon and Foldkit UI for an embedded debug interface. |
| [skoreova](https://github.com/filipfalcon/skoreova) | [![stars](https://img.shields.io/github/stars/filipfalcon/skoreova?style=flat-square&label=%E2%98%85&color=555)](https://github.com/filipfalcon/skoreova/stargazers) |  | 2026-10-03 | Women's soccer in Czechia: clubs, players, fixtures, and charts. |
| [corefour](https://github.com/mwarger/corefour) | [![stars](https://img.shields.io/github/stars/mwarger/corefour?style=flat-square&label=%E2%98%85&color=555)](https://github.com/mwarger/corefour/stargazers) |  | 2026-10-01 | Pick four games that shaped you and share them as a poster, on Cloudflare Workers. |
| [agent-grilling](https://github.com/solcik/agent-grilling) | [![stars](https://img.shields.io/github/stars/solcik/agent-grilling?style=flat-square&label=%E2%98%85&color=555)](https://github.com/solcik/agent-grilling/stargazers) |  | 2026-10-02 | Local inbox where agents post decisions and you answer them in one browser panel. |
| [web-forth](https://github.com/arijit-gogoi/web-forth) | [![stars](https://img.shields.io/github/stars/arijit-gogoi/web-forth?style=flat-square&label=%E2%98%85&color=555)](https://github.com/arijit-gogoi/web-forth/stargazers) |  | 2026-07-14 | Forth VM with a Foldkit and CodeMirror REPL. |
| [booking_widget_effect](https://github.com/fellz/booking_widget_effect) | [![stars](https://img.shields.io/github/stars/fellz/booking_widget_effect?style=flat-square&label=%E2%98%85&color=555)](https://github.com/fellz/booking_widget_effect/stargazers) |  | 2026-06-19 | Hotel booking widget ported from Vue 3 to Foldkit, with an audit of state-modelling holes. |
| [pathfinder-armor-puzzle-solver](https://github.com/dearlordylord/pathfinder-armor-puzzle-solver) | [![stars](https://img.shields.io/github/stars/dearlordylord/pathfinder-armor-puzzle-solver?style=flat-square&label=%E2%98%85&color=555)](https://github.com/dearlordylord/pathfinder-armor-puzzle-solver/stargazers) |  | 2026-08-14 | Pathfinder armor puzzle solver. |
| [tic-tac-toe-4-in-a-row](https://github.com/jordangarrison/tic-tac-toe-4-in-a-row) | [![stars](https://img.shields.io/github/stars/jordangarrison/tic-tac-toe-4-in-a-row?style=flat-square&label=%E2%98%85&color=555)](https://github.com/jordangarrison/tic-tac-toe-4-in-a-row/stargazers) |  | 2026-09-25 | 8x8 exact-four scoring game. |
| [retort](https://github.com/roottool/retort) | [![stars](https://img.shields.io/github/stars/roottool/retort?style=flat-square&label=%E2%98%85&color=555)](https://github.com/roottool/retort/stargazers) |  | 2026-09-19 | Page that shows the infrastructure that serves it. |
| [foldkit-gallery](https://github.com/tao-io/foldkit-gallery) | [![stars](https://img.shields.io/github/stars/tao-io/foldkit-gallery?style=flat-square&label=%E2%98%85&color=555)](https://github.com/tao-io/foldkit-gallery/stargazers) |  | 2026-08-04 | Every @foldkit/ui component on its own page, with Model assertions. |
| [foldkit-learn](https://github.com/erlangxk/foldkit-learn) | [![stars](https://img.shields.io/github/stars/erlangxk/foldkit-learn?style=flat-square&label=%E2%98%85&color=555)](https://github.com/erlangxk/foldkit-learn/stargazers) |  | 2026-05-14 | Learning Foldkit with PixiJS. |

## Learning and community

Docs, examples, and places to ask questions.

| Project | Stars | npm / month | Last push | What it does |
| --- | --- | --- | --- | --- |
| [awesome-effect](https://github.com/Marve10s/awesome-effect) | [![stars](https://img.shields.io/github/stars/Marve10s/awesome-effect?style=flat-square&label=%E2%98%85&color=555)](https://github.com/Marve10s/awesome-effect/stargazers) |  | 2026-09-15 | Awesome list for the whole Effect ecosystem. |
| [Get started](https://foldkit.dev/get-started) |  |  |  | Official guide from install to first app. |
| [Example apps](https://foldkit.dev/example-apps) |  |  |  | Official examples, from a counter to multiplayer games, with source and a playground. |
| [Typing Terminal](https://typingterminal.com) |  |  |  | Multiplayer typing game by the Foldkit author; its source is in the Foldkit repo. |
| [Discord](https://discord.gg/kav8VNxqGm) |  |  |  | Official Foldkit Discord server. |
| [Elm Discourse thread](https://discourse.elm-lang.org/t/foldkit-the-elm-architecture-in-typescript-powered-by-effect/10579) |  |  |  | Foldkit introduced to the Elm community. |

## How this list stays current

- Badges come from [shields.io](https://shields.io) and show the live star and download counts.
- [`build.yml`](.github/workflows/build.yml) runs every day. It reads GitHub and npm, sorts each section by stars, marks archived projects and projects with no commits for 180 days, and commits the new README.
- [`discover.yml`](.github/workflows/discover.yml) runs every week. It searches GitHub and npm for new Foldkit projects and lists the ones that are not here yet in an issue.

<sub>Total stars across listed repositories at last build: 3089.</sub>
