import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown, 
  PhoneCall, 
  MessageSquare, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const FAQ_DATA_RAK_FREE_ZONE = [
  {
    q: 'What is RAKEZ, and how was it formed?',
    a: 'Ras Al Khaimah Economic Zone (RAKEZ) was created in 2017 by the Government of Ras Al Khaimah through the consolidation of two legacy free zone authorities: RAK Free Trade Zone (RAK FTZ, est. 2000) and RAK Investment Authority (RAKIA, est. 2005). Today, RAKEZ is one of the UAE’s largest economic hubs, housing over 15,000 active multinational companies across 50+ diverse industries.'
  },
  {
    q: 'What are the main advantages of choosing RAK Free Zone over Dubai free zones?',
    a: 'RAKEZ provides significantly lower operational overheads—typically 25% to 40% lower setup fees, annual licence renewals, and commercial lease rates compared to equivalent Dubai free zones—while delivering identical legal protections: 100% foreign equity ownership, 0% personal income tax, and full UAE residency visa eligibility. Companies operate seamlessly across all seven emirates and internationally.'
  },
  {
    q: 'Can a RAK Free Zone company sell goods or deliver services to the UAE mainland?',
    a: 'Yes, with proper commercial structuring. For physical goods, free zone entities import products into the UAE mainland through a licensed mainland distributor, commercial agent, or logistics clearing partner upon paying standard 5% customs duty. For professional and technical services, RAKEZ firms can contract with mainland corporations as business-to-business (B2B) service providers.'
  },
  {
    q: 'Do I need to live in or travel to Ras Al Khaimah to manage my business?',
    a: 'No. While your registered trade licence and legal address reside in RAKEZ, shareholders and directors have complete freedom to live in Dubai, Abu Dhabi, or any other emirate. Physical presence in the UAE is only required for a brief period to complete biometric fingerprinting for your Emirates ID and medical fitness exam for residency stamping.'
  },
  {
    q: 'What is the minimum share capital requirement for a RAKEZ company?',
    a: 'RAKEZ does not mandate upfront paid-up capital deposit into a UAE bank for standard service, consulting, and trading licences. Standard nominal share capital (typically AED 10,000 to AED 50,000) is declared on the company’s Memorandum of Association without requiring a bank deposit proof letter prior to licence issuance.'
  },
  {
    q: 'How long does company setup in RAKEZ take from start to finish?',
    a: 'Standard trade licence issuance typically takes 2 to 4 working days once passport copies and proposed company names are submitted. Establishing the immigration file, entry permit, medical test, and Emirates ID takes an additional 5 to 7 working days. Corporate bank account opening generally takes 2 to 4 weeks depending on the selected bank’s compliance review.'
  },
  {
    q: 'Can I open a corporate bank account with major Dubai banks using a RAK licence?',
    a: 'Absolutely. A RAKEZ trade licence is recognized by all UAE Central Bank-regulated financial institutions, including Emirates NBD, Mashreq, Abu Dhabi Commercial Bank (ADCB), First Abu Dhabi Bank (FAB), RAKBANK, and digital neobanks like Wio Bank. Brightlink prepares your corporate profile and banking dossier to ensure high approval rates.'
  },
  {
    q: 'How many residence visas can I obtain with my RAK Free Zone licence?',
    a: 'Visa eligibility is tied directly to the facility you lease. Starter flexi-desk packages include eligibility for 1 to 3 residence visas. Dedicated executive serviced offices provide 4 to 8+ visas, while larger commercial suites and warehouses offer scalable quotas based on 9 square meters per visa.'
  },
  {
    q: 'What are the Corporate Tax obligations for RAKEZ companies?',
    a: 'Under UAE Federal Corporate Tax law, RAKEZ companies can qualify for a 0% tax rate on Qualifying Income if they meet Qualifying Free Zone Person (QFZP) criteria, such as maintaining adequate substance in the UAE and deriving income from eligible transactions. Taxable non-qualifying income above AED 375,000 is taxed at the standard 9% rate. All RAKEZ entities must register for Corporate Tax with the Federal Tax Authority (FTA).'
  },
  {
    q: 'Are annual financial audits mandatory for RAKEZ licence renewal?',
    a: 'Yes. In compliance with UAE financial reporting standards, RAKEZ requires registered companies to maintain audited financial statements prepared by an accredited UAE audit firm upon annual licence renewal. Brightlink provides comprehensive annual bookkeeping, audit preparation, and renewal liaison.'
  }
];

export const RakFreeZoneFaq = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [openIdx, setOpenIdx] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>EXPERT ANSWERS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Frequently Asked Questions: RAK Free Zone Setup
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Clear, authoritative guidance on RAKEZ licensing, residency visas, banking procedures, taxation, and operational compliance.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA_RAK_FREE_ZONE.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="bg-[#FAF7F0]/30 rounded-2xl border border-[#E6D7C3] overflow-hidden transition-all duration-200 hover:border-[#DECBB5]"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] font-heading">
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-xl bg-white border border-[#E6D7C3] flex items-center justify-center shrink-0 text-[#B8864B] transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#FAF5EC]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-7 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1EAE0]/70 font-sans">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center pt-8 border-t border-[#E6D7C3]/60 space-y-4">
          <p className="text-sm font-semibold text-[#1E293B]">
            Have a specific scenario or need clarification on activity approvals?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation('RAK Free Zone General Questions');
                } else {
                  window.open('https://wa.me/971566556645?text=Hello%2C%20I%20have%20questions%20regarding%20RAK%20Free%20Zone%20company%20formation.', '_blank');
                }
              }}
              className="px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white text-xs font-bold transition-all shadow-md shadow-[#B8864B]/20 cursor-pointer inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </button>
            <a
              href="tel:+971566556645"
              className="px-6 py-3 rounded-xl bg-white hover:bg-[#FAF6F0] text-[#0F172A] border border-[#DECBB5] text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#B8864B]" />
              <span>Call +971 56 655 6645</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
