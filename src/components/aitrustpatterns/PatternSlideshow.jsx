import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import TooltipAnnotation from './TooltipAnnotation';
import * as DemoComponents from './demos';

export default function PatternSlideshow({ slides, autoAdvance = true, interval = 8000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const currentSlide = slides[currentIndex];

  // Auto-advance functionality
  useEffect(() => {
    if (autoAdvance && !isPaused && slides.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, interval);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, slides.length, autoAdvance, interval]);

  const goToSlide = (index) => setCurrentIndex(index);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // Get the React component for this slide
  const DemoComponent = currentSlide?.component
    ? DemoComponents[currentSlide.component]
    : null;

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div
      className="relative rounded-2xl border border-black/10 dark:border-white/10
                 bg-gradient-to-br from-white/80 to-white/40
                 dark:from-white/10 dark:to-white/5 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slideshow header */}
      <div className="px-4 py-2 border-b border-black/10 dark:border-white/10
                      flex items-center justify-between bg-black/5 dark:bg-white/5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-black/60 dark:text-white/60">
            Interactive Demo
          </span>
          {isPaused && (
            <span className="flex items-center gap-1 text-xs text-black/40 dark:text-white/40">
              <Pause className="h-3 w-3" /> Paused
            </span>
          )}
        </div>

        {/* Navigation controls */}
        {slides.length > 1 && (
          <div className="flex items-center gap-2">
            <button
              onClick={goPrev}
              className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-xs text-black/50 dark:text-white/50 tabular-nums">
              {currentIndex + 1} / {slides.length}
            </span>
            <button
              onClick={goNext}
              className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Interactive content area */}
      <div className="relative p-6 min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide?.id || currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Render the interactive React component if available */}
            {DemoComponent ? (
              <DemoComponent />
            ) : (
              /* Fallback placeholder if no component */
              <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-dashed border-black/10 dark:border-white/10 flex items-center justify-center">
                <div className="text-center text-black/40 dark:text-white/40">
                  <div className="text-3xl mb-2">🎯</div>
                  <p className="text-sm">Interactive demo placeholder</p>
                  <p className="text-xs mt-1">Component: {currentSlide?.component || 'Not specified'}</p>
                </div>
              </div>
            )}

            {/* Overlay tooltips */}
            {currentSlide?.tooltips?.map((tooltip) => (
              <TooltipAnnotation
                key={tooltip.id}
                position={tooltip.position}
                placement={tooltip.placement}
                text={tooltip.text}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex
                  ? 'bg-black dark:bg-white w-4'
                  : 'bg-black/20 dark:bg-white/20 w-2 hover:bg-black/40 dark:hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
