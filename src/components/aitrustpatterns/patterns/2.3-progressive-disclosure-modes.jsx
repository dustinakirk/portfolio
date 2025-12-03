import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const PROGRESSIVE_DISCLOSURE_MODES_SEO = {
  title: "Progressive Disclosure Modes - AI Trust Pattern",
  description: "A structured mode system that reveals complexity gradually, supporting both novices and experts while maintaining trust in agentic AI behavior.",
  keywords: ["progressive disclosure", "AI modes", "simple mode", "supervisor mode", "developer mode", "AI trust", "agentic UX"],
  canonicalPath: "/agentic_ai_patterns/progressive-disclosure-modes"
};

// Interactive demo component showing contextual progressive disclosure
function ProgressiveDisclosureDemo() {
  const [isToolChainVisible, setIsToolChainVisible] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [isInspectorOpen, setIsInspectorOpen] = useState(false);

  // Tool data for each processing step
  const toolData = {
    'image-analysis': {
      name: 'analyze_image',
      duration: '0.4s',
      input: {
        image_id: 'img_upload_992',
        detection_mode: 'damage_assessment'
      },
      output: {
        detected_object: 'ceramic_vase',
        damage_type: 'shattered',
        severity_score: 0.95,
        human_review_required: false
      },
      logs: '[INFO] Image downloaded\n[INFO] Model confidence: 98.2%\n[SUCCESS] Damage criteria met'
    },
    'policy-check': {
      name: 'query_policy',
      duration: '0.2s',
      input: {
        category: 'home_goods',
        claim_type: 'damaged_on_arrival',
        customer_tier: 'gold'
      },
      output: {
        policy_id: 'POL-2024-A',
        decision: 'auto_refund',
        max_limit: 500.00
      },
      logs: '[INFO] Retrieving policy context...\n[INFO] Customer is Gold tier (auto-approve enabled)'
    },
    'refund-action': {
      name: 'process_refund',
      duration: '0.8s',
      input: {
        order_id: 'ORD-8821-X',
        amount: 120.00,
        currency: 'USD'
      },
      output: {
        transaction_id: 'tx_stripe_9912',
        status: 'pending_clearing',
        email_sent: true
      },
      logs: '[INFO] Gateway connected\n[SUCCESS] Transaction authorized'
    }
  };

  const tools = [
    { key: 'image-analysis', ...toolData['image-analysis'] },
    { key: 'policy-check', ...toolData['policy-check'] },
    { key: 'refund-action', ...toolData['refund-action'] }
  ];

  const handleToggleToolChain = () => {
    const newVisible = !isToolChainVisible;
    setIsToolChainVisible(newVisible);
    if (!newVisible) {
      setIsInspectorOpen(false);
      setSelectedTool(null);
    }
  };

  const handleToolClick = (toolKey) => {
    setSelectedTool(toolKey);
    setIsInspectorOpen(true);
  };

  const handleCloseInspector = () => {
    setIsInspectorOpen(false);
    setSelectedTool(null);
  };

  const handleReset = () => {
    setIsToolChainVisible(false);
    setSelectedTool(null);
    setIsInspectorOpen(false);
  };

  // Inline styles for self-containment
  const styles = {
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      background: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      maxWidth: '1000px',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '520px',
      margin: '0 auto',
    },
    header: {
      padding: '12px 20px',
      borderBottom: '1px solid #e2e8f0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f8fafc',
      flexShrink: 0,
    },
    headerTitle: {
      margin: 0,
      fontSize: '15px',
      fontWeight: 600,
      color: '#0f172a',
    },
    resetBtn: {
      background: 'transparent',
      border: '1px solid #e2e8f0',
      color: '#64748b',
      padding: '6px 12px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '13px',
    },
    workspace: {
      display: 'flex',
      flex: 1,
      overflow: 'hidden',
      position: 'relative',
    },
    chatArea: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f1f5f9',
    },
    chatHeader: {
      padding: '12px 20px',
      background: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    avatar: {
      width: '32px',
      height: '32px',
      background: 'linear-gradient(135deg, #6366f1, #a855f7)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '12px',
    },
    chatFeed: {
      padding: '20px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      flex: 1,
    },
    message: {
      display: 'flex',
      gap: '12px',
      maxWidth: '90%',
    },
    messageUser: {
      alignSelf: 'flex-end',
      flexDirection: 'row-reverse',
    },
    messageBubble: {
      background: '#ffffff',
      padding: '14px',
      borderRadius: '12px',
      borderTopLeftRadius: '2px',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      border: '1px solid #e2e8f0',
    },
    messageBubbleUser: {
      background: '#3b82f6',
      color: 'white',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '2px',
      border: 'none',
    },
    messageText: {
      lineHeight: 1.5,
      fontSize: '14px',
      margin: 0,
    },
    disclosureTrigger: {
      marginTop: '12px',
      borderTop: '1px solid #e2e8f0',
      paddingTop: '10px',
      fontSize: '13px',
      color: '#64748b',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      userSelect: 'none',
      transition: 'color 0.2s',
      background: 'none',
      border: 'none',
      padding: '10px 0 0 0',
      width: '100%',
      textAlign: 'left',
    },
    disclosureIcon: {
      transition: 'transform 0.2s',
      fontSize: '10px',
    },
    disclosureIconExpanded: {
      transform: 'rotate(90deg)',
    },
    toolChain: {
      marginTop: '12px',
      background: '#f8fafc',
      borderRadius: '8px',
      padding: '8px',
      border: '1px solid #e2e8f0',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    },
    toolItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 12px',
      borderRadius: '6px',
      fontSize: '13px',
      cursor: 'pointer',
      transition: 'all 0.2s',
      border: '1px solid transparent',
      background: 'transparent',
      width: '100%',
      textAlign: 'left',
    },
    toolItemActive: {
      background: '#eff6ff',
      borderColor: '#3b82f6',
      color: '#2563eb',
    },
    toolItemLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    toolItemStatus: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: '#22c55e',
    },
    toolItemName: {
      fontFamily: "'Monaco', 'Menlo', monospace",
      fontSize: '12px',
    },
    toolItemDuration: {
      color: '#64748b',
      fontSize: '12px',
    },
    inspectorPanel: {
      width: '320px',
      background: '#ffffff',
      borderLeft: '1px solid #e2e8f0',
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 10,
      transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      transform: 'translateX(100%)',
    },
    inspectorPanelOpen: {
      transform: 'translateX(0)',
      boxShadow: '-4px 0 16px rgba(0,0,0,0.05)',
    },
    inspectorHeader: {
      padding: '14px 16px',
      borderBottom: '1px solid #e2e8f0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#f8fafc',
    },
    inspectorTitle: {
      fontSize: '13px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: '#64748b',
      margin: 0,
      fontFamily: "'Monaco', 'Menlo', monospace",
    },
    closeBtn: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '20px',
      color: '#64748b',
      lineHeight: 1,
      padding: '4px',
    },
    inspectorContent: {
      padding: '16px',
      overflowY: 'auto',
      flex: 1,
    },
    dataBlock: {
      marginBottom: '20px',
    },
    dataLabel: {
      fontSize: '11px',
      fontWeight: 600,
      color: '#64748b',
      marginBottom: '8px',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    codeBlock: {
      background: '#1e293b',
      color: '#e2e8f0',
      padding: '12px',
      borderRadius: '6px',
      fontFamily: "'Monaco', 'Menlo', monospace",
      fontSize: '11px',
      lineHeight: 1.5,
      whiteSpace: 'pre-wrap',
      overflowX: 'auto',
      margin: 0,
    },
    logsBlock: {
      background: '#1e293b',
      color: '#cbd5e1',
      padding: '12px',
      borderRadius: '6px',
      fontFamily: "'Monaco', 'Menlo', monospace",
      fontSize: '11px',
      lineHeight: 1.6,
      whiteSpace: 'pre-wrap',
      margin: 0,
    },
    emptyInspector: {
      color: '#64748b',
      textAlign: 'center',
      marginTop: '40px',
      fontSize: '13px',
    },
  };

  const selectedToolData = selectedTool ? toolData[selectedTool] : null;

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2 style={styles.headerTitle}>Contextual Progressive Disclosure</h2>
        <button
          style={styles.resetBtn}
          onClick={handleReset}
          onMouseOver={(e) => e.target.style.backgroundColor = '#e2e8f0'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Reset Demo
        </button>
      </header>

      <div style={styles.workspace}>
        {/* Chat Area */}
        <div style={styles.chatArea}>
          <div style={styles.chatHeader}>
            <div style={styles.avatar}>AI</div>
            <div style={{ fontWeight: 600, fontSize: '14px' }}>Support Agent</div>
          </div>

          <div style={styles.chatFeed}>
            {/* User Message */}
            <div style={{ ...styles.message, ...styles.messageUser }}>
              <div style={{ ...styles.messageBubble, ...styles.messageBubbleUser }}>
                <p style={styles.messageText}>Can you check my last order? It arrived damaged.</p>
              </div>
            </div>

            {/* Agent Message with Progressive Disclosure */}
            <div style={styles.message}>
              <div style={{ ...styles.avatar, flexShrink: 0 }}>AI</div>
              <div style={styles.messageBubble}>
                <p style={styles.messageText}>
                  I&apos;ve processed your request. Based on the photo you uploaded and our refund policy,
                  I&apos;ve approved a full refund of <strong>$120.00</strong>. You should see the confirmation email shortly.
                </p>

                {/* Level 1: Disclosure Trigger */}
                <button
                  style={styles.disclosureTrigger}
                  onClick={handleToggleToolChain}
                  onMouseOver={(e) => e.target.style.color = '#3b82f6'}
                  onMouseOut={(e) => e.target.style.color = '#64748b'}
                >
                  <span style={{
                    ...styles.disclosureIcon,
                    ...(isToolChainVisible ? styles.disclosureIconExpanded : {})
                  }}>&#9654;</span>
                  <span>{isToolChainVisible ? 'Hide processing steps' : 'View 3 processing steps'}</span>
                </button>

                {/* Level 2: Inline Tool Chain */}
                {isToolChainVisible && (
                  <div style={styles.toolChain}>
                    {tools.map((tool) => (
                      <button
                        key={tool.key}
                        style={{
                          ...styles.toolItem,
                          ...(selectedTool === tool.key ? styles.toolItemActive : {}),
                        }}
                        onClick={() => handleToolClick(tool.key)}
                        onMouseOver={(e) => {
                          if (selectedTool !== tool.key) {
                            e.currentTarget.style.background = '#ffffff';
                            e.currentTarget.style.borderColor = '#e2e8f0';
                            e.currentTarget.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
                          }
                        }}
                        onMouseOut={(e) => {
                          if (selectedTool !== tool.key) {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.borderColor = 'transparent';
                            e.currentTarget.style.boxShadow = 'none';
                          }
                        }}
                      >
                        <div style={styles.toolItemLeft}>
                          <div style={styles.toolItemStatus} />
                          <span style={styles.toolItemName}>{tool.name}</span>
                        </div>
                        <span style={styles.toolItemDuration}>{tool.duration}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Level 3: Inspector Sidebar */}
        <aside style={{
          ...styles.inspectorPanel,
          ...(isInspectorOpen ? styles.inspectorPanelOpen : {})
        }}>
          <div style={styles.inspectorHeader}>
            <h3 style={styles.inspectorTitle}>{selectedToolData?.name || 'Tool Details'}</h3>
            <button style={styles.closeBtn} onClick={handleCloseInspector}>&times;</button>
          </div>
          <div style={styles.inspectorContent}>
            {selectedToolData ? (
              <>
                <div style={styles.dataBlock}>
                  <div style={styles.dataLabel}>Input Payload</div>
                  <pre style={styles.codeBlock}>
                    {JSON.stringify(selectedToolData.input, null, 2)}
                  </pre>
                </div>
                <div style={styles.dataBlock}>
                  <div style={styles.dataLabel}>Output Payload</div>
                  <pre style={styles.codeBlock}>
                    {JSON.stringify(selectedToolData.output, null, 2)}
                  </pre>
                </div>
                <div style={styles.dataBlock}>
                  <div style={styles.dataLabel}>System Logs</div>
                  <pre style={styles.logsBlock}>
                    {selectedToolData.logs}
                  </pre>
                </div>
              </>
            ) : (
              <div style={styles.emptyInspector}>
                Select a step to view details.
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function ProgressiveDisclosureModesPattern() {
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
            <span className="pattern-header__index">2.3</span>
            <div>
              <h1 className="pattern-header__title">Progressive Disclosure Modes</h1>
              <p className="pattern-header__subtitle">
                A structured mode system that reveals complexity gradually, supporting both novices and experts while maintaining trust in agentic AI behavior.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="2.3" patternTitle="Progressive Disclosure Modes" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Progressive Disclosure Modes introduce distinct interaction levels (for example, &quot;Simple&quot; and &quot;Advanced / Developer / Supervisor&quot;) that align the AI experience with the needs, skills, and risk-tolerance of different user groups.
            </p>
            <p className="pattern-body">
              Rather than presenting every detail of prompts, tools, logs, and configuration at once, the interface reveals only what is necessary at each level of expertise. This pattern transforms a single overwhelming interface into a layered one, where non-expert roles can work safely and confidently while expert roles retain full visibility, control, and debuggability.
            </p>
            <p className="pattern-body">
              This pattern frequently appears around agentic AI surfaces such as:
            </p>
            <ul className="pattern-list">
              <li><span className="pattern-body--bold">Orchestration canvases</span> – multi-step AI workflow builders</li>
              <li><span className="pattern-body--bold">Automation builders</span> – rule-based and AI-powered automations</li>
              <li><span className="pattern-body--bold">AI copilots</span> – embedded assistants in enterprise applications</li>
              <li><span className="pattern-body--bold">Workflow designers</span> – visual tools for configuring agent behavior</li>
            </ul>
          </div>
        </section>

        {/* Demo placeholder */}
        <section aria-label="Progressive disclosure modes example">
          <ProgressiveDisclosureDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Agentic AI systems often generate complex, multi-step behavior that can feel opaque or overwhelming, especially when multiple tools, data sources, and agents are involved. A single flat interface rarely works for all stakeholders.
            </p>
            <p className="pattern-body">
              Without Progressive Disclosure Modes:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Non-technical users encounter overwhelming complexity</span> – Dense surfaces full of prompts, graphs, tokens, and tool payloads create confusion, anxiety, and avoidance.
              </li>
              <li>
                <span className="pattern-body--bold">Expert users lack sufficient visibility</span> – Without access to what the AI is actually doing, it is difficult to debug failures, assure safety, or explain outcomes to stakeholders.
              </li>
              <li>
                <span className="pattern-body--bold">Shared workspaces become contested</span> – Competing demands for &quot;simpler&quot; vs &quot;more detailed&quot; interfaces lead to inconsistent, ad-hoc views and workarounds.
              </li>
            </ul>
            <p className="pattern-body">
              The pattern balances clarity for novices with transparency and control for experts, without fragmenting the product into separate, siloed tools.
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
                  <span className="pattern-body--bold">AI orchestration or automation builders</span> where a single workflow must serve product managers, analysts, engineers, operations, and compliance roles.
                </li>
                <li>
                  <span className="pattern-body--bold">Multi-agent or tool-using AI systems</span> where the underlying behavior (tool calls, retries, fallbacks, loops) is significantly more complex than the surface task description.
                </li>
                <li>
                  <span className="pattern-body--bold">High-stakes or regulated environments</span> (finance, healthcare, infrastructure, enterprise data platforms) where detailed auditability and oversight are required.
                </li>
                <li>
                  <span className="pattern-body--bold">AI copilots embedded in existing enterprise applications</span> where different personas (frontline employees vs system administrators) perform very different tasks using the same assistant.
                </li>
                <li>
                  <span className="pattern-body--bold">Advanced configuration scenarios</span> where prompts, parameters, routing rules, and safeguards must be available to a subset of expert maintainers while the broader audience interacts with a simpler abstraction.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when…
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li><span className="pattern-body--bold">Single-step, low-risk tasks</span> where AI suggestions are narrow and reversible (e.g., rewriting a sentence in a text field).</li>
                <li><span className="pattern-body--bold">Small, single-person tools</span> with limited complexity and no meaningful distinction between novice and expert roles.</li>
                <li><span className="pattern-body--bold">Internal prototypes or experiments</span> where the primary goal is speed of iteration rather than long-term maintainability or trust at scale.</li>
                <li>Cases where the &quot;advanced&quot; view <span className="pattern-body--bold">adds little beyond cosmetic detail</span>, and the underlying behavior is already fully understandable from the default UI.</li>
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
                Progressive Disclosure Modes typically manifest as a mode toggle connected to an expanded system view. The pattern adds a layer of state above the individual components, changing what is visible, editable, and emphasized based on the selected mode.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--three pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: Global Mode Switch
              </h3>
              <p className="pattern-card__intro">
                A labeled toggle in a consistent location around the main agentic surface.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Simple / Supervisor Mode&quot; segmented control</li>
                <li>Canvas header, assistant sidebar header, or workflow builder toolbar</li>
                <li>Persistent across the session</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary: Local &quot;Show Details&quot; Controls</h3>
              <p className="pattern-card__intro">
                Inline affordances that temporarily reveal advanced information.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Show underlying prompt&quot;</li>
                <li>&quot;Expand run details&quot;</li>
                <li>&quot;View execution trace&quot;</li>
                <li>Does not permanently change global mode</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual: Settings or Role Configuration</h3>
              <p className="pattern-card__intro">
                Workspace- or organization-level preferences in settings.
              </p>
              <ul className="pattern-card__list">
                <li>Define defaults per role (PMs → Simple, Engineers → Supervisor)</li>
                <li>Restrict access to certain modes if needed</li>
                <li>Override defaults at user level</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Mode Configuration</h3>
            <p className="pattern-card__intro">
              The core object in this pattern is the Mode Configuration, which represents a named view of the same underlying agentic system.
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label</p>
                <ul className="pattern-card__list">
                  <li>&quot;Simple&quot;, &quot;Guided&quot;, &quot;Business View&quot;</li>
                  <li>&quot;Advanced&quot;, &quot;Developer&quot;, &quot;Supervisor&quot;, &quot;Trace View&quot;</li>
                  <li>Labels communicate <em>who</em> the mode is for and <em>what kind of control</em> it enables</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Description / Statement</p>
                <ul className="pattern-card__list">
                  <li><em>Simple mode:</em> &quot;Shows key steps and outcomes with plain-language explanations.&quot;</li>
                  <li><em>Advanced mode:</em> &quot;Exposes prompts, variables, tools, logs, and execution trace for debugging and governance.&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls & Metadata</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Primary toggle:</span> Segmented control to switch modes</li>
                  <li><span className="pattern-body--bold">Persistence:</span> &quot;Remember this for this workspace&quot;</li>
                  <li><span className="pattern-body--bold">Scope:</span> User, project, or workspace level</li>
                  <li><span className="pattern-body--bold">Role requirements:</span> &quot;Available to engineering and admin roles&quot;</li>
                  <li><span className="pattern-body--bold">Policy indicators:</span> &quot;Supervisor Mode disabled by organization policy&quot;</li>
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
                Progressive Disclosure Modes are most effective when they behave predictably across sessions and contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Initial System Behavior</h3>
              <ul className="pattern-card__list">
                <li>Determine default mode based on role, permissions, prior usage, or organizational policy.</li>
                <li>Clearly indicate which mode is active.</li>
                <li>Provide concise explanation on first visit via coach mark, tooltip, or inline explainer.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Discovery and Education</h3>
              <ul className="pattern-card__list">
                <li>Mode switch appears close to the primary AI surface (canvas, assistant panel, builder).</li>
                <li>Lightweight prompt explains the difference between modes on first encounter.</li>
                <li>Reassure non-expert users that switching to advanced mode is optional and reversible.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Switching Modes</h3>
              <ul className="pattern-card__list">
                <li>Switching is fast, reversible, and visually coherent.</li>
                <li>Shared elements stay in place while additional panels or details slide in or expand.</li>
                <li>Simple Mode hides prompts, variables, and logs behind collapsed sections.</li>
                <li>Advanced Mode reveals tool calls, prompt templates, execution graphs, and logs.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Preference Persistence</h3>
              <ul className="pattern-card__list">
                <li>Selected mode is persisted at <span className="pattern-body--bold">user + workspace</span> or <span className="pattern-body--bold">user + project</span> level.</li>
                <li>Individuals do not have to reconfigure the interface every session.</li>
                <li>If organization sets a global default per role, personal overrides are either honored or explicitly disallowed with clear messaging.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Task Execution and Monitoring</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Simple Mode:</span> Emphasizes progress and outcomes (&quot;Research done,&quot; &quot;Draft generated&quot;) with optional &quot;peek&quot; affordances.</li>
                <li><span className="pattern-body--bold">Advanced Mode:</span> Live trace or timeline showing each tool call, prompt, and decision with status, timing, and errors.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Escalation and Safety Interventions</h3>
              <ul className="pattern-card__list">
                <li>Before high-impact actions, the system may temporarily surface a &quot;More details&quot; panel even in Simple Mode.</li>
                <li>Certain workflows may <span className="pattern-body--bold">require</span> Advanced or Supervisor Mode for final approval.</li>
                <li>Enforced by permissions in regulated or high-risk contexts.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Error Handling and Troubleshooting</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Simple Mode:</span> Failures described in human-readable terms with a clear next step (retry, adjust input, or escalate).</li>
                <li><span className="pattern-body--bold">Advanced Mode:</span> Reveals stack traces, raw tool responses, prompt content, and intermediate states for issue resolution.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Long-Term Evolution and Governance</h3>
              <ul className="pattern-card__list">
                <li>The set of visible elements in each mode can be updated, but the meaning of each mode remains stable.</li>
                <li>Telemetry on mode usage, toggling frequency, and task outcomes informs refinements.</li>
                <li>Mode definitions evolve based on user feedback and operational needs.</li>
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
                Technical considerations for building Progressive Disclosure Modes in agentic AI systems.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Mode Design and Labeling</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Align mode names with roles and mental models</span> – &quot;Business View&quot; vs &quot;Technical View&quot; often resonates better than &quot;Basic&quot; vs &quot;Advanced.&quot;</li>
                <li><span className="pattern-body--bold">Avoid implying Simple Mode is inferior</span> – position it as the recommended, safer, or more focused view for most workflows.</li>
                <li><span className="pattern-body--bold">Make scope explicit</span> – modes affect what is shown, not the underlying correctness or safety guarantees of the AI system.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Role- and Policy-Aware Behavior</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Integrate with role-based access control</span> – some roles may never see Advanced Mode, or may see it in read-only form.</li>
                <li><span className="pattern-body--bold">Restrict Supervisor Mode</span> for administrators, engineers, or governance teams for high-risk workflows.</li>
                <li><span className="pattern-body--bold">Surface policy-driven limitations clearly</span> – &quot;Execution traces are redacted due to data policies&quot; or &quot;Prompt editing is disabled for production workflows.&quot;</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">What Simple / Guided Mode Shows</h3>
              <ul className="pattern-card__list">
                <li>High-level task description and natural language steps</li>
                <li>Key inputs and outputs only (user input, main AI response, critical parameters)</li>
                <li>Plain-language explanations of what the agent is about to do or has done</li>
                <li>Minimal, human-centric controls (approve, edit, retry, discard)</li>
                <li>Limited technical metrics (&quot;Run time,&quot; &quot;Success / failed&quot;) without tokens, latency charts, or log streams</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">What Advanced / Supervisor Mode Shows</h3>
              <ul className="pattern-card__list">
                <li>Prompt templates, system messages, and dynamic variables</li>
                <li>Tool calls and responses, including payloads and error messages</li>
                <li>Execution graph or timeline of agent steps (retries, branching, fallbacks)</li>
                <li>Parameter controls (temperature, model choice, routing thresholds)</li>
                <li>Token usage, latency per step, and performance metrics</li>
                <li>Editing prompts, saving/versioning runs, exporting traces</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">State Management & Persistence</h3>
            <ul className="pattern-card__list">
              <li>Persist mode selection at both <span className="pattern-body--bold">user level</span> (personal preference) and <span className="pattern-body--bold">workspace or project level</span> (context-specific defaults).</li>
              <li>Ensure that switching workspaces or projects updates the mode appropriately rather than applying a single global preference that may not match local policies.</li>
              <li>Store mode preferences in a way that survives session boundaries and browser refreshes.</li>
            </ul>
          </div>
        </section>

        {/* Example Use Cases */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example use cases</p>
              <p className="pattern-body pattern-body--narrow">
                How Progressive Disclosure Modes apply across different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Multi-Agent Orchestration Canvas</h3>
              <p className="pattern-card__intro">B2B SaaS</p>
              <p className="pattern-card__label">Business View</p>
              <ul className="pattern-card__list">
                <li>High-level canvas: &quot;Research → Draft → Review&quot; with plain-language descriptions</li>
                <li>Clicking &quot;Run Flow&quot; shows progress and final summary</li>
                <li>Details tucked behind &quot;View details&quot; drawers</li>
              </ul>
              <p className="pattern-card__label">Supervisor Mode</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Individual tools visible (search API, document retriever, LLM, reviewer agent)</li>
                <li>Prompt templates for each node</li>
                <li>Logs and traces of each run, including errors and retries</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Embedded AI Copilot in CRM</h3>
              <p className="pattern-card__intro">B2B Enterprise</p>
              <p className="pattern-card__label">Simple View (Sales Reps)</p>
              <ul className="pattern-card__list">
                <li>Assistant panel summarizes accounts, drafts emails, prepares meeting notes</li>
                <li>Minimal configuration, practical terms</li>
              </ul>
              <p className="pattern-card__label">Technical View (Admins/Ops)</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Data sources used for each summary</li>
                <li>Underlying prompts and filters</li>
                <li>Monitoring: rate limits, latency, failure reasons</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">AI-Powered Data Transformation Tool</h3>
              <p className="pattern-card__intro">Data Platform</p>
              <p className="pattern-card__label">Simple Mode (Analysts)</p>
              <ul className="pattern-card__list">
                <li>Natural-language interface for creating transformations</li>
                <li>Preview outputs directly</li>
              </ul>
              <p className="pattern-card__label">Advanced Mode (Data Engineers)</p>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Inspect generated SQL or code</li>
                <li>Review execution plans and performance statistics</li>
                <li>Validate queries respect privacy and compliance before enabling production pipelines</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Anti-patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Anti-patterns and pitfalls</p>
              <p className="pattern-body pattern-body--narrow">
                Avoid these patterns that undermine trust and usability.
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
                  <h3 className="antipattern-title">Mode Proliferation</h3>
                  <p className="antipattern-subtitle">Too many overlapping modes without clear distinctions.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Introducing three or more overlapping modes (&quot;Simple,&quot; &quot;Advanced,&quot; &quot;Expert,&quot; &quot;Debug,&quot; etc.) without clear distinctions leads to confusion and misconfiguration.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Stick to two clearly differentiated modes. Add complexity only when there is a proven need.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Hidden Responsibilities</h3>
                  <p className="antipattern-subtitle">Critical safety or approval responsibilities buried only in Advanced Mode.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Burying critical safety or approval responsibilities only in Advanced Mode, while non-expert roles trigger high-impact actions without sufficient context.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Surface high-impact decisions in all modes. Use temporary &quot;peek&quot; views for critical moments.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Copy That Shames Users</h3>
                  <p className="antipattern-subtitle">Labeling modes in ways that make users feel incompetent.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Labeling modes in ways that make non-expert users feel incompetent (&quot;Beginner Mode,&quot; &quot;Dumb Mode&quot;) erodes trust and adoption.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Use neutral, role-based names like &quot;Business View&quot; or &quot;Focus Mode&quot; that don&apos;t imply skill level.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Inconsistent Application</h3>
                  <p className="antipattern-subtitle">Mode toggle on one screen but not on related workflows.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Implementing the mode toggle on one screen but not on related workflows causes the same user to see different abstractions in different parts of the product.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Apply modes consistently across all related surfaces. Mode preference should persist across the experience.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Leaking Sensitive Data</h3>
                  <p className="antipattern-subtitle">Exposing PII or confidential information in Advanced Mode without safeguards.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Exposing raw tool payloads, prompts, or logs containing PII or confidential information in Advanced Mode without safeguards contradicts trust and legal requirements.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Implement data redaction policies. Show &quot;[REDACTED]&quot; placeholders where appropriate, even in Supervisor Mode.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & microcopy guidelines</p>
            <p className="pattern-body">
              Clear, consistent language helps users understand what each mode offers and who it is for.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Recommended view for most teams; focuses on tasks and outcomes.&quot;</li>
                  <li>&quot;Shows full system trace, configuration, and logs for debugging and oversight.&quot;</li>
                  <li>&quot;Switch to Supervisor Mode to see what the AI is doing under the hood.&quot;</li>
                  <li>&quot;Your preference is saved for this workspace.&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Beginner Mode&quot; or &quot;Dumb Mode&quot; (implies incompetence)</li>
                  <li>&quot;Pro Mode&quot; (vague, doesn&apos;t explain what changes)</li>
                  <li>&quot;More options&quot; (doesn&apos;t communicate who or what)</li>
                  <li>&quot;Expert only&quot; (unnecessarily intimidating)</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">State Who and What</h3>
                <ul className="pattern-card__list">
                  <li>Clearly state <span className="pattern-body--bold">who</span> each mode is for</li>
                  <li>Explain <span className="pattern-body--bold">what changes</span> when switching, in one short sentence</li>
                  <li>Example: &quot;For engineers and admins. Shows prompts, tools, and execution logs.&quot;</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Emphasize Safety and Focus</h3>
                <ul className="pattern-card__list">
                  <li>Simple Mode: &quot;Recommended view for most teams; focuses on tasks and outcomes.&quot;</li>
                  <li>Advanced Mode: &quot;Shows full system trace for debugging and oversight.&quot;</li>
                  <li>Neither mode should feel like a &quot;wrong&quot; choice</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Consistent Naming</h3>
                <ul className="pattern-card__list">
                  <li>Use consistent naming across UI surfaces, documentation, and training materials</li>
                  <li>&quot;Supervisor Mode&quot; should always mean the same set of capabilities</li>
                  <li>Avoid renaming modes in different contexts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Instrumentation & Success Metrics */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Instrumentation & success metrics</p>
              <p className="pattern-body pattern-body--narrow">
                Instrument the pattern to evaluate and refine Progressive Disclosure Modes.
              </p>
            </div>
          </div>

          <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Mode Adoption</h3>
              <ul className="pattern-card__list">
                <li>Track mode adoption by role, workspace, and feature area</li>
                <li>Understand which user segments prefer which modes</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Toggle Frequency</h3>
              <ul className="pattern-card__list">
                <li>Monitor toggle frequency within sessions</li>
                <li>Frequent switching may indicate poor defaults or unclear distinctions</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Task Success Rates</h3>
              <ul className="pattern-card__list">
                <li>Compare task success, completion time, and error rates between modes</li>
                <li>Segment by role for deeper insights</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Qualitative Feedback</h3>
              <ul className="pattern-card__list">
                <li>Observe support tickets and qualitative feedback as modes roll out</li>
                <li>Confusion about what each mode does often surfaces early</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Advanced Feature Usage</h3>
              <ul className="pattern-card__list">
                <li>Measure usage of advanced artifacts (traces, logs, prompt editors)</li>
                <li>Prioritize which expert features are most valuable</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Patterns */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Related patterns</p>
              <p className="pattern-body pattern-body--narrow">
                Patterns that complement Progressive Disclosure Modes.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">2.1 Sandboxed Playgrounds</h3>
              <p className="pattern-card__intro">
                Allows users to see what an agent would do before executing, often surfaced more prominently in Advanced or Supervisor Mode.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2.2 Wayfinders (Capability Discovery)</h3>
              <p className="pattern-card__intro">
                Introduces new users to the AI assistant in Simple Mode with structured first tasks and guardrails.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Inline Explanations & Rationale</h3>
              <p className="pattern-card__intro">
                Provides natural-language explanations of agent behavior within each mode.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Audit Trails & Run History</h3>
              <p className="pattern-card__intro">
                Complements Supervisor Mode with persistent records of prompts, tool usage, and outcomes for governance and compliance.
              </p>
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
              <p className="pattern-checklist-category__title">Mode Clarity</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users immediately tell which mode they are in?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is it clear what changes when switching modes?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Role Alignment</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are mode names neutral and role-appropriate (not skill-shaming)?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do default modes align with user roles and organizational policies?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Consistency</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is the mode toggle available consistently across all relevant surfaces?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does mode preference persist across sessions and contexts?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Safety</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are high-impact decisions surfaced appropriately in all modes?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is sensitive data properly redacted even in Advanced/Supervisor Mode?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Access Control</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can administrators restrict access to certain modes by role?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are policy-driven limitations clearly communicated to users?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Instrumentation</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are mode adoption and toggle frequency being tracked?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is there a feedback mechanism to understand mode-specific issues?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
