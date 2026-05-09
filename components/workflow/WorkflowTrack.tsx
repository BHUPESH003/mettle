import type { WorkflowStepData } from "@/lib/workflow-config";
import { AnimatedConnector } from "./AnimatedConnector";
import { WorkflowStep } from "./WorkflowStep";

interface WorkflowTrackProps {
  steps: WorkflowStepData[];
  activeIndex: number;
}

export function WorkflowTrack({ steps, activeIndex }: WorkflowTrackProps) {
  return (
    <div className="flex h-full w-max">
      {steps.map((step, index) => (
        <div key={step.id} className="relative flex h-full items-center">
          <WorkflowStep
            step={step}
            isActive={activeIndex === index}
            domId={step.id}
          />
          {index < steps.length - 1 ? (
            <div className="absolute right-[-120px] top-1/2 z-10 hidden w-[240px] -translate-y-1/2 lg:block">
              <AnimatedConnector
                active={activeIndex >= index}
                accentColor={steps[index + 1].accentColor}
              />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
