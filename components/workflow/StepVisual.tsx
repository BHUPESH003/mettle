import type { WorkflowTheme } from "@/lib/workflow-config";
import { cn } from "@/lib/utils";

interface StepVisualProps {
  theme: WorkflowTheme;
  isActive: boolean;
  compact?: boolean;
}

export function StepVisual({ theme, isActive, compact = false }: StepVisualProps) {
  const size = compact ? "h-[min(10rem,24vh)]" : "h-[min(14rem,32vh)]";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-background-secondary",
        size,
        isActive && "workflow-visual-active",
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.12),transparent_55%)]" />
      {theme === "chaos" && <ChaosVisual />}
      {theme === "redesign" && <RedesignVisual />}
      {theme === "build" && <BuildVisual />}
      {theme === "optimize" && <OptimizeVisual />}
    </div>
  );
}

function ChaosVisual() {
  const nodes = [
    { x: 18, y: 28, delay: 0 },
    { x: 72, y: 18, delay: 0.15 },
    { x: 45, y: 58, delay: 0.3 },
    { x: 82, y: 68, delay: 0.45 },
    { x: 28, y: 78, delay: 0.6 },
  ];
  return (
    <svg viewBox="0 0 100 100" className="relative h-full w-full p-6" preserveAspectRatio="xMidYMid meet">
      {nodes.map((n, i) =>
        nodes.slice(i + 1).map((m, j) => (
          <line
            key={`${i}-${j}`}
            x1={n.x}
            y1={n.y}
            x2={m.x}
            y2={m.y}
            stroke="hsl(var(--accent) / 0.2)"
            strokeWidth="0.4"
            strokeDasharray="2 3"
            className="workflow-line-drift"
          />
        )),
      )}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="2.8"
          fill="hsl(var(--accent))"
          className="workflow-node-float"
          style={{ animationDelay: `${n.delay}s` }}
        />
      ))}
    </svg>
  );
}

function RedesignVisual() {
  return (
    <svg viewBox="0 0 100 100" className="relative h-full w-full p-6" preserveAspectRatio="xMidYMid meet">
      {[20, 40, 60, 80].map((y) => (
        <line
          key={`h-${y}`}
          x1="12"
          y1={y}
          x2="88"
          y2={y}
          stroke="hsl(var(--foreground) / 0.06)"
          strokeWidth="0.35"
        />
      ))}
      {[25, 50, 75].map((x) => (
        <line
          key={`v-${x}`}
          x1={x}
          y1="14"
          x2={x}
          y2="86"
          stroke="hsl(var(--foreground) / 0.06)"
          strokeWidth="0.35"
        />
      ))}
      <rect
        x="28"
        y="30"
        width="44"
        height="40"
        rx="3"
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth="1"
        className="workflow-snap-in"
      />
      <circle cx="28" cy="30" r="2" fill="hsl(var(--accent))" className="workflow-snap-in" style={{ animationDelay: "0.1s" }} />
      <circle cx="72" cy="30" r="2" fill="hsl(var(--accent))" className="workflow-snap-in" style={{ animationDelay: "0.2s" }} />
      <circle cx="28" cy="70" r="2" fill="hsl(var(--accent))" className="workflow-snap-in" style={{ animationDelay: "0.3s" }} />
      <circle cx="72" cy="70" r="2" fill="hsl(var(--accent))" className="workflow-snap-in" style={{ animationDelay: "0.4s" }} />
    </svg>
  );
}

function BuildVisual() {
  const blocks = [
    { x: 18, y: 52, w: 22, h: 14 },
    { x: 42, y: 38, w: 22, h: 28 },
    { x: 66, y: 48, w: 18, h: 18 },
  ];
  return (
    <svg viewBox="0 0 100 100" className="relative h-full w-full p-6" preserveAspectRatio="xMidYMid meet">
      <line x1="12" y1="72" x2="88" y2="72" stroke="hsl(var(--accent) / 0.35)" strokeWidth="0.6" />
      {blocks.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={b.y}
          width={b.w}
          height={b.h}
          rx="2"
          fill="hsl(var(--accent) / 0.15)"
          stroke="hsl(var(--accent))"
          strokeWidth="0.6"
          className="workflow-block-stack"
          style={{ animationDelay: `${i * 0.12}s` }}
        />
      ))}
    </svg>
  );
}

function OptimizeVisual() {
  return (
    <svg viewBox="0 0 100 100" className="relative h-full w-full p-6" preserveAspectRatio="xMidYMid meet">
      <circle cx="50" cy="50" r="28" fill="none" stroke="hsl(var(--accent) / 0.25)" strokeWidth="0.5" />
      <circle
        cx="50"
        cy="50"
        r="28"
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth="1.2"
        strokeDasharray="44 132"
        className="workflow-orbit"
      />
      <circle cx="50" cy="22" r="3" fill="hsl(var(--accent))" className="workflow-orbit-dot" />
      <path
        d="M 38 58 Q 50 68 62 58"
        fill="none"
        stroke="hsl(var(--success))"
        strokeWidth="1"
        strokeLinecap="round"
        className="workflow-pulse-line"
      />
    </svg>
  );
}
