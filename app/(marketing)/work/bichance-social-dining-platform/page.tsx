/**
 * Case Study — Bichance Social Dining Platform
 * Market validation before build
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Validating Demand Before Building a Social Dining Platform",
  description:
    "An early-stage concept required market research to validate demand before any technical execution.",
};

export default function BichanceCaseStudyPage() {
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
              Validating Demand Before Building a Social Dining Platform
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Bichance was an early-stage concept in Singapore. The work focused
              on feasibility, scope, and market research before any technical
              execution.
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
                Bichance was an early-stage social dining idea with no validated
                market demand. The client had a concept but lacked clarity on
                feasibility and scope.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">The Real Problem</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                The core risk was building too early without understanding user
                behavior. Unknown adoption and budget sensitivity made premature
                execution the biggest threat.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Insight</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                Market research had to come before any technical build. Validating
                behavior and demand would define scope and reduce unnecessary
                investment.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                System / Approach Designed
              </h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                The approach prioritized market research to test adoption and
                feasibility, informing whether and how to proceed with a build.
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
