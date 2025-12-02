// Mock data for the TrustDemo slides
// Static content used to simulate a real AI agent platform

// Data for Slide 2 - Ask Your Question
export const ASK_QUESTION_DATA = {
  welcomeMessage: "Morning! I'm Atlas, your ops investigator running in Co-Pilot mode—I'll draft and await your approval before escalating. I can coordinate diagnostic agents, correlate multi-source telemetry, surface anomaly patterns, and generate root cause summaries. Point me at an incident and I'll spin up the right specialists.",
  suggestedPrompts: [
    'Investigate the checkout failure spikes from the last 48 hours',
    'Correlate order errors with recent deployments',
    'Analyze payment gateway latency during peak windows',
    'Find common factors across incident timestamps',
  ],
  sandboxDefault: false,
};

export const AGENT_PROFILE = {
  name: 'Atlas Ops Investigator',
  role: 'Multi-agent incident investigator for e-commerce root cause analysis',
  avatar: 'A',
  version: '2.2.5',
  capabilities: [
    'Coordinate diagnostic agents',
    'Correlate multi-source telemetry',
    'Surface anomaly patterns',
    'Query logs, metrics, and traces',
    'Generate root cause summaries',
    'Escalate findings to on-call',
  ],
  limitations: [
    'Cannot restart production services',
    'Needs approval before paging teams',
    'Read-only access to prod databases',
    'No access to PII or payment data',
  ],
  trustedFor: [
    'Coordinating Metrics Scout/Correlation Analyst agents',
    'Reading order metrics + error logs',
    'Creating incident summaries',
  ],
  willNotDo: [
    'Page on-call without review',
    'Execute runbooks automatically',
    'Access customer PII',
  ],
};

export const DELEGATION_MODES = [
  {
    id: 'advisor',
    label: 'Advisor',
    description: 'Agent suggests, you decide and execute',
    icon: 'lightbulb',
  },
  {
    id: 'copilot',
    label: 'Co-Pilot',
    description: 'Agent drafts, you review and approve',
    icon: 'handshake',
  },
  {
    id: 'autopilot',
    label: 'Autopilot',
    description: 'Agent executes within defined guardrails',
    icon: 'rocket',
  },
];

export const CHAT_MESSAGES = {
  slide2: {
    user: "I've noticed a pattern of checkout failures and order delays over the last 48 hours—spikes happening roughly every 4 hours. Use autopilot for the data pulls, but keep the root cause summary in Co-Pilot so I can review before sharing with the on-call team.",
    planTitle: 'Investigation plan for your checkout failure analysis',
    planIntro: "I'll use Autopilot for all telemetry pulls and keep the root cause summary in Co-Pilot for your review before escalating.",
    plan: [
      {
        step: 1,
        title: 'Scope investigation',
        agent: 'Planner',
        tools: ['PagerDuty', 'GitHub'],
        mode: 'advisor'
      },
      {
        step: 2,
        title: 'Pull metrics & error rates',
        agent: 'Metrics Scout',
        tools: ['New Relic', 'AWS CloudWatch'],
        mode: 'autopilot'
      },
      {
        step: 3,
        title: 'Correlate patterns',
        agent: 'Correlation Analyst',
        tools: ['New Relic', 'GitHub', 'Stripe'],
        mode: 'autopilot'
      },
      {
        step: 4,
        title: 'Draft root cause findings',
        agent: 'Summary Agent',
        tools: [],
        mode: 'copilot'
      },
      {
        step: 5,
        title: 'Validate confidence levels',
        agent: 'Validator',
        tools: [],
        mode: 'advisor'
      },
    ],
    clarifications: [
      {
        question: 'Which systems should I prioritize?',
        options: ['Payment Gateway', 'Order Database', 'Product Catalog', 'All systems'],
        selected: null,
      },
      {
        question: 'Investigation depth?',
        options: ['Quick triage', 'Standard analysis', 'Deep forensic dive'],
        selected: null,
      },
    ],
    assumptions: [
      'Using metrics snapshot from last 48 hours',
      'Correlating checkout errors with deployment timeline',
      'Payment provider logs available via read-only API',
      'Summary will cite specific timestamps and error codes',
    ],
    tools: [
      { id: 'newrelic', name: 'New Relic', enabled: true },
      { id: 'pagerduty', name: 'PagerDuty', enabled: true },
      { id: 'github', name: 'GitHub', enabled: true },
      { id: 'stripe', name: 'Stripe', enabled: true },
      { id: 'aws', name: 'AWS CloudWatch', enabled: false },
    ],
    estimates: {
      time: { min: 14, max: 22, unit: 'min' },
      cost: { min: 0.09, max: 0.13, unit: 'USD' },
    },
  },
};

export const REASONING_DATA = {
  thinking: [
    'Planner agent identified 3 key data sources: payment gateway, order DB, deployment logs.',
    'Metrics Scout is pulling checkout error rates and latency percentiles.',
    'Correlation Analyst is matching spike timestamps to deployment windows.',
    'Summary Agent will synthesize findings once correlations stabilize.',
  ],
  currentStep: 3,
  totalSteps: 4,
  tools: [
    { name: 'Planner Agent', status: 'completed', icon: 'document' },
    { name: 'Metrics Scout', status: 'completed', icon: 'database' },
    { name: 'Correlation Analyst', status: 'running', icon: 'chart' },
    { name: 'Summary Agent', status: 'pending', icon: 'document' },
  ],
  partialOutput: `
| Timestamp | Checkout Errors | P99 Latency | Event |
|-----------|-----------------|-------------|-------|
| 02:15 PT  | +340%           | 2.8s        | Deploy v2.4.1 |
| 06:20 PT  | +280%           | 3.1s        | Payment timeout spike |
| 10:18 PT  | +310%           | 2.9s        | DB pool exhaustion |
| 14:22 PT  | +295%           | 2.7s        | Cache miss storm |
  `,
};

export const OPTIONS_DATA = {
  options: [
    {
      id: 'A',
      label: 'Stripe API Timeouts',
      title: 'Stripe payment API intermittent degradation',
      description: 'Stripe status page shows 3 incidents matching spike windows with 94% correlation.',
      confidence: 94,
      evidence: [
        { tool: 'Stripe', source: 'Status Page', metric: '3 incidents matching spike windows', time: '02:15, 06:20, 10:18 PT', link: '#stripe-status' },
        { tool: 'New Relic', source: 'APM Traces', metric: '94% correlation with timeout errors', time: 'Last 48h', link: '#newrelic-apm' },
        { tool: 'Internal', source: 'Payment Logs', metric: 'Avg timeout: 8.2s (baseline: 0.3s)', time: 'During spikes', link: '#payment-logs' },
      ],
      counterEvidence: [],
    },
    {
      id: 'B',
      label: 'DB Connection Pool Exhaustion',
      title: 'Order DB pool hitting max capacity',
      description: 'Pool hit 100% in 3/4 windows, but timing suggests cascading effect.',
      confidence: 40,
      evidence: [
        { tool: 'AWS', source: 'CloudWatch Metrics', metric: 'Pool hit 100% in 3/4 windows', time: '06:20, 10:18, 14:22 PT', link: '#cloudwatch' },
        { tool: 'Internal', source: 'Order DB Logs', metric: 'Query queue depth: 847 (normal: <50)', time: 'During spikes', link: '#db-logs' },
      ],
      counterEvidence: [
        { tool: 'New Relic', source: 'APM Latency', metric: 'DB latency normal outside pool saturation', note: 'Suggests symptom not cause', link: '#newrelic-db' },
        { tool: 'Analysis', source: 'Correlation Engine', metric: 'Pool exhaustion occurred AFTER initial errors', note: 'Timing suggests cascading effect', link: '#correlation' },
      ],
    },
    {
      id: 'C',
      label: 'Cache Invalidation Storm',
      title: 'Deploy-triggered cache flush',
      description: 'Cache miss rate spiked 12x post-deploy, but pattern inconsistent.',
      confidence: 20,
      evidence: [
        { tool: 'CDN', source: 'Edge Logs', metric: '12x cache miss rate post-deploy', time: '02:15 PT', link: '#cdn-logs' },
      ],
      counterEvidence: [
        { tool: 'GitHub', source: 'Deploy Timeline', metric: 'Only 2 of 4 spikes align with deploys', note: "Pattern doesn't hold for 50% of incidents", link: '#deploy-timeline' },
        { tool: 'Internal', source: 'Origin Metrics', metric: 'Origin load increase: 3x (expected: 10x+)', note: 'Impact magnitude inconsistent with hypothesis', link: '#origin-metrics' },
        { tool: 'Analysis', source: 'Cache TTL', metric: 'Warm-up: <2min, spikes: 15-20min', note: 'Duration mismatch', link: '#cache-analysis' },
      ],
    },
  ],
};

export const CONTROL_TOWER_DATA = {
  columns: [
    {
      id: 'planned',
      title: 'Planned',
      tasks: [
        { id: 't1', title: 'Planner · finalize investigation scope', agent: 'Planner Agent', priority: 'high' },
        { id: 't2', title: 'Validator · prep findings checklist', agent: 'Validator', priority: 'medium' },
      ],
    },
    {
      id: 'running',
      title: 'Running',
      tasks: [
        { id: 't3', title: 'Metrics Scout · order error pull', agent: 'Metrics Scout', priority: 'high', progress: 82 },
        { id: 't4', title: 'Correlation Analyst · timestamp matching', agent: 'Correlation Analyst', priority: 'high', progress: 73 },
        { id: 't8', title: 'Root cause summary: checkout failure analysis', agent: 'Summary Agent', priority: 'high', progress: 58 },
      ],
    },
    {
      id: 'blocked',
      title: 'Blocked',
      tasks: [
        { id: 't5', title: 'Payment provider trace export', agent: 'TraceAgent', priority: 'high', blocker: 'Awaiting vendor API access' },
        { id: 'inbox-001', title: 'Weekly revenue anomaly detection', agent: 'Revenue Analyst', priority: 'high', blocker: 'Awaiting clarification' },
        { id: 'inbox-002', title: 'Customer support escalation workflow', agent: 'Support Orchestrator', priority: 'medium', blocker: 'Awaiting approval' },
        { id: 'inbox-003', title: 'Inventory restock recommendation', agent: 'Inventory Analyst', priority: 'high', blocker: 'Action required' },
        { id: 'inbox-004', title: 'Quarterly report data validation', agent: 'Data Validator', priority: 'low', blocker: 'Awaiting clarification' },
        { id: 'inbox-005', title: 'Marketing campaign approval', agent: 'Campaign Manager', priority: 'medium', blocker: 'Awaiting approval' },
      ],
    },
    {
      id: 'done',
      title: 'Done',
      tasks: [
        { id: 't6', title: 'Planner · confirmed data sources', agent: 'Planner Agent', priority: 'medium', completedAt: '5 min ago' },
        { id: 't7', title: 'Atlas briefed on-call engineer', agent: 'Atlas', priority: 'low', completedAt: '9 min ago' },
      ],
    },
  ],
  agents: [
    { id: 'atlas', name: 'Atlas Orchestrator', status: 'busy', avatar: 'A' },
    { id: 'planner', name: 'Planner Agent', status: 'idle', avatar: 'P' },
    { id: 'datascout', name: 'Metrics Scout', status: 'busy', avatar: 'M' },
    { id: 'analyst', name: 'Correlation Analyst', status: 'busy', avatar: 'C' },
    { id: 'writer', name: 'Summary Agent', status: 'busy', avatar: 'S' },
    { id: 'guardian', name: 'Validator', status: 'idle', avatar: 'V' },
    { id: 'risk', name: 'TraceAgent', status: 'blocked', avatar: 'T' },
  ],
  selectedTask: {
    taskId: 't8',
    runId: 'RUN-7C3F',
    title: 'Root cause summary: checkout failure analysis',
    summary: 'Correlating checkout errors, payment timeouts, and deployment events to identify probable root causes for the 4-hour spike pattern.',
    status: 'Running · 58% · ETA 4m',
    owner: 'Atlas Orchestrator',
    mode: 'Co-Pilot (human approval before escalating)',
    guardrails: [
      'Read-only access to prod metrics (last 48 hours)',
      'No PII in summary output',
      'Escalate to human if confidence <70%',
    ],
    linkedAgents: [
      { name: 'Planner Agent', mode: 'Advisor', status: 'Complete' },
      { name: 'Metrics Scout', mode: 'Autopilot', status: 'Complete' },
      { name: 'Correlation Analyst', mode: 'Autopilot', status: 'Running' },
      { name: 'Summary Agent', mode: 'Co-Pilot', status: 'Running' },
      { name: 'Validator', mode: 'Advisor', status: 'Queued' },
    ],
    recentEvents: [
      { time: '10:42', text: 'Correlation Analyst flagged 4-hour spike pattern' },
      { time: '10:43', text: 'Summary Agent ranked payment timeout as top hypothesis' },
      { time: '10:44', text: 'Supervisor queued confidence validation checkpoint' },
    ],
    nextActions: [
      'Summary Agent synthesizing root cause hypotheses',
      'Validator checking data lineage + confidence scores',
    ],
    auditTrailCount: 9,
  },
};

export const ORCHESTRATION_DATA = {
  nodes: [
    { id: 'planner', name: 'Planner Agent', status: 'completed', x: 40, y: 50, outputs: ['Investigation scope', 'Data sources'] },
    { id: 'datascout', name: 'Metrics Scout', status: 'completed', x: 190, y: 10, outputs: ['Error metrics', 'Latency data'] },
    { id: 'analyst', name: 'Correlation Analyst', status: 'running', x: 190, y: 120, outputs: ['Timestamp matches', 'Pattern flags'] },
    { id: 'writer', name: 'Summary Agent', status: 'running', x: 360, y: 60, outputs: ['Root cause summary'] },
    { id: 'guardian', name: 'Validator', status: 'waiting', x: 360, y: 140, outputs: ['Confidence check'] },
    { id: 'supervisor', name: 'Supervisor Agent', status: 'waiting', x: 520, y: 80, outputs: ['Final findings'], isSupervisor: true },
  ],
  edges: [
    { from: 'planner', to: 'datascout', label: 'Investigation scope' },
    { from: 'planner', to: 'analyst', label: 'Query parameters' },
    { from: 'datascout', to: 'analyst', label: 'Raw metrics' },
    { from: 'analyst', to: 'writer', label: 'Correlations + patterns' },
    { from: 'writer', to: 'guardian', label: 'Draft summary' },
    { from: 'guardian', to: 'supervisor', label: 'Validated findings' },
  ],
  defaultNode: 'writer',
  nodeDetails: {
    planner: {
      name: 'Planner Agent',
      version: '1.1.0',
      tools: ['PagerDuty', 'GitHub'],
      inputs: ['Investigation request', 'runbook_templates.md'],
      outputs: ['investigation_scope.md', 'data_sources.yaml'],
      tokens: { input: 820, output: 640 },
    },
    datascout: {
      name: 'Metrics Scout',
      version: '3.0.2',
      tools: ['New Relic', 'AWS CloudWatch'],
      inputs: ['checkout_errors APM trace', 'payment_latency.metrics'],
      outputs: ['error_metrics.json', 'latency_percentiles.csv'],
      tokens: { input: 6200, output: 1800 },
    },
    analyst: {
      name: 'Correlation Analyst',
      version: '2.7.1',
      tools: ['New Relic', 'GitHub', 'Stripe'],
      inputs: ['error_metrics.json', 'github_deployments.json'],
      outputs: ['correlations.json', 'spike_timeline.png'],
      tokens: { input: 7800, output: 2600 },
    },
    writer: {
      name: 'Summary Agent',
      version: '1.5.0',
      tools: ['Template engine', 'Citation linker'],
      inputs: ['correlations.json', 'runbook_templates.md'],
      outputs: ['root_cause_summary.md', 'hypothesis_rankings.json'],
      tokens: { input: 3100, output: 4200 },
    },
    guardian: {
      name: 'Validator',
      version: '1.3.4',
      tools: ['Confidence scorer', 'Data lineage checker'],
      inputs: ['root_cause_summary.md', 'source_citations.csv'],
      outputs: ['validation_notes.md'],
      tokens: { input: 2100, output: 900 },
    },
    supervisor: {
      name: 'Supervisor Agent',
      version: '0.9.8',
      tools: ['Run reviewer', 'Escalation queue'],
      inputs: ['validation_notes.md', 'root_cause_summary.md'],
      outputs: ['final_findings.zip'],
      tokens: { input: 950, output: 480 },
    },
  },
};

export const AGENT_ACTIVITY_TIMELINE = [
  {
    id: 'evt-001',
    traceId: 'trace-7c3f-0001',
    agent: 'Atlas',
    avatar: 'A',
    type: 'thinking',
    text: 'Analyzing request and identifying required diagnostic agents...',
    status: 'completed',
    time: '10:41:00',
    planStep: 1,
    parentId: null,
    details: {
      title: 'Request Analysis',
      input: `User request: "I've noticed a pattern of checkout failures and order delays over the last 48 hours—spikes happening roughly every 4 hours. Use autopilot for the data pulls, but keep the root cause summary in Co-Pilot so I can review before sharing with the on-call team."`,
      reasoning: `1. Identified key pattern: 4-hour recurring spikes in checkout failures
2. Time window: Last 48 hours of data needed
3. Required agents:
   - Planner Agent: Define investigation scope
   - Metrics Scout: Pull order/error metrics
   - Correlation Analyst: Match timestamps to events
   - Summary Agent: Draft root cause findings
4. Delegation modes: Autopilot for data pulls, Co-Pilot for summary`,
      output: 'Proceeding to delegate to Planner Agent with investigation parameters',
      tokens: { input: 320, output: 180 },
      duration: '0.4s',
      cost: 0.003,
    },
  },
  {
    id: 'evt-002',
    traceId: 'trace-7c3f-0002',
    agent: 'Atlas',
    avatar: 'A',
    type: 'action',
    text: 'Delegating to Planner Agent with investigation scope',
    status: 'completed',
    time: '10:41:05',
    planStep: 1,
    parentId: null,
    details: {
      title: 'Agent Delegation',
      targetAgent: 'Planner Agent',
      mode: 'Advisor',
      instructions: `{
  "task": "define_investigation_scope",
  "context": {
    "issue": "checkout_failure_spikes",
    "pattern": "4_hour_recurring",
    "time_window": "48h"
  },
  "constraints": [
    "Read-only access to prod metrics",
    "No PII in outputs",
    "Co-Pilot mode for summaries"
  ],
  "expected_output": "investigation_scope.md"
}`,
      tokens: { input: 180, output: 95 },
      duration: '0.2s',
      cost: 0.002,
    },
  },
  {
    id: 'evt-003',
    traceId: 'trace-7c3f-0003',
    agent: 'Planner Agent',
    avatar: 'P',
    type: 'thinking',
    text: 'Defining data sources and success criteria...',
    status: 'completed',
    time: '10:41:12',
    planStep: 1,
    parentId: 'evt-002',
    details: {
      title: 'Planning Analysis',
      input: `Investigation scope from Atlas:
- Issue: Checkout failure spikes
- Pattern: 4-hour recurring cycle
- Time window: 48 hours`,
      reasoning: `Evaluating available data sources:
1. checkout_errors table - Contains error codes, timestamps, user sessions
2. payment_gateway.metrics - API response times, timeout rates
3. deployment_log.csv - Recent deploys with timestamps
4. order_db.latency - Database query performance

Selected approach: Cross-reference error spikes with deployment timeline and payment API status`,
      output: 'Defined 3 primary data sources and 5-step investigation plan',
      tokens: { input: 420, output: 310 },
      duration: '0.6s',
      cost: 0.005,
    },
  },
  {
    id: 'evt-004',
    traceId: 'trace-7c3f-0004',
    agent: 'Planner Agent',
    avatar: 'P',
    type: 'tool',
    text: 'Generated investigation_scope.md with 3 data sources',
    status: 'completed',
    time: '10:41:18',
    planStep: 1,
    parentId: 'evt-002',
    mcpTool: 'Template Engine',
    details: {
      title: 'Investigation Plan',
      content: `# Checkout Failure Investigation
1. Scope investigation + identify data sources
2. Pull order metrics + error rates
3. Correlate timestamps with system events
4. Draft root cause hypotheses
5. Validate confidence + data lineage`,
      tokens: { input: 540, output: 410 },
      duration: '0.8s',
      cost: 0.006,
    },
  },
  {
    id: 'evt-005',
    traceId: 'trace-7c3f-0005',
    agent: 'Atlas',
    avatar: 'A',
    type: 'action',
    text: 'Handing off to Metrics Scout (Autopilot mode)',
    status: 'completed',
    time: '10:41:20',
    planStep: 2,
    parentId: null,
    details: {
      title: 'Agent Delegation',
      targetAgent: 'Metrics Scout',
      mode: 'Autopilot',
      instructions: `{
  "task": "pull_metrics",
  "queries": [
    "checkout_errors_total by error_code",
    "payment_latency_p99",
    "order_success_rate"
  ],
  "time_range": "now() - 48h",
  "join_with": "deployment_log",
  "output_format": "parquet"
}`,
      tokens: { input: 210, output: 85 },
      duration: '0.15s',
      cost: 0.002,
    },
  },
  {
    id: 'evt-006',
    traceId: 'trace-7c3f-a1b2-c3d4',
    agent: 'Metrics Scout',
    avatar: 'M',
    type: 'tool',
    text: 'Querying New Relic APM for checkout error metrics',
    status: 'completed',
    time: '10:41:45',
    planStep: 2,
    parentId: 'evt-005',
    mcpTool: 'New Relic APM',
    details: {
      title: 'New Relic APM Query',
      content: `GET /api/v1/query
  metric: checkout.errors.count{status:failed}
  by: {error_code, payment_provider}
  rollup: rate
  timeframe: last_48h`,
      tokens: { input: 820, output: 2650 },
      duration: '1.4s',
      cost: 0.018,
    },
  },
  {
    id: 'evt-007',
    traceId: 'trace-7c3f-0007',
    agent: 'Metrics Scout',
    avatar: 'M',
    type: 'tool',
    text: 'Correlating error spikes with GitHub deployment history',
    status: 'completed',
    time: '10:42:02',
    planStep: 2,
    parentId: 'evt-005',
    mcpTool: 'GitHub API',
    details: {
      title: 'GitHub Deployments Query',
      content: `gh api repos/acme/checkout-service/deployments
  --jq '.[] | select(.created_at > "2024-01-15")'

Cross-referencing with New Relic error timeline...
Matching deploy timestamps to error spike windows.`,
      tokens: { input: 1200, output: 3400 },
      duration: '2.1s',
      cost: 0.024,
    },
  },
  {
    id: 'evt-008',
    traceId: 'trace-7c3f-0008',
    agent: 'Atlas',
    avatar: 'A',
    type: 'action',
    text: 'Metrics ready, delegating to Correlation Analyst',
    status: 'completed',
    time: '10:42:05',
    planStep: 3,
    parentId: null,
    details: {
      title: 'Agent Delegation',
      targetAgent: 'Correlation Analyst',
      mode: 'Autopilot',
      instructions: `{
  "task": "correlate_events",
  "inputs": [
    "error_metrics.parquet",
    "latency_percentiles.csv",
    "deployment_log.csv"
  ],
  "analysis": "temporal_correlation",
  "window_size": "4h",
  "min_confidence": 0.7
}`,
      tokens: { input: 340, output: 120 },
      duration: '0.2s',
      cost: 0.003,
    },
  },
  {
    id: 'evt-009',
    traceId: 'trace-7c3f-0009',
    agent: 'Correlation Analyst',
    avatar: 'C',
    type: 'thinking',
    text: 'Matching spike timestamps to system events...',
    status: 'running',
    time: '10:42:10',
    planStep: 3,
    parentId: 'evt-008',
    details: {
      title: 'Correlation Analysis',
      input: `Data received from Metrics Scout:
- error_metrics.parquet (2,847 rows)
- latency_percentiles.csv (48h of P50/P95/P99)
- deployment_log.csv (12 deploys in window)`,
      reasoning: `Running temporal correlation analysis...

Spike windows identified:
  02:15 PT - +340% errors, P99: 2.8s
  06:20 PT - +280% errors, P99: 3.1s
  10:18 PT - +310% errors, P99: 2.9s
  14:22 PT - +295% errors, P99: 2.7s

Cross-referencing with:
  - Deployment timestamps
  - Payment gateway status
  - DB connection pool metrics`,
      output: '(analysis in progress...)',
      tokens: { input: 1850, output: 420 },
      duration: '1.2s',
      cost: 0.015,
    },
  },
  {
    id: 'evt-010',
    traceId: 'trace-7c3f-0010',
    agent: 'Correlation Analyst',
    avatar: 'C',
    type: 'tool',
    text: 'Pattern detected: 4-hour cycle correlates with Stripe API timeouts',
    status: 'running',
    time: '10:42:30',
    planStep: 3,
    parentId: 'evt-008',
    mcpTool: 'Stripe Dashboard',
    details: {
      title: 'Stripe + New Relic Correlation',
      content: `{
  "sources": ["New Relic APM", "Stripe Dashboard", "GitHub Deployments"],
  "result": {
    "pattern": "recurring_spike",
    "correlation": 0.94,
    "primary_signal": "stripe_payment_intent_timeout",
    "secondary_signals": ["db_pool_exhaustion", "cache_invalidation"]
  }
}`,
      tokens: { input: 1200, output: 980 },
      duration: '2.0s',
      cost: 0.022,
    },
  },
];

// Data for Slide 8 - History View
export const HISTORY_DATA = {
  blockedTasks: [
    {
      id: 'task-001',
      title: 'Weekly revenue anomaly detection',
      agent: 'Revenue Analyst',
      avatar: 'R',
      blockerReason: 'Awaiting clarification on threshold parameters',
      startedAt: '9:15 AM',
      runningTime: '2h 14m',
      cost: 0.12,
      chatId: 'chat-revenue',
      planStep: 'Configure detection thresholds',
    },
  ],
  activeTasks: [
    {
      id: 'task-002',
      title: 'Checkout failure investigation',
      agent: 'Atlas',
      avatar: 'A',
      progress: 73,
      currentStep: 'Correlating error patterns',
      startedAt: '10:41 AM',
      runningTime: '8m 22s',
      cost: 0.09,
      chatId: 'chat-checkout',
    },
    {
      id: 'task-003',
      title: 'Optimize search relevance scoring',
      agent: 'Search Optimizer',
      avatar: 'S',
      progress: 45,
      currentStep: 'Analyzing click-through rates',
      startedAt: '10:30 AM',
      runningTime: '19m 14s',
      cost: 0.06,
      chatId: 'chat-search',
    },
  ],
  recentTasks: [
    {
      id: 'task-004',
      title: 'Performance audit: homepage load times',
      agent: 'Performance Scout',
      avatar: 'P',
      completedAt: '2 hours ago',
      totalTime: '12m 45s',
      cost: 0.15,
      chatId: 'chat-perf',
      status: 'success',
    },
    {
      id: 'task-005',
      title: 'Root cause analysis: inventory sync failures',
      agent: 'Inventory Analyst',
      avatar: 'I',
      completedAt: '4 hours ago',
      totalTime: '18m 32s',
      cost: 0.22,
      chatId: 'chat-inventory',
      status: 'success',
    },
    {
      id: 'task-006',
      title: 'Shipping rate optimization analysis',
      agent: 'Logistics Agent',
      avatar: 'L',
      completedAt: '8 hours ago',
      totalTime: '25m 10s',
      cost: 0.31,
      chatId: 'chat-shipping',
      status: 'success',
    },
    {
      id: 'task-007',
      title: 'Customer churn prediction model review',
      agent: 'ML Reviewer',
      avatar: 'M',
      completedAt: '12 hours ago',
      totalTime: '42m 18s',
      cost: 0.54,
      chatId: 'chat-churn',
      status: 'success',
    },
    {
      id: 'task-008',
      title: 'Payment gateway failover test',
      agent: 'Reliability Agent',
      avatar: 'R',
      completedAt: 'Yesterday',
      totalTime: '8m 55s',
      cost: 0.08,
      chatId: 'chat-failover',
      status: 'success',
    },
  ],
};

// Data for Slide 9 - Task Detail View (selected task from Slide 8)
export const TASK_DETAIL_DATA = {
  taskId: 'task-002',
  runId: 'RUN-7C3F',
  title: 'Checkout failure investigation',
  status: 'running',
  progress: 73,
  agent: 'Atlas',
  avatar: 'A',
  startedAt: '10:41 AM',
  runningTime: '8m 22s',
  totalCost: 0.09,
  chatId: 'chat-checkout',
  // Plan from the investigation
  plan: [
    {
      step: 1,
      title: 'Scope investigation',
      agent: 'Planner',
      tools: ['PagerDuty', 'GitHub'],
      mode: 'advisor',
      status: 'completed',
    },
    {
      step: 2,
      title: 'Pull metrics & error rates',
      agent: 'Metrics Scout',
      tools: ['New Relic', 'AWS CloudWatch'],
      mode: 'autopilot',
      status: 'completed',
    },
    {
      step: 3,
      title: 'Correlate patterns',
      agent: 'Correlation Analyst',
      tools: ['New Relic', 'GitHub', 'Stripe'],
      mode: 'autopilot',
      status: 'running',
    },
    {
      step: 4,
      title: 'Draft root cause findings',
      agent: 'Summary Agent',
      tools: [],
      mode: 'copilot',
      status: 'pending',
    },
    {
      step: 5,
      title: 'Validate confidence levels',
      agent: 'Validator',
      tools: [],
      mode: 'advisor',
      status: 'pending',
    },
  ],
};

// Data for Slide 10 - Activity Detail (MCP Call Inspector)
export const ACTIVITY_DETAIL_DATA = {
  id: 'activity-006',
  traceId: 'trace-7c3f-a1b2-c3d4',
  title: 'New Relic APM Query',
  agent: 'Metrics Scout',
  avatar: 'M',
  timestamp: '10:41:45',
  status: 'success',
  planStep: 2,
  mcpTool: {
    name: 'New Relic APM',
    version: '2.1.0',
    type: 'Observability',
  },
  input: `GET /api/v1/query
{
  "metric": "checkout.errors.count",
  "filter": { "status": "failed" },
  "groupBy": ["error_code", "payment_provider"],
  "rollup": "rate",
  "timeframe": "last_48h"
}`,
  output: `{
  "results": [
    {
      "timestamp": "02:15 PT",
      "error_count": 847,
      "change": "+340%",
      "top_error": "PAYMENT_TIMEOUT"
    },
    {
      "timestamp": "06:20 PT",
      "error_count": 692,
      "change": "+280%",
      "top_error": "PAYMENT_TIMEOUT"
    },
    {
      "timestamp": "10:18 PT",
      "error_count": 761,
      "change": "+310%",
      "top_error": "DB_CONNECTION_EXHAUSTED"
    },
    {
      "timestamp": "14:22 PT",
      "error_count": 724,
      "change": "+295%",
      "top_error": "CACHE_MISS"
    }
  ],
  "total_errors": 3024,
  "baseline_avg": 195
}`,
  reasoning: `Querying New Relic APM to identify error patterns over the last 48 hours.
Grouping by error_code and payment_provider to surface correlations.
Using rate rollup to normalize against traffic variations.`,
  tokens: { input: 820, output: 2650 },
  duration: '1.4s',
  cost: 0.018,
};

// Example of a failed MCP call for demonstration
export const FAILED_ACTIVITY_DATA = {
  id: 'activity-failed',
  traceId: 'trace-9d4e-f5g6-h7i8',
  title: 'Stripe Payment Logs Export',
  agent: 'TraceAgent',
  avatar: 'T',
  timestamp: '10:43:12',
  status: 'failed',
  planStep: 3,
  mcpTool: {
    name: 'Stripe Dashboard',
    version: '3.2.1',
    type: 'Payment',
  },
  input: `POST /v1/payment_intents/search
{
  "query": "status:'requires_payment_method' AND created>1705276800",
  "limit": 100,
  "expand": ["latest_charge.balance_transaction"]
}`,
  output: null,
  error: {
    type: 'AuthenticationError',
    code: 'api_key_expired',
    message: 'The API key provided has expired. Please generate a new key from the Stripe Dashboard.',
    retryable: false,
    handledBy: 'Escalated to human - awaiting vendor API access',
  },
  reasoning: `Attempting to export payment intent logs to correlate timeout patterns.
Need detailed transaction-level data to match with error timestamps.`,
  tokens: { input: 340, output: 0 },
  duration: '0.8s',
  cost: 0.002,
};

export const AUDIT_DATA = {
  timeline: [
    {
      id: 'e1',
      timestamp: '10:41:12',
      type: 'action',
      title: 'Planner agent logged investigation contract',
      details: `{
  "run_id": "RUN-7C3F",
  "constraints": ["Read-only prod metrics", "No PII access", "Summary = Co-Pilot"],
  "data_sources": ["checkout_errors", "payment_gateway", "deployment_log"]
}`,
      tokens: { input: 540, output: 410 },
      cost: 0.006,
    },
    {
      id: 'e2',
      timestamp: '10:41:45',
      type: 'tool',
      title: 'Metrics Scout New Relic query',
      details: `GET /api/v1/query
  metric: checkout.errors.count{status:failed}
  by: {error_code, payment_provider}
  timeframe: last_48h`,
      tokens: { input: 820, output: 2650 },
      cost: 0.018,
      duration: '1.4s',
    },
    {
      id: 'e3',
      timestamp: '10:42:10',
      type: 'tool',
      title: 'Correlation Analyst Stripe + New Relic scan',
      details: `{
  "method": "temporal_correlation",
  "window": "4h",
  "result": "94% correlation with Stripe API timeouts"
}`,
      duration: '2.0s',
      tokens: { input: 1200, output: 980 },
      cost: 0.022,
      hasSource: true,
      sourcePreview: 'Matched 4 spike windows to Stripe status page incidents.',
    },
    {
      id: 'e4',
      timestamp: '10:42:44',
      type: 'output',
      title: 'Summary Agent drafted root cause sections',
      details: `Hypotheses ranked by confidence:
1. Payment Gateway Timeouts (94%)
2. DB Connection Pool Exhaustion (81%)
3. Cache Invalidation Storm (68%)`,
      hasSource: true,
      sourcePreview: 'Referencing correlation analysis + deployment_log.csv',
    },
    {
      id: 'e5',
      timestamp: '10:43:05',
      type: 'checkpoint',
      title: 'Checkpoint before Validator review',
      details: 'Auto-save before confidence validation',
      canRollback: true,
    },
  ],
  memory: {
    preferences: [
      { key: 'Time window', value: 'Last 48 hours', editable: true },
      { key: 'Alert threshold', value: 'P99 > 2s', editable: true },
      { key: 'Output format', value: 'Incident summary + recommendations', editable: true },
    ],
    context: [
      { key: 'Investigation scope', value: 'Checkout failure spikes' },
      { key: 'Last incident', value: '14:22 PT (cache storm)' },
    ],
  },
  uncertainText: 'The payment gateway correlation is strong at 94%, but we cannot rule out the possibility that DB connection exhaustion is a contributing factor during high-traffic windows. The cache invalidation hypothesis requires additional data from the CDN logs.',
  citations: [
    { id: 'c1', text: 'Checkout errors spiked 340% at 02:15 PT, correlating with v2.4.1 deploy', source: 'GitHub Deployments', confidence: 'high' },
    { id: 'c2', text: 'Stripe payment intent timeouts increased 12x during 3 of 4 spike windows', source: 'Stripe Dashboard', confidence: 'medium' },
  ],
};

// Data for Slide 11 - Task Inbox
export const TASK_INBOX_DATA = {
  filters: ['All', 'Clarification', 'Approval', 'Action'],
  tasks: [
    {
      id: 'inbox-001',
      title: 'Weekly revenue anomaly detection',
      agent: 'Revenue Analyst',
      avatar: 'R',
      interventionType: 'clarification',
      waitingTime: '2h 14m',
      waitingMinutes: 134,
      priority: 'high',
      blockerSummary: 'Awaiting threshold parameters',
      unread: true,
      cost: 0.12,
      conversation: {
        messages: [
          {
            role: 'agent',
            author: 'Revenue Analyst',
            time: '2h 14m ago',
            text: "I've started analyzing revenue patterns across all business units. Before I can set up anomaly detection alerts, I need to understand your tolerance thresholds.",
          },
          {
            role: 'agent',
            author: 'Revenue Analyst',
            time: '2h 14m ago',
            text: "I'm seeing normal variance of ±3-5% daily. What level of variance should trigger an alert for your review?",
          },
        ],
        clarifications: [
          {
            question: 'What revenue variance threshold should trigger an alert?',
            options: ['±5%', '±10%', '±15%', '±20%'],
          },
          {
            question: 'Which revenue streams should I monitor?',
            options: ['All streams', 'Subscriptions only', 'One-time purchases', 'Enterprise contracts'],
          },
        ],
      },
    },
    {
      id: 'inbox-002',
      title: 'Customer support escalation workflow',
      agent: 'Support Orchestrator',
      avatar: 'S',
      interventionType: 'approval',
      waitingTime: '45m',
      waitingMinutes: 45,
      priority: 'medium',
      blockerSummary: 'Plan ready for approval',
      unread: true,
      cost: 0.03,
      conversation: {
        messages: [
          {
            role: 'user',
            author: 'You',
            time: '50m ago',
            text: 'Set up an automated escalation workflow for high-priority support tickets that have been open for more than 4 hours.',
          },
          {
            role: 'agent',
            author: 'Support Orchestrator',
            time: '45m ago',
            text: "I've drafted a workflow plan for handling support escalations. Please review and approve before I begin execution.",
          },
        ],
        plan: {
          title: 'Support Ticket Escalation Workflow',
          steps: [
            { step: 1, title: 'Categorize ticket priority', agent: 'Triage Agent', tools: ['Zendesk'], mode: 'autopilot' },
            { step: 2, title: 'Check SLA breach status', agent: 'SLA Monitor', tools: ['Zendesk', 'PagerDuty'], mode: 'autopilot' },
            { step: 3, title: 'Route to specialist team', agent: 'Router Agent', tools: ['Slack'], mode: 'copilot' },
            { step: 4, title: 'Notify account manager', agent: 'Notification Agent', tools: ['Slack', 'Email'], mode: 'copilot' },
          ],
          estimates: { time: { min: 5, max: 8, unit: 'min' }, cost: { min: 0.02, max: 0.04, unit: 'USD' } },
        },
      },
    },
    {
      id: 'inbox-003',
      title: 'Inventory restock recommendation',
      agent: 'Inventory Analyst',
      avatar: 'I',
      interventionType: 'action',
      waitingTime: '1h 30m',
      waitingMinutes: 90,
      priority: 'high',
      blockerSummary: 'Ready to create purchase order',
      unread: false,
      cost: 0.08,
      conversation: {
        messages: [
          {
            role: 'agent',
            author: 'Inventory Analyst',
            time: '1h 35m ago',
            text: "I've analyzed inventory levels across all warehouses. 12 SKUs are below reorder threshold and need restocking within 2 weeks to avoid stockouts.",
          },
          {
            role: 'agent',
            author: 'Inventory Analyst',
            time: '1h 30m ago',
            text: "I've prepared a purchase order for your review. Please confirm the details before I submit it to the supplier.",
          },
        ],
        suggestedAction: {
          title: 'Create Purchase Order',
          tool: 'SAP',
          toolIcon: 'box',
          fields: [
            { label: 'Supplier', value: 'Acme Supplies', editable: true },
            { label: 'SKUs', value: '12 items', editable: false },
            { label: 'Total', value: '$24,500', editable: false },
            { label: 'Delivery', value: 'Standard (5-7 days)', editable: true, options: ['Express (2-3 days)', 'Standard (5-7 days)', 'Economy (10-14 days)'] },
          ],
        },
      },
    },
    {
      id: 'inbox-004',
      title: 'Quarterly report data validation',
      agent: 'Data Validator',
      avatar: 'D',
      interventionType: 'clarification',
      waitingTime: '3h 45m',
      waitingMinutes: 225,
      priority: 'low',
      blockerSummary: 'Conflicting data sources detected',
      unread: true,
      cost: 0.15,
      conversation: {
        messages: [
          {
            role: 'agent',
            author: 'Data Validator',
            time: '3h 50m ago',
            text: "I'm validating Q4 revenue figures for the quarterly report. I've found a $47,000 discrepancy between Salesforce CRM and NetSuite ERP.",
          },
          {
            role: 'agent',
            author: 'Data Validator',
            time: '3h 45m ago',
            text: 'The difference appears to be related to timing of deal closures. Which system should I treat as the source of truth?',
          },
        ],
        clarifications: [
          {
            question: 'Which data source should be authoritative for Q4 revenue?',
            options: ['Salesforce CRM', 'NetSuite ERP', 'Manual spreadsheet', 'Reconcile all sources'],
          },
        ],
      },
    },
    {
      id: 'inbox-005',
      title: 'Marketing campaign approval',
      agent: 'Campaign Manager',
      avatar: 'C',
      interventionType: 'approval',
      waitingTime: '20m',
      waitingMinutes: 20,
      priority: 'medium',
      blockerSummary: 'Email sequence ready for review',
      unread: true,
      cost: 0.02,
      conversation: {
        messages: [
          {
            role: 'user',
            author: 'You',
            time: '25m ago',
            text: 'Create a welcome email sequence for new trial signups. 3 emails over 7 days.',
          },
          {
            role: 'agent',
            author: 'Campaign Manager',
            time: '20m ago',
            text: "I've drafted a 3-email welcome sequence. The content focuses on product value and includes a special offer in the final email. Ready for your approval.",
          },
        ],
        plan: {
          title: 'Welcome Email Sequence',
          steps: [
            { step: 1, title: 'Send welcome email (Day 1)', agent: 'Email Agent', tools: ['Mailchimp'], mode: 'autopilot' },
            { step: 2, title: 'Send tips & tricks email (Day 3)', agent: 'Email Agent', tools: ['Mailchimp'], mode: 'autopilot' },
            { step: 3, title: 'Send special offer email (Day 7)', agent: 'Email Agent', tools: ['Mailchimp', 'Stripe'], mode: 'copilot' },
          ],
          estimates: { time: { min: 168, max: 168, unit: 'hours' }, cost: { min: 0.01, max: 0.02, unit: 'USD' } },
        },
      },
    },
  ],
};
