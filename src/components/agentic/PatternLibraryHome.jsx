import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AgenticPatternsLayout from '../AgenticPatternsLayout';
import {
  AI_TRUST_PATTERN_CATEGORIES,
  getPatternsByCategory,
} from '../../data/aiTrustPatterns';

// Map pattern IDs to their image filenames
const PATTERN_IMAGES = {
  'agent-identity-role-contract': '/agentic/pattern_images/1.1 agent identity.png',
  'delegation-modes': '/agentic/pattern_images/1.2 delegation modes.png',
  'sandboxed-playgrounds': '/agentic/pattern_images/2.1 sandboxed playgrounds.png',
  'wayfinders': '/agentic/pattern_images/2.2 wayfinders.png',
  'progressive-disclosure-modes': '/agentic/pattern_images/2.3 progressive disclosure.png',
  'teach-me-interfaces': '/agentic/pattern_images/2.4 teach me interfaces.png',
  'scenario-templates-and-recipes': '/agentic/pattern_images/2.5 recipes.png',
  'feedback-on-results': '/agentic/pattern_images/2.6 feedback on results.png',
  'kill-switch-pause-resume': '/agentic/pattern_images/3.1 kill switch.png',
  'human-in-the-loop-hitl-gates': '/agentic/pattern_images/3.2 human-in-the-loop.png',
  'plan-then-execute-workflow': '/agentic/pattern_images/3.3 plan-then-execute.png',
  'steerability-polite-interruption': '/agentic/pattern_images/3.4 steerability.png',
  'scoped-permissions-tool-consent': '/agentic/pattern_images/3.5 scoped permissions.png',
  'rollback-version-history': '/agentic/pattern_images/3.6 rollback.png',
  'user-directed-tool-use': '/agentic/pattern_images/3.7 user-directed tool use.png',
  'structured-clarification-prompts': '/agentic/pattern_images/4.1 clarification prompts.png',
  'edit-request': '/agentic/pattern_images/4.2 edit request.png',
  'confirmed-assumptions': '/agentic/pattern_images/4.3 confirmed assumptions.png',
  'reasoning-glimpse': '/agentic/pattern_images/5.1 reasoning glimpse.png',
  'streaming-results-visualizations': '/agentic/pattern_images/5.2 streaming results.png',
  'tool-usage-indicators': '/agentic/pattern_images/5.3 tool usage.png',
  'activity-timeline-audit-log': '/agentic/pattern_images/5.4 activity timeline.png',
  'execution-progress-view': '/agentic/pattern_images/5.5 execution progress.png',
  'confessions-view': '/agentic/pattern_images/5.6 confessions.png',
  'source-anchoring-grounding': '/agentic/pattern_images/6.1 source anchoring.png',
  'confidence-thermometer': '/agentic/pattern_images/6.2 confidence thermometer.png',
  'semantic-highlighting-uncertainty': '/agentic/pattern_images/6.3 semantic highlighting.png',
  'multiple-presented-options': '/agentic/pattern_images/6.4 multiple options.png',
  'explanation-on-demand': '/agentic/pattern_images/6.5 explanation-on-demand.png',
  'counter-evidence': '/agentic/pattern_images/6.6 counter-evidence.png',
  'orchestration-graph': '/agentic/pattern_images/7.1 orchestration graph.png',
  'agent-registry-profiles': '/agentic/pattern_images/7.2 agent registry.png',
  'supervisor-agent': '/agentic/pattern_images/7.3 supervisor agent.png',
  'agent-handover-briefs': '/agentic/pattern_images/7.4 agent handover briefs.png',
  'assignment-board-work-queues': '/agentic/pattern_images/7.5 assignment board.png',
  'escalation-fallback-routing': '/agentic/pattern_images/7.6 escalation routing.png',
  'memory-inspector-editor': '/agentic/pattern_images/8.1 memory inspector.png',
  'preference-persona-settings': '/agentic/pattern_images/8.2 agent persona.png',
  'privacy-data-usage-controls': '/agentic/pattern_images/8.3 privacy controls.png',
  'context-repository-profile-store': '/agentic/pattern_images/8.4 agent context repo.png',
  'user-preference-context-profiles': '/agentic/pattern_images/8.5 user preference profile.png',
  'safe-failure-states': '/agentic/pattern_images/9.1 safe failure states.png',
  'guided-repair-flows': '/agentic/pattern_images/9.1 guided repair flows.png',
  'sentiment-aware-response-styles': '/agentic/pattern_images/9.1 sentiment-aware response.png',
  'apology-remedy-bundle': '/agentic/pattern_images/9.1 apology and remedy bundle.png',
  'fleet-health-dashboard': '/agentic/pattern_images/10.1 fleet health dashboard.png',
  'risk-and-policy-heatmaps': '/agentic/pattern_images/10.1 risk and policy heatmaps.png',
  'access-permission-tiers': '/agentic/pattern_images/10.1 access and permission tiers.png',
  'workflow-policy-template-library': '/agentic/pattern_images/10.1 policy template library.png',
};

export default function PatternLibraryHome() {
  // SEO: Update document title and meta for the overview page
  useEffect(() => {
    document.title = 'Pattern Library Overview - Agentic AI UX Patterns | Dustin Kirk';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Browse all 44 UX design patterns for building trust in AI and agentic applications.');
    }

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://dustinkirk.com/agentic_ai_patterns/overview';

    return () => {
      const canonicalToRemove = document.querySelector('link[rel="canonical"]');
      if (canonicalToRemove) canonicalToRemove.remove();
    };
  }, []);

  return (
    <AgenticPatternsLayout
      title="Pattern Library Overview"
      subtitle="Browse all patterns for building trust in AI and agentic applications"
      showSidebar={true}
      selectedPatternId="overview"
    >
      <div className="agentic-overview-grid">
        {AI_TRUST_PATTERN_CATEGORIES.map((category) => {
          const patterns = getPatternsByCategory(category.id);
          if (patterns.length === 0) return null;

          return (
            <section key={category.id} className="agentic-overview-category">
              <div className="agentic-overview-category__header">
                <h2 className="agentic-overview-category__title">{category.name}</h2>
                <p className="agentic-overview-category__description">{category.description}</p>
              </div>

              <div className="agentic-overview-tiles">
                {patterns.map((pattern) => (
                  <Link
                    key={pattern.id}
                    to={`/agentic_ai_patterns/${pattern.id}`}
                    className="agentic-overview-tile"
                    aria-label={`${pattern.index} ${pattern.title}`}
                  >
                    <div className="agentic-overview-tile__image-wrapper">
                      <img
                        src={PATTERN_IMAGES[pattern.id] || '/agentic/pattern_images/placeholder.png'}
                        alt={`${pattern.index} ${pattern.title}`}
                        className="agentic-overview-tile__image"
                        loading="lazy"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </AgenticPatternsLayout>
  );
}
