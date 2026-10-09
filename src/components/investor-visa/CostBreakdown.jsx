import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calculator, Info, CheckCircle2, ArrowRight } from 'lucide-react';

export const CostBreakdown = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const pricingRows = [
    { item: 'Insight service fee', amount: 'AED 2,500', note: 'Full application prep, filing & follow-up' },
    { item: 'Visa fee', amount: 'AED 3,000', note: 'Immigration entry permit & electronic residence approval' },
    { item: 'Medical fitness test', amount: 'AED 390', note: 'Standard DHA blood screening and chest X-ray' },
    { item: 'Biometrics and Emirates ID', amount: 'AED 450', note: 'Federal identity card typing and 2-3 year card issuance' }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#F1EBE1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Cost
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-3">
            Cost Breakdown
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] font-sans">
            Government fees + Insight service fee. No hidden costs.
          </p>
        </motion.div>

        {/* Pricing Card Table */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-[#DECBB5] bg-[#FCFAF8] overflow-hidden shadow-xs mb-8"
        >
          <div className="bg-[#FAF7F2] p-4 px-6 border-b border-[#DECBB5] flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#0F172A] font-heading">
            <span>Item</span>
            <span>Amount</span>
          </div>

          <div className="divide-y divide-[#EBE4D8] text-xs sm:text-sm">
            {pricingRows.map((row, idx) => (
              <div key={idx} className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-white transition-colors">
                <div>
                  <span className="font-bold text-[#0F172A] block">{row.item}</span>
                  <span className="text-[11px] text-[#64748B]">{row.note}</span>
                </div>
                <strong className="text-sm sm:text-base font-bold text-[#0F172A] shrink-0 font-heading">
                  {row.amount}
                </strong>
              </div>
            ))}
          </div>

          {/* Prominent Total Row */}
          <div className="p-6 bg-white border-t-2 border-[#B8864B] flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading block">
                Total estimate
              </span>
              <span className="text-[11px] text-[#64748B]">
                Complete investor visa package
              </span>
            </div>
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-black text-[#0F172A] font-heading block text-emerald-800">
                AED 6,340
              </span>
            </div>
          </div>
        </motion.div>

        {/* Exact Disclaimer */}
        <div className="flex items-start gap-2.5 p-4 rounded-xl bg-[#FAF7F2] border border-[#DECBB5] text-xs text-[#64748B] leading-relaxed mb-8">
          <Info className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
          <p>
            Estimates only. Final quote depends on dependents, urgency and current government fees. We confirm in writing within 24 hours.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CostBreakdown;
