import { Icons } from "@/lib/icons";
import type { WorkflowStepData } from "@/lib/workflow-config";
import { StepContentRenderer } from "./StepContentRenderer";
import { StepVisual } from "./StepVisual";
import { cn } from "@/lib/utils";

interface WorkflowStepProps {
  step: WorkflowStepData;
  isActive: boolean;
  fullViewport?: boolean;
  compact?: boolean;
  domId?: string;
}

export function WorkflowStep({
  step,
  isActive,
  fullViewport = true,
  compact = false,
  domId,
}: WorkflowStepProps) {
  const Icon = Icons[step.icon];

  return (
    <article
      id={domId}
      className={cn(
        "relative flex items-center justify-center",
        fullViewport ? "h-full w-full px-4 md:px-8 lg:px-12" : "w-full px-2",
      )}
    >
      <div
        className={cn(
          "relative w-full transition-[opacity,transform] duration-500",
          compact ? "max-w-5xl" : "max-w-6xl",
          isActive ? "opacity-100" : "opacity-30",
        )}
      >
        <div
          className={cn(
            "grid items-center gap-8 lg:gap-12",
            compact
              ? "lg:grid-cols-[1fr_minmax(0,0.9fr)]"
              : "lg:grid-cols-[1.1fr_minmax(0,1fr)]",
          )}
        >
          <div className="relative min-w-0">
            {/* Large watermark number */}
            <span
              aria-hidden
              className={cn(
                "pointer-events-none absolute -left-1 top-1/2 -translate-y-1/2 select-none font-departure font-black leading-none tracking-tighter text-white/5",
                compact ? "text-[7rem]" : "text-[9rem] md:text-[11rem]",
              )}
            >
              {step.number}
            </span>

            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={cn(
                    "flex items-center justify-center rounded-xl border border-accent/30 bg-accent/12",
                    compact ? "h-10 w-10" : "h-12 w-12",
                  )}
                >
                  <Icon
                    className={cn("text-accent", compact ? "h-4 w-4" : "h-5 w-5")}
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/40">
                  Phase {step.number}
                </p>
              </div>

              <h3
                className={cn(
                  "font-black tracking-tight text-white",
                  compact
                    ? "mb-1.5 text-2xl md:text-3xl"
                    : "mb-3 text-4xl md:text-5xl lg:text-6xl",
                )}
              >
                {step.title}
              </h3>
              <p
                className={cn(
                  "font-medium text-accent",
                  compact ? "mb-2.5 text-base md:text-lg" : "mb-4 text-xl md:text-2xl",
                )}
              >
                {step.subtitle}
              </p>
              <p
                className={cn(
                  "max-w-xl leading-relaxed text-white/60",
                  compact
                    ? "mb-4 text-base md:text-lg"
                    : "mb-6 text-lg md:text-xl",
                )}
              >
                {step.description}
              </p>

              <StepContentRenderer step={step} isActive={isActive} compact={compact} />
            </div>
          </div>

          <StepVisual theme={step.theme} isActive={isActive} compact={compact} />
        </div>
      </div>
    </article>
  );
}
