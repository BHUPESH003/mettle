/**
 * Design tokens for colors, spacing, radius, shadows
 * Deep Teal/Slate color system - consulting-grade, trustworthy
 * These values are consumed by Tailwind via CSS variables
 */

export const theme = {
  colors: {
    // Base
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    backgroundSecondary: "hsl(var(--background-secondary))",
    backgroundMuted: "hsl(var(--background-muted))",
    
    // Primary - Deep Teal/Slate
    primary: "hsl(var(--primary))",
    primaryForeground: "hsl(var(--primary-foreground))",
    primaryHover: "hsl(var(--primary-hover))",
    primaryLight: "hsl(var(--primary-light))",
    
    // Accent - Bright Teal
    accent: "hsl(var(--accent))",
    accentForeground: "hsl(var(--accent-foreground))",
    accentHover: "hsl(var(--accent-hover))",
    accentLight: "hsl(var(--accent-light))",
    accentDark: "hsl(var(--accent-dark))",
    
    // Secondary
    secondary: "hsl(var(--secondary))",
    secondaryForeground: "hsl(var(--secondary-foreground))",
    secondaryHover: "hsl(var(--secondary-hover))",
    
    // Muted
    muted: "hsl(var(--muted))",
    mutedForeground: "hsl(var(--muted-foreground))",
    mutedTextSubtle: "hsl(var(--muted-text-subtle))",
    
    // Borders
    border: "hsl(var(--border))",
    borderSubtle: "hsl(var(--border-subtle))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
    
    // Semantic
    success: "hsl(var(--success))",
    successForeground: "hsl(var(--success-foreground))",
    warning: "hsl(var(--warning))",
    warningForeground: "hsl(var(--warning-foreground))",
    destructive: "hsl(var(--destructive))",
    destructiveForeground: "hsl(var(--destructive-foreground))",
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
