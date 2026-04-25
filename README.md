# Mettle

> We design and automate how your business operates.

From messy workflows to fully automated systems — we help businesses run faster, cleaner, and more efficiently.

**Live site:** [https://mettle-five.vercel.app](https://mettle-five.vercel.app)

---

## What we do

Mettle is a systems-focused consulting firm that optimizes and automates how businesses operate. We don't sell features — we solve operational problems through three services:

- **System Design & Setup** — Workflow design, process mapping, business logic structuring
- **Custom Software & Tools** — CRMs, admin panels, internal dashboards, custom tools
- **Automation & AI** — AI chatbots, voice bots, automated follow-ups, data pipelines

See the full breakdown at [/services](https://mettle-five.vercel.app/services), and case studies at [/work](https://mettle-five.vercel.app/work).

---

## About this repository

Production-grade Next.js website for Mettle. Public so anyone can see how the site is built.

### Tech stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Styling:** Tailwind CSS v4 with CSS-variable design tokens
- **UI primitives:** shadcn/ui (wrapped in `components/common/`)
- **Animations:** Framer Motion
- **Icons:** lucide-react (mapped through `lib/icons.ts`)
- **Type system:** TypeScript

### Pages

| Route | Purpose |
|-------|---------|
| `/` | Homepage — Problems → Services → Process → Case Studies → Products → CTA |
| `/services` | The three service categories with challenges and approach |
| `/work` | Process (4 steps) + 6 real case studies |
| `/work/[slug]` | Individual case study detail |
| `/thinking` | Articles, perspectives, and breakdowns |
| `/about` | About Mettle |
| `/contact` | Contact form |
| `/privacy`, `/terms` | Legal |

### Project structure

```
app/
  ├─ (marketing)/          # Route group for marketing pages
  │   ├─ page.tsx          # Homepage
  │   ├─ services/         # /services
  │   ├─ work/             # /work + /work/[slug]
  │   ├─ thinking/         # /thinking
  │   ├─ about/
  │   └─ contact/
  ├─ privacy/
  ├─ terms/
  ├─ layout.tsx            # Root layout (fonts, metadata)
  └─ globals.css           # CSS variables for design tokens

lib/
  ├─ brand.ts              # Brand name, tagline, descriptions, primary CTA
  ├─ case-studies.ts       # Case study data (shared by homepage + /work)
  ├─ theme.ts              # Design tokens
  ├─ typography.ts         # Font scales
  ├─ icons.ts              # Icon registry (lucide-react)
  ├─ navigation.ts         # Header + footer link source of truth
  └─ utils.ts              # cn() and shared helpers

components/
  ├─ ui/                   # shadcn/ui base components (do not modify)
  └─ common/               # Mettle-specific wrappers and section components
```

### Single source of truth

All brand-facing text, navigation, colors, fonts, and icons live in `lib/` config files. Don't hardcode these values in components — update the config and components will follow:

- **`lib/brand.ts`** — name, tagline, short/long description, primary CTA
- **`lib/case-studies.ts`** — homepage featured cases + full /work listing
- **`lib/navigation.ts`** — header and footer links
- **`lib/icons.ts`** — every icon used in the app
- **`app/globals.css`** — color and radius tokens (Tailwind reads these via CSS variables)

---

## Development

```bash
npm install      # Install dependencies
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Run the production build
npm run lint     # ESLint
```

### Design system

- **Colors:** HSL CSS variables in `app/globals.css` (primary near-black, accent vibrant blue). Tailwind utilities consume them via `bg-accent`, `text-foreground`, etc.
- **Typography:** Geist Sans (UI) + Geist Mono (code), loaded with `next/font/google`.
- **Components:** shadcn/ui base in `components/ui/`, wrapped for Mettle styling in `components/common/`.

### Conventions

1. Don't hardcode brand strings, colors, or spacing values — use the config files.
2. Server Components by default; reach for Client Components only when they're needed.
3. Use Framer Motion when it improves UX, not for decoration.
4. Wrap shadcn/ui components in `components/common/` rather than modifying them directly.

---

## Internal docs

Architectural decisions and longer-form planning docs live in `docs/`:

- `docs/masterPlan.md` — what is built and why
- `docs/architecture.md` — how it is built
- `docs/prompts.md` — when to build what
- `docs/VISUAL_DESIGN_GUIDE.md` — visual language reference

---

## Get in touch

Working on something operationally messy?
[mettle-five.vercel.app/contact](https://mettle-five.vercel.app/contact)
