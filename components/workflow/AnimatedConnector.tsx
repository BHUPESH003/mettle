interface AnimatedConnectorProps {
  active: boolean;
  accentColor: string;
}

export function AnimatedConnector({ active, accentColor }: AnimatedConnectorProps) {
  return (
    <svg
      viewBox="0 0 240 40"
      className="h-10 w-full"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M8 20 H232"
        className="stroke-white/15"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M8 20 H232"
        stroke={accentColor}
        strokeWidth="2"
        fill="none"
        className={active ? "opacity-100" : "opacity-30"}
        strokeDasharray="8 8"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;-32"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}
