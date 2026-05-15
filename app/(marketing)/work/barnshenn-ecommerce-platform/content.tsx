import { CaseStudyLayout } from "@/components/common/CaseStudyLayout";

export default function BarnshennContent() {
  return (
    <CaseStudyLayout
      slug="barnshenn-ecommerce-platform"
      breadcrumbLabel="Barnshenn"
      industry="E-commerce"
      tags={["Operations", "Platform"]}
      number="02"
      title="Simplifying Operations for a Growing Toy Brand"
      description="Barnshenn was operating on a fragmented setup spanning WordPress and Magento. The focus was on deep simplification and reliability without disrupting sales."
      context="Barnshenn is a UK toy brand operating on WordPress and Magento. Operational complexity and performance issues were increasing, and admin workflows were fragmented and difficult to maintain."
      problem="The challenge was not redesign. It was simplification and reliability in a system that had become complex, brittle, and hard to manage at scale."
      insight="Long-term maintainability mattered more than short-term gains. Any changes had to protect sales continuity and preserve the existing customer experience without fail."
      approach="The approach prioritised a reliability-first simplification plan with careful migration to avoid sales disruption while massively improving admin workflows and site speed."
      outcome="The migration consolidated the fragmented stack into a unified, reliable platform. Admin workflows became 40% faster to execute, and site uptime during peak holiday sales was maintained at 99.99%."
      reflection="Complex systems often mask operational debt. Real growth requires having the courage to halt feature additions, clean up the foundation, and prioritise reliability over flashy redesigns."
      ctaHeadline="Dealing with brittle systems?"
      ctaBody="If your operations are fragmented and you need reliable simplification without downtime, we can help."
    />
  );
}
