/**
 * Work Patterns Section Component
 * Shows common patterns of complexity across different businesses
 * Enhanced with accent colors and visual design
 */

import { Icons } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface Pattern {
  icon: keyof typeof Icons;
  problem: string;
  insight: string;
  outcome: string;
}

const patterns: Pattern[] = [
  {
    icon: "package",
    problem: "Manual inventory and order chaos as volume scaled",
    insight:
      "Fragmented visibility was the real bottleneck, not the staff speed",
    outcome:
      "A centralized operations panel that halved fulfillment time and eliminated sync errors",
  },
  {
    icon: "messageSquare",
    problem: "Support teams overwhelmed by routine policy inquiries",
    insight: "The solution was intent-based navigation, not more human agents",
    outcome:
      "A specialized automation bot that handles routine queries autonomously without friction",
  },
  {
    icon: "workflow",
    problem: "Operational data siloed in fragmented spreadsheets",
    insight:
      "Businesses need a source of truth that matches their actual workflow sequence",
    outcome:
      "Custom workflow systems that provide real-time clarity across sales, ops, and reporting",
  },
];

export function WorkPatternsSection() {
  return (
    <section className="relative py-12 md:py-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background opacity-50" />
      
      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-3 text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            The patterns we've seen
          </h2>
          <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
            Common complexity across different businesses
          </p>
        </div>

        {/* Pattern Cards - 3 Columns in 1 Row */}
        <div className="mx-auto mb-10 max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {patterns.map((pattern, index) => {
              const IconComponent = Icons[pattern.icon];
              return (
                <div
                  key={index}
                  className="group flex flex-col space-y-5 rounded-xl border-2 border-border bg-background p-6 transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/10 sm:p-8"
                >
                  {/* Icon */}
                  <div className="flex items-start">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent to-accent-dark opacity-10 blur-xl transition-opacity group-hover:opacity-20" />
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-accent-light to-accent/20">
                        <IconComponent className="h-7 w-7 text-accent" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-accent">
                      Problem
                    </h3>
                    <p className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                      {pattern.problem}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Insight
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {pattern.insight}
                    </p>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Outcome
                    </h3>
                    <p className="text-base leading-relaxed text-foreground">
                      {pattern.outcome}
                    </p>
                  </div>
                  
                  {/* Accent line at bottom */}
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-accent to-accent-dark opacity-50 transition-all duration-300 group-hover:w-full group-hover:opacity-100" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-foreground sm:text-xl">
            Each situation is unique, but the approach to complexity is
            consistent.
          </p>
        </div>
      </div>
    </section>
  );
}
