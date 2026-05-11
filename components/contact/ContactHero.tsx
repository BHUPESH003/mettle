"use client";

import { HomeNavigation } from "@/components/home/HomeNavigation";

interface ContactHeroProps {
  promises: readonly string[];
}

export function ContactHero({ promises }: ContactHeroProps) {
  // Kept for API compatibility with the existing contact page.
  void promises;

  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden bg-[#06080e] text-white">
      <div
        className="pointer-events-none absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#5875d653_1px,#06080e_1px)] bg-size-[20px_20px]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 z-20 bg-[#06080e]/55"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 z-20 bg-linear-to-r from-[#06080e]/82 via-transparent to-[#06080e]/72"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-20 bg-linear-to-r from-[#06080e] from-0% via-[#06080e]/50 via-34% to-transparent to-68%"
        aria-hidden
      />

      {/* Header merged into the hero */}
      <HomeNavigation variant="dark" />

      <div className="relative z-40 flex flex-1 flex-col px-4 pb-10 pt-24 md:px-6 md:pb-12 md:pt-28">
        <div className="container mx-auto flex min-h-0 flex-1 flex-col">
          <div className="flex flex-1 flex-col justify-center">
            <h1 className="max-w-2xl text-left">
              <span className="block text-balance text-5xl font-bold leading-none tracking-tighter sm:text-6xl">
                Start
              </span>
              <span className="block mt-3 text-[clamp(3rem,9vw,7rem)] font-bold leading-[0.95] tracking-[-0.04em] text-[#ffffff]">
                conversation
              </span>
            </h1>
          </div>

          <div className="mt-auto flex w-full justify-end">
            <p className="max-w-md text-right text-base font-medium leading-snug text-white/65 sm:text-lg">
              If you&apos;re facing complexity and want clarity — let&apos;s
              talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
