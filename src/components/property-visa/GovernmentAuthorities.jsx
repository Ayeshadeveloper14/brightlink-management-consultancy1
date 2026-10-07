import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Landmark, ShieldCheck, Globe, Building } from 'lucide-react';

export const GovernmentAuthorities = () => {
  const shouldReduceMotion = useReducedMotion();

  const authorities = [
    {
      name: 'Dubai Land Department',
      sub: 'Official Freehold Property Registry & Title Deed Authority'
    },
    {
      name: 'GDRFA Dubai',
      sub: 'General Directorate of Residency & Foreigners Affairs Dubai'
    },
    {
      name: 'ICP',
      sub: 'Federal Authority for Identity, Citizenship, Customs & Port Security'
    },
    {
      name: 'u.ae portal',
      sub: 'The Official Portal of the UAE Government'
    }
  ];

  return (
    <section className="py-14 lg:py-16 bg-[#FAF7F2] border-t border-[#DECBB5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#8C6230] font-heading block mb-1">
            Government Registry & Compliance
          </span>
          <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading">
            Official UAE Government authorities for property and residency:
          </h3>
        </div>

        {/* 4 Authorities Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {authorities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              className="p-5 rounded-2xl bg-white border border-[#EBE4D8] shadow-2xs text-center flex flex-col justify-center items-center hover:border-[#B8864B] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] mb-2.5">
                <Landmark className="w-5 h-5" />
              </div>
              <strong className="text-sm font-bold text-[#0F172A] font-heading block">
                {item.name}
              </strong>
              <span className="text-[11px] text-[#64748B] mt-1 leading-tight">
                {item.sub}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Clear Distinction Disclaimer */}
        <p className="text-center text-[11px] text-[#64748B] mt-6 max-w-2xl mx-auto">
          800 DOCS LLC SOC is an authorized private documentation and typing center facilitating electronic filings with these official authorities. We are not a government agency.
        </p>

      </div>
    </section>
  );
};

export default GovernmentAuthorities;
