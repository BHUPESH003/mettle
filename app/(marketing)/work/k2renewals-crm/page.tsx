/**
 * Case Study — K2Renewals CRM
 * Workflow-first system for raw material tracking
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restoring Operational Clarity in Raw Materials Tracking",
  description:
    "A workflow-first CRM designed to unify logistics and reporting for consistent raw material tracking.",
};

export default function K2RenewalsCaseStudyPage() {
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
              Restoring Operational Clarity in Raw Materials Tracking
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              K2Renewals needed reliable raw material tracking and consistent
              visibility across logistics and reporting. The work focused on
              establishing system ownership and designing a workflow-first CRM.
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
                K2Renewals was struggling to track raw materials. Information
                lived in manual logs and Excel sheets, leading to inconsistent
                data and weak operational visibility.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">The Real Problem</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                The issue was not a CRM tool. It was a lack of system ownership,
                which left tracking, logistics, and reporting fragmented and
                unreliable.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Insight</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                Logistics and reporting needed to be unified within a single
                operational system. A workflow-first design would create
                ownership and reduce inconsistency.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">
                System / Approach Designed
              </h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                A workflow-first CRM was designed around the actual operational
                flow, prioritizing how work moves through logistics and
                reporting rather than assembling a list of features.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Outcome</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                The outcome was qualitative: clearer operations and better
                decision-making.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-xl font-semibold">Reflection</h2>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                The work reinforced the importance of understanding how
                renewable plants operate and how enterprise functions connect
                across logistics and reporting.
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
