/**
 * Work page — merged Process + Case Studies
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { caseStudies } from "@/lib/case-studies";
import {
  WorkflowStorySection,
  WorkflowStorySectionMobile,
} from "@/components/workflow/WorkflowStorySection";
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

      {/* ── Case Studies ─────────────────────────────────────────────── */}
      <section
        id="case-studies"
        className="relative overflow-hidden bg-background-secondary py-20 md:py-28"
      >
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Case studies
            </p>
            <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Real work, real outcomes
            </h2>
            <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-accent" />
            <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
              The process above, applied to real operational problems
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                All projects
              </span>
              <div className="h-px flex-1 bg-border" />
              <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                {caseStudies.length} case studies
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {caseStudies.map((project) => {
                const Icon = Icons[project.icon];
                return (
                  <article
                    key={project.slug}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/8"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-accent/4 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                    <div className="relative flex-1 p-7 sm:p-8">
                      <div className="mb-5 flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/8 transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/15">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <span
                          aria-hidden
                          className="select-none text-5xl font-black leading-none text-border/30 transition-colors duration-300 group-hover:text-accent/15"
                        >
                          {project.number}
                        </span>
                      </div>

                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="rounded-full border border-accent/20 bg-accent/8 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-accent">
                          {project.industry}
                        </span>
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border bg-background-secondary px-2.5 py-0.5 text-xs font-semibold text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="mb-4 text-xl font-black leading-snug text-foreground transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                        {project.title}
                      </h3>

                      <div className="mb-4">
                        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground/60">
                          Context
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {project.context}
                        </p>
                      </div>

                      {project.outcome && (
                        <div className="flex items-start gap-2.5 rounded-xl border border-accent/15 bg-accent/5 px-4 py-3">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <p className="text-sm font-medium leading-relaxed text-foreground">
                            {project.outcome}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="relative border-t border-border px-7 py-5 sm:px-8">
                      <Link
                        href={`/work/${project.slug}`}
                        className="group/link flex items-center justify-between text-sm font-bold text-foreground transition-colors hover:text-accent"
                      >
                        View case study
                        <ArrowIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

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
