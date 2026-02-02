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
} as const;
