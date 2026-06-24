# Yusep Zazuli — Portfolio

Personal portfolio site for Yusep Muhamad Zazuli, an AI-Native Crawling Specialist. Built with React, TypeScript, and Vite — a single-page site with a tabbed case-study page per project (Overview, Architecture, Pipeline, Components, Reliability, Tech Stack).

## Stack

- React 19 + TypeScript
- React Router (client-side routing for `/projects/:slug` case-study pages)
- Vite 8
- Plain CSS (no framework), decorative SVGs hand-drawn inline per project

## Requirements

Node.js **≥ 20.19** or **≥ 22.12** (Vite 8 requirement). An `.nvmrc` is included.

```bash
nvm use
npm install
```

## Development

```bash
npm run dev      # start dev server with HMR
npm run build    # type-check (tsc -b) + production build
npm run preview  # preview the production build locally
npm run lint      # oxlint
```

## Project structure

```
src/
  data/content.ts          — all project content (metrics, architecture, pipeline steps, etc.)
  data/projectLookup.ts    — flattens project data into one lookup by slug
  components/              — homepage sections (Hero, Stack, Work, Projects, Contact, ...)
  components/detail/       — the 6 tab panels used on each project's case-study page
  components/ProjectVisuals.tsx — decorative inline SVGs, one per project
  pages/Home.tsx           — assembles the homepage
  pages/ProjectDetail.tsx  — tabbed case-study page shell
  index.css                — all styles
```

## Adding a new project

Project content lives entirely in `src/data/content.ts` as plain data — no new components are needed for a new case study. Each project needs:

1. A `ProjectVisualKey` entry and a matching SVG in `components/ProjectVisuals.tsx`
2. An entry in `projects` (big card) or `smallProjects` (small card) with `metrics`, `layers`, `pipelineTracks`, `components`, `challenges`, `techGroups`, and `results`
3. The new SVG registered in the `visualMap` in **both** `components/Projects.tsx` and `pages/ProjectDetail.tsx`

See `CLAUDE.md` in the parent directory for the full workflow and conventions used so far.
