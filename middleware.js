// Vercel Edge Middleware for Social Media Crawler Meta Tags
// This middleware intercepts requests from social media crawlers and returns
// pre-rendered HTML with proper Open Graph and Twitter Card meta tags.

const SOCIAL_CRAWLERS = [
  'twitterbot',
  'facebookexternalhit',
  'linkedinbot',
  'slackbot',
  'telegrambot',
  'whatsapp',
  'discordbot',
  'applebot',
  'pinterest',
  'tumblr'
];

// Pattern metadata extracted from src/data/aiTrustPatterns.js
const PATTERNS = {
  "agent-identity-role-contract": {
    title: "Agent Identity & Role Contract",
    description: "Make an AI agent's role, authority, and boundaries explicit so people know what to trust it with."
  },
  "delegation-modes": {
    title: "Delegation Modes (Advisor → Co‑Pilot → Autopilot)",
    description: "Make AI autonomy explicit with three delegation levels (Advisor, Co-Pilot, Autopilot), giving users controllable delegation and preventing surprise automation."
  },
  "structured-clarification-prompts": {
    title: "Structured Clarification Prompts",
    description: "Short, focused question sets that an AI agent surfaces when a request is underspecified or risky, packaged as a compact, structured panel of clarifications."
  },
  "edit-request": {
    title: "Edit Request",
    description: "Inline editing of a previously sent request so users can refine intent after seeing how an AI agent interpreted it."
  },
  "confirmed-assumptions": {
    title: "Confirmed Assumptions Panel",
    description: "Surface AI inferences as editable assumptions so users can correct them before they affect outputs—building trust through transparency."
  },
  "sandboxed-playgrounds": {
    title: "Sandboxed Playgrounds",
    description: "Interactive, consequence-free environments where users can rehearse AI-driven workflows and see hypothetical impact before enabling them on real data or systems."
  },
  "wayfinders": {
    title: "Wayfinders (Capability Discovery)",
    description: "On-screen prompts and affordances that reveal what an AI agent can do in the current context, turning blank states into clear, actionable starting points."
  },
  "progressive-disclosure-modes": {
    title: "Progressive Disclosure Modes",
    description: "A structured mode system that reveals complexity gradually, supporting both novices and experts while maintaining trust in agentic AI behavior."
  },
  "teach-me-interfaces": {
    title: "Teach Me Interfaces",
    description: "Interfaces that turn user corrections into persistent, inspectable rules so the AI system becomes a jointly configured partner rather than an opaque black box."
  },
  "scenario-templates-and-recipes": {
    title: "Scenario Templates & Recipes",
    description: "Pre-built, domain-specific AI workflows that help users articulate complex requests by selecting and customizing structured \"recipes\" instead of starting from a blank prompt."
  },
  "feedback-on-results": {
    title: "Feedback on Results & Rating Controls",
    description: "Lightweight, contextual mechanisms for reacting to AI outputs—so the system can continuously learn from real usage and recover quickly when it gets things wrong."
  },
  "kill-switch-pause-resume": {
    title: "Kill Switch, Pause & Resume",
    description: "A control pattern that gives users immediate, graduated control over long-running or autonomous AI agents through clear Pause, Resume, and Stop mechanisms."
  },
  "human-in-the-loop-hitl-gates": {
    title: "Human-in-the-Loop (HITL) Gates",
    description: "A pattern that pauses AI-driven actions at defined checkpoints so humans can review, edit, and approve high-impact steps before execution, maintaining safety, accountability, and trust."
  },
  "plan-then-execute-workflow": {
    title: "Plan-then-Execute Workflow (Unified Stream Variant)",
    description: "A conversational workflow where an AI agent first proposes an explicit, editable plan for multi-step or risky tasks, then executes that plan with clear checkpoints, controls, and auditability."
  },
  "steerability-polite-interruption": {
    title: "Steerability & Polite Interruption",
    description: "Enables users to redirect an agentic AI mid-task, preserving useful progress while clearly acknowledging and incorporating new intent."
  },
  "scoped-permissions-tool-consent": {
    title: "Scoped Permissions & Tool Consent",
    description: "Explicit, granular permission flows that define what an AI agent can access or do, for how long, and with which tools, in a way that is understandable, reviewable, and revocable."
  },
  "rollback-version-history": {
    title: "Rollback & Version History",
    description: "Provide deterministic checkpoints and version history so agent-driven changes are always reversible, enabling safe experimentation and recovery from mistakes with minimal disruption."
  },
  "user-directed-tool-use": {
    title: "User-Directed Tool Use & Output Mode Selection",
    description: "Expose clear controls that let users determine how an AI agent responds and which tools it may use, reducing ambiguity, surprises, and risky side effects."
  },
  "reasoning-glimpse": {
    title: "Reasoning Glimpse (Chain-of-Thought Visualization)",
    description: "A structured, human-readable view of how an AI agent is approaching a request, surfaced as a lightweight plan, progress, rationale, and motion cues alongside the final answer."
  },
  "streaming-results-visualizations": {
    title: "Streaming Results (Visualizations)",
    description: "Progressively stream AI-generated results as structured, interactive visual blocks instead of a single monolithic answer."
  },
  "tool-usage-indicators": {
    title: "Tool Usage Indicators",
    description: "Clear, contextual cues showing which tools an AI agent is using, what state each call is in, and how that activity interacts with data and systems."
  },
  "activity-timeline-audit-log": {
    title: "Activity Timeline & Audit Log",
    description: "Provide a transparent, structured history of what agents, tools, and humans did so teams can verify, debug, and govern AI-driven work."
  },
  "execution-progress-view": {
    title: "Execution Progress View",
    description: "Visualizes an AI agent's multi-step plan and current execution state so that users understand what is happening, how far along it is, and where intervention is needed."
  },
  "confessions-view": {
    title: "Confessions View (Post-Task Self-Report)",
    description: "A post-task, structured self-report where the agent explicitly describes how well it followed its instructions, which shortcuts it took, and where it was uncertain, in order to surface misbehavior and support oversight."
  },
  "source-anchoring-grounding": {
    title: "Source Anchoring & Grounding",
    description: "Connects AI-generated outputs to verifiable underlying sources so that every critical statement can be traced, inspected, and trusted."
  },
  "confidence-thermometer": {
    title: "Confidence Thermometer",
    description: "A compact visual and textual indicator that communicates an AI system's self-assessed confidence in its outputs, guiding appropriate scrutiny and next steps."
  },
  "semantic-highlighting-uncertainty": {
    title: "Semantic Highlighting of Uncertainty",
    description: "Visually and interactively expose uncertain portions of AI-generated content so human reviewers can quickly identify, inspect, and act on areas that require judgment."
  },
  "multiple-presented-options": {
    title: "Multiple Presented Options",
    description: "Expose a small set of distinct AI-generated options so that people can compare, adapt, or combine them, reducing over-reliance on a single suggestion and strengthening agency and trust."
  },
  "explanation-on-demand": {
    title: "Explanation-on-Demand",
    description: "Provides an on-demand \"Why?\" control that reveals layered explanations for AI outputs, allowing users to inspect reasoning without cluttering the primary workflow."
  },
  "counter-evidence": {
    title: "Counter-Evidence",
    description: "A structured UI pattern that presents both supporting and contradicting evidence for AI outputs, helping users form nuanced judgments and calibrate trust in agentic systems."
  },
  "orchestration-graph": {
    title: "Orchestration Graph",
    description: "Visual, interactive graphs that show how AI agents collaborate, hand off tasks, and progress through a workflow, enabling transparent monitoring, debugging, and human oversight."
  },
  "agent-registry-profiles": {
    title: "Agent Registry & Profiles",
    description: "Centralized, searchable catalog of AI agents that exposes each agent's role, permissions, performance, and history so humans can confidently select, configure, and govern agentic behavior."
  },
  "supervisor-agent": {
    title: "Supervisor Agent",
    description: "A centralized oversight agent that monitors, evaluates, and governs the actions and outputs of other agents, enforcing policies while making interventions visible, explainable, and controllable."
  },
  "agent-handover-briefs": {
    title: "Agent Handover Briefs",
    description: "Structured, reviewable summaries passed between AI agents and humans to preserve context, minimize errors, and increase trust during handoffs in multi-agent workflows."
  },
  "assignment-board-work-queues": {
    title: "Assignment Board & Work Queues",
    description: "Visual task board for monitoring and directing work across human and AI agents, providing transparent status, accountability, and safe intervention in multi-agent workflows."
  },
  "escalation-fallback-routing": {
    title: "Escalation & Fallback Routing",
    description: "A structured way for agentic systems to hand off work when limits are reached—routing to alternative agents or humans while keeping the process transparent, auditable, and controllable."
  },
  "memory-inspector-editor": {
    title: "Memory Inspector & Editor",
    description: "A dedicated surface that exposes an AI agent's stored memories as structured, editable items, enabling transparent personalization and explicit control over what the agent remembers and uses."
  },
  "preference-persona-settings": {
    title: "Agent Persona Profiles & Settings",
    description: "Configurable behavior profiles that capture tone, style, defaults, and risk posture for AI agents, applied consistently across interactions to improve predictability and align outputs with user expectations."
  },
  "privacy-data-usage-controls": {
    title: "Privacy & Data Usage Controls",
    description: "Controls that make AI data collection, storage, and usage visible and adjustable, so that individuals and organizations can decide how an agentic system handles their information."
  },
  "context-repository-profile-store": {
    title: "Agent Context Repository & Workspace Profiles",
    description: "A centralized, governed workspace context store that gives agents shared, non-personal knowledge—brand, policy, goals, and project briefs—so behavior is consistent and explainable across users, agents, and sessions."
  },
  "user-preference-context-profiles": {
    title: "User Preference & Context Profiles",
    description: "A persistent, user-controlled \"about me\" profile that captures goals, background, working style, and constraints, applied across agents and sessions so every interaction feels tailored, consistent, and respectful of the user's intent and boundaries."
  },
  "safe-failure-states": {
    title: "Safe Failure States",
    description: "Agentic AI systems avoid harmful or confusing behavior by failing in clear, contained, and recoverable ways that protect data, preserve context, and maintain trust."
  },
  "guided-repair-flows": {
    title: "Guided Repair Flows",
    description: "Structured, interactive flows that turn AI failures into guided co-repair moments, resolving issues while building understanding, predictability, and long-term trust."
  },
  "sentiment-aware-response-styles": {
    title: "Sentiment-Aware Response Styles",
    description: "Adaptive response style that adjusts tone, length, and structure based on inferred user sentiment to reduce frustration, increase clarity, and strengthen trust in agentic AI interactions."
  },
  "apology-remedy-bundle": {
    title: "Apology + Remedy Bundle",
    description: "A pattern for turning AI mistakes into trust-building moments by combining a clear apology, explanation, and concrete repair options in a single, structured interaction."
  },
  "fleet-health-dashboard": {
    title: "Fleet Health Dashboard",
    description: "A centralized, real-time operations view that surfaces the health, performance, and governance status of an AI agent fleet, enabling proactive oversight, faster recovery, and transparent communication to end-users."
  },
  "risk-and-policy-heatmaps": {
    title: "Risk & Policy Heatmaps",
    description: "Visualize AI agent risk across workflows to guide governance decisions, make policies actionable, and reinforce organizational and end-user trust."
  },
  "access-permission-tiers": {
    title: "Access & Permission Tiers for Agents",
    description: "A structured way to define, assign, and expose granular permission tiers for AI agents so that agent behavior remains aligned with organizational roles, environments, and risk thresholds."
  },
  "workflow-policy-template-library": {
    title: "Workflow & Policy Template Library",
    description: "Centralized library of vetted AI workflows and policies that enables safe reuse, consistent guardrails, and faster rollout of agentic AI across an organization."
  }
};

export const config = {
  matcher: ['/agentic_ai_patterns', '/agentic_ai_patterns/:path*']
};

export default function middleware(request) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  const isCrawler = SOCIAL_CRAWLERS.some(bot => userAgent.includes(bot));

  if (!isCrawler) {
    return; // Let request proceed normally to the SPA
  }

  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(Boolean);
  // pathParts[0] = 'agentic_ai_patterns', pathParts[1] = pattern slug (if exists)
  const patternSlug = pathParts[1] || null;

  const meta = getMetaForRoute(patternSlug);
  const html = generateCrawlerHTML(meta);

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
}

function getMetaForRoute(patternSlug) {
  const baseImage = 'https://dustinkirk.com/projects/aitrustpatterns/ai-trust-patterns.png';

  // Overview page (no pattern slug or 'patterns' route)
  if (!patternSlug || patternSlug === 'patterns') {
    return {
      title: 'Agentic AI UX Patterns - Building Trust in AI Applications | Dustin Kirk',
      description: '45+ UX design patterns for building trust in AI and agentic applications. Learn how to design transparent, controllable, and trustworthy AI experiences.',
      image: baseImage,
      url: 'https://dustinkirk.com/agentic_ai_patterns'
    };
  }

  // Individual pattern page
  const pattern = PATTERNS[patternSlug];
  if (pattern) {
    return {
      title: `${pattern.title} - Agentic AI UX Patterns | Dustin Kirk`,
      description: pattern.description,
      image: baseImage,
      url: `https://dustinkirk.com/agentic_ai_patterns/${patternSlug}`
    };
  }

  // Fallback for unknown patterns
  return {
    title: 'Agentic AI UX Patterns | Dustin Kirk',
    description: 'UX design patterns for building trust in AI and agentic applications.',
    image: baseImage,
    url: `https://dustinkirk.com/agentic_ai_patterns/${patternSlug}`
  };
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function generateCrawlerHTML(meta) {
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const image = escapeHtml(meta.image);
  const url = escapeHtml(meta.url);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${url}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${image}">
  <meta property="og:image:width" content="1024">
  <meta property="og:image:height" content="572">
  <meta property="og:site_name" content="Dustin Kirk - Principal Product Designer">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${url}">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${image}">

  <!-- Canonical URL -->
  <link rel="canonical" href="${url}">
</head>
<body>
  <h1>${title}</h1>
  <p>${description}</p>
  <p>Visit <a href="${url}">${url}</a> to learn more.</p>
</body>
</html>`;
}
