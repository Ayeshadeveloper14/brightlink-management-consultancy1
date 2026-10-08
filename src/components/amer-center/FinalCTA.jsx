import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  PhoneCall,
  Crown
} from 'lucide-react';

export const FinalCTA = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleBookConsultation = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Amer Center - Book Consultation (Final CTA)');
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello Brightlink, I would like to inquire about Amer Center government and visa services.');
    window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#1E1810]">
      {/* Dynamic Background Glowing Orbs for Luxury Glassmorphic Contrast */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.1, 1], opacity: [0.35, 0.5, 0.35] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-[#B8864B]/40 to-transparent rounded-full blur-[120px]"
        />
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-32 -right-20 w-[600px] h-[600px] bg-gradient-to-tl from-[#C5985B]/35 via-[#976A36]/20 to-transparent rounded-full blur-[140px]"
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(184, 134, 75, 0.15) 1px, transparent 1px)`,
            backgroundSize: '36px 36px'
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-Width Glassmorphic Card Container */}
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] shadow-2xl shadow-black/40 text-center overflow-hidden">
          
          {/* Subtle Glassmorphic Ambient Highlight */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#B8864B]/20 blur-3xl pointer-events-none" />

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.18] text-[#F5D7A1] text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-[#F5D7A1]" />
            <span>GDRFA Dubai Electronic Submissions</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 font-heading">
            Need Help With UAE Government Services?
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Let Brightlink handle your Amer Center applications, documentation, visa processing, and government submissions with expert support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              type="button"
              onClick={handleBookConsultation}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#B8864B]/30 hover:brightness-110 active:scale-98 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-sm sm:text-base hover:bg-[#20BD5A] active:scale-98 transition-all cursor-pointer shadow-xl shadow-[#25D366]/20 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </button>
          </div>

          {/* Frosted Trust Pillars */}
          <div className="pt-8 border-t border-white/[0.1] grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-[#F5D7A1] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-white/85">
                24–48 Hr Express Turnaround
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-[#F5D7A1] shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-white/85">
                Official GDRFA Gateway
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-[#F5D7A1] shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-white/85">
                100% Typing Accuracy
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/[0.08] border border-white/[0.12] flex items-center justify-center text-[#F5D7A1] shrink-0">
                <Crown className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-white/85">
                VIP Dedicated Advisors
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
