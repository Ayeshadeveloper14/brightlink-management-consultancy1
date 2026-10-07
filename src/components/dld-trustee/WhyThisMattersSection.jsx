import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, MessageSquareQuote, Users2, FileCheck2, ArrowRight } from 'lucide-react';

export const WhyThisMattersSection = ({ onOpenConsultation }) => {
  const benefits = [
    {
      title: 'Avoid missing documents',
      description: 'We review the papers before the appointment.',
      icon: ShieldAlert
    },
    {
      title: 'Move faster',
      description: 'Understand the exact transaction flow before visiting.',
      icon: Zap
    },
    {
      title: 'Get practical guidance',
      description: 'Clear advice without complicated legal language.',
      icon: MessageSquareQuote
    },
    {
      title: 'Support for agents',
      description: 'Useful for brokers handling multiple client files.',
      icon: Users2
    }
  ];

  const handleCheckDocuments = () => {
    const query = encodeURIComponent('Hello Brightlink, I would like to check my property trustee documents before my appointment.');
    window.open(`https://wa.me/971566556645?text=${query}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              Key Value
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-5">
            Why this matters
          </h2>

          {/* Highlighted Statement */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border-l-4 border-[#B8864B] shadow-xs mb-6">
            <p className="text-xl sm:text-2xl font-bold text-[#222222] leading-snug">
              "A trustee visit should be the final step, not the first confusion."
            </p>
          </div>

          {/* Body */}
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Many people go to a trustee office without understanding what is missing — that creates delay, frustration and sometimes extra visits. We check the file first and tell you exactly what has to be arranged.
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-[#EFEAE2] hover:border-[#B8864B]/60 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center mb-5 group-hover:bg-[#B8864B] group-hover:text-white transition-all shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#222222] mb-2 leading-snug group-hover:text-[#B8864B] transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Action CTA: Check my documents */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl bg-[#1D1B18] text-white shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#F5D7A1]">
              Document Verification Desk
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Avoid appointment rejection with a prior document audit
            </h4>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCheckDocuments}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#B8864B]/30 transition-all cursor-pointer whitespace-nowrap"
          >
            <FileCheck2 className="w-4 h-4" />
            <span>Check my documents</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

      </div>
    </section>
  );
};
