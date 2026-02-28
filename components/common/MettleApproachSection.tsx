/**
 * Mettle Approach Section Component
 * Explains Mettle's approach: understanding before solutions
 * Enhanced with icons and visual design
 */

import { Icons } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { VisualSeparator } from "./VisualSeparator";

interface Pillar {
  icon: keyof typeof Icons;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    icon: "briefcase",
    title: "Business Context",
    description: "What drives decisions and creates constraints",
  },
  {
    icon: "target",
    title: "Real Constraints",
    description: "What's actually limiting growth and clarity",
  },
  {
    icon: "gitBranch",
    title: "System Connections",
    description: "How people, processes, and technology interact",
  },
];

export function MettleApproachSection() {
  return (
    <section className="bg-background-secondary py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="mb-3 text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            We don't start with solutions
          </h2>
          <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
            We start with understanding
          </p>
        </div>

        {/* Introductory Text */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-foreground sm:text-xl">
            Before recommending tools, features, or technology, we understand:
          </p>
        </div>
        
        {/* Visual Separator */}
        <div className="mx-auto mb-10 max-w-md">
          <VisualSeparator variant="dots" />
        </div>

        {/* Three Pillars Grid */}
        <div className="mx-auto mb-10 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar, index) => {
              const IconComponent = Icons[pillar.icon];
              return (
                <div
                  key={index}
                  className="group relative text-center"
                >
                  {/* Icon */}
                  <div className="mx-auto mb-6 inline-flex">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent to-accent-dark opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30" />
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-light to-accent/30">
                        <IconComponent className="h-10 w-10 text-accent" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="mb-3 text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">
                    {pillar.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                  
                  {/* Connecting line (except last) */}
                  {index < pillars.length - 1 && (
                    <div className="absolute right-0 top-10 hidden h-px w-8 bg-gradient-to-r from-accent/30 to-transparent md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-foreground sm:text-xl">
            Then we design systems that reduce cognitive load and compound
            clarity over time.
          </p>
        </div>
      </div>
    </section>
  );
}
