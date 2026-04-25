/**
 * Navigation structure - Single source of truth for nav and footer links
 */

export const navigation = {
  primary: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Thinking", href: "/thinking" },
    { label: "About", href: "/about" },
  ],
  footer: [
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Thinking", href: "/thinking" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;
