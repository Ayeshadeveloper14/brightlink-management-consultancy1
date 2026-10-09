import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Package, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  MessageSquare, 
  Download, 
  PhoneCall,
  Clock,
  Sparkles,
  Award,
  Globe2
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext.jsx';

export const ProductRegistrationHero = ({ onOpenConsultation }) => {
  const { isRTL } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      'Hello FamilyVisa.ae / Brightlink! I would like to register consumer products with Dubai Municipality (Montaji) / MoIAT. Please advise on requirements.'
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  const scrollToProcess = () => {
    const el = document.getElementById('registration-process');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FCFAF8] overflow-hidden">
      {/* Background Architectural Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.35, 0.45, 0.35] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#B8864B]/10 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" 
        />
        <motion.div 
          animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#0F172A]/5 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" 
        />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#B8864B 0.5px, transparent 0.5px)`,
            backgroundSize: '28px 28px',
            opacity: 0.15
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero 2-Column Split: Text Left + Premium Visual Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column (7 cols) */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Eyebrow Badge */}
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.05, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#B8864B]/30 text-[#8C6230] text-[11px] font-bold tracking-wider uppercase shadow-xs"
            >
              <Package className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>DUBAI MUNICIPALITY (MONTAJI) & MoIAT COMPLIANCE • 5-YEAR VALIDITY</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight font-heading"
            >
              Product Registration in Dubai & the UAE
            </motion.h1>

            {/* Supporting Text */}
            <motion.p 
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0"
            >
              Legally import, distribute, and sell your consumer goods across Dubai and the UAE. Complete turnkey registration with Dubai Municipality (Montaji), MoIAT, and MOHAP by authorized government liaison specialists.
            </motion.p>

            {/* Key Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-[#334155] text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Montaji & MoIAT Authorized Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>5 Years Certificate Validity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bilingual Arabic Label Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Hassle-Free Customs & Port Clearance</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.015 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={() => onOpenConsultation('Product Registration Consultation')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] hover:from-[#B8864B] hover:via-[#C5985B] hover:to-[#976A36] shadow-lg shadow-slate-900/10 hover:shadow-[#B8864B]/25 transition-all duration-300 cursor-pointer"
              >
                <span>Start Product Registration</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.015 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20BD5A] shadow-md shadow-[#25D366]/20 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Specialist</span>
              </motion.button>

              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -1.5 }}
                onClick={scrollToProcess}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs text-slate-700 bg-white border border-slate-200 hover:border-[#B8864B] hover:text-[#B8864B] transition-all cursor-pointer shadow-xs"
              >
                <span>View 4-Step Process</span>
              </motion.button>
            </div>

          </motion.div>

          {/* Right Visual Column (5 cols): High-Quality UAE Product Registration Visual */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/15 border border-[#DECBB5]/70 bg-white group">
              
              {/* Product Image */}
              <div className="relative h-[420px] sm:h-[460px] overflow-hidden">
                <img 
                  src="/images/product_registration_hero.jpg" 
                  alt="Product Registration in Dubai Municipality Montaji" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://website-imges.vercel.app/why_experienced_team_1790842362837.jpg';
                  }}
                />
                
                {/* Subtle Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#B8864B]/20 via-transparent to-black/40 pointer-events-none mix-blend-overlay" />
              </div>

              {/* Floating Top Badge */}
              <div className="absolute top-5 left-5 right-5 flex justify-between items-center pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-[#F5D7A1] text-xs font-bold shadow-lg">
                  Montaji Official e-Portal
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-bold shadow-md">
                  Active Gateway
                </span>
              </div>

              {/* Bottom Visual Highlights */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading">
                    Official UAE Government Attestation
                  </span>
                  <Award className="w-4 h-4 text-[#B8864B]" />
                </div>
                <div className="text-sm font-bold text-[#0F172A] font-heading">
                  Dubai Municipality • MoIAT ECAS • MOHAP
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-100 text-center text-[10px]">
                  <div>
                    <span className="text-slate-400 block">Validity</span>
                    <strong className="text-[#0F172A]">5 Years</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Pass Rate</span>
                    <strong className="text-emerald-700">99.8%</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Turnaround</span>
                    <strong className="text-[#0F172A]">10-15 Days</strong>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Stats Row */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 pt-8 border-t border-[#E8DFC8] grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-heading">
              5 Years
            </div>
            <div className="text-xs text-[#64748B]">Registration Certificate Validity</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#B8864B] font-heading">
              2,500+
            </div>
            <div className="text-xs text-[#64748B]">Products Successfully Registered</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-heading">
              100%
            </div>
            <div className="text-xs text-[#64748B]">Customs & Port Clearance Rate</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#B8864B] font-heading">
              10-15 Days
            </div>
            <div className="text-xs text-[#64748B]">Standard Fast-Track Approval</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductRegistrationHero;
