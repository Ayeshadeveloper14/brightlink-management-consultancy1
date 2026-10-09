import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Plane, 
  ShieldAlert, 
  Send, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle,
  FileCheck,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const Hero = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleConsultation = (mode = 'General') => {
    if (onOpenConsultation) {
      onOpenConsultation(`Tourist Visa Eligibility - ${mode}`);
    }
  };

  const scrollToEligibility = () => {
    const el = document.getElementById('eligibility-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FCFAF8] overflow-hidden border-b border-[#F1EBE1]">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.35, 0.45, 0.35] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 right-0 w-[620px] h-[620px] bg-gradient-to-bl from-[#B8864B]/15 via-[#C5985B]/10 to-transparent rounded-full blur-3xl transform translate-x-1/4" 
        />
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.06, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 left-0 w-[540px] h-[540px] bg-gradient-to-tr from-[#0F172A]/8 via-[#B8864B]/5 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" 
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#B8864B 0.5px, transparent 0.5px)`,
            backgroundSize: '28px 28px',
            opacity: 0.12
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Strip */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-500 mb-6 font-medium">
          <a href="/" className="hover:text-[#B8864B] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <a href="/visa" className="hover:text-[#B8864B] transition-colors">Visa</a>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-[#B8864B] font-semibold" aria-current="page">Tourist Visa</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading and Positioning */}
          <div className="lg:col-span-7">
            
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#B8864B] animate-pulse" />
              <span className="text-xs font-bold tracking-wide uppercase text-[#B8864B] font-heading">
                Visitor Entry & Short Stays
              </span>
            </div>

            {/* Primary Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight leading-[1.15] mb-5 font-heading">
              Dubai visa and UAE visa
            </h1>

            {/* Supporting Positioning */}
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed mb-8 max-w-2xl font-normal">
              Travellers use both phrases. “Dubai visa” reflects the destination people search for; “UAE visa” describes the country-level entry permission.
            </p>

            {/* Three concise highlights */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#EFEAE2] shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#222222]">Tourism and short visits only</h3>
                  <p className="text-xs text-[#666666] mt-0.5">
                    Designed strictly for leisure, sightseeing, visiting relatives, or attending short conferences.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#EFEAE2] shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 mt-0.5">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#222222]">Delivered electronically when approved</h3>
                  <p className="text-xs text-[#666666] mt-0.5">
                    Official e-Visa document sent directly via email and digital portal before your flight.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFF9F5] border border-[#F2DAC6] shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-[#FDE8D7] text-[#C25E1A] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#9A400B]">Not permission to work or reside</h3>
                  <p className="text-xs text-[#8C3A0A] mt-0.5">
                    A tourist visa does not authorize employment, freelancing, or long-term residency in the UAE.
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToEligibility}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white font-bold text-sm shadow-md shadow-[#B8864B]/25 hover:brightness-105 active:scale-98 transition-all cursor-pointer"
              >
                <span>Check Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleConsultation('Hero General Inquire')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#DECBB5] text-[#444444] hover:text-[#B8864B] hover:border-[#B8864B] font-semibold text-sm shadow-xs transition-all cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-[#B8864B]" />
                <span>Ask an Advisor</span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Outer decorative card frame */}
              <div className="relative rounded-2xl bg-white border border-[#E6D7C3] p-6 shadow-xl shadow-black/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#B8864B]/15 to-transparent rounded-bl-full pointer-events-none" />

                <div className="flex items-center justify-between pb-4 border-b border-[#F0E6D8] mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center font-bold">
                      <Plane className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#222222] block font-heading">UAE Visitor Entry Permit</span>
                      <span className="text-[11px] text-[#777777]">Federal ICP / GDRFA Compliance</span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2 py-1 bg-[#FAF5EC] text-[#B8864B] rounded-md border border-[#E6D7C3]">
                    e-Visa
                  </span>
                </div>

                {/* Hero Feature Callout */}
                <div className="rounded-xl overflow-hidden mb-5 border border-neutral-100 relative group">
                  <img
                    src="https://website-imges.vercel.app/hero_dubai_skyline_1790842330436.jpg"
                    alt="Dubai skyline landmarks"
                    className="w-full h-48 object-cover group-hover:scale-102 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/images/hero_dubai_skyline_1790842330436.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-4">
                    <p className="text-xs text-white/95 font-medium leading-relaxed">
                      Valid for entry across all 7 Emirates subject to the conditions of the issued visa.
                    </p>
                  </div>
                </div>

                {/* Status Pillars */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE2]">
                    <span className="text-[10px] uppercase tracking-wider text-[#888888] font-bold block mb-1">Entry Scope</span>
                    <span className="text-xs font-bold text-[#222222]">Sightseeing & Leisure</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE2]">
                    <span className="text-[10px] uppercase tracking-wider text-[#888888] font-bold block mb-1">Delivery</span>
                    <span className="text-xs font-bold text-[#222222]">Digital PDF e-Visa</span>
                  </div>
                </div>

                {/* Critical Legal Notice Notice Box */}
                <div className="p-3.5 rounded-xl bg-[#FCF8F3] border border-[#EBD5BE] text-xs text-[#7A4B1A] leading-relaxed">
                  <div className="flex items-center gap-1.5 font-bold mb-1 text-[#653E15]">
                    <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
                    <span>Important Visitor Distinction</span>
                  </div>
                  <span>
                    This is an entry route for tourists and guests. It does not confer labour rights or long-term residency.
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
