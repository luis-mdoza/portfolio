window.PROJECTS = [
  {
    slug: "tracking-risky-user",
    title: "Tracking Risky Users",
    year: "2026",
    type: "Kasheesh",
    tags: ["SaSS", "FinTech", "UX", "UI", "Strategy"],
    thumbnail: "assets/projects/2602-admin-user-flags/thumbnail.jpg",
    images: [
      "assets/projects/2602-admin-user-flags/images-00.jpg",
      "assets/projects/2602-admin-user-flags/images-01.jpg",
      "assets/projects/2602-admin-user-flags/images-02.jpg",
      "assets/projects/2602-admin-user-flags/images-03.jpg",
    ],
    tldr: {
      heading: "Tracking Risky Users (20-second TLDR)",
      bullets: [
        "Role & Duration: Lead UX UI Designer for a multi-month migration project, collaborating with engineering and product to deliver a feature-parity React Native app.",
        "Problem: The existing Flutter app limited hiring velocity and development efficiency; React Native offers a larger developer pool and faster ramp-up.",
        "Solution: Migrate Kasheesh’s mobile app to React Native while preserving all current features, introduce a new card-selection toggle to replace the star UI, update branding, and align mobile designs with the shared React design system.",
        "Outcome: Scalable foundation for future revenue features, reduced technical debt, improved engineering velocity, and a better cross-platform experience.",
      ],
    },
    sections: [
      {
        id: "tldr",
        label: "TLDR",
        includeInNav: true,
        body:
          "Role & Duration: Lead Product Designer for a multi-month migration project, collaborating with engineering and product to deliver a feature-parity React Native app. Problem: The existing Flutter app limited hiring velocity and development efficiency; React Native offers a larger developer pool and faster ramp-up. Solution: Migrate Kasheesh’s mobile app to React Native while preserving all current features, introduce a new card-selection toggle to replace the star UI, update branding, and align mobile designs with the shared React design system. Outcome: Scalable foundation for future revenue features, reduced technical debt, improved engineering velocity, and a better cross-platform experience.",
      },
      {
        id: "overview",
        label: "Project Overview",
        includeInNav: true,
        body:
          "Product: Kasheesh mobile app migration to React Native (Phase 1). Role: Lead Product Designer — responsible for aligning design goals with engineering constraints, updating UI patterns, and ensuring parity with the current Flutter app. Team: Product manager, two mobile engineers, a QA lead, and a brand designer. Timeline: Development from early January to early February, followed by UAT and rework until mid-February, timed with App Store approvals. Methods: Cross-functional workshops, design audits, component mapping, Figma prototypes, QA collaboration, and user acceptance testing.",
      },
      {
        id: "problem",
        label: "Problem/Context",
        includeInNav: true,
        body:
          "Kasheesh’s mobile app was built in Flutter, which limited hiring velocity and platform interoperability. React Native offers a mature ecosystem with a larger developer base and faster onboarding. React developers can get productive quickly, and an existing web team can share components and logic across platforms. Aligning with React Native reduces long-term technical debt and facilitates integration with React-based web systems.",
      },
      {
        id: "solution",
        label: "Design/Solution",
        includeInNav: true,
        body:
          "Discovery: mapped every Flutter screen and identified platform-specific behaviors. Stakeholder interviews confirmed the star-based card selection UI was confusing; a toggle would be clearer and align with web patterns. Ideation & Prototyping: catalogued Flutter components and mapped them to React Native equivalents, designed a card toggle control, updated colors/typography/spacing, ensured feature parity across critical flows, and prototyped in Figma. Implementation & Testing: partnered with engineers to reuse APIs and match Flutter performance, delivered via Figma and Storybook, and validated through QA and UAT.",
      },
      {
        id: "impact",
        label: "Impact/Learnings",
        includeInNav: true,
        body:
          "Feature Parity: 100% of legacy features work as expected. Stability: critical flows exhibit <1% error rate post-launch. Engineering Velocity: future features ship more quickly due to easier hiring and component reuse. Lessons learned: framework choice matters, parity plus subtle enhancements reduced risk, and early component mapping + close QA collaboration minimized regressions.",
      },
    ],
  },
  {
    slug: "risk-flags",
    title: "High-Risk Account Flags",
    year: "2024",
    type: "Service",
    tags: ["service"],
    images: [
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e0e0e0'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3ERisk 01%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23f0f0f0'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3ERisk 02%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23dcdcdc'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3ERisk 03%3C/text%3E%3C/svg%3E",
    ],
    tldr: {
      heading: "High-Risk Account Flags (20-second TLDR)",
      bullets: [
        "Role & Duration: Lead Product Designer for an internal risk tooling initiative focused on compliance and fraud prevention.",
        "Problem: Repeat bad actors and chargeback abuse required consistent, auditable risk controls.",
        "Solution: Account-level flags, onboarding blocks, automated warnings, and admin tools for visibility.",
        "Outcome: Stronger fraud posture, clearer audit trails, and safer waitlist lift.",
      ],
    },
    sections: [
      {
        id: "tldr",
        label: "TLDR",
        includeInNav: true,
        body:
          "Role & Duration: Lead Product Designer for an internal risk tooling initiative focused on compliance and fraud prevention. Problem: Repeat bad actors and chargeback abuse required consistent, auditable risk controls. Solution: Account-level flags, onboarding blocks, automated warnings, and admin tools for visibility. Outcome: Stronger fraud posture, clearer audit trails, and safer waitlist lift.",
      },
      {
        id: "overview",
        label: "Project Overview",
        includeInNav: true,
        body:
          "Product: Kasheesh risk flagging (Phase 1). Role: Lead Product Designer — define admin flows, inline onboarding messaging, and notification patterns. Team: Risk Ops, CS, compliance, engineering. Timeline: Multi-sprint rollout with audit checkpoints.",
      },
      {
        id: "problem",
        label: "Problem/Context",
        includeInNav: true,
        body:
          "Kasheesh needed a scalable way to identify repeat bad actors at onboarding, monitor existing users for MS or chargeback abuse, and automate warnings while maintaining an audit-ready history.",
      },
      {
        id: "solution",
        label: "Design/Solution",
        includeInNav: true,
        body:
          "Flag taxonomy, onboarding blocks, admin history views, and automated communications tied to flag state. Clear, customer-friendly messaging with audit-ready logs.",
      },
      {
        id: "impact",
        label: "Impact/Learnings",
        includeInNav: true,
        body:
          "Reduced fraud exposure, improved CS response time, and created a repeatable risk control framework for future compliance requirements.",
      },
    ],
  },
  {
    slug: "lumen-health",
    title: "Lumen Health",
    year: "2025",
    type: "Application",
    tags: ["app", "service"],
    images: [
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23d9d9d9'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3ELumen 01%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e2e2e2'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3ELumen 02%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23ededed'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3ELumen 03%3C/text%3E%3C/svg%3E",
    ],
    tldr: {
      heading: "Lumen Health (20-second TLDR)",
      bullets: [
        "Role & Duration: Lead Product Designer on a chronic-care platform refresh.",
        "Problem: Fragmented care journeys led to drop-off and low activation.",
        "Solution: Simplified onboarding, clearer tracking flows, and unified UI.",
        "Outcome: Improved activation and better long-term engagement signals.",
      ],
    },
    sections: [
      {
        id: "tldr",
        label: "TLDR",
        includeInNav: true,
        body:
          "Lead Product Designer on a chronic-care platform refresh. Simplified onboarding, clearer tracking flows, and unified UI to improve activation and engagement.",
      },
      {
        id: "overview",
        label: "Project Overview",
        includeInNav: true,
        body:
          "Product: Lumen Health. Scope: onboarding + tracking flows. Team: product, engineering, research. Timeline: multi-sprint release.",
      },
      {
        id: "problem",
        label: "Problem/Context",
        includeInNav: true,
        body:
          "Patients struggled to understand next steps and missed critical tracking actions.",
      },
      {
        id: "solution",
        label: "Design/Solution",
        includeInNav: true,
        body:
          "Streamlined tasks, clarified progress states, and aligned UI to a single system.",
      },
      {
        id: "impact",
        label: "Impact/Learnings",
        includeInNav: true,
        body:
          "Higher activation and clearer handoffs; learned that small UI changes can significantly reduce drop-off.",
      },
    ],
  },
  {
    slug: "atelier-commerce",
    title: "Atelier Commerce",
    year: "2024",
    type: "Website",
    tags: ["website"],
    images: [
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e0e0e0'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EAtelier 01%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23f0f0f0'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EAtelier 02%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23dcdcdc'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EAtelier 03%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e8e8e8'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EAtelier 04%3C/text%3E%3C/svg%3E",
    ],
    tldr: {
      heading: "Atelier Commerce (20-second TLDR)",
      bullets: [
        "Role & Duration: Lead Product Designer for an editorial commerce platform.",
        "Problem: High-intent sessions were not converting consistently.",
        "Solution: Reframed narrative flows and optimized product discovery.",
        "Outcome: Improved conversion and stronger brand perception.",
      ],
    },
    sections: [
      {
        id: "tldr",
        label: "TLDR",
        includeInNav: true,
        body:
          "Led design for an editorial commerce platform to improve discovery and conversion while maintaining premium brand tone.",
      },
      {
        id: "overview",
        label: "Project Overview",
        includeInNav: true,
        body:
          "Product: Atelier Commerce. Scope: storytelling + product discovery. Team: product, brand, engineering.",
      },
      {
        id: "problem",
        label: "Problem/Context",
        includeInNav: true,
        body:
          "High-intent users were not finding the right products quickly enough.",
      },
      {
        id: "solution",
        label: "Design/Solution",
        includeInNav: true,
        body:
          "Structured editorial flows, improved filters, and refined product cards.",
      },
      {
        id: "impact",
        label: "Impact/Learnings",
        includeInNav: true,
        body:
          "Better conversion with a clearer narrative-to-product transition.",
      },
    ],
  },
  {
    slug: "flowcase",
    title: "Flowcase",
    year: "2024",
    type: "Prototype",
    tags: ["prototype", "app"],
    images: [
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e4e4e4'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EFlowcase 01%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23efefef'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EFlowcase 02%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23dadada'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EFlowcase 03%3C/text%3E%3C/svg%3E",
    ],
    tldr: {
      heading: "Flowcase (20-second TLDR)",
      bullets: [
        "Role & Duration: Concept design lead for collaboration tooling.",
        "Problem: Distributed teams lacked a shared space for async decisions.",
        "Solution: Prototype workflows for handoffs and feedback loops.",
        "Outcome: Validated concept with multi-team pilots.",
      ],
    },
    sections: [
      {
        id: "tldr",
        label: "TLDR",
        includeInNav: true,
        body:
          "Concept design for a collaboration space to support async decisions and handoffs.",
      },
      {
        id: "overview",
        label: "Project Overview",
        includeInNav: true,
        body:
          "Product: Flowcase. Scope: collaboration workflows and prototypes.",
      },
      {
        id: "problem",
        label: "Problem/Context",
        includeInNav: true,
        body:
          "Teams struggled to track decisions across time zones and tools.",
      },
      {
        id: "solution",
        label: "Design/Solution",
        includeInNav: true,
        body:
          "Designed decision logs, feedback threads, and async approvals.",
      },
      {
        id: "impact",
        label: "Impact/Learnings",
        includeInNav: true,
        body:
          "Validated concept across multiple teams; improved handoff clarity.",
      },
    ],
  },
  {
    slug: "rivet-finance",
    title: "Rivet Finance",
    year: "2023",
    type: "Service",
    tags: ["service"],
    images: [
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e3e3e3'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3ERivet 01%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23f2f2f2'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3ERivet 02%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23d7d7d7'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3ERivet 03%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e9e9e9'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3ERivet 04%3C/text%3E%3C/svg%3E",
    ],
    tldr: {
      heading: "Rivet Finance (20-second TLDR)",
      bullets: [
        "Role & Duration: Service blueprinting and workflow redesign.",
        "Problem: Reporting cycles were slow and hard to interpret.",
        "Solution: Real-time reporting flows and clearer dashboards.",
        "Outcome: Faster decisions and reduced reporting overhead.",
      ],
    },
    sections: [
      {
        id: "tldr",
        label: "TLDR",
        includeInNav: true,
        body:
          "Redesigned reporting workflows for faster decision-making and clearer insights.",
      },
      {
        id: "overview",
        label: "Project Overview",
        includeInNav: true,
        body:
          "Product: Rivet Finance. Scope: service blueprint + reporting UI.",
      },
      {
        id: "problem",
        label: "Problem/Context",
        includeInNav: true,
        body:
          "Weekly reporting cycles delayed operational decisions.",
      },
      {
        id: "solution",
        label: "Design/Solution",
        includeInNav: true,
        body:
          "Introduced real-time reporting views and simplified summaries.",
      },
      {
        id: "impact",
        label: "Impact/Learnings",
        includeInNav: true,
        body:
          "Shorter reporting cycles and better operational visibility.",
      },
    ],
  },
  {
    slug: "aurora-os",
    title: "Aurora OS",
    year: "2023",
    type: "Application",
    tags: ["app"],
    images: [
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23dbdbdb'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EAurora 01%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23eeeeee'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EAurora 02%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540' fill='%23dcdcdc'%3E%3Crect width='960' height='540'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EAurora 03%3C/text%3E%3C/svg%3E",
    ],
    tldr: {
      heading: "Aurora OS (20-second TLDR)",
      bullets: [
        "Role & Duration: Interaction model owner for connected home platform.",
        "Problem: Product line was fragmented across devices.",
        "Solution: Unified control layer and accessibility standards.",
        "Outcome: Consistent experience across the ecosystem.",
      ],
    },
    sections: [
      {
        id: "tldr",
        label: "TLDR",
        includeInNav: true,
        body:
          "Unified control layer for a connected home platform with accessibility-first patterns.",
      },
      {
        id: "overview",
        label: "Project Overview",
        includeInNav: true,
        body:
          "Product: Aurora OS. Scope: interaction model and UI standards.",
      },
      {
        id: "problem",
        label: "Problem/Context",
        includeInNav: true,
        body:
          "Device experiences were inconsistent across the product line.",
      },
      {
        id: "solution",
        label: "Design/Solution",
        includeInNav: true,
        body:
          "Defined shared navigation patterns, device states, and controls.",
      },
      {
        id: "impact",
        label: "Impact/Learnings",
        includeInNav: true,
        body:
          "Improved cross-device usability and clearer system behavior.",
      },
    ],
  },
  {
    slug: "echo-studio",
    title: "Echo Studio",
    year: "2022",
    type: "Website",
    tags: ["website", "prototype"],
    images: [
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e1e1e1'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EEcho 01%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23f0f0f0'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EEcho 02%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23d6d6d6'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EEcho 03%3C/text%3E%3C/svg%3E",
    ],
    tldr: {
      heading: "Echo Studio (20-second TLDR)",
      bullets: [
        "Role & Duration: UI/UX lead for a creative studio toolkit.",
        "Problem: Studios lacked a flexible portfolio platform.",
        "Solution: Modular layouts and fast publishing flows.",
        "Outcome: Increased inbound leads and visibility.",
      ],
    },
    sections: [
      {
        id: "tldr",
        label: "TLDR",
        includeInNav: true,
        body:
          "Designed a modular portfolio toolkit to help studios publish faster and look more polished.",
      },
      {
        id: "overview",
        label: "Project Overview",
        includeInNav: true,
        body:
          "Product: Echo Studio. Scope: responsive UI and publishing flows.",
      },
      {
        id: "problem",
        label: "Problem/Context",
        includeInNav: true,
        body:
          "Studios needed faster, more flexible publishing tools.",
      },
      {
        id: "solution",
        label: "Design/Solution",
        includeInNav: true,
        body:
          "Built modular templates, simple upload flows, and clear hierarchy.",
      },
      {
        id: "impact",
        label: "Impact/Learnings",
        includeInNav: true,
        body:
          "Higher inbound interest and stronger studio presentation.",
      },
    ],
  },
  {
    slug: "kite-labs",
    title: "Kite Labs",
    year: "2022",
    type: "Service",
    tags: ["service", "app"],
    images: [
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23dedede'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EKite 01%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23eeeeee'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EKite 02%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e4e4e4'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EKite 03%3C/text%3E%3C/svg%3E",
    ],
    tldr: {
      heading: "Kite Labs (20-second TLDR)",
      bullets: [
        "Role & Duration: UX lead for industrial analytics workflows.",
        "Problem: Operators struggled with data-heavy interfaces.",
        "Solution: Simplified decision flows and visual summaries.",
        "Outcome: Faster decisions and fewer errors.",
      ],
    },
    sections: [
      {
        id: "tldr",
        label: "TLDR",
        includeInNav: true,
        body:
          "Redesigned industrial analytics to simplify decisions and reduce errors.",
      },
      {
        id: "overview",
        label: "Project Overview",
        includeInNav: true,
        body:
          "Product: Kite Labs. Scope: workflow redesign and UI system.",
      },
      {
        id: "problem",
        label: "Problem/Context",
        includeInNav: true,
        body:
          "Data-heavy interfaces slowed decision-making on the floor.",
      },
      {
        id: "solution",
        label: "Design/Solution",
        includeInNav: true,
        body:
          "Introduced clearer summaries, progressive disclosure, and alerts.",
      },
      {
        id: "impact",
        label: "Impact/Learnings",
        includeInNav: true,
        body:
          "Reduced decision time and improved operator confidence.",
      },
    ],
  },
  {
    slug: "atlas-mobility",
    title: "Atlas Mobility",
    year: "2021",
    type: "Prototype",
    tags: ["prototype"],
    images: [
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23e3e3e3'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EAtlas 01%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23f2f2f2'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EAtlas 02%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23d7d7d7'/%3E%3Ctext x='48' y='80' font-family='Helvetica Neue, Arial, sans-serif' font-size='28' fill='%23111111'%3EAtlas 03%3C/text%3E%3C/svg%3E",
    ],
    tldr: {
      heading: "Atlas Mobility (20-second TLDR)",
      bullets: [
        "Role & Duration: Concept designer for shared mobility experience.",
        "Problem: Fleet users struggled with fragmented booking flows.",
        "Solution: Unified booking and ride management system.",
        "Outcome: Cleaner experience across pilots.",
      ],
    },
    sections: [
      {
        id: "tldr",
        label: "TLDR",
        includeInNav: true,
        body:
          "Unified booking flows for a shared mobility fleet to reduce user friction.",
      },
      {
        id: "overview",
        label: "Project Overview",
        includeInNav: true,
        body:
          "Product: Atlas Mobility. Scope: booking and ride management UX.",
      },
      {
        id: "problem",
        label: "Problem/Context",
        includeInNav: true,
        body:
          "Users faced inconsistent booking and ride management steps.",
      },
      {
        id: "solution",
        label: "Design/Solution",
        includeInNav: true,
        body:
          "Simplified booking, mapped ride states, and improved clarity.",
      },
      {
        id: "impact",
        label: "Impact/Learnings",
        includeInNav: true,
        body:
          "More consistent pilot experience and clearer ride status.",
      },
    ],
  }
];
