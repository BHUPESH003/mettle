/**
 * Single source of truth for brand identity
 * DO NOT hardcode brand strings anywhere else
 */

export const brand = {
  name: "Mettle",
  tagline: "Solving complexity with precision",
  shortDescription:
    "Mettle helps founders navigate complexity and turn it into clear, workable systems.",
  longDescription:
    "Mettle exists to help founders handle complexity with confidence, clarity, and competence. We consult, design, and execute where clarity matters most, partnering with you to understand problems before jumping to solutions. Our approach emphasizes diagnosis, systems thinking, and long-term outcomes over short-term delivery.",
  cta: {
    text: "Get Started",
    href: "/contact",
  },
} as const;
