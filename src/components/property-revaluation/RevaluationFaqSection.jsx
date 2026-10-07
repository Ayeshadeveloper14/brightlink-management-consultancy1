import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Plus, 
  Minus, 
  HelpCircle, 
  ArrowRight, 
  Building2, 
  Award, 
  Home 
} from 'lucide-react';

export const RevaluationFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const primaryFaqs = [
    {
      q: 'What is the difference between a broker appraisal and an official DLD Valuation Certificate?',
      a: 'A real estate broker appraisal or portal CMA report is an informal estimate and holds no sovereign legal weight. An official Dubai Land Department (DLD) Valuation Certificate is an authenticated government deed issued by the official DLD Real Estate Valuation Committee following physical on-site engineering surveys. It is the only valuation document legally recognized by GDRFA/ICP for Golden Visa applications, UAE Central Bank licensed lenders, and Dubai Courts.'
    },
    {
      q: 'Can a property purchased for less than AED 2M qualify for the 10-Year Golden Visa if it revalues higher?',
      a: 'Yes, absolutely. Under Dubai Land Department and immigration regulations, the 10-Year Real Estate Golden Visa threshold of AED 2,000,000 can be established either by the original purchase price stated on the Title Deed, or by the current market valuation certified on an official DLD Valuation Certificate. If your property was acquired for AED 1.4M or AED 1.6M years ago and has appreciated to AED 2M+, the certificate immediately qualifies you.'
    },
    {
      q: 'How long does the entire DLD property valuation process take?',
      a: 'The typical end-to-end timeline is 3 to 7 business days. This includes file registration on the DLD portal (Day 1), fee clearing and surveyor assignment (Day 2), on-site physical inspection (Days 3-4), and committee review and electronic certificate issuance (Days 5-7). BrightLink actively monitors every step to prevent scheduling bottlenecks.'
    },
    {
      q: 'Is an on-site physical inspection mandatory for all properties?',
      a: 'For completed residential properties (apartments, penthouses, villas) and commercial buildings, physical on-site inspection by a licensed DLD surveyor is standard. The surveyor checks structural condition, architectural layout, finishes, and view orientation. For certain restricted land plots or specific off-plan units with verified escrow logs, desk-based valuation audits may be conducted by the committee.'
    },
    {
      q: 'How long is the DLD Property Valuation Certificate valid?',
      a: 'A Dubai Land Department Valuation Certificate is officially valid for 6 months from the date of issuance for immigration (Golden Visa) and bank mortgage refinancing purposes. If required after 6 months, a re-validation or updated inspection file can be initiated.'
    }
  ];

  const secondaryFaqs = [
    {
      q: 'Can a mortgaged property be revalued by the Dubai Land Department?',
      a: 'Yes. Having an active mortgage does not prevent a property valuation. However, the financing bank must be notified, and in cases where an updated Title Deed is issued or bank refinancing is sought, an official Bank NOC or liability clearance letter is coordinated by our team.'
    },
    {
      q: 'How do I receive the completed Valuation Certificate?',
      a: 'The certificate is issued electronically in high-resolution PDF format with an official cryptographic QR code and digital verification signature from the Dubai Land Department. It is instantly emailed to you and automatically synced with the immigration (GDRFA) and land registry systems.'
    },
    {
      q: 'What happens if the valuation figure is lower than expected?',
      a: 'The valuation committee determines value based on verified building transaction comps and municipal standards. If significant interior renovations (luxury upgrades, extensions, smart automation) were not fully captured during the initial survey, an official review appeal can be lodged with contractor invoices and photographic evidence before final sign-off.'
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
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-3">
            Questions About Property Valuation
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-[#B8864B]">
            Clear, practical answers about DLD valuation procedures.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
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

        {/* Load More Button */}
        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            type="button"
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FAF5EC] hover:bg-[#FAF0E0] text-[#B8864B] hover:text-[#7A5424] text-xs sm:text-sm font-bold border border-[#E6D7C3] transition-all cursor-pointer shadow-xs"
          >
            <span>{showMore ? 'Show fewer questions' : 'Load more questions'}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showMore ? 'rotate-180' : ''}`} />
          </button>

          <a
            href="https://wa.me/971566556645?text=Hello%20BrightLink%2C%20I%20have%20a%20specific%20question%20regarding%20Property%20Revaluation."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-semibold text-neutral-600 hover:text-[#B8864B] transition-colors"
          >
            Ask a Valuation Specialist on WhatsApp →
          </a>
        </div>

        {/* Related Services Links Section */}
        <div className="pt-10 border-t border-[#EFEAE2]">
          <h3 className="text-lg font-bold text-[#222222] mb-6 text-center">
            Related Real Estate & Residency Services
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              to="/services/golden-visa-10-year"
              className="p-5 rounded-2xl bg-[#FCFAF8] border border-[#EFEAE2] hover:border-[#B8864B]/60 transition-all group flex flex-col justify-between"
            >
              <div>
                <Award className="w-5 h-5 text-[#B8864B] mb-2" />
                <h4 className="text-sm font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors">
                  10-Year Golden Visa
                </h4>
                <p className="text-xs text-[#666666] mt-1">
                  AED 2M property investment residency processing.
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#B8864B] mt-4 inline-flex items-center gap-1">
                <span>View Program</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              to="/services/dld-trustee"
              className="p-5 rounded-2xl bg-[#FCFAF8] border border-[#EFEAE2] hover:border-[#B8864B]/60 transition-all group flex flex-col justify-between"
            >
              <div>
                <Home className="w-5 h-5 text-[#B8864B] mb-2" />
                <h4 className="text-sm font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors">
                  DLD Trustee Support
                </h4>
                <p className="text-xs text-[#666666] mt-1">
                  File review for sale transfers, gifts, & mortgage release.
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#B8864B] mt-4 inline-flex items-center gap-1">
                <span>Explore Trustee</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              to="/services/rera-license"
              className="p-5 rounded-2xl bg-[#FCFAF8] border border-[#EFEAE2] hover:border-[#B8864B]/60 transition-all group flex flex-col justify-between"
            >
              <div>
                <Building2 className="w-5 h-5 text-[#B8864B] mb-2" />
                <h4 className="text-sm font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors">
                  RERA License Dubai
                </h4>
                <p className="text-xs text-[#666666] mt-1">
                  Broker cards & real estate agency commercial setup.
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#B8864B] mt-4 inline-flex items-center gap-1">
                <span>View Licensing</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
