import { Icons } from "@/lib/icons";
import type { ReactNode } from "react";

export type WorkflowTheme = "chaos" | "redesign" | "build" | "optimize";

export interface WorkflowAnimations {
  entry?: "fade-up" | "fade-left" | "scale-up";
  exit?: "fade-out" | "scale-down";
  connector?: "pulse" | "flow";
}

export interface WorkflowStepData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  theme: WorkflowTheme;
  icon: keyof typeof Icons;
  accentColor: string;
  metrics: string[];
  animations?: WorkflowAnimations;
  renderNode?: (isActive: boolean) => ReactNode;
}

export const workflowSteps: WorkflowStepData[] = [
  {
    id: "diagnosis",
    number: "01",
    title: "Understand",
    subtitle: "Audit broken systems",
    description:
      "We map fragmented workflows, hidden dependencies, and ownership gaps before any recommendation is made.",
    theme: "chaos",
    icon: "search",
    accentColor: "hsl(var(--accent))",
    metrics: [
      "Disconnected tools mapped",
      "Critical bottlenecks isolated",
      "Cross-team dependencies surfaced",
    ],
    animations: { entry: "fade-up", exit: "scale-down", connector: "pulse" },
  },
  {
    id: "architecture",
    number: "02",
    title: "Redesign",
    subtitle: "Engineer a clear operating model",
    description:
      "We restructure process flow, define system boundaries, and align data contracts so teams can operate with confidence.",
    theme: "redesign",
    icon: "layers",
    accentColor: "hsl(var(--accent))",
    metrics: [
      "Workflow blueprint created",
      "System contracts standardized",
      "Execution sequence clarified",
    ],
    animations: { entry: "fade-left", exit: "fade-out", connector: "flow" },
  },
  {
    id: "execution",
    number: "03",
    title: "Build",
    subtitle: "Ship modular infrastructure",
    description:
      "We implement production-grade systems, connect APIs, and automate repetitive operations across the stack.",
    theme: "build",
    icon: "code",
    accentColor: "hsl(var(--accent))",
    metrics: [
      "Core modules deployed",
      "Integrations activated",
      "Operational load reduced",
    ],
    animations: { entry: "scale-up", exit: "fade-out", connector: "flow" },
  },
  {
    id: "partnership",
    number: "04",
    title: "Optimize",
    subtitle: "Stabilize and compound clarity",
    description:
      "We monitor performance, tune automation loops, and continuously refine the system as the business scales.",
    theme: "optimize",
    icon: "trendingUp",
    accentColor: "hsl(var(--success))",
    metrics: [
      "Live performance telemetry",
      "Automated feedback loops",
      "Compounding execution velocity",
    ],
    animations: { entry: "fade-up", exit: "scale-down", connector: "pulse" },
  },
];
