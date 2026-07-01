# Tech Stack

## Languages

- TypeScript (application code)
- Markdown/MDX (content authoring for tutorials, papers)

## Frameworks & Libraries

- Next.js 14 (React framework, App Router, static export)
- React 18
- Tailwind CSS (styling)
- next-mdx-remote or @next/mdx (render MDX tutorial content)
- Lucide React (icons)

## Build System

- Node.js 20 LTS
- npm (package manager)
- Next.js built-in bundler (Turbopack dev, Webpack production)
- Static export (`output: 'export'`) for zero-cost hosting

## Common Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build + static export
npm run start        # Serve production build locally
npm run lint         # ESLint check
```

## Deployment

Static HTML export deployable to GitHub Pages, Vercel, Netlify, or any static host — no server required.
