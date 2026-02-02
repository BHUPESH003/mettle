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
    problem: "Manual inventory and order chaos as volume scaled",
    insight:
      "Fragmented visibility was the real bottleneck, not the staff speed",
    outcome:
      "A centralized operations panel that halved fulfillment time and eliminated sync errors",
  },
  {
    problem: "Support teams overwhelmed by routine policy inquiries",
    insight: "The solution was intent-based navigation, not more human agents",
    outcome:
      "A specialized automation bot that handles routine queries autonomously without friction",
  },
  {
    problem: "Operational data siloed in fragmented spreadsheets",
    insight:
      "Businesses need a source of truth that matches their actual workflow sequence",
    outcome:
      "Custom workflow systems that provide real-time clarity across sales, ops, and reporting",
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
