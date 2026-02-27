/**
 * Case Study — K2Renewals CRM
 * Workflow-first system for raw material tracking
 */

import type { Metadata } from "next";
import K2RenewalsClientContent from "./content";

export const metadata: Metadata = {
  title: "Restoring Operational Clarity in Raw Materials Tracking",
  description:
    "A workflow-first CRM designed to unify logistics and reporting for consistent raw material tracking.",
};

export default function K2RenewalsCaseStudyPage() {
  return <K2RenewalsClientContent />;
}
