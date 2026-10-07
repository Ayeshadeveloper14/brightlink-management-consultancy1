import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCheck2, 
  ArrowRight, 
  Building2, 
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  CheckCircle2,
  Briefcase
} from 'lucide-react';

export const Hero = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleGetStarted = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Tasheel Services - Get Started (Hero)');
    }
  };

  const handleContactUs = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Tasheel Services - Contact Us (Hero)');
    }
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#FAF7F2] border-b border-[#F1EBE1] overflow-hidden">
      {/* Subtle geometric background grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `linear-gradient(#B8864B 0.5px, transparent 0.5px), linear-gradient(90deg, #B8864B 0.5px, transparent 0.5px)`,
          backgroundSize: '48px 48px',
          opacity: 0.05
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-500 mb-6 font-medium">
          <a href="/" className="hover:text-[#B8864B] transition-colors">Home</a>
          <span>/</span>
          <a href="/services" className="hover:text-[#B8864B] transition-colors">Services</a>
          <span>/</span>
          <span className="text-[#B8864B] font-semibold">Tasheel Services</span>
        </nav>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text & Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Eyebrow Tagline */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF5EC] border border-[#E6D7C3]"
            >
              <FileCheck2 className="w-3.5 h-3.5 text-[#B8864B]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
                TASHEEL SERVICES
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight leading-[1.14] font-heading"
            >
              Simplifying Your <span className="bg-gradient-to-r from-[#B8864B] via-[#C5985B] to-[#976A36] bg-clip-text text-transparent">Tasheel & MOHRE</span> Transactions
            </motion.h1>

            {/* Concise Professional Paragraph */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-xl font-normal"
            >
              Brigitlink helps businesses, human resource managers, and employers manage Tasheel-related labour and government transactions efficiently. From work permits and electronic contracts to quota allocation and WPS compliance, we ensure strict adherence to UAE Ministry of Human Resources & Emiratisation regulations.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={handleGetStarted}
                className="px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white font-bold text-sm sm:text-base shadow-md shadow-[#B8864B]/20 hover:brightness-105 active:scale-98 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleContactUs}
                className="px-7 py-3.5 sm:py-4 rounded-full bg-white text-[#222222] font-bold text-sm sm:text-base border border-[#DECBB5] hover:bg-[#FAF6F0] active:scale-98 transition-all cursor-pointer shadow-2xs flex items-center gap-2"
              >
                <span>Contact Us</span>
              </button>
            </motion.div>

            {/* Quick Government Service Standards */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#666666]"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
                <span>MOHRE System Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#B8864B]" />
                <span>Corporate Workforce Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
                <span>Accurate Electronic Filing</span>
              </div>
            </motion.div>

          </div>

          {/* Right: Clean Professional Visual Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              {/* Outer Framed Visual with Subtle Shadows */}
              <div className="rounded-3xl p-3 bg-white border border-[#E6D7C3] shadow-xl shadow-black/5">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-900 group">
                  <img
                    src="https://website-imges.vercel.app/why_fast_process_1790842377870.jpg"
                    alt="UAE Government Services and Tasheel MOHRE Processing"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Top Subtle Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                      <Building2 className="w-3.5 h-3.5 text-[#F5D7A1]" />
                      MOHRE Labour Gateway
                    </span>
                  </div>

                  {/* Bottom Text Pill */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs uppercase font-bold tracking-wider text-[#F5D7A1] mb-1">
                      Turnkey Corporate Facilitation
                    </div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white mb-1">
                      Work Permits, Contracts & Quota Management
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-2">
                      Structured government paperwork handling designed to keep UAE businesses fully compliant and penalty-free.
                    </p>
                  </div>
                </div>

                {/* Sub-Card Supporting Highlight */}
                <div className="p-3.5 mt-2 bg-[#FCFAF8] rounded-xl border border-[#EFEAE2] flex items-center justify-between text-xs text-[#555555]">
                  <span className="font-semibold text-[#222222]">
                    UAE Mainland & Free Zone Alignment
                  </span>
                  <span className="font-bold text-[#B8864B]">
                    MOHRE Authorized
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
