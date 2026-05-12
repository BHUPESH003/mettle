"use client";

import Image from "next/image";
import Link from "next/link";
import { HomeNavigation } from "@/components/home/HomeNavigation";
import { HeroPhotoShadeLayers } from "@/components/marketing/HeroPhotoShadeLayers";
import { Icons } from "@/lib/icons";

export function HowWeWorkHeroMerged() {
  const ChevronDown = Icons.chevronDown;

  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden bg-[#06080e] text-white">
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#5875d653_1px,#06080e_1px)] bg-size-[20px_20px]"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 z-5" aria-hidden>
        <Image
          src="/images/howwework1.png"
          alt=""
          fill
          className="object-cover object-center brightness-[1.05] contrast-[1.02]"
          sizes="100vw"
          priority
        />
      </div>

      <HeroPhotoShadeLayers variant="photo" />

      <HomeNavigation variant="dark" />

      <div className="relative z-40 flex flex-1 flex-col px-4 pb-10 pt-24 md:px-6 md:pb-12 md:pt-28">
        <div className="container mx-auto flex min-h-0 flex-1 flex-col">
          <div className="relative flex flex-1 flex-col justify-center py-8 md:py-12">
            <h1 className="text-balance text-5xl font-bold leading-[100%] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="bg-linear-to-b from-[#edeffd] to-[#06152e] bg-clip-text text-transparent">
                How
              </span>
            </h1>
            <p className="mt-2 text-[clamp(2.75rem,11vw,8.5rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[#ffffff] sm:mt-3">
              We Work
            </p>
          </div>

          <div className="relative mt-auto flex shrink-0 flex-wrap items-end justify-between gap-8 border-t border-neutral-800 pt-8">
            <Link
              href="#how-we-work-content"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#06080e] transition-opacity hover:opacity-90"
              aria-label="Scroll to content"
            >
              <ChevronDown className="h-5 w-5" strokeWidth={2.5} />
            </Link>
            <p className="max-w-md text-right text-base font-medium leading-snug text-white/65 sm:text-lg">
              Complexity is not a failure — it&apos;s a signal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
