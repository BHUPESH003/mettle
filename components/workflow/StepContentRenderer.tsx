import type { WorkflowStepData } from "@/lib/workflow-config";

interface StepContentRendererProps {
  step: WorkflowStepData;
  isActive: boolean;
}

export function StepContentRenderer({ step, isActive }: StepContentRendererProps) {
  if (step.renderNode) return <>{step.renderNode(isActive)}</>;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {step.metrics.slice(0, 2).map((metric) => (
        <div
          key={metric}
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75"
        >
          {metric}
        </div>
      ))}
    </div>
  );
}
