import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Placeholder demo component showing a sample interactive element
// This demonstrates the structure for future demo components

export default function PlaceholderDemo() {
  const [confidence, setConfidence] = useState(75);
  const [isHovered, setIsHovered] = useState(false);

  // Color based on confidence level
  const getConfidenceColor = (value) => {
    if (value >= 80) return 'bg-green-500';
    if (value >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getConfidenceLabel = (value) => {
    if (value >= 80) return 'High Confidence';
    if (value >= 50) return 'Medium Confidence';
    return 'Low Confidence';
  };

  return (
    <div className="space-y-6">
      {/* Sample AI response card */}
      <div
        className="rounded-xl bg-white dark:bg-gray-800 shadow-lg p-5 border border-black/5 dark:border-white/10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
              AI
            </div>
            <div>
              <div className="font-medium text-sm">AI Assistant</div>
              <div className="text-xs text-black/50 dark:text-white/50">Just now</div>
            </div>
          </div>

          {/* Confidence indicator */}
          <motion.div
            initial={{ opacity: 0.7 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            className="flex items-center gap-2"
          >
            <div className="text-right">
              <div className="text-xs font-medium">{getConfidenceLabel(confidence)}</div>
              <div className="text-xs text-black/50 dark:text-white/50">{confidence}%</div>
            </div>
            <div className="w-12 h-12 relative">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-black/10 dark:text-white/10"
                />
                <motion.circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className={getConfidenceColor(confidence).replace('bg-', 'text-')}
                  stroke="currentColor"
                  initial={{ strokeDasharray: '0 100' }}
                  animate={{ strokeDasharray: `${confidence} 100` }}
                  transition={{ duration: 0.5 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>

        <p className="text-sm text-black/80 dark:text-white/80 leading-relaxed">
          Based on the data provided, I recommend proceeding with Option A.
          This approach has shown consistent results in similar scenarios.
        </p>

        {/* Interactive slider to demo confidence changes */}
        <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/10">
          <label className="text-xs text-black/50 dark:text-white/50 block mb-2">
            Adjust confidence (demo):
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={confidence}
            onChange={(e) => setConfidence(Number(e.target.value))}
            className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <p className="text-xs text-center text-black/40 dark:text-white/40">
        Hover over elements to see annotations. This is a placeholder demo.
      </p>
    </div>
  );
}
