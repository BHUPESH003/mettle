"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from "@/lib/icons";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

const cardStyles = [
  {
    cardBg: "bg-[#c9dcc4]",
    cardHover: "hover:bg-[#bcd3b6]",
    cardActive: "ring-2 ring-zinc-800/30 scale-[1.02]",
    text: "text-zinc-900",
    muted: "text-zinc-700/60",
    num: "text-zinc-900/25",
    icon: "text-zinc-700",
    divider: "bg-zinc-900/12",
    panelBg: "bg-[#f0f5ee]",
    tagBg: "bg-zinc-900/8 border-zinc-900/12 text-zinc-800",
    challengeDot: "bg-zinc-700",
    outcomeCard: "bg-white/60 border-zinc-900/8",
    processStep: "bg-white/70 border-zinc-900/8 text-zinc-800",
    processNum: "text-zinc-700/40",
  },
  {
    cardBg: "bg-[#192820]",
    cardHover: "hover:bg-[#1e3028]",
    cardActive: "ring-2 ring-white/20 scale-[1.02]",
    text: "text-white",
    muted: "text-white/50",
    num: "text-white/20",
    icon: "text-white/70",
    divider: "bg-white/12",
    panelBg: "bg-[#101a14]",
    tagBg: "bg-white/8 border-white/12 text-white/80",
    challengeDot: "bg-accent",
    outcomeCard: "bg-white/5 border-white/8",
    processStep: "bg-white/6 border-white/10 text-white/80",
    processNum: "text-white/25",
  },
  {
    cardBg: "bg-[#eaece8]",
    cardHover: "hover:bg-[#e0e3de]",
    cardActive: "ring-2 ring-zinc-800/20 scale-[1.02]",
    text: "text-zinc-900",
    muted: "text-zinc-600/60",
    num: "text-zinc-900/20",
    icon: "text-zinc-600",
    divider: "bg-zinc-900/10",
    panelBg: "bg-[#f5f6f3]",
    tagBg: "bg-zinc-900/6 border-zinc-900/10 text-zinc-700",
    challengeDot: "bg-zinc-600",
    outcomeCard: "bg-white/80 border-zinc-900/8",
    processStep: "bg-white/80 border-zinc-900/8 text-zinc-700",
    processNum: "text-zinc-600/35",
  },
] as const;

export function ServicesAccordion() {
  const [active, setActive] = useState<string>(services[0]?.slug ?? "");
  const detailRef = useRef<HTMLDivElement>(null);

  const activeIndex = services.findIndex((s) => s.slug === active);
  const activeService = services[activeIndex];
  const style = cardStyles[activeIndex] ?? cardStyles[0];

  const handleSelect = (slug: string) => {
    setActive(slug);
    // On mobile, scroll the detail panel into view after animation starts
    if (window.innerWidth < 640) {
      setTimeout(() => {
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  };

  return (
    <div>
      {/* ── Selector cards ─────────────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {services.map((service, i) => {
          const s = cardStyles[i] ?? cardStyles[0];
          const Icon = Icons[service.icon];
          const isActive = service.slug === active;
          return (
            <button
              key={service.slug}
              type="button"
              onClick={() => handleSelect(service.slug)}
              id={service.slug}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl p-6 text-left transition-all duration-300",
                s.cardBg,
                !isActive && s.cardHover,
                isActive && s.cardActive,
                "min-h-52",
              )}
            >
              {/* Icon + number */}
              <div className="flex items-start justify-between">
                <div className={s.icon}>
                  <Icon className="h-9 w-9" strokeWidth={1.2} />
                </div>
                <span className={cn("text-sm font-semibold tracking-wide", s.num)}>
                  {service.number}.
                </span>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Title + short desc */}
              <div>
                <div className={cn("mb-3 h-px w-8", s.divider)} />
                <h3 className={cn("text-lg font-black leading-snug", s.text)}>
                  {service.title}
                </h3>
                <p className={cn("mt-1.5 text-xs leading-relaxed", s.muted)}>
                  {service.shortDescription}
                </p>
              </div>

              {/* Active indicator dot — always in DOM, CSS opacity only (no layoutId) */}
              <div
                className={cn(
                  "absolute bottom-4 right-4 h-2 w-2 rounded-full bg-current transition-opacity duration-200",
                  isActive ? "opacity-40" : "opacity-0",
                )}
              />
            </button>
          );
        })}
      </div>

      {/* ── Detail panel ───────────────────────────────────────────── */}
      <div ref={detailRef} className="scroll-mt-24">
      <AnimatePresence mode="wait">
        {activeService && (
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className={cn("mt-3 overflow-hidden rounded-2xl", style.panelBg)}
          >
            <div className="grid gap-0 lg:grid-cols-[1fr_400px]">
              {/* Left: content */}
              <div className="p-8 md:p-10">
                {/* Label + title */}
                <div className="mb-8">
                  <span
                    className={cn(
                      "mb-3 inline-block rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]",
                      style.tagBg,
                    )}
                  >
                    {activeService.tabLabel}
                  </span>
                  <h3 className={cn("text-3xl font-black tracking-tight md:text-4xl", style.text)}>
                    {activeService.title}
                  </h3>
                  <p className={cn("mt-3 text-base leading-relaxed", style.muted)}>
                    {activeService.description}
                  </p>
                </div>

                {/* Approach */}
                <div className={cn("mb-8 rounded-xl border p-5", style.outcomeCard)}>
                  <p
                    className={cn(
                      "mb-2 text-[10px] font-bold uppercase tracking-[0.2em]",
                      style.muted,
                    )}
                  >
                    Our approach
                  </p>
                  <p className={cn("text-sm leading-relaxed", style.text)}>
                    {activeService.approach}
                  </p>
                </div>

                {/* Includes tags */}
                <div className="mb-8">
                  <p
                    className={cn(
                      "mb-3 text-[10px] font-bold uppercase tracking-[0.2em]",
                      style.muted,
                    )}
                  >
                    What's included
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeService.includes.map((item) => (
                      <span
                        key={item}
                        className={cn(
                          "rounded-full border px-3 py-1 text-xs font-semibold",
                          style.tagBg,
                        )}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div className="mb-8">
                  <p
                    className={cn(
                      "mb-3 text-[10px] font-bold uppercase tracking-[0.2em]",
                      style.muted,
                    )}
                  >
                    Challenges we solve
                  </p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {activeService.challenges.map((c) => (
                      <li
                        key={c}
                        className={cn("flex items-start gap-2.5 text-sm", style.text)}
                      >
                        <span
                          className={cn(
                            "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                            style.challengeDot,
                          )}
                        />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process steps */}
                <div className="mb-8">
                  <p
                    className={cn(
                      "mb-3 text-[10px] font-bold uppercase tracking-[0.2em]",
                      style.muted,
                    )}
                  >
                    How we do it
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeService.process.map((step, i) => {
                      const SIcon = Icons[step.icon];
                      return (
                        <div
                          key={step.title}
                          className={cn(
                            "flex items-center gap-2.5 rounded-full border px-4 py-2",
                            style.processStep,
                          )}
                        >
                          <span className={cn("text-xs font-black", style.processNum)}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <SIcon className={cn("h-3.5 w-3.5", style.muted)} />
                          <span className="text-sm font-semibold">{step.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3">
                  <Link
                    href="/contact"
                    className={cn(
                      "rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] transition-opacity hover:opacity-80",
                      activeIndex === 1
                        ? "bg-white text-zinc-950"
                        : "bg-zinc-900 text-white",
                    )}
                  >
                    Discuss this service
                  </Link>
                  <Link
                    href="/contact"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-opacity hover:opacity-85"
                    aria-label="Get in touch"
                  >
                    <Icons.arrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Right: image + outcomes */}
              <div className="flex flex-col gap-3 p-4 pt-0 lg:py-4 lg:pl-0 lg:pr-4">
                {/* Image */}
                <div className="relative h-56 overflow-hidden rounded-xl lg:h-64">
                  <Image
                    src={activeService.heroImage.src}
                    alt={activeService.heroImage.alt}
                    fill
                    sizes="400px"
                    className="object-cover"
                  />
                  <div
                    className={cn(
                      "absolute inset-0",
                      activeIndex === 1 ? "bg-black/25" : "bg-black/10",
                    )}
                  />
                </div>

                {/* Outcomes */}
                <div className="flex flex-col gap-2">
                  {activeService.outcomes.map((outcome) => {
                    const OIcon = Icons[outcome.icon];
                    return (
                      <div
                        key={outcome.title}
                        className={cn(
                          "flex items-start gap-3 rounded-xl border p-4",
                          style.outcomeCard,
                        )}
                      >
                        <div
                          className={cn(
                            "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border",
                            style.outcomeCard,
                          )}
                        >
                          <OIcon className={cn("h-4 w-4 text-accent")} />
                        </div>
                        <div className="min-w-0">
                          <h4 className={cn("text-sm font-bold", style.text)}>
                            {outcome.title}
                          </h4>
                          <p className={cn("text-xs leading-relaxed", style.muted)}>
                            {outcome.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </div>
  );
}
