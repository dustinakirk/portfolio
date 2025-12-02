import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import AgenticPatternsLayout from '../AgenticPatternsLayout';
import PatternDisplay from '../aitrustpatterns/PatternDisplay';
import ConfirmedAssumptionsPattern from '../aitrustpatterns/patterns/4.3-confirmed-assumptions';
import AgentIdentityRoleContractPattern from '../aitrustpatterns/patterns/1.1-agent-identity-role-contract';
import DelegationModesPattern from '../aitrustpatterns/patterns/1.2-delegation-modes';
import {
  getPatternById,
  getCategoryById
} from '../../data/aiTrustPatterns';

// Map of pattern IDs to custom components (for rich magazine-style patterns)
const CUSTOM_PATTERN_COMPONENTS = {
  'confirmed-assumptions': ConfirmedAssumptionsPattern,
  'agent-identity-role-contract': AgentIdentityRoleContractPattern,
  'delegation-modes': DelegationModesPattern,
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
      const ogTags = [
        { property: 'og:title', content: `${pattern.title} - Agentic AI UX Patterns` },
        { property: 'og:description', content: pattern.shortDescription },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: `https://dustinkirk.com/agentic_ai_patterns/${pattern.id}` },
        { property: 'og:image', content: `https://dustinkirk.com/projects/aitrustpatterns/og_${pattern.id}.png` },
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
        { name: 'twitter:image', content: `https://dustinkirk.com/projects/aitrustpatterns/og_${pattern.id}.png` }
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
