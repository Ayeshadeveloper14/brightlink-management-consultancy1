import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Car, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';

export const DriverMidCtaSection = ({ onOpenConsultation }) => {
  const handleWhatsApp = () => {
    const query = encodeURIComponent("Hello BrightLink, I would like to verify if my foreign driver's license can be directly exchanged in Dubai without tests.");
    window.open(`https://wa.me/971566556645?text=${query}`, '_blank');
  };

  return (
    <section className="py-16 lg:py-20 bg-[#1D1B18] text-white relative overflow-hidden rounded-3xl border border-[#B8864B]/30 shadow-xl my-10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8864B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#F5D7A1] text-xs font-semibold">
          <Car className="w-3.5 h-3.5 text-[#F5D7A1]" />
          <span className="uppercase tracking-wider text-[11px] font-bold">
            15-Minute RTA Eligibility Check
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
          Unsure If Your Country's License Can Be Converted?
        </h3>

        <p className="text-xs sm:text-sm md:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Send a photo of your current foreign driving license on WhatsApp. Our authorized RTA typing officers will check the official exemption lists and give you an immediate action plan.
        </p>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#25D366]/25 transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Send License on WhatsApp</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onOpenConsultation?.("Driver's License Consultation")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 text-white font-bold text-xs sm:text-sm shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Book Free Case Review</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
