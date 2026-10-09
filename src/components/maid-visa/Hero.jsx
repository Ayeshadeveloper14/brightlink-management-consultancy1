import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { UserCheck, ArrowRight, MessageSquare, ChevronRight, ShieldCheck, Clock } from 'lucide-react';

export const Hero = ({ onOpenConsultation, onScrollToProcess }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleFreeQuote = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Maid Visa / Domestic Worker Sponsorship');
    } else {
      const text = encodeURIComponent(
        'Hello Brightlink! I would like to get a free quote for sponsoring a maid / nanny in Dubai.'
      );
      window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
    }
  };

  const handleSeeProcess = () => {
    if (onScrollToProcess) {
      onScrollToProcess();
    } else {
      const el = document.getElementById('process') || document.getElementById('maid-process');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-14 lg:pb-20 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FCFAF8] overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.35, 0.45, 0.35] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 right-0 w-[580px] h-[580px] bg-gradient-to-bl from-[#B8864B]/15 to-transparent rounded-full blur-3xl transform translate-x-1/4" 
        />
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#0F172A]/8 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" 
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Context */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-1.5 text-xs text-[#64748B] pb-6 mb-6 border-b border-[#EBE4D8]/80 font-medium"
        >
          <a href="/" className="hover:text-[#B8864B] transition-colors">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <a href="/visa" className="hover:text-[#B8864B] transition-colors">Visa</a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#0F172A] font-semibold">Maid Visa</span>
        </motion.div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow */}
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#B8864B]/30 text-[#8C6230] text-[11px] font-bold tracking-wider uppercase shadow-xs font-heading"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>Domestic Worker Visa</span>
            </motion.div>

            {/* Main Heading & Supporting Heading */}
            <div className="space-y-2">
              <motion.h1 
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.15] font-heading"
              >
                Sponsor your nanny or maid.
              </motion.h1>
              
              <motion.h2
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#C5985B] to-[#976A36] font-heading"
              >
                We'll handle the maid visa.
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              Get your domestic worker's UAE residency visa processed 100% online. Skip the typing centres and let our experts handle the GDRFA and MOHRE paperwork.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={handleFreeQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] hover:from-[#B8864B] hover:via-[#C5985B] hover:to-[#976A36] shadow-lg shadow-slate-900/10 transition-all cursor-pointer font-sans"
              >
                <span>Get a free quote</span>
                <span className="text-base leading-none">→</span>
              </motion.button>

              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -1.5 }}
                onClick={handleSeeProcess}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-xs text-[#0F172A] bg-white border border-[#DECBB5] hover:border-[#B8864B] hover:text-[#B8864B] transition-all cursor-pointer shadow-xs font-sans"
              >
                <span>See the process</span>
              </motion.button>
            </div>

          </div>

          {/* Right Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/15 border border-[#DECBB5]/80 bg-white group"
            >
              <div className="relative h-[380px] sm:h-[440px] overflow-hidden">
                <img 
                  src="/images/maid_visa_dubai.jpg" 
                  alt="Domestic Worker & Maid Visa sponsorship in Dubai" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://website-imges.vercel.app/why_fast_process_1790842377870.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent pointer-events-none" />
              </div>

              {/* Floating Top Badge */}
              <div className="absolute top-5 left-5 right-5 flex justify-between items-center pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#F5D7A1] text-xs font-bold shadow-lg">
                  100% Online Typing
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-bold shadow-md">
                  MOHRE Contract Compliant
                </span>
              </div>

              {/* Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading block">
                  Turnkey Residency Process
                </span>
                <h3 className="text-sm font-bold text-[#0F172A] font-heading">
                  Nannies · Housemaids · Private Chauffeurs · Housekeepers
                </h3>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
