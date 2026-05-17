"use client";

import { Icons } from "@/lib/icons";
import type { WorkflowStepData } from "@/lib/workflow-config";
import { cn } from "@/lib/utils";

interface WorkflowStorySectionProps {
  steps: WorkflowStepData[];
  className?: string;
}

export function WorkflowStorySection({ steps, className = "" }: WorkflowStorySectionProps) {
  return (
    <section className={cn("relative overflow-hidden bg-[#080d1a] py-24 md:py-32", className)}>

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />
      {/* Centre radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(59,130,246,0.13),transparent_65%)]" aria-hidden />
      {/* Top hairline */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/45 to-transparent" aria-hidden />

      <div className="container relative mx-auto px-6">

        {/* ── Header ── */}
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-pill border border-accent/25 bg-accent/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">Our process</span>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              From chaos<br className="hidden sm:block" /> to clarity
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/40 md:text-right">
            Four deliberate phases.<br />Every engagement, every time.
          </p>
        </div>

        {/* ── Timeline + Cards ── */}
        <div className="relative">

          {/* Horizontal connector line — desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-[26px] hidden h-px lg:block" aria-hidden>
            <div className="h-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = Icons[step.icon];
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={step.id}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:border-accent/35 hover:bg-white/[0.055] hover:shadow-[0_0_0_1px_rgba(59,130,246,0.22),0_32px_72px_-18px_rgba(59,130,246,0.18)]"
                >
                  {/* Per-card top spotlight */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-50 transition-opacity duration-500 group-hover:opacity-100"
                    style={{ background: "radial-gradient(ellipse 85% 130% at 50% 0%, rgba(59,130,246,0.16), transparent)" }}
                    aria-hidden
                  />

                  {/* ── Node + Icon row (sits on connecting line) ── */}
                  <div className="relative mb-7 flex items-center gap-3">
                    {/* Numbered node — circles sit ON the line */}
                    <div className="relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-accent/30 bg-[#080d1a] text-base font-black text-accent transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_0_4px_rgba(59,130,246,0.12),0_0_24px_rgba(59,130,246,0.5)]">
                      {step.number}
                      {/* Ping ring */}
                      <span className="absolute inset-0 rounded-full border border-accent/25 opacity-100 transition-all duration-500 group-hover:scale-[1.45] group-hover:opacity-0" />
                    </div>
                    {/* Icon box */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-accent/30 group-hover:bg-accent/10">
                      <Icon className="h-4 w-4 text-white/45 transition-colors duration-300 group-hover:text-accent" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Expanding accent bar */}
                  <div className="mb-5 h-px w-8 bg-accent/35 transition-all duration-500 group-hover:w-16 group-hover:bg-accent" />

                  {/* Title */}
                  <h3 className="mb-1.5 text-xl font-black tracking-tight text-white">
                    {step.title}
                  </h3>
                  {/* Subtitle */}
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent/65">
                    {step.subtitle}
                  </p>
                  {/* Description */}
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-white/48">
                    {step.description}
                  </p>

                  {/* Metrics */}
                  <ul className="space-y-2.5 border-t border-white/[0.06] pt-5">
                    {step.metrics.map((metric) => (
                      <li key={metric} className="flex items-center gap-2.5 text-xs text-white/38">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-accent/55 transition-colors group-hover:bg-accent" />
                        {metric}
                      </li>
                    ))}
                  </ul>

                  {/* Bottom index label */}
                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
                    Phase {step.number} of {steps.length}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Mobile simply renders the same fully-responsive component above */
export function WorkflowStorySectionMobile(_props: WorkflowStorySectionProps) {
  return null;
}
