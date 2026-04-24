/**
 * Single source of truth for brand identity
 * DO NOT hardcode brand strings anywhere else
 */

export const brand = {
  name: "Mettle",
  tagline: "We design and automate how your business operates",
  shortDescription:
    "From messy workflows to fully automated systems — we help businesses run faster, cleaner, and more efficiently.",
  longDescription:
    "Mettle is a systems-focused consulting firm that optimizes and automates how businesses operate. We redesign your processes, build custom software, and deploy automation so your team runs faster with less friction.",
  cta: {
    text: "Let's understand your business",
    href: "/contact",
  },
  
  /**
   * Color Philosophy
   * Deep Teal/Slate represents:
   * - Trust and reliability (blue undertones)
   * - Growth and clarity (teal/green undertones)
   * - Consulting-grade professionalism
   * - Strategic depth without being cold
   * 
   * Applied with restraint to:
   * - Guide attention to key actions
   * - Create visual hierarchy
   * - Reinforce brand maturity
   * - Maintain content-first focus
   */
  colorPhilosophy: {
    primary: "Deep Teal/Slate - trustworthy, professional, strategic",
    accent: "Bright Teal - energy, action, clarity",
    approach: "Balanced restraint - color guides, content leads",
  },
} as const;
