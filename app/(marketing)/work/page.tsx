/**
 * Work / Case Studies page
 * Proof through stories
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies showcasing how we solve complex problems through systems thinking and clarity.",
};

interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  industry: string;
  shortDescription: string;
  context: string;
  outcome: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "scaling-saas-workflows",
    slug: "scaling-saas-workflows",
    title: "From Operational Chaos to Structured Workflows",
    industry: "SaaS",
    shortDescription:
      "Teams were making decisions in silos, leading to conflicting priorities and duplicated work.",
    context:
      "A Series A SaaS company with 50 employees was experiencing rapid growth but struggling with inconsistent processes across departments.",
    outcome:
      "Meeting time reduced by 40%, feature development cycle time improved by 60%, and team alignment increased significantly.",
  },
  {
    id: "product-validation-system",
    slug: "product-validation-system",
    title: "Building Products People Actually Need",
    industry: "E-commerce",
    shortDescription:
      "Products were built on founder assumptions and anecdotal customer feedback, without systematic validation of actual user needs or willingness to pay.",
    context:
      "An e-commerce platform founder had built multiple products based on assumptions, but none achieved product-market fit despite significant development investment.",
    outcome:
      "Their first validated product achieved 15% month-over-month growth within 3 months of launch, and they now have a repeatable process for testing new product ideas.",
  },
  {
    id: "scaling-systems-dependencies",
    slug: "scaling-systems-dependencies",
    title: "Scaling Without Breaking",
    industry: "Marketplace",
    shortDescription:
      "Hidden dependencies between teams and systems created cascading failures when changes were made.",
    context:
      "A marketplace business grew from 10 to 150 employees but discovered that their initial systems and processes couldn't handle the increased complexity.",
    outcome:
      "They successfully scaled to 500+ employees with systems that support continued growth. New team additions now integrate smoothly without disrupting existing workflows.",
  },
];

export default function WorkPage() {
  const InfoIcon = Icons.info;
  const CheckIcon = Icons.check;
  const ArrowIcon = Icons.arrowRight;

  return (
    <main>
      {/* Page Header Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Work
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground sm:text-2xl">
              Stories of complexity solved through understanding, systems
              thinking, and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((caseStudy) => (
                <article
                  key={caseStudy.id}
                  className="group flex flex-col rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg"
                >
                  {/* Card Header */}
                  <div className="flex-1 p-6 sm:p-8">
                    {/* Industry Badge */}
                    <div className="mb-4">
                      <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                        {caseStudy.industry}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="mb-3 text-xl font-semibold leading-tight sm:text-2xl">
                      {caseStudy.title}
                    </h2>

                    {/* Short Description */}
                    <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
                      {caseStudy.shortDescription}
                    </p>

                    {/* Context Section */}
                    <div className="mb-6 space-y-2">
                      <div className="flex items-center gap-2">
                        <InfoIcon className="h-4 w-4 text-blue-600" />
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                          Context
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        {caseStudy.context}
                      </p>
                    </div>

                    {/* Outcome Section */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckIcon className="h-4 w-4 text-green-600" />
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                          Outcome
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                        {caseStudy.outcome}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="border-t border-gray-200 p-6 sm:p-8">
                    <Link
                      href={`/work/${caseStudy.slug}`}
                      className="group/link flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
                    >
                      Read case study
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-gray-700 sm:text-xl">
              Each case study tells the story of a real problem, the insight
              that unlocked clarity, and the system that created lasting change.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
