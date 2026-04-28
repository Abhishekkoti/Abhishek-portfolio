export type CaseStudy = {
  slug: string;
  title: string;
  company: string;
  role: string;
  dates: string;
  domain: string;
  oneLiner: string;
  stack: string[];
  problem: string[];
  solution: string[];
  architecture: string[];
  architectureDiagram: string;
  contributions: string[];
  securityQuality: string[];
  impact: string[];
};

export const projects: CaseStudy[] = [
  {
    slug: "elevance-healthcare-ux-platform",
    title: "Developer Experience & Workflow Platform",
    company: "Elevance Health",
    role: "Senior UI/UX Engineer",
    dates: "May 2024 – Present",
    domain: "Healthcare / Developer Platforms",

    oneLiner:
      "Designed and developed a developer-focused UI platform to streamline workflows such as code reviews, CI/CD visibility, and repository navigation using React and TypeScript with strong focus on UX and performance.",

    stack: [
      "React 18/19",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Figma",
      "Design Systems",
      "WebSockets",
      "SSE",
      "AWS",
      "Jenkins",
    ],

    problem: [
      "Complex developer workflows created friction and slowed onboarding.",
      "Users struggled with navigating large-scale systems and workflow states.",
      "UI lacked clarity, scalability, and performance for enterprise use.",
    ],

    solution: [
      "Designed intuitive UX workflows for developer portals and workflow systems.",
      "Built scalable component-driven UI using React and TypeScript.",
      "Improved usability with structured navigation and design system patterns.",
    ],

    architecture: [
      "Component-based React architecture with reusable UI patterns.",
      "State management using Redux Toolkit and React Query.",
      "Performance optimization using memoization, lazy loading, and code splitting.",
    ],

    architectureDiagram: `
[ UI Components ]
       |
       v
[ State Management (Redux / Query) ]
       |
       v
[ APIs / Data Layer ]
`,

    contributions: [
      "Designed UX workflows improving developer onboarding experience.",
      "Built reusable UI components and optimized performance.",
      "Translated Figma designs into responsive, scalable UI.",
      "Explored AI-assisted UI patterns and copilot-style interactions.",
    ],

    securityQuality: [
      "Improved UI performance with optimized rendering techniques.",
      "Enhanced usability and accessibility across workflows.",
      "Maintained code quality through testing and CI/CD pipelines.",
    ],

    impact: [
      "Reduced onboarding friction for developers.",
      "Improved usability across complex workflows.",
      "Enhanced performance for large-scale enterprise applications.",
    ],
  },

  {
    slug: "wabtec-realtime-dashboard",
    title: "Real-Time Telemetry Dashboard",
    company: "Wabtec",
    role: "Software Engineer",
    dates: "Nov 2021 – Dec 2023",
    domain: "Real-Time Monitoring",

    oneLiner:
      "Designed real-time dashboards for monitoring locomotive health data, focusing on intuitive UX and high-performance rendering of streaming data.",

    stack: [
      "React",
      "Redux Toolkit",
      "JavaScript",
      "WebSockets",
      "AWS",
      "Jenkins",
    ],

    problem: [
      "Operations teams needed real-time visibility into system data.",
      "Existing dashboards were slow and difficult to interpret.",
      "Handling high-frequency data without UI lag was challenging.",
    ],

    solution: [
      "Designed user-centric dashboards for real-time monitoring.",
      "Implemented optimized UI updates for streaming data.",
      "Added interactive filters and drill-down views.",
    ],

    architecture: [
      "React-based UI optimized for real-time rendering.",
      "Efficient state handling for streaming data.",
      "Performance optimization to reduce re-renders.",
    ],

    architectureDiagram: `
[ Streaming Data ]
       |
       v
[ React Dashboard ]
       |
       v
[ UI Components / Charts ]
`,

    contributions: [
      "Built real-time dashboards with optimized UI rendering.",
      "Designed UX workflows for operations teams.",
      "Created reusable visualization components.",
    ],

    securityQuality: [
      "Improved UI responsiveness and performance.",
      "Maintained stability under high-frequency updates.",
      "Ensured consistent UI behavior across devices.",
    ],

    impact: [
      "Enabled faster decision-making for operations teams.",
      "Improved usability of real-time monitoring systems.",
      "Enhanced performance for high-frequency data updates.",
    ],
  },

  {
    slug: "banking-ux-platform",
    title: "Digital Banking User Experience Platform",
    company: "Heartland Financial USA",
    role: "Software Developer",
    dates: "Jan 2020 – Oct 2022",
    domain: "Banking / Customer Experience",

    oneLiner:
      "Designed and developed a user-friendly digital banking platform focusing on onboarding, transactions, and intuitive UI workflows.",

    stack: [
      "React",
      "Redux",
      "JavaScript",
      "HTML/CSS",
      "AWS",
      "Jenkins",
    ],

    problem: [
      "Users faced difficulty navigating complex banking workflows.",
      "Onboarding and transactions were not intuitive.",
      "UI lacked consistency across features.",
    ],

    solution: [
      "Designed multi-step onboarding flows with validations.",
      "Built reusable UI components for transactions and accounts.",
      "Improved UX by simplifying financial workflows.",
    ],

    architecture: [
      "Component-based UI architecture using React.",
      "Centralized state management using Redux.",
      "Responsive design for cross-device compatibility.",
    ],

    architectureDiagram: `
[ UI Screens ]
     |
     v
[ React Components ]
     |
     v
[ State Management ]
`,

    contributions: [
      "Designed intuitive onboarding and transaction flows.",
      "Improved usability through better UI patterns.",
      "Optimized user experience for frequent updates.",
    ],

    securityQuality: [
      "Improved UI stability and consistency.",
      "Enhanced form validations and error handling.",
      "Ensured responsive and accessible design.",
    ],

    impact: [
      "Improved customer onboarding experience.",
      "Reduced user errors in transactions.",
      "Enhanced overall user satisfaction.",
    ],
  },

  {
    slug: "travel-booking-ux",
    title: "Travel Booking & Disruption UX Platform",
    company: "WNS Global",
    role: "Software Developer",
    dates: "Apr 2018 – Dec 2019",
    domain: "Travel / Booking Experience",

    oneLiner:
      "Designed booking and rebooking experiences with focus on user workflows, dynamic UI behavior, and real-time updates.",

    stack: [
      "React",
      "JavaScript",
      "HTML/CSS",
      "Bootstrap",
      "AWS",
    ],

    problem: [
      "Users needed seamless booking and rebooking during disruptions.",
      "Complex workflows caused confusion and delays.",
      "UI needed to handle dynamic travel scenarios.",
    ],

    solution: [
      "Built multi-step booking interfaces with dynamic flows.",
      "Designed conditional UI for rebooking and refunds.",
      "Improved navigation and user feedback mechanisms.",
    ],

    architecture: [
      "Component-driven UI with dynamic rendering.",
      "State-based UI updates for workflow transitions.",
      "Responsive design for different devices.",
    ],

    architectureDiagram: `
[ Booking Flow ]
     |
     v
[ UI Components ]
     |
     v
[ Dynamic Rendering ]
`,

    contributions: [
      "Developed booking and rebooking UI workflows.",
      "Improved navigation and routing experience.",
      "Handled dynamic UI updates for travel scenarios.",
    ],

    securityQuality: [
      "Ensured stable UI behavior under dynamic conditions.",
      "Improved error handling and user feedback.",
      "Maintained consistent UI across modules.",
    ],

    impact: [
      "Improved booking experience during disruptions.",
      "Reduced confusion in complex workflows.",
      "Enhanced overall usability.",
    ],
  },
];