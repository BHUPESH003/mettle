/**
 * Design tokens for colors, spacing, radius, shadows
 * These values are consumed by Tailwind via CSS variables
 */

export const theme = {
  colors: {
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    primary: "hsl(var(--primary))",
    primaryForeground: "hsl(var(--primary-foreground))",
    secondary: "hsl(var(--secondary))",
    secondaryForeground: "hsl(var(--secondary-foreground))",
    muted: "hsl(var(--muted))",
    mutedForeground: "hsl(var(--muted-foreground))",
    accent: "hsl(var(--accent))",
    accentForeground: "hsl(var(--accent-foreground))",
    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
  },
  radius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
  },
  spacing: {
    section: "4rem",
    container: "1rem",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
} as const;
