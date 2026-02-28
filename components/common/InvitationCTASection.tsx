/**
 * Invitation CTA Section Component
 * Final call-to-action inviting visitors to start a conversation
 */

import Link from "next/link";
import { cn } from "@/lib/utils";

export function InvitationCTASection() {
  return (
    <section className="bg-accent-light py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Section Header */}
          <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl">
            If you're navigating complexity
          </h2>

          {/* Main Description */}
          <p className="mb-3 text-lg leading-relaxed text-foreground sm:text-xl">
            And want clarity before committing to solutions, let's talk.
          </p>

          {/* Supporting Text */}
          <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We don't start with proposals or pitches. We start with understanding
            your situation.
          </p>

          {/* Call-to-Action Button */}
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center justify-center rounded-md",
              "bg-accent px-8 py-3 text-base font-medium text-accent-foreground shadow-sm",
              "transition-all hover:bg-accent-dark hover:shadow-md",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            )}
          >
            Discuss your problem
          </Link>
        </div>
      </div>
    </section>
  );
}
