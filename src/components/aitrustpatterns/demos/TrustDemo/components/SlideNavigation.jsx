import React from 'react';

// Slide navigation toolbar - positioned at top of demo container
// Shows scenario tabs, step number, title, description, annotation toggle, and navigation buttons

// Scenario definitions for grouping slides
const SCENARIOS = [
  { id: 'chat', label: 'Chat With Agent', slides: [0, 1, 2, 3, 4, 5, 6] },
  { id: 'audit', label: "Audit Agent's Work", slides: [7, 8, 9] },
  { id: 'inbox', label: 'Task Intervention Inbox', slides: [10] },
];

// Helper to find current scenario based on slide index
const getScenarioForSlide = (slideIndex) => {
  return SCENARIOS.find(s => s.slides.includes(slideIndex));
};

const SLIDE_DATA = [
  {
    title: 'Meet Atlas',
    description: 'Introduces the agent with explicit capabilities, limitations, and autonomy mode selection.',
  },
  {
    title: 'Ask a Question',
    description: 'Compose requests with suggested prompts, sandbox mode toggle, and per-query autonomy control.',
  },
  {
    title: 'Clarify & Consent',
    description: 'Review assumptions, toggle tool permissions, and answer clarifying questions before execution.',
  },
  {
    title: 'Review the Plan',
    description: 'Agent presents a detailed execution plan with time/cost estimates and adjustable guardrails.',
  },
  {
    title: 'Monitor Execution',
    description: 'Track real-time progress with pause/resume controls and mid-stream steering.',
  },
  {
    title: 'Audit Activity',
    description: 'Drill into the activity timeline to see agent reasoning, tool calls, and resource costs.',
  },
  {
    title: 'Review Results',
    description: 'Multiple options ranked by confidence with supporting and counter-evidence for each.',
  },
  {
    title: 'Control Tower',
    description: 'Centralized dashboard showing all running, blocked, and completed tasks with intervention controls.',
  },
  {
    title: 'Task Orchestration',
    description: 'View execution plan and live activity timeline showing step-by-step progress and tool usage.',
  },
  {
    title: 'Activity Audit',
    description: 'Deep inspection of tool calls with inputs, outputs, reasoning, and cost metrics.',
  },
  {
    title: 'Task Inbox',
    description: 'Review and respond to tasks awaiting clarification, approval, or action.',
  },
];

export default function SlideNavigation({
  currentSlide,
  totalSlides = 11,
  onPrevious,
  onNext,
  onScenarioSelect,
  showAnnotations,
  onToggleAnnotations,
}) {
  const slideData = SLIDE_DATA[currentSlide] || {};
  const currentScenario = getScenarioForSlide(currentSlide);

  return (
    <div className="td-slide-nav">
      {/* Scenario Tabs Row */}
      <div className="td-scenario-tabs">
        {SCENARIOS.map((scenario) => {
          const isActive = currentScenario?.id === scenario.id;

          return (
            <button
              key={scenario.id}
              className={`td-scenario-tab ${isActive ? 'td-scenario-tab--active' : ''}`}
              onClick={() => onScenarioSelect(scenario.slides[0])}
              aria-current={isActive ? 'true' : undefined}
            >
              <span className="td-scenario-tab__label">{scenario.label}</span>
            </button>
          );
        })}
      </div>

      {/* Controls Row */}
      <div className="td-slide-nav__row">
        {/* Left: Slide info */}
        <div className="td-slide-nav__info">
          <div className="td-slide-nav__step">{slideData.title}</div>
          <div className="td-slide-nav__description">{slideData.description}</div>
        </div>

        {/* Right: Controls */}
        <div className="td-slide-nav__controls">
          {/* Annotation toggle */}
          <div className="td-slide-nav__toggle">
            <span className="td-slide-nav__toggle-label">Annotations</span>
            <button
              className={`td-toggle ${showAnnotations ? 'td-toggle--active' : ''}`}
              onClick={onToggleAnnotations}
              aria-label={showAnnotations ? 'Hide annotations' : 'Show annotations'}
            >
              <span className="td-toggle-knob"></span>
            </button>
          </div>

          {/* Slide counter */}
          <div className="td-slide-nav__counter">
            <span className="td-slide-nav__counter-label">Slide</span>
            <span className="td-slide-nav__counter-current">{currentSlide + 1}</span>
            <span className="td-slide-nav__counter-separator">/ {totalSlides}</span>
          </div>

          {/* Navigation buttons */}
          <button
            className="td-slide-nav__arrow"
            onClick={onPrevious}
            disabled={currentSlide === 0}
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 15l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="td-slide-nav__arrow td-slide-nav__arrow--next"
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
