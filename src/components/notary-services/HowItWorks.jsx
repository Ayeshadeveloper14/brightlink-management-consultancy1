import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileEdit, CheckSquare, Stamp, FileCheck } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      num: '01',
      title: 'Share Your Requirement',
      desc: 'Tell us what document or Power of Attorney you need and its intended purpose.',
      icon: MessageSquare
    },
    {
      num: '02',
      title: 'Document Preparation',
      desc: 'The applicable document is prepared according to the required purpose and information.',
      icon: FileEdit
    },
    {
      num: '03',
      title: 'Review & Approval',
      desc: 'Review the document and confirm the details before notarisation.',
      icon: CheckSquare
    },
    {
      num: '04',
      title: 'Notarisation',
      desc: 'Complete the applicable notarisation process through the relevant authority or available remote service.',
      icon: Stamp
    },
    {
      num: '05',
      title: 'Receive Your Document',
      desc: 'Receive the completed notarised document according to the agreed process.',
      icon: FileCheck
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#EFE5D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Sequential Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            A structured, transparent 5-step journey from initial consultation to final legal issuance.
          </p>
        </div>

        {/* Timeline: Connected line on desktop, clean vertical on mobile */}
        <div className="relative">
          
          {/* Desktop Connecting Line */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#DECBB5] via-[#B8864B] to-[#DECBB5] z-0" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="flex flex-col items-center text-center lg:items-center relative group"
                >
                  {/* Step Bubble & Icon */}
                  <div className="relative mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#D8C7B0] group-hover:border-[#B8864B] text-[#976A36] group-hover:text-[#B8864B] flex items-center justify-center shadow-xs transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="absolute -top-2.5 -right-2 bg-gradient-to-br from-[#C5985B] to-[#976A36] text-white text-[11px] font-extrabold px-2 py-0.5 rounded-full shadow-xs">
                      {step.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-[#1A1A1A] mb-1 font-heading group-hover:text-[#976A36] transition-colors leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#555555] leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
