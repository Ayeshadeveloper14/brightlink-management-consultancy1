import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileCheck2, Route, Zap } from 'lucide-react';

export const WhyBrigitlink = () => {
  const points = [
    {
      title: 'Professional Translation',
      desc: 'Clear, legally sound, and terminologically accurate translation formatted specifically for official review.',
      icon: Award
    },
    {
      title: 'Document-Focused Support',
      desc: 'Comprehensive expertise spanning judicial court records, personal status files, educational degrees, and corporate documents.',
      icon: FileCheck2
    },
    {
      title: 'Clear Process',
      desc: 'Transparent, uncomplicated workflow from initial digital submission through review to final certified issuance.',
      icon: Route
    },
    {
      title: 'Efficient Service',
      desc: 'Prompt communication, reliable turnaround timeframes, and convenient digital delivery alongside hardcopy options.',
      icon: Zap
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-t border-[#F0E8DC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Summary */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
              Brigitlink Standards
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-4 font-heading">
              Why Choose Brigitlink?
            </h2>
            <p className="text-sm text-[#555555] leading-relaxed mb-6">
              Legal documents carry significant legal weight. Our dedicated translation coordinators ensure every page adheres strictly to UAE formatting and linguistic conventions.
            </p>
            <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#DECBB5] text-xs text-[#8B6B3E] font-medium">
              Over 20+ years of government and legal liaison excellence across Dubai and the UAE.
            </div>
          </div>

          {/* Right: Compact 4-Point Vertical List */}
          <div className="lg:col-span-7 space-y-3.5">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="bg-[#FCFAF8] rounded-xl p-4 sm:p-5 border border-[#E8DEC9] hover:border-[#DECBB5] flex items-start gap-4 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-[#E4D7C4] text-[#976A36] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Icon className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#222222] mb-0.5 font-heading">
                      {pt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export const WhyChooseBrigitlink = WhyBrigitlink;
export default WhyBrigitlink;
