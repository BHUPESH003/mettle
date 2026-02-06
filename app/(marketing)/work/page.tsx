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
    id: "bichance-social-dining-platform",
    slug: "bichance-social-dining-platform",
    title: "Validating Demand Before Building a Social Dining Platform",
    industry: "Consumer Platform",
    shortDescription:
      "An early-stage concept needed market validation before any technical execution to avoid building ahead of user behavior.",
    context:
      "Bichance in Singapore had a social dining concept but lacked clarity on feasibility, scope, and adoption risks.",
    outcome:
      "Qualitative outcome not provided.",
  },
  {
    id: "barnshenn-ecommerce-platform",
    slug: "barnshenn-ecommerce-platform",
    title: "Simplifying Operations for a Growing Toy Brand",
    industry: "E-commerce",
    shortDescription:
      "A UK toy brand faced operational complexity and performance issues across WordPress and Magento, with fragmented admin workflows.",
    context:
      "Barnshenn needed simplification and reliability without disrupting sales or the existing customer experience.",
    outcome:
      "Qualitative outcome not provided.",
  },
  {
    id: "mirexa-pharmaceutical-brand-transition",
    slug: "mirexa-pharmaceutical-brand-transition",
    title: "Aligning Digital Representation with a Brand Transition",
    industry: "Pharmaceutical",
    shortDescription:
      "A pharmaceutical company undergoing a brand transition needed clarity on positioning and a digital presence that reflected its current direction.",
    context:
      "Mirexa Pharmaceutical (formerly Keshav Pharmaceuticals) required alignment between business intent and digital representation within a conservative, regulated industry.",
    outcome:
      "Qualitative outcome not provided.",
  },
  {
    id: "themedcare-pharmacy-digital-presence",
    slug: "themedcare-pharmacy-digital-presence",
    title: "Establishing Trust and Clarity for a Pharmacy's Digital Presence",
    industry: "Healthcare",
    shortDescription:
      "A physical pharmacy needed a credible digital presence with strong trust signals, clear information architecture, and accessibility-first reliability.",
    context:
      "Themedcare.ca was transitioning from a physical pharmacy to a stronger digital presence in Canada, where accessibility and compliance cues are expected.",
    outcome:
      "Created a digital identity that strengthened trust and enabled client feedback.",
  },
  {
    id: "mycleanone-pro-license-generator",
    slug: "mycleanone-pro-license-generator",
    title: "Clarifying Value and Entitlement for a Pro License",
    industry: "B2C SaaS",
    shortDescription:
      "Users struggled to understand the value difference between free and Pro, and licensing needed to be simple and reliable at high volume.",
    context:
      "A consumer-facing SaaS product for non-technical users needed a clear upgrade path without dark patterns and a maintainable licensing system.",
    outcome:
      "Client flow optimized, with 70 hours saved per week through automation.",
  },
  {
    id: "k2renewals-crm",
    slug: "k2renewals-crm",
    title: "Restoring Operational Clarity in Raw Materials Tracking",
    industry: "Not disclosed",
    shortDescription:
      "Raw material tracking depended on manual logs and Excel sheets, which created inconsistent data and weak visibility.",
    context:
      "K2Renewals was struggling to track raw materials and lacked system ownership across logistics and reporting.",
    outcome:
      "Qualitative: clearer operations and better decision-making.",
  },
  
];

export default function WorkPage() {
  const ArrowIcon = Icons.arrowRight;

  return (
    <main>
      {/* Page Header Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our Work
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground sm:text-2xl">
              Real systems built to solve real operational problems. No demos. No hypothetical examples.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((project) => (
                <article
                  key={project.id}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-all hover:border-gray-400 hover:shadow-xl"
                >
                  <div className="flex-1 p-6 sm:p-8">
                    {/* Industry Badge */}
                    <div className="mb-4">
                      <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700">
                        {project.industry}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="mb-3 text-xl font-bold leading-tight sm:text-2xl">
                      {project.title}
                    </h2>

                    {/* Short Description */}
                    <p className="mb-6 text-base leading-relaxed text-muted-foreground">
                      {project.shortDescription}
                    </p>

                  
                  </div>

                  {/* Card Footer */}
                  <div className="border-t border-border p-6 bg-slate-50/50">
                    <Link
                      href={`/work/${project.slug}`}
                      className="group/link flex items-center justify-between text-sm font-bold text-slate-900"
                    >
                      View Case Study
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
