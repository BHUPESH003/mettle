/**
 * Work / Case Studies page
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies showing how we solve complex operational problems through systems thinking and clarity.",
};

interface CaseStudy {
  number: string;
  slug: string;
  title: string;
  industry: string;
  icon: keyof typeof Icons;
  tags: string[];
  context: string;
  outcome: string | null;
}

const caseStudies: CaseStudy[] = [
  {
    number: "01",
    slug: "bichance-social-dining-platform",
    title: "Validating Demand Before Building a Social Dining Platform",
    industry: "Consumer Platform",
    icon: "users",
    tags: ["Strategy", "Validation"],
    context:
      "Bichance in Singapore had a social dining concept but lacked clarity on feasibility, scope, and adoption risks before committing to any technical investment.",
    outcome: null,
  },
  {
    number: "02",
    slug: "barnshenn-ecommerce-platform",
    title: "Simplifying Operations for a Growing Toy Brand",
    industry: "E-commerce",
    icon: "package",
    tags: ["Operations", "Platform"],
    context:
      "A UK toy brand faced operational complexity and performance issues across WordPress and Magento, with fragmented admin workflows slowing the team daily.",
    outcome: null,
  },
  {
    number: "03",
    slug: "mirexa-pharmaceutical-brand-transition",
    title: "Aligning Digital Presence with a Brand Transition",
    industry: "Pharmaceutical",
    icon: "briefcase",
    tags: ["Brand", "Digital"],
    context:
      "Mirexa Pharmaceutical, formerly Keshav Pharmaceuticals, needed alignment between business intent and digital representation within a regulated industry.",
    outcome: null,
  },
  {
    number: "04",
    slug: "themedcare-pharmacy-digital-presence",
    title: "Establishing Trust for a Pharmacy's Digital Presence",
    industry: "Healthcare",
    icon: "shield",
    tags: ["Healthcare", "Trust"],
    context:
      "Themedcare.ca was transitioning from a physical pharmacy to a credible digital presence in Canada, where compliance and accessibility signals are expected.",
    outcome: "Digital identity strengthened trust and enabled meaningful client feedback.",
  },
  {
    number: "05",
    slug: "mycleanone-pro-license-generator",
    title: "Clarifying Value and Entitlement for a Pro License",
    industry: "B2C SaaS",
    icon: "zap",
    tags: ["SaaS", "Automation"],
    context:
      "Users struggled to understand the difference between free and Pro tiers, and the licensing system needed to handle high volume without manual intervention.",
    outcome: "70 hours saved per week through automation after flow was optimised.",
  },
  {
    number: "06",
    slug: "k2renewals-crm",
    title: "Restoring Operational Clarity in Raw Materials Tracking",
    industry: "Operations",
    icon: "workflow",
    tags: ["CRM", "Tracking"],
    context:
      "K2Renewals depended on manual logs and Excel for raw material tracking, creating inconsistent data and near-zero visibility across logistics and reporting.",
    outcome: "Clearer operations and better decision-making through a purpose-built CRM.",
  },
];

const stats = [
  { value: "6", label: "Case studies" },
  { value: "4+", label: "Industries" },
  { value: "70h", label: "Saved per week" },
] as const;

const differentiators = [
  {
    icon: "target" as const,
    title: "Real problems only",
    description:
      "Every case study documents an actual operational challenge — not a hypothetical, a demo, or a portfolio filler.",
  },
  {
    icon: "checkCircle" as const,
    title: "Honest outcomes",
    description:
      "We show what changed and what shaped the solution, including the constraints we worked within.",
  },
  {
    icon: "layers" as const,
    title: "Systems thinking throughout",
    description:
      "Each engagement starts with diagnosis. Solutions follow understanding, not assumptions about what the client needs.",
  },
];

export default function WorkPage() {
  const ArrowIcon = Icons.arrowRight;
  const CheckIcon = Icons.check;

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[65vh] flex flex-col justify-center overflow-hidden py-20"
        style={{ background: "hsl(var(--primary))" }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        {/* Blue blobs */}
        <div className="absolute top-1/4 right-[15%] w-96 h-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-[10%] w-72 h-72 rounded-full bg-accent/7 blur-[90px] pointer-events-none" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Tag */}
            <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/6 px-4 py-2 text-sm font-semibold text-white/70 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-accent inline-block" />
              Case studies
            </div>

            <h1 className="mb-5 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-none">
              Our Work
            </h1>

            <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-accent" />

            <p className="mb-3 text-xl font-semibold text-white/90 sm:text-2xl">
              Real systems built to solve real operational problems.
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50">
              No demos. No hypothetical examples. Each project started with a
              problem that needed clarity, not a solution looking for a use case.
            </p>

            {/* Stats row */}
            <div className="mx-auto mt-14 max-w-lg">
              <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center gap-1 bg-white/4 px-4 py-5 text-center"
                  >
                    <span className="text-2xl font-black text-accent">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-white/50">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Studies ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {/* Section label */}
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                All projects
              </span>
              <div className="h-px flex-1 bg-border" />
              <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                {caseStudies.length} case studies
              </span>
            </div>

            {/* Case study cards — 2-column grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {caseStudies.map((project) => {
                const Icon = Icons[project.icon];
                return (
                  <article
                    key={project.slug}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/8"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-accent/4 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                    <div className="relative flex-1 p-7 sm:p-8">
                      {/* Top row: icon + number */}
                      <div className="mb-5 flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/8 transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/15">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <span
                          aria-hidden
                          className="select-none text-5xl font-black leading-none text-border/30 transition-colors duration-300 group-hover:text-accent/15"
                        >
                          {project.number}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="rounded-full border border-accent/20 bg-accent/8 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-accent">
                          {project.industry}
                        </span>
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border bg-background-secondary px-2.5 py-0.5 text-xs font-semibold text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h2 className="mb-4 text-xl font-black leading-snug text-foreground transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                        {project.title}
                      </h2>

                      {/* Context */}
                      <div className="mb-4">
                        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground/60">
                          Context
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {project.context}
                        </p>
                      </div>

                      {/* Outcome */}
                      {project.outcome && (
                        <div className="flex items-start gap-2.5 rounded-xl border border-accent/15 bg-accent/5 px-4 py-3">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <p className="text-sm font-medium leading-relaxed text-foreground">
                            {project.outcome}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Card footer */}
                    <div className="relative border-t border-border px-7 py-5 sm:px-8">
                      <Link
                        href={`/work/${project.slug}`}
                        className="group/link flex items-center justify-between text-sm font-bold text-foreground transition-colors hover:text-accent"
                      >
                        View case study
                        <ArrowIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── What makes our work different ────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 md:py-24"
        style={{ background: "hsl(var(--primary))" }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/7 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              What to expect
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              How we document our work
            </h2>
          </div>

          <div className="mx-auto max-w-5xl grid gap-5 md:grid-cols-3">
            {differentiators.map((item) => {
              const Icon = Icons[item.icon];
              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/8 bg-white/4 p-7 transition-all duration-300 hover:border-accent/30 hover:bg-white/7"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 transition-colors group-hover:border-accent/50 group-hover:bg-accent/20">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            {/* Callout */}
            <div className="mb-10 inline-flex flex-col items-start gap-3 rounded-2xl border border-border bg-background-secondary px-8 py-6 text-left">
              {[
                "Every engagement starts with understanding, not a proposal",
                "We work with founders navigating real operational complexity",
                "Outcomes over deliverables — always",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent">
                    <CheckIcon className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">
              Want to see how we approach your problem?
            </h2>
            <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-accent" />
            <p className="mb-3 text-lg leading-relaxed text-foreground">
              Each case study here started with a conversation, not a brief.
            </p>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              We don&apos;t sell services — we solve problems. Let&apos;s find out if
              yours is one we can help with.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group inline-flex items-center gap-2 px-10 py-6 text-base font-semibold shadow-lg shadow-accent/25"
                )}
              >
                Start a conversation
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/how-we-work"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-10 py-6 text-base font-semibold"
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
