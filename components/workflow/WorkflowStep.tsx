import { Icons } from "@/lib/icons";
import type { WorkflowStepData } from "@/lib/workflow-config";
import { StepContentRenderer } from "./StepContentRenderer";
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
  const conciseDescription = `${step.description.split(".")[0]}.`;

  return (
    <article
      id={domId}
      className={cn(
        "relative flex items-center justify-center",
        fullViewport ? "h-full w-full px-3 md:px-6" : "w-full px-1",
      )}
    >
      <div
        className={cn(
          "relative w-full border border-white/12 bg-slate-900/65 backdrop-blur-md",
          compact
            ? "max-h-[min(22rem,52vh)] max-w-4xl rounded-panel p-4 md:p-5"
            : "max-w-5xl rounded-3xl p-6 md:p-8",
        )}
        style={{
          boxShadow: isActive
            ? `0 0 0 1px ${step.accentColor}55, 0 12px 80px -36px ${step.accentColor}99`
            : "0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        <div
          className={cn(
            "flex items-center justify-between",
            compact ? "mb-3" : "mb-5",
          )}
        >
          <span
            className="rounded-pill border px-2.5 py-0.5 text-[10px] font-bold tracking-[0.2em] md:px-3 md:py-1 md:text-xs"
            style={{
              borderColor: `${step.accentColor}66`,
              color: step.accentColor,
            }}
          >
            STEP {step.number}
          </span>
          <div
            className={cn(
              "flex items-center justify-center rounded-xl border",
              compact ? "h-9 w-9" : "h-11 w-11",
            )}
            style={{
              borderColor: `${step.accentColor}66`,
              backgroundColor: `${step.accentColor}20`,
            }}
          >
            <Icon
              className={compact ? "h-4 w-4" : "h-5 w-5"}
              style={{ color: step.accentColor }}
            />
          </div>
        </div>

        <div
          className={cn(
            "grid gap-4",
            compact
              ? "md:grid-cols-[1.2fr_0.85fr] md:items-start md:gap-5"
              : "gap-6 md:grid-cols-[1.25fr_1fr] md:items-end",
          )}
        >
          <div className="min-w-0">
            <h3
              className={cn(
                "font-black tracking-tight text-white",
                compact
                  ? "mb-0.5 text-xl md:text-2xl"
                  : "mb-1 text-3xl md:text-5xl",
              )}
            >
              {step.title}
            </h3>
            <p
              className={cn(
                "font-semibold",
                compact ? "mb-1.5 text-sm" : "mb-2 text-lg",
              )}
              style={{ color: step.accentColor }}
            >
              {step.subtitle}
            </p>
            <p
              className={cn(
                "max-w-2xl leading-relaxed text-white/70",
                compact
                  ? "mb-2 text-xs md:text-sm"
                  : "mb-5 text-base md:text-lg",
              )}
            >
              {conciseDescription}
            </p>
            <StepContentRenderer step={step} isActive={isActive} compact={compact} />
          </div>

          <div
            className={cn(
              "rounded-panel border border-white/10 bg-white/3",
              compact ? "p-2.5" : "p-4",
            )}
          >
            <div
              className={cn(
                "mb-2 flex items-center justify-between uppercase tracking-[0.18em] text-white/50",
                compact ? "text-[9px]" : "text-[11px]",
              )}
            >
              <span>System Signal</span>
              <span style={{ color: step.accentColor }}>Active</span>
            </div>
            <div className={compact ? "space-y-1.5" : "space-y-2"}>
              {[0, 1, 2].map((node) => (
                <div key={node} className="flex items-center gap-2">
                  <span
                    className={cn(
                      "rounded-full",
                      compact ? "h-2 w-2" : "h-2.5 w-2.5",
                    )}
                    style={{ backgroundColor: step.accentColor }}
                  />
                  <div className="h-px flex-1 bg-white/15" />
                  <span
                    className={cn(
                      "text-white/45",
                      compact ? "text-[10px]" : "text-xs",
                    )}
                  >
                    node-{node + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
