import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Landmark, Scale } from 'lucide-react';

export const WhenYouMayNeed = () => {
  const categories = [
    {
      title: 'Property & Real Estate',
      desc: 'Support for authorisations related to buying, selling, leasing, mortgaging or managing property.',
      icon: Home
    },
    {
      title: 'Business & Companies',
      desc: 'Support for company representation, management, signing contracts and related business matters.',
      icon: Building2
    },
    {
      title: 'Banking & Finance',
      desc: 'Authorisations for handling banking and financial matters on behalf of another person where applicable.',
      icon: Landmark
    },
    {
      title: 'Court & Legal Matters',
      desc: 'Power of Attorney and authorisation for legal representatives and official proceedings.',
      icon: Scale
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Applicable Circumstances
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            When You May Need Notary Services
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Official notarisation empowers authorized representatives to execute transactions with full statutory legitimacy across key sectors.
          </p>
        </div>

        {/* Clean 4-Part Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="p-5 rounded-2xl bg-[#FCFAF8] border border-[#EAE1D3] hover:border-[#DECBB5] hover:shadow-2xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E4D7C4] text-[#976A36] group-hover:bg-[#B8864B] group-hover:text-white flex items-center justify-center mb-3.5 transition-colors shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <h3 className="text-base font-bold text-[#222222] mb-1.5 font-heading group-hover:text-[#976A36] transition-colors">
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
