/**
 * Work page — merged Process + Case Studies
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { caseStudies } from "@/lib/case-studies";

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

const diagnosisCards = [
  {
    icon: "search" as const,
    title: "Workflow Mapping",
    description:
      "We map exactly how decisions and data move through your business today, exposing the manual workarounds that slow you down.",
  },
  {
    icon: "target" as const,
    title: "Constraint Identification",
    description:
      "We surface the true bottlenecks — technical debt, fragmented tools, unclear ownership — not just the visible symptoms.",
  },
  {
    icon: "alertTriangle" as const,
    title: "Operational Debt Audit",
    description:
      "We identify where disconnected tools and spreadsheet-first thinking are creating data silos and invisible risk.",
  },
  {
    icon: "gitBranch" as const,
    title: "Systemic Dependencies",
    description:
      "We find the hidden relationships between departments that cause one process change to break three others.",
  },
];

const architectureCards = [
  {
    icon: "layers" as const,
    title: "Modular System Design",
    description:
      "We design software that matches your specific business sequence, not a generic template that forces you to adapt.",
  },
  {
    icon: "zap" as const,
    title: "Leverage Points",
    description:
      "We identify the highest-impact areas for automation — where 20% of effort delivers 80% of the efficiency gain.",
  },
  {
    icon: "database" as const,
    title: "Unified Source of Truth",
    description:
      "We architect data pipelines that consolidate your operational knowledge into one readable, reliable system.",
  },
];

const executionCards = [
  {
    icon: "code" as const,
    title: "Custom CRM & Dashboards",
    description:
      "Production-grade tools built in React, Node, and PostgreSQL that your team actually wants to use.",
  },
  {
    icon: "zap" as const,
    title: "AI Agent Deployment",
    description:
      "Intelligent bots and agentic workflows that handle repetitive work like support triage and lead management.",
  },
  {
    icon: "workflow" as const,
    title: "Automation Pipelines",
    description:
      "Robust integrations that move data between your systems reliably, without manual intervention.",
  },
  {
    icon: "server" as const,
    title: "Scalable Infrastructure",
    description:
      "Cloud-ready, secure systems built to evolve alongside your business, not require a rewrite in 18 months.",
  },
];

const partnershipCards = [
  {
    icon: "repeat" as const,
    title: "Systems Need Refinement",
    description:
      "What works today may not work tomorrow. We help evolve systems as your business and needs change.",
  },
  {
    icon: "users" as const,
    title: "Knowledge Transfer",
    description:
      "We don't just build — we teach. Your team leaves every engagement understanding the systems they now own.",
  },
  {
    icon: "star" as const,
    title: "Long-term Value",
    description:
      "Our goal is sustainable growth. We stay involved where we can add real, compounding value.",
  },
  {
    icon: "shield" as const,
    title: "Adaptive Support",
    description:
      "As new challenges emerge, we bring the same systems thinking to help you navigate them clearly.",
  },
];

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

      {/* ── Step 01 — Understand ─────────────────────────────────────── */}
      <section id="process" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Our process
            </p>
            <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              How we work
            </h2>
            <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-accent" />
            <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
              Four steps from messy workflow to working system
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                Step 01
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="mb-12 grid items-start gap-12 md:grid-cols-2 lg:gap-20">
              <div>
                <div
                  aria-hidden
                  className="mb-2 select-none text-8xl font-black leading-none text-border/25 sm:text-9xl"
                >
                  01
                </div>
                <h3 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Understand your business
                </h3>
                <div className="mb-5 h-1 w-12 rounded-full bg-accent" />
                <p className="mb-4 text-xl font-semibold text-foreground">
                  We don&apos;t start with solutions
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Most businesses try to automate broken processes. We spend
                  time finding the root cause of friction before writing a
                  single line of code.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {diagnosisCards.map((card) => {
                  const Icon = Icons[card.icon];
                  return (
                    <div
                      key={card.title}
                      className="group rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/8"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/8 transition-colors group-hover:border-accent/40 group-hover:bg-accent/15">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <h4 className="mb-1.5 text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Step 02 — Redesign ───────────────────────────────────────── */}
      <section className="bg-background-secondary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                Step 02
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="mb-12 grid items-start gap-12 md:grid-cols-2 lg:gap-20">
              <div>
                <div
                  aria-hidden
                  className="mb-2 select-none text-8xl font-black leading-none text-border/25 sm:text-9xl"
                >
                  02
                </div>
                <h3 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Redesign your processes
                </h3>
                <div className="mb-5 h-1 w-12 rounded-full bg-accent" />
                <p className="mb-4 text-xl font-semibold text-foreground">
                  From ambiguity to direction
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Once the process is clear, we design the digital foundation
                  required to support it — modular, purposeful, and built to
                  scale.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {architectureCards.map((card) => {
                  const Icon = Icons[card.icon];
                  return (
                    <div
                      key={card.title}
                      className="group flex items-start gap-4 rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/8"
                    >
                      <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/8 transition-colors group-hover:border-accent/40 group-hover:bg-accent/15">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="mb-1 text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                          {card.title}
                        </h4>
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Step 03 — Build ──────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
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
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/8 blur-[100px] pointer-events-none" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                Step 03
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="mb-12 max-w-2xl">
              <div
                aria-hidden
                className="mb-2 select-none text-8xl font-black leading-none text-white/6 sm:text-9xl"
              >
                03
              </div>
              <h3 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Build your system
              </h3>
              <div className="mb-5 h-1 w-12 rounded-full bg-accent" />
              <p className="text-xl font-semibold text-white/80">
                Engineering-led delivery
              </p>
            </div>

            <div className="mb-12 grid gap-5 md:grid-cols-2">
              {executionCards.map((card) => {
                const Icon = Icons[card.icon];
                return (
                  <div
                    key={card.title}
                    className="group flex items-start gap-4 rounded-2xl border border-white/8 bg-white/4 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-white/7 backdrop-blur-sm"
                  >
                    <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 transition-colors group-hover:border-accent/50 group-hover:bg-accent/20">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="mb-1.5 text-base font-bold text-white">
                        {card.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-white/55">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Step 04 — Automate & Optimize ────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                Step 04
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="mb-12 grid items-start gap-12 md:grid-cols-2 lg:gap-20">
              <div>
                <div
                  aria-hidden
                  className="mb-2 select-none text-8xl font-black leading-none text-border/25 sm:text-9xl"
                >
                  04
                </div>
                <h3 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Automate and optimize
                </h3>
                <div className="mb-5 h-1 w-12 rounded-full bg-accent" />
                <p className="mb-4 text-xl font-semibold text-foreground">
                  Business evolution doesn&apos;t stop
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Shipping is not the finish line. We stay involved where we
                  can add real value — refining, teaching, and adapting
                  alongside your growth.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {partnershipCards.map((card) => {
                  const Icon = Icons[card.icon];
                  return (
                    <div
                      key={card.title}
                      className="group rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/8"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/8 transition-colors group-hover:border-accent/40 group-hover:bg-accent/15">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <h4 className="mb-1.5 text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

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
