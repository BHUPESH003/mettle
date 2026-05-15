"use client";

import { RefObject, useCallback, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface WorkflowScrollParams {
  sectionRef: RefObject<HTMLElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
  stepsCount: number;
  onStepChange: (index: number) => void;
  onProgressChange: (progress: number) => void;
}

export const WORKFLOW_SCROLL_STEP_PX = 700;
const WORKFLOW_SCROLL_TRIGGER_ID = "workflow-story";

function getHorizontalShift(track: HTMLElement) {
  return -(track.scrollWidth - window.innerWidth);
}

export function useWorkflowScroll({
  sectionRef,
  trackRef,
  stepsCount,
  onStepChange,
  onProgressChange,
}: WorkflowScrollParams) {
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !trackRef.current || stepsCount < 2) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      gsap.set(track, { x: 0 });

      const timeline = gsap.to(track, {
        x: () => getHorizontalShift(track),
        ease: "none",
        scrollTrigger: {
          id: WORKFLOW_SCROLL_TRIGGER_ID,
          trigger: sectionRef.current,
          start: "top top",
          end: () =>
            `+=${Math.max(
              window.innerHeight,
              stepsCount * WORKFLOW_SCROLL_STEP_PX
            )}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            onProgressChange(progress);
            const activeIndex = Math.min(
              stepsCount - 1,
              Math.round(progress * (stepsCount - 1))
            );
            onStepChange(activeIndex);
          },
        },
      });

      scrollTriggerRef.current =
        timeline.scrollTrigger as ScrollTrigger | null;

      return () => timeline.kill();
    }, sectionRef);

    return () => {
      scrollTriggerRef.current = null;
      ctx.revert();
    };
  }, [sectionRef, trackRef, stepsCount, onProgressChange, onStepChange]);

  const scrollToStep = useCallback(
    (index: number) => {
      const st =
        scrollTriggerRef.current ??
        ScrollTrigger.getById(WORKFLOW_SCROLL_TRIGGER_ID);
      if (!st || stepsCount <= 1) return;

      const progress = index / (stepsCount - 1);
      const targetY = st.start + progress * (st.end - st.start);
      window.scrollTo({ top: targetY, behavior: "smooth" });
    },
    [stepsCount]
  );

  return { scrollToStep };
}
