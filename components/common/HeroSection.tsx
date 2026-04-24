import Link from "next/link";
import { brand } from "@/lib/brand";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const stats = [
  { value: "6+", label: "Companies served" },
  { value: "70h", label: "Saved per week" },
  { value: "4", label: "Industries" },
  { value: "0", label: "Strategy PDFs" },
] as const;

export function HeroSection() {
  const ArrowIcon = Icons.arrowRight;
  const ChevronDown = Icons.chevronDown;

  return (
    <section
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden py-20"
      style={{ background: "hsl(var(--primary))" }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      {/* Blue blobs */}
      <div className="absolute top-1/4 right-[10%] w-130 h-130 rounded-full bg-accent/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-96 h-96 rounded-full bg-accent/7 blur-[100px] pointer-events-none" />
      <div className="absolute top-[15%] left-1/3 w-64 h-64 rounded-full bg-accent/5 blur-[80px] pointer-events-none" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          {/* Tag */}
          <div className="mb-8 inline-flex items-center rounded-full border border-white/15 bg-white/6 px-4 py-2 text-sm font-semibold text-white/70 backdrop-blur-sm">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-accent inline-block" />
            Systems & Automation Firm
          </div>

          {/* Brand name */}
          <h1 className="mb-5 font-black tracking-tighter leading-none text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] text-white">
            {brand.name}
          </h1>

          <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-accent" />

          {/* Tagline */}
          <p className="mb-4 text-2xl font-semibold text-white/90 sm:text-3xl">
            {brand.tagline}
          </p>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/50 sm:text-xl">
            {brand.shortDescription}
          </p>

          {/* CTA Buttons */}
          <div className="mb-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "group inline-flex items-center gap-2 px-10 py-6 text-base font-semibold shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-shadow"
              )}
            >
              Let&apos;s understand your business
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/25 px-10 py-4 text-base font-bold text-white/80 backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/5 hover:text-white"
            >
              How we work
            </Link>
          </div>

          {/* Stats row */}
          <div className="mx-auto max-w-2xl">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-1 bg-white/4 px-4 py-5 text-center"
                >
                  <span className="text-2xl font-black text-accent">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-white/50">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
