/**
 * Home page - Mettle
 * Customer-first homepage: problems → services → process → cases → products → CTA
 */

import { HomeHeroMerged } from "@/components/home/HomeHeroMerged";
import { ProblemAcknowledgementSection } from "@/components/common/ProblemAcknowledgementSection";
import { ServicesSection } from "@/components/common/ServicesSection";
import { HowWeWorkSection } from "@/components/common/HowWeWorkSection";
import { CaseStudiesSection } from "@/components/common/CaseStudiesSection";
import { ProductsSection } from "@/components/common/ProductsSection";
import { InvitationCTASection } from "@/components/common/InvitationCTASection";

export default function HomePage() {
  return (
    <main>
      <HomeHeroMerged />
      <ProblemAcknowledgementSection />
      <ServicesSection />
      <HowWeWorkSection />
      <CaseStudiesSection />
      <ProductsSection />
      <InvitationCTASection />
    </main>
  );
}
