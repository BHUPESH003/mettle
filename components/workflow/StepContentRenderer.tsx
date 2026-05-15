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

  return (
    <div
      className={cn(
        "grid gap-2",
        compact ? "grid-cols-1 sm:grid-cols-2" : "gap-3 sm:grid-cols-2",
      )}
    >
      {step.metrics.slice(0, 2).map((metric) => (
        <div
          key={metric}
          className={cn(
            "rounded-panel border border-white/10 bg-white/5 text-white/75",
            compact ? "px-2 py-1 text-[10px]" : "px-3 py-2 text-xs",
          )}
        >
          {metric}
        </div>
      ))}
    </div>
  );
}
