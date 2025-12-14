import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  Activity,
  Server,
  ExternalLink,
  BarChart3
} from 'lucide-react';
import './CounterEvidenceDemo.css';

// Replay icon for reset button
const ReplayIcon = ({ spinning }) => (
  <svg
    className={`ced-showcase__reset-icon ${spinning ? 'ced-showcase__reset-icon--spinning' : ''}`}
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12"/>
    <path d="M3 3v9h9"/>
  </svg>
);

// --- COMPONENTS ---

const ConfidenceMeter = ({ score }) => {
  let colorClass = 'ced-confidence-meter__bar-fill--low';
  let label = 'Low';

  if (score >= 80) {
    colorClass = 'ced-confidence-meter__bar-fill--high';
    label = 'High';
  } else if (score >= 40) {
    colorClass = 'ced-confidence-meter__bar-fill--med';
    label = 'Medium';
  }

  return (
    <div className="ced-confidence-meter">
      <span className="ced-confidence-meter__label">{label} ({score}%)</span>
      <div className="ced-confidence-meter__bar-bg">
        <div
          className={`ced-confidence-meter__bar-fill ${colorClass}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
};

const EvidenceItem = ({ type, text, source, verified, onClick }) => {
  const isSupporting = type === 'supporting';

  return (
    <div
      className={`ced-evidence-item ${verified ? 'ced-evidence-item--verified' : ''}`}
      onClick={(e) => { e.stopPropagation(); onClick(); }}
    >
      <div className={`ced-evidence-item__icon ${isSupporting ? 'ced-evidence-item__icon--supporting' : 'ced-evidence-item__icon--counter'}`}>
        {isSupporting ? (
          <CheckCircle2 size={16} />
        ) : (
          <AlertCircle size={16} />
        )}
      </div>
      <div className="ced-evidence-item__content">
        <div className="ced-evidence-item__text">{text}</div>
        <div className="ced-evidence-item__source">
          <Activity size={12} />
          {source}
        </div>
      </div>
      <div className="ced-evidence-item__status">
        <CheckCircle2 size={16} />
      </div>
    </div>
  );
};

const HypothesisCard = ({ hypothesis, isOpen, onToggle }) => {
  const [verifiedItems, setVerifiedItems] = useState(new Set());

  const toggleVerify = (id) => {
    const next = new Set(verifiedItems);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setVerifiedItems(next);
  };

  const { title, confidence, description, evidenceData } = hypothesis;
  const supportCount = evidenceData.supporting.length;
  const counterCount = evidenceData.counter.length;

  return (
    <div className={`ced-hypothesis-card ${isOpen ? 'ced-hypothesis-card--active' : ''}`}>
      <div className="ced-hypothesis-card__header" onClick={onToggle}>
        <div className="ced-hypothesis-card__title-group">
          <div className="ced-hypothesis-card__title">
            {title}
          </div>
          <div className="ced-hypothesis-card__meta">
            {description}
          </div>
        </div>

        <div className="ced-hypothesis-card__controls">
          <ConfidenceMeter score={confidence} />
          <div className="ced-hypothesis-card__chevron">
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="ced-evidence-widget">
          <div className="ced-evidence-widget__header">
            <ShieldAlert size={14} />
            Evidence Analysis
          </div>
          <div className="ced-evidence-widget__body">
            {/* Supporting Column */}
            <div className="ced-evidence-widget__column ced-evidence-widget__column--supporting">
              <div className="ced-evidence-widget__column-title ced-evidence-widget__column-title--supporting">
                <CheckCircle2 size={14} /> Supporting ({supportCount})
              </div>
              {evidenceData.supporting.map((item) => (
                <EvidenceItem
                  key={item.id}
                  type="supporting"
                  {...item}
                  verified={verifiedItems.has(item.id)}
                  onClick={() => toggleVerify(item.id)}
                />
              ))}
            </div>

            {/* Counter Column */}
            <div className="ced-evidence-widget__column ced-evidence-widget__column--counter">
              <div className="ced-evidence-widget__column-title ced-evidence-widget__column-title--counter">
                <AlertCircle size={14} /> Counter-Evidence ({counterCount})
              </div>
              {evidenceData.counter.length > 0 ? (
                evidenceData.counter.map((item) => (
                  <EvidenceItem
                    key={item.id}
                    type="counter"
                    {...item}
                    verified={verifiedItems.has(item.id)}
                    onClick={() => toggleVerify(item.id)}
                  />
                ))
              ) : (
                <div className="ced-evidence-widget__empty">No strong counter-evidence found.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ChatMessage = ({ role, children }) => {
  const isAi = role === 'ai';
  return (
    <div className={`ced-message ${isAi ? 'ced-message--ai' : 'ced-message--user'}`}>
      <div className={`ced-message__avatar ${isAi ? 'ced-message__avatar--ai' : 'ced-message__avatar--user'}`}>
        {isAi ? <Server size={16} /> : <span className="ced-message__avatar-text">ME</span>}
      </div>
      <div className={`ced-message__bubble ${isAi ? 'ced-message__bubble--ai' : 'ced-message__bubble--user'}`}>
        {children}
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

export default function CounterEvidenceDemo() {
  const [loading, setLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [openHypothesisId, setOpenHypothesisId] = useState(1);
  const timeoutRef = useRef(null);

  // HYPOTHESIS DATA
  const hypotheses = [
    {
      id: 1,
      title: "Database Write Lock Contention",
      description: "Primary DB locked causing checkout timeouts.",
      confidence: 88,
      evidenceData: {
        supporting: [
          { id: 101, text: "Write Latency > 2000ms on Primary DB", source: "Datadog / RDS" },
          { id: 102, text: "Connection pool utilization at 99%", source: "App Logs" },
          { id: 103, text: "Spike in DB CPU Wait I/O", source: "RDS Metrics" }
        ],
        counter: [
          { id: 104, text: "Read Replica latency is normal (< 15ms)", source: "RDS Metrics" }
        ]
      }
    },
    {
      id: 2,
      title: "DDoS Attack on Checkout API",
      description: "External traffic flood targeting /checkout endpoint.",
      confidence: 45,
      evidenceData: {
        supporting: [
          { id: 201, text: "Inbound traffic +400% vs baseline", source: "Load Balancer" },
          { id: 202, text: "High diversity of Source IPs", source: "WAF Logs" }
        ],
        counter: [
          { id: 203, text: "WAF blocked < 1% of requests", source: "CloudFlare" },
          { id: 204, text: "Traffic shape matches 'Flash Sale' pattern", source: "Marketing Calendar" }
        ]
      }
    },
    {
      id: 3,
      title: "Bad Deployment Artifact",
      description: "Recent code push introduced regression.",
      confidence: 12,
      evidenceData: {
        supporting: [
          { id: 301, text: "Errors started at 10:00 UTC", source: "Log Timeline" }
        ],
        counter: [
          { id: 302, text: "Last deployment was 2 days ago", source: "GitHub Actions" },
          { id: 303, text: "Canary health checks passed", source: "Deployment History" },
          { id: 304, text: "Previous version rollback did not fix", source: "Remediation Log" }
        ]
      }
    }
  ];

  const startSimulation = useCallback(() => {
    setLoading(true);
    setShowResponse(false);
    setOpenHypothesisId(1);

    timeoutRef.current = setTimeout(() => {
      setLoading(false);
      setShowResponse(true);
    }, 1200);
  }, []);

  useEffect(() => {
    startSimulation();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [startSimulation]);

  const handleReset = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    startSimulation();
  }, [startSimulation]);

  return (
    <div className="ced-showcase" role="region" aria-label="Counter-Evidence demo">
      <header className="pattern-demo__header">
        <h2 className="pattern-demo__title">Interactive Demo</h2>
        <button className="pattern-demo__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="ced-chat">
        <div className="ced-chat__content">
          <ChatMessage role="user">
            <p>
              @OpsAgent We are seeing alert <code className="ced-message__code">#9921</code> regarding
              checkout failures. What is the root cause?
            </p>
          </ChatMessage>

          {loading ? (
            <div className="ced-loading">
              <div className="ced-message__avatar ced-message__avatar--ai">
                <Server size={16} />
              </div>
              <div className="ced-loading__dots">
                <span className="ced-loading__dot" />
                <span className="ced-loading__dot" />
                <span className="ced-loading__dot" />
                Analyzing competing hypotheses...
              </div>
            </div>
          ) : showResponse && (
            <div className="ced-response">
              <ChatMessage role="ai">
                <div>
                  <p className="ced-response__intro">
                    I have analyzed the system state and identified <strong>3 potential root causes</strong>.
                    The evidence most strongly supports database contention, but I have also evaluated
                    a potential DDoS attack and deployment issues.
                  </p>

                  {/* HYPOTHESIS LIST */}
                  <div>
                    {hypotheses.map(h => (
                      <HypothesisCard
                        key={h.id}
                        hypothesis={h}
                        isOpen={openHypothesisId === h.id}
                        onToggle={() => setOpenHypothesisId(openHypothesisId === h.id ? null : h.id)}
                      />
                    ))}
                  </div>

                  <div className="ced-response__actions">
                    <button className="ced-response__action-btn">
                      <BarChart3 size={12} /> View Detailed Metrics
                    </button>
                    <button className="ced-response__action-btn">
                      <ExternalLink size={12} /> Open Incident Room
                    </button>
                  </div>
                </div>
              </ChatMessage>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
