import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, FileText, ArrowRight } from 'lucide-react';

export const Documents = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const docList = [
    'Passport copy (6+ months validity)',
    'Passport-size photo with white background',
    'Entry permit / current UAE visa copy',
    'Emirates ID (if existing UAE resident)',
    'Medical fitness test result',
    'Application form signed by sponsor / self',
    'Trade license copy of the UAE company',
    'Memorandum of Association (MOA) listing you as shareholder'
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#F1EBE1]">
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
            Documents · Visa documents
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            What You Need to Provide
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] font-sans">
            Have digital copies of these 8 standard documents ready when filing.
          </p>
        </motion.div>

        {/* 8 Document Checklist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {docList.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-5 rounded-2xl bg-[#FCFAF8] border border-[#DECBB5] shadow-2xs flex items-center gap-3.5 hover:bg-white hover:border-[#B8864B] transition-all"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="text-sm font-semibold text-[#0F172A]">
                {doc}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Documents;
