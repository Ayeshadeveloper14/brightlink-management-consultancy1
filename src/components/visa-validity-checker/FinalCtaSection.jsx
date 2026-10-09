import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Search, MessageSquare, PhoneCall, ShieldCheck, ArrowRight } from 'lucide-react';

export const FinalCtaSection = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const scrollToChecker = () => {
    const el = document.getElementById('visa-checker-tool');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello Brightlink! I am unsure about my UAE visa status and validity. Please connect me with an immigration consultant.'
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Subtle luxury background glow with slow ambient pulse */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8864B] rounded-full blur-3xl" 
        />
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#3B82F6] rounded-full blur-3xl" 
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Scroll reveal wrapper */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[#F5D7A1] text-[11px] font-bold tracking-wider uppercase mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Licensed UAE Immigration & Government Typing Partner</span>
          </motion.div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading mb-6">
            Not sure where your visa stands?
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-sans mb-10">
            Avoid unexpected border issues, travel bans, or compounding overstay fines. Let our licensed UAE immigration specialists verify your residency status, calculate exact grace days, or apply for fine exemptions today.
          </p>

          {/* Action Buttons with Tasteful Hover Transitions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -2.5, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              onClick={scrollToChecker}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-[#0F172A] bg-gradient-to-r from-[#F5D7A1] via-[#E2C08D] to-[#C5985B] hover:brightness-105 active:scale-98 shadow-lg shadow-black/25 hover:shadow-[#B8864B]/30 transition-all cursor-pointer font-sans"
            >
              <Search className="w-4 h-4 text-[#0F172A]" />
              <span>Check Visa Status Now</span>
            </motion.button>

            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -2.5, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              onClick={openWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20BD5A] active:scale-98 shadow-md shadow-[#25D366]/20 transition-all cursor-pointer font-sans"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </motion.button>

            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -2.5, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              onClick={() => onOpenConsultation('Visa Status Verification & Assistance')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 active:scale-98 transition-all cursor-pointer font-sans"
            >
              <PhoneCall className="w-4 h-4 text-[#B8864B]" />
              <span>Book Consultation</span>
            </motion.button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Direct GDRFA & ICP Database Verification
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              100% Confidential & Secure
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Authorized Typing Center in Dubai
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalCtaSection;
