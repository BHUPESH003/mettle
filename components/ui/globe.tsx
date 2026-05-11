"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * WebGL dot globe (cobe) — Aceternity / shadcn-style Earth.
 * @see https://github.com/shuding/cobe
 */
export default function Earth({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let phi = 0;
    let width = Math.max(2, container.clientWidth);

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      scale: 1.1,
      mapSamples: 16000,
      mapBrightness: 7,
      mapBaseBrightness: 0,
      baseColor: [0.1, 0.12, 0.18],
      markerColor: [0.4, 0.65, 1],
      glowColor: [0.38, 0.55, 1],
      markers: [],
    });

    canvas.style.opacity = "1";

    let raf = 0;
    const frame = () => {
      phi += 0.003;
      globe.update({ phi, width: width * 2, height: width * 2 });
      raf = requestAnimationFrame(frame);
    };

    const measure = () => {
      const w = container.clientWidth;
      if (w < 2) return;
      width = w;
      globe.update({ width: width * 2, height: width * 2 });
    };

    measure();
    raf = requestAnimationFrame(frame);

    const ro = new ResizeObserver(() => {
      measure();
    });
    ro.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      globe.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative aspect-square w-full max-w-[560px]", className)}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full opacity-0 transition-opacity duration-700"
        aria-hidden
      />
    </div>
  );
}
