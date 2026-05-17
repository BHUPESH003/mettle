import { Icons } from "@/lib/icons";

interface ProblemCard {
  icon: keyof typeof Icons;
  number: string;
  title: string;
  description: string;
  signals: [string, string];
  impact: string;
}

const problemCards: ProblemCard[] = [
  {
    icon: "alertTriangle",
    number: "01",
    title: "Disconnected Tools",
    description:
      "Systems that don't communicate, creating silos and manual workarounds.",
    signals: [
      "Teams maintain the same data in multiple places.",
      "Status updates depend on manual follow-ups.",
    ],
    impact:
      "Execution slows down because work is split across tools instead of flowing through one operational system.",
  },
  {
    icon: "lightbulb",
    number: "02",
    title: "Half-Built Systems",
    description:
      "Solutions implemented partially, leading to inconsistent processes and user confusion.",
    signals: [
      "Critical workflows still rely on exceptions and side notes.",
      "Different teams use different versions of the same process.",
    ],
    impact:
      "Adoption drops because people cannot trust the system to handle real edge cases.",
  },
  {
    icon: "clock",
    number: "03",
    title: "Rushed Decisions",
    description:
      "Choices made under time pressure without considering long-term implications.",
    signals: [
      "Quick fixes become permanent defaults.",
      "Dependencies are added before ownership is clear.",
    ],
    impact:
      "Near-term speed creates long-term drag, increasing rework and reducing strategic flexibility.",
  },
  {
    icon: "trendingUp",
    number: "04",
    title: "Unmanaged Growth",
    description:
      "Scaling without clear systems, leading to chaos and lost productivity.",
    signals: [
      "Headcount grows but handoffs still happen informally.",
      "New projects start faster than old debt is resolved.",
    ],
    impact:
      "Complexity compounds faster than capacity, so output rises while reliability declines.",
  },
  {
    icon: "monitor",
    number: "05",
    title: "Ineffective Technology",
    description:
      "Tools that look good but don't solve real problems or improve outcomes.",
    signals: [
      "Dashboards are active, but decisions still happen from gut feel.",
      "Automation exists, but teams bypass it to get work done.",
    ],
    impact:
      "Technology spend increases without operational leverage because tooling is disconnected from real workflow constraints.",
  },
  {
    icon: "helpCircle",
    number: "06",
    title: "Unclear Problems",
    description:
      "Symptoms treated as root causes, leading to recurring issues and wasted effort.",
    signals: [
      "The same issue returns every quarter with new labels.",
      "Initiatives solve visible pain, not structural causes.",
    ],
    impact:
      "Teams stay busy but progress stalls because energy is spent reacting instead of redesigning the system.",
  },
];

export function ProblemCardsSection() {
  return (
    <section className="text-foreground">
      <div className="relative">

        {/* Intro sticky panel — full height, off-white bg */}
        <section className="sticky top-0 grid min-h-dvh w-full place-content-center overflow-hidden px-6 py-24 md:px-10 md:py-32">
          {/* Off-white base */}
          <div className="pointer-events-none absolute inset-0 bg-[#f2f4f8]" aria-hidden />
          {/* Top-centred radial blue wash */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-8%,rgba(59,130,246,0.12),transparent_58%)]" aria-hidden />
          {/* Bottom vignette — fades toward next section */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_110%,rgba(226,230,238,0.9)_0%,transparent_55%)]" aria-hidden />
          {/* Subtle blue grid */}
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.07)_1px,transparent_1px)] bg-size-[54px_54px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_50%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_50%,transparent_100%)]"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent md:text-xs">
              The Reality
            </p>
            <h2 className="text-balance text-4xl font-black leading-[1.12] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Complexity is inevitable.
              <br />
              Confusion is optional.
            </h2>
          </div>
        </section>

        {/* 6 sticky problem cards */}
        {problemCards.map((problem, index) => {
          const Icon = Icons[problem.icon];
          return (
            <section
              key={problem.number}
              className="sticky top-0 grid h-screen place-content-center overflow-hidden px-6"
            >
              {/* Off-white base */}
              <div className="absolute inset-0 bg-[#f2f4f8]" aria-hidden />
              {/* Grid lines */}
              <div
                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.07)_1px,transparent_1px)] bg-size-[54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
                aria-hidden
              />

              {/* Card */}
              <div className="relative mx-auto w-full max-w-4xl rounded-3xl border border-border bg-white/80 p-8 shadow-[0_8px_48px_-12px_rgba(0,0,0,0.1)] backdrop-blur-sm md:p-10">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent-light">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="select-none text-5xl font-black text-foreground/8">
                    {problem.number}
                  </span>
                </div>

                <h3 className="mb-4 text-3xl font-black tracking-tight text-foreground md:text-5xl">
                  {problem.title}
                </h3>
                <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  {problem.description}
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-background-secondary p-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground/70">
                      Signals You See
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {problem.signals.map((signal) => (
                        <li key={signal} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{signal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-border bg-background-secondary p-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground/70">
                      Business Impact
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {problem.impact}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Problem {index + 1} of {problemCards.length}
                </p>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
