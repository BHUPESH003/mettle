/**
 * Marketing route group layout
 * Shared layout for all marketing pages
 */

import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
