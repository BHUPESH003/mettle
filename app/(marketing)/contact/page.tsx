/**
 * Contact page
 * Start conversations, not capture leads
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { ContactForm } from "@/components/common/ContactForm";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation about your complexity and how we can help bring clarity.",
};

const contactMethods = [
  {
    label: "Email",
    contact: "hello@mettleconsulting.com",
    href: "mailto:hello@mettleconsulting.com",
    description: "Direct and personal",
    icon: Icons.mail,
  },
  {
    label: "Call",
    contact: "(555) 123-4567",
    href: "tel:+15551234567",
    description: "For immediate discussion",
    icon: Icons.phone,
  },
  {
    label: "Schedule",
    contact: "Book a call",
    href: "#",
    description: "30-minute conversation",
    icon: Icons.arrowRight,
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Intro Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Start a conversation
            </h1>
            <p className="mb-4 text-xl font-medium text-foreground sm:text-2xl">
              If you're facing complexity and want clarity, let's talk.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
              We don't start with proposals or sales conversations. We start
              with understanding your situation and exploring whether we can
              help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-background-secondary py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h2 className="mb-3 text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
                Other ways to connect
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                If you'd prefer a different way to start the conversation
              </p>
            </div>

            <div className="mx-auto mb-10 max-w-4xl">
              <div className="grid gap-8 md:grid-cols-3">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div
                      key={index}
                      className="group text-center"
                    >
                      <div className="mb-4 flex justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent-dark opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />
                          <div className="relative rounded-full bg-gradient-to-br from-accent-light to-accent/20 p-4">
                            <IconComponent className="h-6 w-6 text-accent" />
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                        {method.label}
                      </h3>
                      <Link
                        href={method.href}
                        className="mb-2 block text-base font-medium text-foreground transition-colors hover:text-accent"
                      >
                        {method.contact}
                      </Link>
                      <p className="text-sm text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mx-auto max-w-2xl text-center">
              <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                No matter how you reach out, we approach every conversation
                with the same goal: understanding before action.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
