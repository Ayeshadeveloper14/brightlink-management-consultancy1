import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Landmark, ShieldCheck, Globe, KeyRound } from 'lucide-react';

export const GovernmentAuthorities = () => {
  const shouldReduceMotion = useReducedMotion();

  const authorities = [
    {
      name: 'GDRFA Dubai',
      desc: 'General Directorate of Residency and Foreigners Affairs Dubai'
    },
    {
      name: 'ICP',
      desc: 'Federal Authority for Identity, Citizenship, Customs & Port Security'
    },
    {
      name: 'MOFA UAE',
      desc: 'Ministry of Foreign Affairs — Document Legalization & Attestation'
    },
    {
      name: 'UAE Pass',
      desc: 'National Digital Identity for Government Smart Services'
    },
    {
      name: 'u.ae Portal',
      desc: 'The Official Portal of the United Arab Emirates Government'
    }
  ];

  return (
    <section className="py-14 lg:py-16 bg-[#FAF7F2] border-t border-[#DECBB5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#8C6230] font-heading block mb-1">
            Official Channels
          </span>
          <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading">
            Official UAE Government Authorities
          </h3>
        </div>

        {/* 5 Authorities Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {authorities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EBE4D8] shadow-2xs text-center flex flex-col justify-center items-center hover:border-[#B8864B] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] mb-2.5">
                <Landmark className="w-5 h-5" />
              </div>
              <strong className="text-xs sm:text-sm font-bold text-[#0F172A] font-heading block">
                {item.name}
              </strong>
              <span className="text-[10px] text-[#64748B] mt-1 leading-tight line-clamp-2">
                {item.desc}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[11px] text-[#64748B] mt-6 max-w-2xl mx-auto">
          Brigitlink and 800 DOCS LLC SOC operate as an authorized private government documentation typing center facilitating filings through these official authorities. We are not a government agency.
        </p>

      </div>
    </section>
  );
};

export default GovernmentAuthorities;
