import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Bot, User, Send, RotateCcw, MessageSquare, Database, BarChart3, ChevronUp, BarChart } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const USER_DIRECTED_TOOL_USE_SEO = {
  title: "User-Directed Tool Use & Output Mode Selection - AI Trust Pattern",
  description: "Expose clear controls that let users determine how an AI agent responds and which tools it may use, reducing ambiguity, surprises, and risky side effects.",
  keywords: ["AI tool selection", "output mode", "user control", "AI transparency", "tool usage", "agentic UX", "AI trust patterns", "mode selector"],
  canonicalPath: "/agentic_ai_patterns/user-directed-tool-use"
};

// Demo styles - isolated with BEM naming
const demoStyles = {
  container: {
    maxWidth: '580px',
    margin: '0 auto',
    background: 'var(--color-surface, #ffffff)',
    borderRadius: '16px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  showcaseHeader: {
    padding: '24px',
    borderBottom: '1px solid var(--color-border, #e5e7eb)',
    backgroundColor: 'var(--color-surface, #ffffff)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '20px',
  },
  showcaseHeaderContent: {
    flex: 1,
  },
  showcaseTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: 'var(--color-text, #111827)',
    margin: '0 0 8px 0',
    lineHeight: 1.2,
  },
  showcaseDescription: {
    fontSize: '14px',
    color: 'var(--color-text-muted, #6b7280)',
    lineHeight: 1.5,
    margin: 0,
  },
  resetBtn: {
    background: 'none',
    border: '1px solid var(--color-border, #e5e7eb)',
    padding: '6px 12px',
    cursor: 'pointer',
    color: 'var(--color-text-muted, #6b7280)',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    fontSize: '12px',
    fontFamily: 'inherit',
    transition: 'all 0.15s ease',
  },
  chatArea: {
    height: '280px',
    overflowY: 'auto',
    padding: '16px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  message: {
    display: 'flex',
    gap: '10px',
    alignItems: 'flex-start',
  },
  messageUser: {
    flexDirection: 'row-reverse',
  },
  messageAvatar: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  messageAvatarAgent: {
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    color: '#fff',
  },
  messageAvatarUser: {
    background: 'var(--color-border, #e5e7eb)',
    color: 'var(--color-text-muted, #6b7280)',
  },
  messageBubble: {
    maxWidth: '280px',
    padding: '10px 14px',
    borderRadius: '12px',
    fontSize: '13px',
    lineHeight: 1.5,
  },
  messageBubbleAgent: {
    background: 'var(--color-surface-alt, #f3f4f6)',
    color: 'var(--color-text, #111827)',
    borderBottomLeftRadius: '4px',
  },
  messageBubbleUser: {
    background: '#6366f1',
    color: '#fff',
    borderBottomRightRadius: '4px',
  },
  codeBlock: {
    background: 'var(--color-code-bg, #1f2937)',
    color: '#e5e7eb',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '12px',
    fontFamily: '"SF Mono", Monaco, "Cascadia Code", monospace',
    overflowX: 'auto',
    marginTop: '8px',
    whiteSpace: 'pre',
  },
  chartPlaceholder: {
    background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
    borderRadius: '8px',
    padding: '20px',
    marginTop: '8px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: '8px',
    height: '80px',
  },
  chartBar: {
    width: '24px',
    background: 'linear-gradient(to top, #6366f1, #8b5cf6)',
    borderRadius: '4px 4px 0 0',
    transition: 'height 0.3s ease',
  },
  metaFooter: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '8px',
    paddingTop: '8px',
    borderTop: '1px solid var(--color-border-light, rgba(0,0,0,0.06))',
    fontSize: '11px',
    color: 'var(--color-text-muted, #6b7280)',
  },
  metaBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    background: 'var(--color-surface, rgba(255,255,255,0.8))',
    padding: '2px 8px',
    borderRadius: '4px',
    fontSize: '11px',
  },
  composer: {
    padding: '16px 20px',
    borderTop: '1px solid var(--color-border, #e5e7eb)',
    background: 'var(--color-surface, #fff)',
  },
  inputRow: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
  },
  modeSelector: {
    position: 'relative',
  },
  modeButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 10px',
    background: 'var(--color-surface-alt, #f3f4f6)',
    border: '1px solid var(--color-border, #e5e7eb)',
    borderRadius: '8px',
    fontSize: '12px',
    color: 'var(--color-text, #111827)',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    fontFamily: 'inherit',
  },
  modeButtonActive: {
    borderColor: '#6366f1',
    background: 'rgba(99, 102, 241, 0.08)',
  },
  dropdown: {
    position: 'absolute',
    bottom: '100%',
    left: 0,
    marginBottom: '4px',
    background: 'var(--color-surface, #fff)',
    border: '1px solid var(--color-border, #e5e7eb)',
    borderRadius: '10px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
    minWidth: '180px',
    overflow: 'hidden',
    zIndex: 10,
  },
  dropdownItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px 14px',
    fontSize: '13px',
    color: 'var(--color-text, #111827)',
    cursor: 'pointer',
    transition: 'background 0.1s ease',
    border: 'none',
    background: 'none',
    width: '100%',
    textAlign: 'left',
    fontFamily: 'inherit',
  },
  dropdownItemSelected: {
    background: 'rgba(99, 102, 241, 0.08)',
    color: '#6366f1',
  },
  dropdownIcon: {
    width: '28px',
    height: '28px',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownIconChat: {
    background: 'rgba(34, 197, 94, 0.1)',
    color: '#22c55e',
  },
  dropdownIconSql: {
    background: 'rgba(59, 130, 246, 0.1)',
    color: '#3b82f6',
  },
  dropdownIconChart: {
    background: 'rgba(168, 85, 247, 0.1)',
    color: '#a855f7',
  },
  input: {
    flex: 1,
    padding: '10px 14px',
    border: '1px solid var(--color-border, #e5e7eb)',
    borderRadius: '10px',
    fontSize: '13px',
    outline: 'none',
    transition: 'border-color 0.15s ease',
    fontFamily: 'inherit',
    background: 'var(--color-surface, #fff)',
    color: 'var(--color-text, #111827)',
  },
  sendBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: '#6366f1',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.15s ease',
    flexShrink: 0,
  },
};

// Mode configurations
const MODES = {
  chat: { label: 'Chat', icon: MessageSquare, iconStyle: demoStyles.dropdownIconChat, exampleQuery: 'What are the top performing regions this quarter?' },
  sql: { label: 'SQL Only', icon: Database, iconStyle: demoStyles.dropdownIconSql, exampleQuery: 'Show me regional sales breakdown by revenue' },
  chart: { label: 'Chart', icon: BarChart3, iconStyle: demoStyles.dropdownIconChart, exampleQuery: 'Visualize monthly sales trends across regions' },
};

// Demo component
function UserDirectedToolUseDemo() {
  const [mode, setMode] = useState('chat');
  const [messages, setMessages] = useState([
    { type: 'agent', content: "Hello! I'm your Data Analyst Agent. Ask me about your sales data and select how you'd like me to respond." }
  ]);
  const [inputValue, setInputValue] = useState(MODES.chat.exampleQuery);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const chatAreaRef = useRef(null);

  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleModeSelect = (newMode) => {
    setMode(newMode);
    setInputValue(MODES[newMode].exampleQuery);
    setDropdownOpen(false);
  };

  const getAgentResponse = (userMessage, selectedMode) => {
    if (selectedMode === 'sql') {
      return {
        content: 'Here\'s the SQL query for your request:',
        sql: `SELECT
  region,
  SUM(revenue) as total_revenue,
  COUNT(*) as order_count
FROM sales
WHERE date >= '2024-01-01'
GROUP BY region
ORDER BY total_revenue DESC;`,
        meta: { mode: 'SQL Only', tool: 'Warehouse (read-only)' }
      };
    } else if (selectedMode === 'chart') {
      return {
        content: 'Here\'s a visualization of the regional sales data:',
        chart: true,
        meta: { mode: 'Chart', tool: 'Chart Generator' }
      };
    } else {
      return {
        content: 'Based on the sales data, the West region leads with $2.4M in revenue, followed by East ($1.8M) and Central ($1.2M). Q4 showed the strongest growth at 23% YoY.',
        meta: { mode: 'Chat', tool: 'None' }
      };
    }
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setInputValue('');

    setTimeout(() => {
      const response = getAgentResponse(userMessage, mode);
      setMessages(prev => [...prev, { type: 'agent', ...response }]);
    }, 600);
  };

  const handleReset = () => {
    setMessages([
      { type: 'agent', content: "Hello! I'm your Data Analyst Agent. Ask me about your sales data and select how you'd like me to respond." }
    ]);
    setMode('chat');
    setInputValue(MODES.chat.exampleQuery);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const CurrentModeIcon = MODES[mode].icon;

  return (
    <div style={demoStyles.container} className="udtd">
      {/* Header */}
      <header style={demoStyles.showcaseHeader} className="udtd__showcase-header">
        <div style={demoStyles.showcaseHeaderContent} className="udtd__showcase-header-content">
          <h2 style={demoStyles.showcaseTitle} className="udtd__showcase-title">
            User-Directed Tool Use & Output Mode Selection
          </h2>
          <p style={demoStyles.showcaseDescription} className="udtd__showcase-description">
            Select an output mode (Chat, SQL Only, or Chart) from the dropdown, then ask a question about sales data. The agent will respond according to your selected mode.
          </p>
        </div>
        <button
          style={demoStyles.resetBtn}
          className="udtd__reset-btn"
          onClick={handleReset}
        >
          Reset Demo
        </button>
      </header>

      {/* Chat Area */}
      <div style={demoStyles.chatArea} className="udtd__chat-area" ref={chatAreaRef}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              ...demoStyles.message,
              ...(msg.type === 'user' ? demoStyles.messageUser : {})
            }}
            className={`udtd__message udtd__message--${msg.type}`}
          >
            <div
              style={{
                ...demoStyles.messageAvatar,
                ...(msg.type === 'agent' ? demoStyles.messageAvatarAgent : demoStyles.messageAvatarUser)
              }}
              className={`udtd__message-avatar udtd__message-avatar--${msg.type}`}
            >
              {msg.type === 'agent' ? <Bot size={14} /> : <User size={14} />}
            </div>
            <div
              style={{
                ...demoStyles.messageBubble,
                ...(msg.type === 'agent' ? demoStyles.messageBubbleAgent : demoStyles.messageBubbleUser)
              }}
              className={`udtd__message-bubble udtd__message-bubble--${msg.type}`}
            >
              {msg.content}
              {msg.sql && (
                <div style={demoStyles.codeBlock} className="udtd__code-block">
                  {msg.sql}
                </div>
              )}
              {msg.chart && (
                <div style={demoStyles.chartPlaceholder} className="udtd__chart-placeholder">
                  <div style={{ ...demoStyles.chartBar, height: '60px' }} className="udtd__chart-bar" />
                  <div style={{ ...demoStyles.chartBar, height: '45px' }} className="udtd__chart-bar" />
                  <div style={{ ...demoStyles.chartBar, height: '30px' }} className="udtd__chart-bar" />
                  <div style={{ ...demoStyles.chartBar, height: '50px' }} className="udtd__chart-bar" />
                  <div style={{ ...demoStyles.chartBar, height: '70px' }} className="udtd__chart-bar" />
                </div>
              )}
              {msg.meta && (
                <div style={demoStyles.metaFooter} className="udtd__meta-footer">
                  <span style={demoStyles.metaBadge} className="udtd__meta-badge">
                    Mode: {msg.meta.mode}
                  </span>
                  <span style={demoStyles.metaBadge} className="udtd__meta-badge">
                    Tool: {msg.meta.tool}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Composer */}
      <div style={demoStyles.composer} className="udtd__composer">
        <div style={demoStyles.inputRow} className="udtd__input-row">
          <div style={demoStyles.inputWrapper} className="udtd__input-wrapper">
            {/* Mode Selector */}
            <div style={demoStyles.modeSelector} className="udtd__mode-selector">
              <button
                style={{
                  ...demoStyles.modeButton,
                  ...(dropdownOpen ? demoStyles.modeButtonActive : {})
                }}
                className={`udtd__mode-button ${dropdownOpen ? 'udtd__mode-button--active' : ''}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <CurrentModeIcon size={14} />
                {MODES[mode].label}
                <ChevronUp
                  size={12}
                  style={{
                    transform: dropdownOpen ? 'rotate(0deg)' : 'rotate(180deg)',
                    transition: 'transform 0.15s ease',
                    marginLeft: '2px',
                  }}
                />
              </button>

              {dropdownOpen && (
                <div style={demoStyles.dropdown} className="udtd__dropdown">
                  {Object.entries(MODES).map(([key, config]) => {
                    const Icon = config.icon;
                    return (
                      <button
                        key={key}
                        style={{
                          ...demoStyles.dropdownItem,
                          ...(mode === key ? demoStyles.dropdownItemSelected : {})
                        }}
                        className={`udtd__dropdown-item ${mode === key ? 'udtd__dropdown-item--selected' : ''}`}
                        onClick={() => handleModeSelect(key)}
                      >
                        <span
                          style={{ ...demoStyles.dropdownIcon, ...config.iconStyle }}
                          className="udtd__dropdown-icon"
                        >
                          <Icon size={14} />
                        </span>
                        {config.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Input */}
            <input
              type="text"
              style={demoStyles.input}
              className="udtd__input"
              placeholder="Ask about sales data..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          {/* Send Button */}
          <button
            style={demoStyles.sendBtn}
            className="udtd__send-btn"
            onClick={handleSend}
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function UserDirectedToolUsePattern() {
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
            <span className="pattern-header__index">3.7</span>
            <div>
              <h1 className="pattern-header__title">User-Directed Tool Use & Output Mode Selection</h1>
              <p className="pattern-header__subtitle">
                Expose clear controls that let users determine how an AI agent responds and which tools it may use, reducing ambiguity, surprises, and risky side effects.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="3.7" patternTitle="User-Directed Tool Use & Output Mode Selection" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              User-Directed Tool Use & Output Mode Selection is a pattern in which the chat composer or surrounding UI lets users declare the desired mode and tool scope for the next AI action.
            </p>
            <p className="pattern-body">
              Instead of leaving tool invocation entirely to the model, the interface surfaces explicit controls such as chips, segmented controls, dropdowns, or toggles like:
            </p>
            <ul className="pattern-list">
              <li><span className="pattern-body--bold">Output mode:</span> Text only, Code snippet, SQL query, Diagram, Image, Slide deck outline, etc.</li>
              <li><span className="pattern-body--bold">Tool usage policy:</span> Auto, Ask before using tools, Tools off, or specific tool subsets.</li>
            </ul>
            <p className="pattern-body">
              This pattern typically appears in B2B/B2C web applications where an AI agent can call multiple tools (e.g., web search, internal knowledge base, CRM API, SQL warehouse, image generator) and produce content in different formats (e.g., prose explanation, charts, code, structured JSON or YAML).
            </p>
            <p className="pattern-body">
              By making mode and tool choice explicit, the pattern strengthens mental models, supports safety and compliance, and reduces the perception of the AI as a hidden &quot;black box.&quot; It also provides a clean bridge to related patterns such as <span className="pattern-body--bold">Scoped Permissions & Tool Consent (3.5)</span> and <span className="pattern-body--bold">Tool Usage Indicators (5.3)</span>.
            </p>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/3.7 user-directed tool use.png"
              alt="User-Directed Tool Use & Output Mode Selection pattern illustration"
            />
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Interactive demo">
          <UserDirectedToolUseDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without user-directed tool and mode controls, agentic systems commonly create friction and erode trust:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Opaque tool usage and side effects</span> – Agents silently call tools such as web search, CRM APIs, or code execution environments. Users cannot easily tell what was used, whether data left the organization, or why an answer looks the way it does.
              </li>
              <li>
                <span className="pattern-body--bold">Output-type mismatch with expectations</span> – Users may be expecting a concrete artifact (SQL, code, diagram, slide outline) but receive narrative prose or a mix of formats. This forces extra back-and-forth and manual translation.
              </li>
              <li>
                <span className="pattern-body--bold">Safety, compliance, and risk concerns</span> – In regulated or high-stakes domains, some tools (e.g., write-access APIs, production databases, external web search) are acceptable only in specific contexts or with explicit consent. Silent tool usage increases anxiety and organizational resistance.
              </li>
              <li>
                <span className="pattern-body--bold">Difficult debugging and governance</span> – When behavior varies between &quot;runs&quot; due to hidden tool calling, it becomes harder to audit what happened, reproduce issues, or tune the underlying orchestration.
              </li>
              <li>
                <span className="pattern-body--bold">Over-reliance or over-automation</span> – Fully autonomous tool usage can encourage users to &quot;lean back,&quot; while some tasks actually require human judgment, review, or a step-by-step approach.
              </li>
            </ul>
            <p className="pattern-body">
              This pattern addresses these problems by making tool choice and output mode explicit, predictable, and explainable at the UI layer.
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
                  <span className="pattern-body--bold">Multi-tool agents with material side effects</span> – Any agent that can read/write business data (CRM, ERP, marketing automation, observability platforms, HRIS, billing, etc.) or trigger external actions.
                </li>
                <li>
                  <span className="pattern-body--bold">Multi-modal or multi-format responses</span> – Systems that can generate text, code, diagrams, dashboards, slides, or images, where user intent around output type is often underspecified.
                </li>
                <li>
                  <span className="pattern-body--bold">Risk-managed or regulated workflows</span> – Domains such as finance, healthcare, security, legal review, or compliance, where it matters which data sources and tools are used.
                </li>
                <li>
                  <span className="pattern-body--bold">Power-user or expert-oriented tools</span> – Environments like IDEs, BI tools, cloud consoles, data science notebooks, or admin consoles, where users expect levers for precision control.
                </li>
                <li>
                  <span className="pattern-body--bold">Enterprise deployments with differentiated permissions</span> – Workspaces where tools are scoped by team, role, or environment (e.g., sandbox vs. production).
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">Single-purpose assistants with one obvious modality</span> – For example, a simple &quot;rewrite this paragraph&quot; assistant that only ever returns text and never calls external tools.</li>
                <li><span className="pattern-body--bold">Low-stakes, purely informational chatbots</span> – Marketing sites or FAQ bots that only answer from a static content set, with no external calls or side effects.</li>
                <li><span className="pattern-body--bold">Strongly constrained flows with explicit wizards</span> – When an existing wizard or form fully constrains the interaction.</li>
                <li><span className="pattern-body--bold">Highly novice-focused experiences</span> – On-boarding flows where exposing a dense mode matrix might overwhelm users.</li>
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
                At a high level, this pattern adds an explicit &quot;mode and tools strip&quot; around the chat composer that communicates how the next AI action will behave, scopes which tools are allowed, and surfaces relevant safety and permission boundaries.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: Chat Composer Strip
              </h3>
              <p className="pattern-card__intro">
                A mode selector (chips, segmented control, or dropdown) attached directly to the message input field.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Chat&quot;, &quot;Image&quot;, &quot;Code&quot;, &quot;Diagram&quot;, &quot;SQL only&quot;, &quot;Explain + run&quot;</li>
                <li>Tool usage toggle visible alongside mode selection</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary: Global Mode Selector</h3>
              <p className="pattern-card__intro">
                A dropdown in the header of the agent panel setting defaults that apply until changed.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Ask&quot;, &quot;Edit&quot;, &quot;Agent&quot;, &quot;SEO Expert&quot;, &quot;Debugging mode&quot;</li>
                <li>Per-message overrides still available near the composer</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual: Inline Controls</h3>
              <p className="pattern-card__intro">
                Contextual actions on prior messages or attachments.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Re-run as…&quot; actions (e.g., &quot;Re-run as SQL only&quot;, &quot;Re-run using Web + Org Files&quot;)</li>
                <li>Mode presets attached to file uploads (&quot;Summarize PDF&quot;, &quot;Extract table&quot;, &quot;Generate diagram from this&quot;)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Tool Usage Toggle</h3>
              <p className="pattern-card__intro">
                A tri-state control for tool usage policy.
              </p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Auto</span> – Agent may call tools as needed</li>
                <li><span className="pattern-body--bold">Ask</span> – Agent proposes tool use and waits for confirmation</li>
                <li><span className="pattern-body--bold">Off</span> – Tools disabled for this message (or conversation)</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Mode & Tool Selector</h3>
            <p className="pattern-card__intro">
              The main unit is the Mode & Tool Selector, which typically includes labels, descriptions, controls, and optional metadata.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Labels</p>
                <ul className="pattern-card__list">
                  <li>&quot;SQL only&quot;, &quot;Image (draft sketch)&quot;, &quot;Chat + chart&quot;</li>
                  <li>&quot;No external tools&quot;</li>
                  <li>Optional icons for modality (text bubble, code brackets, chart, image, database, globe)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description / Tooltip</p>
                <ul className="pattern-card__list">
                  <li>&quot;Returns valid SQL for the connected warehouse.&quot;</li>
                  <li>&quot;May call external web search.&quot;</li>
                  <li>&quot;Read-only access to observability data.&quot;</li>
                  <li>&quot;No tools: model-only answer.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Scope:</span> &quot;This workspace&quot;, &quot;Environment: Sandbox&quot;</li>
                  <li><span className="pattern-body--bold">Risk badges:</span> &quot;External data&quot;, &quot;Write access&quot;, &quot;Experimental&quot;</li>
                  <li><span className="pattern-body--bold">Status:</span> &quot;Requires approval&quot;, &quot;Disabled by admin&quot;</li>
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
                This pattern spans several states across the conversation lifecycle.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial State / Defaults</h3>
              <ul className="pattern-card__list">
                <li>Each agent defines a sensible default mode, such as <span className="pattern-body--bold">Chat</span> with <span className="pattern-body--bold">Tools: Auto</span>.</li>
                <li>Defaults are tailored to the agent&apos;s primary purpose (e.g., a &quot;SQL Assistant&quot; might default to &quot;Explain + SQL&quot;).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Context-Aware Pre-selection</h3>
              <ul className="pattern-card__list">
                <li>The system infers a likely mode based on context but does not hide the control.</li>
                <li>Large table or CSV pasted → pre-select &quot;Table / Chart&quot; or &quot;Explain + SQL&quot;.</li>
                <li>Screenshot uploaded → pre-select &quot;Describe image&quot; or &quot;Redline UI&quot;.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. User-Directed Selection</h3>
              <ul className="pattern-card__list">
                <li>The user selects an output mode and tool policy before submitting the message.</li>
                <li>A compact summary appears near the send button: &quot;Mode: SQL only · Tools: Ask&quot;.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Orchestration & Tool Resolution</h3>
              <ul className="pattern-card__list">
                <li>The orchestration layer receives the selected mode and tool policy as <span className="pattern-body--bold">strong hints or constraints</span>.</li>
                <li>Enable only specific tools, configure tool-choice parameters, adjust response format expectations.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Response with Visible Tool Usage</h3>
              <ul className="pattern-card__list">
                <li>The agent message includes a compact label: &quot;Mode: SQL only · Used: Warehouse (read-only)&quot;.</li>
                <li>Advanced users can expand to see which tools were available vs. actually used.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Confirmation for Side Effects</h3>
              <ul className="pattern-card__list">
                <li>For modes that imply write actions or external calls, introduce a two-step flow.</li>
                <li>Agent proposes an action, then UI surfaces &quot;Run&quot;, &quot;Apply&quot;, or &quot;Send&quot; button with scope summary.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Persistence & Preferences</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Per-conversation:</span> Preserve mode across turns for a specific thread.</li>
                <li><span className="pattern-body--bold">Per-agent preference:</span> Let power users opt into a default mode.</li>
                <li>Provide a visible control for resetting: &quot;Reset to agent default mode.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Errors & Fallbacks</h3>
              <ul className="pattern-card__list">
                <li>If a tool is unavailable or blocked by policy, the agent explains the limitation in-band.</li>
                <li>The UI suggests alternative modes (&quot;Tool offline; switch to &apos;Chat only&apos;?&quot;).</li>
                <li>The system avoids silently ignoring the chosen mode.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">9. Permissions & Safety Integration</h3>
              <ul className="pattern-card__list">
                <li>Modes requiring extended access are visually distinct and integrated with Scoped Permissions & Tool Consent.</li>
                <li>Greyed-out chips with padlock icon that open a lightweight permission sheet.</li>
                <li>Clear indicators when an admin has disabled certain modes or tools.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* States & Variants */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">States & variants</p>
              <p className="pattern-body pattern-body--narrow">
                Common variants of this pattern include different selector types and scopes.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Output Format–Only Selector</h3>
              <p className="pattern-card__intro">
                Only controls the output shape (text, code, diagram, &quot;spec&quot;), while tools remain mostly automatic but transparent.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Source / Retrieval Selector</h3>
              <p className="pattern-card__intro">
                Modes to choose data sources: &quot;Web&quot;, &quot;Org files&quot;, &quot;Web + Org files&quot;, &quot;None&quot;. Useful in enterprise knowledge search and research workflows.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Autonomy Selector</h3>
              <p className="pattern-card__intro">
                A tri-state tool usage policy: <span className="pattern-body--bold">Auto</span> (freely call tools), <span className="pattern-body--bold">Ask</span> (propose and wait), <span className="pattern-body--bold">Off</span> (model knowledge only).
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Role or Persona Modes</h3>
              <p className="pattern-card__intro">
                Modes that bundle tools, instructions, and tone: &quot;Ask&quot; vs. &quot;Edit&quot; vs. &quot;Agent&quot; in developer tools, or &quot;SEO Agent&quot;, &quot;Support Agent&quot; in marketing platforms.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Light vs. Advanced Mode Pickers</h3>
              <p className="pattern-card__intro">
                A minimal, opinionated set of modes for general users. An expanded &quot;mode drawer&quot; for experts, offering fine-grained control over tools, sources, and response format.
              </p>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & microcopy guidelines</p>
            <p className="pattern-body">
              The language of mode and tool controls should be task-oriented, explicit about risk and scope, and avoid ambiguity.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Draft SQL query&quot; vs. &quot;SQL mode&quot;</li>
                  <li>&quot;Explain and visualize&quot; vs. &quot;LLM + chart tool&quot;</li>
                  <li>&quot;May use external web search.&quot;</li>
                  <li>&quot;Writes into CRM pipeline.&quot;</li>
                  <li>&quot;Read-only access to production metrics.&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Smart mode&quot; (doesn&apos;t explain capability)</li>
                  <li>&quot;Pro mode&quot; (marketing language, not operational)</li>
                  <li>&quot;Magic&quot; (vague, no clarity on behavior)</li>
                  <li>Ambiguous technical jargon without explanation</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Use Outcome-Oriented Names</h3>
                <ul className="pattern-card__list">
                  <li>Prefer task- or outcome-oriented names over technical jargon</li>
                  <li>Make risk and scope explicit in labels or subtext</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Concise Microcopy</h3>
                <ul className="pattern-card__list">
                  <li>Indicate which tools or data domains are in scope</li>
                  <li>Expected latency (e.g., &quot;May take up to a minute for deep analysis&quot;)</li>
                  <li>When the AI will ask for confirmation before acting</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title pattern-card__title--with-pill">
                  Interaction Patterns
                  <span className="pattern-pill pattern-pill--neutral">Guidance</span>
                </h3>
                <ul className="pattern-card__list">
                  <li>Ensure mode selection is fast, reversible, and keyboard accessible</li>
                  <li>Support per-message overrides even when a global agent mode is set</li>
                  <li>Consider hover previews or mini-descriptions when many modes exist</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Implementation notes</p>
              <p className="pattern-body pattern-body--narrow">
                Technical considerations for building this pattern in the orchestration layer.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Mapping Modes to Tools</h3>
              <ul className="pattern-card__list">
                <li>Each mode should map to a list of allowed tools (e.g., image generator, SQL executor, web search)</li>
                <li>Tool-choice policies (e.g., tools disabled, tools optional, specific tool required)</li>
                <li>Response format constraints (e.g., must return JSON, must return SQL only)</li>
                <li>This mapping should be explicit and testable</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Alignment & Telemetry</h3>
              <ul className="pattern-card__list">
                <li>Capture selected mode and tool policy at send time</li>
                <li>Log tools actually invoked and their outcomes</li>
                <li>Track whether the response format matched the mode&apos;s contract</li>
                <li>Any misalignment is a high-priority defect from a trust standpoint</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Safety & Policy Enforcement</h3>
              <ul className="pattern-card__list">
                <li>Organization-level policies should gate which modes appear at all</li>
                <li>Sensitive modes should obey environment flags (e.g., &quot;No production writes via AI&quot;)</li>
                <li>System prompts or tool definitions should be consistent with UI messaging</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Edge Cases & Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Edge cases & anti-patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Anticipate these potential issues and avoid patterns that undermine trust.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Missing or Disabled Tools</h3>
              <p className="pattern-card__intro">
                When a user selects a mode that depends on an unavailable tool.
              </p>
              <ul className="pattern-card__list">
                <li>Explain the issue clearly</li>
                <li>Offer alternative modes that can fulfill a similar goal</li>
                <li>Optionally provide a link or instruction to enable the missing capability</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Cross-Tenant Sessions</h3>
              <p className="pattern-card__intro">
                In multi-tenant contexts, some modes may be available only for specific workspaces or roles.
              </p>
              <ul className="pattern-card__list">
                <li>The UI must dynamically reflect current permissions</li>
                <li>Avoid &quot;ghost&quot; modes that appear available but fail</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Long-Running Actions</h3>
              <p className="pattern-card__intro">
                Some modes (e.g., deep research, multi-stage workflow execution) may span multiple messages.
              </p>
              <ul className="pattern-card__list">
                <li>Provide clear progress states and allow users to pause or cancel</li>
                <li>Keep mode indication visible throughout long-running operations</li>
              </ul>
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
                  <h3 className="antipattern-title">Ignoring the Selected Mode</h3>
                  <p className="antipattern-subtitle">Agent disregards explicit mode choice.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Allowing the agent to return prose when &quot;SQL only&quot; is selected quickly erodes trust. Users expect the mode contract to be honored.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Strictly honor the selected mode. If the mode cannot be fulfilled, explain why and suggest alternatives.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Overloading the Interface</h3>
                  <p className="antipattern-subtitle">Too many modes without structure.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Presenting a long, unstructured list of highly technical modes can overwhelm users and cause analysis paralysis.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use grouping, presets, or progressive disclosure to manage complexity. Start with common modes and reveal advanced options on demand.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Silent Escalation of Capabilities</h3>
                  <p className="antipattern-subtitle">Adding tools or changing mode behavior without indication.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Adding new tools or changing what a mode does without any UI indication can cause severe mismatches between user expectations and behavior.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Communicate mode changes in-product. When capabilities expand, notify users and update the mode description.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Examples */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example scenarios</p>
              <p className="pattern-body pattern-body--narrow">
                How user-directed tool use and output mode selection apply across different contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Design System Assistant</h3>
              <p className="pattern-card__intro">Enterprise Design Portal</p>
              <p className="pattern-card__label">Modes</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Chat</span>, <span className="pattern-body--bold">Figma-ready spec</span>, <span className="pattern-body--bold">Wireframe</span>, <span className="pattern-body--bold">Code snippet</span></li>
              </ul>
              <p className="pattern-card__label">Tool Usage Toggle</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Tools: Auto · Ask · Off</li>
                <li>Uses internal layout and component libraries to generate structured outputs</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">BI / Analytics Copilot</h3>
              <p className="pattern-card__intro">Web-based BI Suite</p>
              <p className="pattern-card__label">Modes</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Explain chart</span>, <span className="pattern-body--bold">SQL only</span>, <span className="pattern-body--bold">Explain + SQL</span>, <span className="pattern-body--bold">Build dashboard</span></li>
              </ul>
              <p className="pattern-card__label">Sources</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Warehouse, Event stream, Logs (multi-select)</li>
                <li>Tools: Auto or Ask before running queries</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">CRM Copilot</h3>
              <p className="pattern-card__intro">CRM Platform with Compliance Constraints</p>
              <p className="pattern-card__label">Modes</p>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Summarize contact</span>, <span className="pattern-body--bold">Draft email</span>, <span className="pattern-body--bold">Update pipeline</span>, <span className="pattern-body--bold">Research account</span></li>
              </ul>
              <p className="pattern-card__label">Data Source Selector</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>&quot;Org data only&quot;, &quot;Org data + Web&quot;, &quot;Web only&quot;</li>
                <li>Some modes disabled by compliance policy for certain roles</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Accessibility considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Ensure the pattern is usable by everyone, including keyboard and screen reader users.
              </p>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <ul className="pattern-card__list">
              <li>Ensure all mode and tool controls are reachable and operable via keyboard only.</li>
              <li>Use ARIA roles (e.g., <code>role=&quot;tab&quot;</code> for segmented controls, <code>role=&quot;button&quot;</code> for chips) and proper labelling (<code>aria-label</code>, <code>aria-describedby</code>).</li>
              <li>Provide sufficient color contrast and icon alternatives so that state (selected, disabled, risky) is not conveyed by color alone.</li>
              <li>Announce mode changes and tool-usage state changes via live regions for screen readers when appropriate.</li>
            </ul>
          </div>
        </section>

        {/* Design checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Design & implementation checklist</p>
          </div>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Mode Exposure</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the agent expose all meaningful output modes and tool policies that affect behavior?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are mode names outcome-oriented, non-ambiguous, and understandable to target roles?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Visibility & Access</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the mode selector consistently visible near the composer, with minimal friction to change?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are high-risk modes clearly labeled and integrated with permission / consent flows?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Enforcement</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the orchestration layer strictly honor &quot;Tools: Off&quot; and other explicit constraints?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does each response clearly indicate which tools and sources were used?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Error Handling</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are errors and unavailable tools handled with clear explanations and suggested alternatives?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Accessibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are keyboard navigation, screen reader support, and contrast needs met for the selector UI?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Analytics & Trust</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are analytic events logged for selected mode, tool usage, and any mismatches for future tuning?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are changes to mode behavior or underlying tools communicated in-product to maintain trust?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
