"use client";

import { useRef, useState } from "react";
import type { WorkflowStepData } from "@/lib/workflow-config";
import { useWorkflowScroll } from "@/hooks/useWorkflowScroll";
import { useSignalAnimation } from "@/hooks/useSignalAnimation";
import { BackgroundGrid } from "./BackgroundGrid";
import { FloatingSignal } from "./FloatingSignal";
import { ProgressRail } from "./ProgressRail";
import { WorkflowTrack } from "./WorkflowTrack";
import { WorkflowStep } from "./WorkflowStep";

interface WorkflowStorySectionProps {
  steps: WorkflowStepData[];
  className?: string;
}

const MOBILE_STACK_ROTATIONS = ["rotate-1", "-rotate-1", "rotate-[0.5deg]", "-rotate-1"];

export function WorkflowStorySection({
  steps,
  className = "",
}: WorkflowStorySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const { scrollToStep } = useWorkflowScroll({
    sectionRef,
    trackRef,
    stepsCount: steps.length,
    onStepChange: setActiveIndex,
    onProgressChange: setProgress,
  });

  const signal = useSignalAnimation(progress, steps.length);
  const signalX =
    steps.length <= 1
      ? 50
      : (signal.connectorIndex + signal.connectorProgress) *
        (100 / (steps.length - 1));

  return (
    <section
      ref={sectionRef}
      className={`relative hidden h-screen flex-col overflow-hidden bg-surface-dark text-white md:flex ${className}`}
    >
      <BackgroundGrid />
      <ProgressRail
        steps={steps}
        activeIndex={activeIndex}
        progress={progress}
        onStepClick={scrollToStep}
      />
      <div className="relative flex min-h-0 flex-1 items-center overflow-hidden pb-2 pt-1">
        <FloatingSignal xPercent={signalX} />
        <div ref={trackRef} className="h-full w-full will-change-transform">
          <WorkflowTrack steps={steps} activeIndex={activeIndex} />
        </div>
      </div>
    </section>
  );
}

export function WorkflowStorySectionMobile({
  steps,
  className = "",
}: WorkflowStorySectionProps) {
  return (
    <section
      className={`relative bg-surface-dark text-white md:hidden ${className}`}
    >
      <BackgroundGrid />
      <div className="relative">
        {steps.map((step, index) => (
          <figure
            key={step.id}
            className="sticky top-0 grid h-dvh place-content-center px-4 py-16"
            style={{ zIndex: index + 1 }}
          >
            <div
              className={`w-full max-w-xl transition-transform duration-500 ${MOBILE_STACK_ROTATIONS[index % MOBILE_STACK_ROTATIONS.length]}`}
            >
              <WorkflowStep
                step={step}
                isActive
                fullViewport={false}
                domId={`${step.id}-mobile`}
              />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
