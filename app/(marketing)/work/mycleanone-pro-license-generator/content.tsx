import { CaseStudyLayout } from "@/components/common/CaseStudyLayout";

export default function MyCleanOneContent() {
  return (
    <CaseStudyLayout
      breadcrumbLabel="MyCleanOne"
      industry="B2C SaaS"
      tags={["SaaS", "Automation"]}
      number="05"
      title="Clarifying Value and Entitlement for a Pro License"
      description="mycleanone is a consumer-facing optimisation tool. The focus was on product clarity, entitlement logic, and building a high-conversion upgrade path without dark patterns."
      context="mycleanone is a consumer-facing SaaS product targeted at non-technical users needing system cleanup and optimisation. It operates as a high-volume, low-touch product with a Pro license path."
      problem="The core challenge was product clarity, not technical complexity. Users struggled to understand the value difference between free and Pro, and licensing logic had to be flawlessly simple to prevent massive support overhead."
      insight="Value differentiation and entitlement clarity needed to be designed heavily into the system itself. The upgrade path had to be explicit and rewarding, without relying on frustrating dark patterns."
      approach="A highly maintainable licensing and entitlement UI was designed to be bulletproof at scale. It clearly communicated locked vs. unlocked features, making the user feel empowered rather than tricked into purchasing."
      outcome="Client onboarding and the upgrade flow were massively optimised, leading to over 70 hours of customer support time saved per week through intuitive automation and clear UI cues."
      metrics={["70+ hours saved per week through automation", "Significantly reduced support ticket volume", "High-conversion upgrade path with no dark patterns"]}
      reflection="Digital products aimed at non-technical consumer markets live or die by user trust. Dark patterns cause support bloat and high churn; extreme clarity is the only scalable retention strategy."
      ctaHeadline="Building SaaS entitlement?"
      ctaBody="If your upgrade paths are failing or driving up support tickets, we can help design a clear, automated licensing flow."
    />
  );
}
