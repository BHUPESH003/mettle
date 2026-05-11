"use client";

import { useState, FormEvent } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/lib/icons";
import { SpotlightField } from "@/components/contact/SpotlightField";
import { RandomizedTextEffect } from "@/components/ui/text-randomized";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const ArrowIcon = Icons.arrowRight;
  const CheckIcon = Icons.checkCircle;

  const labelClass = cn(
    "mb-2 block min-h-4 text-xs font-bold uppercase tracking-wider text-foreground/70",
    "sm:min-h-0",
  );

  const inputClass = cn(
    "relative w-full rounded-xl border border-border bg-background-secondary px-4 py-3.5",
    "text-sm text-foreground placeholder:text-muted-foreground/60",
    "transition-all duration-300",
    "group-hover:border-accent/28 group-hover:bg-background/85",
    "focus:border-accent focus:bg-background focus:outline-none focus:ring-2 focus:ring-accent/20",
  );

  if (submitted) {
    return (
      <div
        data-contact-reveal
        className="flex flex-col items-center gap-4 rounded-2xl border border-accent/30 bg-accent/5 px-8 py-12 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
          <CheckIcon className="h-7 w-7 text-accent" />
        </div>
        <h3 className="text-xl font-black text-foreground">Message received</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          We&apos;ll review your message and get back to you within 24 hours to discuss your situation — no pitch, just a real conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div data-contact-reveal>
          <label htmlFor="name" className={labelClass}>
            <span className="sr-only">Name, required</span>
            <span aria-hidden className="inline-flex flex-wrap items-baseline gap-0.5">
              <RandomizedTextEffect
                triggerOnView
                speed={1.35}
                text="Name"
                className="font-departure text-foreground/70"
              />
              <span className="text-accent">*</span>
            </span>
          </label>
          <SpotlightField>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
              placeholder="Your name"
            />
          </SpotlightField>
        </div>
        <div data-contact-reveal>
          <label htmlFor="email" className={labelClass}>
            <span className="sr-only">Email, required</span>
            <span aria-hidden className="inline-flex flex-wrap items-baseline gap-0.5">
              <RandomizedTextEffect
                triggerOnView
                speed={1.35}
                text="Email"
                className="font-departure text-foreground/70"
              />
              <span className="text-accent">*</span>
            </span>
          </label>
          <SpotlightField>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={inputClass}
              placeholder="you@company.com"
            />
          </SpotlightField>
        </div>
      </div>

      <div data-contact-reveal>
        <label htmlFor="company" className={labelClass}>
          <span className="sr-only">Company, optional</span>
          <span
            aria-hidden
            className="inline-flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5"
          >
            <RandomizedTextEffect
              triggerOnView
              speed={1.35}
              text="Company"
              className="font-departure text-foreground/70"
            />
            <RandomizedTextEffect
              triggerOnView
              speed={1.2}
              text="(optional)"
              className="font-departure normal-case font-normal tracking-normal text-muted-foreground"
            />
          </span>
        </label>
        <SpotlightField>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={inputClass}
            placeholder="Your company or project"
          />
        </SpotlightField>
      </div>

      <div data-contact-reveal>
        <label htmlFor="message" className={cn(labelClass, "min-h-8 sm:min-h-0")}>
          <span className="sr-only">Tell us about your situation, required</span>
          <span aria-hidden className="inline-flex flex-wrap items-baseline gap-0.5">
            <RandomizedTextEffect
              triggerOnView
              speed={1.15}
              text="Tell us about your situation"
              className="font-departure max-w-[min(100%,24rem)] text-foreground/70"
            />
            <span className="text-accent">*</span>
          </span>
        </label>
        <SpotlightField>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={cn(inputClass, "resize-none")}
            placeholder="What's the complexity you're facing? What have you tried? What clarity are you looking for?"
          />
        </SpotlightField>
      </div>

      <p data-contact-reveal className="text-xs leading-relaxed text-muted-foreground">
        We respect your privacy. This is only used to understand how we might help — never shared or sold.
      </p>

      <div data-contact-reveal>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "contact-send-btn group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-6 py-4",
            "bg-accent text-sm font-bold text-accent-foreground shadow-lg shadow-accent/25",
            "transition-all duration-300 hover:bg-accent-dark",
            "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
            "disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:shadow-none",
          )}
        >
          <span className="contact-send-shine pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          {isSubmitting ? (
            <span className="relative">Sending…</span>
          ) : (
            <>
              <span className="relative">Send message</span>
              <ArrowIcon className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>

      <style jsx>{`
        .contact-send-shine {
          background: linear-gradient(
            105deg,
            transparent 40%,
            hsl(var(--accent-foreground) / 0.18) 50%,
            transparent 60%
          );
        }
        .contact-send-btn:not(:disabled):hover .contact-send-shine {
          animation: contact-shine-sweep 0.85s ease-out forwards;
        }
        @keyframes contact-shine-sweep {
          0% {
            transform: translateX(-120%);
          }
          100% {
            transform: translateX(120%);
          }
        }
        .contact-send-btn:not(:disabled):hover {
          transform: scale(1.02);
          box-shadow:
            0 22px 48px hsl(var(--accent) / 0.32),
            0 12px 28px rgba(0, 0, 0, 0.12);
        }
        @media (prefers-reduced-motion: reduce) {
          .contact-send-btn:not(:disabled):hover {
            transform: none;
          }
          .contact-send-btn:not(:disabled):hover .contact-send-shine {
            animation: none;
          }
        }
      `}</style>
    </form>
  );
}
