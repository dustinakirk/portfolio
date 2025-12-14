import React, { useState, useCallback, useMemo, useEffect } from 'react';
import './RiskPolicyHeatmapsDemo.css';

// Configuration data
const WORKFLOWS = [
  { id: 'contract', name: 'Contract Renewal Bot' },
  { id: 'social', name: 'Social Posting Assistant' },
  { id: 'support', name: 'L1 Support Agent' },
  { id: 'finance', name: 'Invoice Processing' },
];

const DIMENSIONS = [
  { id: 'privacy', name: 'Data Privacy' },
  { id: 'regulatory', name: 'Regulatory' },
  { id: 'financial', name: 'Financial Impact' },
  { id: 'brand', name: 'Brand Safety' },
];

// Initial risk scores (0-10)
const INITIAL_DATA = {
  'contract-privacy': 8,
  'contract-regulatory': 9,
  'contract-financial': 7,
  'contract-brand': 2,
  'social-privacy': 2,
  'social-regulatory': 4,
  'social-financial': 1,
  'social-brand': 9,
  'support-privacy': 5,
  'support-regulatory': 3,
  'support-financial': 2,
  'support-brand': 6,
  'finance-privacy': 7,
  'finance-regulatory': 8,
  'finance-financial': 9,
  'finance-brand': 1,
};

// Helper to get risk level info
function getRiskLevel(score) {
  if (score >= 7) return { level: 'high', label: 'High' };
  if (score >= 4) return { level: 'med', label: 'Med' };
  return { level: 'low', label: 'Low' };
}

// Heatmap Cell component
function HeatmapCell({ cellId, score, isSelected, workflow, dimension, onClick }) {
  const riskInfo = getRiskLevel(score);

  const handleClick = () => {
    onClick(cellId, workflow, dimension, score);
  };

  return (
    <td
      className={`rph-heatmap__cell rph-heatmap__cell--${riskInfo.level}${isSelected ? ' rph-heatmap__cell--selected' : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`${workflow} - ${dimension}: Risk score ${score}, ${riskInfo.label} risk. Click to adjust policy.`}
    >
      <span className="rph-heatmap__score">{score}</span>
      <span className="rph-heatmap__status">{riskInfo.label}</span>
    </td>
  );
}

// Policy Panel component
function PolicyPanel({
  isActive,
  workflowName,
  dimensionName,
  currentScore,
  hitlValue,
  accessValue,
  onHitlChange,
  onAccessChange,
  onSave,
  onCancel,
  simulatedScore,
}) {
  const riskInfo = getRiskLevel(simulatedScore);

  return (
    <aside className={`rph-panel${isActive ? ' rph-panel--active' : ''}`}>
      <div className="rph-panel__header">
        <h3 className="rph-panel__title">{workflowName}</h3>
        <p className="rph-panel__subtitle">Adjusting policy for: {dimensionName}</p>
      </div>

      <div className="rph-panel__metric-card">
        <div>
          <span className="rph-panel__metric-label">Current Risk Score</span>
          <div className="rph-panel__metric-value">{simulatedScore}/10</div>
        </div>
        <span className={`rph-badge rph-badge--${riskInfo.level}`}>{riskInfo.label}</span>
      </div>

      <form className="rph-form" onSubmit={(e) => e.preventDefault()}>
        <div className="rph-form__group">
          <label className="rph-form__label" htmlFor="rph-hitl-select">
            Human-in-the-Loop
          </label>
          <select
            id="rph-hitl-select"
            className="rph-form__select"
            value={hitlValue}
            onChange={(e) => onHitlChange(e.target.value)}
          >
            <option value="none">None (Fully Autonomous)</option>
            <option value="post-audit">Post-Action Audit</option>
            <option value="approval">Pre-Action Approval</option>
          </select>
          <p className="rph-form__help">
            Requiring approval significantly lowers risk but slows throughput.
          </p>
        </div>

        <div className="rph-form__group">
          <label className="rph-form__label" htmlFor="rph-access-range">
            Data Access Level
          </label>
          <div className="rph-form__range-wrapper">
            <span className="rph-form__range-label">Restricted</span>
            <input
              type="range"
              id="rph-access-range"
              className="rph-form__range"
              min="1"
              max="3"
              step="1"
              value={accessValue}
              onChange={(e) => onAccessChange(parseInt(e.target.value, 10))}
            />
            <span className="rph-form__range-label rph-form__range-label--end">Full</span>
          </div>
          <p className="rph-form__help">
            {accessValue === 1 && 'Read-only access to non-sensitive fields.'}
            {accessValue === 2 && 'Read/Write access to non-sensitive fields.'}
            {accessValue === 3 && 'Full Read/Write access to sensitive records.'}
          </p>
        </div>
      </form>

      <div className="rph-panel__actions">
        <button type="button" className="rph-btn rph-btn--secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="button" className="rph-btn rph-btn--primary" onClick={onSave}>
          Save Policy
        </button>
      </div>
    </aside>
  );
}

export default function RiskPolicyHeatmapsDemo() {
  const [data, setData] = useState({ ...INITIAL_DATA });
  const [selectedCell, setSelectedCell] = useState(null);
  const [hitlValue, setHitlValue] = useState('none');
  const [accessValue, setAccessValue] = useState(3);

  // Get workflow and dimension names from selected cell
  const selectedInfo = useMemo(() => {
    if (!selectedCell) return { workflowName: '', dimensionName: '', score: 0 };
    const [wfId, dimId] = selectedCell.split('-');
    const workflow = WORKFLOWS.find((w) => w.id === wfId);
    const dimension = DIMENSIONS.find((d) => d.id === dimId);
    return {
      workflowName: workflow?.name || '',
      dimensionName: dimension?.name || '',
      score: data[selectedCell] || 0,
    };
  }, [selectedCell, data]);

  // Calculate simulated score based on policy settings
  const simulatedScore = useMemo(() => {
    if (!selectedCell) return 0;
    const baseScore = data[selectedCell] || 5;
    let modifier = 0;

    if (hitlValue === 'approval') modifier -= 4;
    else if (hitlValue === 'post-audit') modifier -= 2;

    if (accessValue === 1) modifier -= 2;
    else if (accessValue === 2) modifier -= 1;

    // Force lowest risk for most restrictive settings
    if (hitlValue === 'approval' && accessValue === 1) return 1;

    return Math.max(1, Math.min(10, baseScore + modifier));
  }, [selectedCell, data, hitlValue, accessValue]);

  // Handle cell click
  const handleCellClick = useCallback((cellId, workflowName, dimensionName, score) => {
    setSelectedCell(cellId);
    // Set initial form values based on current score
    if (score >= 7) {
      setHitlValue('none');
      setAccessValue(3);
    } else if (score >= 4) {
      setHitlValue('post-audit');
      setAccessValue(2);
    } else {
      setHitlValue('approval');
      setAccessValue(1);
    }
  }, []);

  // Handle save
  const handleSave = useCallback(() => {
    if (selectedCell) {
      setData((prev) => ({
        ...prev,
        [selectedCell]: simulatedScore,
      }));
      setSelectedCell(null);
    }
  }, [selectedCell, simulatedScore]);

  // Handle cancel
  const handleCancel = useCallback(() => {
    setSelectedCell(null);
  }, []);

  // Handle reset
  const handleReset = useCallback(() => {
    setData({ ...INITIAL_DATA });
    setSelectedCell(null);
    setHitlValue('none');
    setAccessValue(3);
  }, []);

  return (
    <div className="rph-showcase" role="region" aria-label="Risk & Policy Heatmaps demo">
      <header className="pattern-demo__header">
        <h2 className="pattern-demo__title">Interactive Demo</h2>
        <button className="pattern-demo__reset-btn" onClick={handleReset}>
          Reset Demo
        </button>
      </header>

      <div className="rph-showcase__stage">
        <div className="rph-heatmap">
          <table className="rph-heatmap__table">
            <thead>
              <tr>
                <th className="rph-heatmap__header">Agent / Workflow</th>
                {DIMENSIONS.map((dim) => (
                  <th key={dim.id} className="rph-heatmap__header">
                    {dim.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {WORKFLOWS.map((wf) => (
                <tr key={wf.id}>
                  <td className="rph-heatmap__row-label">{wf.name}</td>
                  {DIMENSIONS.map((dim) => {
                    const cellId = `${wf.id}-${dim.id}`;
                    return (
                      <HeatmapCell
                        key={cellId}
                        cellId={cellId}
                        score={data[cellId]}
                        isSelected={selectedCell === cellId}
                        workflow={wf.name}
                        dimension={dim.name}
                        onClick={handleCellClick}
                      />
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <PolicyPanel
          isActive={!!selectedCell}
          workflowName={selectedInfo.workflowName}
          dimensionName={selectedInfo.dimensionName}
          currentScore={selectedInfo.score}
          hitlValue={hitlValue}
          accessValue={accessValue}
          onHitlChange={setHitlValue}
          onAccessChange={setAccessValue}
          onSave={handleSave}
          onCancel={handleCancel}
          simulatedScore={simulatedScore}
        />
      </div>
    </div>
  );
}
