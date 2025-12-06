import React, { useState, useEffect, useCallback } from 'react';
import {
  Headphones,
  PenTool,
  Database,
  Search,
  Shield,
  UserCheck,
  Scale,
  Eye,
  Globe,
  Check,
  X,
  AlertTriangle,
  Ban,
  User,
  Bot,
  Send,
  FileText,
  Gavel
} from 'lucide-react';
import './WorkflowPolicyTemplateLibraryDemo.css';

// Template data
const templateData = {
  'support-escalation': {
    id: 'support-escalation',
    title: 'Tiered Support Escalation (HITL)',
    risk: 'medium',
    icon: Headphones,
    description: 'Handles tier-1 inquiries automatically. Ambiguous requests or negative sentiment triggers human hand-off.',
    tags: [
      { icon: Shield, label: 'PII Redaction' },
      { icon: UserCheck, label: 'Human Review' }
    ],
    steps: [
      { icon: User, title: 'User Inquiry', desc: 'Inbound chat message received' },
      { icon: Bot, title: 'AI Classification', desc: 'Analyze intent & sentiment' },
      { icon: Shield, title: 'PII Scrubbing', desc: 'Policy: Redact SSN/Credit Card' },
      { icon: UserCheck, title: 'Human Review', desc: 'Required if confidence < 80%', hitl: true },
      { icon: Send, title: 'Response Sent', desc: 'Approved draft sent to user' }
    ],
    policies: [
      'PII Redaction (Global Standard)',
      'Sentiment Safeguards (No hostile replies)',
      'Human-in-the-Loop for Billing Actions'
    ]
  },
  'content-gen': {
    id: 'content-gen',
    title: 'Marketing Draft with Legal Review',
    risk: 'high',
    icon: PenTool,
    description: 'Generates email copy based on product specs. Enforces legal approval before sending to CRM.',
    tags: [
      { icon: Scale, label: 'Legal Compliance' },
      { icon: Ban, label: 'No Direct Send' }
    ],
    steps: [
      { icon: FileText, title: 'Trigger', desc: 'New campaign created in CRM' },
      { icon: Bot, title: 'Draft Generation', desc: 'Model: GPT-4o (Creative Temp)' },
      { icon: Gavel, title: 'Legal Compliance Check', desc: 'Verify against banned terms', hitl: true },
      { icon: Send, title: 'Manager Approval', desc: 'Final sign-off required' }
    ],
    policies: [
      'Copyright Safety Check',
      'No Competitor Mention',
      'Tone of Voice: Professional'
    ]
  },
  'data-export': {
    id: 'data-export',
    title: 'Safe Data Summary',
    risk: 'low',
    icon: Database,
    description: 'Summarizes usage data for monthly reports. Read-only access to non-sensitive tables.',
    tags: [
      { icon: Eye, label: 'Read Only' },
      { icon: Globe, label: 'Global Region' }
    ],
    steps: [
      { icon: FileText, title: 'Scheduled Job', desc: 'Runs monthly at 1st day' },
      { icon: Database, title: 'Read-Only Query', desc: 'Access: Aggregated Stats Table' },
      { icon: FileText, title: 'Generate PDF', desc: 'Format: Executive Summary' },
      { icon: Send, title: 'Email Stakeholders', desc: 'To: Department Heads' }
    ],
    policies: [
      'Read-Only Enforcement',
      'Data Residency: Processing in EU',
      'Retention: 30 Days'
    ]
  }
};

const templates = Object.values(templateData);

// Template Card Component
function TemplateCard({ template, isActive, onClick }) {
  const IconComponent = template.icon;

  return (
    <article
      className={`wptl-card ${isActive ? 'wptl-card--active' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View ${template.title} template details`}
    >
      <div className="wptl-card__status-badge">
        <Check size={12} /> Active
      </div>
      <div className="wptl-card__header">
        <div className="wptl-card__icon-wrapper">
          <IconComponent size={20} />
        </div>
        <span className={`wptl-card__risk-badge wptl-card__risk-badge--${template.risk}`}>
          {template.risk} Risk
        </span>
      </div>
      <h3 className="wptl-card__title">{template.title}</h3>
      <p className="wptl-card__desc">{template.description}</p>
      <div className="wptl-card__meta">
        {template.tags.map((tag, index) => {
          const TagIcon = tag.icon;
          return (
            <span key={index} className="wptl-card__tag">
              <TagIcon size={12} />
              {tag.label}
            </span>
          );
        })}
      </div>
    </article>
  );
}

// Modal Component
function TemplateModal({ template, isOpen, onClose, onDeploy }) {
  const closeButtonRef = React.useRef(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Focus management
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  if (!template) return null;

  return (
    <div
      className={`wptl-modal ${isOpen ? 'wptl-modal--open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="wptl-modal__content">
        <div className="wptl-modal__header">
          <div className="wptl-modal__title-group">
            <h3 id="modal-title">{template.title}</h3>
            <p className="wptl-modal__subtitle">
              Template ID: #WF-{template.id.split('-').pop().toUpperCase()} • Vetted by Security Team
            </p>
          </div>
          <button
            ref={closeButtonRef}
            className="wptl-modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <div className="wptl-modal__body">
          {/* Left: Visual Workflow */}
          <div className="wptl-modal__viz">
            {template.steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={index}
                  className={`wptl-step ${step.hitl ? 'wptl-step--hitl' : ''}`}
                >
                  <div className="wptl-step__icon">
                    <StepIcon size={18} />
                  </div>
                  <div className="wptl-step__content">
                    <p className="wptl-step__title">
                      {step.title}
                      {step.hitl && <AlertTriangle size={12} />}
                    </p>
                    <p className="wptl-step__desc">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Policy Details */}
          <div className="wptl-modal__details">
            <h4 className="wptl-section-title">Governing Policies</h4>
            <ul className="wptl-policy-list">
              {template.policies.map((policy, index) => (
                <li key={index} className="wptl-policy-item">
                  <Check size={16} />
                  <span>{policy}</span>
                </li>
              ))}
            </ul>

            <div className="wptl-compliance-note">
              <h4 className="wptl-section-title">Compliance Note</h4>
              <p>This workflow requires an audit log for every human intervention event.</p>
            </div>
          </div>
        </div>

        <div className="wptl-modal__footer">
          <button className="wptl-btn wptl-btn--secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="wptl-btn wptl-btn--primary" onClick={onDeploy}>
            Deploy Workflow
          </button>
        </div>
      </div>
    </div>
  );
}

export default function WorkflowPolicyTemplateLibraryDemo() {
  const [activeTab, setActiveTab] = useState('recommended');
  const [activeTemplateId, setActiveTemplateId] = useState(null);
  const [modalTemplate, setModalTemplate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    { id: 'recommended', label: 'Recommended' },
    { id: 'support', label: 'Support' },
    { id: 'sales', label: 'Sales' },
    { id: 'legal', label: 'Legal' }
  ];

  const handleCardClick = useCallback((template) => {
    setModalTemplate(template);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleDeploy = useCallback(() => {
    if (modalTemplate) {
      setActiveTemplateId(modalTemplate.id);
    }
    setIsModalOpen(false);
  }, [modalTemplate]);

  const handleReset = useCallback(() => {
    setActiveTemplateId(null);
    setActiveTab('recommended');
    setIsModalOpen(false);
    setModalTemplate(null);
  }, []);

  return (
    <div className="wptl-showcase" role="region" aria-label="Workflow & Policy Template Library demo">
      <header className="wptl-showcase__header">
        <div className="wptl-showcase__header-content">
          <h2 className="wptl-showcase__title">Workflow & Policy Template Library</h2>
          <p className="wptl-showcase__description">
            A centralized catalog for Admins to select vetted AI agent patterns. This separates
            the definition of &quot;what the agent does&quot; (workflow) from &quot;rules it must
            follow&quot; (policy).
          </p>
        </div>
        <button className="wptl-showcase__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <main className="wptl-lib">
        {/* Toolbar */}
        <div className="wptl-lib__toolbar">
          <div className="wptl-lib__tabs" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`wptl-lib__tab ${activeTab === tab.id ? 'wptl-lib__tab--active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="wptl-lib__search">
            <Search size={16} className="wptl-lib__search-icon" />
            <input
              type="text"
              className="wptl-lib__search-input"
              placeholder="Search templates..."
              aria-label="Search templates"
            />
          </div>
        </div>

        {/* Card Grid */}
        <div className="wptl-lib__grid">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              isActive={activeTemplateId === template.id}
              onClick={() => handleCardClick(template)}
            />
          ))}
        </div>
      </main>

      {/* Modal */}
      <TemplateModal
        template={modalTemplate}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onDeploy={handleDeploy}
      />
    </div>
  );
}
