import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQ = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is a Power of Attorney?',
      a: 'A Power of Attorney (POA) is a formal legal instrument in which one person or entity (the principal) authorizes another trusted person (the agent or attorney-in-fact) to act, represent, or make binding decisions on their behalf.'
    },
    {
      q: 'What types of Power of Attorney are available?',
      a: 'Common types include General Power of Attorney (wide management authority), Special Power of Attorney (limited to specific transactions), Property Power of Attorney (dedicated to real estate purchases, sales, or leasing), and Corporate Power of Attorney (for company representation and commercial contracts).'
    },
    {
      q: 'When do I need a notarised POA?',
      a: 'Notarisation is needed whenever government authorities, courts, banks, the Dubai Land Department, or commercial partners require official verification that the document was voluntarily signed by the genuine principal before an authorized official.'
    },
    {
      q: 'Can a Power of Attorney be notarised online?',
      a: 'Yes, in many cases. Authorized UAE notary portals (such as Dubai Courts and Ministry of Justice remote notary services) offer digital notarisation via video identity verification and digital signatures. Eligibility depends on the transaction type and specific authority guidelines.'
    },
    {
      q: 'What documents are required?',
      a: 'Typically, original identification (passports, Emirates IDs), full details of the principal and agent, and relevant supporting records (such as property title deeds, commercial licenses, or marriage certificates depending on the power granted).'
    },
    {
      q: 'Can I create a POA for property or business matters?',
      a: 'Yes. Dedicated property POAs allow authorized agents to manage property, handle developer matters, or represent landlords and buyers, while corporate POAs enable managers to sign contracts, conduct banking, or represent companies with licensing authorities.'
    },
    {
      q: 'Is a notarised POA accepted by UAE authorities?',
      a: 'A properly drafted and notarised POA in compliance with UAE legal standards is recognized by government bodies, courts, and commercial entities within the scope of authority specifically granted in the document, subject to the accepting entity’s verification.'
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
            Key insights regarding Notary Public procedures and Power of Attorney instruments in the UAE.
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
          Have questions about specific POA clauses or drafting?{' '}
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Notary POA Consultation')}
            className="text-[#976A36] font-semibold underline underline-offset-2 hover:text-[#B8864B] cursor-pointer"
          >
            Speak with our legal document coordinator
          </button>
        </div>

      </div>
    </section>
  );
};
