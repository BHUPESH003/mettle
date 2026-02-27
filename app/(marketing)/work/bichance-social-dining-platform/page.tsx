/**
 * Case Study — Bichance Social Dining Platform
 * Market validation before build
 */

import type { Metadata } from "next";
import BichanceClientContent from "./content";

export const metadata: Metadata = {
  title: "Validating Demand Before Building a Social Dining Platform",
  description:
    "An early-stage concept required market research to validate demand before any technical execution.",
};

export default function BichanceCaseStudyPage() {
  return <BichanceClientContent />;
}
