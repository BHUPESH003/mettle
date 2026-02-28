/**
 * Icon system - Single source of truth for all icons
 * Uses lucide-react, imported centrally for easy swapping
 * Comprehensive set for rich visual design
 */

import {
  // Navigation & UI
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  ExternalLink,
  Menu,
  X,
  Download,
  Upload,
  Search,
  
  // Communication
  Mail,
  Phone,
  MessageSquare,
  Send,
  Bell,
  MessageCircle,
  
  // Business & Analytics
  TrendingUp,
  BarChart3,
  Target,
  Users,
  Building2,
  Briefcase,
  PieChart,
  LineChart,
  Activity,
  
  // Process & Workflow
  Layers,
  GitBranch,
  Repeat,
  Workflow,
  Settings,
  Cog,
  Sliders,
  
  // Technology
  Code,
  Database,
  Cloud,
  Server,
  Cpu,
  Terminal,
  Box,
  Package,
  
  // Quality & Success
  Award,
  Star,
  Zap,
  Shield,
  CheckCircle,
  Check,
  Sparkles,
  
  // Status & Alerts
  AlertTriangle,
  Info,
  HelpCircle,
  AlertCircle,
  
  // Time & Calendar
  Clock,
  Calendar,
  Timer,
  
  // Design & Creative
  Lightbulb,
  Palette,
  Pencil,
  Eye,
  
  // System & Tools
  Monitor,
  Smartphone,
  Laptop,
  
  // Social
  Twitter,
  Linkedin,
  Github,
  
  // Files & Documents
  FileText,
  FolderOpen,
  File,
  
  // Misc
  Rocket,
  Compass,
  Map,
} from "lucide-react";

export const Icons = {
  // Navigation & UI
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  chevronRight: ChevronRight,
  externalLink: ExternalLink,
  menu: Menu,
  close: X,
  download: Download,
  upload: Upload,
  search: Search,
  
  // Communication
  mail: Mail,
  phone: Phone,
  messageSquare: MessageSquare,
  send: Send,
  bell: Bell,
  messageCircle: MessageCircle,
  
  // Business & Analytics
  trendingUp: TrendingUp,
  barChart: BarChart3,
  target: Target,
  users: Users,
  building: Building2,
  briefcase: Briefcase,
  pieChart: PieChart,
  lineChart: LineChart,
  activity: Activity,
  
  // Process & Workflow
  layers: Layers,
  gitBranch: GitBranch,
  repeat: Repeat,
  workflow: Workflow,
  settings: Settings,
  cog: Cog,
  sliders: Sliders,
  
  // Technology
  code: Code,
  database: Database,
  cloud: Cloud,
  server: Server,
  cpu: Cpu,
  terminal: Terminal,
  box: Box,
  package: Package,
  
  // Quality & Success
  award: Award,
  star: Star,
  zap: Zap,
  shield: Shield,
  checkCircle: CheckCircle,
  check: Check,
  sparkles: Sparkles,
  
  // Status & Alerts
  alertTriangle: AlertTriangle,
  info: Info,
  helpCircle: HelpCircle,
  alertCircle: AlertCircle,
  
  // Time & Calendar
  clock: Clock,
  calendar: Calendar,
  timer: Timer,
  
  // Design & Creative
  lightbulb: Lightbulb,
  palette: Palette,
  pencil: Pencil,
  eye: Eye,
  
  // System & Tools
  monitor: Monitor,
  smartphone: Smartphone,
  laptop: Laptop,
  
  // Social
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
  
  // Files & Documents
  fileText: FileText,
  folderOpen: FolderOpen,
  file: File,
  
  // Misc
  rocket: Rocket,
  compass: Compass,
  map: Map,
} as const;
