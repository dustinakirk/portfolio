import React, { useState, useCallback } from 'react';
import './GuidedRepairFlowsDemo.css';

const TOTAL_STEPS = 3;

export default function GuidedRepairFlowsDemo() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedDataset, setSelectedDataset] = useState('saas-metrics');
  const [selectedMapping, setSelectedMapping] = useState('mrr_usd');
  const [saveRule, setSaveRule] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [isRepairing, setIsRepairing] = useState(false);

  const handleStartRepair = useCallback(() => {
    setIsRepairing(true);
    setIsPanelOpen(true);
  }, []);

  const handleNextStep = useCallback(() => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Complete the repair
      setIsPanelOpen(false);
      setTimeout(() => {
        setIsComplete(true);
      }, 300);
    }
  }, [currentStep]);

  const handlePrevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const handleReset = useCallback(() => {
    setCurrentStep(1);
    setIsPanelOpen(false);
    setSelectedDataset('saas-metrics');
    setSelectedMapping('mrr_usd');
    setSaveRule(true);
    setIsComplete(false);
    setIsRepairing(false);
  }, []);

  const getStepIndicatorClass = (step) => {
    if (step < currentStep) return 'grf-step-indicator grf-step-indicator--completed';
    if (step === currentStep) return 'grf-step-indicator grf-step-indicator--active';
    return 'grf-step-indicator';
  };

  return (
    <div className="grf-showcase" role="region" aria-label="Guided Repair Flows demo">
      <header className="pattern-demo__header">
        <h2 className="pattern-demo__title">Interactive Demo</h2>
        <button className="pattern-demo__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="grf-workspace">
        {/* Chat Interface */}
        <div className="grf-chat">
          {/* User Message */}
          <div className="grf-message grf-message--user">
            <div className="grf-message__avatar grf-message__avatar--user">U</div>
            <div className="grf-message__bubble">
              Show me a line chart of Monthly Revenue for Q3 2024.
            </div>
          </div>

          {/* AI Failure Message */}
          {!isComplete && (
            <div className="grf-message grf-message--ai">
              <div className="grf-message__avatar grf-message__avatar--ai">AI</div>
              <div className="grf-message__bubble grf-message__bubble--failure">
                <div className="grf-failure-card__title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  Clarification Needed
                </div>
                <p className="grf-failure-card__text">
                  I couldn&apos;t generate the chart because the field <strong>&quot;Monthly Revenue&quot;</strong> doesn&apos;t exist in the current dataset schema.
                </p>
                <div className="grf-failure-card__actions">
                  <button
                    className="grf-btn grf-btn--outline-danger"
                    onClick={handleStartRepair}
                    disabled={isRepairing}
                  >
                    {isRepairing ? 'Repairing...' : 'Help fix mapping'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Success Message */}
          {isComplete && (
            <div className="grf-message grf-message--ai">
              <div className="grf-message__avatar grf-message__avatar--ai">AI</div>
              <div className="grf-message__bubble grf-message__bubble--success">
                <div className="grf-success-card__title">Mapping Fixed</div>
                <p className="grf-success-card__text">
                  I&apos;ve mapped &quot;Monthly Revenue&quot; to <code>mrr_usd</code> and saved this preference.
                </p>
                <div className="grf-success-card__chart">
                  [ Simulated Chart Visualization ]
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Repair Panel */}
        <div className={`grf-repair-panel ${isPanelOpen ? 'grf-repair-panel--open' : ''}`}>
          <div className="grf-repair-panel__header">
            <h3 className="grf-repair-panel__title">Fix Data Mapping</h3>
            <div className="grf-repair-panel__steps">
              <div className={getStepIndicatorClass(1)}></div>
              <div className={getStepIndicatorClass(2)}></div>
              <div className={getStepIndicatorClass(3)}></div>
            </div>
          </div>

          <div className="grf-repair-panel__content">
            {/* Step 1: Confirm Dataset */}
            <div className={`grf-step-content ${currentStep === 1 ? 'grf-step-content--active' : ''}`}>
              <div className="grf-form-group">
                <label className="grf-form-label">Which dataset are you querying?</label>
                <p className="grf-form-hint">
                  Based on your prompt, I selected the most recent sales data.
                </p>

                <div
                  className={`grf-data-card ${selectedDataset === 'saas-metrics' ? 'grf-data-card--selected' : ''}`}
                  onClick={() => setSelectedDataset('saas-metrics')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedDataset('saas-metrics')}
                >
                  <span className="grf-data-card__icon">📊</span>
                  <div className="grf-data-card__content">
                    <p className="grf-data-card__title">SaaS_Metrics_2024_Cleaned</p>
                    <p className="grf-data-card__meta">Updated 2 hours ago</p>
                  </div>
                </div>

                <div
                  className={`grf-data-card ${selectedDataset === 'stripe-exports' ? 'grf-data-card--selected' : ''}`}
                  onClick={() => setSelectedDataset('stripe-exports')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedDataset('stripe-exports')}
                >
                  <span className="grf-data-card__icon">📁</span>
                  <div className="grf-data-card__content">
                    <p className="grf-data-card__title">Raw_Stripe_Exports</p>
                    <p className="grf-data-card__meta">Updated yesterday</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Map Fields */}
            <div className={`grf-step-content ${currentStep === 2 ? 'grf-step-content--active' : ''}`}>
              <div className="grf-form-group">
                <label className="grf-form-label">Map &quot;Monthly Revenue&quot;</label>
                <p className="grf-form-hint">
                  I found a field that looks similar. Please confirm if this is correct.
                </p>

                <div className="grf-mapping-row">
                  <span className="grf-highlight-text">&quot;Monthly Revenue&quot;</span>
                  <span className="grf-mapping-arrow">→</span>
                  <select
                    className="grf-form-select"
                    value={selectedMapping}
                    onChange={(e) => setSelectedMapping(e.target.value)}
                  >
                    <option value="mrr_usd">mrr_usd (98%)</option>
                    <option value="net_revenue">net_revenue</option>
                    <option value="gross_sales">gross_sales</option>
                  </select>
                </div>
                <p className="grf-mapping-hint">
                  Tip: &apos;mrr_usd&apos; contains numerical currency data.
                </p>
              </div>
            </div>

            {/* Step 3: Preview & Save */}
            <div className={`grf-step-content ${currentStep === 3 ? 'grf-step-content--active' : ''}`}>
              <div className="grf-form-group">
                <label className="grf-form-label">Review Changes</label>
                <div className="grf-summary-box">
                  <div className="grf-summary-item">
                    <span>Dataset:</span>
                    <strong>{selectedDataset === 'saas-metrics' ? 'SaaS_Metrics_2024' : 'Raw_Stripe_Exports'}</strong>
                  </div>
                  <div className="grf-summary-item">
                    <span>Mapping:</span>
                    <strong>Revenue → {selectedMapping}</strong>
                  </div>
                </div>
              </div>

              <div className="grf-form-group">
                <label className="grf-form-label">Save Logic</label>
                <label className="grf-checkbox-label">
                  <input
                    type="checkbox"
                    checked={saveRule}
                    onChange={(e) => setSaveRule(e.target.checked)}
                  />
                  <span>Remember this mapping for future queries about &quot;Revenue&quot;.</span>
                </label>
              </div>
            </div>
          </div>

          <div className="grf-repair-panel__footer">
            <button
              className="grf-btn grf-btn--secondary"
              onClick={handlePrevStep}
              disabled={currentStep === 1}
            >
              Back
            </button>
            <button className="grf-btn grf-btn--primary" onClick={handleNextStep}>
              {currentStep === TOTAL_STEPS ? 'Apply Fix & Retry' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
