import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectImage from '../ProjectImage';
import PatternSlideshow from './PatternSlideshow';
import { getCategoryById, getPatternById } from '../../data/aiTrustPatterns';

export default function PatternDisplay({ pattern, linkMode = false, hideHeader = false }) {
  if (!pattern) {
    return (
      <div className="agentic-pattern-card agentic-pattern-card--empty">
        <p>Select a pattern to view details</p>
      </div>
    );
  }

  const category = getCategoryById(pattern.category);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pattern.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="agentic-pattern-card"
      >
        <div className="agentic-pattern-card__content">
          <div className="pattern-content-wrapper">
          {/* Pattern Header - can be hidden when used in detail page */}
          {!hideHeader && (
            <div className="agentic-pattern__header">
              {category && (
                <span className="agentic-pattern__badge">
                  {category.name}
                </span>
              )}
              <h2 className="agentic-pattern__title">
                {pattern.title}
              </h2>
              <p className="agentic-pattern__description">
                {pattern.shortDescription}
              </p>
            </div>
          )}

          {/* Interactive Slideshow (positioned near top but not primary) */}
          {pattern.slideshow?.enabled && pattern.slideshow.slides?.length > 0 && (
            <div className="agentic-pattern__image-wrapper">
              <PatternSlideshow slides={pattern.slideshow.slides} />
            </div>
          )}

          {/* Primary Image */}
          {pattern.mainImage?.src && (
            <figure className="pattern-figure">
              <ProjectImage
                src={pattern.mainImage.src}
                alt={pattern.mainImage.alt || pattern.title}
                className="pattern-figure__image"
              />
              {pattern.mainImage.caption && (
                <figcaption className="pattern-figure__caption">
                  {pattern.mainImage.caption}
                </figcaption>
              )}
            </figure>
          )}

          {/* Placeholder for image if none provided */}
          {!pattern.mainImage?.src && (
            <figure className="pattern-figure">
              <div className="pattern-magazine__image-placeholder">
                <div className="pattern-magazine__placeholder-content">
                  <span className="pattern-magazine__placeholder-icon">🖼️</span>
                  <p className="pattern-magazine__placeholder-description">Pattern visualization coming soon</p>
                </div>
              </div>
            </figure>
          )}

          {/* Content Sections */}
          <div className="agentic-pattern__sections">
            {pattern.content?.problem && (
              <ContentSection
                title="The Problem"
                content={pattern.content.problem}
                icon="⚠️"
              />
            )}

            {pattern.content?.solution && (
              <ContentSection
                title="The Solution"
                content={pattern.content.solution}
                icon="💡"
              />
            )}

            {pattern.content?.implementation && (
              <ContentSection
                title="Implementation"
                content={pattern.content.implementation}
                icon="🔧"
              />
            )}
          </div>

          {/* Additional Images */}
          {pattern.additionalImages?.length > 0 && (
            <div className="agentic-pattern__examples">
              <h3 className="agentic-pattern__examples-title">Examples</h3>
              {pattern.additionalImages.map((img, idx) => (
                <figure key={idx} className="pattern-figure">
                  <ProjectImage
                    src={img.src}
                    alt={img.alt}
                    className="pattern-figure__image"
                  />
                  {img.caption && (
                    <figcaption className="pattern-figure__caption">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}

          {/* Related Patterns */}
          {pattern.relatedPatterns?.length > 0 && (
            <div className="agentic-pattern__related">
              <h3 className="agentic-pattern__related-title">Related Patterns</h3>
              <div className="agentic-pattern__related-list">
                {pattern.relatedPatterns.map(patternId => {
                  const relatedPattern = getPatternById(patternId);
                  if (!relatedPattern) return null;

                  if (linkMode) {
                    return (
                      <Link
                        key={patternId}
                        to={`/agentic_ai_patterns/${patternId}`}
                        className="agentic-pattern__related-link"
                      >
                        {relatedPattern.title}
                      </Link>
                    );
                  }

                  return (
                    <a
                      key={patternId}
                      href={`#${patternId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = patternId;
                        window.location.reload();
                      }}
                      className="agentic-pattern__related-link"
                    >
                      {relatedPattern.title}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function ContentSection({ title, content, icon }) {
  return (
    <div className="agentic-pattern__section">
      <div className="agentic-pattern__section-header">
        {icon && <span className="agentic-pattern__section-icon">{icon}</span>}
        <h3 className="agentic-pattern__section-title">{title}</h3>
      </div>
      <p className="agentic-pattern__section-content">{content}</p>
    </div>
  );
}
