import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  CreditCard, 
  Lock, 
  Award,
  Clock,
  Fingerprint
} from 'lucide-react';

export const FinalCTA = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleBookConsultation = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Emirates ID - Final CTA Book Consultation');
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello Brightlink, I would like to inquire about Emirates ID application and renewal services.');
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
          <CreditCard className="w-3.5 h-3.5 text-[#B8864B]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
            Official ICP Typing & Expedited Processing
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight mb-5 font-heading">
          Get Your Emirates ID Processed with Confidence
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-[#555555] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Let Brightlink handle your Emirates ID application, renewal, replacement, and documentation support. Eliminate government queues, avoid fines, and receive your card with peace of mind.
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
            className="px-6 py-4 rounded-full bg-[#25D366] text-white font-bold text-sm sm:text-base hover:bg-[#20BD5A] active:scale-98 transition-all cursor-pointer shadow-sm flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="pt-8 border-t border-[#E6D7C3]/80 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-[#444444]">
              Same-Day Electronic Filing
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-[#444444]">
              Zero Fine Guarantee
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
              <Fingerprint className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-[#444444]">
              VIP Biometric Scheduling
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
              <Award className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-[#444444]">
              ICP Authorized Typing
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
