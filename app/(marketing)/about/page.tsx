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
    title: "Process comes first, AI second",
    description:
      "Adding AI to a broken process just makes mistakes happen faster. We clinicaly audit your business workflows to fix the logic before we apply the technology.",
  },
  {
    title: "Systems over decks",
    description:
      "We don't deliver 'strategy' PDFs. We deliver production-grade code, custom CRMs, and automation pipelines that live in your business and drive real output.",
  },
  {
    title: "Execution is the strategy",
    description:
      "Most consulting fails because of the gap between advice and action. We bridge that gap by owning the implementation from architecture to iteration.",
  },
  {
    title: "Technology as leverage",
    description:
      "We choose tools (Next.js, FastAPI, PostgreSQL) because they provide the best leverage for your business constraints, not because they're trending.",
  },
];

const values = [
  {
    title: "Clarity over complexity",
    description:
      "We work to make your operations readable and repeatable, not more convoluted.",
  },
  {
    title: "Engineering-led",
    description:
      "Our founders are builders. We solve problems with an engineer's mindset of efficiency and scale.",
  },
  {
    title: "Honest partnerships",
    description:
      "We tell you when a process is broken or when AI isn't the right tool for the job.",
  },
  {
    title: "Founder-to-Founder",
    description:
      "We understand the pressure of scaling. We work as a direct extension of your core team.",
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
                  "bg-accent px-8 py-6 text-base font-medium text-white",
                  "transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
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
