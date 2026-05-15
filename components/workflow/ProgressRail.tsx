import type { WorkflowStepData } from "@/lib/workflow-config";

interface ProgressRailProps {
  steps: WorkflowStepData[];
  activeIndex: number;
  progress: number;
  onStepClick?: (index: number) => void;
}

export function ProgressRail({
  steps,
  activeIndex,
  progress,
  onStepClick,
}: ProgressRailProps) {
  return (
    <div className="relative z-30 shrink-0 px-3 py-2 md:px-5 md:py-3">
      <div className="mx-auto max-w-5xl rounded-panel border border-white/12 bg-black/50 p-2 backdrop-blur-md">
        <div className="relative h-0.5 rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-accent transition-all duration-200"
            style={{ width: `${Math.max(2, progress * 100)}%` }}
          />
        </div>
        <div
          className="mt-2 grid gap-1.5 md:gap-2"
          style={{
            gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
          }}
        >
          {steps.map((step, index) => {
            const state =
              index < activeIndex
                ? "done"
                : index === activeIndex
                  ? "active"
                  : "idle";
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => onStepClick?.(index)}
                className="cursor-pointer rounded-panel border px-1.5 py-1.5 text-center text-[10px] transition-all hover:border-white/30 md:px-2.5 md:py-2 md:text-[11px]"
                style={{
                  borderColor:
                    state === "idle"
                      ? "rgba(255,255,255,0.14)"
                      : `${step.accentColor}77`,
                  backgroundColor:
                    state === "active"
                      ? `${step.accentColor}20`
                      : "rgba(255,255,255,0.02)",
                  color:
                    state === "idle"
                      ? "rgba(255,255,255,0.55)"
                      : "rgba(255,255,255,0.92)",
                }}
              >
                <span className="mr-1 font-bold">{step.number}</span>
                {step.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
