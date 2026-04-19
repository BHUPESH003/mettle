/**
 * Capabilities page
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Areas where complexity appears and problems we help solve.",
};

interface Capability {
  number: string;
  icon: keyof typeof Icons;
  title: string;
  description: string;
  commonChallenges: string[];
  ourApproach: string;
}

const capabilities: Capability[] = [
  {
    number: "01",
    icon: "workflow",
    title: "Process Analysis & Workflow Design",
    description:
      "Auditing and rebuilding the operational sequence of your business before applying any technology.",
    commonChallenges: [
      "Manual workarounds that haven't been reviewed in years",
      "Workflows that collapse as team headcount or volume increases",
      "Bottlenecks that only one person knows how to fix",
      "Automation attempts that failed because the underlying process was broken",
    ],
    ourApproach:
      "We map how your business actually runs, strip away the friction, and design a repeatable workflow built for scale — before a single line of code is written.",
  },
  {
    number: "02",
    icon: "code",
    title: "Custom Internal Software",
    description:
      "Developing high-leverage tools that fit your unique business logic, not the other way around.",
    commonChallenges: [
      "Relying on fragmented tools and disconnected spreadsheets",
      "Outgrowing off-the-shelf CRMs and generic SaaS platforms",
      "No centralized visibility into orders, inventory, or pipeline",
      "Data silos that prevent cross-department alignment",
    ],
    ourApproach:
      "We build custom CRMs, admin panels, and operational dashboards that match your exact business rules — production-grade and built to evolve.",
  },
  {
    number: "03",
    icon: "zap",
    title: "AI Agent & Automation Pipelines",
    description:
      "Deploying autonomous systems for the repetitive operational and communication work that slows your team down.",
    commonChallenges: [
      "Support teams overwhelmed by routine policy or status inquiries",
      "Manual lead coordination that slows down sales velocity",
      "Repetitive data entry and cross-platform synchronisation",
      "No real-time responsiveness to customer inquiries",
    ],
    ourApproach:
      "We deploy intelligent agents and rule-based pipelines that handle support, sales coordination, and operations autonomously — so your team focuses on high-leverage work.",
  },
  {
    number: "04",
    icon: "barChart",
    title: "Data Systems & Operational Clarity",
    description:
      "Turning raw business activity into readable, actionable insight across every layer of your operation.",
    commonChallenges: [
      "Fragmented data making it impossible to see the full picture",
      "Manual reporting that is slow, error-prone, and always out of date",
      "Unclear ownership of data across growing teams",
      "No way to track performance metrics in real-time",
    ],
    ourApproach:
      "We design unified data pipelines and custom reporting interfaces that give you total clarity on operational status — updated in real time, readable by anyone on the team.",
  },
];

const principles = [
  {
    number: "01",
    icon: "target" as const,
    title: "Problems before solutions",
    description:
      "We never enter an engagement with a predetermined answer. Every capability we use is selected because it fits the problem — not because it's what we sell.",
  },
  {
    number: "02",
    icon: "layers" as const,
    title: "Systems, not features",
    description:
      "Single features don't solve complex problems. We think in systems — how each part connects, where the leverage points are, and what breaks when things change.",
  },
  {
    number: "03",
    icon: "repeat" as const,
    title: "Built to evolve",
    description:
      "Every system we build is designed with the assumption that your business will change. We don't build for today's requirements, we build for tomorrow's scale.",
  },
];

export default function CapabilitiesPage() {
  const ArrowIcon = Icons.arrowRight;
  const CheckIcon = Icons.check;

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[65vh] flex flex-col justify-center overflow-hidden py-20"
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
        <div className="absolute bottom-0 left-[10%] w-72 h-72 rounded-full bg-accent/7 blur-[90px] pointer-events-none" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Tag */}
            <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/6 px-4 py-2 text-sm font-semibold text-white/70 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-accent inline-block" />
              What we work on
            </div>

            <h1 className="mb-5 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-none">
              Capabilities
            </h1>

            <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-accent" />

            <p className="mb-3 text-xl font-semibold text-white/90 sm:text-2xl">
              We help with complexity wherever it appears.
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50">
              These are the areas where problems tend to emerge — not services
              we sell. Each represents a domain where systems thinking creates
              meaningful, lasting change.
            </p>

            {/* Capability indicators */}
            <div className="mx-auto mt-14 max-w-2xl">
              <div className="grid grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                {capabilities.map((cap, i) => {
                  const Icon = Icons[cap.icon];
                  return (
                    <div
                      key={cap.number}
                      className={cn(
                        "flex flex-col items-center gap-1.5 px-3 py-4 text-center",
                        i === 0 ? "bg-accent/20" : "bg-white/4"
                      )}
                    >
                      <Icon className="h-4 w-4 text-accent/80" />
                      <span className="text-xs font-semibold text-white/50 leading-tight hidden sm:block">
                        {cap.title.split(" ")[0]}
                      </span>
                      <span className="text-xs font-black text-accent/70">
                        {cap.number}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capability 01 — Process Analysis ─────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                01
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="mb-12 grid items-start gap-12 md:grid-cols-2 lg:gap-20">
              {/* Left */}
              <div>
                <div
                  aria-hidden
                  className="mb-2 select-none text-8xl font-black leading-none text-border/25 sm:text-9xl"
                >
                  01
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/8">
                  <Icons.workflow className="h-6 w-6 text-accent" />
                </div>
                <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Process Analysis &amp; Workflow Design
                </h2>
                <div className="mb-5 h-1 w-12 rounded-full bg-accent" />
                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                  {capabilities[0].description}
                </p>
                <div className="rounded-2xl border-l-4 border-accent bg-accent/5 px-7 py-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
                    Our approach
                  </p>
                  <p className="text-base font-medium leading-relaxed text-foreground">
                    {capabilities[0].ourApproach}
                  </p>
                </div>
              </div>

              {/* Right — challenges */}
              <div className="rounded-2xl border border-border bg-background-secondary p-7">
                <h3 className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                  Common challenges
                </h3>
                <ul className="space-y-4">
                  {capabilities[0].commonChallenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capability 02 — Custom Software ──────────────────────────── */}
      <section className="bg-background-secondary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                02
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="mb-12 grid items-start gap-12 md:grid-cols-2 lg:gap-20">
              {/* Left — challenges first on desktop for variety */}
              <div className="rounded-2xl border border-border bg-background p-7 md:order-2">
                <h3 className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                  Common challenges
                </h3>
                <ul className="space-y-4">
                  {capabilities[1].commonChallenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — heading */}
              <div className="md:order-1">
                <div
                  aria-hidden
                  className="mb-2 select-none text-8xl font-black leading-none text-border/25 sm:text-9xl"
                >
                  02
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/8">
                  <Icons.code className="h-6 w-6 text-accent" />
                </div>
                <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Custom Internal Software
                </h2>
                <div className="mb-5 h-1 w-12 rounded-full bg-accent" />
                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                  {capabilities[1].description}
                </p>
                <div className="rounded-2xl border-l-4 border-accent bg-accent/5 px-7 py-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
                    Our approach
                  </p>
                  <p className="text-base font-medium leading-relaxed text-foreground">
                    {capabilities[1].ourApproach}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capability 03 — AI & Automation ──────────────────────────── */}
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
        <div className="absolute bottom-0 left-1/4 w-60 h-60 rounded-full bg-accent/6 blur-[80px] pointer-events-none" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                03
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="mb-12 grid items-start gap-12 md:grid-cols-2 lg:gap-20">
              {/* Left */}
              <div>
                <div
                  aria-hidden
                  className="mb-2 select-none text-8xl font-black leading-none text-white/6 sm:text-9xl"
                >
                  03
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                  <Icons.zap className="h-6 w-6 text-accent" />
                </div>
                <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  AI Agent &amp; Automation Pipelines
                </h2>
                <div className="mb-5 h-1 w-12 rounded-full bg-accent" />
                <p className="mb-8 text-lg leading-relaxed text-white/60">
                  {capabilities[2].description}
                </p>
                <div className="rounded-2xl border-l-4 border-accent bg-accent/10 px-7 py-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
                    Our approach
                  </p>
                  <p className="text-base font-medium leading-relaxed text-white/80">
                    {capabilities[2].ourApproach}
                  </p>
                </div>
              </div>

              {/* Right — challenges on dark */}
              <div className="rounded-2xl border border-white/8 bg-white/4 p-7 backdrop-blur-sm">
                <h3 className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-white/40">
                  Common challenges
                </h3>
                <ul className="space-y-4">
                  {capabilities[2].commonChallenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-sm leading-relaxed text-white/55">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Capability 04 — Data Systems ──────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                04
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="mb-12 grid items-start gap-12 md:grid-cols-2 lg:gap-20">
              {/* Left */}
              <div>
                <div
                  aria-hidden
                  className="mb-2 select-none text-8xl font-black leading-none text-border/25 sm:text-9xl"
                >
                  04
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/8">
                  <Icons.barChart className="h-6 w-6 text-accent" />
                </div>
                <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Data Systems &amp; Operational Clarity
                </h2>
                <div className="mb-5 h-1 w-12 rounded-full bg-accent" />
                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                  {capabilities[3].description}
                </p>
                <div className="rounded-2xl border-l-4 border-accent bg-accent/5 px-7 py-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
                    Our approach
                  </p>
                  <p className="text-base font-medium leading-relaxed text-foreground">
                    {capabilities[3].ourApproach}
                  </p>
                </div>
              </div>

              {/* Right — challenges */}
              <div className="rounded-2xl border border-border bg-background-secondary p-7">
                <h3 className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                  Common challenges
                </h3>
                <ul className="space-y-4">
                  {capabilities[3].commonChallenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Principles banner ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 md:py-24"
        style={{ background: "hsl(var(--primary))" }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              How we think
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              The principles behind every capability
            </h2>
          </div>

          <div className="mx-auto max-w-5xl grid gap-5 md:grid-cols-3">
            {principles.map((p) => {
              const Icon = Icons[p.icon];
              return (
                <div
                  key={p.number}
                  className="group rounded-2xl border border-white/8 bg-white/4 p-7 transition-all duration-300 hover:border-accent/30 hover:bg-white/7"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 transition-colors group-hover:border-accent/50 group-hover:bg-accent/20">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="mb-3 text-2xl font-black leading-none text-accent/30 transition-colors group-hover:text-accent/60">
                    {p.number}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-white leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            {/* Callout */}
            <div className="mb-10 inline-flex flex-col items-start gap-3 rounded-2xl border border-border bg-background-secondary px-8 py-6 text-left">
              {[
                "We don't fit you into a capability — we find where the real problem is",
                "Every engagement starts with diagnosis, not a service menu",
                "Your challenge may span multiple areas — that's expected",
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
              Every business is unique
            </h2>
            <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-accent" />
            <p className="mb-3 text-lg leading-relaxed text-foreground">
              These areas represent common patterns we&apos;ve seen — your specific
              challenges might not fit neatly into any single category.
            </p>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              That&apos;s why we start with understanding your situation, not by
              fitting you into our framework.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group inline-flex items-center gap-2 px-10 py-6 text-base font-semibold shadow-lg shadow-accent/25"
                )}
              >
                Discuss your challenges
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/how-we-work"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-10 py-6 text-base font-semibold"
                )}
              >
                See how we work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
