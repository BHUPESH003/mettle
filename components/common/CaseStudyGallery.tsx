import Image from "next/image";
import type { CaseStudyImage } from "@/lib/case-study-images";
import { cn } from "@/lib/utils";

interface CaseStudyGalleryProps {
  showcase?: CaseStudyImage[];
  className?: string;
}

export function CaseStudyHeroImage({ image }: { image: CaseStudyImage }) {
  return (
    <figure className="relative mt-10 overflow-hidden rounded-panel border border-white/10">
      <div className="relative aspect-video w-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 896px) 100vw, 896px"
          priority
        />
      </div>
      {image.caption ? (
        <figcaption className="border-t border-white/10 bg-white/4 px-4 py-3 text-xs text-white/50">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function CaseStudyGallery({ showcase, className }: CaseStudyGalleryProps) {
  if (!showcase?.length) return null;

  return (
    <div className={cn("mt-10 grid gap-4 sm:grid-cols-2", className)}>
      {showcase.map((image) => (
        <figure
          key={image.src}
          className="overflow-hidden rounded-panel border border-border bg-background"
        >
          <div className="relative aspect-4/3 w-full">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          {image.caption ? (
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              {image.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
