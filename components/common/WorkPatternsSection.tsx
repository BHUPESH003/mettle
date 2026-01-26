/**
 * Work Patterns Section Component
 * Shows common patterns of complexity across different businesses
 */

interface Pattern {
  problem: string;
  insight: string;
  outcome: string;
}

const patterns: Pattern[] = [
  {
    problem: "Operational chaos in a growing SaaS company",
    insight:
      "The problem wasn't tools — it was unclear decision-making processes",
    outcome:
      "Structured workflows that reduced meeting time by 60% and improved team alignment",
  },
  {
    problem: "Broken product development foundation",
    insight: "Features were built without understanding user constraints",
    outcome:
      "A validation system that turned ideas into testable products before full development",
  },
  {
    problem: "Scaling pains without clear systems",
    insight:
      "Growth revealed hidden dependencies between teams and processes",
    outcome:
      "Interconnected systems that scaled smoothly from 10 to 100+ people",
  },
];

export function WorkPatternsSection() {
  return (
    <section className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            The patterns we've seen
          </h2>
          <p className="text-xl font-medium text-gray-700 sm:text-2xl">
            Common complexity across different businesses
          </p>
        </div>

        {/* Pattern Cards - 3 Columns in 1 Row */}
        <div className="mx-auto mb-10 max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
            {patterns.map((pattern, index) => (
              <div
                key={index}
                className="flex flex-col space-y-4 rounded-lg border border-gray-100 bg-white p-5 sm:p-6"
              >
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600">
                    Problem
                  </h3>
                  <p className="text-base font-medium text-gray-900 sm:text-lg">
                    {pattern.problem}
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600">
                    Insight
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                    {pattern.insight}
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600">
                    Outcome
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                    {pattern.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
            Each situation is unique, but the approach to complexity is
            consistent.
          </p>
        </div>
      </div>
    </section>
  );
}
