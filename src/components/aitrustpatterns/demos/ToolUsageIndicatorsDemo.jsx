import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Database,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  Play,
  RotateCcw,
  FileText,
  ShieldCheck
} from 'lucide-react';
import './ToolUsageIndicatorsDemo.css';

export default function ToolUsageIndicatorsDemo() {
  const [demoState, setDemoState] = useState('idle'); // idle, running, approval-needed, completed
  const [steps, setSteps] = useState({
    planning: 'idle', // idle, active, done
    search: 'idle',   // idle, active, done
    query: 'idle',    // idle, active, done
    update: 'idle'    // idle, active, waiting, done
  });

  const scrollRef = useRef(null);

  // Helper to reset the demo
  const resetDemo = () => {
    setDemoState('idle');
    setSteps({
      planning: 'idle',
      search: 'idle',
      query: 'idle',
      update: 'idle'
    });
  };

  // The simulation logic
  const startDemo = () => {
    setDemoState('running');

    // Step 1: Planning
    setSteps(prev => ({ ...prev, planning: 'active' }));

    setTimeout(() => {
      setSteps(prev => ({ ...prev, planning: 'done', search: 'active' }));

      // Step 2: Search (Read-only)
      setTimeout(() => {
        setSteps(prev => ({ ...prev, search: 'done', query: 'active' }));

        // Step 3: Query (Read-only)
        setTimeout(() => {
          setSteps(prev => ({ ...prev, query: 'done', update: 'active' }));

          // Step 4: Prepare Update (Write - Stops for approval)
          setTimeout(() => {
            setSteps(prev => ({ ...prev, update: 'waiting' }));
            setDemoState('approval-needed');
          }, 1500);

        }, 1800);

      }, 1500);

    }, 1000);
  };

  // Handle User Approval
  const handleApprove = () => {
    setSteps(prev => ({ ...prev, update: 'active' })); // Resume animation

    setTimeout(() => {
      setSteps(prev => ({ ...prev, update: 'done' }));
      setDemoState('completed');
    }, 1200);
  };

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [steps, demoState]);

  return (
    <div className="tui-showcase">
      <header className="tui-showcase__header">
        <div className="tui-showcase__header-content">
          <h2 className="tui-showcase__title">Tool Usage Indicators</h2>
          <p className="tui-showcase__description">
            Visualizing the difference between &quot;thinking&quot;, &quot;read-only&quot; searches,
            and &quot;write&quot; operations that modify data.
          </p>
        </div>
        <button className="tui-showcase__reset-btn" onClick={resetDemo}>
          <RotateCcw size={14} />
          Reset Demo
        </button>
      </header>

      <div className="tui-chat">
        <div ref={scrollRef} className="tui-chat__messages">

          {/* USER MESSAGE */}
          {demoState !== 'idle' && (
            <div className="tui-message tui-message--user">
              <div className="tui-message__bubble">
                Audit this quarter&apos;s pipeline, flag risky deals, and update opportunity stages if confidence is below 40%.
              </div>
            </div>
          )}

          {/* AGENT RESPONSE & TOOL INDICATORS */}
          {demoState !== 'idle' && (
            <div className="tui-agent-response">
              <div className="tui-agent-response__avatar">
                <span className="tui-agent-response__avatar-text">AI</span>
              </div>

              <div className="tui-agent-response__content">
                {/* 1. Agent Logic / Planning Indicator */}
                {steps.planning === 'active' && (
                  <div className="tui-thinking">
                    Thinking...
                  </div>
                )}

                {/* 2. Tool Usage Block (The Core Pattern) */}
                {steps.planning === 'done' && (
                  <div className="tui-activity">

                    {/* READ-ONLY TOOL: SEARCH */}
                    <div className={`tui-row tui-row--${steps.search}`}>
                      <div className="tui-row__icon">
                        {steps.search === 'active' ? <Loader2 size={16} className="tui-spinner tui-row__icon--blue" /> :
                         steps.search === 'done' ? <CheckCircle2 size={16} className="tui-row__icon--success" /> :
                         <Search size={16} />}
                      </div>
                      <div className="tui-row__content">
                        <div className="tui-row__label">
                          Searching knowledge base
                          {steps.search === 'active' && <span className="tui-badge tui-badge--read">Reading</span>}
                        </div>
                        {steps.search === 'active' && <div className="tui-row__details">Scanning &apos;Sales Playbook 2024&apos;...</div>}
                        {steps.search === 'done' && <div className="tui-row__details">Found 3 relevant policies regarding pipeline risk.</div>}
                      </div>
                    </div>

                    {/* READ-ONLY TOOL: DATABASE QUERY */}
                    {steps.search === 'done' && (
                      <div className={`tui-row tui-row--${steps.query}`}>
                        <div className="tui-row__icon">
                          {steps.query === 'active' ? <Loader2 size={16} className="tui-spinner tui-row__icon--blue" /> :
                           steps.query === 'done' ? <CheckCircle2 size={16} className="tui-row__icon--success" /> :
                           <Database size={16} />}
                        </div>
                        <div className="tui-row__content">
                          <div className="tui-row__label">
                            Querying &apos;opportunities&apos; table
                            {steps.query === 'active' && <span className="tui-badge tui-badge--read">Reading</span>}
                          </div>
                          {steps.query === 'active' && <div className="tui-row__details tui-thinking">Filtering by close_date = &apos;Q4&apos; AND stage != &apos;Closed&apos;...</div>}
                          {steps.query === 'done' && <div className="tui-row__details">Retrieved 42 active opportunities.</div>}
                        </div>
                      </div>
                    )}

                    {/* WRITE TOOL: UPDATE RECORDS (With Approval State) */}
                    {steps.query === 'done' && (
                      <div className={`tui-row tui-row--${steps.update}`}>
                        <div className="tui-row__icon">
                          {steps.update === 'active' ? <Loader2 size={16} className="tui-spinner" style={{ color: '#ea580c' }} /> :
                           steps.update === 'done' ? <CheckCircle2 size={16} className="tui-row__icon--success" /> :
                           steps.update === 'waiting' ? <AlertTriangle size={16} className="tui-row__icon--warning" /> :
                           <FileText size={16} />}
                        </div>
                        <div className="tui-row__content">
                          <div className="tui-row__label">
                            Updating CRM Records
                            {steps.update !== 'done' && <span className="tui-badge tui-badge--write">Write</span>}
                          </div>

                          {/* Waiting for Approval UI */}
                          {steps.update === 'waiting' && (
                            <div className="tui-approval">
                              <div className="tui-approval__header">
                                <ShieldCheck size={14} />
                                Review Proposed Changes
                              </div>
                              <p className="tui-approval__text">
                                I found 5 deals with confidence &lt; 40%. Ready to downgrade stage to &quot;Nurture&quot;.
                              </p>
                              <div className="tui-approval__actions">
                                <button className="tui-btn tui-btn--primary" onClick={handleApprove}>
                                  Approve & Update
                                </button>
                                <button className="tui-btn tui-btn--secondary" onClick={resetDemo}>
                                  Reject
                                </button>
                              </div>
                            </div>
                          )}

                          {/* Active Writing State */}
                          {steps.update === 'active' && (
                            <div className="tui-row__details tui-row__details--writing">Writing changes to Salesforce API...</div>
                          )}

                          {/* Completed State */}
                          {steps.update === 'done' && (
                            <div className="tui-row__details">Successfully updated 5 opportunities to &quot;Nurture&quot;.</div>
                          )}
                        </div>
                      </div>
                    )}

                  </div>
                )}

                {/* 3. Final Text Response */}
                {demoState === 'completed' && (
                  <div className="tui-final-response">
                    <p className="tui-final-response__text">
                      I&apos;ve completed the audit. I reviewed the sales playbook, scanned your Q4 opportunities, and moved 5 low-confidence deals to the &quot;Nurture&quot; stage as requested. The pipeline is now updated.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* INPUT SIMULATION AREA */}
        <div className="tui-chat__controls">
          {demoState === 'idle' ? (
            <>
              <div className="tui-control-input tui-control-input--disabled">
                Audit this quarter&apos;s pipeline and update...
              </div>
              <button
                className="tui-control-btn"
                onClick={startDemo}
              >
                <Play size={14} /> Run Demo
              </button>
            </>
          ) : (
            <>
              <div className="tui-control-input tui-control-input--disabled">
                AI is processing...
              </div>
              <button className="tui-control-btn" disabled>
                Send
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
