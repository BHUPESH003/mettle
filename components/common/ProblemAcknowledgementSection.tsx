import { Icons } from "@/lib/icons";
import { cn } from "@/lib/utils";

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

/** Deep navy base — continuous with hero, matches reference screenshot */
const realitySurface = "bg-[#000510]";

export function ProblemAcknowledgementSection() {
  return (
    <section className={cn(realitySurface, "text-white")}>
      <div className="relative">
        {/* Intro — same palette as reference: grid + top glow + centered type */}
        <section
          className={cn(
            realitySurface,
            "sticky top-0 grid min-h-dvh w-full place-content-center overflow-hidden px-6 py-24 md:px-10 md:py-32",
          )}
        >
          {/* Top-centered radial wash (subtle blue depth) */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-8%,rgba(59,130,246,0.22),transparent_58%)]"
            aria-hidden
          />
          {/* Secondary vignette for legibility */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_100%,#000510_0%,transparent_55%)]"
            aria-hidden
          />
          {/* Muted blue grid */}
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(90,113,168,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(90,113,168,0.14)_1px,transparent_1px)] bg-size-[54px_54px] mask-[radial-gradient(ellipse_70%_60%_at_50%_0%,#000_50%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_50%,transparent_100%)]"
            aria-hidden
          />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5a6fa3] md:text-xs">
              The Reality
            </p>
            <h2 className="text-balance text-4xl font-black leading-[1.12] tracking-tight text-white md:text-5xl lg:text-6xl">
              Complexity is inevitable.
              <br />
              Confusion is optional.
            </h2>
          </div>
        </section>

        {problemCards.map((problem, index) => {
          const Icon = Icons[problem.icon];
          return (
            <section
              key={problem.number}
              className="grid h-screen place-content-center sticky top-0 overflow-hidden px-6"
            >
              <div className="absolute inset-0 bg-neutral-200/95" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[54px_54px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
              <div className="relative mx-auto w-full max-w-4xl rounded-3xl border border-black/10 bg-white/80 p-8 text-black shadow-2xl backdrop-blur md:p-10">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-5xl font-black text-black/20">
                    {problem.number}
                  </span>
                </div>
                <h3 className="mb-4 text-3xl font-black tracking-tight md:text-5xl">
                  {problem.title}
                </h3>
                <p className="max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
                  {problem.description}
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-black/10 bg-black/3 p-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-black/50">
                      Signals You See
                    </p>
                    <ul className="space-y-2 text-sm leading-relaxed text-black/75">
                      {problem.signals.map((signal) => (
                        <li key={signal} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{signal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-black/10 bg-black/3 p-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-black/50">
                      Business Impact
                    </p>
                    <p className="text-sm leading-relaxed text-black/75">
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

      <footer className={cn(realitySurface, "pb-8 pt-6")}>
        <div className="mx-auto mt-2 max-w-3xl rounded-t-[2.5rem] bg-[#020814] px-6 py-10 text-center text-lg text-white/80">
          These are not isolated inconveniences; they are systemic blockers to
          sustainable growth.
        </div>
      </footer>
    </section>
  );
}
