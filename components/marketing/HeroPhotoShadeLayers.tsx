import { cn } from "@/lib/utils";

/**
 * Shared dark scrims for full-bleed marketing heroes (photo or globe).
 * Matches the Services / Contact photo-hero treatment.
 */
export function HeroPhotoShadeLayers({
  variant = "photo",
}: {
  /** `globe`: flat wash sits above globe (z-10); `photo`: flat wash at z-8 above image z-5 */
  variant?: "photo" | "globe";
}) {
  const flatZ = variant === "photo" ? "z-8" : "z-[15]";

  return (
    <>
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-[#06080e]/32",
          flatZ,
        )}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-20 bg-linear-to-b from-[#06080e]/55 via-transparent to-[#06080e]/48"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-20 bg-linear-to-r from-[#06080e]/88 from-0% via-[#06080e]/22 via-32% to-transparent to-70%"
        aria-hidden
      />
    </>
  );
}
