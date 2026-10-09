import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  FileText, 
  ShieldCheck, 
  ArrowRight, 
  HelpCircle, 
  CheckCircle2, 
  Clock, 
  Briefcase, 
  ChevronRight,
  Sparkles,
  Users
} from 'lucide-react';

export const Hero = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleApply = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Corporate PRO Services - Apply Now');
    }
  };

  const handleConsultation = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Corporate PRO Services - Free Consultation');
    }
  };

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FCFAF8] overflow-hidden border-b border-[#F1EBE1]">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.35, 0.45, 0.35] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 right-0 w-[640px] h-[640px] bg-gradient-to-bl from-[#B8864B]/20 via-[#C5985B]/15 to-transparent rounded-full blur-3xl transform translate-x-1/4" 
        />
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.06, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 left-0 w-[540px] h-[540px] bg-gradient-to-tr from-[#0F172A]/8 via-[#B8864B]/10 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" 
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#B8864B 0.6px, transparent 0.6px)`,
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
          <a href="/services" className="hover:text-[#B8864B] transition-colors">Services</a>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-[#B8864B] font-semibold" aria-current="page">PRO Services</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Badge, Content & CTAs */}
          <div className="lg:col-span-7">
            
            {/* PRO Services Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-5 shadow-xs">
              <Briefcase className="w-3.5 h-3.5 text-[#B8864B]" />
              <span className="text-xs font-extrabold tracking-wide uppercase text-[#B8864B] font-heading">
                Corporate PRO & Government Liaison
              </span>
            </div>

            {/* Strong Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight leading-[1.14] mb-5 font-heading">
              Corporate PRO Services in Dubai & UAE: Complete Government Clearance
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed mb-8 max-w-2xl font-normal">
              Eliminate administrative bottlenecks and ensure 100% compliance with UAE labor laws. Brightlink handles corporate licensing, employee work permits, MOHRE quota clearances, and GDRFA immigration for mainland and free zone businesses.
            </p>

            {/* Core Feature Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-white border border-[#EFEAE2] shadow-xs">
                <span className="text-[10px] uppercase tracking-wider text-[#888888] font-bold block mb-1">MOHRE Quotas</span>
                <span className="text-xs sm:text-sm font-bold text-[#222222]">Work Permits</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#EFEAE2] shadow-xs">
                <span className="text-[10px] uppercase tracking-wider text-[#888888] font-bold block mb-1">Visa Processing</span>
                <span className="text-xs sm:text-sm font-bold text-[#B8864B]">Turnkey PRO</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#EFEAE2] shadow-xs">
                <span className="text-[10px] uppercase tracking-wider text-[#888888] font-bold block mb-1">Compliance</span>
                <span className="text-xs sm:text-sm font-bold text-[#222222]">Zero Fines</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#EFEAE2] shadow-xs">
                <span className="text-[10px] uppercase tracking-wider text-[#888888] font-bold block mb-1">Coverage</span>
                <span className="text-xs sm:text-sm font-bold text-[#222222]">All 7 Emirates</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                type="button"
                onClick={handleApply}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white font-bold text-sm shadow-md shadow-[#B8864B]/25 hover:brightness-105 active:scale-98 transition-all cursor-pointer"
              >
                <span>Apply for PRO Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#DECBB5] text-[#444444] hover:text-[#B8864B] hover:border-[#B8864B] font-semibold text-sm shadow-xs transition-all cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-[#B8864B]" />
                <span>Book Free Consultation</span>
              </button>
            </div>

            {/* Business Trust Indicators */}
            <div className="pt-4 border-t border-[#F1EBE1] flex flex-wrap items-center gap-6 text-xs text-[#666666]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
                <span>MOHRE & GDRFA Accredited</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
                <span>99.6% First-Time Clearance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#B8864B]" />
                <span>1,200+ Companies Managed</span>
              </div>
            </div>

          </div>

          {/* Right Column: UAE Business Setup Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Outer Corporate Card */}
              <div className="relative rounded-2xl bg-white border border-[#E6D7C3] p-6 shadow-xl shadow-black/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#B8864B]/20 to-transparent rounded-bl-full pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#F0E6D8] mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center font-bold">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#222222] block font-heading">Enterprise PRO Management</span>
                      <span className="text-[11px] text-[#777777]">Mainland (DED) & Free Zones</span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2.5 py-1 bg-[#FAF5EC] text-[#B8864B] rounded-md border border-[#E6D7C3]">
                    Official Partner
                  </span>
                </div>

                {/* Hero Feature Visual */}
                <div className="rounded-xl overflow-hidden mb-5 border border-neutral-100 relative group">
                  <img
                    src="https://website-imges.vercel.app/about_visa_consultant_1790842347102.jpg"
                    alt="Dubai Business District & Corporate Headquarters"
                    className="w-full h-48 object-cover group-hover:scale-102 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/images/about_visa_consultant_1790842347102.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <div className="text-xs font-bold font-heading text-[#F5D7A1] mb-0.5">Dedicated Corporate PRO Officer</div>
                      <p className="text-[11px] text-white/90 leading-tight">
                        One point of contact for company renewals, labour contracts, and employee onboarding.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Pillars */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE2]">
                    <span className="text-[10px] uppercase tracking-wider text-[#888888] font-bold block mb-1">Average Turnaround</span>
                    <span className="text-xs font-bold text-[#222222]">24–48 Hours</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE2]">
                    <span className="text-[10px] uppercase tracking-wider text-[#888888] font-bold block mb-1">Government Portals</span>
                    <span className="text-xs font-bold text-[#B8864B]">DED, MOHRE, GDRFA</span>
                  </div>
                </div>

                {/* Compliance Protection Notice */}
                <div className="p-3.5 rounded-xl bg-[#FCF8F3] border border-[#EBD5BE] text-xs text-[#7A4B1A] leading-relaxed flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span>
                    Prevent costly MOHRE and immigration overstay fines with automated document expiry tracking and proactive annual renewal reminders.
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
