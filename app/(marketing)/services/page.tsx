import type { Metadata } from "next";
import Link from "next/link";
import { ServicesHeroMerged } from "@/components/services/ServicesHeroMerged";
import { PageCTASection } from "@/components/common/PageCTASection";
import { ServicesAccordion } from "@/components/services/ServicesAccordion";
import { Icons } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three ways we help businesses run better — System Design & Setup, Custom Software & Tools, and Automation & AI.",
};

const principles = [
  {
    number: "01",
    title: "Process before tooling",
    description:
      "We don't pick a service and apply it. We diagnose the problem first, then bring the right service to it.",
  },
  {
    number: "02",
    title: "Built around your business, not ours",
    description:
      "Every system we build is shaped by how your team actually operates — not a generic template forced onto your workflow.",
  },
  {
    number: "03",
    title: "Outcomes over deliverables",
    description:
      "We don't measure success in features shipped. We measure it in time saved, errors eliminated, and clarity gained.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeroMerged />

      {/* ── Services accordion ─────────────────────────────────────── */}
      <section id="services-content" className="scroll-mt-8 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-14 max-w-3xl">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
              What we do
            </p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Our services
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Open any service below to see the full breakdown — approach,
              challenges we solve, and what you get.
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <ServicesAccordion />
          </div>
        </div>
      </section>


      <PageCTASection
        headline="Not sure which"
        headlineAccent="one fits?"
        description="Most engagements use more than one. We'll help you figure out where to start — every conversation begins with understanding your workflow."
        primary={{ href: "/contact", label: "Book a call" }}
        secondary={{ href: "/how-we-work", label: "How we work" }}
      />

    </main>
  );
}
