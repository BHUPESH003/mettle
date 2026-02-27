/**
 * Case Study — themedcare.ca Pharmacy Digital Presence
 * Credibility, accessibility, and clarity
 */

import type { Metadata } from "next";
import ThemedcareClientContent from "./content";

export const metadata: Metadata = {
  title: "Establishing Trust and Clarity for a Pharmacy's Digital Presence",
  description:
    "A physical pharmacy transitioned to a stronger digital presence focused on trust signals, accessibility, and reliable information architecture.",
};

export default function ThemedcareCaseStudyPage() {
  return <ThemedcareClientContent />;
}
