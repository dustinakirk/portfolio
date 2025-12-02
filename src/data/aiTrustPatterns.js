// AI Trust Patterns - Data Structure
// Categories and patterns for building trust in AI and agentic applications

export const AI_TRUST_PATTERN_CATEGORIES = [
  { id: 'relationship', name: '1. Relationship Framing & Role Clarity', description: 'Establish agent identity, capabilities, and boundaries' },
  { id: 'onboarding', name: '2. Onboarding & Learning', description: 'Guide users through first experiences and feature discovery' },
  { id: 'control', name: '3. Control & Safety', description: 'Enable user override, pause, and safety mechanisms' },
  { id: 'dialogue', name: '4. Dialogue & Clarification', description: 'Handle ambiguity and confirm user intent' },
  { id: 'visibility', name: '5. Visibility & Transparency', description: 'Show AI reasoning, progress, and decision-making' },
  { id: 'grounding', name: '6. Grounding, Uncertainty & Alternatives', description: 'Express confidence levels and offer options' },
  { id: 'orchestration', name: '7. Multi-Agent Orchestration & Oversight', description: 'Coordinate multiple agents with human oversight' },
  { id: 'memory', name: '8. Memory, Personalization & Data Use', description: 'Manage context, preferences, and data privacy' },
  { id: 'error', name: '9. Error Handling, Empathy & Repair', description: 'Recover gracefully from failures and mistakes' },
  { id: 'fleet', name: '10. Fleet-Level Ops & Governance', description: 'Monitor, audit, and govern AI deployments at scale' },
];

export const AI_TRUST_PATTERNS = [
  {
    id: 'agent-identity-role-contract',
    title: 'Agent Identity & Role Contract',
    category: 'relationship',
    shortDescription: 'Make an AI agent\'s role, authority, and boundaries explicit so people know what to trust it with.',
    content: {
      problem: 'When an agent feels like a black box that can do anything, people either over-trust it or avoid it entirely.',
      solution: 'Give each agent a clear identity, a concise contract describing responsibilities and limits, and a transparent list of connected tools and data.',
      implementation: 'Create Agent Card headers, Role Contract panels with Trusted for/Will not do/Requires approval sections, and Data & Tools views with permission levels.',
    },
    mainImage: {
      src: '',
      alt: 'Agent Identity & Role Contract pattern showing agent card and role contract panel',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI agent identity', 'role contract', 'agent permissions', 'AI trust', 'agent boundaries', 'AI capabilities', 'agent authority'],
    },
    relatedPatterns: ['confirmed-assumptions', 'delegation-modes'],
  },
  {
    id: 'delegation-modes',
    title: 'Delegation Modes',
    category: 'relationship',
    shortDescription: 'Make AI autonomy explicit with three delegation levels (Advisor, Co-Pilot, Autopilot), giving users controllable delegation and preventing surprise automation.',
    content: {
      problem: 'Without explicit modes, autonomy creeps—users assume the AI is just suggesting when it\'s actually making changes, or avoid delegation entirely because they can\'t see the edges.',
      solution: 'Define 3 legible levels: Advisor (suggest only), Co-Pilot (draft and wait for approval), Autopilot (execute within guardrails). Make the current mode always visible.',
      implementation: 'Create a mode selector control, define clear promises for each mode, implement guardrails for Autopilot, and allow per-task overrides with easy escape hatches.',
    },
    mainImage: {
      src: '',
      alt: 'Delegation Modes pattern showing Advisor, Co-Pilot, and Autopilot mode selector',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI delegation', 'agentic UX', 'AI autonomy', 'trust patterns', 'AI control', 'human-in-the-loop', 'autopilot mode', 'AI UX design'],
    },
    relatedPatterns: ['agent-identity-role-contract', 'confirmed-assumptions'],
  },
  {
    id: 'confirmed-assumptions',
    title: 'Confirmed Assumptions Panel',
    category: 'dialogue',
    shortDescription: 'Surface AI inferences as editable assumptions so users can correct them before they affect outputs—building trust through transparency.',
    content: {
      problem: 'AI agents infer missing details to keep flows fast, but hidden assumptions lead to unexpected outputs, wasted effort, and eroded trust.',
      solution: 'Display assumptions in a dedicated panel with inline edit controls. Let users confirm, modify, or scope assumptions before proceeding.',
      implementation: 'Create a collapsible assumptions panel that appears when the agent makes inferences. Show the inferred value, edit control, scope selector, and "Affects" hints.',
    },
    mainImage: {
      src: '/projects/aitrustpatterns/patterns/confirmed_assumptions_hero.png',
      alt: 'Confirmed Assumptions Panel showing editable AI inferences with region, quarter, and currency controls',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: [
        'AI assumptions panel',
        'agentic UX patterns',
        'AI transparency design',
        'user trust AI',
        'AI inference visibility',
        'editable AI assumptions',
        'AI UX best practices',
        'building trust in AI'
      ],
    },
    relatedPatterns: ['agent-identity-role-contract', 'delegation-modes'],
  },
];

// Helper functions
export function getPatternById(id) {
  return AI_TRUST_PATTERNS.find(p => p.id === id);
}

export function getPatternsByCategory(categoryId) {
  return AI_TRUST_PATTERNS.filter(p => p.category === categoryId);
}

export function getCategoryById(categoryId) {
  return AI_TRUST_PATTERN_CATEGORIES.find(c => c.id === categoryId);
}

export function getAllPatternIds() {
  return AI_TRUST_PATTERNS.map(p => p.id);
}
