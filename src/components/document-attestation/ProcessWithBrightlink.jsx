import React from 'react';
import { motion } from 'framer-motion';
import { Upload, SearchCheck, RefreshCw, CheckCircle2 } from 'lucide-react';

export const ProcessWithBrightlink = () => {
  const steps = [
    {
      num: '01',
      title: 'Share Your Documents',
      desc: 'Tell us what document you need to attest, where it was issued, and how it will be used in the UAE.',
      icon: Upload
    },
    {
      num: '02',
      title: 'Document Review',
      desc: 'Our specialists inspect your papers and explain the exact required steps, timelines, and costs upfront.',
      icon: SearchCheck
    },
    {
      num: '03',
      title: 'Attestation Processing',
      desc: 'We coordinate embassy submissions, government verifications, and MOFA electronic legalization.',
      icon: RefreshCw
    },
    {
      num: '04',
      title: 'Completion',
      desc: 'Your attested document is safely delivered with official seals ready for immediate official submission.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#EFE5D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Turnkey Assistance
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3">
            How Brightlink Makes It Easier
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            From initial document assessment to final delivery, we remove bureaucratic complexity and international courier risks.
          </p>
        </div>

        {/* 4 Steps in a Clean Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E8DEC9] hover:border-[#B8864B] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] group-hover:bg-[#B8864B] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-xs font-extrabold text-[#B8864B] font-heading">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#222222] mb-1.5 group-hover:text-[#976A36] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
