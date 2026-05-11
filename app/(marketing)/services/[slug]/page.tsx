import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getServiceBySlug, services } from "@/lib/services";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = Icons[service.icon];
  const ArrowIcon = Icons.arrowRight;
  const CheckIcon = Icons.check;

  return (
    <main>
      <section
        className="bg-primary relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
      >
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-size-[52px_52px]" />
        <div className="absolute right-[-8%] top-[12%] h-96 w-96 rounded-full bg-accent/12 blur-[120px]" />

        <div className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <Link
                href="/services"
                className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition-colors hover:text-white"
              >
                <Icons.chevronRight className="h-4 w-4 rotate-180" />
                Back to services
              </Link>

              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/6 px-4 py-2 text-sm font-semibold text-white/70 backdrop-blur-sm">
                <Icon className="h-4 w-4 text-accent" />
                Service {service.number}
              </div>

              <h1 className="mb-6 max-w-4xl text-5xl font-black leading-none tracking-tight text-white sm:text-6xl md:text-7xl">
                {service.title}
              </h1>
              <div className="mb-6 h-1 w-16 rounded-full bg-accent" />
              <p className="max-w-2xl text-xl leading-relaxed text-white/62">
                {service.description}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30">
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl">
                <Image
                  src={service.heroImage.src}
                  alt={service.heroImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                What this includes
              </p>
              <h2 className="mb-5 text-3xl font-black tracking-tight sm:text-4xl">
                Focused work, not bloated scope
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                We keep the engagement tied to operational leverage: fewer
                handoffs, clearer systems, and work your team can actually use.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-background p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <CheckIcon className="h-4 w-4 text-accent" />
                    </span>
                    <span className="text-sm font-bold text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-background-secondary p-7 md:p-9">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Common challenges
              </p>
              <ul className="grid gap-4">
                {service.challenges.map((challenge) => (
                  <li key={challenge} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span className="text-base leading-relaxed text-foreground">
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-primary relative overflow-hidden py-20 md:py-28"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[54px_54px]" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Our approach
            </p>
            <h2 className="mb-5 text-3xl font-black tracking-tight text-white sm:text-5xl">
              How we usually move
            </h2>
            <p className="text-lg leading-relaxed text-white/60">
              {service.approach}
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
            {service.process.map((step, index) => {
              const StepIcon = Icons[step.icon];
              return (
                <div
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-accent">
                      0{index + 1}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8">
                      <StepIcon className="h-5 w-5 text-accent" />
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-black text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Outcomes
            </p>
            <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
              What changes after this work
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
            {service.outcomes.map((outcome) => {
              const OutcomeIcon = Icons[outcome.icon];
              return (
                <div
                  key={outcome.title}
                  className="group rounded-3xl border border-border bg-background p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/8 transition-colors group-hover:bg-accent/15">
                    <OutcomeIcon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-3 text-xl font-black text-foreground">
                    {outcome.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {outcome.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-background-secondary p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-5xl">
              Want to explore this service?
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              We will start by understanding your workflow, then recommend the
              right scope only if this is the right fit.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "group inline-flex items-center gap-2 px-10 py-6 text-base font-semibold shadow-lg shadow-accent/25"
                )}
              >
                Book a call
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "px-10 py-6 text-base font-semibold"
                )}
              >
                Back to services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
