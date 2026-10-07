import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FolderDown, FileEdit, CheckCheck, Landmark, Info } from 'lucide-react';

export const TheProcess = () => {
  const steps = [
    {
      num: '01',
      title: 'Consultation & Review',
      desc: 'Understand the family situation, assets and registration objectives.',
      icon: MessageSquare
    },
    {
      num: '02',
      title: 'Document Collection',
      desc: 'Gather identification, asset information and supporting documents.',
      icon: FolderDown
    },
    {
      num: '03',
      title: 'Draft Preparation',
      desc: 'Prepare or coordinate the will draft according to the requirements.',
      icon: FileEdit
    },
    {
      num: '04',
      title: 'Review & Finalise',
      desc: 'Carefully review the document before registration.',
      icon: CheckCheck
    },
    {
      num: '05',
      title: 'Registration Support',
      desc: 'Assist with appointment preparation, submission and registration coordination.',
      icon: Landmark
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-[#FAF7F2] border-t border-[#EFE5D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B8864B]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#B8864B] uppercase font-heading">
              ESTATE REGISTRATION JOURNEY
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            The Will Registration Process
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            A thorough and structured step-by-step workflow designed to deliver full statutory validity and peace of mind.
          </p>
        </div>

        {/* 5-Step Connected Timeline (Horizontal on desktop, vertical on mobile) */}
        <div className="relative mb-12">
          
          {/* Desktop Connecting Line */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-[44px] left-[7%] right-[7%] h-[2px] bg-gradient-to-r from-[#D8C7B0] via-[#B8864B] to-[#976A36] z-0" 
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
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#D8C7B0] group-hover:border-[#B8864B] text-[#976A36] group-hover:text-[#B8864B] flex items-center justify-center shadow-md transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="absolute -top-2.5 -right-2 bg-gradient-to-br from-[#C5985B] to-[#976A36] text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full shadow-xs">
                      {step.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-[#1A1A1A] mb-1.5 font-heading group-hover:text-[#976A36] transition-colors leading-snug">
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

        {/* Small Note */}
        <div className="max-w-3xl mx-auto rounded-xl bg-white border border-[#DECBB5] p-4 text-center text-xs text-[#666666] flex items-center justify-center gap-2 shadow-2xs">
          <Info className="w-4 h-4 text-[#B8864B] shrink-0" />
          <span>
            The registration route, authority and formalities may vary depending on the will type, applicant profile and applicable legal framework.
          </span>
        </div>

      </div>
    </section>
  );
};
