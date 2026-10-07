import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Users, Scale, ShieldCheck } from 'lucide-react';

export const WhatIsTawjeeh = () => {
  const highlights = [
    {
      title: 'MOHRE Orientation',
      desc: 'Official curriculum established by the Ministry of Human Resources and Emiratisation.',
      icon: Compass
    },
    {
      title: 'Employee Awareness',
      desc: 'Clear insight into contracts, safety regulations, and fair work conditions.',
      icon: Users
    },
    {
      title: 'Labour Law Guidance',
      desc: 'Practical understanding of UAE Federal Decree-Law No. 33 of 2021.',
      icon: Scale
    },
    {
      title: 'Compliance Support',
      desc: 'Protection for companies and employees against legal and administrative violations.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FCFAF8] border-y border-[#F0E8DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clear, concise explanation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
              Orientation & Labour Law
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-5">
              What is Tawjeeh?
            </h2>
            <div className="space-y-4 text-[#555555] text-sm sm:text-base leading-relaxed">
              <p>
                Tawjeeh is a dedicated awareness and guidance initiative mandated by the UAE Ministry of Human Resources and Emiratisation (MOHRE). The program introduces workforce members and enterprise teams to their statutory employment rights, contractual commitments, and workplace responsibilities.
              </p>
              <p>
                By delivering structured orientation sessions across accredited centers and virtual platforms, Tawjeeh fosters harmonious workplace relationships, helps prevent dispute escalation, and ensures employers uphold UAE labor and wage protection standards.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Compact visual information panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DEC9] shadow-sm">
              <div className="text-xs font-semibold text-[#8B6B3E] uppercase tracking-wider mb-4 border-b border-[#F0E8DC] pb-2">
                Program Core Pillars
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#FAF6F0] border border-[#EFE4D3] hover:border-[#DECBB5] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#B8864B]/15 text-[#976A36] flex items-center justify-center mb-2.5">
                        <Icon className="w-4 h-4 stroke-[2]" />
                      </div>
                      <h3 className="text-sm font-bold text-[#222222] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#666666] leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
