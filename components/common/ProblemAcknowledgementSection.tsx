/**
 * Problem Acknowledgement Section Component
 * Acknowledges common problems founders face without offering solutions yet
 */

import { Icons } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface ProblemCard {
  icon: keyof typeof Icons;
  iconColor: {
    bg: string;
    text: string;
  };
  title: string;
  description: string;
}

const problemCards: ProblemCard[] = [
  {
    icon: "alertTriangle",
    iconColor: {
      bg: "bg-gradient-to-br from-accent-light to-accent/20",
      text: "text-accent-dark",
    },
    title: "Disconnected Tools",
    description:
      "Systems that don't communicate, creating silos and manual workarounds.",
  },
  {
    icon: "lightbulb",
    iconColor: {
      bg: "bg-gradient-to-br from-accent-light to-accent/20",
      text: "text-accent",
    },
    title: "Half-Built Systems",
    description:
      "Solutions implemented partially, leading to inconsistent processes and user confusion.",
  },
  {
    icon: "clock",
    iconColor: {
      bg: "bg-gradient-to-br from-accent-light to-accent/20",
      text: "text-accent-dark",
    },
    title: "Rushed Decisions",
    description:
      "Choices made under time pressure without considering long-term implications.",
  },
  {
    icon: "trendingUp",
    iconColor: {
      bg: "bg-gradient-to-br from-accent-light to-accent/20",
      text: "text-accent",
    },
    title: "Unmanaged Growth",
    description:
      "Scaling without clear systems, leading to chaos and lost productivity.",
  },
  {
    icon: "monitor",
    iconColor: {
      bg: "bg-gradient-to-br from-accent-light to-accent/20",
      text: "text-accent-dark",
    },
    title: "Ineffective Technology",
    description:
      "Tools that look good but don't solve real problems or improve outcomes.",
  },
  {
    icon: "helpCircle",
    iconColor: {
      bg: "bg-gradient-to-br from-accent-light to-accent/20",
      text: "text-accent",
    },
    title: "Unclear Problems",
    description:
      "Symptoms treated as root causes, leading to recurring issues and wasted effort.",
  },
];

export function ProblemAcknowledgementSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Complexity is inevitable
          </h2>
          <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
            But confusion doesn't have to be
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="mx-auto mb-10 max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {problemCards.map((problem, index) => {
              const IconComponent = Icons[problem.icon];
              return (
                <div
                  key={index}
                  className="group relative rounded-xl border-2 border-border bg-background p-6 transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/10 sm:p-8"
                >
                  {/* Gradient glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <div className="relative mb-4 flex items-start gap-4">
                    <div className="relative shrink-0">
                      {/* Glow behind icon */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent to-accent-dark opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />
                      <div
                        className={cn(
                          "relative flex h-14 w-14 items-center justify-center rounded-xl",
                          problem.iconColor.bg
                        )}
                      >
                        <IconComponent
                          className={cn("h-7 w-7", problem.iconColor.text)}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-bold text-primary group-hover:text-accent transition-colors sm:text-2xl">
                        {problem.title}
                      </h3>
                      <p className="leading-relaxed text-muted-foreground">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-foreground sm:text-xl">
            These aren't just minor inconveniences. They're systemic issues that
            prevent companies from reaching their potential.
          </p>
        </div>
      </div>
    </section>
  );
}
