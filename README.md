# Mettle Website

Production-grade Next.js website for Mettle consulting firm.

## Architecture

This project follows strict architectural constraints defined in:

- `docs/masterPlan.md` - WHAT is built and WHY (CANONICAL)
- `docs/ARCHITECTURE.md` - HOW it is built
- `docs/prompts.md` - WHEN to build something

**Hierarchy:** masterPlan.md > ARCHITECTURE.md > prompts.md

## Key Principles

- **Single Source of Truth**: All brand text, colors, fonts, icons, and navigation come from config files in `lib/`
- **Token-Based Design**: Tailwind consumes CSS variables, not hardcoded values
- **Server-First**: Server Components by default, minimal JavaScript
- **Composition**: shadcn/ui components wrapped in `components/common/` for customization
- **Performance**: Lighthouse 90+, <3s load time

## Project Structure

```
app/
  ├─ (marketing)/          # Route group for marketing pages
  │   ├─ page.tsx          # Home
  │   ├─ how-we-work/
  │   ├─ work/             # Case studies
  │   ├─ capabilities/
  │   ├─ thinking/         # Articles
  │   ├─ about/
  │   └─ contact/
  ├─ privacy/
  ├─ terms/
  ├─ layout.tsx            # Root layout
  └─ globals.css           # CSS variables for tokens

lib/
  ├─ brand.ts              # Brand name, tagline, descriptions
  ├─ theme.ts              # Design tokens (colors, spacing, radius)
  ├─ typography.ts         # Font families and scales
  ├─ icons.ts              # Icon mapping (lucide-react)
  ├─ navigation.ts         # Nav and footer links
  └─ utils.ts              # Utility functions (cn, etc.)

components/
  ├─ ui/                   # shadcn/ui base components (DO NOT modify)
  └─ common/               # Wrapped components for Mettle-specific use
```

## Config Files (Single Source of Truth)

- **`lib/brand.ts`**: Brand name, tagline, descriptions
- **`lib/theme.ts`**: Design tokens (consumed via CSS variables)
- **`lib/typography.ts`**: Font families and typography scales
- **`lib/icons.ts`**: Icon mapping (lucide-react)
- **`lib/navigation.ts`**: Navigation and footer links

## Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Design System

- Colors: Defined in `app/globals.css` as CSS variables, consumed by Tailwind
- Typography: Geist Sans (primary), Geist Mono (code)
- Icons: lucide-react (imported via `lib/icons.ts`)
- Components: shadcn/ui base, wrapped in `components/common/` for customization

## Important Rules

1. **Never hardcode** brand strings, colors, or spacing values
2. **Always use tokens** from config files
3. **Server Components by default** - only use Client Components when necessary
4. **Framer Motion** only when it improves UX (not decorative)
5. **shadcn/ui** components must be wrapped, never modified directly

## Next Steps

Follow `docs/prompts.md` for implementation tasks. Always validate against `docs/masterPlan.md` and `docs/ARCHITECTURE.md` before making changes.
