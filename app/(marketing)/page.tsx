import { HomeHeroMerged } from "@/components/home/HomeHeroMerged";
import { HomeVideoBackground } from "@/components/home/HomeVideoBackground";
import { ClientsSection } from "@/components/common/ClientsSection";
import { ProblemAcknowledgementSection } from "@/components/common/ProblemAcknowledgementSection";
import { ServicesSection } from "@/components/common/ServicesSection";
import { PageCTASection } from "@/components/common/PageCTASection";
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
      <ClientsSection />
      <ServicesSection />
      <div id="how-we-work-content" className="scroll-mt-8 bg-white">
        <WorkflowStorySection steps={workflowSteps} />
        <WorkflowStorySectionMobile steps={workflowSteps} />
      </div>
      <WorkProjectList />
      <ProductsSection />
      <PageCTASection
        headline="Work"
        headlineAccent="with us."
        description="We don't start with proposals or pitches. We start with understanding your situation — then figure out together if and how we can help."
        primary={{ href: "/contact", label: "Start a conversation" }}
        secondary={{ href: "/how-we-work", label: "How we work" }}
      />
    </main>
  );
}
