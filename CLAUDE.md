# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development**: `npm run dev` (uses Turbo mode for faster builds)
- **Build**: `npm run build`
- **Start Production**: `npm start`
- **Linting**: `npm run lint`

## Architecture Overview

This is a Next.js 14+ portfolio website built with TypeScript and Tailwind CSS using the App Router architecture.

### Key Technologies
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom design system (craft-ds)
- **UI Components**: Radix UI primitives with shadcn/ui configuration
- **Animations**: Framer Motion
- **Typography**: Poppins font from Google Fonts
- **Analytics**: Vercel Analytics integration

### Project Structure
- **`app/`**: Next.js App Router pages and layouts
- **`components/`**: Reusable React components
  - `craft.tsx`: Custom design system (Layout, Main, Section, Container, Article, Box)
  - `home-page/`: Page-specific components
  - `ui/`: Shadcn/ui components (Avatar, Button, Toast, etc.)
- **`data/`**: Static data files (projects, education, technologies)
- **`hooks/`**: Custom React hooks
- **`lib/`**: Utility functions
- **`public/`**: Static assets

### Design System (Craft)

The project uses a custom design system called "craft-ds" located in `components/craft.tsx`. Key components:

- **Layout**: HTML wrapper with global styles
- **Main**: Main content area with prose styling
- **Section**: Page sections with consistent padding
- **Container**: Content container with max-width and centering
- **Article**: Article content with typography styles
- **Box**: Flexible layout component (flex/grid with responsive props)

### Component Patterns

1. **Page Structure**: Use Layout → Main → Section → Container hierarchy
2. **Responsive Design**: Box component supports responsive direction, gap, cols, and wrap props
3. **Styling**: Uses `cn()` utility for class merging (clsx + tailwind-merge)
4. **Typography**: Main and Article components include prose styling with Tailwind typography plugin

### Configuration

- **TypeScript**: Standard Next.js config with path mapping (`@/*` → `./src/*` - note: currently unused)
- **Tailwind**: Extended with custom fonts and shadcn/ui integration
- **Shadcn/ui**: Configured for default style with neutral base color and CSS variables

### Data Management

Static data is managed through TypeScript files in the `data/` directory:
- `projects.ts`: Portfolio projects
- `education.ts`: Educational background
- `technologies.ts`: Technical skills

When adding new content, follow the existing data structure and type definitions in these files.