import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Landmark, Building2, Users } from 'lucide-react';

export const WhenYouNeed = () => {
  const situations = [
    {
      title: 'Courts & Legal Matters',
      desc: 'Legal documents, pleadings, court judgments, contracts, and evidentiary records requiring official Arabic translation for judicial review.',
      icon: Scale,
      tag: 'Judicial Proceedings'
    },
    {
      title: 'Visa & Government Services',
      desc: 'Certificates, passports, and civil records required for UAE residency visas, Golden Visas, citizenship files, and ministerial approvals.',
      icon: Landmark,
      tag: 'ICP, GDRFA & MOHRE'
    },
    {
      title: 'Business & Contracts',
      desc: 'Memorandums of Association (MOAs), shareholder agreements, and corporate filings used for commercial licensing, banking, and notarisation.',
      icon: Building2,
      tag: 'Commercial & Corporate'
    },
    {
      title: 'Personal & Family Documents',
      desc: 'Birth, marriage, divorce, and death certificates used for dependent family sponsorship, school enrolments, and embassy records.',
      icon: Users,
      tag: 'Civil & Family Status'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Official Use Cases
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            When You Need Legal Translation
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Under UAE federal regulations, Arabic is the sole official language of government, judicial courts, and civil registries, making certified translations mandatory for non-Arabic paperwork.
          </p>
        </div>

        {/* Clean 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {situations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#FCFAF8] border border-[#EAE1D3] hover:border-[#DECBB5] hover:shadow-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#E4D7C4] text-[#976A36] flex items-center justify-center group-hover:bg-[#B8864B] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-medium text-[#8B6B3E] bg-[#F5EDE1] px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#222222] mb-1.5 group-hover:text-[#976A36] transition-colors font-heading">
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
