import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  FileCheck2,
  Lock
} from 'lucide-react';

export const FinalCTA = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleEligibilityCTA = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Tourist Visa - Check Eligibility');
    }
  };

  const handleFreeConsultationCTA = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Tourist Visa - Free Consultation');
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#FFFFFF] via-[#FAF7F2] to-[#F5EFE6] relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#B8864B]/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
            Pre-Travel Document Verification
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight mb-5 font-heading">
          Ready to check your UAE tourist visa?
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-[#555555] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Tell us the passport you'll travel with, where you currently live and how long you plan to stay. We'll help you identify the correct visitor route before you fly.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={handleEligibilityCTA}
            className="px-7 py-4 rounded-full bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#B8864B]/25 hover:brightness-105 active:scale-98 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Check my eligibility</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleFreeConsultationCTA}
            className="px-7 py-4 rounded-full bg-white border border-[#DECBB5] text-[#333333] hover:text-[#B8864B] hover:border-[#B8864B] font-bold text-sm sm:text-base shadow-sm transition-all cursor-pointer flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-[#B8864B]" />
            <span>Get a free consultation</span>
          </button>
        </div>

        {/* Trust & Compliance Markers */}
        <div className="pt-8 border-t border-[#E8DEC8] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#777777]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
            <span>Document review prior to submission</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-[#B8864B]" />
            <span>Official government portal typing</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FileCheck2 className="w-4 h-4 text-[#B8864B]" />
            <span>Clear visitor scope distinction</span>
          </div>
        </div>

      </div>
    </section>
  );
};
