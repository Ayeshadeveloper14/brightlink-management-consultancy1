import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  PhoneCall, 
  MessageSquare, 
  Calculator, 
  FileCheck2, 
  Globe2, 
  Layers,
  MapPin
} from 'lucide-react';

export const UaqHero = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsApp = () => {
    window.open('https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20UAQ%20Free%20Zone%20(UAQ%20FTZ)%20Company%20Formation.', '_blank');
  };

  const handleQuoteClick = () => {
    navigate('/calculator');
  };

  const heroPillars = [
    { 
      label: 'Strategic Northern Gateway', 
      desc: 'Prime position in Umm Al Quwain with swift transit connectivity to Dubai, Sharjah, and regional seaports' 
    },
    { 
      label: 'Adaptable Licensing Architecture', 
      desc: 'Tailored commercial, consultancy, e-commerce, and freelance options structured for cost-conscious operations' 
    },
    { 
      label: '100% Foreign Capital Ownership', 
      desc: 'Complete foreign equity retention, capital repatriation, and streamlined corporate onboarding procedures' 
    }
  ];

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF7F0] via-[#FFFFFF] to-[#FFFFFF] border-b border-[#E6D7C3]/50">
      {/* Background Architectural Ambient Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#B8864B]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#E6D7C3]/30 to-transparent rounded-full blur-2xl" />
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(#DECBB5 0.75px, transparent 0.75px)',
            backgroundSize: '32px 32px',
            opacity: 0.35
          }} 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <motion.nav 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          aria-label="Breadcrumb"
          className="mb-6 flex items-center gap-2 text-xs font-medium text-[#64748B]"
        >
          <Link to="/" className="hover:text-[#B8864B] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/business-setup" className="hover:text-[#B8864B] transition-colors">Business Setup</Link>
          <span>/</span>
          <span className="text-[#8C5E28] font-semibold">UAQ Free Zone</span>
        </motion.nav>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Jurisdiction Badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] shadow-xs"
            >
              <Building2 className="w-4 h-4 text-[#B8864B]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E28] font-heading">
                UMM AL QUWAIN FREE TRADE ZONE (UAQ FTZ)
              </span>
            </motion.div>

            {/* H1 Heading */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] 2xl:text-5xl font-extrabold text-[#0F172A] font-heading tracking-tight leading-[1.15]"
            >
              UAQ Free Zone Company Formation in Umm Al Quwain
            </motion.h1>

            {/* Supporting Headline & Clear Overview */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="space-y-3"
            >
              <h2 className="text-lg sm:text-xl font-bold text-[#8C5E28] font-heading">
                Start Your UAE Business with the Right Free Zone Setup
              </h2>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-sans max-w-2xl">
                Brightlink guides entrepreneurs, startups, independent consultants, international trading firms, and expanding enterprises through every phase of company formation in Umm Al Quwain Free Trade Zone. From matching official business activity codes and selecting suitable workspace packages to managing document filings, residency visas, and corporate banking preparation—our experienced advisors deliver clear, reliable, end-to-end guidance.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <button
                type="button"
                onClick={() => {
                  if (onOpenConsultation) {
                    onOpenConsultation('UAQ Free Zone Setup Consultation');
                  } else {
                    handleWhatsApp();
                  }
                }}
                className="px-6 py-3.5 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer inline-flex items-center gap-2 group"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={handleQuoteClick}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-[#FAF6F0] text-[#0F172A] border border-[#DECBB5] text-xs sm:text-sm font-bold shadow-2xs transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#B8864B]" />
                <span>Request a Setup Quote</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="px-5 py-3.5 rounded-xl bg-[#FAF5EC] hover:bg-[#EFEAE2] text-[#8C5E28] border border-[#DECBB5] text-xs sm:text-sm font-bold transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#B8864B]" />
                <span>WhatsApp Advisor</span>
              </button>
            </motion.div>

            {/* Concise Trust-Building Message */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-4 border-t border-[#E6D7C3]/60 flex items-center gap-3 text-xs text-[#64748B]"
            >
              <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
              <span>
                Personalized licensing assessments • Direct document preparation • Zero unverified claims • Authentic UAE government standards
              </span>
            </motion.div>

          </div>

          {/* Right Visual Column (5 cols) */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-[#DECBB5] shadow-xl bg-white">
              <img
                src="/src/assets/images/uaq_freezone_hero_1792345014619.jpg"
                alt="Umm Al Quwain Free Trade Zone modern corporate and commercial district"
                className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover object-center"
                loading="eager"
              />
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* In-Frame Status Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E6D7C3] shadow-lg space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-[#0F172A] font-heading">
                      UAQ FTZ Licensing Active
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8864B] bg-[#FAF5EC] px-2 py-0.5 rounded border border-[#DECBB5]">
                    Umm Al Quwain, UAE
                  </span>
                </div>
                <p className="text-[11px] text-[#475569] leading-snug">
                  Comprehensive licensing for micro-enterprises, commercial traders, consultancies, e-commerce platforms, and industrial ventures.
                </p>
              </div>
            </div>

            {/* Quick Feature Badges Below Visual */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-3 border border-[#E6D7C3] shadow-2xs">
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#8C5E28]">Direct Guidance</div>
                <div className="text-xs font-bold text-[#0F172A] mt-0.5">Transparent Process</div>
              </div>
              <div className="bg-white rounded-xl p-3 border border-[#E6D7C3] shadow-2xs">
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#8C5E28]">Full Documentation</div>
                <div className="text-xs font-bold text-[#0F172A] mt-0.5">End-to-End PRO</div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* 3 Core Hero Pillars */}
        <div className="mt-16 pt-10 border-t border-[#E6D7C3]/60 grid grid-cols-1 md:grid-cols-3 gap-6">
          {heroPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 + idx * 0.08 }}
              className="bg-white rounded-2xl p-5 border border-[#E6D7C3] shadow-2xs space-y-2 hover:border-[#DECBB5] transition-all"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                <h3 className="text-sm font-bold text-[#0F172A] font-heading">
                  {pillar.label}
                </h3>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed pl-6">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
