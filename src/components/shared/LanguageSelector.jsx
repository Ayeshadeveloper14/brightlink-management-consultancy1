import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown, Check, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.jsx';

export const LanguageSelector = ({ isTransparent = false }) => {
  const { currentLanguage, languageConfig, languages, setLanguage, isRTL } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSelectLanguage = (code) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
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

      {/* Desktop Dropdown Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className={`absolute top-full mt-2 w-56 bg-[#FCFAF8] rounded-2xl border border-[#E6D7C3] shadow-2xl shadow-black/15 p-1.5 z-50 overflow-hidden backdrop-blur-sm ${
              isRTL ? 'left-0' : 'right-0'
            }`}
            role="listbox"
          >
            {/* Header label */}
            <div className="px-3 py-2 border-b border-[#EFEAE2] mb-1">
              <span className="text-[10px] font-extrabold tracking-[0.14em] text-[#B8864B] uppercase font-heading">
                SELECT LANGUAGE
              </span>
            </div>

            {/* List of 9 supported languages */}
            <div className="flex flex-col gap-0.5 max-h-[320px] overflow-y-auto">
              {languages.map((lang) => {
                const isSelected = lang.code === currentLanguage;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelectLanguage(lang.code)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all duration-150 cursor-pointer select-none text-left ${
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
      </AnimatePresence>
    </div>
  );
};

export const MobileLanguageSelector = ({ isTransparent = false }) => {
  const { currentLanguage, languageConfig, languages, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Compact Globe Icon Trigger Button for Mobile */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Select Language"
        className={`p-2 rounded-xl border transition-colors cursor-pointer flex items-center justify-center shrink-0 ${
          isTransparent
            ? 'border-white/20 bg-white/10 text-white hover:bg-white/20'
            : 'border-[#E6D7C3] bg-neutral-50/80 text-[#222222] hover:bg-[#FAF6F0] hover:text-[#B8864B]'
        }`}
      >
        <Globe className="w-4 h-4 text-[#B8864B] shrink-0" />
      </button>

      {/* Mobile Modal/Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-sm bg-[#FCFAF8] rounded-[22px] border border-[#E6D7C3] shadow-2xl p-5 overflow-hidden z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[#EFEAE2] mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FAF2E6] border border-[#B8864B]/30 flex items-center justify-center text-[#B8864B]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
                    SELECT LANGUAGE
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Languages List */}
              <div className="grid grid-cols-1 gap-1.5 max-h-[60vh] overflow-y-auto pr-1">
                {languages.map((lang) => {
                  const isSelected = lang.code === currentLanguage;
                  return (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsOpen(false);
                      }}
                      className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? 'bg-[#FAF2E6] border-[#B8864B] text-[#8C5E28] font-bold shadow-xs'
                          : 'bg-white/80 border-[#EFEAE2] text-[#2B2B2B] hover:bg-[#FAF6F0]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-base select-none">{lang.flag}</span>
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">{lang.nativeName}</span>
                          <span className="text-xs text-neutral-400 font-normal">{lang.name}</span>
                        </div>
                      </div>
                      {isSelected && (
                        <div className="w-6 h-6 rounded-full bg-[#B8864B] text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LanguageSelector;
