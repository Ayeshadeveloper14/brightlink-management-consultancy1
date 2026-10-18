import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  MessageSquare, 
  Calculator, 
  Search, 
  Layers, 
  Globe2,
  MapPin
} from 'lucide-react';

export const AllFreeZonesHero = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsApp = () => {
    window.open('https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20to%20compare%20UAE%20Free%20Zones%20and%20find%20the%20best%20setup%20for%20my%20business.', '_blank');
  };

  const scrollToSearch = () => {
    const el = document.getElementById('free-zones-directory-search');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroPillars = [
    {
      label: '40+ Recognized Free Zones',
      desc: 'Explore specialized economic jurisdictions across Abu Dhabi, Dubai, Sharjah, Ajman, UAQ, RAK, and Fujairah'
    },
    {
      label: 'Objective Jurisdiction Matching',
      desc: 'Compare industry specialisations, facility models, licensing categories, and regulatory frameworks'
    },
    {
      label: 'Complete Setup Facilitation',
      desc: 'Transparent government fee breakdowns, visa execution, document preparation, and banking dossier support'
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
          <span className="text-[#8C5E28] font-semibold">All UAE Free Zones</span>
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
              <Globe2 className="w-4 h-4 text-[#B8864B]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E28] font-heading">
                UNITED ARAB EMIRATES FREE ZONE DIRECTORY
              </span>
            </motion.div>

            {/* H1 Heading */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] 2xl:text-5xl font-extrabold text-[#0F172A] font-heading tracking-tight leading-[1.15]"
            >
              All UAE Free Zones — Explore Your Business Setup Options
            </motion.h1>

            {/* Supporting Headline & Clear Overview */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="space-y-3"
            >
              <h2 className="text-lg sm:text-xl font-bold text-[#8C5E28] font-heading">
                Compare UAE Free Zones and Find the Right Location for Your Business
              </h2>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-sans max-w-2xl">
                The United Arab Emirates hosts over 40 distinct free trade zones distributed across all seven emirates. Each jurisdiction is governed by its own regulatory authority, offers specific licence classes, targets specialized industrial sectors, and maintains unique workspace and visa frameworks. Brightlink helps entrepreneurs, global trading firms, tech startups, and multinational corporations systematically evaluate and shortlist the right free zone for their commercial objectives.
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
                onClick={scrollToSearch}
                className="px-6 py-3.5 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer inline-flex items-center gap-2 group"
              >
                <Search className="w-4 h-4" />
                <span>Find the Right Free Zone</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onOpenConsultation) {
                    onOpenConsultation('Free Zone Comparison Consultation');
                  } else {
                    handleWhatsApp();
                  }
                }}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-[#FAF6F0] text-[#0F172A] border border-[#DECBB5] text-xs sm:text-sm font-bold shadow-2xs transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Get a Free Consultation</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="px-5 py-3.5 rounded-xl bg-[#FAF5EC] hover:bg-[#EFEAE2] text-[#8C5E28] border border-[#DECBB5] text-xs sm:text-sm font-bold transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#B8864B]" />
                <span>WhatsApp Expert</span>
              </button>
            </motion.div>

            {/* Trust-Building Message */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-4 border-t border-[#E6D7C3]/60 flex items-center gap-3 text-xs text-[#64748B]"
            >
              <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
              <span>
                Objective cross-emirate assessments • Authentic authority links • Transparent pricing • Full incorporation & banking support
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
                src="/src/assets/images/all_uae_freezones_hero_1792345598757.jpg"
                alt="Panoramic view of UAE commercial business districts and free trade zones"
                className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover object-center"
                loading="eager"
              />
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

              {/* In-Frame Directory Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E6D7C3] shadow-lg space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-[#0F172A] font-heading">
                      All 7 Emirates Covered
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8864B] bg-[#FAF5EC] px-2 py-0.5 rounded border border-[#DECBB5]">
                    Comprehensive Directory
                  </span>
                </div>
                <p className="text-[11px] text-[#475569] leading-snug">
                  Explore Dubai, Abu Dhabi, Sharjah, Ajman, UAQ, RAK, and Fujairah free zones with verified official data and direct setup assistance.
                </p>
              </div>
            </div>

            {/* Quick Summary Pill Badges */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="bg-white rounded-xl p-2.5 border border-[#E6D7C3] shadow-2xs">
                <div className="text-base font-extrabold text-[#B8864B] font-heading">7</div>
                <div className="text-[10px] uppercase font-bold text-[#64748B]">Emirates</div>
              </div>
              <div className="bg-white rounded-xl p-2.5 border border-[#E6D7C3] shadow-2xs">
                <div className="text-base font-extrabold text-[#B8864B] font-heading">40+</div>
                <div className="text-[10px] uppercase font-bold text-[#64748B]">Free Zones</div>
              </div>
              <div className="bg-white rounded-xl p-2.5 border border-[#E6D7C3] shadow-2xs">
                <div className="text-base font-extrabold text-[#B8864B] font-heading">100%</div>
                <div className="text-[10px] uppercase font-bold text-[#64748B]">Ownership</div>
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
