/**
 * Contact page
 * Start conversations, not capture leads
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { ContactForm } from "@/components/common/ContactForm";

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
    title: "We read carefully",
    description:
      "We read your message in full before responding. No auto-replies, no templates.",
  },
  {
    number: "02",
    title: "We ask the right questions",
    description:
      "If we need more context, we'll ask a few specific questions to understand the situation properly.",
  },
  {
    number: "03",
    title: "We have a real conversation",
    description:
      "If it seems like a fit, we'll schedule a call. No proposal. No pitch. Just honest dialogue.",
  },
];

const promises = [
  "No sales pitch — ever",
  "No generic advice or templates",
  "Honest about whether we can help",
];

export default function ContactPage() {
  const ArrowIcon = Icons.arrowRight;
  const CheckIcon = Icons.check;

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[55vh] flex flex-col justify-center overflow-hidden py-20"
        style={{ background: "hsl(var(--primary))" }}
      >
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        {/* Blue blobs */}
        <div className="absolute top-1/4 right-[15%] w-96 h-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-[10%] w-72 h-72 rounded-full bg-accent/7 blur-[90px] pointer-events-none" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Tag */}
            <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/6 px-4 py-2 text-sm font-semibold text-white/70 backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-accent inline-block" />
              Let&apos;s talk
            </div>

            <h1 className="mb-5 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-none">
              Start a conversation
            </h1>

            <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-accent" />

            <p className="mb-3 text-xl font-semibold text-white/90 sm:text-2xl">
              If you&apos;re facing complexity and want clarity — let&apos;s talk.
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50">
              We don&apos;t start with proposals or sales conversations. We start
              with understanding your situation and exploring whether we can
              help.
            </p>

            {/* Promises strip */}
            <div className="mx-auto mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
              {promises.map((promise) => (
                <div
                  key={promise}
                  className="flex items-center gap-2 text-sm font-semibold text-white/60"
                >
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <CheckIcon className="h-2.5 w-2.5 text-accent" />
                  </div>
                  {promise}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Form + sidebar ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">

              {/* ── Left sidebar ── */}
              <div className="lg:col-span-2">
                {/* Section label */}
                <div className="mb-8 flex items-center gap-3">
                  <span className="shrink-0 rounded-full border border-accent/30 bg-accent/8 px-3 py-1 text-xs font-black uppercase tracking-widest text-accent">
                    Get in touch
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>

                <h2 className="mb-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                  Tell us what you&apos;re working through
                </h2>
                <div className="mb-5 h-0.5 w-8 rounded-full bg-accent" />
                <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                  The more context you share about your situation, the better
                  we can assess whether we&apos;re the right fit — and give you
                  a useful first response.
                </p>

                {/* Contact methods */}
                <div className="space-y-4">
                  {contactMethods.map((method) => {
                    const Icon = Icons[method.icon];
                    return (
                      <Link
                        key={method.label}
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
                          <p className="text-xs text-muted-foreground">
                            {method.note}
                          </p>
                        </div>
                        <ArrowIcon className="ml-auto h-4 w-4 shrink-0 text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-accent" />
                      </Link>
                    );
                  })}
                </div>

                {/* Separator note */}
                <p className="mt-8 text-xs leading-relaxed text-muted-foreground/60">
                  No matter how you reach out, every conversation starts with
                  the same intent: understanding before action.
                </p>
              </div>

              {/* ── Form ── */}
              <div className="lg:col-span-3">
                <div className="rounded-2xl border border-border bg-background p-8 shadow-sm sm:p-10">
                  <div className="mb-8">
                    <h2 className="mb-1 text-xl font-black text-foreground">
                      Send us a message
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Fields marked <span className="text-accent font-bold">*</span> are required.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── What happens next ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-20 md:py-24"
        style={{ background: "hsl(var(--primary))" }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/7 blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              After you reach out
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
              What happens next
            </h2>
          </div>

          <div className="mx-auto max-w-4xl grid gap-5 md:grid-cols-3">
            {whatHappensNext.map((step) => (
              <div
                key={step.number}
                className="group rounded-2xl border border-white/8 bg-white/4 p-7 transition-all duration-300 hover:border-accent/30 hover:bg-white/7"
              >
                <span
                  aria-hidden
                  className="mb-4 block text-4xl font-black leading-none text-accent/30 transition-colors group-hover:text-accent/50"
                >
                  {step.number}
                </span>
                <h3 className="mb-3 text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
