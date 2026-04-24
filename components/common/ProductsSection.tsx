import { Icons } from "@/lib/icons";

const hints = [
  {
    icon: "users" as const,
    label: "Use them yourself",
    description: "Drop-in systems ready for teams to adopt directly.",
  },
  {
    icon: "sliders" as const,
    label: "Or let us customize",
    description: "We tailor and integrate them into your existing setup.",
  },
];

export function ProductsSection() {
  const PackageIcon = Icons.package;

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-background-secondary px-8 py-14 text-center sm:px-12 sm:py-16">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/5 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-accent/4 blur-[70px] pointer-events-none" />

            <div className="relative">
              {/* Coming soon pill */}
              <div className="mb-6 inline-flex items-center rounded-full border border-accent/30 bg-accent/8 px-4 py-2 text-sm font-semibold text-accent">
                <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-accent inline-block" />
                Coming soon
              </div>

              {/* Large icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/20 bg-accent/8">
                <PackageIcon className="h-8 w-8 text-accent" />
              </div>

              <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
                Products
              </h2>
              <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-accent" />

              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                We are building open systems that businesses can use directly.
              </p>

              {/* Hint bullets */}
              <div className="mx-auto grid max-w-2xl gap-4 md:grid-cols-2">
                {hints.map((hint) => {
                  const Icon = Icons[hint.icon];
                  return (
                    <div
                      key={hint.label}
                      className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-background p-6 text-center"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/8">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <p className="text-sm font-bold text-foreground">
                        {hint.label}
                      </p>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {hint.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
