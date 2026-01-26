/**
 * Thinking page
 * Articles, perspectives, breakdowns
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Thinking",
  description:
    "Perspectives, breakdowns, and lessons from our work on complex problems.",
};

interface Article {
  id: string;
  slug: string;
  title: string;
  category: "perspectives" | "breakdowns" | "from-the-work" | "founder-notes";
  publishedAt: string;
  readTime: number;
  excerpt: string;
}

const categoryDisplayNames: Record<string, string> = {
  perspectives: "Perspectives",
  breakdowns: "Breakdowns",
  "from-the-work": "From the Work",
  "founder-notes": "Founder Notes",
};

const articles: Article[] = [
  {
    id: "complexity-as-signal",
    slug: "complexity-as-signal",
    title: "Complexity as Signal, Not Noise",
    category: "perspectives",
    publishedAt: "2024-01-20",
    readTime: 4,
    excerpt:
      "Most businesses treat complexity as a problem to eliminate. What if it's actually information about what needs to change?",
  },
  {
    id: "why-systems-fail",
    slug: "why-systems-fail",
    title: "Why Systems Fail (And What To Do About It)",
    category: "breakdowns",
    publishedAt: "2024-02-05",
    readTime: 6,
    excerpt:
      "Most system failures aren't technical. They're human. Here's how to design systems that account for people.",
  },
  {
    id: "patterns-in-product-failures",
    slug: "patterns-in-product-failures",
    title: "Patterns in Product Failures",
    category: "from-the-work",
    publishedAt: "2024-01-15",
    readTime: 5,
    excerpt:
      "After working with dozens of product teams, certain failure patterns emerge repeatedly. Here are the most common ones.",
  },
  {
    id: "reality-vs-expectation",
    slug: "reality-vs-expectation",
    title: "What Founders Get Wrong About Growth",
    category: "founder-notes",
    publishedAt: "2024-02-10",
    readTime: 4,
    excerpt:
      "Some uncomfortable truths about scaling a business that most founder stories leave out.",
  },
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ThinkingPage() {
  const ArrowIcon = Icons.arrowRight;

  return (
    <main>
      {/* Page Header Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Thinking
            </h1>
            <p className="mb-4 text-xl font-medium text-foreground sm:text-2xl">
              Clear thinking about complex problems.
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              We share perspectives, breakdowns, and lessons from our work. Not
              to establish authority, but because clear thinking compounds.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="group flex flex-col rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-900 hover:shadow-md sm:p-8"
                >
                  {/* Card Header */}
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      {categoryDisplayNames[article.category]}
                    </span>
                    {article.readTime && (
                      <span className="text-xs text-gray-500">
                        {article.readTime} min read
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="mb-3 text-xl font-semibold leading-tight sm:text-2xl">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <time className="text-xs text-gray-500 sm:text-sm">
                      {formatDate(article.publishedAt)}
                    </time>
                    <Link
                      href={`/thinking/${article.slug}`}
                      className="group/link flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
                    >
                      Read article
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
              This is how we think about the problems we solve. Each piece
              represents real insights from real work.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
