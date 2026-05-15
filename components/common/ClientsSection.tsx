"use client";

const clients = [
  "Series A SaaS",
  "Healthcare Ops",
  "Fintech Scale-up",
  "Industrial Logistics",
  "B2B Marketplace",
  "Professional Services",
  "E-commerce",
  "Insurance Tech",
  "Enterprise CRM",
  "Ops Automation",
] as const;

export function ClientsSection() {
  const row = [...clients, ...clients];

  return (
    <section
      aria-labelledby="clients-heading"
      className="relative overflow-hidden border-y border-white/10 bg-surface-dark py-16 md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--accent)/0.08),transparent_55%)]"
        aria-hidden
      />

      <div className="container relative mx-auto px-6">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mettle-label mb-2 text-white/35">Trusted by</p>
            <h2
              id="clients-heading"
              className="text-2xl font-black tracking-tight text-white md:text-3xl"
            >
              Teams building real systems
            </h2>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/35">
            And growing
          </p>
        </div>
      </div>

      <div className="group/marquee relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-surface-dark to-transparent md:w-32"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-surface-dark to-transparent md:w-32"
          aria-hidden
        />

        <div className="flex w-max animate-clients-marquee gap-6 group-hover/marquee:[animation-play-state:paused] md:gap-8">
          {row.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex shrink-0 items-center rounded-pill border border-white/12 bg-white/4 px-6 py-3 transition-all duration-300 hover:border-accent/40 hover:bg-white/8"
            >
              <span className="whitespace-nowrap font-mono text-xs font-semibold uppercase tracking-[0.12em] text-white/70 transition-colors group-hover/marquee:hover:text-white md:text-sm">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
