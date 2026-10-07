import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export const TrusteeFinalCtaSection = () => {
  const handleWhatsApp = () => {
    const query = encodeURIComponent('Hello Brightlink, I am ready for my Dubai property trustee transaction. Please check my file and provide an action list.');
    window.open(`https://wa.me/971566556645?text=${query}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-24 bg-[#141414] text-white relative overflow-hidden">
      {/* Background Graphic & Glows */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-[#1C1A17] to-black opacity-95" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B8864B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
        
        {/* Live Active Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#F5D7A1] text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="uppercase tracking-wider text-[11px] font-bold">
            Trustee Audit Desk Online
          </span>
        </div>

        {/* Heading: Ready to move? Let us check the file first. */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Ready to move? <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5D7A1] via-[#E2B774] to-[#C5985B]">Let us check the file first.</span>
        </h2>

        {/* Body: Before you visit the trustee office, send the documents on WhatsApp and get a clear action list. No confusion, no unnecessary running around. */}
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Before you visit the trustee office, send the documents on WhatsApp and get a clear action list. No confusion, no unnecessary running around.
        </p>

        {/* Dominant CTA: WhatsApp us */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-base shadow-2xl shadow-[#25D366]/35 transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>WhatsApp us</span>
          </motion.button>
        </div>

        {/* Supporting Trust Badges */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
            <span>Zero-error file preparation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#B8864B]" />
            <span>Fast turnaround audit</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
            <span>Authorized Dubai Land Department procedures</span>
          </div>
        </div>

      </div>
    </section>
  );
};
