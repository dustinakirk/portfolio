export const CONTACT_EMAIL = 'dustin.kirk@gmail.com';

// Featured projects configuration
// Set 'featured' to true for projects you want to show in the featured section
// You can also control the order by rearranging items in the WORK array
export const FEATURED_PROJECTS_CONFIG = {
  showAll: false, // Set to true to show all projects as featured
  maxFeatured: 9, // Maximum number of featured projects to show
  // Alternatively, you can specify project IDs to feature
  featuredIds: ['aistories', 'email', 'scaling', 'patent', 'architecture', 'charts'] // Leave empty to use 'featured' flag
};

// Portfolio projects data
export const WORK = [
  {
    id: "aistories",
    title: "AI Powered Expandable Stories",
    subtitle:
      "AI-powered platform generating never-ending fictional stories with interconnected characters and evolving narratives.",
    href: "/projects/aistories",
    category: "AI & Innovation",
    image: "/projects/aistories/nuvvel.png",
    tags: ["GenAI", "Literature", "Platform"],
    featured: true,
  },
  {
    id: "email",
    title: "Generative Email & User Management",
    subtitle:
      "AI-powered email interfaces with statistical dashboards and user management systems.",
    href: "/projects/email",
    category: "AI & Innovation",
    image: "/projects/email/invite_form.png",
    tags: ["GenAI", "Dashboard", "Analytics"],
    featured: true, // Control whether this appears in featured section
  },
  {
    id: "scaling",
    title: "Design Team Scaling Framework",
    subtitle:
      "Organizational design methodology for scaling design teams through different growth phases.",
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
      "Patented CSS/JS-based monitoring system for tracking user interactions in data networks.",
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
      "Modern UI patterns and workflow optimization for scalable enterprise design systems.",
    href: "/projects/architecture",
    category: "Enterprise UX",
    image: "/projects/architecture/goal-oriented-workflows.png",
    tags: ["Enterprise", "Workflows", "Systems"],
    featured: true,
  },
  {
    id: "charts",
    title: "Data Visualization System",
    subtitle:
      "Comprehensive charting components built with atomic design principles for complex data display.",
    href: "/projects/charts",
    category: "Strategy & Systems",
    image: "/projects/charts/chart_system_pro.png",
    tags: ["Data viz", "Components", "Atomic design"],
    featured: true,
  },
  {
    id: "color",
    title: "Systematic Color Design Framework",
    subtitle:
      "Brand colors, accessibility standards, and systematic application rules for design consistency.",
    href: "/projects/color",
    category: "Strategy & Systems",
    image: "/projects/color/cag_color_system.png",
    tags: ["Color theory", "Accessibility", "Systems"],
    featured: true,
  },
  {
    id: "loadorder",
    title: "Tag Load Order Management",
    subtitle:
      "Complex drag-and-drop interface for managing tag sequences with bulk actions and filtering.",
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
      "Foundational design principles and organizational framework for consistent design decisions.",
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
      "Seven iOS apps including disc golf scorecards, games, and utility applications.",
    href: "/projects/apps",
    category: "Mobile Apps",
    image: "/projects/apps/golfscorecards.png",
    tags: ["iOS", "Mobile", "Swift"],
    featured: false,
  },
];