import React, { useEffect } from 'react';
import AgenticPatternsLayout from '../AgenticPatternsLayout';
import CategoryCard from './CategoryCard';
import { TrustDemo } from '../aitrustpatterns/demos';
import '../aitrustpatterns/demos/TrustDemo/TrustDemo.css';

export default function AgenticOverviewPage() {
  // SEO: Update document title and meta
  useEffect(() => {
    document.title = 'Agentic AI UX Patterns - Building Trust in AI Applications | Dustin Kirk';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content',
        '25 UX design patterns for building trust in AI and agentic applications. Learn how to design transparent, controllable, and trustworthy AI experiences.'
      );
    }

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Agentic AI UX Patterns",
      "description": "Comprehensive guide to building trust in AI and agentic applications through thoughtful UX design patterns.",
      "author": {
        "@type": "Person",
        "name": "Dustin Kirk"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://dustinkirk.com/agentic_ai_patterns"
      },
      "keywords": "AI trust, UX patterns, AI design, agentic applications, AI transparency, user trust, AI UX"
    };

    let script = document.querySelector('#ai-patterns-structured-data');
    if (!script) {
      script = document.createElement('script');
      script.id = 'ai-patterns-structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    return () => {
      const scriptToRemove = document.querySelector('#ai-patterns-structured-data');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, []);

  return (
    <AgenticPatternsLayout
      title="Agentic AI UX Patterns"
      subtitle="25 Trust building UX design patterns for agentic applications. A comprehensive guide for designers and developers creating trustworthy AI experiences."
    >
      {/* Category Navigation Card - at the top for easy access */}
      <div className="agentic-overview__category-section">
        <CategoryCard />
      </div>

      {/* Interactive Demo Section */}
      <div className="td-demo-section">
        <h2 className="td-demo-heading">Interactive Demo</h2>
        <p className="agentic-overview__demo-description">
          Explore how these patterns work together in a real agentic AI workflow.
          This interactive demo shows trust-building UX patterns in action.
        </p>
        <div className="td-demo-wrapper">
          <TrustDemo />
        </div>
      </div>

      {/* About Section */}
      <div className="agentic-overview__about">
        <h2 className="agentic-overview__about-title">About These Patterns</h2>
        <div>
          <p className="agentic-overview__about-text">
            As AI systems become more autonomous and integrated into critical workflows,
            building user trust is essential. These patterns address the unique challenges
            of AI interfaces: uncertainty, lack of transparency, limited user control,
            and the need for graceful error handling.
          </p>
          <p className="agentic-overview__about-text">
            Each pattern provides a problem statement, solution approach, and implementation
            guidance to help you design AI experiences that users can understand, control,
            and trust.
          </p>
        </div>
      </div>
    </AgenticPatternsLayout>
  );
}
