/**
 * Thinking page
 * Articles, perspectives, breakdowns
 */

import type { Metadata } from "next";
import Link from "next/link";
import { PageCTASection } from "@/components/common/PageCTASection";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Thinking",
  description:
    "Perspectives, breakdowns, and lessons from our work on complex problems.",
};

interface Article {
  number: string;
  id: string;
  slug: string;
  title: string;
  category: "perspectives" | "breakdowns" | "from-the-work" | "founder-notes";
  icon: keyof typeof Icons;
  publishedAt: string;
  readTime: number;
  excerpt: string;
}

const categoryMeta: Record<
  string,
  { label: string; icon: keyof typeof Icons }
> = {
  perspectives: { label: "Perspectives", icon: "lightbulb" },
  breakdowns: { label: "Breakdowns", icon: "layers" },
  "from-the-work": { label: "From the Work", icon: "briefcase" },
  "founder-notes": { label: "Founder Notes", icon: "pencil" },
};

const articles: Article[] = [
  {
    number: "01",
    id: "complexity-as-signal",
    slug: "complexity-as-signal",
    title: "Complexity as Signal, Not Noise",
    category: "perspectives",
    icon: "lightbulb",
    publishedAt: "2024-01-20",
    readTime: 4,
    excerpt:
      "Most businesses treat complexity as a problem to eliminate. What if it's actually information about what needs to change?",
  },
  {
    number: "02",
    id: "why-systems-fail",
    slug: "why-systems-fail",
    title: "Why Systems Fail (And What To Do About It)",
    category: "breakdowns",
    icon: "layers",
    publishedAt: "2024-02-05",
    readTime: 6,
    excerpt:
      "Most system failures aren't technical. They're human. Here's how to design systems that account for people.",
  },
  {
    number: "03",
    id: "patterns-in-product-failures",
    slug: "patterns-in-product-failures",
    title: "Patterns in Product Failures",
    category: "from-the-work",
    icon: "briefcase",
    publishedAt: "2024-01-15",
    readTime: 5,
    excerpt:
      "After working with dozens of product teams, certain failure patterns emerge repeatedly. Here are the most common ones.",
  },
  {
    number: "04",
    id: "reality-vs-expectation",
    slug: "reality-vs-expectation",
    title: "What Founders Get Wrong About Growth",
    category: "founder-notes",
    icon: "pencil",
    publishedAt: "2024-02-10",
    readTime: 4,
    excerpt:
      "Some uncomfortable truths about scaling a business that most founder stories leave out.",
  },
];

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const categoryKeys = Object.keys(categoryMeta) as Array<
  keyof typeof categoryMeta
>;

const whyWeWrite = [
  {
    icon: "target" as const,
    title: "From real work only",
    description:
      "Every piece here comes from an actual engagement or observation — not theory, not content marketing.",
  },
  {
    icon: "layers" as const,
    title: "Thinking compounds",
    description:
      "We write to sharpen our own clarity. If it helps you diagnose a problem faster, that's a bonus.",
  },
  {
    icon: "repeat" as const,
    title: "No opinion without evidence",
    description:
      "We don't publish takes. We publish patterns — things we've seen repeat across enough contexts to be worth sharing.",
  },
];

export default function ThinkingPage() {
  const ArrowIcon = Icons.arrowRight;
  const CheckIcon = Icons.check;
  const ClockIcon = Icons.clock;

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="bg-primary relative min-h-[65vh] flex flex-col justify-center overflow-hidden py-20"
      >
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-size-[52px_52px]" />
        {/* Blue blobs */}
        <div className="absolute top-1/4 right-[15%] w-96 h-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-[10%] w-72 h-72 rounded-full bg-accent/7 blur-[90px] pointer-events-none" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Tag */}
            <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/6 px-4 py-2 text-sm font-semibold text-white/70 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-accent inline-block" />
              Articles & perspectives
            </div>

            <h1 className="mb-5 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-none">
              Thinking
            </h1>

            <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-accent" />

            <p className="mb-3 text-xl font-semibold text-white/90 sm:text-2xl">
              Clear thinking about complex problems.
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50">
              We share perspectives, breakdowns, and lessons from our work. Not
              to establish authority, but because clear thinking compounds.
            </p>

            {/* Category indicator row */}
            <div className="mx-auto mt-14 max-w-2xl">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
                {categoryKeys.map((key) => {
                  const meta = categoryMeta[key];
                  const Icon = Icons[meta.icon];
                  const count = articles.filter(
                    (a) => a.category === key
                  ).length;
                  return (
                    <div
                      key={key}
                      className="flex flex-col items-center gap-2 bg-white/4 px-4 py-5 text-center"
                    >
                      <Icon className="h-5 w-5 text-accent" />
                      <span className="text-xs font-bold text-white/80">
                        {meta.label}
                      </span>
                      <span className="text-xs font-semibold text-white/35">
                        {count} article{count !== 1 ? "s" : ""}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Articles grid ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {/* Section label */}
            <div className="mb-12 flex items-center gap-4">
              <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                All articles
              </span>
              <div className="h-px flex-1 bg-border" />
              <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                {articles.length} pieces published
              </span>
            </div>

            {/* 2-column card grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {articles.map((article) => {
                const Icon = Icons[article.icon];
                const catMeta = categoryMeta[article.category];
                return (
                  <article
                    key={article.id}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/8"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-accent/4 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                    <div className="relative flex-1 p-7 sm:p-8">
                      {/* Top row: icon + decorative number */}
                      <div className="mb-5 flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/8 transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/15">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <span
                          aria-hidden
                          className="select-none text-5xl font-black leading-none text-border/30 transition-colors duration-300 group-hover:text-accent/15"
                        >
                          {article.number}
                        </span>
                      </div>

                      {/* Badges */}
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-accent/20 bg-accent/8 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-accent">
                          {catMeta.label}
                        </span>
                        <span className="flex items-center gap-1 rounded-full border border-border bg-background-secondary px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                          <ClockIcon className="h-3 w-3" />
                          {article.readTime} min read
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="mb-4 text-xl font-black leading-snug text-foreground transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Card footer */}
                    <div className="relative border-t border-border px-7 py-5 sm:px-8">
                      <div className="flex items-center justify-between">
                        <time className="text-xs font-semibold text-muted-foreground/70">
                          {formatDate(article.publishedAt)}
                        </time>
                        <Link
                          href={`/thinking/${article.slug}`}
                          className="group/link flex items-center gap-1.5 text-sm font-bold text-foreground transition-colors hover:text-accent"
                        >
                          Read article
                          <ArrowIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why we write ─────────────────────────────────────────────── */}
      <section
        className="bg-primary relative overflow-hidden py-20 md:py-24"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/7 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Why we write
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              How we approach sharing ideas
            </h2>
          </div>

          <div className="mx-auto max-w-5xl grid gap-5 md:grid-cols-3">
            {whyWeWrite.map((item) => {
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

      <PageCTASection
        headline="Have a problem"
        headlineAccent="worth talking through?"
        description="Ideas are how we start, but execution is how we finish. If something you read here resonates with a challenge you're facing, let's talk about it."
        primary={{ href: "/contact", label: "Start a conversation" }}
        secondary={{ href: "/work", label: "See our work" }}
      />

    </main>
  );
}
