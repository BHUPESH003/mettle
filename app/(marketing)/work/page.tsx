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

import { projects } from "@/lib/projects";

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
              {projects.map((project) => (
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

                    {/* Tech Preview */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="text-xs font-medium text-slate-500">
                          #{t}
                        </span>
                      ))}
                    </div>
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
