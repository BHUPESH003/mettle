interface FloatingSignalProps {
  xPercent: number;
}

export function FloatingSignal({ xPercent }: FloatingSignalProps) {
  return (
    <div
      className="pointer-events-none absolute top-1/2 z-20 -translate-y-1/2"
      style={{ left: `calc(${xPercent}% - 10px)` }}
      aria-hidden
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-accent shadow-[0_0_18px_rgba(56,189,248,0.8)]" />
      </span>
    </div>
  );
}
