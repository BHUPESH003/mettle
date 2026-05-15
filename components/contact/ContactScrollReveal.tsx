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
      if (!root) return () => {};

      if (prefersReducedMotion) {
        root.querySelectorAll<HTMLElement>("[data-contact-reveal]").forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
        return () => {};
      }

      const triggers: ScrollTrigger[] = [];

      root.querySelectorAll<HTMLElement>("[data-contact-section]").forEach((section) => {
        const items = section.querySelectorAll<HTMLElement>("[data-contact-reveal]");
        if (!items.length) return;

        const reveal = () => {
          gsap.to(items, {
            opacity: 1,
            y: 0,
            duration: 0.72,
            stagger: 0.08,
            ease: "power3.out",
            overwrite: "auto",
          });
        };

        gsap.set(items, { opacity: 0, y: 22 });

        const st = ScrollTrigger.create({
          trigger: section,
          start: "top 88%",
          once: true,
          onEnter: reveal,
        });
        triggers.push(st);

        if (st.isActive) reveal();
      });

      ScrollTrigger.refresh();

      root.querySelectorAll<HTMLElement>("[data-contact-section]").forEach((section) => {
        const items = section.querySelectorAll<HTMLElement>("[data-contact-reveal]");
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
          gsap.set(items, { opacity: 1, y: 0 });
        }
      });

      return () => {
        triggers.forEach((st) => st.kill());
      };
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] },
  );

  return <div ref={containerRef}>{children}</div>;
}
