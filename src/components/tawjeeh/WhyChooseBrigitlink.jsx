import React from 'react';
import { motion } from 'framer-motion';
import { Compass, FileCheck, CalendarCheck, Zap } from 'lucide-react';

export const WhyChooseBrigitlink = () => {
  const points = [
    {
      title: 'Professional Guidance',
      desc: 'Expert PRO advisors well-versed in UAE labour regulations ensure accurate session preparation.',
      icon: Compass
    },
    {
      title: 'Clear Documentation Support',
      desc: 'Complete pre-checking of labour contracts and passports avoids rejection or scheduling delays.',
      icon: FileCheck
    },
    {
      title: 'Flexible Session Options',
      desc: 'Coordination for physical center attendance or virtual orientation sessions for eligible staff.',
      icon: CalendarCheck
    },
    {
      title: 'Smooth & Efficient Process',
      desc: 'Swift receipt of official completion certificates, directly supporting prompt visa stamping.',
      icon: Zap
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-t border-[#F0E8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            The Brigitlink Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3">
            Why Choose Brigitlink?
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Dedicated government liaison specialists providing end-to-end guidance for your enterprise and employees.
          </p>
        </div>

        {/* 4 Concise Points - Visually Light Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="p-5 rounded-2xl bg-[#FCFAF8] border border-[#ECE2D2] hover:border-[#DECBB5] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E4D7C4] text-[#976A36] flex items-center justify-center mb-3.5 shadow-2xs">
                    <Icon className="w-4 h-4 stroke-[2]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#222222] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
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
