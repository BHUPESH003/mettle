"use client";

import { useState } from "react";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { cn } from "@/lib/utils";

const checklistItems = [
  "We start by understanding — not pitching",
  "Every system is tailored to how your business actually runs",
  "Outcomes over deliverables — always",
] as const;

const stats = [
  { val: "100%", label: "Tailored" },
  { val: "0", label: "Pitching" },
  { val: "∞", label: "Outcomes" },
] as const;

export function InvitationCTASection() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const ArrowIcon = Icons.arrowRight;
  const ChevronRightIcon = Icons.chevronRight;
  const ZapIcon = Icons.zap;
  const CheckCircleIcon = Icons.checkCircle;

  const rowDelays = [
    "home-anim-delay-2",
    "home-anim-delay-3",
    "home-anim-delay-4",
  ] as const;

  return (
    <section className="relative overflow-hidden border-t border-border bg-background-secondary px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div
        className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 select-none font-extrabold leading-none text-border/40 sm:block sm:text-[18rem] lg:text-[22rem]"
        aria-hidden
      >
        02
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
            <div className="relative flex flex-col justify-center gap-3 border-b border-border bg-background-secondary p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <div
                className="absolute left-0 top-0 h-24 w-24 rounded-br-[4rem] border-b border-r border-accent/20 bg-accent-light"
                aria-hidden
              />

              <p className="home-anim-fade-in relative z-10 mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                Our approach
              </p>

              <div className="relative z-10 flex flex-col gap-2">
                {checklistItems.map((item, i) => (
                  <div
                    key={item}
                    className={cn(
                      "home-check-row home-anim-fade-up flex cursor-default items-start gap-4 rounded-xl px-4 py-3.5",
                      rowDelays[i],
                    )}
                    onMouseEnter={() => setHoveredRow(i)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <div className="mt-0.5 shrink-0">
                      <CheckCircleIcon
                        className={cn(
                          "h-5 w-5 transition-colors duration-200",
                          hoveredRow === i ? "text-accent" : "text-accent/60",
                        )}
                        strokeWidth={2}
                        fill={hoveredRow === i ? "hsl(var(--accent-light))" : "transparent"}
                      />
                    </div>
                    <span
                      className={cn(
                        "text-[14.5px] font-medium leading-snug transition-colors duration-200",
                        hoveredRow === i ? "text-foreground" : "text-foreground/80",
                      )}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="home-anim-fade-up home-anim-delay-5 mt-6 flex flex-wrap items-center justify-center gap-8 border-t border-border pt-6 sm:justify-start sm:gap-10">
                {stats.map(({ val, label }) => (
                  <div key={label} className="flex flex-col items-center gap-0.5 sm:items-start">
                    <span className="text-2xl font-bold text-accent">{val}</span>
                    <span className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center gap-8 p-8 sm:p-10 lg:p-14">
              <div className="home-anim-scale-in home-anim-delay-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent shadow-lg shadow-accent/30">
                <ZapIcon className="h-5 w-5 text-accent-foreground" strokeWidth={2} fill="currentColor" />
              </div>

              <div>
                <h2 className="home-anim-fade-up home-anim-delay-2 text-balance text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Let&apos;s fix how your{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10">business</span>
                    <span
                      aria-hidden
                      className="absolute bottom-1 left-0 z-0 h-2 w-full rounded-sm bg-accent/18"
                    />
                  </span>{" "}
                  operates
                </h2>
                <div
                  className="home-anim-slide-bar mt-5 h-[3px] rounded-full bg-accent"
                  aria-hidden
                />
              </div>

              <p className="home-anim-fade-up home-anim-delay-3 max-w-md text-base leading-relaxed text-muted-foreground">
                We&apos;ll map your workflow, surface hidden inefficiencies, and show you exactly where
                systems can make a difference.
              </p>

              <div className="home-anim-fade-up home-anim-delay-4 flex flex-wrap gap-3">
                <Link
                  href={brand.cta.href}
                  className="home-cta-primary group inline-flex items-center gap-2.5 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-md shadow-accent/25"
                >
                  {brand.cta.text}
                  <ArrowIcon className="home-cta-arrow h-4 w-4 shrink-0" strokeWidth={2.5} />
                </Link>
                <Link
                  href="/how-we-work"
                  className="home-cta-outline inline-flex items-center gap-2 rounded-xl border border-border bg-transparent px-6 py-3.5 text-sm font-semibold text-accent"
                >
                  How we work
                  <ChevronRightIcon className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
