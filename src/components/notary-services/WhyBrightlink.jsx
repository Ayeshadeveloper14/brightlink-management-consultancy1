import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, ShieldCheck, Zap } from 'lucide-react';

export const WhyBrightlink = () => {
  const points = [
    {
      title: 'Clear Guidance',
      desc: 'Understand the applicable process and required paperwork before proceeding.',
      icon: Compass
    },
    {
      title: 'Purpose-Based Documentation',
      desc: 'Support based on the specific purpose and exact scope of the legal document.',
      icon: Target
    },
    {
      title: 'Professional Assistance',
      desc: 'Careful handling of important legal, corporate, and official documents.',
      icon: ShieldCheck
    },
    {
      title: 'Smooth Process',
      desc: 'Simple communication from preparation and drafting through final notarisation.',
      icon: Zap
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#EFE5D7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Professional Standards
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            Why Choose Brightlink?
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Dedicated support helping you navigate UAE notary procedures with clarity and precision.
          </p>
        </div>

        {/* Minimal 4-Point Layout */}
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

export const WhyChooseBrightlink = WhyBrightlink;
export default WhyBrightlink;
