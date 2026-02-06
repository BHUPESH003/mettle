/**
 * Case Study — mycleanone Pro License Generator
 * Product clarity and entitlement system
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clarifying Value and Entitlement for a Pro License",
  description:
    "A consumer-facing SaaS product needed clear value differentiation and a maintainable licensing system for high-volume users.",
};

export default function MycleanoneCaseStudyPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
              Case Study
            </p>
            <h1 className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Clarifying Value and Entitlement for a Pro License
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              mycleanone is a consumer-facing SaaS product for non-technical
              users. The work focused on product clarity, entitlement logic, and
              a clear upgrade path without dark patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-10">
            <section>
              <h2 className="mb-3 text-xl font-semibold">Context</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                mycleanone is a consumer-facing SaaS product inspired by tools
                like CCleaner, targeted at non-technical users needing system
                cleanup and optimization. It operates as a high-volume,
                low-touch product with a Pro license path.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">The Real Problem</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                The core challenge was product clarity, not technical
                complexity. Users struggled to understand the value difference
                between free and Pro, and licensing and entitlement logic had
                to be simple and reliable to avoid support overhead.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Insight</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                Value differentiation and entitlement clarity needed to be
                designed into the system itself. The upgrade path had to be
                explicit without relying on dark patterns.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                System / Approach Designed
              </h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                A maintainable licensing and entitlement system was designed to
                be simple and reliable at high volume, with a clear upgrade path
                that avoided dark patterns.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Outcome</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                Client flow was optimized, with 70 hours saved per week through
                automation.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Reflection</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                Information not provided. Clarify what this work taught you or
                what pattern it revealed.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              If you are navigating complexity and want clarity before
              committing, we can talk.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
