"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";

export function MarketingChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideGlobalHeader =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/how-we-work" ||
    pathname === "/services" ||
    pathname === "/contact";

  return (
    <>
      {!hideGlobalHeader && <Header />}
      {children}
      <Footer />
    </>
  );
}
