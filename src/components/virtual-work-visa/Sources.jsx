import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ExternalLink, ShieldCheck, FileText, AlertTriangle } from 'lucide-react';

export const Sources = () => {
  const shouldReduceMotion = useReducedMotion();

  const officialSources = [
    {
      name: 'UAE Government Portal',
      description: 'Official unified portal of the UAE Federal Government',
      domain: 'u.ae',
      url: 'https://u.ae'
    },
    {
      name: 'GDRFA Dubai',
      description: 'General Directorate of Residency and Foreigners Affairs — Dubai',
      domain: 'gdrfad.gov.ae',
      url: 'https://gdrfad.gov.ae'
    },
    {
      name: 'Federal Authority ICP',
      description: 'Federal Authority for Identity, Citizenship, Customs & Port Security',
      domain: 'icp.gov.ae',
      url: 'https://icp.gov.ae'
    },
    {
      name: 'Department of Economy and Tourism (DET)',
      description: 'Work Remotely from Dubai Initiative & Tourism Guidelines',
      domain: 'visitdubai.com',
      url: 'https://www.visitdubai.com'
    },
    {
      name: 'Smart Salem',
      description: 'Dubai Health Authority (DHA) premium medical fitness test center',
      domain: 'smartsalem.ae',
      url: 'https://smartsalem.ae'
    }
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Citations & Government Authorities
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222222] tracking-tight mb-3 font-heading">
            Official Sources and References
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
            All procedural information, income rules, and authority classifications in this guide reference verified UAE government repositories.
          </p>
        </motion.div>

        {/* Sources Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {officialSources.map((source, index) => (
            <a
              key={index}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-white border border-[#EBE4D8] hover:border-[#B8864B] shadow-xs transition-all flex items-start justify-between group"
            >
              <div>
                <span className="text-xs font-bold text-[#222222] font-heading block group-hover:text-[#B8864B] transition-colors">
                  {source.name}
                </span>
                <span className="text-[11px] text-[#666666] block mt-0.5">
                  {source.description}
                </span>
                <span className="text-[10px] text-[#B8864B] font-semibold mt-1 block">
                  {source.domain}
                </span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-1 opacity-70 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        {/* Section 19: Important Legal / Regulatory Notice */}
        <div className="rounded-2xl p-6 sm:p-7 bg-[#FFFDFB] border border-[#F2DAC6] shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FDE8D7] text-[#C25E1A] flex items-center justify-center shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#9A400B] font-heading mb-2">
                Important Regulatory Notice & Disclaimer
              </h3>
              <p className="text-xs sm:text-sm text-[#7D3409] leading-relaxed">
                The information on this page reflects regulations and fee structures published by the GDRFA, ICP, and the UAE Government portal at the time of writing. Fees, eligibility criteria, document requirements, and processing timelines are subject to change without prior notice. Final approval of any visa application rests with the relevant UAE government authority. Brigitlink assists with document preparation, typing, and liaison through applicable government channels but does not issue or guarantee visa approvals.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
