/**
 * Case Study — Mirexa Pharmaceutical
 * Brand transition and digital alignment
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aligning Digital Representation with a Brand Transition",
  description:
    "A pharmaceutical company in transition needed clarity on positioning and a digital presence aligned with its current business direction.",
};

export default function MirexaCaseStudyPage() {
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
              Aligning Digital Representation with a Brand Transition
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Mirexa Pharmaceutical, formerly Keshav Pharmaceuticals, was
              undergoing a brand and identity transition. The work focused on
              aligning business intent with a conservative, compliant digital
              presence.
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
                Mirexa Pharmaceutical (formerly Keshav Pharmaceuticals) is a
                pharmaceutical company undergoing a brand and identity
                transition. The existing online presence did not reflect the
                current business direction.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">The Real Problem</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                Stakeholders were unclear on how to present offerings and
                positioning. The digital presence lacked alignment with the
                business intent, which made the transition hard to communicate
                in a conservative, regulated environment.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Insight</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                In a regulated industry, brand transitions require disciplined
                clarity. Digital representation must translate intent into a
                stable, conservative signal that can remain consistent long
                term.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                System / Approach Designed
              </h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                The approach focused on aligning business intent with digital
                structure, ensuring positioning, messaging, and presentation
                could remain consistent over time while respecting regulatory
                sensitivity.
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
