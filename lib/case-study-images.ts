export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudyMedia {
  hero?: CaseStudyImage;
  showcase?: CaseStudyImage[];
}

export const caseStudyMediaBySlug: Record<string, CaseStudyMedia> = {
  "bichance-social-dining-platform": {
    hero: {
      src: "/images/bichance/image.png",
      alt: "Bichance social dining concept overview",
    },
    showcase: [
      {
        src: "/images/bichance/market.png",
        alt: "Market research and positioning analysis",
        caption: "Market validation before build",
      },
      {
        src: "/images/bichance/app.png",
        alt: "Early product concept screens",
        caption: "Concept exploration",
      },
      
    ],
  },
  "barnshenn-ecommerce-platform": {
    hero: {
      src: "/images/barnshenn/image.png",
      alt: "Barnshenn e-commerce operations platform",
    },
    showcase: [
      {
        src: "/images/barnshenn/dashboard.png",
        alt: "Unified operations dashboard",
        caption: "Single source of truth for the team",
      },
      {
        src: "/images/barnshenn/architecture.png",
        alt: "Platform architecture overview",
        caption: "System structure",
      },
    ],
  },
  "mirexa-pharmaceutical-brand-transition": {
    hero: {
      src: "/images/mirexa/image.png",
      alt: "Mirexa Pharmaceutical digital presence",
    },
    showcase: [
      {
        src: "/images/mirexa/brand.png",
        alt: "Brand transition guidelines",
        caption: "Brand alignment",
      },
      {
        src: "/images/mirexa/digital.png",
        alt: "Compliant digital experience",
        caption: "Regulated industry presentation",
      },
    ],
  },
  "themedcare-pharmacy-digital-presence": {
    hero: {
      src: "/images/themedcare/image.png",
      alt: "Themedcare pharmacy digital presence",
    },
    showcase: [
      {
        src: "/images/themedcare/trust.png",
        alt: "Trust and credibility signals on site",
        caption: "Healthcare trust design",
      },
      {
        src: "/images/themedcare/accessibility.png",
        alt: "Accessible pharmacy web experience",
        caption: "Compliance-ready UX",
      },
    ],
  },
  "mycleanone-pro-license-generator": {
    hero: {
      src: "/images/mycleanone/image.png",
      alt: "MyCleanOne Pro licensing platform",
    },
    showcase: [
      {
        src: "/images/mycleanone/dashboard.png",
        alt: "License management dashboard",
        caption: "Automated entitlement control",
      },
      {
        src: "/images/mycleanone/entitlement.png",
        alt: "Free vs Pro tier clarity",
        caption: "Clear upgrade path",
      },
    ],
  },
  "k2renewals-crm": {
    hero: {
      src: "/images/k2renewals/image.png",
      alt: "K2 Renewals CRM platform",
    },
    showcase: [
      {
        src: "/images/k2renewals/dashboard.png",
        alt: "Operations dashboard for renewals tracking",
        caption: "Real-time visibility",
      },
      {
        src: "/images/k2renewals/logistics.png",
        alt: "Logistics and raw materials tracking",
        caption: "End-to-end material flow",
      },
    ],
  },
};

export function getCaseStudyMedia(slug: string): CaseStudyMedia | undefined {
  return caseStudyMediaBySlug[slug];
}
