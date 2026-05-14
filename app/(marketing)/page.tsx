import { HomeHeroMerged } from "@/components/home/HomeHeroMerged";
import { HomeVideoBackground } from "@/components/home/HomeVideoBackground";
import { ProblemAcknowledgementSection } from "@/components/common/ProblemAcknowledgementSection";
import { ServicesSection } from "@/components/common/ServicesSection";
import { ProductsSection } from "@/components/common/ProductsSection";
import { WorkProjectList } from "@/components/work/WorkProjectList";
import {
  WorkflowStorySection,
  WorkflowStorySectionMobile,
} from "@/components/workflow/WorkflowStorySection";
import { workflowSteps } from "@/lib/workflow-config";

export default function HomePage() {
  return (
    <main>
      <HomeVideoBackground>
        <HomeHeroMerged />
        <ProblemAcknowledgementSection />
      </HomeVideoBackground>
      <ServicesSection />
      <div id="how-we-work-content" className="scroll-mt-8">
        <WorkflowStorySection steps={workflowSteps} />
        <WorkflowStorySectionMobile steps={workflowSteps} />
      </div>
      <WorkProjectList />
      <ProductsSection />
    </main>
  );
}
