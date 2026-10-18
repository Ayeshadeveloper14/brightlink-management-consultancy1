import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Globe2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  PhoneCall, 
  Building2, 
  Anchor,
  Coins,
  Percent
} from 'lucide-react';

export const AjmanFreeZoneHero = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsApp = () => {
    window.open('https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Ajman%20Free%20Zone%20Business%20Setup.', '_blank');
  };

  const scrollToActivities = () => {
    const el = document.getElementById('ajman-activities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroPillars = [
    { label: 'Strategic Port Proximity', desc: 'Directly adjacent to Ajman Port with maritime customs and shipping connectivity' },
    { label: 'Cost-Effective Packages', desc: 'Among the UAE’s most competitive setup and annual trade licence renewal rates' },
    { label: 'Fast Digital Registration', desc: 'Streamlined online documentation and fast-track licence issuance' }
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
          className="flex items-center gap-2 text-xs font-medium text-[#8C5E28] mb-8 overflow-x-auto whitespace-nowrap pb-2 sm:pb-0"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-[#0F172A] transition-colors">Home</Link>
          <span className="text-[#DECBB5]">/</span>
          <Link to="/business-setup" className="hover:text-[#0F172A] transition-colors">Business Setup</Link>
          <span className="text-[#DECBB5]">/</span>
          <span className="text-[#64748B]">Free Zone</span>
          <span className="text-[#DECBB5]">/</span>
          <span className="text-[#0F172A] font-semibold">Ajman Free Zone</span>
        </motion.nav>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>AJMAN FREE ZONE AUTHORITY (AFZ) • ESTABLISHED 1988</span>
            </motion.div>

            {/* H1 Title */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="space-y-3"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-[#0F172A] font-heading tracking-tight leading-[1.15]">
                Ajman Free Zone Business Setup
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#8C5E28] font-heading leading-snug">
                Start Your Business in Ajman with the Right Licence and Setup Solution
              </p>
            </motion.div>

            {/* Comprehensive Description */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl"
            >
              Explore company formation opportunities in Ajman with guidance on business activities, licence options, legal structures, documentation, workspace requirements, and registration procedures. Brightlink helps entrepreneurs, startups, e-commerce businesses, consultants, traders, and established companies understand the steps involved in setting up a business in Ajman Free Zone.
            </motion.p>

            {/* Key Value Checklist */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1"
            >
              {[
                '100% Foreign Capital & Profit Ownership',
                'Low Cost Smart-Desk & Office Packages',
                'Direct Maritime Port & Customs Access',
                'Multiple Visa Allocations Available',
                'Permitted Dual Commercial Activities',
                'Quick 24-48 Hour Digital Registration'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-semibold text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                onClick={() => onOpenConsultation('Ajman Free Zone Business Setup Hero')}
                className="px-8 py-4 rounded-xl bg-[#B8864B] hover:bg-[#8C5E28] text-white font-bold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToActivities}
                className="px-6 py-4 rounded-xl bg-white hover:bg-[#FAF7F0] text-[#0F172A] border border-[#DECBB5] font-bold text-sm tracking-wide transition-all duration-200 shadow-xs hover:border-[#B8864B] cursor-pointer"
              >
                Explore Ajman Free Zone Services
              </button>

              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#8C5E28] hover:text-[#0F172A] transition-colors py-2 px-3 rounded-lg hover:bg-[#FAF5EC]"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#B8864B]" />
                <span>WhatsApp Instant Inquiry</span>
              </button>
            </motion.div>

            {/* Verification & Trust Strip */}
            <div className="pt-4 border-t border-[#E6D7C3]/60 flex flex-wrap items-center gap-6 text-xs text-[#64748B]">
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
                <span>Direct Authority Integration</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Percent className="w-4 h-4 text-[#B8864B]" />
                <span>0% Personal Income Tax</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Building2 className="w-4 h-4 text-[#B8864B]" />
                <span>In-House Amer & Visa Typing</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative"
            >
              {/* Outer Glow & Gradient Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#DECBB5] bg-white group">
                <img
                  src="/images/ajman_freezone_hero.jpg"
                  alt="Ajman Free Zone Authority corporate headquarters, waterfront business district and Ajman Port container terminal"
                  className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/30 to-transparent" />

                {/* Floating Highlight Card on Image */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0F172A]/85 backdrop-blur-md border border-[#B8864B]/40 text-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#B8864B] uppercase tracking-wider font-heading">
                      Northern Emirates Hub
                    </span>
                    <span className="text-xs bg-[#B8864B]/20 text-[#F5D7A1] px-2.5 py-0.5 rounded-full border border-[#B8864B]/30 font-semibold">
                      AFZ Free Zone
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-100">
                    Direct access to Ajman Port, Sheikh Mohammed Bin Zayed Road (E311), and affordable warehouses.
                  </p>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1">
                      <Anchor className="w-3.5 h-3.5 text-[#B8864B]" />
                      Port Customs On-Site
                    </span>
                    <span className="text-[#F5D7A1] font-semibold">
                      24h Turnaround
                    </span>
                  </div>
                </div>

              </div>

              {/* Decorative Corner Badge */}
              <div className="absolute -top-4 -right-4 bg-white border border-[#DECBB5] p-3 rounded-2xl shadow-lg hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                  <Coins className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#8C5E28] font-heading">Low Overhead</div>
                  <div className="text-xs font-extrabold text-[#0F172A]">High ROI Setup</div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

        {/* 3 Pillars Below Hero */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {heroPillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.25 + idx * 0.05 }}
              className="p-6 rounded-2xl bg-white border border-[#E6D7C3] hover:border-[#B8864B]/60 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-[#B8864B] mb-3" />
              <h3 className="text-base font-bold text-[#0F172A] font-heading mb-1.5">
                {pillar.label}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
