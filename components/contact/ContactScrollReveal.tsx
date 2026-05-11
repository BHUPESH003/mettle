"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ContactScrollReveal({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root || prefersReducedMotion) return () => {};

      const tweens: gsap.core.Tween[] = [];
      const sections = root.querySelectorAll<HTMLElement>("[data-contact-section]");

      sections.forEach((section) => {
        const items = section.querySelectorAll<HTMLElement>("[data-contact-reveal]");
        if (!items.length) return;

        const tween = gsap.from(items, {
          y: 22,
          opacity: 0,
          duration: 0.72,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
        tweens.push(tween);
      });

      return () => {
        tweens.forEach((tw) => {
          tw.scrollTrigger?.kill();
          tw.kill();
        });
      };
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] },
  );

  return <div ref={containerRef}>{children}</div>;
}
