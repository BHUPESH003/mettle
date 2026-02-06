/**
 * Case Study — Barnshenn E-commerce Platform
 * Simplification and reliability
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simplifying Operations for a Growing Toy Brand",
  description:
    "A UK toy brand needed to reduce operational complexity and improve reliability without disrupting sales.",
};

export default function BarnshennCaseStudyPage() {
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
              Simplifying Operations for a Growing Toy Brand
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Barnshenn was operating on WordPress and Magento. The work focused
              on simplification and reliability without disrupting sales or the
              existing customer experience.
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
                Barnshenn is a UK toy brand operating on WordPress and Magento.
                Operational complexity and performance issues were increasing,
                and admin workflows were fragmented and difficult to maintain.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">The Real Problem</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                The challenge was not redesign. It was simplification and
                reliability in a system that had become complex, brittle, and
                hard to manage.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Insight</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                Long-term maintainability mattered more than short-term gains.
                Any changes had to protect sales continuity and preserve the
                existing customer experience.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                System / Approach Designed
              </h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                The approach prioritized a reliability-first simplification plan
                with careful migration to avoid sales disruption while improving
                admin workflows.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Outcome</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                Information not provided. Clarify what changed as a result.
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
