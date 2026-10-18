import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Globe2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  PhoneCall, 
  Building2, 
  Percent, 
  Landmark,
  BadgeCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const DubaiFreeZoneHero = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsApp = () => {
    window.open('https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Dubai%20Free%20Zone%20Business%20Setup.', '_blank');
  };

  const handleCalculator = () => {
    navigate('/calculator');
  };

  const heroPillars = [
    { label: '100% Foreign Ownership', desc: 'Retain full company equity without a local UAE sponsor' },
    { label: '0% Personal Income Tax', desc: '100% repatriation of business capital and corporate profits' },
    { label: 'Express License Issuance', desc: 'Fast digital incorporation and UAE investor residence visas' }
  ];

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF7F0] via-[#FFFFFF] to-[#FFFFFF] border-b border-[#E6D7C3]/50">
      {/* Background Architectural Accent Lines */}
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
          className="flex items-center gap-2 text-xs text-[#64748B] mb-8 font-medium flex-wrap"
        >
          <Link to="/" className="hover:text-[#B8864B] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/business-setup" className="hover:text-[#B8864B] transition-colors">Business Setup</Link>
          <span>/</span>
          <span className="text-[#8C5E28] font-semibold">Free Zone</span>
          <span>/</span>
          <span className="text-[#0F172A] font-bold">Dubai Free Zone</span>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
              <Globe2 className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>DUBAI FREE ZONE COMPANY FORMATION</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#0F172A] leading-[1.15] font-heading">
                Dubai Free Zone Business Setup <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">and Company Formation</span>
              </h1>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-normal">
                Establish your enterprise in Dubai’s premier free zones with 100% foreign ownership, zero personal income tax, and full profit repatriation. Brightlink provides comprehensive guidance across 40+ specialized free zone authorities, licensing, flexi-desks, and UAE residence visas.
              </p>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <motion.button
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 active:scale-98 text-white font-bold text-sm tracking-wide shadow-lg shadow-[#B8864B]/20 transition-all cursor-pointer font-heading"
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={() => onOpenConsultation('Dubai Free Zone Business Setup')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#FAF6F0] text-[#0F172A] border border-[#E6D7C3] font-semibold text-sm shadow-xs transition-colors cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#B8864B]" />
                <span>Book Free Consultation</span>
              </motion.button>

              <button
                type="button"
                onClick={handleCalculator}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs text-[#8C5E28] hover:text-[#0F172A] font-semibold transition-colors cursor-pointer"
              >
                <span>Calculate Costs</span>
                <span className="text-[10px]">→</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 border-t border-[#E6D7C3]/60 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {heroPillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold text-[#0F172A] font-heading">{pillar.label}</span>
                    <span className="block text-[11px] text-[#64748B] leading-snug mt-0.5">{pillar.desc}</span>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Hero Visual Card with Verified Dubai Imagery */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#E6D7C3] shadow-2xl bg-white">
                <img 
                  src="/images/dubai_freezone_hero.jpg" 
                  alt="Dubai Free Zone Business Setup - Brightlink corporate advisory"
                  className="w-full h-[360px] sm:h-[420px] object-cover object-center"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to high quality skyline image if needed
                    e.currentTarget.src = '/images/hero_dubai_skyline_1790842330436.jpg';
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/30 to-transparent" />

                {/* Bottom Card Content */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-semibold text-[#F5D7A1]">
                    <Sparkles className="w-3.5 h-3.5 text-[#F5D7A1]" />
                    <span>Premier UAE Free Zones</span>
                  </div>
                  <h3 className="text-xl font-bold font-heading leading-tight text-white">
                    IFZA, DMCC, DAFZA, DWTC & Dubai South
                  </h3>
                  <p className="text-xs text-neutral-200 leading-relaxed">
                    Customized license structuring tailored to your target markets, corporate banking needs, and visa quotas.
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge 1: Top Left */}
              <motion.div 
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 border border-[#E6D7C3] shadow-xl flex items-center gap-3 backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
                  <ShieldCheck className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <span className="block text-sm font-extrabold text-[#0F172A] font-heading">100% Equity</span>
                  <span className="block text-[10px] font-medium text-[#64748B]">Complete Foreign Ownership</span>
                </div>
              </motion.div>

              {/* Floating Stat Badge 2: Bottom Right */}
              <motion.div 
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="absolute -bottom-5 -right-4 sm:-right-6 bg-white rounded-2xl p-3.5 border border-[#E6D7C3] shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#F5E8D4] border border-[#DECBB5] flex items-center justify-center text-[#8C5E28] shrink-0">
                  <Percent className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <span className="block text-sm font-extrabold text-[#0F172A] font-heading">0% Personal Tax</span>
                  <span className="block text-[10px] font-medium text-[#64748B]">Full Profit Repatriation</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
