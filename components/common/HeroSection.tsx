"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { brand } from "@/lib/brand";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const stats = [
  { value: "6+", label: "Companies served" },
  { value: "70h", label: "Saved per week" },
  { value: "4", label: "Industries" },
  { value: "0", label: "Strategy PDFs" },
] as const;

export function HeroSection() {
  const ArrowIcon = Icons.arrowRight;
  const ChevronDown = Icons.chevronDown;
  const sectionRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorAuraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cursor = cursorRef.current;
    const aura = cursorAuraRef.current;
    if (!section || !cursor || !aura) return;
    const sectionEl = section;

    const state = {
      targetX: window.innerWidth / 2,
      targetY: window.innerHeight / 2,
      currentX: window.innerWidth / 2,
      currentY: window.innerHeight / 2,
      speed: 0,
      hoverInteractive: false,
      initialized: false,
    };

    const body = document.body;
    body.classList.add("futuristic-cursor-active");

    const setCursorX = gsap.quickTo(cursor, "x", { duration: 0.16, ease: "power3.out" });
    const setCursorY = gsap.quickTo(cursor, "y", { duration: 0.16, ease: "power3.out" });
    const setAuraX = gsap.quickTo(aura, "x", { duration: 0.35, ease: "power3.out" });
    const setAuraY = gsap.quickTo(aura, "y", { duration: 0.35, ease: "power3.out" });

    const updateInteractiveTargets = () => {
      const targets = Array.from(document.querySelectorAll<HTMLElement>("a, button, [data-cursor='interactive']"));
      targets.forEach((target) => {
        target.addEventListener("mouseenter", handleInteractiveEnter);
        target.addEventListener("mouseleave", handleInteractiveLeave);
      });
      return targets;
    };

    const handleInteractiveEnter = () => {
      state.hoverInteractive = true;
    };

    const handleInteractiveLeave = () => {
      state.hoverInteractive = false;
    };

    let interactiveTargets = updateInteractiveTargets();

    const magneticTargets = Array.from(
      sectionEl.querySelectorAll<HTMLElement>("[data-magnet='true']"),
    );

    const onMagnetMove = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      const bounds = target.getBoundingClientRect();
      const relX = event.clientX - bounds.left - bounds.width / 2;
      const relY = event.clientY - bounds.top - bounds.height / 2;
      gsap.to(target, {
        x: relX * 0.14,
        y: relY * 0.14,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const onMagnetLeave = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      gsap.to(target, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
    };

    magneticTargets.forEach((target) => {
      target.addEventListener("mousemove", onMagnetMove);
      target.addEventListener("mouseleave", onMagnetLeave);
    });

    const onMove = (event: MouseEvent) => {
      state.targetX = event.clientX;
      state.targetY = event.clientY;

      const rect = sectionEl.getBoundingClientRect();
      const heroX = ((event.clientX - rect.left) / rect.width) * 100;
      const heroY = ((event.clientY - rect.top) / rect.height) * 100;
      sectionEl.style.setProperty("--mx", `${heroX}%`);
      sectionEl.style.setProperty("--my", `${heroY}%`);

      if (!state.initialized) {
        gsap.set([cursor, aura], { opacity: 1 });
        state.initialized = true;
      }
    };

    const onLeaveWindow = () => {
      gsap.to([cursor, aura], { opacity: 0, duration: 0.2 });
    };

    const onEnterWindow = () => {
      if (state.initialized) {
        gsap.to([cursor, aura], { opacity: 1, duration: 0.25 });
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeaveWindow);
    window.addEventListener("mouseenter", onEnterWindow);

    gsap.ticker.add(tick);

    function tick() {
      const dx = state.targetX - state.currentX;
      const dy = state.targetY - state.currentY;
      state.currentX += dx * 0.14;
      state.currentY += dy * 0.14;

      const instantSpeed = Math.sqrt(dx * dx + dy * dy);
      state.speed += (instantSpeed - state.speed) * 0.16;
      const clampedSpeed = Math.min(48, state.speed);

      sectionEl.style.setProperty("--speed", clampedSpeed.toFixed(2));
      sectionEl.style.setProperty("--speed-px", `${(clampedSpeed * 1.8).toFixed(2)}px`);
      sectionEl.style.setProperty("--spin", `${(clampedSpeed * 1.6).toFixed(2)}deg`);
      sectionEl.style.setProperty("--blur", `${(0.2 + clampedSpeed * 0.025).toFixed(2)}px`);
      sectionEl.style.setProperty("--vx", (dx * 0.08).toFixed(2));
      sectionEl.style.setProperty("--vy", (dy * 0.08).toFixed(2));

      const coreScale = state.hoverInteractive ? 1.7 : 1;
      const auraScale = state.hoverInteractive ? 1.25 : 1;
      const stretchX = 1 + Math.min(clampedSpeed * 0.012, 0.42);
      const stretchY = 1 - Math.min(clampedSpeed * 0.008, 0.22);

      setCursorX(state.currentX);
      setCursorY(state.currentY);
      setAuraX(state.currentX);
      setAuraY(state.currentY);

      gsap.set(cursor, {
        scaleX: coreScale * stretchX,
        scaleY: coreScale * stretchY,
        rotate: Math.atan2(dy, dx) * (180 / Math.PI),
      });
      gsap.set(aura, {
        scale: auraScale + clampedSpeed * 0.01,
      });
    }

    return () => {
      body.classList.remove("futuristic-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeaveWindow);
      window.removeEventListener("mouseenter", onEnterWindow);
      gsap.ticker.remove(tick);

      interactiveTargets.forEach((target) => {
        target.removeEventListener("mouseenter", handleInteractiveEnter);
        target.removeEventListener("mouseleave", handleInteractiveLeave);
      });
      interactiveTargets = [];

      magneticTargets.forEach((target) => {
        target.removeEventListener("mousemove", onMagnetMove);
        target.removeEventListener("mouseleave", onMagnetLeave);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-surface bg-primary relative flex min-h-[96vh] flex-col justify-center overflow-hidden py-20"
    >
      <div ref={cursorAuraRef} className="hero-cursor-aura pointer-events-none fixed left-0 top-0 z-[80] opacity-0" />
      <div ref={cursorRef} className="hero-cursor-core pointer-events-none fixed left-0 top-0 z-[90] opacity-0" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-grid absolute inset-0 opacity-30" />
        <div className="hero-vignette absolute inset-0" />
        <div className="hero-glass-bloom hero-glass-bloom-one absolute -left-[12%] top-[8%] h-[34rem] w-[34rem] rounded-full" />
        <div className="hero-glass-bloom hero-glass-bloom-two absolute right-[-10%] top-[38%] h-[30rem] w-[30rem] rounded-full" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/62 backdrop-blur-xl sm:text-sm"
          >
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-white/80" />
            AI-First Engineering Partner
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mb-6 max-w-[1200px]"
          >
            <h1 className="hero-wordmark muted-wordmark select-none font-black uppercase leading-[0.86] tracking-[-0.035em] text-[4.8rem] sm:text-[7rem] md:text-[10rem] lg:text-[13rem]">
              {brand.name}
            </h1>
            <h1
              aria-hidden
              className="hero-wordmark liquid-wordmark pointer-events-none absolute inset-0 select-none font-black uppercase leading-[0.86] tracking-[-0.035em] text-[4.8rem] sm:text-[7rem] md:text-[10rem] lg:text-[13rem]"
            >
              {brand.name}
            </h1>
            <h1
              aria-hidden
              className="hero-wordmark stroke-wordmark pointer-events-none absolute inset-0 select-none font-black uppercase leading-[0.86] tracking-[-0.035em] text-[4.8rem] sm:text-[7rem] md:text-[10rem] lg:text-[13rem]"
            >
              {brand.name}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mb-3 max-w-3xl text-balance text-xl font-semibold text-white/86 sm:text-3xl"
          >
            {brand.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.32 }}
            className="mx-auto mb-10 max-w-2xl text-balance text-base leading-relaxed text-white/48 sm:text-lg"
          >
            {brand.shortDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38 }}
            className="mb-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              data-magnet="true"
              data-cursor="interactive"
              className={cn(
                buttonVariants({ size: "lg" }),
                "group glass-button inline-flex items-center gap-2 px-10 py-6 text-base font-semibold transition-all duration-300",
              )}
            >
              Start a conversation
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/how-we-work"
              data-magnet="true"
              data-cursor="interactive"
              className="glass-button inline-flex items-center gap-2 rounded-xl border border-white/25 px-10 py-4 text-base font-bold text-white/85 transition-all duration-300"
            >
              How we work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.44 }}
            className="mx-auto max-w-2xl"
          >
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/[0.035] px-4 py-5 text-center"
                >
                  <span className="block text-2xl font-black text-white/90">{stat.value}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-white/30">
        <span className="text-[11px] uppercase tracking-[0.22em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>

    </section>
  );
}
