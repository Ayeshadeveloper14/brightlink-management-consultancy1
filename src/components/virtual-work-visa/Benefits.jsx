import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Home, 
  UserCheck, 
  Users, 
  Coins, 
  Layers, 
  CheckCircle2, 
  Info 
} from 'lucide-react';

export const Benefits = () => {
  const shouldReduceMotion = useReducedMotion();

  const benefitsList = [
    {
      title: 'Access to resident services',
      description: 'Holders gain legal residency status, which enables access to accommodation, utilities, telecommunications, healthcare, and banking services available to UAE residents.',
      icon: Home
    },
    {
      title: 'No local employer required',
      description: 'The visa is self-sponsored and does not require a UAE employment contract, work permit, or sponsoring company.',
      icon: UserCheck
    },
    {
      title: 'Family sponsorship',
      description: 'Visa holders may sponsor their spouse and children for the duration of the residency, subject to meeting the income and documentation requirements.',
      icon: Users
    },
    {
      title: 'Zero personal income tax',
      description: 'The UAE does not levy personal income tax on individuals. Remote workers retain their full earnings while residing in the country.',
      icon: Coins
    },
    {
      title: 'Flexible application channels',
      description: 'Applications can be submitted online through GDRFA or ICP digital platforms, or in person through authorised Amer centres.',
      icon: Layers
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFFFFF] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Key Advantages
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Benefits of the UAE Virtual Work Visa
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Experience world-class living standards, premier digital infrastructure, and full UAE residency status while keeping your international remote career.
          </p>
        </motion.div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {benefitsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="bg-[#FCFAF8] rounded-2xl p-6 sm:p-7 border border-[#EFEAE2] hover:border-[#DECBB5] hover:bg-white transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] text-[#B8864B] border border-[#E6D7C3] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#222222] font-heading mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F5EFE6] flex items-center gap-1.5 text-xs font-semibold text-[#B8864B]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Advantage</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Important Tax Disclaimer */}
        <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EFEAE2] flex items-start gap-3 text-xs text-[#666666] leading-relaxed">
          <Info className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
          <span>
            *Tax Advisory Notice: While the UAE imposes zero personal income tax on residents, obtaining a UAE residence visa does not automatically eliminate tax liabilities or reporting duties in your home country or country of citizenship. Always consult a licensed international tax adviser.
          </span>
        </div>

      </div>
    </section>
  );
};
