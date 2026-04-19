/**
 * Detailed Case Study Page — dynamic route
 * Reads from lib/projects.ts
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { CaseStudyLayout } from "@/components/common/CaseStudyLayout";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Case Study`,
    description: project.shortDescription,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <CaseStudyLayout
      breadcrumbLabel={project.title}
      industry={project.industry}
      title={project.title}
      description={project.shortDescription}
      problem={project.problem.description}
      painPoints={project.problem.painPoints}
      insight={project.insight}
      approach={project.system.description}
      features={project.system.features}
      architecture={project.system.architecture}
      outcome={project.impact.description}
      metrics={project.impact.metrics}
      tech={project.tech}
      ctaHeadline="Have a similar complexity?"
      ctaBody="We help founders solve messy operational problems through systems thinking and execution."
    />
  );
}
