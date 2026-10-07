import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Scale, 
  Building2, 
  Layers, 
  FileText,
  DollarSign
} from 'lucide-react';

export const IloeExplanationSection = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const comparisonTiers = [
    {
      feature: 'Eligible Basic Salary',
      catA: 'AED 16,000 or below',
      catB: 'Above AED 16,000'
    },
    {
      feature: 'Monthly Premium (+ VAT)',
      catA: 'AED 5.00 / month',
      catB: 'AED 10.00 / month'
    },
    {
      feature: 'Annual Premium (+ VAT)',
      catA: 'AED 60.00 / year',
      catB: 'AED 120.00 / year'
    },
    {
      feature: 'Monthly Benefit Rate',
      catA: '60% of basic salary',
      catB: '60% of basic salary'
    },
    {
      feature: 'Maximum Monthly Payout',
      catA: 'AED 10,000 / month',
      catB: 'AED 20,000 / month'
    },
    {
      feature: 'Maximum Compensation Duration',
      catA: '3 consecutive months',
      catB: '3 consecutive months'
    },
    {
      feature: 'Total Maximum Benefit',
      catA: 'Up to AED 30,000',
      catB: 'Up to AED 60,000'
    }
  ];

  const mandatoryWho = [
    'Private sector employees working across mainland UAE (MOHRE)',
    'Federal government employees in ministries and federal entities',
    'Expatriate workers and UAE national employees',
    'Employees in participating Free Zones (DIFC, ADGM, DMCC, TECOM, etc.)'
  ];

  const exemptWho = [
    'Investors and business owners who own 100% of the establishment',
    'Domestic helpers and household workers',
    'Temporary workers and seasonal contract holders',
    'Juveniles under 18 years of age',
    'Retirees receiving a state or military pension who resumed work'
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] border-t border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Scroll Reveal */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-[#E8DFC8] pb-6 mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Federal Decree-Law No. 13 of 2022
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            ILOE insurance in the UAE, explained
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed font-sans">
            The Involuntary Loss of Employment (ILOE) scheme is a mandatory social protection security system introduced by the UAE Ministry of Human Resources and Emiratisation (MOHRE).
          </p>
        </motion.div>

        {/* Editorial Body */}
        <div className="space-y-12 text-neutral-800 font-sans leading-relaxed text-sm sm:text-base">
          
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            Unlike traditional commercial insurance policies, ILOE is a federally mandated unemployment safety net administered by a consortium of leading UAE insurers led by <strong>Dubai Insurance Company</strong>. Its purpose is to provide temporary cash compensation to employees who lose their livelihoods due to corporate restructuring, redundancy, or company insolvency, granting them financial peace of mind while securing new employment in the UAE.
          </motion.p>

          {/* Who Must Subscribe vs Who is Exempt: Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mandatory Column */}
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-2xl border border-[#DECBB5] shadow-xs"
            >
              <div className="flex items-center gap-2 mb-4 text-[#0F172A]">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-base sm:text-lg font-heading">Who Must Subscribe (Mandatory)</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#475569]">
                {mandatoryWho.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8864B] shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Exempt Column */}
            <motion.div 
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs"
            >
              <div className="flex items-center gap-2 mb-4 text-[#0F172A]">
                <XCircle className="w-5 h-5 text-slate-400" />
                <h3 className="font-bold text-base sm:text-lg font-heading">Who is Exempt from ILOE</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-[#475569]">
                {exemptWho.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

          {/* Premiums and Categories Comparison Table */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading">
                Premiums and Categories Comparison
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                The scheme splits all salaried workers into two distinct salary tiers based strictly on basic salary.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#DECBB5] bg-white shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAF7F2] border-b border-[#DECBB5]">
                      <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-[#64748B] w-1/3 font-heading">
                        Scheme Parameter
                      </th>
                      <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-[#0F172A] w-1/3 border-l border-[#DECBB5] font-heading">
                        Category A (Basic ≤ 16K)
                      </th>
                      <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-[#8C6230] w-1/3 border-l border-[#DECBB5] font-heading">
                        Category B (Basic &gt; 16K)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EBE4D8] text-xs sm:text-sm">
                    {comparisonTiers.map((row, i) => (
                      <tr key={i} className="hover:bg-[#FAF9F6] transition-colors">
                        <td className="py-3.5 px-5 font-semibold text-[#0F172A]">
                          {row.feature}
                        </td>
                        <td className="py-3.5 px-5 text-[#475569] border-l border-[#DECBB5]">
                          {row.catA}
                        </td>
                        <td className="py-3.5 px-5 text-[#475569] border-l border-[#DECBB5]">
                          {row.catB}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default IloeExplanationSection;
