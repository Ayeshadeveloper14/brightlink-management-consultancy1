import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Clock, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export const VisaOverview = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleFreeQuote = () => {
    if (onOpenConsultation) {
      onOpenConsultation('Maid Visa / Domestic Worker Sponsorship');
    } else {
      const text = encodeURIComponent(
        'Hello Brightlink! I would like to get a free quote for sponsoring a domestic worker / maid.'
      );
      window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
    }
  };

  const steps = [
    { title: 'Entry permit & status change', desc: 'Initial entry permit or in-country status adjustment' },
    { title: 'DHA medical + Emirates ID', desc: 'Medical fitness typing and biometric appointment' },
    { title: 'MOHRE labour contract', desc: 'Official Ministry domestic employment contract' },
    { title: 'GDRFA residency stamping', desc: 'Digital residency issuance and physical card delivery' }
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#FFFFFF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-gradient-to-br from-[#FCFAF8] to-[#FAF5EC] border border-[#EBE4D8] p-8 sm:p-10 lg:p-12 shadow-sm"
        >
          {/* Top Label & Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#EBE4D8]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C6230] text-[11px] font-bold uppercase tracking-wider mb-2 font-heading">
                <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
                <span>End-to-End Service</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-heading tracking-tight">
                Domestic worker visa
              </h2>
              <p className="text-sm sm:text-base font-semibold text-[#B8864B] mt-1 font-heading">
                We handle it end-to-end
              </p>
            </div>

            {/* Processing Note */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-[#DECBB5] text-xs font-bold text-[#0F172A] shadow-2xs shrink-0">
              <Clock className="w-4 h-4 text-[#B8864B] shrink-0" />
              <span>100% online · stamping in 5–7 working days</span>
            </div>
          </div>

          {/* 4 Feature Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/90 border border-[#EBE4D8]/80 shadow-2xs hover:border-[#B8864B]/60 transition-colors"
              >
                <div className="w-7 h-7 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0 mt-0.5 font-bold text-xs">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0F172A] font-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#EBE4D8]">
            <div className="flex items-center gap-2 text-xs text-[#64748B]">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Direct typing via official GDRFA and MOHRE portals</span>
            </div>

            <button
              type="button"
              onClick={handleFreeQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-[#0F172A] hover:bg-[#B8864B] transition-colors cursor-pointer shadow-sm font-sans"
            >
              <span>Get a free quote</span>
              <span className="text-base leading-none">→</span>
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default VisaOverview;
