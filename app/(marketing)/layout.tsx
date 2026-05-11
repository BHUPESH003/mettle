/**
 * Marketing route group layout
 * Shared layout for all marketing pages
 */

import { MarketingChrome } from "@/components/common/MarketingChrome";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MarketingChrome>{children}</MarketingChrome>;
}
