import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  Sparkles, 
  MessageCircle, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  Clock, 
  Building2, 
  CheckCircle2, 
  ArrowUpRight,
  FileCheck2
} from 'lucide-react';

export const RevaluationHero = ({ onOpenConsultation }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const opacityBg = useTransform(scrollYProgress, [0, 0.9], [0.85, 0.4]);

  const handleWhatsApp = () => {
    const query = encodeURIComponent('Hello BrightLink, I would like to inquire about Official Property Revaluation in Dubai. Can you assist me with document requirements and DLD valuation booking?');
    window.open(`https://wa.me/971566556645?text=${query}`, '_blank');
  };

  const handleScrollToProcess = () => {
    const el = document.getElementById('valuation-intro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#141414] text-white">
      {/* Background Skyline Image with Parallax Movement */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          style={{ y: yBg, opacity: opacityBg }}
          src="/images/process_bg_skyline_1790959277672.jpg"
          alt="Official DLD Property Revaluation Dubai"
          className="w-full h-full object-cover object-center transform will-change-transform"
        />

        {/* Ambient Gradients for Sharp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/40" />

        {/* Golden Warm Glow */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#B8864B]/25 blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-28 pb-16 lg:pt-36 lg:pb-24">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="flex items-center gap-2 text-xs text-neutral-300 mb-6 flex-wrap"
          aria-label="Breadcrumb"
        >
          <Link
            to="/"
            className="flex items-center gap-1.5 hover:text-[#F5D7A1] transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-[#F5D7A1]" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-neutral-500" />
          <Link
            to="/services"
            className="hover:text-[#F5D7A1] transition-colors"
          >
            Services
          </Link>
          <ChevronRight className="w-3 h-3 text-neutral-500" />
          <span className="text-neutral-400">Property & Support</span>
          <ChevronRight className="w-3 h-3 text-neutral-500" />
          <span className="text-[#F5D7A1] font-semibold">Property Revaluation</span>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-7 space-y-5">
            {/* Service Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-[#B8864B]/40 text-neutral-200 text-xs font-semibold shadow-md"
            >
              <TrendingUp className="w-3.5 h-3.5 text-[#F5D7A1]" />
              <span className="uppercase tracking-widest text-[11px] font-extrabold text-[#F5D7A1]">
                Dubai Land Department (DLD)
              </span>
              <span className="text-white/40">•</span>
              <span className="text-xs font-medium text-white/85">Certified Asset Revaluation</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]"
            >
              Official Property <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D7A1] via-[#E2B774] to-[#C5985B]">
                Revaluation in Dubai
              </span>
            </motion.h1>

            {/* Subheading / Short Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-[#F5D7A1] tracking-normal leading-snug"
            >
              Certified valuation reports recognized by Dubai Land Department & GDRFA.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24, ease: 'easeOut' }}
              className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-2xl"
            >
              We coordinate certified property valuations for 10-Year UAE Golden Visa eligibility, mortgage refinancing, bank equity release, estate inheritance, and corporate asset restructuring across all Dubai freeholds.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
              className="pt-3 flex flex-wrap items-center gap-3.5"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-lg shadow-[#25D366]/25 transition-all cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Start on WhatsApp</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenConsultation?.('Property Revaluation Assessment')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 text-white font-bold text-sm shadow-md shadow-black/25 transition-all cursor-pointer whitespace-nowrap"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Request Valuation Review</span>
              </motion.button>

              <button
                onClick={handleScrollToProcess}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <span>Explore Details ↓</span>
              </button>
            </motion.div>

            {/* Supporting Trust Tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.38, ease: 'easeOut' }}
              className="pt-2 flex items-center gap-2 text-xs text-neutral-400 font-medium"
            >
              <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
              <span>Dubai Land Department Authorized · 100% Golden Visa Compliance · Physical Inspection Coordination</span>
            </motion.div>
          </div>

          {/* Right Column: Distinctive Property Valuation Certificate Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-[#B8864B]/35 shadow-2xl space-y-5 relative overflow-hidden">
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#B8864B]/30 border border-[#B8864B]/40 flex items-center justify-center text-[#F5D7A1]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#F5D7A1] block">
                      Valuation Matrix Audit
                    </span>
                    <h3 className="text-sm font-bold text-white">
                      Official DLD Valuation Certificate
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-[10px] font-bold">
                  DLD Verified
                </span>
              </div>

              {/* Valuation Comparison Case */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs text-neutral-300">
                  <span>Acquisition / Deed Price:</span>
                  <span className="font-semibold text-neutral-400 line-through">AED 1,450,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#F5D7A1]">DLD Certified Revaluation:</span>
                  <div className="text-right">
                    <span className="text-lg font-extrabold text-white font-heading">AED 2,180,000</span>
                    <span className="text-[10px] text-[#25D366] block font-bold">+50.3% Market Appreciation</span>
                  </div>
                </div>
              </div>

              {/* Status Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-black/30 border border-white/10 space-y-1">
                  <span className="text-[10px] text-neutral-400 block font-medium">Golden Visa Eligibility:</span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#25D366]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>QUALIFIED (≥ AED 2M)</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-black/30 border border-white/10 space-y-1">
                  <span className="text-[10px] text-neutral-400 block font-medium">Turnaround Timeline:</span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                    <Clock className="w-3.5 h-3.5 text-[#F5D7A1]" />
                    <span>3 - 7 Working Days</span>
                  </div>
                </div>
              </div>

              {/* Footer Trust Callout */}
              <div className="p-3 rounded-xl bg-[#B8864B]/15 border border-[#B8864B]/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#F5D7A1]" />
                  <span className="text-neutral-200">Recognized by all UAE Central Banks & Courts</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F5D7A1]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
