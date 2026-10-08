import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageSquare, ArrowRight, UserCheck, ShieldCheck, Briefcase } from 'lucide-react';

export const ConsultationCTA = ({ onOpenConsultation, onScrollToForm }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello Brightlink! I want to schedule a free consultation with a Senior Consultant regarding the UAE Investor Visa.'
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-24 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Luxury Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8864B] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#3B82F6] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          {/* Left Text & CTA (7 cols) */}
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#F5D7A1] text-[11px] font-bold tracking-wider uppercase font-heading">
              Free consultation
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-heading">
              Apply for Investor Visa
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-xl">
              Get direct guidance from licensed corporate documentation specialists on setting up your Free Zone or Mainland company residency file.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={() => {
                  if (onScrollToForm) onScrollToForm();
                  else if (onOpenConsultation) onOpenConsultation('Investor Visa Application');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-[#0F172A] bg-gradient-to-r from-[#F5D7A1] via-[#E2C08D] to-[#C5985B] hover:brightness-105 shadow-md transition-all cursor-pointer font-sans"
              >
                <span>Apply for Investor Visa</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={handleWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#20BD5A] shadow-md shadow-[#25D366]/20 transition-all cursor-pointer font-sans"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </motion.button>
            </div>
          </div>

          {/* Right Consultant Trust Block (5 cols) */}
          <div className="md:col-span-5">
            <div className="p-7 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 space-y-5">
              <div className="flex items-center gap-3.5 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-[#B8864B] text-white flex items-center justify-center font-bold">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white font-heading">
                    Senior consultant
                  </h4>
                  <p className="text-xs text-[#F5D7A1]">
                    Dedicated Corporate PRO Team
                  </p>
                </div>
              </div>

              {/* Exact Statistics */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <strong className="text-2xl sm:text-3xl font-bold text-white font-heading block">
                    58
                  </strong>
                  <span className="text-[11px] text-slate-300 leading-tight block mt-1">
                    Businesses under ongoing support
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <strong className="text-2xl sm:text-3xl font-bold text-[#F5D7A1] font-heading block">
                    250+
                  </strong>
                  <span className="text-[11px] text-slate-300 leading-tight block mt-1">
                    Successful projects
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ConsultationCTA;
