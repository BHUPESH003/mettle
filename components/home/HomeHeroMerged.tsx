"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { brand } from "@/lib/brand";
import { Icons } from "@/lib/icons";
import { HomeNavigation } from "@/components/home/HomeNavigation";

/** Hero background playlist — files in `public/video/` */
const HERO_VIDEOS = [
  "/video/herosectionvideo1.mp4",
  "/video/herosectionvideo2.mp4",
] as const;

export function HomeHeroMerged() {
  const ArrowIcon = Icons.arrowRight;
  const ChevronDown = Icons.chevronDown;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.src = HERO_VIDEOS[videoIndex];
    el.load();
    void el.play().catch(() => {});
  }, [videoIndex]);

  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-center"
          muted
          playsInline
          preload="auto"
          aria-hidden
          onEnded={() => setVideoIndex((i) => (i + 1) % HERO_VIDEOS.length)}
        />
      </div>
      <div
        className="absolute inset-0 bg-linear-to-b from-black/72 via-black/48 to-black/82"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(59,130,246,0.12),transparent_55%)]" />
      {/* Handoff into Problem section (#000510) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-40 bg-linear-to-t from-[#000510] via-[#000510]/75 to-transparent md:h-48"
        aria-hidden
      />

      <HomeNavigation />

      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 pb-16 pt-28 md:px-6 md:pb-24 md:pt-32">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8 inline-flex items-center rounded-full border border-white/18 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-md sm:text-sm"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            AI-first engineering partner
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance"
          >
            <span className="block text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              {brand.name}
            </span>
            <span className="mx-auto mt-5 block max-w-3xl text-3xl font-semibold leading-snug tracking-tight text-white/95 sm:text-4xl md:text-5xl">
              {brand.tagline}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex min-h-14 min-w-[200px] items-center justify-center rounded-lg border-0 bg-white px-8 text-sm font-bold uppercase tracking-widest text-zinc-950 shadow-lg shadow-black/25 transition-colors hover:bg-white/92 sm:min-h-16"
            >
              Start a conversation
            </Link>
            <Link
              href="/how-we-work"
              className="inline-flex min-h-14 min-w-[200px] items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/6 px-8 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/10 sm:min-h-16"
            >
              How we work
              <ArrowIcon className="h-4 w-4 shrink-0" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/35">
        <span className="text-[10px] uppercase tracking-[0.22em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
