import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';

const PROPERTY_FAQS = [
  {
    question: 'What is the minimum property value for a Dubai investor visa?',
    answer: 'For the standard 2-year Property Investor Visa, there is no minimum value requirement for a sole property owner (for joint ownership between spouses or business partners, each owner must hold at least AED 400,000 in equity). For the 10-year Golden Visa, the minimum purchase or valuation value is AED 2,000,000. For the 5-year Retirement Visa (age 55+), the minimum property valuation is AED 1,000,000.'
  },
  {
    question: "What's the difference between the 2-year property visa and the property Golden Visa?",
    answer: 'The 2-year Property Investor Visa applies to properties under AED 2M, mandates a Police Clearance Certificate (PCC), and requires the holder to enter the UAE at least once every 180 days to keep the visa valid. The 10-year Golden Visa requires an AED 2M+ property, does not require a PCC, allows indefinite stays outside the UAE without visa cancellation, and permits sponsoring children of any age and unlimited domestic workers.'
  },
  {
    question: 'Can I get a property visa with a mortgaged property?',
    answer: 'Yes. If your property is mortgaged, you can qualify for both the 2-year and 10-year visas by providing a No Objection Certificate (NOC) and paid balance statement from your UAE bank confirming that your paid-up equity meets the relevant threshold (or bank NOC approval for Golden Visa).'
  },
  {
    question: 'Does off-plan property qualify for a visa?',
    answer: 'Yes, off-plan properties with an initial contract of sale (Oqood) can qualify for the 10-year Golden Visa provided the purchase price on the Oqood is AED 2,000,000 or more and the developer’s required initial equity threshold or NOC has been issued. Completed properties with an official Title Deed from Dubai Land Department qualify immediately for all three routes.'
  },
  {
    question: 'How much does the 2-year property visa cost?',
    answer: 'Official government fees for the 2-year Dubai Property Investor Visa total approximately AED 9,834. This covers DLD file registration, entry permit issuance, status change (if in-country), VIP DHA medical fitness screening, Emirates ID typing, and residence visa stamping.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      'Hello 800 DOCS! I have a question about Dubai Property Visa requirements and mortgaged properties.'
    );
    window.open(`https://wa.me/971501234567?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] border-b border-[#F1EBE1]">
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
            Clear Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Common questions.
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="divide-y divide-[#EBE4D8] border-y border-[#EBE4D8] mb-10">
          {PROPERTY_FAQS.map((item, idx) => {
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
                      : 'border-[#DECBB5] text-[#8C6230] bg-[#FFFFFF] group-hover:border-[#B8864B]'
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

        {/* Load More Questions Action */}
        <div className="text-center">
          <button
            type="button"
            onClick={handleWhatsAppInquiry}
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
