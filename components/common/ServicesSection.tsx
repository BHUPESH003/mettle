import { Icons } from "@/lib/icons";

interface Service {
  icon: keyof typeof Icons;
  number: string;
  title: string;
  description: string;
  includes: string[];
}

const services: Service[] = [
  {
    icon: "compass",
    number: "01",
    title: "System Design & Setup",
    description:
      "We understand your business and redesign how it should operate before building anything.",
    includes: ["Workflow design", "Process mapping", "Business logic structuring"],
  },
  {
    icon: "code",
    number: "02",
    title: "Custom Software & Tools",
    description: "We build systems tailored to your exact business needs.",
    includes: ["CRMs", "Admin panels", "Internal dashboards", "Custom tools"],
  },
  {
    icon: "zap",
    number: "03",
    title: "Automation & AI",
    description: "We automate repetitive tasks and communication.",
    includes: [
      "AI chatbots",
      "Voice bots",
      "Automated follow-ups",
      "Data pipelines",
    ],
  },
];

export function ServicesSection() {
  const CheckIcon = Icons.check;

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Our services
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            What we actually do
          </h2>
          <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-accent" />
          <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
            Three ways we help you run a better business
          </p>
        </div>

        {/* Service cards */}
        <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = Icons[service.icon];
            return (
              <div
                key={service.number}
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
                    {service.number}
                  </span>
                </div>

                <h3 className="relative mb-3 text-xl font-black leading-snug text-foreground transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                  {service.title}
                </h3>
                <div className="relative mb-4 h-0.5 w-8 rounded-full bg-accent/40 transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
                <p className="relative mb-6 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Includes list */}
                <div className="relative mt-auto">
                  <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground/60">
                    Includes
                  </p>
                  <ul className="flex flex-col gap-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15">
                          <CheckIcon className="h-2.5 w-2.5 text-accent" />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
