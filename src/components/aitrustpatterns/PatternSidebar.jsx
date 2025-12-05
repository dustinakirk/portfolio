import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const activePatternRef = useRef(null);
  const sidebarRef = useRef(null);

  // Group patterns by category
  const patternsByCategory = useMemo(() => {
    return categories.map(category => ({
      ...category,
      patterns: patterns.filter(p => p.category === category.id),
    }));
  }, [categories, patterns]);

  // Get active pattern's category
  const getActiveCategoryId = useCallback(() => {
    if (!selectedId) return null;
    const activePattern = patterns.find(p => p.id === selectedId);
    return activePattern?.category || null;
  }, [selectedId, patterns]);

  // Track category history: [previousCategoryId, currentCategoryId] (max 2 expanded)
  const [categoryHistory, setCategoryHistory] = useState(() => {
    const activeCategory = getActiveCategoryId();
    return activeCategory ? [activeCategory] : [];
  });

  // Update category history when selectedId changes (navigation)
  useEffect(() => {
    const activeCategory = getActiveCategoryId();
    if (activeCategory) {
      setCategoryHistory(prev => {
        // If already in history, don't change anything
        if (prev.includes(activeCategory)) return prev;
        // Keep only the most recent category plus the new one (max 2)
        const newHistory = prev.length > 0 ? [prev[prev.length - 1], activeCategory] : [activeCategory];
        return newHistory;
      });
    }
  }, [selectedId, getActiveCategoryId]);

  // Auto-scroll to active pattern after category expand animation
  useEffect(() => {
    if (selectedId && activePatternRef.current) {
      const timeoutId = setTimeout(() => {
        activePatternRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }, 250); // Wait for expand animation (200ms) + buffer
      return () => clearTimeout(timeoutId);
    }
  }, [selectedId]);

  // Flatten patterns for keyboard navigation and position tracking
  const flatPatterns = useMemo(() => {
    return patternsByCategory.flatMap(cat => cat.patterns);
  }, [patternsByCategory]);

  // Current pattern index for position indicator
  const currentPatternIndex = useMemo(() => {
    return flatPatterns.findIndex(p => p.id === selectedId);
  }, [flatPatterns, selectedId]);

  // Keyboard navigation handler
  const handleKeyDown = useCallback((e) => {
    if (!selectedId || currentPatternIndex === -1) return;

    let nextIndex = currentPatternIndex;

    if (e.key === 'ArrowDown' || e.key === 'j') {
      e.preventDefault();
      nextIndex = Math.min(currentPatternIndex + 1, flatPatterns.length - 1);
    } else if (e.key === 'ArrowUp' || e.key === 'k') {
      e.preventDefault();
      nextIndex = Math.max(currentPatternIndex - 1, 0);
    }

    if (nextIndex !== currentPatternIndex) {
      const nextPattern = flatPatterns[nextIndex];
      if (linkMode) {
        navigate(`/agentic_ai_patterns/${nextPattern.id}`);
      } else if (onSelect) {
        onSelect(nextPattern.id);
      }
    }
  }, [selectedId, currentPatternIndex, flatPatterns, linkMode, navigate, onSelect]);

  // Toggle category - manual toggle behavior
  const toggleCategory = (categoryId) => {
    setCategoryHistory(prev => {
      if (prev.includes(categoryId)) {
        // Closing: just remove it from history
        return prev.filter(id => id !== categoryId);
      } else {
        // Opening: add to history, keeping max 2
        const newHistory = prev.length >= 2
          ? [prev[prev.length - 1], categoryId]
          : [...prev, categoryId];
        return newHistory;
      }
    });
  };

  // expandedCategories derived from history
  const expandedCategories = categoryHistory;

  // Render the pattern list (shared between full-height and card modes)
  const renderPatternList = (showProgress = false) => (
    <div
      className="agentic-sidebar__list"
      ref={sidebarRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="navigation"
      aria-label="Pattern navigation"
    >
      {/* Position indicator */}
      {showProgress && selectedId && currentPatternIndex !== -1 && (
        <div className="agentic-sidebar__progress">
          Pattern {currentPatternIndex + 1} of {flatPatterns.length}
        </div>
      )}

      {patternsByCategory.map(category => (
        <div key={category.id} className="agentic-sidebar__category">
          {/* Category header - collapsible */}
          <button
            onClick={() => toggleCategory(category.id)}
            className="agentic-sidebar__category-btn"
            aria-expanded={expandedCategories.includes(category.id)}
          >
            <span className="agentic-sidebar__category-name">
              {category.name}
              <span className="agentic-sidebar__category-count">({category.patterns.length})</span>
            </span>
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
                        ref={isActive ? activePatternRef : null}
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
                      ref={isActive ? activePatternRef : null}
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
    return renderPatternList(true);
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
          {renderPatternList(true)}
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
