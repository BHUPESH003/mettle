"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SlideOverPanel } from "@/components/ui/SlideOverPanel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { caseStudies } from "@/lib/case-studies";
import type { CaseStudy } from "@/lib/case-studies";
import { Icons } from "@/lib/icons";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function ProjectPanel({
  project,
  open,
  onClose,
}: {
  project: CaseStudy;
  open: boolean;
  onClose: () => void;
}) {
  const featured = project.featured;

  return (
    <SlideOverPanel open={open} onClose={onClose} size="lg">
      <div className="border-b border-white/10 px-7 pb-5 pt-16">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
          {project.industry}
        </span>
      </div>

      {/* Thumbnail */}
        <div className="relative h-52 shrink-0 overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            sizes="512px"
          />
          <div className="absolute inset-0 bg-linear-to-t from-surface-dark via-surface-dark/30 to-transparent" />
          <div className="absolute bottom-5 left-7">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
              {project.number}
            </span>
            <h2 className="text-2xl font-black tracking-tight">{project.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-7 py-6 space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs font-semibold text-white/65"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Context */}
          <p className="text-sm leading-relaxed text-white/65">{project.context}</p>

          {/* Featured blocks */}
          {featured && (
            <div className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/4 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">Problem</span>
                </div>
                <p className="text-sm leading-relaxed text-white/75">{featured.problem}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/4 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">Solution</span>
                </div>
                <p className="text-sm leading-relaxed text-white/75">{featured.solution}</p>
              </div>
              <div className="rounded-2xl border border-accent/20 bg-accent/6 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent/70">Impact</span>
                </div>
                <p className="text-sm leading-relaxed text-white/75">{featured.impact}</p>
              </div>
            </div>
          )}

          {/* Outcome */}
          {project.outcome && (
            <p className="text-sm leading-relaxed text-white/55 italic">{project.outcome}</p>
          )}
        </div>

        {/* CTA */}
        <div className="border-t border-white/10 px-7 py-5">
          <Link
            href={`/work/${project.slug}`}
            className="mettle-btn flex w-full bg-white px-6 py-3.5 text-sm text-zinc-950 hover:bg-white/90"
          >
            View full case study
            <Icons.arrowRight className="h-4 w-4" />
          </Link>
        </div>
    </SlideOverPanel>
  );
}

export function WorkProjectList() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [hoverSlug, setHoverSlug] = useState<string | null>(
    caseStudies[0]?.slug ?? null,
  );
  const [openProject, setOpenProject] = useState<CaseStudy | null>(null);

  useGSAP(
    () => {
      gsap.from(containerRef.current, {
        y: 120,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top 72%",
          scrub: 1,
        },
      });
    },
    { scope: containerRef },
  );

  const handleMouseEnter = (slug: string, element: HTMLElement) => {
    if (window.innerWidth < 768) {
      setHoverSlug(null);
      return;
    }
    setHoverSlug(slug);

    const container = containerRef.current;
    const imageContainer = imageContainerRef.current;
    if (!container || !imageContainer) return;

    const containerRect = container.getBoundingClientRect();
    const rowRect = element.getBoundingClientRect();
    const imageRect = imageContainer.getBoundingClientRect();
    const rowCenter = rowRect.top - containerRect.top + rowRect.height / 2;
    const minY = 12;
    const maxY = containerRect.height - imageRect.height - 12;
    const targetY = Math.min(Math.max(rowCenter - imageRect.height / 2, minY), maxY);

    gsap.to(imageContainer, { y: targetY, opacity: 1, duration: 0.45, ease: "power3.out" });
  };

  const handleMouseLeave = () => {
    if (imageContainerRef.current) {
      gsap.to(imageContainerRef.current, { opacity: 0, duration: 0.25, ease: "power2.out" });
    }
  };

  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-surface-muted py-20 text-white md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.06),transparent_22%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] bg-size-[96px_96px] opacity-30" />
      <div className="absolute right-6 top-1/2 hidden h-20 w-1 -translate-y-1/2 rounded-full bg-accent md:block" />

      <div className="container relative mx-auto px-4">
        <div className="mb-12 flex items-center gap-4">
          <Icons.sparkles className="h-6 w-6 text-white/70" />
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
            Selected projects
          </p>
        </div>

        <div
          ref={containerRef}
          onMouseLeave={handleMouseLeave}
          className="group/projects relative mx-auto max-w-6xl"
        >
          {/* Hover image preview (desktop) */}
          <div
            ref={imageContainerRef}
            className="pointer-events-none absolute right-0 top-0 z-10 hidden aspect-3/4 w-[300px] overflow-hidden rounded-sm border border-white/10 bg-black opacity-0 shadow-2xl shadow-black/50 md:block lg:right-8 xl:right-12 xl:w-[420px]"
          >
            {caseStudies.map((project) => (
              <Image
                key={project.slug}
                src={project.thumbnail}
                alt={project.title}
                fill
                sizes="(min-width: 1280px) 350px, 260px"
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                  project.slug === hoverSlug ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
          </div>

          <div className="flex flex-col">
            {caseStudies.map((project, index) => {
              const isHovered = project.slug === hoverSlug;
              return (
                <button
                  key={project.slug}
                  type="button"
                  onClick={() => setOpenProject(project)}
                  onMouseEnter={(e) => handleMouseEnter(project.slug, e.currentTarget)}
                  className="group/project w-full border-b border-white/8 py-4 text-left outline-none transition-colors first:border-t hover:border-white/20 focus-visible:border-accent md:py-5"
                >
                  <div className="grid items-center gap-4 md:grid-cols-[3rem_1fr_auto]">
                    <span
                      className={cn(
                        "text-sm font-black text-white/22 transition-colors",
                        isHovered && "text-accent",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    <div className="transition-transform duration-300 group-hover/project:translate-x-2">
                      <h3
                        className={cn(
                          "max-w-4xl text-3xl font-black leading-none tracking-tight text-white/20 transition-colors duration-300 group-hover/project:text-accent sm:text-5xl lg:text-6xl",
                          isHovered && "text-accent",
                        )}
                      >
                        {project.title}
                      </h3>
                      <p
                        className={cn(
                          "mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/22 transition-colors duration-300 group-hover/project:text-white/55 sm:text-sm",
                          isHovered && "text-accent/70",
                        )}
                      >
                        {project.industry}
                      </p>
                    </div>
                    <Icons.arrowUpRight
                      className={cn(
                        "hidden h-7 w-7 text-white/25 transition-all duration-300 group-hover/project:translate-x-1 group-hover/project:-translate-y-1 group-hover/project:text-white md:block",
                        isHovered && "text-white",
                      )}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {openProject ? (
        <ProjectPanel
          project={openProject}
          open
          onClose={() => setOpenProject(null)}
        />
      ) : null}
    </section>
  );
}
