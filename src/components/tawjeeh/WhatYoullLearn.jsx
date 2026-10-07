import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Clock, 
  Shield, 
  Briefcase, 
  DollarSign, 
  CheckCircle2 
} from 'lucide-react';

export const WhatYoullLearn = () => {
  const topics = [
    {
      title: 'Employment Contracts',
      desc: 'Terms, job roles, probation, and contract types',
      icon: FileText
    },
    {
      title: 'Working Hours & Leave',
      desc: 'Overtime, annual leaves, and statutory rest days',
      icon: Clock
    },
    {
      title: 'Employee Rights',
      desc: 'Health, safety, end of service, and fair treatment',
      icon: Shield
    },
    {
      title: 'Employer Responsibilities',
      desc: 'Workplace safety, sponsorship rules, and obligations',
      icon: Briefcase
    },
    {
      title: 'WPS Awareness',
      desc: 'Wage Protection System and on-time salary payments',
      icon: DollarSign
    },
    {
      title: 'Workplace Compliance',
      desc: 'Official dispute escalation and labour regulations',
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Curriculum Overview
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3">
            What You'll Learn
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Every Tawjeeh orientation delivers clear, standardized coverage of key employment regulations governed by UAE labour law.
          </p>
        </div>

        {/* Clean Horizontal Information Strip / Timeline */}
        <div className="bg-[#FAF7F2] border border-[#EBE2D4] rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: index * 0.07 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step / Marker */}
                  <div className="w-11 h-11 rounded-full bg-white border-2 border-[#D8C7B0] group-hover:border-[#B8864B] group-hover:bg-[#FAF4EB] text-[#976A36] flex items-center justify-center shadow-xs transition-colors mb-3">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-sm font-bold text-[#222222] mb-1 leading-snug">
                    {topic.title}
                  </h3>

                  {/* Short Caption */}
                  <p className="text-[11px] sm:text-xs text-[#666666] leading-relaxed">
                    {topic.desc}
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
