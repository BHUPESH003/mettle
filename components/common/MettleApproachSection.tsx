/**
 * Mettle Approach Section Component
 * Explains Mettle's approach: understanding before solutions
 */

interface Pillar {
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    title: "Business Context",
    description: "What drives decisions and creates constraints",
  },
  {
    title: "Real Constraints",
    description: "What's actually limiting growth and clarity",
  },
  {
    title: "System Connections",
    description: "How people, processes, and technology interact",
  },
];

export function MettleApproachSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
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

        {/* Three Pillars Grid */}
        <div className="mx-auto mb-10 max-w-5xl">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group rounded-lg border border-border bg-background p-6 text-center transition-shadow hover:shadow-md sm:p-8"
              >
                <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                  {pillar.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
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
