import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Fingerprint,
  Zap,
  Calendar
} from 'lucide-react';

export const MedicalHelpCtaSection = ({ onOpenConsultation }) => {
  const handleWhatsApp = () => {
    const query = encodeURIComponent("Hello Brightlink, I don't want to figure out the Visa Medical & Emirates ID process alone. Can your team assist me with a VIP fast-track booking?");
    window.open(`https://wa.me/971566556645?text=${query}`, '_blank');
  };

  const benefits = [
    {
      title: 'Zero-Wait VIP Lounge Access',
      desc: 'Immediate check-in at Smart Salem executive suites with autonomous robotic blood draw.',
      icon: Zap
    },
    {
      title: 'Simultaneous EID Biometrics',
      desc: 'We coordinate your ICP fingerprinting and medical screening in a single seamless visit.',
      icon: Fingerprint
    },
    {
      title: 'Pre-Audit & Document Prep',
      desc: 'Our typing officers inspect entry permits, visas, and passport validity to ensure zero rejection.',
      icon: ShieldCheck
    },
    {
      title: '30-Minute Express Certificate',
      desc: 'Receive official DHA SMS and authenticated digital fitness certificate directly on your phone.',
      icon: Clock
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#1D1B18] text-white relative overflow-hidden rounded-3xl border border-[#B8864B]/30 shadow-xl my-16">
      {/* Background ambient gold aura */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8864B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B8864B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 space-y-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#F5D7A1] text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#F5D7A1]" />
            <span className="uppercase tracking-wider text-[11px] font-bold">
              White-Glove Concierge Service
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            Don't Want to Figure It Out Alone?
          </h3>

          <p className="text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed font-normal">
            Navigating DHA medical centers, chest X-ray exemptions, and ICP biometrics queues can be confusing. Let Brightlink’s authorized government typing officers handle the entire scheduling and document coordination for you.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#B8864B]/50 transition-colors space-y-2 backdrop-blur-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-[#B8864B]/20 border border-[#B8864B]/40 flex items-center justify-center text-[#F5D7A1]">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#25D366]/25 transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp (Instant Help)</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onOpenConsultation?.('VIP Medical & EID Concierge Booking')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 text-white font-bold text-xs sm:text-sm shadow-md shadow-[#B8864B]/20 transition-all cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" />
            <span>Book VIP Concierge</span>
          </motion.button>
        </div>

        <div className="text-center pt-2">
          <span className="text-[11px] text-neutral-400">
            ⚡ Typical VIP appointment confirmed within 15 minutes during business hours
          </span>
        </div>
      </div>
    </section>
  );
};

export default MedicalHelpCtaSection;
