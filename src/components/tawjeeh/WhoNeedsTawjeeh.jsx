import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Building, RefreshCw, Layers } from 'lucide-react';

export const WhoNeedsTawjeeh = () => {
  const categories = [
    {
      title: 'New Employees',
      desc: 'Orientation for employees joining a UAE mainland private-sector company to ensure awareness of labour laws before starting work.',
      icon: UserPlus,
      tag: 'Mandatory Orientation'
    },
    {
      title: 'New Companies',
      desc: 'Guidance for newly registered establishments fulfilling workforce orientation obligations and MOHRE compliance files.',
      icon: Building,
      tag: 'Establishment Onboarding'
    },
    {
      title: 'Employees Changing Employers',
      desc: 'Relevant orientation and certification support where applicable during internal job transfers and contract transitions.',
      icon: RefreshCw,
      tag: 'Contract Transition'
    },
    {
      title: 'Establishment Updates',
      desc: 'Support related to Tawjeeh requirements during applicable quota adjustments, category changes, or establishment updates.',
      icon: Layers,
      tag: 'Regulatory Alignment'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Applicability & Coverage
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3">
            Who Needs Tawjeeh?
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Tawjeeh orientation applies across private-sector organizations to maintain high labor standards and regulatory transparency.
          </p>
        </div>

        {/* 2x2 Clean Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#FCFAF8] border border-[#EAE1D3] hover:border-[#DECBB5] hover:shadow-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#E8DEC9] text-[#976A36] flex items-center justify-center group-hover:bg-[#B8864B] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-medium text-[#8B6B3E] bg-[#F5EDE1] px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#222222] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
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
