# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Dustin Kirk, a Principal Product Designer. Built with React, Vite, and Tailwind CSS. Deployed on Vercel.

## Commands

```bash
npm run dev      # Start dev server on port 5005
npm run build    # Build for production (outputs to dist/)
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

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

### Static Assets
- Images and PDFs in `public/` directory
- Project assets: `public/projects/{projectId}/`
- Company logos: `public/images/logo_*.jpeg`
- Resume: `public/Dustin_Kirk_Resume.pdf`
