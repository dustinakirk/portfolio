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
    title: 'Plan-then-Execute Workflow',
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
