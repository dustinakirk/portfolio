import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';

export default function TooltipAnnotation({
  position,
  placement = 'top',
  text,
  className = ''
}) {
  const [isVisible, setIsVisible] = useState(false);

  // Position styles for tooltip relative to hotspot
  const placementStyles = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  // Arrow styles based on placement
  const arrowStyles = {
    top: 'top-full -mt-1 left-1/2 -translate-x-1/2',
    bottom: 'bottom-full -mb-1 left-1/2 -translate-x-1/2',
    left: 'left-full -ml-1 top-1/2 -translate-y-1/2',
    right: 'right-full -mr-1 top-1/2 -translate-y-1/2',
  };

  return (
    <div
      className={`absolute z-20 ${className}`}
      style={{
        left: position?.x || '50%',
        top: position?.y || '50%',
        transform: 'translate(-50%, -50%)'
      }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {/* Hotspot indicator button */}
      <button
        className="relative flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full"
        aria-label={text}
      >
        {/* Pulsing ring animation */}
        <span className="absolute w-8 h-8 bg-blue-500/20 rounded-full animate-ping" />
        <span className="absolute w-6 h-6 bg-blue-500/30 rounded-full animate-pulse" />

        {/* Center dot */}
        <span className="relative w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
          <Info className="w-3 h-3 text-white" />
        </span>
      </button>

      {/* Tooltip content */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className={`absolute ${placementStyles[placement]}
                        w-56 p-3 rounded-lg shadow-xl
                        bg-gray-900 text-white text-sm
                        pointer-events-none z-30`}
          >
            <p className="leading-relaxed">{text}</p>

            {/* Arrow pointer */}
            <div
              className={`absolute w-2 h-2 bg-gray-900 rotate-45 ${arrowStyles[placement]}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
