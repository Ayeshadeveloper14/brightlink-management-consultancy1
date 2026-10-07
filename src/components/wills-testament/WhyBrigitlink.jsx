import React from 'react';
import { motion } from 'framer-motion';
import { Compass, FileEdit, Landmark, CheckCircle2 } from 'lucide-react';

export const WhyBrigitlink = () => {
  const points = [
    {
      title: 'Clear Guidance',
      desc: 'Understand the documentation and process before proceeding.',
      icon: Compass
    },
    {
      title: 'Draft Coordination',
      desc: 'Support with organising and coordinating the will draft.',
      icon: FileEdit
    },
    {
      title: 'Registration Support',
      desc: 'Assistance with appointment preparation and submission.',
      icon: Landmark
    },
    {
      title: 'End-to-End Follow-Up',
      desc: 'A structured process from document preparation through registration.',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#EFE5D7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            The Brigitlink Approach
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            Why Choose Brigitlink?
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Structured assistance providing clarity, discretion, and reliable coordination for your estate planning needs.
          </p>
        </div>

        {/* 4 Concise Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: idx * 0.07 }}
                className="bg-white rounded-2xl p-5 border border-[#E8DEC9] hover:border-[#DECBB5] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] flex items-center justify-center mb-3.5 shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#222222] mb-1 font-heading">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {pt.desc}
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

export const WhyChooseBrigitlink = WhyBrigitlink;
export default WhyBrigitlink;
