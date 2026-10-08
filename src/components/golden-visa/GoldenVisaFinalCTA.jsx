import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  Crown, 
  Lock, 
  Award,
  Phone
} from 'lucide-react';

export const GoldenVisaFinalCTA = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleBookConsultation = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Golden Visa - Final CTA Book Consultation');
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello Brightlink, I would like to inquire about the UAE 10-Year Golden Visa application. Please guide me through eligibility and fees.');
    window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#FFFFFF] via-[#FAF7F2] to-[#F5EFE6] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-gradient-to-tr from-[#B8864B]/20 via-[#C5985B]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-6 shadow-xs">
          <Crown className="w-3.5 h-3.5 text-[#B8864B]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
            Pre-Screening & Fast-Track Filing
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight mb-5 font-heading">
          Start Your UAE Golden Visa Journey Today
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-[#555555] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Whether through property equity, C-level executive salary, or distinguished talent, let Brightlink handle your official GDRFA & ICP submission with confidentiality and precision.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={handleBookConsultation}
            className="px-7 py-4 rounded-full bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#B8864B]/25 hover:brightness-105 active:scale-98 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm sm:text-base shadow-md transition-all cursor-pointer flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Speak on WhatsApp</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 border-t border-[#E8DEC8] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#777777]">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
            <span>Official GDRFA & ICP Smart Services</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-[#B8864B]" />
            <span>Complete Confidentiality Guaranteed</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#B8864B]" />
            <span>Over 2,500 Successful Grants</span>
          </div>
        </div>

      </div>
    </section>
  );
};
