import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServicesHeroMerged } from "@/components/services/ServicesHeroMerged";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { services } from "@/lib/services";

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
  const ArrowIcon = Icons.arrowRight;
  const CheckIcon = Icons.check;
  const ExternalIcon = Icons.arrowUpRight;

  return (
    <main>
      <ServicesHeroMerged />

      <section id="services-content" className="scroll-mt-8 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Choose a service
            </p>
            <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">
              Start with the closest fit
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Each tab is intentionally short here. Open a service to see the
              deeper breakdown, challenges, approach, and outcomes.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = Icons[service.icon];
              return (
                <Link
                  href={`/services/${service.slug}`}
                  key={service.slug}
                  className="group relative flex min-h-107.5 flex-col overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/8"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={service.heroImage.src}
                      alt={service.heroImage.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-black/35 backdrop-blur">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="absolute bottom-5 right-5 text-5xl font-black leading-none text-white/25">
                      {service.number}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent">
                      {service.tabLabel}
                    </p>
                    <h3 className="mb-3 text-2xl font-black leading-tight text-foreground transition-colors group-hover:text-accent">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                      {service.shortDescription}
                    </p>

                    <ul className="mb-6 grid gap-2">
                      {service.includes.slice(0, 2).map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/12">
                            <CheckIcon className="h-3 w-3 text-accent" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-accent">
                      View details
                      <ExternalIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Principles ───────────────────────────────────────────────── */}
      <section
        className="bg-primary relative overflow-hidden py-20 md:py-24"
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
