"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/lib/brand";
import { Icons } from "@/lib/icons";
import { motion, AnimatePresence } from "framer-motion";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/about", label: "About" },
] as const;

export function HomeNavigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useBodyScrollLock(mobileOpen);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-300 md:px-6",
          scrolled && !mobileOpen && "pt-3",
        )}
      >
        <div
          className={cn(
            "container mx-auto flex items-center justify-between gap-4",
            scrolled && !mobileOpen
              ? "rounded-pill border border-white/10 bg-black/75 px-4 py-2.5 shadow-lg shadow-black/20 backdrop-blur-xl md:px-5"
              : "px-1 py-1",
          )}
        >
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="logo-shimmer relative z-60 text-lg font-black tracking-tight transition-opacity hover:opacity-90 md:text-xl"
          >
            {brand.name}
          </Link>

          {/* Desktop — pill nav island */}
          <div className="hidden items-center md:flex">
            <nav className="flex items-center rounded-pill border border-white/12 bg-white/6 p-1 backdrop-blur-md">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-pill px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-200",
                    isActive(link.href)
                      ? "bg-white/12 text-white"
                      : "text-white/55 hover:bg-white/8 hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mettle-btn ml-1 bg-white px-5 py-2 text-[10px] text-zinc-950 shadow-none hover:bg-white/92 hover:shadow-md"
              >
                Work with us
              </Link>
            </nav>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="relative z-60 flex items-center gap-2 rounded-pill border border-white/15 bg-white/8 px-4 py-2 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm md:hidden"
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

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-surface-dark text-white origin-top-right"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
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
                      isActive(link.href)
                        ? "text-white"
                        : "text-white/60 hover:text-white",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.28 }}
                className="mt-6"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mettle-btn mettle-btn-primary px-8 py-3.5 text-xs"
                >
                  Work with us
                </Link>
              </motion.div>
            </nav>

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
