"use client";

import { Icons } from "@/lib/icons";

const hints = [
  {
    icon: "users" as const,
    title: "Use them yourself",
    description: "Drop-in systems your team can adopt and run from day one.",
    delayClass: "home-anim-delay-3",
  },
  {
    icon: "sliders" as const,
    title: "Or let us customize",
    description: "We tailor and integrate into your existing infrastructure.",
    delayClass: "home-anim-delay-4",
  },
] as const;

export function ProductsSection() {
  const BoxIcon = Icons.box;

  return (
    <section className="relative overflow-hidden border-t border-border bg-background px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle,hsl(var(--border))_1px,transparent_1px)] bg-size-[24px_24px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_50%_50%,hsl(var(--accent)/0.12),transparent_70%)] opacity-60"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-background/90 shadow-sm backdrop-blur-sm">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
            <div className="relative flex flex-col justify-center gap-6 border-b border-border p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <div
                className="absolute bottom-12 left-0 top-12 w-[3px] rounded-full bg-linear-to-b from-transparent via-accent to-transparent"
                aria-hidden
              />

              <div className="home-anim-fade-in relative inline-flex w-fit items-center gap-2 rounded-full border border-accent/25 bg-accent-light px-4 py-1.5">
                <span
                  className="home-badge-dot inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent">
                  Coming soon
                </span>
              </div>

              <div className="home-anim-fade-up home-anim-delay-1 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent-light shadow-sm">
                  <BoxIcon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                </div>
                <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                  Products
                </h2>
              </div>

              <div
                className="home-anim-slide-bar h-[3px] rounded-full bg-accent"
                aria-hidden
              />

              <p className="home-anim-fade-up home-anim-delay-2 max-w-sm text-base leading-relaxed text-muted-foreground">
                We are building open systems that businesses can use directly — without compromise.
              </p>
            </div>

            <div className="flex flex-col gap-4 bg-background-secondary p-8 sm:flex-row sm:p-10 lg:flex-col lg:p-10">
              {hints.map(({ icon, title, description, delayClass }) => {
                const Icon = Icons[icon];
                return (
                  <div
                    key={title}
                    className={`home-card-lift home-anim-scale-in ${delayClass} group flex-1 cursor-default rounded-2xl border border-border bg-background p-6`}
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/15 bg-accent-light transition-colors duration-200 group-hover:border-transparent group-hover:bg-accent">
                      <Icon
                        className="h-4 w-4 text-accent transition-colors duration-200 group-hover:text-accent-foreground"
                        strokeWidth={1.75}
                      />
                    </div>
                    <h3 className="mb-1.5 text-[15px] font-semibold text-foreground">{title}</h3>
                    <p className="text-[13.5px] leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
