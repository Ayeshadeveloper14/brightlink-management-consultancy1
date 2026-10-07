import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Home, 
  Building2, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare, 
  Calculator, 
  Sparkles, 
  CheckCircle2,
  ChevronRight,
  Award
} from 'lucide-react';

export const Hero = ({ onOpenCalculator, onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleMouseMove = (e) => {
      const { clientWidth, clientHeight } = document.documentElement;
      const x = (e.clientX / clientWidth - 0.5) * 20;
      const y = (e.clientY / clientHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello 800 DOCS / Brigitlink! I own property in Dubai and would like to apply for a Property Visa (Golden / Investor / Retirement). Please guide me.'
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  const scrollToCards = () => {
    const el = document.getElementById('visa-routes');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FCFAF8] overflow-hidden">
      {/* Ambient Architectural Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.35, 0.45, 0.35] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#B8864B]/15 via-[#C5985B]/10 to-transparent rounded-full blur-3xl transform translate-x-1/4" 
        />
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 left-0 w-[520px] h-[520px] bg-gradient-to-tr from-[#0F172A]/8 via-[#B8864B]/5 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" 
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
          <span className="text-[#0F172A] font-semibold">Property Visa</span>
        </motion.div>

        {/* Hero 2-Column Split: Editorial Left + Cinematic Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow */}
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#B8864B]/30 text-[#8C6230] text-[11px] font-bold tracking-wider uppercase shadow-xs"
            >
              <Home className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>Property Visa · Dubai Real Estate Residency</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight leading-[1.15] font-heading"
            >
              Your UAE property is your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#C5985B] to-[#976A36]">route to residency.</span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl font-medium text-[#475569] leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0"
            >
              Three property visas. Tap yours.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5"
            >
              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={scrollToCards}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] hover:from-[#B8864B] hover:via-[#C5985B] hover:to-[#976A36] shadow-lg shadow-slate-900/10 transition-all cursor-pointer font-sans"
              >
                <span>Select Your Property Visa Route</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -1.5 }}
                onClick={handleWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-xs text-[#0F172A] bg-white border border-[#DECBB5] hover:border-[#B8864B] hover:text-[#B8864B] transition-all cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Chat with Property PRO</span>
              </motion.button>
            </motion.div>

          </div>

          {/* Right Visual Column (5 cols): Cinematic Luxury Real Estate Visual */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/15 border border-[#DECBB5]/80 bg-white group">
                
                <div className="relative h-[400px] sm:h-[450px] overflow-hidden">
                  <img 
                    src="/images/property_visa_dubai.jpg" 
                    alt="Dubai Property Visa and Real Estate Residency" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = 'https://website-imges.vercel.app/process_bg_skyline_1790959277672.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#B8864B]/20 via-transparent to-black/40 pointer-events-none mix-blend-overlay" />
                </div>

                {/* Floating Top Badge */}
                <div className="absolute top-5 left-5 right-5 flex justify-between items-center pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#F5D7A1] text-xs font-bold shadow-lg">
                    Dubai Land Department (DLD)
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-bold shadow-md">
                    Direct Title Deed Stamping
                  </span>
                </div>

                {/* Bottom Highlight Overlay */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading">
                      10-Year · 2-Year · 5-Year Retirement
                    </span>
                    <Award className="w-4 h-4 text-[#B8864B]" />
                  </div>
                  <div className="text-sm font-bold text-[#0F172A] font-heading">
                    Freehold Property Investor Programs
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-100 text-center text-[10px]">
                    <div>
                      <span className="text-slate-400 block">DLD Approval</span>
                      <strong className="text-[#0F172A]">Direct File</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Google Rating</span>
                      <strong className="text-emerald-700">4.9 ★ (625+)</strong>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Visas Processed</span>
                      <strong className="text-[#0F172A]">20,000+</strong>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
