import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import AgenticPatternsLayout from '../AgenticPatternsLayout';
import PatternDisplay from '../aitrustpatterns/PatternDisplay';
import StructuredClarificationPromptsPattern from '../aitrustpatterns/patterns/4.1-structured-clarification-prompts';
import EditRequestPattern from '../aitrustpatterns/patterns/4.2-edit-request';
import ConfirmedAssumptionsPattern from '../aitrustpatterns/patterns/4.3-confirmed-assumptions';
import AgentIdentityRoleContractPattern from '../aitrustpatterns/patterns/1.1-agent-identity-role-contract';
import DelegationModesPattern from '../aitrustpatterns/patterns/1.2-delegation-modes';
import SandboxedPlaygroundsPattern from '../aitrustpatterns/patterns/2.1-sandboxed-playgrounds';
import WayfindersPattern from '../aitrustpatterns/patterns/2.2-wayfinders';
import ProgressiveDisclosureModesPattern from '../aitrustpatterns/patterns/2.3-progressive-disclosure-modes';
import TeachMeInterfacesPattern from '../aitrustpatterns/patterns/2.4-teach-me-interfaces';
import ScenarioTemplatesAndRecipesPattern from '../aitrustpatterns/patterns/2.5-scenario-templates-and-recipes';
import FeedbackOnResultsPattern from '../aitrustpatterns/patterns/2.6-feedback-on-results-and-rating-controls';
import KillSwitchPauseResumePattern from '../aitrustpatterns/patterns/3.1-kill-switch-pause-resume';
import HITLGatesPattern from '../aitrustpatterns/patterns/3.2-human-in-the-loop-HITL-gates';
import PlanThenExecuteWorkflowPattern from '../aitrustpatterns/patterns/3.3-plan-then-execute-workflow';
import SteerabilityPoliteInterruptionPattern from '../aitrustpatterns/patterns/3.4-steerability-and-polite-interruption';
import ScopedPermissionsToolConsentPattern from '../aitrustpatterns/patterns/3.5-scoped-permissions-and-tool-consent';
import RollbackVersionHistoryPattern from '../aitrustpatterns/patterns/3.6-rollback-and-version-history';
import UserDirectedToolUsePattern from '../aitrustpatterns/patterns/3.7-user-directed-tool-use-and-output-mode-selection';
import ReasoningGlimpsePattern from '../aitrustpatterns/patterns/5.1-reasoning-glimpse';
import StreamingResultsVisualizationsPattern from '../aitrustpatterns/patterns/5.2-streaming-results-visualizations';
import ToolUsageIndicatorsPattern from '../aitrustpatterns/patterns/5.3-tool-usage-indicators';
import ActivityTimelineAuditLogPattern from '../aitrustpatterns/patterns/5.4-activity-timeline-audit-log';
import ExecutionProgressViewPattern from '../aitrustpatterns/patterns/5.5-execution-progress-view';
import ConfessionsViewPattern from '../aitrustpatterns/patterns/5.6-confessions-view';
import SourceAnchoringGroundingPattern from '../aitrustpatterns/patterns/6.1-source-anchoring-and-grounding';
import ConfidenceThermometerPattern from '../aitrustpatterns/patterns/6.2-confidence-thermometer';
import SemanticHighlightingUncertaintyPattern from '../aitrustpatterns/patterns/6.3-semantic-highlighting-of-uncertainty';
import MultiplePresentedOptionsPattern from '../aitrustpatterns/patterns/6.4-multiple-presented-options';
import ExplanationOnDemandPattern from '../aitrustpatterns/patterns/6.5-explanation-on-demand';
import CounterEvidencePattern from '../aitrustpatterns/patterns/6.6-counter-evidence';
import OrchestrationGraphPattern from '../aitrustpatterns/patterns/7.1-orchestration-graph';
import AgentRegistryProfilesPattern from '../aitrustpatterns/patterns/7.2-agent-registry-and-profiles';
import SupervisorAgentPattern from '../aitrustpatterns/patterns/7.3-supervisor-agent';
import AgentHandoverBriefsPattern from '../aitrustpatterns/patterns/7.4-agent-handover-briefs';
import AssignmentBoardWorkQueuesPattern from '../aitrustpatterns/patterns/7.5-assignment-board-and-work-queues';
import EscalationFallbackRoutingPattern from '../aitrustpatterns/patterns/7.6-escalation-and-fallback-routing';
import MemoryInspectorEditorPattern from '../aitrustpatterns/patterns/8.1-memory-inspector-and-editor';
import PreferencePersonaSettingsPattern from '../aitrustpatterns/patterns/8.2-preference-persona-settings';
import PrivacyDataUsageControlsPattern from '../aitrustpatterns/patterns/8.3-privacy-and-data-usage-controls';
import ContextRepositoryProfileStorePattern from '../aitrustpatterns/patterns/8.4-agent-context-repository-and-workspace-profiles';
import UserPreferenceContextProfilesPattern from '../aitrustpatterns/patterns/8.5-user-preference-and-personal-context-profiles';
import SafeFailureStatesPattern from '../aitrustpatterns/patterns/9.1-safe-failure-states';
import GuidedRepairFlowsPattern from '../aitrustpatterns/patterns/9.2-guided-repair-flows';
import SentimentAwareResponseStylesPattern from '../aitrustpatterns/patterns/9.3-sentiment-aware-response-styles';
import ApologyRemedyBundlePattern from '../aitrustpatterns/patterns/9.4-apology-and-remedy-bundle';
import FleetHealthDashboardPattern from '../aitrustpatterns/patterns/10.1-fleet-health-dashboard';
import RiskAndPolicyHeatmapsPattern from '../aitrustpatterns/patterns/10.2-risk-and-policy-heatmaps';
import AccessPermissionTiersPattern from '../aitrustpatterns/patterns/10.3-access-and-permission-tiers-for-agents';
import WorkflowPolicyTemplateLibraryPattern from '../aitrustpatterns/patterns/10.4-workflow-and-policy-template-library';
import {
  getPatternById,
  getCategoryById
} from '../../data/aiTrustPatterns';

// Map of pattern IDs to custom components (for rich magazine-style patterns)
const CUSTOM_PATTERN_COMPONENTS = {
  'structured-clarification-prompts': StructuredClarificationPromptsPattern,
  'edit-request': EditRequestPattern,
  'confirmed-assumptions': ConfirmedAssumptionsPattern,
  'agent-identity-role-contract': AgentIdentityRoleContractPattern,
  'delegation-modes': DelegationModesPattern,
  'sandboxed-playgrounds': SandboxedPlaygroundsPattern,
  'wayfinders': WayfindersPattern,
  'progressive-disclosure-modes': ProgressiveDisclosureModesPattern,
  'teach-me-interfaces': TeachMeInterfacesPattern,
  'scenario-templates-and-recipes': ScenarioTemplatesAndRecipesPattern,
  'feedback-on-results': FeedbackOnResultsPattern,
  'kill-switch-pause-resume': KillSwitchPauseResumePattern,
  'human-in-the-loop-hitl-gates': HITLGatesPattern,
  'plan-then-execute-workflow': PlanThenExecuteWorkflowPattern,
  'steerability-polite-interruption': SteerabilityPoliteInterruptionPattern,
  'scoped-permissions-tool-consent': ScopedPermissionsToolConsentPattern,
  'rollback-version-history': RollbackVersionHistoryPattern,
  'user-directed-tool-use': UserDirectedToolUsePattern,
  'reasoning-glimpse': ReasoningGlimpsePattern,
  'streaming-results-visualizations': StreamingResultsVisualizationsPattern,
  'tool-usage-indicators': ToolUsageIndicatorsPattern,
  'activity-timeline-audit-log': ActivityTimelineAuditLogPattern,
  'execution-progress-view': ExecutionProgressViewPattern,
  'confessions-view': ConfessionsViewPattern,
  'source-anchoring-grounding': SourceAnchoringGroundingPattern,
  'confidence-thermometer': ConfidenceThermometerPattern,
  'semantic-highlighting-uncertainty': SemanticHighlightingUncertaintyPattern,
  'multiple-presented-options': MultiplePresentedOptionsPattern,
  'explanation-on-demand': ExplanationOnDemandPattern,
  'counter-evidence': CounterEvidencePattern,
  'orchestration-graph': OrchestrationGraphPattern,
  'agent-registry-profiles': AgentRegistryProfilesPattern,
  'supervisor-agent': SupervisorAgentPattern,
  'agent-handover-briefs': AgentHandoverBriefsPattern,
  'assignment-board-work-queues': AssignmentBoardWorkQueuesPattern,
  'escalation-fallback-routing': EscalationFallbackRoutingPattern,
  'memory-inspector-editor': MemoryInspectorEditorPattern,
  'preference-persona-settings': PreferencePersonaSettingsPattern,
  'privacy-data-usage-controls': PrivacyDataUsageControlsPattern,
  'context-repository-profile-store': ContextRepositoryProfileStorePattern,
  'user-preference-context-profiles': UserPreferenceContextProfilesPattern,
  'safe-failure-states': SafeFailureStatesPattern,
  'guided-repair-flows': GuidedRepairFlowsPattern,
  'sentiment-aware-response-styles': SentimentAwareResponseStylesPattern,
  'apology-remedy-bundle': ApologyRemedyBundlePattern,
  'fleet-health-dashboard': FleetHealthDashboardPattern,
  'risk-and-policy-heatmaps': RiskAndPolicyHeatmapsPattern,
  'access-permission-tiers': AccessPermissionTiersPattern,
  'workflow-policy-template-library': WorkflowPolicyTemplateLibraryPattern,
};

export default function PatternDetailPage() {
  const { patternSlug } = useParams();
  const pattern = getPatternById(patternSlug);

  // SEO: Update document title and meta for this specific pattern
  useEffect(() => {
    if (pattern) {
      document.title = `${pattern.title} - Agentic AI UX Patterns | Dustin Kirk`;

      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', pattern.shortDescription);
      }

      // Add canonical URL
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `https://dustinkirk.com/agentic_ai_patterns/${pattern.id}`;

      // Add Open Graph meta tags for social sharing
      const ogImage = 'https://dustinkirk.com/projects/aitrustpatterns/ai-trust-patterns.png';
      const ogTags = [
        { property: 'og:title', content: `${pattern.title} - Agentic AI UX Patterns` },
        { property: 'og:description', content: pattern.shortDescription },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: `https://dustinkirk.com/agentic_ai_patterns/${pattern.id}` },
        { property: 'og:image', content: ogImage },
        { property: 'og:site_name', content: 'Dustin Kirk - Principal Product Designer' }
      ];

      ogTags.forEach(({ property, content }) => {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      });

      // Add Twitter Card meta tags
      const twitterTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: `${pattern.title} - AI UX Pattern` },
        { name: 'twitter:description', content: pattern.shortDescription },
        { name: 'twitter:image', content: ogImage }
      ];

      twitterTags.forEach(({ name, content }) => {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', name);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      });

      // Add structured data for this pattern
      const category = getCategoryById(pattern.category);
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `${pattern.title} - AI UX Pattern`,
        "description": pattern.shortDescription,
        "author": {
          "@type": "Person",
          "name": "Dustin Kirk"
        },
        "publisher": {
          "@type": "Person",
          "name": "Dustin Kirk"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://dustinkirk.com/agentic_ai_patterns/${pattern.id}`
        },
        "articleSection": category?.name || 'AI UX Patterns',
        "keywords": pattern.seo?.keywords?.join(', ') || 'AI trust, UX patterns'
      };

      let script = document.querySelector('#pattern-detail-structured-data');
      if (!script) {
        script = document.createElement('script');
        script.id = 'pattern-detail-structured-data';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);

      return () => {
        const scriptToRemove = document.querySelector('#pattern-detail-structured-data');
        if (scriptToRemove) scriptToRemove.remove();
        const canonicalToRemove = document.querySelector('link[rel="canonical"]');
        if (canonicalToRemove) canonicalToRemove.remove();

        // Clean up Open Graph tags
        ['og:title', 'og:description', 'og:type', 'og:url', 'og:image', 'og:site_name'].forEach(prop => {
          const meta = document.querySelector(`meta[property="${prop}"]`);
          if (meta) meta.remove();
        });

        // Clean up Twitter Card tags
        ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image'].forEach(name => {
          const meta = document.querySelector(`meta[name="${name}"]`);
          if (meta) meta.remove();
        });
      };
    }
  }, [pattern]);

  // Handle invalid pattern slug - redirect to overview page
  if (!pattern) {
    return <Navigate to="/agentic_ai_patterns" replace />;
  }

  const category = getCategoryById(pattern.category);

  // Check if this pattern has a custom component
  const CustomComponent = CUSTOM_PATTERN_COMPONENTS[patternSlug];

  return (
    <AgenticPatternsLayout
      title={CustomComponent ? null : pattern.title}
      subtitle={CustomComponent ? null : pattern.shortDescription}
      showSidebar={true}
      selectedPatternId={patternSlug}
      fullBleed={!!CustomComponent}
    >
      {/* Category badge - only show for non-custom patterns */}
      {!CustomComponent && category && (
        <div className="agentic-detail__category-wrapper">
          <span className="agentic-detail__badge">
            {category.name}
          </span>
        </div>
      )}

      {/* Pattern content - use custom component if available, otherwise default PatternDisplay */}
      {CustomComponent ? (
        <CustomComponent />
      ) : (
        <PatternDisplay pattern={pattern} linkMode={true} hideHeader={true} />
      )}
    </AgenticPatternsLayout>
  );
}
