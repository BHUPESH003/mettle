/**
 * Philosophy Section Component
 * Explains Mettle's philosophy on work, systems, and growth
 */

interface Principle {
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    title: "Process First, Automation Second",
    description:
      "Automation on top of a broken process just makes mistakes faster. We fix the workflow first.",
  },
  {
    title: "Execution > Advice",
    description:
      "We don't build slide decks; we build systems. Real problems require real code, not PDFs.",
  },
  {
    title: "Clarity Compounds",
    description:
      "A clear system reduces cognitive load, allowing your team to focus on growth rather than friction.",
  },
  {
    title: "Engineering-Led Strategy",
    description:
      "The best strategy is one that can actually be built. We design with the implementation in mind.",
  },
];

export function PhilosophySection() {
  return (
    <section className="bg-background-secondary py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-3 text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Why Mettle
          </h2>
          <p className="text-xl font-medium text-muted-foreground sm:text-2xl">
            How we see work, systems, and growth
          </p>
        </div>

        {/* Main Quote */}
        <div className="mx-auto mb-10 max-w-3xl">
          <blockquote className="border-l-4 border-accent pl-6 text-center text-2xl font-medium italic leading-relaxed text-foreground sm:text-3xl md:text-4xl">
            "Complexity is inevitable — confusion is optional"
          </blockquote>
        </div>

        {/* Philosophy Principles - 2 Columns */}
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="group rounded-lg border border-border bg-background p-5 transition-shadow hover:shadow-md sm:p-6"
              >
                <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                  {principle.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
