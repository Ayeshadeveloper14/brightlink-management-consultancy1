import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Calculator, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  Users, 
  Baby, 
  Heart, 
  Info,
  Calendar,
  Sparkles
} from 'lucide-react';

export const FeeFinder = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedRelative, setSelectedRelative] = useState('spouse');

  const options = [
    {
      id: 'spouse',
      title: 'My spouse',
      price: 'from AED 1,579',
      subtitle: 'Husband or wife sponsorship',
      details: 'Includes entry permit, standard status filing, and 2-year residence visa file opening.',
      govNotes: 'Entry permit outside: AED 490 · In-country change: AED 680 · Stamping: AED 580'
    },
    {
      id: 'child',
      title: 'My child',
      price: 'from AED 1,103',
      subtitle: 'Sons up to 25 · daughters any age',
      details: 'Discounted family file rate for first and subsequent dependent children.',
      govNotes: 'Children under 18 exempt from medical fitness testing.'
    },
    {
      id: 'parents',
      title: 'My parents',
      price: 'from AED 2,955',
      subtitle: 'Father and mother sponsorship',
      details: 'Comprehensive humanitarian file opening with GDRFA deposit guidance.',
      govNotes: 'Requires basic salary AED 20,000 + 2-bedroom registered tenancy + insurance.'
    },
    {
      id: 'newborn',
      title: 'My newborn',
      price: 'from AED 1,099',
      subtitle: 'Born inside the UAE',
      details: 'Complete 120-day birth certificate legalization and residence stamping.',
      govNotes: 'No entry permit needed if processed within the 120-day statutory window.'
    }
  ];

  const currentOption = options.find((o) => o.id === selectedRelative) || options[0];

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Hello 800 DOCS! I used the Fee Finder on your website for ${currentOption.title} (${currentOption.price}). Please send me the complete itemized government fee sheet and service quote on WhatsApp.`
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  return (
    <section id="fee-finder" className="py-20 lg:py-24 bg-[#FFFFFF] border-t border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#E8DFC8]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#B8864B]/30 text-[#8C6230] text-[11px] font-bold tracking-wider uppercase mb-3">
              <Calculator className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>Fee finder</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
              Who are you sponsoring?
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#8C6230] bg-[#FAF5EC] px-3.5 py-1.5 rounded-xl border border-[#DECBB5] shrink-0 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Live sheet · 11 Sep 2026</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-8 font-sans">
          Tap one — a few short questions, one at a time, then the full fee breakdown.
        </p>

        {/* 4 Selectable Fee Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {options.map((opt) => {
            const isSelected = selectedRelative === opt.id;
            return (
              <motion.button
                key={opt.id}
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={() => setSelectedRelative(opt.id)}
                className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#FAF5EC] border-[#B8864B] shadow-md shadow-[#B8864B]/10 ring-2 ring-[#B8864B]/20'
                    : 'bg-[#FCFAF8] border-[#DECBB5] hover:border-[#B8864B]/60 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#8C6230] font-heading uppercase tracking-wider">
                      {opt.subtitle}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] font-heading mb-1">
                    {opt.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-[#DECBB5]/70">
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] font-heading">
                    {opt.price}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Selected Card Details Panel */}
        <motion.div
          key={currentOption.id}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-7 rounded-2xl bg-[#FCFAF8] border border-[#DECBB5] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6"
        >
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C6230]">
              <span>Selected Relative:</span>
              <strong className="text-[#0F172A] font-heading uppercase">{currentOption.title}</strong>
              <span className="text-slate-300">·</span>
              <span className="text-emerald-700 font-bold">{currentOption.price}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {currentOption.details} {currentOption.govNotes}
            </p>
          </div>

          <div className="shrink-0">
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={handleWhatsAppQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20BD5A] shadow-md transition-all cursor-pointer font-sans"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Exact Fee Sheet on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Supporting text */}
        <div className="mt-6 flex items-start gap-2.5 text-xs text-[#64748B]">
          <Info className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Official fees from the sheet our team files with — no sign-up. Our service fee is quoted separately on WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeeFinder;
