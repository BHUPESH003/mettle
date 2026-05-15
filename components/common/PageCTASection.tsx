import Link from "next/link";
import { cn } from "@/lib/utils";

export interface PageCTAAction {
  href: string;
  label: string;
}

export interface PageCTASectionProps {
  headline: string;
  headlineAccent?: string;
  description: string;
  primary: PageCTAAction;
  secondary?: PageCTAAction;
  className?: string;
}

export function PageCTASection({
  headline,
  headlineAccent,
  description,
  primary,
  secondary,
  className,
}: PageCTASectionProps) {
  return (
    <section
      className={cn(
        "border-t border-white/8 bg-surface-dark px-6 py-24 text-white md:py-32",
        className,
      )}
    >
      <div className="container mx-auto">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <h2 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            {headline}
            {headlineAccent ? (
              <>
                <br />
                {headlineAccent}
              </>
            ) : null}
          </h2>
          <div className="pb-2">
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/55">
              {description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={primary.href}
                className="mettle-btn rounded-pill bg-white px-8 py-3.5 text-sm text-zinc-950 hover:bg-white/90"
              >
                {primary.label}
              </Link>
              {secondary ? (
                <Link
                  href={secondary.href}
                  className="mettle-btn mettle-btn-ghost rounded-pill px-8 py-3.5 text-sm"
                >
                  {secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
