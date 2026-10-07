import React from 'react';
import { motion } from 'framer-motion';
import { Heart, FileText, UserCheck, ShieldAlert } from 'lucide-react';

export const WhyAWillMatters = () => {
  const points = [
    {
      title: 'Protect Your Family',
      desc: 'Provide clearer direction for dependents and beneficiaries.',
      icon: Heart
    },
    {
      title: 'Protect Your Wishes',
      desc: 'Record your intentions regarding assets and personal matters.',
      icon: FileText
    },
    {
      title: 'Plan Guardianship',
      desc: 'Record guardianship preferences for minor children where applicable.',
      icon: UserCheck
    },
    {
      title: 'Reduce Uncertainty',
      desc: 'Create a clearer and more structured approach to future estate matters.',
      icon: ShieldAlert
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FCFAF8] border-y border-[#F0E8DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Section */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Estate Certainty & Security
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-4 font-heading">
            Why Is a Will Important?
          </h2>
          <p className="text-base text-[#555555] leading-relaxed">
            A properly prepared and registered will can help clarify how assets, responsibilities, guardianship preferences and personal wishes should be handled.
          </p>
        </div>

        {/* Editorial 4-Point Horizontal Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t border-[#EFEAE2]">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="space-y-2 group"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-[#E4D7C4] text-[#976A36] group-hover:bg-[#B8864B] group-hover:text-white flex items-center justify-center transition-colors shadow-2xs">
                  <Icon className="w-4 h-4 stroke-[1.8]" />
                </div>
                <h3 className="text-base font-bold text-[#1A1A1A] font-heading group-hover:text-[#976A36] transition-colors">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {pt.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
