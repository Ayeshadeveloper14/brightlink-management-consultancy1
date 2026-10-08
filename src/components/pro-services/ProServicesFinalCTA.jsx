import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  Lock, 
  Award,
  CheckCircle2,
  Clock,
  PhoneCall
} from 'lucide-react';

export const ProServicesFinalCTA = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleApply = () => {
    if (onOpenConsultation) {
      onOpenConsultation('PRO Services - Apply Now (Final CTA)');
    }
  };

  const handleBookConsultation = () => {
    if (onOpenConsultation) {
      onOpenConsultation('PRO Services - Book Free Consultation (Final CTA)');
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello Brightlink, I would like to inquire about Corporate PRO Services for our UAE company.');
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
          <Building2 className="w-3.5 h-3.5 text-[#B8864B]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
            Corporate Government Liaison & PRO Department
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight mb-5 font-heading">
          Streamline Your UAE Corporate Operations Today
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-[#555555] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Eliminate immigration bottlenecks, late renewal fines, and ministerial queues. Partner with Brightlink for dedicated corporate PRO representation across all Emirates.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            type="button"
            onClick={handleApply}
            className="px-7 py-4 rounded-full bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#B8864B]/25 hover:brightness-105 active:scale-98 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Apply for PRO Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleBookConsultation}
            className="px-7 py-4 rounded-full bg-white text-[#222222] font-bold text-sm sm:text-base border border-[#DECBB5] hover:bg-[#FAF6F0] active:scale-98 transition-all cursor-pointer shadow-sm flex items-center gap-2"
          >
            <span>Book Free Consultation</span>
          </button>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="px-6 py-4 rounded-full bg-[#25D366] text-white font-bold text-sm sm:text-base hover:bg-[#20BD5A] active:scale-98 transition-all cursor-pointer shadow-sm flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat via WhatsApp</span>
          </button>
        </div>

        {/* Trust Badges Bar */}
        <div className="pt-8 border-t border-[#E6D7C3]/80 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-[#444444]">
              24–48 Hr Fast-Track Turnaround
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-[#444444]">
              Zero Delay Fine Guarantee
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
              <Lock className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-[#444444]">
              Strict NDA & Data Privacy
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
              <Award className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold text-[#444444]">
              Accredited DED & MOHRE Partner
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProServicesFinalCTA;
