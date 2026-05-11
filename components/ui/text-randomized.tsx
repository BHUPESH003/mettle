"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789▪░";

function buildInitialScramble(source: string) {
  return source
    .split("")
    .map((c) => (c === " " ? " " : CHARSET[Math.floor(Math.random() * CHARSET.length)]))
    .join("");
}

export interface RandomizedTextEffectProps {
  text: string;
  className?: string;
  /** When true, scramble starts when the text scrolls into view (default false). */
  triggerOnView?: boolean;
  speed?: number;
}

export function RandomizedTextEffect({
  text,
  className,
  triggerOnView = false,
  speed = 1,
}: RandomizedTextEffectProps) {
  const [display, setDisplay] = useState(text);
  const spanRef = useRef<HTMLSpanElement>(null);
  const reducedRef = useRef(false);
  const playedRef = useRef(false);

  useLayoutEffect(() => {
    reducedRef.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    playedRef.current = false;
    if (!reducedRef.current) {
      setDisplay(buildInitialScramble(text));
    } else {
      setDisplay(text);
    }
  }, [text, triggerOnView]);

  useEffect(() => {
    if (reducedRef.current) {
      setDisplay(text);
      return;
    }

    let cancelled = false;
    let raf = 0;

    const runFrames = () => {
      const start = performance.now();
      const len = text.length;
      const duration = Math.min(2600, 420 + len * 95) / speed;

      const tick = (now: number) => {
        if (cancelled) return;
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - (1 - t) ** 2.25;
        const revealed = Math.floor(eased * len);

        let out = "";
        for (let i = 0; i < len; i++) {
          const ch = text[i];
          if (ch === " ") {
            out += " ";
            continue;
          }
          if (i < revealed) {
            out += ch;
          } else {
            out += CHARSET[Math.floor(Math.random() * CHARSET.length)];
          }
        }
        setDisplay(out);

        if (t < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setDisplay(text);
        }
      };

      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (playedRef.current) return;
      playedRef.current = true;
      runFrames();
    };

    if (!triggerOnView) {
      start();
      return () => {
        cancelled = true;
        cancelAnimationFrame(raf);
      };
    }

    const el = spanRef.current;
    if (!el) return () => {};

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          start();
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    obs.observe(el);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, [text, triggerOnView, speed]);

  return (
    <span
      ref={spanRef}
      className={cn("inline-block", className)}
      suppressHydrationWarning
    >
      {display}
    </span>
  );
}
