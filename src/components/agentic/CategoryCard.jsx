import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AI_TRUST_PATTERN_CATEGORIES, getPatternsByCategory, AI_TRUST_PATTERNS } from '../../data/aiTrustPatterns';

export default function CategoryCard() {
  return (
    <div className="agentic-category-card">
      <div className="agentic-category-card__content">
        <div className="agentic-category-card__header">
          <h2 className="agentic-category-card__title">Pattern Library</h2>
          <Link
            to="/agentic_ai_patterns/overview"
            className="agentic-category-card__view-all"
          >
            View all patterns
            <ArrowRight className="agentic-category-card__view-all-icon" />
          </Link>
        </div>

        <div className="agentic-category-card__grid">
          {AI_TRUST_PATTERN_CATEGORIES.map((category) => {
            const categoryPatterns = getPatternsByCategory(category.id);
            const hasPatterns = categoryPatterns.length > 0;
            const firstPatternSlug = hasPatterns ? categoryPatterns[0].id : null;

            if (hasPatterns) {
              return (
                <Link
                  key={category.id}
                  to={`/agentic_ai_patterns/${firstPatternSlug}`}
                  className="agentic-category-item"
                >
                  <div className="agentic-category-item__info">
                    <div className="agentic-category-item__name">
                      {category.name}
                    </div>
                    <div className="agentic-category-item__description">
                      {category.description}
                    </div>
                  </div>
                  <ArrowRight className="agentic-category-item__arrow" />
                </Link>
              );
            }

            return (
              <div
                key={category.id}
                className="agentic-category-item agentic-category-item--disabled"
              >
                <div className="agentic-category-item__info">
                  <div className="agentic-category-item__name">
                    {category.name}
                  </div>
                  <div className="agentic-category-item__description">
                    {category.description}
                  </div>
                </div>
                <span className="agentic-category-item__coming-soon">Coming soon</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
