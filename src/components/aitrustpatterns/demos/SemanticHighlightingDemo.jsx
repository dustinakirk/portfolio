import React, { useState, useRef, useEffect, useCallback } from 'react';
import { AlertTriangle } from 'lucide-react';
import './SemanticHighlightingDemo.css';

const HIGHLIGHTS_DATA = [
  {
    id: 'highlight-1',
    text: 'January 1, 2026',
    risk: 'medium',
    title: 'Ambiguous Date Source',
    description: 'The prompt mentioned "next Monday", but the attached email thread references "January 1st". I have defaulted to the email date.',
  },
  {
    id: 'highlight-2',
    text: 'three times (3x) the annual fees',
    risk: 'high',
    title: 'High Risk Deviation',
    description: 'This value (3x fees) exceeds the standard playbook limit (1x fees) and was not explicitly approved in the chat context.',
  },
];

function Highlight({ data, isResolved, onClick, isActive }) {
  const highlightRef = useRef(null);

  const handleClick = (e) => {
    if (isResolved) return;
    onClick(data, highlightRef.current);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e);
    }
  };

  let className = 'shd-highlight';
  if (isResolved) {
    className += ' shd-highlight--resolved';
  } else if (data.risk === 'high') {
    className += ' shd-highlight--high';
  } else {
    className += ' shd-highlight--medium';
  }

  return (
    <span
      ref={highlightRef}
      className={className}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={isResolved ? -1 : 0}
      role={isResolved ? undefined : 'button'}
      aria-label={isResolved ? `${data.text} - resolved` : `${data.text} - ${data.risk} uncertainty. Click for details.`}
    >
      {data.text}
    </span>
  );
}

function Popover({ highlight, position, onConfirm, onClose }) {
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target)) {
        // Check if click was on a highlight
        if (!e.target.classList.contains('shd-highlight')) {
          onClose();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const headerClass = `shd-popover__header shd-popover__header--${highlight.risk}`;

  return (
    <div
      ref={popoverRef}
      className={`shd-popover shd-popover--visible`}
      style={{ top: position.top, left: position.left }}
    >
      <div className={headerClass}>
        <AlertTriangle className="shd-popover__icon" size={16} />
        <span>{highlight.title}</span>
      </div>
      <div className="shd-popover__body">
        {highlight.description}
      </div>
      <div className="shd-popover__actions">
        <button className="shd-btn" onClick={onClose}>
          Sources
        </button>
        <button className="shd-btn shd-btn--primary" onClick={onConfirm}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default function SemanticHighlightingDemo() {
  const [resolvedHighlights, setResolvedHighlights] = useState(new Set());
  const [activeHighlight, setActiveHighlight] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState({ top: 0, left: 0 });
  const contentRef = useRef(null);

  const handleHighlightClick = useCallback((highlightData, element) => {
    if (resolvedHighlights.has(highlightData.id)) return;

    const contentRect = contentRef.current.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    // Position popover below the highlight
    let top = elementRect.bottom - contentRect.top + 8;
    let left = elementRect.left - contentRect.left;

    // Clamp left position to prevent overflow
    const maxLeft = contentRect.width - 300;
    if (left > maxLeft) {
      left = maxLeft;
    }
    if (left < 0) {
      left = 0;
    }

    setPopoverPosition({ top, left });
    setActiveHighlight(highlightData);
  }, [resolvedHighlights]);

  const handleConfirm = useCallback(() => {
    if (activeHighlight) {
      setResolvedHighlights((prev) => new Set([...prev, activeHighlight.id]));
      setActiveHighlight(null);
    }
  }, [activeHighlight]);

  const handleClosePopover = useCallback(() => {
    setActiveHighlight(null);
  }, []);

  const handleReset = useCallback(() => {
    setResolvedHighlights(new Set());
    setActiveHighlight(null);
  }, []);

  const highlight1 = HIGHLIGHTS_DATA[0];
  const highlight2 = HIGHLIGHTS_DATA[1];

  return (
    <div className="shd-showcase">
      <header className="shd-showcase__header">
        <div className="shd-showcase__header-content">
          <h2 className="shd-showcase__title">Semantic Highlighting of Uncertainty</h2>
          <p className="shd-showcase__description">
            Click on highlighted text to see why the AI is uncertain. Then confirm the value
            to mark it as reviewed, or explore sources for more context.
          </p>
        </div>
        <button className="shd-showcase__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <main className="shd-content" ref={contentRef}>
        {/* User Message */}
        <div className="shd-user-msg">
          <div className="shd-user-bubble">
            Draft an amendment to the Acme Corp MSA. Update the effective date to next Monday and set the liability cap to 3x fees.
          </div>
          <div className="shd-user-avatar">You</div>
        </div>

        {/* Agent Message */}
        <div className="shd-agent-msg">
          <div className="shd-avatar">AI</div>
          <div className="shd-bubble">
            <p>
              I&apos;ve drafted the requested amendment based on our standard MSA template. Most sections align with company policy, but I&apos;ve flagged two areas where the input data was unclear or conflicted with standard terms.
            </p>
            <p>
              <strong>1. Effective Date:</strong><br />
              This amendment shall become effective as of{' '}
              <Highlight
                data={highlight1}
                isResolved={resolvedHighlights.has(highlight1.id)}
                onClick={handleHighlightClick}
                isActive={activeHighlight?.id === highlight1.id}
              />
              .
            </p>
            <p>
              <strong>2. Liability Cap:</strong><br />
              Total liability shall be limited to{' '}
              <Highlight
                data={highlight2}
                isResolved={resolvedHighlights.has(highlight2.id)}
                onClick={handleHighlightClick}
                isActive={activeHighlight?.id === highlight2.id}
              />{' '}
              paid under this Agreement.
            </p>
          </div>
        </div>

        {/* Popover */}
        {activeHighlight && (
          <Popover
            highlight={activeHighlight}
            position={popoverPosition}
            onConfirm={handleConfirm}
            onClose={handleClosePopover}
          />
        )}
      </main>
    </div>
  );
}
