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
    <div className="absolute left-0 right-0 top-0 z-30 px-4 pt-4 md:px-8">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/12 bg-black/45 p-2.5 backdrop-blur-md">
        <div className="relative h-1 rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-accent transition-all duration-200"
            style={{ width: `${Math.max(2, progress * 100)}%` }}
          />
        </div>
        <div
          className="mt-3 grid gap-2 md:gap-4"
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
                className="cursor-pointer rounded-lg border px-2 py-2 text-center text-[11px] transition-all hover:border-white/30 md:px-3 md:text-xs"
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
