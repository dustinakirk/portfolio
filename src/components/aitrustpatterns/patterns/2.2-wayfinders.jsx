import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const WAYFINDERS_SEO = {
  title: "Wayfinders (Capability Discovery) - AI Trust Pattern",
  description: "On-screen prompts and affordances that reveal what an AI agent can do in the current context, turning blank states into clear, actionable starting points.",
  keywords: ["AI capability discovery", "wayfinders", "AI onboarding", "prompt suggestions", "AI trust", "contextual AI", "agentic UX", "AI empty states"],
  canonicalPath: "/agentic_ai_patterns/wayfinders"
};

// Interactive demo component - CRM-style wayfinder demo
function WayfindersDemo() {
  const [selectedId, setSelectedId] = useState(null);
  const [view, setView] = useState('wayfinder'); // 'wayfinder' or 'chat'
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null);

  // Mock CRM account data
  const accountsData = [
    { id: 1, name: "Acme Corp", status: "Active", arr: "$120k", health: "Good" },
    { id: 2, name: "Globex Inc", status: "Risk", arr: "$85k", health: "Poor" },
    { id: 3, name: "Soylent Corp", status: "Active", arr: "$210k", health: "Good" },
    { id: 4, name: "Initech", status: "Churned", arr: "$0", health: "Critical" },
    { id: 5, name: "Umbrella Corp", status: "Active", arr: "$450k", health: "Neutral" }
  ];

  // Wayfinder configurations for different contexts
  const wayfinderConfigs = {
    default: {
      contextLabel: "Based on 5 visible accounts + CRM data",
      suggestions: [
        {
          label: "Identify at-risk accounts",
          desc: "Scans health scores and recent support tickets",
          prompt: "Which accounts are currently at risk and why?"
        },
        {
          label: "Draft Q4 summary report",
          desc: "Summarizes ARR and activity for all accounts",
          prompt: "Draft a Q4 summary report for all visible accounts."
        },
        {
          label: "Find upsell opportunities",
          desc: "Analyzes usage vs. current plan limits",
          prompt: "Analyze usage to find upsell opportunities.",
          highlight: true
        }
      ]
    },
    singleSelection: {
      contextLabel: "Based on selected account: Globex Inc",
      suggestions: [
        {
          label: "Summarize recent activity",
          desc: "Includes emails, calls, and tickets from last 30 days",
          prompt: "Summarize recent activity for Globex Inc."
        },
        {
          label: "Draft renewal email",
          desc: "Uses 'Friendly/Urgent' tone based on health score",
          prompt: "Draft a renewal email for Globex Inc.",
          highlight: true
        },
        {
          label: "Explain health score",
          desc: "Why is this account marked as 'Poor'?",
          prompt: "Explain why the health score for Globex Inc is Poor."
        }
      ]
    }
  };

  // Generate mock AI response based on prompt
  const generateMockResponse = (prompt) => {
    if (prompt.includes("at-risk")) return "I've analyzed the 5 accounts. <strong>Globex Inc</strong> is showing signs of risk due to a 'Poor' health score and a drop in login activity (-15% WoW). Initech has already churned.";
    if (prompt.includes("upsell")) return "Based on usage limits, <strong>Soylent Corp</strong> is at 98% of their seat capacity. This is a strong upsell opportunity for the Enterprise Plan.";
    if (prompt.includes("renewal")) return "Drafting renewal email for <strong>Globex Inc</strong>...<br/><br/>Subject: Let's get you back on track<br/>Hi Team, I noticed your health score has dipped recently. We'd love to discuss how we can better support you before your renewal...";
    if (prompt.includes("activity")) return "Here's the recent activity for <strong>Globex Inc</strong>:<br/>• 3 support tickets opened (2 resolved)<br/>• Last meeting: Nov 15, 2025<br/>• Email engagement: -20% vs. previous month";
    if (prompt.includes("health score")) return "The health score for <strong>Globex Inc</strong> is marked as 'Poor' due to:<br/>• Declining product usage (-25% monthly active users)<br/>• 2 open support escalations<br/>• No executive engagement in 60+ days";
    if (prompt.includes("Q4 summary")) return "Q4 2025 Summary for 5 accounts:<br/>• Total ARR: $865k<br/>• At-risk revenue: $85k (Globex Inc)<br/>• Churned: $0 (Initech was $45k)<br/>• Growth opportunity: $210k (Soylent Corp expansion)";
    return "Here is the information you requested based on the current CRM data.";
  };

  // Handle wayfinder suggestion click
  const handleWayfinderClick = (promptText) => {
    setView('chat');
    setChatHistory([{ role: 'user', text: promptText }]);
    setIsLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = generateMockResponse(promptText);
      setChatHistory(prev => [...prev, { role: 'ai', text: response }]);
      setIsLoading(false);
    }, 1500);
  };

  // Handle table row click
  const handleRowClick = (id) => {
    if (view === 'chat') return; // Don't change context during chat
    setSelectedId(selectedId === id ? null : id);
  };

  // Reset demo to initial state
  const handleReset = () => {
    setSelectedId(null);
    setView('wayfinder');
    setChatHistory([]);
    setIsLoading(false);
  };

  // Get current wayfinder config based on selection
  const currentConfig = selectedId ? wayfinderConfigs.singleSelection : wayfinderConfigs.default;

  // Styles object - fully self-contained
  const styles = {
    // Demo container
    patternDemo: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      width: '100%',
      maxWidth: '1000px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      margin: '0 auto',
    },
    patternDemoHeader: {
      padding: '24px',
      borderBottom: '1px solid #e5e7eb',
      backgroundColor: '#ffffff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '20px',
    },
    headerContent: {
      flex: 1,
    },
    headerTitle: {
      fontSize: '18px',
      fontWeight: 700,
      color: '#111827',
      margin: '0 0 8px 0',
      lineHeight: 1.2,
    },
    headerDescription: {
      fontSize: '14px',
      color: '#6b7280',
      lineHeight: 1.5,
      margin: 0,
    },
    resetBtn: {
      background: '#ffffff',
      border: '1px solid #e5e7eb',
      color: '#374151',
      padding: '8px 16px',
      borderRadius: '6px',
      fontSize: '13px',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'all 0.2s',
      boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      whiteSpace: 'nowrap',
      height: 'fit-content',
    },
    aiIcon: {
      width: '20px',
      height: '20px',
      background: 'linear-gradient(135deg, #6366f1, #a855f7)',
      borderRadius: '4px',
      flexShrink: 0,
    },

    // Mock app layout
    mockApp: {
      display: 'flex',
      height: '500px',
      background: '#f8fafc',
    },
    mockAppMain: {
      flex: 1,
      padding: '1.5rem',
      overflowY: 'auto',
      borderRight: '1px solid #e2e8f0',
    },

    // Data table
    dataTable: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      background: '#ffffff',
      borderRadius: '0.375rem',
      border: '1px solid #e2e8f0',
      overflow: 'hidden',
    },
    tableHeader: {
      textAlign: 'left',
      padding: '0.75rem 1rem',
      background: '#f8fafc',
      borderBottom: '1px solid #e2e8f0',
      fontSize: '0.75rem',
      fontWeight: 600,
      color: '#64748b',
      textTransform: 'uppercase',
    },
    tableRow: {
      cursor: 'pointer',
      transition: 'background 0.15s',
    },
    tableRowSelected: {
      backgroundColor: '#eff6ff',
    },
    tableCell: {
      padding: '0.875rem 1rem',
      fontSize: '0.875rem',
      color: '#1e293b',
      borderBottom: '1px solid #e2e8f0',
    },
    tableCellLast: {
      padding: '0.875rem 1rem',
      fontSize: '0.875rem',
      color: '#1e293b',
    },

    // Status badges
    statusBadge: (status) => ({
      padding: '2px 6px',
      borderRadius: '4px',
      background: status === 'Risk' ? '#fef2f2' : status === 'Active' ? '#f0fdf4' : '#f1f5f9',
      color: status === 'Risk' ? '#ef4444' : status === 'Active' ? '#16a34a' : '#64748b',
      fontSize: '0.75rem',
      fontWeight: 600,
    }),

    // AI Sidebar
    aiSidebar: {
      width: '380px',
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
    },
    aiSidebarHeader: {
      padding: '1rem',
      borderBottom: '1px solid #e2e8f0',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontWeight: 600,
      fontSize: '0.95rem',
      color: '#1e293b',
    },
    aiSidebarContent: {
      flex: 1,
      padding: '1.5rem',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
    },
    aiSidebarFooter: {
      padding: '1rem',
      borderTop: '1px solid #e2e8f0',
    },
    aiInput: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #e2e8f0',
      borderRadius: '0.375rem',
      fontFamily: 'inherit',
      fontSize: '0.875rem',
      outline: 'none',
      cursor: 'default',
      opacity: 0.7,
      boxSizing: 'border-box',
    },

    // Wayfinder components
    wayfinderContext: {
      fontSize: '0.75rem',
      color: '#64748b',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.375rem',
    },
    wayfinderList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    },
    wayfinderItem: (isHovered, isHighlight) => ({
      background: isHighlight
        ? (isHovered ? '#eef2ff' : '#f5f3ff')
        : (isHovered ? '#eff6ff' : '#ffffff'),
      border: `1px solid ${isHighlight
        ? (isHovered ? '#6366f1' : '#c7d2fe')
        : (isHovered ? '#3b82f6' : '#e2e8f0')}`,
      borderRadius: '0.375rem',
      padding: '0.75rem 1rem',
      cursor: 'pointer',
      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
      textAlign: 'left',
      transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
      boxShadow: isHovered ? '0 1px 2px 0 rgb(0 0 0 / 0.05)' : 'none',
      width: '100%',
      boxSizing: 'border-box',
    }),
    wayfinderLabel: (isHighlight) => ({
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: isHighlight ? '#4f46e5' : '#1e293b',
      marginBottom: '0.25rem',
    }),
    wayfinderDesc: {
      display: 'block',
      fontSize: '0.75rem',
      color: '#64748b',
    },

    // Chat components
    chatView: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    chatMessage: (role) => ({
      maxWidth: '90%',
      padding: '0.75rem 1rem',
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      lineHeight: 1.4,
      alignSelf: role === 'user' ? 'flex-end' : 'flex-start',
      background: role === 'user' ? '#3b82f6' : '#f1f5f9',
      color: role === 'user' ? 'white' : '#1e293b',
      borderBottomRightRadius: role === 'user' ? '0.125rem' : '0.5rem',
      borderBottomLeftRadius: role === 'ai' ? '0.125rem' : '0.5rem',
    }),
    loadingDots: {
      display: 'flex',
      gap: '4px',
    },
    loadingDot: {
      width: '6px',
      height: '6px',
      background: '#94a3b8',
      borderRadius: '50%',
    },

    // Section header
    sectionHeader: {
      marginBottom: '1rem',
    },
    sectionTitle: {
      fontSize: '1.25rem',
      fontWeight: 600,
      marginBottom: '0.25rem',
      color: '#1e293b',
    },
    sectionSubtitle: {
      fontSize: '0.875rem',
      color: '#64748b',
      margin: 0,
    },
  };

  return (
    <div style={styles.patternDemo} role="region" aria-label="Wayfinders pattern demo">
      {/* Scoped keyframe animation for loading dots */}
      <style>{`
        @keyframes wayfinder-bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        .wayfinder-dot-1 { animation: wayfinder-bounce 1.4s infinite ease-in-out both; animation-delay: -0.32s; }
        .wayfinder-dot-2 { animation: wayfinder-bounce 1.4s infinite ease-in-out both; animation-delay: -0.16s; }
        .wayfinder-dot-3 { animation: wayfinder-bounce 1.4s infinite ease-in-out both; }
      `}</style>

      {/* Demo Header */}
      <header style={styles.patternDemoHeader}>
        <div style={styles.headerContent}>
          <h2 style={styles.headerTitle}>Wayfinders</h2>
          <p style={styles.headerDescription}>
            This demo shows how wayfinders adapt to context. Click a row to select an account and watch the AI suggestions update dynamically. Click any suggestion to see a sample response.
          </p>
        </div>
        <button
          style={styles.resetBtn}
          onClick={handleReset}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f9fafb';
            e.currentTarget.style.borderColor = '#d1d5db';
            e.currentTarget.style.color = '#111827';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.borderColor = '#e5e7eb';
            e.currentTarget.style.color = '#374151';
          }}
        >
          Reset Demo
        </button>
      </header>

      {/* Mock App */}
      <div style={styles.mockApp}>
        {/* Left: CRM Table */}
        <div style={styles.mockAppMain}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Accounts</h2>
            <p style={styles.sectionSubtitle}>All enterprise accounts • Q4 2025</p>
          </div>

          <table style={styles.dataTable}>
            <thead>
              <tr>
                <th style={{ ...styles.tableHeader, width: '40px' }}></th>
                <th style={styles.tableHeader}>Account Name</th>
                <th style={styles.tableHeader}>Status</th>
                <th style={styles.tableHeader}>ARR</th>
                <th style={styles.tableHeader}>Health</th>
              </tr>
            </thead>
            <tbody>
              {accountsData.map((acc, index) => (
                <tr
                  key={acc.id}
                  style={{
                    ...styles.tableRow,
                    ...(selectedId === acc.id ? styles.tableRowSelected : {}),
                    backgroundColor: selectedId === acc.id ? '#eff6ff' : 'transparent',
                  }}
                  onClick={() => handleRowClick(acc.id)}
                  onMouseEnter={(e) => {
                    if (selectedId !== acc.id) {
                      e.currentTarget.style.backgroundColor = '#f1f5f9';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedId !== acc.id) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}
                >
                  <td style={index === accountsData.length - 1 ? styles.tableCellLast : styles.tableCell}>
                    <input
                      type="checkbox"
                      checked={selectedId === acc.id}
                      readOnly
                      style={{ pointerEvents: 'none' }}
                    />
                  </td>
                  <td style={{ ...(index === accountsData.length - 1 ? styles.tableCellLast : styles.tableCell), fontWeight: 500 }}>
                    {acc.name}
                  </td>
                  <td style={index === accountsData.length - 1 ? styles.tableCellLast : styles.tableCell}>
                    <span style={styles.statusBadge(acc.status)}>{acc.status}</span>
                  </td>
                  <td style={index === accountsData.length - 1 ? styles.tableCellLast : styles.tableCell}>{acc.arr}</td>
                  <td style={index === accountsData.length - 1 ? styles.tableCellLast : styles.tableCell}>{acc.health}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right: AI Sidebar */}
        <aside style={styles.aiSidebar}>
          <div style={styles.aiSidebarHeader}>
            <div style={styles.aiIcon}></div>
            <span>AI Assistant</span>
          </div>

          <div style={styles.aiSidebarContent}>
            {/* Wayfinder View */}
            {view === 'wayfinder' && (
              <div>
                <div style={styles.wayfinderContext}>
                  <span>⚡</span>
                  <span>{currentConfig.contextLabel}</span>
                </div>

                <div style={styles.wayfinderList}>
                  {currentConfig.suggestions.map((item, index) => (
                    <button
                      key={index}
                      style={styles.wayfinderItem(hoveredItemIndex === index, item.highlight)}
                      onClick={() => handleWayfinderClick(item.prompt)}
                      onMouseEnter={() => setHoveredItemIndex(index)}
                      onMouseLeave={() => setHoveredItemIndex(null)}
                    >
                      <span style={styles.wayfinderLabel(item.highlight)}>{item.label}</span>
                      <span style={styles.wayfinderDesc}>{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat View */}
            {view === 'chat' && (
              <div style={styles.chatView}>
                {chatHistory.map((msg, index) => (
                  <div
                    key={index}
                    style={styles.chatMessage(msg.role)}
                    dangerouslySetInnerHTML={{ __html: msg.text }}
                  />
                ))}
                {isLoading && (
                  <div style={styles.chatMessage('ai')}>
                    <div style={styles.loadingDots}>
                      <div style={styles.loadingDot} className="wayfinder-dot-1"></div>
                      <div style={styles.loadingDot} className="wayfinder-dot-2"></div>
                      <div style={styles.loadingDot} className="wayfinder-dot-3"></div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div style={styles.aiSidebarFooter}>
            <input
              type="text"
              style={styles.aiInput}
              placeholder="Ask a question..."
              readOnly
            />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function WayfindersPattern() {
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
            <span className="pattern-header__index">2.2</span>
            <div>
              <h1 className="pattern-header__title">Wayfinders (Capability Discovery)</h1>
              <p className="pattern-header__subtitle">
                On-screen prompts and affordances that reveal what an AI agent can do in the current context, turning blank states into clear, actionable starting points.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="2.2" patternTitle="Wayfinders" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Wayfinders are UI elements that surface an AI agent&apos;s capabilities in a clear, concrete, and contextual way.
            </p>
            <p className="pattern-body">
              They typically appear where an AI assistant is present but no task has started yet: empty states, first-run experiences, &quot;new integration connected&quot; moments, or idle side panels.
            </p>
            <p className="pattern-body">
              Instead of presenting a blank prompt and expecting users to invent a task, wayfinders provide suggested actions, starter prompts, and capability &quot;chips&quot; that are grounded in real data and workflows. The pattern reduces guesswork, aligns expectations with what the agent actually supports, and accelerates time-to-value while building trust.
            </p>
            <p className="pattern-body">
              A design example embedded into a product page could show:
            </p>
            <ul className="pattern-list">
              <li>Chips: <span className="pattern-body--bold">&quot;Summarize this account,&quot;</span> <span className="pattern-body--bold">&quot;Find risks in this opportunity,&quot;</span> <span className="pattern-body--bold">&quot;Draft follow-up email.&quot;</span></li>
              <li>A short line of context: <span className="pattern-body--bold">&quot;Based on Salesforce + email data connected.&quot;</span></li>
              <li>When the user selects multiple accounts, the chips update to: <span className="pattern-body--bold">&quot;Summarize this week&apos;s at-risk accounts,&quot;</span> <span className="pattern-body--bold">&quot;Generate outreach plan for selected accounts.&quot;</span></li>
              <li>A collapsible AI side panel with an empty-state card containing three high-value prompts</li>
              <li>Hover states showing a brief explanation and data sources used for each prompt</li>
              <li>Optional &quot;Show more ideas&quot; affordance to expand to advanced tasks</li>
            </ul>
          </div>
        </section>

        {/* Demo Example */}
        <section aria-label="Wayfinders example">
          <WayfindersDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without explicit guidance, AI interfaces often present a blank input and an abstract promise: &quot;Ask me anything.&quot; This creates friction and undermines trust, especially in professional workflows:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Unclear mental model</span> – Users lack a clear mental model of the agent&apos;s scope and limitations, leading to over-trust (&quot;it can do everything&quot;) or under-trust (&quot;it probably cannot help with this&quot;).
              </li>
              <li>
                <span className="pattern-body--bold">Cognitive load</span> – Blank prompts increase cognitive load; users must invent tasks, phrase them correctly, and infer what data the agent can use.
              </li>
              <li>
                <span className="pattern-body--bold">Misaligned expectations</span> – Users try unsupported tasks, receive weak or blocked responses, and conclude the system is unreliable or &quot;dumb.&quot;
              </li>
            </ul>
            <p className="pattern-body">
              By explicitly surfacing concrete, context-aware capabilities, wayfinders transform uncertainty into guided exploration and set realistic boundaries for what the agent can do.
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
                  <span className="pattern-body--bold">Introducing an AI assistant</span> into an existing product where users already have established workflows and expectations.
                </li>
                <li>
                  <span className="pattern-body--bold">First-run or early-session experiences</span> – when the agent&apos;s role and capabilities are not yet familiar.
                </li>
                <li>
                  <span className="pattern-body--bold">After key configuration events</span> – data sources connected, permissions granted, or integrations enabled (e.g., CRM, ticketing, documents, analytics).
                </li>
                <li>
                  <span className="pattern-body--bold">Spaces that appear &quot;empty&quot;</span> – no prior chats, no configured workflows, no search results, or newly created projects.
                </li>
                <li>
                  <span className="pattern-body--bold">Broad or multi-modal capabilities</span> – when the agent&apos;s capabilities require guidance to prevent misuse or overwhelm.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The AI feature has a <span className="pattern-body--bold">narrow, deterministic scope</span> and is already clearly described by a single labeled control (e.g., &quot;Auto-format this table&quot;).</li>
                <li>The surrounding UI already provides <span className="pattern-body--bold">explicit, highly visible task entry points</span> and there is little ambiguity about what the AI can affect.</li>
                <li>The task is <span className="pattern-body--bold">high-frequency and well-learned</span>, such that additional prompts or chips would add clutter rather than clarity.</li>
                <li>The AI executes a <span className="pattern-body--bold">single embedded function</span> within a traditional flow (e.g., autocompleting a form field) rather than acting as a general-purpose agent.</li>
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
                Wayfinders typically appear as lightweight, contextual scaffolding around an AI agent, not as a separate full-screen experience. They often live in panels, empty states, dropdowns, or inline action areas.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--three pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: AI Panel / Empty State
              </h3>
              <p className="pattern-card__intro">
                AI sidebar or assistant panel opened from main navigation or a persistent &quot;Ask AI&quot; button.
              </p>
              <ul className="pattern-card__list">
                <li>Empty state when opening the AI assistant for the first time in a module</li>
                <li>High-value suggestions displayed in chips or cards</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary: Inline Prompts</h3>
              <p className="pattern-card__intro">
                Inline prompts in relevant components throughout the product.
              </p>
              <ul className="pattern-card__list">
                <li>Empty search results, empty tables, report pages, document viewers</li>
                <li>Assistant &quot;hint row&quot; at the top of a chat history or reply composer</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual: Event-Triggered</h3>
              <p className="pattern-card__intro">
                Banners or toasts after configuration events.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Jira connected – try: &apos;Summarize sprint progress&apos;&quot;</li>
                <li>Inline suggestions shown immediately after a user action (selecting items, uploading a file, filtering a dashboard)</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Wayfinder Suggestion</h3>
            <p className="pattern-card__intro">
              The core repeated unit in this pattern is a wayfinder suggestion, often presented as a chip, card, or list item.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label</p>
                <ul className="pattern-card__list">
                  <li>A concise task-oriented action that names the outcome, not the internal capability</li>
                  <li>&quot;Summarize sprint progress&quot;</li>
                  <li>&quot;Find blocked tickets&quot;</li>
                  <li>&quot;Draft follow-up to this customer&quot;</li>
                  <li>&quot;Explain this chart&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description / Statement</p>
                <ul className="pattern-card__list">
                  <li>A short line clarifying what the agent will do and what data it will use</li>
                  <li>&quot;Uses Jira sprint data from the last 2 weeks&quot;</li>
                  <li>&quot;Based on this document + recent emails&quot;</li>
                  <li>&quot;Analyzes selected accounts only&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Primary:</span> Click/tap to insert or execute the prompt</li>
                  <li>&quot;Edit prompt&quot; or inline input to tweak wording before sending</li>
                  <li>&quot;More like this&quot; to surface similar tasks</li>
                  <li>&quot;Hide / Not relevant&quot; to train future suggestions</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Scope indicators: data sources, environments, or segments affected</li>
                  <li>Safety cues: &quot;Preview only,&quot; &quot;No changes will be applied until confirmed&quot;</li>
                  <li>Status tags: &quot;New,&quot; &quot;Recommended,&quot; &quot;Advanced&quot;</li>
                  <li>Usage signals: &quot;Popular in sales teams,&quot; &quot;Frequently used in this workspace&quot;</li>
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
                The lifecycle of wayfinders spans from initial empty states through contextual adaptation, execution, and progressive personalization.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial State (Pre-Usage)</h3>
              <ul className="pattern-card__list">
                <li>When the AI assistant is first opened or a relevant module has no prior AI activity, a small set of high-value, low-risk suggestions is displayed.</li>
                <li>Suggestions are grounded in default or globally available data sources (e.g., &quot;Summarize my open tickets,&quot; &quot;Review last week&apos;s analytics&quot;).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Contextual Adaptation</h3>
              <ul className="pattern-card__list">
                <li>As the user performs actions (selecting records, filtering a view, opening a document, uploading a file), suggestions adapt to reflect that specific context.</li>
                <li>After selecting multiple accounts: &quot;Identify churn risk across selected accounts.&quot;</li>
                <li>After uploading a PDF: &quot;Summarize this document,&quot; &quot;Extract key decisions and dates.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Prompt Insertion & Execution</h3>
              <ul className="pattern-card__list">
                <li>Selecting a wayfinder suggestion either inserts the prompt into an editable input field with interpolated context, or executes the prompt directly.</li>
                <li>For higher-risk actions (e.g., bulk updates), execution should always be preceded by a visible review step.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Feedback & Refinement Loop</h3>
              <ul className="pattern-card__list">
                <li>If the user edits the inserted prompt before sending, the system can learn common modifications and propose more accurate future suggestions.</li>
                <li>Dismissed or marked &quot;not relevant&quot; suggestions are suppressed or deprioritized in similar contexts.</li>
                <li>Frequently used suggestions may be pinned or promoted to &quot;Recommended&quot; for that user or role.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Progressive Personalization</h3>
              <ul className="pattern-card__list">
                <li>Over time, the system shifts from generic starter prompts to personalized ones based on role, historical usage, and data access.</li>
                <li>&quot;Prepare Monday forecast review for EMEA pipeline&quot; for a regional sales leader.</li>
                <li>&quot;Summarize this sprint&apos;s regressions vs. last sprint&quot; for a QA lead.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. State Transitions & Decay</h3>
              <ul className="pattern-card__list">
                <li>Once a suggestion has been used in a session, it can be downgraded (e.g., moved into a &quot;Recently used&quot; or &quot;More ideas&quot; section) to reduce noise.</li>
                <li>Wayfinders should gracefully fade or collapse once the assistant is in an active conversational flow, reappearing as subtle inline chips when appropriate.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">7. Error & Edge Cases</h3>
            <ul className="pattern-card__list">
              <li>When a suggestion cannot be executed (missing permissions, disconnected integration, insufficient data), the system should provide a clear explanation.</li>
              <li>Offer an actionable next step: &quot;Connect Jira,&quot; &quot;Request access to Salesforce,&quot; &quot;Upload a file first.&quot;</li>
              <li>Suggestions that repeatedly fail due to structural constraints should be automatically removed or reconfigured.</li>
            </ul>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & interaction guidelines</p>
            <p className="pattern-body">
              Effective wayfinder suggestions focus on business outcomes, are specific and scoped, and express safety and reversibility for sensitive operations.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Effective suggestions</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Summarize this quarter&apos;s at-risk deals&quot; – focuses on business outcome</li>
                  <li>&quot;Uses Zendesk tickets from last 7 days&quot; – transparent about data access</li>
                  <li>&quot;Draft follow-up emails for today&apos;s meetings&quot; – specific and scoped</li>
                  <li>&quot;Preview impact before applying changes&quot; – expresses safety</li>
                  <li>&quot;Limited to this workspace&quot; – clear scope indicator</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak suggestions</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Run a semantic analysis of accounts&quot; – technical command, not outcome</li>
                  <li>&quot;Ask me anything&quot; – vague, no guidance</li>
                  <li>&quot;Uses your tools and data&quot; – unclear what data/tools</li>
                  <li>&quot;Get AI help&quot; – doesn&apos;t name what the agent can do</li>
                  <li>Implying access to systems the agent cannot see</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Tone, Quantity & Layout</h3>
                <ul className="pattern-card__list">
                  <li>Limit initial suggestions to <span className="pattern-body--bold">3–5 high-value chips</span> to avoid overwhelm</li>
                  <li>Include one or two canonical &quot;hero&quot; tasks that showcase the agent&apos;s core value</li>
                  <li>Include one low-risk, exploratory task (e.g., summarization, explanation)</li>
                  <li>Include one &quot;advanced&quot; or aspirational task for expert users</li>
                  <li>Use a visually consistent pattern (chips or cards) and avoid mixing multiple visual metaphors in the same surface</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Interaction Details</h3>
                <ul className="pattern-card__list">
                  <li>Ensure chips are fully <span className="pattern-body--bold">keyboard-accessible</span> and screen-reader friendly</li>
                  <li>Provide <span className="pattern-body--bold">hover or focus tooltips</span> with a short explanation and data scope for each suggestion</li>
                  <li>When a suggestion is executed, show a brief <span className="pattern-body--bold">&quot;what just happened&quot; banner</span> summarizing the effective prompt and context, reinforcing learnability</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title pattern-card__title--with-pill">
                  Data Transparency
                  <span className="pattern-pill pattern-pill--neutral">Guidance</span>
                </h3>
                <ul className="pattern-card__list">
                  <li>Explicitly name key data sources and scope (e.g., &quot;Uses Zendesk tickets from last 7 days,&quot; &quot;Limited to this workspace&quot;)</li>
                  <li>Avoid implying access to systems or data the agent cannot see</li>
                  <li>Use language like &quot;Propose changes,&quot; &quot;Draft update,&quot; &quot;Preview impact&quot; rather than &quot;Apply changes&quot; in initial suggestions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Variations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Variations</p>
              <p className="pattern-body pattern-body--narrow">
                Different approaches to implementing wayfinders depending on product maturity and use case.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Static Starter Set</h3>
              <p className="pattern-card__intro">
                A curated, role-based list of suggested prompts that does not change per context.
              </p>
              <ul className="pattern-card__list">
                <li>Suitable for early-stage products</li>
                <li>Works well for narrow-scope assistants</li>
                <li>Easier to maintain and test</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Context-Aware Suggestions</h3>
              <p className="pattern-card__intro">
                Suggestions generated dynamically based on page, selection, filters, and connected data.
              </p>
              <ul className="pattern-card__list">
                <li>Recommended for mature, multi-module products</li>
                <li>Assistant is embedded across workflows</li>
                <li>Requires more sophisticated infrastructure</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Adaptive / Personalized</h3>
              <p className="pattern-card__intro">
                Suggestions tailored by usage history, team patterns, and organization-specific templates.
              </p>
              <ul className="pattern-card__list">
                <li>May include per-role libraries (SDR, AE, CSM, Support Agent)</li>
                <li>Learns from user behavior over time</li>
                <li>Highest value but most complex to implement</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Inline Wayfinders</h3>
              <p className="pattern-card__intro">
                Compact chips embedded in empty tables, search results, or editors.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Ask AI to fix this query&quot;</li>
                <li>Connect AI capabilities directly to existing UI elements</li>
                <li>No dedicated assistant panel required</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Scenario-Based Wayfinders</h3>
              <p className="pattern-card__intro">
                Grouped prompts around common &quot;jobs to be done.&quot;
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Prepare for a customer meeting&quot;</li>
                <li>&quot;Close out this sprint&quot;</li>
                <li>&quot;Launch a campaign&quot;</li>
                <li>Often represented as cards containing multiple related prompt chips</li>
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
                How wayfinders apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">B2B CRM / Revenue Platform</h3>
              <p className="pattern-card__intro">After Salesforce is connected:</p>
              <ul className="pattern-card__list">
                <li>&quot;Summarize this week&apos;s at-risk opportunities.&quot;</li>
                <li>&quot;Draft follow-up emails for today&apos;s meetings.&quot;</li>
                <li>&quot;Identify deals with missing next steps.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Customer Support Workspace</h3>
              <p className="pattern-card__intro">In ticket queue view with several tickets selected:</p>
              <ul className="pattern-card__list">
                <li>&quot;Summarize common themes in selected tickets.&quot;</li>
                <li>&quot;Suggest reply drafts for all high-priority tickets.&quot;</li>
                <li>&quot;Flag tickets that may require escalation.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Project Management / DevOps</h3>
              <p className="pattern-card__intro">After connecting Jira or similar tools:</p>
              <ul className="pattern-card__list">
                <li>&quot;Summarize current sprint status for stakeholders.&quot;</li>
                <li>&quot;List blocked tickets and owners.&quot;</li>
                <li>&quot;Highlight scope creep compared to original sprint plan.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Analytics Dashboard (B2B SaaS)</h3>
              <p className="pattern-card__intro">On a revenue dashboard:</p>
              <ul className="pattern-card__list">
                <li>&quot;Explain this drop in revenue week over week.&quot;</li>
                <li>&quot;Identify segments contributing most to churn this month.&quot;</li>
                <li>&quot;Draft a summary of this dashboard for executive review.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Prosumer Productivity App (B2C)</h3>
              <p className="pattern-card__intro">In a personal knowledge or notes app with a new note:</p>
              <ul className="pattern-card__list">
                <li>&quot;Summarize key points in this note.&quot;</li>
                <li>&quot;Turn this note into a task list.&quot;</li>
                <li>&quot;Draft a shareable summary for colleagues.&quot;</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Telemetry & Evaluation */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Metrics & instrumentation</p>
              <p className="pattern-body pattern-body--narrow">
                To understand whether wayfinders are improving trust and adoption, track:
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Discovery & Engagement</h3>
              <ul className="pattern-card__list">
                <li>Percentage of AI sessions initiated via wayfinder suggestions vs. free-form prompts</li>
                <li>Click-through rate on individual suggestions and groups</li>
                <li>Time from assistant open to first meaningful action</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Effectiveness & Quality</h3>
              <ul className="pattern-card__list">
                <li>Task completion rate for sessions that began with a wayfinder suggestion</li>
                <li>User ratings or feedback on responses initiated from suggestions</li>
                <li>Drop-off points (prompts edited heavily before sending, abandoned after preview)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Learning & Optimization</h3>
              <ul className="pattern-card__list">
                <li>Per-role and per-context performance of suggestions</li>
                <li>Correlation between suggestion usage and longer-term metrics (retention, feature adoption)</li>
                <li>Which prompts consistently lead to helpful outputs</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Trust & Safety Signals</h3>
              <ul className="pattern-card__list">
                <li>Incidence of user-reported &quot;unexpected&quot; or &quot;unsafe&quot; behavior following wayfinder-initiated tasks</li>
                <li>Frequency of suggestions leading to no-op responses due to missing permissions or unavailable data</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Risks & anti-patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Certain implementations of wayfinders can unintentionally undermine trust.
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
                  <h3 className="antipattern-title">Over-Promising Capabilities</h3>
                  <p className="antipattern-subtitle">Suggestions imply actions the agent cannot reliably perform.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Suggestions like &quot;Fix all bugs in this codebase&quot; that the agent cannot reliably perform erode trust quickly when they fail or produce poor results.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Only surface capabilities that work consistently with production data.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Ignoring Data Boundaries</h3>
                  <p className="antipattern-subtitle">Suggestions reference data the user does not have access to.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Suggestions that reference data sources or scopes the user doesn&apos;t have access to (e.g., &quot;Summarize all company contracts&quot; without legal access) create confusion and security concerns.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Scope suggestions to data the user can actually access and act upon.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Clutter & Cognitive Overload</h3>
                  <p className="antipattern-subtitle">Too many suggestions or dissimilar tasks in the same cluster.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Presenting too many suggestions at once, or mixing dissimilar tasks in the same cluster, can feel like noise and reduce discoverability of valuable capabilities.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Limit to 3–5 high-value suggestions with clear grouping and progressive disclosure.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Opaque Behavior</h3>
                  <p className="antipattern-subtitle">Suggestions trigger complex flows without explaining what will happen.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Wayfinders that trigger complex flows without clear explanation of what will happen or which data is used can feel risky, particularly in enterprise settings.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Always show what data will be used and what action will be taken before execution.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Over-Reliance on Dynamic Generation</h3>
                  <p className="antipattern-subtitle">Fully model-generated suggestions without guardrails.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Fully model-generated suggestions without guardrails may drift into irrelevant or non-compliant territory. The pattern works best when grounded in a curated library.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Ground suggestions in a curated library with controlled variation.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Notes */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Technical implementation notes</p>
              <p className="pattern-body pattern-body--narrow">
                Implementation details for building robust wayfinder behavior.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Configuration Model</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Represent wayfinders as structured objects</span> – action ID, label, description, scope, required data, risk level</li>
                <li><span className="pattern-body--bold">Enable mapping to contexts</span> – page, role, integration, permissions</li>
                <li>Structured configuration allows central management and auditing</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Context Engine</h3>
              <ul className="pattern-card__list">
                <li>Use a lightweight rule engine or heuristic layer to determine which suggestions to show</li>
                <li><span className="pattern-body--bold">Product context</span> – module, route, filters</li>
                <li><span className="pattern-body--bold">User context</span> – role, permissions, region</li>
                <li><span className="pattern-body--bold">Data context</span> – connected systems, selected objects</li>
                <li><span className="pattern-body--bold">Behavioral signals</span> – frequently used actions, recent tasks</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">AI Integration</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Templates with placeholders</span> – e.g., <code>{'{selected_tickets}'}</code>, <code>{'{current_dashboard}'}</code> that the system fills before sending to the model</li>
                <li>Prompt templates should be versioned and testable, especially for regulated workflows</li>
                <li>Consider a fallback strategy when templates cannot be filled</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Governance & Review</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Review workflows</span> for new or modified suggestions, particularly those affecting data changes, external communications, or compliance-sensitive tasks</li>
                <li><span className="pattern-body--bold">Feature flags</span> to enable/disable wayfinders per segment or environment</li>
                <li>Audit trail for suggestion changes and their impacts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Accessibility Considerations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Accessibility considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Ensure wayfinders are usable by everyone, including users of assistive technologies.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Navigation & Focus</h3>
              <ul className="pattern-card__list">
                <li>Ensure chips and cards are navigable with keyboard and assistive technologies</li>
                <li>Provide clear focus states for all interactive elements</li>
                <li>Support logical tab order through suggestions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Screen Reader Support</h3>
              <ul className="pattern-card__list">
                <li>Provide descriptive text for each suggestion that can be read by screen readers</li>
                <li>Include the action and data scope in accessible labels</li>
                <li>Announce state changes (e.g., when a suggestion is executed)</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Visual Design</h3>
              <ul className="pattern-card__list">
                <li>Maintain sufficient color contrast for all text and interactive elements</li>
                <li>Avoid relying solely on color to distinguish suggestion types (e.g., &quot;New,&quot; &quot;Recommended,&quot; &quot;Advanced&quot;)</li>
                <li>Use text labels or icons in addition to color indicators</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Motion & Animation</h3>
              <ul className="pattern-card__list">
                <li>Avoid motion-heavy interactions</li>
                <li>Any animations should be subtle and not essential for understanding</li>
                <li>Respect user preferences for reduced motion</li>
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
              <p className="pattern-checklist-category__title">Presence & Placement</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the assistant never appear as a blank prompt in critical entry points?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are at least 3–5 relevant wayfinder suggestions present in empty states?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Suggestion Quality</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is each suggestion action-oriented, scoped, and clearly communicates what data will be used?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do suggestions focus on business outcomes rather than technical commands?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Safety & Permissions</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are high-risk suggestions visually differentiated and gated by preview/confirmation steps?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do suggestions only reference data the user can actually access?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Context Adaptation</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do suggestions adapt based on page, selection, and connected data sources?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are suggestions updated after key events (integration connected, file uploaded, records selected)?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Feedback & Learning</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users dismiss or provide feedback on irrelevant suggestions?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are usage and outcome metrics instrumented to continuously refine suggestions?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Accessibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are all suggestions keyboard-accessible with clear focus states?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do suggestion types use more than just color to convey meaning?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
