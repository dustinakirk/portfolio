import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CONTACT_EMAIL, WORK, FEATURED_PROJECTS_CONFIG } from '../constants';
import ScrollToHashElement from './ScrollToHashElement';
// NOTE: Fix for build error — use the correct Lucide icon name "Image" and alias it locally
// instead of importing a non-existent "ImageIcon" file from the CDN build.
import {
  ArrowUpRight,
  Mail,
  Download,
  ExternalLink,
  Sparkles,
  Linkedin,
  Image as LucideImage,
  User,
  Briefcase,
  Brain,
  Award,
  GraduationCap,
  Users2,
  LayoutGrid,
  LineChart,
  Rocket,
  MapPin,
  FileText,
} from "lucide-react";

/*
  UPDATE LOG — Aug 29, 2025
  - FIX: Replaced `ImageIcon` import with `Image as LucideImage` from lucide-react to avoid CDN lookup to image-icon.js
  - Kept avatar, image placeholders, and Experience & Skills section from prior revision.
*/

// ===== Util components =====
const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium bg-white/50 dark:bg-white/5 border-black/10 dark:border-white/10">
    {children}
  </span>
);

const LinkButton = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 rounded-2xl border border-black/10 dark:border-white/10 px-4 py-2 font-medium hover:shadow-lg transition-shadow"
  >
    {children}
  </a>
);

// Graceful <img> with fallback gradient placeholder
// Added `onState` for testing: it receives true when image loads, false on fallback.
function SafeImg({ src, alt, className, fallbackClassName = "", onState, style }) {
  const [ok, setOk] = useState(Boolean(src));
  const reported = useRef(false);

  useEffect(() => {
    // When there's no src, immediately report fallback state
    if (!src && onState && !reported.current) {
      onState(false);
      reported.current = true;
    }
  }, [src, onState]);

  return (
    <div className={"relative overflow-hidden " + fallbackClassName}>
      {!ok && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.25),transparent_40%)]" />
      )}
      {ok ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt || ""}
          className={className}
          style={style}
          onError={() => {
            setOk(false);
            if (onState && !reported.current) {
              onState(false);
              reported.current = true;
            }
          }}
          onLoad={() => {
            if (onState && !reported.current) {
              onState(true);
              reported.current = true;
            }
          }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <LucideImage className="h-6 w-6 opacity-50" />
        </div>
      )}
    </div>
  );
}

// Testimonials data for carousel
const TESTIMONIALS = [
  {
    name: "Mark Dorn",
    role: "Staff Product Designer",
    company: "ServiceNow",
    quote: "I was impressed by his level of preparation and attention to detail. Leading the design efforts on a complex enterprise product is not an easy task and I commend Dustin for making the difficult look easy.",
    initials: "MD",
    avatarUrl: "/images/avatar_mark_dorn.jpeg",
  },
  {
    name: "Nina Dimov",
    role: "Lead Product Designer",
    company: "Tealium",
    quote: "During my career, I have never had a better manager than Dustin. My day-to-day communication with him made me a better designer.",
    initials: "ND",
    avatarUrl: "/images/avatar_nina_dimov.jpeg",
  },
  {
    name: "Alex Skibinsky",
    role: "Software Engineer",
    company: "Truist",
    quote: "Dustin is incredibly creative and a practical professional. His experience and artistic abilities were invaluable in our projects.",
    initials: "AS",
    avatarUrl: "/images/avatar_alex_skibinski.jpeg",
  },
];

// TestimonialCarousel Component
function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto-advance carousel
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      }, 6000); // 6 seconds per testimonial
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const getCardStyle = (index) => {
    const diff = index - currentIndex;
    const totalItems = TESTIMONIALS.length;
    
    // Handle wrap-around for circular rotation
    let adjustedDiff = diff;
    if (Math.abs(diff) > totalItems / 2) {
      adjustedDiff = diff > 0 ? diff - totalItems : diff + totalItems;
    }

    // Active card (current)
    if (adjustedDiff === 0) {
      return {
        transform: 'translateX(0%) scale(1) rotate(0deg)',
        opacity: 1,
        zIndex: 30,
        filter: 'blur(0px)',
      };
    }
    // Previous card
    else if (adjustedDiff === -1 || (currentIndex === 0 && index === totalItems - 1)) {
      return {
        transform: 'translateX(-30%) scale(0.85) rotate(-8deg)',
        opacity: 0.5,
        zIndex: 20,
        filter: 'blur(1px)',
      };
    }
    // Next card
    else if (adjustedDiff === 1 || (currentIndex === totalItems - 1 && index === 0)) {
      return {
        transform: 'translateX(30%) scale(0.85) rotate(8deg)',
        opacity: 0.5,
        zIndex: 20,
        filter: 'blur(1px)',
      };
    }
    // Hidden cards
    else {
      return {
        transform: 'translateX(0%) scale(0.7) rotate(0deg)',
        opacity: 0,
        zIndex: 10,
        filter: 'blur(4px)',
      };
    }
  };

  return (
    <div 
      className="relative h-[320px] md:h-[280px] w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel container */}
      <div className="relative h-full w-full flex items-center justify-center perspective-1000">
        {/* Cards */}
        <div className="relative w-full h-full flex items-center justify-center">
          {TESTIMONIALS.map((testimonial, index) => {
            const diff = index - currentIndex;
            const totalItems = TESTIMONIALS.length;
            let adjustedDiff = diff;
            if (Math.abs(diff) > totalItems / 2) {
              adjustedDiff = diff > 0 ? diff - totalItems : diff + totalItems;
            }
            
            // Determine if this card is clickable (previous or next)
            const isClickable = adjustedDiff === -1 || adjustedDiff === 1 || 
                               (currentIndex === 0 && index === totalItems - 1) || 
                               (currentIndex === totalItems - 1 && index === 0);
            
            const handleCardClick = () => {
              if (isClickable) {
                setCurrentIndex(index);
              }
            };
            
            return (
              <motion.div
                key={index}
                className={`absolute w-[90%] md:w-[85%] max-w-[400px] ${
                  isClickable ? 'cursor-pointer' : ''
                }`}
                initial={false}
                animate={getCardStyle(index)}
                transition={{
                  duration: 0.6,
                  ease: [0.32, 0.72, 0, 1],
                  opacity: { duration: 0.4 }
                }}
                style={{
                  transformOrigin: 'center center',
                }}
                onClick={handleCardClick}
                whileHover={isClickable ? { scale: 0.88 } : {}}
              >
                <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-white/10 backdrop-blur-lg p-6 shadow-xl">
                
                {/* Content */}
                <div className="relative">
                  {/* Quote text */}
                  <p className="text-sm md:text-base text-black/80 dark:text-white/80 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author info */}
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-black/5 dark:border-white/10">
                      {testimonial.avatarUrl ? (
                        <img 
                          src={testimonial.avatarUrl} 
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 flex items-center justify-center">
                          <span className="text-xs font-bold">{testimonial.initials}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Name and role */}
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs opacity-70">
                        {testimonial.role} • {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Dots indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-black dark:bg-white w-6' 
                : 'bg-black/30 dark:bg-white/30 hover:bg-black/50 dark:hover:bg-white/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Pause indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isPaused ? 1 : 0 }}
        className="absolute top-4 right-4 z-40"
      >
        <div className="flex items-center gap-2 rounded-full bg-black/10 dark:bg-white/10 px-3 py-1 backdrop-blur-sm">
          <div className="h-2 w-2 rounded-full bg-black dark:bg-white animate-pulse" />
          <span className="text-xs font-medium">Paused</span>
        </div>
      </motion.div>
    </div>
  );
}

// Avatar
const AVATAR_URL = "/images/dustin_kirk_avatar.png";
function AvatarBlock() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-sm">
        <SafeImg
          src={AVATAR_URL}
          alt="Dustin Kirk"
          className="h-full w-full"
          fallbackClassName="h-full w-full"
          style={{ transform: "scale(1.42)" }}
        />
      </div>
      <div className="hidden sm:block">
        <div className="text-sm opacity-70">Portfolio of</div>
        <div className="font-semibold">Dustin Kirk</div>
      </div>
    </div>
  );
}

// ===== Work Card =====
function WorkCard({ item }) {
  const isInternalLink = item.href?.startsWith("/projects/");
  const linkPath = isInternalLink 
    ? item.href
    : item.href;

  const CardWrapper = isInternalLink ? Link : 'a';
  const cardProps = isInternalLink 
    ? { to: linkPath }
    : { href: linkPath, target: "_blank", rel: "noreferrer" };

  return (
    <motion.div
      id={`work-card-${item.id}`}
      className="group rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur overflow-hidden hover:-translate-y-0.5 hover:shadow-xl transition-all"
      whileHover={{ y: -2 }}
    >
      <CardWrapper {...cardProps} className="block">
        {/* Cover image / placeholder */}
        <div className="aspect-[16/10]">
          <SafeImg
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            fallbackClassName="h-full w-full"
          />
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{item.subtitle}</p>
            </div>
            <div className="shrink-0">
              <ArrowUpRight className="h-5 w-5 opacity-60 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </CardWrapper>
    </motion.div>
  );
}

// ===== Data =====
// WORK array is now imported from constants.js

// Skills, Experience, Education, Patents — summarized for the page
const SKILLS = [
  { group: "AI & GenAI", items: ["LLMs & agents", "Prompt engineering", "Natural language UIs"] },
  { group: "Design Systems", items: ["System architecture", "Color & type tokens", "Pattern libraries"] },
  { group: "UX Methods", items: ["UX architecture", "Research & synthesis", "Design specs"] },
  { group: "Craft & Prototyping", items: ["Figma", "Rapid prototyping", "Data visualization"] },
  { group: "Tech", items: ["HTML/CSS/JS", "Python", "Accessibility"] },
];

const EXPERIENCE = [
  {
    company: "New Relic",
    role: "Principal Product Designer",
    dates: "Oct 2023 – Present",
    logo: "/images/logo_new_relic_inc.jpeg",
    points: [
      "Contributed AI-first thought leadership through proof-of-concept explorations.",
      "Led the creation of design-system patterns for the integration of AI.",
      "Formed and led design group of AI enthusiasts up-skill and mentor others.",
      "Collaborated on strategic roadmap items for both short- and long-term initiatives.",
      "Championed user-centric and hyper-personalized interfaces by using AI.",
    ],
  },
  {
    company: "Salesforce",
    subtitle: "Sales Cloud",
    role: "Lead Product Designer",
    dates: "Sep 2021 – Oct 2023",
    duration: "2 years",
    logo: "/images/logo_salesforce.jpeg",
    points: [
      "Led design on Sales Cloud Co-pilot.",
      "Pioneered generative email and autonomous experiences for Sales Cloud.",
      "Won 'most-innovative' award in generative AI hackathon among 90 teams",
      "Championed and extended SLDS Design System",
    ],
  },
  {
    company: "LeadIQ",
    role: "Lead Product Designer / Manager",
    dates: "Dec 2020 – Sep 2021",
    duration: "10 mos",
    logo: "/images/logo_leadiq_inc.jpeg",
    points: [
      "Lead the remote Product Design and UX Research teams across Asia and US.",
      "Established UX architecture and Design System for next-generation product.",
      "Established persona library, research processes, and research repository.",
      "Implemented design processes and specs to streamline product development.",
      "Work closely with leadership to realize both short- and long-term OKRs.",
    ],
  },
  {
    company: "Tealium",
    role: "Principal Product Designer / Manager",
    dates: "Aug 2012 – Oct 2020",
    duration: "8 Years 3 mos",
    logo: "/images/logo_tealium.jpeg",
    points: [
      "Established cross-functional relationships with product and engineering leads.",
      "Organized the design team resources, assets, specifications and research.",
      "Built out research repository consolidating all usability and feedback sources.",
      "Managed and mentored the core product design team.",
      "Led effort to create and promote use of Tealium's design system.",
      "Created Figma annotation and workflow kits for the design team to utilize.",
      "Oversaw UX architecture and planning for features spanning five products.",
    ],
  },
  {
    company: "Neustar",
    role: "Sr. User Experience Designer",
    dates: "Nov 2009 – Dec 2011",
    duration: "2 yrs 2 mos",
    logo: "/images/logo_neustar_inc.jpeg",
    points: [
      "Led Information Architecture and UX strategy for integrating two products.",
      "Started mentoring program with weekly design challenges for 25 members.",
      "Redesigned product UI to enable the monitoring of thousands of websites.",
      "Designed dashboards and visualizations optimized for multiple display types.",
    ],
  },
  {
    company: "Hewlett-Packard",
    role: "Interaction Designer",
    dates: "Nov 2006 – May 2009",
    duration: "2 yrs 7 mos",
    logo: "/images/logo_hp.jpeg",
    points: [
      "Designed features for the HP Smart Web Printing browser plugin.",
      "Designed components of HP Photosmart Software for printing cards and photos.",
      "Created usability test plans and questionnaires for use in a formal usability lab.",
      "Won 1st place at HP's 2007 Business Plan Development competition.",
    ],
  },
];

const EDUCATION = [
  { 
    school: "Rensselaer Polytechnic Institute", 
    program: "MS, Human Computer Interaction (HCI)", 
    dates: "2005 - 2008",
    logo: "/images/logo_rensselaer_polytechnic_institute.jpeg"
  },
  { 
    school: "MIT Sloan School of Management", 
    program: "Certificate, Entrepreneurship Development Program", 
    dates: "2008 - 2008",
    logo: "/images/logo_mit.jpeg"
  },
  { 
    school: "Rensselaer Polytechnic Institute", 
    program: "BS, Computer Science & Psychology", 
    dates: "2000 - 2003",
    logo: "/images/logo_rensselaer_polytechnic_institute.jpeg"
  },
];

const PATENTS = [
  { title: "Config of content-site user interaction monitoring", note: "US 10,268,657 (2019)" },
  { title: "Salesforce — Multi-layered LLM customization (pending)", note: "" },
  { title: "Salesforce — AI sourcing attribution in RAG (pending)", note: "" },
];

export default function PortfolioFresh() {
  
  // Determine which projects to show as featured based on configuration
  const featuredProjects = useMemo(() => {
    let projects = WORK;
    
    // If showAll is true, return all projects
    if (FEATURED_PROJECTS_CONFIG.showAll) {
      return projects.slice(0, FEATURED_PROJECTS_CONFIG.maxFeatured);
    }
    
    // If featuredIds are specified, use those
    if (FEATURED_PROJECTS_CONFIG.featuredIds && FEATURED_PROJECTS_CONFIG.featuredIds.length > 0) {
      projects = projects.filter(p => FEATURED_PROJECTS_CONFIG.featuredIds.includes(p.id));
    } else {
      // Otherwise, use the featured flag on each project
      projects = projects.filter(p => p.featured === true);
    }
    
    // Apply max limit
    return projects.slice(0, FEATURED_PROJECTS_CONFIG.maxFeatured);
  }, []);
  

  // Diagonal stripe configuration
  const diagonalConfig = {
    angle: 30, // degrees
    bands: [
      { width: 20, color: '#044960' }, // Darkest blue
      { width: 20, color: '#0E6B89' }, // Medium-dark blue
      { width: 20, color: '#207F9E' }, // Light blue
      { width: 20, color: '#46A9C8' } // Lightest blue
    ]
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    // Special case for scrolling to top
    if (sectionId === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      // Calculate dynamic offset based on actual navigation header height
      const headerElement = document.querySelector('header');
      const offset = headerElement ? headerElement.offsetHeight + 20 : 80;
      
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7f7f9_0%,#eef0f4_100%)] dark:bg-[linear-gradient(180deg,#0a0a0a_0%,#0f1115_100%)] text-black dark:text-white">
      <ScrollToHashElement />
      {/* Nav */}
      <header id="navigation-header" className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30 border-b border-black/5 dark:border-white/10 relative overflow-hidden">
        {/* Diagonal blue lines - positioned behind content */}
        <div id="diagonal-decoration" className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div 
            className="absolute -top-20 -right-32"
            style={{ 
              transform: `rotate(${diagonalConfig.angle}deg)`,
              width: '600px'
            }}
          >
            {diagonalConfig.bands.map((band, index) => (
              <div 
                key={index}
                style={{ 
                  height: `${band.width}px`,
                  background: band.color.includes('gradient') 
                    ? band.color 
                    : `linear-gradient(90deg, transparent 0%, ${band.color} 15%, ${band.color} 85%, transparent 100%)`,
                  width: '100%'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Header content - positioned above the lines */}
        <div className="mx-auto max-w-7xl px-4 pr-[140px] py-3 flex items-center justify-between relative z-10">
          <a href="#top" onClick={(e) => scrollToSection(e, 'top')} className="font-semibold tracking-tight flex items-center gap-3 cursor-pointer">
            <AvatarBlock />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-lg">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about-section')} className="opacity-80 hover:opacity-100 cursor-pointer">About</a>
            <a href="#work" onClick={(e) => scrollToSection(e, 'work-section')} className="opacity-80 hover:opacity-100 cursor-pointer">Work</a>
            <a href="#experience" onClick={(e) => scrollToSection(e, 'experience-section')} className="opacity-80 hover:opacity-100 cursor-pointer">Experience</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact-section')} className="opacity-80 hover:opacity-100 cursor-pointer">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <LinkButton href="https://www.linkedin.com/in/dustinkirk/">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </LinkButton>
            <LinkButton href="/Dustin_Kirk_Resume.pdf">
              <Download className="h-4 w-4" /> Resume
            </LinkButton>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero-section" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div id="hero-content" className="md:col-span-7">
            <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Principal Product Designer
              <br className="hidden sm:block" /> <span className="text-xl md:text-3xl">AI Enthusiast</span>
            </motion.h1>
            <p className="mt-4 text-base md:text-lg text-black/70 dark:text-white/70 max-w-2xl">
              Software is fundamentally changing with agentic systems, generative UI, and natrual language interfaces. 
              Lets build AI-first software together and push the boundries of what has become the status-quo over the last 30 year to create hyper-personalized experiences that scale and evolve.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge>Agentic AI</Badge>
              <Badge>Generative UI</Badge>
              <Badge>Design Systems</Badge>
              <Badge>UX Architecture</Badge>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" onClick={(e) => scrollToSection(e, 'work-section')} className="inline-flex items-center gap-2 rounded-2xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 font-medium cursor-pointer">
                <Sparkles className="h-4 w-4" /> See featured work
              </a>
              <LinkButton href={`mailto:${CONTACT_EMAIL}`}>
                <Mail className="h-4 w-4" /> Get in touch
              </LinkButton>
            </div>
          </div>
          <div className="md:col-span-5">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about-section" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">About</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left column - Image */}
            <div id="about-image" className="lg:col-span-4">
              <div className="rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5">
                <img 
                  src="/images/dustin_kirk2.png" 
                  alt="Dustin Kirk" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Right column - Content */}
            <div id="about-content" className="lg:col-span-8">
              <div className="space-y-4 text-black/80 dark:text-white/80">
                <p>
                  With 20 years of experience in enterprise SaaS and PaaS, I deliver high-quality work quickly while leading design across multiple projects.
                </p>
                <p>
                  As AI has come to the forefront, my fascination has led me to explore its potential, integrate it into my workflows, explore capabilities through personal projects, and share that knowledge with others. I believe software as we know it will change dramatically, and I'm here for it. I'm eager to help bring the vast and emerging capabilities of AI to software and provide greater agency to people around the world.
                </p>
                <p>
                  I have an innate curiosity about technology and enjoy taking on increasingly complex challenges that blend people and technology—and now AI agents. I studied Computer Science and Psychology at Rensselaer and earned an M.S. in Human-Computer Interaction. Other highlights include completing MIT's Entrepreneurship Development Program, presenting at the O'Reilly Strata Data Conference, and earning three patents: one for event tracking via CSS and two related to AI.
                </p>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <LinkButton href="https://www.linkedin.com/in/dustinkirk/">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </LinkButton>
                <LinkButton href={`mailto:${CONTACT_EMAIL}`}>
                  <Mail className="h-4 w-4" /> Email
                </LinkButton>
              </div>
            </div>
          </div>

          {/* Highlights - Combined from Specialties and Selected highlights */}
          <div id="highlights-section" className="mt-16">
            <h3 className="text-xl font-semibold mb-6">Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* AI Thought Leadership */}
              <motion.div
                id="highlight-ai-leadership"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 p-2 rounded-xl bg-black/5 dark:bg-white/5">
                    <Rocket className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-medium mb-2">AI Technologist</div>
                    <div className="text-sm opacity-70">Taking a hands-on approach to exploring the capabilities of AI today and envisioning where it will take us tomorrow.</div>
                  </div>
                </div>
              </motion.div>

              {/* AI Thought Leadership */}
              <motion.div
                id="highlight-ai-leadership"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 p-2 rounded-xl bg-black/5 dark:bg-white/5">
                    <Rocket className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-medium mb-2">AI Thought Leadership</div>
                    <div className="text-sm opacity-70">Leading explorations, patterns, and mentorship to integrate AI capabilities across products and teams.</div>
                  </div>
                </div>
              </motion.div>

              {/* Patents */}
              <motion.div
                id="highlight-patents"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 p-2 rounded-xl bg-black/5 dark:bg-white/5">
                    <Award className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-medium mb-2">Patents</div>
                    <div className="text-sm opacity-70">Three patents demonstrating innovation - one issued for CSS-based event tracking, two pending for AI-powered LLM customization and RAG attribution.</div>
                  </div>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                id="highlight-education"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 p-2 rounded-xl bg-black/5 dark:bg-white/5">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-medium mb-2">Education</div>
                    <div className="text-sm opacity-70">MS in HCI and BS in Computer Science & Psychology from RPI, plus MIT's Entrepreneurship Development Program - bridging technical depth with human-centered design.</div>
                  </div>
                </div>
              </motion.div>

              {/* Design Systems */}
              <motion.div
                id="highlight-design-systems"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 p-2 rounded-xl bg-black/5 dark:bg-white/5">
                    <LayoutGrid className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-medium mb-2">Design Systems</div>
                    <div className="text-sm opacity-70">Creating platform-level patterns and scalable design systems that enable consistent, efficient product development across enterprise organizations.</div>
                  </div>
                </div>
              </motion.div>

              {/* Leadership & Mentorship - Full width on desktop for odd number */}
              <motion.div
                id="highlight-leadership2"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="shrink-0 p-2 rounded-xl bg-black/5 dark:bg-white/5">
                    <LayoutGrid className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-medium mb-2">Leadership & Mentorship</div>
                    <div className="text-sm opacity-70">Building and guiding high-performing design teams while upleveling talent through structured mentorship and collaborative excellence.</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>


      {/* Work section */}
      <section id="work-section" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Featured Work</h2>

        <div id="work-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredProjects.map((item) => (
            <WorkCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Experience & Skills */}
      <section id="experience-section" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 p-6 md:p-10">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Experience & Skills</h2>
            <LinkButton href="/Dustin_Kirk_Resume.pdf">
              View full resume <ExternalLink className="h-4 w-4" />
            </LinkButton>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Experience timeline */}
            <div id="experience-timeline" className="lg:col-span-2">
              <div className="space-y-6">
                {EXPERIENCE.map((job, i) => (
                  <div key={i} className="flex gap-4">
                    {/* Logo */}
                    <div className="shrink-0 w-12 h-12 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-white/5">
                      {job.logo ? (
                        <img 
                          src={job.logo} 
                          alt={job.company} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-xs font-bold opacity-50">
                            {job.company.slice(0, 2).toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-base">
                        {job.role}
                      </h3>
                      <div className="text-sm opacity-70">
                        {job.company}
                        {job.subtitle && <span> - {job.subtitle}</span>}
                      </div>
                      <div className="text-xs opacity-60 mt-1">
                        {job.dates}
                        {job.duration && <span className="ml-3">{job.duration}</span>}
                      </div>
                      <ul className="mt-3 list-disc pl-5 text-sm opacity-80 space-y-1">
                        {job.points.map((p, idx) => (
                          <li key={idx}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column - Key Strengths, Skills, Patents, Education */}
            <div id="experience-sidebar" className="space-y-6">
              {/* Key Strengths */}
              <div id="key-strengths">
                <h3 className="text-base font-semibold mb-3">Key Strengths</h3>
                <ul className="space-y-2 text-sm opacity-80">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-black/40 dark:bg-white/40 shrink-0"></span>
                    <span>Provide <strong>AI thought leadership</strong> across teams and organizations.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-black/40 dark:bg-white/40 shrink-0"></span>
                    <span><strong>Computer Science background</strong> with an understanding of the development processes and underlying technologies.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-black/40 dark:bg-white/40 shrink-0"></span>
                    <span><strong>Design leadership</strong> and the ability to introduce robust design at startups.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-black/40 dark:bg-white/40 shrink-0"></span>
                    <span>Deep understanding of AI capabilities, including <strong>LLMs & agentic systems.</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-black/40 dark:bg-white/40 shrink-0"></span>
                    <span><strong>Enterprise SaaS</strong> and <strong>PaaS</strong> UX design and platform-level design systems.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-black/40 dark:bg-white/40 shrink-0"></span>
                    <span>Highly <strong>scalable UI design</strong> patterns and <strong>efficient workflows.</strong></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-black/40 dark:bg-white/40 shrink-0"></span>
                    <span>Eight years' of experience designing and developing mobile applications.</span>
                  </li>
                </ul>
              </div>

              {/* Skills & Tools */}
              <div id="skills-tools">
                <h3 className="text-base font-semibold mb-3">Skills & Tools</h3>
                <ul className="space-y-2 text-sm opacity-80">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-black/40 dark:bg-white/40 shrink-0"></span>
                    <span><strong>AI Tools</strong>: Chat GPT, Claude Code, Grok, Cursor, Codex, Gemini, Midjourney, Udio, Figma Make, etc.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-black/40 dark:bg-white/40 shrink-0"></span>
                    <span><strong>Figma</strong>, Adobe Photoshop, Adobe Illustrator</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-black/40 dark:bg-white/40 shrink-0"></span>
                    <span>Prompt Engineering, <strong>Natural Language Interfaces</strong>, and Data Visualization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-black/40 dark:bg-white/40 shrink-0"></span>
                    <span><strong>Design Systems</strong>, Color Systems, Grid Systems, Typography, Iconography</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-black/40 dark:bg-white/40 shrink-0"></span>
                    <span>Journey Mapping, Wire-framing, Workflow Diagrams, Design Specs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-black/40 dark:bg-white/40 shrink-0"></span>
                    <span><strong>UX Architecture</strong>, UX Strategy, <strong>UX Research</strong>, Design Ops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-black/40 dark:bg-white/40 shrink-0"></span>
                    <span>Visual Design, Graphic Design, Rapid Prototyping, Functional Prototyping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-black/40 dark:bg-white/40 shrink-0"></span>
                    <span><strong>Responsive Design</strong>, Accessibility, Heuristic Evaluation, Research Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-black/40 dark:bg-white/40 shrink-0"></span>
                    <span>Python, CSS, HTML, JavaScript, Azure, PostgreSQL</span>
                  </li>
                </ul>
              </div>

              {/* Patents */}
              <div id="patents-list">
                <h3 className="text-base font-semibold mb-3">Patents</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="opacity-80">Kirk, Dustin; Lin, Ike 2019</div>
                    <div className="opacity-80">Configuration of content site user interaction monitoring in data networks</div>
                    <div className="opacity-60 text-xs mt-1">U.S. Patent 10,268,657, Filed June 5, 2018, and issued April 23, 2019</div>
                  </div>
                  <div>
                    <h4 className="font-medium opacity-80 mb-1">Patents Pending</h4>
                    <ul className="space-y-1 opacity-70">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-black/40 dark:bg-white/40 shrink-0"></span>
                        <span>Salesforce - Multi-layered LLM customization framework</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-black/40 dark:bg-white/40 shrink-0"></span>
                        <span>Salesforce - AI sourcing attribution in RAG system</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div id="education-list">
                <h3 className="text-base font-semibold mb-3">Education</h3>
                <div className="space-y-4">
                  {EDUCATION.map((e, i) => (
                    <div key={i} className="flex gap-3">
                      {/* School Logo */}
                      <div className="shrink-0 w-12 h-12 rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-white/5">
                        {e.logo ? (
                          <img 
                            src={e.logo} 
                            alt={e.school} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-xs font-bold opacity-50">
                              {e.school.slice(0, 3).toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="font-medium text-sm">{e.school}</div>
                        <div className="text-sm opacity-80">{e.program}</div>
                        <div className="text-xs opacity-60 mt-1">{e.dates}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>






      {/* Contact */}
      <section id="contact-section" className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-white/5 p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Let’s build the future</h2>
          <p className="mt-2 text-sm md:text-base opacity-80 max-w-2xl mx-auto">
            If you ae shipping AI-first solutions that rethink how software is built from the ground up, then I'm your guy.  Let's work together to shape the future of software and user experiences.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 rounded-2xl bg-black text-white dark:bg-white dark:text-black px-5 py-3 font-medium">
              <Mail className="h-4 w-4" /> Email Dustin
            </a>
            <LinkButton href="/Dustin_Kirk_Resume.pdf">
              <Download className="h-4 w-4" /> Download Resume
            </LinkButton>
          </div>
        </div>
      </section>

      <footer id="footer" className="mx-auto max-w-7xl px-4 pb-12 text-sm opacity-70">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Dustin Kirk</div>
          <div className="flex items-center gap-4">
            <a className="hover:opacity-100 opacity-80" href={`mailto:${CONTACT_EMAIL}`}>Email</a>
            <a className="hover:opacity-100 opacity-80" href="https://www.linkedin.com/in/dustinkirk/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
