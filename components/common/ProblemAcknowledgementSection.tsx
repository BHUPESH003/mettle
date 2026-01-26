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
      bg: "bg-red-100",
      text: "text-red-600",
    },
    title: "Disconnected Tools",
    description:
      "Systems that don't communicate, creating silos and manual workarounds.",
  },
  {
    icon: "lightbulb",
    iconColor: {
      bg: "bg-orange-100",
      text: "text-orange-600",
    },
    title: "Half-Built Systems",
    description:
      "Solutions implemented partially, leading to inconsistent processes and user confusion.",
  },
  {
    icon: "clock",
    iconColor: {
      bg: "bg-yellow-100",
      text: "text-yellow-600",
    },
    title: "Rushed Decisions",
    description:
      "Choices made under time pressure without considering long-term implications.",
  },
  {
    icon: "trendingUp",
    iconColor: {
      bg: "bg-purple-100",
      text: "text-purple-600",
    },
    title: "Unmanaged Growth",
    description:
      "Scaling without clear systems, leading to chaos and lost productivity.",
  },
  {
    icon: "monitor",
    iconColor: {
      bg: "bg-blue-100",
      text: "text-blue-600",
    },
    title: "Ineffective Technology",
    description:
      "Tools that look good but don't solve real problems or improve outcomes.",
  },
  {
    icon: "helpCircle",
    iconColor: {
      bg: "bg-green-100",
      text: "text-green-600",
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
          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {problemCards.map((problem, index) => {
              const IconComponent = Icons[problem.icon];
              return (
                <div
                  key={index}
                  className="group rounded-lg border border-border bg-background p-5 transition-shadow hover:shadow-md sm:p-6"
                >
                  <div className="mb-3 flex items-start gap-3">
                    <div
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg",
                        problem.iconColor.bg
                      )}
                    >
                      <IconComponent
                        className={cn("h-6 w-6", problem.iconColor.text)}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold sm:text-xl">
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
