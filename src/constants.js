export const CONTACT_EMAIL = 'dustin.kirk@gmail.com';

// Password-protected projects configuration
// Protected case studies live in protected/content/*.md (see protected/README.md)
// and are served by the functions in api/ only after the visitor enters the
// password. The password itself is the PROTECTED_PASSWORD environment variable
// on Vercel; nothing about the protected projects ships in this bundle.
export const PROTECTED_PROJECTS_CONFIG = {
  durationDays: 7, // Display only; the server enforces the real expiry
  tile: {
    title: 'Confidential Projects',
    subtitle: 'Additional case studies are available on request. Enter the password to view them.',
  },
};

// Featured projects configuration
// Set 'featured' to true for projects you want to show in the featured section
// You can also control the order by rearranging items in the WORK array
export const FEATURED_PROJECTS_CONFIG = {
  showAll: false, // Set to true to show all projects as featured
  maxFeatured: 9, // Maximum number of featured projects to show
  // Alternatively, you can specify project IDs to feature
  featuredIds: ['aitrustpatterns', 'eventintro', 'generativeuicanvas', 'aistories', 'salesforceaihackathon', 'email', 'color', 'architecture', 'charts'] // Leave empty to use 'featured' flag
};

// Portfolio projects data
export const WORK = [
  {
    id: "aitrustpatterns",
    title: "Agentic AI UX Patterns",
    subtitle:
      "44+ UX patterns for building trust into AI and agentic products, written for designers and developers.",
    href: "https://agenticuxpatterns.com",
    category: "AI & Innovation",
    image: "/projects/aitrustpatterns/ai-trust-patterns.png",
    tags: ["AI/ML", "UX Patterns", "Trust Design"],
    featured: true,
    external: true,
  },
  {
    id: "eventintro",
    title: "EventIntro: AI Matchmaking for Networking Events",
    subtitle:
      "A full-stack web app I built that tells people at an event who to meet and why, writes the introduction, and sorts everyone into breakout groups.",
    href: "/projects/eventintro",
    category: "AI & Innovation",
    image: "/projects/eventintro/eventintro.png",
    imagePosition: "top",
    tags: ["GenAI", "Full-Stack", "Product Design"],
    featured: true,
  },
  {
    id: "generativeuicanvas",
    title: "Generative UI Canvas",
    subtitle:
      "Natural Language UI + Agentic Backend + Generative UI, tried out on an over-engineered to-do list.",
    href: "/projects/generativeuicanvas",
    category: "AI & Innovation",
    image: "/projects/generativeuicanvas/robot_with_ui.png",
    tags: ["GenAI", "UI/UX", "B2B SaaS"],
    featured: true,
  },
  {
    id: "aistories",
    title: "AI Powered Expandable Stories",
    subtitle:
      "A site where AI writes fiction that never ends, with recurring characters and storylines that branch into new series.",
    href: "/projects/aistories",
    category: "AI & Innovation",
    image: "/projects/aistories/nuvvel.png",
    imagePosition: "top",
    tags: ["GenAI", "Literature", "Platform"],
    featured: true,
  },
  {
    id: "salesforceaihackathon",
    title: "Salesforce AI Hackathon",
    subtitle:
      "My generative AI concept for Sales Cloud won 'Most Innovative' out of 90 teams.",
    href: "/projects/salesforceaihackathon",
    category: "AI & Innovation",
    image: "/projects/salesforceaihackathon/hero_salesforce.png",
    tags: ["GenAI", "Sales Cloud", "Award"],
    featured: true,
  },
  {
    id: "email",
    title: "Micro Efficiencies",
    subtitle:
      "Pulling first and last names out of email addresses, so 70% of invited users never have to type them.",
    href: "/projects/email",
    category: "UX Optimization",
    image: "/projects/email/hero_email.png",
    tags: ["Efficiency", "UX", "Data Analysis"],
    featured: true, // Control whether this appears in featured section
  },
  {
    id: "scaling",
    title: "Design Team Scaling Framework",
    subtitle:
      "How many designers a company needs, and which roles to hire, as it grows from startup to 1,000+ employees.",
    href: "/projects/scaling",
    category: "Strategy & Systems",
    image: "/projects/scaling/org_phases.png",
    tags: ["Team structure", "Operations", "Strategy"],
    featured: true,
  },
  {
    id: "patent",
    title: "User Interaction Monitoring System",
    subtitle:
      "A patented way to track user interactions with CSS, even when JavaScript is blocked.",
    href: "/projects/patent",
    category: "AI & Innovation",
    image: "/projects/patent/css_js.svg",
    tags: ["Patent", "JavaScript", "Monitoring"],
    featured: true,
  },
  {
    id: "architecture",
    title: "UX Architecture for Enterprise SaaS",
    subtitle:
      "Replacing accordions and stacked modals with stacking slide-outs, cutting workflow steps by 30 to 50%.",
    href: "/projects/architecture",
    category: "Enterprise UX",
    image: "/projects/architecture/hero_architecture.png",
    tags: ["Enterprise", "Workflows", "Systems"],
    featured: true,
  },
  {
    id: "charts",
    title: "Data Visualization System",
    subtitle:
      "A Figma chart and graph system built from atomic components, published on Gumroad.",
    href: "/projects/charts",
    category: "Strategy & Systems",
    image: "/projects/charts/hero_chart.png",
    tags: ["Data viz", "Components", "Atomic design"],
    featured: true,
  },
  {
    id: "color",
    title: "Systematic Color Design Framework",
    subtitle:
      "My step-by-step process for building a full color palette around a set of brand colors.",
    href: "/projects/color",
    category: "Strategy & Systems",
    image: "/projects/color/hero_color.png",
    tags: ["Color theory", "Accessibility", "Systems"],
    featured: true,
  },
  {
    id: "loadorder",
    title: "Tag Load Order Management",
    subtitle:
      "Redesigning how Tealium customers see and change the order their tags and extensions run in.",
    href: "/projects/loadorder",
    category: "Enterprise UX",
    image: "/projects/loadorder/drag_and_drop.gif",
    tags: ["Drag & drop", "Bulk actions", "Complex UI"],
    featured: false,
  },
  {
    id: "pillars",
    title: "Design Principles Framework",
    subtitle:
      "Four principles I wrote to guide design decisions across Tealium's products.",
    href: "/projects/pillars",
    category: "Strategy & Systems",
    image: "",
    tags: ["Principles", "Strategy", "Framework"],
    featured: false,
  },
  {
    id: "apps",
    title: "iOS Mobile Applications Portfolio",
    subtitle:
      "Seven iOS apps I designed and built, from disc golf scorecards to word games.",
    href: "/projects/apps",
    category: "Mobile Apps",
    image: "/projects/apps/golfscorecards.png",
    tags: ["iOS", "Mobile", "Swift"],
    featured: false,
  },
];