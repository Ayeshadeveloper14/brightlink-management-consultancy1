import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQ = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is a will or last testament?',
      a: 'A will or last testament is a formal legal document in which an individual sets out their instructions regarding the distribution of their assets, the management of their estate, and the guardianship of minor dependents following their death.'
    },
    {
      q: 'Why should I register a will?',
      a: 'Registering a will provides legal certainty that your estate wishes are formally documented with recognized UAE authorities (such as Dubai Courts or the DIFC Wills Service), helping protect family members, prevent delays, and avoid default statutory distribution procedures.'
    },
    {
      q: 'Who should consider making a will?',
      a: 'Any resident or overseas investor owning UAE real estate, local bank accounts, company shares, or residing with minor children should consider putting a will in place to ensure clear legal succession.'
    },
    {
      q: 'Can a will cover property and business interests?',
      a: 'Yes. Specialized Property Wills and Business/Share Wills can specifically cover freehold properties, commercial units, company shareholdings, and business continuity arrangements within the UAE.'
    },
    {
      q: 'Can I include guardianship wishes for minor children?',
      a: 'Yes. A will allows parents to nominate both permanent guardians (for long-term care) and interim guardians (immediate temporary care within the UAE) to ensure the welfare of minor children is protected.'
    },
    {
      q: 'What documents are required?',
      a: 'Generally, passport and Emirates ID copies of the testator, details of chosen beneficiaries and executors, and supporting asset records such as title deeds or company trade licenses, depending on the will’s scope.'
    },
    {
      q: 'Does the registration process vary depending on the type of will?',
      a: 'Yes. The drafting requirements, document language (e.g., dual English-Arabic for Dubai Courts vs. English for DIFC), appointment scheduling, and registration fees vary depending on the chosen registration authority and will category.'
    },
    {
      q: 'Can expatriates prepare a will in the UAE?',
      a: 'Yes. Expatriates of all nationalities and non-Muslim residents have dedicated legal frameworks in the UAE (including DIFC Courts and civil personal status courts) to register legally enforceable wills.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-t border-[#F0E8DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Clear Answers
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Key insights regarding will preparation and registration frameworks in the UAE.
          </p>
        </div>

        {/* Clean Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-[#FCFAF8] rounded-xl border border-[#E8DEC9] overflow-hidden transition-colors"
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
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#F2ECE2] bg-white">
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
          Have questions regarding DIFC or Dubai Courts will registration?{' '}
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Wills Consultation')}
            className="text-[#976A36] font-semibold underline underline-offset-2 hover:text-[#B8864B] cursor-pointer"
          >
            Speak with an estate document specialist
          </button>
        </div>

      </div>
    </section>
  );
};
