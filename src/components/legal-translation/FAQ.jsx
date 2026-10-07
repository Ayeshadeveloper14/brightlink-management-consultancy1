import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQ = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Who can provide legal translation in the UAE?',
      a: 'Official legal translations in the UAE are provided by certified translators licensed and accredited by the Ministry of Justice (MOJ) or competent local authorities, adhering to statutory standards of accuracy and formatting.'
    },
    {
      q: 'Which documents require legal translation?',
      a: 'Any foreign-language document intended for official UAE submission requires translation, including court evidence, contracts, powers of attorney, marriage and birth certificates, diplomas, police clearances, medical reports, and company incorporation records.'
    },
    {
      q: 'Is Arabic translation required for UAE government documents?',
      a: 'Yes. Article 3 of UAE Federal Decree Law specifies Arabic as the official legal language of the UAE. Government ministries (MOHRE, GDRFA, ICP), Dubai Courts, and public prosecution departments require documents originating in other languages to be accompanied by a certified Arabic translation.'
    },
    {
      q: 'Which languages are available?',
      a: 'The primary combination is Arabic ↔ English. In addition, translations are coordinated across popular world languages including Urdu, Hindi, French, Russian, Filipino, German, Chinese, Spanish, and others upon request.'
    },
    {
      q: 'How long does legal translation take?',
      a: 'Standard civil certificates (such as birth or marriage certificates) are generally finalized within 24 to 48 business hours. Urgent expedited service is available for priority filings, while longer corporate contracts and multi-page court files depend on overall page length.'
    },
    {
      q: 'How much does legal translation cost?',
      a: 'Translation costs depend on the language pairing, document type, total word count, formatting complexity, and certification specifications. We provide an exact, itemized quote upon reviewing a digital scan of your documents.'
    },
    {
      q: 'What is the difference between certified and notarised translation?',
      a: 'A certified translation is executed by a licensed legal translator bearing their official seal and statement of accuracy. A notarised translation involves taking the certified translation before a UAE Notary Public to witness and attest the signatory’s declaration for specialized judicial or corporate proceedings.'
    },
    {
      q: 'Can translated documents be used in other UAE emirates?',
      a: 'Yes. Legally certified translations prepared in compliance with UAE federal guidelines are accepted across Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#EFE5D7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            Legal Translation Guidance
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Clear, practical answers regarding official translation requirements across the UAE.
          </p>
        </div>

        {/* Clean Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-[#E8DEC9] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF6F0] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#222222] font-heading">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 text-[#B8864B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#F2ECE2]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-8 text-center text-xs text-[#777777]">
          Need clarification on an uncommon document or authority?{' '}
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Legal Translation Inquiries')}
            className="text-[#976A36] font-semibold underline underline-offset-2 hover:text-[#B8864B] cursor-pointer"
          >
            Speak with our translation advisor
          </button>
        </div>

      </div>
    </section>
  );
};
