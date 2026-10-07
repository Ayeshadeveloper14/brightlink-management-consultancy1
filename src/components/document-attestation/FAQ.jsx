import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQ = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is document attestation?',
      a: 'Document attestation is the official verification and authentication process where authorized government authorities (notaries, state departments, foreign ministries, and embassies) validate the genuineness of signatures, seals, and credentials on a document so that it is legally recognized in the UAE.'
    },
    {
      q: 'Which documents can be attested?',
      a: 'Virtually all official documents can be attested, including educational certificates (degrees, diplomas, transcripts), personal documents (marriage certificates, birth certificates, police clearance records), and commercial documents (trade licences, power of attorney, articles of association, and board resolutions).'
    },
    {
      q: 'Do educational certificates need attestation?',
      a: 'Yes, if you are applying for skilled employment under MOHRE or Free Zone visas, seeking professional licensing (e.g., DHA, DOH, Ministry of Justice), or pursuing university admissions and degree equivalency in the UAE, your educational certificates must be fully attested up to the UAE MOFA.'
    },
    {
      q: 'Do marriage and birth certificates need attestation for family visas?',
      a: 'Yes. To sponsor a spouse or children under a UAE family visa through GDRFA or ICP, original or certified attested marriage certificates (for spouse) and birth certificates (for children) are mandatory to legally establish family relationships.'
    },
    {
      q: 'Does every document follow the same attestation process?',
      a: 'No. The attestation sequence depends heavily on the issuing country, whether the nation belongs to the Hague Apostille Convention, the document category (educational, civil, or corporate), and whether university verification or local state department stamps are required prior to the foreign ministry stage.'
    },
    {
      q: 'How long does document attestation take?',
      a: 'Processing times vary widely based on the country of origin, embassy scheduling, and seasonal ministry backlogs. Some countries offer expedited processing within 5–10 business days, while standard international multi-stage attestation can take 2 to 4 weeks. Brigitlink provides realistic timeline estimates based on your specific document.'
    },
    {
      q: 'How much does document attestation cost?',
      a: 'The final cost depends on the document type, issuing country, home-country verification fees, embassy tariffs, volume of documents, and international courier logistics. Government fees are set directly by respective ministries. We provide a transparent, itemized quotation before any processing starts.'
    },
    {
      q: 'Can Brigitlink assist with the complete process?',
      a: 'Yes. Brigitlink provides end-to-end assistance: document pre-screening, coordination with overseas legalizing bodies and embassies, international diplomatic courier handling, and final UAE Ministry of Foreign Affairs (MOFA) electronic attestation.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#EFE5D7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Answers & Clarity
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Understand the rules, requirements, and procedures for UAE document legalization.
          </p>
        </div>

        {/* Accordion */}
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
                  <span className="text-sm sm:text-base font-bold text-[#222222]">
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

        {/* Bottom Consultation Note */}
        <div className="mt-8 text-center text-xs text-[#777777]">
          Need advice on an unusual certificate or country?{' '}
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Document Attestation Question')}
            className="text-[#976A36] font-semibold underline underline-offset-2 hover:text-[#B8864B] cursor-pointer"
          >
            Speak with an attestation consultant
          </button>
        </div>

      </div>
    </section>
  );
};
