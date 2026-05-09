"use client";

import { RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface WorkflowScrollParams {
  sectionRef: RefObject<HTMLElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
  stepsCount: number;
  onStepChange: (index: number) => void;
  onProgressChange: (progress: number) => void;
}

export const WORKFLOW_SCROLL_STEP_PX = 800;

export function useWorkflowScroll({
  sectionRef,
  trackRef,
  stepsCount,
  onStepChange,
  onProgressChange,
}: WorkflowScrollParams) {
  useLayoutEffect(() => {
    if (!sectionRef.current || !trackRef.current || stepsCount < 2) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const horizontalShift = -(stepsCount - 1) * 100;
      gsap.set(trackRef.current, { xPercent: 0 });

      const timeline = gsap.to(trackRef.current, {
        xPercent: horizontalShift,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${stepsCount * WORKFLOW_SCROLL_STEP_PX}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            onProgressChange(progress);
            const activeIndex = Math.min(
              stepsCount - 1,
              Math.floor(progress * stepsCount)
            );
            onStepChange(activeIndex);
          },
        },
      });

      return () => timeline.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef, trackRef, stepsCount, onProgressChange, onStepChange]);
}
