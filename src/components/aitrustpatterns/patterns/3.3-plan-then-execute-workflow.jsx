import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../demos/PlanThenExecuteDemo.css';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const PLAN_THEN_EXECUTE_SEO = {
  title: "Plan-then-Execute Workflow (Unified Stream Variant) - AI Trust Pattern",
  description: "A conversational workflow where multiple AI agents operate within a single, unified chat stream. Agents propose explicit, editable plans for multi-step or risky tasks, while a navigation-based Action Shelf ensures pending requests don't get lost in the scroll history.",
  keywords: ["AI planning", "plan-then-execute", "agentic workflow", "AI trust", "human oversight", "execution control", "AI transparency", "agentic UX", "multi-agent", "unified stream"],
  canonicalPath: "/agentic_ai_patterns/plan-then-execute-workflow"
};

// Initial messages for the demo
const INITIAL_MESSAGES = [
  {
    id: 'msg-init-1',
    role: 'devops',
    text: "I'm online."
  },
  {
    id: 'msg-init-2',
    role: 'crm',
    text: "I'm online and synced with the CRM database."
  }
];

// Plan definitions
const PLANS = {
  devops: {
    id: 'plan-devops',
    msgId: 'msg-devops',
    title: 'Production DB Scaling',
    steps: [
      { text: 'Snapshot volume', code: 'vol-0a32...' },
      { text: 'Provision', code: 'db.r5.2xlarge', suffix: ' instance' },
      { text: 'Switchover traffic (est. 2s downtime)' }
    ]
  },
  crm: {
    id: 'plan-crm',
    msgId: 'msg-crm',
    title: 'Bulk Lead Archive',
    steps: [
      { text: 'Query leads inactive > 6 months' },
      { text: 'Export CSV backup to S3' },
      { text: 'Delete 4,200 records from Sales Database' }
    ]
  }
};

// Interactive Demo Component
function PlanThenExecuteDemo() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('Scale production DB and clean outdated leads in CRM');
  const [activePlans, setActivePlans] = useState(new Set());
  const [planStatuses, setPlanStatuses] = useState({});
  const [typingAgent, setTypingAgent] = useState(null);
  const [highlightedMsg, setHighlightedMsg] = useState(null);
  const chatRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle user submit
  const handleSubmit = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMsg = {
      id: `msg-user-${Date.now()}`,
      role: 'user',
      text: inputValue
    };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // Simulate DevOps typing
    setTypingAgent('devops');
    setTimeout(() => {
      setTypingAgent(null);
      // Add DevOps response with plan
      const devopsMsg = {
        id: PLANS.devops.msgId,
        role: 'devops',
        text: "I can handle the database scaling. I've prepared a safe execution plan.",
        plan: PLANS.devops
      };
      setMessages(prev => [...prev, devopsMsg]);
      setActivePlans(prev => new Set([...prev, PLANS.devops.id]));
      setPlanStatuses(prev => ({ ...prev, [PLANS.devops.id]: 'pending' }));

      // CRM types shortly after
      setTimeout(() => {
        setTypingAgent('crm');
        setTimeout(() => {
          setTypingAgent(null);
          // Add CRM response with plan
          const crmMsg = {
            id: PLANS.crm.msgId,
            role: 'crm',
            text: "I also picked up the request for lead cleanup. Please review the criteria before I proceed.",
            plan: PLANS.crm
          };
          setMessages(prev => [...prev, crmMsg]);
          setActivePlans(prev => new Set([...prev, PLANS.crm.id]));
          setPlanStatuses(prev => ({ ...prev, [PLANS.crm.id]: 'pending' }));
        }, 800);
      }, 500);
    }, 1200);
  };

  // Handle plan approval
  const approvePlan = (planId) => {
    setPlanStatuses(prev => ({ ...prev, [planId]: 'running' }));
    setActivePlans(prev => {
      const next = new Set(prev);
      next.delete(planId);
      return next;
    });

    // Simulate completion
    setTimeout(() => {
      setPlanStatuses(prev => ({ ...prev, [planId]: 'done' }));
    }, 2000);
  };

  // Scroll to message and highlight
  const scrollToMessage = (msgId) => {
    const el = document.getElementById(msgId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setHighlightedMsg(msgId);
      setTimeout(() => setHighlightedMsg(null), 2000);
    }
  };

  // Reset demo
  const resetDemo = () => {
    setMessages(INITIAL_MESSAGES);
    setInputValue('Scale production DB and clean outdated leads in CRM');
    setActivePlans(new Set());
    setPlanStatuses({});
    setTypingAgent(null);
    setHighlightedMsg(null);
  };

  // Get status label
  const getStatusLabel = (planId) => {
    const status = planStatuses[planId];
    if (status === 'running') return 'Executing';
    if (status === 'done') return 'Complete';
    return 'Needs Approval';
  };

  // Get status class
  const getStatusClass = (planId) => {
    const status = planStatuses[planId];
    if (status === 'running') return 'pte-plan-card__status--running';
    if (status === 'done') return 'pte-plan-card__status--done';
    return 'pte-plan-card__status--pending';
  };

  return (
    <div className="pte-demo">
      <header className="pte-demo__header">
        <div className="pte-demo__title-group">
          <h3>Unified Action Shelf</h3>
          <p className="pte-demo__description">
            Multiple agents converse in the same thread. The Action Shelf acts as a <strong>navigation shortcut</strong> to find pending plans. Approving a plan in the chat removes it from the shelf.
          </p>
        </div>
        <button className="pte-demo__reset-btn" onClick={resetDemo}>Reset Demo</button>
      </header>

      <div className="pte-layout">
        {/* Sidebar */}
        <aside className="pte-sidebar">
          <div className="pte-sidebar__header">Participants</div>
          <div className="pte-sidebar__item">
            <span className="pte-sidebar__icon pte-sidebar__icon--devops">DV</span>
            DevOps Agent
          </div>
          <div className="pte-sidebar__item">
            <span className="pte-sidebar__icon pte-sidebar__icon--crm">CR</span>
            CRM Assistant
          </div>
        </aside>

        {/* Main Chat */}
        <main className="pte-chat-interface">
          <div className="pte-chat" ref={chatRef}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                id={msg.id}
                className={`pte-message ${msg.role === 'user' ? 'pte-message--user' : ''} ${highlightedMsg === msg.id ? 'pte-message--highlight' : ''}`}
              >
                <div className={`pte-message__avatar ${msg.role === 'devops' ? 'pte-message__avatar--devops' : ''} ${msg.role === 'crm' ? 'pte-message__avatar--crm' : ''}`}>
                  {msg.role === 'user' ? 'U' : msg.role === 'devops' ? 'DV' : 'CR'}
                </div>
                <div className="pte-message__content">
                  {msg.role !== 'user' && (
                    <div className="pte-message__meta">
                      {msg.role === 'devops' ? 'DevOps Assistant' : 'CRM Assistant'}
                    </div>
                  )}
                  <div className="pte-message__bubble">{msg.text}</div>
                  {msg.plan && (
                    <div className="pte-plan-card">
                      <div className="pte-plan-card__header">
                        <div className="pte-plan-card__title">
                          <span>📋 {msg.plan.title}</span>
                        </div>
                        <span className={`pte-plan-card__status ${getStatusClass(msg.plan.id)}`}>
                          {getStatusLabel(msg.plan.id)}
                        </span>
                      </div>
                      <div className="pte-plan-card__body">
                        {msg.plan.steps.map((step, idx) => (
                          <div key={idx} className="pte-plan-card__step">
                            <span className="pte-plan-card__step-icon">{idx + 1}.</span>
                            <span className="pte-plan-card__step-text">
                              {step.text}
                              {step.code && <code>{step.code}</code>}
                              {step.suffix}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="pte-plan-card__footer">
                        <button className="pte-btn pte-btn--secondary">Edit</button>
                        <button
                          className="pte-btn pte-btn--primary"
                          onClick={() => approvePlan(msg.plan.id)}
                          disabled={planStatuses[msg.plan.id] !== 'pending'}
                        >
                          {planStatuses[msg.plan.id] === 'running' ? 'Running...' : planStatuses[msg.plan.id] === 'done' ? 'Approved' : 'Approve Plan'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {typingAgent && (
              <div className="pte-message pte-fade-in">
                <div className={`pte-message__avatar ${typingAgent === 'devops' ? 'pte-message__avatar--devops' : 'pte-message__avatar--crm'}`}>
                  {typingAgent === 'devops' ? 'DV' : 'CR'}
                </div>
                <div className="pte-message__content">
                  <div className="pte-message__bubble pte-message__typing">Thinking...</div>
                </div>
              </div>
            )}
          </div>

          {/* Action Shelf */}
          <div className={`pte-shelf ${activePlans.size > 0 ? 'pte-shelf--visible' : ''}`}>
            <div className="pte-shelf__header">
              <span>{activePlans.size} {activePlans.size === 1 ? 'ACTION' : 'ACTIONS'} PENDING</span>
            </div>
            <div className="pte-shelf__list">
              {activePlans.has(PLANS.devops.id) && (
                <div
                  className="pte-shelf__item"
                  onClick={() => scrollToMessage(PLANS.devops.msgId)}
                >
                  <div className="pte-shelf__item-icon pte-shelf__item-icon--devops">DV</div>
                  <div className="pte-shelf__item-info">
                    <div className="pte-shelf__item-title">Scale Prod Database</div>
                    <div className="pte-shelf__item-meta">Needs approval</div>
                  </div>
                  <div className="pte-shelf__item-arrow">↗</div>
                </div>
              )}
              {activePlans.has(PLANS.crm.id) && (
                <div
                  className="pte-shelf__item"
                  onClick={() => scrollToMessage(PLANS.crm.msgId)}
                >
                  <div className="pte-shelf__item-icon pte-shelf__item-icon--crm">CR</div>
                  <div className="pte-shelf__item-info">
                    <div className="pte-shelf__item-title">Bulk Lead Cleanup</div>
                    <div className="pte-shelf__item-meta">Needs approval</div>
                  </div>
                  <div className="pte-shelf__item-arrow">↗</div>
                </div>
              )}
            </div>
          </div>

          {/* Input Area */}
          <div className="pte-input-area">
            <div className="pte-input-bar">
              <input
                type="text"
                className="pte-input-bar__field"
                placeholder="Message the team..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSubmit()}
              />
              <button
                className="pte-input-bar__btn"
                disabled={!inputValue.trim()}
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function PlanThenExecuteWorkflowPattern() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="pattern-page"
    >
      <header className="pattern-header">
        <div className="pattern-header__inner">
          <div className="pattern-header__title-group">
            <span className="pattern-header__index">3.3</span>
            <div>
              <h1 className="pattern-header__title">Plan-then-Execute Workflow (Unified Stream Variant)</h1>
              <p className="pattern-header__subtitle">
                A conversational workflow where multiple AI agents operate within a <strong>single, unified chat stream</strong>. Agents propose explicit, editable plans for multi-step or risky tasks, while a <strong>navigation-based Action Shelf</strong> ensures pending requests don&apos;t get lost in the scroll history – even when several agents are talking at once.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="3.3" patternTitle="Plan-then-Execute Workflow" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              The Plan-then-Execute Workflow pattern introduces an explicit planning phase into conversational AI workflows. Instead of immediately acting on a request, an agent surfaces a structured plan as part of the chat, invites refinement, and only then proceeds to execution.
            </p>
            <p className="pattern-body">
              In a <span className="pattern-body--bold">Unified Stream environment</span> – where DevOps, CRM, and Data agents all converse in the same thread – messages move quickly. A plan proposed by one agent can easily be pushed off-screen by subsequent messages from other agents.
            </p>
            <p className="pattern-body">
              This pattern solves the &quot;lost context&quot; problem by introducing a <span className="pattern-body--bold">Navigation Action Shelf</span>:
            </p>
            <ul className="pattern-list">
              <li>The shelf <span className="pattern-body--bold">does not duplicate the controls</span> (buttons). Approval, edit, and reject actions remain attached to the <span className="pattern-body--bold">inline plan card</span> in the chat.</li>
              <li>Instead, the shelf acts as a persistent <span className="pattern-body--bold">&quot;To-Do List&quot; of shortcuts</span>. Clicking an item on the shelf instantly scrolls the chat history to the specific plan card requiring attention.</li>
            </ul>
            <p className="pattern-body">
              This ensures that:
            </p>
            <ul className="pattern-list">
              <li>Action requests don&apos;t get buried in fast-moving threads.</li>
              <li>The user can <span className="pattern-body--bold">continue messaging any agent</span> while actions are pending.</li>
              <li>Approval, pause, cancel, and other controls are always one click away <span className="pattern-body--bold">by jumping straight to the relevant inline plan card</span>.</li>
            </ul>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Plan-then-execute workflow example">
          <PlanThenExecuteDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without a plan-then-execute pattern, agentic systems tend to behave as opaque &quot;black boxes&quot;:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Hidden intent and side effects</span> – The agent receives a natural language request and immediately performs tool calls or data mutations.
              </li>
              <li>
                <span className="pattern-body--bold">Over- or under-confidence in the agent</span> – Users avoid powerful agent capabilities, or they over-trust them.
              </li>
              <li>
                <span className="pattern-body--bold">High cost of misunderstanding</span> – Ambiguous instructions can lead to large-scale errors (e.g., mass updates, production deployments).
              </li>
            </ul>
            <p className="pattern-body">
              In <span className="pattern-body--bold">multi-agent, fast-paced conversations</span>, additional problems appear:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Action requests get buried</span> – Approval prompts, plan cards, and confirmations from one agent scroll off-screen as other agents post updates, leaving the user unaware that actions are blocked on them.
              </li>
              <li>
                <span className="pattern-body--bold">Fragmented control surface</span> – Each agent requests actions &quot;inside&quot; its own chat messages, so the user has to scroll up to find what&apos;s pending and where to act.
              </li>
              <li>
                <span className="pattern-body--bold">Context-switching friction</span> – Users want to keep talking to another agent (e.g., debugging with DevOps) while a plan from a different agent (e.g., CRM cleanup) awaits approval. If control is tied to a particular message in history, that flow becomes clumsy.
              </li>
            </ul>
            <p className="pattern-body">
              In a <span className="pattern-body--bold">single, unified conversation with multiple agents</span>, these issues concentrate into specific failure modes:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Scroll Blindness</span> – A user asks the DevOps agent to scale a database. While reading the plan, the CRM agent jumps in with a question about lead cleanup. The DevOps plan is pushed up and off-screen. Out of sight, out of mind.
              </li>
              <li>
                <span className="pattern-body--bold">Fragmented Context</span> – Users often forget which agent is waiting on them. They might reply to the CRM agent, forgetting that the DevOps agent is effectively &quot;paused&quot; waiting for approval.
              </li>
              <li>
                <span className="pattern-body--bold">Redundant UI</span> – Duplicating full approval controls (Approve/Reject buttons) into a global header can be dangerous if the user doesn&apos;t see the full context of the plan (steps, risks) before clicking.
              </li>
            </ul>
            <p className="pattern-body">
              The Unified Stream Plan-then-Execute pattern addresses this by <span className="pattern-body--bold">keeping controls attached to the context (the message)</span>, while using the shelf strictly for <span className="pattern-body--bold">visibility and navigation</span>.
            </p>
          </div>

          <aside className="pattern-section__aside">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <CheckCircle size={16} className="pattern-icon--success" />
                Use this pattern when…
              </h3>
              <ul className="pattern-card__list">
                <li>
                  <span className="pattern-body--bold">Multi-step or orchestrated workflows</span> – Tasks that involve several steps, multiple tools, or dependencies (e.g., analyze → draft → review → apply changes).
                </li>
                <li>
                  <span className="pattern-body--bold">Risky or irreversible actions</span> – Operations involving write access to production systems, financial transactions, customer communications, security settings, or compliance-sensitive data.
                </li>
                <li>
                  <span className="pattern-body--bold">Ambiguous or open-ended requests</span> – Broad goals such as &quot;optimize our pipeline,&quot; &quot;clean up our data,&quot; or &quot;improve our onboarding flows&quot; where the path is not obvious.
                </li>
                <li>
                  <span className="pattern-body--bold">Cross-system operations</span> – Tasks that coordinate changes across several platforms (e.g., CRM, marketing automation, billing, analytics).
                </li>
                <li>
                  <span className="pattern-body--bold">Human-in-the-loop workflows</span> – Situations where policy, compliance, or organizational norms require a human to review steps or approve actions before execution.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">Simple, low-risk queries</span> – Direct Q&amp;A, summarization, or non-destructive data retrieval.</li>
                <li><span className="pattern-body--bold">Highly scoped, single-step actions</span> – Small, localized operations with narrow scope and strong guardrails.</li>
                <li><span className="pattern-body--bold">UI already constrains the action tightly</span> – Existing forms, wizards, or configuration screens that already enforce constraints and preview changes.</li>
              </ul>
            </div>
          </aside>
        </section>

        {/* Pattern Anatomy */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Pattern anatomy</p>
              <p className="pattern-body pattern-body--narrow">
                This pattern introduces two core objects: the <span className="pattern-body--bold">Inline Plan Card</span> rendered in the chat stream, and the <span className="pattern-body--bold">Navigation Action Shelf</span> for visibility and quick access.
              </p>
            </div>
          </div>

          {/* Core Item: Inline Plan Card */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: The Inline Plan Card</h3>
            <p className="pattern-card__intro">
              The central object is the <span className="pattern-body--bold">Execution Plan Card</span> rendered directly in the chat stream by the specific agent.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Location</p>
                <ul className="pattern-card__list">
                  <li>Inside a chat message for the agent that proposed it (e.g., from DevOps, CRM, or Data)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Content</p>
                <ul className="pattern-card__list">
                  <li>Step-by-step breakdown of the intended actions</li>
                  <li>Risk analysis and impact assessment</li>
                  <li>Resource requirements or affected entities (tables, accounts, services)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>&quot;Approve&quot;, &quot;Edit&quot;, and &quot;Reject&quot; buttons live <span className="pattern-body--bold">on the card itself</span>, ensuring the user reads the plan before acting</li>
                  <li>Optional affordances for simulation, dry-run, or environment selection (sandbox vs production)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Metadata (Per Agent / Conversation)</p>
                <ul className="pattern-card__list">
                  <li><code>plan_id</code></li>
                  <li><code>agent_id</code> / <code>agent_name</code></li>
                  <li><code>conversation_id</code> or <code>space_id</code></li>
                  <li><code>environment</code> (e.g., sandbox, staging, production)</li>
                  <li><code>risk_level</code> (e.g., low, medium, high)</li>
                </ul>
              </div>
            </div>
            <p className="pattern-card__intro pattern-grid--mt-sm">
              Multiple plans can exist concurrently across agents – e.g., a <span className="pattern-body--bold">&quot;CRM Cleanup Plan&quot;</span> from the CRM agent and an <span className="pattern-body--bold">&quot;Email Campaign Optimization Plan&quot;</span> from the Marketing agent – but they all appear inline in the <span className="pattern-body--bold">same unified stream</span>.
            </p>
          </div>

          {/* Navigation Action Shelf */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Object: The Navigation Action Shelf</h3>
            <p className="pattern-card__intro">
              A compact <span className="pattern-body--bold">Navigation Action Shelf</span> sits immediately above the chat message input bar, visible regardless of which agent the user is currently addressing.
            </p>
            <p className="pattern-card__intro" style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>
              In earlier versions, a &quot;Global Action Shelf&quot; also contained direct action controls. In the Unified Stream variant, the shelf is <span className="pattern-body--bold">navigation-only</span>: it surfaces what needs attention and jumps you to the right place in history.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Purpose</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Visibility:</span> Shows a count of how many plans are currently blocked or awaiting input (e.g., &quot;2 Actions Pending&quot;)</li>
                  <li><span className="pattern-body--bold">Navigation:</span> Acts as a bookmark bar. Clicking an item scrolls the unified feed to that specific message (the plan card or confirmation point)</li>
                  <li><span className="pattern-body--bold">Non-blocking presence:</span> Keeps the user aware of pending actions without freezing the conversation or forcing a response</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Shelf Elements</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Header / summary:</span> &quot;2 Actions Pending&quot; or &quot;3 actions awaiting your input&quot;</li>
                  <li><span className="pattern-body--bold">Optional filter:</span> All · Approvals · Reviews · Blocks</li>
                  <li><span className="pattern-body--bold">Expand / collapse:</span> Collapses to a single line (&quot;2 actions pending ▾&quot;) to avoid clutter but remains visible when there is work to do</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Navigation Chips (One Per Pending Action)</p>
                <ul className="pattern-card__list">
                  <li>Agent avatar + name (e.g., &quot;DevOps Assistant&quot;, &quot;CRM Assistant&quot;)</li>
                  <li>Short label (&quot;Prod DB Scaling&quot;, &quot;Approve CRM Cleanup Plan&quot;)</li>
                  <li>Status text: <code>Needs approval</code>, <code>Needs info</code>, <code>Paused</code>, <code>Running (blocked)</code></li>
                  <li>Optional risk/environment indicator: <code>Live data</code>, <code>Sandbox</code>, <code>High impact</code></li>
                  <li><span className="pattern-body--bold">Primary affordance:</span> A &quot;Jump&quot; or &quot;Link&quot; icon (↗) and/or &quot;Open&quot; label indicating <span className="pattern-body--bold">navigation</span>, not immediate execution</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Click Behavior</p>
                <ul className="pattern-card__list">
                  <li>Clicking a chip <span className="pattern-body--bold">smooth-scrolls</span> the chat view to center the target message</li>
                  <li>The target message briefly <span className="pattern-body--bold">highlights or flashes</span> (e.g., a 1–2 second background fade) to orient the user in dense history</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Lifecycle</p>
                <ul className="pattern-card__list">
                  <li>The shelf <span className="pattern-body--bold">appears</span> when a plan enters a &quot;pending user input&quot; state: <code>Awaiting approval</code>, <code>Needs info</code>, <code>User confirmation required</code></li>
                  <li>It <span className="pattern-body--bold">updates live</span> as plans move between states (<code>pending → running → done</code>)</li>
                  <li>It <span className="pattern-body--bold">disappears automatically</span> once the last pending item is resolved (e.g., the user clicks &quot;Approve&quot; or &quot;Reject&quot; on the inline card)</li>
                </ul>
              </div>
            </div>
            <p className="pattern-card__intro pattern-grid--mt-sm">
              The shelf is <span className="pattern-body--bold">non-modal</span>: it does not block typing or switching agents. It simply follows the user as a persistent reminder and navigation layer.
            </p>
          </div>
        </section>

        {/* Behavior & Lifecycle */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Behavior &amp; lifecycle</p>
              <p className="pattern-body pattern-body--narrow">
                How the plan-then-execute workflow surfaces at different moments in the user&apos;s journey with one or more agents in a unified stream.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Proposal &amp; Shelf Appearance</h3>
              <ul className="pattern-card__list">
                <li>The user issues a complex or high-impact prompt in the unified stream.</li>
                <li>Agent A (e.g., DevOps) analyzes the request and posts an <span className="pattern-body--bold">inline Plan Card</span> in the chat with steps, risks, and controls (Approve/Edit/Reject).</li>
                <li>Execution is <span className="pattern-body--bold">paused</span> (no writes) for that plan until an approved state exists.</li>
                <li>As the message renders in a <code>waiting_approval</code> state, the plan <span className="pattern-body--bold">registers itself</span> with the Shelf Manager.</li>
                <li>The Navigation Action Shelf slides up, adding a shortcut chip for this plan (e.g., &quot;Prod DB Scaling – Needs approval&quot;).</li>
              </ul>
              <p className="pattern-card__intro" style={{ marginTop: '0.75rem', fontStyle: 'italic' }}>
                Key nuance: the shelf is <span className="pattern-body--bold">not a modal</span>. The user can ignore it for now and keep typing, including to other agents.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Context Switching (The &quot;Lost&quot; Plan)</h3>
              <ul className="pattern-card__list">
                <li>Agent B (e.g., CRM) posts a follow-up question or suggestion. The DevOps plan card gets pushed off-screen.</li>
                <li>The Action Shelf remains visible, showing &quot;1 Action Pending&quot; for Agent A.</li>
                <li>The user can continue interacting with Agent B (or others) while Agent A&apos;s plan is effectively &quot;blocked on approval&quot;.</li>
              </ul>
              <p className="pattern-card__intro" style={{ marginTop: '0.75rem' }}>
                This visual layer prevents the system from silently stalling because a key plan scrolled out of view.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Navigation &amp; Review</h3>
              <p className="pattern-card__intro">When the user is ready to address the blocked work:</p>
              <ul className="pattern-card__list">
                <li>They click the DevOps chip on the shelf.</li>
                <li>The interface <span className="pattern-body--bold">scrolls up</span> to reveal the original Plan Card.</li>
                <li>The card briefly <span className="pattern-body--bold">highlights</span> to show &quot;this is what you jumped to&quot;.</li>
                <li>The user reviews the plan details <span className="pattern-body--bold">in context</span>: prior messages that led to the plan are still visible above, and any subsequent clarifications remain nearby in the thread.</li>
              </ul>
              <p className="pattern-card__intro" style={{ marginTop: '0.75rem' }}>
                If the plan requires clarifications (e.g., missing parameters), the user can answer in-line. The plan may update its content and state accordingly, and the chip label/state on the shelf updates to match (e.g., <code>Needs info → Needs approval</code>).
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Execution &amp; Cleanup</h3>
              <ul className="pattern-card__list">
                <li>The user clicks <span className="pattern-body--bold">&quot;Approve&quot;</span> on the inline Plan Card itself (not on the shelf).</li>
                <li>The plan transitions from <code>waiting_approval</code> to <code>running</code>. The agent begins executing the plan step by step, posting progress updates in the same unified stream.</li>
                <li>The Shelf Manager detects the state change: if the plan no longer requires user input, its chip is <span className="pattern-body--bold">removed</span> from the shelf. If no actions remain pending, the shelf hides completely.</li>
              </ul>
              <p className="pattern-card__intro" style={{ marginTop: '0.75rem' }}>
                During execution, the corresponding chip may <span className="pattern-body--bold">reappear</span> if execution blocks on user input mid-way (e.g., &quot;Needs confirmation to proceed with step 3&quot;). The chip&apos;s status text reflects the latest state, such as &quot;Running – blocked on confirmation&quot; or &quot;Running – validation failed (needs input)&quot;.
              </p>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content &amp; microcopy guidelines</p>
            <p className="pattern-body">
              The language of the plan should be explicit, action-oriented, and unambiguous.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Draft plan&quot;, &quot;Approved plan&quot;, &quot;Step 1 – Analyze engagement metrics&quot;</li>
                  <li>&quot;Awaiting approval&quot;, &quot;Running&quot;, &quot;Paused&quot; – clear status indicators</li>
                  <li>&quot;Environment: Sandbox&quot;, &quot;Environment: Live&quot; – explicit environment labeling</li>
                  <li>&quot;High impact: This step will update live records.&quot;</li>
                  <li>&quot;Approve this plan to start execution.&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;The AI will process your request&quot; (vague, doesn&apos;t describe steps)</li>
                  <li>&quot;Working on it…&quot; without step visibility</li>
                  <li>Burying sandbox vs. live distinction in prose</li>
                  <li>Generic &quot;Continue?&quot; prompts without context</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Labels &amp; Headings</h3>
                <ul className="pattern-card__list">
                  <li>Use explicit, action-oriented labels</li>
                  <li>Indicate status prominently to avoid confusion</li>
                  <li>Distinguish hypothetical plans from in-progress execution</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Step Descriptions</h3>
                <ul className="pattern-card__list">
                  <li>Keep step names short and specific</li>
                  <li>Favor plain language over technical jargon</li>
                  <li>Include scope hints where appropriate</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Risk Communication</h3>
                <ul className="pattern-card__list">
                  <li>Clearly distinguish read-only steps from write steps</li>
                  <li>Surface environment in a consistent way</li>
                  <li>Highlight high-risk steps visually and verbally</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Approval Language</h3>
                <ul className="pattern-card__list">
                  <li>Make approval prompts explicit and unambiguous</li>
                  <li>&quot;Approve this plan to start execution.&quot;</li>
                  <li>&quot;Not ready? Edit the plan or cancel.&quot;</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Interaction & States */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Interaction &amp; states</p>
              <p className="pattern-body pattern-body--narrow">
                Key states the plan and execution can be in throughout the workflow.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Plan Not Present</h3>
              <p className="pattern-card__intro">
                The agent executes simple, safe tasks immediately, with an option to retrospectively describe steps if requested.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Planning – Draft</h3>
              <p className="pattern-card__intro">
                The agent is in read-only mode, gathering context and proposing an initial plan. UI indicates that no changes have been made yet.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Planning – In Review</h3>
              <p className="pattern-card__intro">
                The plan is visible but not approved. Steps are fully editable; controls for adding, removing, or reordering steps are active.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Awaiting Approval</h3>
              <p className="pattern-card__intro">
                The plan is structurally complete; the system waits for a clear &quot;approve&quot; or &quot;cancel&quot;. Write actions remain blocked.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Executing</h3>
              <p className="pattern-card__intro">
                Steps transition through states: pending → running → completed/failed/skipped. Pause/resume/cancel controls are available.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Paused / Interrupted</h3>
              <p className="pattern-card__intro">
                Execution is halted; the system remembers the last completed step. On resume, execution continues from the next pending step.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Completed</h3>
              <p className="pattern-card__intro">
                All steps are completed, skipped, or failed with explanations. Results, diffs, or artifacts are summarized and linked.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Canceled</h3>
              <p className="pattern-card__intro">
                Plan or execution is explicitly canceled. A brief summary explains what did and did not happen to avoid ambiguity.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Additional State: Multi-Agent Pending Actions</h3>
              <p className="pattern-card__intro">
                At least one agent has a plan or step in a state that requires user input to proceed: <code>Awaiting approval</code>, <code>Needs info</code>, <code>User confirmation required</code>.
              </p>
              <p className="pattern-body--bold pattern-body--mb-sm" style={{ marginTop: '0.75rem' }}>UI behavior</p>
              <ul className="pattern-card__list">
                <li>The Navigation Action Shelf is visible with a summary of total pending items and individual chips for each agent/plan.</li>
                <li>Each chip shows agent identity (avatar + name), plan or action title, and current state (e.g., <code>Needs approval</code>).</li>
              </ul>
              <p className="pattern-body--bold pattern-body--mb-sm" style={{ marginTop: '0.75rem' }}>User expectations</p>
              <ul className="pattern-card__list">
                <li>The user can temporarily <span className="pattern-body--bold">ignore</span> the shelf to continue chatting.</li>
                <li>Returning to clear the shelf is easy and always <span className="pattern-body--bold">one click away</span> via a chip.</li>
                <li>Clearing all pending items (approve/reject/answer) hides the shelf again.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">Interaction Considerations</h3>
            <ul className="pattern-card__list">
              <li>Ensure accessibility by pairing color cues with text labels and icons for state.</li>
              <li>For long plans, provide condensed views (collapsed steps) with the option to expand details.</li>
              <li>Consider rate-limiting plan complexity (e.g., maximum number of visible steps) and grouping sub-steps to preserve scanability.</li>
            </ul>
          </div>
        </section>

        {/* Variants */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Variants</p>
              <p className="pattern-body pattern-body--narrow">
                Variations on the Unified Stream Plan-then-Execute pattern for different environments.
              </p>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">Multi-Agent Action Center Variant</h3>
            <p className="pattern-card__intro">
              For environments with many agents and complex workflows, the Plan-then-Execute pattern may be paired with a richer <span className="pattern-body--bold">Action Center</span>:
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Dedicated Panel / Page</p>
                <ul className="pattern-card__list">
                  <li>Lists all active plans across agents</li>
                  <li>Shows states, environments, and risk levels</li>
                  <li>Identifies who (which human) is responsible for approvals, if multiple people share a workspace</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Deep-Linking</p>
                <ul className="pattern-card__list">
                  <li>From a Navigation Shelf chip → directly into the Action Center view for that specific plan</li>
                  <li>From the Action Center back into the unified stream at the corresponding message</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Filtering</p>
                <ul className="pattern-card__list">
                  <li>By agent, risk level, environment (sandbox/live), or &quot;assigned to me&quot;</li>
                </ul>
              </div>
            </div>
            <p className="pattern-card__intro pattern-grid--mt-sm">
              In this variant, the <span className="pattern-body--bold">Navigation Action Shelf above the input bar</span> acts as a lightweight, in-context teaser of the Action Center: <span className="pattern-body--bold">quick navigation + a link</span> to the full triage view when the user needs to manage many pending actions.
            </p>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Anti-patterns &amp; failure modes</p>
              <p className="pattern-body pattern-body--narrow">
                Avoid these patterns that undermine trust and safety.
              </p>
            </div>
          </div>

          <div className="antipattern-container">
            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Silent Execution After Showing a Plan</h3>
                  <p className="antipattern-subtitle">Displaying a plan and then immediately executing without explicit approval.</p>
                </div>
              </div>
              <p className="antipattern-description">
                This breaks trust, especially if users assume planning implies safety and control.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always require explicit approval before execution begins.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overly Verbose, Unreadable Plans</h3>
                  <p className="antipattern-subtitle">Plans with dozens of poorly grouped steps or heavy technical detail.</p>
                </div>
              </div>
              <p className="antipattern-description">
                This overwhelms users and encourages blind approval without actually reviewing the plan.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Group steps logically, use progressive disclosure, and prioritize scanability.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Hidden Risk or Environment</h3>
                  <p className="antipattern-subtitle">Burying the distinction between sandbox and live, or downplaying high-risk steps.</p>
                </div>
              </div>
              <p className="antipattern-description">
                This leads to surprise and distrust when users realize the impact of their approval.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Surface environment and risk prominently on every step.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Ignoring Task Evolution</h3>
                  <p className="antipattern-subtitle">Not updating the plan when users adjust goals mid-conversation.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Execution may no longer match expectations, leading to unwanted results.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Detect changes and re-propose or re-confirm the plan before continuing.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Forcing Planning for Trivial Tasks</h3>
                  <p className="antipattern-subtitle">Requiring a plan for every small action.</p>
                </div>
              </div>
              <p className="antipattern-description">
                This creates friction and habituates users to approve without reading, defeating the purpose.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Reserve planning for complex or risky tasks; allow direct execution for simple, safe actions.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">No Recovery Path</h3>
                  <p className="antipattern-subtitle">Running a plan on live data without clear rollback or remediation options.</p>
                </div>
              </div>
              <p className="antipattern-description">
                This increases fear of using agentic capabilities and limits adoption.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Design for reversibility where possible; offer undo, rollback, or remediation controls.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Dependencies & Related Patterns */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Dependencies &amp; related patterns</p>
            <p className="pattern-body">
              This pattern often works in combination with:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Delegation Modes (1.2)</span> – Defines the level of autonomy per step and overall workflow.
              </li>
              <li>
                <span className="pattern-body--bold">Sandboxed Playgrounds (2.1)</span> – Controls which steps run in safe, simulated environments and which can touch production.
              </li>
              <li>
                <span className="pattern-body--bold">Human-in-the-Loop Gates (3.2)</span> – Specifies where approvals are required before proceeding, either at the plan level or per step.
              </li>
              <li>
                <span className="pattern-body--bold">Kill Switch / Pause-Resume (3.1)</span> – Enables immediate intervention during execution.
              </li>
              <li>
                <span className="pattern-body--bold">Activity Timeline</span> – Provides a chronological view of actions taken during execution.
              </li>
              <li>
                <span className="pattern-body--bold">Tool Usage Indicators</span> – Makes tool calls and system interactions visible during planning and execution.
              </li>
              <li>
                <span className="pattern-body--bold">Undo &amp; Rollback</span> – Enables safe recovery from mistakes, especially for live data updates.
              </li>
              <li>
                <span className="pattern-body--bold">Source Anchoring</span> – Links plan steps and decisions to underlying data and evidence.
              </li>
            </ul>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Implementation notes</p>
              <p className="pattern-body pattern-body--narrow">
                Technical considerations for building the Unified Stream variant of this pattern.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Plan Representation (Multi-Agent Fields)</h3>
              <p className="pattern-card__intro">Extend the plan object to include:</p>
              <ul className="pattern-card__list">
                <li><code>plan_id</code></li>
                <li><code>agent_id</code> / <code>agent_name</code></li>
                <li><code>conversation_id</code> or <code>space_id</code></li>
                <li><code>environment</code> (e.g., sandbox, staging, production)</li>
                <li><code>risk_level</code> (low, medium, high)</li>
                <li><code>requires_user_action</code> (boolean)</li>
                <li><code>user_action_type</code> (approval, clarification, confirmation, etc.)</li>
                <li><code>visible_in_action_shelf</code> (boolean)</li>
                <li><code>short_label</code> (for compact chip display, e.g., &quot;Prod DB Scaling&quot;)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Action Shelf Orchestration</h3>
              <ul className="pattern-card__list">
                <li>The <span className="pattern-body--bold">orchestrator layer</span> (above individual agents) listens for <span className="pattern-body--bold">state transitions</span> on plans: <code>Draft → Awaiting approval</code>, <code>Running → Needs info</code>, <code>Paused → Awaiting resume</code></li>
                <li>Synchronizes these into a <span className="pattern-body--bold">single list of &quot;action items&quot;</span> rendered in the Navigation Action Shelf</li>
                <li>Registration / deregistration: When an inline plan component renders with <code>status=&quot;waiting_approval&quot;</code> (or any <code>requires_user_action</code> state), it <span className="pattern-body--bold">registers</span> itself with the Shelf Manager. When the state changes to <code>running</code> or <code>done</code>, it <span className="pattern-body--bold">deregisters</span> so the chip can be removed.</li>
                <li>Shelf items should expose callbacks that <span className="pattern-body--bold">navigate to context</span>, not perform actions: <code>onNavigateToPlan()</code>, <code>onHighlightTarget()</code></li>
                <li>Keep the shelf <span className="pattern-body--bold">stateless in the front end</span>, driven entirely by server-side / orchestrator state, to avoid drift between the chips and the messages they reference</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">State Synchronization (Unified Stream)</h3>
              <ul className="pattern-card__list">
                <li>The shelf and the chat stream must stay in <span className="pattern-body--bold">perfect sync</span>: the source of truth is the plan/message state (e.g., <code>waiting_approval</code>, <code>running</code>, <code>done</code>, <code>error</code>)</li>
                <li>Chips should be regenerated or reconciled whenever message state changes, not hand-edited on the client</li>
                <li>Recommended implementation: Each plan card exposes a unique <code>message_anchor_id</code>. The Shelf Manager holds <code>{'{'}plan_id, message_anchor_id, state, label, agent{'}'}</code>. The chat UI knows how to scroll to <code>message_anchor_id</code> on click.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Visual Orientation</h3>
              <p className="pattern-card__intro">When the shelf triggers a scroll:</p>
              <ul className="pattern-card__list">
                <li>Apply a temporary <span className="pattern-body--bold">visual cue</span> (e.g., a 2-second yellow background fade) on the target message</li>
                <li>Consider a micro &quot;ping&quot; animation on the plan card header to reinforce &quot;this is where you landed&quot;</li>
                <li>Avoid excessive motion for accessibility (provide a reduced motion mode)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Mobile Considerations</h3>
              <p className="pattern-card__intro">On mobile and small screens:</p>
              <ul className="pattern-card__list">
                <li>The shelf should take up <span className="pattern-body--bold">minimal vertical space</span></li>
                <li>Consider a collapsed view like <code>&quot;2 Actions ^&quot;</code> that expands into a full list of chips when tapped</li>
                <li>Ensure the chat input remains easily accessible</li>
                <li>Shelf expansion shouldn&apos;t obscure the context of the message the user is currently typing</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Non-Blocking User Experience</h3>
              <ul className="pattern-card__list">
                <li>Avoid modals that lock the entire workspace for a single agent&apos;s plan</li>
                <li>Favor inline cards in the agent&apos;s thread</li>
                <li>The Navigation Action Shelf for <span className="pattern-body--bold">quick navigation</span> back to where decisions are needed</li>
                <li>Optional side panels (on larger screens) for &quot;full plan detail&quot; so the main message stream doesn&apos;t get overwhelmed</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Accessibility &amp; Notification</h3>
              <ul className="pattern-card__list">
                <li>Use badges and icons on the Navigation Action Shelf (e.g., numeric indicators for pending actions)</li>
                <li>Optional subtle sounds or toasts when a new plan requires approval, execution is blocked waiting on the user, or a long-running plan completes</li>
                <li>Always pair iconography with text labels (e.g., &quot;Live data&quot;, &quot;High impact&quot;) to avoid color-only signaling</li>
                <li>Ensure keyboard navigation can focus each chip on the shelf, activate the navigation action (jump to plan), and move between chips and back to the input field efficiently</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Examples</p>
              <p className="pattern-body pattern-body--narrow">
                B2B / B2C web application scenarios showing the pattern in practice.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Marketing Campaign Optimization</h3>
              <p className="pattern-card__intro">Marketing Platform</p>
              <p className="pattern-card__label">Plan Steps</p>
              <ul className="pattern-card__list">
                <li>Step 1 (Advisor, Read-only): Analyze open/click rates for the past 4 weeks</li>
                <li>Step 2 (Advisor, Read-only): Identify underperforming segments and subject lines</li>
                <li>Step 3 (Co-Pilot, Sandbox): Propose A/B test variants – requires confirmation</li>
                <li>Step 4 (Co-Pilot, Live): Apply selected changes after approval</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">CRM Data Cleanup</h3>
              <p className="pattern-card__intro">B2B Sales Platform</p>
              <p className="pattern-card__label">Plan Steps</p>
              <ul className="pattern-card__list">
                <li>Identify duplicate records</li>
                <li>Simulate merges in a sandbox</li>
                <li>Prompt for review</li>
                <li>Apply merges in production with rollback options for a defined window</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Infrastructure Change Rollout</h3>
              <p className="pattern-card__intro">DevOps Platform</p>
              <p className="pattern-card__label">Plan Steps</p>
              <ul className="pattern-card__list">
                <li>Analyze current configuration</li>
                <li>Generate a change set for staging</li>
                <li>Conduct tests</li>
                <li>Roll out to production with required approvals from engineering and operations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Metrics & Success Signals */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics &amp; success signals</p>
              <p className="pattern-body pattern-body--narrow">
                Instrument the pattern to understand whether it actually improves trust and reduces errors.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Adoption &amp; Usage</h3>
              <ul className="pattern-card__list">
                <li>Frequency of plan-first invocations for eligible tasks</li>
                <li>Proportion of high-risk tasks executed with an approved plan</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Safety &amp; Error Reduction</h3>
              <ul className="pattern-card__list">
                <li>Reduction in incidents caused by unintended agent actions</li>
                <li>Number of rollbacks triggered and successfully completed</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">User Confidence &amp; Satisfaction</h3>
              <ul className="pattern-card__list">
                <li>Qualitative feedback on clarity and control when using agentic features</li>
                <li>Increased usage of advanced agent capabilities in domains that previously saw hesitation</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Workflow Efficiency</h3>
              <ul className="pattern-card__list">
                <li>Time from initial request to successful execution compared to non-planned flows</li>
                <li>Rate at which saved plans/templates are reused</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Questions for design &amp; review</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Plan Visibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the plan clearly visible and distinguishable from normal conversation?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the current status (draft, awaiting approval, executing, completed) always visible?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Editing &amp; Refinement</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users easily edit, add, remove, or reorder steps before approval?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>When the plan changes, are diffs highlighted so users know what was updated?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Approval Flow</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is approval explicit and unambiguous (not a soft continue)?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the approval summary clearly state scope, environment, and risk?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Execution Controls</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are pause, resume, and cancel controls available during execution?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>For co-pilot steps, does execution pause and wait for confirmation?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Audit &amp; Recovery</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are all plan versions, approvals, and execution outcomes logged for audit?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>If rollback is possible, is it accessible after execution completes?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Adaptability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can the plan be saved as a template for reuse?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the system detect when goals change and prompt for plan re-confirmation?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Multi-Agent Coordination (Unified Stream)</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a Navigation Action Shelf showing all pending actions across agents?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users continue messaging other agents while one agent&apos;s plan awaits approval?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does clicking a shelf chip scroll the user directly to the inline plan card (navigation-only)?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do the approve/edit/reject controls remain on the inline plan card (not duplicated in the shelf)?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>When a plan blocks mid-execution, does its chip reappear on the shelf so the user is alerted?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
