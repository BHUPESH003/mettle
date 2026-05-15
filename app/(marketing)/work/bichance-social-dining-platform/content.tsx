import { CaseStudyLayout } from "@/components/common/CaseStudyLayout";

export default function BichanceContent() {
  return (
    <CaseStudyLayout
      slug="bichance-social-dining-platform"
      breadcrumbLabel="Bichance"
      industry="Consumer Platform"
      tags={["Strategy", "Validation"]}
      number="01"
      title="Validating Demand Before Building a Social Dining Platform"
      description="Bichance was an early-stage concept in Singapore. The work focused on feasibility, scope, and market research before any technical execution."
      context="Bichance was an early-stage social dining idea with no validated market demand. The client had a concept but lacked clarity on feasibility and scope."
      problem="The core risk was building too early without understanding user behaviour. Unknown adoption and budget sensitivity made premature execution the biggest threat."
      insight="Market research had to come before any technical build. Validating behaviour and demand would define scope and reduce unnecessary investment."
      approach="The approach prioritised market research to test adoption and feasibility, informing whether and how to proceed with a build. We mapped user willingness to pay, dined behaviour patterns, and competitive positioning before any product decisions were made."
      outcome="By conducting rigorous market research first, the client gained data-driven clarity on user willingness to pay and behavioural patterns, shifting the initial product roadmap to align with real demand."
      reflection="This project reinforced that the most valuable code is often the code you decide not to write. Validating the market before writing a single line of code is the ultimate de-risking strategy for early-stage ventures."
      ctaHeadline="Navigating complexity?"
      ctaBody="If you want clarity before committing to a costly technical build, let's talk about market validation and scoping."
    />
  );
}
