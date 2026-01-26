1️⃣ CORE ARCHITECTURAL PHILOSOPHY
---------------------------------

This project is built with these principles:

*   **Configuration over hardcoding**
    
*   **Tokens over styles**
    
*   **Composition over duplication**
    
*   **Server-first, client-last**
    
*   **Minimal JS, maximal clarity**
    
*   **Easy to rebrand without refactor**
    

Nothing is added “just because”.

* * *

2️⃣ SINGLE SOURCE OF TRUTH (MANDATORY)
--------------------------------------

### ❌ Never hardcode:

*   Colors
    
*   Fonts
    
*   Icons
    
*   Brand text
    
*   Spacing values
    
*   Breakpoints
    

### ✅ Always use:

*   Central config files
    
*   Design tokens
    
*   Theme variables
    

* * *

3️⃣ DESIGN TOKEN SYSTEM (FOUNDATION)
------------------------------------

Create these files first:

txt

Copy code

`lib/  ├─ brand.ts        // name, tagline, descriptions  ├─ theme.ts        // colors, radius, shadows  ├─ typography.ts  // font families, scales  ├─ icons.ts       // icon mapping  └─ navigation.ts  // nav + footer links`

### Example: `theme.ts`

ts

Copy code

`export const theme = {   colors: {     background: "hsl(var(--background))",     foreground: "hsl(var(--foreground))",     primary: "hsl(var(--primary))",     muted: "hsl(var(--muted))",   },   radius: {     sm: "0.25rem",     md: "0.5rem",     lg: "0.75rem",   }, };`

Tailwind should **consume tokens**, not define design directly.

* * *

4️⃣ TAILWIND RULES (STRICT)
---------------------------

### Configuration

*   Use Tailwind **only via tokens**
    
*   Extend theme, don’t inline values
    
*   No arbitrary values unless unavoidable
    

ts

Copy code

`// tailwind.config.ts theme: {   extend: {     colors: {       primary: "hsl(var(--primary))",     },   }, }`

### ❌ Avoid

tsx

Copy code

`<div className="text-[#1a1a1a] mt-[37px]" />`

### ✅ Prefer

tsx

Copy code

`<div className="text-foreground mt-section" />`

* * *

5️⃣ SHADCN/UI USAGE RULES
-------------------------

shadcn is **not a component library**, it’s a **starting point**.

Rules:

*   Components must be wrapped if reused
    
*   Never modify shadcn directly
    
*   Extend via composition
    

txt

Copy code

`components/  ├─ ui/            // shadcn originals  ├─ common/        // wrapped & themed components`

Example:

tsx

Copy code

`// components/common/Button.tsx import { Button as UIButton } from "@/components/ui/button";  export function Button(props) {   return <UIButton {...props} />; }`

* * *

6️⃣ ICON SYSTEM (VERY IMPORTANT)
--------------------------------

### ✅ Recommended icon library

**lucide-react**

Why:

*   Tree-shakeable
    
*   Lightweight
    
*   Works perfectly with shadcn
    
*   Used by Vercel / shadcn internally
    

### Icon rule

Never import icons directly in components.

❌ Bad

tsx

Copy code

`import { ArrowRight } from "lucide-react";`

✅ Correct

ts

Copy code

`// lib/icons.ts import { ArrowRight, Mail } from "lucide-react";  export const Icons = {   arrowRight: ArrowRight,   mail: Mail, };`

Then:

tsx

Copy code

`import { Icons } from "@/lib/icons";  <Icons.arrowRight />`

This makes icon swaps global and cheap.

* * *

7️⃣ NEXT.JS ARCHITECTURE (GOOGLE / VERCEL STYLE)
------------------------------------------------

### Rendering Rules

*   Server Components by default
    
*   Client Components only when required
    
*   No `useEffect` for layout or data
    

### Folder structure

txt

Copy code

`app/  ├─ (marketing)/  │   ├─ page.tsx  │   ├─ work/  │   └─ thinking/  ├─ layout.tsx  └─ globals.css`

Use **route groups** to keep structure clean.

* * *

8️⃣ PERFORMANCE & BUNDLE SIZE RULES
-----------------------------------

Non-negotiable:

*   No heavy animation libs (Framer Motion only if justified)
    
*   No client-only UI unless needed
    
*   No global JS side effects
    
*   Dynamic imports where sensible
    

Targets:

*   Lighthouse 90+
    
*   Minimal JS chunks
    
*   No unused CSS
    

* * *

9️⃣ FRAMER MOTION POLICY (STRICT)
---------------------------------

Allowed only when:

*   It improves comprehension
    
*   It reinforces hierarchy
    

❌ Never:

*   Decorative motion
    
*   Continuous animations
    
*   Text entrance everywhere
    

Default stance:

> If it’s not necessary, don’t use it.

* * *

🔟 CONTENT & MAINTAINABILITY RULES
----------------------------------

*   All copy must come from `masterPlan.md`
    
*   Pages are composed, not duplicated
    
*   No repeated layout logic
    
*   No page-specific hacks
    

* * *

11️⃣ CURSOR BEHAVIOR ENFORCEMENT
--------------------------------

Add this to the **top of `prompts.md`**:

md

Copy code

`IMPORTANT: Before executing any prompt: 1. Re-read ARCHITECTURE.md 2. Validate against masterPlan.md 3. If unsure, STOP and ask`

* * *

12️⃣ HOW YOU SHOULD USE THIS (WORKFLOW)
---------------------------------------

1.  Scaffold Next.js project
    
2.  Paste **Master Architecture Prompt** in Cursor
    
3.  Create config files first
    
4.  Lock tokens
    
5.  Then start page prompts one by one
    

* * *

✅ WHAT THIS GIVES YOU
---------------------

*   Easy rebranding (fonts, colors, icons in one place)
    
*   No Tailwind chaos
    
*   No Cursor hallucinations
    
*   Small bundle size
    
*   Google‑style internal consistency
    
*   Long‑term maintainability
    
