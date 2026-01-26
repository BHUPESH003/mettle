/**
 * Navigation structure - Single source of truth for nav and footer links
 */

export const navigation = {
  primary: [
    { label: "Home", href: "/" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Work", href: "/work" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Thinking", href: "/thinking" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  footer: [
    { label: "About", href: "/about" },
    { label: "How We Work", href: "/how-we-work" },
    { label: "Work", href: "/work" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "Thinking", href: "/thinking" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;
