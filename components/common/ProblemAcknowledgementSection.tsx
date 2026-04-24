import { Icons } from "@/lib/icons";

interface ProblemCard {
  icon: keyof typeof Icons;
  number: string;
  title: string;
  description: string;
}

const problemCards: ProblemCard[] = [
  {
    icon: "workflow",
    number: "01",
    title: "Operations are messy and inconsistent",
    description:
      "We restructure how your business runs — from lead to delivery — so every step is clear and repeatable.",
  },
  {
    icon: "layers",
    number: "02",
    title: "Work is scattered across tools",
    description:
      "We bring everything into one system so your team doesn't rely on memory, WhatsApp, or Excel.",
  },
  {
    icon: "messageSquare",
    number: "03",
    title: "Leads are not handled properly",
    description:
      "We automate responses, follow-ups, and reminders so no opportunity is missed.",
  },
  {
    icon: "barChart",
    number: "04",
    title: "You don't know what's working",
    description:
      "We convert your daily activity into dashboards that actually help you make decisions.",
  },
  {
    icon: "repeat",
    number: "05",
    title: "Too much manual work",
    description:
      "We automate repetitive tasks so your team can focus on what matters.",
  },
  {
    icon: "gitBranch",
    number: "06",
    title: "Systems don't talk to each other",
    description: "We connect your tools into one smooth workflow.",
  },
];

export function ProblemAcknowledgementSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            What we fix
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Problems we solve for growing businesses
          </h2>
          <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-accent" />
          <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
            These are the points where most operations start breaking down
          </p>
        </div>

        {/* Problem cards */}
        <div className="mx-auto max-w-6xl">
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
      </div>
    </section>
  );
}
