/**
 * About page
 * Why Mettle exists, how Mettle thinks
 */

import type { Metadata } from "next";
import Link from "next/link";
import Earth from "@/components/ui/globe";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: "How Mettle thinks about work, systems, and growth.",
};

interface Belief {
  number: string;
  icon: keyof typeof Icons;
  title: string;
  description: string;
}

interface Value {
  number: string;
  icon: keyof typeof Icons;
  title: string;
  description: string;
}

const coreBeliefs: Belief[] = [
  {
    number: "01",
    icon: "workflow",
    title: "Process comes first, AI second",
    description:
      "Adding AI to a broken process just makes mistakes happen faster. We clinically audit your business workflows to fix the logic before applying any technology.",
  },
  {
    number: "02",
    icon: "layers",
    title: "Systems over decks",
    description:
      "We don't deliver 'strategy' PDFs. We deliver production-grade code, custom CRMs, and automation pipelines that live in your business and drive real output.",
  },
  {
    number: "03",
    icon: "zap",
    title: "Execution is the strategy",
    description:
      "Most consulting fails because of the gap between advice and action. We bridge that gap by owning the implementation from architecture to iteration.",
  },
  {
    number: "04",
    icon: "code",
    title: "Technology as leverage",
    description:
      "We choose tools because they provide the best leverage for your business constraints — not because they're trending.",
  },
];

const values: Value[] = [
  {
    number: "01",
    icon: "target",
    title: "Clarity over complexity",
    description:
      "We work to make your operations readable and repeatable, not more convoluted.",
  },
  {
    number: "02",
    icon: "cpu",
    title: "Engineering-led",
    description:
      "Our founders are builders. We solve problems with an engineer's mindset of efficiency and scale.",
  },
  {
    number: "03",
    icon: "checkCircle",
    title: "Honest partnerships",
    description:
      "We tell you when a process is broken or when AI isn't the right tool for the job.",
  },
  {
    number: "04",
    icon: "users",
    title: "Founder-to-Founder",
    description:
      "We understand the pressure of scaling. We work as a direct extension of your core team.",
  },
];

const distinctives = [
  {
    icon: "rocket" as const,
    title: "Built by engineers",
    description:
      "Not a consultancy that hires engineers. We are engineers who consult. Every recommendation comes from people who've shipped.",
  },
  {
    icon: "repeat" as const,
    title: "We own the outcome",
    description:
      "We don't hand off a document and disappear. We stay in the work until the system runs and the problem is solved.",
  },
  {
    icon: "shield" as const,
    title: "No vanity metrics",
    description:
      "We measure what changes operationally — hours saved, errors reduced, decisions made faster. Not impressions or slide count.",
  },
];

export default function AboutPage() {
  const ArrowIcon = Icons.arrowRight;
  const CheckIcon = Icons.check;

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[65vh] flex flex-col justify-center overflow-hidden py-20"
        style={{ background: "hsl(var(--primary))" }}
      >
        {/* Dot field + COBE globe (reference UI) */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(rgba(88, 117, 214, 0.22) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="absolute inset-0 flex items-end justify-center pb-2 md:items-center md:justify-center md:pb-0">
            <div
              className="relative w-[min(92vw,540px)] max-w-none md:w-[min(88vw,620px)] [filter:drop-shadow(0_0_48px_rgba(59,130,246,0.5))_drop-shadow(0_0_120px_rgba(59,130,246,0.25))]"
              aria-hidden
            >
              <Earth className="mx-auto max-w-none w-full" />
            </div>
          </div>
        </div>
        {/* Light structure grid (keeps depth; very subtle) */}
        <div
          className="pointer-events-none absolute inset-0 z-1 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        {/* Blue blobs */}
        <div className="pointer-events-none absolute top-1/4 right-[15%] z-1 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-[10%] z-1 h-72 w-72 rounded-full bg-accent/7 blur-[90px]" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Tag */}
            <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/6 px-4 py-2 text-sm font-semibold text-white/70 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-accent inline-block" />
              Who we are
            </div>

            <h1 className="mb-5 text-5xl font-semibold tracking-tighter leading-[100%] bg-linear-to-b from-[#edeffd] to-[#06152e] bg-clip-text text-transparent sm:text-6xl md:text-7xl lg:text-8xl">
              About Mettle
            </h1>

            <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-accent opacity-80" />

            <p className="mb-3 text-xl font-semibold text-white/90 sm:text-2xl">
              An AI-first execution firm built by engineers.
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50">
              We help founders navigate operational complexity — not with decks
              and recommendations, but with systems that run and problems that
              stay solved.
            </p>
          </div>
        </div>
      </section>

      {/* ── Core beliefs ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {/* Section label */}
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                Our approach
              </span>
              <div className="h-px flex-1 bg-border" />
              <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                How we think about work
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {coreBeliefs.map((belief) => {
                const Icon = Icons[belief.icon];
                return (
                  <div
                    key={belief.number}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/8 sm:p-8"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-accent/4 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                    {/* Top row: icon + number */}
                    <div className="relative mb-5 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/8 transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/15">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <span
                        aria-hidden
                        className="select-none text-5xl font-black leading-none text-border/30 transition-colors duration-300 group-hover:text-accent/15"
                      >
                        {belief.number}
                      </span>
                    </div>

                    <h3 className="relative mb-3 text-xl font-black leading-snug text-foreground transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                      {belief.title}
                    </h3>
                    {/* Blue accent rule under title */}
                    <div className="relative mb-4 h-0.5 w-8 rounded-full bg-accent/40 transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
                    <p className="relative text-sm leading-relaxed text-muted-foreground">
                      {belief.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Manifesto strip ──────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: "hsl(var(--primary))" }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            aria-hidden
            className="select-none text-[22rem] font-black leading-none text-white/[0.02]"
          >
            M
          </span>
        </div>
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-accent/8 blur-[120px] pointer-events-none" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              What we believe
            </p>
            <blockquote className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              "Execution is the strategy.
              <br />
              <span className="text-accent">We don't advise. We build.</span>"
            </blockquote>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
              Every engagement starts with a real problem and ends with a system
              that runs in production. The gap between those two points is where
              we work.
            </p>
          </div>
        </div>
      </section>

      {/* ── What we value ────────────────────────────────────────────── */}
      <section className="bg-background-secondary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {/* Section label */}
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                What we value
              </span>
              <div className="h-px flex-1 bg-border" />
              <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                The principles we operate by
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {values.map((value) => {
                const Icon = Icons[value.icon];
                return (
                  <div
                    key={value.number}
                    className="group relative flex gap-5 rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 sm:p-8"
                  >
                    {/* Left: icon */}
                    <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/8 transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/15">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>

                    {/* Right: content */}
                    <div className="min-w-0">
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-xs font-black text-accent/50">
                          {value.number}
                        </span>
                      </div>
                      <h3 className="mb-2 text-lg font-black text-foreground transition-colors duration-300 group-hover:text-accent sm:text-xl">
                        {value.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── What makes us different ──────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 md:py-24"
        style={{ background: "hsl(var(--primary))" }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/7 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Built different
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Why founders work with us
            </h2>
          </div>

          <div className="mx-auto max-w-5xl grid gap-5 md:grid-cols-3">
            {distinctives.map((item) => {
              const Icon = Icons[item.icon];
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/8 bg-white/4 p-7 transition-all duration-300 hover:border-accent/30 hover:bg-white/7"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 transition-colors group-hover:border-accent/50 group-hover:bg-accent/20">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {item.description}
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
                "If our approach to complexity resonates — let's talk",
                "We work with founders navigating real operational challenges",
                "Every engagement starts with understanding, not a proposal",
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
              Work with us
            </h2>
            <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-accent" />
            <p className="mb-3 text-lg leading-relaxed text-foreground">
              We don&apos;t start with proposals or pitches.
            </p>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              We start with understanding your situation — then we figure out
              together if and how we can help.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group inline-flex items-center gap-2 px-10 py-6 text-base font-semibold shadow-lg shadow-accent/25",
                )}
              >
                Start a conversation
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/work"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-10 py-6 text-base font-semibold",
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
