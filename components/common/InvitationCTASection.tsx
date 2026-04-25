import Link from "next/link";
import { Icons } from "@/lib/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const checklistItems = [
  "We start by understanding — not pitching",
  "Every system is tailored to how your business actually runs",
  "Outcomes over deliverables — always",
];

export function InvitationCTASection() {
  const ArrowIcon = Icons.arrowRight;
  const CheckIcon = Icons.check;

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Checklist callout */}
          <div className="mb-10 inline-flex flex-col items-start gap-3 rounded-2xl border border-border bg-background-secondary px-8 py-6 text-left">
            {checklistItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent">
                  <CheckIcon className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <h2 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">
            Let&apos;s fix how your business operates
          </h2>
          <div className="mx-auto mb-6 h-1 w-12 rounded-full bg-accent" />
          <p className="mb-10 text-lg leading-relaxed text-foreground">
            We&apos;ll understand your workflow and show you where things can
            improve.
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
              href="/work"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "px-10 py-6 text-base font-semibold"
              )}
            >
              See how we work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
