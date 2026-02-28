"use client";

/**
 * Contact Form Component
 * Client component for form state management
 */

import { useState, FormEvent } from "react";
import { cn } from "@/lib/utils";

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

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call with 1 second delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real app, you would send the data to your API here
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border-2 border-accent bg-accent-light p-8 text-center">
        <h3 className="mb-2 text-xl font-semibold text-accent-dark">
          Thank you for reaching out
        </h3>
        <p className="text-foreground">
          We'll review your message and get back to you within 24 hours to
          discuss your situation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Name <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={cn(
            "w-full rounded-md border-2 border-border bg-background px-4 py-2.5",
            "text-foreground placeholder-muted-foreground",
            "focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
            "transition-all"
          )}
          placeholder="Your name"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Email <span className="text-destructive">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={cn(
            "w-full rounded-md border-2 border-border bg-background px-4 py-2.5",
            "text-foreground placeholder-muted-foreground",
            "focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
            "transition-all"
          )}
          placeholder="your.email@example.com"
        />
      </div>

      {/* Company Field */}
      <div>
        <label
          htmlFor="company"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Company <span className="text-muted-foreground">(optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={cn(
            "w-full rounded-md border-2 border-border bg-background px-4 py-2.5",
            "text-foreground placeholder-muted-foreground",
            "focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
            "transition-all"
          )}
          placeholder="Your company"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-foreground"
        >
          Tell us about your situation{" "}
          <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={cn(
            "w-full rounded-md border-2 border-border bg-background px-4 py-2.5",
            "text-foreground placeholder-muted-foreground",
            "focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
            "transition-all resize-none"
          )}
          placeholder="What's the complexity you're facing? What have you tried? What clarity are you seeking?"
        />
      </div>

      {/* Privacy Note */}
      <p className="text-xs text-muted-foreground">
        We respect your privacy. This information is only used to understand
        how we might help.
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          "w-full rounded-md px-6 py-3 text-base font-medium text-accent-foreground shadow-sm",
          "bg-accent transition-all hover:bg-accent-dark hover:shadow-md",
          "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
          "disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:hover:bg-muted disabled:hover:shadow-none"
        )}
      >
        {isSubmitting ? "Sending..." : "Start conversation"}
      </button>
    </form>
  );
}
