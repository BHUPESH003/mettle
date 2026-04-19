import { Icons } from "@/lib/icons";

interface Step {
  number: string;
  icon: keyof typeof Icons;
  title: string;
  description: string;
  approach: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: "briefcase",
    title: "Business Context",
    description:
      "What drives decisions and creates constraints in your specific environment.",
    approach:
      "We map stakeholders, incentives, and the history behind current decisions before recommending anything.",
  },
  {
    number: "02",
    icon: "target",
    title: "Real Constraints",
    description:
      "What's actually limiting growth and clarity — not just the surface symptoms.",
    approach:
      "We separate root causes from symptoms. Most teams already know what's wrong; we help find why.",
  },
  {
    number: "03",
    icon: "gitBranch",
    title: "System Connections",
    description:
      "How people, processes, and technology interact across your entire operation.",
    approach:
      "We trace the full chain of a workflow before touching any single part of it.",
  },
];

export function MettleApproachSection() {
  return (
    <section className="relative bg-background-secondary py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Our Process
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            We don&apos;t start with solutions
          </h2>
          <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-accent" />
          <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
            We start with understanding
          </p>
        </div>

        {/* Step cards */}
        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = Icons[step.icon];
            return (
              <div
                key={step.number}
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
                    {step.number}
                  </span>
                </div>

                <h3 className="relative mb-2 text-xl font-black leading-snug text-foreground transition-colors duration-300 group-hover:text-accent">
                  {step.title}
                </h3>
                <div className="relative mb-4 h-0.5 w-8 rounded-full bg-accent/40 transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
                <p className="relative mb-5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>

                {/* Approach callout */}
                <div className="relative mt-auto border-l-2 border-accent/30 pl-4 transition-colors duration-300 group-hover:border-accent">
                  <p className="text-xs leading-relaxed text-muted-foreground/80">
                    {step.approach}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="mx-auto mt-14 max-w-2xl text-center">
          <p className="text-lg font-medium leading-relaxed text-foreground sm:text-xl">
            Then we design systems that reduce cognitive load and compound
            clarity over time.
          </p>
        </div>
      </div>
    </section>
  );
}
