import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { services } from "@/lib/services";

export function ServicesSection() {
  return (
    <section className="relative bg-[#080b12] py-20 md:py-28">
      {/* Top accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/40 to-transparent" aria-hidden />
      {/* Subtle blue radial at top-right */}
      <div className="pointer-events-none absolute right-0 top-0 h-125 w-125 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1),transparent_65%)]" aria-hidden />

      <div className="container mx-auto px-6">

        {/* Header row */}
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-pill border border-accent/25 bg-accent/8 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
                Our services
              </span>
            </div>
            <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              What we actually do
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/45 md:text-right">
            Strategy, systems, and software — built for companies that need
            things to actually work.
          </p>
        </div>

        {/* Service rows */}
        <div className="divide-y divide-white/6">
          {services.map((service, i) => {
            const Icon = Icons[service.icon];
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group relative flex items-center gap-6 py-8 transition-colors duration-300 md:gap-10 md:py-10"
              >
                {/* Hover left-border accent */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-0.5 scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100" aria-hidden />

                {/* Number */}
                <span className="hidden w-16 shrink-0 text-right text-6xl font-black leading-none text-white/6 transition-colors duration-300 group-hover:text-white/10 md:block">
                  {service.number}
                </span>

                {/* Icon + text */}
                <div className="flex flex-1 flex-col gap-4 md:flex-row md:items-center md:gap-10">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/8 transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/14">
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                  </div>

                  <div className="flex-1">
                    <h3 className="mb-1.5 text-xl font-bold text-white transition-colors duration-200 group-hover:text-accent md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/45 md:text-base">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="hidden gap-2 md:flex">
                    {service.includes.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-pill border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Thumbnail */}
                <div className="relative hidden h-20 w-32 shrink-0 overflow-hidden rounded-xl md:block lg:h-24 lg:w-40">
                  <Image
                    src={service.heroImage.src}
                    alt={service.heroImage.alt}
                    fill
                    sizes="160px"
                    className="object-cover opacity-50 transition-all duration-500 group-hover:scale-105 group-hover:opacity-75"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-[#080b12]/60 to-transparent" />
                </div>

                {/* Arrow */}
                <Icons.arrowRight className="h-5 w-5 shrink-0 text-white/20 transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent" />
              </Link>
            );
          })}
        </div>

        {/* Footer link */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-pill border border-white/12 bg-white/5 px-6 py-3 text-sm font-bold text-white/70 transition-all duration-200 hover:border-accent/40 hover:bg-accent/8 hover:text-accent"
          >
            View all services
            <Icons.arrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
