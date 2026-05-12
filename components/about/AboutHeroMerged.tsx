"use client";

import Link from "next/link";
import Earth from "@/components/ui/globe";
import { HomeNavigation } from "@/components/home/HomeNavigation";
import { HeroPhotoShadeLayers } from "@/components/marketing/HeroPhotoShadeLayers";
import { Icons } from "@/lib/icons";

export function AboutHeroMerged() {
  const ChevronDown = Icons.chevronDown;

  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden bg-[#06080e] text-white">
      {/* GlobeDemo: full-bleed radial dot field */}
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#5875d653_1px,#06080e_1px)] bg-size-[20px_20px]"
        aria-hidden
      />

      {/* Globe — centered behind typography */}
      <div
        className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center pb-8 opacity-80 md:items-center md:justify-center md:pb-0 md:opacity-92"
        aria-hidden
      >
        <div className="relative w-[min(92vw,520px)] max-w-none filter-[drop-shadow(0_0_48px_rgba(59,130,246,0.42))_drop-shadow(0_0_120px_rgba(59,130,246,0.22))] md:w-[min(90vw,640px)]">
          <Earth className="mx-auto w-full max-w-none" />
        </div>
      </div>

      {/* Same scrims as Services / Contact / Work photo heroes */}
      <HeroPhotoShadeLayers variant="globe" />

      <HomeNavigation variant="dark" />

      <div className="relative z-40 flex flex-1 flex-col px-4 pb-10 pt-24 md:px-6 md:pb-12 md:pt-28">
        <div className="container mx-auto flex min-h-0 flex-1 flex-col">
          <div className="relative flex flex-1 flex-col justify-center py-8 md:py-12">
            <h1 className="text-balance text-5xl font-semibold leading-[100%] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="bg-linear-to-b from-[#edeffd] to-[#06152e] bg-clip-text text-transparent">
                About
              </span>
            </h1>
            <p
              className="mt-2 text-[clamp(3.25rem,14vw,10rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[#ffffff] sm:mt-3"
              aria-hidden
            >
              Mettle
            </p>
          </div>

          <div className="relative mt-auto flex shrink-0 flex-wrap items-end justify-between gap-8 border-t border-neutral-800 pt-8">
            <Link
              href="#about-content"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#06080e] transition-opacity hover:opacity-90"
              aria-label="Scroll to content"
            >
              <ChevronDown className="h-5 w-5" strokeWidth={2.5} />
            </Link>
            <p className="max-w-md text-right text-base font-medium leading-snug text-white/65 sm:text-lg">
              An AI-first execution firm built by engineers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
