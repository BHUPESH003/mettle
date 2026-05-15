"use client";

import Link from "next/link";
import { brand } from "@/lib/brand";
import { Icons } from "@/lib/icons";

const navigateLinks = [
  { label: "Services", href: "/services" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

const connectLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "X", href: "#" },
  { label: "GitHub", href: "#" },
] as const;

function BackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/6 text-white/50 transition-all hover:border-white/30 hover:bg-white/12 hover:text-white"
      aria-label="Back to top"
    >
      <Icons.chevronUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const ArrowIcon = Icons.arrowRight;

  return (
    <footer className="overflow-hidden bg-surface-dark text-white">
      {/* Upper section */}
      <div className="container mx-auto px-6 pt-20 pb-0">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto] md:items-start">
          {/* Left: tagline + CTAs */}
          <div className="max-w-xl">
            <p className="mb-10 text-2xl font-semibold leading-snug text-white/80 sm:text-3xl md:text-4xl">
              {brand.tagline}
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="rounded-full border border-white/15 bg-zinc-800/80 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-zinc-700/80"
              >
                Work with us
              </Link>
              <Link
                href="/contact"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white transition-opacity hover:opacity-85"
                aria-label="Get in touch"
              >
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right: nav columns + back-to-top */}
          <div className="flex items-start gap-14 sm:gap-20">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/30">
                Navigate
              </p>
              <ul className="space-y-3.5">
                {navigateLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/30">
                Connect
              </p>
              <ul className="space-y-3.5">
                {connectLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-1">
              <BackToTop />
            </div>
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="mt-12 overflow-hidden px-4 leading-[0.8]">
        <p
          className="logo-shimmer select-none font-black tracking-[-0.04em]"
          style={{ fontSize: "clamp(4.5rem, 18vw, 20rem)" }}
          aria-hidden
        >
          {brand.name}
        </p>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 px-6 py-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">
          © {currentYear} {brand.name.toUpperCase()}. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
