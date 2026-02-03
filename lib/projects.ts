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
      slug: "elevance-healthcare-claims",
      title: "Healthcare Member & Claims Management Platform",
      company: "Elevance Health",
      role: "Senior Software Developer",
      dates: "May 2024 – Present",
      domain: "Healthcare (HIPAA-aligned)",
      oneLiner:
        "Led development of a secure member & claims platform: Spring Boot REST APIs + role-based React UI, deployed on AWS with event-driven workflows and strong security controls.",
      stack: [
        "Java 17",
        "Spring Boot 3.2",
        "Spring Security (OAuth2/JWT/RBAC)",
        "Hibernate/JPA",
        "React 18",
        "TypeScript 5",
        "Kafka",
        "ActiveMQ",
        "RabbitMQ",
        "AWS EC2",
        "AWS RDS (Aurora)",
        "AWS S3",
        "AWS SQS/SNS",
        "CloudWatch",
        "Docker",
        "Jenkins",
        "SonarQube",
      ],
      problem: [
        "Build a secure, compliant platform for member enrollment, eligibility verification, and claims workflows.",
        "Support high-volume transactional workloads with traceability and audit logging.",
        "Provide fast, accessible UI experiences for member/provider/admin roles with strict access control.",
      ],
      solution: [
        "Designed and developed RESTful APIs (Spring Boot + OpenAPI) for enrollment, claims submission/adjudication, and provider data.",
        "Built a role-based React single-page application with routing, state management, form validation, and accessibility-friendly components.",
        "Implemented event-driven workflows using Kafka/ActiveMQ/RabbitMQ for claims lifecycle events, eligibility updates, and notifications.",
      ],
      architecture: [
        "React SPA → secured Spring Boot microservices (OAuth2/JWT + RBAC).",
        "RDS (Aurora/MySQL/PostgreSQL) for encrypted relational data; S3 for documents and audit artifacts with lifecycle policies.",
        "SQS/SNS (and EventBridge where needed) for reliable async workflows; CloudWatch for monitoring and alerting; Jenkins + SonarQube for CI quality gates.",
      ],
      architectureDiagram: `
  [ React Portal (Member/Provider/Admin) ]
                  |
                  v
       [ Spring Boot APIs (RBAC) ]
                  |
     --------------------------------
     |              |               |
     v              v               v
  [ RDS Aurora ]  [ Kafka/MQ ]   [ S3 (Docs/Audit) ]
     |              |
     v              v
  [ Claims DB ]  [ Event Workers / Batch Jobs ]
                  |
                  v
       [ CloudWatch Logs / Alarms ]
  `,
      contributions: [
        "Implemented secure API endpoint access controls and standardized exception handling + validation.",
        "Integrated frontend workflows: enrollment, claims status, eligibility verification, and provider search with real-time updates (Axios/Fetch).",
        "Built batch jobs for reconciliation, reporting, and regulatory submissions; added JUnit/Mockito tests for critical logic.",
        "Automated deployments with Docker + Jenkins and enforced SonarQube gates for coverage, maintainability, and vulnerabilities.",
      ],
      securityQuality: [
        "OAuth2 + JWT authentication; RBAC authorization across member/provider/admin roles.",
        "Encryption in transit and at rest; secure S3 storage with policies and lifecycle rules.",
        "Audit logging for traceability; CI/CD quality checks via SonarQube; unit tests (JUnit/Mockito).",
      ],
      impact: [
        "Improved reliability of claims lifecycle processing using event-driven workflows.",
        "Enhanced compliance posture with audit logging and consistent security enforcement.",
        "Reduced deployment risk through automated CI/CD pipelines and quality gates.",
      ],
    },
  
    {
      slug: "wabtec-railway-asset-management",
      title: "Railway Operations & Asset Management Platform",
      company: "Wabtec",
      role: "Software Engineer",
      dates: "Nov 2021 – Dec 2023",
      domain: "Real-time Operations / Asset Monitoring",
      oneLiner:
        "Built real-time dashboards and backend services to track locomotive health, operational events, and maintenance data across regions with event-driven alerting.",
      stack: [
        "Java 8",
        "Spring Framework 5.2",
        "Spring MVC",
        "Spring Security",
        "J2EE",
        "Hibernate",
        "React 16",
        "AngularJS 1.8",
        "Kafka",
        "ActiveMQ",
        "AWS EC2",
        "AWS S3",
        "Jenkins",
        "SonarQube",
        "MySQL",
      ],
      problem: [
        "Enable teams to monitor locomotive health and operational events in real time.",
        "Support detailed historical analysis by region/time period for performance and maintenance planning.",
        "Maintain reliability for mission-critical workflows and operational alerts.",
      ],
      solution: [
        "Developed interactive dashboards using React and AngularJS for monitoring, alert management, and maintenance workflows.",
        "Built Java/Spring/J2EE backend services and REST APIs to expose operational and asset data to UI and reporting modules.",
        "Implemented event-driven alert processing with Kafka and ActiveMQ to handle operational updates and notifications.",
      ],
      architecture: [
        "React/AngularJS dashboards consuming REST APIs and event updates.",
        "Backend services processing events and persisting operational data via Hibernate/JDBC.",
        "AWS hosting for services + storage; Jenkins pipelines with SonarQube analysis and monitoring/logging for operational support.",
      ],
      architectureDiagram: `
  [ React + AngularJS Dashboards ]
                |
                v
          [ Spring APIs ]
                |
     -------------------------
     |                       |
     v                       v
  [ MySQL ]           [ Kafka / ActiveMQ ]
                            |
                            v
                   [ Alert/Event Processor ]
  `,
      contributions: [
        "Built responsive UI dashboards with async updates (AJAX/JSON) to keep monitoring views fast.",
        "Developed backend services + REST APIs for asset status, operational metrics, and reporting.",
        "Added validation, exception handling, and logging for data integrity and stability.",
        "Integrated SonarQube into CI/CD to detect issues early and enforce coding standards.",
      ],
      securityQuality: [
        "Static analysis and code quality enforcement via SonarQube.",
        "AWS IAM permissions management for secure access to cloud resources.",
        "Operational monitoring/logging to support incident response and stability.",
      ],
      impact: [
        "Enabled real-time visibility into asset health and maintenance activities.",
        "Improved responsiveness and usability of dashboards for control-room and field users.",
        "Improved release quality through automated pipelines and early defect detection.",
      ],
    },
  
    {
      slug: "heartland-digital-banking",
      title: "Digital Banking Platform (Onboarding + Accounts + Transactions)",
      company: "Heartland Financial USA",
      role: "Software Developer",
      dates: "Jan 2020 – Oct 2022",
      domain: "Banking / Customer Platforms",
      oneLiner:
        "Built a customer-facing digital banking platform with React + Spring Boot, including secure onboarding, profile management, and transaction visibility on AWS.",
      stack: [
        "Java 8",
        "Spring Boot 2.3",
        "Spring Security (JWT/RBAC)",
        "Hibernate/JPA",
        "React 16",
        "Redux 4",
        "JavaScript",
        "Kafka/ActiveMQ",
        "PostgreSQL 12",
        "Oracle 19c",
        "AWS EC2",
        "AWS RDS",
        "AWS S3",
        "Jenkins",
        "GitHub Actions",
        "CloudWatch",
      ],
      problem: [
        "Provide a secure and user-friendly online banking experience: onboarding, profile, accounts, and transactions.",
        "Keep UI fast and consistent while syncing data across multiple modules.",
        "Support scalable cloud deployments with secure data/document storage.",
      ],
      solution: [
        "Built React SPA with Redux store, routing, and reusable UI components for consistent UX.",
        "Developed Spring Boot REST APIs for onboarding and account management; secured endpoints with JWT + RBAC.",
        "Deployed services on AWS EC2; used RDS for relational data and S3 for assets/documents; monitored with CloudWatch.",
      ],
      architecture: [
        "React + Redux SPA consuming Spring Boot REST services.",
        "Relational databases (PostgreSQL/Oracle) persisted via Hibernate/JPA/JDBC; optional async workflows via Kafka/ActiveMQ.",
        "CI/CD via Jenkins/GitHub Actions; production monitoring with CloudWatch logs/alarms.",
      ],
      architectureDiagram: `
  [ React SPA (Redux) ]
          |
          v
  [ Spring Boot REST APIs ]
          |
     --------------
     |            |
     v            v
  [ RDS ]       [ S3 ]
  (PG/Oracle)  (docs/assets)
  `,
      contributions: [
        "Integrated REST APIs with Axios/Fetch to keep pages dynamic and responsive.",
        "Implemented secure access controls (JWT + RBAC) for sensitive banking endpoints.",
        "Added scheduled jobs (Spring Scheduler) for automated tasks and periodic processing.",
        "Developed JUnit/Mockito tests to validate business logic and ensure stability.",
      ],
      securityQuality: [
        "JWT authentication and RBAC authorization for secure banking APIs.",
        "Secure storage patterns for documents/assets in S3.",
        "Unit testing and deployment automation for stability and release confidence.",
      ],
      impact: [
        "Delivered a summarized and trackable digital banking experience for customers.",
        "Improved data consistency across modules using Redux centralized state.",
        "Improved stability through tests, scheduling automation, and monitoring.",
      ],
    },
  
    {
      slug: "wns-travel-operations",
      title: "Travel Operations & Disruption Management Platform",
      company: "WNS Global (India)",
      role: "Software Developer",
      dates: "Apr 2018 – Dec 2019",
      domain: "Travel / Booking & Rebooking",
      oneLiner:
        "Built an external-facing travel operations platform for booking, cancellations, and disruption handling with Angular + Spring Boot on AWS, using event-driven workflows for SLAs.",
      stack: [
        "Java 8",
        "Spring Boot 2.0",
        "Spring MVC",
        "Spring Security (JWT/RBAC)",
        "Hibernate",
        "Angular 6",
        "TypeScript",
        "Bootstrap",
        "Kafka/ActiveMQ",
        "AWS EC2",
        "AWS RDS (MySQL)",
        "AWS S3",
        "Docker",
        "Jenkins",
        "Git",
        "JIRA",
        "CloudWatch",
      ],
      problem: [
        "Support booking, cancellations, and rebooking during real-time travel disruptions.",
        "Automatically determine rebooking options, refunds, and SLA timelines.",
        "Provide traceable dashboards for customers and agents with role-based access.",
      ],
      solution: [
        "Built Angular modules with multi-step forms, validations, dashboards, and routing for booking/disruption flows.",
        "Developed Spring Boot REST APIs for booking workflows, disruption handling, and refund processing.",
        "Implemented async event processing (Kafka/ActiveMQ) and scheduled jobs to monitor SLAs and trigger alerts.",
      ],
      architecture: [
        "Angular SPA consuming secured Spring Boot APIs (JWT + RBAC).",
        "RDS for bookings/passengers/transactions; S3 for logs/reports/assets; EC2 for app hosting; Docker for consistency.",
        "CloudWatch monitoring + Jenkins CI/CD + Git/JIRA for delivery and ops support.",
      ],
      architectureDiagram: `
  [ Angular SPA ]
       |
       v
  [ Spring Boot APIs ]
       |
    -----------
    |         |
    v         v
  [ RDS ]   [ Kafka/MQ ] ---> [ SLA Monitor Jobs ]
  (MySQL)       |
                v
            [ Alerts / Dashboards ]
  `,
      contributions: [
        "Designed Angular booking/rebooking modules with validations and role-based views.",
        "Implemented backend controllers/services with secure endpoint access (JWT/RBAC).",
        "Built async workflows for disruption events and SLA monitoring with scheduled jobs.",
        "Supported production deployments and incident resolution with CloudWatch monitoring.",
      ],
      securityQuality: [
        "JWT-based authentication and RBAC authorization for protected workflows.",
        "Dockerized services for consistent deployments; CI/CD automation via Jenkins.",
        "Monitoring and alerts via CloudWatch for operational stability.",
      ],
      impact: [
        "Improved disruption handling and visibility through dashboards and SLA automation.",
        "Reduced manual intervention by automating event-driven rebooking/refund workflows.",
        "Improved operational stability through monitoring, CI/CD, and standardized deployments.",
      ],
    },
  ];
  