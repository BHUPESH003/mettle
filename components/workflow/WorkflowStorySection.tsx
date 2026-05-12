"use client";

import { useRef, useState } from "react";
import type { WorkflowStepData } from "@/lib/workflow-config";
import {
  useWorkflowScroll,
  WORKFLOW_SCROLL_STEP_PX,
} from "@/hooks/useWorkflowScroll";
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

export function WorkflowStorySection({
  steps,
  className = "",
}: WorkflowStorySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useWorkflowScroll({
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

  const scrollToStep = (index: number) => {
    if (!sectionRef.current || steps.length <= 1) return;
    const sectionTop = sectionRef.current.offsetTop;
    const progressForStep = index / (steps.length - 1);
    const targetY =
      sectionTop + progressForStep * (steps.length * WORKFLOW_SCROLL_STEP_PX);
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className={`relative hidden h-screen overflow-hidden bg-[#070C14] text-white md:block ${className}`}
    >
      <BackgroundGrid />
      <ProgressRail
        steps={steps}
        activeIndex={activeIndex}
        progress={progress}
        onStepClick={scrollToStep}
      />
      <div className="absolute inset-0 pt-20">
        <FloatingSignal xPercent={signalX} />
        <div ref={trackRef} className="h-full will-change-transform">
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
      className={`relative bg-[#070C14] py-10 text-white md:hidden ${className}`}
    >
      <BackgroundGrid />
      <div className="relative mx-auto flex max-w-xl flex-col gap-6 px-4">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            <WorkflowStep
              step={step}
              isActive={index === 0}
              fullViewport={false}
            />
            {index < steps.length - 1 ? (
              <div className="mx-auto mt-4 h-8 w-px bg-white/15" />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
