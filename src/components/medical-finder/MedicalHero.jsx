import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  Sparkles, 
  MessageCircle, 
  Activity, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  Clock, 
  ArrowRight,
  MapPin,
  Calendar,
  Zap,
  Fingerprint
} from 'lucide-react';

export const MedicalHero = ({ onOpenConsultation }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const opacityBg = useTransform(scrollYProgress, [0, 0.9], [0.85, 0.4]);

  const handleWhatsApp = () => {
    const query = encodeURIComponent("Hello Brightlink, I would like to book a VIP Visa Medical appointment and Emirates ID typing in Dubai.");
    window.open(`https://wa.me/971566556645?text=${query}`, '_blank');
  };

  const handleScrollToCenters = () => {
    const el = document.getElementById('centers-directory');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#141414] text-white">
      {/* Background Hero Image with Parallax Movement */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          style={{ y: yBg, opacity: opacityBg }}
          src="/images/medical_hero_1790966817427.jpg"
          alt="Visa Medical & Emirates ID Centers Dubai"
          className="w-full h-full object-cover object-center transform will-change-transform"
        />

        {/* Ambient Gradients for Crisp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/80 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/40" />

        {/* Warm Golden Ambient Glow */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#B8864B]/25 blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24">
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
          <span className="text-[#F5D7A1] font-semibold">Visa Medical & Emirates ID Centers</span>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7 space-y-5">
            {/* Service Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-[#B8864B]/40 text-neutral-200 text-xs font-semibold shadow-md"
            >
              <Activity className="w-3.5 h-3.5 text-[#F5D7A1]" />
              <span className="uppercase tracking-widest text-[11px] font-extrabold text-[#F5D7A1]">
                DHA & MOHAP Certified Directory
              </span>
              <span className="text-white/40">•</span>
              <span className="text-xs font-medium text-white/85">Smart Salem & ICP Biometrics</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14]"
            >
              Visa Medical & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D7A1] via-[#E2B774] to-[#C5985B]">
                Emirates ID Centers
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
              className="text-lg sm:text-xl font-semibold text-[#F5D7A1] tracking-normal leading-snug"
            >
              Locate authorized screening hubs & book priority VIP lounge appointments.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24, ease: 'easeOut' }}
              className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-2xl"
            >
              Find certified Dubai Health Authority (DHA) medical screening centers. Book priority VIP appointments with autonomous AI robotic blood sampling, 30-minute rapid test results, and simultaneous Emirates ID fingerprint biometrics typing across Dubai.
            </motion.p>

            {/* Primary & Secondary Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
              className="pt-3 flex flex-wrap items-center gap-3.5"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenConsultation?.('VIP Medical & Emirates ID Booking')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 text-white font-bold text-sm shadow-lg shadow-black/25 transition-all cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Priority VIP Slot</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-lg shadow-[#25D366]/25 transition-all cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </motion.button>

              <button
                type="button"
                onClick={handleScrollToCenters}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <span>View Official Centers ↓</span>
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
              <span>DHA / MOHAP Certified · Smart Salem VIP Lounges · Zero Wait Escort · ICP Biometrics</span>
            </motion.div>
          </div>

          {/* Right Column: Distinctive Medical Feature Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-[#B8864B]/35 shadow-2xl space-y-5 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#B8864B]/30 border border-[#B8864B]/40 flex items-center justify-center text-[#F5D7A1]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#F5D7A1] block">
                      Express Screening Service
                    </span>
                    <h3 className="text-sm font-bold text-white">
                      Smart Salem & DHA Hubs
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-[10px] font-bold">
                  Official Verified
                </span>
              </div>

              {/* 4 Quick Facts Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                  <span className="text-[10px] text-neutral-400 block font-medium">VIP Smart Salem:</span>
                  <span className="text-base font-extrabold text-white block">30 Mins</span>
                  <span className="text-[10px] text-[#25D366] block font-semibold">Autonomous AI Draw</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                  <span className="text-[10px] text-neutral-400 block font-medium">Al Muhaisnah Hub:</span>
                  <span className="text-base font-extrabold text-white block">24/7 Access</span>
                  <span className="text-[10px] text-[#F5D7A1] block font-semibold">Express 24h & Regular</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                  <span className="text-[10px] text-neutral-400 block font-medium">Emirates ID Desk:</span>
                  <span className="text-base font-extrabold text-white block">Integrated</span>
                  <span className="text-[10px] text-[#25D366] block font-semibold">Biometrics On-Site</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                  <span className="text-[10px] text-neutral-400 block font-medium">Wait Time:</span>
                  <span className="text-base font-extrabold text-white block">Zero Queue</span>
                  <span className="text-[10px] text-neutral-400 block font-semibold">VIP Lounge Booking</span>
                </div>
              </div>

              {/* Feature Benefit Line */}
              <div className="p-3 rounded-xl bg-[#B8864B]/15 border border-[#B8864B]/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Fingerprint className="w-4 h-4 text-[#F5D7A1] shrink-0" />
                  <span className="text-neutral-200">Simultaneous Emirates ID biometrics & medical in 1 visit</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-[#F5D7A1] shrink-0" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MedicalHero;
