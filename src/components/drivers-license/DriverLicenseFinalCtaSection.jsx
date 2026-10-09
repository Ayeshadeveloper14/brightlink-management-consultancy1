import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  PhoneCall, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Car 
} from 'lucide-react';

export const DriverLicenseFinalCtaSection = () => {
  const handleWhatsApp = () => {
    const query = encodeURIComponent("Hello Brightlink, I need help with my UAE Driver's License application / foreign license swap.");
    window.open(`https://wa.me/971566556645?text=${query}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-24 bg-[#141414] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#1C1A17] to-black opacity-95" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#B8864B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#F5D7A1] text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="uppercase tracking-wider text-[11px] font-bold">
            RTA Typing Desk Online
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Need Help With Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D7A1] via-[#E2B774] to-[#C5985B]">
            UAE Driver's License?
          </span>
        </h2>

        {/* Body */}
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
          From country eligibility checks and eye test bookings to Golden Visa test exemptions, our certified typing officers guide you every step of the way.
        </p>

        {/* CTAs: Dominant WhatsApp + Urgent Call */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base shadow-2xl shadow-[#25D366]/35 transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp Us Now</span>
          </motion.button>

          <a
            href="tel:8003627"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-all cursor-pointer whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4 text-[#F5D7A1]" />
            <span>Call 800 DOCS (3627)</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
            <span>Zero Queue RTA Appointments</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#B8864B]" />
            <span>Fast Same-Day Eye Test Booking</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
            <span>Official Legal Translation Services</span>
          </div>
        </div>

      </div>
    </section>
  );
};
