import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, Bot, User, Layers, RotateCcw, BarChart3, Loader2, Check, MinusCircle, Send } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const STREAMING_RESULTS_VISUALIZATIONS_SEO = {
  title: "Streaming Results (Visualizations) - AI Trust Pattern",
  description: "Progressively stream AI-generated results as structured, interactive visual blocks instead of a single monolithic answer.",
  keywords: ["AI streaming", "progressive results", "AI visualization", "real-time AI", "streaming UX", "AI trust patterns", "partial results", "agentic UX"],
  canonicalPath: "/agentic_ai_patterns/streaming-results-visualizations"
};

// Mock data for the streaming response
const MOCK_DATA = [
  { region: "North America", revenue: "$1.2M", growth: "+12%", status: "Healthy" },
  { region: "Europe (EMEA)", revenue: "$850K", growth: "+5%", status: "Stable" },
  { region: "Asia Pacific", revenue: "$920K", growth: "+22%", status: "Trending" },
  { region: "Latin America", revenue: "$340K", growth: "-2%", status: "At Risk" },
  { region: "Middle East", revenue: "$120K", growth: "+8%", status: "Stable" }
];

const DEFAULT_INPUT = "Show me the Q3 sales performance by region.";

// Utility function for delays
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Interactive demo component
function StreamingResultsDemo() {
  const [phase, setPhase] = useState('initial'); // 'initial', 'user-sent', 'ai-skeleton', 'ai-streaming', 'complete'
  const [isProcessing, setIsProcessing] = useState(false);
  const [visibleRowCount, setVisibleRowCount] = useState(0);
  const [inputValue, setInputValue] = useState(DEFAULT_INPUT);
  const [userMessage, setUserMessage] = useState('');
  const [showMetrics, setShowMetrics] = useState(false);
  const chatViewportRef = useRef(null);

  // Scroll to bottom of chat viewport
  const scrollToBottom = useCallback(() => {
    if (chatViewportRef.current) {
      chatViewportRef.current.scrollTop = chatViewportRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [phase, visibleRowCount, scrollToBottom]);

  // Reset demo to initial state
  const resetDemo = useCallback(() => {
    setPhase('initial');
    setIsProcessing(false);
    setVisibleRowCount(0);
    setInputValue(DEFAULT_INPUT);
    setUserMessage('');
    setShowMetrics(false);
  }, []);

  // Handle user submit
  const handleUserSubmit = useCallback(async () => {
    const text = inputValue.trim();
    if (!text || isProcessing) return;

    setIsProcessing(true);
    setUserMessage(text);
    setInputValue('');
    setPhase('user-sent');

    await delay(800);

    // Show AI skeleton state
    setPhase('ai-skeleton');
    await delay(1500);

    // Show metrics and start streaming rows
    setShowMetrics(true);
    setPhase('ai-streaming');

    // Stream rows one by one
    for (let i = 0; i < MOCK_DATA.length; i++) {
      setVisibleRowCount(i + 1);
      await delay(Math.floor(Math.random() * 800) + 400);
    }

    // Complete
    setPhase('complete');
    setIsProcessing(false);
  }, [inputValue, isProcessing]);

  // Handle Enter key
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      handleUserSubmit();
    }
  }, [handleUserSubmit]);

  // Get status text and class based on phase
  const getStatusInfo = () => {
    if (phase === 'ai-skeleton') {
      return { text: 'Initializing...', isComplete: false };
    }
    if (phase === 'ai-streaming') {
      return { text: `Processing region ${visibleRowCount} of ${MOCK_DATA.length}...`, isComplete: false };
    }
    if (phase === 'complete') {
      return { text: 'Complete · Generated in 3.2s', isComplete: true };
    }
    return { text: '', isComplete: false };
  };

  const statusInfo = getStatusInfo();

  // Render status icon based on row status
  const renderStatusIcon = (status) => {
    if (status === 'Healthy') {
      return <CheckCircle size={14} style={{ color: 'var(--srd-color-success)' }} />;
    }
    if (status === 'At Risk') {
      return <AlertCircle size={14} style={{ color: '#ef4444' }} />;
    }
    return <MinusCircle size={14} style={{ color: 'var(--srd-color-primary)' }} />;
  };

  return (
    <>
      <style>{`
        .srd-demo {
          --srd-color-bg: #f4f5f7;
          --srd-color-surface: #ffffff;
          --srd-color-primary: #3b82f6;
          --srd-color-primary-hover: #2563eb;
          --srd-color-text-main: #111827;
          --srd-color-text-muted: #6b7280;
          --srd-color-border: #e5e7eb;
          --srd-color-success: #10b981;
          --srd-color-row-hover: #f9fafb;
          --srd-radius-md: 8px;
          --srd-radius-lg: 12px;
          --srd-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          --srd-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background: var(--srd-color-surface);
          border-radius: var(--srd-radius-lg);
          box-shadow: var(--srd-shadow-md);
          width: 100%;
          max-width: 800px;
          height: 600px;
          overflow: hidden;
          border: 1px solid var(--srd-color-border);
          display: flex;
          flex-direction: column;
          margin: 0 auto;
        }

        .srd-demo__header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--srd-color-border);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          background-color: #f8fafc;
          flex-shrink: 0;
        }

        .srd-demo__title-group {
          flex: 1;
        }

        .srd-demo__title {
          margin: 0;
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--srd-color-text-main);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .srd-demo__description {
          margin: 0.5rem 0 0;
          font-size: 0.875rem;
          color: var(--srd-color-text-muted);
          line-height: 1.5;
        }

        .srd-demo__reset-btn {
          background-color: white;
          border: 1px solid var(--srd-color-border);
          color: var(--srd-color-text-main);
          padding: 0.5rem 1rem;
          border-radius: var(--srd-radius-md);
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .srd-demo__reset-btn:hover {
          background-color: var(--srd-color-bg);
          border-color: #d1d5db;
        }

        .srd-chat-viewport {
          background-color: #ffffff;
          padding: 2rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          overflow-y: auto;
          scroll-behavior: smooth;
        }

        .srd-message {
          display: flex;
          gap: 1rem;
          max-width: 90%;
          opacity: 0;
          animation: srd-fadeIn 0.3s forwards;
        }

        .srd-message--user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .srd-message--ai {
          align-self: flex-start;
          width: 100%;
        }

        .srd-message__avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: var(--srd-color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.875rem;
          flex-shrink: 0;
        }

        .srd-message--user .srd-message__avatar {
          background-color: var(--srd-color-text-main);
        }

        .srd-message__bubble {
          background-color: var(--srd-color-bg);
          padding: 1rem;
          border-radius: var(--srd-radius-md);
          border-top-left-radius: 0;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .srd-message--user .srd-message__bubble {
          background-color: var(--srd-color-primary);
          color: white;
          border-radius: var(--srd-radius-md);
          border-top-right-radius: 0;
        }

        .srd-result-block {
          border: 1px solid var(--srd-color-border);
          border-radius: var(--srd-radius-md);
          background: white;
          width: 100%;
          overflow: hidden;
          margin-top: 0.5rem;
          box-shadow: var(--srd-shadow-sm);
          display: flex;
          flex-direction: column;
        }

        .srd-result-block__header {
          padding: 0.75rem 1rem;
          background-color: #f9fafb;
          border-bottom: 1px solid var(--srd-color-border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .srd-result-block__title {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--srd-color-text-main);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .srd-result-block__status {
          font-size: 0.75rem;
          color: var(--srd-color-text-muted);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .srd-result-block__status--processing {
          color: var(--srd-color-primary);
        }

        .srd-result-block__status--complete {
          color: var(--srd-color-success);
        }

        .srd-result-block__content {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .srd-viz {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .srd-metric-card {
          border: 1px solid var(--srd-color-border);
          border-radius: var(--srd-radius-md);
          padding: 0.75rem;
          background: white;
        }

        .srd-metric-card__label {
          font-size: 0.75rem;
          color: var(--srd-color-text-muted);
          margin-bottom: 0.25rem;
          display: block;
        }

        .srd-metric-card__value {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--srd-color-text-main);
          display: block;
        }

        .srd-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
        }

        .srd-table th {
          text-align: left;
          padding: 0.75rem 0.5rem;
          border-bottom: 2px solid var(--srd-color-border);
          color: var(--srd-color-text-muted);
          font-weight: 500;
        }

        .srd-table td {
          padding: 0.75rem 0.5rem;
          border-bottom: 1px solid var(--srd-color-border);
          color: var(--srd-color-text-main);
        }

        .srd-table__row {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .srd-table__row--visible {
          opacity: 1;
          transform: translateY(0);
        }

        .srd-table__row--new {
          background-color: #eff6ff;
          animation: srd-highlightFade 2s forwards;
        }

        .srd-table__status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .srd-skeleton {
          background: #e5e7eb;
          border-radius: 4px;
          display: inline-block;
          position: relative;
          overflow: hidden;
        }

        .srd-skeleton::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform: translateX(-100%);
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.2) 20%,
            rgba(255, 255, 255, 0.5) 60%,
            rgba(255, 255, 255, 0)
          );
          animation: srd-shimmer 2s infinite;
        }

        .srd-skeleton--text {
          height: 1em;
          width: 80%;
          margin-bottom: 0.5rem;
        }

        .srd-skeleton--text-short {
          height: 1em;
          width: 50%;
        }

        .srd-skeleton--rect {
          height: 150px;
          width: 100%;
        }

        .srd-input-area {
          padding: 1rem 1.5rem;
          border-top: 1px solid var(--srd-color-border);
          background-color: #ffffff;
          display: flex;
          gap: 0.75rem;
          align-items: center;
          flex-shrink: 0;
        }

        .srd-input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 1px solid var(--srd-color-border);
          border-radius: var(--srd-radius-md);
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s;
          background-color: #f9fafb;
          font-family: inherit;
        }

        .srd-input:focus {
          border-color: var(--srd-color-primary);
          background-color: #fff;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }

        .srd-input:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .srd-send-btn {
          background-color: var(--srd-color-primary);
          color: white;
          border: none;
          border-radius: var(--srd-radius-md);
          padding: 0 1.5rem;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s;
          font-size: 0.95rem;
          font-weight: 600;
          font-family: inherit;
        }

        .srd-send-btn:hover:not(:disabled) {
          background-color: var(--srd-color-primary-hover);
        }

        .srd-send-btn:disabled {
          background-color: var(--srd-color-border);
          cursor: not-allowed;
        }

        .srd-spinner {
          animation: srd-spin 1s linear infinite;
        }

        @keyframes srd-fadeIn {
          to { opacity: 1; }
        }

        @keyframes srd-shimmer {
          100% { transform: translateX(100%); }
        }

        @keyframes srd-highlightFade {
          0% { background-color: #eff6ff; }
          100% { background-color: transparent; }
        }

        @keyframes srd-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="srd-demo" role="region" aria-label="Streaming Results demo">
        <div className="srd-demo__header">
          <div className="srd-demo__title-group">
            <h2 className="srd-demo__title">
              <Layers size={18} />
              Streaming Results (Visualizations)
            </h2>
            <p className="srd-demo__description">
              Demonstrating how an AI agent progressively renders structured data. <strong>Click &quot;Submit&quot; below to start the simulation.</strong>
            </p>
          </div>
          <button className="srd-demo__reset-btn" onClick={resetDemo}>
            <RotateCcw size={14} />
            Reset Demo
          </button>
        </div>

        <div className="srd-chat-viewport" ref={chatViewportRef}>
          {/* Initial welcome message */}
          <div className="srd-message srd-message--ai">
            <div className="srd-message__avatar">
              <Bot size={18} />
            </div>
            <div className="srd-message__bubble">
              Hello! I&apos;m your Data Analyst Agent. Ask me to query customer churn, sales revenue, or regional performance.
            </div>
          </div>

          {/* User message */}
          {phase !== 'initial' && userMessage && (
            <div className="srd-message srd-message--user">
              <div className="srd-message__avatar">
                <User size={18} />
              </div>
              <div className="srd-message__bubble">
                {userMessage}
              </div>
            </div>
          )}

          {/* AI Response with streaming result block */}
          {(phase === 'ai-skeleton' || phase === 'ai-streaming' || phase === 'complete') && (
            <div className="srd-message srd-message--ai">
              <div className="srd-message__avatar">
                <Bot size={18} />
              </div>
              <div className="srd-message__bubble">
                I&apos;m pulling the Q3 sales data for you now.

                <div className="srd-result-block">
                  <div className="srd-result-block__header">
                    <span className="srd-result-block__title">
                      <BarChart3 size={16} />
                      Q3 Regional Performance
                    </span>
                    <span
                      className={`srd-result-block__status ${statusInfo.isComplete ? 'srd-result-block__status--complete' : 'srd-result-block__status--processing'}`}
                      aria-live="polite"
                    >
                      {statusInfo.isComplete ? (
                        <Check size={12} />
                      ) : (
                        <Loader2 size={12} className="srd-spinner" />
                      )}
                      {statusInfo.text}
                    </span>
                  </div>

                  <div className="srd-result-block__content">
                    {/* Skeleton state */}
                    {phase === 'ai-skeleton' && (
                      <>
                        <div className="srd-viz">
                          <div className="srd-metric-card">
                            <div className="srd-skeleton srd-skeleton--text" />
                            <div className="srd-skeleton srd-skeleton--text-short" />
                          </div>
                          <div className="srd-metric-card">
                            <div className="srd-skeleton srd-skeleton--text" />
                            <div className="srd-skeleton srd-skeleton--text-short" />
                          </div>
                          <div className="srd-metric-card">
                            <div className="srd-skeleton srd-skeleton--text" />
                            <div className="srd-skeleton srd-skeleton--text-short" />
                          </div>
                        </div>
                        <div className="srd-skeleton srd-skeleton--rect" />
                      </>
                    )}

                    {/* Metrics and table */}
                    {(phase === 'ai-streaming' || phase === 'complete') && showMetrics && (
                      <>
                        <div className="srd-viz">
                          <div className="srd-metric-card">
                            <span className="srd-metric-card__label">Total Revenue</span>
                            <span className="srd-metric-card__value">$3.43M</span>
                          </div>
                          <div className="srd-metric-card">
                            <span className="srd-metric-card__label">Avg. Growth</span>
                            <span className="srd-metric-card__value" style={{ color: 'var(--srd-color-success)' }}>+9.2%</span>
                          </div>
                          <div className="srd-metric-card">
                            <span className="srd-metric-card__label">Active Regions</span>
                            <span className="srd-metric-card__value">5</span>
                          </div>
                        </div>

                        <table className="srd-table">
                          <thead>
                            <tr>
                              <th>Region</th>
                              <th>Revenue</th>
                              <th>Growth</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {MOCK_DATA.slice(0, visibleRowCount).map((row, index) => (
                              <tr
                                key={row.region}
                                className={`srd-table__row srd-table__row--visible ${index === visibleRowCount - 1 && phase === 'ai-streaming' ? 'srd-table__row--new' : ''}`}
                              >
                                <td>{row.region}</td>
                                <td>{row.revenue}</td>
                                <td style={{ color: row.growth.startsWith('+') ? 'var(--srd-color-success)' : '#ef4444' }}>
                                  {row.growth}
                                </td>
                                <td>
                                  <span className="srd-table__status">
                                    {renderStatusIcon(row.status)}
                                    {row.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="srd-input-area">
          <input
            type="text"
            className="srd-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask a question..."
            disabled={isProcessing || phase === 'complete'}
          />
          <button
            className="srd-send-btn"
            onClick={handleUserSubmit}
            disabled={isProcessing || phase === 'complete' || !inputValue.trim()}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default function StreamingResultsVisualizationsPattern() {
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
            <span className="pattern-header__index">5.2</span>
            <div>
              <h1 className="pattern-header__title">Streaming Results (Visualizations)</h1>
              <p className="pattern-header__subtitle">
                Progressively stream AI-generated results as structured, interactive visual blocks instead of a single monolithic answer.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="5.2" patternTitle="Streaming Results (Visualizations)" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Streaming Results (Visualizations) is a pattern where an AI assistant&apos;s response appears progressively as structured, interactive components&mdash;such as tables, cards, charts, and forms&mdash;rather than as a static block of text at the end of processing.
            </p>
            <p className="pattern-body">
              The pattern typically appears in AI chat surfaces, side panels, and result canvases within B2B and B2C web applications. The core idea is to treat the AI as a real-time collaborator whose work becomes visible and usable as soon as it reaches a minimally useful state, while clearly signalling status and completeness.
            </p>
            <p className="pattern-body">
              This reduces uncertainty, improves perceived performance, and increases trust by revealing how the system is assembling an answer.
            </p>
            <p className="pattern-body pattern-body--bold">Example interaction:</p>
            <p className="pattern-body">
              An analyst asks an AI copilot: &quot;Find enterprise customers at risk of churn this quarter and group them by reason.&quot; The interface immediately shows:
            </p>
            <ul className="pattern-list">
              <li>A loading skeleton of a segmented bar chart and a table labeled &quot;At-risk accounts (draft)&quot;.</li>
              <li>Within seconds, the chart fills in with early segments, while table rows stream in batch by batch.</li>
              <li>Filters for region, ARR, and renewal date are active as soon as the first rows arrive.</li>
              <li>A status line under the table reads &quot;Processing 3 of 7 data sources... Results may change.&quot;</li>
              <li>When all sources are processed, the status updates to &quot;Complete &middot; 7 data sources processed &middot; Last updated 2 minutes ago.&quot;</li>
            </ul>
            <p className="pattern-body">
              The analyst can filter, sort, and inspect accounts while additional rows are still arriving, without waiting for the full result set.
            </p>
          </div>
        </section>

        {/* Interactive Demo */}
        <section className="pattern-section" aria-label="Streaming results example">
          <StreamingResultsDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              In many AI-driven interfaces, responses are delivered as monolithic text once the model finishes generating. This creates several issues:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Uncertainty about progress and completeness</span> &ndash; Long-running operations look identical to stalled ones, leaving users unsure whether the AI is working, how far it has progressed, or what remains.
              </li>
              <li>
                <span className="pattern-body--bold">Low usability for data-heavy or multi-item answers</span> &ndash; Lists of flights, leads, documents, or alerts expressed purely as text are hard to scan, compare, and act on, especially when they lack consistent structure.
              </li>
              <li>
                <span className="pattern-body--bold">Wasted time waiting for &quot;all or nothing&quot; answers</span> &ndash; In traditional patterns, nothing is usable until everything is done. Early, partially complete results that would have been enough to make a decision remain hidden.
              </li>
              <li>
                <span className="pattern-body--bold">Weak connection to underlying systems and data</span> &ndash; Without visible structure or metadata, it is unclear where results came from, how they are grouped, or which parts might still be updating, eroding confidence in the AI.
              </li>
            </ul>
            <p className="pattern-body">
              Streaming, visualized results solve these issues by exposing structure, progress, and partial utility as soon as possible.
            </p>
          </div>

          <aside className="pattern-section__aside">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <CheckCircle size={16} className="pattern-icon--success" />
                Use this pattern when...
              </h3>
              <ul className="pattern-card__list">
                <li>
                  AI responses involve <span className="pattern-body--bold">collections of items</span> (e.g., search results, leads, tickets, candidates, flights, alerts, recommendations) that benefit from structured comparison.
                </li>
                <li>
                  For <span className="pattern-body--bold">slow or multi-step agentic workflows</span>, where the AI orchestrates multiple tools, APIs, or data sources and may take several seconds or longer to complete.
                </li>
                <li>
                  In <span className="pattern-body--bold">high-stakes or high-effort tasks</span> where early visibility and partial results significantly improve efficiency or confidence.
                </li>
                <li>
                  When the AI is aggregating <span className="pattern-body--bold">large result sets</span> and the earliest subset is already useful for exploration, validation, or refinement.
                </li>
                <li>
                  For experiences where <span className="pattern-body--bold">perceived responsiveness and trust</span> are key adoption drivers.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when...
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>Responses are <span className="pattern-body--bold">near-instant</span>, atomic, and rarely exceed a few tokens (e.g., a simple classification or boolean decision).</li>
                <li>Outputs are naturally <span className="pattern-body--bold">single, short, and non-collection based</span>, such as renaming a field, rewriting a sentence, or returning a single scalar or label.</li>
                <li>The surrounding UI already provides <span className="pattern-body--bold">rich, immediate visualizations</span>, and the AI is only used to refine or explain what is already on screen.</li>
                <li>The AI acts as a <span className="pattern-body--bold">background utility</span> with low user attention where streaming would add noise without value.</li>
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
                Streaming Results (Visualizations) combines the conversational surface of an AI assistant with a structured result canvas. The canvas fills with one or more result blocks that change state as the AI works, enabling early interaction while clearly signaling progress and completeness.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--three pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Chat Prompt in AI Panel
              </h3>
              <p className="pattern-card__intro">
                A user submits a natural language request, and the streaming visualization appears directly under the assistant&apos;s message.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Find the cheapest refundable flights to New York for next week&quot;</li>
                <li>Results stream into tables, cards, or charts inline</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Inline &quot;Ask AI&quot; Actions</h3>
              <p className="pattern-card__intro">
                An action on a table, chart, or object opens a side panel or inline region where results stream in.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Summarize this dashboard&quot;</li>
                <li>&quot;Prioritize these leads&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual Triggers</h3>
              <p className="pattern-card__intro">
                Banners, toasts, or contextual help open a result area where the AI streams sortable lists or recommendation views.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Let AI triage these tickets&quot;</li>
                <li>Links from documentation or walkthrough tours</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Streaming Result Block</h3>
            <p className="pattern-card__intro">
              The main repeated unit is the streaming result block: a structured, interactive visualization that represents one coherent output from the AI (or one stage of a multi-tool plan).
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label / Title</p>
                <ul className="pattern-card__list">
                  <li>&quot;Recommended routes&quot;</li>
                  <li>&quot;At-risk accounts &middot; Draft&quot;</li>
                  <li>&quot;Key incidents by severity&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Structure / Visualization</p>
                <ul className="pattern-card__list">
                  <li>Tables (with sorting, filtering, pagination)</li>
                  <li>Cards or chips (for entities like trips, contacts, alerts)</li>
                  <li>Charts or KPIs (for aggregated metrics)</li>
                  <li>Forms or parameter panels (for editable criteria)</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li>Expand to side panel or full-screen view</li>
                  <li>Refine criteria (&quot;Narrow to Europe&quot;, &quot;Exclude internal&quot;)</li>
                  <li>Pause or stop the current generation</li>
                  <li>Pin, save, or export the block</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Optional Metadata</p>
                <ul className="pattern-card__list">
                  <li>Completeness status (&quot;Processing 3 of 5 sources...&quot;)</li>
                  <li>Time of last update</li>
                  <li>Source systems or tools involved</li>
                  <li>Confidence indicators or quality badges</li>
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
                The lifecycle of a streaming visualization spans from prompt entry to final stabilization.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Prompt Submitted</h3>
              <ul className="pattern-card__list">
                <li>A natural language request is submitted, or an AI action is triggered from context.</li>
                <li>The assistant acknowledges the request with a brief statement, optionally outlining the plan.</li>
                <li>A reserved region for results appears, avoiding layout jumps later.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Skeleton and Planning State</h3>
              <ul className="pattern-card__list">
                <li>Skeleton placeholders indicate the expected structure (table skeleton, card grid, chart frame).</li>
                <li>An inline status line sets expectations: &quot;Generating a table of options...&quot;</li>
                <li>For agentic systems, high-level steps may be displayed.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Initial Streaming Content</h3>
              <ul className="pattern-card__list">
                <li>Headers, labels, and key summary metrics appear first.</li>
                <li>The first batch of items begins to stream in, replacing skeletons in-place.</li>
                <li>Critical controls become enabled as soon as they are safe to use.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Parallel Block Updates</h3>
              <ul className="pattern-card__list">
                <li>If producing multiple blocks, each streams independently with its own progress indication.</li>
                <li>Blocks remain stable in position; new items insert within them.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Interactive Partial Use</h3>
              <ul className="pattern-card__list">
                <li>Early data can be used while later results continue to stream.</li>
                <li>Applying filters, selecting items, opening details, triggering follow-up questions.</li>
                <li>UI clearly indicates that results are partial: &quot;Showing 25 of 120 results &middot; Still generating.&quot;</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Completion and Stabilization</h3>
              <ul className="pattern-card__list">
                <li>Status updates to a stable state (&quot;Complete &middot; 120 results&quot;).</li>
                <li>Visual cues such as icon changes or progress completion indicate the block is no longer changing.</li>
                <li>Final summaries or additional insights may appear after the main data is ready.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">7. Revision and Continuation</h3>
              <ul className="pattern-card__list">
                <li>Refine controls allow quick iteration without starting from scratch.</li>
                <li>Each refinement either updates the existing block with an &quot;Updating...&quot; state, or creates a new block version for comparison.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">8. Error and Degraded States</h3>
              <ul className="pattern-card__list">
                <li>If a tool call fails, the affected block shows a localized error with clear scope.</li>
                <li>Options are provided to retry, change parameters, or continue with partial results.</li>
                <li>Global failures provide a concise explanation and fallback options.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* States */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">States</p>
              <p className="pattern-body pattern-body--narrow">
                Explicit states help ensure clarity and predictability throughout the streaming experience.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Idle / Not Yet Requested</h3>
              <p className="pattern-card__intro">
                No special UI beyond affordances to invoke AI.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Planning / Understanding</h3>
              <p className="pattern-card__intro">
                Brief textual acknowledgement and, optionally, a high-level plan. Avoid long &quot;thinking&quot; messages that provide no actionable information.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Loading / Streaming</h3>
              <p className="pattern-card__intro">
                Skeletons or placeholders with active status text. Key controls progressively enabled as soon as sufficient data is present.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Partially Complete</h3>
              <p className="pattern-card__intro">
                Clear indication that the view contains a subset of the intended results, including counts where possible.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Complete / Stable</h3>
              <p className="pattern-card__intro">
                No further automatic changes expected. Status is explicit, and time of completion is visible.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Error / Degraded</h3>
              <p className="pattern-card__intro">
                Transparent about what failed and what remains trustworthy. Partial data is preserved and visually distinguished from missing segments.
              </p>
            </div>
          </div>
        </section>

        {/* Key Interactions */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Key interactions</p>
              <p className="pattern-body pattern-body--narrow">
                Effective streaming visualizations rely on predictable, low-friction interactions.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Early Control Activation</h3>
              <ul className="pattern-card__list">
                <li>Enable filters, sorting, and basic navigation as soon as there is enough data to operate on.</li>
                <li>Guard against interactions that might conflict with in-progress updates by gating them or indicating pending state.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Per-Block Pause and Cancel</h3>
              <ul className="pattern-card__list">
                <li>Allow stopping generation for a specific block when sufficient results have been surfaced.</li>
                <li>After cancellation, stabilize the view and clearly label it as &quot;Stopped early&quot; or &quot;Partial&quot;.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Anchored Scrolling and Focus</h3>
              <ul className="pattern-card__list">
                <li>Keep the current context stable while new content streams in.</li>
                <li>Avoid automatically scrolling to the bottom as new items appear.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Follow-up in Context</h3>
              <ul className="pattern-card__list">
                <li>Provide &quot;Ask about this&quot; entry points on rows/cards to initiate focused conversations.</li>
                <li>Preserve a clear relationship between conversational turns and specific visualizations.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Selection and Export</h3>
              <ul className="pattern-card__list">
                <li>Streamed results often lead to actions outside the chat surface: creating lists, starting workflows, exporting data.</li>
                <li>Support bulk selection, summarized counts of selected items, and clear destinations for downstream actions.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Content & Visual Design Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Content & visual design guidelines</p>
              <p className="pattern-body pattern-body--narrow">
                Design principles for effective streaming visualizations.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Set Expectations Clearly and Early</h3>
              <ul className="pattern-card__list">
                <li>Short, factual status text is more trustworthy than vague assurances.</li>
                <li>Where approximate durations are provided, indicate them as estimates and avoid overly precise timing.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Use Structure Before Prose</h3>
              <ul className="pattern-card__list">
                <li>Prioritize tables, cards, and charts for primary results; place natural language explanation adjacent or secondary.</li>
                <li>Reserve longer textual narratives for insights, interpretation, or rationale.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Avoid Layout Jitter</h3>
              <ul className="pattern-card__list">
                <li>Reserve space for results up front so that the page does not reflow dramatically as content arrives.</li>
                <li>Insert streaming items within existing containers, using consistent row heights and stable ordering.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Make Partiality Visible</h3>
              <ul className="pattern-card__list">
                <li>Use explicit labels such as &quot;Draft&quot;, &quot;Partial&quot;, &quot;Updating&quot;, or &quot;Limited sample&quot;.</li>
                <li>When counts are known, include them (&quot;37 of ~150 options loaded&quot;).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Convey Provenance</h3>
              <ul className="pattern-card__list">
                <li>Show the data sources, filters, and constraints that shaped the result.</li>
                <li>Where applicable, provide a compact &quot;View steps&quot; or &quot;Show reasoning&quot; control.</li>
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
                Streaming visualizations must be designed with assistive technologies and diverse user needs in mind.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Assistive Technology Compatibility</h3>
              <ul className="pattern-card__list">
                <li>Use ARIA live regions thoughtfully so that critical changes are announced without overwhelming screen reader users.</li>
                <li>Prefer batch updates for large result sets instead of row-by-row announcements.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Keyboard Accessibility</h3>
              <ul className="pattern-card__list">
                <li>Controls for filters, sorting, expand/collapse, and pause/cancel must be reachable and operable without a mouse.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Reduced Motion Preferences</h3>
              <ul className="pattern-card__list">
                <li>Provide options or respect system settings for reduced motion.</li>
                <li>Disable or minimize animation for streaming updates when reduced motion is requested.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contrast and Focus Visibility</h3>
              <ul className="pattern-card__list">
                <li>Maintain contrast and focus visibility as content updates.</li>
                <li>Ensure that focus is not lost or moved unexpectedly when new elements appear.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trust & Risk Considerations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Trust & risk considerations</p>
              <p className="pattern-body pattern-body--narrow">
                Streaming visualizations are powerful for building trust, but they also introduce new risks.
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
                  <span className="antipattern-label">Risk</span>
                  <h3 className="antipattern-title">Misinterpreting Partial Results as Final</h3>
                  <p className="antipattern-subtitle">Users may act on incomplete data.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Users may misinterpret in-progress results as final answers, leading to premature decisions or confusion when results change.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Mitigate</span>
                <span className="antipattern-alternative-text">Clearly label in-progress states and use obvious completion indicators.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Risk</span>
                  <h3 className="antipattern-title">Overconfidence in Auto-Generated Structure</h3>
                  <p className="antipattern-subtitle">AI-inferred schemas may be wrong.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When the AI infers schema (columns, groupings, segments), users may over-trust the structure without verifying its accuracy.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Mitigate</span>
                <span className="antipattern-alternative-text">Provide a way to inspect and edit those assumptions.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Risk</span>
                  <h3 className="antipattern-title">Hidden Limitations and Sampling</h3>
                  <p className="antipattern-subtitle">Results may not represent the full dataset.</p>
                </div>
              </div>
              <p className="antipattern-description">
                If results represent a sample or capped subset (e.g., first 100 items), users may not realize they&apos;re seeing incomplete data.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Mitigate</span>
                <span className="antipattern-alternative-text">State sampling explicitly and offer paths to full results when feasible.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Risk</span>
                  <h3 className="antipattern-title">Inconsistent or Unstable Outputs</h3>
                  <p className="antipattern-subtitle">Frequent reordering damages trust.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Frequent reordering of items during streaming, or unpredictable reshuffling, can make the interface feel unreliable.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Mitigate</span>
                <span className="antipattern-alternative-text">Consider freezing order after a threshold or communicate that rankings are provisional.</span>
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
                Different approaches to implementing streaming results based on context and complexity.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Single-Block Streaming</h3>
              <p className="pattern-card__intro">
                One main visualization (e.g., a table of options) streams in, sometimes accompanied by a small textual summary. Appropriate for most straightforward queries.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Multi-Block Panel</h3>
              <p className="pattern-card__intro">
                Several coordinated blocks stream in at once, such as &quot;Summary KPIs&quot;, &quot;Segmented chart&quot;, and &quot;Detailed table&quot;. Each block has its own progress and completion state but shares global context.
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Block-Per-Iteration History</h3>
              <p className="pattern-card__intro">
                Each refinement or follow-up creates a new block while preserving previous generations. This facilitates comparison (e.g., &quot;before vs after applying budget constraints&quot;).
              </p>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Hybrid Streaming + Static Explanation</h3>
              <p className="pattern-card__intro">
                Structured results stream in, while a concise explanatory message is delivered once everything is complete, tying patterns or recommendations back to the visualized data.
              </p>
            </div>
          </div>
        </section>

        {/* Example Walkthrough */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Example walkthrough</p>
              <p className="pattern-body pattern-body--narrow">
                A step-by-step illustration of the pattern in action.
              </p>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">Scenario: Travel Planning Assistant in a B2C Web App</h3>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">1. User Request</p>
                <p className="pattern-card__intro">
                  A traveler enters: &quot;Find the cheapest nonstop flights from San Diego to New York next month, leaving on a Friday and returning on a Sunday. Prefer morning departures.&quot;
                </p>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">2. Initial Response</p>
                <p className="pattern-card__intro">
                  The AI acknowledges and displays a skeleton table labeled &quot;Nonstop flight options &middot; Draft&quot; with filter chips for Month, Departure window, Airlines, and Stops.
                </p>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">3. Streaming Results</p>
                <p className="pattern-card__intro">
                  Within seconds, the first 10 flight options appear with prices, departure times, airlines, and fare types, along with status: &quot;Searching across multiple providers... Showing initial results.&quot;
                </p>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">4. Interactive Use</p>
                <p className="pattern-card__intro">
                  Filters become active. The traveler narrows to a specific range of dates and price. The table updates interactively based on the partial set.
                </p>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">5. Additional Results</p>
                <p className="pattern-card__intro">
                  As additional providers return results, more rows stream into the same table, and a bar chart summarizing price distribution appears above it.
                </p>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">6. Completion</p>
                <p className="pattern-card__intro">
                  When all providers have responded, status updates to &quot;Complete &middot; 64 options found &middot; Last updated just now.&quot; The traveler selects one flight and continues into booking.
                </p>
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
                While implementation details vary by stack, several cross-cutting concerns apply.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Transport and Streaming Mechanisms</h3>
              <ul className="pattern-card__list">
                <li>Use streaming-capable protocols (HTTP streaming, Server-Sent Events, WebSockets) to deliver partial results without blocking.</li>
                <li>Define a unit of streaming (rows per chunk, card groups, chart data points) that balances responsiveness with overhead.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Chunking and Thresholds</h3>
              <ul className="pattern-card__list">
                <li>Establish a minimum viable chunk for each visualization type (e.g., at least 5 rows before showing a table) to avoid flicker.</li>
                <li>Consider backpressure to prevent overwhelming the client when results are very large.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">State Management</h3>
              <ul className="pattern-card__list">
                <li>Treat result blocks as stateful objects with explicit phases (loading, partial, complete, error).</li>
                <li>Ensure that refines, cancels, and retries create predictable transitions.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Latency and Fallbacks</h3>
              <ul className="pattern-card__list">
                <li>For very slow operations, offer alternatives such as emailed reports, background jobs, or saved searches.</li>
                <li>Provide clear timeouts and recovery paths rather than indefinite streaming states.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design Checklist */}
        <section className="pattern-section">
          <div className="pattern-section__header-row pattern-section__header-row--tight">
            <p className="pattern-kicker">Checklist</p>
          </div>
          <p className="pattern-body pattern-body--mb-md">
            Use this checklist when designing or reviewing Streaming Results (Visualizations):
          </p>
          <div className="pattern-checklist-group">
            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Layout & Structure</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>The experience reserves space for results before streaming begins, minimizing layout jumps.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Structured visualizations (tables, cards, charts) are used for collections instead of long text lists.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Progress & Status</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Status text clearly indicates what the AI is doing and how complete the current results are.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Partial results are visibly labeled, with counts or progress indicators where possible.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Completion is clearly indicated, and the view stabilizes once results are final.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Interactivity</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Users can interact with early results (filter, sort, select) while later data streams in.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Refinements and follow-ups either update the current block predictably or create clearly labeled new versions.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Error Handling</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Errors are localized to affected blocks, and partial results are preserved when safe.</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Accessibility & Trust</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>The pattern works with assistive technologies and respects reduced-motion preferences.</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>The provenance of the data (sources, filters, constraints) is visible or easily discoverable.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
