"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const phases = [
  { number: "01", label: "Diagnosis", id: "diagnosis" },
  { number: "02", label: "Architecture", id: "architecture" },
  { number: "03", label: "Execution", id: "execution" },
  { number: "04", label: "Partnership", id: "partnership" },
] as const;

export function PhaseNav() {
  const [active, setActive] = useState<string>("diagnosis");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    phases.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="mx-auto mt-14 max-w-2xl">
      <div className="grid grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
        {phases.map((phase) => (
          <button
            key={phase.number}
            onClick={() => scrollTo(phase.id)}
            className={cn(
              "flex flex-col items-center gap-1 px-4 py-4 text-center transition-colors duration-200 cursor-pointer",
              active === phase.id
                ? "bg-accent/20"
                : "bg-white/4 hover:bg-white/8",
            )}
          >
            <span className="text-xs font-black tracking-widest text-accent">
              {phase.number}
            </span>
            <span className="text-xs font-semibold text-white/60">
              {phase.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
