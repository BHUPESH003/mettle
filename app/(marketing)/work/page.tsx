/**
 * Work page — merged Process + Case Studies
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  WorkflowStorySection,
  WorkflowStorySectionMobile,
} from "@/components/workflow/WorkflowStorySection";
import { WorkProjectList } from "@/components/work/WorkProjectList";
import { workflowSteps } from "@/lib/workflow-config";

export const metadata: Metadata = {
  title: "Work",
  description:
    "How we work — and what we've built. Our four-step process and the case studies that came out of it.",
};

const phases = [
  { number: "01", label: "Understand" },
  { number: "02", label: "Redesign" },
  { number: "03", label: "Build" },
  { number: "04", label: "Optimize" },
] as const;

const stats = [
  { value: "6", label: "Case studies" },
  { value: "4+", label: "Industries" },
  { value: "70h", label: "Saved per week" },
] as const;

export default function WorkPage() {
  const ArrowIcon = Icons.arrowRight;
  const CheckIcon = Icons.check;

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden py-20"
        style={{ background: "hsl(var(--primary))" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div className="absolute top-1/4 right-[15%] w-96 h-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-[10%] w-72 h-72 rounded-full bg-accent/7 blur-[90px] pointer-events-none" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/6 px-4 py-2 text-sm font-semibold text-white/70 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-accent inline-block" />
              Process &amp; case studies
            </div>

            <h1 className="mb-5 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-none">
              Our Work
            </h1>

            <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-accent" />

            <p className="mb-3 text-xl font-semibold text-white/90 sm:text-2xl">
              How we work — and what we&apos;ve built.
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50">
              Our four-step process, applied to real operational problems.
              Every project here started with a conversation, not a brief.
            </p>

            {/* Phase indicator */}
            <div className="mx-auto mt-14 max-w-2xl">
              <div className="grid grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                {phases.map((phase, i) => (
                  <div
                    key={phase.number}
                    className={cn(
                      "flex flex-col items-center gap-1 px-4 py-4 text-center",
                      i === 0 ? "bg-accent/20" : "bg-white/4"
                    )}
                  >
                    <span className="text-xs font-black tracking-widest text-accent">
                      {phase.number}
                    </span>
                    <span className="text-xs font-semibold text-white/60">
                      {phase.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats row */}
            <div className="mx-auto mt-8 max-w-lg">
              <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center gap-1 bg-white/4 px-4 py-4 text-center"
                  >
                    <span className="text-2xl font-black text-accent">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-white/50">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#070C14] pt-16 text-white md:pt-20">
        <div className="container mx-auto px-4 pb-10 text-center md:pb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Our process
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            How we work
          </h2>
          <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-accent" />
          <p className="mx-auto max-w-2xl text-xl font-medium text-white/55 sm:text-2xl">
            Four steps from messy workflow to working system
          </p>
        </div>
      </section>
      <WorkflowStorySection steps={workflowSteps} />
      <WorkflowStorySectionMobile steps={workflowSteps} />

      <WorkProjectList />

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-10 inline-flex flex-col items-start gap-3 rounded-2xl border border-border bg-background-secondary px-8 py-6 text-left">
              {[
                "We start by understanding — not pitching",
                "Every system is tailored to how your business actually runs",
                "Outcomes over deliverables — always",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent">
                    <CheckIcon className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">
              Let&apos;s fix how your business operates
            </h2>
            <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-accent" />
            <p className="mb-10 text-lg leading-relaxed text-foreground">
              We&apos;ll understand your workflow and show you where things
              can improve.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group inline-flex items-center gap-2 px-10 py-6 text-base font-semibold shadow-lg shadow-accent/25"
                )}
              >
                Book a call
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-10 py-6 text-base font-semibold"
                )}
              >
                See our services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
