import type { Metadata } from "next";
import Link from "next/link";
import { ServicesHeroMerged } from "@/components/services/ServicesHeroMerged";
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

          <div className="mx-auto max-w-5xl">
            <ServicesAccordion />
          </div>
        </div>
      </section>

      {/* ── Principles ─────────────────────────────────────────────── */}
      <section className="bg-primary relative overflow-hidden py-20 md:py-24">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              How we apply them
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              Principles behind every engagement
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
                <p className="text-sm leading-relaxed text-white/55">
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
            <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">
              Not sure which one fits?
            </h2>
            <div className="mx-auto mb-8 h-1 w-12 rounded-full bg-accent" />
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              Most engagements use more than one. We&apos;ll help you figure out
              where to start — every conversation begins with understanding your
              workflow.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-foreground px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-background transition-colors hover:bg-foreground/90"
              >
                Book a call
              </Link>
              <Link
                href="/contact"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white transition-opacity hover:opacity-85"
                aria-label="Get in touch"
              >
                <Icons.arrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
