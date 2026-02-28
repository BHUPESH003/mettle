/**
 * Hero Section Component
 * Main hero section for the homepage with badge, heading, CTAs, and trust indicators
 */

import Link from "next/link";
import { brand } from "@/lib/brand";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const trustItems = [
  "SaaS Companies",
  "Marketplaces",
  "Product Teams",
  "Startups",
] as const;

export function HeroSection() {
  const ArrowIcon = Icons.arrowRight;

  return (
    <section className="relative py-12 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center rounded-full bg-accent-light px-4 py-1.5 text-sm font-medium text-accent-dark border border-accent/20">
            Consulting & Strategy
          </div>

          {/* Main Heading */}
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl">
            {brand.name}
          </h1>

          {/* Tagline */}
          <p className="mb-4 text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl">
            {brand.tagline}
          </p>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {brand.shortDescription}
          </p>

          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "group inline-flex items-center gap-2 px-8 py-6 text-base"
              )}
            >
              Start a conversation
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/how-we-work"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "px-8 py-6 text-base"
              )}
            >
              How we work
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-border pt-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Trusted by founders at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {trustItems.map((item, index) => (
                <span
                  key={index}
                  className="text-base font-medium text-foreground sm:text-lg"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
