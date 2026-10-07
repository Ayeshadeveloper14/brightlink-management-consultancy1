import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, HelpCircle, CheckCircle2 } from 'lucide-react';

const FAQS = [
  {
    question: 'What salary do I need to sponsor my wife or husband?',
    answer: 'The general threshold is AED 4,000 a month, or AED 3,000 if your employer provides accommodation. The figure is read from your labour contract or salary certificate, not from allowances you receive informally. Parents are assessed at a much higher level — around AED 20,000 — with extra conditions on housing and insurance.'
  },
  {
    question: 'My family member is already in Dubai on a visit visa. Do they have to fly out?',
    answer: 'No. If your family member is already in the UAE on a visit, tourist, or cancelled residency visa, we execute an in-country status change. Their residency transitions seamlessly without an airport border run.'
  },
  {
    question: 'Which certificates need attestation, and can you do it?',
    answer: 'Marriage certificates (for spouses) and birth certificates (for children) must be attested by the issuing country, the UAE Embassy there, and the UAE Ministry of Foreign Affairs (MOFA). We manage the complete attestation chain and certified Arabic legal translation.'
  },
  {
    question: 'How long does a Dubai family visa take with 800 DOCS?',
    answer: 'A new family visa typically takes 5–10 working days from file opening to stamped passport delivery. Renewals take 3–5 working days. Express VIP medical options (results in 30 minutes) are available if you are in a rush.'
  },
  {
    question: 'Can a woman sponsor her husband and children?',
    answer: 'Yes. A female resident can sponsor her husband and children if her basic salary is at least AED 10,000 per month (or AED 8,000 plus company accommodation), subject to profession eligibility.'
  },
  {
    question: 'What is the family file, and do I need one?',
    answer: 'A family file is the master immigration record opened with GDRFA (in Dubai) or ICP under the sponsor’s Emirates ID. It is required before your first dependent visa can be issued.'
  },
  {
    question: 'Do I have to come to your office?',
    answer: 'No. The entire process runs online and on WhatsApp. You photograph your documents, we file the applications, and our courier picks up and returns your originals and stamped passports anywhere in Dubai.'
  },
  {
    question: 'What do you charge on top of the government fees?',
    answer: 'We charge a clear, fixed PRO file management fee quoted upfront on WhatsApp. Every government fee (GDRFA, ICP, DHA, Emirates ID) is charged exactly at cost with official receipts provided.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#F1EBE1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            07 — Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Family visa questions we answer every day.
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="divide-y divide-[#EBE4D8] border-y border-[#EBE4D8] mb-10">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5 transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-start justify-between gap-4 cursor-pointer group"
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors font-heading ${
                    isOpen ? 'text-[#B8864B]' : 'text-[#0F172A] group-hover:text-[#B8864B]'
                  }`}>
                    {item.question}
                  </span>
                  
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                    isOpen 
                      ? 'bg-[#B8864B] border-[#B8864B] text-white rotate-180' 
                      : 'border-[#DECBB5] text-[#8C6230] bg-[#FCFAF8] group-hover:border-[#B8864B]'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={shouldReduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 pr-10 text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Schedule Verification Date Note */}
        <div className="text-center text-xs text-[#8C6230] flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
          <span>Rules and fees checked against the GDRFA / ICP schedule on 4 September 2026.</span>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
