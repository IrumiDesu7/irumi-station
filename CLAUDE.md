# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses pnpm as the package manager.

**Development server:** `pnpm dev` (runs on port 6969 with Turbopack)
**Build:** `pnpm build` 
**Production server:** `pnpm start`
**Linting:** `pnpm lint`
**Code formatting:** `pnpm format`

## Project Architecture

This is a Next.js 15 portfolio website built with TypeScript, React 19, and Tailwind CSS v4. The project follows the Next.js App Router pattern.

**Key architectural decisions:**
- **App Router:** Uses Next.js 15 App Router (`app/` directory) instead of Pages Router
- **Component system:** Uses Radix UI primitives with shadcn/ui components in New York style
- **Styling:** Tailwind CSS v4 with CSS variables for theming
- **Theme management:** `next-themes` for dark/light mode switching with system preference support
- **Typography:** Inter font from Google Fonts
- **Animations:** Always use motion and remember to import it with `from "motion/react". And use CSS animations for simpler interactions`

**Directory structure:**
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
  - `ui/` - shadcn/ui base components (Button, Switch, etc.)
  - `components/` - Custom application components
- `contents/` - Static content and data exports (like `TECH_LIST`)
- `lib/` - Utility functions and shared logic
- `hooks/` - Custom React hooks
- `public/assets/` - Static assets (images, icons)

**Component patterns:**
- Uses React.ComponentProps for component prop typing
- Follows shadcn/ui component API patterns
- **ALWAYS use shadcn/ui components when possible** - if a needed component doesn't exist, install it using `pnpm dlx shadcn@latest add <component-name>`
- Custom components like `AwesomeCursor`, theme toggle, and tech stack showcase
- Path aliasing with `@/*` pointing to project root

**State management:**
- Theme state managed by `next-themes`
- Component-level state with React hooks
- No global state management library currently in use

## Commit Guidelines
- Use simple commit messages with prefix like fix, chore, update, etc.
- When saying "commit", group relevant changes first then commit it.

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.