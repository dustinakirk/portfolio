import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import AgenticPatternsLayout from '../AgenticPatternsLayout';
import PatternDisplay from '../aitrustpatterns/PatternDisplay';
import {
  AI_TRUST_PATTERNS,
  getPatternById
} from '../../data/aiTrustPatterns';

export default function PatternLibraryPage() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');

  const [selectedPatternId, setSelectedPatternId] = useState(() => {
    // If category filter, select first pattern in that category
    if (categoryFilter) {
      const firstInCategory = AI_TRUST_PATTERNS.find(p => p.category === categoryFilter);
      return firstInCategory?.id || AI_TRUST_PATTERNS[0]?.id || '';
    }
    return AI_TRUST_PATTERNS[0]?.id || '';
  });

  // Update selection when category filter changes
  useEffect(() => {
    if (categoryFilter) {
      const firstInCategory = AI_TRUST_PATTERNS.find(p => p.category === categoryFilter);
      if (firstInCategory) {
        setSelectedPatternId(firstInCategory.id);
      }
    }
  }, [categoryFilter]);

  // Get selected pattern
  const selectedPattern = useMemo(() => {
    return getPatternById(selectedPatternId);
  }, [selectedPatternId]);

  // SEO: Update document title and meta
  useEffect(() => {
    document.title = 'Pattern Library - Agentic AI UX Patterns | Dustin Kirk';

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content',
        'Browse 25 UX design patterns for building trust in AI applications. Explore patterns for transparency, user control, feedback, safety, and trust onboarding.'
      );
    }

    // Add structured data for the collection
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Agentic AI UX Pattern Library",
      "description": "Collection of 25 UX design patterns for building trust in AI and agentic applications.",
      "author": {
        "@type": "Person",
        "name": "Dustin Kirk"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://dustinkirk.com/agentic_ai_patterns/patterns"
      },
      "numberOfItems": AI_TRUST_PATTERNS.length
    };

    let script = document.querySelector('#pattern-library-structured-data');
    if (!script) {
      script = document.createElement('script');
      script.id = 'pattern-library-structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    return () => {
      const scriptToRemove = document.querySelector('#pattern-library-structured-data');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, []);

  return (
    <AgenticPatternsLayout
      title="Pattern Library"
      subtitle="Browse and explore UX patterns for building trust in agentic AI applications."
      showSidebar={true}
      selectedPatternId={selectedPatternId}
      onSelectPattern={setSelectedPatternId}
    >
      {/* Pattern Content */}
      <PatternDisplay pattern={selectedPattern} linkMode={true} />
    </AgenticPatternsLayout>
  );
}
