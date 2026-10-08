import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Building2, 
  ChevronRight,
  Briefcase
} from 'lucide-react';

export const Hero = ({ onOpenConsultation, onScrollToForm }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello Brightlink! I would like to apply for the UAE Investor Visa (Partner Visa) for my company. Please advise on requirements and next steps.'
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  return (
    <section className="relative pt-24 pb-14 lg:pt-32 lg:pb-20 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FCFAF8] overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.35, 0.45, 0.35] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 right-0 w-[580px] h-[580px] bg-gradient-to-bl from-[#B8864B]/15 to-transparent rounded-full blur-3xl transform translate-x-1/4" 
        />
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#0F172A]/8 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Context */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-1.5 text-xs text-[#64748B] pb-6 mb-6 border-b border-[#EBE4D8]/80 font-medium"
        >
          <a href="/" className="hover:text-[#B8864B] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <a href="/visa" className="hover:text-[#B8864B] transition-colors">Visa</a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#0F172A] font-semibold">Investor Visa</span>
        </motion.div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Category & Quick Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#B8864B]/30 text-[#8C6230] text-[11px] font-bold tracking-wider uppercase font-heading">
                Business
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#0F172A] text-[11px] font-bold shadow-2xs font-heading">
                2-3 years
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold shadow-2xs font-heading">
                AED 6,340
              </span>
            </div>

            {/* Main Title */}
            <motion.h1 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight leading-[1.15] font-heading"
            >
              Investor Visa
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0"
            >
              UAE residency for shareholders and directors of a Free Zone or Mainland company. 2-3 year validity, family sponsorship enabled, full UAE banking access.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={() => {
                  if (onScrollToForm) onScrollToForm();
                  else if (onOpenConsultation) onOpenConsultation('Investor Visa Application');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] hover:from-[#B8864B] hover:via-[#C5985B] hover:to-[#976A36] shadow-lg shadow-slate-900/10 transition-all cursor-pointer font-sans"
              >
                <span>Apply now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -1.5 }}
                onClick={() => onOpenConsultation('Investor Visa Free Consultation')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-xs text-[#0F172A] bg-white border border-[#DECBB5] hover:border-[#B8864B] hover:text-[#B8864B] transition-all cursor-pointer shadow-xs font-sans"
              >
                <MessageSquare className="w-4 h-4 text-[#B8864B]" />
                <span>Free consultation</span>
              </motion.button>
            </div>

          </div>

          {/* Right Column: Compact Overview Panel / Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border border-[#DECBB5] bg-white p-7 sm:p-8 shadow-xl shadow-slate-900/5 space-y-6"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-[#E8DFC8]">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] font-heading">
                      Investor Visa
                    </h3>
                    <span className="text-[11px] text-[#8C6230] font-semibold uppercase tracking-wider">
                      Partner Residency
                    </span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                  Active Program
                </span>
              </div>

              {/* Compact Overview Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#FCFAF8] border border-[#EBE4D8]">
                  <span className="text-[11px] font-bold text-[#8C6230] uppercase tracking-wider block font-heading mb-1">
                    Validity
                  </span>
                  <strong className="text-lg font-bold text-[#0F172A] font-heading block">
                    2-3 years
                  </strong>
                  <span className="text-[10px] text-[#64748B]">Mainland / Free Zone</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FCFAF8] border border-[#EBE4D8]">
                  <span className="text-[11px] font-bold text-[#8C6230] uppercase tracking-wider block font-heading mb-1">
                    Cost from
                  </span>
                  <strong className="text-lg font-bold text-[#0F172A] font-heading block">
                    AED 6,340
                  </strong>
                  <span className="text-[10px] text-[#64748B]">All-inclusive estimate</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FCFAF8] border border-[#EBE4D8]">
                  <span className="text-[11px] font-bold text-[#8C6230] uppercase tracking-wider block font-heading mb-1">
                    Processing
                  </span>
                  <strong className="text-lg font-bold text-[#0F172A] font-heading block">
                    10-15 days
                  </strong>
                  <span className="text-[10px] text-[#64748B]">Full turnaround</span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FCFAF8] border border-[#EBE4D8]">
                  <span className="text-[11px] font-bold text-[#8C6230] uppercase tracking-wider block font-heading mb-1">
                    Sponsor
                  </span>
                  <strong className="text-lg font-bold text-[#0F172A] font-heading block">
                    Own company
                  </strong>
                  <span className="text-[10px] text-[#64748B]">Self-sponsored</span>
                </div>
              </div>

              {/* Bottom Quick Feature Tag */}
              <div className="pt-2 flex items-center justify-between text-xs text-[#64748B] border-t border-[#E8DFC8]">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Family sponsorship eligible
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Corporate bank account ready
                </span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
