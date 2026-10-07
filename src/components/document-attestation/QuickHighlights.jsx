import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, HeartHandshake, Briefcase, Stamp } from 'lucide-react';

export const QuickHighlights = () => {
  const highlights = [
    {
      title: 'Educational Documents',
      subtitle: 'Degrees, Diplomas & Transcripts',
      icon: GraduationCap
    },
    {
      title: 'Personal & Civil Documents',
      subtitle: 'Marriage, Birth & Police Clearances',
      icon: HeartHandshake
    },
    {
      title: 'Commercial Documents',
      subtitle: 'Trade Licences, MOAs & POAs',
      icon: Briefcase
    },
    {
      title: 'MOFA & Embassy Attestation',
      subtitle: 'Consular Legalization & Final Stamps',
      icon: Stamp
    }
  ];

  return (
    <section className="bg-[#FAF7F2] border-y border-[#EFE5D7] py-6 sm:py-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="flex items-center gap-3 py-1 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E3D6C3] text-[#976A36] group-hover:bg-[#B8864B] group-hover:text-white flex items-center justify-center shrink-0 shadow-2xs transition-colors">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-[#1A1A1A] truncate group-hover:text-[#976A36] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#666666] truncate">
                    {item.subtitle}
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
