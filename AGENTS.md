# AGENTS.md

This file provides guidance to AI coding agents when working with code in this
repository.

Static Astro site for `cccp.ps` — one landing page fronting a go2rtc livestream, deployed
to GitHub Pages. Bun is the package manager and task runner (`bun.lock`; CI uses
`oven-sh/setup-bun`). No adapter is configured, so everything prerenders at build time.

## Commands

- `bun install`, `bun run dev`, `bun run build`, `bun run preview`
- `bun run check` — `astro check`. The only structural gate in the repo, but it does **not**
  cover `scripts/`: `tsconfig.json` excludes that directory.
- `bunx tsc -p tsconfig.scripts.json --noEmit` — typechecks `scripts/` (Node types).
- `bun run scripts/capture-livestream.ts` — requires `ffmpeg` on `PATH`; point it elsewhere
  with `WS_URL=...`.

There is no test runner and no `test` script. If a change needs verification, use
`bun run check` plus `bun run build` rather than introducing a test stack.

No linter is configured either. The `biome-ignore` comments in `.astro` frontmatter are
vestigial — leave them in place, and don't try to run Biome or add a config for it.

## The livestream image is a build artifact, not source

`public/livestream.jpg` is gitignored (the bare `livestream.jpg` pattern matches at any
depth) and must never be committed. The pipeline:

1. `.github/workflows/capture-livestream.yml` runs every 15 min, executes
   `scripts/capture-livestream.ts`, and uploads the frame to the GitHub release tagged
   `livestream` via `gh release upload --clobber`.
2. `.github/workflows/deploy.yml` runs `gh release download livestream` into `./public/`
   before `bun run build`.

So a local `bun run build` produces a site with no `/livestream.jpg`. That is expected —
`src/components/LivePreview.astro` falls back at runtime to the release asset URL and shows
the `NO SIGNAL` overlay if that also fails. Don't "fix" the missing file by committing one.

`LivePreview.astro` hardcodes `cccp-ps/cccp-web` in both the release-download URL and the
`api.github.com` metadata URL. A fork or rename must update both constants.

The capture script writes `livestream.jpg` into the **current working directory**, so run it
from the repo root. It fails deliberately if the output is under 2 KB (corrupt/gray frame).

## Theme colors are defined in two places

`uno.config.ts` holds both halves and they must be edited together:

- the `supabaseThemeCss` preflight string — the actual `--var` values under `:root` and `.dark`
- the `theme.colors` map — the `var(--x)` aliases that make `bg-*`/`text-*` utilities resolve

Adding a color to only one of them silently produces a utility class that emits nothing.

Dark mode is not toggleable: `<html lang="en" class="dark">` is hardcoded in
`src/layouts/Layout.astro`. UnoCSS uses `presetWind4` with its reset preflight enabled, and
`Layout.astro` layers a second global reset plus the vignette/film-grain `body::before` /
`body::after` overlays (`z-index` 1 and 2 — page content sits at `z-[3]` and above).

## Framework boundaries

`astro.config.mjs` registers the Svelte integration only, and `src/` contains no islands at
all — all four files are `.astro`. Svelte is kept on purpose even while unused: Svelte 5 is
the sanctioned island framework for this stack, so the first island should be a `.svelte`
file and needs no config change.

The SolidJS integration was registered alongside it until it was removed; the repo never held
a Solid component, and Solid is out of scope for this stack. `tsconfig.json` therefore no
longer sets `jsx`/`jsxImportSource`, and a `.tsx` file is now wired to no renderer at all —
don't add one without first choosing a renderer and configuring it.

## CI and deploy

- Push to `main` deploys to GitHub Pages with `cname: cccp.ps`. A commit message containing
  `[skip ci]` skips the deploy job entirely.
- `immortality.yml` requires a `PERSONAL_TOKEN` secret (the default `GITHUB_TOKEN` won't do)
  and runs `gh-workflow-immortality.sh`, which is vendored MIT third-party code (v1.1.1).
  Update it by replacing the file wholesale from upstream, not by hand-editing. Note the repo
  LICENSE is AGPL-3.0; that one script keeps its own MIT header.
- `renovate.json` sets `automerge: true` with `ignoreTests: true` for every update type,
  including majors — dependency bumps land on `main` unreviewed and trigger a deploy.

## Reference rules

- `.agents/rules/astro-dev-pro.md` — 750-line playbook for Astro / Bun / UnoCSS / Svelte 5 /
  Solid: hydration directives, framework boundaries, Astro Actions vs endpoints, UnoCSS
  static-extraction safety, `astro:env` usage. Read the relevant section before adding an
  island, a route, an API endpoint, or new UnoCSS patterns. It is the source of truth for
  those conventions; this file does not restate them. Its SolidJS sections are the one
  exception — Solid is no longer part of this repo, so treat that guidance as inapplicable.
