# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**SelfSmart** ("Shelf Selve") is a React + TypeScript + Vite web application in early development. The project uses Tailwind CSS for styling and follows a component-based architecture.

## Development Commands

```bash
npm run dev      # Start development server with hot reload
npm run build    # Type-check and build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Tech Stack

- **React 19** with TypeScript (strict mode)
- **Vite 7** with SWC plugin for fast refresh
- **Tailwind CSS 4** (utility-first styling, no config file)
- **react-icons/fa** for icons

## Architecture

### Layout Structure

The app uses a three-column flex-based layout defined in `src/App.tsx`:
- **Left (flex-4)**: Sidebar navigation with logo and menu
- **Center (flex-10)**: Main content area
- **Right (flex-5)**: Secondary panel

### Component Organization

```
src/
├── components/
│   └── layout/          # Layout-related components
│       ├── Sidebar.tsx
│       └── SidebarButton.tsx
├── types/               # Type declarations (e.g., image imports)
└── assets/             # Static assets
```

### Component Patterns

1. **Functional components** with TypeScript interfaces for props
2. **Icon pattern**: Pass icons as ReactNode props to components
   ```tsx
   <SidebarButton icon={<FaHome />}>Home</SidebarButton>
   ```
3. **Styling**: Tailwind utility classes directly in JSX
4. **Flex sizing**: Custom Tailwind classes (flex-4, flex-10, flex-5) for layout

## TypeScript Configuration

The project uses **strict mode** with aggressive linting:
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noFallthroughCasesInSwitch: true`
- `noUncheckedSideEffectImports: true`

Ensure all code passes strict type checking before committing.

## Styling Approach

- **Primary**: Tailwind CSS utility classes in JSX
- **Global styles**: `src/index.css` imports Tailwind and sets base font/rendering
- **Component CSS**: Minimal - only use `*.css` files for global overrides
- **Color scheme**: Blue-based palette (bg-blue-500 sidebar, blue-400 accents)

## Current State

- Basic layout and sidebar structure implemented
- Reusable SidebarButton component with hover states
- No testing framework or backend integration yet
- Main functionality pending implementation
