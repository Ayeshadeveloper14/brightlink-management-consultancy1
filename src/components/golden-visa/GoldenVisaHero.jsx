import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Star, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Crown, 
  Building2, 
  Calendar, 
  Users, 
  Sparkles,
  ChevronRight,
  HelpCircle
} from 'lucide-react';

export const GoldenVisaHero = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleApply = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Golden Visa - Apply Now');
    }
  };

  const handleConsultation = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Golden Visa - Free Consultation');
    }
  };

  const scrollToEligibility = () => {
    const el = document.getElementById('eligibility-routes');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FCFAF8] overflow-hidden border-b border-[#F1EBE1]">
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
          <a href="/visa" className="hover:text-[#B8864B] transition-colors">Visa</a>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-[#B8864B] font-semibold" aria-current="page">Golden Visa (10-Year)</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Badge, Content & CTAs */}
          <div className="lg:col-span-7">
            
            {/* Golden Visa Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-5 shadow-xs">
              <Crown className="w-3.5 h-3.5 text-[#B8864B]" />
              <span className="text-xs font-extrabold tracking-wide uppercase text-[#B8864B] font-heading">
                Official 10-Year UAE Residency Scheme
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight leading-[1.14] mb-5 font-heading">
              UAE 10-Year Golden Visa: Secure Your Long-Term Future in Dubai
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed mb-8 max-w-2xl font-normal">
              Attain premier self-sponsored 10-year residency in the UAE without requiring an employer or local sponsor. Enjoy 100% foreign business ownership, complete family sponsorship for all ages, zero personal income tax, and unrestricted global travel with no 6-month stay limits.
            </p>

            {/* Core Feature Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              <div className="p-3.5 rounded-xl bg-white border border-[#EFEAE2] shadow-xs">
                <span className="text-[10px] uppercase tracking-wider text-[#888888] font-bold block mb-1">Validity</span>
                <span className="text-xs sm:text-sm font-bold text-[#222222]">10 Years</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#EFEAE2] shadow-xs">
                <span className="text-[10px] uppercase tracking-wider text-[#888888] font-bold block mb-1">Sponsorship</span>
                <span className="text-xs sm:text-sm font-bold text-[#B8864B]">100% Self</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#EFEAE2] shadow-xs">
                <span className="text-[10px] uppercase tracking-wider text-[#888888] font-bold block mb-1">Stay Outside</span>
                <span className="text-xs sm:text-sm font-bold text-[#222222]">No 6-Mo Limit</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#EFEAE2] shadow-xs">
                <span className="text-[10px] uppercase tracking-wider text-[#888888] font-bold block mb-1">Family</span>
                <span className="text-xs sm:text-sm font-bold text-[#222222]">Any Age</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                type="button"
                onClick={handleApply}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white font-bold text-sm shadow-md shadow-[#B8864B]/25 hover:brightness-105 active:scale-98 transition-all cursor-pointer"
              >
                <span>Apply for Golden Visa</span>
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

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-[#F1EBE1] flex flex-wrap items-center gap-6 text-xs text-[#666666]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
                <span>GDRFA & ICP Accredited</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
                <span>99.4% Approval Rate</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#B8864B]" />
                <span>2,500+ Golden Visas Issued</span>
              </div>
            </div>

          </div>

          {/* Right Column: UAE-Themed Visuals & Floating Luxury Elements */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Outer Luxury Card */}
              <div className="relative rounded-2xl bg-white border border-[#E6D7C3] p-6 shadow-xl shadow-black/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#B8864B]/20 to-transparent rounded-bl-full pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#F0E6D8] mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center font-bold">
                      <Crown className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#222222] block font-heading">UAE Golden Residence</span>
                      <span className="text-[11px] text-[#777777]">10-Year Self-Sponsored Tier</span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold px-2.5 py-1 bg-[#FAF5EC] text-[#B8864B] rounded-md border border-[#E6D7C3]">
                    Premier
                  </span>
                </div>

                {/* Hero Feature Visual */}
                <div className="rounded-xl overflow-hidden mb-5 border border-neutral-100 relative group">
                  <img
                    src="https://website-imges.vercel.app/service_golden_visa_1790842391749.jpg"
                    alt="UAE Golden Visa Dubai skyline"
                    className="w-full h-48 object-cover group-hover:scale-102 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = '/images/service_golden_visa_1790842391749.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <div className="text-xs font-bold font-heading text-[#F5D7A1] mb-0.5">VIP Fast-Track Clearance</div>
                      <p className="text-[11px] text-white/90 leading-tight">
                        End-to-end processing with priority smart medical and biometric escort.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Pillars */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE2]">
                    <span className="text-[10px] uppercase tracking-wider text-[#888888] font-bold block mb-1">Real Estate Route</span>
                    <span className="text-xs font-bold text-[#222222]">AED 2,000,000+</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEAE2]">
                    <span className="text-[10px] uppercase tracking-wider text-[#888888] font-bold block mb-1">Executive / Talent</span>
                    <span className="text-xs font-bold text-[#B8864B]">AED 30,000 / Mo</span>
                  </div>
                </div>

                {/* Esaad & Privilege Notice */}
                <div className="p-3.5 rounded-xl bg-[#FCF8F3] border border-[#EBD5BE] text-xs text-[#7A4B1A] leading-relaxed flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span>
                    Includes Esaad privilege government card offering exclusive discounts on healthcare, automotive, hospitality, and luxury retail across the UAE.
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
