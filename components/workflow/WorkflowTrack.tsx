import type { WorkflowStepData } from "@/lib/workflow-config";
import { AnimatedConnector } from "./AnimatedConnector";
import { WorkflowStep } from "./WorkflowStep";

interface WorkflowTrackProps {
  steps: WorkflowStepData[];
  activeIndex: number;
}

export function WorkflowTrack({ steps, activeIndex }: WorkflowTrackProps) {
  return (
    <div className="flex h-full">
      {steps.map((step, index) => (
        <div
          key={step.id}
          className="relative flex h-full w-screen shrink-0 items-center justify-center"
        >
          <WorkflowStep
            step={step}
            isActive={activeIndex === index}
            compact
            domId={step.id}
          />
          {index < steps.length - 1 ? (
            <div
              className="pointer-events-none absolute right-0 top-1/2 z-10 hidden w-24 -translate-y-1/2 translate-x-1/2 lg:block"
              aria-hidden
            >
              <AnimatedConnector
                active={activeIndex > index}
                accentColor={steps[index + 1].accentColor}
              />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
