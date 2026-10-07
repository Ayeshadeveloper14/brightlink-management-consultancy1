import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ReraFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const primaryFaqs = [
    {
      q: 'What is a RERA license and who is legally required to hold one in Dubai?',
      a: 'A RERA license is the mandatory authorization issued by the Real Estate Regulatory Agency (RERA), an arm of the Dubai Land Department (DLD). Any individual who negotiates, markets, leases, or sells real estate, as well as any commercial entity operating a brokerage, property management firm, valuation advisory, or holiday home rental service in Dubai, is legally required to be licensed by RERA under Law No. 4 of 2007.'
    },
    {
      q: 'Can foreign nationals / expatriates get a RERA real estate broker card?',
      a: 'Yes, absolutely. Any nationality can become a licensed real estate agent in Dubai. The core prerequisites are holding a valid UAE Residency Visa (sponsored by a RERA-licensed brokerage or an independent Golden Visa / Investor Visa), a valid Emirates ID, a Certificate of Good Conduct from Dubai Police, and completing the DREI training course and passing the exam.'
    },
    {
      q: 'What is the DREI course curriculum and how is the RERA exam conducted?',
      a: 'The Certified Real Estate Broker Course is a 4-day modular program administered by the Dubai Real Estate Institute (DREI). It covers Dubai real estate legal framework, sales contracts (Form A, B, and F), code of ethics, leasing law (Law 26 of 2007), Jointly Owned Property Law, and Anti-Money Laundering (AML) reporting. The exam is a 60-minute computer-based multiple-choice test. Standard broker candidates require 70% to pass, while agency managers require 80%.'
    },
    {
      q: 'What are the total government fees for obtaining a RERA broker card?',
      a: 'The mandatory government costs include: AED 500 for the DREI Certified Broker Training course, approx. AED 3,200 for the official RERA examination and Broker Card issuance fee, AED 220 for the Dubai Police Good Conduct Certificate, plus standard Knowledge and Innovation Dirham fees (approx. AED 20 - 40). If degree attestation is needed, MOFA fees are AED 150 per certificate.'
    },
    {
      q: 'What is Trakheesi and why is it mandatory for property listings and advertising?',
      a: 'Trakheesi is the Dubai Land Department’s official electronic permit management system. Under strict DLD regulations, every property advertisement—whether on portals like PropertyFinder, Bayut, and Dubizzle, billboards, print media, SMS, or social media—must carry an individual electronic Trakheesi QR Code Permit. Advertising without an active Trakheesi permit incurs an automatic fine of AED 50,000 per violation.'
    }
  ];

  const secondaryFaqs = [
    {
      q: 'Can I establish a real estate brokerage company with 100% foreign ownership in Dubai Mainland?',
      a: 'Yes. Following the UAE Commercial Companies Law amendments, foreign investors and expatriates can own 100% of a real estate brokerage firm (Mainland LLC) without requiring a local UAE national shareholder. However, RERA still requires at least one designated manager or partner to hold a valid RERA Broker/Manager Card and attend regular compliance updates.'
    },
    {
      q: 'What happens if an agent or company operates without a RERA license?',
      a: 'Operating in Dubai’s real estate market without a valid RERA license or Trakheesi permit is illegal. DLD enforcement officers conduct regular physical and digital audits. Penalties include fines ranging from AED 10,000 to AED 50,000, company bank account freezes, immediate portal listing bans, and potential deportation or commercial license revocation.'
    },
    {
      q: 'How long does the RERA broker card remain valid and how is it renewed?',
      a: 'The RERA Broker Card is valid for one year from the date of issuance and must be renewed annually. To renew, agents must take an annual refresher test through the DLD Smart Application or DREI, maintain a clean police conduct record, and possess a valid UAE residency visa and employment contract with their brokerage.'
    },
    {
      q: 'Does an applicant need a university degree to become a licensed real estate broker?',
      a: 'While a bachelor’s degree is advantageous and required for real estate valuation or executive management licenses, standard real estate broker cards require an attested High School Diploma (12th grade completion). The educational certificate must be legalized by the Ministry of Foreign Affairs (MOFA).'
    }
  ];

  const visibleFaqs = showMore ? [...primaryFaqs, ...secondaryFaqs] : primaryFaqs;

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] border-b border-[#EFEAE2]">
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
            Frequently Asked Questions
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-[#B8864B]">
            Everything you need to know about getting licensed by RERA in Dubai.
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
                    ? 'bg-white border-[#B8864B]/60 shadow-sm'
                    : 'bg-white/70 border-[#EFEAE2] hover:border-[#DECBB5]'
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

        {/* Load More Button */}
        <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FAF5EC] hover:bg-[#FAF0E0] text-[#B8864B] hover:text-[#976A36] text-xs sm:text-sm font-bold border border-[#E6D7C3] transition-all cursor-pointer shadow-xs"
          >
            <span>{showMore ? 'Show fewer questions' : 'Load more questions'}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showMore ? 'rotate-180' : ''}`} />
          </button>

          <a
            href="https://wa.me/971566556645?text=Hello%20Brightlink%2C%20I%20have%20a%20specific%20question%20regarding%20RERA%20Licensing%20in%20Dubai."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-semibold text-neutral-600 hover:text-[#B8864B] transition-colors"
          >
            Ask a RERA Expert on WhatsApp →
          </a>
        </div>

      </div>
    </section>
  );
};
