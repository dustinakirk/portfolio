import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import '../PatternPage.css';
import FeedbackLink from '../FeedbackLink';

// SEO metadata for this pattern page
export const KILL_SWITCH_SEO = {
  title: "Kill Switch, Pause & Resume - AI Trust Pattern",
  description: "A control pattern that gives users immediate, graduated control over long-running or autonomous AI agents through clear Pause, Resume, and Stop mechanisms.",
  keywords: ["AI kill switch", "pause resume AI", "AI agent control", "stop AI agent", "AI safety controls", "agentic UX", "AI trust patterns", "human oversight AI"],
  canonicalPath: "/agentic_ai_patterns/kill-switch-pause-resume"
};

// Demo Data
const DEMO_STEPS = [
  { title: "Analyze CRM Schema", desc: "Identified 4 active tables." },
  { title: "Scan for Duplicates", desc: "Found 123 potential duplicate sets." },
  { title: "Generate Merge Proposals", desc: "Creating merge logic for reviewed sets." },
  { title: "Apply Dry Run", desc: "Simulating merges in sandbox environment." },
  { title: "Finalize Report", desc: "Drafting summary email to admin." }
];

const GRACEFUL_DELAY = 1000;

// Inline Kill Switch Demo Component
function KillSwitchDemo() {
  const [currentState, setCurrentState] = useState('running');
  const [currentStepIndex] = useState(2); // Start at step 3 (index 2)
  const [isPauseDisabled, setIsPauseDisabled] = useState(false);
  const [isStopDisabled, setIsStopDisabled] = useState(false);
  const [pauseButtonText, setPauseButtonText] = useState('Pause');
  const [stopButtonText, setStopButtonText] = useState('Stop');

  const handlePause = () => {
    setCurrentState('pausing');
    setIsPauseDisabled(true);
    setPauseButtonText('Pausing...');

    setTimeout(() => {
      setCurrentState('paused');
      setIsPauseDisabled(false);
      setPauseButtonText('Pause');
    }, GRACEFUL_DELAY);
  };

  const handleResume = () => {
    setCurrentState('running');
  };

  const handleStop = () => {
    setCurrentState('stopping');
    setIsStopDisabled(true);
    setStopButtonText('Stopping...');

    setTimeout(() => {
      setCurrentState('stopped');
    }, GRACEFUL_DELAY);
  };

  const handleReset = () => {
    setCurrentState('running');
    setIsPauseDisabled(false);
    setIsStopDisabled(false);
    setPauseButtonText('Pause');
    setStopButtonText('Stop');
  };

  const getStatusBadgeClass = () => {
    const base = 'ks-demo__badge';
    switch (currentState) {
      case 'running': return `${base} ks-demo__badge--running`;
      case 'pausing': return `${base} ks-demo__badge--pausing`;
      case 'paused': return `${base} ks-demo__badge--paused`;
      case 'stopping': return `${base} ks-demo__badge--stopping`;
      case 'stopped': return `${base} ks-demo__badge--stopped`;
      default: return base;
    }
  };

  const getStatusText = () => {
    switch (currentState) {
      case 'running': return 'Running';
      case 'pausing': return 'Pausing...';
      case 'paused': return 'Paused';
      case 'stopping': return 'Stopping...';
      case 'stopped': return 'Stopped';
      default: return '';
    }
  };

  const getControlStatusText = () => {
    switch (currentState) {
      case 'running': return `Processing step ${currentStepIndex + 1} of ${DEMO_STEPS.length}...`;
      case 'pausing': return 'Finishing current operation...';
      case 'paused': return `Paused by user at step ${currentStepIndex + 1}`;
      case 'stopping': return 'Terminating run...';
      case 'stopped': return 'Run terminated by user.';
      default: return '';
    }
  };

  const getStepClass = (index) => {
    const base = 'ks-demo__step';
    if (currentState === 'stopped' && index === currentStepIndex) {
      return `${base} ks-demo__step--stopped`;
    }
    if (index < currentStepIndex) {
      return `${base} ks-demo__step--completed`;
    }
    if (index === currentStepIndex) {
      return `${base} ks-demo__step--active`;
    }
    return base;
  };

  const getStepIcon = (index) => {
    return <span style={{ fontWeight: 600 }}>{index + 1}</span>;
  };

  const getStepDesc = (index, originalDesc) => {
    if (currentState === 'stopped' && index === currentStepIndex) {
      return 'Terminated before completion.';
    }
    if (currentState === 'paused' && index === currentStepIndex) {
      return 'Paused - waiting to resume';
    }
    return originalDesc;
  };

  return (
    <>
      <style>{`
        .ks-demo {
          --ks-color-bg: #F4F5F7;
          --ks-color-surface: #FFFFFF;
          --ks-color-border: #DFE1E6;
          --ks-color-text-primary: #172B4D;
          --ks-color-text-secondary: #6B778C;
          --ks-color-primary: #0052CC;
          --ks-color-primary-hover: #0065FF;
          --ks-color-danger: #DE350B;
          --ks-color-danger-hover: #FF5630;
          --ks-color-success: #36B37E;
          --ks-color-neutral-btn: #EBECF0;
          --ks-radius-md: 6px;

          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background: var(--ks-color-surface);
          border: 1px solid var(--ks-color-border);
          border-radius: 12px;
          width: 100%;
          max-width: 640px;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          margin: 0 auto;
        }

        .ks-demo__header-showcase {
          padding: 24px;
          border-bottom: 1px solid var(--ks-color-border);
          background-color: #ffffff;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
        }

        .ks-demo__header-content {
          flex: 1;
        }

        .ks-demo__header-title {
          font-size: 18px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 8px 0;
          line-height: 1.2;
        }

        .ks-demo__header-desc {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.5;
          margin: 0;
        }

        .ks-demo__reset-btn {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          color: #374151;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
          white-space: nowrap;
          height: fit-content;
        }
        .ks-demo__reset-btn:hover {
          background: #f9fafb;
          border-color: #d1d5db;
          color: #111827;
        }

        .ks-demo__agent {
          display: flex;
          flex-direction: column;
          height: 420px;
        }

        .ks-demo__header {
          padding: 12px 16px;
          border-bottom: 1px solid var(--ks-color-border);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ks-demo__avatar {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #6678D9, #4C9AFF);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          flex-shrink: 0;
        }

        .ks-demo__meta {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ks-demo__name {
          font-weight: 600;
          font-size: 14px;
          margin: 0;
        }

        .ks-demo__badge {
          font-size: 11px;
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 600;
          display: inline-block;
        }

        .ks-demo__badge--running { background: #E3FCEF; color: #006644; }
        .ks-demo__badge--pausing { background: #FFF0B3; color: #B65C02; }
        .ks-demo__badge--paused { background: #FFFAE6; color: #FF991F; border: 1px solid #FFE380; }
        .ks-demo__badge--stopping { background: #FFEBE6; color: #BF2600; }
        .ks-demo__badge--stopped { background: #FFBDAD; color: #BF2600; }

        .ks-demo__body {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          background-color: #FAFBFC;
        }

        .ks-demo__step-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ks-demo__step {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
          opacity: 0.5;
          transition: opacity 0.3s ease;
          position: relative;
        }

        .ks-demo__step--active,
        .ks-demo__step--completed,
        .ks-demo__step--stopped {
          opacity: 1;
        }

        .ks-demo__step:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 11px;
          top: 24px;
          bottom: -16px;
          width: 2px;
          background-color: var(--ks-color-border);
          z-index: 1;
        }

        .ks-demo__step-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: white;
          border: 2px solid var(--ks-color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          flex-shrink: 0;
          z-index: 2;
          color: var(--ks-color-text-secondary);
        }

        .ks-demo__step--active .ks-demo__step-icon {
          border-color: var(--ks-color-primary);
          color: var(--ks-color-primary);
          box-shadow: 0 0 0 3px rgba(0, 82, 204, 0.1);
          animation: ks-pulse 2s infinite;
        }

        .ks-demo__step--completed .ks-demo__step-icon {
          background-color: var(--ks-color-success);
          border-color: var(--ks-color-success);
          color: white;
        }

        .ks-demo__step--stopped .ks-demo__step-icon {
          border-color: var(--ks-color-danger);
          color: var(--ks-color-danger);
        }

        .ks-demo__step-content {
          font-size: 13px;
          padding-top: 3px;
        }

        .ks-demo__step-title {
          font-weight: 500;
          color: var(--ks-color-text-primary);
        }

        .ks-demo__step-desc {
          font-size: 12px;
          color: var(--ks-color-text-secondary);
          margin-top: 2px;
        }

        .ks-demo__controls {
          padding: 12px 16px;
          border-top: 1px solid var(--ks-color-border);
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .ks-demo__status-text {
          font-size: 12px;
          color: var(--ks-color-text-secondary);
          font-weight: 500;
          flex: 1;
        }

        .ks-demo__control-group {
          display: flex;
          gap: 8px;
        }

        .ks-demo__btn {
          border: none;
          padding: 8px 16px;
          border-radius: var(--ks-radius-md);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s;
        }

        .ks-demo__btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .ks-demo__btn--primary {
          background-color: var(--ks-color-primary);
          color: white;
        }
        .ks-demo__btn--primary:hover:not(:disabled) { background-color: var(--ks-color-primary-hover); }

        .ks-demo__btn--secondary {
          background-color: var(--ks-color-surface);
          border: 1px solid var(--ks-color-border);
          color: var(--ks-color-text-primary);
        }
        .ks-demo__btn--secondary:hover:not(:disabled) { background-color: var(--ks-color-neutral-btn); }

        .ks-demo__btn--danger {
          background-color: white;
          border: 1px solid #FFEBE6;
          color: var(--ks-color-danger);
        }
        .ks-demo__btn--danger:hover:not(:disabled) {
          background-color: #FFEBE6;
          border-color: #FFBDAD;
        }

        @keyframes ks-pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 82, 204, 0.4); }
          70% { box-shadow: 0 0 0 6px rgba(0, 82, 204, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 82, 204, 0); }
        }
      `}</style>

      <div className="ks-demo">
        <header className="ks-demo__header-showcase">
          <div className="ks-demo__header-content">
            <h2 className="ks-demo__header-title">Kill Switch, Pause & Resume</h2>
            <p className="ks-demo__header-desc">
              Simulating a long-running AI agent. Try using Pause to intervene between steps, or Stop to halt immediately.
            </p>
          </div>
          <button className="ks-demo__reset-btn" onClick={handleReset}>
            Reset Demo
          </button>
        </header>

        <div className="ks-demo__agent">
          <div className="ks-demo__header">
            <div className="ks-demo__avatar">
              <i className="fa-solid fa-robot" />
            </div>
            <div className="ks-demo__meta">
              <h3 className="ks-demo__name">Data Hygiene Agent</h3>
              <div className={getStatusBadgeClass()}>{getStatusText()}</div>
            </div>
          </div>

          <div className="ks-demo__body">
            <ul className="ks-demo__step-list">
              {DEMO_STEPS.map((step, index) => (
                <li key={index} className={getStepClass(index)}>
                  <div className="ks-demo__step-icon">
                    {getStepIcon(index)}
                  </div>
                  <div className="ks-demo__step-content">
                    <div className="ks-demo__step-title">{step.title}</div>
                    <div className="ks-demo__step-desc">{getStepDesc(index, step.desc)}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="ks-demo__controls">
            <span className="ks-demo__status-text">{getControlStatusText()}</span>

            {(currentState === 'running' || currentState === 'pausing' || currentState === 'stopping') && (
              <div className="ks-demo__control-group">
                <button
                  className="ks-demo__btn ks-demo__btn--secondary"
                  onClick={handlePause}
                  disabled={isPauseDisabled || currentState === 'stopping'}
                >
                  {currentState === 'pausing' ? (
                    <><i className="fa-solid fa-spinner fa-spin" /> {pauseButtonText}</>
                  ) : (
                    <><i className="fa-solid fa-pause" /> {pauseButtonText}</>
                  )}
                </button>
                <button
                  className="ks-demo__btn ks-demo__btn--danger"
                  onClick={handleStop}
                  disabled={isStopDisabled}
                >
                  {currentState === 'stopping' ? (
                    <><i className="fa-solid fa-spinner fa-spin" /> {stopButtonText}</>
                  ) : (
                    <><i className="fa-solid fa-stop" /> {stopButtonText}</>
                  )}
                </button>
              </div>
            )}

            {currentState === 'paused' && (
              <div className="ks-demo__control-group">
                <button className="ks-demo__btn ks-demo__btn--primary" onClick={handleResume}>
                  <i className="fa-solid fa-play" /> Resume
                </button>
                <button className="ks-demo__btn ks-demo__btn--danger" onClick={handleStop}>
                  <i className="fa-solid fa-stop" /> Stop
                </button>
              </div>
            )}

            {currentState === 'stopped' && (
              <div className="ks-demo__control-group">
                <button className="ks-demo__btn ks-demo__btn--secondary" disabled>
                  Run Ended
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default function KillSwitchPauseResumePattern() {
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
            <span className="pattern-header__index">3.1</span>
            <div>
              <h1 className="pattern-header__title">Kill Switch, Pause & Resume</h1>
              <p className="pattern-header__subtitle">
                A control pattern that gives users immediate, graduated control over long-running or autonomous AI agents through clear Pause, Resume, and Stop mechanisms.
              </p>
            </div>
          </div>
          <div className="pattern-header__meta">
            <span className="pattern-header__timestamp">Last updated December 2025</span>
            <FeedbackLink patternIndex="3.1" patternTitle="Kill Switch, Pause & Resume" />
          </div>
        </div>
      </header>

      <main className="pattern-main">
        {/* Intro / Overview */}
        <section className="pattern-section pattern-section--intro">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Overview</p>
            <p className="pattern-hero">
              Agentic AI systems increasingly run long-lived, multi-step workflows that reach into production systems, developer tools, financial accounts, and third-party APIs. This pattern introduces a dedicated set of controls&mdash;Pause, Resume/Continue, and Stop/Cancel&mdash;so that users can confidently start powerful automations knowing they can always slow, adjust, or terminate execution.
            </p>
            <p className="pattern-body">
              In a typical web application, this pattern appears in or near an AI agent&apos;s chat interface, task detail view, or run history. It anchors trust by making control <span className="pattern-body--bold">visible, persistent, and reversible</span> rather than implicit or hidden behind technical tools or administrator actions.
            </p>
            <p className="pattern-body">
              The pattern is particularly important in B2B/B2C web applications where agents touch production data, execute multi-step workflows, or run asynchronously in the background&mdash;scenarios where the cost of runaway execution can be significant.
            </p>
          </div>
          <div className="pattern-section__image">
            <img
              src="/agentic/pattern_images/3.1 kill switch.png"
              alt="Kill Switch, Pause & Resume pattern illustration"
            />
          </div>
        </section>

        {/* Kill Switch Demo Example */}
        <section aria-label="Kill switch example">
          <KillSwitchDemo />
        </section>

        {/* Problem & When to Use */}
        <section className="pattern-section pattern-section--two-column">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Problem</p>
            <p className="pattern-body">
              Without explicit kill, pause, and resume controls, long-running or autonomous agents create several trust and safety issues:
            </p>
            <ul className="pattern-list">
              <li>
                <span className="pattern-body--bold">Loss of perceived control</span> &ndash; When an agent keeps taking actions (sending emails, changing records, modifying configs) without a clear way to intervene, users feel locked out of their own systems and hesitate to delegate important work.
              </li>
              <li>
                <span className="pattern-body--bold">Fear of runaway damage and cost</span> &ndash; A misconfigured prompt, wrong environment, or mis-scoped task can lead to large-scale destructive changes, data exposure, or unbounded spend if there is no reliable way to halt execution.
              </li>
              <li>
                <span className="pattern-body--bold">Inability to inspect and correct mid-execution</span> &ndash; Binary &quot;run or don&apos;t run&quot; workflows force users to choose between over-trusting the agent or aborting entirely. Without a pause-and-inspect option, teams cannot safely &quot;ride along&quot; and adjust plans as reality unfolds.
              </li>
              <li>
                <span className="pattern-body--bold">Operational risk and regulatory concerns</span> &ndash; Compliance, security, and operations teams need provable mechanisms to immediately stop or quarantine agent activity in case of incident, misalignment, or misuse&mdash;not just polite requests to the model.
              </li>
            </ul>
            <p className="pattern-body">
              A well-designed kill switch and pause/resume pattern addresses these concerns by treating control as a first-class feature, not an afterthought.
            </p>
          </div>

          <aside className="pattern-section__aside">
            <div className="pattern-card pattern-card--secondary">
              <h3 className="pattern-card__title pattern-card__title--with-icon">
                <CheckCircle size={16} className="pattern-icon--success" />
                Use this pattern when&hellip;
              </h3>
              <ul className="pattern-card__list">
                <li>
                  <span className="pattern-body--bold">The agent executes multi-step or long-running workflows</span> &ndash; code refactoring across many files, multi-stage data pipelines, campaign creation and launch, incident remediation, or bulk record updates.
                </li>
                <li>
                  <span className="pattern-body--bold">The agent has side effects on critical systems or data</span> &ndash; production APIs, payment systems, HR or legal data, infrastructure, security policies, customer communications.
                </li>
                <li>
                  <span className="pattern-body--bold">The agent runs asynchronously or in the background</span> &ndash; scheduled or recurring automations, &quot;fire-and-forget&quot; jobs, agents that continue acting after the user leaves the page or logs out.
                </li>
                <li>
                  <span className="pattern-body--bold">The agent acts with partial autonomy</span> &ndash; agents allowed to create tasks, call tools, or chain actions without step-by-step approvals.
                </li>
              </ul>
              <hr className="pattern-divider" />
              <h3 className="pattern-card__title pattern-card__title--muted pattern-card__title--with-icon">
                <XCircle size={16} className="pattern-icon--danger" />
                Probably overkill when&hellip;
              </h3>
              <ul className="pattern-card__list pattern-card__list--muted">
                <li>The agent <span className="pattern-body--bold">only provides short, stateless responses</span>&mdash;simple Q&A, short completions, or &quot;suggested reply&quot; generation that does not call tools or modify systems.</li>
                <li>The agent <span className="pattern-body--bold">operates in a read-only sandbox</span> with no persistent effects&mdash;view-only analysis or summarization over non-sensitive data.</li>
                <li>The agent <span className="pattern-body--bold">completes in well under a second</span>&mdash;single, atomic actions with trivial impact where a browser refresh or &quot;Stop generating&quot; streaming control already provides adequate interruption.</li>
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
                The Kill Switch, Pause & Resume pattern centers on a visible control cluster associated with a specific agent <em>run</em> or <em>session</em>, backed by robust state handling and auditability.
              </p>
            </div>
          </div>

          {/* Entry Points */}
          <div className="pattern-grid pattern-grid--two pattern-grid--mt-md">
            <div className="pattern-card">
              <h3 className="pattern-card__title pattern-card__title--icon">
                <span className="pattern-card__dot" />
                Primary: Agent Surface
              </h3>
              <p className="pattern-card__intro">
                A persistent control strip near the chat input, plan header, or run status bar within the agent&apos;s main workspace.
              </p>
              <ul className="pattern-card__list">
                <li>This is where most users expect control</li>
                <li>Any running task should be clearly indicated</li>
                <li>Controls remain visible while agent is active</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Secondary: Run or Job List</h3>
              <p className="pattern-card__intro">
                List views of current and historical runs (e.g., &quot;Active automations&quot;, &quot;Recent jobs&quot;).
              </p>
              <ul className="pattern-card__list">
                <li>Inline controls to Pause or Stop individual runs</li>
                <li>No need to open full detail view</li>
                <li>Batch actions for multiple runs</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Contextual: Notifications & Banners</h3>
              <p className="pattern-card__intro">
                Toasts, banners, or in-product notifications that appear when an agent starts or continues work.
              </p>
              <ul className="pattern-card__list">
                <li>&quot;Data hygiene agent is updating 2,341 records&quot;</li>
                <li>Inline [Pause] and [Stop] actions</li>
                <li>Link to full run detail view</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Administrative: Global Kill Switches</h3>
              <p className="pattern-card__intro">
                Emergency controls in admin/governance tooling.
              </p>
              <ul className="pattern-card__list">
                <li>Agent-level: Disable entire agent, preventing new runs</li>
                <li>Tenant-level: Revoke credentials, block requests, stop all runs</li>
                <li>Clear scope communication to avoid confusion</li>
              </ul>
            </div>
          </div>

          {/* Core Item / Object */}
          <div className="pattern-card pattern-grid--mt-md">
            <h3 className="pattern-card__title">Core Item: Agent Run</h3>
            <p className="pattern-card__intro">
              The primary object in this pattern is the Agent Run (sometimes called a job, workflow, or session). Each run should have:
            </p>
            <div className="pattern-grid--auto-fit pattern-grid--mt-sm">
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Label & Description</p>
                <ul className="pattern-card__list">
                  <li>Human-readable, specific description</li>
                  <li>&quot;Refactor API module&quot;, &quot;Clean up CRM duplicates &ndash; Run #12&quot;</li>
                  <li>Progress status: &quot;Step 3 of 7 &ndash; Updating 123 customer records&quot;</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Controls</p>
                <ul className="pattern-card__list">
                  <li><span className="pattern-body--bold">Pause</span> &ndash; Graceful halt after current atomic step</li>
                  <li><span className="pattern-body--bold">Resume / Continue</span> &ndash; Continue from last checkpoint</li>
                  <li><span className="pattern-body--bold">Stop / Cancel</span> &ndash; Terminate run, finalize state</li>
                  <li>Optional: Undo last batch, Open diff, Run in sandbox</li>
                </ul>
              </div>
              <div>
                <p className="pattern-body--bold pattern-body--mb-sm">Metadata</p>
                <ul className="pattern-card__list">
                  <li>Start time, elapsed time, estimated time remaining</li>
                  <li>Environment (sandbox, staging, production)</li>
                  <li>Initiator (person, team, or system trigger)</li>
                  <li>Cost so far and configured limits</li>
                  <li>Run ID or link for audit/observability</li>
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
                The pattern defines a clear state machine for agent runs, with specific behaviors at each stage.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">1. Pre-Run: Plan & Arm</h3>
              <ul className="pattern-card__list">
                <li>Agent proposes a plan or receives a command implying multi-step work.</li>
                <li>UI presents summary of plan, scope, and environment.</li>
                <li>Controls visible but initially disabled except for Start.</li>
                <li>For high-risk runs, confirmation step shows affected scope and limits.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">2. Running: Active Execution</h3>
              <ul className="pattern-card__list">
                <li>Status indicators show <span className="pattern-body--bold">Running</span> state with activity signals.</li>
                <li>Pause and Stop buttons become prominent and remain visible.</li>
                <li>Textual indicator explains what is currently happening.</li>
                <li>Pause/stop commands treated as high-priority signals.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">3. Pause: Graceful Interruption</h3>
              <ul className="pattern-card__list">
                <li>Agent finishes current atomic operation.</li>
                <li>No new steps or tool calls started.</li>
                <li>Transitions through <span className="pattern-body--bold">Pausing&hellip;</span> to <span className="pattern-body--bold">Paused</span>.</li>
                <li>Shows &quot;Paused by [actor] at [time]&quot;.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">4. Paused: Inspection State</h3>
              <ul className="pattern-card__list">
                <li>Snapshot summary: steps completed vs planned, key changes applied.</li>
                <li>Plan for remaining steps may be editable.</li>
                <li>Adjust scope, change execution options, add constraints.</li>
                <li>Controls: Resume (primary), Stop (secondary).</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">5. Resume: Continue from Checkpoint</h3>
              <ul className="pattern-card__list">
                <li>System revalidates edited plan parameters and environment.</li>
                <li>Brief confirmation for high-risk changes.</li>
                <li>Transitions to <span className="pattern-body--bold">Resuming&hellip;</span> then <span className="pattern-body--bold">Running</span>.</li>
                <li>Does not re-execute previously completed steps.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">6. Stop / Cancel: Termination</h3>
              <ul className="pattern-card__list">
                <li>Stops initiating new steps immediately.</li>
                <li>Attempts to interrupt in-flight tool calls at safe boundary.</li>
                <li>Transitions through <span className="pattern-body--bold">Stopping&hellip;</span> to <span className="pattern-body--bold">Stopped</span>.</li>
                <li>Shows post-mortem summary and rollback options.</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-grid--mt-sm">
            <h3 className="pattern-card__title">7. Post-Run: Logs, Audits & Learning</h3>
            <ul className="pattern-card__list">
              <li>Run accessible from history/runs list with full timeline of state changes.</li>
              <li>Captures responsible actor for each state change and detailed logs.</li>
              <li>Enables reusable run configurations: &quot;Re-run with same parameters in sandbox&quot;.</li>
              <li>Incident and analytics tools leverage history to improve safeguards over time.</li>
            </ul>
          </div>
        </section>

        {/* States & Status Model */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">States & status model</p>
              <p className="pattern-body pattern-body--narrow">
                A clear state model helps implementation and UX stay aligned. Use concise, unambiguous labels consistent across product surfaces.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Primary States</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Not started</span> &ndash; Plan created, no actions taken</li>
                <li><span className="pattern-body--bold">Queued</span> &ndash; Waiting on capacity, approvals, or scheduling</li>
                <li><span className="pattern-body--bold">Running</span> &ndash; Actively executing steps and tool calls</li>
                <li><span className="pattern-body--bold">Paused</span> &ndash; Execution halted; state preserved</li>
                <li><span className="pattern-body--bold">Stopped / Canceled</span> &ndash; Terminated before completing</li>
                <li><span className="pattern-body--bold">Completed</span> &ndash; Finished all planned steps</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Transitional & Error States</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Pausing</span> &ndash; Pause requested; finishing current operation</li>
                <li><span className="pattern-body--bold">Resuming</span> &ndash; Resumption requested; re-establishing context</li>
                <li><span className="pattern-body--bold">Stopping</span> &ndash; Stop requested; terminating active operations</li>
                <li><span className="pattern-body--bold">Errored / Failed</span> &ndash; Stopped by errors; may be recoverable</li>
                <li><span className="pattern-body--bold">Rolled back</span> &ndash; Completed or stopped, then reverted</li>
              </ul>
            </div>
          </div>

          <div className="pattern-card pattern-card--secondary pattern-grid--mt-sm">
            <h3 className="pattern-card__title">UI Guidelines for States</h3>
            <ul className="pattern-card__list">
              <li>Display cause where relevant: &quot;Paused by user&quot;, &quot;Stopped by policy&quot;, &quot;Stopped by system error&quot;</li>
              <li>Avoid visually confusable states without clear textual distinction</li>
              <li>Use consistent status colors/icons across all surfaces</li>
            </ul>
          </div>
        </section>

        {/* Content Guidelines */}
        <section className="pattern-section">
          <div className="pattern-section__content">
            <p className="pattern-kicker">Content & microcopy guidelines</p>
            <p className="pattern-body">
              Good microcopy is critical to maintaining trust and avoiding panic during interventions.
            </p>

            <div className="pattern-example-group">
              <div className="pattern-example pattern-example--good">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Good microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--do">Do</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Pausing after current batch of 500 records.&quot;</li>
                  <li>&quot;Paused at step 4 of 9: Drafted emails, not yet sent.&quot;</li>
                  <li>&quot;Stopped before applying config changes to production.&quot;</li>
                  <li>&quot;Continuing with reduced scope: only accounts in region &apos;EMEA&apos;.&quot;</li>
                </ul>
              </div>

              <div className="pattern-example pattern-example--bad">
                <div className="pattern-example__header">
                  <span className="pattern-example__label">Weak microcopy</span>
                  <span className="pattern-example__badge pattern-example__badge--avoid">Avoid</span>
                </div>
                <ul className="pattern-example__list">
                  <li>&quot;Chill&quot;, &quot;Nuke&quot;, or &quot;Freeze&quot; as control labels</li>
                  <li>&quot;Something went wrong&quot; without specifics</li>
                  <li>&quot;Working&hellip;&quot; without explaining what is happening</li>
                  <li>Ambiguous labels that don&apos;t communicate actual behavior</li>
                </ul>
              </div>
            </div>

            <div className="pattern-grid--auto-fit pattern-grid--mt-md">
              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Control Labels</h3>
                <ul className="pattern-card__list">
                  <li>Prefer <span className="pattern-body--bold">Pause</span>, <span className="pattern-body--bold">Resume</span>, <span className="pattern-body--bold">Stop</span>, <span className="pattern-body--bold">Cancel</span></li>
                  <li>Avoid bespoke or overly clever verbs in B2B contexts</li>
                  <li>Keep labels consistent across all surfaces</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Status Messaging</h3>
                <ul className="pattern-card__list">
                  <li>Pair each state with a short, explicit description</li>
                  <li>Distinguish system-initiated vs human-initiated actions</li>
                  <li>&quot;Stopped by fraud detection policy&quot; vs &quot;Stopped by Marketing Team&quot;</li>
                </ul>
              </div>

              <div className="pattern-card pattern-card--secondary">
                <h3 className="pattern-card__title">Confirmation Dialogs</h3>
                <ul className="pattern-card__list">
                  <li>For Stop/Cancel, focus on consequences</li>
                  <li>Show scope of completed changes and rollback availability</li>
                  <li>For Resume after edits, summarize deltas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Interaction & Visual Details */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Interaction & visual design</p>
              <p className="pattern-body pattern-body--narrow">
                Design considerations for implementing the pattern across different contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Persistent Controls</h3>
              <ul className="pattern-card__list">
                <li>Keep Pause/Stop visible while agent is active</li>
                <li>Even when user scrolls through long logs or diff views</li>
                <li>Dock controls in sticky footer or header</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Hierarchy & Emphasis</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Running:</span> Emphasize Pause and Stop</li>
                <li><span className="pattern-body--bold">Paused:</span> Emphasize Resume; keep Stop available</li>
                <li><span className="pattern-body--bold">Stopped:</span> Demote controls; emphasize logs/rollback</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Risk Communication</h3>
              <ul className="pattern-card__list">
                <li>Visual distinction (icon + color) for Stop/Cancel</li>
                <li>Avoid overusing &quot;danger&quot; styling for non-destructive actions</li>
                <li>Pause is not destructive; don&apos;t style it like Stop</li>
              </ul>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Cross-Surface Consistency</h3>
              <ul className="pattern-card__list">
                <li>Same run should show consistent state in chat, detail page, and admin console</li>
                <li>Admin-level kill switches should visually signal broader scope</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Accessibility</h3>
              <ul className="pattern-card__list">
                <li>All controls keyboard-navigable and screen-reader friendly</li>
                <li>Textual equivalents for status icons or colors</li>
                <li>&quot;Paused, not running&quot; instead of relying on color alone</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Variations & Extensions */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Variations & extensions</p>
              <p className="pattern-body pattern-body--narrow">
                Different levels and types of control depending on context and risk.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Levels of Kill Switch</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Local run control:</span> Single run or session</li>
                <li><span className="pattern-body--bold">Agent-level:</span> Disable entire agent, prevent new runs</li>
                <li><span className="pattern-body--bold">Global/tenant:</span> Revoke credentials, block requests, stop all runs</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Soft vs Hard Stop</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Soft Stop:</span> Complete current step, flush writes, stable state</li>
                <li><span className="pattern-body--bold">Hard Stop:</span> Immediately cancel, may leave partial state</li>
                <li>Usually reserved for high-severity incidents</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Automatic Triggers</h3>
              <ul className="pattern-card__list">
                <li>Spend or token limits</li>
                <li>Anomaly detection (error spikes, unusual patterns)</li>
                <li>Policy violations, timeouts, or SLA breaches</li>
                <li>Treat as first-class events in UI</li>
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
                Handle these potential issues and avoid these common mistakes.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Edge Cases to Handle</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Pause during long atomic operation:</span> Communicate pausing will occur after current operation completes.</li>
                <li><span className="pattern-body--bold">Failed pause or stop:</span> Clearly state run is still active; show retry or fallback options.</li>
                <li><span className="pattern-body--bold">UI disconnect from backend:</span> On reconnection, reconcile and display authoritative state.</li>
                <li><span className="pattern-body--bold">Inconsistent state between tools:</span> Report partial completion honestly, not false &quot;Stopped everywhere&quot;.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Technical Considerations</h3>
              <ul className="pattern-card__list">
                <li><span className="pattern-body--bold">Atomic steps and checkpointing:</span> Design workflows as small, resumable steps.</li>
                <li><span className="pattern-body--bold">Durable state:</span> Persist in storage, not just model memory.</li>
                <li><span className="pattern-body--bold">Credential management:</span> Wire stop/kill to credential revocation paths.</li>
                <li><span className="pattern-body--bold">Idempotent commands:</span> Pause/Stop should be retriable.</li>
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
                  <h3 className="antipattern-title">Hidden Controls</h3>
                  <p className="antipattern-subtitle">Pause/Stop buried in overflow menus during active runs.</p>
                </div>
              </div>
              <p className="antipattern-description">
                When critical controls are hidden, users cannot respond quickly to problems or unexpected behavior.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Keep Pause/Stop prominently visible in a persistent control strip while the agent is active.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Stream-Only Stop</h3>
                  <p className="antipattern-subtitle">&quot;Stop generating&quot; only stops text streaming, not underlying actions.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Users believe they have stopped the agent, but tool calls and side effects continue in the background.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Stop must halt all agent activity including tool calls, API requests, and scheduled actions.</span>
              </div>
            </div>

            <div className="antipattern-card">
              <div className="antipattern-header">
                <div className="antipattern-icon">
                  <AlertCircle size={18} />
                </div>
                <div className="antipattern-header-text">
                  <span className="antipattern-label">Anti-Pattern</span>
                  <h3 className="antipattern-title">Lost Audit Trail</h3>
                  <p className="antipattern-subtitle">Clearing logs or diffs when a run is stopped.</p>
                </div>
              </div>
              <p className="antipattern-description">
                Without logs, teams cannot audit what happened, repair issues, or learn from incidents.
              </p>
              <div className="antipattern-alternative">
                <span className="antipattern-alternative-label">Better</span>
                <span className="antipattern-alternative-text">Preserve complete logs and state changes regardless of how a run ends.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical & Governance Considerations */}
        <section className="pattern-section">
          <div className="pattern-section__header-row">
            <div>
              <p className="pattern-kicker">Technical & governance considerations</p>
              <p className="pattern-body pattern-body--narrow">
                While this pattern is primarily UX, effective implementation depends on several architectural choices.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--two pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Atomic Steps & Checkpointing</h3>
              <ul className="pattern-card__list">
                <li>Design workflows as sequences of small, atomic steps that can be safely completed, paused, and resumed.</li>
                <li>Persist state in durable storage (not just in model memory) so runs can be resumed after failures or restarts.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Structured Telemetry & Audit Logs</h3>
              <ul className="pattern-card__list">
                <li>Capture each state change, tool call, and control action with actor, timestamp, and context.</li>
                <li>Store logs in a way that supports audits, incident investigations, and analytics.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Credential & Permission Management</h3>
              <ul className="pattern-card__list">
                <li>Wire stop/kill switches into credential revocation paths (API keys, OAuth tokens, ephemeral role credentials).</li>
                <li>Align pause/stop behaviors with role-based access control (RBAC) so only appropriate roles can stop or modify certain runs.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Guardrails Integration</h3>
              <ul className="pattern-card__list">
                <li>Connect guardrail services (content filters, anomaly detection, cost monitors) to the same control plane that handles Pause/Stop.</li>
                <li>Distinguish in logs whether a human or a guardrail triggered a stop event.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">Resilience & Reliability</h3>
              <ul className="pattern-card__list">
                <li>Ensure that issuing a Pause/Stop command is idempotent and retriable.</li>
                <li>Test kill switch behaviors regularly (as part of chaos engineering or incident response drills).</li>
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
                How the pattern applies in different B2B and B2C contexts.
              </p>
            </div>
          </div>

          <div className="pattern-grid pattern-grid--three pattern-grid--mt-sm">
            <div className="pattern-card">
              <h3 className="pattern-card__title">Code Refactoring Agent</h3>
              <p className="pattern-card__intro">Developer Tools</p>
              <ul className="pattern-card__list">
                <li>Developer starts agent to refactor legacy API module across dozens of services.</li>
                <li>Observes early diffs, hits <span className="pattern-body--bold">Pause</span>.</li>
                <li>Agent finishes current file, shows &quot;Paused at step 2 of 5 &ndash; 3 PRs opened&quot;.</li>
                <li>Developer narrows scope and hits <span className="pattern-body--bold">Resume</span>.</li>
                <li>Later, failing test appears; developer hits <span className="pattern-body--bold">Stop</span> and uses &quot;Undo last batch&quot;.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">CRM Cleanup Agent</h3>
              <p className="pattern-card__intro">Revenue Operations</p>
              <ul className="pattern-card__list">
                <li>RevOps manager runs &quot;Data Hygiene Agent&quot; to merge duplicate accounts.</li>
                <li>After ten minutes, auto-generated notes appear too aggressive.</li>
                <li>Manager <span className="pattern-body--bold">pauses</span>, adjusts settings, <span className="pattern-body--bold">resumes</span>.</li>
                <li>Anomaly detector flags spike in merges for a region.</li>
                <li>System automatically <span className="pattern-body--bold">stops</span> the run and surfaces an alert.</li>
              </ul>
            </div>

            <div className="pattern-card">
              <h3 className="pattern-card__title">DevOps Remediation Agent</h3>
              <p className="pattern-card__intro">Observability Platform</p>
              <ul className="pattern-card__list">
                <li>Agent detects incident and starts remediation: scaling services, toggling flags.</li>
                <li>On-call engineers see run in &quot;Live Remediations&quot; dashboard.</li>
                <li>Risky change proposed (DB schema adjustment); agent <span className="pattern-body--bold">pauses itself</span>.</li>
                <li>Team reviews, decides to <span className="pattern-body--bold">stop</span> the run and handle manually.</li>
                <li>Logs used to annotate incident timeline.</li>
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
              <p className="pattern-checklist-category__title">Control Visibility</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are Pause and Stop controls always visible while a run is active?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are labels and icons consistent across all surfaces?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can users clearly distinguish Pause, Resume, and Stop and understand scope?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">State Handling</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do runs have well-defined states (Running, Paused, Stopped, Completed, etc.)?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are transitions (Pausing, Stopping) represented and explained?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Is state resilient across reloads, reconnects, and client changes?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">User Experience</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does pausing show what has been done and what remains?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does stopping show consequences and, where possible, rollback options?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are automatic guardrail-triggered stops clearly explained in the UI?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Governance & Safety</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Can appropriate roles pause/stop runs; are sensitive controls protected?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do logs and audits capture who initiated each state change and why?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Do global or agent-level kill switches exist for high-risk contexts?</span>
                </li>
              </ul>
            </div>

            <div className="pattern-checklist-category">
              <p className="pattern-checklist-category__title">Implementation</p>
              <ul className="pattern-checklist pattern-checklist--single-column">
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are workflows decomposed into atomic, resumable steps with checkpoints?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Does the backend support reliable interruption of tool calls and workflows?</span>
                </li>
                <li className="pattern-checklist__item">
                  <CheckCircle size={14} className="pattern-checklist__icon" />
                  <span>Are kill switch behaviors tested regularly in staging or via drills?</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
