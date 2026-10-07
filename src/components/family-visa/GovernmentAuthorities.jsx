import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Building2, Landmark, Scale, FileCheck, Globe } from 'lucide-react';

export const GovernmentAuthorities = () => {
  const shouldReduceMotion = useReducedMotion();

  const authorities = [
    { name: 'GDRFA Dubai', desc: 'General Directorate of Residency and Foreigners Affairs' },
    { name: 'ICP', desc: 'Federal Authority for Identity, Citizenship, Customs & Port Security' },
    { name: 'MOFA UAE', desc: 'Ministry of Foreign Affairs — Document Attestation' },
    { name: 'MOHRE', desc: 'Ministry of Human Resources and Emiratisation' },
    { name: 'Dubai Economy', desc: 'Department of Economy and Tourism (DET)' },
    { name: 'Dubai Land Dept.', desc: 'Ejari Tenancy Attestation & Freehold Title' },
    { name: 'Ministry of Justice', desc: 'Certified Legal Arabic Translation' },
    { name: 'u.ae Portal', desc: 'Official UAE Government Smart Services' }
  ];

  return (
    <section className="py-14 lg:py-16 bg-[#FAF7F2] border-t border-[#DECBB5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#8C6230] font-heading block mb-1">
            Official Direct Linkages
          </span>
          <h3 className="text-base font-bold text-[#0F172A] font-heading">
            Government Authorities & Clearances
          </h3>
        </div>

        {/* Authorities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {authorities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              className="p-3.5 rounded-xl bg-white border border-[#EBE4D8] shadow-2xs text-center flex flex-col justify-center items-center hover:border-[#B8864B] transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] mb-2 shrink-0">
                <Landmark className="w-4 h-4" />
              </div>
              <strong className="text-xs font-bold text-[#0F172A] font-heading block">
                {item.name}
              </strong>
              <span className="text-[9.5px] text-[#64748B] mt-1 leading-tight line-clamp-2">
                {item.desc}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GovernmentAuthorities;
