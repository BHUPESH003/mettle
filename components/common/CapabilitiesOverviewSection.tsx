/**
 * Capabilities Overview Section Component
 * Shows areas where complexity appears in growing businesses
 */

interface Capability {
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    title: "Workflow Design",
    description: "Auditing and rebuilding the operational sequence of your business.",
  },
  {
    title: "Custom CRMs & Tools",
    description:
      "Developing high-leverage software that fits your unique business logic.",
  },
  {
    title: "AI Agent Pipelines",
    description: "Deploying autonomous systems for repetitive communication and tasks.",
  },
  {
    title: "Data Clarity",
    description: "Turning raw business actions into readable, actionable dashboards.",
  },
  {
    title: "Automation Engines",
    description: "Building robust pipelines that move data between your systems.",
  },
];

export function CapabilitiesOverviewSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Areas where complexity appears
          </h2>
          <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
            We help with problems that show up in growing businesses
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="mx-auto mb-10 max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group rounded-lg border border-border bg-background p-5 transition-shadow hover:shadow-md sm:p-6"
              >
                <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                  {capability.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-foreground sm:text-xl">
            Each capability is a lens we use to understand and solve problems.
          </p>
        </div>
      </div>
    </section>
  );
}
