import React, { useState } from 'react';

// Annotation component - pulsing marker with hover tooltip
// Used to highlight trust patterns in the demo UI
//
// Position can be either:
// - Pixel-based: { x: 123, y: 456 } (from useAnnotationPositions hook)
// - Percentage-based: { x: '50%', y: '50%' } (legacy fallback)

export default function Annotation({
  id,
  patternName,
  patternId,
  description,
  position = null,
  placement = 'top' // top, bottom, left, right
}) {
  const [isHovered, setIsHovered] = useState(false);

  // Don't render if no position is provided (target element not found)
  if (!position) {
    return null;
  }

  // Calculate tooltip position classes based on placement
  const getTooltipStyle = () => {
    const base = {
      position: 'absolute',
      zIndex: 1000,
    };

    switch (placement) {
      case 'top':
        return { ...base, bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '8px' };
      case 'bottom':
        return { ...base, top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '8px' };
      case 'left':
        return { ...base, right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: '8px' };
      case 'right':
        return { ...base, left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: '8px' };
      default:
        return { ...base, bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '8px' };
    }
  };

  const getArrowClass = () => {
    switch (placement) {
      case 'top':
        return 'td-tooltip-arrow td-tooltip-arrow--bottom';
      case 'bottom':
        return 'td-tooltip-arrow td-tooltip-arrow--top';
      case 'left':
        return 'td-tooltip-arrow td-tooltip-arrow--right';
      case 'right':
        return 'td-tooltip-arrow td-tooltip-arrow--left';
      default:
        return 'td-tooltip-arrow td-tooltip-arrow--bottom';
    }
  };

  // Support both pixel values (numbers) and percentage strings
  const leftValue = typeof position.x === 'number' ? `${position.x}px` : position.x;
  const topValue = typeof position.y === 'number' ? `${position.y}px` : position.y;

  return (
    <div
      className="td-annotation"
      style={{
        position: 'absolute',
        left: leftValue,
        top: topValue,
        transform: 'translate(-50%, -50%)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pulsing marker */}
      <div className="td-annotation-marker">
        <div className="td-annotation-dot"></div>
        <div className="td-annotation-ring"></div>
      </div>

      {/* Tooltip on hover */}
      {isHovered && (
        <div className="td-tooltip" style={getTooltipStyle()}>
          <div className={getArrowClass()}></div>
          <div className="td-tooltip-header">
            {patternId && <span className="td-tooltip-id">{patternId}</span>}
            <span className="td-tooltip-name">{patternName}</span>
          </div>
          <p className="td-tooltip-description">{description}</p>
        </div>
      )}
    </div>
  );
}
