import { Icons } from "@/lib/icons";
import type { WorkflowStepData } from "@/lib/workflow-config";
import { StepContentRenderer } from "./StepContentRenderer";

interface WorkflowStepProps {
  step: WorkflowStepData;
  isActive: boolean;
  fullViewport?: boolean;
  domId?: string;
}

export function WorkflowStep({
  step,
  isActive,
  fullViewport = true,
  domId,
}: WorkflowStepProps) {
  const Icon = Icons[step.icon];
  const conciseDescription = `${step.description.split(".")[0]}.`;

  return (
    <article
      id={domId}
      className={`relative flex items-center justify-center px-6 md:px-12 ${
        fullViewport ? "h-full w-screen" : "w-full"
      }`}
    >
      <div
        className="relative w-full max-w-5xl rounded-3xl border border-white/12 bg-slate-900/65 p-6 backdrop-blur-md md:p-8"
        style={{
          boxShadow: isActive
            ? `0 0 0 1px ${step.accentColor}55, 0 12px 80px -36px ${step.accentColor}99`
            : "0 0 0 1px rgba(255,255,255,0.05)",
        }}
      >
        <div className="mb-5 flex items-center justify-between">
          <span
            className="rounded-full border px-3 py-1 text-xs font-bold tracking-[0.2em]"
            style={{ borderColor: `${step.accentColor}66`, color: step.accentColor }}
          >
            STEP {step.number}
          </span>
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl border"
            style={{
              borderColor: `${step.accentColor}66`,
              backgroundColor: `${step.accentColor}20`,
            }}
          >
            <Icon className="h-5 w-5" style={{ color: step.accentColor }} />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.25fr_1fr] md:items-end">
          <div>
            <h3 className="mb-1 text-3xl font-black tracking-tight text-white md:text-5xl">
              {step.title}
            </h3>
            <p className="mb-2 text-lg font-semibold" style={{ color: step.accentColor }}>
              {step.subtitle}
            </p>
            <p className="mb-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              {conciseDescription}
            </p>
            <StepContentRenderer step={step} isActive={isActive} />
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-white/50">
              <span>System Signal</span>
              <span style={{ color: step.accentColor }}>Active</span>
            </div>
            <div className="space-y-2">
              {[0, 1, 2].map((node) => (
                <div key={node} className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: step.accentColor }}
                  />
                  <div className="h-px flex-1 bg-white/15" />
                  <span className="text-xs text-white/45">node-{node + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
