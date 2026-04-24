import Link from "next/link";
import { Icons } from "@/lib/icons";

interface Step {
  number: string;
  icon: keyof typeof Icons;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: "search",
    title: "Understand your business",
    description: "We study your workflows and identify inefficiencies.",
  },
  {
    number: "02",
    icon: "workflow",
    title: "Redesign your processes",
    description: "We simplify and structure your operations.",
  },
  {
    number: "03",
    icon: "code",
    title: "Build your system",
    description: "We create tools tailored to your workflow.",
  },
  {
    number: "04",
    icon: "zap",
    title: "Automate and optimize",
    description:
      "We reduce manual work and improve efficiency over time.",
  },
];

export function HowWeWorkSection() {
  const ArrowIcon = Icons.arrowRight;

  return (
    <section className="relative bg-background-secondary py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Our process
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            How we work
          </h2>
          <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-accent" />
          <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
            Four steps from messy workflow to working system
          </p>
        </div>

        {/* Step cards */}
        <div className="mx-auto max-w-6xl grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = Icons[step.icon];
            const isLast = i === steps.length - 1;
            return (
              <div key={step.number} className="relative">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/8">
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

                  <h3 className="relative mb-2 text-lg font-black leading-snug text-foreground transition-colors duration-300 group-hover:text-accent">
                    {step.title}
                  </h3>
                  <div className="relative mb-4 h-0.5 w-8 rounded-full bg-accent/40 transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
                  <p className="relative text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow on desktop */}
                {!isLast && (
                  <div
                    aria-hidden
                    className="absolute top-1/2 -right-3 hidden -translate-y-1/2 text-accent/30 lg:block"
                  >
                    <ArrowIcon className="h-5 w-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Link to full process page */}
        <div className="mx-auto mt-12 text-center">
          <Link
            href="/how-we-work"
            className="group inline-flex items-center gap-1.5 text-sm font-bold text-accent transition-colors hover:text-accent-dark"
          >
            See the full process
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
