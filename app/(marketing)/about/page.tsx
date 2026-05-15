/**
 * About page — editorial layout
 */

import type { Metadata } from "next";
import Link from "next/link";
import { AboutHeroMerged } from "@/components/about/AboutHeroMerged";
import { TeamSection } from "@/components/about/TeamSection";
import { PageCTASection } from "@/components/common/PageCTASection";
import { Icons } from "@/lib/icons";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: "How Mettle thinks about work, systems, and growth.",
};

const beliefs = [
  {
    number: "01",
    title: "Process comes first, AI second",
    description:
      "Adding AI to a broken process just makes mistakes happen faster. We audit your business workflows to fix the logic before applying any technology.",
  },
  {
    number: "02",
    title: "Systems over decks",
    description:
      "We don't deliver 'strategy' PDFs. We deliver production-grade code, custom CRMs, and automation pipelines that live in your business and drive real output.",
  },
  {
    number: "03",
    title: "Execution is the strategy",
    description:
      "Most consulting fails because of the gap between advice and action. We bridge that gap by owning the implementation from architecture to iteration.",
  },
  {
    number: "04",
    title: "Technology as leverage",
    description:
      "We choose tools because they provide the best leverage for your business constraints — not because they're trending.",
  },
] as const;

const distinctives = [
  {
    title: "Built by engineers",
    description:
      "Not a consultancy that hires engineers. We are engineers who consult. Every recommendation comes from people who've shipped.",
  },
  {
    title: "We own the outcome",
    description:
      "We don't hand off a document and disappear. We stay in the work until the system runs and the problem is solved.",
  },
  {
    title: "No vanity metrics",
    description:
      "We measure what changes operationally — hours saved, errors reduced, decisions made faster.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="bg-surface-dark text-white">
      <AboutHeroMerged />

      {/* ── Company intro ───────────────────────────────────────── */}
      <section
        id="about-content"
        className="scroll-mt-8 border-b border-white/8 px-6 py-20 md:py-28"
      >
        <div className="container mx-auto">
          <div className="grid gap-16 md:grid-cols-[1fr_1.4fr] md:items-start">
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-white/35">
                Who we are
              </p>
              <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                An AI-first execution firm built by engineers.
              </h2>
            </div>
            <div className="space-y-5 pt-2 md:pt-8">
              <p className="text-lg leading-relaxed text-white/65">
                Mettle is a systems-focused consulting firm that optimizes and
                automates how businesses operate. We redesign your processes,
                build custom software, and deploy automation so your team runs
                faster with less friction.
              </p>
              <p className="text-lg leading-relaxed text-white/65">
                We don&apos;t start with a service to sell. We start with your
                situation, diagnose what&apos;s actually broken, and bring the
                right capability to fix it — then build and ship it.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-accent"
                >
                  Start a conversation
                  <Icons.arrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What we believe ─────────────────────────────────────── */}
      <section className="border-b border-white/8 px-6 py-20 md:py-28">
        <div className="container mx-auto">
          <p className="mb-16 text-[11px] font-bold uppercase tracking-[0.24em] text-white/35">
            What we believe
          </p>

          <div className="divide-y divide-white/8 border-y border-white/8">
            {beliefs.map((b) => (
              <div
                key={b.number}
                className="grid gap-6 py-10 md:grid-cols-[80px_1fr_1.5fr] md:items-start"
              >
                <span className="text-sm font-semibold text-white/25">{b.number}</span>
                <h3 className="text-xl font-black tracking-tight text-white md:text-2xl">
                  {b.title}
                </h3>
                <p className="text-base leading-relaxed text-white/55">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manifesto quote ─────────────────────────────────────── */}
      <section className="border-b border-white/8 px-6 py-24 md:py-36">
        <div className="container mx-auto max-w-5xl">
          <blockquote className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            &ldquo;Execution is the strategy.
            <br />
            <span className="text-white/35">
              We don&apos;t advise. We build.&rdquo;
            </span>
          </blockquote>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/40">
            Every engagement starts with a real problem and ends with a system
            that runs in production. The gap between those two points is where
            we work.
          </p>
        </div>
      </section>

      <TeamSection />

      {/* ── Why founders work with us ───────────────────────────── */}
      <section className="border-b border-white/8 px-6 py-20 md:py-28">
        <div className="container mx-auto">
          <p className="mb-16 text-[11px] font-bold uppercase tracking-[0.24em] text-white/35">
            Why founders work with us
          </p>

          <div className="grid gap-3 md:grid-cols-3">
            {distinctives.map((item, i) => (
              <div
                key={item.title}
                className={cn(
                  "rounded-2xl border p-8",
                  i === 1
                    ? "border-white/10 bg-white/6"
                    : "border-white/6 bg-white/3",
                )}
              >
                <span className="mb-6 block text-[11px] font-bold uppercase tracking-[0.2em] text-white/25">
                  0{i + 1}
                </span>
                <h3 className="mb-4 text-xl font-black tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/55">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTASection
        headline="Work"
        headlineAccent="with us."
        description="We don't start with proposals or pitches. We start with understanding your situation — then figure out together if and how we can help."
        primary={{ href: "/contact", label: "Start a conversation" }}
        secondary={{ href: "/how-we-work", label: "How we work" }}
      />
    </main>
  );
}
