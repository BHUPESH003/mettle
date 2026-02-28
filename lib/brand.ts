/**
 * Single source of truth for brand identity
 * DO NOT hardcode brand strings anywhere else
 */

export const brand = {
  name: "Mettle",
  tagline: "Process-driven execution for growing companies",
  shortDescription:
    "We fix broken processes and build custom automation systems that run your business. No fluff, just engineering-led execution.",
  longDescription:
    "Mettle is an AI-first execution firm built by engineers. We help founders handle complexity with confidence by auditing operational workflows, stripping away friction, and deploying custom software and automation that actually moves the needle. Our approach emphasizes diagnosis, systems thinking, and long-term outcomes.",
  cta: {
    text: "Start a conversation",
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
