import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Bot, User, RotateCcw, X, Loader2 } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// Inline styles for the rollback demo (BEM naming with rollback-demo prefix)
const rollbackDemoStyles = {
  // Container
  container: {
    width: '100%',
    maxWidth: '900px',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    overflow: 'hidden',
    border: '1px solid #d1d5db',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
  },
  // Header
  header: {
    background: '#fafafa',
    padding: '16px 24px',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    zIndex: 10,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#1e293b',
    marginBottom: '4px',
  },
  description: {
    fontSize: '0.9rem',
    color: '#64748b',
    lineHeight: 1.4,
    maxWidth: '600px',
  },
  resetButton: {
    background: 'white',
    border: '1px solid #e2e8f0',
    color: '#64748b',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.85rem',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'all 0.2s',
  },
  // Interface
  interface: {
    display: 'flex',
    height: '420px',
    backgroundColor: '#f4f6f8',
    overflow: 'hidden',
  },
  // Chat panel
  chat: {
    flex: 1,
    minWidth: 0,
    background: 'white',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
  },
  chatHeader: {
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: '#64748b',
    marginBottom: '24px',
    fontWeight: 600,
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: '12px',
  },
  chatArea: {
    flex: 1,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    paddingBottom: '16px',
    paddingRight: '12px',
  },
  // Messages
  message: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '12px',
    maxWidth: '90%',
    animation: 'rollbackDemoPopIn 0.3s ease forwards',
  },
  messageUser: {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },
  messageAgent: {
    alignSelf: 'flex-start',
  },
  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    fontSize: '0.8rem',
  },
  avatarAgent: {
    background: '#3b82f6',
    color: 'white',
  },
  avatarUser: {
    background: '#cbd5e1',
    color: '#64748b',
  },
  bubble: {
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '0.9rem',
    lineHeight: 1.5,
    position: 'relative',
  },
  bubbleUser: {
    backgroundColor: '#f1f5f9',
    color: '#1e293b',
    borderBottomRightRadius: '2px',
  },
  bubbleAgent: {
    backgroundColor: '#eff6ff',
    border: '1px solid #bfdbfe',
    color: '#1e3a8a',
    borderBottomLeftRadius: '2px',
  },
  // Input area
  inputArea: {
    marginTop: 'auto',
    display: 'flex',
    gap: '12px',
    paddingTop: '16px',
    borderTop: '1px solid #e2e8f0',
  },
  input: {
    flex: 1,
    padding: '10px 14px',
    border: '1px solid #e2e8f0',
    borderRadius: '6px',
    fontSize: '0.9rem',
    outline: 'none',
    fontFamily: 'inherit',
  },
  submitButton: {
    background: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '0 24px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '0.9rem',
    transition: 'background 0.2s',
  },
  submitButtonDisabled: {
    background: '#cbd5e1',
    cursor: 'not-allowed',
  },
  // History panel
  history: {
    width: 0,
    background: 'white',
    overflow: 'hidden',
    transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
    borderLeft: 0,
    flexShrink: 0,
  },
  historyOpen: {
    width: '320px',
    borderLeft: '1px solid #e2e8f0',
  },
  historyHeader: {
    padding: '24px',
    borderBottom: '1px solid #e2e8f0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#f8fafc',
    minWidth: '320px',
  },
  historyTitle: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#1e293b',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    color: '#64748b',
    cursor: 'pointer',
    fontSize: '1.1rem',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  historyList: {
    flex: 1,
    overflowY: 'auto',
    padding: '16px',
    listStyle: 'none',
    minWidth: '320px',
    margin: 0,
  },
  // Task item
  task: {
    background: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    transition: 'all 0.2s',
  },
  taskHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '8px',
  },
  taskTitle: {
    fontWeight: 600,
    fontSize: '0.95rem',
    color: '#1e293b',
  },
  taskTime: {
    fontSize: '0.75rem',
    color: '#64748b',
  },
  taskDesc: {
    fontSize: '0.85rem',
    color: '#64748b',
    marginBottom: '16px',
    lineHeight: 1.4,
  },
  taskActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '8px',
  },
  revertButton: {
    background: '#fff',
    border: '1px solid #e2e8f0',
    color: '#1e293b',
    padding: '6px 12px',
    borderRadius: '4px',
    fontSize: '0.85rem',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'all 0.2s',
  },
  spinner: {
    animation: 'rollbackDemoSpin 1s linear infinite',
  },
};

// Demo component showing the rollback pattern
function RollbackDemo() {
  const initialMessages = [
    { id: 1, sender: 'user', text: 'Run the optimization task for the billing database.' },
    { id: 2, sender: 'agent', text: 'Task complete. I have indexed 4 tables and updated the schema for the billing microservice.' }
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('undo changes');
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [revertingTask, setRevertingTask] = useState(null);
  const chatAreaRef = useRef(null);

  const scrollToBottom = () => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text, sender) => {
    const newMessage = {
      id: Date.now(),
      sender,
      text,
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSubmit = () => {
    if (isProcessing || !inputValue.trim()) return;

    const text = inputValue.trim();
    addMessage(text, 'user');
    setInputValue('');

    if (text.toLowerCase().includes('undo')) {
      setIsProcessing(true);

      setTimeout(() => {
        addMessage("I can help with that. Please select which recent task you'd like to revert from the history panel.", 'agent');
        setIsPanelOpen(true);
        setIsProcessing(false);
      }, 600);
    } else {
      setTimeout(() => {
        addMessage("I'm just a demo, try asking to 'undo changes'.", 'agent');
      }, 800);
    }
  };

  const handleRevert = (taskId, taskName) => {
    setIsPanelOpen(false);
    setRevertingTask(taskId);

    // Add loading message
    const loadingId = Date.now();
    setMessages(prev => [...prev, {
      id: loadingId,
      sender: 'agent',
      text: 'loading',
      isLoading: true,
    }]);

    setTimeout(() => {
      setMessages(prev => prev.map(msg =>
        msg.id === loadingId
          ? { ...msg, text: `**Revert complete.**\nThe system state has been restored to the checkpoint before "${taskName}".`, isLoading: false }
          : msg
      ));
      setRevertingTask(null);
    }, 1500);
  };

  const resetDemo = () => {
    setMessages(initialMessages);
    setInputValue('undo changes');
    setIsPanelOpen(false);
    setIsProcessing(false);
    setRevertingTask(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      {/* Inject keyframe animations */}
      <style>{`
        @keyframes rollbackDemoPopIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes rollbackDemoSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div style={rollbackDemoStyles.container}>
        {/* Demo Header */}
        <div style={rollbackDemoStyles.header}>
          <div style={rollbackDemoStyles.headerContent}>
            <div style={rollbackDemoStyles.title}>Rollback & Version History</div>
            <div style={rollbackDemoStyles.description}>
              <strong>Try it:</strong> Click &quot;Submit&quot; to ask the agent to undo changes. Then, select a task from the history panel to revert.
            </div>
          </div>
          <button
            style={rollbackDemoStyles.resetButton}
            onClick={resetDemo}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f1f5f9';
              e.currentTarget.style.borderColor = '#cbd5e1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.borderColor = '#e2e8f0';
            }}
          >
            <RotateCcw size={14} /> Reset Demo
          </button>
        </div>

        {/* App Interface */}
        <div style={rollbackDemoStyles.interface}>
          {/* Chat Panel */}
          <div style={rollbackDemoStyles.chat}>
            <div style={rollbackDemoStyles.chatHeader}>Agent Conversation</div>

            <div style={rollbackDemoStyles.chatArea} ref={chatAreaRef}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    ...rollbackDemoStyles.message,
                    ...(msg.sender === 'user' ? rollbackDemoStyles.messageUser : rollbackDemoStyles.messageAgent),
                  }}
                >
                  <div
                    style={{
                      ...rollbackDemoStyles.avatar,
                      ...(msg.sender === 'agent' ? rollbackDemoStyles.avatarAgent : rollbackDemoStyles.avatarUser),
                    }}
                    aria-hidden="true"
                  >
                    {msg.sender === 'agent' ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div
                    style={{
                      ...rollbackDemoStyles.bubble,
                      ...(msg.sender === 'user' ? rollbackDemoStyles.bubbleUser : rollbackDemoStyles.bubbleAgent),
                    }}
                  >
                    {msg.isLoading ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Loader2 size={14} style={rollbackDemoStyles.spinner} /> Reverting changes...
                      </span>
                    ) : (
                      msg.text.split('\n').map((line, i) => (
                        <span key={i}>
                          {line.startsWith('**') && line.endsWith('**') ? (
                            <strong>{line.slice(2, -2)}</strong>
                          ) : (
                            line
                          )}
                          {i < msg.text.split('\n').length - 1 && <br />}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div style={rollbackDemoStyles.inputArea}>
              <input
                type="text"
                style={rollbackDemoStyles.input}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e2e8f0'}
                placeholder="Type a message..."
              />
              <button
                style={{
                  ...rollbackDemoStyles.submitButton,
                  ...(isProcessing ? rollbackDemoStyles.submitButtonDisabled : {}),
                }}
                onClick={handleSubmit}
                disabled={isProcessing}
                onMouseEnter={(e) => {
                  if (!isProcessing) e.currentTarget.style.background = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  if (!isProcessing) e.currentTarget.style.background = '#3b82f6';
                }}
              >
                Submit
              </button>
            </div>
          </div>

          {/* Side Panel (History) */}
          <div
            style={{
              ...rollbackDemoStyles.history,
              ...(isPanelOpen ? rollbackDemoStyles.historyOpen : {}),
            }}
          >
            <div style={rollbackDemoStyles.historyHeader}>
              <span style={rollbackDemoStyles.historyTitle}>Recent Agent Tasks</span>
              <button style={rollbackDemoStyles.closeButton} onClick={() => setIsPanelOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <ul style={rollbackDemoStyles.historyList}>
              <li style={rollbackDemoStyles.task}>
                <div style={rollbackDemoStyles.taskHeader}>
                  <span style={rollbackDemoStyles.taskTitle}>Billing DB Optimization</span>
                  <span style={rollbackDemoStyles.taskTime}>Just now</span>
                </div>
                <div style={rollbackDemoStyles.taskDesc}>
                  Indexed 4 tables (invoices, payments, users, logs) and migrated schema v4.2.
                </div>
                <div style={rollbackDemoStyles.taskActions}>
                  <button
                    style={rollbackDemoStyles.revertButton}
                    onClick={() => handleRevert('billing', 'Billing DB Optimization')}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#fee2e2';
                      e.currentTarget.style.color = '#991b1b';
                      e.currentTarget.style.borderColor = '#fca5a5';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#fff';
                      e.currentTarget.style.color = '#1e293b';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                    }}
                  >
                    <RotateCcw size={14} /> Revert
                  </button>
                </div>
              </li>

              <li style={rollbackDemoStyles.task}>
                <div style={rollbackDemoStyles.taskHeader}>
                  <span style={rollbackDemoStyles.taskTitle}>Update Firewall Rules</span>
                  <span style={rollbackDemoStyles.taskTime}>2 hours ago</span>
                </div>
                <div style={rollbackDemoStyles.taskDesc}>
                  Allowed port 443 for public-web group.
                </div>
                <div style={rollbackDemoStyles.taskActions}>
                  <button
                    style={rollbackDemoStyles.revertButton}
                    onClick={() => handleRevert('firewall', 'Update Firewall Rules')}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#fee2e2';
                      e.currentTarget.style.color = '#991b1b';
                      e.currentTarget.style.borderColor = '#fca5a5';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#fff';
                      e.currentTarget.style.color = '#1e293b';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                    }}
                  >
                    <RotateCcw size={14} /> Revert
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

// SEO metadata for this pattern page
export const ROLLBACK_VERSION_HISTORY_SEO = {
  title: "Rollback & Version History - AI Trust Pattern",
  description: "Provide deterministic checkpoints and version history so agent-driven changes are always reversible, enabling safe experimentation and recovery from mistakes with minimal disruption.",
  keywords: ["AI rollback", "version history", "checkpoints", "undo agent changes", "version control", "change history", "AI safety", "agentic UX", "audit trail", "agent recovery"],
  canonicalPath: "/agentic_ai_patterns/rollback-version-history"
};

export default function RollbackVersionHistoryPattern() {
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
            <span className="pattern-header__index">3.6</span>
            <div>
              <h1 className="pattern-header__title">Rollback & Version History</h1>
              <p className="pattern-header__subtitle">
                Provide deterministic checkpoints and version history so agent-driven changes are always reversible, enabling safe experimentation and recovery from mistakes with minimal disruption.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="3.6" patternTitle="Rollback & Version History" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Rollback & Version History is a control-and-safety pattern that ensures AI agents can modify configurations, content, or data without putting the system in an irrecoverable state.
            </p>
            <p className="pattern-body">
              Instead of relying on fragile, operation-by-operation undo, the system creates deterministic checkpoints (snapshots) that capture a known-good state before and after significant agent actions.
            </p>
            <p className="pattern-body">
              In agentic workflows, where a single request can trigger dozens or hundreds of changes across objects or services, traditional &quot;undo&quot; is rarely sufficient. Checkpoints and version history provide a durable safety net: users can see what changed, when, and by whom (human or agent), then restore a previous state confidently.
            </p>
            <p className="pattern-body">
              This pattern improves:
            </p>
            <ul className="pattern-list">
              <li><span className="pattern-body--bold">Trust:</span> Agent actions are non-destructive and reversible.</li>
              <li><span className="pattern-body--bold">Exploration:</span> Stakeholders can try AI-powered automation, restructuring, or optimization without fear of permanent damage.</li>
              <li><span className="pattern-body--bold">Accountability:</span> Version history makes changes auditable, explainable, and reviewable across teams.</li>
            </ul>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/3.6 rollback.png"
              alt="Rollback & Version History pattern illustration"
            />
          </div>
        </section>

        {/* Interactive Demo */}
        <section aria-label="Rollback demo example">
          <RollbackDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without robust rollback and version history in agentic systems:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Experimentation feels dangerous</span> – A single AI request can propagate high-impact changes (e.g., pricing, access rules, infrastructure configs) with no clear way to revert if outcomes are poor or unexpected.
              </li>
              <li>
                <span className="pattern-body--bold">Failures are hard to unwind</span> – Manual recovery is slow, error-prone, and often incomplete—especially when agents act across multiple entities, services, or integrations.
              </li>
              <li>
                <span className="pattern-body--bold">Trust decays over time</span> – Teams may limit the agent to low-risk tasks or abandon advanced features if a previous incident caused data loss, misconfiguration, or embarrassing content changes.
              </li>
            </ul>
            <p className="pattern-body">
              Rollback & Version History addresses these issues by making changes transparent, reversible, and auditable, so AI-driven automation remains safe at scale.
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
                  <span className="pattern-body--bold">High-impact changes</span> – Agent actions affect production data, customer-facing content, security, pricing, workflows, or infrastructure.
                </li>
                <li>
                  <span className="pattern-body--bold">Batch or cascading operations</span> – Single prompts trigger many underlying actions (e.g., refactoring a knowledge base, regenerating dashboards, bulk editing product catalogs).
                </li>
                <li>
                  <span className="pattern-body--bold">Multi-actor collaboration</span> – Environments where multiple humans and agents can modify the same resources, especially in B2B or enterprise SaaS.
                </li>
                <li>
                  <span className="pattern-body--bold">Regulated or audited domains</span> – Scenarios where traceability, accountability, and change review are critical (e.g., finance, healthcare, compliance-heavy infrastructure, HR systems).
                </li>
                <li>
                  <span className="pattern-body--bold">Long-lived assets</span> – Systems where configurations, schemas, documentation, or data models evolve over time and need historical context.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">Low-stakes, ephemeral outputs</span> – Temporary, disposable generations (e.g., ad-hoc draft answers in a support assistant) that are not stored or reused.</li>
                <li><span className="pattern-body--bold">Single-step, localized edits</span> – Simple updates with trivial impact that can be reversed inline (e.g., editing a single text field with inline undo).</li>
                <li><span className="pattern-body--bold">Sandbox-only workflows</span> – Environments that are fully non-production and easily reset, where mistakes carry negligible cost.</li>
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
                Rollback & Version History typically appears as a combination of a visible history surface, inline controls, and agent-integrated commands.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: Global History Surface
              </h3>
              <p className="pattern-card__intro">
                A dedicated section in navigation (e.g., &quot;Change History&quot;, &quot;Versions&quot;, &quot;Activity & Rollback&quot;).
              </p>
              <ul className="pattern-card__list">
                <li>Search, filter, and restore past states across a workspace, environment, or resource type</li>
                <li>Chronological timeline or list view</li>
                <li>Filters for scope, actor, time range, and change type</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary: Contextual History Sections</h3>
              <p className="pattern-card__intro">
                Inline version history for a specific object.
              </p>
              <ul className="pattern-card__list">
                <li>Accessible via icons like &quot;clock&quot;, &quot;history&quot;, or &quot;activity&quot; in the object header</li>
                <li>Document, pipeline, dashboard, or configuration set history</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Agent Chat Entry</h3>
              <p className="pattern-card__intro">
                Natural language commands in the conversation interface.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Show version history for the security policy&quot;</li>
                <li>&quot;Rollback to yesterday&apos;s pipeline configuration&quot;</li>
                <li>&quot;Undo the last agent batch on this project&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Post-Action Surfaces</h3>
              <p className="pattern-card__intro">
                Toasts, banners, or inline notifications after major changes.
              </p>
              <ul className="pattern-card__list">
                <li>Short-lived &quot;View details&quot; or &quot;Rollback&quot; links</li>
                <li>Deep-links into the relevant checkpoint</li>
                <li>Proactive prompts when metrics degrade after an agent change</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: The Checkpoint</h3>
            <p className="pattern-card__intro">
              The core object in this pattern is the checkpoint (or version entry). Each checkpoint represents a deterministic, restorable state of a resource or system slice.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label Examples</p>
                <ul className="pattern-card__list">
                  <li>&quot;Pre-update: Firewall Rules v4.2&quot;</li>
                  <li>&quot;Agent Refactor – Knowledge Base Batch #3&quot;</li>
                  <li>&quot;Manual override – Pricing adjustments&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description / Summary</p>
                <ul className="pattern-card__list">
                  <li>&quot;15 articles updated; 3 merged, 4 archived&quot;</li>
                  <li>&quot;ETL script: added new transformation step&quot;</li>
                  <li>&quot;Changed aggregation window from 1h to 15m&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls & Metadata</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Inline actions:</span> View details/diff, Rollback, Clone as draft, Open in agent chat</li>
                  <li><span className="pattern-body--bold">Metadata:</span> Timestamp, Actor (human vs agent), Scope, Impact metrics</li>
                  <li><span className="pattern-body--bold">Status badges:</span> Active, Rolled back from here, Superseded</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Behavior & Lifecycle */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Behavior & lifecycle</p>
              <p className="pattern-body pattern-body--narrow">
                How checkpoints and rollback operations flow through the system lifecycle.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Baseline & Checkpoint Strategy</h3>
              <ul className="pattern-card__list">
                <li>The system defines which events warrant checkpoints: agent runs, deployments, bulk edits, or specific high-risk operations.</li>
                <li>Automatic checkpoints are created before executing qualifying changes, sometimes also after completion.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Pre-Change Acknowledgement</h3>
              <ul className="pattern-card__list">
                <li>Before executing an impactful action, the agent surfaces a summary of planned changes.</li>
                <li>&quot;A checkpoint will be saved before applying these network rule changes.&quot;</li>
                <li>Reinforces non-destructive behavior and signals recoverability.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Change Execution & Logging</h3>
              <ul className="pattern-card__list">
                <li>The agent performs the requested actions and logs them against the new checkpoint.</li>
                <li>Which resources changed, in what direction, and based on which prompt or human approval.</li>
                <li>The history surface updates in near real time.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Initiation of Rollback</h3>
              <ul className="pattern-card__list">
                <li>A stakeholder initiates rollback via any entry point (history view, contextual menu, agent message, or integration).</li>
                <li>The agent or UI confirms the target context to avoid ambiguity.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Checkpoint Selection</h3>
              <ul className="pattern-card__list">
                <li>The system presents a list or timeline of candidate checkpoints.</li>
                <li>Each checkpoint line item exposes key metadata (time, actor, summary, impact scope).</li>
                <li>Optional filters for time range, actor type, change type.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Preview & Diff</h3>
              <ul className="pattern-card__list">
                <li>On selection, the system computes and displays a diff between current state and checkpoint state.</li>
                <li>Diff views emphasize clarity and scope: added/removed items, fields changed.</li>
                <li>For high-risk domains, an &quot;impact estimate&quot; may be surfaced.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Confirmation & Guardrails</h3>
              <ul className="pattern-card__list">
                <li>A confirmation step summarizes what rollback will do, in plain language.</li>
                <li>What will be restored; what might be overwritten or lost.</li>
                <li>May enforce additional friction for sensitive scopes (multi-factor confirmation, approvals).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Execution with Progress</h3>
              <ul className="pattern-card__list">
                <li>The system runs the rollback as a controlled operation.</li>
                <li>Updates relevant data or configurations; revalidates dependencies.</li>
                <li>A progress indicator appears for longer operations with clear success/failure states.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">9. Post-Rollback Communication</h3>
              <ul className="pattern-card__list">
                <li>Confirms success and updated state (&quot;Restored to checkpoint &apos;Pre-update: Firewall Rules v4.2&apos;&quot;).</li>
                <li>Optionally provides a compact summary diff to verify outcome.</li>
                <li>Logs the rollback itself as a new historical event.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">10. Follow-up Options</h3>
            <ul className="pattern-card__list">
              <li>Offer next steps directly from the success state: &quot;Review current configuration&quot;, &quot;Compare with another checkpoint&quot;, &quot;Ask the agent to re-attempt changes with stricter constraints.&quot;</li>
              <li>This keeps momentum while preserving a strong sense of control.</li>
            </ul>
          </div>
        </section>

        {/* UX & Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">UX & content guidelines</p>
            <p className="pattern-body">
              Design considerations for presenting rollback and version history clearly and accessibly.
            </p>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Clarity & Framing</h3>
                <ul className="pattern-card__list">
                  <li>Present rollback as <span className="pattern-body--bold">restoration to a known state</span>, not as a mysterious or technical operation.</li>
                  <li>Use consistent terms for checkpoints and versions—avoid mixing them arbitrarily.</li>
                  <li>Clearly distinguish <span className="pattern-body--bold">viewing history</span> from <span className="pattern-body--bold">restoring history</span>.</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Scope & Granularity</h3>
                <ul className="pattern-card__list">
                  <li>Make scope visible and unambiguous: &quot;Rollback entire workspace&quot; vs &quot;Rollback only this dashboard&quot;.</li>
                  <li>Allow multiple levels of granularity where feasible.</li>
                  <li>Provide strong guardrails when scope is broad (e.g., &quot;Organization-wide rollback&quot;).</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Visual Design & Interaction</h3>
                <ul className="pattern-card__list">
                  <li>Use recognizable icons for history and rollback (clock, timeline, backward arrow) paired with clear labels.</li>
                  <li>Emphasize current state vs target state in diff views (labels, color-coding, grouping).</li>
                  <li>Avoid burying rollback behind multiple layers of navigation.</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Accessibility & Keyboard Support</h3>
                <ul className="pattern-card__list">
                  <li>Ensure checkpoints are navigable via keyboard with visible focus states.</li>
                  <li>Provide meaningful labels for screen readers: &quot;Checkpoint created on March 4 at 13:03 by Deployment Agent – 12 services changed.&quot;</li>
                  <li>Make confirmations and error states perceivable across modalities (text, ARIA live regions).</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Variants */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Variants</p>
              <p className="pattern-body pattern-body--narrow">
                Different contexts require different approaches to rollback and versioning.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Document / Content Version History</h3>
              <p className="pattern-card__intro">Wikis, emails, configuration files, design docs</p>
              <ul className="pattern-card__list">
                <li>Integrates tightly with editors</li>
                <li>In-place diff (highlighted text changes, comments, suggestions)</li>
                <li>Multi-draft exploration for AI-generated variants</li>
                <li>Rollback at whole-document or section level</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Configuration & Infrastructure Checkpoints</h3>
              <p className="pattern-card__intro">Feature flags, environment variables, network policies, deployment configs</p>
              <ul className="pattern-card__list">
                <li>Strong scoping (service, environment, cluster)</li>
                <li>Safety checks and simulations (pre-rollback validation)</li>
                <li>Tied to operational tooling (CI/CD, observability dashboards)</li>
                <li>Can be triggered automatically when metrics cross thresholds</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Data & Pipeline Rollbacks</h3>
              <p className="pattern-card__intro">ETL pipelines, transformations, schema migrations, derived datasets</p>
              <ul className="pattern-card__list">
                <li>Checkpoints align with versioned schemas and transformations</li>
                <li>Time-based snapshots of data stores</li>
                <li>Must avoid data corruption with idempotent operations</li>
                <li>Clear communication about data ingested post-checkpoint</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Multi-Draft & Exploration History</h3>
              <p className="pattern-card__intro">Creative or strategic tasks with multiple AI attempts</p>
              <ul className="pattern-card__list">
                <li>Alternative copy drafts, design explorations, experiment configurations</li>
                <li>History becomes a <span className="pattern-body--bold">branching tree</span> rather than a single linear timeline</li>
                <li>Each branch represents a fork from a prior checkpoint</li>
                <li>Rollback means choosing a preferred branch and promoting it to &quot;current&quot;</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Edge Cases & Failure Modes */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Edge cases & failure modes</p>
              <p className="pattern-body pattern-body--narrow">
                Anticipate and design for these potential issues.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Partial Rollback Due to External Dependencies</h3>
              <p className="pattern-card__intro">
                Some changes may involve external systems that cannot be fully reverted (e.g., third-party APIs, emails already sent).
              </p>
              <ul className="pattern-card__list">
                <li>Identify non-reversible aspects upfront</li>
                <li>Communicate them clearly in confirmations</li>
                <li>Provide compensating actions where possible (e.g., follow-up emails)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Conflicts with Newer Edits</h3>
              <p className="pattern-card__intro">
                Other humans or agents may have changed resources after the target checkpoint.
              </p>
              <ul className="pattern-card__list">
                <li>Block rollback and ask for resolution</li>
                <li>Provide merge tools that reconcile differences</li>
                <li>Support &quot;rollback as a new version&quot; that preserves everything in history</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Missing or Corrupted Checkpoints</h3>
              <p className="pattern-card__intro">
                In rare failure states where checkpoints cannot be restored.
              </p>
              <ul className="pattern-card__list">
                <li>Fall back to most recent stable state</li>
                <li>Communicate the limitation transparently</li>
                <li>Offer export of whatever logs or partial state still exist</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Security & Permissions Issues</h3>
              <p className="pattern-card__intro">
                Not every role should be able to rollback every scope.
              </p>
              <ul className="pattern-card__list">
                <li>Enforce granular permissions and approval workflows</li>
                <li>Two-person approval for organization-wide rollbacks</li>
                <li>Audit who initiated the rollback, when, and for which scope</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Performance and Scale</h3>
              <p className="pattern-card__intro">
                Very large checkpoints (e.g., multi-terabyte datasets or complex environments).
              </p>
              <ul className="pattern-card__list">
                <li>Background rollback operations with progress notifications</li>
                <li>Partial restoration strategies (restore critical components first)</li>
                <li>Resource-aware planning to avoid service degradation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Implementation notes</p>
              <p className="pattern-body pattern-body--narrow">
                Technical considerations for building robust rollback systems for AI agents.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Checkpoint Strategy</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Prefer deterministic snapshots</span> over best-effort reconstructions when impact is high.</li>
                <li><span className="pattern-body--bold">Capture checkpoints:</span> Automatically before (and optionally after) every high-risk agent action; on schedule for long-lived resources; on explicit human request.</li>
                <li><span className="pattern-body--bold">Define retention policies by:</span> Time (last 30 days), count (last 50 checkpoints per resource), or importance (pinned/never auto-delete).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">State Capture Approaches</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Snapshot-based (memento-style):</span> Store full state (or compressed representation) of key objects. Simplifies restoration.</li>
                <li><span className="pattern-body--bold">Event-sourced:</span> Store all events and reconstruct state by replaying them. Provides complete history but more complex to query.</li>
                <li><span className="pattern-body--bold">Hybrid models:</span> Snapshot at strategic points, then store fine-grained events in between checkpoints.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">Security, Governance & Agent Integration</h3>
            <ul className="pattern-card__list">
              <li><span className="pattern-body--bold">Log rollback operations</span> with the same rigor as other changes; handle sensitive attributes according to compliance requirements.</li>
              <li><span className="pattern-body--bold">Align agent planning with checkpoint semantics:</span> The agent should be aware of checkpoint boundaries and reference them in explanations (&quot;Changes applied under checkpoint KB-Refactor-03.&quot;).</li>
              <li><span className="pattern-body--bold">Allow agents to recommend rollback</span> when evaluation metrics suggest degradation, users express dissatisfaction, or inconsistencies are detected post-change.</li>
            </ul>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Anti-patterns</p>
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
                  <h3 className="antipattern-title">Invisible Checkpoints</h3>
                  <p className="antipattern-subtitle">Checkpoints are created but not exposed to users.</p>
                </div>
              </div>
              <p className="antipattern-description">
                If users cannot see when checkpoints are created or access them, the system provides no practical benefit for recovery or trust-building.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always surface checkpoint creation in the UI with accessible history views.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Rollback Without Preview</h3>
                  <p className="antipattern-subtitle">Rollback executes immediately without showing what will change.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Users may accidentally overwrite important changes made since the checkpoint if they cannot see the impact of rollback beforehand.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always show a diff or impact summary before executing rollback with explicit confirmation.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Unscoped Rollback</h3>
                  <p className="antipattern-subtitle">Rollback affects everything with no way to scope to specific resources.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When a single mistake affects one dashboard but rollback reverts the entire workspace, users lose confidence in the recovery mechanism.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Support multiple granularity levels: item-level, batch-level, environment-level, with clear scope indicators.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Silent Checkpoint Expiration</h3>
                  <p className="antipattern-subtitle">Checkpoints are deleted by retention policies without notice.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Users expecting to restore to a specific checkpoint discover it no longer exists, undermining trust in the versioning system.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Notify before deletion; allow pinning important checkpoints; provide clear retention policy visibility.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics & Evaluation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics & evaluation</p>
              <p className="pattern-body pattern-body--narrow">
                Instrument the pattern to understand whether it actually improves trust and outcomes.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Adoption & Usage of Rollback</h3>
              <ul className="pattern-card__list">
                <li>Frequency of rollback actions relative to total agent runs (should be non-zero but not excessively high)</li>
                <li>Distribution of rollback scopes (object-level vs environment-level rollbacks)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Error Recovery Efficiency</h3>
              <ul className="pattern-card__list">
                <li>Time-to-recovery after an incident (from detection to restoration)</li>
                <li>Reduction in manual remediation steps compared to pre-checkpoint workflows</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Experimentation Health</h3>
              <ul className="pattern-card__list">
                <li>Increase in usage of higher-risk agent actions after introducing rollback (indicating greater confidence)</li>
                <li>Number of experiments or refactors initiated in environments covered by checkpoints</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Support & Incident Signals</h3>
              <ul className="pattern-card__list">
                <li>Decrease in support tickets related to &quot;irreversible changes&quot; or &quot;agent broke X&quot;</li>
                <li>Qualitative sentiment from user research about confidence in AI-driven changes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example scenarios</p>
              <p className="pattern-body pattern-body--narrow">
                Real-world applications of Rollback & Version History across different domains.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Knowledge Base Refactoring</h3>
              <p className="pattern-card__intro">Documentation Platform</p>
              <ul className="pattern-card__list">
                <li>Agent restructures a knowledge base with new taxonomy, merged duplicates, and updated terminology</li>
                <li>Each refactor batch is captured as a checkpoint (&quot;Terminology Cleanup – Batch 2, 24 articles&quot;)</li>
                <li>Admin reviews batch-level diff and rolls back one problematic batch while leaving others intact</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Configuration Management</h3>
              <p className="pattern-card__intro">IT / DevOps Dashboard</p>
              <ul className="pattern-card__list">
                <li>AI agent proposes and applies firewall, routing, or feature flag changes</li>
                <li>Before each deploy, a checkpoint is captured per environment</li>
                <li>When monitoring detects degraded performance, a rollback prompt deep-links to the relevant checkpoint</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Collaborative Content Editing</h3>
              <p className="pattern-card__intro">Marketing Platform</p>
              <ul className="pattern-card__list">
                <li>Marketing team uses agent assistance for SEO optimization across multiple landing pages</li>
                <li>Each AI-assisted session creates a checkpoint with summary</li>
                <li>Editors review side-by-side diffs and selectively restore individual pages</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Data Pipeline Adjustments</h3>
              <p className="pattern-card__intro">Analytics Platform</p>
              <ul className="pattern-card__list">
                <li>Data team uses an agent to modify ETL logic and dashboards</li>
                <li>Checkpoints capture pipeline configurations and associated schemas</li>
                <li>When downstream reports show anomalies, team rolls back to &quot;Pre-Transformation Snapshot – Q4 Baseline&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">UI / Theme Customization</h3>
              <p className="pattern-card__intro">Design System</p>
              <ul className="pattern-card__list">
                <li>Product team experiments with AI-suggested theme variants (colors, typography, spacing)</li>
                <li>Each theme variant is saved as a checkpoint</li>
                <li>After stakeholder feedback, team rolls back from &quot;Variant C&quot; to &quot;Baseline Theme&quot; while retaining all variants in history</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">E-commerce Batch Updates</h3>
              <p className="pattern-card__intro">Retail Platform</p>
              <ul className="pattern-card__list">
                <li>Agent runs bulk price or inventory updates across thousands of SKUs</li>
                <li>System records each run as a checkpoint (&quot;Holiday Promo Pricing – Batch #1, 4,250 products&quot;)</li>
                <li>When a misconfigured rule is discovered, manager reverts only that batch</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Questions for design & review</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Checkpoint Visibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users see when checkpoints are created and what they contain?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the history surface accessible from multiple entry points (global, contextual, agent chat)?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Rollback Experience</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a clear diff or preview before rollback executes?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the confirmation step clearly communicate what will be restored and what might be lost?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Scope & Granularity</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users rollback at multiple levels of granularity (item, batch, environment)?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the scope of each rollback action unambiguous in the UI?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Agent Integration</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the agent acknowledge checkpoint creation before high-risk actions?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users request rollback through natural language in the agent chat?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Governance & Auditability</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are rollback operations logged with the same rigor as other changes?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can admins see rollback history and enforce permissions on who can rollback which scopes?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Edge Cases</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>How are non-reversible external actions (emails sent, API calls) handled?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>What happens when there are conflicts with newer edits?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
