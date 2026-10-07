import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';

export const FAQ = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      question: 'Do I need a Dubai visa or a UAE visa?',
      answer: 'Travellers use both phrases. “Dubai visa” reflects the destination people search for; “UAE visa” describes the country-level entry permission. An approved UAE tourist visa generally allows eligible travellers to visit Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah, subject to the conditions of the issued visa.'
    },
    {
      question: 'How do I know if I need a tourist visa before flying?',
      answer: 'Your visa requirements depend on your passport nationality, country of residence, existing visas from qualifying countries, and travel circumstances. Because rules vary by passport and circumstances, you should check your eligibility before flying rather than relying on residence alone.'
    },
    {
      question: 'Does my country of residence affect UAE tourist visa eligibility?',
      answer: 'Holding a residence document such as a BRP, Green Card, PR card, EU permit, GCC ID or other official residence permit may affect a conditional route for selected nationalities. Submit your passport and residence details for an individual eligibility check.'
    },
    {
      question: 'Can an existing visa or residence permit affect my UAE entry eligibility?',
      answer: 'Some valid visas or residence permits from qualifying countries can affect entry-on-arrival eligibility for selected nationalities. These routes are conditional, so your specific travel documents should be reviewed before departure.'
    },
    {
      question: 'What is the difference between a tourist visa, visit visa and transit visa?',
      answer: 'A tourist visa is intended for leisure and sightseeing with options such as 14-day, 30-day and 60-day stays. A visit visa covers eligible family, friend or other short-visit purposes where sponsorship and supporting evidence vary. A transit visa is designed specifically for stopovers, such as 48-hour and 96-hour routes with separate airline and itinerary rules.'
    },
    {
      question: 'Can I work in the UAE on a tourist visa?',
      answer: 'No. A tourist visa is strictly for tourism and short visits only and is not permission to work or reside. Undertaking employment on a visitor visa is prohibited under UAE regulations; employment requires an approved work permit and residency visa.'
    },
    {
      question: 'Can I use a tourist visa to live in the UAE?',
      answer: 'No. A tourist visa is a temporary visitor entry route and does not grant residency. It cannot be used to reside permanently in the UAE. Those wishing to live in the UAE must apply through official residence or Golden Visa pathways.'
    },
    {
      question: 'What is the difference between single-entry and multiple-entry visas?',
      answer: 'A single-entry visa permits one entry and expires upon exiting the UAE. A multiple-entry visa is useful when a traveller must leave and re-enter the UAE during the approved period. Entry validity and permitted stay still apply on every trip.'
    },
    {
      question: 'How long can I stay in the UAE on a tourist visa?',
      answer: 'Common stay durations include 14-day, 30-day and 60-day periods depending on the visa category issued. Your maximum permitted stay and entry validity are printed directly on your electronic entry permit.'
    },
    {
      question: 'Can I visit Abu Dhabi and the other UAE emirates on a UAE tourist visa?',
      answer: 'Yes. An approved UAE tourist visa generally allows eligible travellers to visit Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah, subject to the conditions of the issued visa.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FFFFFF] relative border-b border-[#F1EBE1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Dubai & UAE Tourist Visa — Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Common questions about tourist visas, entry requirements and short visits to the UAE.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? 'border-[#B8864B]/50 bg-[#FCFAF8] shadow-xs'
                    : 'border-[#EFEAE2] bg-white hover:border-[#DECBB5]'
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left py-4 px-5 sm:py-5 sm:px-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8864B] rounded-2xl"
                >
                  <span className={`text-sm sm:text-base font-bold font-heading transition-colors ${
                    isOpen ? 'text-[#976A36]' : 'text-[#222222]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#B8864B] text-white' : 'bg-[#FAF5EC] text-[#B8864B]'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-btn-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#F1EBE1]/60">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Additional Questions Direct Callout */}
        <div className="text-center p-6 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE2]">
          <h3 className="text-sm font-bold text-[#222222] mb-1 font-heading">
            Need an individual eligibility assessment?
          </h3>
          <p className="text-xs text-[#666666] mb-4">
            If your circumstances depend on your passport nationality, country of residence, or existing visas, our team can verify your conditions.
          </p>
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Tourist Visa FAQ Assessment')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#976A36] hover:bg-[#B8864B] hover:text-white font-bold text-xs transition-all cursor-pointer"
          >
            <span>Ask our team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
