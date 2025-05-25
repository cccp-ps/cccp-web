# AI Prompt: Astro Time Tracker with Palestinian Solidarity Theme

## Project Context
I have an existing Astro project that I've already set up with:
1. `npm create astro@latest` (basic/minimal setup)
2. `npx astro add tailwind` (TailwindCSS v4 added)

## Project Objective
Create a single-page "time since" tracker website with Communist/Socialist aesthetics and Palestinian solidarity themes, displaying a timeline of major events after October 7, 2023, in the Israel-Gaza conflict with live counters.

## Files to Modify/Create
- Update `src/pages/index.astro` as the main page
- Ensure `src/styles/global.css` has the proper TailwindCSS import
- Make sure global.css is imported in the layout/page
- Ensure the site works as a static build (suitable for GitHub Pages/Netlify)

## Timeline Data Requirements
**MUST use these exact UNIX timestamps:**

### Event 1: October 7, 2023 – Hamas Attack on Israel
- **DateTime:** 2023-10-07 03:30 UTC
- **UNIX:** 1696656600

### Event 2: October 27, 2023 – Israel Ground Invasion
- **DateTime:** 2023-10-27 19:00 UTC
- **UNIX:** 1698434400

### Event 3: November 24, 2023 – First Major Ceasefire Begins
- **DateTime:** 2023-11-24 05:00 UTC
- **UNIX:** 1700805600

### Event 4: December 1, 2023 – First Ceasefire Ends
- **DateTime:** 2023-12-01 05:00 UTC
- **UNIX:** 1701403200

### Event 5: January 19, 2025 – Ceasefire Agreement
- **DateTime:** 2025-01-19 00:00 UTC
- **UNIX:** 1737244800

### Event 6: March 18, 2025 – Ceasefire Collapses
- **DateTime:** 2025-03-18 00:00 UTC
- **UNIX:** 1742256000

## Content & Functionality Requirements
Each event must display:
- Event title and description
- Date/time in UTC format
- UNIX timestamp (exact values provided above)
- Live counter showing seconds, minutes, hours, days, months, and years since the event
- Additional context notes where relevant

## Design Requirements

### Visual Style
- **Communist/Socialist aesthetics:** bold reds, blacks, whites
- **Strong geometric shapes** and propaganda poster influences
- **Clear, impactful typography**
- **Palestinian flag colors:** red, green, black, white
- **Subtle Palestinian motifs:** keffiyeh patterns, olive branches, doves

### Layout Structure
- Single scrollable page, fully responsive
- Each event in a visually distinct card/block
- Summary table at the bottom with all events
- Solemn, respectful, and informative tone

### Notes for TailwindCSS v4 with Astro:

#### Add Tailwind 4

In Astro `>=5.2.0`, use the `astro add tailwind` command for your package manager to install the official Vite Tailwind plugin. To add Tailwind 4 support to earlier versions of Astro, follow the instructions in the Tailwind docs to add the `@tailwindcss/vite` Vite plugin manually.

```shell
npx astro add tailwind
```

Then, import `tailwindcss` into `src/styles/global.css` (or another CSS file of your choosing) to make Tailwind classes available to your Astro project. This file including the import will be created by default if you used the `astro add tailwind` command to install the Vite plugin.

```css
/* src/styles/global.css */
@import "tailwindcss";
```

Import this file in the pages where you want Tailwind to apply. This is often done in a layout component so that Tailwind styles can be used on all pages sharing that layout:

```astro
/* src/layouts/Layout.astro */
---
import "../styles/global.css";
---
```

## Technical Implementation Requirements

### Core Technologies
- Use TailwindCSS v4 classes for all styling
- JavaScript for live counters that update every second
- All timestamps calculated from the provided UNIX values
- No external dependencies beyond existing Astro + TailwindCSS setup

### Responsive Design
- Ensure proper mobile responsiveness
- Desktop and mobile compatibility
- Clean, accessible design that works on all devices

### Static Site Compatibility
- Must work as a static build
- Suitable for GitHub Pages/Netlify hosting
- No backend or server-side dependencies

## Key Features & Themes

### Functionality
- Real-time counters showing elapsed time since each event
- Emphasis on ceasefire fragility and humanitarian context
- Live updates every second for all time counters

### Content Perspective
- Pro-Palestinian perspective while maintaining factual accuracy
- Solidarity-focused messaging
- Respectful, informative tone (not sensationalist)
- Clear accessibility and readable language

## Deliverables
Provide the complete code for all files that need to be modified or created, ensuring the project builds and runs as a static site. Include:
- Complete `src/pages/index.astro` file
- Any necessary updates to `src/styles/global.css`
- Any additional layout files if needed
- Ensure all functionality works with the existing Astro + TailwindCSS v4 setup
