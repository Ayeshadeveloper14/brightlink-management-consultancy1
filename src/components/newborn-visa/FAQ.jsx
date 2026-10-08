import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const NEWBORN_FAQS = [
  {
    question: 'How long do I have to arrange my newborn’s visa?',
    answer: 'You have exactly 120 days from your baby’s birth date to obtain the birth certificate, get MOFA attestation, issue the home country passport, and stamp the UAE residence visa.'
  },
  {
    question: 'What’s the fine if I miss the 120-day deadline?',
    answer: 'If the visa is not stamped by the 120th day, a fine of AED 100 is charged on Day 121, followed by a compounding daily overstay fine of AED 50 per day until the visa stamping is finalized.'
  },
  {
    question: 'What’s the correct order of steps for a baby born in Dubai?',
    answer: 'The required order is: 1) Hospital birth notification, 2) DHA birth certificate issuance, 3) MOFA attestation, 4) Home country embassy passport issuance, 5) Emirates ID application, and 6) GDRFA / ICP residence visa stamping.'
  },
  {
    question: 'What documents do I need for a newborn visa?',
    answer: 'You need the baby’s original passport, DHA birth certificate attested by MOFA, recent passport photo with white background, sponsor’s passport, Emirates ID copy, labor contract/salary certificate, and registered Ejari tenancy contract.'
  },
  {
    question: 'Does my newborn need a medical test?',
    answer: 'No. Children under the age of 18 are completely exempt from medical fitness blood tests and chest X-rays, as well as biometric fingerprint enrollment.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello Brightlink! I have a question about UAE newborn baby visa rules and hospital documentation.'
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#F1EBE1]">
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
            6 · Common questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-3">
            Newborn visa FAQ
          </h2>
          <p className="text-sm text-[#64748B] font-sans">
            Real questions from real parents. Tap to expand.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="divide-y divide-[#EBE4D8] border-y border-[#EBE4D8] mb-10">
          {NEWBORN_FAQS.map((item, idx) => {
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

        {/* Load More Button */}
        <div className="text-center">
          <button
            type="button"
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-[#0F172A] bg-white border border-[#DECBB5] hover:border-[#B8864B] hover:text-[#B8864B] transition-colors cursor-pointer shadow-2xs font-heading uppercase tracking-wider"
          >
            <HelpCircle className="w-4 h-4 text-[#B8864B]" />
            <span>Load more questions</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
