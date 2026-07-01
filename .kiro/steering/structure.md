# Project Structure

```
/
├── .kiro/steering/          # AI steering rules
├── content/
│   ├── chapters/            # MDX files per chapter (lecon-0.mdx … lecon-12.mdx)
│   ├── grammar/             # Grammar topic tutorials (tenses.mdx, pronouns.mdx, etc.)
│   ├── writing/             # Writing tutorials (letter.mdx, message.mdx, dialogue.mdx)
│   └── papers/              # Sample papers in MDX (paper-1.mdx, paper-2.mdx, …)
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Home / dashboard
│   │   ├── chapters/        # Chapter tutorial pages
│   │   ├── grammar/         # Grammar section pages
│   │   ├── writing/         # Writing section pages
│   │   ├── papers/          # Sample paper pages
│   │   └── quiz/            # Self-assessment quiz pages
│   ├── components/          # Reusable React components
│   │   ├── ui/              # Buttons, cards, navigation
│   │   ├── quiz/            # Quiz components (MCQ, fill-blank)
│   │   └── layout/          # Header, footer, sidebar
│   ├── lib/                 # Utility functions, content loaders
│   └── styles/              # Global CSS / Tailwind config
├── public/                  # Static assets (images, audio clips)
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Conventions

- Content lives in `/content` as MDX; code lives in `/src`.
- One MDX file per chapter/topic; frontmatter holds title, order, tags.
- Components are small, single-responsibility, co-located with their domain.
- Pages use Next.js App Router with `generateStaticParams` for static paths.
- All text visible to students is in French or bilingual (French + Hindi/English hints).
