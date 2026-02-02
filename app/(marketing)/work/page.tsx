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
    id: "ecommerce-inventory-system",
    slug: "ecommerce-inventory-system",
    title: "E-commerce Operations & Inventory System",
    industry: "Operations",
    shortDescription:
      "Manual handling of orders and fragmented inventory tracking led to operational visibility gaps and fulfillment errors.",
    context:
      "A high-volume e-commerce brand needed a centralized command center to manage products, orders, and assets securely.",
    outcome:
      "Eliminated manual inventory sync errors and halved order processing time through centralized visibility and automated S3 storage pipelines.",
  },
  {
    id: "insurance-support-bot",
    slug: "insurance-support-bot",
    title: "Insurance Support Automation Engine",
    industry: "Automation",
    shortDescription:
      "High volumes of routine policy inquiries and service requests were creating friction for both customers and support teams.",
    context:
      "An insurance provider required a specialized web-based bot to navigate complex policy structures and direct users to service links.",
    outcome:
      "Reduced support overhead by autonomously resolving routine queries, allowing the team to focus on high-stakes claims processing.",
  },
  {
    id: "custom-workflow-crm",
    slug: "custom-workflow-crm",
    title: "Custom Workflow CRM & Operations",
    industry: "Systems",
    shortDescription:
      "Fragmented tools and Excel sheets made sales, operations, and reporting difficult to track as the team scaled.",
    context:
      "Multiple businesses required a custom source of truth that matched their actual operational sequence rather than a generic SaaS funnel.",
    outcome:
      "Replaced disconnected tools with a unified system that provides real-time visibility and clear ownership across all team modules.",
  },
  {
    id: "seat-booking-auth",
    slug: "seat-booking-auth",
    title: "Regulated Seat Allocation & Booking",
    industry: "Security",
    shortDescription:
      "Managing resource allocation under strict business rules and audit requirements was impossible via manual tracking.",
    context:
      "A facility required a secure, restriction-aware booking system with integrated audit trails and OTP-based authentication.",
    outcome:
      "Achieved zero resource conflicts and a 100% audit-ready reporting history through a robust, rule-based engine.",
  },
  {
    id: "campuscrave-fulfillment",
    slug: "campuscrave-fulfillment",
    title: "Multi-Vendor Fulfillment Platform",
    industry: "Marketplace",
    shortDescription:
      "Students faced fragmented ordering flows across multiple independent food vendors in a high-volume environment.",
    context:
      "CampusCrave needed a unified marketplace platform to handle complex state management, vendor fulfillment, and secure payments.",
    outcome:
      "Developed a scalable architecture supporting simultaneous multi-vendor checkouts with integrated Stripe payments and Jotai state management.",
  },
  {
    id: "emotion-recognition-ai",
    slug: "emotion-recognition-ai",
    title: "Applied Emotion Recognition Pipeline",
    industry: "AI/ML",
    shortDescription:
      "Need for objective sentiment and emotional tone analysis in recorded communications for mental health insights.",
    context:
      "An exploration into practical ML applications required a high-accuracy pipeline for classifying vocal and text-based emotional data.",
    outcome:
      "Achieved 91% accuracy using RAVDESS/TESS datasets, demonstrating a technical foundation for automated emotional analysis tools.",
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
