import React, { useState, useCallback } from 'react';
import './ConfessionsViewDemo.css';

// Warning Icon SVG
function WarningIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

// Chevron Icon SVG
function ChevronIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// Lightning Icon SVG (for shortcuts)
function LightningIcon({ className }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

export default function ConfessionsViewDemo() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsDrawerOpen(prev => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  return (
    <div className="cvd-showcase">
      <header className="cvd-showcase__header">
        <div className="cvd-showcase__header-content">
          <h2 className="cvd-showcase__title">Confessions View (Post-Task Self-Report)</h2>
          <p className="cvd-showcase__description">
            A transparency pattern where the AI agent explicitly reports on its own compliance,
            shortcuts taken, and uncertainties after completing a high-stakes task.
          </p>
        </div>
        <button className="cvd-showcase__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="cvd-chat">
        <div className="cvd-chat__messages">
          {/* User Message */}
          <div className="cvd-message cvd-message--user">
            Please generate the Q3 Engineering Expense Summary. Ensure all transaction data is strictly from the reconciled ledger, not the daily cache.
          </div>

          {/* Agent Response Group */}
          <div className="cvd-message cvd-message--agent">
            {/* Agent Identity */}
            <div className="cvd-agent-identity">
              <div className="cvd-agent-avatar">AI</div>
              <span>Finance Assistant</span>
            </div>

            {/* Main Answer Card */}
            <div className="cvd-agent-card">
              <div className="cvd-agent-card__content">
                <p>
                  Here is the summary for Q3 Engineering Expenses. The total operating expenditure aligns with the projected quarterly forecast.
                </p>

                <table className="cvd-data-table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cloud Infrastructure</td>
                      <td>$142,500.00</td>
                      <td>Verified</td>
                    </tr>
                    <tr>
                      <td>Software Licenses</td>
                      <td>$45,200.00</td>
                      <td>Verified</td>
                    </tr>
                    <tr>
                      <td>T&amp;E</td>
                      <td>$12,350.00</td>
                      <td>Pending Audit</td>
                    </tr>
                  </tbody>
                </table>

                <span className="cvd-agent-card__timestamp">Generated at 14:02 PM EST</span>
              </div>
            </div>

            {/* Confession Trigger Badge */}
            <button
              className={`cvd-confession-trigger cvd-confession-trigger--warning ${isDrawerOpen ? 'cvd-confession-trigger--open' : ''}`}
              onClick={handleToggle}
              aria-expanded={isDrawerOpen}
              aria-controls="confession-panel"
            >
              <WarningIcon className="cvd-confession-trigger__icon" />
              <span>Self-assessed: Partial Issues</span>
              <ChevronIcon className="cvd-confession-trigger__chevron" />
            </button>

            {/* Confession Drawer */}
            <div
              id="confession-panel"
              className={`cvd-confession-drawer ${isDrawerOpen ? 'cvd-confession-drawer--open' : ''}`}
              aria-hidden={!isDrawerOpen}
            >
              <div className="cvd-confession-report">
                <div className="cvd-confession-report__header">
                  <h3 className="cvd-confession-report__title">Compliance Report</h3>
                  <span className="cvd-confession-report__id">ID: RUN-8392</span>
                </div>

                {/* Instruction Compliance Section */}
                <div className="cvd-confession-section">
                  <div className="cvd-confession-section__title">Instruction Compliance</div>
                  <ul className="cvd-objective-list">
                    <li className="cvd-objective-item">
                      <span className="cvd-objective-item__label">Generate Q3 Summary</span>
                      <span className="cvd-status-pill cvd-status-pill--success">✓ Met</span>
                      <div className="cvd-objective-item__detail">
                        Aggregated all cost centers tagged &quot;Engineering&quot;.
                      </div>
                    </li>
                    <li className="cvd-objective-item">
                      <span className="cvd-objective-item__label">Use Reconciled Ledger Only</span>
                      <span className="cvd-status-pill cvd-status-pill--danger">✗ Not Met</span>
                      <div className="cvd-objective-item__detail">
                        Attempted to access reconciled DB, but connection timed out. <strong>Fell back to &quot;Daily Cache&quot;</strong> to complete request.
                      </div>
                    </li>
                    <li className="cvd-objective-item">
                      <span className="cvd-objective-item__label">Format as Table</span>
                      <span className="cvd-status-pill cvd-status-pill--success">✓ Met</span>
                      <div className="cvd-objective-item__detail">
                        Standard SaaS table layout applied.
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Shortcuts Section */}
                <div className="cvd-confession-section">
                  <div className="cvd-confession-section__title">Shortcuts &amp; Ambiguities</div>
                  <div className="cvd-shortcut-block">
                    <LightningIcon className="cvd-shortcut-block__icon" />
                    <span>
                      <strong>Shortcut:</strong> Skipped individual receipt currency conversion verification for amounts &lt; $50 to reduce processing time.
                    </span>
                  </div>
                </div>

                {/* Controls */}
                <div className="cvd-confession-controls">
                  <button className="cvd-btn-link">Re-run with strict enforcement</button>
                  <button className="cvd-btn-link cvd-btn-link--muted">Flag confession as inaccurate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
