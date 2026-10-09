import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  CreditCard, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Fingerprint, 
  QrCode,
  Users
} from 'lucide-react';

export const Hero = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleApply = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Emirates ID - Apply Now');
    }
  };

  const handleConsultation = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Emirates ID - Book Free Consultation');
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
          <span>/</span>
          <a href="/services" className="hover:text-[#B8864B] transition-colors">Services</a>
          <span>/</span>
          <span className="text-[#B8864B] font-semibold">Emirates ID</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] shadow-xs"
            >
              <CreditCard className="w-3.5 h-3.5 text-[#B8864B]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
                UAE Emirates ID Services
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight leading-[1.15] font-heading"
            >
              Apply, Renew or Replace Your <span className="bg-gradient-to-r from-[#B8864B] via-[#C5985B] to-[#976A36] bg-clip-text text-transparent">Emirates ID</span> with Expert Guidance
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl font-normal"
            >
              Professional support for Emirates ID applications, renewals, replacements, updates, and related residency services across the UAE. Authorized ICP typing and VIP biometric appointment coordination.
            </motion.p>

            {/* Bullet Highlights */}
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
            >
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#444444] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span>ICP Authorized Electronic Typing</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#444444] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span>VIP Biometrics Priority Scheduling</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#444444] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span>Express Doorstep Courier Delivery</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#444444] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span>Zero Late Fine Guarantee Support</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <button
                type="button"
                onClick={handleApply}
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#B8864B]/25 hover:brightness-105 active:scale-98 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleConsultation}
                className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white text-[#222222] font-bold text-sm sm:text-base border border-[#DECBB5] hover:bg-[#FAF6F0] active:scale-98 transition-all cursor-pointer shadow-sm flex items-center gap-2"
              >
                <span>Book Free Consultation</span>
              </button>
            </motion.div>

            {/* Trust Indicator Pills */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#777777]"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
                <span>ICP Authorized Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#B8864B]" />
                <span>Same-Day Application Filing</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B8864B]" />
                <span>99.8% Approval & Clear Record</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visual Feature Showcase */}
          <div className="lg:col-span-5">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Outer Card with Luxury Border */}
              <div className="relative rounded-3xl overflow-hidden bg-[#FAF5EC] p-3 sm:p-4 border border-[#E6D7C3] shadow-2xl shadow-black/10">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900 group">
                  <img
                    src="https://website-imges.vercel.app/service_golden_visa_1790842391749.jpg"
                    alt="UAE Emirates ID Application and Biometrics Processing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                      <Fingerprint className="w-3.5 h-3.5 text-[#F5D7A1]" />
                      ICP Identity Network
                    </span>
                  </div>

                  {/* Bottom Card Content Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <div className="flex items-center gap-2 mb-1.5">
                      <CreditCard className="w-4 h-4 text-[#F5D7A1]" />
                      <span className="text-xs uppercase font-bold tracking-wider text-[#F5D7A1]">Official Federal ID</span>
                    </div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-1">
                      Fast-Track Card Issuance & Renewal
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-2">
                      Seamless document checking, biometric appointment slot reservation, and real-time ICP status monitoring.
                    </p>
                  </div>
                </div>

                {/* Floating Stats Badge */}
                <motion.div 
                  initial={shouldReduceMotion ? {} : { y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mt-3 p-3.5 rounded-xl bg-white border border-[#EFEAE2] flex items-center justify-between shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF5EC] flex items-center justify-center text-[#B8864B]">
                      <QrCode className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#222222]">Digital Emirates ID</div>
                      <div className="text-[11px] text-[#777777]">Instant ICP UAE Pass activation</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Same-Day
                  </span>
                </motion.div>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
