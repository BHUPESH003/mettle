/**
 * How We Work page
 * Explains Mettle's approach, not services
 */

import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/brand";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Our consulting-led approach to handling complexity and creating clarity.",
};

export default function HowWeWorkPage() {
  const ArrowIcon = Icons.arrowRight;

  return (
    <main>
      {/* Opening Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              How We Work
            </h1>
            <p className="mb-4 text-xl font-medium text-foreground sm:text-2xl">
              Complexity is not a failure — it's a signal.
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Most problems are misunderstood, not unsolved. Mettle exists to
              bring clarity before action.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding the Problem Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Understanding the Problem
              </h2>
              <p className="mb-6 text-xl font-medium text-muted-foreground sm:text-2xl">
                We don't start with solutions
              </p>
              <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                Time is spent understanding the business context, constraints,
                people, and existing systems.
              </p>
            </div>

            <div className="mb-10 grid gap-6 md:grid-cols-2 lg:gap-8">
              {[
                {
                  title: "Business Context",
                  description:
                    "What drives decisions and creates real constraints? We map the business landscape before suggesting changes.",
                },
                {
                  title: "Real Constraints",
                  description:
                    "What limitations actually exist? We identify what's truly holding things back, not just what's obvious.",
                },
                {
                  title: "People & Systems",
                  description:
                    "How do decisions get made? We understand the human elements and existing workflows.",
                },
                {
                  title: "Hidden Dependencies",
                  description:
                    "What connections exist that aren't visible? We find the relationships between different parts of the business.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
                >
                  <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                The real problem is often not the obvious one. We dig deeper to
                find what's actually causing the complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creating Clarity Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Creating Clarity
              </h2>
              <p className="mb-6 text-xl font-medium text-muted-foreground sm:text-2xl">
                From ambiguity to direction
              </p>
              <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                Once we understand the landscape, we break down complexity into
                understandable parts.
              </p>
            </div>

            <div className="mb-10 grid gap-6 md:grid-cols-3 lg:gap-8">
              {[
                {
                  title: "Breaking Down Complexity",
                  description:
                    "Turning overwhelming problems into manageable components",
                },
                {
                  title: "Finding Leverage Points",
                  description:
                    "Identifying where small changes create big impacts",
                },
                {
                  title: "Aligning Decisions",
                  description:
                    "Ensuring choices serve the business reality, not assumptions",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-border bg-background p-6 text-center sm:p-8"
                >
                  <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="rounded-lg border-l-4 border-gray-900 bg-gray-50 p-6 sm:p-8">
                <p className="text-lg font-medium leading-relaxed text-foreground sm:text-xl">
                  This is where Mettle's thinking strength shows. We don't just
                  identify problems — we restructure how you see them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designing Systems Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Designing Systems
              </h2>
              <p className="mb-6 text-xl font-medium text-muted-foreground sm:text-2xl">
                Systems over features, decisions over tools
              </p>
            </div>

            <div className="mb-10 grid gap-6 md:grid-cols-2 lg:gap-8">
              {[
                {
                  title: "Scalability Over Quick Wins",
                  description:
                    "We design for growth, not just immediate needs. Systems that work at 10 people should work at 100.",
                },
                {
                  title: "Decisions Over Tools",
                  description:
                    "Technology follows clarity. We establish decision-making frameworks before choosing solutions.",
                },
                {
                  title: "Interconnected Design",
                  description:
                    "Systems work together. We design with relationships and dependencies in mind.",
                },
                {
                  title: "Adaptable Architecture",
                  description:
                    "Business needs change. We build systems that can evolve without breaking.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
                >
                  <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                This is where thinking connects to action. We design systems
                that reduce cognitive load and create sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thoughtful Execution Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Thoughtful Execution
              </h2>
              <p className="mb-6 text-xl font-medium text-muted-foreground sm:text-2xl">
                Execution follows clarity
              </p>
              <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                Once systems are designed, we execute with intention and
                adaptation.
              </p>
            </div>

            <div className="mb-10 grid gap-6 md:grid-cols-3 lg:gap-8">
              {[
                {
                  title: "Expected Adjustments",
                  description:
                    "Real-world implementation reveals what theory doesn't. We adapt as we learn.",
                },
                {
                  title: "Milestone Validation",
                  description:
                    "Each step is measured against real outcomes, not just completion.",
                },
                {
                  title: "Long-term Focus",
                  description:
                    "Speed matters, but sustainability matters more. We prioritize lasting impact.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-border bg-background p-6 text-center sm:p-8"
                >
                  <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="rounded-lg border-l-4 border-gray-900 bg-gray-50 p-6 sm:p-8">
                <p className="text-lg font-medium leading-relaxed text-foreground sm:text-xl">
                  Execution without understanding leads to more complexity. We
                  execute with the full context of why decisions are made.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Partnership Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ongoing Partnership
              </h2>
              <p className="mb-6 text-xl font-medium text-muted-foreground sm:text-2xl">
                Business evolution doesn't stop
              </p>
            </div>

            <div className="mb-10 grid gap-6 md:grid-cols-2 lg:gap-8">
              {[
                {
                  title: "Systems Need Refinement",
                  description:
                    "What works today might not work tomorrow. We help evolve systems as your business grows.",
                },
                {
                  title: "Knowledge Transfer",
                  description:
                    "We don't just build — we teach. Understanding systems means you can maintain and improve them.",
                },
                {
                  title: "Long-term Value",
                  description:
                    "Our goal is sustainable growth. We stay involved where we can add ongoing value.",
                },
                {
                  title: "Adaptive Support",
                  description:
                    "As new challenges emerge, we help navigate them with the same clarity and systems thinking.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
                >
                  <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                Mettle partners with founders through growth, not just projects.
                We're here for the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to work differently?
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-foreground sm:text-xl">
              If you're navigating complexity and want clarity before action,
              let's explore how we can help.
            </p>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We don't sell services — we start conversations about real
              problems.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group inline-flex items-center gap-2 px-8 py-6 text-base"
                )}
              >
                Start a conversation
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/work"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-8 py-6 text-base"
                )}
              >
                See our approach in action
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
