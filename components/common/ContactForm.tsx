"use client";

import { useState, FormEvent } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/lib/icons";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  const inputClass = cn(
    "w-full rounded-xl border border-border bg-background-secondary px-4 py-3.5",
    "text-sm text-foreground placeholder:text-muted-foreground/60",
    "transition-all duration-200",
    "focus:border-accent focus:bg-background focus:outline-none focus:ring-2 focus:ring-accent/20"
  );

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-accent/30 bg-accent/5 px-8 py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10">
          <CheckIcon className="h-7 w-7 text-accent" />
        </div>
        <h3 className="text-xl font-black text-foreground">
          Message received
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          We&apos;ll review your message and get back to you within 24 hours to
          discuss your situation — no pitch, just a real conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name + Email row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-foreground/70"
          >
            Name <span className="text-accent">*</span>
          </label>
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
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-bold uppercase tracking-wider text-foreground/70"
          >
            Email <span className="text-accent">*</span>
          </label>
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
        </div>
      </div>

      {/* Company */}
      <div>
        <label
          htmlFor="company"
          className="mb-2 block text-xs font-bold uppercase tracking-wider text-foreground/70"
        >
          Company{" "}
          <span className="normal-case font-normal tracking-normal text-muted-foreground">
            (optional)
          </span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={inputClass}
          placeholder="Your company or project"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-xs font-bold uppercase tracking-wider text-foreground/70"
        >
          Tell us about your situation <span className="text-accent">*</span>
        </label>
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
      </div>

      {/* Privacy note */}
      <p className="text-xs leading-relaxed text-muted-foreground">
        We respect your privacy. This is only used to understand how we might
        help — never shared or sold.
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "group flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4",
          "bg-accent text-sm font-bold text-accent-foreground shadow-lg shadow-accent/25",
          "transition-all duration-200 hover:bg-accent-dark hover:shadow-accent/40",
          "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:shadow-none"
        )}
      >
        {isSubmitting ? (
          "Sending…"
        ) : (
          <>
            Send message
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  );
}
