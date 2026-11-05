/*
 * PORTFOLIO CONTENT — the only file you need to edit for day-to-day updates.
 *
 * - Add a project:      copy an object in `projects`, give it a unique `id`.
 * - Add a role:         add an object to `roles` (list its projects in `projects`).
 * - Change the stats:   edit `stats`.
 * - Hide a field:       leave it empty ("" or []) and it will not render.
 *
 * Client names are deliberately NOT used anywhere. Describe clients by sector.
 * Tags and skills must match the labels defined in `tags` and `skillGroups`.
 */
window.PORTFOLIO = {
  meta: {
    title: "Louis Connor | Senior IT Project Manager, Enterprise AI Adoption",
    description:
      "Senior IT Project Manager delivering enterprise Microsoft Copilot, Power Platform and AI adoption programmes. Case studies, delivery approach and experience."
  },

  profile: {
    name: "Louis Connor",
    title: "Senior IT Project Manager",
    subtitle: "Enterprise AI adoption and Power Platform delivery",
    location: "London / Manchester, UK",
    tagline:
      "I deliver enterprise AI adoption and Power Platform programmes end to end, from presales requirements through UAT, launch and user adoption.",
    email: "louismcleodconnor@gmail.com",
    linkedin: "https://www.linkedin.com/in/louismcleodconnor",
    cv: "assets/Louis-Connor-CV.pdf",
    availability: "" // e.g. "Available from January 2027". Leave empty to hide.
  },

  quickFacts: [
    ["Focus", "Enterprise Copilot adoption, AI agents, Power Platform delivery"],
    ["Methods", "PRINCE2 Practitioner, Certified ScrumMaster, hybrid Scrum"],
    ["Platforms", "Microsoft Copilot, Power Platform, Dataverse, SharePoint, Azure DevOps, Planner"],
    ["Scale", "Programmes of 5,000 to 10,000 users and fixed-price portfolios of £1m+"],
    ["Based", "London / Manchester, UK"]
  ],

  stats: [
    { value: 96, suffix: "%", label: "active Copilot licence usage on a 5,000-user rollout" },
    { value: 10, suffix: "+", label: "enterprise Copilot adoption programmes delivered" },
    { value: 1, prefix: "£", suffix: "m+", label: "closed client revenue contributed across 40+ projects" },
    { value: 1.4, prefix: "£", suffix: "m", decimals: 1, label: "fixed-price Power Platform portfolio governed" }
  ],

  tags: [
    { id: "ai", label: "AI adoption", color: "blue" },
    { id: "platform", label: "Power Platform", color: "magenta" },
    { id: "commercial", label: "Commercial", color: "yellow" },
    { id: "governance", label: "Delivery governance", color: "ink" },
    { id: "founder", label: "Founder", color: "green" }
  ],

  skillGroups: [
    {
      label: "AI adoption and agents",
      skills: ["Copilot adoption", "Agentic AI enablement", "Executive enablement", "Hackathons and adoption challenges", "Multi-agent workflows"]
    },
    {
      label: "Microsoft platform",
      skills: ["Power Apps", "Dataverse", "Power Automate", "SharePoint (SPFx)", "Microsoft Planner"]
    },
    {
      label: "Delivery governance",
      skills: ["Hybrid Scrum", "Backlog and sprint management", "UAT and release readiness", "Replanning and risk", "Azure DevOps"]
    },
    {
      label: "Commercial",
      skills: ["Presales and discovery", "SOWs and estimation", "Change requests and follow-on work", "Resource forecasting", "Fixed-price governance"]
    },
    {
      label: "Founder and operations",
      skills: ["E-commerce operations", "International supply chain", "Platform migration", "P&L reporting", "Market expansion"]
    }
  ],

  approach: {
    intro:
      "The same pattern runs through every engagement. Click a stage to see what I do and where it shows up in the projects below.",
    stages: [
      {
        id: "shape",
        label: "Shape",
        headline: "Turn a business problem into scoped, sellable work.",
        summary:
          "In presales I capture requirements, write SOWs and estimate effort. Where the problem is still fuzzy I run discovery before anything is built.",
        actions: [
          "Translate business and regulatory needs into a defined scope",
          "Shape proposals and SOWs with account teams, and estimate effort",
          "Run discovery: workshops, user journey mapping and high-level design",
          "Select the delivery team to match the work"
        ],
        evidence: ["discovery-to-build", "reporting-modernisation"]
      },
      {
        id: "plan",
        label: "Plan",
        headline: "Set the governance that keeps a fixed-price engagement honest.",
        summary:
          "Plans, RAID logs, resourcing and forecasts live in one place and are kept current, so commercial position is visible to the client and to leadership.",
        actions: [
          "Build plans, RAID logs and trackers in Planner and Azure DevOps",
          "Align client sponsors, product owners, SMEs and technical resources",
          "Track bookings, forecasts and burndown against agreed delivery days"
        ],
        evidence: ["fixed-price-governance", "delivery-tooling"]
      },
      {
        id: "build",
        label: "Build",
        headline: "Deliver in two-week sprints and replan when reality changes.",
        summary:
          "I run the backlog and coordinate developers, consultants and QA. When a platform constraint appears, I rebaseline openly and keep stakeholder confidence.",
        actions: [
          "Manage the backlog and sprint cadence in Azure DevOps",
          "Coordinate developers, consultants, QA and client technical teams",
          "Replan and rebaseline when constraints surface, while protecting maintainability"
        ],
        evidence: ["reporting-modernisation", "university-web-part"]
      },
      {
        id: "validate",
        label: "Validate",
        headline: "Prove it works before launch, and support it after.",
        summary:
          "I lead UAT and client-side launch readiness, then stay through post-launch remediation until the solution is stable.",
        actions: [
          "Lead and coordinate user acceptance testing",
          "Run client-side launch readiness",
          "Own post-launch support and issue remediation"
        ],
        evidence: ["reporting-modernisation"]
      },
      {
        id: "adopt",
        label: "Adopt",
        headline: "Make sure people actually use it.",
        summary:
          "For AI programmes, adoption is the deliverable. I plan training, drop-ins and challenges around real work, enable executives, and track active usage.",
        actions: [
          "Deliver training programmes at scale across departments",
          "Run drop-ins, adoption challenges, hackathons and bootcamps",
          "Upskill executive boards and senior leaders",
          "Measure outcomes through active licence usage where telemetry allows"
        ],
        evidence: ["copilot-5000", "copilot-10000", "global-comms-ai"]
      },
      {
        id: "grow",
        label: "Grow",
        headline: "Earn the next phase.",
        summary:
          "Good delivery creates the next conversation. I identify and shape follow-on work, and I look after the relationship beyond the project.",
        actions: [
          "Identify, estimate and sell change requests and follow-on phases",
          "Take over running engagements and secure their continuation",
          "Carry a client relationship from one project into the next"
        ],
        evidence: ["reporting-modernisation", "global-comms-ai", "discovery-to-build"]
      }
    ]
  },

  projects: [
    {
      id: "copilot-5000",
      title: "5,000-user Copilot rollout",
      org: "WM Reply",
      sector: "National logistics operator",
      roleLabel: "Project Manager",
      tags: ["ai"],
      skills: ["Copilot adoption", "Executive enablement", "Hackathons and adoption challenges", "Agentic AI enablement"],
      headline: "96% active licence usage across a 5,000-user Copilot rollout.",
      metrics: [
        { value: "96%", label: "active licence usage" },
        { value: "4,000+", label: "people reached" },
        { value: "32", label: "foundational training sessions" },
        { value: "9 + 100+", label: "board members and senior leaders upskilled" }
      ],
      context:
        "A four-month, direct-client adoption engagement inside a Copilot portfolio that grew from three projects to seven in four months. The rollout covered Technology, HR, Finance and Operations.",
      did: [
        "Led a team of four Adoption and Change Consultants and one Technical Consultant",
        "Planned and delivered 32 foundational training sessions reaching 4,000+ people",
        "Ran 12 adoption challenges, three hackathons and two citizen-development bootcamps",
        "Upskilled all nine executive board members and more than 100 senior leaders",
        "Ran a Cowork trial for 125 users, monitoring usage so that credits were spent deliberately",
        "Managed client decisions on how an additional 20-day training allocation should be used"
      ],
      challenge: {
        problem: "One specialist workstream needed more support and oversight than planned.",
        response: "I raised it early, adjusted delivery oversight and protected the client outcome."
      },
      outcomes: ["Measured 96% adoption, based on active Copilot licence usage", "Continued client investment, with the portfolio growing from 3 to 7 projects"],
      scale: [
        ["Team", "4 adoption and change consultants, 1 technical consultant"],
        ["Audience", "5,000 users across multiple departments"],
        ["Duration", "4 months"]
      ],
      tools: ["Microsoft Copilot", "Cowork", "Microsoft 365"]
    },
    {
      id: "copilot-10000",
      title: "10,000-licence Copilot expansion",
      org: "WM Reply",
      sector: "Major UK financial institution",
      roleLabel: "Project Manager",
      tags: ["ai", "commercial"],
      skills: ["Copilot adoption", "Agentic AI enablement", "Change requests and follow-on work"],
      headline: "66+ training sessions across 20+ departments, delivered within client agent guardrails.",
      metrics: [
        { value: "10,000", label: "additional licences" },
        { value: "66+", label: "training sessions" },
        { value: "36+", label: "adoption drop-ins" },
        { value: "20+", label: "departments reached" }
      ],
      context:
        "A six-month, partner-funded engagement that followed a 10,000-licence Copilot uplift. The funding supported adoption, business transformation and agentic AI enablement.",
      did: [
        "Led five Adoption and Change Consultants and two Technical Consultants",
        "Delivered 66+ training sessions across 20+ departments, plus 36+ adoption drop-ins",
        "Provided guidance on agentic AI and Copilot adoption",
        "Coordinated with the client's project managers, data analysts and communications teams, and with Microsoft and other delivery partners",
        "Managed subsequent change requests after joining the engagement post-funding approval"
      ],
      challenge: {
        problem:
          "Direct usage and impact telemetry was not available to the delivery team, which made benefits harder to evidence. Agent work was also bounded by the client's governance guardrails.",
        response:
          "I focused on making the adoption proposition tangible, supported the client's decisions on where to invest effort, and worked with what users had already built in Agent Builder."
      },
      outcomes: ["Delivered the agreed engagement outputs within the client's governance boundaries"],
      scale: [
        ["Team", "5 adoption and change consultants, 2 technical consultants"],
        ["Stakeholders", "Client IT project managers, data analysts, communications, Microsoft, delivery partners"],
        ["Duration", "6 months"]
      ],
      tools: ["Microsoft Copilot", "Agent Builder", "Microsoft 365"]
    },
    {
      id: "reporting-modernisation",
      title: "Reporting modernisation on Power Apps and Dataverse",
      org: "WM Reply",
      sector: "UK insurer, 250+ agencies",
      roleLabel: "Project Delivery Manager",
      tags: ["platform", "governance", "commercial"],
      skills: ["Power Apps", "Dataverse", "Power Automate", "Hybrid Scrum", "Backlog and sprint management", "UAT and release readiness", "Replanning and risk", "Change requests and follow-on work"],
      headline: "Report generation cut from up to two hours to under five minutes, across 250+ locations.",
      metrics: [
        { value: "£250k+", label: "programme value" },
        { value: "11", label: "months" },
        { value: "250+", label: "locations" },
        { value: "<5 min", label: "per report, down from up to 2 hours" }
      ],
      context:
        "A legacy macro-based spreadsheet could occupy an agent's laptop for up to two hours while the final report generated. The replacement is a single cloud solution built as a model-driven app on Dataverse.",
      did: [
        "Coordinated a delivery ecosystem of three developers, one consultant and one QA, plus the client's SMEs, product owner, sponsor, project managers, technical and adoption resources",
        "Ran the backlog and two-week sprints in a hybrid Scrum approach",
        "Elaborated requirements and translated business and regulatory needs into the build",
        "Led UAT and client-side launch readiness, then post-launch support and remediation",
        "Identified, shaped, estimated and helped sell follow-on change requests and support work"
      ],
      challenge: {
        problem:
          "A limitation in the Word Online connector in Power Automate affected report generation. The client wanted to avoid custom development so the business-critical tool stayed stable and maintainable.",
        response:
          "I helped coordinate a pivot to Office Scripts and scalable workarounds, replanned and rebaselined delivery, and kept stakeholder confidence."
      },
      outcomes: [
        "1,000+ reports generated by users in the first week after launch",
        "Two change requests sold during the programme, with further follow-on phases opened"
      ],
      scale: [
        ["Dataverse", "63 tables, 25 custom model-driven forms, 4,696 fields"],
        ["Code", "46 JavaScript web resources, around 15,000 lines"],
        ["Output", "6,168 report variations driven by user selections"],
        ["Cadence", "Two-week sprints, hybrid Scrum"]
      ],
      tools: ["Power Apps", "Dataverse", "Power Automate", "Office Scripts", "Azure DevOps"]
    },
    {
      id: "fixed-price-governance",
      title: "£1.4m fixed-price Power Platform portfolio",
      org: "WM Reply",
      sector: "UK energy provider",
      roleLabel: "Resource and commercial lead",
      tags: ["governance", "commercial", "platform"],
      skills: ["Fixed-price governance", "Resource forecasting", "Replanning and risk"],
      headline: "Resource, forecast and commercial governance for a £1.4m fixed-price delivery portfolio.",
      metrics: [
        { value: "£1.4m", label: "portfolio investment" },
        { value: "12+", label: "months" },
        { value: "5", label: "peak team: 3 developers, 2 consultants" }
      ],
      context:
        "WM Reply supplied Power Platform developers and consultants across the client's technical solutions on fixed-cost deliveries, with the number of delivery days agreed in advance.",
      did: [
        "Managed consultant bookings and resource allocation",
        "Maintained monthly and proactive forecasts and burndown reporting",
        "Tracked commercials against the agreed fixed-cost deliveries",
        "Presented the position through monthly business reviews and reported to WM Reply leadership",
        "Worked with the client's project managers, cost management and finance teams"
      ],
      challenge: {
        problem: "Annual leave and sickness created coverage gaps, and each delivery day carried commercial weight.",
        response: "I managed the booking position proactively, identified gaps early and reallocated resource to protect the fixed-cost commitments."
      },
      outcomes: ["Commercial position stayed visible to the client and to WM Reply leadership throughout"],
      scale: [
        ["Investment", "Approximately £1.4m"],
        ["Peak team", "3 developers and 2 consultants"],
        ["Duration", "More than one year"]
      ],
      tools: ["Revenue and booking tracking", "Burndown reporting", "Power Platform"]
    },
    {
      id: "global-comms-ai",
      title: "AI transformation across Switzerland and the UK",
      org: "WM Reply",
      sector: "Multinational, Global Communications function",
      roleLabel: "Project Manager",
      tags: ["ai", "commercial"],
      skills: ["Copilot adoption", "Agentic AI enablement", "Hackathons and adoption challenges", "Change requests and follow-on work"],
      headline: "Took over a running engagement and secured its continuation, working across two countries.",
      metrics: [
        { value: "2", label: "countries: Switzerland and the UK" },
        { value: "6", label: "month engagement phase" },
        { value: "3 to 4", label: "key stakeholders under a senior sponsor" }
      ],
      context:
        "An AI and change management engagement with a global communications function, sponsored at senior level. Copilot and agents are used to challenge and improve campaign, resource and budget management.",
      did: [
        "Took over management of the earlier phase and agreed its continuation through commercial conversations",
        "Ran Immersion Days: Copilot training tied to the team's real work",
        "Ran hackathons to find practical use cases and process improvements",
        "Moved the strongest use cases towards high-level design for an AI Factory model for rapid agent prototyping",
        "Coordinated delivery and stakeholders across Switzerland and the UK"
      ],
      challenge: {
        problem: "Delivery capacity was constrained against an ambitious AI Factory proposition.",
        response: "I kept stakeholder engagement and momentum, and prioritised the use cases most ready for formal design."
      },
      outcomes: ["Continuation into a second phase agreed", "Use cases progressed towards formal high-level design"],
      scale: [
        ["Geography", "Switzerland and the UK"],
        ["Method", "Immersion Days, hackathons, AI Factory pipeline"],
        ["Focus areas", "Campaign, resource and budget management"]
      ],
      tools: ["Microsoft Copilot", "Copilot agents"]
    },
    {
      id: "discovery-to-build",
      title: "From client relationship to discovery engagement",
      org: "WM Reply",
      sector: "UK insurer",
      roleLabel: "Project and relationship manager",
      tags: ["commercial", "platform"],
      skills: ["Presales and discovery", "SOWs and estimation", "Power Apps"],
      headline: "Turned a trusted delivery relationship into a scoped Power Platform discovery.",
      metrics: [
        { value: "1", label: "full-day in-person workshop" },
        { value: "Weekly", label: "client sessions over the following month" }
      ],
      context:
        "The relationship built delivering the reporting programme led to a new opportunity: a second Power Platform application for agency relationship management.",
      did: [
        "Led the introduction call, clarified the requirements and wrote the commercial proposal",
        "Hand-picked a technical consultant and Power Platform developer who knew the client",
        "Analysed existing documentation, architecture and designs",
        "Ran a full-day workshop to validate requirements and map user journeys",
        "Produced a high-level design and began preparing costings for a potential build"
      ],
      challenge: { problem: "", response: "" },
      outcomes: ["Discovery delivered to a high-level design, with build costings in preparation"],
      scale: [
        ["Team", "1 technical consultant, 1 developer"],
        ["Method", "Document analysis, workshop, user journeys, weekly playbacks"]
      ],
      tools: ["Power Platform", "High-level design"]
    },
    {
      id: "university-web-part",
      title: "University intranet and SharePoint web part",
      org: "WM Reply",
      sector: "UK university",
      roleLabel: "Delivery Manager",
      period: "2025",
      tags: ["platform", "governance"],
      skills: ["SharePoint (SPFx)", "Backlog and sprint management", "Replanning and risk"],
      headline: "Recreated a business-critical booking platform as a SharePoint web part on a constrained budget.",
      metrics: [
        { value: "3", label: "month custom development" },
        { value: "1 + 1", label: "developer and technical consultant" },
        { value: "4", label: "client stakeholders" }
      ],
      context:
        "Delivery Manager for a SharePoint intranet and a wider migration programme, including an automated tool to move fragmented departments onto SharePoint. Some departments relied on third-party functionality that could not be migrated directly.",
      did: [
        "Led the custom build that recreated a Drupal-hosted training booking platform as an SPFx web part",
        "Preserved course search, date and location filters, availability, booking, authentication and the admin panel",
        "Prioritised continuity and familiarity over feature expansion",
        "Managed client expectations, scope and priorities against a tight budget"
      ],
      challenge: {
        problem: "The client was cash-constrained, so a larger rebuild was not viable.",
        response: "We agreed a pragmatic scope that kept business-critical functionality and familiar user behaviour."
      },
      outcomes: ["Business-critical booking functionality running natively in SharePoint"],
      scale: [
        ["Team", "1 developer, 1 technical consultant"],
        ["Duration", "3 months"]
      ],
      tools: ["SharePoint", "SPFx"]
    },
    {
      id: "delivery-tooling",
      title: "Standardising project delivery on Planner and Azure DevOps",
      org: "WM Reply",
      sector: "Internal",
      roleLabel: "Internal Planner subject-matter expert",
      tags: ["governance", "ai"],
      skills: ["Microsoft Planner", "Azure DevOps", "Power Automate", "Agentic AI enablement"],
      headline: "Replaced fragmented spreadsheet governance with Planner, and built agents to automate delivery admin.",
      metrics: [
        { value: "3", label: "internal training sessions" },
        { value: "1", label: "company-wide standard, alongside Azure DevOps" }
      ],
      context:
        "On joining, project plans, RAID logs and trackers were spread across disconnected Excel files with no consistent tooling.",
      did: [
        "Advocated Microsoft Planner, extended through Power Apps and Dynamics 365 Project Operations, with Azure DevOps alongside",
        "Delivered internal training and became the Planner subject-matter expert",
        "Delivered Planner training for clients and another Reply company",
        "Build agents and Power Automate flows that automate repeatable delivery-management tasks",
        "Testing an autonomous project assistant agent with knowledge-base integration in Azure AI Foundry"
      ],
      challenge: { problem: "", response: "" },
      outcomes: ["Planner is now the project-management tool alongside Azure DevOps"],
      scale: [["Approach", "Planner, Power Apps, Project Operations, Azure DevOps"]],
      tools: ["Microsoft Planner", "Azure DevOps", "Power Automate", "Azure AI Foundry (testing)"]
    },
    {
      id: "pemlosa-commerce",
      title: "Building a UK e-commerce business from £6,000",
      org: "Pemlosa",
      sector: "Own business",
      roleLabel: "Founder and Director",
      tags: ["founder"],
      skills: ["E-commerce operations", "International supply chain", "Platform migration", "Multi-agent workflows", "P&L reporting"],
      headline: "£6,000 initial investment grown to £300,000+ revenue, with 99% customer satisfaction.",
      metrics: [
        { value: "£300k+", label: "revenue" },
        { value: "3,000+", label: "transactions" },
        { value: "31%", label: "profit margin on the hero product" },
        { value: "99%", label: "customer satisfaction" }
      ],
      context:
        "A UK consumer electronics business built from scratch, sourcing internationally and selling in the UK and EU.",
      did: [
        "Launched a hero product: 1,000+ units sold at a 31% margin",
        "Built an international supply chain across US and Asian suppliers: £200,000+ of imports with a 4-day vendor-to-inventory lead time",
        "Maintained 100% international delivery compliance post-Brexit; EU sales are 8% of revenue",
        "Migrated the store to Adobe Commerce on Google Cloud, reducing transaction fees by 2.5%",
        "Built multi-agent AI workflows to automate market research, demand validation and product evaluation"
      ],
      challenge: { problem: "", response: "" },
      outcomes: ["Grew from a £6,000 initial investment to £300,000+ revenue"],
      scale: [
        ["Imports", "£200,000+"],
        ["Markets", "UK and EU"],
        ["Since", "September 2020"]
      ],
      tools: ["Adobe Commerce", "Google Cloud", "AI agents"]
    },
    {
      id: "fever-expansion",
      title: "Market expansion across six UK cities",
      org: "Fever",
      sector: "Live entertainment platform",
      roleLabel: "Project Manager",
      tags: ["commercial", "founder"],
      skills: ["Market expansion", "P&L reporting"],
      headline: "£1.25m+ revenue in six months from 25+ simultaneous launches.",
      metrics: [
        { value: "£1.25m+", label: "revenue in six months" },
        { value: "25+", label: "simultaneous launches" },
        { value: "4.6/5", label: "customer satisfaction" },
        { value: "10%", label: "margin improvement" }
      ],
      context: "Led launch and expansion of events and venues across UK cities.",
      did: [
        "Led market expansion into three UK cities: £500,000+ revenue and 10,000+ new customers in three months",
        "Managed 25+ simultaneous event and venue launches across six UK cities",
        "Renegotiated supplier contracts and vendor rates to improve regional margins by 10%",
        "Delivered weekly P&L reporting to executive leadership to inform expansion decisions"
      ],
      challenge: { problem: "", response: "" },
      outcomes: ["£1.25m+ revenue in six months", "4.6/5 customer satisfaction"],
      scale: [["Period", "June 2022 to April 2023"]],
      tools: []
    }
  ],

  roles: [
    {
      id: "wm-reply",
      org: "WM Reply",
      title: "Project Manager",
      start: "2025-04",
      end: null,
      color: "blue",
      summary:
        "Enterprise AI adoption and Power Platform delivery for large UK and international clients, typically across six concurrent projects.",
      highlights: [
        "10+ Copilot adoption programmes, including a 5,000-user rollout at 96% active licence usage",
        "Contributed to £1m+ in closed client revenue across 40+ projects",
        "Governed a £1.4m fixed-price Power Platform portfolio",
        "Internal Microsoft Planner SME across WM Reply and Reply sister companies"
      ],
      projects: ["copilot-5000", "copilot-10000", "reporting-modernisation", "fixed-price-governance", "global-comms-ai", "discovery-to-build", "university-web-part", "delivery-tooling"]
    },
    {
      id: "pemlosa",
      org: "Pemlosa",
      title: "Founder and Director",
      start: "2020-09",
      end: null,
      color: "magenta",
      summary: "UK e-commerce business built from a £6,000 investment to £300,000+ revenue.",
      highlights: [
        "3,000+ transactions at 99% customer satisfaction",
        "International supply chain across US and Asian suppliers",
        "Multi-agent AI workflows for market research and product evaluation"
      ],
      projects: ["pemlosa-commerce"]
    },
    {
      id: "fever",
      org: "Fever",
      title: "Project Manager",
      start: "2022-06",
      end: "2023-04",
      color: "yellow",
      summary: "Market expansion and launch delivery across UK cities.",
      highlights: [
        "£1.25m+ revenue in six months across 25+ launches",
        "10% regional margin improvement through supplier renegotiation"
      ],
      projects: ["fever-expansion"]
    },
    {
      id: "lacehouse",
      org: "The Lacehouse",
      title: "Operations and Marketing Manager",
      start: "2018-07",
      end: "2020-11",
      color: "ink",
      summary: "Operations and marketing leadership, focused on revenue growth and B2B partnerships.",
      highlights: [
        "Grew average weekly revenue five-fold, from £2,000 to £10,000, within six months",
        "Built a B2B corporate events pipeline worth £100,000+ a year"
      ],
      projects: []
    }
  ],

  credentials: [
    { name: "PRINCE2 Practitioner", issuer: "PeopleCert" },
    { name: "Certified ScrumMaster (CSM)", issuer: "Scrum Alliance" },
    { name: "CMI Level 7 Diploma in Management and Leadership", issuer: "Chartered Management Institute" },
    { name: "Microsoft 365 Certified: Fundamentals", issuer: "Microsoft" },
    { name: "MSc Business Management and Marketing (Distinction)", issuer: "Nottingham Trent University, 2019 to 2020" }
  ]
};
