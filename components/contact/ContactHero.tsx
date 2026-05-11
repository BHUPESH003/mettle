"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icons } from "@/lib/icons";
import { RandomizedTextEffect } from "@/components/ui/text-randomized";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TITLE = "Start a conversation";

interface ContactHeroProps {
  promises: readonly string[];
}

export function ContactHero({ promises }: ContactHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const heroLayerRef = useRef<HTMLDivElement>(null);
  const gridBaseRef = useRef<HTMLDivElement>(null);
  const gridHighlightRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const CheckIcon = Icons.check;

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const glow = cursorGlowRef.current;
      const gridHi = gridHighlightRef.current;
      const gridBase = gridBaseRef.current;
      if (!glow || !gridHi || !gridBase) return;

      if (prefersReducedMotion) {
        return () => {};
      }

      const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
      if (coarsePointer) {
        gsap.set(glow, { opacity: 0 });
      }

      const setGlowX = gsap.quickTo(glow, "x", { duration: 0.45, ease: "power3.out" });
      const setGlowY = gsap.quickTo(glow, "y", { duration: 0.45, ease: "power3.out" });

      const onMove = (e: MouseEvent) => {
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (!coarsePointer) {
          setGlowX(x - 140);
          setGlowY(y - 140);
        }
        const px = (x / rect.width) * 100;
        const py = (y / rect.height) * 100;
        section.style.setProperty("--gx", `${px}%`);
        section.style.setProperty("--gy", `${py}%`);
      };

      section.addEventListener("mousemove", onMove);

      const pill = pillRef.current;
      const maxMag = 10;
      const onPillMove = (e: MouseEvent) => {
        if (!pill) return;
        const r = pill.getBoundingClientRect();
        const cx = e.clientX - (r.left + r.width / 2);
        const cy = e.clientY - (r.top + r.height / 2);
        const mx = Math.max(-maxMag, Math.min(maxMag, cx * 0.08));
        const my = Math.max(-maxMag, Math.min(maxMag, cy * 0.08));
        gsap.to(pill, { x: mx, y: my, duration: 0.35, ease: "power3.out" });
      };
      const onPillLeave = () => {
        if (!pill) return;
        gsap.to(pill, {
          x: 0,
          y: 0,
          duration: 0.65,
          ease: "elastic.out(1, 0.45)",
        });
      };
      pill?.addEventListener("mousemove", onPillMove);
      pill?.addEventListener("mouseleave", onPillLeave);

      const heroLayer = heroLayerRef.current;
      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 0.45,
        onUpdate: (self) => {
          const p = self.progress;
          if (heroLayer) {
            gsap.set(heroLayer, {
              scale: 1 - p * 0.04,
              opacity: 1 - p * 0.14,
              y: -p * 32,
            });
          }
          gsap.set(gridHi, { opacity: 0.045 - p * 0.02 });
          gsap.set(gridBase, { opacity: 0.038 - p * 0.015 });
        },
      });

      return () => {
        section.removeEventListener("mousemove", onMove);
        pill?.removeEventListener("mousemove", onPillMove);
        pill?.removeEventListener("mouseleave", onPillLeave);
        st.kill();
      };
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] },
  );

  return (
    <section
      ref={sectionRef}
      className="contact-hero-surface relative flex min-h-[55vh] flex-col justify-center overflow-hidden py-20"
      style={{ background: "hsl(var(--primary))" }}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          ref={gridBaseRef}
          className="absolute inset-0"
          style={{
            opacity: 0.038,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
        <div
          ref={gridHighlightRef}
          className="absolute inset-0"
          style={{
            opacity: 0.045,
            backgroundImage:
              "linear-gradient(rgba(147,171,214,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(147,171,214,0.42) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "radial-gradient(circle 140px at var(--gx, 50%) var(--gy, 50%), black 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(circle 140px at var(--gx, 50%) var(--gy, 50%), black 0%, transparent 72%)",
          }}
        />
        <div
          ref={cursorGlowRef}
          className="pointer-events-none absolute left-0 top-0 h-[280px] w-[280px] rounded-full opacity-[0.14]"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--accent) / 0.35) 0%, transparent 68%)",
            willChange: "transform",
          }}
        />
      </div>

      <div className="pointer-events-none absolute top-1/4 right-[15%] z-1 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-[10%] z-1 h-72 w-72 rounded-full bg-accent/7 blur-[90px]" />

      <div ref={heroLayerRef} className="container relative z-10 mx-auto px-4 will-change-transform">
        <div className="mx-auto max-w-4xl text-center">
          <span
            ref={pillRef}
            className={cn(
              "group mb-6 inline-flex items-center rounded-full border border-white/18 bg-white/6 px-4 py-2 text-sm font-semibold text-white/72 backdrop-blur-sm transition-[border-color,box-shadow] duration-300",
              "hover:border-accent/35 hover:shadow-[0_0_24px_hsl(var(--accent)/0.18)]",
            )}
          >
            <span className="contact-hero-pulse-dot mr-2 inline-block h-2 w-2 rounded-full bg-accent" />
            Let&apos;s talk
          </span>

          <div className="relative z-10 py-6 md:rounded-md md:py-8">
            <h1 className="font-departure relative z-10 mx-auto min-h-22 max-w-4xl text-center text-4xl leading-tight text-white sm:min-h-0 md:text-6xl lg:text-7xl">
              <span className="sr-only">{TITLE}</span>
              <span aria-hidden className="block">
                <RandomizedTextEffect text={TITLE} className="text-balance" />
              </span>
            </h1>
          </div>

          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-accent" />

          <p className="mb-3 text-xl font-semibold text-white/90 sm:text-2xl">
            If you&apos;re facing complexity and want clarity — let&apos;s talk.
          </p>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/50">
            We don&apos;t start with proposals or sales conversations. We start with understanding your situation and exploring whether we can help.
          </p>

          <div className="mx-auto mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
            {promises.map((promise) => (
              <div key={promise} className="flex items-center gap-2 text-sm font-semibold text-white/60">
                <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/20">
                  <CheckIcon className="h-2.5 w-2.5 text-accent" />
                </div>
                {promise}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-hero-surface {
          --gx: 50%;
          --gy: 42%;
        }
        .contact-hero-pulse-dot {
          animation: contact-dot-pulse 2.4s ease-in-out infinite;
        }
        @keyframes contact-dot-pulse {
          0%,
          100% {
            opacity: 0.65;
            box-shadow: 0 0 0 0 hsl(var(--accent) / 0.35);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 12px 1px hsl(var(--accent) / 0.45);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .contact-hero-pulse-dot {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
