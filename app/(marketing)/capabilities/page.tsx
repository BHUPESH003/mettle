/**
 * Capabilities page
 * Areas where complexity appears, not services
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Areas where complexity appears and problems we help solve.",
};

interface Capability {
  title: string;
  description: string;
  commonChallenges: string[];
  ourApproach: string;
}

const capabilities: Capability[] = [
  {
    title: "Business Systems & Workflows",
    description:
      "When processes become barriers to growth rather than enablers.",
    commonChallenges: [
      "Decisions made in silos creating conflicting priorities",
      "Workflows that worked for 10 people failing at 50",
      "Unclear accountability leading to bottlenecks",
      "Processes that exist but aren't followed",
    ],
    ourApproach:
      "We map how decisions actually get made and design systems that scale with your business, not against it.",
  },
  {
    title: "Digital Foundations",
    description:
      "Building technology that serves business decisions, not the other way around.",
    commonChallenges: [
      "Tools chosen without understanding business constraints",
      "Disconnected systems creating data silos",
      "Technology decisions made too fast or too slow",
      "Digital infrastructure that hinders rather than helps",
    ],
    ourApproach:
      "We start with business needs and work backward to technology, ensuring every tool serves a clear purpose.",
  },
  {
    title: "Product Thinking",
    description:
      "Turning ideas into products people actually need and will pay for.",
    commonChallenges: [
      "Products built on assumptions rather than evidence",
      "Features developed without understanding user constraints",
      "Product roadmaps disconnected from business reality",
      "Validation happening too late in the process",
    ],
    ourApproach:
      "We create systematic approaches to test assumptions and validate ideas before committing to full development.",
  },
  {
    title: "Operational Clarity",
    description: "Making complexity manageable and decisions transparent.",
    commonChallenges: [
      "Growing teams losing alignment on priorities",
      "Hidden dependencies between teams and systems",
      "Decision-making processes that create more questions than answers",
      "Operational complexity outpacing organizational maturity",
    ],
    ourApproach:
      "We bring clarity to complex operations by mapping relationships, establishing clear processes, and creating systems that reduce cognitive load.",
  },
  {
    title: "Market Validation & Execution",
    description: "Testing assumptions and turning insights into action.",
    commonChallenges: [
      "Market assumptions untested and unvalidated",
      "Go-to-market strategies based on incomplete information",
      "Execution plans that don't account for real-world constraints",
      "Market feedback loops that are too slow or nonexistent",
    ],
    ourApproach:
      "We design validation frameworks and execution systems that test assumptions systematically and adapt based on real evidence.",
  },
];

export default function CapabilitiesPage() {
  const ArrowIcon = Icons.arrowRight;

  return (
    <main>
      {/* Intro Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Capabilities
            </h1>
            <p className="mb-4 text-xl font-medium text-foreground sm:text-2xl">
              We help with complexity wherever it appears in growing businesses.
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              These are the areas where problems tend to emerge, not the
              services we offer. Each represents a domain where systems thinking
              and clarity can create meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Content */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-12">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-8 sm:p-10"
                >
                  {/* Title and Description */}
                  <div className="mb-6">
                    <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                      {capability.title}
                    </h2>
                    <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                      {capability.description}
                    </p>
                  </div>

                  {/* Common Challenges */}
                  <div className="mb-6">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-600">
                      Common Challenges
                    </h3>
                    <ul className="space-y-2">
                      {capability.commonChallenges.map((challenge, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                          <span className="leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Our Approach */}
                  <div className="rounded-lg border-l-4 border-gray-900 bg-gray-50 p-6">
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-600">
                      Our Approach
                    </h3>
                    <p className="text-base leading-relaxed text-foreground sm:text-lg">
                      {capability.ourApproach}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Every business is unique
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-foreground sm:text-xl">
              These capability areas represent common patterns we've seen, but
              your specific challenges might not fit neatly into any single
              category.
            </p>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              That's why we start with understanding your situation, not trying
              to fit you into our framework.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center justify-center rounded-lg",
                  "bg-gray-900 px-8 py-6 text-base font-medium text-white",
                  "transition-colors hover:bg-gray-800",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
                )}
              >
                Discuss your challenges
              </Link>
              <Link
                href="/how-we-work"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-8 py-6 text-base"
                )}
              >
                See how we work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
