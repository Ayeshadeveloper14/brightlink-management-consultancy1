import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Clock, 
  Home, 
  Users, 
  FileText,
  BadgeCheck,
  ChevronRight,
  Calculator
} from 'lucide-react';

export const Hero = ({ onOpenConsultation, onOpenCalculator }) => {
  const shouldReduceMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleMouseMove = (e) => {
      const { clientWidth, clientHeight } = document.documentElement;
      const x = (e.clientX / clientWidth - 0.5) * 20; // -10 to +10px
      const y = (e.clientY / clientHeight - 0.5) * 20; // -10 to +10px
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      'Hello 800 DOCS / Brigitlink! I would like to sponsor my family for UAE residence. Please share the checklist and fee breakdown.'
    );
    window.open(`https://wa.me/971501234567?text=${message}`, '_blank');
  };

  const scrollToFeeFinder = () => {
    const el = document.getElementById('fee-finder');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FCFAF8] overflow-hidden">
      {/* Ambient Glows & Layered Background Shapes */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.06, 1], opacity: [0.35, 0.45, 0.35] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 right-0 w-[620px] h-[620px] bg-gradient-to-bl from-[#B8864B]/15 via-[#C5985B]/10 to-transparent rounded-full blur-3xl transform translate-x-1/4" 
        />
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 left-0 w-[540px] h-[540px] bg-gradient-to-tr from-[#0F172A]/8 via-[#B8864B]/5 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" 
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#B8864B 0.5px, transparent 0.5px)`,
            backgroundSize: '28px 28px',
            opacity: 0.12
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Context & Navigation Strip */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#64748B] pb-6 mb-6 border-b border-[#EBE4D8]/80 font-medium"
        >
          {/* Breadcrumb Context */}
          <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
            <a href="/" className="hover:text-[#B8864B] transition-colors">Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <a href="/services" className="hover:text-[#B8864B] transition-colors">Services</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0F172A] font-semibold">Family Visa</span>
          </div>

          
          
        </motion.div>

        {/* Hero 2-Column Split: Editorial Left + High-End Cinematic Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow & Label */}
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#B8864B]/30 text-[#8C6230] text-[11px] font-bold tracking-wider uppercase shadow-xs"
            >
              <Users className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>Services · Family visa · UAE residence</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight leading-[1.15] font-heading"
            >
              Bring your family to the UAE — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#C5985B] to-[#976A36]">we run the whole file.</span>
            </motion.h1>

            {/* Hero Body Text */}
            <motion.p 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              800 DOCS prepares the sponsorship, files it with GDRFA or ICP, books the medical and Emirates ID appointments close to you, and brings the stamped passport back to your door. Every government fee is shown before you pay a dirham.
            </motion.p>

            {/* CTA Buttons: Staggered Reveal */}
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32, ease: 'easeOut' }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5"
            >
              {/* Primary CTA: WhatsApp */}
              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={handleWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20BD5A] shadow-lg shadow-[#25D366]/25 transition-all cursor-pointer font-sans"
              >
                <MessageSquare className="w-4 h-4 fill-white text-[#25D366]" />
                <span>Start on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              {/* Secondary CTA: Fee Finder */}
              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -1.5 }}
                onClick={scrollToFeeFinder}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-xs text-[#0F172A] bg-white border border-[#DECBB5] hover:border-[#B8864B] hover:text-[#B8864B] transition-all cursor-pointer shadow-xs"
              >
                <Calculator className="w-4 h-4 text-[#B8864B]" />
                <span>Explore Live Fee Finder</span>
              </motion.button>
            </motion.div>

            {/* 3 Trust Points */}
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left border-t border-[#EBE4D8]/80 text-xs text-[#475569]"
            >
              <div className="flex items-center gap-2 bg-white/70 p-2 rounded-lg border border-[#EBE4D8]/60 shadow-2xs">
                <BadgeCheck className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span className="font-medium text-[#1E293B]">DET-licensed clearing company</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 p-2 rounded-lg border border-[#EBE4D8]/60 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium text-[#1E293B]">Government fees at cost, receipts included</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 p-2 rounded-lg border border-[#EBE4D8]/60 shadow-2xs">
                <Clock className="w-4 h-4 text-[#B8864B] shrink-0" />
                <span className="font-medium text-[#1E293B]">Door-to-door pickup in Dubai</span>
              </div>
            </motion.div>

          </div>

          {/* Right Visual Column (5 cols): High-End UAE Family Visual with Parallax Depth */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Gentle Desktop Mouse Parallax Container */}
            <div 
              style={
                shouldReduceMotion
                  ? {}
                  : {
                      transform: `translate3d(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px, 0)`,
                      transition: 'transform 0.2s ease-out'
                    }
              }
              className="relative"
            >
              {/* Main Card Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/15 border border-[#DECBB5]/80 bg-white group">
                
                {/* Visual Image */}
                <div className="relative h-[430px] sm:h-[480px] overflow-hidden">
                  <img 
                    src="/images/family_visa_dubai.jpg" 
                    alt="UAE Family Visa Sponsorship in Dubai" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = '/images/family_hero_1790966803470.jpg';
                    }}
                  />
                  
                  {/* Subtle Luxury Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#B8864B]/20 via-transparent to-black/40 pointer-events-none mix-blend-overlay" />
                </div>

                {/* Floating Top Badge */}
                <div className="absolute top-5 left-5 right-5 flex justify-between items-center pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#F5D7A1] text-xs font-bold shadow-lg">
                    800 DOCS · Dubai & UAE
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-bold shadow-md">
                    GDRFA & ICP File Open
                  </span>
                </div>

                {/* Bottom Highlight Card Overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading">
                      Complete Turnkey Residency
                    </span>
                    <Award className="w-4 h-4 text-[#B8864B]" />
                  </div>
                  <div className="text-sm font-bold text-[#0F172A] font-heading">
                    Spouse · Children · Parents · Newborns
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-100 text-center text-[10px]">
                    <div>
                      <span className="text-slate-400 block">Validity</span>
                      <strong className="text-[#0F172A]">2–3 Years</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Rating</span>
                      <strong className="text-emerald-700">4.9 ★ (550)</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Turnaround</span>
                      <strong className="text-[#0F172A]">5–10 Days</strong>
                    </div>
                  </div>
                </div>

              </div>

              {/* Subtle Floating Decorative Elements */}
              <motion.div 
                animate={shouldReduceMotion ? {} : { y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -top-4 -left-4 items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-[#DECBB5] shadow-lg text-xs font-bold text-[#0F172A]"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Live File Preparation</span>
              </motion.div>

              <motion.div 
                animate={shouldReduceMotion ? {} : { y: [4, -4, 4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="hidden sm:flex absolute -bottom-4 -right-3 items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#0F172A] text-white border border-white/20 shadow-xl text-xs font-bold"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F5D7A1]" />
                <span>Zero Hidden Fees</span>
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
