/**
 * Case Study — mycleanone Pro License Generator
 * Product clarity and entitlement system
 */

import type { Metadata } from "next";
import MyCleanOneClientContent from "./content";

export const metadata: Metadata = {
  title: "Clarifying Value and Entitlement for a Pro License",
  description:
    "A consumer-facing SaaS product needed clear value differentiation and a maintainable licensing system for high-volume users.",
};

export default function MycleanoneCaseStudyPage() {
  return <MyCleanOneClientContent />;
}
