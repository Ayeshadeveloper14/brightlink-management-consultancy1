import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sparkles, MessageCircle, ArrowDown, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TrusteeHero = ({ onOpenConsultation }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const opacityBg = useTransform(scrollYProgress, [0, 0.9], [0.85, 0.4]);

  const handleWhatsApp = () => {
    const query = encodeURIComponent('Hello Brightlink, I need assistance with Dubai Property Trustee Support. Can you check my documents?');
    window.open(`https://wa.me/971566556645?text=${query}`, '_blank');
  };

  const handleScrollToServices = () => {
    const el = document.getElementById('what-we-handle');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#141414] text-white">
      {/* Background Image with Vibrant Visibility and Parallax Scroll */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          style={{ y: yBg, opacity: opacityBg }}
          src="/images/process_bg_skyline_1790959277672.jpg"
          alt="Dubai Property Trustee Support"
          className="w-full h-full object-cover object-center transform will-change-transform"
        />

        {/* Soft, light gradient overlay so the photo remains colorful and text stays ultra-sharp */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/40" />

        {/* Ambient Warm Golden Glow */}
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
          <span className="text-[#F5D7A1] font-semibold">DLD Trustee Service</span>
        </motion.nav>

        <div className="max-w-3xl space-y-5">
          {/* Eyebrow / Service Label: Brightlink */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-[#B8864B]/40 text-neutral-200 text-xs font-semibold shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F5D7A1]" />
            <span className="uppercase tracking-widest text-[11px] font-extrabold text-[#F5D7A1]">
              Brightlink
            </span>
            <span className="text-white/40">•</span>
            <span className="text-xs font-medium text-white/85">DLD Trustee Office Support</span>
          </motion.div>

          {/* Main Heading: Dubai Property Trustee Support */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]"
          >
            Dubai Property <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D7A1] via-[#E2B774] to-[#C5985B]">Trustee Support</span>
          </motion.h1>

          {/* Subheading: Trustee services without the paperwork headache. */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-[#F5D7A1] tracking-normal leading-snug"
          >
            Trustee services without the paperwork headache.
          </motion.p>

          {/* Body Copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease: 'easeOut' }}
            className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal max-w-2xl"
          >
            We help buyers, sellers, property owners, investors and real estate companies prepare, check and coordinate the documents required for Dubai property trustee office transactions.
          </motion.p>

          {/* CTAs: Primary Start on WhatsApp, Secondary View services */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
            className="pt-3 flex flex-wrap items-center gap-3.5"
          >
            {/* Primary CTA: Start on WhatsApp */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsApp}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-lg shadow-[#25D366]/25 transition-all cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Start on WhatsApp</span>
            </motion.button>

            {/* Secondary CTA: View services */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleScrollToServices}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/25 backdrop-blur-md transition-all cursor-pointer whitespace-nowrap"
            >
              <span>View services</span>
              <ArrowDown className="w-4 h-4 text-[#F5D7A1]" />
            </motion.button>
          </motion.div>

          {/* Supporting Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.38, ease: 'easeOut' }}
            className="pt-2 flex items-center gap-2 text-xs text-neutral-400 font-medium"
          >
            <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
            <span>Document check · Fee guidance · Submission support</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
