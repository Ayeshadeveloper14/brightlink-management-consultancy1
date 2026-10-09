import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ChevronRight, 
  Sparkles, 
  MessageCircle, 
  Car, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  Clock, 
  ArrowRight,
  Globe2
} from 'lucide-react';

export const DriverLicenseHero = ({ onOpenConsultation }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const opacityBg = useTransform(scrollYProgress, [0, 0.9], [0.85, 0.4]);

  const handleWhatsApp = () => {
    const query = encodeURIComponent("Hello Brightlink, I am inquiring about getting / exchanging a Driver's License in the UAE. Can you assist me?");
    window.open(`https://wa.me/971566556645?text=${query}`, '_blank');
  };

  const handleScrollToContent = () => {
    const el = document.getElementById('driver-content');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#141414] text-white">
      {/* Background Driving Image with Parallax Movement */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          style={{ y: yBg, opacity: opacityBg }}
          src="/images/why_fast_process_1790842377870.jpg"
          alt="Driver's License in the UAE - RTA Licensing & Exchange"
          className="w-full h-full object-cover object-center transform will-change-transform"
        />

        {/* Ambient Gradients for Sharp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/78 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/40" />

        {/* Golden Warm Glow */}
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
          <span className="text-[#F5D7A1] font-semibold">Driver's License in the UAE</span>
        </motion.nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading & Introduction */}
          <div className="lg:col-span-7 space-y-5">
            {/* Service Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-[#B8864B]/40 text-neutral-200 text-xs font-semibold shadow-md"
            >
              <Car className="w-3.5 h-3.5 text-[#F5D7A1]" />
              <span className="uppercase tracking-widest text-[11px] font-extrabold text-[#F5D7A1]">
                RTA Dubai Licensing Services
              </span>
              <span className="text-white/40">•</span>
              <span className="text-xs font-medium text-white/85">Foreign License Swap & Road Tests</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]"
            >
              Driver's License <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D7A1] via-[#E2B774] to-[#C5985B]">
                in the UAE
              </span>
            </motion.h1>

            {/* Subheading / Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-[#F5D7A1] tracking-normal leading-snug"
            >
              Drive legally across Dubai & all Emirates with expert RTA liaison.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24, ease: 'easeOut' }}
              className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-2xl"
            >
              Complete turnkey assistance for converting eligible foreign driving licenses without tests, booking authorized RTA eye exams, Golden Visa direct road test exemptions, and step-by-step driving school enrollment across Dubai.
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
                onClick={() => onOpenConsultation?.("Driver's License Exchange Eligibility Check")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 text-white font-bold text-sm shadow-md shadow-black/25 transition-all cursor-pointer whitespace-nowrap"
              >
                <Globe2 className="w-4 h-4" />
                <span>Check Exchange Eligibility</span>
              </motion.button>

              <button
                onClick={handleScrollToContent}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <span>Read Full Guide ↓</span>
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
              <span>40+ Exchangeable Countries · Authorized RTA Eye Test Centers · Fast Golden Visa Exemption</span>
            </motion.div>
          </div>

          {/* Right Column: Distinctive Driver's License Hero Badge & Quick-Stats Card */}
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
                    <Car className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#F5D7A1] block">
                      RTA Dubai Traffic File
                    </span>
                    <h3 className="text-sm font-bold text-white">
                      UAE Smart Driving License
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-[10px] font-bold">
                  Official RTA
                </span>
              </div>

              {/* Driving Matrix Quick Facts */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                  <span className="text-[10px] text-neutral-400 block font-medium">Direct License Swap:</span>
                  <span className="text-base font-extrabold text-white block">40+ Countries</span>
                  <span className="text-[10px] text-[#25D366] block font-semibold">No Driving Test Needed</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                  <span className="text-[10px] text-neutral-400 block font-medium">Eye Test Booking:</span>
                  <span className="text-base font-extrabold text-white block">Same-Day Slots</span>
                  <span className="text-[10px] text-[#F5D7A1] block font-semibold">Approved Opticians</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                  <span className="text-[10px] text-neutral-400 block font-medium">Golden Visa Holders:</span>
                  <span className="text-base font-extrabold text-white block">Fast Track</span>
                  <span className="text-[10px] text-[#25D366] block font-semibold">Skip Training Classes</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-1">
                  <span className="text-[10px] text-neutral-400 block font-medium">Initial Expat Validity:</span>
                  <span className="text-base font-extrabold text-white block">2 Years</span>
                  <span className="text-[10px] text-neutral-400 block font-semibold">Renewable for 5 Yrs</span>
                </div>
              </div>

              {/* Notice Banner */}
              <div className="p-3 rounded-xl bg-[#B8864B]/15 border border-[#B8864B]/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F5D7A1] shrink-0" />
                  <span className="text-neutral-200">Legal translation typed for 50+ foreign license languages</span>
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
