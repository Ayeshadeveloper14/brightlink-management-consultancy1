import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, Clock, CheckCircle2, Award } from 'lucide-react';

export const QuickFacts = () => {
  const shouldReduceMotion = useReducedMotion();

  const facts = [
    {
      stat: '5–10',
      label: 'working days for a new visa',
      sublabel: 'Turnkey GDRFA & ICP processing'
    },
    {
      stat: '3–5',
      label: 'working days for a renewal',
      sublabel: 'Fast medical & ID renewal'
    },
    {
      stat: 'AED 4,000',
      label: 'minimum salary for most sponsors',
      sublabel: 'Spouse & children sponsorship'
    },
    {
      stat: '4.9★ 550',
      label: 'Google reviews',
      sublabel: 'Rated by verified UAE families'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#FAF7F2] border-y border-[#EBE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#DECBB5]/70">
          {facts.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-6 lg:pl-8' : ''} text-center sm:text-left flex flex-col justify-center`}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] font-heading tracking-tight mb-1 flex items-center justify-center sm:justify-start gap-1">
                <span>{item.stat}</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#8C6230] font-heading">
                {item.label}
              </div>
              <div className="text-[11px] text-[#64748B] mt-0.5">
                {item.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default QuickFacts;
