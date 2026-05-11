You are a senior frontend motion designer and GSAP expert.

I already have a premium dark-themed contact page built in Next.js + Tailwind CSS.
The page aesthetic is inspired by Linear, Vercel, and high-end consulting/AI companies.

I DO NOT want flashy animations.
I want cinematic, premium, subtle, enterprise-level motion design.

Tech Stack:

- Next.js
- React
- Tailwind CSS
- GSAP
- ScrollTrigger
- SplitText (if needed)

The contact page has 2 sections:

1. HERO SECTION

- Dark background
- Visible grid pattern
- Huge centered heading: “Start a conversation”
- Small “Let’s talk” pill button above heading
- Supporting paragraph text underneath

2. CONTACT FORM SECTION

- Left informational column with cards
- Right large contact form card
- Rounded inputs
- Blue accent color
- Premium SaaS aesthetic

I want you to implement HIGH-END GSAP motion interactions with production-quality code and clean architecture.

========================================
HERO SECTION ANIMATIONS
========================================

1. PROXIMITY GRID GLOW EFFECT
   Create an interactive animated grid background.

Behavior:

- Grid should subtly react to cursor movement.
- Nearby grid lines softly brighten.
- Add a radial blue glow following cursor position.
- Motion must be extremely subtle and smooth.
- No cyberpunk/neon overload.
- Should feel like Linear/Vercel style motion.

Requirements:

- Use CSS variables + GSAP quickTo() or quickSetter().
- Add subtle depth movement to background.
- Glow radius around 120–160px.
- Grid opacity should remain low and elegant.
- Animation should not hurt performance.

2. SPLIT TEXT HERO REVEAL
   Animate the heading:
   “Start a conversation”

Requirements:

- Use SplitText or custom span splitting.
- Reveal words/letters from center outward.
- Add blur-to-sharp transition.
- Animate upward from y: 120.
- Use stagger from center.
- Ease: power4.out
- Duration around 1.2–1.5s.
- Final result should feel cinematic and premium.

3. MAGNETIC “LET’S TALK” PILL BUTTON
   Add premium magnetic hover interaction.

Behavior:

- Button subtly follows cursor within ~10px range.
- Blue dot inside button softly pulses.
- Border glow intensifies on hover.
- Smooth elastic easing on release.

IMPORTANT:

- Keep movement very subtle.
- Must feel premium, not playful.

4. HERO SCROLL COMPRESSION
   As user scrolls:

- Hero scales slightly down (~0.96).
- Opacity subtly decreases.
- Grid darkens slightly.
- Content moves upward smoothly.

Use GSAP ScrollTrigger.

Transition into next section should feel seamless.

========================================
CONTACT FORM SECTION ANIMATIONS
========================================

1. STAGGERED SCROLL REVEAL
   When section enters viewport:

LEFT COLUMN:

- Badge fades in.
- Heading reveals line-by-line.
- Cards stagger upward.

RIGHT COLUMN:

- Form card fades/rises in.
- Inputs animate sequentially.

Animation Settings:

- stagger: 0.08
- ease: power3.out
- subtle y motion only
- no exaggerated movement

2. SPOTLIGHT INPUT EFFECT
   Create premium input hover/focus interaction.

Behavior:

- Soft blue radial glow follows cursor inside input.
- Border softly brightens.
- Background subtly changes on focus.
- Glow fades smoothly on mouse leave.

Requirements:

- Use CSS radial gradients.
- Mouse tracking should be smooth.
- Inputs should feel alive and modern.

3. MICRO-TILT FORM CARD
   Entire form card should subtly react to mouse movement.

Behavior:

- Slight rotateX and rotateY.
- Tiny shadow movement.
- Minimal depth effect.

Limits:

- rotateX max 2deg
- rotateY max 3deg

Must remain elegant and professional.

4. PREMIUM CTA BUTTON HOVER
   For “Send message” button:

Hover Interaction:

- Shine sweep animation.
- Arrow slides slightly right.
- Shadow expands softly.
- Slight scale increase.

Keep transitions smooth and premium.

========================================
IMPORTANT DESIGN RULES
========================================

DO:

- Keep everything subtle and luxurious.
- Prioritize smoothness over complexity.
- Use GPU-friendly transforms.
- Use will-change where appropriate.
- Ensure animations feel expensive and polished.
- Maintain strong performance.

DO NOT:

- Add excessive floating particles.
- Use exaggerated movement.
- Add random flashy effects.
- Overuse blur.
- Create gaming/cyberpunk aesthetics.

========================================
DELIVERABLES
========================================

Provide:

1. Full implementation code.
2. Reusable React hooks/components if needed.
3. GSAP setup.
4. Tailwind-compatible styles.
5. Clean architecture.
6. Production-ready code.
7. Proper cleanup for animations.
8. Responsive behavior considerations.

The final result should feel like a premium AI consulting company website.
