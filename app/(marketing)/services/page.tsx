/**
 * Services page
 * Deep view of the three service categories
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three ways we help businesses run better — System Design & Setup, Custom Software & Tools, and Automation & AI.",
};

interface Service {
  number: string;
  icon: keyof typeof Icons;
  title: string;
  description: string;
  includes: string[];
  challenges: string[];
  approach: string;
}

const services: Service[] = [
  {
    number: "01",
    icon: "compass",
    title: "System Design & Setup",
    description:
      "We understand your business and redesign how it should operate before building anything.",
    includes: [
      "Workflow design",
      "Process mapping",
      "Business logic structuring",
      "Operational audits",
    ],
    challenges: [
      "Manual workarounds that haven't been reviewed in years",
      "Workflows that collapse as headcount or volume grows",
      "Bottlenecks that only one person knows how to fix",
      "Failed automation attempts on top of broken processes",
    ],
    approach:
      "We map how your business actually runs, strip away the friction, and design a repeatable workflow built for scale — before a single line of code is written.",
  },
  {
    number: "02",
    icon: "code",
    title: "Custom Software & Tools",
    description:
      "We build systems tailored to your exact business needs — not the other way around.",
    includes: [
      "CRMs",
      "Admin panels",
      "Internal dashboards",
      "Custom tools",
    ],
    challenges: [
      "Fragmented tools and disconnected spreadsheets",
      "Outgrowing off-the-shelf CRMs and generic SaaS platforms",
      "No centralised visibility into orders, inventory, or pipeline",
      "Data silos preventing cross-team alignment",
    ],
    approach:
      "We build custom CRMs, admin panels, and operational dashboards that match your exact business rules — production-grade and built to evolve alongside your business.",
  },
  {
    number: "03",
    icon: "zap",
    title: "Automation & AI",
    description:
      "We automate repetitive tasks and communication so your team can focus on what matters.",
    includes: [
      "AI chatbots",
      "Voice bots",
      "Automated follow-ups",
      "Data pipelines",
    ],
    challenges: [
      "Support teams overwhelmed by routine inquiries",
      "Manual lead coordination slowing sales velocity",
      "Repetitive cross-platform data entry and synchronisation",
      "No real-time responsiveness to customer inquiries",
    ],
    approach:
      "We deploy intelligent agents and rule-based pipelines that handle support, sales coordination, and operations autonomously — so your team focuses on high-leverage work.",
  },
];

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
  const ArrowIcon = Icons.arrowRight;
  const CheckIcon = Icons.check;

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[65vh] flex flex-col justify-center overflow-hidden py-20"
        style={{ background: "hsl(var(--primary))" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div className="absolute top-1/4 right-[15%] w-96 h-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-[10%] w-72 h-72 rounded-full bg-accent/7 blur-[90px] pointer-events-none" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/6 px-4 py-2 text-sm font-semibold text-white/70 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-accent inline-block" />
              Our services
            </div>

            <h1 className="mb-5 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-none">
              What we actually do
            </h1>

            <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-accent" />

            <p className="mb-3 text-xl font-semibold text-white/90 sm:text-2xl">
              Three ways we help you run a better business.
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50">
              We don&apos;t sell features. We solve problems — through process
              redesign, custom tools, and automation, applied where they
              actually move the needle.
            </p>

            <div className="mx-auto mt-14 max-w-2xl">
              <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                {services.map((service, i) => {
                  const Icon = Icons[service.icon];
                  return (
                    <div
                      key={service.number}
                      className={cn(
                        "flex flex-col items-center gap-2 px-3 py-4 text-center",
                        i === 0 ? "bg-accent/20" : "bg-white/4"
                      )}
                    >
                      <Icon className="h-5 w-5 text-accent/80" />
                      <span className="text-xs font-semibold text-white/60 leading-tight">
                        {service.title.split(" ")[0]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service category sections ────────────────────────────────── */}
      {services.map((service, idx) => {
        const Icon = Icons[service.icon];
        const isAlt = idx % 2 === 1;
        return (
          <section
            key={service.number}
            className={cn(
              "py-20 md:py-28",
              isAlt ? "bg-background-secondary" : "bg-background"
            )}
          >
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-6xl">
                <div className="mb-12 flex items-center gap-4">
                  <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                    Service {service.number}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <div className="mb-12 grid items-start gap-12 md:grid-cols-2 lg:gap-20">
                  {/* Left — heading + description + includes */}
                  <div>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/8">
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
                    <div
                      aria-hidden
                      className="mb-2 select-none text-7xl font-black leading-none text-border/25 sm:text-8xl"
                    >
                      {service.number}
                    </div>
                    <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                      {service.title}
                    </h2>
                    <div className="mb-5 h-1 w-12 rounded-full bg-accent" />
                    <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground/60">
                      Includes
                    </p>
                    <ul className="grid grid-cols-2 gap-2.5">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5"
                        >
                          <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15">
                            <CheckIcon className="h-2.5 w-2.5 text-accent" />
                          </div>
                          <span className="text-sm font-medium text-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right — challenges + approach */}
                  <div className="flex flex-col gap-6">
                    <div className="rounded-2xl border border-border bg-background p-7">
                      <p className="mb-4 text-xs font-bold uppercase tracking-wider text-accent">
                        Common challenges we solve
                      </p>
                      <ul className="flex flex-col gap-3">
                        {service.challenges.map((c) => (
                          <li
                            key={c}
                            className="flex items-start gap-3"
                          >
                            <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span className="text-sm leading-relaxed text-foreground">
                              {c}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border-l-4 border-accent bg-accent/5 px-7 py-6">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-accent">
                        Our approach
                      </p>
                      <p className="text-base leading-relaxed text-foreground">
                        {service.approach}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Principles ───────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 md:py-24"
        style={{ background: "hsl(var(--primary))" }}
      >
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
            <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-accent" />
            <p className="mb-3 text-lg leading-relaxed text-foreground">
              Most engagements use more than one. We&apos;ll help you figure
              out where to start.
            </p>
            <p className="mb-10 text-base leading-relaxed text-muted-foreground">
              Every conversation begins with understanding your workflow — not
              pitching a service.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group inline-flex items-center gap-2 px-10 py-6 text-base font-semibold shadow-lg shadow-accent/25"
                )}
              >
                Book a call
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
