import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = Math.max(
            window.pageYOffset || 0,
            window.scrollY || 0,
            document.documentElement?.scrollTop || 0,
            document.body?.scrollTop || 0
          );
          // Reveals smoothly as soon as user scrolls down (~120px)
          setIsVisible(scrollPos > 120);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true, capture: true });
    document.addEventListener('scroll', handleScroll, { passive: true, capture: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll, { capture: true });
      document.removeEventListener('scroll', handleScroll, { capture: true });
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    const behavior = shouldReduceMotion ? 'auto' : 'smooth';

    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior
      });
    } catch {
      window.scrollTo(0, 0);
    }

    if (document.documentElement) {
      try {
        document.documentElement.scrollTo({
          top: 0,
          left: 0,
          behavior
        });
      } catch {
        document.documentElement.scrollTop = 0;
      }
    }

    if (document.body) {
      document.body.scrollTop = 0;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 12 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={{ position: 'fixed', bottom: '24px', left: '24px', zIndex: 50 }}
          className="fixed bottom-6 left-6 z-50"
        >
          <button
            type="button"
            onClick={handleScrollToTop}
            aria-label="Back to top"
            title="Back to top"
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #C5985B 0%, #B8864B 50%, #976A36 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 25px -5px rgba(184, 134, 75, 0.4), 0 8px 10px -6px rgba(184, 134, 75, 0.4)',
              cursor: 'pointer'
            }}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C5985B] via-[#B8864B] to-[#976A36] hover:from-[#B8864B] hover:to-[#865928] text-white shadow-xl shadow-[#B8864B]/40 hover:shadow-2xl hover:shadow-[#B8864B]/60 flex items-center justify-center transition-all duration-300 cursor-pointer transform hover:scale-110 active:scale-95 group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8864B] focus-visible:ring-offset-2"
          >
            {/* Subtle Gold Pulse Indicator Ring - matching WhatsApp pulse badge */}
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center shadow-xs">
              <span className="w-2.5 h-2.5 bg-[#C5985B] rounded-full animate-pulse" />
            </span>

            {/* Centered High-Contrast Upward Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7 text-white transform group-hover:-translate-y-1 transition-transform duration-200"
            >
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;