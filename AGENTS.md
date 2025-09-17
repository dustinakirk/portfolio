# Repository Guidelines

## Project Structure & Module Organization
The portfolio runs on Vite + React. Entry point is `src/main.jsx`, rendering `App.jsx` routes. Most UI sits in `src/components`, with project detail views under `src/components/projects`. Shared data lives in `src/constants.js` and `src/data`. Tailwind styles land in `src/index.css`, while raw assets go into `src/assets`. Case-study imagery is stored under the top-level `projects/` folders and is copied from there during development. Keep generated bundles in `dist/` out of manual edits; Vercel config lives in `vercel.json` and deployment notes in `DEPLOYMENT_GUIDE.md`.

## Build, Test, and Development Commands
Run `npm install` once to grab dependencies. Use `npm run dev` to start the Vite dev server with hot reload. `npm run build` produces the optimized assets in `dist/`. Validate lint rules through `npm run lint`. Preview the production bundle locally with `npm run preview`.

## Coding Style & Naming Conventions
Use modern ES modules and React function components. Follow the existing two-space indentation footprint. Component files and exports should stay in PascalCase (e.g., `ProjectSidebar.jsx`), hooks/utilities in camelCase, and asset filenames in kebab-case. Keep Tailwind utility classes in JSX `className` strings; add reusable styles to `index.css` only when necessary. When adding TypeScript, prefer `.tsx` alongside existing `.ts` conventions as seen in `TestimonialsSection.tsx`. Run the ESLint config before committing and autofix (`eslint . --fix`) if changes are mechanical.

## Testing Guidelines
Automated tests are not yet configured. When introducing tests, align on Vitest + React Testing Library to match the Vite ecosystem. Name test files `<Component>.test.(js|tsx)` and co-locate them next to the source or in a `__tests__` subdirectory. Ensure key interactive flows (routing, lightbox, animations) have coverage before ship, and document any gaps in the PR description.

## Commit & Pull Request Guidelines
Commit history favors short, imperative messages ("Added salesforce hackathon", "new images"). Follow that format, grouping related changes per commit. Every pull request should include a concise summary, reference any issue or Asana/Jira ticket, list test commands run, and attach screenshots or GIFs for UI changes. Confirm the PR is lint-clean and the Vite build succeeds before requesting review.
