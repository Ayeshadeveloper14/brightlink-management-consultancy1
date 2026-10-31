import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.jsx';

/**
 * Calculates viewport-bounded coordinates for the language dropdown.
 * Guarantees that:
 * 1. The dropdown prefers opening below the button.
 * 2. Position is always aligned with the trigger button.
 * 3. Horizontal bounds stay safely within [8px, viewportWidth - 8px].
 * 4. MaxHeight is adjusted so the complete dropdown remains inside viewport.
 */
const getDropdownCoordinates = (triggerEl) => {
  if (!triggerEl) {
    return { top: 60, left: 8, width: 224, maxHeight: 360 };
  }

  const rect = triggerEl.getBoundingClientRect();
  const vWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
  const vHeight = typeof window !== 'undefined' ? window.innerHeight : 768;

  const width = Math.min(224, Math.max(180, vWidth - 16));
  const targetDropdownHeight = 340;

  // Determine vertical positioning - prefer opening below
  const spaceBelow = vHeight - rect.bottom;
  const spaceAbove = rect.top;

  let top;
  let maxHeight;

  if (spaceBelow >= 160 || spaceBelow >= spaceAbove) {
    top = rect.bottom + 8;
    top = Math.max(8, top);
    maxHeight = Math.max(160, Math.min(targetDropdownHeight, vHeight - top - 10));
  } else {
    const rawTop = rect.top - targetDropdownHeight - 8;
    top = Math.max(8, rawTop);
    const availableSpace = Math.max(160, rect.top - top - 8);
    maxHeight = Math.min(targetDropdownHeight, availableSpace);
  }

  if (top < 8) top = 8;
  if (top + maxHeight > vHeight - 8) {
    maxHeight = Math.max(120, vHeight - top - 8);
  }

  // Horizontal positioning: align right edge with button, or fall back to left alignment
  let left = rect.right - width;
  if (left < 8) {
    left = Math.max(8, rect.left);
  }
  if (left + width > vWidth - 8) {
    left = Math.max(8, vWidth - width - 8);
  }
  if (left < 8) left = 8;

  return {
    top: Math.round(top),
    left: Math.round(left),
    width: Math.round(width),
    maxHeight: Math.round(maxHeight)
  };
};

/**
 * Shared dropdown menu rendered via Portal to escape parent clipping & transforms.
 */
const LanguageDropdownMenu = ({
  isOpen,
  triggerRef,
  onClose,
  onSelectLanguage,
  currentLanguage,
  languages
}) => {
  const menuRef = useRef(null);
  const [coords, setCoords] = useState(() =>
    getDropdownCoordinates(triggerRef.current)
  );

  const updateCoords = useCallback(() => {
    if (triggerRef.current) {
      setCoords(getDropdownCoordinates(triggerRef.current));
    }
  }, [triggerRef]);

  useEffect(() => {
    if (!isOpen) return;

    updateCoords();

    const handleOutsideClick = (event) => {
      if (
        triggerRef.current &&
        triggerRef.current.contains(event.target)
      ) {
        return;
      }
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', updateCoords);
    window.addEventListener('scroll', updateCoords, true);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', updateCoords);
      window.removeEventListener('scroll', updateCoords, true);
    };
  }, [isOpen, updateCoords, onClose, triggerRef]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          dir="ltr"
          style={{
            position: 'fixed',
            top: `${coords.top}px`,
            left: `${coords.left}px`,
            width: `${coords.width}px`,
            maxHeight: `${coords.maxHeight}px`,
            zIndex: 99999
          }}
          className="bg-[#FCFAF8] rounded-2xl border border-[#E6D7C3] shadow-2xl shadow-black/20 p-1.5 overflow-hidden backdrop-blur-sm flex flex-col pointer-events-auto select-none"
          role="listbox"
          aria-label="Languages"
        >
          {/* Header label */}
          <div className="px-3 py-2 border-b border-[#EFEAE2] mb-1 shrink-0 flex items-center justify-between">
            <span className="text-[10px] font-extrabold tracking-[0.14em] text-[#B8864B] uppercase font-heading">
              SELECT LANGUAGE
            </span>
            <span className="text-[9px] font-bold text-neutral-400 uppercase">
              {currentLanguage}
            </span>
          </div>

          {/* List of 5 supported languages: en, ar, zh, fr, de */}
          <div className="flex flex-col gap-0.5 overflow-y-auto flex-1 overscroll-contain pr-0.5">
            {languages.map((lang) => {
              const isSelected = lang.code === currentLanguage;
              return (
                <button
                  key={lang.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                  }}
                  onTouchStart={(e) => {
                    e.stopPropagation();
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onSelectLanguage(lang.code);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all duration-150 cursor-pointer select-none text-left shrink-0 ${
                    isSelected
                      ? 'bg-[#FAF2E6] text-[#8C5E28] font-bold border border-[#B8864B]/40 shadow-xs'
                      : 'text-[#2B2B2B] hover:bg-[#FAF6F0] hover:text-[#B8864B]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-sm select-none" role="img" aria-label={lang.name}>
                      {lang.flag}
                    </span>
                    <div className="flex flex-col items-start leading-tight">
                      <span className="font-semibold text-xs">
                        {lang.nativeName}
                      </span>
                      <span className="text-[10px] text-neutral-400 font-normal">
                        {lang.name}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-[#B8864B] stroke-[2.2] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export const LanguageSelector = ({ isTransparent = false }) => {
  const { currentLanguage, languageConfig, languages, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  const handleSelectLanguage = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Change Language"
        className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border transition-all duration-200 cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-[#B8864B]/40 ${
          isOpen
            ? 'border-[#B8864B] bg-[#FAF5EC] text-[#976A36] shadow-sm'
            : isTransparent
            ? 'bg-white/10 hover:bg-white/20 text-white border-white/25 backdrop-blur-md shadow-xs'
            : 'bg-neutral-50/80 hover:bg-[#FAF6F0] text-[#222222] border-[#E6D7C3] hover:border-[#B8864B]/50 shadow-2xs'
        }`}
      >
        <Globe
          className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-12 text-[#B8864B]' : isTransparent ? 'text-white/90' : 'text-[#B8864B]'
          }`}
        />
        <span className="font-medium text-xs tracking-normal hidden sm:inline">
          {languageConfig.nativeName}
        </span>
        <span className="font-bold text-[11px] tracking-wide sm:hidden uppercase">
          {languageConfig.code}
        </span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen
              ? 'rotate-180 text-[#B8864B]'
              : isTransparent
              ? 'text-white/70'
              : 'text-neutral-400'
          }`}
        />
      </button>

      <LanguageDropdownMenu
        isOpen={isOpen}
        triggerRef={buttonRef}
        onClose={() => setIsOpen(false)}
        onSelectLanguage={handleSelectLanguage}
        currentLanguage={currentLanguage}
        languages={languages}
      />
    </div>
  );
};

export const MobileLanguageSelector = ({ isTransparent = false }) => {
  const { currentLanguage, languages, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  const handleSelectLanguage = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left shrink-0">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select Language"
        className={`w-9 h-9 p-2 rounded-xl border transition-colors cursor-pointer flex items-center justify-center shrink-0 ${
          isOpen
            ? 'border-[#B8864B] bg-[#FAF5EC] text-[#976A36]'
            : isTransparent
            ? 'border-white/20 bg-white/10 text-white hover:bg-white/20'
            : 'border-[#E6D7C3] bg-neutral-50/80 text-[#222222] hover:bg-[#FAF6F0] hover:text-[#B8864B]'
        }`}
      >
        <Globe className="w-4 h-4 text-[#B8864B] shrink-0" />
      </button>

      <LanguageDropdownMenu
        isOpen={isOpen}
        triggerRef={buttonRef}
        onClose={() => setIsOpen(false)}
        onSelectLanguage={handleSelectLanguage}
        currentLanguage={currentLanguage}
        languages={languages}
      />
    </div>
  );
};

export default LanguageSelector;
