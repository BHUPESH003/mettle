import { Icons } from "@/lib/icons";

interface ProblemCard {
  icon: keyof typeof Icons;
  number: string;
  title: string;
  description: string;
}

const problemCards: ProblemCard[] = [
  {
    icon: "alertTriangle",
    number: "01",
    title: "Disconnected Tools",
    description:
      "Systems that don't communicate, creating silos and manual workarounds.",
  },
  {
    icon: "lightbulb",
    number: "02",
    title: "Half-Built Systems",
    description:
      "Solutions implemented partially, leading to inconsistent processes and user confusion.",
  },
  {
    icon: "clock",
    number: "03",
    title: "Rushed Decisions",
    description:
      "Choices made under time pressure without considering long-term implications.",
  },
  {
    icon: "trendingUp",
    number: "04",
    title: "Unmanaged Growth",
    description:
      "Scaling without clear systems, leading to chaos and lost productivity.",
  },
  {
    icon: "monitor",
    number: "05",
    title: "Ineffective Technology",
    description:
      "Tools that look good but don't solve real problems or improve outcomes.",
  },
  {
    icon: "helpCircle",
    number: "06",
    title: "Unclear Problems",
    description:
      "Symptoms treated as root causes, leading to recurring issues and wasted effort.",
  },
];

export function ProblemAcknowledgementSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            The Reality
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Complexity is inevitable
          </h2>
          <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-accent" />
          <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
            But confusion doesn&apos;t have to be
          </p>
        </div>

        {/* Problem cards */}
        <div className="mx-auto mb-14 max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {problemCards.map((problem) => {
              const Icon = Icons[problem.icon];
              return (
                <div
                  key={problem.number}
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
                      {problem.number}
                    </span>
                  </div>

                  <h3 className="relative mb-3 text-xl font-black leading-snug text-foreground transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                    {problem.title}
                  </h3>
                  {/* Animated accent rule */}
                  <div className="relative mb-4 h-0.5 w-8 rounded-full bg-accent/40 transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
                  <p className="relative text-sm leading-relaxed text-muted-foreground">
                    {problem.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-background-secondary px-8 py-6 text-center">
          <p className="text-base font-medium leading-relaxed text-foreground sm:text-lg">
            These aren&apos;t just minor inconveniences — they&apos;re systemic
            issues that prevent companies from reaching their potential.
          </p>
        </div>
      </div>
    </section>
  );
}
