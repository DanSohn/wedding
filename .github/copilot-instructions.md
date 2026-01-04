# copilot-instructions.md

Purpose

- Short, actionable guide for AI contributors to be productive quickly in this repo.

Quick Start (important commands)

- dev: `npm run dev` — runs Vite dev server (HMR at http://localhost:5173)
- build: `npm run build` — runs `tsc -b` (type-checked build) then `vite build` (production bundle)
- lint: `npm run lint` — run ESLint (`eslint.config.js` controls rules)
- preview: `npm run preview` — serve production build locally with Vite

Big picture & architecture

- Single-page React app (Vite + TypeScript + Mantine UI).
- Routing: central `src/router.tsx` defines a `routes` array (map -> `<Route />`). Add/remove routes here.
- Pages: `src/pages/*` contains top-level pages exported from `src/pages/index.ts`. Each page is a default export.
- Components: `src/components/` holds reusable pieces. Generic shared components live in `src/components/generic/` (e.g., `header`, `footer`, `navbar`).
- Assets: use `src/assets` and the Vite alias `assets` (see `vite.config.ts`).
- No backend: form submissions (e.g., RSVP) are client-side only (look at `src/components/rsvp-form.tsx`) and currently log to console — treat external integrations as TODOs.

Project-specific conventions

- TypeScript: strict settings enabled (`tsconfig.app.json`). Builds run `tsc -b` first to catch type errors early.
- Exports: pages are re-exported from `src/pages/index.ts` — always add new pages there so `src/router.tsx` imports stay clean.
- CSS: use CSS Modules (`*.module.css`) and import as `classes` (e.g., `import classes from './foo.module.css'`). Keep styles local to components.
- UI library: Mantine is the design system — prefer Mantine components and import `@mantine/core/styles.css` in `src/main.tsx`.
- Forms: use `react-hook-form` with `Controller` for complex inputs (see `src/components/rsvp-form.tsx` as canonical example).
- Naming: pages use kebab-case filenames (e.g., `our-story.tsx`, `about-chiang-mai.tsx`).

How to add a new page (practical example)

1. Create `src/pages/<name>.tsx` with default export component.
2. Add an export in `src/pages/index.ts`:
   `export { default as NewPage } from './new';`
3. Add a route to `src/router.tsx` routes array:
   `{ path: '/new', element: <NewPage /> },`
4. Run `npm run dev` and verify routing and styles.

Linting & style

- ESLint config in `eslint.config.js`. It uses `typescript-eslint` and React hooks plugin.
- Prettier-like import ordering is configured via plugins in `package.json`.

Build & deploy notes

- `tsc -b` is intentionally part of the build: fix TypeScript errors before shipping.
- `vercel.json` rewrites everything to `index.html` (SPA deployment behaviour).

Areas that need human attention / TODOs

- No automated tests configured — add unit/integration tests if you implement complex logic.
- RSVP form stubs (console.log + TODO comments) — integrate with backend or persistence as required.

Files to inspect for more context

- `package.json`, `vite.config.ts`, `eslint.config.js`, `postcss.config.cjs`
- `src/router.tsx`, `src/pages/*.tsx`, `src/components/rsvp-form.tsx`, `src/components/generic/*`

Agent behavior guidance (do's / don'ts)

- Do prefer Mantine components and CSS Modules.
- Do run `npm run lint` and `npm run build` locally before proposing changes.
- Do keep TypeScript errors fixed; the build fails on type errors.
- Don't add global CSS without a strong reason; prefer component-scoped `.module.css`.

If any section is unclear or you'd like more examples (e.g., component scaffolding, form integration patterns, or adding tests), tell me what to expand and I'll iterate.
