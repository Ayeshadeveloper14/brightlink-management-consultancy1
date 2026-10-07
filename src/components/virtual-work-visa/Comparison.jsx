import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, X, ArrowRight, Sparkles, Info } from 'lucide-react';

export const Comparison = () => {
  const shouldReduceMotion = useReducedMotion();

  const comparisonData = [
    {
      feature: 'Sponsor',
      virtualWork: 'Self-sponsored',
      employment: 'Employer-sponsored',
      green: 'Self-sponsored',
      golden: 'Self-sponsored'
    },
    {
      feature: 'Employment',
      virtualWork: 'Outside UAE only',
      employment: 'UAE-based employer',
      green: 'UAE-based',
      golden: 'Varies by category'
    },
    {
      feature: 'Validity',
      virtualWork: '1 year',
      employment: '2–3 years',
      green: '5 years',
      golden: '5 or 10 years'
    },
    {
      feature: 'Minimum income',
      virtualWork: 'USD 3,500/month',
      employment: 'Varies by role',
      green: 'AED 15,000/month',
      golden: 'Varies by category'
    },
    {
      feature: 'Family sponsorship',
      virtualWork: 'Yes',
      employment: 'Yes',
      green: 'Yes',
      golden: 'Yes'
    },
    {
      feature: 'Local work permit',
      virtualWork: 'Not applicable',
      employment: 'Required (MoHRE)',
      green: 'Not required',
      golden: 'Not required'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] relative border-b border-[#F1EBE1]">
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
              Residency Comparison
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Virtual Work Visa vs Other UAE Residence Options
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Applicants sometimes confuse the virtual work visa with other residency categories. The table below clarifies the key differences.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-[#EBE4D8] shadow-sm overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#FAF8F5] border-b border-[#EFEAE2] text-xs font-bold uppercase tracking-wider text-[#777777] font-heading">
                  <th className="py-4 px-6 w-1/5">Feature</th>
                  <th className="py-4 px-6 w-1/5 text-[#B8864B] bg-[#FAF5EC]/60">Virtual Work Visa</th>
                  <th className="py-4 px-6 w-1/5">Employment Visa</th>
                  <th className="py-4 px-6 w-1/5">Green Visa</th>
                  <th className="py-4 px-6 w-1/5">Golden Visa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5EFE6] text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FCFAF8] transition-colors">
                    <td className="py-4 px-6 font-bold text-[#222222] font-heading">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 font-semibold text-[#976A36] bg-[#FAF5EC]/30">
                      {row.virtualWork}
                    </td>
                    <td className="py-4 px-6 text-[#555555]">
                      {row.employment}
                    </td>
                    <td className="py-4 px-6 text-[#555555]">
                      {row.green}
                    </td>
                    <td className="py-4 px-6 text-[#555555]">
                      {row.golden}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparative Guidance */}
        <div className="p-6 rounded-2xl bg-white border border-[#EBE4D8] shadow-xs">
          <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
            Professionals who work for a UAE employer require a standard employment visa. Those seeking longer-term self-sponsored residency may consider the Green Visa or the Golden Visa, depending on their qualifications and investment profile.
          </p>
        </div>

      </div>
    </section>
  );
};
