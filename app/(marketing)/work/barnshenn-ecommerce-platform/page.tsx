/**
 * Case Study — Barnshenn E-commerce Platform
 * Simplification and reliability
 */

import type { Metadata } from "next";
import BarnshennClientContent from "./content";

export const metadata: Metadata = {
  title: "Simplifying Operations for a Growing Toy Brand",
  description:
    "A UK toy brand needed to reduce operational complexity and improve reliability without disrupting sales.",
};

export default function BarnshennCaseStudyPage() {
  return <BarnshennClientContent />;
}
