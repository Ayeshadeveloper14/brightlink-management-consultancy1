import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Calendar, AlertCircle } from 'lucide-react';

export const GoodToKnow = () => {
  const shouldReduceMotion = useReducedMotion();

  const deadlines = [
    {
      number: '60 days',
      description: 'from entry-permit issue to complete the residence stamping when the family member arrives from abroad.'
    },
    {
      number: '120 days',
      description: 'from birth to put a newborn on a residence visa. After that, overstay fines start to accrue.'
    },
    {
      number: '30 days',
      description: 'grace period after a dependent visa expires — renew before it, and the file needs no entry permit.'
    },
    {
      number: '6 months',
      description: 'outside the UAE and a standard residence visa lapses. Golden Visa holders are exempt from this rule.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            05 — Good to know
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            The dates that cost money if you miss them.
          </h2>
        </motion.div>

        {/* 4 Cards with Visually Dominant Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deadlines.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              className="p-7 rounded-3xl bg-[#FCFAF8] border border-[#DECBB5] shadow-xs hover:border-[#B8864B] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-[#0F172A] font-heading tracking-tight mb-4 text-[#B8864B]">
                  {item.number}
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#DECBB5]/70 flex items-center gap-1.5 text-[11px] font-semibold text-[#8C6230]">
                <Calendar className="w-3.5 h-3.5" />
                <span>Statutory Deadline</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GoodToKnow;
