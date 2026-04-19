import { Icons } from "@/lib/icons";

interface Pattern {
  icon: keyof typeof Icons;
  number: string;
  problem: string;
  insight: string;
  outcome: string;
}

const patterns: Pattern[] = [
  {
    icon: "package",
    number: "01",
    problem: "Manual inventory and order chaos as volume scaled",
    insight:
      "Fragmented visibility was the real bottleneck, not the staff speed",
    outcome:
      "A centralized operations panel that halved fulfillment time and eliminated sync errors",
  },
  {
    icon: "messageSquare",
    number: "02",
    problem: "Support teams overwhelmed by routine policy inquiries",
    insight: "The solution was intent-based navigation, not more human agents",
    outcome:
      "A specialized automation bot that handles routine queries autonomously without friction",
  },
  {
    icon: "workflow",
    number: "03",
    problem: "Operational data siloed in fragmented spreadsheets",
    insight:
      "Businesses need a source of truth that matches their actual workflow sequence",
    outcome:
      "Custom workflow systems that provide real-time clarity across sales, ops, and reporting",
  },
];

export function WorkPatternsSection() {
  return (
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
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-accent/8 blur-[90px] pointer-events-none" />

      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Case Studies
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            The patterns we&apos;ve seen
          </h2>
          <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-accent" />
          <p className="text-xl font-medium text-white/60 sm:text-2xl">
            Common complexity across different businesses
          </p>
        </div>

        {/* Pattern cards */}
        <div className="mx-auto mb-12 max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {patterns.map((pattern) => {
              const Icon = Icons[pattern.icon];
              return (
                <div
                  key={pattern.number}
                  className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-accent/40 hover:bg-white/8"
                >
                  {/* Top row: icon + number */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 transition-colors duration-300 group-hover:border-accent/60 group-hover:bg-accent/20">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <span
                      aria-hidden
                      className="select-none text-5xl font-black leading-none text-white/8 transition-colors duration-300 group-hover:text-accent/20"
                    >
                      {pattern.number}
                    </span>
                  </div>

                  {/* Problem */}
                  <div className="mb-5">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-white/40">
                        Problem
                      </span>
                    </div>
                    <p className="text-base font-semibold leading-snug text-white sm:text-lg">
                      {pattern.problem}
                    </p>
                  </div>

                  {/* Insight */}
                  <div className="mb-5">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-white/40">
                        Insight
                      </span>
                    </div>
                    <p className="text-base leading-relaxed text-white/60">
                      {pattern.insight}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="text-xs font-bold uppercase tracking-wider text-accent/70">
                        Outcome
                      </span>
                    </div>
                    <p className="text-base leading-relaxed text-white/80">
                      {pattern.outcome}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-8 h-px w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-0 bg-linear-to-r from-accent to-accent-dark transition-all duration-500 group-hover:w-full" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto max-w-xl text-center">
          <p className="text-lg font-medium leading-relaxed text-white/60 sm:text-xl">
            Each situation is unique, but the approach to complexity is
            consistent.
          </p>
        </div>
      </div>
    </section>
  );
}
