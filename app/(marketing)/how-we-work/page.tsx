import type { Metadata } from "next";
import { HowWeWorkHeroMerged } from "@/components/how-we-work/HowWeWorkHeroMerged";
import { PageCTASection } from "@/components/common/PageCTASection";
import {
  WorkflowStorySection,
  WorkflowStorySectionMobile,
} from "@/components/workflow/WorkflowStorySection";
import { WorkProjectList } from "@/components/work/WorkProjectList";
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
  return (
    <main>
      <HowWeWorkHeroMerged />

      <div id="how-we-work-content" className="scroll-mt-8 bg-white">
        <WorkflowStorySection steps={workflowSteps} />
        <WorkflowStorySectionMobile steps={workflowSteps} />
      </div>

      <WorkProjectList />

      {/* ── Principles ───────────────────────────────────────────────── */}
      <section className="relative isolate w-full overflow-hidden border-y border-border bg-white py-20 text-foreground md:py-24">

        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Core principles
            </p>
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              What guides every engagement
            </h2>
          </div>

          <div className="mx-auto max-w-5xl grid gap-5 md:grid-cols-3">
            {principles.map((p) => (
              <div
                key={p.number}
                className="group rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:border-accent/40 hover:bg-accent-light"
              >
                <div className="mb-4 text-3xl font-black leading-none text-accent/50 transition-colors group-hover:text-accent">
                  {p.number}
                </div>
                <h3 className="mb-3 text-lg font-bold leading-snug text-foreground">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTASection
        headline="Ready to work"
        headlineAccent="differently?"
        description="If you're navigating complexity and want clarity before action, let's explore how we can help. We don't sell services — we start conversations about real problems."
        primary={{ href: "/contact", label: "Start a conversation" }}
        secondary={{ href: "/work", label: "See our work" }}
      />

    </main>
  );
}
