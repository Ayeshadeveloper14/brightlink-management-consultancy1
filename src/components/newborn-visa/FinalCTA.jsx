import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calculator, MessageSquare, ArrowRight, Baby, Heart } from 'lucide-react';

export const FinalCTA = ({ onOpenCalculator, onScrollToCalculator }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello Brightlink! I want to start my newborn baby visa application. Please send me the checklist and next steps.'
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  const handleCalculator = () => {
    if (onScrollToCalculator) onScrollToCalculator();
    else if (onOpenCalculator) onOpenCalculator();
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8864B] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#3B82F6] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[#F5D7A1] text-[11px] font-bold tracking-wider uppercase">
            <Heart className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>UAE Family Residency & Newborn Registration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading">
            Ready to welcome your baby to the UAE?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-sans">
            Get an exact, itemized cost in 30 seconds — or message us and we'll take care of the entire 5-phase journey for you.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={handleCalculator}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-[#0F172A] bg-gradient-to-r from-[#F5D7A1] via-[#E2C08D] to-[#C5985B] hover:brightness-105 shadow-md transition-all cursor-pointer font-sans"
            >
              <Calculator className="w-4 h-4 text-[#0F172A]" />
              <span>Calculate Visa Cost</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20BD5A] shadow-lg shadow-[#25D366]/25 transition-all cursor-pointer font-sans"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </motion.button>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400 border-t border-white/10">
            <span>Hospital-to-doorstep collection</span>
            <span>·</span>
            <span>120-Day compliance guaranteed</span>
            <span>·</span>
            <span>Zero government queues</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTA;
