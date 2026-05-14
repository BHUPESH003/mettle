"use client";

import { useEffect, useRef, useState } from "react";

const HERO_VIDEOS = [
  "/video/herosectionvideo1.mp4",
  "/video/herosectionvideo2.mp4",
] as const;

export function HomeVideoBackground({ children }: { children: React.ReactNode }) {
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
    <div className="relative">
      <div className="pointer-events-none sticky top-0 z-0 h-screen overflow-hidden -mb-[100vh]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-center"
          muted
          playsInline
          preload="auto"
          aria-hidden
          onEnded={() => setVideoIndex((i) => (i + 1) % HERO_VIDEOS.length)}
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(59,130,246,0.12),transparent_55%)]"
          aria-hidden
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
