import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

/**
 * Annotated - Inline annotation wrapper component
 *
 * Wraps any element and adds an annotation marker positioned at a corner.
 * Tooltip renders via portal to avoid clipping by parent overflow.
 */
export default function Annotated({
  children,
  show = true,
  patternName,
  patternId,
  description,
  placement = 'top-right', // top-left, top-right, bottom-left, bottom-right
  offset = { x: 0, y: 0 }, // Additional offset for marker positioning
  top,  // Direct CSS top positioning (number for px, string for %, etc.)
  left, // Direct CSS left positioning (number for px, string for %, etc.)
  fullWidth = false, // When true, wrapper is display: block with 100% width
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0, showAbove: false });
  const markerRef = useRef(null);

  // Calculate tooltip position when hovered
  useEffect(() => {
    if (isHovered && markerRef.current) {
      const rect = markerRef.current.getBoundingClientRect();
      const tooltipWidth = 240;
      const tooltipHeight = 120; // approximate max height
      const padding = 12;

      let top, left;

      // Horizontal: center on marker, but keep within viewport
      left = rect.left + rect.width / 2 - tooltipWidth / 2;
      left = Math.max(padding, Math.min(left, window.innerWidth - tooltipWidth - padding));

      // Vertical: prefer below marker, but flip to above if near bottom
      const spaceBelow = window.innerHeight - rect.bottom;
      const showAbove = spaceBelow < tooltipHeight + padding;

      if (showAbove) {
        // Show above marker
        top = rect.top - padding;
      } else {
        // Show below marker
        top = rect.bottom + padding;
      }

      setTooltipPos({ top, left, showAbove });
    }
  }, [isHovered]);

  if (!show) return children;

  // Get marker position styles based on placement or direct top/left values
  // When top/left props are provided, use direct positioning
  // Otherwise, markers are inset 4px from edges to avoid clipping by parent overflow
  const getMarkerStyle = () => {
    const base = {
      position: 'absolute',
      zIndex: 100,
    };

    // Direct positioning takes precedence when top or left is provided
    if (top !== undefined || left !== undefined) {
      return {
        ...base,
        top: top !== undefined ? (typeof top === 'number' ? `${top}px` : top) : undefined,
        left: left !== undefined ? (typeof left === 'number' ? `${left}px` : left) : undefined,
      };
    }

    // Fall back to placement-based positioning
    switch (placement) {
      case 'top-left':
        return { ...base, top: 4 + offset.y, left: 4 + offset.x };
      case 'top-right':
        return { ...base, top: 4 + offset.y, right: 4 - offset.x };
      case 'bottom-left':
        return { ...base, bottom: 4 - offset.y, left: 4 + offset.x };
      case 'bottom-right':
        return { ...base, bottom: 4 - offset.y, right: 4 - offset.x };
      default:
        return { ...base, top: 4 + offset.y, right: 4 - offset.x };
    }
  };

  // Tooltip rendered via portal to escape overflow:hidden containers
  const tooltip = isHovered && createPortal(
    <div
      className="td-tooltip td-tooltip--portal"
      style={{
        position: 'fixed',
        top: tooltipPos.showAbove ? 'auto' : tooltipPos.top,
        bottom: tooltipPos.showAbove ? `${window.innerHeight - tooltipPos.top}px` : 'auto',
        left: tooltipPos.left,
        width: 240,
        zIndex: 10000,
      }}
    >
      <div className={`td-tooltip-arrow ${tooltipPos.showAbove ? 'td-tooltip-arrow--below' : 'td-tooltip-arrow--above'}`} />
      <div className="td-tooltip-header">
        {patternId && <span className="td-tooltip-id">{patternId}</span>}
        <span className="td-tooltip-name">{patternName}</span>
      </div>
      <div className="td-tooltip-description">{description}</div>
    </div>,
    document.body
  );

  return (
    <span className="td-annotated" style={{ position: 'relative', display: fullWidth ? 'block' : 'inline-block', width: fullWidth ? '100%' : undefined }}>
      {children}
      <span
        ref={markerRef}
        className="td-annotation"
        style={getMarkerStyle()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Pulsing marker */}
        <span className="td-annotation-marker">
          <span className="td-annotation-dot"></span>
          <span className="td-annotation-ring"></span>
        </span>
      </span>
      {tooltip}
    </span>
  );
}
