import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function PatternSidebar({
  patterns,
  categories,
  selectedId,
  onSelect,
  linkMode = false,
  fullHeight = false,
  className = ''
}) {
  // All categories expanded by default
  const [expandedCategories, setExpandedCategories] = useState(
    categories.map(c => c.id)
  );

  // Group patterns by category
  const patternsByCategory = useMemo(() => {
    return categories.map(category => ({
      ...category,
      patterns: patterns.filter(p => p.category === category.id),
    }));
  }, [categories, patterns]);

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Render the pattern list (shared between full-height and card modes)
  const renderPatternList = () => (
    <div className="agentic-sidebar__list">
      {patternsByCategory.map(category => (
        <div key={category.id} className="agentic-sidebar__category">
          {/* Category header - collapsible */}
          <button
            onClick={() => toggleCategory(category.id)}
            className="agentic-sidebar__category-btn"
            aria-expanded={expandedCategories.includes(category.id)}
          >
            <span>{category.name}</span>
            <ChevronDown
              className={`agentic-sidebar__category-icon ${
                expandedCategories.includes(category.id) ? 'agentic-sidebar__category-icon--expanded' : ''
              }`}
            />
          </button>

          {/* Pattern items with collapse animation */}
          <AnimatePresence initial={false}>
            {expandedCategories.includes(category.id) && (
              <motion.div
                className="agentic-sidebar__patterns"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                {category.patterns.map(pattern => {
                  const isActive = pattern.id === selectedId;
                  const itemClassName = `agentic-sidebar__pattern ${isActive ? 'agentic-sidebar__pattern--active' : ''}`;
                  const content = (
                    <div className="agentic-sidebar__pattern-content">
                      <div
                        className={`agentic-sidebar__pattern-indicator ${
                          isActive ? 'agentic-sidebar__pattern-indicator--active' : ''
                        }`}
                      />
                      <span className="agentic-sidebar__pattern-title">
                        {pattern.index && <span className="agentic-sidebar__pattern-index">{pattern.index}</span>}
                        {pattern.title}
                      </span>
                    </div>
                  );

                  if (linkMode) {
                    return (
                      <Link
                        key={pattern.id}
                        to={`/agentic_ai_patterns/${pattern.id}`}
                        className={itemClassName}
                      >
                        {content}
                      </Link>
                    );
                  }

                  return (
                    <button
                      key={pattern.id}
                      onClick={() => onSelect(pattern.id)}
                      className={itemClassName}
                    >
                      {content}
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );

  // Full-height mode (for app layout sidebar)
  if (fullHeight) {
    return renderPatternList();
  }

  // Original card-based sidebar (for backward compatibility)
  return (
    <aside className={className}>
      {/* Desktop: Sticky sidebar */}
      <div className="agentic-sidebar-desktop">
        <div className="agentic-sidebar-desktop__card">
          {/* Header */}
          <div className="agentic-sidebar__header">
            <h3 className="agentic-sidebar__title">Trust Patterns</h3>
          </div>

          {/* Scrollable pattern list */}
          {renderPatternList()}
        </div>
      </div>

      {/* Mobile: Horizontal scrollable pills */}
      <div className="agentic-sidebar-mobile">
        <div className="agentic-sidebar-mobile__card">
          <h3 className="agentic-sidebar-mobile__title">Select Pattern</h3>
          <div className="agentic-sidebar-mobile__pills">
            {patterns.map(pattern => {
              const isActive = pattern.id === selectedId;
              const pillClassName = `agentic-sidebar__pill ${isActive ? 'agentic-sidebar__pill--active' : ''}`;

              if (linkMode) {
                return (
                  <Link
                    key={pattern.id}
                    to={`/agentic_ai_patterns/${pattern.id}`}
                    className={pillClassName}
                  >
                    {pattern.title}
                  </Link>
                );
              }

              return (
                <button
                  key={pattern.id}
                  onClick={() => onSelect(pattern.id)}
                  className={pillClassName}
                >
                  {pattern.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
