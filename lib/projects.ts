export interface Project {
  id: string;
  slug: string;
  title: string;
  industry: string;
  shortDescription: string;
  problem: {
    description: string;
    painPoints: string[];
  };
  insight: string;
  system: {
    description: string;
    features: string[];
    architecture: string;
  };
  impact: {
    description: string;
    metrics: string[];
  };
  tech: string[];
}

export const projects: Project[] = [
  {
    id: "ecommerce-inventory-system",
    slug: "ecommerce-inventory-system",
    title: "E-commerce Operations & Inventory System",
    industry: "Operations",
    shortDescription: "Manual handling of orders and fragmented inventory tracking led to operational visibility gaps and fulfillment errors.",
    problem: {
      description: "As order volume grew, the manual process of syncing inventory across platforms and managing customer orders became a critical bottleneck.",
      painPoints: [
        "High error rates in manual inventory updates",
        "No real-time visibility into stock levels across departments",
        "Delayed order fulfillment due to fragmented data",
        "Risk of overselling and customer dissatisfaction"
      ]
    },
    insight: "The bottleneck wasn't the speed of the staff; it was a visibility gap. The business couldn't scale because it couldn't 'see' its own stock in real-time. We needed a system that enforced data integrity at the entry point.",
    system: {
      description: "We built a centralized command center designed for high-density data management and real-time inventory control.",
      features: [
        "High-performance AG Grid tables for bulk order processing",
        "Real-time inventory synchronization engine",
        "Secure digital asset management via AWS S3",
        "Automated reporting for low-stock and fulfillment lags"
      ],
      architecture: "React frontend for speed, Node.js backend for process control, and AWS S3 for high-resolution asset storage."
    },
    impact: {
      description: "The system transformed the warehouse from a manual hub into a data-driven operation.",
      metrics: [
        "50% reduction in average order processing time",
        "100% elimination of inventory sync errors",
        "Total visibility for founders into stock-on-hand metrics"
      ]
    },
    tech: ["React", "AG Grid", "Node.js", "AWS S3"]
  },
  {
    id: "insurance-support-bot",
    slug: "insurance-support-bot",
    title: "Insurance Support Automation Engine",
    industry: "Automation",
    shortDescription: "High volumes of routine policy inquiries and service requests were creating friction for both customers and support teams.",
    problem: {
      description: "Support agents were spending 80% of their time answering the same 5 policy questions, preventing them from handling complex claims.",
      painPoints: [
        "Customers frustrated by wait times for basic info",
        "High support overhead for non-revenue generating tasks",
        "Difficulty for users to find service request links on the main portal"
      ]
    },
    insight: "Most policy questions aren't conversational; they are navigational. We didn't need a 'chatter'; we needed an intent-based router that could surface policy data instantly.",
    system: {
      description: "A specialized web-based bot built to navigate complex insurance policy hierarchies and service catalogs.",
      features: [
        "Intent-parsing logic to identify policy-specific queries",
        "Direct deep-linking to service request forms",
        "Dynamic content surfacing based on user policy type",
        "Seamless handoff to human agents for complex claims"
      ],
      architecture: "React-based UI integrated with custom rule engines and policy database APIs."
    },
    impact: {
      description: "By automating routine triage, the support team regained focus on high-value operations.",
      metrics: [
        "Significant reduction in routine support ticket volume",
        "24/7 instant resolution for basic policy inquiries",
        "Zero-friction path from query to service request"
      ]
    },
    tech: ["React", "REST APIs", "Custom Rule Engines"]
  },
  {
    id: "custom-workflow-crm",
    slug: "custom-workflow-crm",
    title: "Custom Workflow CRM & Operations",
    industry: "Systems",
    shortDescription: "Fragmented tools and Excel sheets made sales, operations, and reporting difficult to track as the team scaled.",
    problem: {
      description: "Standard CRMs assume a linear sales funnel. This business had a complex sequence of bookings, resource allocation, and reporting that 'out-of-the-box' tools couldn't handle.",
      painPoints: [
        "Data scattered across 5+ disconnected spreadsheets",
        "Lack of role-based visibility for different operational teams",
        "Manual reporting taking hours of founder time every week"
      ]
    },
    insight: "The software should match the business sequence, not the other way around. We stripped away the generic CRM fluff and built a system around their actual operational heartbeat.",
    system: {
      description: "A modular operations system built from the ground up to handle the specific lifecycle of their business transactions.",
      features: [
        "Custom booking modules with business-logic restrictions",
        "Real-time operational dashboards for team leads",
        "Granular role-based access control (RBAC)",
        "One-click automated reporting for stakeholders"
      ],
      architecture: "High-performance FastAPI (Python) or Node.js backends with PostgreSQL/MongoDB and a React frontend."
    },
    impact: {
      description: "The business moved from 'managing via spreadsheet' to 'operating via system.'",
      metrics: [
        "Unified source of truth for all sales and ops data",
        "Significant reduction in manual data entry and reporting time",
        "Clear accountability and ownership across the scaling team"
      ]
    },
    tech: ["FastAPI", "React", "PostgreSQL", "Node.js", "MongoDB"]
  },
  {
    id: "seat-booking-auth",
    slug: "seat-booking-auth",
    title: "Regulated Seat Allocation & Booking",
    industry: "Security",
    shortDescription: "Managing resource allocation under strict business rules and audit requirements was impossible via manual tracking.",
    problem: {
      description: "Controlled facilities needed a way to manage seat bookings that adhered to strict regulatory constraints and audit trails.",
      painPoints: [
        "Potential for conflicting bookings in high-stakes environments",
        "Need for verified user access via secure channels",
        "Requirement for a 100% accurate, tamper-proof audit log"
      ]
    },
    insight: "In regulated environments, the UI is secondary. The security and the rules must be enforced at the database and auth level to ensure absolute integrity.",
    system: {
      description: "A secure, restriction-aware booking system with an integrated audit trail and multi-factor verification.",
      features: [
        "OTP-based login flows (Email/SMS)",
        "Encrypted database storage for sensitive allocation data",
        "Rule-based conflict resolution engine",
        "Compliance-ready reporting and audit modules"
      ],
      architecture: "Secure Node.js backend with encrypted data pipelines and robust auth middleware."
    },
    impact: {
      description: "The organization achieved a level of control and audit-readiness that was previously impossible.",
      metrics: [
        "Zero resource allocation conflicts since deployment",
        "100% compliance with external audit requirements",
        "Reduced administrative time for booking verification"
      ]
    },
    tech: ["Node.js", "OTP Auth", "Encryption", "PostgreSQL"]
  },
  {
    id: "campuscrave-fulfillment",
    slug: "campuscrave-fulfillment",
    title: "CampusCrave: Multi-Vendor Fulfillment",
    industry: "Marketplace",
    shortDescription: "Students faced fragmented ordering flows across multiple independent food vendors in a high-volume environment.",
    problem: {
      description: "Campus food courts often operate as siloed vendors. For students, ordering from multiple places meant multiple apps or physical lines.",
      painPoints: [
        "High friction for multi-vendor orders",
        "Complex state management across different vendor fulfillment cycles",
        "Difficulties in secure payment routing to multiple parties"
      ]
    },
    insight: "The challenge wasn't the UI; it was handling the high-concurrency state transitions. Every order has a lifecycle that must be synced between the student, the vendor, and the payment processor.",
    system: {
      description: "A unified marketplace platform designed for high-concurrency food ordering and multi-vendor fulfillment.",
      features: [
        "Unified cart and checkout across different vendors",
        "Real-time order status tracking via Jotai state management",
        "Integrated Stripe payment routing for multi-vendor payouts",
        "Vendor-specific fulfillment dashboards"
      ],
      architecture: "Next.js frontend, Node/Express backend, and PostgreSQL for complex transactional integrity."
    },
    impact: {
      description: "CampusCrave became the unified digital layer for the entire food court ecosystem.",
      metrics: [
        "Seamless multi-vendor ordering experience for thousands of users",
        "Scalable backend capable of handling high-volume peak periods",
        "Reduced queue times and improved fulfillment clarity"
      ]
    },
    tech: ["React", "Jotai", "Node.js", "Express", "PostgreSQL", "Stripe"]
  },
  {
    id: "emotion-recognition-ai",
    slug: "emotion-recognition-ai",
    title: "Applied Emotion Recognition Pipeline",
    industry: "AI/ML",
    shortDescription: "Need for objective sentiment and emotional tone analysis in communications for diagnostic insights.",
    problem: {
      description: "Human interpretation of emotional states is subjective and varies by individual, making objective baseline analysis difficult in mental health contexts.",
      painPoints: [
        "Inconsistency in emotional state reporting",
        "Lack of scalable tools for analyzing large volumes of vocal data",
        "Need for high-accuracy classification in sensitive environments"
      ]
    },
    insight: "ML can detect vocal patterns and frequency shifts that are invisible to the human ear. By training on high-quality datasets, we can provide an objective 'second opinion' on emotional tone.",
    system: {
      description: "A high-accuracy pipeline for classifying vocal and text-based emotional data into actionable states.",
      features: [
        "Vocal feature extraction and analysis",
        "Classification into Positive, Negative, and Neutral states",
        "Training and evaluation pipelines based on RAVDESS and TESS",
        "91% accuracy achieved in controlled testing environments"
      ],
      architecture: "Python-led ML pipeline with deep learning models for pattern recognition."
    },
    impact: {
      description: "Demonstrated the feasibility of using ML as a reliable diagnostic tool for emotional analysis.",
      metrics: [
        "91% accuracy in emotional classification",
        "Scalable foundation for mental health analysis software",
        "Reduced subjectivity in communication audits"
      ]
    },
    tech: ["Python", "TensorFlow/PyTorch", "ML Pipelines", "RAVDESS/TESS"]
  }
];
