# Development checks

Run `bun install --frozen-lockfile` and `bun run ci` locally. Every PR and default
branch push runs the same Astro check, scripts TypeScript check, and production
build through the versioned shared Bun workflow. `ci / required` accepts only
successful completion of every prerequisite.

TypeScript stays below 7 while the installed Astro language server depends on the
JavaScript compiler API. TypeScript 7.0.2 made `astro check` crash while reading
`fileExists`; TypeScript 6.0.3 restores the check. Reassess this constraint when
Astro's checker supports the new compiler.

This small static site has no test runner, formatter, or linter configured. CI
does not invent those tools. There are currently no Svelte components to check;
add component type checking when islands are introduced. Live-stream capture
requires the external service and FFmpeg and remains scheduled separately. A
local build intentionally has no captured livestream image.

Renovate inherits versioned same-account presets. They request CI-checked merges
for eligible updates; dependency service access and merge handling are separate
configuration. Major updates and pre-1.0 compatibility changes follow the preset
dashboard/manual policy. Actions use full version tags. Deployment and capture
keep their existing release/Pages outputs; neither writes the source branch.
