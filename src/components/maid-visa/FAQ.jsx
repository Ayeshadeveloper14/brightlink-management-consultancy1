import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, ChevronDown } from 'lucide-react';

export const FAQ = () => {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // Strictly using verified content from the prompt and official UAE framework
  const faqs = [
    {
      question: 'What salary do I need to sponsor a maid in Dubai?',
      answer: 'To sponsor a maid in Dubai, the sponsor needs a minimum monthly salary of AED 25,000 (or AED 22,000 with company-provided accommodation). You must also live with your family in a residence with at least two bedrooms.'
    },
    {
      question: 'Can a bachelor sponsor a maid?',
      answer: 'No. Bachelors cannot sponsor a domestic worker in Dubai — you must be living with your family, in a home with at least two bedrooms.'
    },
    {
      question: 'How much does a maid visa cost?',
      answer: 'The total cost depends on whether the maid is inside or outside the UAE, entry permit fees, DHA medical fitness testing, Emirates ID typing, and MOHRE contract issuance. We provide a transparent, 100% itemized quote with all official government fees charged at cost.'
    },
    {
      question: 'Do I have to hire through a Tadbeer centre?',
      answer: 'You can directly sponsor a domestic worker under your personal sponsorship (provided you meet the minimum AED 25,000 salary and 2-bedroom accommodation requirements) or recruit through licensed domestic worker channels. Our PRO specialists process the official GDRFA, DHA, and MOHRE paperwork 100% online.'
    },
    {
      question: 'Is there a minimum salary I must pay my maid?',
      answer: 'Yes. Minimum wages are established by official bilateral agreements with source countries and MOHRE guidelines (varying by nationality), which are formalized in the mandatory MOHRE domestic worker employment contract along with accommodation, medical insurance, and rest entitlements.'
    },
    {
      question: 'How long does the maid visa stamping take?',
      answer: 'With 100% online application processing, standard residency stamping is completed within 5–7 working days once medical test results and biometrics are cleared.'
    },
    {
      question: 'What happens if my maid is already in the UAE on a visit visa?',
      answer: 'We process an official in-country status change so your maid does not need to exit the country or make an airport run.'
    }
  ];

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-t border-[#EBE4D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            Good to know
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-3">
            Maid visa questions.
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            The rules that trip people up most when sponsoring domestic help in the UAE.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-10">
          {displayedFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#DECBB5] overflow-hidden transition-colors shadow-2xs hover:border-[#B8864B]"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#0F172A] font-heading">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0 transition-transform">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-[#475569] leading-relaxed font-sans border-t border-[#F1EBE1]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Load more questions button */}
        {!showAll && (
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#DECBB5] hover:border-[#B8864B] text-xs font-bold text-[#0F172A] hover:text-[#B8864B] transition-all cursor-pointer shadow-2xs font-sans"
            >
              <span>Load more questions</span>
              <ChevronDown className="w-4 h-4 text-[#B8864B]" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default FAQ;
