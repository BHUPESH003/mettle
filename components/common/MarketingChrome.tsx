"use client";

import { usePathname } from "next/navigation";
import { HomeNavigation } from "@/components/home/HomeNavigation";
import { Footer } from "@/components/common/Footer";
import { ClientsSection } from "@/components/common/ClientsSection";

export function MarketingChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showClientsBeforeFooter = pathname !== "/";

  return (
    <>
      <HomeNavigation />
      {children}
      {showClientsBeforeFooter ? <ClientsSection /> : null}
      <Footer />
    </>
  );
}
