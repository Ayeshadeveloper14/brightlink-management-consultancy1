import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Laptop, 
  ArrowRight, 
  HelpCircle, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  Globe2,
  DollarSign
} from 'lucide-react';

export const Hero = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleConsultation = (actionTitle = 'Check Eligibility') => {
    if (onOpenConsultation) {
      onOpenConsultation(`Virtual Work Visa - ${actionTitle}`);
    }
  };

  const scrollToOverview = () => {
    const el = document.getElementById('overview-section');
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
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-500 mb-6 font-medium">
          <a href="/" className="hover:text-[#B8864B] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <a href="/visa" className="hover:text-[#B8864B] transition-colors">Visa</a>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-[#B8864B] font-semibold" aria-current="page">Virtual Work Visa</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Eyebrow & Description */}
          <div className="lg:col-span-7">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#B8864B] animate-pulse" />
              <span className="text-xs font-bold tracking-wide uppercase text-[#B8864B] font-heading">
                Virtual Work Visa
              </span>
            </div>

            {/* Main H1 Heading - Rendered exactly once */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight leading-[1.15] mb-5 font-heading">
              UAE Virtual Work Visa: Requirements, Fees, and Application Process
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed mb-8 max-w-2xl font-normal">
              This guide covers every step of obtaining a UAE virtual work visa, from eligibility and documents to official fees and processing timelines.
            </p>

            {/* Core Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-white border border-[#EFEAE2] shadow-xs">
                <span className="text-[10px] uppercase tracking-wider text-[#888888] font-bold block mb-1">Duration</span>
                <span className="text-xs font-bold text-[#222222]">1-Year Renewable</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#EFEAE2] shadow-xs">
                <span className="text-[10px] uppercase tracking-wider text-[#888888] font-bold block mb-1">Income Threshold</span>
                <span className="text-xs font-bold text-[#B8864B]">USD 3,500 / Month</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#EFEAE2] shadow-xs">
                <span className="text-[10px] uppercase tracking-wider text-[#888888] font-bold block mb-1">Sponsorship</span>
                <span className="text-xs font-bold text-[#222222]">100% Self-Sponsored</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => handleConsultation('Check Eligibility')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white font-bold text-sm shadow-md shadow-[#B8864B]/25 hover:brightness-105 active:scale-98 transition-all cursor-pointer"
              >
                <span>Check Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleConsultation('Get a Free Quote')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#DECBB5] text-[#444444] hover:text-[#B8864B] hover:border-[#B8864B] font-semibold text-sm shadow-xs transition-all cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-[#B8864B]" />
                <span>Get a Free Quote</span>
              </button>
            </div>

            <p className="text-[11px] text-[#888888] mt-4">
              *Informational guide. Approvals remain subject to official GDRFA / ICP regulatory review. No guaranteed approvals.
            </p>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white border border-[#E6D7C3] p-6 shadow-xl shadow-black/5 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#B8864B]/15 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-[#F0E6D8] mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center font-bold">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#222222] block font-heading">UAE Remote Work Residency</span>
                    <span className="text-[11px] text-[#777777]">Virtual Working Programme</span>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-bold px-2 py-1 bg-[#FAF5EC] text-[#B8864B] rounded-md border border-[#E6D7C3]">
                  Self-Sponsored
                </span>
              </div>

              {/* Skyline Banner */}
              <div className="rounded-xl overflow-hidden mb-5 border border-neutral-100 relative group">
                <img
                  src="https://website-imges.vercel.app/process_bg_skyline_1790959277672.jpg"
                  alt="Dubai digital nomad skyline"
                  className="w-full h-44 object-cover group-hover:scale-102 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = '/images/process_bg_skyline_1790959277672.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-4">
                  <p className="text-xs text-white/95 font-medium leading-relaxed">
                    Live legally in Dubai & UAE while working remotely for international employers.
                  </p>
                </div>
              </div>

              {/* Key Attributes */}
              <div className="space-y-2.5 mb-5 text-xs text-[#555555]">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFEAE2]">
                  <span className="font-medium">Employer Location:</span>
                  <span className="font-bold text-[#222222]">Outside the UAE</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFEAE2]">
                  <span className="font-medium">Resident ID & Banking:</span>
                  <span className="font-bold text-[#222222]">Full Emirates ID Access</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAF8F5] border border-[#EFEAE2]">
                  <span className="font-medium">Family Sponsorship:</span>
                  <span className="font-bold text-[#222222]">Spouse & Children Eligible</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FCF8F3] border border-[#EBD5BE] text-xs text-[#7A4B1A] leading-relaxed flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                <span>
                  Self-sponsored legal residence without requiring an onshore UAE employer or company formation.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
