import React from 'react';
import { motion } from 'framer-motion';
import { Send, FileSearch, ClipboardCheck, CheckCircle2 } from 'lucide-react';

export const TrusteeHowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Send the transaction details',
      description: "Tell us if it's sale transfer, gift transfer, mortgage release, title deed or valuation support.",
      icon: Send
    },
    {
      number: '02',
      title: 'We review the papers',
      description: 'We check identity documents, ownership papers, POA, NOC, bank documents, company papers and missing items.',
      icon: FileSearch
    },
    {
      number: '03',
      title: 'You receive the action list',
      description: "We tell you what's ready, what's missing and what must be arranged before trustee submission.",
      icon: ClipboardCheck
    },
    {
      number: '04',
      title: 'Proceed with confidence',
      description: 'Once the file is ready, you move to appointment, payment, signing and completion steps.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              Step-by-Step
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-3">
            How it works
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-[#B8864B]">
            Simple process. Clear responsibility.
          </p>
        </div>

        {/* 4-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative bg-[#FCFAF8] rounded-2xl p-7 border border-[#EFEAE2] hover:border-[#B8864B]/60 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                {/* Step Connector Line for Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-[2px] bg-[#E6D7C3] z-10" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold font-heading text-[#B8864B]/35 group-hover:text-[#B8864B] transition-colors">
                      {step.number}
                    </span>

                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center shadow-xs group-hover:bg-[#B8864B] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#222222] mb-3 leading-snug group-hover:text-[#B8864B] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#555555] leading-relaxed font-normal">
                    {step.description}
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
