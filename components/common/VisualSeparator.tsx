/**
 * Visual Separator Component
 * Decorative section dividers with accent colors
 */

import { cn } from "@/lib/utils";

interface SeparatorProps {
  variant?: "gradient" | "dots" | "line";
  className?: string;
}

export function VisualSeparator({ 
  variant = "gradient", 
  className 
}: SeparatorProps) {
  if (variant === "gradient") {
    return (
      <div className={cn("relative h-px w-full overflow-hidden", className)}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20" />
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={cn("flex items-center justify-center gap-2", className)}>
        <div className="h-1.5 w-1.5 rounded-full bg-accent opacity-30" />
        <div className="h-1.5 w-1.5 rounded-full bg-accent opacity-60" />
        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
        <div className="h-1.5 w-1.5 rounded-full bg-accent opacity-60" />
        <div className="h-1.5 w-1.5 rounded-full bg-accent opacity-30" />
      </div>
    );
  }

  return (
    <div className={cn("mx-auto h-px w-24 bg-accent/30", className)} />
  );
}
