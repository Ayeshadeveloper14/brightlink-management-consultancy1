import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  PhoneCall, 
  Lock, 
  Globe2, 
  Landmark, 
  Layers,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const JafzaHero = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleGetStarted = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Offshore Setup - JAFZA Offshore (Dubai)');
    }
  };

  const handleContactUs = () => {
    const el = document.getElementById('jafza-final-cta-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenConsultation) {
      onOpenConsultation('JAFZA Offshore Company Consultation');
    }
  };

  const quickCredentials = [
    { label: 'Dubai-Based Registry', desc: 'Direct jurisdiction within the Emirate of Dubai under JAFZA authority' },
    { label: 'DLD Property Ownership', desc: 'Pioneer offshore entity officially permitted to own freehold Dubai real estate' },
    { label: 'Global Holding Vehicle', desc: 'Premier international prestige for cross-border investments and assets' }
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF7F0] via-[#FFFFFF] to-[#FFFFFF] border-b border-[#E6D7C3]/50">
      {/* Background Architectural Grid & Subtle Radial Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#B8864B]/12 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#E6D7C3]/35 to-transparent rounded-full blur-2xl" />
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
          <span className="text-[#8C5E28] font-semibold">Offshore</span>
          <span>/</span>
          <span className="text-[#0F172A] font-bold">JAFZA Offshore</span>
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
              <Award className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>OFFSHORE COMPANY FORMATION</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-[#0F172A] leading-[1.15] font-heading">
                JAFZA Offshore Company Formation <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">in Dubai</span>
              </h1>
              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-normal">
                Brightlink helps entrepreneurs, investors and international companies establish a JAFZA Offshore structure for asset ownership, international operations, investments and corporate holding purposes.
              </p>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <motion.button
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={handleGetStarted}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 active:scale-98 shadow-md shadow-[#B8864B]/25 transition-all cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={handleContactUs}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-[#0F172A] bg-white border border-[#DECBB5] hover:bg-[#FAF5EC] hover:border-[#B8864B] transition-all cursor-pointer shadow-2xs"
              >
                <PhoneCall className="w-4 h-4 text-[#B8864B]" />
                <span>Contact Us</span>
              </motion.button>
            </div>

            {/* Micro Highlights Badges */}
            <div className="pt-6 border-t border-[#E6D7C3]/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {quickCredentials.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F172A]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  <p className="text-[11px] text-[#64748B] leading-snug pl-5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Visual Showcase Card */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Main Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#DECBB5] bg-[#FFFFFF] group">
              
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                <img
                  src="/images/jafza_offshore_hero.jpg"
                  alt="JAFZA Offshore Company Formation in Dubai Asset Holding and International Structure"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = '/images/why_experienced_team_1790842362837.jpg';
                  }}
                />
                
                {/* Subtle Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#B8864B]/20 via-transparent to-transparent pointer-events-none mix-blend-overlay" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/60 shadow-md text-xs font-bold text-[#0F172A]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B8864B]" />
                    <span>Jebel Ali Free Zone Authority</span>
                  </div>
                </div>

                {/* Bottom Image Caption Card */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <div className="p-3.5 rounded-2xl bg-[#0F172A]/90 backdrop-blur-md border border-white/15 shadow-lg">
                    <div className="flex items-center justify-between text-xs font-semibold mb-1 text-[#F5D7A1]">
                      <span className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-[#B8864B]" />
                        Dubai Corporate Registry
                      </span>
                      <span className="text-[11px] text-white/80">Est. 2003 Regulations</span>
                    </div>
                    <p className="text-[11px] text-white/90 leading-tight">
                      Prestigious Dubai-domiciled offshore entity designed for global asset ownership, high-tier banking, and corporate equity holding.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="p-5 bg-white space-y-3">
                <div className="flex items-center justify-between text-xs text-[#475569] font-medium border-b border-[#F5F1EB] pb-2.5">
                  <span className="flex items-center gap-1.5 text-[#0F172A] font-bold">
                    <Landmark className="w-4 h-4 text-[#B8864B]" />
                    Dubai Real Estate
                  </span>
                  <span className="text-[#8C5E28] font-semibold">Pioneer DLD Freehold Title Rights</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#475569] font-medium border-b border-[#F5F1EB] pb-2.5">
                  <span className="flex items-center gap-1.5 text-[#0F172A] font-bold">
                    <Globe2 className="w-4 h-4 text-[#B8864B]" />
                    Banking Reputation
                  </span>
                  <span className="text-[#8C5E28] font-semibold">Premier UAE & International Standing</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#475569] font-medium">
                  <span className="flex items-center gap-1.5 text-[#0F172A] font-bold">
                    <Lock className="w-4 h-4 text-[#B8864B]" />
                    Physical Office Mandate
                  </span>
                  <span className="text-emerald-700 font-bold">Zero (Via Registered Agent)</span>
                </div>
              </div>

            </div>

            {/* Decorative Golden Corner Accents */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-[#DECBB5] to-transparent rounded-2xl -z-10 blur-xs" />
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default JafzaHero;
