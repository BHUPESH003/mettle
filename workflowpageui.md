# CONTEXT FOR CURSOR

We are building a reusable premium workflow storytelling component for a consulting/engineering firm's website.

This is NOT a simple stepper component.

The goal is to create an animated horizontal workflow narrative section that visually tells a transformation story as the user scrolls.

The inspiration is:

- Amazon delivery tracking visualization
- Apple scroll storytelling sections
- Stripe/Linear/Vercel engineering aesthetics
- System architecture animations
- Operational workflow pipelines

The component should:

- Be reusable
- Accept dynamic steps/content
- Support custom SVGs/icons/images
- Be fully configurable
- Work for multiple storytelling flows
- Use GSAP + ScrollTrigger
- Be production-ready
- Be responsive
- Have a premium dark engineering aesthetic

The component should visually communicate:
"Complex systems becoming organized and optimized."

The interaction is scroll-driven.

As the user scrolls vertically:

- the workflow progresses horizontally
- stages animate in/out
- systems evolve visually
- progress rail updates
- data/signal moves through the pipeline

This should feel cinematic and expensive.

Avoid:

- cartoon illustrations
- colorful startup graphics
- childish motion
- generic marketing cards

Preferred aesthetic:

- dark graphite backgrounds
- subtle grid overlays
- thin glowing lines
- glassmorphism panels
- blueprint/system-diagram visuals
- infrastructure-inspired motion

Tech stack:

- Next.js
- React
- TypeScript
- TailwindCSS
- GSAP
- ScrollTrigger
- SVG animations

The component architecture must be generic enough so that:

- steps can be dynamically injected
- SVG/icon/image per step can be customized
- animation presets can be reused
- themes can be changed
- content can be CMS-driven later

The component should expose:

- steps array
- animation variants
- theme config
- layout options
- custom node rendering
- custom connectors
- custom SVG paths

The component should be split into:

- WorkflowSection
- WorkflowTrack
- WorkflowStep
- AnimatedConnector
- ProgressRail
- FloatingSignal
- BackgroundGrid
- StepContentRenderer

We want:

- clean architecture
- reusable hooks
- isolated animations
- maintainable GSAP timelines
- proper cleanup
- performance optimized rendering

The final result should feel like:
"A living operational system"

Not:
"A webpage with cards"

# TASK FOR CURSOR

Build a reusable React/Next.js component called:
<WorkflowStorySection />

This should be a fully reusable scroll-driven storytelling workflow component.

Use:

- React
- TypeScript
- TailwindCSS
- GSAP
- ScrollTrigger

Requirements:

---

1. LAYOUT

---

Create a sticky full-screen storytelling section.

As the user scrolls vertically:

- content progresses horizontally
- each workflow step occupies viewport width
- smooth transitions occur between steps

Structure:

<WorkflowStorySection>
  <ProgressRail />
  <ScrollableTrack>
    <WorkflowStep />
    <WorkflowStep />
    <WorkflowStep />
  </ScrollableTrack>
</WorkflowStorySection>

The section should:

- pin during scroll
- scrub smoothly
- support any number of steps

---

2. DATA STRUCTURE

---

The component must accept a configurable array like:

const workflowSteps = [
{
id: "understand",
number: "01",
title: "Understand",
subtitle: "Audit broken systems",
description:
"We identify operational bottlenecks, fragmented workflows, and hidden inefficiencies.",
theme: "chaos",
icon: "/icons/audit.svg",
image: "/images/chaos-system.png",
accentColor: "#FF6B6B",
animations: {
entry: "fade-up",
exit: "scale-down",
connector: "pulse",
},
},
];

Support:

- dynamic number of steps
- optional image
- optional SVG
- optional custom node renderer
- optional animation variant

---

3. VISUAL LANGUAGE

---

Create a premium engineering/system aesthetic.

Use:

- dark backgrounds
- subtle gradients
- grid overlays
- glowing connection lines
- animated SVG paths
- glass panels
- soft radial glows

Avoid:

- bright startup gradients
- cartoon vectors
- excessive colors

Use restrained premium visuals.

---

4. PROGRESS RAIL

---

At the top:

- sticky horizontal rail
- shows all steps
- active step highlights dynamically
- smooth progress transition

Style inspiration:

- Apple onboarding
- Linear issue progress
- Amazon order tracker

The rail should:

- animate active state
- show completed states
- support dynamic step counts

---

5. CONNECTOR SYSTEM

---

Between steps:

- animated SVG connectors
- flowing data/signal effect
- moving particles/dots
- pulse/glow animations

Use SVG path animations.

The connector should:

- visually connect workflow stages
- animate continuously
- respond to scroll progress

---

6. FLOATING SIGNAL

---

Create a reusable animated signal object:

- glowing orb
- packet
- pulse
- moving light

This travels through the workflow path.

This is important because it creates continuity.

Implement using:

- GSAP MotionPathPlugin if useful
  OR
- SVG path interpolation

---

7. STEP TRANSITIONS

---

Each step should have distinct visual states:

STEP 1 — CHAOS

- broken connections
- jitter
- scattered nodes
- warning indicators

STEP 2 — REDESIGN

- alignment
- blueprint overlays
- organization animation

STEP 3 — BUILD

- assembling modules
- pipeline activation
- deployment animation

STEP 4 — OPTIMIZE

- stabilized systems
- green indicators
- automated loops
- smooth motion

Each state should morph naturally into the next.

---

8. RESPONSIVENESS

---

Desktop:

- full cinematic experience

Tablet:

- simplified motion
- reduced complexity

Mobile:

- vertical stack fallback
  OR
- horizontal swipe carousel

Must maintain usability/performance.

---

9. PERFORMANCE

---

Requirements:

- proper GSAP cleanup
- avoid layout thrashing
- lazy load heavy assets
- optimize SVG rendering
- use will-change carefully
- avoid excessive re-renders

Use:
gsap.context()

Cleanup:
ctx.revert()

---

10. CODE QUALITY

---

Requirements:

- reusable hooks
- modular files
- proper typing
- no hardcoded steps
- maintainable architecture

Create:

- hooks/useWorkflowScroll.ts
- hooks/useSignalAnimation.ts
- components/workflow/\*
- lib/workflow-config.ts

---

11. OPTIONAL ENHANCEMENTS

---

If possible add:

- subtle parallax
- SVG line drawing
- morphing system graphs
- dynamic blur transitions
- ambient particles
- noise texture
- animated metrics

Keep everything tasteful and premium.

---

12. OUTPUT EXPECTATION

---

Generate:

- complete reusable component architecture
- production-ready code
- GSAP integration
- sample workflow config
- placeholder SVG system
- reusable animation utilities
- Tailwind styles
- TypeScript types

The output should be directly usable in a Next.js app.

DO NOT generate simplistic card UI.

This should feel like:
"A cinematic systems transformation engine."

# VISUAL REFERENCES

The visual direction should closely resemble modern cinematic scrollytelling websites.

DO NOT generate:

- startup illustration style
- cartoon people
- flat SaaS vectors
- bright gradient blobs
- colorful marketing sections
- generic timeline cards
- basic horizontal steppers

We want:

- premium engineering visuals
- operational systems aesthetic
- infrastructure storytelling
- cinematic scroll interactions
- precision motion design

---

## PRIMARY REFERENCES

1. Apple Product Pages
   Reference:

- AirPods Max
- Apple Vision Pro
- MacBook Pro
- iPhone product storytelling pages

Important characteristics:

- sticky scroll sections
- cinematic transitions
- minimal text
- huge visual focus
- progression through states
- motion tied directly to scroll
- layered depth
- premium restraint

Reference style:
https://www.apple.com

Use for:

- section pacing
- scroll synchronization
- transition timing
- cinematic feel

---

2. Stripe
   Reference:
   https://stripe.com

Important characteristics:

- system flow visuals
- infrastructure graphics
- connected nodes
- animated product ecosystems
- elegant gradients
- subtle motion

Use for:

- operational diagrams
- system architecture visuals
- connector animations
- premium engineering feel

---

3. Linear
   Reference:
   https://linear.app

Important characteristics:

- dark UI
- precision spacing
- restrained motion
- sharp typography
- glowing accents
- modern software aesthetics

Use for:

- typography
- spacing
- dark theme styling
- glow treatment
- UI density

---

4. Vercel
   Reference:
   https://vercel.com

Important characteristics:

- technical elegance
- minimalism
- infrastructure storytelling
- clean system diagrams
- subtle animations

Use for:

- layout rhythm
- engineering aesthetic
- minimal storytelling

---

5. Framer
   Reference:
   https://framer.com

Important characteristics:

- immersive interactions
- fluid transitions
- premium motion design
- layered depth

Use for:

- transition smoothness
- parallax treatment
- motion orchestration

---

6. Amazon Order Tracking
   Reference concept:
   Package moving through stages:
   Warehouse → Transit → Delivery → Delivered

Important characteristics:

- visible progression
- state transitions
- movement continuity
- process visibility
- emotional clarity

Use for:

- workflow logic
- connector system
- moving signal animation
- progress rail

---

## VISUAL LANGUAGE

The interface should feel like:

- operational infrastructure
- workflow orchestration
- intelligent systems
- automation pipelines

NOT:

- marketing illustrations
- people-centric graphics
- playful SaaS visuals

---

## DESIGN SYSTEM

Color palette:

- graphite
- deep navy
- muted slate
- soft white
- restrained accent colors

Accent colors should indicate state:

- red/orange = broken systems
- blue = redesign/planning
- purple = build/process
- green = optimized/automated

Avoid rainbow palettes.

---

## BACKGROUND STYLE

Use:

- subtle blueprint grids
- soft radial glows
- technical noise texture
- gradient mesh overlays
- depth layering

Avoid:

- loud gradients
- colorful abstract blobs

---

## ANIMATION REFERENCES

Use motion similar to:

- Apple scroll animations
- Framer site transitions
- Stripe dashboard movement
- Linear microinteractions

Animations should feel:

- smooth
- intentional
- physics-aware
- expensive

NOT:

- bouncy
- playful
- exaggerated

---

## MOTION PRINCIPLES

1. Motion should guide understanding.

2. Every animation must communicate:

- transformation
- flow
- organization
- optimization

3. Motion should feel connected.

4. Avoid random floating effects.

5. Use easing similar to:
   power3.out
   expo.out

6. Prioritize opacity, transforms, blur, and SVG stroke animations.

---

## WORKFLOW VISUALIZATION REFERENCES

The workflow should resemble:

- CI/CD pipelines
- distributed systems maps
- API orchestration diagrams
- infrastructure dashboards
- automation flows

Potential visual elements:

- nodes
- pipelines
- connected modules
- signal packets
- routing paths
- processing indicators
- system graphs
- architecture overlays

---

## STEP VISUAL STATES

STEP 1 — UNDERSTAND
Mood:

- chaotic
- fragmented
- overloaded

Visuals:

- broken connections
- warning indicators
- scattered nodes
- unstable movement
- disconnected workflows

---

STEP 2 — REDESIGN
Mood:

- clarity emerging
- structure
- alignment

Visuals:

- blueprint overlays
- snapping grids
- reorganizing nodes
- system mapping
- alignment animations

---

STEP 3 — BUILD
Mood:

- momentum
- assembly
- engineering

Visuals:

- modules assembling
- APIs connecting
- pipelines activating
- deployment states
- construction motion

---

STEP 4 — OPTIMIZE
Mood:

- confidence
- autonomy
- stability

Visuals:

- green operational states
- automated loops
- stabilized metrics
- smooth continuous motion
- healthy system indicators

---

## IMPORTANT

This component should look like:
"A living operational platform"

NOT:
"A fancy timeline component"

The motion should feel purposeful and system-oriented.

The overall impression should be:
high-end engineering consultancy + cinematic product storytelling.
