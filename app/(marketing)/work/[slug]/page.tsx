/**
 * Detailed Case Study Page
 * Deep dive into a specific project
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { Icons } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.shortDescription,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const BackIcon = Icons.arrowRight; // Will rotate in UI
  const CheckIcon = Icons.check;
  const AlertIcon = Icons.alertTriangle;
  const LightbulbIcon = Icons.lightbulb;
  const CodeIcon = Icons.monitor;

  return (
    <main className="pb-20">
      {/* Hero / Header Section */}
      <section className="border-b border-border py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/work"
              className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <BackIcon className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
              Back to all work
            </Link>
            
            <div className="mb-4">
              <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700">
                {project.industry}
              </span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            
            <p className="text-xl leading-relaxed text-muted-foreground sm:text-2xl">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* The Problem */}
            <div className="mb-16">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
                  <AlertIcon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">The Problem</h2>
              </div>
              
              <p className="mb-8 text-lg leading-relaxed text-foreground sm:text-xl">
                {project.problem.description}
              </p>
              
              <div className="rounded-xl border border-border bg-slate-50 p-6 sm:p-8">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Key Pain Points</h3>
                <ul className="space-y-4">
                  {project.problem.painPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                      <span className="text-base leading-relaxed text-gray-700 sm:text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* The Insight */}
            <div className="mb-16">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600">
                  <LightbulbIcon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">The Insight</h2>
              </div>
              
              <div className="rounded-xl border-l-4 border-gray-900 bg-gray-50 p-8 shadow-sm">
                <p className="text-xl font-medium italic leading-relaxed text-foreground sm:text-2xl">
                  "{project.insight}"
                </p>
              </div>
            </div>

            {/* The System */}
            <div className="mb-16">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <CodeIcon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">What We Built</h2>
              </div>
              
              <p className="mb-8 text-lg leading-relaxed text-foreground sm:text-xl">
                {project.system.description}
              </p>

              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                {project.system.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 rounded-lg border border-border p-4">
                    <CheckIcon className="h-5 w-5 shrink-0 text-green-600" />
                    <span className="font-medium text-gray-900">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-slate-900 p-8 text-white">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Architecture Overview</h3>
                <p className="text-lg leading-relaxed text-slate-200">
                  {project.system.architecture}
                </p>
              </div>
            </div>

            {/* The Impact */}
            <div className="mb-16">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">The Impact</h2>
              </div>
              
              <p className="mb-8 text-lg leading-relaxed text-foreground sm:text-xl">
                {project.impact.description}
              </p>

              <div className="grid gap-6 sm:grid-cols-3">
                {project.impact.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-lg font-bold text-gray-900">{metric}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="border-t border-border pt-16">
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-slate-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Have a similar complexity?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              We help founders solve messy operational problems through systems thinking and execution.
            </p>
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "px-8 py-6 text-base")}
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
