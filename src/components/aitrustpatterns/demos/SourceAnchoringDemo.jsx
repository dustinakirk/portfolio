import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FileText, Bot } from 'lucide-react';
import './SourceAnchoringDemo.css';

// AI Response segments for streaming simulation
const AI_RESPONSE_SEGMENTS = [
  { type: 'text', content: 'Yes, the agreement includes specific provisions regarding data breaches in Section 7. ' },
  { type: 'text', content: 'Specifically, the Provider accepts liability for breaches caused by gross negligence, capped at ' },
  { type: 'bold', content: '$1,000,000 USD' },
  { type: 'citation', id: '1', target: 'clause-7-2', label: '1' },
  { type: 'text', content: ' (or 12 months\' fees). Additionally, they must notify you within ' },
  { type: 'bold', content: '72 hours' },
  { type: 'text', content: ' of discovering a breach ' },
  { type: 'citation', id: '2', target: 'clause-7-3', label: '2' },
  { type: 'text', content: '.' }
];

// Document clauses for the evidence pane
const DOCUMENT_CLAUSES = [
  {
    id: 'clause-6',
    header: '6. Confidentiality',
    content: '6.1 Each party agrees to hold all Confidential Information in strict confidence and not to disclose such information to any third parties without prior written consent.'
  },
  {
    id: 'clause-7-1',
    header: '7. Data Protection & Liability',
    content: '7.1 The Provider shall implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk.'
  },
  {
    id: 'clause-7-2',
    header: '7.2 Liability Cap',
    content: 'Notwithstanding anything to the contrary, the Provider\'s total aggregate liability for any data breach resulting from its gross negligence shall be limited to one million dollars ($1,000,000 USD) or the total fees paid in the preceding twelve (12) months, whichever is greater.'
  },
  {
    id: 'clause-7-3',
    header: '7.3 Notification Window',
    content: 'In the event of a confirmed Data Breach, the Provider agrees to notify the Client without undue delay, and in no case later than 72 hours after becoming aware of the breach.'
  },
  {
    id: 'clause-8',
    header: '8. Term and Termination',
    content: '8.1 This Agreement shall commence on the Effective Date and continue for a period of one (1) year unless terminated earlier in accordance with this Section.'
  }
];

// Typing indicator component
function TypingIndicator() {
  return (
    <div className="sad-typing">
      <span className="sad-typing__dot" />
      <span className="sad-typing__dot" />
      <span className="sad-typing__dot" />
    </div>
  );
}

// Citation chip component
function CitationChip({ id, label, target, isActive, onHover, onClick }) {
  return (
    <button
      className={`sad-citation ${isActive ? 'sad-citation--active' : ''}`}
      aria-label={`View source for claim ${label}`}
      onMouseEnter={() => onHover(target)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onClick(target)}
    >
      {label}
    </button>
  );
}

// Document clause component
function DocumentClause({ id, header, content, isHighlighted }) {
  return (
    <div
      id={id}
      className={`sad-clause ${isHighlighted ? 'sad-clause--highlighted' : ''}`}
    >
      <div className="sad-clause__header">{header}</div>
      <p className="sad-clause__content">{content}</p>
    </div>
  );
}

export default function SourceAnchoringDemo() {
  const [renderedSegments, setRenderedSegments] = useState([]);
  const [isTyping, setIsTyping] = useState(true);
  const [activeCitation, setActiveCitation] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const docViewerRef = useRef(null);
  const animationRef = useRef(null);
  const isInitialLoadRef = useRef(true);

  // Stream the AI response segments
  const streamResponse = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsTyping(true);
    setRenderedSegments([]);
    setActiveCitation(null);

    // Short delay to show typing indicator
    animationRef.current = setTimeout(() => {
      setIsTyping(false);

      let segmentIndex = 0;

      const addNextSegment = () => {
        if (segmentIndex >= AI_RESPONSE_SEGMENTS.length) {
          setIsAnimating(false);
          return;
        }

        setRenderedSegments(prev => [...prev, AI_RESPONSE_SEGMENTS[segmentIndex]]);
        segmentIndex++;

        animationRef.current = setTimeout(addNextSegment, 60);
      };

      addNextSegment();
    }, 800);
  }, [isAnimating]);

  // Initialize on mount
  useEffect(() => {
    if (isInitialLoadRef.current) {
      isInitialLoadRef.current = false;
      streamResponse();
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [streamResponse]);

  // Handle citation hover - scroll to and highlight clause
  const handleCitationHover = useCallback((targetId) => {
    setActiveCitation(targetId);

    if (targetId && docViewerRef.current) {
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, []);

  // Handle citation click - same as hover but sticky
  const handleCitationClick = useCallback((targetId) => {
    setActiveCitation(targetId);

    if (targetId && docViewerRef.current) {
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, []);

  // Reset demo
  const handleReset = useCallback(() => {
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
    setIsAnimating(false);
    setActiveCitation(null);

    // Reset scroll position
    if (docViewerRef.current) {
      docViewerRef.current.scrollTop = 0;
    }

    // Small delay then restart
    setTimeout(() => {
      streamResponse();
    }, 100);
  }, [streamResponse]);

  // Render a segment based on its type
  const renderSegment = (segment, index) => {
    switch (segment.type) {
      case 'text':
        return <span key={index}>{segment.content}</span>;
      case 'bold':
        return <strong key={index}>{segment.content}</strong>;
      case 'citation':
        return (
          <CitationChip
            key={index}
            id={segment.id}
            label={segment.label}
            target={segment.target}
            isActive={activeCitation === segment.target}
            onHover={handleCitationHover}
            onClick={handleCitationClick}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="sad-showcase" role="region" aria-label="Source Anchoring & Grounding demo">
      <header className="sad-showcase__header">
        <div className="sad-showcase__header-content">
          <h2 className="sad-showcase__title">Source Anchoring & Grounding</h2>
          <p className="sad-showcase__description">
            Click or hover over citation numbers (e.g., [1]) in the AI response to see how claims are linked to their source documents.
          </p>
        </div>
        <button className="sad-showcase__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="sad-workspace">
        {/* Left: Chat Pane */}
        <div className="sad-pane sad-pane--chat">
          {/* User Message */}
          <div className="sad-message sad-message--user">
            Does the Master Services Agreement cover data breach liabilities? Specifically, what is the cap?
          </div>

          {/* AI Response */}
          <div className="sad-message sad-message--ai">
            <div className="sad-avatar">
              <Bot size={18} />
            </div>
            <div className="sad-response" aria-live="polite">
              {isTyping ? (
                <TypingIndicator />
              ) : (
                renderedSegments.map((segment, index) => renderSegment(segment, index))
              )}
            </div>
          </div>
        </div>

        {/* Right: Evidence Pane */}
        <div className="sad-pane sad-pane--evidence">
          <div className="sad-evidence__header">
            <div className="sad-evidence__file-info">
              <FileText size={16} className="sad-evidence__file-icon" />
              <span className="sad-evidence__file-name">MSA_Final_Signed_v2.pdf</span>
              <span className="sad-evidence__badge">Verified Source</span>
            </div>
            <span className="sad-evidence__page">Page 4 of 12</span>
          </div>

          <div className="sad-doc-viewer" ref={docViewerRef}>
            <div className="sad-doc__title">Master Services Agreement</div>

            <p className="sad-doc__omission">[Sections 1-5 omitted for brevity]</p>

            {DOCUMENT_CLAUSES.map((clause) => (
              <DocumentClause
                key={clause.id}
                id={clause.id}
                header={clause.header}
                content={clause.content}
                isHighlighted={activeCitation === clause.id}
              />
            ))}

            <p className="sad-doc__omission">[Remainder of document]</p>

            {/* Spacer for scroll */}
            <div style={{ height: '80px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
