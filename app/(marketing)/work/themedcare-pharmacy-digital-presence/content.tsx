import { CaseStudyLayout } from "@/components/common/CaseStudyLayout";

export default function ThemedcareContent() {
  return (
    <CaseStudyLayout
      breadcrumbLabel="themedcare.ca"
      industry="Healthcare"
      tags={["Healthcare", "Trust"]}
      number="04"
      title="Establishing Trust for a Pharmacy's Digital Presence"
      description="themedcare.ca is a physical pharmacy that transitioned to a strong digital presence. The work focused entirely on credibility, accessibility, and clear information architecture to serve patients better."
      context="themedcare.ca is an established physical pharmacy in Canada transitioning to a stronger digital presence. Their original online identity lacked vital trust, clarity, and compliance cues required in the healthcare industry."
      problem="The primary gap was a profound lack of credibility and discoverability, not e-commerce features. The digital presence did not visually convey trust or legal compliance, and vital patient information wasn't structured clearly enough to support confidence in care."
      insight="In healthcare, trust signals and rigorous accessibility aren't just features — they are the product. A credible digital presence demands clear, compliant information architecture and absolute reliability over flashy visual updates."
      approach="We prioritised a trust-centred information architecture and accessibility-first design decisions. This resulted in a rock-solid, reliable structure that naturally highlights clarity and vital compliance cues for anxious patients."
      outcome="A highly secure, accessible digital identity was deployed, drastically strengthening patient trust. The improved architecture enabled better patient feedback loops and reduced confusion regarding services and medication availability."
      reflection="When building for healthcare, aesthetics must serve utility. Flashy design that sacrifices WCAG accessibility or obscures critical health information actively harms the business and the patient. Trust is built through structural clarity."
      ctaHeadline="Building trust in healthcare?"
      ctaBody="If your digital presence is lacking credibility or failing accessibility compliance, we can rebuild it on a foundation of trust."
    />
  );
}
