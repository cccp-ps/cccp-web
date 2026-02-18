# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `bun install` — install dependencies (uses Bun, not npm/yarn)
- `bun run dev` — start dev server
- `bun run build` — production build
- `bun run preview` — preview production build locally

No linting or test framework is configured.

## Architecture

Static maintenance landing page for **cccp.ps**, built with **Astro 5** and deployed to **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`). The custom domain `cccp.ps` is set via CNAME in the deploy workflow.

Single page: `src/pages/index.astro` — contains all markup, scoped styles, and an inline `<script is:inline>` countdown timer. No component library, no client-side framework.

## Styling

- **Scoped CSS** inside `<style>` tags in Astro components
- **Dark theme**: background `#0a0a0b`, text `#e8e6e3`, accent red `#c9434d`
- **Fonts**: JetBrains Mono (body), Bebas Neue (headings) — loaded from Google Fonts
- **Fluid typography** via `clamp()`
- **Animations**: float, fade-up, pulse-dot, glow-pulse keyframes; respects `prefers-reduced-motion`
- **Visual overlays**: vignette (radial gradient) and film grain texture

## Conventions

- Vanilla JS only (no React/Vue/etc.) — Astro is used purely as a static site generator
- Accessibility: semantic HTML, ARIA attributes (`role="timer"`, `aria-live="polite"`), `aria-hidden` on decorative elements, `rel="noopener noreferrer"` on external links
- External links open in new tabs with proper security attributes
