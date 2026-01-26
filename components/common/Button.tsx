/**
 * Wrapped Button component
 * Use this for Mettle-specific button styling
 * Extends shadcn/ui Button via composition
 */

import { Button as UIButton, type ButtonProps as UIButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ButtonProps extends UIButtonProps {
  // Add Mettle-specific props here if needed
}

export function Button({ className, ...props }: ButtonProps) {
  return <UIButton className={cn(className)} {...props} />;
}
