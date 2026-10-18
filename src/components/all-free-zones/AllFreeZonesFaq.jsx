import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles, MessageSquare, PhoneCall } from 'lucide-react';

export const FAQ_DATA_ALL_FREE_ZONES = [
  {
    question: 'How many free zones are there in the United Arab Emirates?',
    answer: 'There are over 40 multidisciplinary and sector-specialized free zones across the seven Emirates of the UAE (Abu Dhabi, Dubai, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah). Each zone is governed by its own independent regulatory authority, offering tailored licensing frameworks, specialized facility options, and distinct commercial advantages for global and regional enterprises.'
  },
  {
    question: 'Can a UAE free zone company do business directly with the UAE mainland?',
    answer: 'Yes, but subject to specific commercial regulations. Free zone entities can freely conduct business with other free zones and international markets. For selling goods directly into the UAE mainland, a free zone company can either appoint a licensed mainland distributor/agent, set up a mainland LLC branch office, or pay the standard 5% customs duty upon clearing goods through UAE customs. For professional and consulting services, free zone firms can deliver advisory services to mainland corporate clients provided work is primarily executed from the free zone or under proper contracting agreements.'
  },
  {
    question: 'Which UAE free zone is the most cost-effective for startups and solo entrepreneurs?',
    answer: 'Northern Emirates free zones such as Sharjah Media City (Shams), Sharjah Publishing City (SPC), Ajman Free Zone (AFZ), Umm Al Quwain Free Trade Zone (UAQ FTZ), RAKEZ (Ras Al Khaimah), and Fujairah Creative City (FCC) consistently offer the most competitive entry packages. These authorities provide affordable zero-visa and 1-visa flexi-desk licenses with fast digital processing, making them ideal for freelancers, e-commerce founders, and remote consultancies.'
  },
  {
    question: 'What is the key difference between an FZE and an FZC / FZ-LLC?',
    answer: 'The primary distinction lies in shareholder count. A Free Zone Establishment (FZE) is incorporated with a single shareholder (which can be an individual person or a corporate entity). A Free Zone Company (FZC or FZ-LLC) accommodates two or more shareholders (up to 50 in many jurisdictions). Both legal structures provide limited liability protection, safeguarding personal assets to the extent of contributed share capital.'
  },
  {
    question: 'Do UAE free zone companies have to pay UAE Corporate Tax?',
    answer: 'Under UAE Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses, all free zone entities are legally required to register for Corporate Tax with the Federal Tax Authority (FTA) and submit annual tax returns. However, free zone companies that qualify as a "Qualifying Free Zone Person" (QFZP) benefit from a 0% Corporate Tax rate on their "Qualifying Income." Any non-qualifying income or taxable net profit exceeding AED 375,000 is taxed at the standard federal rate of 9%.'
  },
  {
    question: 'How many UAE residence visas can be obtained with a free zone company?',
    answer: 'Visa allocation is directly correlated with the physical facility and lease package registered with the free zone authority. A virtual or flexi-desk office typically includes an eligibility quota of 0 to 3 residence visas. Dedicated executive offices grant higher allocations (typically calculated as 1 visa per 9 to 10 square metres of office space), while warehouses and industrial plots allow customized staff visa quotas approved by the respective authority and immigration department.'
  },
  {
    question: 'Can a free zone company open a UAE corporate bank account?',
    answer: 'Yes. Free zone companies are fully eligible to apply for corporate bank accounts with leading UAE commercial banks (such as Emirates NBD, Mashreq, Abu Dhabi Commercial Bank, Dubai Islamic Bank, and Wio Bank). Approval is subject to the bank’s stringent Know-Your-Customer (KYC) and Anti-Money Laundering (AML) due diligence, which evaluates shareholder profiles, legitimate source of funds, business plans, commercial contracts, and verified company substance in the UAE.'
  },
  {
    question: 'Can foreign nationals own 100% of a UAE free zone business?',
    answer: 'Yes. Free zones have always guaranteed 100% foreign ownership with zero requirement for a local UAE national shareholder or local service agent. Foreign investors maintain complete control over company shares, operational decisions, and profit repatriation without currency exchange restrictions.'
  },
  {
    question: 'What is the typical timeframe required to incorporate a free zone company in the UAE?',
    answer: 'Initial digital incorporation and commercial licence issuance generally take between 2 to 5 business days for standard commercial and consultancy activities, once required identity documents and trade names are approved. Subsequent residence visa processing (including medical fitness testing, biometric Emirates ID registration, and visa stamping) typically requires an additional 5 to 10 working days.'
  },
  {
    question: 'How does Brightlink help business founders select the right UAE free zone?',
    answer: 'Brightlink provides impartial, end-to-end advisory across all 40+ UAE free zones. Rather than pushing a single jurisdiction, our corporate specialists evaluate your specific business activity, physical office requirements, target clientele, visa quota, and multi-year budget to match you with the optimal free zone authority. We handle trade name reservations, constitutive documentation, authority liaisons, VIP residence visa processing, and corporate bank introduction.'
  }
];

export const AllFreeZonesFaq = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/971566556645?text=Hello%2C%20I%20have%20questions%20about%20selecting%20a%20UAE%20Free%20Zone.',
      '_blank'
    );
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F0] border-t border-[#E6D7C3]/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B8864B]/10 border border-[#B8864B]/20 mb-4">
            <HelpCircle className="w-4 h-4 text-[#B8864B]" />
            <span className="text-xs font-bold text-[#8C5E28] uppercase tracking-wider">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A] font-heading mb-4">
            Common Questions About UAE Free Zones
          </h2>
          <p className="text-sm sm:text-base text-[#555555]">
            Essential regulatory, tax, visa, and licensing answers to help you navigate company formation across the United Arab Emirates.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQ_DATA_ALL_FREE_ZONES.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: shouldReduceMotion ? 0 : index * 0.04 }}
                className="bg-white rounded-2xl border border-[#E6D7C3]/80 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full text-left px-5 sm:px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8864B]/40"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base text-[#1A1A1A] font-heading leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#B8864B] text-white rotate-180'
                        : 'bg-[#FAF7F0] text-[#8C5E28]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
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
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#F5EFE6]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Contact Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-[#E6D7C3] p-6 sm:p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="text-left">
            <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] font-heading mb-1">
              Have a specific question about an authority or activity?
            </h3>
            <p className="text-xs sm:text-sm text-[#666666]">
              Our UAE licensing specialists provide neutral comparative analysis tailored to your exact business plan.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs sm:text-sm font-semibold hover:bg-[#1EBE5D] transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation('All Free Zones Directory Inquiry');
                } else {
                  window.open('https://wa.me/971566556645', '_blank');
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#B8864B] text-white text-xs sm:text-sm font-semibold hover:bg-[#A3733A] transition-colors shadow-xs"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Call</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
