import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageSquare, Calculator, Star, ShieldCheck, ArrowRight } from 'lucide-react';

export const FinalCTA = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello 800 DOCS! I want to send my family visa documents on WhatsApp tonight to file tomorrow. Please send me the checklist.'
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  const scrollToFees = () => {
    const el = document.getElementById('fee-finder');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Luxury Ambient Glow */}
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
          {/* Trust Statement Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[#F5D7A1] text-[11px] font-bold tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>We work directly with official UAE government authorities</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading">
            Send the documents tonight. We file tomorrow.
          </h2>

          {/* Body */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-sans">
            Photos on WhatsApp are enough to start. You get the checklist and an itemized quote within the hour — government fees at cost, our fee stated upfront.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20BD5A] shadow-lg shadow-[#25D366]/25 transition-all cursor-pointer font-sans"
            >
              <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={scrollToFees}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-[#0F172A] bg-gradient-to-r from-[#F5D7A1] via-[#E2C08D] to-[#C5985B] hover:brightness-105 shadow-md transition-all cursor-pointer font-sans"
            >
              <Calculator className="w-4 h-4 text-[#0F172A]" />
              <span>Check government fees</span>
            </motion.button>
          </div>

          {/* Trust Indicator */}
          <div className="pt-8 flex items-center justify-center gap-2 text-xs text-slate-300">
            <span className="font-bold text-white">4.9</span>
            <div className="flex items-center gap-0.5 text-[#F5D7A1]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-slate-400">·</span>
            <span>Based on 550 Google reviews</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTA;
