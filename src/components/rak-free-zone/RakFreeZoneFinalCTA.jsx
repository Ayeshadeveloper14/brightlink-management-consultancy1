import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  Calculator, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const RakFreeZoneFinalCTA = ({ onOpenConsultation }) => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsApp = () => {
    window.open('https://wa.me/971566556645?text=Hello%2C%20I%20am%20ready%20to%20set%20up%20my%20RAK%20Free%20Zone%20(RAKEZ)%20company.', '_blank');
  };

  const guarantees = [
    'Fast-Track 3 to 5 Day Incorporation',
    '100% Foreign Equity Ownership',
    'Zero Paid-Up Capital Proof Required Upfront',
    'Dedicated PRO, Visa & Banking Assistance'
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-[#FAF7F0] to-[#FAF5EC] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#B8864B]/15 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Badge */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DECBB5] shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E28] font-heading">
            START YOUR UAE EXPANSION TODAY
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="space-y-4 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] font-heading tracking-tight leading-tight">
            Launch Your RAK Free Zone Company with Brightlink
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Join over 15,000 international enterprises thriving in RAKEZ. Connect with Brightlink today for an itemized government fee schedule and seamless setup experience.
          </p>
        </motion.div>

        {/* 4 Guarantees */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-2"
        >
          {guarantees.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1E293B]">
              <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 pt-4 max-w-full"
        >
          <button
            type="button"
            onClick={handleWhatsApp}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white text-sm font-bold shadow-lg shadow-[#B8864B]/25 transition-all cursor-pointer inline-flex items-center justify-center gap-2 group"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => navigate('/calculator')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-neutral-50 text-[#0F172A] border border-[#DECBB5] text-sm font-bold shadow-sm transition-all cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <Calculator className="w-4 h-4 text-[#B8864B]" />
            <span>Calculate Setup Cost</span>
          </button>

          <a
            href="tel:+971566556645"
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#FAF5EC] hover:bg-[#EFEAE2] text-[#8C5E28] border border-[#DECBB5] text-sm font-bold transition-all cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-[#B8864B]" />
            <span>+971 56 655 6645</span>
          </a>
        </motion.div>

        {/* Trust Footnote */}
        <p className="text-xs text-[#64748B] pt-4">
          Brightlink Typing & Consulting • Authorized UAE Corporate Services Provider • Dubai & Northern Emirates
        </p>

      </div>
    </section>
  );
};
