"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/lib/brand";
import { Icons } from "@/lib/icons";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function HomeNavigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      // Compensate for scrollbar removal so page doesn't shift
      const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarW > 0) document.body.style.paddingRight = `${scrollbarW}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled && !mobileOpen
            ? "border-b border-white/8 bg-black/70 backdrop-blur-lg"
            : "bg-transparent",
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-5 py-4 md:py-5">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="logo-shimmer relative z-60 text-xl font-black tracking-tight transition-opacity hover:opacity-90 md:text-2xl"
          >
            {brand.name}
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-10 md:flex">
            <nav className="flex items-center gap-7">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[11px] font-bold uppercase tracking-[0.14em] transition-colors",
                    isActive(link.href)
                      ? "text-white"
                      : "text-white/60 hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 bg-white/8 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-all hover:border-white/35 hover:bg-white/16"
            >
              Work with us
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="relative z-60 flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.16 }}
                  className="flex"
                >
                  <Icons.close className="h-4 w-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.16 }}
                  className="flex"
                >
                  <Icons.menu className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Full-screen mobile overlay — scales in from top-right corner */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-zinc-950 text-white origin-top-right"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Nav links — large text */}
            <nav className="flex flex-1 flex-col items-start justify-center px-8 pt-24">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.055, duration: 0.28 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block py-3 text-4xl font-black tracking-tight transition-colors sm:text-5xl",
                      isActive(link.href) ? "text-white" : "text-white/60 hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom contact */}
            <motion.div
              className="border-t border-white/10 px-8 py-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32 }}
            >
              <Link
                href="mailto:hello@mettleconsulting.com"
                className="text-sm text-white/40 transition-colors hover:text-white/75"
              >
                hello@mettleconsulting.com
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
