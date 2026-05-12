"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/lib/brand";
import { services } from "@/lib/services";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type NavVariant = "dark" | "light";

const companyNavItems = [{ href: "/about", title: "About" }] as const;

export function HomeNavigation({ variant = "dark" }: { variant?: NavVariant }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLight = variant === "light";
  const howWeWorkRouteActive = pathname === "/how-we-work";
  const servicesRouteActive =
    pathname === "/services" || pathname.startsWith("/services/");

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const MenuIcon = Icons.menu;

  const desktopNavLinkClass = (active: boolean) =>
    cn(
      "flex items-center rounded-lg px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors",
      isLight
        ? active
          ? "bg-muted text-foreground"
          : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
        : "text-white/75 hover:bg-white/8 hover:text-white",
    );

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 pb-3 pt-5 md:pt-6">
        <Link
          href="/"
          className={cn(
            "text-xl font-black tracking-tight transition-opacity hover:opacity-90 md:text-2xl lg:text-3xl",
            isLight ? "text-foreground" : "text-white",
          )}
        >
          {brand.name}
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <nav
            className={cn(
              "flex items-center rounded-xl px-1 py-1 backdrop-blur-xl",
              isLight
                ? "border border-border/70 bg-background/80 shadow-sm"
                : "border border-white/12 bg-black/45 shadow-lg shadow-black/20",
            )}
          >
            <Link href="/services" className={desktopNavLinkClass(servicesRouteActive)}>
              Services
            </Link>
            <Link href="/how-we-work" className={desktopNavLinkClass(howWeWorkRouteActive)}>
              Work
            </Link>
            {companyNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={desktopNavLinkClass(pathname === item.href)}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <Link
            href={brand.cta.href}
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-lg border-0 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] shadow-none",
              isLight
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-white text-zinc-950 hover:bg-white/92",
            )}
          >
            {brand.cta.text}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={brand.cta.href}
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-lg px-3 py-2 text-[10px] font-bold uppercase tracking-wide",
              isLight
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-white text-zinc-950",
            )}
          >
            {brand.cta.text}
          </Link>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className={cn(
                  "rounded-lg border p-2.5 backdrop-blur-sm",
                  isLight
                    ? "border-border bg-background/90 text-foreground"
                    : "border-white/15 bg-white/10 text-white",
                )}
                aria-label="Open menu"
              >
                <MenuIcon className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className={cn(
                "w-[min(100vw-1rem,22rem)]",
                isLight
                  ? "border-l border-border bg-background text-foreground"
                  : "border-l border-white/10 bg-zinc-950 text-white",
              )}
            >
              <div className="mt-10 flex flex-col gap-8">
                <div>
                  <SheetClose asChild>
                    <Link
                      href="/services"
                      className={cn(
                        "mb-3 inline-block text-xs font-bold uppercase tracking-widest transition-colors",
                        isLight
                          ? "text-muted-foreground hover:text-foreground"
                          : "text-white/45 hover:text-white/80",
                      )}
                    >
                      Services
                    </Link>
                  </SheetClose>
                  <div className="flex flex-col gap-1">
                    {services.map((s) => (
                      <SheetClose key={s.slug} asChild>
                        <Link
                          href={`/services/${s.slug}`}
                          className={cn(
                            "rounded-lg px-2 py-2 text-sm",
                            isLight
                              ? "text-foreground hover:bg-muted"
                              : "text-white/85 hover:bg-white/8",
                          )}
                        >
                          {s.title}
                        </Link>
                      </SheetClose>
                    ))}
                    <SheetClose asChild>
                      <Link
                        href="/services"
                        className={cn(
                          "rounded-lg px-2 py-2 text-sm text-accent",
                          isLight ? "hover:bg-muted" : "hover:bg-white/8",
                        )}
                      >
                        View all →
                      </Link>
                    </SheetClose>
                  </div>
                </div>
                <div>
                  <SheetClose asChild>
                    <Link
                      href="/how-we-work"
                      className={cn(
                        "inline-block rounded-lg px-2 py-2 text-sm transition-colors",
                        isLight
                          ? "text-foreground hover:bg-muted"
                          : "text-white/85 hover:bg-white/8",
                      )}
                    >
                      Work
                    </Link>
                  </SheetClose>
                </div>
                <div className="flex flex-col gap-1">
                  {companyNavItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "inline-block rounded-lg px-2 py-2 text-sm transition-colors",
                          isLight
                            ? "text-foreground hover:bg-muted"
                            : "text-white/85 hover:bg-white/8",
                        )}
                      >
                        {item.title}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
