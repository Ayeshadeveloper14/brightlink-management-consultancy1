import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Calendar, Users, Award } from 'lucide-react';

export const ProcessWorkflow = () => {
  const steps = [
    {
      step: '01',
      title: 'Share Your Requirements',
      desc: 'Send employee details, entry permit or contract draft, and establishment information.',
      icon: ClipboardList
    },
    {
      step: '02',
      title: 'Schedule the Session',
      desc: 'We arrange the preferred date, time slot, and authorized center location or virtual stream.',
      icon: Calendar
    },
    {
      step: '03',
      title: 'Complete Tawjeeh Orientation',
      desc: 'Employees attend the official orientation covering labour rights and workplace regulations.',
      icon: Users
    },
    {
      step: '04',
      title: 'Receive Completion Certificate',
      desc: 'Obtain the official MOHRE Tawjeeh certificate required to complete residency stamping.',
      icon: Award
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FCFAF8] border-t border-[#F0E8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Step-By-Step Journey
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            A seamless, compliant 4-step process from initial documentation check to certificate issuance.
          </p>
        </div>

        {/* Process Steps: Connected horizontal line on desktop, vertical on mobile */}
        <div className="relative">
          
          {/* Desktop Connecting Line (hidden on mobile/tablet) */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#DECBB5] via-[#B8864B] to-[#DECBB5] z-0" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center sm:items-start sm:text-left lg:items-center lg:text-center relative"
                >
                  {/* Step Bubble & Icon */}
                  <div className="relative mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#D8C7B0] text-[#976A36] flex items-center justify-center shadow-sm group-hover:border-[#B8864B]">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="absolute -top-2.5 -right-2 bg-[#976A36] text-white text-[11px] font-extrabold px-2 py-0.5 rounded-full shadow-xs">
                      {item.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#222222] mb-1.5 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-xs">
                    {item.desc}
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
