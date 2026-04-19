import Link from "next/link";
import { Icons } from "@/lib/icons";

interface Capability {
  icon: keyof typeof Icons;
  number: string;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    icon: "workflow",
    number: "01",
    title: "Workflow Design",
    description:
      "Auditing and rebuilding the operational sequence of your business.",
  },
  {
    icon: "code",
    number: "02",
    title: "Custom CRMs & Tools",
    description:
      "Developing high-leverage software that fits your unique business logic.",
  },
  {
    icon: "zap",
    number: "03",
    title: "AI Agent Pipelines",
    description:
      "Deploying autonomous systems for repetitive communication and tasks.",
  },
  {
    icon: "barChart",
    number: "04",
    title: "Data Clarity",
    description:
      "Turning raw business actions into readable, actionable dashboards.",
  },
  {
    icon: "repeat",
    number: "05",
    title: "Automation Engines",
    description:
      "Building robust pipelines that move data between your systems.",
  },
  {
    icon: "layers",
    number: "06",
    title: "System Integration",
    description:
      "Connecting disparate tools into a unified operational ecosystem.",
  },
];

export function CapabilitiesOverviewSection() {
  const ArrowIcon = Icons.arrowRight;

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            What We Build
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Areas where complexity appears
          </h2>
          <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-accent" />
          <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
            We help with problems that show up in growing businesses
          </p>
        </div>

        {/* Capabilities grid */}
        <div className="mx-auto mb-12 max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => {
              const Icon = Icons[cap.icon];
              return (
                <div
                  key={cap.number}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/8"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-accent/4 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                  {/* Top row: icon + number */}
                  <div className="relative mb-4 flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/8 transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/15">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <span
                      aria-hidden
                      className="select-none text-4xl font-black leading-none text-border/30 transition-colors duration-300 group-hover:text-accent/15"
                    >
                      {cap.number}
                    </span>
                  </div>

                  <h3 className="relative mb-1.5 text-lg font-black text-foreground transition-colors duration-300 group-hover:text-accent">
                    {cap.title}
                  </h3>
                  <div className="relative mb-3 h-0.5 w-6 rounded-full bg-accent/40 transition-all duration-300 group-hover:w-12 group-hover:bg-accent" />
                  <p className="relative text-sm leading-relaxed text-muted-foreground">
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA link */}
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-background-secondary px-8 py-5 text-center">
          <p className="mb-3 text-base font-medium leading-relaxed text-foreground sm:text-lg">
            Each capability is a lens we use to understand and solve problems —
            never applied in isolation.
          </p>
          <Link
            href="/capabilities"
            className="group inline-flex items-center gap-1.5 text-sm font-bold text-accent transition-colors hover:text-accent-dark"
          >
            See all capabilities
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
