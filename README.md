# 🇫🇷 CBSE Class 10 French — Self-Study Portal

A free, open-source self-study and self-assessment platform for **CBSE Class 10 French** (Code 018) students.

## Features

- **Chapter Tutorials** — Lesson-by-lesson coverage of *Entre Jeunes (Class X)* with vocabulary, grammar, and exercises
- **Grammar Section** — Detailed tutorials on tenses, pronouns, adjectives, negation, and question formation
- **Writing Practice** — Informal letters, messages, and dialogues with formats, model answers, and tips
- **Sample Papers** — Full 80-mark CBSE-pattern papers with marking schemes and answer keys
- **Interactive Quizzes** — MCQ-based self-assessment with instant feedback and explanations

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework (App Router, static export) |
| TypeScript | Type-safe application code |
| Tailwind CSS | Utility-first styling |
| MDX | Content authoring for tutorials and papers |
| Lucide React | Icons |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static HTML export)
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
content/          → MDX content files
  chapters/       → Chapter tutorials (lecon-0.mdx to lecon-12.mdx)
  grammar/        → Grammar topic tutorials
  writing/        → Letter, message, dialogue writing tutorials
  papers/         → CBSE-pattern sample papers
src/
  app/            → Next.js pages (App Router)
  components/     → React components
  lib/            → Utilities and data
```

## Adding Content

Each content file uses MDX with YAML frontmatter:

```mdx
---
title: "Leçon 7 — Les Voyages"
order: 7
description: "Travel vocabulary and the futur simple."
tags: ["travel", "futur simple"]
---

Your tutorial content here...
```

## Deployment

The project builds to static HTML (`output: 'export'` in next.config.mjs).
Deploy free to:
- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- GitHub Pages

## CBSE Exam Pattern (2025-26)

| Section | Topic | Marks |
|---------|-------|-------|
| A | Compréhension (Reading) | 10 |
| B | Expression Écrite (Writing) | 20 |
| C | Grammaire (Grammar) | 30 |
| D | Textbook Questions | 20 |
| — | **Total Written** | **80** |
| — | Internal Assessment | 20 |

## License

MIT — Free for educational use.
