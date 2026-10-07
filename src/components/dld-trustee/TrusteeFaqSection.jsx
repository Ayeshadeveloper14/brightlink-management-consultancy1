import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TrusteeFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  // Exact 5 questions requested by user
  const primaryFaqs = [
    {
      q: 'What is a DLD registration trustee office?',
      a: 'A Dubai Land Department (DLD) registration trustee office is an authorized private entity licensed to complete property registrations, sales transfers, mortgage registrations, and title deed issuances outside the main DLD headquarters. Trustees verify sales and purchase agreements (MOU/Form F), validate identity and ownership documents, calculate and collect government transfer fees, and submit the transaction to the official DLD electronic system for instant deed printing.'
    },
    {
      q: 'What are the total fees when buying a property in Dubai?',
      a: 'The mandatory transfer fees comprise the 4% Dubai Land Department fee (plus AED 580 administrative/knowledge fees), and the registration trustee fee. Trustee office fees are fixed at AED 4,000 + 5% VAT for properties valued at AED 500,000 or above, or AED 2,000 + 5% VAT for properties below AED 500,000. Other associated costs include developer NOC charges (typically AED 500 - 5,000) and mortgage registration fees (0.25% of loan amount + AED 290) if financing is utilized.'
    },
    {
      q: 'How long does a property transfer take?',
      a: 'Once all required documents—such as the developer NOC, bank liability clearance or mortgage release letter, and manager cheques—are gathered, the physical transfer appointment at the registration trustee office generally takes between 30 to 60 minutes. The electronic Title Deed is immediately generated and emailed directly by the Dubai Land Department to both the buyer and seller.'
    },
    {
      q: 'What documents are needed at the trustee office?',
      a: 'The standard required documents include: original Passports and Emirates IDs of both buyer and seller (and visa copies for UAE residents), the original Title Deed or Oqood certificate, signed unified contract (Form F), a valid Developer NOC letter, and bank-guaranteed Manager Cheques. If either party is represented by an agent, a legalized Power of Attorney (POA) attested by Dubai Courts is required. For company purchases, trade license, MOA, and board resolutions must be produced.'
    },
    {
      q: 'How should the cheques be made out?',
      a: 'All financial settlements at the trustee desk must be presented in the form of Manager’s Cheques (Cashier’s Cheques) drawn from a UAE bank. Separate cheques are required: one cheque made payable to the Seller for the balance purchase price, one cheque made payable directly to "Dubai Land Department" for the 4% transfer fee, and payment for the trustee administration fee (which can often be paid via debit/credit card or a separate cheque to the trustee office).'
    }
  ];

  // Additional questions revealed when "Load more questions" is clicked
  const secondaryFaqs = [
    {
      q: 'Can a property transfer be conducted with a Power of Attorney (POA)?',
      a: 'Yes, a property transfer can be executed through a Power of Attorney. However, Dubai Land Department regulations require that real estate POAs must be specific, notarized by Dubai Courts (or attested through the UAE Embassy and MOFA if issued abroad), and generally valid for no longer than two years from the issuance date.'
    },
    {
      q: 'What is the procedure for a family gift transfer (Hiba)?',
      a: 'A gift transfer (Hiba) allows property to be transferred between first-degree relatives (parents, children, or spouses) at a reduced DLD transfer fee of 0.125% (minimum AED 2,000) instead of the standard 4%. Full relationship proof (attested marriage certificate or birth certificate) along with valuation certificates must be audited before booking the trustee appointment.'
    },
    {
      q: 'How is a mortgage released at the trustee office?',
      a: 'When an existing mortgage is cleared, the financing bank issues an electronic mortgage release clearance on the DLD portal or provides an original physical release letter. The trustee office verifies the clearance, cancels the mortgage endorsement on the system, and issues an unencumbered Title Deed.'
    }
  ];

  const visibleFaqs = showMore ? [...primaryFaqs, ...secondaryFaqs] : primaryFaqs;

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#EFEAE2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              FAQ
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-3">
            FAQ
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-[#B8864B]">
            Questions people ask before trustee transactions.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {visibleFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FCFAF8] border-[#B8864B]/60 shadow-sm'
                    : 'bg-white border-[#EFEAE2] hover:border-[#DECBB5]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <span className="text-base sm:text-lg font-bold text-[#222222]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#B8864B] text-white'
                        : 'bg-[#FAF5EC] text-[#B8864B]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                    >
                      <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-[#555555] leading-relaxed border-t border-[#EFEAE2]/60">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* "Load more questions" Button */}
        <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FAF5EC] hover:bg-[#FAF0E0] text-[#B8864B] hover:text-[#976A36] text-xs sm:text-sm font-bold border border-[#E6D7C3] transition-all cursor-pointer shadow-xs"
          >
            <span>{showMore ? 'Show fewer questions' : 'Load more questions'}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showMore ? 'rotate-180' : ''}`} />
          </button>

          <Link
            to="/faq"
            className="text-xs sm:text-sm font-semibold text-neutral-500 hover:text-[#B8864B] transition-colors"
          >
            Visit Full FAQ Knowledge Base →
          </Link>
        </div>

      </div>
    </section>
  );
};
