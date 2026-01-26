/**
 * Icon system - Single source of truth for all icons
 * Uses lucide-react, imported centrally for easy swapping
 */

import {
  ArrowRight,
  Mail,
  Phone,
  Menu,
  X,
  ChevronRight,
  Check,
  AlertTriangle,
  Lightbulb,
  Clock,
  TrendingUp,
  Monitor,
  HelpCircle,
  Twitter,
  Linkedin,
  Github,
  Info,
} from "lucide-react";

export const Icons = {
  arrowRight: ArrowRight,
  mail: Mail,
  phone: Phone,
  menu: Menu,
  close: X,
  chevronRight: ChevronRight,
  check: Check,
  alertTriangle: AlertTriangle,
  lightbulb: Lightbulb,
  clock: Clock,
  trendingUp: TrendingUp,
  monitor: Monitor,
  helpCircle: HelpCircle,
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
  info: Info,
} as const;
