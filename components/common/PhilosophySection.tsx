interface Principle {
  number: string;
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    number: "01",
    title: "Process First, Automation Second",
    description:
      "Automation on top of a broken process just makes mistakes faster. We fix the workflow first.",
  },
  {
    number: "02",
    title: "Execution > Advice",
    description:
      "We don't build slide decks; we build systems. Real problems require real code, not PDFs.",
  },
  {
    number: "03",
    title: "Clarity Compounds",
    description:
      "A clear system reduces cognitive load, allowing your team to focus on growth rather than friction.",
  },
  {
    number: "04",
    title: "Engineering-Led Strategy",
    description:
      "The best strategy is one that can actually be built. We design with the implementation in mind.",
  },
];

export function PhilosophySection() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "hsl(var(--primary))" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-accent/6 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-[80px] pointer-events-none" />
      {/* Decorative watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          aria-hidden
          className="select-none text-[20rem] font-black leading-none text-white/1.5"
        >
          M
        </span>
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Our Philosophy
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            Why Mettle
          </h2>
          <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-accent" />
          <p className="text-xl font-medium text-white/60 sm:text-2xl">
            How we see work, systems, and growth
          </p>
        </div>

        {/* Quote */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 px-10 py-10 backdrop-blur-sm">
            <span
              className="absolute -top-6 left-8 select-none text-8xl font-black leading-none text-accent/30"
              aria-hidden
            >
              &ldquo;
            </span>
            <blockquote className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
              Complexity is inevitable —{" "}
              <span className="text-accent">confusion is optional</span>
            </blockquote>
          </div>
        </div>

        {/* Principles */}
        <div className="mx-auto max-w-5xl grid gap-4 md:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="group flex items-start gap-5 rounded-2xl border border-white/8 bg-white/4 p-6 transition-all duration-300 hover:border-accent/30 hover:bg-white/7 sm:p-7"
            >
              <div className="shrink-0 text-3xl font-black leading-none text-accent/30 transition-colors duration-300 group-hover:text-accent/60">
                {principle.number}
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-white transition-colors duration-300 group-hover:text-accent sm:text-xl">
                  {principle.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/55">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
