/**
 * Contact page
 * Start conversations, not capture leads
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { ContactForm } from "@/components/common/ContactForm";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactScrollReveal } from "@/components/contact/ContactScrollReveal";
import { ContactTiltCard } from "@/components/contact/ContactTiltCard";
import { RandomizedTextEffect } from "@/components/ui/text-randomized";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation about your complexity and how we can help bring clarity.",
};

const contactMethods = [
  {
    icon: "mail" as const,
    label: "Email us directly",
    value: "hello@mettleconsulting.com",
    href: "mailto:hello@mettleconsulting.com",
    note: "We respond within 24 hours",
  },
  {
    icon: "calendar" as const,
    label: "Book a call",
    value: "Schedule 30 minutes",
    href: "#",
    note: "No pitch — just a real conversation",
  },
  {
    icon: "linkedin" as const,
    label: "LinkedIn",
    value: "Connect with us",
    href: "#",
    note: "Follow our work and thinking",
  },
];

const whatHappensNext = [
  {
    number: "01",
    title: "We read it",
    description: "A person reads your note — no auto-reply.",
  },
  {
    number: "02",
    title: "We reply",
    description: "Within one business day, usually sooner.",
  },
  {
    number: "03",
    title: "We talk",
    description: "If it’s a fit, we book a short call. No pitch deck.",
  },
];

const promises = [
  "No sales pitch — ever",
  "No generic advice or templates",
  "Honest about whether we can help",
] as const;

export default function ContactPage() {
  const ArrowIcon = Icons.arrowRight;

  return (
    <main>
      <ContactHero promises={promises} />

      <ContactScrollReveal>
        {/* ── Form + sidebar ────────────────────────────────────────────── */}
        <section data-contact-section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
                {/* ── Left sidebar ── */}
                <div className="lg:col-span-2">
                  <div data-contact-reveal className="mb-8 flex items-center gap-3">
                    <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                      Get in touch
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>

                  <h2
                    data-contact-reveal
                    className="font-departure relative z-10 mb-3 min-h-18 text-2xl font-black leading-tight tracking-tight text-foreground sm:min-h-0 sm:text-3xl"
                  >
                    <span className="sr-only">Tell us what you&apos;re working through</span>
                    <span aria-hidden className="block">
                      <RandomizedTextEffect
                        triggerOnView
                        text="Tell us what you're working through"
                        className="text-pretty"
                      />
                    </span>
                  </h2>
                  <div data-contact-reveal className="mb-5 h-0.5 w-8 rounded-full bg-accent" />
                  <p
                    data-contact-reveal
                    className="mb-8 text-sm leading-relaxed text-muted-foreground"
                  >
                    The more context you share about your situation, the better we can assess whether we&apos;re the right fit — and give you a useful first response.
                  </p>

                  <div className="space-y-4">
                    {contactMethods.map((method) => {
                      const Icon = Icons[method.icon];
                      return (
                        <Link
                          key={method.label}
                          data-contact-reveal
                          href={method.href}
                          className="group flex items-start gap-4 rounded-xl border border-border bg-background-secondary p-4 transition-all duration-200 hover:border-accent/40 hover:bg-background hover:shadow-md hover:shadow-accent/5"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/8 transition-colors group-hover:border-accent/40 group-hover:bg-accent/15">
                            <Icon className="h-5 w-5 text-accent" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70">
                              {method.label}
                            </p>
                            <p className="truncate text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
                              {method.value}
                            </p>
                            <p className="text-xs text-muted-foreground">{method.note}</p>
                          </div>
                          <ArrowIcon className="ml-auto h-4 w-4 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-accent" />
                        </Link>
                      );
                    })}
                  </div>

                  <p
                    data-contact-reveal
                    className="mt-8 text-xs leading-relaxed text-muted-foreground/60"
                  >
                    No matter how you reach out, every conversation starts with the same intent: understanding before action.
                  </p>
                </div>

                {/* ── Form ── */}
                <div className="lg:col-span-3">
                  <ContactTiltCard className="p-8 sm:p-10">
                    <div className="mb-8">
                      <h2
                        data-contact-reveal
                        className="font-departure relative z-10 mb-1 min-h-13 text-xl font-black leading-tight text-foreground sm:min-h-0"
                      >
                        <span className="sr-only">Send us a message</span>
                        <span aria-hidden className="block">
                          <RandomizedTextEffect triggerOnView text="Send us a message" />
                        </span>
                      </h2>
                      <p data-contact-reveal className="text-sm text-muted-foreground">
                        Fields marked <span className="font-bold text-accent">*</span> are required.
                      </p>
                    </div>
                    <ContactForm />
                  </ContactTiltCard>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── What happens next ─────────────────────────────────────────── */}
        <section
          data-contact-section
          className="bg-primary relative overflow-hidden py-20 md:py-24"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 h-80 w-80 rounded-full bg-accent/7 blur-[100px]" />

          <div className="container mx-auto px-4">
            <div data-contact-reveal className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-8 max-w-2xl md:mb-10">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  After you reach out
                </p>
                <h2 className="font-departure relative z-10 mx-auto min-h-16 max-w-xl text-3xl font-black leading-tight tracking-tight text-white sm:min-h-0 sm:text-4xl">
                  <span className="sr-only">What happens next</span>
                  <span aria-hidden className="block">
                    <RandomizedTextEffect
                      triggerOnView
                      text="What happens next"
                      className="text-balance"
                    />
                  </span>
                </h2>
              </div>

              <div className="mx-auto grid gap-4 sm:grid-cols-3 sm:gap-5">
                {whatHappensNext.map((step) => (
                  <div
                    key={step.number}
                    className="group rounded-2xl border border-white/8 bg-white/4 p-5 text-center transition-all duration-300 hover:border-accent/30 hover:bg-white/7 sm:p-6"
                  >
                    <span
                      aria-hidden
                      className="mb-3 block text-2xl font-black leading-none text-accent/35 transition-colors group-hover:text-accent/55 sm:text-3xl"
                    >
                      {step.number}
                    </span>
                    <h3 className="mb-2 text-base font-bold text-white">{step.title}</h3>
                    <p className="text-sm leading-snug text-white/55">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ContactScrollReveal>
    </main>
  );
}
