import { CaseStudyLayout } from "@/components/common/CaseStudyLayout";

export default function K2RenewalsContent() {
  return (
    <CaseStudyLayout
      slug="k2renewals-crm"
      breadcrumbLabel="K2Renewals"
      industry="Operations"
      tags={["CRM", "Tracking"]}
      number="06"
      title="Restoring Operational Clarity in Raw Materials Tracking"
      description="K2Renewals needed reliable tracking and absolute reporting visibility. We established system ownership and designed a workflow-first CRM to overhaul fragmented logistics."
      context="K2Renewals was struggling with high-stakes tracking of raw materials. Critical information lived in fragmented manual logs and scattered Excel sheets, leading to inconsistent data and weak operational visibility."
      problem="The issue was not the lack of a generic off-the-shelf CRM tool. The true bottleneck was a massive lack of clear system ownership, which left tracking, logistics staging, and compliance reporting fragmented and wholly unreliable."
      insight="Daily logistics movement and corporate reporting cannot be treated as separate silos. They must be strictly unified within a single operational system. A workflow-first design intrinsically creates team ownership and eliminates data inconsistency."
      approach="We bypassed generic CRM feature-stuffing and architected a hyper-focused, workflow-first platform. It was built around the explicit physical movement of raw materials through the plant, ensuring that UI mapped directly to real-world logistics."
      outcome="The transition delivered immense qualitative value: radically clearer day-to-day operations, unified data integrity, and profoundly better enterprise-scale decision-making regarding raw materials inventory."
      reflection="This project cemented an absolute truth: software is secondary to operations. You cannot code over a broken workflow. To build good enterprise software, you must deeply interconnect physical logistics, engineering truths, and corporate reporting."
      ctaHeadline="Logistics fragmented?"
      ctaBody="If your operations are trapped in spreadsheets and lack clear system ownership, we can architect the solution."
    />
  );
}
