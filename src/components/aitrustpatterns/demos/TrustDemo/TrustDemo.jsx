import React, { useState } from 'react';
import './TrustDemo.css';

import AppShell from './components/AppShell';
import SlideNavigation from './components/SlideNavigation';
import Slide1Onboarding from './components/slides/Slide1Onboarding';
import Slide2AskQuestion from './components/slides/Slide2AskQuestion';
import Slide3Clarifications from './components/slides/Slide3Clarifications';
import Slide4PlanExecute from './components/slides/Slide4PlanExecute';
import Slide5ExecutionCollapsed from './components/slides/Slide5ExecutionCollapsed';
import Slide6ExecutionExpanded from './components/slides/Slide6ExecutionExpanded';
import Slide7Results from './components/slides/Slide7Results';
import Slide8ControlTower from './components/slides/Slide8ControlTower';
import Slide9Orchestration from './components/slides/Slide9Orchestration';
import Slide10Audit from './components/slides/Slide10Audit';
import Slide11TaskInbox from './components/slides/Slide11TaskInbox';

// Map of slides to their corresponding nav items
const SLIDE_NAV_MAP = {
  0: 'chats',    // New Conversation - chats context
  1: 'chats',    // Ask Your Question - chats context
  2: 'chats',    // Clarifications - chat context
  3: 'chats',    // Plan-Execute - chat context
  4: 'chats',    // Execution (collapsed) - chat context
  5: 'chats',    // Execution (expanded) - chat context
  6: 'chats',    // Results/Options - chat context
  7: 'tasks',    // History - tasks context
  8: 'tasks',    // Task Detail - tasks context
  9: 'tasks',    // Activity Detail - tasks context
  10: 'tasks',   // Task Inbox - tasks context
};

// Slide components that need special props
const SLIDES_CONFIG = [
  { component: Slide1Onboarding },
  { component: Slide2AskQuestion },
  { component: Slide3Clarifications, needsClarificationProps: true },
  { component: Slide4PlanExecute, needsClarificationProps: true },
  { component: Slide5ExecutionCollapsed },
  { component: Slide6ExecutionExpanded },
  { component: Slide7Results },
  { component: Slide8ControlTower },
  { component: Slide9Orchestration },
  { component: Slide10Audit },
  { component: Slide11TaskInbox },
];

export default function TrustDemo() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < SLIDES_CONFIG.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleToggleAnnotations = () => {
    setShowAnnotations(!showAnnotations);
  };

  const handleOptionSelect = (questionIndex, option) => {
    setSelectedOptions({ ...selectedOptions, [questionIndex]: option });
  };

  const handleScenarioSelect = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const currentSlideConfig = SLIDES_CONFIG[currentSlide];
  const CurrentSlideComponent = currentSlideConfig.component;
  const activeNav = SLIDE_NAV_MAP[currentSlide] || 'chats';

  // Build props based on slide configuration
  const slideProps = { showAnnotations };
  if (currentSlideConfig.needsClarificationProps) {
    slideProps.selectedOptions = selectedOptions;
    slideProps.onOptionSelect = handleOptionSelect;
  }

  return (
    <div className="td-trust-demo">
      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={SLIDES_CONFIG.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onScenarioSelect={handleScenarioSelect}
        showAnnotations={showAnnotations}
        onToggleAnnotations={handleToggleAnnotations}
      />

      <AppShell activeNav={activeNav}>
        <div className="td-trust-demo__slide-container">
          <CurrentSlideComponent {...slideProps} />
        </div>
      </AppShell>
    </div>
  );
}
