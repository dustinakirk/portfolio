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
    index: '1.1',
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
    index: '1.2',
    title: 'Delegation Modes (Advisor → Co‑Pilot → Autopilot)',
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
    id: 'structured-clarification-prompts',
    index: '4.1',
    title: 'Structured Clarification Prompts',
    category: 'dialogue',
    shortDescription: 'Short, focused question sets that an AI agent surfaces when a request is underspecified or risky, packaged as a compact, structured panel of clarifications.',
    content: {
      problem: 'Without this pattern, agentic systems exhibit silent assumption, interrogation mode, or fragmented clarification—leading to errors, frustration, and loss of trust.',
      solution: 'Package necessary questions into a deliberate, minimal, and visible step with structured controls, reducing error cascades and supporting auditability.',
      implementation: 'Create clarification question objects with labels, descriptions, structured inputs (radio, checkbox, slider), escape hatches for custom answers, and preference persistence.',
    },
    mainImage: {
      src: '',
      alt: 'Structured Clarification Prompts pattern showing a compact panel of targeted questions before workflow execution',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['structured clarification', 'AI prompts', 'clarification questions', 'agentic AI', 'workflow automation', 'user intent', 'AI trust patterns', 'pre-execution prompts'],
    },
    relatedPatterns: ['confirmed-assumptions', 'human-in-the-loop-hitl-gates', 'plan-then-execute-workflow'],
  },
  {
    id: 'edit-request',
    index: '4.2',
    title: 'Edit Request',
    category: 'dialogue',
    shortDescription: 'Inline editing of a previously sent request so users can refine intent after seeing how an AI agent interpreted it.',
    content: {
      problem: 'Without Edit Request, conversational AI systems often exhibit post-hoc realization of ambiguity, tangled conversations from appending corrections, and propagating errors from early misinterpretations.',
      solution: 'Allow users to revise a previously sent prompt after the AI has responded, with clear version history, timeline updates, and re-execution of the agent from the edited message.',
      implementation: 'Create inline edit affordances on user messages, maintain version history, define safe edit boundaries for irreversible actions, and support both in-place editing and branching workflows.',
    },
    mainImage: {
      src: '',
      alt: 'Edit Request pattern showing inline message editing with version history',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['edit request', 'AI prompts', 'refine intent', 'agentic AI', 'conversational AI', 'user intent', 'AI trust patterns', 'message editing', 'request revision'],
    },
    relatedPatterns: ['structured-clarification-prompts', 'rollback-version-history', 'confirmed-assumptions'],
  },
  {
    id: 'confirmed-assumptions',
    index: '4.3',
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
  {
    id: 'sandboxed-playgrounds',
    index: '2.1',
    title: 'Sandboxed Playgrounds',
    category: 'onboarding',
    shortDescription: 'Interactive, consequence-free environments where users can rehearse AI-driven workflows and see hypothetical impact before enabling them on real data or systems.',
    content: {
      problem: 'Agentic AI systems can perform complex, large-scale actions on behalf of users. Without any form of safe rehearsal environment, users are unsure what the AI will do, learn by doing on live data, and struggle to calibrate trust.',
      solution: 'Provide a sandbox environment where the AI agent behaves as if operating on production data, but all actions are simulated. Let users experiment, refine configurations, and observe projected outcomes without real-world side effects.',
      implementation: 'Create sandbox sessions with clear environment indicators, simulation results with diffs, and deliberate promotion flows to production with role-based permissions.',
    },
    mainImage: {
      src: '',
      alt: 'Sandboxed Playgrounds pattern showing simulation mode with before/after diffs',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI sandbox', 'simulation mode', 'dry run', 'AI trust', 'safe AI testing', 'AI preview', 'consequence-free AI', 'agentic UX'],
    },
    relatedPatterns: ['agent-identity-role-contract', 'delegation-modes', 'confirmed-assumptions'],
  },
  {
    id: 'wayfinders',
    index: '2.2',
    title: 'Wayfinders (Capability Discovery)',
    category: 'onboarding',
    shortDescription: 'On-screen prompts and affordances that reveal what an AI agent can do in the current context, turning blank states into clear, actionable starting points.',
    content: {
      problem: 'Without explicit guidance, AI interfaces often present a blank input and an abstract promise. This creates friction and undermines trust, especially in professional workflows.',
      solution: 'Surface concrete, context-aware capabilities through wayfinder suggestions that transform uncertainty into guided exploration and set realistic boundaries.',
      implementation: 'Create wayfinder suggestions as chips/cards with labels, descriptions, and controls. Adapt suggestions based on context, page, selection, and user actions.',
    },
    mainImage: {
      src: '',
      alt: 'Wayfinders pattern showing capability discovery chips and contextual suggestions',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI capability discovery', 'wayfinders', 'AI onboarding', 'prompt suggestions', 'AI trust', 'contextual AI', 'agentic UX', 'AI empty states'],
    },
    relatedPatterns: ['agent-identity-role-contract', 'sandboxed-playgrounds', 'confirmed-assumptions'],
  },
  {
    id: 'progressive-disclosure-modes',
    index: '2.3',
    title: 'Progressive Disclosure Modes',
    category: 'onboarding',
    shortDescription: 'A structured mode system that reveals complexity gradually, supporting both novices and experts while maintaining trust in agentic AI behavior.',
    content: {
      problem: 'Agentic AI systems often generate complex, multi-step behavior that can feel opaque or overwhelming, especially when multiple tools, data sources, and agents are involved.',
      solution: 'Introduce distinct interaction levels (Simple and Advanced/Supervisor) that align the AI experience with user expertise and risk-tolerance.',
      implementation: 'Create a mode toggle connected to an expanded system view. Define what each mode shows, implement role-aware behavior, and persist mode preferences.',
    },
    mainImage: {
      src: '',
      alt: 'Progressive Disclosure Modes pattern showing Simple and Supervisor mode toggle',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['progressive disclosure', 'AI modes', 'simple mode', 'supervisor mode', 'AI trust', 'agentic UX', 'expert mode', 'novice UI'],
    },
    relatedPatterns: ['sandboxed-playgrounds', 'wayfinders', 'agent-identity-role-contract'],
  },
  {
    id: 'teach-me-interfaces',
    index: '2.4',
    title: 'Teach Me Interfaces',
    category: 'onboarding',
    shortDescription: 'Interfaces that turn user corrections into persistent, inspectable rules so the AI system becomes a jointly configured partner rather than an opaque black box.',
    content: {
      problem: 'Without "Teach Me" interfaces, AI systems feel unteachable—corrections are applied once but not remembered, systems adjust behavior in hidden ways, rich automation is too complex, and users fear corrections will silently impact wide swaths of behavior.',
      solution: 'Lightweight teaching surfaces embedded in AI workflows that turn moments of friction or failure into learning events. The system invites users to articulate "what should happen next time" and converts that into reusable rules.',
      implementation: 'Create teachable moment detection, micro-teaching UI for structured rule capture, and rule management surfaces where accumulated lessons are visible, editable, and reversible.',
    },
    mainImage: {
      src: '',
      alt: 'Teach Me Interfaces pattern showing inline rule creation from corrections',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['teach me AI', 'AI learning', 'user corrections', 'AI rules', 'AI preferences', 'AI trust', 'agentic UX', 'AI personalization', 'machine teaching'],
    },
    relatedPatterns: ['sandboxed-playgrounds', 'wayfinders', 'progressive-disclosure-modes'],
  },
  {
    id: 'scenario-templates-and-recipes',
    index: '2.5',
    title: 'Scenario Templates & Recipes',
    category: 'onboarding',
    shortDescription: 'Pre-built, domain-specific AI workflows that help users articulate complex requests by selecting and customizing structured "recipes" instead of starting from a blank prompt.',
    content: {
      problem: 'Without scenario templates, interaction with an agentic AI system often begins from a blank input field, creating blank-page paralysis, unclear system boundaries, inconsistent outcomes, and high onboarding costs.',
      solution: 'Present named scenarios (Quarterly Business Review, Release Readiness Review, Incident Postmortem) that can be instantiated with a small set of inputs, turning proven workflows into discoverable, guided, and repeatable building blocks.',
      implementation: 'Create a Templates/Recipes gallery with structured recipe objects containing goals, steps, agents, inputs, data sources, and outputs. Support preview, customization, execution monitoring, and governance workflows.',
    },
    mainImage: {
      src: '',
      alt: 'Scenario Templates & Recipes pattern showing a gallery of recipe cards with steps and inputs',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI templates', 'scenario recipes', 'AI workflows', 'prompt templates', 'AI onboarding', 'agentic UX', 'AI trust patterns', 'workflow automation'],
    },
    relatedPatterns: ['sandboxed-playgrounds', 'wayfinders', 'teach-me-interfaces'],
  },
  {
    id: 'feedback-on-results',
    index: '2.6',
    title: 'Feedback on Results & Rating Controls',
    category: 'onboarding',
    shortDescription: 'Lightweight, contextual mechanisms for reacting to AI outputs—so the system can continuously learn from real usage and recover quickly when it gets things wrong.',
    content: {
      problem: 'Without explicit feedback mechanisms, AI-driven products often behave as opaque, static systems, even when they are technically capable of learning.',
      solution: 'Feedback and rating controls are small, always-available affordances attached to AI-generated outputs that allow users to quickly signal whether a result was helpful, harmful, or off-target.',
      implementation: 'Place feedback controls consistently near AI outputs with minimal primary reaction controls, optional enrichment via tags and text, inline repair options, and clear scope communication.',
    },
    mainImage: {
      src: '',
      alt: 'Feedback on Results & Rating Controls pattern showing thumbs up/down with optional tags and inline repair',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI feedback', 'rating controls', 'AI learning', 'user feedback', 'AI trust', 'thumbs up down', 'AI improvement', 'agentic UX', 'inline repair', 'preference learning'],
    },
    relatedPatterns: ['teach-me-interfaces', 'scenario-templates-and-recipes'],
  },
  {
    id: 'kill-switch-pause-resume',
    index: '3.1',
    title: 'Kill Switch, Pause & Resume',
    category: 'control',
    shortDescription: 'A control pattern that gives users immediate, graduated control over long-running or autonomous AI agents through clear Pause, Resume, and Stop mechanisms.',
    content: {
      problem: 'Without explicit kill, pause, and resume controls, long-running or autonomous agents create trust and safety issues: loss of perceived control, fear of runaway damage, inability to inspect and correct mid-execution, and operational/regulatory concerns.',
      solution: 'Introduce dedicated Pause, Resume/Continue, and Stop/Cancel controls so users can confidently start powerful automations knowing they can always slow, adjust, or terminate execution.',
      implementation: 'Create a visible control cluster with persistent Pause/Stop buttons, clear state indicators (Running, Paused, Stopped), checkpoint-based execution, and comprehensive audit logs.',
    },
    mainImage: {
      src: '',
      alt: 'Kill Switch, Pause & Resume pattern showing control strip with Pause, Resume, and Stop buttons',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI kill switch', 'pause resume AI', 'AI agent control', 'stop AI agent', 'AI safety controls', 'agentic UX', 'AI trust patterns', 'human oversight AI'],
    },
    relatedPatterns: ['delegation-modes', 'agent-identity-role-contract'],
  },
  {
    id: 'human-in-the-loop-hitl-gates',
    index: '3.2',
    title: 'Human-in-the-Loop (HITL) Gates',
    category: 'control',
    shortDescription: 'A pattern that pauses AI-driven actions at defined checkpoints so humans can review, edit, and approve high-impact steps before execution, maintaining safety, accountability, and trust.',
    content: {
      problem: 'Without explicit gates, agentic systems can feel opaque and risky: unpredictable automation, high-stakes irreversible consequences, governance gaps, limited accountability, and cognitive overload from constant supervision.',
      solution: 'Introduce explicit checkpoints where an AI agent must obtain human approval before performing real-world actions. Surface Gate Requests with clear context, risk indicators, and decision controls.',
      implementation: 'Create Gate Request objects with labels, descriptions, and metadata. Provide inline gate cards in chat, centralized Approvals views, multi-channel notifications, and policy-driven configuration.',
    },
    mainImage: {
      src: '',
      alt: 'Human-in-the-Loop Gates pattern showing approval card with action summary, risk indicators, and approve/reject controls',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['human-in-the-loop', 'HITL', 'AI approval gates', 'AI safety', 'human oversight', 'AI trust patterns', 'agentic UX', 'AI governance', 'approval workflows', 'AI control'],
    },
    relatedPatterns: ['kill-switch-pause-resume', 'delegation-modes', 'agent-identity-role-contract'],
  },
  {
    id: 'plan-then-execute-workflow',
    index: '3.3',
    title: 'Plan-then-Execute Workflow (Unified Stream Variant)',
    category: 'control',
    shortDescription: 'A conversational workflow where an AI agent first proposes an explicit, editable plan for multi-step or risky tasks, then executes that plan with clear checkpoints, controls, and auditability.',
    content: {
      problem: 'Without a plan-then-execute pattern, agentic systems tend to behave as opaque "black boxes" with hidden intent and side effects, leading to over- or under-confidence and high costs from misunderstanding.',
      solution: 'Introduce an explicit planning phase where the agent surfaces a structured plan as part of the chat, invites refinement, and only then proceeds to execution with visible progress and controls.',
      implementation: 'Combine risk detection, plan representation as structured data, execution engine with checkpoints, and comprehensive logging to create a transparent, controllable workflow.',
    },
    mainImage: {
      src: '',
      alt: 'Plan-then-Execute Workflow pattern showing plan proposal, editing, approval, and execution phases',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI planning', 'plan-then-execute', 'agentic workflow', 'AI trust', 'human oversight', 'execution control', 'AI transparency', 'agentic UX'],
    },
    relatedPatterns: ['delegation-modes', 'sandboxed-playgrounds', 'human-in-the-loop-hitl-gates', 'kill-switch-pause-resume'],
  },
  {
    id: 'steerability-polite-interruption',
    index: '3.4',
    title: 'Steerability & Polite Interruption',
    category: 'control',
    shortDescription: 'Enables users to redirect an agentic AI mid-task, preserving useful progress while clearly acknowledging and incorporating new intent.',
    content: {
      problem: 'Without steerability and polite interruption, long-running workflows feel brittle, users experience anxiety when they cannot confirm corrections were applied, and conversation flows become linear scripts instead of flexible dialogues.',
      solution: 'Define how the agent detects and responds to interruptions (both explicit and implicit), how it adjusts its plan, and how it communicates status back to the user in a calm, trustworthy manner.',
      implementation: 'Create steerable agent runs with versioned plans, immediate acknowledgment of interruptions, non-destructive plan updates, selective rollback for external actions, and comprehensive logging.',
    },
    mainImage: {
      src: '',
      alt: 'Steerability & Polite Interruption pattern showing mid-task redirection with plan adaptation',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI steerability', 'polite interruption', 'mid-task correction', 'AI control', 'agentic UX', 'AI trust patterns', 'plan adaptation', 'conversational AI', 'AI redirection'],
    },
    relatedPatterns: ['kill-switch-pause-resume', 'human-in-the-loop-hitl-gates', 'plan-then-execute-workflow'],
  },
  {
    id: 'scoped-permissions-tool-consent',
    index: '3.5',
    title: 'Scoped Permissions & Tool Consent',
    category: 'control',
    shortDescription: 'Explicit, granular permission flows that define what an AI agent can access or do, for how long, and with which tools, in a way that is understandable, reviewable, and revocable.',
    content: {
      problem: 'Without clear, scoped permissions, AI agents create trust issues: sensitive tools feel "magically accessible," users cannot see what the agent can do or revoke access, and admins lack enforceable guardrails.',
      solution: 'Introduce structured, scoped permissions that balance autonomy with control: inline consent prompts, a centralized permissions dashboard, and clear expiration and revocation mechanisms.',
      implementation: 'Create Permission Grant objects with agent, tool, capabilities, scope, and expiration. Provide inline consent UI with scope options and capability toggles, plus admin dashboards for review and revocation.',
    },
    mainImage: {
      src: '',
      alt: 'Scoped Permissions & Tool Consent pattern showing consent modal with scope options and capability toggles',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI permissions', 'tool consent', 'scoped access', 'AI trust', 'agentic UX', 'permission flows', 'revocable access', 'AI governance', 'enterprise AI', 'OAuth AI'],
    },
    relatedPatterns: ['delegation-modes', 'human-in-the-loop-hitl-gates', 'agent-identity-role-contract'],
  },
  {
    id: 'rollback-version-history',
    index: '3.6',
    title: 'Rollback & Version History',
    category: 'control',
    shortDescription: 'Provide deterministic checkpoints and version history so agent-driven changes are always reversible, enabling safe experimentation and recovery from mistakes with minimal disruption.',
    content: {
      problem: 'Without robust rollback and version history, experimentation feels dangerous, failures are hard to unwind, and trust decays over time as teams limit agents to low-risk tasks.',
      solution: 'Create deterministic checkpoints before agent actions, expose version history in timeline/list views, and allow users to preview diffs and restore previous states with clear confirmation.',
      implementation: 'Implement checkpoint strategy (automatic before high-risk actions, on schedule, on manual request), state capture approaches (snapshot-based, event-sourced, or hybrid), security/governance controls, and agent-aware planning with checkpoint references.',
    },
    mainImage: {
      src: '',
      alt: 'Rollback & Version History pattern showing change timeline with checkpoint restoration',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI rollback', 'version history', 'checkpoints', 'undo agent changes', 'version control', 'change history', 'AI safety', 'agentic UX', 'audit trail', 'agent recovery'],
    },
    relatedPatterns: ['kill-switch-pause-resume', 'plan-then-execute-workflow', 'scoped-permissions-tool-consent', 'human-in-the-loop-hitl-gates'],
  },
  {
    id: 'user-directed-tool-use',
    index: '3.7',
    title: 'User-Directed Tool Use & Output Mode Selection',
    category: 'control',
    shortDescription: 'Expose clear controls that let users determine how an AI agent responds and which tools it may use, reducing ambiguity, surprises, and risky side effects.',
    content: {
      problem: 'Without user-directed tool and mode controls, agentic systems create friction through opaque tool usage, output-type mismatches, safety concerns, and difficult debugging.',
      solution: 'Surface explicit mode selectors (text, code, SQL, diagram) and tool usage policies (Auto, Ask, Off) in the chat composer so users can control AI behavior before each message.',
      implementation: 'Create mode chips or segmented controls near the composer, map modes to allowed tools and response formats, honor constraints strictly, and show tool usage indicators in responses.',
    },
    mainImage: {
      src: '',
      alt: 'User-Directed Tool Use & Output Mode Selection pattern showing mode chips and tool usage toggle',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI tool selection', 'output mode', 'user control', 'AI transparency', 'tool usage', 'agentic UX', 'AI trust patterns', 'mode selector', 'AI governance'],
    },
    relatedPatterns: ['scoped-permissions-tool-consent', 'delegation-modes', 'agent-identity-role-contract'],
  },
  {
    id: 'reasoning-glimpse',
    index: '5.1',
    title: 'Reasoning Glimpse (Chain-of-Thought Visualization)',
    category: 'visibility',
    shortDescription: 'A structured, human-readable view of how an AI agent is approaching a request, surfaced as a lightweight plan, progress, rationale, and motion cues alongside the final answer.',
    content: {
      problem: 'Without any reasoning visibility, AI-powered systems often feel opaque and unpredictable: black-box answers, uncertain progress, no opportunity to course-correct, and weak auditability.',
      solution: 'Turn an opaque internal process into a visible, controllable, and auditable workflow by presenting a simple plan, showing progress through that plan, and leaving behind a trace of why the agent took certain actions.',
      implementation: 'Create structured Reasoning Steps with labels, descriptions, status indicators, and visual motion cues. Support inline views, expanded traces, and persistent audit trails.',
    },
    mainImage: {
      src: '',
      alt: 'Reasoning Glimpse pattern showing step-by-step AI reasoning trace with progress indicators',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI reasoning', 'chain of thought', 'AI transparency', 'AI trust', 'progress visualization', 'agentic UX', 'AI audit trail', 'reasoning trace'],
    },
    relatedPatterns: ['plan-then-execute-workflow', 'human-in-the-loop-hitl-gates', 'delegation-modes'],
  },
  {
    id: 'streaming-results-visualizations',
    index: '5.2',
    title: 'Streaming Results (Visualizations)',
    category: 'visibility',
    shortDescription: 'Progressively stream AI-generated results as structured, interactive visual blocks instead of a single monolithic answer.',
    content: {
      problem: 'In many AI-driven interfaces, responses are delivered as monolithic text once the model finishes generating, creating uncertainty about progress and completeness, low usability for data-heavy answers, and wasted time waiting for all-or-nothing results.',
      solution: 'Treat the AI as a real-time collaborator whose work becomes visible and usable as soon as it reaches a minimally useful state, while clearly signalling status and completeness through structured visualizations.',
      implementation: 'Use streaming-capable protocols to deliver partial results, define units of streaming per visualization type, implement explicit state management for result blocks, and enable early interactivity while maintaining clear progress indicators.',
    },
    mainImage: {
      src: '',
      alt: 'Streaming Results Visualizations pattern showing progressive loading of tables, charts, and cards',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI streaming', 'progressive results', 'AI visualization', 'real-time AI', 'streaming UX', 'AI trust patterns', 'partial results', 'agentic UX', 'streaming tables', 'progressive loading'],
    },
    relatedPatterns: ['reasoning-glimpse', 'plan-then-execute-workflow'],
  },
  {
    id: 'tool-usage-indicators',
    index: '5.3',
    title: 'Tool Usage Indicators',
    category: 'visibility',
    shortDescription: 'Clear, contextual cues showing which tools an AI agent is using, what state each call is in, and how that activity interacts with data and systems.',
    content: {
      problem: 'Without visible tool usage, AI agents feel like opaque black boxes with unpredictable side effects. Users cannot tell where answers come from, hidden writes become dangerous, and a single loading indicator conflates all activity.',
      solution: 'Make tool-driven activity visible through inline indicators that distinguish between pure reasoning, read-only tool use, and write/side-effectful operations, with clear lifecycle states for each call.',
      implementation: 'Create Tool Call Indicator objects with labels, descriptions, controls, and metadata. Provide inline activity sections, expandable timelines, approval controls for writes, and comprehensive audit logging.',
    },
    mainImage: {
      src: '',
      alt: 'Tool Usage Indicators pattern showing inline tool activity with status, read/write labels, and approval controls',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI tool usage', 'tool indicators', 'AI transparency', 'AI trust', 'agentic UX', 'tool calls', 'AI visibility', 'system integration', 'AI audit trail', 'tool status'],
    },
    relatedPatterns: ['reasoning-glimpse', 'streaming-results-visualizations', 'human-in-the-loop-hitl-gates', 'scoped-permissions-tool-consent'],
  },
  {
    id: 'activity-timeline-audit-log',
    index: '5.4',
    title: 'Activity Timeline & Audit Log',
    category: 'visibility',
    shortDescription: 'Provide a transparent, structured history of what agents, tools, and humans did so teams can verify, debug, and govern AI-driven work.',
    content: {
      problem: 'Agentic AI systems can feel opaque and untrustworthy without a clear record of what actually happened.',
      solution: 'Present a chronological record of everything an AI agent did, enabling teams to confirm scope, reconstruct decisions, investigate incidents, and demonstrate compliance.',
      implementation: 'Create Activity Timeline surfaces with timestamped events, filtering/search, immutable logs, export capabilities, and role-based access controls.',
    },
    mainImage: {
      src: '',
      alt: 'Activity Timeline showing chronological agent events',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['audit log', 'activity timeline', 'AI transparency', 'agent history', 'AI compliance', 'event log', 'agentic UX', 'AI governance'],
    },
    relatedPatterns: ['reasoning-glimpse', 'streaming-results-visualizations', 'tool-usage-indicators', 'rollback-version-history'],
  },
  {
    id: 'execution-progress-view',
    index: '5.5',
    title: 'Execution Progress View',
    category: 'visibility',
    shortDescription: 'Visualizes an AI agent\'s multi-step plan and current execution state so that users understand what is happening, how far along it is, and where intervention is needed.',
    content: {
      problem: 'Without an explicit execution view, agentic workflows often feel opaque and unpredictable with vague status indicators and no visibility into progress or blockers.',
      solution: 'Display a structured visualization of the agent\'s work as a step-based tracker with progress indicators, highlighting current steps, completed work, and blockers requiring attention.',
      implementation: 'Create step-based trackers with status states, real-time updates, and controls for pause/resume/cancel. Support parallel branches, blocked states, and comprehensive audit logging.',
    },
    mainImage: {
      src: '',
      alt: 'Execution Progress View showing step-based tracker with progress indicators',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI progress view', 'execution tracker', 'step visualization', 'AI transparency', 'workflow progress', 'agentic UX', 'AI trust patterns', 'multi-step execution'],
    },
    relatedPatterns: ['plan-then-execute-workflow', 'reasoning-glimpse', 'activity-timeline-audit-log', 'kill-switch-pause-resume'],
  },
  {
    id: 'source-anchoring-grounding',
    index: '6.1',
    title: 'Source Anchoring & Grounding',
    category: 'grounding',
    shortDescription: 'Connects AI-generated outputs to verifiable underlying sources so that every critical statement can be traced, inspected, and trusted.',
    content: {
      problem: 'Without explicit grounding, AI answers often feel like authoritative guesses. Users cannot see what the system looked at, verification is costly, and ungrounded responses are hard to defend in audits or reviews.',
      solution: 'Link AI responses to underlying evidence—documents, code, databases, logs, dashboards, or APIs. Make verification trivial through inline citations, hover previews, and source panels.',
      implementation: 'Create source citation objects with labels, descriptions, controls, and metadata. Support inline markers, side panels, split-screen views, and tool activity timelines for comprehensive evidence inspection.',
    },
    mainImage: {
      src: '',
      alt: 'Source Anchoring & Grounding pattern showing AI response with inline citations and source panel',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI citations', 'source grounding', 'AI transparency', 'verifiable AI', 'AI trust', 'evidence-based AI', 'AI provenance', 'agentic UX', 'AI references', 'grounded AI'],
    },
    relatedPatterns: ['reasoning-glimpse', 'tool-usage-indicators', 'activity-timeline-audit-log'],
  },
  {
    id: 'confidence-thermometer',
    index: '6.2',
    title: 'Confidence Thermometer',
    category: 'grounding',
    shortDescription: 'A compact visual and textual indicator that communicates an AI system\'s self-assessed confidence in its outputs, guiding appropriate scrutiny and next steps.',
    content: {
      problem: 'Without an explicit confidence signal, AI-generated output tends to appear more authoritative than it truly is, leading to overtrust, undertrust, or unclear next steps when uncertainty is high.',
      solution: 'A Confidence Thermometer is an inline UI element that exposes how certain an AI system is about a specific output or action, combining an icon or gauge, a textual label, and optional detail explaining why the system is more or less certain.',
      implementation: 'Create confidence indicators with coarse bands (Low/Medium/High), visual encoding using color plus shape, explanatory overlays with key factors and limitations, and adaptive next-step suggestions tied to confidence levels.',
    },
    mainImage: {
      src: '',
      alt: 'Confidence Thermometer pattern showing inline confidence indicators with expandable explanations',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI confidence', 'uncertainty indicator', 'trust calibration', 'AI transparency', 'confidence score', 'AI reliability', 'agentic UX', 'confidence bands'],
    },
    relatedPatterns: ['source-anchoring-grounding', 'semantic-highlighting-uncertainty', 'multiple-presented-options'],
  },
  {
    id: 'semantic-highlighting-uncertainty',
    index: '6.3',
    title: 'Semantic Highlighting of Uncertainty',
    category: 'grounding',
    shortDescription: 'Visually and interactively expose uncertain portions of AI-generated content so human reviewers can quickly identify, inspect, and act on areas that require judgment.',
    content: {
      problem: 'Without semantic uncertainty cues, AI output is often perceived as uniformly confident. This leads to automation bias, cognitive overload in long outputs, invisible model limitations, and inefficient human review workflows.',
      solution: 'Overlay visual cues on specific words, phrases, sentences, or steps where the system has low or ambiguous confidence. Use fine-grained, contextual signals to direct expert attention to the most questionable parts of AI results.',
      implementation: 'Create uncertainty markers with labels, descriptions, controls, and metadata. Support inline highlights with hover tooltips, side panels for deep inspection, and resolution workflows with audit trails.',
    },
    mainImage: {
      src: '',
      alt: 'Semantic Highlighting of Uncertainty pattern showing AI-generated text with highlighted uncertain segments',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI uncertainty', 'confidence visualization', 'AI trust', 'uncertainty highlighting', 'AI review', 'human-in-the-loop', 'agentic UX', 'AI transparency', 'calibrated confidence', 'semantic highlighting'],
    },
    relatedPatterns: ['source-anchoring-grounding', 'reasoning-glimpse', 'human-in-the-loop-hitl-gates'],
  },
  {
    id: 'multiple-presented-options',
    index: '6.4',
    title: 'Multiple Presented Options',
    category: 'grounding',
    shortDescription: 'Expose a small set of distinct AI-generated options so that people can compare, adapt, or combine them, reducing over-reliance on a single suggestion and strengthening agency and trust.',
    content: {
      problem: 'Without Plurality, AI systems often present a single output as if it were definitive. This creates automation bias, invisible uncertainty, mismatch with mental models, lost opportunity for exploration, and single-point failures in high-impact decisions.',
      solution: 'Surface multiple AI-generated options at once instead of a single "final answer." Each option is framed as a distinct, labeled path reflecting different assumptions, trade-offs, or styles.',
      implementation: 'Create 2-4 option cards with clear labels, concise summaries, and controls for selection, comparison, merging, and editing. Support inspect, compare, and merge workflows with comprehensive telemetry for learning.',
    },
    mainImage: {
      src: '',
      alt: 'Multiple Presented Options pattern showing AI-generated option cards with labels like Conservative, Balanced, Aggressive',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI options', 'plurality pattern', 'AI alternatives', 'AI trust', 'multiple suggestions', 'AI decision support', 'agentic UX', 'option comparison', 'AI trade-offs'],
    },
    relatedPatterns: ['source-anchoring-grounding', 'semantic-highlighting-uncertainty', 'confirmed-assumptions'],
  },
  {
    id: 'explanation-on-demand',
    index: '6.5',
    title: 'Explanation-on-Demand',
    category: 'grounding',
    shortDescription: 'Provides an on-demand "Why?" control that reveals layered explanations for AI outputs, allowing users to inspect reasoning without cluttering the primary workflow.',
    content: {
      problem: 'Without explanation-on-demand, AI outputs and actions appear as opaque judgments. Users cannot tell what drove the result, whether it is trustworthy, or how to correct or improve outcomes.',
      solution: 'Introduce a small, consistent "Why?" affordance near AI decisions. When activated, it reveals a concise, human-readable explanation with optional deeper layers: key factors, evidence, confidence, and alternatives considered.',
      implementation: 'Create explanation units with labels, primary explanations, tiered supporting details, and inline controls for expanding, adjusting preferences, providing feedback, and exporting for audit.',
    },
    mainImage: {
      src: '',
      alt: 'Explanation-on-Demand pattern showing a Why? affordance that reveals layered explanations for AI outputs',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI explanation', 'why control', 'AI transparency', 'explainable AI', 'XAI', 'AI reasoning', 'trust patterns', 'agentic UX', 'AI accountability'],
    },
    relatedPatterns: ['source-anchoring-grounding', 'semantic-highlighting-uncertainty', 'multiple-presented-options'],
  },
  {
    id: 'counter-evidence',
    index: '6.6',
    title: 'Counter-Evidence',
    category: 'grounding',
    shortDescription: 'A structured UI pattern that presents both supporting and contradicting evidence for AI outputs, helping users form nuanced judgments and calibrate trust in agentic systems.',
    content: {
      problem: 'Without a counter-evidence pattern, agentic AI systems tend to present singular, confident answers, creating automation bias, hidden uncertainty, trust whiplash, and regulatory friction.',
      solution: 'Pair AI-generated answers with a balanced evidence view that surfaces both supporting evidence and counter-evidence in a clear, navigable structure.',
      implementation: 'Create evidence panels with summary headers, dual columns for supporting/counter evidence, evidence items with labels and directional tags, and controls for filtering, sorting, and feedback.',
    },
    mainImage: {
      src: '',
      alt: 'Counter-Evidence pattern showing dual-column evidence display',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['counter-evidence', 'AI evidence', 'supporting evidence', 'AI transparency', 'trust calibration', 'AI decision support', 'evidence display', 'agentic UX'],
    },
    relatedPatterns: ['confidence-thermometer', 'source-anchoring-grounding', 'semantic-highlighting-uncertainty', 'multiple-presented-options'],
  },
  {
    id: 'orchestration-graph',
    index: '7.1',
    title: 'Orchestration Graph',
    category: 'orchestration',
    shortDescription: 'Visual, interactive graphs that show how AI agents collaborate, hand off tasks, and progress through a workflow, enabling transparent monitoring, debugging, and human oversight.',
    content: {
      problem: 'Multi-agent systems often behave like black boxes from a user\'s perspective. When an AI system is composed of multiple agents, tools, and APIs, the lack of visibility into how work is actually being done creates friction and mistrust.',
      solution: 'Orchestration graphs make AI processes observable and controllable by visualizing relationships, dependencies, and execution state in real time, reducing the gap between system behavior and stakeholder expectations.',
      implementation: 'Create a graph canvas showing agents and their relationships, a detail panel for selected nodes, a control bar for filtering and actions, and optional Timeline, Logs, and Metrics views.',
    },
    mainImage: {
      src: '',
      alt: 'Orchestration Graph pattern showing multi-agent workflow with nodes representing agents and edges showing data flow',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['orchestration graph', 'multi-agent AI', 'workflow visualization', 'AI oversight', 'agent collaboration', 'agentic UX', 'AI transparency', 'workflow monitoring'],
    },
    relatedPatterns: ['activity-timeline-audit-log', 'execution-progress-view', 'human-in-the-loop-hitl-gates'],
  },
  {
    id: 'agent-registry-profiles',
    index: '7.2',
    title: 'Agent Registry & Profiles',
    category: 'orchestration',
    shortDescription: 'Centralized, searchable catalog of AI agents that exposes each agent\'s role, permissions, performance, and history so humans can confidently select, configure, and govern agentic behavior.',
    content: {
      problem: 'In multi-agent AI systems, powerful automation often runs behind seemingly simple interfaces. Without an explicit registry and profile pattern, agents tend to be scattered, undocumented, and difficult to govern.',
      solution: 'Create a centralized directory of all AI agents with clear metadata: purpose, capabilities, tools and permissions, risk classification, environment, ownership, performance, and historical activity.',
      implementation: 'Create registry surfaces with search/filtering, agent profile views with capabilities/tools/metrics/history tabs, governance controls, and integration points from workflows and logs.',
    },
    mainImage: {
      src: '',
      alt: 'Agent Registry & Profiles pattern showing a catalog of AI agents with filtering and detailed profile views',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['agent registry', 'agent profiles', 'AI governance', 'agent catalog', 'multi-agent oversight', 'agentic UX', 'AI trust patterns', 'agent management'],
    },
    relatedPatterns: ['orchestration-graph', 'activity-timeline-audit-log', 'scoped-permissions-tool-consent'],
  },
  {
    id: 'supervisor-agent',
    index: '7.3',
    title: 'Supervisor Agent',
    category: 'orchestration',
    shortDescription: 'A centralized oversight agent that monitors, evaluates, and governs the actions and outputs of other agents, enforcing policies while making interventions visible, explainable, and controllable.',
    content: {
      problem: 'Without a Supervisor Agent, multi-agent AI systems behave in unpredictable ways: unclear responsibility, opaque policy enforcement, limited user control, poor audit support, and fragile policy evolution.',
      solution: 'Introduce a dedicated, configurable oversight agent that sits between task agents and the environment, reviewing proposed actions, applying policies, and determining whether to approve, modify, block, or escalate.',
      implementation: 'Create a runtime oversight layer with supervision rules and events, supervision UI with inline annotations and decision logs, and policy configuration surfaces for administrators.',
    },
    mainImage: {
      src: '',
      alt: 'Supervisor Agent pattern showing policy enforcement with inline interventions and decision explanations',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['supervisor agent', 'AI oversight', 'policy enforcement', 'AI governance', 'multi-agent AI', 'AI trust', 'AI compliance', 'agentic UX', 'AI safety'],
    },
    relatedPatterns: ['orchestration-graph', 'agent-registry-profiles', 'human-in-the-loop-hitl-gates', 'activity-timeline-audit-log'],
  },
  {
    id: 'agent-handover-briefs',
    index: '7.4',
    title: 'Agent Handover Briefs',
    category: 'orchestration',
    shortDescription: 'Structured, reviewable summaries passed between AI agents and humans to preserve context, minimize errors, and increase trust during handoffs in multi-agent workflows.',
    content: {
      problem: 'Without a structured handover, multi-agent systems exhibit context loss between agents and humans, hidden assumptions, redundant work, and eroded trust in autonomy.',
      solution: 'Generate structured summaries at transition points capturing the current goal, work done, key decisions, open questions, and relevant artifacts—making transitions explicit, auditable, and editable.',
      implementation: 'Create handover briefs with template-driven generation, versioning, inline editing, approval workflows, and integration with workflow timelines and notifications.',
    },
    mainImage: {
      src: '',
      alt: 'Agent Handover Briefs pattern showing structured summary with goal, decisions, and open questions',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['agent handover', 'handover briefs', 'multi-agent AI', 'AI trust', 'context preservation', 'workflow handoff', 'AI orchestration', 'agentic UX'],
    },
    relatedPatterns: ['orchestration-graph', 'agent-registry-profiles', 'supervisor-agent', 'activity-timeline-audit-log'],
  },
  {
    id: 'assignment-board-work-queues',
    index: '7.5',
    title: 'Assignment Board & Work Queues',
    category: 'orchestration',
    shortDescription: 'Visual task board for monitoring and directing work across human and AI agents, providing transparent status, accountability, and safe intervention in multi-agent workflows.',
    content: {
      problem: 'Agentic systems frequently run background workflows that are difficult to see, understand, or control: implicit task creation, late failure discovery, unclear responsibility, and fragmented coordination across teams.',
      solution: 'Present work items as cards flowing through stages (Planned → In Progress → Blocked → Done) with explicit ownership, status, risk, and timing. Provide a central control room for multi-agent operations where supervisors can intervene, reassign, prioritize, and audit.',
      implementation: 'Create a Kanban-style board with task cards containing outcome-oriented titles, ownership metadata, status/stage indicators, risk/priority tags, timing/progress info, and inline controls for reassignment, approval, and cancellation.',
    },
    mainImage: {
      src: '',
      alt: 'Assignment Board & Work Queues pattern showing Kanban-style task board with AI and human agent tasks',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI task board', 'work queues', 'multi-agent AI', 'AI oversight', 'task management', 'agent coordination', 'AI trust', 'agentic UX', 'Kanban AI', 'workflow orchestration'],
    },
    relatedPatterns: ['agent-registry-profiles', 'orchestration-graph', 'supervisor-agent', 'activity-timeline-audit-log', 'human-in-the-loop-hitl-gates'],
  },
  {
    id: 'escalation-fallback-routing',
    index: '7.6',
    title: 'Escalation & Fallback Routing',
    category: 'orchestration',
    shortDescription: 'A structured way for agentic systems to hand off work when limits are reached—routing to alternative agents or humans while keeping the process transparent, auditable, and controllable.',
    content: {
      problem: 'Without structured escalation and fallback, agentic AI systems exhibit silent failures and loops, unclear responsibility and next steps, inconsistent and opaque risk handling, and poor handoffs with context loss.',
      solution: 'Define predictable triggers, visible pathways, and well-designed handoffs between agents and humans. Route tasks to more appropriate handlers (another agent, a simpler deterministic workflow, or a human) when an agent lacks capability, confidence, permissions, or context.',
      implementation: 'Create configurable rules engines with no-code/low-code editors, Escalation Case objects with full context, user-facing feedback for escalation status, operations consoles for monitoring queues and cases, and simulation tools to test rule changes.',
    },
    mainImage: {
      src: '',
      alt: 'Escalation & Fallback Routing pattern showing task handoff from AI agent to human specialist with status indicators',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI escalation', 'fallback routing', 'human handoff', 'AI trust', 'agent routing', 'agentic UX', 'multi-agent AI', 'AI oversight', 'human-in-the-loop', 'AI governance'],
    },
    relatedPatterns: ['supervisor-agent', 'agent-handover-briefs', 'human-in-the-loop-hitl-gates', 'assignment-board-work-queues', 'activity-timeline-audit-log'],
  },
  {
    id: 'memory-inspector-editor',
    index: '8.1',
    title: 'Memory Inspector & Editor',
    category: 'memory',
    shortDescription: 'A dedicated surface that exposes an AI agent\'s stored memories as structured, editable items, enabling transparent personalization and explicit control over what the agent remembers and uses.',
    content: {
      problem: 'Without a clear memory surface, AI agents build and act on persistent beliefs that remain invisible and uncontrollable, creating opaque personalization, accumulated inaccuracies, lack of control and consent, troubleshooting difficulty, and organizational risk.',
      solution: 'Provide a dedicated, structured surface where an AI agent\'s persistent memories about a person, organization, or workspace are visible, understandable, and controllable. Treat memories as data objects rather than opaque model state.',
      implementation: 'Create a Memory Inspector with entry points (global nav, AI settings, inline chat, notifications), memory records with labels, descriptions, controls (edit, scope, pin, delete), and metadata (category, scope, source, timestamps, status). Define clear lifecycle stages from detection to deletion.',
    },
    mainImage: {
      src: '',
      alt: 'Memory Inspector & Editor pattern showing a memory panel with editable records and usage attribution',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI memory', 'memory inspector', 'AI personalization', 'agent memory', 'AI trust', 'memory editor', 'AI data control', 'agentic UX', 'AI preferences', 'memory management'],
    },
    relatedPatterns: ['teach-me-interfaces', 'activity-timeline-audit-log', 'scoped-permissions-tool-consent', 'agent-registry-profiles'],
  },
  {
    id: 'preference-persona-settings',
    index: '8.2',
    title: 'Agent Persona Profiles & Settings',
    category: 'memory',
    shortDescription: 'Configurable behavior profiles that capture tone, style, defaults, and risk posture for AI agents, applied consistently across interactions to improve predictability and align outputs with user expectations.',
    content: {
      problem: 'Without explicit preference and persona settings, AI-driven products create friction: repeated configuration, inconsistent behavior across contexts, and opaque personalization that users cannot understand or control.',
      solution: 'Centralize key preferences—tone of voice, level of detail, audience, risk tolerance, tools, and language—into reusable, transparent configurations that make personalization explicit, controllable, and transparent.',
      implementation: 'Create persona profiles with configurable dimensions (tone, detail, audience, risk), scoping models (org/team/individual/conversation), in-chat indicators, contextual overrides, and governance controls for enterprise settings.',
    },
    mainImage: {
      src: '',
      alt: 'Preference & Persona Settings pattern showing a persona builder with tone, detail, and audience controls',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI preferences', 'persona settings', 'AI personalization', 'behavior profiles', 'AI trust', 'tone settings', 'AI configuration', 'agentic UX', 'AI customization', 'persona builder'],
    },
    relatedPatterns: ['memory-inspector-editor', 'teach-me-interfaces', 'structured-clarification-prompts', 'agent-identity-role-contract'],
  },
  {
    id: 'privacy-data-usage-controls',
    index: '8.3',
    title: 'Privacy & Data Usage Controls',
    category: 'memory',
    shortDescription: 'Controls that make AI data collection, storage, and usage visible and adjustable, so that individuals and organizations can decide how an agentic system handles their information.',
    content: {
      problem: 'Without explicit privacy and data usage controls, agentic AI features often feel risky, confusing, or ungovernable—invisible data flows, misalignment with compliance obligations, no way to correct or revoke data use, and one-size-fits-all behavior in mixed-risk workflows.',
      solution: 'Provide a dedicated privacy dashboard, granular toggles for specific behaviors (training, integrations, logging, memory), and contextual indicators in the AI workflow showing the current state.',
      implementation: 'Create a comprehensive privacy dashboard with data usage rules, contextual entry points from AI surfaces, just-in-time prompts and banners, and granular controls with audit and compliance features.',
    },
    mainImage: {
      src: '',
      alt: 'Privacy & Data Usage Controls pattern showing a privacy dashboard with toggles for training, memory, and incognito mode',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI privacy', 'data usage controls', 'AI trust', 'data collection', 'AI personalization', 'incognito mode', 'AI compliance', 'agentic UX', 'data retention', 'AI governance'],
    },
    relatedPatterns: ['memory-inspector-editor', 'preference-persona-settings', 'scoped-permissions-tool-consent', 'activity-timeline-audit-log'],
  },
  {
    id: 'context-repository-profile-store',
    index: '8.4',
    title: 'Context Repository & Profile Store',
    category: 'memory',
    shortDescription: 'A centralized, user-managed store for long-lived context—such as roles, goals, preferences, constraints, and examples—that AI agents can safely and consistently reuse across sessions, agents, and tools.',
    content: {
      problem: 'Without a dedicated context repository, AI systems rely on transient chat history or opaque internal memory, leading to repeated re-briefing, fragmented personalization, staleness and drift, and team misalignment on shared context.',
      solution: 'Create a dedicated, structured space where long-term context is defined, maintained, and governed. Organize into sections like Profile, Goals, Preferences, Constraints, and Artifacts. Surface context usage transparently in AI interactions.',
      implementation: 'Build a profile-like repository interface with structured context items, scoping controls (personal/project/workspace/org), in-chat capture and promotion flows, usage metadata, versioning, and governance controls for enterprise deployments.',
    },
    mainImage: {
      src: '',
      alt: 'Context Repository & Profile Store pattern showing a centralized context management interface with profile, goals, and preferences sections',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI context', 'profile store', 'AI memory', 'AI personalization', 'AI trust', 'context management', 'agentic UX', 'AI preferences', 'long-term context', 'AI goals'],
    },
    relatedPatterns: ['memory-inspector-editor', 'preference-persona-settings', 'privacy-data-usage-controls', 'teach-me-interfaces'],
  },
  {
    id: 'user-preference-context-profiles',
    index: '8.5',
    title: 'User Preference & Context Profiles',
    category: 'memory',
    shortDescription: 'A persistent, user-controlled "about me" profile that captures goals, background, working style, and constraints, applied across agents and sessions so every interaction feels tailored, consistent, and respectful of the user\'s intent and boundaries.',
    content: {
      problem: 'Without an explicit, user-controlled preference & context profile, users repeat themselves across every chat, personalization feels opaque or creepy, multi-agent experiences become fragmented, and user goals are lost between sessions.',
      solution: 'Create a first-class, inspectable profile that agents consult and that users can control, override, or delete. Define who the user is, what they\'re trying to achieve, and how they like to work—separate from how any specific AI agent behaves.',
      implementation: 'Create a centralized "My AI Profile" surface with identity/role, goals, knowledge/skill assumptions, working style preferences, constraints, and tools. Provide entry points in settings, in-chat indicators, and contextual triggers. Support profile application, overrides, cross-agent propagation, and lifecycle management.',
    },
    mainImage: {
      src: '',
      alt: 'User Preference & Context Profiles pattern showing a profile panel with role, goals, and preferences',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI personalization', 'user profiles', 'AI preferences', 'context profiles', 'AI trust', 'multi-agent personalization', 'user goals', 'agentic UX', 'AI customization', 'working style preferences'],
    },
    relatedPatterns: ['memory-inspector-editor', 'preference-persona-settings', 'privacy-data-usage-controls', 'context-repository-profile-store'],
  },
  {
    id: 'safe-failure-states',
    index: '9.1',
    title: 'Safe Failure States',
    category: 'error',
    shortDescription: 'Agentic AI systems avoid harmful or confusing behavior by failing in clear, contained, and recoverable ways that protect data, preserve context, and maintain trust.',
    content: {
      problem: 'Without a Safe Failure States pattern, AI agents frequently fail in ways that are confusing, risky, or trust-eroding: opaque or silent failure, unsafe behavior on low confidence, dead ends and lost work, and blame and frustration.',
      solution: 'The system deliberately abstains, degrades, or rolls back in controlled ways and clearly communicates what happened. When the AI cannot safely proceed, it stops or limits its own behavior, explains why, and offers a set of clearly bounded next steps.',
      implementation: 'Create Safe Failure Blocks with clear labels, descriptions, recovery controls, and optional metadata. Define failure taxonomies, confidence thresholds, guardrails, and rollback mechanisms. Surface failures in chat threads, dashboards, and contextual UI with consistent visual treatment.',
    },
    mainImage: {
      src: '',
      alt: 'Safe Failure States pattern showing a structured failure block with status, explanation, and recovery options',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI failure states', 'safe failure', 'AI error handling', 'graceful degradation', 'AI trust', 'agentic UX', 'AI recovery', 'AI abstention', 'error recovery', 'AI rollback'],
    },
    relatedPatterns: ['confidence-thermometer', 'human-in-the-loop-hitl-gates', 'activity-timeline-audit-log', 'escalation-fallback-routing'],
  },
  {
    id: 'guided-repair-flows',
    index: '9.2',
    title: 'Guided Repair Flows',
    category: 'error',
    shortDescription: 'Structured, interactive flows that turn AI failures into guided co-repair moments, resolving issues while building understanding, predictability, and long-term trust.',
    content: {
      problem: 'Without guided repair flows, AI-powered products fail in opaque, repetitive, and disempowering ways: errors feel like dead ends, the same failure repeats, responsibility is unclear, support is overloaded, and learning opportunities are lost.',
      solution: 'Provide structured recovery experiences that explain what went wrong, break resolution into small steps, share control between AI and human, and optionally learn from the fix so similar issues do not recur.',
      implementation: 'Create repair sessions with clear entry points, stepwise flows (typically 3–5 steps), controls for pacing and choice, optional learning and persistence, and clear exit/escalation paths. Surface repair flows inline in AI messages, within UI components, from notifications, and from logs or history views.',
    },
    mainImage: {
      src: '',
      alt: 'Guided Repair Flows pattern showing a stepwise repair experience with suggestions and confirmation',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI repair', 'guided repair', 'AI error recovery', 'AI failure handling', 'co-repair', 'AI trust', 'agentic UX', 'AI debugging', 'error resolution', 'AI recovery flow'],
    },
    relatedPatterns: ['safe-failure-states', 'escalation-fallback-routing', 'human-in-the-loop-hitl-gates', 'teach-me-interfaces', 'activity-timeline-audit-log'],
  },
  {
    id: 'sentiment-aware-response-styles',
    index: '9.3',
    title: 'Sentiment-Aware Response Styles',
    category: 'error',
    shortDescription: 'Adaptive response style that adjusts tone, length, and structure based on inferred user sentiment to reduce frustration, increase clarity, and strengthen trust in agentic AI interactions.',
    content: {
      problem: 'Without sentiment-aware response styles, AI agents treat every message as emotionally flat, leading to escalating frustration loops, mismatched cognitive load, perceived lack of empathy, and higher support costs.',
      solution: 'Enable the AI agent to sense emotionally charged cues and adapt tone (empathetic, neutral, direct), format (short vs. expanded), action bias (do it for me vs. teach me), and escalation behavior in real time.',
      implementation: 'Create a sentiment detection layer, response style policy, adaptive output controls, and feedback loop. Map sentiment states (frustrated, confused, urgent, satisfied) to appropriate tone, length, and structure adjustments.',
    },
    mainImage: {
      src: '',
      alt: 'Sentiment-Aware Response Styles pattern showing adaptive AI responses based on detected user sentiment',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI sentiment', 'adaptive responses', 'AI tone', 'AI trust', 'empathetic AI', 'frustration detection', 'AI UX', 'agentic UX', 'sentiment analysis', 'response adaptation'],
    },
    relatedPatterns: ['safe-failure-states', 'guided-repair-flows', 'escalation-fallback-routing', 'preference-persona-settings'],
  },
  {
    id: 'apology-remedy-bundle',
    index: '9.4',
    title: 'Apology + Remedy Bundle',
    category: 'error',
    shortDescription: 'A pattern for turning AI mistakes into trust-building moments by combining a clear apology, explanation, and concrete repair options in a single, structured interaction.',
    content: {
      problem: 'When AI mistakes are not handled well, trust and adoption erode rapidly: errors feel opaque, apologies are generic and repetitive, and recovery is manual and costly.',
      solution: 'Frame errors as accountable, repairable events by openly acknowledging what went wrong, explaining the cause, and proposing concrete remedies that the user can review and control.',
      implementation: 'Create Correction Bundles with structured labels, explanations, impact statements, and remedy controls. Surface bundles inline in chat, on impacted objects, or via notifications with clear user decision paths.',
    },
    mainImage: {
      src: '',
      alt: 'Apology + Remedy Bundle pattern showing a correction card with explanation, impact, and remedy actions',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI apology', 'AI error recovery', 'trust repair', 'AI remedy', 'AI corrections', 'agentic UX', 'AI accountability', 'error handling', 'AI trust patterns'],
    },
    relatedPatterns: ['safe-failure-states', 'guided-repair-flows', 'escalation-fallback-routing', 'rollback-version-history', 'activity-timeline-audit-log'],
  },
  {
    id: 'fleet-health-dashboard',
    index: '10.1',
    title: 'Fleet Health Dashboard',
    category: 'fleet',
    shortDescription: 'A centralized, real-time operations view that surfaces the health, performance, and governance status of an AI agent fleet, enabling proactive oversight, faster recovery, and transparent communication to end-users.',
    content: {
      problem: 'Without a fleet-level health dashboard, AI agents often behave as a "black box" with limited visibility into failures, slow manual incident triage, weak governance posture, and end-user anxiety about autonomy.',
      solution: 'Provide a centralized operations surface that consolidates signals from many agents into an interpretable, actionable view: which agents are healthy, which are failing, where latency and costs are spiking, and where safety or compliance issues may be emerging.',
      implementation: 'Create a multi-level overview with fleet summary, agent entity cards with status badges and key metrics, time-series panels, drilldown views to logs and runs, and operational controls for pause, rollout, and rollback.',
    },
    mainImage: {
      src: '',
      alt: 'Fleet Health Dashboard pattern showing centralized agent monitoring with status tiles and performance metrics',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI fleet', 'agent dashboard', 'AI monitoring', 'AI governance', 'AI operations', 'fleet health', 'AI trust', 'agentic UX', 'AI observability', 'agent management'],
    },
    relatedPatterns: ['activity-timeline-audit-log', 'orchestration-graph', 'agent-registry-profiles', 'supervisor-agent'],
  },
  {
    id: 'risk-and-policy-heatmaps',
    index: '10.2',
    title: 'Risk & Policy Heatmaps',
    category: 'fleet',
    shortDescription: 'Visualize AI agent risk across workflows to guide governance decisions, make policies actionable, and reinforce organizational and end-user trust.',
    content: {
      problem: 'Without a structured way to visualize AI risk and connect it to policies, organizations encounter fragmented understanding of risk, invisible policy decisions, slow incident response, and limited end-user trust.',
      solution: 'Present a consolidated, visual overview of AI-related risk across agents, workflows, and environments as an interactive heatmap that aggregates risk signals, visualizes them in an interpretable grid, and connects directly to governance controls.',
      implementation: 'Create heatmap cells representing risk levels across dimensions (Data Sensitivity, Autonomy, Financial Impact, Regulatory Exposure). Provide drill-down to contributing factors, inline policy adjustment controls, simulation mode for impact preview, and comprehensive versioning for audit.',
    },
    mainImage: {
      src: '',
      alt: 'Risk & Policy Heatmaps pattern showing a grid visualization of AI risk across workflows and dimensions',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI risk', 'policy heatmaps', 'AI governance', 'risk visualization', 'AI trust', 'compliance', 'fleet governance', 'agentic UX', 'risk scoring', 'AI oversight'],
    },
    relatedPatterns: ['fleet-health-dashboard', 'activity-timeline-audit-log', 'agent-registry-profiles', 'supervisor-agent'],
  },
  {
    id: 'access-permission-tiers',
    index: '10.3',
    title: 'Access & Permission Tiers for Agents',
    category: 'fleet',
    shortDescription: 'A structured way to define, assign, and expose granular permission tiers for AI agents so that agent behavior remains aligned with organizational roles, environments, and risk thresholds.',
    content: {
      problem: 'Without a structured permission tiering model, AI agents accumulate ad-hoc, inconsistent access. This creates both risk and confusion: opaque capabilities, over-privileged agents, under-privileged or misaligned behavior, no fleet-level control, and inconsistent enforcement across environments.',
      solution: 'Provide a standardized, fleet-wide approach to limiting what AI agents can see and do. Group capabilities into clearly defined tiers (Viewer, Editor, Executor, Admin, Supervised Executor) and apply those tiers consistently across agents, environments, and tenants.',
      implementation: 'Create tier definitions as bundles of granular capabilities, agent-to-tier assignments per environment, runtime enforcement with user-facing disclosure, supervision and escalation workflows, comprehensive auditing, and simulation tools for tier changes.',
    },
    mainImage: {
      src: '',
      alt: 'Access & Permission Tiers pattern showing agent governance interface with tier assignments and permission matrices',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI permissions', 'agent tiers', 'AI governance', 'permission levels', 'AI trust', 'agent access control', 'AI security', 'agentic UX', 'enterprise AI', 'role-based AI'],
    },
    relatedPatterns: ['fleet-health-dashboard', 'risk-and-policy-heatmaps', 'agent-registry-profiles', 'scoped-permissions-tool-consent', 'human-in-the-loop-hitl-gates'],
  },
  {
    id: 'workflow-policy-template-library',
    index: '10.4',
    title: 'Workflow & Policy Template Library',
    category: 'fleet',
    shortDescription: 'Centralized library of vetted AI workflows and policies that enables safe reuse, consistent guardrails, and faster rollout of agentic AI across an organization.',
    content: {
      problem: 'Without a shared template library, AI workflows and policies often emerge in fragmented and opaque ways: inconsistent guardrails, hidden automation, governance that does not scale, and difficult troubleshooting and auditing.',
      solution: 'Provide a centralized catalog of reusable, pre-approved patterns for how AI agents operate, separating what an agent should do (the workflow) from which rules it should operate under (the policy).',
      implementation: 'Create a Template Library with structured templates containing workflow definitions, policy bindings, risk classifications, and controls. Support discovery, cloning, customization, simulation, approval workflows, versioning, and runtime disclosure.',
    },
    mainImage: {
      src: '',
      alt: 'Workflow & Policy Template Library pattern showing a gallery of template cards with risk badges and policy indicators',
    },
    slideshow: {
      enabled: false,
      slides: [],
    },
    additionalImages: [],
    seo: {
      keywords: ['AI workflows', 'policy templates', 'AI governance', 'workflow library', 'AI guardrails', 'agentic AI', 'AI trust', 'enterprise AI', 'workflow templates', 'AI policy management'],
    },
    relatedPatterns: ['fleet-health-dashboard', 'risk-and-policy-heatmaps', 'agent-registry-profiles', 'human-in-the-loop-hitl-gates', 'sandboxed-playgrounds'],
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
