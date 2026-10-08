import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Calculator, ArrowRight, MessageSquare } from 'lucide-react';

export const FinalCTA = ({ onOpenConsultation, onOpenCalculator }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleFreeQuote = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Maid Visa / Domestic Worker Sponsorship');
    } else {
      const text = encodeURIComponent(
        'Hello Brightlink! I want to check my eligibility and get a quote for a maid / domestic worker visa.'
      );
      window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
    }
  };

  const handleEstimateCost = () => {
    if (onOpenCalculator) {
      onOpenCalculator();
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Luxury Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8864B] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#3B82F6] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="space-y-6"
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[#F5D7A1] text-[11px] font-bold tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>100% Online GDRFA & MOHRE Processing</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading">
            Ready to sponsor your domestic worker?
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-sans font-normal">
            Send us a message and we'll check your eligibility, then handle the GDRFA & MOHRE paperwork from start to finish — no typing-centre visit needed.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={handleFreeQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 shadow-lg shadow-[#B8864B]/20 transition-all cursor-pointer font-sans"
            >
              <span>Get a free quote</span>
              <span className="text-base leading-none">→</span>
            </motion.button>

            {/* Secondary CTA: Estimate visa cost */}
            {onOpenCalculator ? (
              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -1.5 }}
                onClick={handleEstimateCost}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-xs text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all cursor-pointer backdrop-blur-sm font-sans"
              >
                <Calculator className="w-4 h-4 text-[#F5D7A1]" />
                <span>Estimate visa cost</span>
              </motion.button>
            ) : (
              <Link
                to="/visa-calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-xs text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all cursor-pointer backdrop-blur-sm font-sans"
              >
                <Calculator className="w-4 h-4 text-[#F5D7A1]" />
                <span>Estimate visa cost</span>
              </Link>
            )}
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default FinalCTA;
