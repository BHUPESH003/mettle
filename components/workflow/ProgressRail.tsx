import type { WorkflowStepData } from "@/lib/workflow-config";
import { cn } from "@/lib/utils";

interface ProgressRailProps {
  steps: WorkflowStepData[];
  activeIndex: number;
  progress: number;
  onStepClick?: (index: number) => void;
}

const TRACK_INSET = "0.75rem";

export function ProgressRail({
  steps,
  activeIndex,
  progress,
  onStepClick,
}: ProgressRailProps) {
  const fillHeight = `calc((100% - 1.5rem) * ${Math.max(0.06, progress)})`;

  return (
    <aside className="relative z-30 hidden h-full w-64 shrink-0 flex-col border-r border-white/8 bg-[#0b1120] md:flex xl:w-72">
      {/* Top accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" aria-hidden />

      <div className="flex flex-1 flex-col justify-center px-5 py-8">
        <p className="mb-6 px-1 text-[10px] font-bold uppercase tracking-[0.28em] text-white/30">
          How we work
        </p>

        <div className="relative px-1">
          <div
            className="pointer-events-none absolute left-[13px] w-px bg-white/10"
            style={{ top: TRACK_INSET, bottom: TRACK_INSET }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute left-[13px] w-px origin-top bg-accent transition-[height] duration-300 ease-out"
            style={{ top: TRACK_INSET, height: fillHeight }}
            aria-hidden
          />

          <ol className="relative flex flex-col gap-1">
            {steps.map((step, index) => {
              const state =
                index < activeIndex
                  ? "done"
                  : index === activeIndex
                    ? "active"
                    : "idle";

              return (
                <li key={step.id}>
                  <button
                    type="button"
                    onClick={() => onStepClick?.(index)}
                    className={cn(
                      "group flex w-full items-start gap-3 rounded-xl px-2 py-3 text-left transition-colors",
                      state === "active" && "bg-accent/10",
                    )}
                  >
                    <span
                      className={cn(
                        "relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold font-departure transition-all",
                        state === "active" &&
                          "border-accent bg-accent text-white shadow-[0_0_18px_hsl(var(--accent)/0.45)]",
                        state === "done" &&
                          "border-accent/40 bg-accent/15 text-accent",
                        state === "idle" &&
                          "border-white/15 bg-white/5 text-white/40 group-hover:border-white/30",
                      )}
                    >
                      {step.number}
                    </span>
                    <span className="min-w-0 pt-0.5">
                      <span
                        className={cn(
                          "block text-[15px] font-bold leading-tight transition-colors",
                          state === "active"
                            ? "text-white"
                            : state === "done"
                              ? "text-white/65"
                              : "text-white/40 group-hover:text-white/60",
                        )}
                      >
                        {step.title}
                      </span>
                      {state === "active" ? (
                        <span className="mt-0.5 block text-xs leading-snug text-white/50">
                          {step.subtitle}
                        </span>
                      ) : null}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <p className="shrink-0 px-6 pb-6 text-xs leading-relaxed text-white/25">
        Scroll to move through each phase
      </p>
    </aside>
  );
}
