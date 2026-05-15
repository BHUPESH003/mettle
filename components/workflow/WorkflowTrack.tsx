import type { WorkflowStepData } from "@/lib/workflow-config";
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
        </div>
      ))}
    </div>
  );
}
