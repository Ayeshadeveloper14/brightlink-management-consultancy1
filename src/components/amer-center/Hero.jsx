import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  CreditCard, 
  RefreshCw, 
  Crown, 
  ArrowRightLeft, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export const Hero = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeDashboardTab, setActiveDashboardTab] = useState('family-visa');

  const handleBookConsultation = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Amer Center - Book Consultation (Hero)');
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello Brightlink, I would like to inquire about Amer Center GDRFA visa and immigration services.');
    window.open(`https://wa.me/971566556645?text=${text}`, '_blank');
  };

  const dashboardServices = [
    {
      id: 'family-visa',
      name: 'Family Visa',
      icon: Users,
      sla: '24–48 Hours',
      status: 'Live GDRFA Portal',
      description: 'Sponsorship for spouse, children, and parents with medical & biometrics.',
      badge: 'Turnkey Filing'
    },
    {
      id: 'employee-visa',
      name: 'Employee Visa',
      icon: Building2,
      sla: '2–3 Working Days',
      status: 'MOHRE & Amer Approved',
      description: 'Work permit issuance, employment residency stamping, and labour cards.',
      badge: 'Corporate Priority'
    },
    {
      id: 'emirates-id',
      name: 'Emirates ID',
      icon: CreditCard,
      sla: 'Same-Day Typing',
      status: 'ICP Integrated',
      description: 'New ID registration, renewal, VIP biometrics scheduling, and tracking.',
      badge: 'Federal Smart Chip'
    },
    {
      id: 'visa-renewal',
      name: 'Visa Renewal',
      icon: RefreshCw,
      sla: '1–2 Working Days',
      status: 'Grace Window Safe',
      description: 'Prevent daily late fines with automated grace-period renewal filing.',
      badge: 'Fine Protection'
    },
    {
      id: 'golden-visa',
      name: 'Golden Visa',
      icon: Crown,
      sla: '3–5 Working Days',
      status: 'GDRFA Fast-Track',
      description: '10-year residency for investors, property owners, and executives.',
      badge: '10-Year Self-Sponsor'
    },
    {
      id: 'status-change',
      name: 'Status Change',
      icon: ArrowRightLeft,
      sla: 'Instant / Same-Day',
      status: 'In-Country Clearance',
      description: 'Switch between tourist, visit, and residence visas without exiting the UAE.',
      badge: 'No Airport Run'
    }
  ];

  const currentActive = dashboardServices.find(s => s.id === activeDashboardTab) || dashboardServices[0];

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FCFAF8] overflow-hidden border-b border-[#F1EBE1]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#B8864B]/15 via-[#C5985B]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#B8864B]/12 via-transparent to-transparent rounded-full blur-3xl" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#B8864B 0.65px, transparent 0.65px)`,
            backgroundSize: '32px 32px',
            opacity: 0.1
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-500 mb-6 font-medium">
          <a href="/" className="hover:text-[#B8864B] transition-colors">Home</a>
          <span>/</span>
          <a href="/services" className="hover:text-[#B8864B] transition-colors">Services</a>
          <span>/</span>
          <span className="text-[#B8864B] font-semibold">Amer Center</span>
        </nav>

        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Editorial & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Small Badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] shadow-xs"
            >
              <Building2 className="w-3.5 h-3.5 text-[#B8864B]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
                GDRFA Authorized Immigration & Typing
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight leading-[1.12] font-heading"
            >
              Complete <span className="bg-gradient-to-r from-[#B8864B] via-[#C5985B] to-[#976A36] bg-clip-text text-transparent">Amer Center Services</span> in the UAE
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-xl font-normal"
            >
              Skip the ministerial queues and bureaucratic delays. Brightlink provides end-to-end Amer Center assistance for family visas, residency renewals, Emirates ID typing, in-country status changes, and corporate government clearances across Dubai and the UAE.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={handleBookConsultation}
                className="px-7 py-4 rounded-full bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#B8864B]/25 hover:brightness-105 active:scale-98 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="px-6 py-4 rounded-full bg-[#25D366] text-white font-bold text-sm sm:text-base hover:bg-[#20BD5A] active:scale-98 transition-all cursor-pointer shadow-sm flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#777777]"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
                <span>Direct GDRFA Gateway</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#B8864B]" />
                <span>24-Hour Express Options</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
                <span>100% Accurate Typing</span>
              </div>
            </motion.div>

          </div>

          {/* Right Side: Interactive Service Dashboard Card with Floating Motion */}
          <div className="lg:col-span-6">
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-3xl p-6 sm:p-7 bg-[#FCFAF8] border border-[#E6D7C3] shadow-2xl shadow-black/8 overflow-hidden"
            >
              {/* Dashboard Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#EFEAE2] mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#222222] font-heading">
                    Amer GDRFA Electronic Portal Hub
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#B8864B] bg-[#FAF5EC] px-2.5 py-1 rounded-full border border-[#E6D7C3]">
                  Connected
                </span>
              </div>

              {/* Grid of 6 Interactive Service Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5">
                {dashboardServices.map((srv) => {
                  const Icon = srv.icon;
                  const isSelected = activeDashboardTab === srv.id;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setActiveDashboardTab(srv.id)}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#FAF5EC] border-[#B8864B] shadow-sm'
                          : 'bg-white border-[#EFEAE2] hover:border-[#DECBB5]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-[#B8864B]' : 'text-neutral-500'}`} />
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                          isSelected ? 'bg-[#B8864B] text-white' : 'bg-neutral-100 text-neutral-600'
                        }`}>
                          {srv.sla}
                        </span>
                      </div>
                      <div className={`text-xs font-bold font-heading truncate ${
                        isSelected ? 'text-[#976A36]' : 'text-[#222222]'
                      }`}>
                        {srv.name}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Service Deep Dive Panel */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EFEAE2] shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#B8864B] uppercase tracking-wider">
                      {currentActive.badge}
                    </span>
                    <span className="text-[10px] text-neutral-400">•</span>
                    <span className="text-xs text-neutral-500">{currentActive.status}</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Fast-Track Ready
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base sm:text-lg text-[#222222] mb-1.5">
                  {currentActive.name} Application & Stamping
                </h3>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4">
                  {currentActive.description}
                </p>

                <div className="pt-3 border-t border-[#F5EFE6] flex items-center justify-between">
                  <div className="text-[11px] text-[#777777]">
                    Standard Processing: <strong className="text-[#222222]">{currentActive.sla}</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenConsultation && onOpenConsultation(`Amer Center - ${currentActive.name}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] hover:text-[#976A36] cursor-pointer"
                  >
                    <span>Initiate Service</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Subtle Floating Bottom Pill */}
              <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-[#777777] border-t border-[#EFEAE2]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Authorized Amer GDRFA Partner Workflow</span>
                </div>
                <span className="font-semibold text-[#222222]">Dubai, UAE</span>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
