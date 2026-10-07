import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export const WhatCanAWillCover = () => {
  const inclusions = [
    { title: 'Property', detail: 'Villas, freehold apartments, commercial premises, and land titles.' },
    { title: 'Bank Accounts & Financial Assets', detail: 'Current accounts, savings, fixed deposits, securities, and investment portfolios.' },
    { title: 'Business Interests & Shares', detail: 'LLC share capital, Free Zone enterprise ownership, and partnership stakes.' },
    { title: 'Personal Belongings', detail: 'Vehicles, jewelry, collections, art, and items of personal value.' },
    { title: 'Beneficiaries', detail: 'Specific allocation percentages, primary beneficiaries, and contingent successors.' },
    { title: 'Guardianship Preferences', detail: 'Nomination of permanent and interim legal guardians for children under 21.' },
    { title: 'Personal Instructions', detail: 'Executors of the will, funeral arrangements, and specific personal wishes.' }
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-t border-[#F0E8DC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Scope & Provisions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            What Can You Include?
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            A UAE will allows you to clearly identify and govern critical assets and familial responsibilities.
          </p>
        </div>

        {/* Clean Visual List */}
        <div className="bg-[#FCFAF8] rounded-2xl border border-[#E8DEC9] p-6 sm:p-8 divide-y divide-[#EFEAE2] shadow-2xs">
          {inclusions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="py-3.5 first:pt-0 last:pb-0 flex items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B8864B] shrink-0" />
                <span className="text-sm sm:text-base font-bold text-[#1A1A1A] font-heading">
                  {item.title}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-[#555555] text-right max-w-md">
                {item.detail}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
