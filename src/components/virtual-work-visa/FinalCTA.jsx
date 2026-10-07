import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, HelpCircle, ShieldCheck, Sparkles, Lock, FileCheck2 } from 'lucide-react';

export const FinalCTA = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleEligibility = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Virtual Work Visa - Check Eligibility');
    }
  };

  const handleQuote = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Virtual Work Visa - Get a Free Quote');
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
            Accredited Document Verification
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight mb-5 font-heading">
          Ready to Apply for the UAE Virtual Work Visa?
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-[#555555] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Let our senior government liaison team verify your overseas employment contract, salary certificates, and healthcare policy before official submission.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={handleEligibility}
            className="px-7 py-4 rounded-full bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#B8864B]/25 hover:brightness-105 active:scale-98 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Check Eligibility</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleQuote}
            className="px-7 py-4 rounded-full bg-white border border-[#DECBB5] text-[#333333] hover:text-[#B8864B] hover:border-[#B8864B] font-bold text-sm sm:text-base shadow-sm transition-all cursor-pointer flex items-center gap-2"
          >
            <HelpCircle className="w-4 h-4 text-[#B8864B]" />
            <span>Get a Free Quote</span>
          </button>
        </div>

        {/* Trust Markers */}
        <div className="pt-8 border-t border-[#E8DEC8] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#777777]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
            <span>Pre-submission review to prevent rejections</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-[#B8864B]" />
            <span>Official GDRFA & ICP portal submission</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FileCheck2 className="w-4 h-4 text-[#B8864B]" />
            <span>Complete family sponsorship assistance</span>
          </div>
        </div>

      </div>
    </section>
  );
};
