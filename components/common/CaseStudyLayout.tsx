import Link from "next/link";
import { CaseStudyGallery, CaseStudyHeroImage } from "@/components/common/CaseStudyGallery";
import { PageCTASection } from "@/components/common/PageCTASection";
import { Icons } from "@/lib/icons";
import { getCaseStudyMedia, type CaseStudyMedia } from "@/lib/case-study-images";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CaseStudyData {
  breadcrumbLabel: string;
  industry: string;
  tags?: string[];
  number?: string;
  title: string;
  description: string;
  context?: string;
  problem: string;
  painPoints?: string[];
  insight: string;
  approach: string;
  features?: string[];
  architecture?: string;
  outcome: string;
  metrics?: string[];
  reflection?: string;
  tech?: string[];
  ctaHeadline: string;
  ctaBody: string;
  /** Loads images from lib/case-study-images when provided */
  slug?: string;
  media?: CaseStudyMedia;
}

export function CaseStudyLayout({
  breadcrumbLabel,
  industry,
  tags,
  number,
  title,
  description,
  context,
  problem,
  painPoints,
  insight,
  approach,
  features,
  architecture,
  outcome,
  metrics,
  reflection,
  tech,
  ctaHeadline,
  ctaBody,
  slug,
  media: mediaProp,
}: CaseStudyData) {
  const media = mediaProp ?? (slug ? getCaseStudyMedia(slug) : undefined);
  const ArrowIcon = Icons.arrowRight;
  const CheckIcon = Icons.check;
  const ChevronRight = Icons.chevronRight;

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="bg-primary relative min-h-[60vh] flex flex-col justify-center overflow-hidden py-20"
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-size-[52px_52px]" />
        <div className="absolute top-1/4 right-[15%] w-96 h-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-[10%] w-72 h-72 rounded-full bg-accent/7 blur-[90px] pointer-events-none" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-sm font-semibold text-white/40">
              <Link href="/work" className="transition-colors hover:text-white/80">
                Work
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white/70">{breadcrumbLabel}</span>
            </nav>

            {/* Tags row */}
            <div className="mb-6 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                {industry}
              </span>
              {tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/6 px-3 py-1 text-xs font-semibold text-white/60"
                >
                  {tag}
                </span>
              ))}
              {number && (
                <span
                  aria-hidden
                  className="ml-auto select-none text-6xl font-black leading-none text-white/8"
                >
                  {number}
                </span>
              )}
            </div>

            <h1 className="mb-5 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              {title}
            </h1>
            <div className="mb-6 h-1 w-16 rounded-full bg-accent" />
            <p className="max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
              {description}
            </p>
            {media?.hero ? <CaseStudyHeroImage image={media.hero} /> : null}
          </div>
        </div>
      </section>

      {/* ── The Problem ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            {/* Section label */}
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                The Problem
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            {context ? (
              <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                {/* Context */}
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground/60">
                    Context
                  </p>
                  <p className="text-base leading-relaxed text-foreground sm:text-lg">
                    {context}
                  </p>
                </div>
                {/* Problem */}
                <div className="rounded-2xl border border-border bg-background-secondary p-6 sm:p-8">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground/60">
                    The real problem
                  </p>
                  <p className="text-base leading-relaxed text-foreground sm:text-lg">
                    {problem}
                  </p>
                </div>
              </div>
            ) : (
              <p className="mb-8 max-w-3xl text-lg leading-relaxed text-foreground sm:text-xl">
                {problem}
              </p>
            )}

            {/* Pain points */}
            {painPoints && painPoints.length > 0 && (
              <div className="mt-8 rounded-2xl border border-border bg-background-secondary p-6 sm:p-8">
                <p className="mb-5 text-xs font-bold uppercase tracking-wider text-muted-foreground/60">
                  Key pain points
                </p>
                <ul className="space-y-3">
                  {painPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                      <span className="text-base leading-relaxed text-foreground">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── The Insight ───────────────────────────────────────────────── */}
      <section
        className="bg-primary relative overflow-hidden py-20 md:py-24"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span
            aria-hidden
            className="select-none text-[18rem] font-black leading-none text-white/1.5"
          >
            &ldquo;
          </span>
        </div>
        <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-accent/7 blur-[100px] pointer-events-none" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-accent">
              The Insight
            </p>
            <blockquote className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
              <span className="text-accent">&ldquo;</span>
              {insight}
              <span className="text-accent">&rdquo;</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── The Approach ──────────────────────────────────────────────── */}
      <section className="bg-background-secondary py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            {/* Section label */}
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                The Approach
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-foreground sm:text-xl">
              {approach}
            </p>

            {/* Features grid */}
            {features && features.length > 0 && (
              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-border bg-background p-4"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent mt-0.5">
                      <CheckIcon className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm font-medium leading-relaxed text-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Architecture callout */}
            {architecture && (
              <div className="rounded-panel border-l-4 border-accent bg-background py-6 pl-6 pr-6 sm:py-8">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-accent/70">
                  Architecture overview
                </p>
                <p className="text-base leading-relaxed text-foreground sm:text-lg">
                  {architecture}
                </p>
              </div>
            )}

            <CaseStudyGallery showcase={media?.showcase} />
          </div>
        </div>
      </section>

      {/* ── The Outcome ───────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            {/* Section label */}
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                The Outcome
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-foreground sm:text-xl">
              {outcome}
            </p>

            {/* Metrics row */}
            {metrics && metrics.length > 0 && (
              <div
                className="bg-primary mb-8 overflow-hidden rounded-2xl"
              >
                <div className="divide-y divide-white/8">
                  {metrics.map((metric) => (
                    <div
                      key={metric}
                      className="flex items-center gap-3 px-7 py-5"
                    >
                      <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <p className="text-base font-semibold text-white">
                        {metric}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reflection */}
            {reflection && (
              <div className="rounded-2xl border border-border bg-background-secondary p-7 sm:p-8">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground/60">
                  Reflection
                </p>
                <p className="text-base italic leading-relaxed text-foreground sm:text-lg">
                  {reflection}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Tech stack ────────────────────────────────────────────────── */}
      {tech && tech.length > 0 && (
        <section
          className="bg-primary relative overflow-hidden py-12"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Technologies used
              </p>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-sm font-semibold text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <PageCTASection
        headline={ctaHeadline}
        description={ctaBody}
        primary={{ href: "/contact", label: "Start a conversation" }}
        secondary={{ href: "/work", label: "See all work" }}
      />

    </main>
  );
}
