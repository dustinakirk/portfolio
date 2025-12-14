import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  User,
  Bot,
  CheckCircle2,
  Loader2,
  Circle,
  ChevronRight,
  X,
  Activity,
  Terminal,
  Send,
  Check
} from 'lucide-react';
import './ReasoningGlimpseDemo.css';

// Data for the summary view (Inline Glimpse)
const summarySteps = [
  { id: 1, label: 'Parse request context', detail: 'Identified GDPR, CCPA requirements', status: 'completed' },
  { id: 2, label: 'Retrieve pricing documents', detail: 'Found 3 relevant files', status: 'completed' },
  { id: 3, label: 'Scan against privacy policy', detail: 'Analyzing policy_2024_rev3.pdf...', status: 'active' },
  { id: 4, label: 'Evaluate compliance gaps', detail: 'Pending analysis results', status: 'pending' }
];

// Data for the detailed view (Side Panel)
const timelineEvents = [
  {
    type: 'thought',
    content: 'User is asking for a compliance check. I need to understand which specific frameworks apply based on the text.'
  },
  {
    type: 'action',
    title: 'Request Received',
    time: '10:23:02',
    desc: "User Prompt: 'Assess whether our new Pricing Page copy is compliant with GDPR and CCPA regulations.'",
    tool: null,
    status: 'completed'
  },
  {
    type: 'thought',
    content: "The prompt explicitly mentions 'GDPR' and 'CCPA'. I should route this to the Legal/Compliance classifier."
  },
  {
    type: 'thought',
    content: "I also need to extract entities to ensure I'm checking the correct page assets."
  },
  {
    type: 'action',
    title: 'Intent Classification',
    time: '10:23:03',
    desc: "Classified as Legal/Compliance Review. Extracted entities: 'Pricing Page', 'GDPR', 'CCPA'.",
    tool: 'classifier_v4',
    status: 'completed'
  },
  {
    type: 'thought',
    content: "I have the intent. Now I need to retrieve the actual content for the 'Pricing Page' from the knowledge base."
  },
  {
    type: 'action',
    title: 'Document Retrieval',
    time: '10:23:05',
    desc: "Searching knowledge base for 'Pricing Page' drafts and assets.",
    tool: 'doc_search_api',
    status: 'completed'
  },
  {
    type: 'thought',
    content: 'Search returned multiple hits. The HTML file seems most relevant for copy analysis.'
  },
  {
    type: 'action',
    title: 'Context Loaded',
    time: '10:23:07',
    desc: 'Successfully retrieved pricing_v2.html and pricing_assets.json.',
    tool: null,
    status: 'completed'
  },
  {
    type: 'thought',
    content: "Artifacts loaded. Now I must cross-reference them against the company's privacy policy, specifically looking for consent checkboxes (Article 7) and CCPA Opt-out links."
  },
  {
    type: 'action',
    title: 'Policy Comparison',
    time: '10:23:09',
    desc: 'Cross-referencing pricing copy against policy_2024_rev3.pdf. Checking Article 7 (Consent) and CCPA Opt-out requirements.',
    tool: 'compliance_engine',
    status: 'active'
  }
];

// Step Icon component
function StepIcon({ status }) {
  if (status === 'completed') {
    return (
      <div className="rgd-glimpse__step-icon rgd-glimpse__step-icon--completed">
        <CheckCircle2 size={14} />
      </div>
    );
  }
  if (status === 'active') {
    return (
      <div className="rgd-glimpse__step-icon rgd-glimpse__step-icon--active">
        <Loader2 size={14} />
      </div>
    );
  }
  return (
    <div className="rgd-glimpse__step-icon rgd-glimpse__step-icon--pending">
      <Circle size={14} />
    </div>
  );
}

// Timeline Dot component
function TimelineDot({ status }) {
  if (status === 'completed') {
    return (
      <div className="rgd-timeline-dot rgd-timeline-dot--completed">
        <Check size={10} />
      </div>
    );
  }
  if (status === 'active') {
    return <div className="rgd-timeline-dot rgd-timeline-dot--active" />;
  }
  return <div className="rgd-timeline-dot" />;
}

// Timeline Item component
function TimelineItem({ event }) {
  if (event.type === 'thought') {
    return (
      <div className="rgd-timeline-item">
        <div className="rgd-timeline-thought">
          <p className="rgd-timeline-thought__text">{event.content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rgd-timeline-item">
      <TimelineDot status={event.status} />
      <div className="rgd-timeline-action">
        <div className="rgd-timeline-action__header">
          <h4 className="rgd-timeline-action__title">{event.title}</h4>
          <span className="rgd-timeline-action__time">{event.time}</span>
        </div>
        <div className="rgd-timeline-action__body">
          <p className="rgd-timeline-action__desc">{event.desc}</p>
          {event.tool && (
            <div className="rgd-timeline-action__tool">
              <Terminal size={12} />
              {event.tool}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ReasoningGlimpseDemo() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [key, setKey] = useState(0);
  const panelContentRef = useRef(null);

  // Scroll panel to bottom when it opens
  useEffect(() => {
    if (isPanelOpen && panelContentRef.current) {
      // Small delay to allow panel animation to start
      setTimeout(() => {
        panelContentRef.current.scrollTop = panelContentRef.current.scrollHeight;
      }, 50);
    }
  }, [isPanelOpen]);

  const togglePanel = useCallback(() => {
    setIsPanelOpen(prev => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setIsPanelOpen(false);
    // Force re-render with animation by changing key
    setKey(prev => prev + 1);
  }, []);

  return (
    <div className="rgd-demo" key={key}>
      {/* Header */}
      <header className="pattern-demo__header">
        <h2 className="pattern-demo__title">Interactive Demo</h2>
        <button className="pattern-demo__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      {/* Chat Area */}
      <div className="rgd-chat">
        {/* Scrollable messages container */}
        <div className="rgd-chat__messages">
          {/* User Message */}
          <div className="rgd-message rgd-message--user">
            <div className="rgd-avatar rgd-avatar--user">
              <User size={18} />
            </div>
            <div className="rgd-message__content">
              <div className="rgd-message__bubble">
                Assess whether our new Pricing Page copy is compliant with GDPR and CCPA regulations.
              </div>
              <div className="rgd-message__meta">10:23 AM</div>
            </div>
          </div>

          {/* AI Message with Reasoning Glimpse */}
          <div className="rgd-message rgd-message--ai">
            <div className="rgd-avatar rgd-avatar--ai">
              <Bot size={18} />
            </div>
            <div className="rgd-message__content">
              {/* The Reasoning Glimpse Component */}
              <div className="rgd-glimpse">
                <div className="rgd-glimpse__header">
                  <div className="rgd-glimpse__status">
                    <div className="rgd-glimpse__pulse" />
                    <span>Processing request...</span>
                  </div>
                  <button className="rgd-glimpse__trigger" onClick={togglePanel}>
                    View Activity Timeline
                    <ChevronRight size={14} />
                  </button>
                </div>
                <div className="rgd-glimpse__body">
                  {summarySteps.map(step => (
                    <div
                      key={step.id}
                      className={`rgd-glimpse__step ${step.status === 'active' ? 'rgd-glimpse__step--active' : ''}`}
                    >
                      <StepIcon status={step.status} />
                      <div className="rgd-glimpse__step-content">
                        <div className="rgd-glimpse__step-label">{step.label}</div>
                        <div className="rgd-glimpse__step-detail">{step.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rgd-message__meta">10:23 AM</div>
            </div>
          </div>
        </div>

        {/* Side Panel Overlay */}
        <div
          className={`rgd-panel-overlay ${isPanelOpen ? 'rgd-panel-overlay--open' : ''}`}
          onClick={togglePanel}
        />

        {/* Side Panel */}
        <div className={`rgd-panel ${isPanelOpen ? 'rgd-panel--open' : ''}`}>
          <div className="rgd-panel__header">
            <h3 className="rgd-panel__title">
              <Activity size={18} className="rgd-panel__title-icon" />
              Activity Timeline
            </h3>
            <button className="rgd-panel__close" onClick={togglePanel}>
              <X size={20} />
            </button>
          </div>
          <div className="rgd-panel__content" ref={panelContentRef}>
            <div className="rgd-timeline">
              {timelineEvents.map((event, index) => (
                <TimelineItem key={index} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Input Area (Static/Mock) */}
      <div className="rgd-input">
        <div className="rgd-input__mock">
          <span>Reply to Compliance Copilot...</span>
          <Send size={16} className="rgd-input__icon" />
        </div>
      </div>
    </div>
  );
}
