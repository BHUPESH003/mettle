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
} from "lucide-react";

export const Icons = {
  arrowRight: ArrowRight,
  mail: Mail,
  phone: Phone,
  menu: Menu,
  close: X,
  chevronRight: ChevronRight,
  check: Check,
} as const;
