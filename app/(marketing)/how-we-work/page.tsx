import type { Metadata } from "next";
import Link from "next/link";
import { HowWeWorkHeroMerged } from "@/components/how-we-work/HowWeWorkHeroMerged";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  WorkflowStorySection,
  WorkflowStorySectionMobile,
} from "@/components/workflow/WorkflowStorySection";
import { workflowSteps } from "@/lib/workflow-config";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Our consulting-led approach to handling complexity and creating clarity.",
};

const principles = [
  {
    number: "01",
    title: "Process first, automation second",
    description:
      "Automating a broken process just makes mistakes faster. We fix the workflow before touching the technology.",
  },
  {
    number: "02",
    title: "Execution over advice",
    description:
      "We don't deliver slide decks. We deliver working systems. Real problems need real code, not PDFs.",
  },
  {
    number: "03",
    title: "Clarity compounds over time",
    description:
      "A clear system reduces cognitive load and frees your team to focus on growth rather than constant firefighting.",
  },
];

export default function HowWeWorkPage() {
  const ArrowIcon = Icons.arrowRight;
  const CheckIcon = Icons.check;

  return (
    <main>
      <HowWeWorkHeroMerged />

      <div id="how-we-work-content" className="scroll-mt-8">
        <WorkflowStorySection steps={workflowSteps} />
        <WorkflowStorySectionMobile steps={workflowSteps} />
      </div>

      {/* ── Principles ───────────────────────────────────────────────── */}
      <section
        className="bg-primary relative overflow-hidden py-20 md:py-24"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Core principles
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              What guides every engagement
            </h2>
          </div>

          <div className="mx-auto max-w-5xl grid gap-5 md:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.number}
                className="group rounded-2xl border border-white/8 bg-white/4 p-7 transition-all duration-300 hover:border-accent/30 hover:bg-white/7"
              >
                <div className="mb-4 text-3xl font-black leading-none text-accent/40 transition-colors group-hover:text-accent/70">
                  {p.number}
                </div>
                <h3 className="mb-3 text-lg font-bold text-white leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            {/* Checklist */}
            <div className="mb-10 inline-flex flex-col items-start gap-3 rounded-2xl border border-border bg-background-secondary px-8 py-6 text-left">
              {[
                "No proposals before we understand your problem",
                "No pitch decks — just direct conversation",
                "Clarity on fit before any commitment",
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

            <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
              Ready to work differently?
            </h2>
            <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-accent" />
            <p className="mb-3 text-lg leading-relaxed text-foreground sm:text-xl">
              If you&apos;re navigating complexity and want clarity before action,
              let&apos;s explore how we can help.
            </p>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              We don&apos;t sell services — we start conversations about real
              problems.
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
                href="/work"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-10 py-6 text-base font-semibold"
                )}
              >
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
