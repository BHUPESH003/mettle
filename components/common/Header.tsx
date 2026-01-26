"use client";

/**
 * Header component with scroll detection, active navigation tracking,
 * mobile menu, and progress bar
 */

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/lib/brand";
import { navigation } from "@/lib/navigation";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Calculate scroll progress (0-100%)
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 
        ? (scrollY / scrollableHeight) * 100 
        : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const MenuIcon = Icons.menu;
  const CloseIcon = Icons.close;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
            : "bg-background"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 text-xl font-semibold hover:opacity-80 transition-opacity"
            >
              <span>{brand.name}</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.primary.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors relative",
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Link
                href={brand.cta.href}
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "hidden md:inline-flex"
                )}
              >
                {brand.cta.text}
              </Link>

              {/* Mobile Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button
                    className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
                    aria-label="Open menu"
                  >
                    <MenuIcon className="h-6 w-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-6 mt-8">
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">
                        Navigation
                      </div>
                      {navigation.primary.map((item) => {
                        const active = isActive(item.href);
                        return (
                          <SheetClose key={item.href} asChild>
                            <Link
                              href={item.href}
                              className={cn(
                                "flex items-center px-3 py-2 text-base font-medium rounded-md transition-colors",
                                active
                                  ? "bg-accent text-foreground"
                                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
                              )}
                            >
                              {item.label}
                            </Link>
                          </SheetClose>
                        );
                      })}
                    </div>
                    <div className="pt-4 border-t border-border">
                      <Link
                        href={brand.cta.href}
                        className={cn(buttonVariants({ size: "lg" }), "w-full")}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {brand.cta.text}
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-border">
            <div
              className="h-full bg-foreground transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        )}
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 md:h-20" />
    </>
  );
}
