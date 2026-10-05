# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development**: `npm run dev` (Next.js Turbopack mode)
- **Build**: `npm run build`
- **Start Production**: `npm start`
- **Linting**: `npm run lint`
- **Formatting**: `npx prettier --write .` (Prettier with `prettier-plugin-tailwindcss`)

No test suite exists in this project.

## Architecture Overview

Next.js 15 portfolio site with React 19, TypeScript, and Tailwind CSS v4, deployed on Vercel.

### Key Technologies
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with `prettier-plugin-tailwindcss` for class sorting
- **UI Components**: Radix UI primitives, shadcn/ui, and Magic UI components (`components/ui/`)
- **Animations**: Framer Motion + Motion
- **Typography**: Geist Mono (`next/font/google`)
- **Blog/Projects**: MDX via `next-mdx-remote` and `@next/mdx`
- **Theme**: `next-themes` with system/light/dark toggle
- **Analytics**: Vercel Analytics

### Design Systems — Two Files, One Active

There are two design system files. **Always import from `components/ds.tsx`** for new work:

- **`components/ds.tsx`** (active): `Layout`, `Main`, `Section`, `Container`, `Nav`, `Prose`
  - `Container`: `mx-auto max-w-3xl p-4 sm:p-6`
  - `Section`: `py-2 sm:py-4`
  - `Prose`: rich text styling component; accepts `isArticle` (adds `max-w-prose`) and `isSpaced` (adds heading/paragraph spacing) props
- **`components/craft.tsx`** (legacy craft-ds v0.2.8): exports same-named components with different constraints (`max-w-2xl` container). Still used by nothing active — do not use for new components.

### Path Aliases

`@/` maps to the **project root** (not `src/`). Example: `import { Container } from '@/components/ds'`.

### Page Structure Pattern

```tsx
// Typical page pattern
import { Section, Container, Prose } from '@/components/ds'

export default function Page() {
  return (
    <Section>
      <Container>
        <Prose isSpaced>...</Prose>
      </Container>
    </Section>
  )
}
```

The root layout (`app/layout.tsx`) wraps everything in `<Layout>` → `<ThemeProvider>` → `<AlertNew>` → `<Navigation>` → `{children}` → `<Footer>`.

### Home Page Components

All home page sections live in `components/new-home-page/` and are composed in `app/page.tsx`:
- `Introduction.tsx` — hero card with avatar, scrambling name, rotating titles, social links
- `SectionHeading.tsx` — shared heading (accent square + title + rule) used by every section
- `ExperienceTimeline.tsx` — shared two-column experience list (dates left, role right); `WorkExperience.tsx` and `VolunteerExperience.tsx` are thin wrappers over it
- `CompletedProjects.tsx` — project cards from the MDX posts; `ShowMore.tsx` collapses them to the first three
- `Education.tsx`, `Technologies.tsx`
- `wrapper/Navbar.tsx`, `wrapper/Footer.tsx`, `wrapper/Alert.tsx`

### Blog / Projects Route

`/blog` is repurposed as the **Projects** showcase. MDX files in `app/blog/posts/` are rendered as project write-ups.

MDX frontmatter schema (`app/blog/utils.tsx`):
```
---
title: string
publishedAt: YYYY-MM-DD
summary: string
image?: string        # path or URL for OG image
link?: string         # live project URL
githubRepoLink?: string
context?: string      # e.g. "Bachelor's Project, University of Southern Denmark"
techStack?: string    # comma-separated, split in the card component
---
```

Slug is derived from the filename. `getBlogPosts()` reads all `.mdx` files at build time and returns them newest first. Link/date helpers (`formatDate`, `displayHost`, `isVideoLink`, `splitTechStack`) live in `app/blog/utils.tsx`.

### Data Management

Static content in `data/`:
- `work-experience.ts` — roles plus the shared `Experience` type; `badge[]` renders filled, `competencies[]` renders as quiet outline badges
- `volunteer-experience.ts` — reuses the `Experience` type
- `education.ts`, `technologies.ts`

`technologies.ts` is logo-only by design: every entry has a devicon mark. Capabilities
without a logo (REST API, ETL, SQL) belong on the roles and projects that evidence them.

Follow existing TypeScript type definitions when adding entries.

### Type Scale

Everything is Geist Mono; hierarchy comes from size, weight and colour (defined in `app/globals.css`):
- `text-xs tracking-wide` — meta (dates, locations, labels); left-column labels use `text-primary`
- `text-sm` — UI (nav, buttons, links, chips)
- `text-body` (15px token) — descriptive copy, `text-muted-foreground`
- `text-base font-semibold tracking-tight` — item titles
- `text-lg font-medium` — section headings (`SectionHeading`)

Use theme tokens (`primary`, `muted-foreground`, `border`…) rather than raw colours. Date ranges go through `splitDate()` in `lib/utils.ts`.

### Utilities

- `cn()` from `@/lib/utils` — `clsx` + `tailwind-merge` for conditional class merging
- `useCopyToClipboard` hook in `hooks/`
- Toast notifications via `sonner`
