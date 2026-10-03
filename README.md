# Awesome Foldkit [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A list of projects, tools, and apps around [Foldkit](https://foldkit.dev), the TypeScript frontend framework built on [Effect](https://effect.website) with the Elm Architecture.

66 projects. Star and download badges load live. A GitHub Action re-sorts each section by stars and flags archived or inactive projects every day. Last build: 2026-10-03.

Not official. Maintained by the community. To add a project, edit [`data/projects.toml`](data/projects.toml) and open a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Contents

- [Official](#official)
- [Official examples](#official-examples)
- [Full stack and deployment](#full-stack-and-deployment)
- [UI kits and styling](#ui-kits-and-styling)
- [AI and agents](#ai-and-agents)
- [Interop and tooling](#interop-and-tooling)
- [Apps built with Foldkit](#apps-built-with-foldkit)
- [Learning and community](#learning-and-community)

## Official

Packages published from the main Foldkit repository.

- **[Foldkit](https://foldkit.dev)** [![GitHub stars](https://img.shields.io/github/stars/foldkit/foldkit?style=social)](https://github.com/foldkit/foldkit/stargazers) [![npm downloads](https://img.shields.io/npm/dm/foldkit?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/foldkit)<br>TypeScript frontend framework on Effect with the Elm Architecture: one Model, a Message union, a pure update, and Commands for side effects.
- **[@foldkit/vite-plugin](https://www.npmjs.com/package/@foldkit/vite-plugin)** [![npm downloads](https://img.shields.io/npm/dm/@foldkit/vite-plugin?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/@foldkit/vite-plugin)<br>Vite plugin with state-preserving live reload, view identity, and server rendering in dev.
- **[@foldkit/devtools-mcp](https://foldkit.dev/ai/mcp)** [![npm downloads](https://img.shields.io/npm/dm/@foldkit/devtools-mcp?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/@foldkit/devtools-mcp)<br>MCP server that lets coding agents read the Model, dispatch Messages, and time travel in a running app.
- **[@foldkit/ui](https://foldkit.dev/ui/overview)** [![npm downloads](https://img.shields.io/npm/dm/@foldkit/ui?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/@foldkit/ui)<br>Headless, accessible UI components (Dialog, Menu, Listbox, Combobox, Popover, Calendar, and more) built as Submodels.
- **[@foldkit/devtools](https://www.npmjs.com/package/@foldkit/devtools)** [![npm downloads](https://img.shields.io/npm/dm/@foldkit/devtools?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/@foldkit/devtools)<br>In-browser DevTools overlay with Message history and time travel.
- **[@foldkit/oxlint-plugin](https://www.npmjs.com/package/@foldkit/oxlint-plugin)** [![npm downloads](https://img.shields.io/npm/dm/@foldkit/oxlint-plugin?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/@foldkit/oxlint-plugin)<br>Oxlint rules for Foldkit conventions.
- **[create-foldkit-app](https://www.npmjs.com/package/create-foldkit-app)** [![npm downloads](https://img.shields.io/npm/dm/create-foldkit-app?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/create-foldkit-app)<br>Scaffold a new Foldkit app.
- **[@foldkit/markdown](https://www.npmjs.com/package/@foldkit/markdown)** [![npm downloads](https://img.shields.io/npm/dm/@foldkit/markdown?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/@foldkit/markdown)<br>Write Markdown files and get Foldkit views with live islands.

## Official examples

Apps and examples from the Foldkit maintainers.

- **[coverchart](https://github.com/foldkit/coverchart)** [![GitHub stars](https://img.shields.io/github/stars/foldkit/coverchart?style=social)](https://github.com/foldkit/coverchart/stargazers)<br>App for writing chord charts with lyrics.
- **[patch-match](https://github.com/foldkit/patch-match)** [![GitHub stars](https://img.shields.io/github/stars/foldkit/patch-match?style=social)](https://github.com/foldkit/patch-match/stargazers)<br>Game: match the patch.
- **[Example apps](https://foldkit.dev/example-apps)**<br>Official examples, from a counter to multiplayer games, with source and a playground.
- **[Typing Terminal](https://typingterminal.com)**<br>Multiplayer typing game; its source is in the Foldkit repo under packages/typing-game.

## Full stack and deployment

Backends, hosting, and starters around a Foldkit frontend.

- **[Alchemy examples](https://github.com/alchemy-run/alchemy/tree/main/examples)** [![GitHub stars](https://img.shields.io/github/stars/alchemy-run/alchemy?style=social)](https://github.com/alchemy-run/alchemy/stargazers)<br>Infrastructure as Effect code, with Foldkit examples for Cloudflare (static and SSR), AWS, Fly, Hetzner, Railway, Neon, and Prisma.
- **[Confect (@confect/foldkit)](https://github.com/rjdellecese/confect)** [![GitHub stars](https://img.shields.io/github/stars/rjdellecese/confect?style=social)](https://github.com/rjdellecese/confect/stargazers) [![npm downloads](https://img.shields.io/npm/dm/@confect/foldkit?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/@confect/foldkit)<br>Convex with Effect, with client bindings for Foldkit apps.
- **[foldkit-alchemy-starter](https://github.com/NolanGC/foldkit-alchemy-starter)** [![GitHub stars](https://img.shields.io/github/stars/NolanGC/foldkit-alchemy-starter?style=social)](https://github.com/NolanGC/foldkit-alchemy-starter/stargazers)<br>Starter for full-stack apps with Foldkit and Alchemy.
- **[stack-effect](https://github.com/lloydrichards/stack-effect)** [![GitHub stars](https://img.shields.io/github/stars/lloydrichards/stack-effect?style=social)](https://github.com/lloydrichards/stack-effect/stargazers)<br>Scaffolds Effect apps from composable modules, with a Foldkit client module.
- **[foldkit-convex-clerk-lab](https://github.com/mwarger/foldkit-convex-clerk-lab)** [![GitHub stars](https://img.shields.io/github/stars/mwarger/foldkit-convex-clerk-lab?style=social)](https://github.com/mwarger/foldkit-convex-clerk-lab/stargazers)<br>Architecture lab for Foldkit with Convex, Clerk, and Confect.
- **[create-foldkit-alchemy-app](https://www.npmjs.com/package/create-foldkit-alchemy-app)** [![npm downloads](https://img.shields.io/npm/dm/create-foldkit-alchemy-app?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/create-foldkit-alchemy-app)<br>Scaffolds a Foldkit, Alchemy, and Cloudflare full-stack app.
- **[nook](https://github.com/elianiva/nook)** [![GitHub stars](https://img.shields.io/github/stars/elianiva/nook?style=social)](https://github.com/elianiva/nook/stargazers)<br>Monorepo template with a Foldkit frontend, Effect RPC backend, Cloudflare KV state, and Alchemy infrastructure.
- **[zero-foldkit](https://github.com/Potti1234/zero-foldkit)** [![GitHub stars](https://img.shields.io/github/stars/Potti1234/zero-foldkit?style=social)](https://github.com/Potti1234/zero-foldkit/stargazers)<br>Rocicorp Zero sync engine bindings for Foldkit.

## UI kits and styling

Components, styling systems, and icons. Several kits follow the shadcn/ui copy-in model.

- **[foldcn](https://github.com/elianiva/foldcn)** [![GitHub stars](https://img.shields.io/github/stars/elianiva/foldcn?style=social)](https://github.com/elianiva/foldcn/stargazers)<br>shadcn/ui components ported to Foldkit.
- **[foldworks](https://github.com/bjacobso/foldworks)** [![GitHub stars](https://img.shields.io/github/stars/bjacobso/foldworks?style=social)](https://github.com/bjacobso/foldworks/stargazers) [![npm downloads](https://img.shields.io/npm/dm/@foldworks/ui?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/@foldworks/ui)<br>Themeable components, a data grid, and a form builder for Foldkit, styled with StyleX.
- **[foldstylex](https://github.com/boozedog/foldstylex)** [![GitHub stars](https://img.shields.io/github/stars/boozedog/foldstylex?style=social)](https://github.com/boozedog/foldstylex/stargazers)<br>shadcn-inspired styling for Foldkit with StyleX.
- **[foldstryx](https://github.com/boozedog/foldstryx)** [![GitHub stars](https://img.shields.io/github/stars/boozedog/foldstryx?style=social)](https://github.com/boozedog/foldstryx/stargazers) [![npm downloads](https://img.shields.io/npm/dm/@foldstryx/foldkit?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/@foldstryx/foldkit)<br>Astryx-inspired styling for Foldkit with StyleX.
- **[classy-foldkit](https://github.com/djgrant/classy)** [![GitHub stars](https://img.shields.io/github/stars/djgrant/classy?style=social)](https://github.com/djgrant/classy/stargazers) [![npm downloads](https://img.shields.io/npm/dm/@djgrant/classy-foldkit?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/@djgrant/classy-foldkit)<br>Typed component factories with CSS classes for Foldkit views.
- **[foldkit-extras](https://github.com/oleksandr-antonenko/foldkit-extras)** [![GitHub stars](https://img.shields.io/github/stars/oleksandr-antonenko/foldkit-extras?style=social)](https://github.com/oleksandr-antonenko/foldkit-extras/stargazers) [![npm downloads](https://img.shields.io/npm/dm/foldkit-command-palette?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/foldkit-command-palette)<br>Command palette, time-grid scheduler, and grouped side navigation components.
- **[foldkit-viz](https://github.com/opsydyn/fold-kit-experiments)** [![GitHub stars](https://img.shields.io/github/stars/opsydyn/fold-kit-experiments?style=social)](https://github.com/opsydyn/fold-kit-experiments/stargazers) [![npm downloads](https://img.shields.io/npm/dm/@opsydyn/foldkit-viz?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/@opsydyn/foldkit-viz)<br>Chart and visualization primitives for Foldkit without D3.
- **[foldkit-lucide-icons](https://github.com/Potti1234/foldkit-lucide-icons)** [![GitHub stars](https://img.shields.io/github/stars/Potti1234/foldkit-lucide-icons?style=social)](https://github.com/Potti1234/foldkit-lucide-icons/stargazers) [![npm downloads](https://img.shields.io/npm/dm/foldkit-lucide-icons?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/foldkit-lucide-icons)<br>Lucide icons as Foldkit views.
- **[foldui](https://github.com/peterje/foldui)** [![GitHub stars](https://img.shields.io/github/stars/peterje/foldui?style=social)](https://github.com/peterje/foldui/stargazers)<br>Foldkit-native UI registry.
- **[shadcn-ui-foldkit](https://github.com/birbprophet/shadcn-ui-foldkit)** [![GitHub stars](https://img.shields.io/github/stars/birbprophet/shadcn-ui-foldkit?style=social)](https://github.com/birbprophet/shadcn-ui-foldkit/stargazers)<br>shadcn/ui port for Foldkit.
- **[untitled-ui-foldkit](https://github.com/birbprophet/untitled-ui-foldkit)** [![GitHub stars](https://img.shields.io/github/stars/birbprophet/untitled-ui-foldkit?style=social)](https://github.com/birbprophet/untitled-ui-foldkit/stargazers)<br>Untitled UI port for Foldkit.
- **[boneyard-foldkit](https://github.com/birbprophet/boneyard-foldkit)** [![GitHub stars](https://img.shields.io/github/stars/birbprophet/boneyard-foldkit?style=social)](https://github.com/birbprophet/boneyard-foldkit/stargazers)<br>Responsive skeleton loaders for Foldkit views.
- **[foldkit-shadcn](https://github.com/MentalGear/foldkit-shadcn)** [![GitHub stars](https://img.shields.io/github/stars/MentalGear/foldkit-shadcn?style=social)](https://github.com/MentalGear/foldkit-shadcn/stargazers)<br>shadcn/ui port for Foldkit.
- **[foldkit-icons](https://github.com/skoshx/foldkit-icons)** [![GitHub stars](https://img.shields.io/github/stars/skoshx/foldkit-icons?style=social)](https://github.com/skoshx/foldkit-icons/stargazers)<br>Icon views for Foldkit.

## AI and agents

Tools that give coding agents or in-app agents access to a Foldkit app.

- **[foldkit-plus](https://github.com/doeixd/foldkit-plus)** [![GitHub stars](https://img.shields.io/github/stars/doeixd/foldkit-plus?style=social)](https://github.com/doeixd/foldkit-plus/stargazers) [![npm downloads](https://img.shields.io/npm/dm/foldkit-agent?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/foldkit-agent)<br>Exposes a Foldkit app's Model and Messages to agents through WebMCP, MCP, and A2A, plus forms, CRUD, sync, and server rendering packages.
- **[foldcase](https://github.com/tao-io/foldcase)** [![GitHub stars](https://img.shields.io/github/stars/tao-io/foldcase?style=social)](https://github.com/tao-io/foldcase/stargazers)<br>Headless test loop for Foldkit components with Schema reports and an MCP catalog for coding agents.
- **[scraped-docs-foldkit](https://github.com/mpsuesser/scraped-docs-foldkit)** [![GitHub stars](https://img.shields.io/github/stars/mpsuesser/scraped-docs-foldkit?style=social)](https://github.com/mpsuesser/scraped-docs-foldkit/stargazers)<br>Foldkit docs as Markdown, refreshed automatically, for agent context.
- **[creasekit](https://github.com/dallenpyrah/creasekit)** [![GitHub stars](https://img.shields.io/github/stars/dallenpyrah/creasekit?style=social)](https://github.com/dallenpyrah/creasekit/stargazers) [![npm downloads](https://img.shields.io/npm/dm/creasekit?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/creasekit)<br>Inspect elements, leave notes, and share that context with coding agents through MCP.
- **[effect-webmcp](https://github.com/deracs/effect-webmcp)** [![GitHub stars](https://img.shields.io/github/stars/deracs/effect-webmcp?style=social)](https://github.com/deracs/effect-webmcp/stargazers) [![npm downloads](https://img.shields.io/npm/dm/effect-webmcp?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/effect-webmcp)<br>Effect tools and layers for the WebMCP browser API, usable from Foldkit Commands.
- **[foldkit-design](https://github.com/tao-io/foldkit-design)** [![GitHub stars](https://img.shields.io/github/stars/tao-io/foldkit-design?style=social)](https://github.com/tao-io/foldkit-design/stargazers)<br>Claude Design template and Claude Code skill for prototyping Foldkit apps.

## Interop and tooling

Bridges to React, Astro, and Storybook, plus developer tools.

- **[foldocs](https://github.com/Aniket-508/foldocs)** [![GitHub stars](https://img.shields.io/github/stars/Aniket-508/foldocs?style=social)](https://github.com/Aniket-508/foldocs/stargazers) [![npm downloads](https://img.shields.io/npm/dm/foldocs?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/foldocs)<br>Documentation site framework built on Foldkit.
- **[wide-effect](https://github.com/Potti1234/wide-effect)** [![GitHub stars](https://img.shields.io/github/stars/Potti1234/wide-effect?style=social)](https://github.com/Potti1234/wide-effect/stargazers) [![npm downloads](https://img.shields.io/npm/dm/@wide-effect/foldkit?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/@wide-effect/foldkit)<br>Interaction correlation and sanitized diagnostic timelines for Foldkit.
- **[causeeffect (foldkit-jsx)](https://github.com/crutchcorn/causeeffect)** [![GitHub stars](https://img.shields.io/github/stars/crutchcorn/causeeffect?style=social)](https://github.com/crutchcorn/causeeffect/stargazers) [![npm downloads](https://img.shields.io/npm/dm/@causeeffect/foldkit-jsx?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/@causeeffect/foldkit-jsx)<br>JSX for Effect, with a JSX adapter for Foldkit's typed view builders.
- **[@opsydyn/astro-foldkit](https://github.com/opsydyn/fold-kit-experiments)** [![npm downloads](https://img.shields.io/npm/dm/@opsydyn/astro-foldkit?style=flat&label=npm&color=cb3837)](https://www.npmjs.com/package/@opsydyn/astro-foldkit)<br>Astro integration and renderer for Foldkit.
- **[react-foldkit](https://github.com/rodygosset/react-foldkit)** [![GitHub stars](https://img.shields.io/github/stars/rodygosset/react-foldkit?style=social)](https://github.com/rodygosset/react-foldkit/stargazers)<br>React bindings that use Foldkit's Command, Message, Update, and Subscription vocabulary.
- **[react-foldkit-converter](https://github.com/birbprophet/react-foldkit-converter)** [![GitHub stars](https://img.shields.io/github/stars/birbprophet/react-foldkit-converter?style=social)](https://github.com/birbprophet/react-foldkit-converter/stargazers)<br>Converts React components to Foldkit views.
- **[storybook-renderer-foldkit](https://github.com/birbprophet/storybook-renderer-foldkit)** [![GitHub stars](https://img.shields.io/github/stars/birbprophet/storybook-renderer-foldkit?style=social)](https://github.com/birbprophet/storybook-renderer-foldkit/stargazers)<br>Storybook renderer that mounts the real Foldkit runtime per story.
- **[astro-renderer-foldkit](https://github.com/birbprophet/astro-renderer-foldkit)** [![GitHub stars](https://img.shields.io/github/stars/birbprophet/astro-renderer-foldkit?style=social)](https://github.com/birbprophet/astro-renderer-foldkit/stargazers)<br>Astro renderer for Foldkit views.

## Apps built with Foldkit

Open source applications you can read to learn real patterns.

- **[slopcop](https://github.com/Effect-TS/slopcop)** [![GitHub stars](https://img.shields.io/github/stars/Effect-TS/slopcop?style=social)](https://github.com/Effect-TS/slopcop/stargazers)<br>Effect's GitHub triage bot, with a Foldkit UI and Foldkit agent skills.
- **[twitch-integrations](https://github.com/IMax153/twitch-integrations)** [![GitHub stars](https://img.shields.io/github/stars/IMax153/twitch-integrations?style=social)](https://github.com/IMax153/twitch-integrations/stargazers)<br>Twitch integrations built with Effect, with a broadcaster page as a Foldkit app.
- **[Dearly](https://github.com/SyahrulBhudiF/Dearly)** [![GitHub stars](https://img.shields.io/github/stars/SyahrulBhudiF/Dearly?style=social)](https://github.com/SyahrulBhudiF/Dearly/stargazers)<br>Private diary for dated memories on a freeform canvas.
- **[vscope](https://github.com/tomrford/vscope)** [![GitHub stars](https://img.shields.io/github/stars/tomrford/vscope?style=social)](https://github.com/tomrford/vscope/stargazers)<br>Local daemon and Foldkit UI for an embedded debug interface.
- **[skoreova](https://github.com/filipfalcon/skoreova)** [![GitHub stars](https://img.shields.io/github/stars/filipfalcon/skoreova?style=social)](https://github.com/filipfalcon/skoreova/stargazers)<br>Women's soccer in Czechia: clubs, players, fixtures, and charts.
- **[corefour](https://github.com/mwarger/corefour)** [![GitHub stars](https://img.shields.io/github/stars/mwarger/corefour?style=social)](https://github.com/mwarger/corefour/stargazers)<br>Pick four games that shaped you and share them as a poster, on Cloudflare Workers.
- **[agent-grilling](https://github.com/solcik/agent-grilling)** [![GitHub stars](https://img.shields.io/github/stars/solcik/agent-grilling?style=social)](https://github.com/solcik/agent-grilling/stargazers)<br>Local inbox where agents post decisions and you answer them in one browser panel.
- **[web-forth](https://github.com/arijit-gogoi/web-forth)** [![GitHub stars](https://img.shields.io/github/stars/arijit-gogoi/web-forth?style=social)](https://github.com/arijit-gogoi/web-forth/stargazers)<br>Forth VM with a Foldkit and CodeMirror REPL.
- **[booking_widget_effect](https://github.com/fellz/booking_widget_effect)** [![GitHub stars](https://img.shields.io/github/stars/fellz/booking_widget_effect?style=social)](https://github.com/fellz/booking_widget_effect/stargazers)<br>Hotel booking widget ported from Vue 3 to Foldkit, with an audit of state-modelling holes.
- **[pathfinder-armor-puzzle-solver](https://github.com/dearlordylord/pathfinder-armor-puzzle-solver)** [![GitHub stars](https://img.shields.io/github/stars/dearlordylord/pathfinder-armor-puzzle-solver?style=social)](https://github.com/dearlordylord/pathfinder-armor-puzzle-solver/stargazers)<br>Pathfinder armor puzzle solver.
- **[tic-tac-toe-4-in-a-row](https://github.com/jordangarrison/tic-tac-toe-4-in-a-row)** [![GitHub stars](https://img.shields.io/github/stars/jordangarrison/tic-tac-toe-4-in-a-row?style=social)](https://github.com/jordangarrison/tic-tac-toe-4-in-a-row/stargazers)<br>8x8 exact-four scoring game.
- **[retort](https://github.com/roottool/retort)** [![GitHub stars](https://img.shields.io/github/stars/roottool/retort?style=social)](https://github.com/roottool/retort/stargazers)<br>Page that shows the infrastructure that serves it.
- **[foldkit-gallery](https://github.com/tao-io/foldkit-gallery)** [![GitHub stars](https://img.shields.io/github/stars/tao-io/foldkit-gallery?style=social)](https://github.com/tao-io/foldkit-gallery/stargazers)<br>Every @foldkit/ui component on its own page, with Model assertions.
- **[foldkit-learn](https://github.com/erlangxk/foldkit-learn)** [![GitHub stars](https://img.shields.io/github/stars/erlangxk/foldkit-learn?style=social)](https://github.com/erlangxk/foldkit-learn/stargazers)<br>Learning Foldkit with PixiJS.

## Learning and community

Docs, examples, and places to ask questions.

- **[awesome-effect](https://github.com/Marve10s/awesome-effect)** [![GitHub stars](https://img.shields.io/github/stars/Marve10s/awesome-effect?style=social)](https://github.com/Marve10s/awesome-effect/stargazers)<br>Awesome list for the whole Effect ecosystem.
- **[Get started](https://foldkit.dev/get-started)**<br>Official guide from install to first app.
- **[Discord](https://discord.gg/kav8VNxqGm)**<br>Official Foldkit Discord server.
- **[Elm Discourse thread](https://discourse.elm-lang.org/t/foldkit-the-elm-architecture-in-typescript-powered-by-effect/10579)**<br>Foldkit introduced to the Elm community.

## How this list stays current

- Badges come from [shields.io](https://shields.io) and show the live star and download counts.
- [`build.yml`](.github/workflows/build.yml) runs every day. It reads GitHub and npm, sorts each section by stars, flags archived projects and projects with no commits for 180 days, and commits the new README.
- [`discover.yml`](.github/workflows/discover.yml) runs every week. It searches GitHub and npm for new Foldkit projects and lists the ones that are not here yet in an issue.

<sub>Total stars across listed repositories at last build: 3089.</sub>
