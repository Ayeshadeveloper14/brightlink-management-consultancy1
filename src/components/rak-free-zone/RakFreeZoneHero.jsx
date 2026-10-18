import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  PhoneCall, 
  Globe2, 
  Warehouse, 
  Briefcase,
  Layers,
  Coins
} from 'lucide-react';

export const RakFreeZoneHero = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsApp = () => {
    window.open('https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20RAK%20Free%20Zone%20(RAKEZ)%20Company%20Formation.', '_blank');
  };

  const scrollToModels = () => {
    const el = document.getElementById('rak-licences-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroPillars = [
    { 
      label: 'Comprehensive Hub (RAKEZ)', 
      desc: 'Formed by consolidating RAK FTZ and RAKIA, hosting over 15,000 businesses across 50+ diverse industries' 
    },
    { 
      label: 'Cost-Effective Commercial & Industrial Plans', 
      desc: 'Competitive setup and annual renewal rates with customizable office, coworking, and warehouse spaces' 
    },
    { 
      label: '100% Foreign Ownership & Scalable Growth', 
      desc: 'Full foreign equity holding, zero currency restrictions, and smooth pathways for international trade and visa issuance' 
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
          transition={{ duration: 0.3 }}
          className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#8C5E28] mb-8"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-[#0F172A] transition-colors">Home</Link>
          <span className="text-[#DECBB5]">/</span>
          <Link to="/business-setup" className="hover:text-[#0F172A] transition-colors">Business Setup</Link>
          <span className="text-[#DECBB5]">/</span>
          <span className="text-[#64748B]">Free Zone</span>
          <span className="text-[#DECBB5]">/</span>
          <span className="text-[#0F172A] font-semibold">RAK Free Zone (RAKEZ)</span>
        </motion.nav>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Authority Pill Badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex max-w-full flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
              <span className="break-words">RAS AL KHAIMAH ECONOMIC ZONE (RAKEZ) • BUSINESS SETUP</span>
            </motion.div>

            {/* H1 Title & Supporting Heading */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="space-y-3"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#0F172A] font-heading tracking-tight leading-[1.15]">
                RAK Free Zone Company Formation in the UAE
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#8C5E28] font-heading leading-snug">
                Start and Grow Your Business in Ras Al Khaimah
              </p>
            </motion.div>

            {/* Supporting Description */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base sm:text-lg text-[#334155] leading-relaxed font-sans"
            >
              Explore cost-effective, world-class company formation opportunities in Ras Al Khaimah with expert guidance on selecting the right business activity, licence type, legal structure, workspace, and visa quota. Brightlink assists entrepreneurs, startups, SMEs, and international corporate investors with smooth, fully compliant registration in Ras Al Khaimah Economic Zone (RAKEZ).
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <button
                type="button"
                onClick={() => onOpenConsultation('RAK Free Zone Company Formation')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg hover:shadow-[#B8864B]/25 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={scrollToModels}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white hover:bg-[#FAF7F0] text-[#0F172A] hover:text-[#8C5E28] border border-[#DECBB5] text-sm font-semibold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Discuss Your Business Setup</span>
              </button>
            </motion.div>

            {/* WhatsApp & Reassurance Hotline */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#64748B]"
            >
              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-1.5 text-[#16A34A] hover:text-[#15803D] font-semibold cursor-pointer shrink-0"
              >
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                <span>WhatsApp: +971 56 655 6645</span>
              </button>
              <span className="text-[#CBD5E1] hidden sm:inline">•</span>
              <span className="inline-flex items-start sm:items-center gap-1.5 text-[#334155] max-w-full">
                <ShieldCheck className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5 sm:mt-0" />
                <span>Accredited UAE Government Portal Typing & Direct Filing</span>
              </span>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual & Key Pillars */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Visual Card with RAK Free Zone Image */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden border border-[#DECBB5] shadow-xl bg-white group"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src="/images/rak_freezone_hero.jpg" 
                  alt="Ras Al Khaimah Economic Zone RAKEZ business park and towers" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/35 to-transparent" />
                
                {/* Image Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-[#B8864B] text-[10px] font-bold uppercase tracking-wider text-white">
                      Northern Emirates Commercial Engine
                    </span>
                    <span className="text-xs text-neutral-300">RAKEZ Business Park</span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white leading-tight">
                    Ras Al Khaimah Economic Zone
                  </h3>
                  <p className="text-xs text-neutral-200 mt-1 line-clamp-2 font-sans">
                    Connecting global commerce through modern commercial offices, specialized industrial zones, and multi-modal logistics links to Saqr Port and international airports.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Strategic Pillars List */}
            <div className="space-y-2.5">
              {heroPillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 + idx * 0.08 }}
                  className="p-3.5 rounded-xl bg-white border border-[#E6D7C3] shadow-xs flex items-start gap-3 hover:border-[#B8864B]/60 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center shrink-0 mt-0.5 text-[#B8864B]">
                    {idx === 0 && <Building2 className="w-4 h-4" />}
                    {idx === 1 && <Coins className="w-4 h-4" />}
                    {idx === 2 && <Globe2 className="w-4 h-4" />}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-[#0F172A] font-heading leading-tight">
                      {pillar.label}
                    </h4>
                    <p className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
