import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  DollarSign, 
  Receipt, 
  CheckCircle2, 
  ArrowRight, 
  Info,
  Calculator,
  ShieldAlert
} from 'lucide-react';

export const GovernmentFees = ({ onOpenCalculator, onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCase, setSelectedCase] = useState(0);

  const feeCases = [
    {
      title: 'Spouse, new visa',
      subtitle: 'Employment sponsor · first family file · outside UAE',
      total: 'AED 1,579',
      breakdown: [
        { label: 'File Opening (GDRFA/ICP)', cost: 'AED 269' },
        { label: 'Entry Permit (Outside UAE)', cost: 'AED 490' },
        { label: 'Medical Fitness Screening', cost: 'AED 320' },
        { label: 'Emirates ID (2 Years)', cost: 'AED 370' },
        { label: 'Visa Stamping Fee', cost: 'AED 130' }
      ]
    },
    {
      title: 'Two children, already in the UAE',
      subtitle: 'Employment sponsor · existing family file · status change',
      total: 'AED 4,766',
      breakdown: [
        { label: 'Entry Permits (Inside UAE x 2)', cost: 'AED 2,360' },
        { label: 'Status Changes (x 2)', cost: 'AED 1,360' },
        { label: 'Emirates IDs (2 Years x 2)', cost: 'AED 740' },
        { label: 'Visa Stamping (x 2)', cost: 'AED 306' }
      ]
    },
    {
      title: 'Spouse, renewal',
      subtitle: 'Medical · Emirates ID · stamping — no entry permit',
      total: 'AED 1,037',
      breakdown: [
        { label: 'Renewal Medical Screening', cost: 'AED 320' },
        { label: 'Emirates ID Renewal (2 Years)', cost: 'AED 370' },
        { label: 'Residence Stamping Renewal', cost: 'AED 347' }
      ]
    },
    {
      title: 'Spouse and child of a Golden Visa holder',
      subtitle: '10-year dependents · first family file',
      total: 'AED 8,284',
      breakdown: [
        { label: '10-Year Family File Opening', cost: 'AED 510' },
        { label: '10-Year Entry Permits & Status', cost: 'AED 2,120' },
        { label: '10-Year Emirates IDs (2 Persons)', cost: 'AED 2,180' },
        { label: '10-Year Residence Stamping', cost: 'AED 3,474' }
      ]
    }
  ];

  const currentCase = feeCases[selectedCase];

  const handleOpenEstimator = () => {
    if (onOpenCalculator) {
      onOpenCalculator();
    } else if (onOpenConsultation) {
      onOpenConsultation('Family Visa Fee Estimator');
    } else {
      const el = document.getElementById('fee-finder');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] border-t border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            04 — Government fees
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Every dirham, before you start.
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed font-sans">
            Four common cases from the live fee sheet. Tap one to change the answers and see the receipt.
          </p>
        </motion.div>

        {/* 4 Fee Case Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {feeCases.map((item, idx) => {
            const isSelected = selectedCase === idx;
            return (
              <motion.button
                key={idx}
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={() => setSelectedCase(idx)}
                className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#FAF5EC] border-[#B8864B] shadow-md shadow-[#B8864B]/10 ring-2 ring-[#B8864B]/20'
                    : 'bg-white border-[#DECBB5] hover:border-[#B8864B]/60'
                }`}
              >
                <div>
                  <div className="text-xs font-bold text-[#8C6230] font-heading mb-1.5 uppercase tracking-wider">
                    Case {idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#DECBB5]/70">
                  <span className="text-lg font-black text-[#0F172A] font-heading">
                    {item.total}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Interactive Receipt Panel for Selected Case */}
        <motion.div
          key={selectedCase}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 sm:p-8 rounded-3xl bg-white border border-[#DECBB5] shadow-xs mb-8 space-y-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8DFC8]">
            <div>
              <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider block font-heading">
                Receipt Breakdown
              </span>
              <h4 className="text-lg font-bold text-[#0F172A] font-heading">
                {currentCase.title}
              </h4>
            </div>
            <div className="text-right">
              <span className="text-xs text-[#64748B] block">Total Government Fees:</span>
              <span className="text-2xl font-black text-[#0F172A] font-heading">{currentCase.total}</span>
            </div>
          </div>

          <div className="divide-y divide-[#EBE4D8] text-xs sm:text-sm">
            {currentCase.breakdown.map((row, i) => (
              <div key={i} className="py-2.5 flex justify-between items-center text-[#475569]">
                <span>{row.label}</span>
                <strong className="text-[#0F172A]">{row.cost}</strong>
              </div>
            ))}
          </div>

          <div className="pt-2 flex justify-between items-center text-xs text-slate-400">
            <span>Official GDRFA / ICP / DHA receipt receipts included</span>
            <span className="text-emerald-700 font-semibold">Zero Markups on Gov Fees</span>
          </div>
        </motion.div>

        {/* Supporting Disclaimer & CTA */}
        <div className="space-y-6">
          <div className="flex items-start gap-2.5 p-4 rounded-xl bg-[#FAF7F2] border border-[#DECBB5] text-xs text-[#64748B] leading-relaxed">
            <Info className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
            <p>
              Investor and partner sponsors also place a refundable immigration deposit of AED 3,000 per dependent. Health insurance and our service fee are quoted separately and are not part of these figures.
            </p>
          </div>

          <div className="text-center">
            <motion.button
              type="button"
              whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={handleOpenEstimator}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#0F172A] hover:bg-[#B8864B] transition-colors shadow-sm cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#F5D7A1]" />
              <span>Open the fee estimator</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GovernmentFees;
