/**
 * Home page - Mettle
 * Narrative-driven, consulting-led homepage
 */

import { HeroSection } from "@/components/common/HeroSection";
import { ProblemAcknowledgementSection } from "@/components/common/ProblemAcknowledgementSection";
import { MettleApproachSection } from "@/components/common/MettleApproachSection";
import { WorkPatternsSection } from "@/components/common/WorkPatternsSection";
import { CapabilitiesOverviewSection } from "@/components/common/CapabilitiesOverviewSection";
import { PhilosophySection } from "@/components/common/PhilosophySection";
import { InvitationCTASection } from "@/components/common/InvitationCTASection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemAcknowledgementSection />
      <MettleApproachSection />
      <WorkPatternsSection />
      <CapabilitiesOverviewSection />
      <PhilosophySection />
      <InvitationCTASection />
    </main>
  );
}
