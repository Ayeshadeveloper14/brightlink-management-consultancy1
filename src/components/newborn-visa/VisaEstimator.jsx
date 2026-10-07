import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calculator, ArrowRight, CheckCircle2, Info, Sparkles } from 'lucide-react';

export const VisaEstimator = ({ onOpenCalculator, onScrollToCalculator }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleGetExactFigure = () => {
    if (onScrollToCalculator) {
      onScrollToCalculator();
    } else if (onOpenCalculator) {
      onOpenCalculator();
    }
  };

  const exampleItems = [
    { name: 'Birth certificate', cost: 'AED 70' },
    { name: 'MOFA attestation', cost: 'AED 150' },
    { name: 'Emirates ID', cost: 'AED 355' },
    { name: 'Visa stamping', cost: 'AED 410' }
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
            Newborn Family Visa in Dubai and the UAE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-3">
            Newborn Visa Estimator
          </h2>
          <p className="text-sm text-[#64748B]">
            Example government breakdown for infants born to UAE residents.
          </p>
        </motion.div>

        {/* Example Breakdown Card */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-[#DECBB5] bg-[#FCFAF8] overflow-hidden shadow-xs"
        >
          {/* Header */}
          <div className="bg-[#FAF7F2] p-5 px-6 border-b border-[#DECBB5] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading block">
                newborn visa estimator
              </span>
              <h3 className="text-base font-bold text-[#0F172A] font-heading">
                Example · Newborn (2-Year sponsor)
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 bg-white px-3 py-1.5 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live gov fees</span>
            </div>
          </div>

          {/* Items */}
          <div className="divide-y divide-[#EBE4D8] text-xs sm:text-sm">
            {exampleItems.map((item, idx) => (
              <div key={idx} className="p-4 sm:p-5 flex justify-between items-center hover:bg-white transition-colors">
                <span className="font-medium text-[#0F172A]">{item.name}</span>
                <strong className="font-bold text-[#0F172A] font-heading">{item.cost}</strong>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="p-6 bg-white border-t-2 border-[#B8864B] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading block">
                Government fees
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-[#0F172A] font-heading block text-emerald-800">
                AED 985
              </span>
            </div>

            <div>
              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={handleGetExactFigure}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs text-white bg-[#0F172A] hover:bg-[#B8864B] transition-all cursor-pointer shadow-sm font-sans"
              >
                <span>Get my exact figure</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Explanatory Note */}
        <p className="text-center text-xs text-[#64748B] mt-4">
          Note: Displayed AED 985 is an example based on standard government fees. Use the live calculator below for your exact figure.
        </p>

      </div>
    </section>
  );
};

export default VisaEstimator;
