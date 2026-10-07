import React from 'react';
import { motion } from 'framer-motion';
import { Users, Home, Building2, UserPlus, Globe } from 'lucide-react';

export const WhoShouldConsider = () => {
  const groups = [
    {
      title: 'Families',
      desc: 'For people who want greater clarity for their dependents and beneficiaries.',
      icon: Users
    },
    {
      title: 'Property Owners',
      desc: 'For individuals with UAE or other property interests.',
      icon: Home
    },
    {
      title: 'Business Owners',
      desc: 'For people with companies, shares or partnership interests.',
      icon: Building2
    },
    {
      title: 'Parents',
      desc: 'For those who want to record guardianship preferences for minor children.',
      icon: UserPlus
    },
    {
      title: 'Expatriates',
      desc: 'For residents who want clearer estate planning based on their circumstances.',
      icon: Globe
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
              Estate Preparedness
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-4 font-heading">
              Who Should Consider a Will?
            </h2>
            <p className="text-sm text-[#555555] leading-relaxed mb-6">
              In the absence of a registered will, local statutory intestacy procedures apply by default. Establishing a formal will ensures your exact intentions are protected under UAE law.
            </p>
            <div className="p-4 rounded-xl bg-[#FCFAF8] border border-[#DECBB5] text-xs text-[#8B6B3E] font-medium leading-relaxed">
              Applicable for both Muslim and non-Muslim residents under dedicated Dubai Courts and DIFC Wills registration frameworks.
            </div>
          </div>

          {/* Right Column: 5 Target Groups in a Clean Stack */}
          <div className="lg:col-span-7 space-y-3">
            {groups.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className="p-4 rounded-xl bg-[#FCFAF8] border border-[#EAE0D1] hover:border-[#DECBB5] flex items-center gap-4 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E4D7C4] text-[#976A36] flex items-center justify-center shrink-0 shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#222222] font-heading">
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

      </div>
    </section>
  );
};
