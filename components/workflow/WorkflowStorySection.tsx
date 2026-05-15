"use client";

import { useRef, useState } from "react";
import type { WorkflowStepData } from "@/lib/workflow-config";
import { useWorkflowScroll } from "@/hooks/useWorkflowScroll";
import { BackgroundGrid } from "./BackgroundGrid";
import { ProgressRail } from "./ProgressRail";
import { WorkflowTrack } from "./WorkflowTrack";
import { WorkflowStep } from "./WorkflowStep";

interface WorkflowStorySectionProps {
  steps: WorkflowStepData[];
  className?: string;
}

export function WorkflowStorySection({
  steps,
  className = "",
}: WorkflowStorySectionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const { scrollToStep } = useWorkflowScroll({
    sectionRef: wrapperRef,
    trackRef,
    stepsCount: steps.length,
    onStepChange: setActiveIndex,
    onProgressChange: setProgress,
  });

  return (
    <div
      ref={wrapperRef}
      data-workflow-story
      className={`workflow-story-scroller relative hidden bg-white text-foreground md:block ${className}`}
    >
      <section className="relative flex h-[calc(100svh-5rem)] overflow-hidden">
        <BackgroundGrid />

        <div className="relative z-10 flex h-full w-full">
          <ProgressRail
            steps={steps}
            activeIndex={activeIndex}
            progress={progress}
            onStepClick={scrollToStep}
          />

          <div className="relative flex min-h-0 min-w-0 flex-1 flex-col">
            <header className="shrink-0 border-b border-border px-6 pb-4 pt-8 lg:px-10 lg:pt-10">
              <p className="mettle-label mb-2 text-accent">Our process</p>
              <h2 className="text-2xl font-black tracking-tight text-foreground lg:text-3xl">
                From chaos to clarity
              </h2>
            </header>

            <div className="relative min-h-0 flex-1 overflow-hidden">
              <div ref={trackRef} className="h-full w-full will-change-transform">
                <WorkflowTrack steps={steps} activeIndex={activeIndex} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function WorkflowStorySectionMobile({
  steps,
  className = "",
}: WorkflowStorySectionProps) {
  return (
    <section
      className={`relative bg-white text-foreground md:hidden ${className}`}
    >
      <BackgroundGrid />

      <div className="relative border-b border-border px-4 py-10">
        <p className="mettle-label mb-2 text-accent">Our process</p>
        <h2 className="text-3xl font-black tracking-tight text-foreground">
          From chaos to clarity
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Four phases we run on every engagement.
        </p>
      </div>

      <div className="relative divide-y divide-border">
        {steps.map((step) => (
          <div key={step.id} className="px-4 py-12">
            <WorkflowStep
              step={step}
              isActive
              fullViewport={false}
              domId={`${step.id}-mobile`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
