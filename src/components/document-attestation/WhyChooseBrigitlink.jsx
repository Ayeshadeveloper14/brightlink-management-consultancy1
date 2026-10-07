import React from 'react';
import { motion } from 'framer-motion';
import { Layers, FileCheck, MessageSquare, Shield } from 'lucide-react';

export const WhyChooseBrigitlink = () => {
  const points = [
    {
      title: 'End-to-End Assistance',
      desc: 'Seamless coordination across all required attestation stages, from home-country authentication to the UAE Embassy and final MOFA verification.',
      icon: Layers
    },
    {
      title: 'Clear Requirements',
      desc: 'We thoroughly assess your certificates upfront so you know exactly what documents, forms, and translations are needed before processing starts.',
      icon: FileCheck
    },
    {
      title: 'Transparent Communication',
      desc: 'Real-time status updates throughout the legalization chain, with upfront itemized costs and no unexpected administrative surcharges.',
      icon: MessageSquare
    },
    {
      title: 'Professional Handling',
      desc: 'Secure chain of custody and insured courier dispatch protocols to ensure your original diplomas, certificates, and commercial records are safe.',
      icon: Shield
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#EFE5D7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Heading and Summary */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
              The Brigitlink Guarantee
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-4">
              Why Choose Brigitlink?
            </h2>
            <p className="text-sm text-[#555555] leading-relaxed mb-6">
              Document attestation demands meticulous legal compliance and secure international document tracking. Our dedicated government liaison team ensures your records are processed accurately and returned without delay.
            </p>
            <div className="p-4 rounded-xl bg-white border border-[#DECBB5] shadow-2xs text-xs text-[#8B6B3E] font-medium">
              Over 15+ years experience handling government and consular attestation across 60+ countries.
            </div>
          </div>

          {/* Right Column: Compact 4-Point Vertical List */}
          <div className="lg:col-span-7 space-y-4">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="bg-white rounded-xl p-4 sm:p-5 border border-[#E8DEC9] hover:border-[#DECBB5] flex items-start gap-4 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#222222] mb-1 font-heading">
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
