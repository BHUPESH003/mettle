import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { services } from "@/lib/services";

const cardStyles = [
  {
    bg: "bg-[#c9dcc4]",
    hoverBg: "hover:bg-[#bcd3b6]",
    textClass: "text-zinc-900",
    numClass: "text-zinc-900/30",
    iconClass: "text-zinc-700",
    dividerClass: "bg-zinc-900/15",
    imgOverlay: "bg-white/10",
  },
  {
    bg: "bg-[#192820]",
    hoverBg: "hover:bg-[#1e3028]",
    textClass: "text-white",
    numClass: "text-white/25",
    iconClass: "text-white/75",
    dividerClass: "bg-white/15",
    imgOverlay: "bg-black/30",
  },
  {
    bg: "bg-[#eaece8]",
    hoverBg: "hover:bg-[#e0e3de]",
    textClass: "text-zinc-900",
    numClass: "text-zinc-900/25",
    iconClass: "text-zinc-700",
    dividerClass: "bg-zinc-900/12",
    imgOverlay: "bg-white/10",
  },
] as const;

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
            Our services
          </p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            What we actually do
          </h2>
        </div>

        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-3 md:grid-cols-3">
          {services.map((service, i) => {
            const style = cardStyles[i] ?? cardStyles[0];
            const Icon = Icons[service.icon];
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className={`group relative flex flex-col overflow-hidden rounded-2xl p-8 transition-colors duration-300 md:min-h-120 ${style.bg} ${style.hoverBg}`}
              >
                {/* Top row: icon + number */}
                <div className="flex items-start justify-between">
                  <div className={style.iconClass}>
                    <Icon className="h-10 w-10" strokeWidth={1.25} />
                  </div>
                  <span className={`text-sm font-semibold tracking-wide ${style.numClass}`}>
                    {service.number}.
                  </span>
                </div>

                {/* Center image */}
                <div className="relative my-8 flex-1 min-h-32 overflow-hidden rounded-xl">
                  <Image
                    src={service.heroImage.src}
                    alt={service.heroImage.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 ${style.imgOverlay}`} />
                </div>

                {/* Bottom content */}
                <div>
                  <div className={`mb-5 h-px w-10 ${style.dividerClass}`} />
                  <h3 className={`mb-3 text-2xl font-bold leading-snug ${style.textClass}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed opacity-65 ${style.textClass}`}>
                    {service.shortDescription}
                  </p>
                  <div
                    className={`mt-6 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] opacity-45 transition-opacity group-hover:opacity-90 ${style.textClass}`}
                  >
                    <span>Learn more</span>
                    <Icons.arrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-accent transition-colors hover:text-accent/80"
          >
            View all services
            <Icons.arrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
