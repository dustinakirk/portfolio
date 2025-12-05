import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  Server,
  BrainCircuit,
  Clock,
  Loader2,
  Database,
  ChevronRight,
  ChevronDown,
  Layout,
  GitBranch,
  ShieldCheck,
  FileJson,
  HardDrive,
  Zap
} from 'lucide-react';
import './OrchestrationGraphDemo.css';

// --- Complex Scenario: Cloud Tenant Migration ---
const MIGRATION_WORKFLOW = {
  id: 'root',
  label: 'Migration Assistant: Tenant #4092',
  type: 'reasoning',
  icon: BrainCircuit,
  description: 'Analyzing migration request: US-East-1 -> EU-West-3. Determining strategy.',
  resultSummary: 'Strategy Selected: "Lift & Shift" with zero-downtime replication.',
  duration: 1800,
  children: [
    {
      id: 'phase-prep',
      label: 'Phase 1: Pre-Flight Checks',
      type: 'parallel_group',
      icon: GitBranch,
      description: 'Initiating parallel environment validation.',
      resultSummary: 'All checks passed.',
      duration: 200,
      children: [
        {
          id: 'check-compliance',
          label: 'Compliance Guardian',
          type: 'tool',
          icon: ShieldCheck,
          description: 'Scanning data classification for GDPR requirements...',
          resultSummary: 'Compliance Verified: No PII blocks found.',
          duration: 3200
        },
        {
          id: 'check-capacity',
          label: 'Capacity Planner',
          type: 'tool',
          icon: Server,
          description: 'Querying EU-West-3 quota availability...',
          resultSummary: 'Quota Available: 40 vCPUs allocated.',
          duration: 2500
        },
        {
          id: 'source-snapshot',
          label: 'DB Snapshot Agent',
          type: 'action',
          icon: Database,
          description: 'Locking transaction logs & initiating snapshot...',
          resultSummary: 'Snapshot ID: snap-0921 created.',
          duration: 4000
        }
      ]
    },
    {
      id: 'phase-exec',
      label: 'Phase 2: Data Replication',
      type: 'reasoning',
      icon: BrainCircuit,
      description: 'Pre-checks passed. Initiating data transfer protocols.',
      resultSummary: 'Transfer pipelines active.',
      duration: 1200,
      children: [
        {
          id: 'exec-blob',
          label: 'Blob Storage Sync',
          type: 'parallel_group',
          icon: GitBranch,
          description: 'Parallelizing file transfer.',
          resultSummary: 'Buckets synced.',
          duration: 200,
          children: [
             { id: 'transfer-images', label: 'Transfer: /images', type: 'action', icon: HardDrive, description: 'Copying 1.2GB static assets...', resultSummary: '100% Complete', duration: 3500 },
             { id: 'transfer-docs', label: 'Transfer: /docs', type: 'action', icon: FileJson, description: 'Copying 400MB PDF archives...', resultSummary: '100% Complete', duration: 2800 }
          ]
        },
        {
          id: 'exec-sql',
          label: 'SQL Rehydration',
          type: 'tool',
          icon: Database,
          description: 'Restoring snapshot snap-0921 to target instance...',
          resultSummary: 'Restore Complete. Integrity Check: OK.',
          duration: 4500
        }
      ]
    },
    {
      id: 'final-report',
      label: 'Final Validation',
      type: 'reasoning',
      icon: CheckCircle2,
      description: 'Verifying endpoints and DNS propagation.',
      resultSummary: 'Migration Success. Report generated.',
      duration: 2000
    }
  ]
};

// --- Extracted & Memoized TreeNode ---
const TreeNode = React.memo(function TreeNode({ node, level = 0, ctx }) {
  const { activeNodeIds, completedNodeIds, expandedNodes, status, toggleNode } = ctx;

  const isActive = activeNodeIds.includes(node.id);
  const isCompleted = completedNodeIds.includes(node.id);
  const isExpanded = expandedNodes.includes(node.id);

  let state = 'pending';
  if (status === 'idle' && node.id === 'root') state = 'idle';
  if (isCompleted) state = 'completed';
  if (isActive) state = 'active';

  const hasChildren = node.children && node.children.length > 0;
  const Icon = node.icon;
  const isGroup = node.type === 'parallel_group';

  return (
    <div className="ogd-tree-item">
      <div
        className={`ogd-tree-row ogd-tree-row--${state} ${isGroup ? 'ogd-tree-row--group' : ''}`}
        style={{ paddingLeft: `${level * 24}px` }}
      >
        <div className="ogd-tree-connector">
          {level > 0 && <span className="ogd-tree-line-L"></span>}
        </div>

        <button
          onClick={() => toggleNode(node.id)}
          className={`ogd-tree-toggle ${!hasChildren ? 'ogd-tree-toggle--invisible' : ''}`}
          disabled={status === 'running'}
        >
          {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </button>

        <div className="ogd-tree-card">
          <div className={`ogd-tree-icon-wrapper ${state === 'completed' && !isGroup ? 'ogd-tree-icon-wrapper--success' : ''}`}>
             {state === 'completed' && !isGroup ? (
               <CheckCircle2 size={16} />
             ) : (
               <Icon size={16} />
             )}
          </div>

          <div className="ogd-tree-content">
            <div className="ogd-tree-title">
              {node.label}
              {state === 'active' && <Loader2 size={12} className="ogd-spin" style={{ marginLeft: '8px', color: '#3b82f6' }} />}
            </div>
            {!isGroup && <div className="ogd-tree-desc">{node.description}</div>}
          </div>

          {state === 'active' && (
            <div className="ogd-tree-badge">
                {isGroup ? 'Spawning...' : 'Running'}
            </div>
          )}
        </div>
      </div>

      {hasChildren && isExpanded && (
        <div className="ogd-tree-children">
           <div className="ogd-tree-guide-line" style={{ left: `${(level * 24) + 19}px` }}></div>
           {node.children.map((child) => (
             <TreeNode
               key={child.id}
               node={child}
               level={level + 1}
               ctx={ctx}
             />
           ))}
        </div>
      )}
    </div>
  );
}, (prev, next) => prev.node === next.node && prev.ctx === next.ctx);


// --- Event Log Item Component ---
function EventCard({ entry }) {
  const isReasoning = entry.type === 'reasoning';
  const isGroup = entry.type === 'parallel_group';

  // Group headers are small
  if (isGroup) {
      return (
        <div className="ogd-event-group">
            <GitBranch size={12} className="ogd-event-group__icon" />
            <span className="ogd-event-group__text">Parallel Execution Group Completed</span>
            <span className="ogd-event-group__duration">{entry.duration}ms</span>
        </div>
      );
  }

  const iconClass = isReasoning ? 'ogd-event-card__icon--reasoning' :
                    entry.type === 'tool' ? 'ogd-event-card__icon--tool' :
                    'ogd-event-card__icon--action';

  const textClass = isReasoning ? 'ogd-event-card__text--reasoning' : 'ogd-event-card__text--tool';

  return (
    <div className={`ogd-event-card ogd-event-card--${entry.type}`}>
        <div className="ogd-event-card__header">
            <div className="ogd-event-card__header-left">
                <div className={`ogd-event-card__icon ${iconClass}`}>
                    <entry.icon size={14} />
                </div>
                <div>
                    <div className="ogd-event-card__title">{entry.label}</div>
                    <div className="ogd-event-card__timestamp">{entry.timestamp}</div>
                </div>
            </div>
            <div className="ogd-event-card__duration">
                {entry.duration}ms
            </div>
        </div>

        <div className="ogd-event-card__body">
            <div className="ogd-event-card__section">
                <span className="ogd-event-card__label">Activity</span>
                <p className="ogd-event-card__text">{entry.description}</p>
            </div>
            <div className="ogd-event-card__section">
                <span className="ogd-event-card__label">{isReasoning ? 'Decision' : 'Output'}</span>
                <p className={`ogd-event-card__text ${textClass}`}>
                    {entry.result}
                </p>
            </div>
        </div>
    </div>
  );
}


// --- Main Component ---
export default function OrchestrationGraphDemo() {
  const [activeNodeIds, setActiveNodeIds] = useState([]);
  const [completedNodeIds, setCompletedNodeIds] = useState([]);
  const [status, setStatus] = useState('idle');
  const [logs, setLogs] = useState([]);
  const [expandedNodes, setExpandedNodes] = useState([]);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);

  const timersRef = useRef([]);

  // Stable Actions
  const addLog = useCallback((node, actualDuration) => {
    const timestamp = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setLogs(prev => [...prev, {
        id: Math.random().toString(36),
        nodeId: node.id,
        label: node.label,
        type: node.type,
        description: node.description,
        result: node.resultSummary,
        duration: actualDuration,
        timestamp,
        icon: node.icon
    }]);
  }, []);

  const toggleNode = useCallback((id) => {
    setExpandedNodes(prev => prev.includes(id) ? prev.filter(n => n !== id) : [...prev, id]);
  }, []);

  const resetDemo = useCallback(() => {
    timersRef.current.forEach(t => clearTimeout(t));
    timersRef.current = [];
    setActiveNodeIds([]);
    setCompletedNodeIds([]);
    setExpandedNodes([]);
    setStatus('idle');
    setLogs([]);
  }, []);

  // Execution Engine
  const runNode = useCallback(async (node, multiplier) => {
    // 1. Activate
    setActiveNodeIds(prev => [...prev, node.id]);

    // 2. Wait (Simulate Work)
    const adjustedDuration = node.duration / multiplier;

    await new Promise((resolve) => {
      const t = setTimeout(resolve, adjustedDuration);
      timersRef.current.push(t);
    });

    // 3. Complete & Log
    setCompletedNodeIds(prev => [...prev, node.id]);
    setActiveNodeIds(prev => prev.filter(id => id !== node.id));

    addLog(node, node.duration);

    // 4. Children (The "Build Out")
    if (node.children && node.children.length > 0) {
      setExpandedNodes(prev => Array.from(new Set([...prev, node.id])));

      // Aesthetic pause before expanding
      await new Promise(r => setTimeout(r, 400 / multiplier));

      // Execute children
      await Promise.all(node.children.map(child => runNode(child, multiplier)));
    }

    if (node.id === 'root') {
      setStatus('completed');
    }
  }, [addLog]);

  const startWorkflow = useCallback(() => {
    if (status === 'running') return;
    resetDemo();
    setStatus('running');
    runNode(MIGRATION_WORKFLOW, speedMultiplier);
  }, [status, resetDemo, runNode, speedMultiplier]);

  const treeContextValue = useMemo(() => ({
    activeNodeIds,
    completedNodeIds,
    expandedNodes,
    status,
    toggleNode,
    speedMultiplier
  }), [activeNodeIds, completedNodeIds, expandedNodes, status, toggleNode, speedMultiplier]);

  // Auto-scroll logs
  const logsEndRef = useRef(null);
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="ogd-showcase">
      <header className="ogd-showcase__header">
        <div className="ogd-showcase__header-content">
          <h2 className="ogd-showcase__title">Orchestration Graph</h2>
          <p className="ogd-showcase__description">
            Watch a multi-agent workflow execute in real-time. The tree view shows agent
            hierarchy and execution state, while the timeline logs each step&apos;s activity and output.
          </p>
        </div>
        <button className="ogd-showcase__reset-btn" onClick={resetDemo}>
          Reset Demo
        </button>
      </header>

      <div className="ogd-content">
        {/* Left: Tree */}
        <div className="ogd-tree-panel">
          <div className="ogd-tree-header">
            <Layout size={18} style={{ color: '#64748b' }} />
            <span className="ogd-tree-header__title">Migration Orchestrator</span>

            <div className="ogd-tree-header__controls">
              <div className="ogd-speed-toggle">
                  <button
                     onClick={() => setSpeedMultiplier(1)}
                     className={`ogd-speed-toggle__btn ${speedMultiplier === 1 ? 'ogd-speed-toggle__btn--active' : ''}`}
                  >
                      1x
                  </button>
                  <button
                     onClick={() => setSpeedMultiplier(2)}
                     className={`ogd-speed-toggle__btn ${speedMultiplier === 2 ? 'ogd-speed-toggle__btn--active' : ''}`}
                  >
                      2x
                  </button>
                  <button
                     onClick={() => setSpeedMultiplier(10)}
                     className={`ogd-speed-toggle__btn ${speedMultiplier === 10 ? 'ogd-speed-toggle__btn--active' : ''}`}
                  >
                      Max
                  </button>
              </div>

              <div className="ogd-tree-header__divider"></div>

              <button
                  onClick={resetDemo}
                  className="ogd-control-btn"
                  title="Reset"
                >
                  <RotateCcw size={16} />
              </button>
              <button
                onClick={startWorkflow}
                disabled={status === 'running'}
                className="ogd-start-btn"
              >
                {status === 'running' ? <Loader2 size={12} className="ogd-spin" /> : <Play size={12} />}
                {status === 'running' ? 'Running' : 'Start'}
              </button>
            </div>
          </div>

          <div className="ogd-tree-scroll">
            <TreeNode node={MIGRATION_WORKFLOW} ctx={treeContextValue} />
          </div>
        </div>

        {/* Right: Event Log */}
        <div className="ogd-timeline-panel">
          <div className="ogd-timeline-header">
             <Clock size={16} style={{ color: '#64748b' }} />
             <span className="ogd-timeline-header__title">Activity Timeline</span>
             {logs.length > 0 && (
                 <span className="ogd-timeline-header__count">
                     {logs.length} Events
                 </span>
             )}
          </div>

          <div className="ogd-event-list">
             {logs.length === 0 && (
                 <div className="ogd-event-list__empty">
                     <Zap size={24} className="ogd-event-list__empty-icon" />
                     <p className="ogd-event-list__empty-text">Start the workflow to view the detailed execution timeline.</p>
                 </div>
             )}
             {logs.map((entry) => (
                 <EventCard key={entry.id} entry={entry} />
             ))}
             <div ref={logsEndRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
