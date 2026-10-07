import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCheck2, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  CheckCircle2,
  Building2
} from 'lucide-react';

export const FinalCTA = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleGetStarted = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Tasheel Final CTA - Get Started');
    }
  };

  const handleContactUs = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Tasheel Final CTA - Contact Us');
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#F1EBE1] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#B8864B]/15 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6D7C3] mb-6 shadow-2xs">
          <Building2 className="w-3.5 h-3.5 text-[#B8864B]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
            Corporate Labour & Workforce Liaison
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
          Need Help With Your Tasheel Transaction?
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg text-[#555555] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Let our team help you manage the required documentation and Tasheel-related procedures efficiently.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={handleGetStarted}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white font-bold text-sm sm:text-base shadow-md shadow-[#B8864B]/20 hover:brightness-105 active:scale-98 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleContactUs}
            className="px-8 py-4 rounded-full bg-white text-[#222222] font-bold text-sm sm:text-base border border-[#DECBB5] hover:bg-[#FAF6F0] active:scale-98 transition-all cursor-pointer shadow-2xs flex items-center gap-2"
          >
            <span>Contact Us</span>
          </button>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="pt-8 border-t border-[#E6D7C3] grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-xs text-[#666666]">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
            <span>MOHRE System Compliance</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
            <span>Accurate Document Verification</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#B8864B]" />
            <span>Dedicated Corporate Support</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
