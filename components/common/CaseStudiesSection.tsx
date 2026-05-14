"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Icons } from "@/lib/icons";
import { featuredCaseStudies } from "@/lib/case-studies";
import type { CaseStudy } from "@/lib/case-studies";

function CaseStudyPanel({
  study,
  onClose,
}: {
  study: CaseStudy;
  onClose: () => void;
}) {
  const Icon = Icons[study.icon];
  const featured = study.featured!;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Panel */}
      <motion.aside
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-lg flex-col bg-zinc-900 text-white shadow-2xl"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 220 }}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
              <Icon className="h-4 w-4 text-accent" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">
              {study.industry}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/6 text-white/60 transition-colors hover:bg-white/12 hover:text-white"
            aria-label="Close"
          >
            <Icons.close className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-7 py-8">
          {/* Title */}
          <h2 className="mb-2 text-3xl font-black tracking-tight">{study.title}</h2>
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-accent/70">
            Case study {study.number}
          </p>

          {/* Context */}
          <p className="mb-10 text-base leading-relaxed text-white/65">{study.context}</p>

          {/* Problem / Solution / Impact */}
          {featured && (
            <div className="space-y-5">
              <div className="rounded-2xl border border-white/10 bg-white/4 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                    Problem
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/80">{featured.problem}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/4 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                    Solution
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/80">{featured.solution}</p>
              </div>

              <div className="rounded-2xl border border-accent/20 bg-accent/6 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent/70">
                    Impact
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-white/80">{featured.impact}</p>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="border-t border-white/10 px-7 py-5">
          <Link
            href={`/work/${study.slug}`}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-zinc-950 transition-colors hover:bg-white/90"
          >
            Read full case study
            <Icons.arrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.aside>
    </>
  );
}

export function CaseStudiesSection() {
  const [selected, setSelected] = useState<CaseStudy | null>(null);

  return (
    <section className="bg-primary relative overflow-hidden py-20 md:py-28">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-size-[52px_52px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" />
      <div className="pointer-events-none absolute top-1/4 right-0 h-96 w-96 rounded-full bg-accent/8 blur-[90px]" />

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
                <button
                  key={study.slug}
                  type="button"
                  onClick={() => setSelected(study)}
                  className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-8 text-left transition-all duration-300 hover:border-accent/40 hover:bg-white/8"
                >
                  {/* Top row */}
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

                  {/* View detail row */}
                  <div className="flex items-center justify-between border-t border-white/10 pt-5 text-sm font-bold text-white/70 transition-colors group-hover:text-accent">
                    <span>View details</span>
                    <Icons.arrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>

                  <div className="mt-5 h-px w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-0 bg-linear-to-r from-accent to-accent-dark transition-all duration-500 group-hover:w-full" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* See all */}
        <div className="mx-auto text-center">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-white/10"
          >
            See all 6 case studies
            <Icons.arrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Side modal */}
      <AnimatePresence>
        {selected && (
          <CaseStudyPanel study={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
