IMPORTANT:
Before executing any prompt below, re‑read masterPlan.md.
If execution conflicts with it, STOP.

You are building a production-grade consulting website for the brand “Mettle”.

IMPORTANT CONTEXT:
- Mettle is a consulting-led firm.
- Technology is a tool, not the product.
- The website must emphasize problem-solving, clarity, and systems thinking.
- The audience is founders and business owners.

GLOBAL RULES (NON-NEGOTIABLE):

1. SINGLE SOURCE OF TRUTH
- Brand name, tagline, and description must be imported from a single config file.
- Do NOT hardcode brand strings anywhere.

2. PERFORMANCE FIRST
- Server Components by default.
- Minimal JavaScript.
- Page load < 3 seconds.
- Lighthouse 90+.

3. FRAMER MOTION (STRICT)
- Use ONLY when it improves UX.
- No decorative or continuous animations.
- If animation is not required → do not use it.

4. SEO & ACCESSIBILITY
- One H1 per page.
- Semantic HTML only.
- WCAG AA compliance.
- Metadata via generateMetadata().
- Structured data where applicable.

5. DESIGN PHILOSOPHY
- Premium, calm, consulting-grade.
- No flashy UI.
- No agency-style layouts.
- White space over decoration.

6. CONTENT PHILOSOPHY
- Narrative-driven.
- No service-selling language.
- Focus on thinking, approach, outcomes.

FINAL GOAL:
Build a fast, authoritative consulting website that feels trustworthy, thoughtful, and scalable.

END SYSTEM PROMPT


Create a single brand configuration file.

File:
lib/brand.ts

Include:
- name
- tagline
- shortDescription
- longDescription

Use:
Name: Mettle
Tagline: Solving complexity with precision
Description should reflect consulting-led problem solving.

Ensure this file is the ONLY source for brand text.

Set up a scalable Next.js App Router structure for a consulting firm.

Pages:
- Home
- How We Work
- Work (Case Studies)
- Capabilities
- Thinking
- About
- Contact
- Privacy
- Terms

Components must be:
- Section-based
- Reusable
- Content-driven

Avoid rigid service-based components.

Build the Home page for Mettle based on the approved homepage narrative.

GOALS:
- Speak to founders dealing with complexity.
- Emphasize clarity, thinking, and partnership.
- No service-selling language.

SECTIONS:
1. Hero (problem-aware, calm)
2. Problem acknowledgement
3. Mettle’s approach
4. Patterns of work solved
5. Capabilities overview (non-rigid)
6. Philosophy / Why Mettle
7. Invitation CTA (conversation-based)

RULES:
- One H1 only.
- Import brand name/tagline from config.
- Server Component.
- Minimal animation.

Build the “How We Work” page.

Purpose:
Explain how Mettle approaches problems.

Structure:
- Understanding before execution
- Diagnosis and clarity
- System design
- Thoughtful execution
- Long-term outcomes

Tone:
Consulting-grade.
Calm.
Clear.

No tools, no tech stack mentions.


Create a flexible case study system.

Each case study must include:
- Context
- The real problem
- Insight gained
- System or approach designed
- Outcome

Avoid:
- Feature lists
- Tool mentions
- Over-marketing

This system must be easy to extend in future.


Build the Capabilities page.

Do NOT list services.

Frame capabilities as:
- Areas where complexity appears
- Types of problems Mettle helps solve

Examples:
- Business systems
- Digital foundations
- Product thinking
- Operational clarity
- Market validation

Keep it narrative-driven.


Build the Thinking page.

Purpose:
- Establish authority
- Long-term SEO
- Share perspectives

Structure:
- Articles
- Breakdowns
- Lessons from real work

Tone:
Insightful, not promotional.


Build the About page.

Focus on:
- Why Mettle exists
- How Mettle thinks
- Beliefs about work, systems, and growth

Avoid:
- Agency-style bios
- Over-credentialing


Build the Contact page.

Goal:
Start conversations, not capture leads.

Language:
- “Discuss your problem”
- “Start a conversation”

Form should be minimal and respectful.


Implement SEO best practices:

- generateMetadata for all pages
- OpenGraph & Twitter cards
- Organization schema
- Website schema

Optimize:
- Fonts
- Images
- JavaScript usage

Do NOT change content.
