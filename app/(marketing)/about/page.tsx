/**
 * About page
 * Why Mettle exists, how Mettle thinks
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: "How Mettle thinks about work, systems, and growth.",
};

const coreBeliefs = [
  {
    title: "We believe complexity is inevitable",
    description:
      "But confusion doesn't have to be. Every growing business encounters complexity — it's a natural part of scaling. What matters is how you handle it.",
  },
  {
    title: "Systems over solutions",
    description:
      "We don't provide quick fixes. We design systems that work today and can evolve as your business grows. Good systems reduce cognitive load and create sustainable growth.",
  },
  {
    title: "Understanding before action",
    description:
      "Most problems aren't solved by jumping to solutions. They're solved by deeply understanding the context, constraints, and people involved. We take the time to understand before we act.",
  },
  {
    title: "Technology serves decisions",
    description:
      "We choose tools and technology based on business needs, not trends. Every technology decision serves a clear purpose in moving your business forward.",
  },
];

const values = [
  {
    title: "Clarity over complexity",
    description:
      "We work to make the complex understandable, not to add more complexity.",
  },
  {
    title: "Long-term thinking",
    description:
      "We design for sustainable growth, not short-term wins.",
  },
  {
    title: "Honest partnerships",
    description:
      "We tell you what we see, even when it's uncomfortable.",
  },
  {
    title: "Continuous learning",
    description:
      "Every project teaches us something new about systems and complexity.",
  },
  {
    title: "Founder perspective",
    description:
      "We've been in the trenches. We understand the real challenges founders face.",
  },
  {
    title: "Practical results",
    description:
      "We measure success by whether your systems actually work in practice.",
  },
];

export default function AboutPage() {
  const ArrowIcon = Icons.arrowRight;

  return (
    <main>
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About Mettle
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground sm:text-2xl">
              How we think about work, systems, and helping founders navigate
              complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach to Work Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Our Approach to Work
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {coreBeliefs.map((belief, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
                >
                  <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                    {belief.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {belief.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Value Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                What We Value
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-border bg-background p-6 sm:p-8"
                >
                  <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Work with us
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-foreground sm:text-xl">
              If our approach to complexity and systems resonates with you, we'd
              love to hear about your challenges.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  "group inline-flex items-center gap-2 rounded-lg",
                  "bg-gray-900 px-8 py-6 text-base font-medium text-white",
                  "transition-colors hover:bg-gray-800",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
                )}
              >
                Start a conversation
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
