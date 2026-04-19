import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/brand";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Our consulting-led approach to handling complexity and creating clarity.",
};

const phases = [
  { number: "01", label: "Diagnosis" },
  { number: "02", label: "Architecture" },
  { number: "03", label: "Execution" },
  { number: "04", label: "Partnership" },
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

const principles = [
  {
    number: "01",
    title: "Process first, automation second",
    description:
      "Automating a broken process just makes mistakes faster. We fix the workflow before touching the technology.",
  },
  {
    number: "02",
    title: "Execution over advice",
    description:
      "We don't deliver slide decks. We deliver working systems. Real problems need real code, not PDFs.",
  },
  {
    number: "03",
    title: "Clarity compounds over time",
    description:
      "A clear system reduces cognitive load and frees your team to focus on growth rather than constant firefighting.",
  },
];

export default function HowWeWorkPage() {
  const ArrowIcon = Icons.arrowRight;
  const CheckIcon = Icons.check;

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[75vh] flex flex-col justify-center overflow-hidden py-20"
        style={{ background: "hsl(var(--primary))" }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        {/* Blue blobs */}
        <div className="absolute top-1/4 right-[15%] w-96 h-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-[10%] w-72 h-72 rounded-full bg-accent/8 blur-[90px] pointer-events-none" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Tag */}
            <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/6 px-4 py-2 text-sm font-semibold text-white/70 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-accent inline-block" />
              Our process
            </div>

            <h1 className="mb-5 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-none">
              How We Work
            </h1>

            {/* Blue accent line */}
            <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-accent" />

            <p className="mb-3 text-xl font-semibold text-white/90 sm:text-2xl">
              Complexity is not a failure — it&apos;s a signal.
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50">
              Most problems are misunderstood, not unsolved. We bring clarity
              before action — every time.
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
          </div>
        </div>
      </section>

      {/* ── Step 01 — Diagnosis & Audit ──────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {/* Step label row */}
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                Step 01
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Two-column layout */}
            <div className="mb-12 grid items-start gap-12 md:grid-cols-2 lg:gap-20">
              {/* Left — heading */}
              <div>
                <div
                  aria-hidden
                  className="mb-2 select-none text-8xl font-black leading-none text-border/25 sm:text-9xl"
                >
                  01
                </div>
                <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                  Diagnosis &amp; Audit
                </h2>
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

              {/* Right — 2×2 icon cards */}
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
                      <h3 className="mb-1.5 text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Callout */}
            <div className="rounded-2xl border-l-4 border-accent bg-accent/5 px-8 py-6">
              <p className="text-lg font-medium leading-relaxed text-foreground">
                The real problem is often not the obvious one. We dig deeper to
                find what&apos;s actually causing the complexity — not just what
                looks like the problem on the surface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Step 02 — System Architecture ────────────────────────────── */}
      <section className="bg-background-secondary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {/* Step label row */}
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                Step 02
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Two-column layout */}
            <div className="mb-12 grid items-start gap-12 md:grid-cols-2 lg:gap-20">
              {/* Left — heading */}
              <div>
                <div
                  aria-hidden
                  className="mb-2 select-none text-8xl font-black leading-none text-border/25 sm:text-9xl"
                >
                  02
                </div>
                <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                  System Architecture
                </h2>
                <div className="mb-5 h-1 w-12 rounded-full bg-accent" />
                <p className="mb-4 text-xl font-semibold text-foreground">
                  From ambiguity to direction
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Once the process is fixed, we design the digital foundation
                  required to support it — modular, purposeful, and built to
                  scale.
                </p>
              </div>

              {/* Right — 3 stacked cards */}
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
                        <h3 className="mb-1 text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Callout */}
            <div className="rounded-2xl border-l-4 border-accent bg-accent/5 px-8 py-6">
              <p className="text-lg font-medium leading-relaxed text-foreground">
                This is where Mettle&apos;s thinking strength shows. We don&apos;t just
                build tools — we build the infrastructure for your next stage
                of growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Step 03 — Execution & Implementation ─────────────────────── */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: "hsl(var(--primary))" }}
      >
        {/* Grid overlay */}
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
            {/* Step label row */}
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                Step 03
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Heading */}
            <div className="mb-12 max-w-2xl">
              <div
                aria-hidden
                className="mb-2 select-none text-8xl font-black leading-none text-white/6 sm:text-9xl"
              >
                03
              </div>
              <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                Execution &amp; Implementation
              </h2>
              <div className="mb-5 h-1 w-12 rounded-full bg-accent" />
              <p className="text-xl font-semibold text-white/80">
                Engineering-led delivery
              </p>
            </div>

            {/* 2×2 grid — dark cards */}
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
                      <h3 className="mb-1.5 text-base font-bold text-white">
                        {card.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/55">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Closing statement */}
            <p className="text-lg font-medium leading-relaxed text-white/55">
              We don&apos;t just deliver a codebase. We deliver a working system
              ready to run your business operations on day one.
            </p>
          </div>
        </div>
      </section>

      {/* ── Step 04 — Ongoing Partnership ────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {/* Step label row */}
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                Step 04
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {/* Two-column layout */}
            <div className="mb-12 grid items-start gap-12 md:grid-cols-2 lg:gap-20">
              {/* Left — heading */}
              <div>
                <div
                  aria-hidden
                  className="mb-2 select-none text-8xl font-black leading-none text-border/25 sm:text-9xl"
                >
                  04
                </div>
                <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                  Ongoing Partnership
                </h2>
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

              {/* Right — 2×2 icon cards */}
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
                      <h3 className="mb-1.5 text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Closing callout */}
            <div className="rounded-2xl border border-border bg-background-secondary px-8 py-6 text-center">
              <p className="text-lg font-medium leading-relaxed text-foreground">
                Mettle partners with founders through growth, not just
                projects. We&apos;re here for the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Principles ───────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 md:py-24"
        style={{ background: "hsl(var(--primary))" }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Core principles
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              What guides every engagement
            </h2>
          </div>

          <div className="mx-auto max-w-5xl grid gap-5 md:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.number}
                className="group rounded-2xl border border-white/8 bg-white/4 p-7 transition-all duration-300 hover:border-accent/30 hover:bg-white/7"
              >
                <div className="mb-4 text-3xl font-black leading-none text-accent/40 transition-colors group-hover:text-accent/70">
                  {p.number}
                </div>
                <h3 className="mb-3 text-lg font-bold text-white leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            {/* Checklist */}
            <div className="mb-10 inline-flex flex-col items-start gap-3 rounded-2xl border border-border bg-background-secondary px-8 py-6 text-left">
              {[
                "No proposals before we understand your problem",
                "No pitch decks — just direct conversation",
                "Clarity on fit before any commitment",
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

            <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Ready to work differently?
            </h2>
            <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-accent" />
            <p className="mb-3 text-lg leading-relaxed text-foreground sm:text-xl">
              If you&apos;re navigating complexity and want clarity before action,
              let&apos;s explore how we can help.
            </p>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              We don&apos;t sell services — we start conversations about real
              problems.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group inline-flex items-center gap-2 px-10 py-6 text-base font-semibold shadow-lg shadow-accent/25"
                )}
              >
                Start a conversation
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/work"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-10 py-6 text-base font-semibold"
                )}
              >
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
