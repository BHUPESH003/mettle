import Link from "next/link";
import { Icons } from "@/lib/icons";
import { featuredCaseStudies } from "@/lib/case-studies";

export function CaseStudiesSection() {
  const ArrowIcon = Icons.arrowRight;

  return (
    <section
      className="bg-primary relative overflow-hidden py-20 md:py-28"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-size-[52px_52px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-accent/8 blur-[90px] pointer-events-none" />

      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Case studies
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            Real work, real outcomes
          </h2>
          <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-accent" />
          <p className="text-xl font-medium text-white/60 sm:text-2xl">
            Every project starts with a problem, not a pitch
          </p>
        </div>

        {/* Case study cards */}
        <div className="mx-auto mb-12 max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {featuredCaseStudies.map((study) => {
              const Icon = Icons[study.icon];
              const featured = study.featured!;
              return (
                <Link
                  key={study.slug}
                  href={`/work/${study.slug}`}
                  className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-accent/40 hover:bg-white/8"
                >
                  {/* Top row: icon + number */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 transition-colors duration-300 group-hover:border-accent/60 group-hover:bg-accent/20">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <span
                      aria-hidden
                      className="select-none text-5xl font-black leading-none text-white/8 transition-colors duration-300 group-hover:text-accent/20"
                    >
                      {study.number}
                    </span>
                  </div>

                  {/* Industry tag */}
                  <span className="mb-4 w-fit rounded-full border border-accent/20 bg-accent/8 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-accent">
                    {study.industry}
                  </span>

                  {/* Problem */}
                  <div className="mb-5">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-white/40">
                        Problem
                      </span>
                    </div>
                    <p className="text-base font-semibold leading-snug text-white">
                      {featured.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-5">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      <span className="text-xs font-bold uppercase tracking-wider text-white/40">
                        Solution
                      </span>
                    </div>
                    <p className="text-base leading-relaxed text-white/60">
                      {featured.solution}
                    </p>
                  </div>

                  {/* Impact */}
                  <div className="mb-6 flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="text-xs font-bold uppercase tracking-wider text-accent/70">
                        Impact
                      </span>
                    </div>
                    <p className="text-base leading-relaxed text-white/80">
                      {featured.impact}
                    </p>
                  </div>

                  {/* Read more row */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-5 text-sm font-bold text-white/70 transition-colors group-hover:text-accent">
                    <span>Read case study</span>
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>

                  {/* Bottom accent line */}
                  <div className="mt-5 h-px w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-0 bg-linear-to-r from-accent to-accent-dark transition-all duration-500 group-hover:w-full" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* See all link */}
        <div className="mx-auto text-center">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-white/10"
          >
            See all 6 case studies
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
