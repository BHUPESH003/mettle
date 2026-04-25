import { Icons } from "@/lib/icons";

export interface CaseStudy {
  number: string;
  slug: string;
  title: string;
  industry: string;
  icon: keyof typeof Icons;
  tags: string[];
  context: string;
  outcome: string | null;
  /**
   * Optional Problem / Solution / Impact triplet used on the homepage
   * CaseStudiesSection. Populated only for the three featured cases.
   */
  featured?: {
    problem: string;
    solution: string;
    impact: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    number: "01",
    slug: "bichance-social-dining-platform",
    title: "Validating Demand Before Building a Social Dining Platform",
    industry: "Consumer Platform",
    icon: "users",
    tags: ["Strategy", "Validation"],
    context:
      "Bichance in Singapore had a social dining concept but lacked clarity on feasibility, scope, and adoption risks before committing to any technical investment.",
    outcome: null,
  },
  {
    number: "02",
    slug: "barnshenn-ecommerce-platform",
    title: "Simplifying Operations for a Growing Toy Brand",
    industry: "E-commerce",
    icon: "package",
    tags: ["Operations", "Platform"],
    context:
      "A UK toy brand faced operational complexity and performance issues across WordPress and Magento, with fragmented admin workflows slowing the team daily.",
    outcome: null,
    featured: {
      problem:
        "Operational complexity across WordPress and Magento, with fragmented admin workflows slowing the team daily.",
      solution:
        "A unified operations platform rebuilt around their actual sales and fulfillment sequence.",
      impact: "Faster daily operations and one source of truth for the team.",
    },
  },
  {
    number: "03",
    slug: "mirexa-pharmaceutical-brand-transition",
    title: "Aligning Digital Presence with a Brand Transition",
    industry: "Pharmaceutical",
    icon: "briefcase",
    tags: ["Brand", "Digital"],
    context:
      "Mirexa Pharmaceutical, formerly Keshav Pharmaceuticals, needed alignment between business intent and digital representation within a regulated industry.",
    outcome: null,
  },
  {
    number: "04",
    slug: "themedcare-pharmacy-digital-presence",
    title: "Establishing Trust for a Pharmacy's Digital Presence",
    industry: "Healthcare",
    icon: "shield",
    tags: ["Healthcare", "Trust"],
    context:
      "Themedcare.ca was transitioning from a physical pharmacy to a credible digital presence in Canada, where compliance and accessibility signals are expected.",
    outcome:
      "Digital identity strengthened trust and enabled meaningful client feedback.",
  },
  {
    number: "05",
    slug: "mycleanone-pro-license-generator",
    title: "Clarifying Value and Entitlement for a Pro License",
    industry: "B2C SaaS",
    icon: "zap",
    tags: ["SaaS", "Automation"],
    context:
      "Users struggled to understand the difference between free and Pro tiers, and the licensing system needed to handle high volume without manual intervention.",
    outcome: "70 hours saved per week through automation after flow was optimised.",
    featured: {
      problem:
        "Manual licensing struggled to handle high volume; users were confused about free vs. Pro entitlement.",
      solution:
        "An automated license generation flow with clear entitlement logic and a tiered upgrade path.",
      impact: "70 hours saved per week after the flow was optimised.",
    },
  },
  {
    number: "06",
    slug: "k2renewals-crm",
    title: "Restoring Operational Clarity in Raw Materials Tracking",
    industry: "Operations",
    icon: "workflow",
    tags: ["CRM", "Tracking"],
    context:
      "K2Renewals depended on manual logs and Excel for raw material tracking, creating inconsistent data and near-zero visibility across logistics and reporting.",
    outcome:
      "Clearer operations and better decision-making through a purpose-built CRM.",
    featured: {
      problem:
        "Raw material tracking lived in manual logs and Excel — inconsistent data, near-zero visibility across logistics.",
      solution:
        "A purpose-built CRM that centralised tracking and reporting in one place.",
      impact:
        "Clearer operations and better decision-making across the business.",
    },
  },
];

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);
