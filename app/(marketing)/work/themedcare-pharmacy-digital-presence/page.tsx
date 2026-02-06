/**
 * Case Study — themedcare.ca Pharmacy Digital Presence
 * Credibility, accessibility, and clarity
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Establishing Trust and Clarity for a Pharmacy's Digital Presence",
  description:
    "A physical pharmacy transitioned to a stronger digital presence focused on trust signals, accessibility, and reliable information architecture.",
};

export default function ThemedcareCaseStudyPage() {
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
              Establishing Trust and Clarity for a Pharmacy&apos;s Digital Presence
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              themedcare.ca is a physical pharmacy transitioning to a stronger
              digital presence. The work focused on credibility, accessibility,
              and clear information architecture rather than e-commerce-first
              priorities.
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
                themedcare.ca is a physical pharmacy in Canada transitioning to
                a stronger digital presence. The existing online identity
                lacked trust, clarity, and compliance cues, and the industry
                required high attention to accessibility and reliability.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">The Real Problem</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                The primary gap was credibility and discoverability, not
                e-commerce. The digital presence did not convey trust or
                compliance, and information was not structured clearly enough
                to support patient confidence.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Insight</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                In healthcare, trust signals and accessibility are part of the
                product. A credible digital presence depends on clear
                information architecture and reliable performance, not just
                visual updates.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                System / Approach Designed
              </h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                The approach prioritized a trust-centered information
                architecture, accessibility-first design decisions, and a
                reliable structure that supports clarity and compliance cues.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Outcome</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                A digital identity was created, strengthening client trust and
                enabling feedback.
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
