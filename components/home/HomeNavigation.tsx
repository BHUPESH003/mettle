"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/lib/brand";
import { services } from "@/lib/services";
import { caseStudies } from "@/lib/case-studies";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type MegaKey = "services" | "work" | "company" | null;
type NavVariant = "dark" | "light";

const companyLinks = [
  {
    href: "/about",
    title: "About",
    description: "How we think about work, systems, and growth.",
    icon: "users" as const,
  },
  {
    href: "/how-we-work",
    title: "How we work",
    description: "Our process from complexity to clarity.",
    icon: "workflow" as const,
  },
  {
    href: "/contact",
    title: "Contact",
    description: "Start a conversation — no pitch, just understanding.",
    icon: "mail" as const,
  },
];

const workPreview = caseStudies.slice(0, 3);

function MegaPanel({
  children,
  className,
  variant = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: NavVariant;
}) {
  return (
    <div
      className={cn(
        variant === "light"
          ? "rounded-xl border border-border bg-background/95 p-2 shadow-xl backdrop-blur-xl"
          : "rounded-xl border border-white/12 bg-zinc-950/75 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

function DropdownRow({
  href,
  icon: IconName,
  title,
  description,
  onNavigate,
  variant = "dark",
}: {
  href: string;
  icon: keyof typeof Icons;
  title: string;
  description: string;
  onNavigate?: () => void;
  variant?: NavVariant;
}) {
  const Icon = Icons[IconName];
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "group flex gap-3 rounded-lg p-3 transition-colors",
        variant === "light" ? "hover:bg-muted" : "hover:bg-white/6",
      )}
    >
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors",
          variant === "light"
            ? "border border-border bg-muted/40 text-foreground group-hover:border-border group-hover:bg-muted"
            : "border border-white/10 bg-white/7 text-white group-hover:border-white/20 group-hover:bg-white/10",
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 text-left">
        <p
          className={cn(
            "text-sm font-semibold tracking-tight",
            variant === "light" ? "text-foreground" : "text-white",
          )}
        >
          {title}
        </p>
        <p
          className={cn(
            "mt-0.5 line-clamp-2 text-xs leading-relaxed",
            variant === "light" ? "text-muted-foreground" : "text-white/55",
          )}
        >
          {description}
        </p>
      </div>
    </Link>
  );
}

export function HomeNavigation({ variant = "dark" }: { variant?: NavVariant }) {
  const pathname = usePathname();
  const [open, setOpen] = useState<MegaKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isLight = variant === "light";
  const companyRouteActive =
    pathname === "/about" || pathname === "/how-we-work" || pathname === "/contact";
  const servicesRouteActive =
    pathname === "/services" || pathname.startsWith("/services/");
  const workRouteActive = pathname === "/work" || pathname.startsWith("/work/");

  const clearClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearClose();
    closeTimer.current = setTimeout(() => setOpen(null), 140);
  }, [clearClose]);

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    return () => clearClose();
  }, [clearClose]);

  const triggers: { key: Exclude<MegaKey, null>; label: string }[] = [
    { key: "services", label: "Services" },
    { key: "work", label: "Work" },
    { key: "company", label: "Company" },
  ];

  const MenuIcon = Icons.menu;

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
            onMouseLeave={scheduleClose}
          >
            {triggers.map(({ key, label }) => {
              const isOpen = open === key;
              const companyPill = isLight && key === "company" && companyRouteActive && !isOpen;
              const servicesPill = isLight && key === "services" && servicesRouteActive && !isOpen;
              const workPill = isLight && key === "work" && workRouteActive && !isOpen;
              const triggerClass = cn(
                "flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors",
                isLight
                  ? isOpen
                    ? "bg-foreground/10 text-foreground"
                    : companyPill || servicesPill || workPill
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  : isOpen
                    ? "bg-white/12 text-white"
                    : "text-white/75 hover:bg-white/8 hover:text-white",
              );
              return (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => {
                    clearClose();
                    setOpen(key);
                  }}
                >
                  {key === "services" ? (
                    <Link
                      href="/services"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={triggerClass}
                    >
                      {label}
                      <Icons.chevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          isLight ? "text-foreground/45" : "text-white/50",
                          isOpen && "rotate-180",
                        )}
                      />
                    </Link>
                  ) : key === "work" ? (
                    <Link
                      href="/work"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={triggerClass}
                    >
                      {label}
                      <Icons.chevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          isLight ? "text-foreground/45" : "text-white/50",
                          isOpen && "rotate-180",
                        )}
                      />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={triggerClass}
                    >
                      {label}
                      <Icons.chevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200",
                          isLight ? "text-foreground/45" : "text-white/50",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>
                  )}

                  {isOpen && (
                    <div
                      className="absolute left-0 top-full z-50 pt-2"
                      onMouseEnter={clearClose}
                    >
                      {key === "services" && (
                        <MegaPanel variant={variant} className="w-[min(100vw-2rem,22rem)] sm:w-[24rem]">
                          <div className="flex flex-col gap-0.5 py-1">
                            <DropdownRow
                              href="/services"
                              icon="layers"
                              title="All services"
                              description="Compare offerings and how we engage."
                              variant={variant}
                            />
                            {services.map((s) => (
                              <DropdownRow
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                icon={s.icon}
                                title={s.title}
                                description={s.shortDescription}
                                variant={variant}
                              />
                            ))}
                          </div>
                        </MegaPanel>
                      )}
                      {key === "work" && (
                        <MegaPanel variant={variant} className="w-[min(100vw-2rem,22rem)] sm:w-[24rem]">
                          <div className="flex flex-col gap-0.5 py-1">
                            <DropdownRow
                              href="/work"
                              icon="briefcase"
                              title="All work"
                              description="Selected projects and case studies."
                              variant={variant}
                            />
                            {workPreview.map((c) => (
                              <DropdownRow
                                key={c.slug}
                                href={`/work/${c.slug}`}
                                icon={c.icon}
                                title={c.title}
                                description={c.context}
                                variant={variant}
                              />
                            ))}
                          </div>
                        </MegaPanel>
                      )}
                      {key === "company" && (
                        <MegaPanel variant={variant} className="w-[min(100vw-2rem,20rem)]">
                          <div className="flex flex-col gap-0.5 py-1">
                            {companyLinks.map((l) => (
                              <DropdownRow
                                key={l.href}
                                href={l.href}
                                icon={l.icon}
                                title={l.title}
                                description={l.description}
                                variant={variant}
                              />
                            ))}
                          </div>
                        </MegaPanel>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
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
                      href="/work"
                      className={cn(
                        "mb-3 inline-block text-xs font-bold uppercase tracking-widest transition-colors",
                        isLight
                          ? "text-muted-foreground hover:text-foreground"
                          : "text-white/45 hover:text-white/80",
                      )}
                    >
                      Work
                    </Link>
                  </SheetClose>
                  <div className="flex flex-col gap-1">
                    {workPreview.map((c) => (
                      <SheetClose key={c.slug} asChild>
                        <Link
                          href={`/work/${c.slug}`}
                          className={cn(
                            "rounded-lg px-2 py-2 text-sm",
                            isLight
                              ? "text-foreground hover:bg-muted"
                              : "text-white/85 hover:bg-white/8",
                          )}
                        >
                          {c.title}
                        </Link>
                      </SheetClose>
                    ))}
                    <SheetClose asChild>
                      <Link
                        href="/work"
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
                  <p
                    className={cn(
                      "mb-3 text-xs font-bold uppercase tracking-widest",
                      isLight ? "text-muted-foreground" : "text-white/45",
                    )}
                  >
                    Company
                  </p>
                  <div className="flex flex-col gap-1">
                    {companyLinks.map((l) => (
                      <SheetClose key={l.href} asChild>
                        <Link
                          href={l.href}
                          className={cn(
                            "rounded-lg px-2 py-2 text-sm",
                            isLight
                              ? "text-foreground hover:bg-muted"
                              : "text-white/85 hover:bg-white/8",
                          )}
                        >
                          {l.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
