import { Icons } from "@/lib/icons";
import type { WorkflowStepData } from "@/lib/workflow-config";
import { cn } from "@/lib/utils";

interface StepContentRendererProps {
  step: WorkflowStepData;
  isActive: boolean;
  compact?: boolean;
}

export function StepContentRenderer({
  step,
  isActive,
  compact = false,
}: StepContentRendererProps) {
  if (step.renderNode) return <>{step.renderNode(isActive)}</>;

  const Check = Icons.check;

  return (
    <ul className={cn("space-y-2.5", compact ? "mt-2" : "mt-3")}>
      {step.metrics.slice(0, 3).map((metric) => (
        <li
          key={metric}
          className={cn(
            "flex items-start gap-3 text-foreground/70",
            compact ? "text-sm md:text-base" : "text-base md:text-lg",
          )}
        >
          <span
            className={cn(
              "mt-0.5 flex shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent",
              compact ? "h-5 w-5" : "h-6 w-6",
            )}
          >
            <Check className={compact ? "h-3 w-3" : "h-3.5 w-3.5"} strokeWidth={2.5} />
          </span>
          <span className="leading-snug font-medium">{metric}</span>
        </li>
      ))}
    </ul>
  );
}
