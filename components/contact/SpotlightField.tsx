"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function SpotlightField({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const setSpot = (clientX: number, clientY: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((clientX - r.left) / r.width) * 100;
    const y = ((clientY - r.top) / r.height) * 100;
    el.style.setProperty("--sx", `${Math.max(0, Math.min(100, x)).toFixed(2)}%`);
    el.style.setProperty("--sy", `${Math.max(0, Math.min(100, y)).toFixed(2)}%`);
  };

  const onMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) return;
    setSpot(e.clientX, e.clientY);
  };

  const onLeave = () => {
    const el = wrapRef.current;
    if (!el) return;
    el.style.setProperty("--sx", "50%");
    el.style.setProperty("--sy", "50%");
  };

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "contact-spotlight-field group relative rounded-xl",
        className,
      )}
      style={
        {
          "--sx": "50%",
          "--sy": "50%",
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        style={{
          background:
            "radial-gradient(140px 90px at var(--sx) var(--sy), hsl(var(--accent) / 0.14), transparent 72%)",
        }}
      />
      <div className="relative z-1">{children}</div>
    </div>
  );
}
