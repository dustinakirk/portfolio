# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Dustin Kirk, a Principal Product Designer. Built with React, Vite, and Tailwind CSS. Deployed on Vercel.

## Commands

```bash
npm run dev      # Start Vite dev server on port 5005 (proxies /api to port 3005)
npm run dev:api  # Start `vercel dev` on port 3005 to run the api/ functions locally (run alongside dev)
npm run build    # Build for production (outputs to dist/)
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
npm run deploy   # Build locally, deploy prebuilt output to Vercel production, then git push
```

Local env vars for the functions live in `.env` (gitignored): `PROTECTED_PASSWORD`, `SESSION_SECRET`, `BLOB_READ_WRITE_TOKEN`. The same values are set on the Vercel project via `vercel env`.

Pushing to `main` does NOT auto-deploy (git deployments are disabled in `vercel.json`). Use `npm run deploy` to ship.

## Architecture

### Tech Stack
- **React 18** with React Router for client-side routing
- **Vite** as build tool and dev server
- **Tailwind CSS** for styling with dark mode support (`darkMode: 'class'`)
- **Framer Motion** for animations
- **Lucide React** for icons

### Key Files
- `src/App.jsx` - Main router with all page routes
- `src/components/PortfolioFresh.jsx` - Homepage component with hero, about, work, experience sections
- `src/components/ProjectLayout.jsx` - Shared layout wrapper for project detail pages
- `src/constants.js` - Central data: WORK array (projects), FEATURED_PROJECTS_CONFIG, CONTACT_EMAIL

### Project Structure
- Individual project pages live in `src/components/projects/[ProjectName]Project.jsx`
- Projects are configured in `src/constants.js` WORK array with `featured: true/false` flag
- `FEATURED_PROJECTS_CONFIG.featuredIds` controls which projects appear on homepage

### Routing Pattern
- Homepage: `/`
- Project pages: `/projects/{projectId}` (e.g., `/projects/aistories`)
- Routes use react-router-dom; Vercel rewrites handle SPA routing

### Password-Protected Projects
- Case studies in `protected/content/<id>.md` (front matter: title, subtitle, category, tags, image, order, draft) with media in `protected/media/<id>/`. See `protected/README.md`.
- Served only by the Vercel Functions in `api/` after the visitor enters `PROTECTED_PASSWORD`; a signed HttpOnly cookie (`SESSION_SECRET`) keeps them unlocked for 7 days. Nothing in `protected/` reaches the client bundle.
- Client: `src/lib/protectedAccess.js` (session context), `PasswordTile`/`PasswordGate` on the homepage, `ProtectedProjectPage` for `/projects/:id` when the id is not a public project. `PROTECTED_PROJECTS_CONFIG` in `src/constants.js` holds the tile copy.
- Change the password with `vercel env add PROTECTED_PASSWORD production` (and preview/development), then update `.env`.

### Static Assets
- Images and PDFs in `public/` directory
- Project assets: `public/projects/{projectId}/`
- Company logos: `public/images/logo_*.jpeg`
- Resume: `public/Dustin_Kirk_Resume.pdf`
