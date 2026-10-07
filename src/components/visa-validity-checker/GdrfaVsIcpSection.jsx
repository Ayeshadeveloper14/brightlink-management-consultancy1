import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Building2, Globe2, ShieldCheck, Check, ArrowRight, HelpCircle } from 'lucide-react';

export const GdrfaVsIcpSection = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const comparisonRows = [
    {
      feature: 'Geographical Jurisdiction',
      gdrfa: 'Emirate of Dubai exclusively',
      icp: 'Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah'
    },
    {
      feature: 'Visa File Number Prefix',
      gdrfa: 'Starts with "201" (e.g. 201/Year/Sequence)',
      icp: 'Starts with emirate codes like "101" (Abu Dhabi) or "202" (Sharjah)'
    },
    {
      feature: 'Official Web Portal',
      gdrfa: 'smart.gdrfad.gov.ae / Amer Centers',
      icp: 'smartservices.icp.gov.ae / ICP Centers'
    },
    {
      feature: 'Dedicated Mobile App',
      gdrfa: 'DubaiNow App & GDRFA Dubai App',
      icp: 'UAEICP Smart App'
    },
    {
      feature: 'VIP Medical Fitness Testing',
      gdrfa: 'Dubai Health Authority (DHA) & Smart Salem',
      icp: 'Emirates Health Services (EHS) & SEHA Abu Dhabi'
    },
    {
      feature: 'Fine Payment Portal',
      gdrfa: 'GDRFA Fines Portal & Dubai Police App',
      icp: 'ICP Violations & Smart System Portal'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] border-t border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading: Scroll Reveal */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-[#E8DFC8] pb-6 mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Immigration Architecture Explained
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            GDRFA vs ICP: Which System Should You Use?
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed font-sans">
            One of the most frequent reasons expatriates encounter "File Not Found" errors is querying the wrong government database. Understand the clear separation of powers between Dubai and the Federal authorities.
          </p>
        </motion.div>

        {/* Editorial Narrative */}
        <div className="space-y-8 text-neutral-800 font-sans leading-relaxed text-sm sm:text-base">
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            The United Arab Emirates operates a dual-tier immigration governance model. The <strong>General Directorate of Residency and Foreigners Affairs (GDRFA)</strong> governs all residency, visit, and entry permits issued under the sovereign government of <strong>Dubai</strong>. Meanwhile, the <strong>Federal Authority for Identity, Citizenship, Customs and Port Security (ICP)</strong> regulates immigration records across the remaining six emirates.
          </motion.p>

          {/* Quick Identification Tip */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.985 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            whileHover={shouldReduceMotion ? {} : { y: -2 }}
            className="p-5 rounded-xl bg-white border border-[#EBE4D8] shadow-xs flex items-start gap-4 hover:border-[#B8864B]/40 transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 font-bold font-heading shadow-xs">
              TIP
            </div>
            <div className="text-xs sm:text-sm text-[#475569]">
              <strong className="text-[#0F172A]">How to identify your issuing authority in 3 seconds:</strong> Check your electronic visa document or residency approval PDF. Look at your <em>File Number</em>: if the first three digits are <strong className="text-[#0F172A]">201</strong>, your visa is processed under <strong>GDRFA Dubai</strong>. If it begins with any other code (such as 101 for Abu Dhabi or 202 for Sharjah), check with the <strong>Federal ICP</strong>.
            </div>
          </motion.div>

          {/* Side-by-Side Comparison Table: Smooth Fade-Up with subtle scale */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="mt-8 overflow-hidden rounded-2xl border border-[#DECBB5] bg-white shadow-xs hover:shadow-md transition-shadow"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF7F2] border-b border-[#DECBB5]">
                    <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-[#64748B] w-1/3 font-heading">
                      Immigration Feature
                    </th>
                    <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-[#0F172A] w-1/3 border-l border-[#DECBB5] font-heading">
                      GDRFA (Dubai Only)
                    </th>
                    <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-[#8C6230] w-1/3 border-l border-[#DECBB5] font-heading">
                      ICP (Federal Emirates)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EBE4D8] text-xs sm:text-sm">
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="hover:bg-[#FAF9F6] transition-colors">
                      <td className="py-3.5 px-5 font-semibold text-[#0F172A]">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-5 text-[#475569] border-l border-[#DECBB5]">
                        {row.gdrfa}
                      </td>
                      <td className="py-3.5 px-5 text-[#475569] border-l border-[#DECBB5]">
                        {row.icp}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <div className="pt-2 flex items-center justify-between flex-wrap gap-4 text-xs text-slate-500">
            <span>Still unsure whether your residency file is registered under GDRFA or ICP?</span>
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { x: 2 }}
              onClick={() => onOpenConsultation('GDRFA vs ICP File Inquiry')}
              className="font-bold text-[#B8864B] hover:text-[#976A36] underline cursor-pointer transition-colors"
            >
              Let our typing center verify it for you →
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GdrfaVsIcpSection;
