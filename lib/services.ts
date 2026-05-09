import { Icons } from "@/lib/icons";

export interface ServiceDetail {
  title: string;
  description: string;
  icon: keyof typeof Icons;
}

export interface Service {
  slug: string;
  number: string;
  icon: keyof typeof Icons;
  title: string;
  tabLabel: string;
  shortDescription: string;
  description: string;
  heroImage: {
    src: string;
    alt: string;
  };
  includes: string[];
  challenges: string[];
  approach: string;
  outcomes: ServiceDetail[];
  process: ServiceDetail[];
}

export const services: Service[] = [
  {
    slug: "system-design-setup",
    number: "01",
    icon: "compass",
    title: "System Design & Setup",
    tabLabel: "Systems",
    shortDescription: "Map messy operations and design a cleaner way to run.",
    description:
      "We understand your business and redesign how it should operate before building anything.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
      alt: "Analytics dashboard and workflow planning on a laptop",
    },
    includes: [
      "Workflow design",
      "Process mapping",
      "Business logic structuring",
      "Operational audits",
    ],
    challenges: [
      "Manual workarounds that have not been reviewed in years",
      "Workflows that collapse as headcount or volume grows",
      "Bottlenecks that only one person knows how to fix",
      "Failed automation attempts on top of broken processes",
    ],
    approach:
      "We map how your business actually runs, strip away the friction, and design a repeatable workflow built for scale before a single line of code is written.",
    outcomes: [
      {
        icon: "workflow",
        title: "Clear operating flow",
        description: "Teams know what happens next, who owns it, and where information should live.",
      },
      {
        icon: "target",
        title: "Prioritized constraints",
        description: "You see the blockers that matter most instead of chasing every symptom.",
      },
      {
        icon: "map",
        title: "Build-ready blueprint",
        description: "The workflow becomes specific enough to turn into software or automation.",
      },
    ],
    process: [
      {
        icon: "search",
        title: "Observe",
        description: "Interview teams, inspect tools, and map how work actually moves today.",
      },
      {
        icon: "sliders",
        title: "Simplify",
        description: "Remove redundant handoffs and define cleaner business rules.",
      },
      {
        icon: "fileText",
        title: "Document",
        description: "Turn the future workflow into a practical operating model.",
      },
    ],
  },
  {
    slug: "custom-software-tools",
    number: "02",
    icon: "code",
    title: "Custom Software & Tools",
    tabLabel: "Software",
    shortDescription: "Build internal tools that match how your business works.",
    description:
      "We build systems tailored to your exact business needs instead of forcing your team into generic software.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80",
      alt: "Developer workspace with code on multiple screens",
    },
    includes: ["CRMs", "Admin panels", "Internal dashboards", "Custom tools"],
    challenges: [
      "Fragmented tools and disconnected spreadsheets",
      "Outgrowing off-the-shelf CRMs and generic SaaS platforms",
      "No centralised visibility into orders, inventory, or pipeline",
      "Data silos preventing cross-team alignment",
    ],
    approach:
      "We build custom CRMs, admin panels, and operational dashboards that match your exact business rules, production-grade and built to evolve alongside your business.",
    outcomes: [
      {
        icon: "database",
        title: "Single source of truth",
        description: "Operational data becomes readable, searchable, and connected across teams.",
      },
      {
        icon: "monitor",
        title: "Useful dashboards",
        description: "Leaders can see status, exceptions, and performance without chasing updates.",
      },
      {
        icon: "shield",
        title: "Controlled access",
        description: "Roles and permissions keep sensitive workflows structured and accountable.",
      },
    ],
    process: [
      {
        icon: "layers",
        title: "Model",
        description: "Define entities, workflows, roles, and data relationships.",
      },
      {
        icon: "code",
        title: "Build",
        description: "Ship the tool in focused modules your team can test quickly.",
      },
      {
        icon: "rocket",
        title: "Launch",
        description: "Deploy, train users, and refine based on live operational feedback.",
      },
    ],
  },
  {
    slug: "automation-ai",
    number: "03",
    icon: "zap",
    title: "Automation & AI",
    tabLabel: "Automation",
    shortDescription: "Automate repetitive work and customer communication.",
    description:
      "We automate repetitive tasks and communication so your team can focus on the work that needs judgment.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
      alt: "Abstract artificial intelligence network visualization",
    },
    includes: ["AI chatbots", "Voice bots", "Automated follow-ups", "Data pipelines"],
    challenges: [
      "Support teams overwhelmed by routine inquiries",
      "Manual lead coordination slowing sales velocity",
      "Repetitive cross-platform data entry and synchronisation",
      "No real-time responsiveness to customer inquiries",
    ],
    approach:
      "We deploy intelligent agents and rule-based pipelines that handle support, sales coordination, and operations autonomously so your team focuses on high-leverage work.",
    outcomes: [
      {
        icon: "messageCircle",
        title: "Faster response loops",
        description: "Customers and leads get timely answers without waiting on manual handoffs.",
      },
      {
        icon: "repeat",
        title: "Less repetitive work",
        description: "Recurring operational tasks move automatically between the right systems.",
      },
      {
        icon: "activity",
        title: "Trackable automation",
        description: "Every automated action is observable, measurable, and easier to improve.",
      },
    ],
    process: [
      {
        icon: "gitBranch",
        title: "Trigger",
        description: "Identify the exact events that should start an automated workflow.",
      },
      {
        icon: "cpu",
        title: "Decide",
        description: "Apply rules or AI where judgment, classification, or routing is needed.",
      },
      {
        icon: "checkCircle",
        title: "Execute",
        description: "Send updates, sync data, create tasks, and report exceptions.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
