/**
 * Capabilities Overview Section Component
 * Shows areas where complexity appears in growing businesses
 * Enhanced with icons and visual design
 */

import { Icons } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface Capability {
  icon: keyof typeof Icons;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    icon: "workflow",
    title: "Workflow Design",
    description: "Auditing and rebuilding the operational sequence of your business.",
  },
  {
    icon: "code",
    title: "Custom CRMs & Tools",
    description:
      "Developing high-leverage software that fits your unique business logic.",
  },
  {
    icon: "zap",
    title: "AI Agent Pipelines",
    description: "Deploying autonomous systems for repetitive communication and tasks.",
  },
  {
    icon: "barChart",
    title: "Data Clarity",
    description: "Turning raw business actions into readable, actionable dashboards.",
  },
  {
    icon: "repeat",
    title: "Automation Engines",
    description: "Building robust pipelines that move data between your systems.",
  },
  {
    icon: "layers",
    title: "System Integration",
    description: "Connecting disparate tools into a unified operational ecosystem.",
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {capabilities.map((capability, index) => {
              const IconComponent = Icons[capability.icon];
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border-2 border-border bg-background p-6 transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/10"
                >
                  {/* Gradient glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="relative space-y-4">
                    {/* Icon */}
                    <div className="relative inline-flex">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent to-accent-dark opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-light to-accent/20">
                        <IconComponent className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-primary transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                        {capability.title}
                      </h3>
                      <p className="leading-relaxed text-muted-foreground">
                        {capability.description}
                      </p>
                    </div>
                    
                    {/* Accent indicator */}
                    <div className="h-1 w-8 rounded-full bg-accent opacity-0 transition-all duration-300 group-hover:w-12 group-hover:opacity-100" />
                  </div>
                </div>
              );
            })}
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
