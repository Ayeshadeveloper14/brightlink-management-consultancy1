import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';

export const Eligibility = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const criteria = [
    'Shareholder or director of a UAE-registered company',
    'Active business license (Free Zone or Mainland)',
    'Memorandum of Association (MOA) listing you as shareholder',
    'Minimum share capital varies by emirate (typically AED 50K-300K)',
    'Clean medical fitness test (blood + chest X-ray)',
    'No prior UAE visa violations'
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] border-b border-[#F1EBE1]">
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
            Investor Visa · Eligibility
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-2">
            Who Can Apply
          </h2>
          <p className="text-sm sm:text-base text-[#64748B]">
            All applicants must satisfy standard UAE immigration and corporate prerequisites.
          </p>
        </motion.div>

        {/* Criteria Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {criteria.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-2xl bg-white border border-[#DECBB5] shadow-2xs flex items-start gap-3.5 hover:border-[#B8864B] transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-sm font-semibold text-[#0F172A] leading-snug">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Quick Check Strip */}
        <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#DECBB5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-[#64748B]">
            Have an existing trade license or setting up a new Free Zone company?
          </div>
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Investor Visa Eligibility Check')}
            className="px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white text-xs font-bold transition-colors cursor-pointer shrink-0"
          >
            Check My Eligibility Free
          </button>
        </div>

      </div>
    </section>
  );
};

export default Eligibility;
