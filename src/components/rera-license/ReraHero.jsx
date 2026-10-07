import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  Sparkles, 
  MessageCircle, 
  FileCheck2, 
  ShieldCheck, 
  Award, 
  Building2, 
  Users, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';

export const ReraHero = ({ onOpenConsultation }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const opacityBg = useTransform(scrollYProgress, [0, 0.9], [0.85, 0.4]);

  const handleWhatsApp = () => {
    const query = encodeURIComponent('Hello Brightlink, I am inquiring about RERA License Dubai (Certified Broker Card & Agency Setup). Can you guide me through the requirements and process?');
    window.open(`https://wa.me/971566556645?text=${query}`, '_blank');
  };

  const handleScrollToOverview = () => {
    const el = document.getElementById('rera-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroStats = [
    { value: '100%', label: 'Exam Prep Guidance', icon: Award },
    { value: '3,500+', label: 'Broker Cards Processed', icon: Users },
    { value: '7-14 Days', label: 'Average Turnaround', icon: Clock },
    { value: 'DLD & DED', label: 'Authorized Liaison Desk', icon: ShieldCheck }
  ];

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
          alt="RERA License Dubai Real Estate Regulatory Agency"
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
          <span className="text-[#F5D7A1] font-semibold">RERA License Dubai</span>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Hero Copy (Left Column) */}
          <div className="lg:col-span-8 space-y-5">
            {/* Service Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-[#B8864B]/40 text-neutral-200 text-xs font-semibold shadow-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F5D7A1]" />
              <span className="uppercase tracking-widest text-[11px] font-extrabold text-[#F5D7A1]">
                Brightlink Real Estate Desk
              </span>
              <span className="text-white/40">•</span>
              <span className="text-xs font-medium text-white/85">DLD & RERA Authorized Support</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]"
            >
              RERA License Dubai <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D7A1] via-[#E2B774] to-[#C5985B]">
                Broker Card & Agency Setup
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-[#F5D7A1] tracking-normal leading-snug"
            >
              Launch and scale your real estate career or brokerage firm legally in Dubai.
            </motion.p>

            {/* Body Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24, ease: 'easeOut' }}
              className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-2xl"
            >
              Complete turnkey guidance for Dubai Real Estate Institute (DREI) certified agent training, RERA exam passing, broker card issuance, mainland/freezone real estate brokerage company formation, and Trakheesi advertising permit approvals.
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
                onClick={() => onOpenConsultation?.('RERA License Dubai Application')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 text-white font-bold text-sm shadow-md shadow-black/25 transition-all cursor-pointer whitespace-nowrap"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Free Eligibility Assessment</span>
              </motion.button>

              <button
                onClick={handleScrollToOverview}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <span>View License Types ↓</span>
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
              <span>DREI Course Assistance · DLD Trakheesi System · Dubai Police Clearance · 100% Legal Compliance</span>
            </motion.div>
          </div>

          {/* Right Side Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-4"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-white/15 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#B8864B]/30 border border-[#B8864B]/40 flex items-center justify-center text-[#F5D7A1]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase font-bold tracking-wider text-[#F5D7A1] block">
                      Dubai Regulatory Standard
                    </span>
                    <h3 className="text-sm font-bold text-white">
                      RERA Broker ID Desk
                    </h3>
                  </div>
                </div>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                {heroStats.map((stat, i) => {
                  const StatIcon = stat.icon;
                  return (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-black/30 border border-white/10 flex flex-col justify-between"
                    >
                      <StatIcon className="w-4 h-4 text-[#F5D7A1] mb-2" />
                      <span className="text-lg sm:text-xl font-extrabold text-white font-heading">
                        {stat.value}
                      </span>
                      <span className="text-[11px] text-neutral-400 font-medium leading-tight">
                        {stat.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="p-3.5 rounded-2xl bg-[#B8864B]/15 border border-[#B8864B]/30 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#F5D7A1] shrink-0 mt-0.5" />
                <p className="text-xs text-neutral-200 leading-relaxed">
                  <strong className="text-white font-semibold">Pre-Verification Included:</strong> We check your academic degree, residency visa, and criminal record clearance before booking your DREI exam.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
