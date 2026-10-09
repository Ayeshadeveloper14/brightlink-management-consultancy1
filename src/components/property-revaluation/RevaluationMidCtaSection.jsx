import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  FileCheck, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  ArrowRight 
} from 'lucide-react';

export const RevaluationMidCtaSection = ({ onOpenConsultation }) => {
  const handleWhatsApp = () => {
    const query = encodeURIComponent('Hello Brightlink, I would like to request an official Property Revaluation Certificate in Dubai. Can you check my file?');
    window.open(`https://wa.me/971566556645?text=${query}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-24 bg-[#141414] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B8864B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#F5D7A1] text-xs font-semibold">
          <TrendingUp className="w-3.5 h-3.5 text-[#F5D7A1]" />
          <span className="uppercase tracking-wider text-[11px] font-bold">
            Preliminary Valuation Feasibility Check
          </span>
        </div>

        {/* Strong Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Need an Official Property <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D7A1] via-[#E2B774] to-[#C5985B]">
            Revaluation Certificate in Dubai?
          </span>
        </h2>

        {/* Short Supporting Text */}
        <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Send your Title Deed copy on WhatsApp for a preliminary document audit and valuation feasibility check within 15 minutes. No obligation, no delays.
        </p>

        {/* Primary and Secondary CTA */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-xl shadow-[#25D366]/30 transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onOpenConsultation?.('Property Revaluation Case Opening')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 text-white font-bold text-sm shadow-lg shadow-[#B8864B]/20 transition-all cursor-pointer whitespace-nowrap"
          >
            <FileCheck className="w-4 h-4" />
            <span>Book Free Valuation Consultation</span>
          </motion.button>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-medium">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
            <span>100% GDRFA Golden Visa Approved</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#B8864B]" />
            <span>15-Minute File Pre-Check</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FileCheck className="w-4 h-4 text-[#B8864B]" />
            <span>Direct DLD Electronic Submission</span>
          </div>
        </div>

      </div>
    </section>
  );
};
