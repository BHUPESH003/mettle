"use client";

import { HomeNavigation } from "@/components/home/HomeNavigation";
import { Footer } from "@/components/common/Footer";

export function MarketingChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HomeNavigation />
      {children}
      <Footer />
    </>
  );
}
