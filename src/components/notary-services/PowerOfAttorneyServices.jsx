import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Home, Building2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const PowerOfAttorneyServices = ({ onOpenConsultation }) => {
  const navigate = useNavigate();

  const poaTypes = [
    {
      title: 'General Power of Attorney',
      desc: 'Broad authority allowing a trusted person to act on your behalf across multiple matters including administrative, government, and personal affairs.',
      icon: Shield,
      tag: 'Comprehensive Scope'
    },
    {
      title: 'Special / Specific Power of Attorney',
      desc: 'Authority limited strictly to a particular task, transaction, or singular legal procedure without granting broader powers.',
      icon: Target,
      tag: 'Defined Authority'
    },
    {
      title: 'Property Power of Attorney',
      desc: 'Authority specifically related to buying, selling, leasing, mortgaging, gifting, or managing residential and commercial real estate.',
      icon: Home,
      tag: 'DLD & Real Estate'
    },
    {
      title: 'Corporate Power of Attorney',
      desc: 'Authority for company management, shareholder representation, entering commercial contracts, and banking-related corporate transactions.',
      icon: Building2,
      tag: 'Business & Commercial'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#EFE5D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Legal Instrument Categories
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            Power of Attorney Services
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Carefully drafted legal instruments customized to grant exact legal powers while protecting principal interests and assets.
          </p>
        </div>

        {/* Clean 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {poaTypes.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DEC9] hover:border-[#DECBB5] shadow-xs flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] group-hover:bg-[#B8864B] group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-[11px] font-medium text-[#8B6B3E] bg-[#F5EDE1] px-2.5 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-2 font-heading group-hover:text-[#976A36] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F2ECE2]">
                  <button
                    type="button"
                    onClick={() => onOpenConsultation ? onOpenConsultation(`POA: ${item.title}`) : navigate('/contact')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#976A36] hover:text-[#B8864B] transition-colors cursor-pointer"
                  >
                    <span>Prepare {item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
