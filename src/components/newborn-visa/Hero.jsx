import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Baby, Calculator, Sparkles, ChevronRight, CheckCircle2, Heart } from 'lucide-react';

export const Hero = ({ onOpenCalculator, onScrollToCalculator }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleCalculatorClick = () => {
    if (onScrollToCalculator) {
      onScrollToCalculator();
    } else if (onOpenCalculator) {
      onOpenCalculator();
    }
  };

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-14 lg:pb-20 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FCFAF8] overflow-hidden">
      {/* Warm Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.35, 0.45, 0.35] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 right-0 w-[580px] h-[580px] bg-gradient-to-bl from-[#B8864B]/15 to-transparent rounded-full blur-3xl transform translate-x-1/4" 
        />
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#B8864B]/10 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Context */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-1.5 text-xs text-[#64748B] pb-6 mb-6 border-b border-[#EBE4D8]/80 font-medium"
        >
          <a href="/" className="hover:text-[#B8864B] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <a href="/visa" className="hover:text-[#B8864B] transition-colors">Visa</a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#0F172A] font-semibold">Newborn Visa</span>
        </motion.div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow / Page label */}
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#B8864B]/30 text-[#8C6230] text-[11px] font-bold tracking-wider uppercase shadow-xs font-heading"
            >
              <Baby className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>Free UAE Newborn Visa Tool</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.15] font-heading"
            >
              Welcome your baby to the UAE — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#C5985B] to-[#976A36]">we'll handle the paperwork.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              From hospital birth notification to a stamped residence visa — the whole newborn journey in 5 simple phases.
            </motion.p>

            {/* Primary CTA & Supporting CTA Text */}
            <div className="pt-2 space-y-3">
              <div>
                <motion.button
                  type="button"
                  whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  onClick={handleCalculatorClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] hover:from-[#B8864B] hover:via-[#C5985B] hover:to-[#976A36] shadow-lg shadow-slate-900/10 transition-all cursor-pointer font-sans"
                >
                  <Calculator className="w-4 h-4 text-[#F5D7A1]" />
                  <span>Calculate Visa Cost</span>
                </motion.button>
              </div>

              <p className="text-xs text-[#8C6230] font-medium font-heading">
                Free · No signup · Itemized in under 30 seconds
              </p>
            </div>

          </div>

          {/* Right Column: Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/15 border border-[#DECBB5]/80 bg-white group"
            >
              <div className="relative h-[380px] sm:h-[430px] overflow-hidden">
                <img 
                  src="/images/newborn_visa_dubai.jpg" 
                  alt="Newborn baby residency visa Dubai UAE" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://website-imges.vercel.app/about_visa_consultant_1790842347102.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
              </div>

              {/* Floating Top Badge */}
              <div className="absolute top-5 left-5 right-5 flex justify-between items-center pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#F5D7A1] text-xs font-bold shadow-lg">
                  120-Day Official Window
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-bold shadow-md">
                  No Medical Required
                </span>
              </div>

              {/* Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading block">
                  Complete 5-Phase Journey
                </span>
                <h3 className="text-sm font-bold text-[#0F172A] font-heading">
                  Birth Certificate · MOFA · Passport · Emirates ID · Stamping
                </h3>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
