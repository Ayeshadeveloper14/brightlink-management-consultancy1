import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

export const FAQ_DATA_RAK_OFFSHORE = [
  {
    q: 'What is a RAK ICC offshore company and how does it work?',
    a: 'A RAK ICC company is an international corporate entity registered under the Ras Al Khaimah International Corporate Centre in the United Arab Emirates. It is governed by progressive Common Law regulations and is designed for international trade, holding shares in local or foreign companies, holding intellectual property, and owning Dubai real estate. It operates outside the domestic UAE market and does not require physical office premises in the country.'
  },
  {
    q: 'Can a RAK ICC offshore company own freehold property in Dubai?',
    a: 'Yes, absolutely. RAK ICC has entered into a formal Memorandum of Understanding (MoU) with the Dubai Land Department (DLD). This official arrangement permits RAK ICC offshore entities to directly purchase, hold, and register title deeds for freehold residential and commercial properties in designated Dubai freehold zones. It is one of the most popular vehicles for property investors seeking probate protection.'
  },
  {
    q: 'Can a RAK ICC offshore entity conduct business directly inside the UAE mainland?',
    a: 'No. By UAE federal law and offshore statutory regulations, an offshore company cannot directly sell goods, provide retail services, or lease physical commercial premises within the UAE domestic mainland market. If you wish to sell products or services within the UAE, you can either conduct business through a licensed onshore distributor/agent or establish an onshore Dubai Mainland LLC or Free Zone subsidiary held by your RAK ICC company.'
  },
  {
    q: 'Do I need to travel physically to the UAE to set up a RAK ICC entity?',
    a: 'No. The entire incorporation procedure can be performed 100% remotely. As your accredited Registered Agent, Brightlink coordinates all document verification, drafting of the Memorandum & Articles of Association (MOA/AOA), and electronic submissions to the registry without you ever needing to visit the UAE for licensing signatures.'
  },
  {
    q: 'Does a RAK ICC offshore company qualify for UAE residence visas?',
    a: 'No. Unlike UAE Mainland and Free Zone companies, a RAK ICC offshore entity is a non-operational entity within the UAE domestic labor market and does not receive a visa quota from the Ministry of Human Resources & Emiratisation (MOHRE) or immigration authorities. If you require UAE residence visas, you can structure an onshore operating subsidiary or explore the UAE Golden Visa or Investor Visa pathways through property ownership.'
  },
  {
    q: 'Can a RAK ICC company open a corporate bank account in the UAE?',
    a: 'Yes. A RAK ICC offshore entity can open multi-currency corporate bank accounts with UAE commercial banks (such as Emirates NBD, Mashreq, Wio Bank, ADCB) as well as international digital financial institutions. Approval is subject to bank compliance screening, which reviews the beneficial owner’s profile, legitimate business narrative, source of funds, and transaction documentation. Brightlink provides end-to-end banking dossier preparation and bank introductions.'
  },
  {
    q: 'Is a physical office lease (Ejari) required for a RAK ICC company?',
    a: 'No physical office or Ejari tenancy contract is required. By law, the company’s official registered office address is provided by your licensed Registered Agent (Brightlink). This significantly reduces recurring annual overhead costs compared to mainland or free zone setups.'
  },
  {
    q: 'Are the names of directors and shareholders publicly searchable online?',
    a: 'No. RAK ICC maintains high standards of statutory privacy. While records of directors, shareholders, and ultimate beneficial owners (UBO) must be filed with the Registrar to meet international OECD and FATF anti-money laundering standards, these registers are strictly confidential and are not accessible to public internet searches.'
  },
  {
    q: 'Is a RAK ICC offshore company subject to UAE Corporate Tax?',
    a: 'Under UAE Federal Decree-Law on Corporate Tax, all juridical entities incorporated in the UAE, including offshore companies, fall within the scope of corporate tax. All companies must obtain a Tax Registration Number (TRN) and file an annual tax return. However, foreign-sourced profits earned by an offshore entity or qualifying dividend income from passive shareholdings may qualify for 0% tax treatment. Brightlink assists with tax profiling and filings.'
  },
  {
    q: 'What is a Registered Agent and why is one mandatory for RAK ICC?',
    a: 'Under RAK ICC regulations, international investors cannot interact directly with the government registry; they must engage an authorized and licensed Registered Agent in the UAE. The Registered Agent acts as the legal liaison, prepares corporate documentation, maintains the statutory registered office address, and ensures continuous compliance with regulatory notifications.'
  },
  {
    q: 'How long does the entire RAK ICC incorporation process take?',
    a: 'Once all required KYC documents (passports, proof of address, CVs) are received and verified by Brightlink, the corporate name reservation and registry incorporation generally take between 3 to 5 business days.'
  }
];

export const RakFaq = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_DATA_RAK_OFFSHORE.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>EXPERT KNOWLEDGE BASE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Frequently Asked Questions on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">RAK Offshore</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Everything you need to know about corporate structure, real estate ownership, banking, taxation, and legal compliance.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative max-w-xl mx-auto">
          <Search className="w-4 h-4 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. Dubai property, banking, taxes, visas)..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FCFAF8] border border-[#DECBB5] text-xs sm:text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 transition-all shadow-2xs"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FAF7F0] border-[#DECBB5] shadow-sm'
                    : 'bg-white border-[#E6D7C3] hover:border-[#DECBB5]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-bold font-heading pr-2 ${isOpen ? 'text-[#8C5E28]' : 'text-[#0F172A]'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#B8864B] text-white' : 'bg-[#FAF5EC] text-[#8C5E28] border border-[#DECBB5]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#DECBB5]/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-sm text-[#64748B]">
              No questions matched your search query. Contact our team directly for immediate assistance.
            </div>
          )}
        </div>

        {/* Bottom Support Prompt */}
        <div className="mt-12 text-center bg-[#FCFAF8] border border-[#E6D7C3] rounded-2xl p-6">
          <p className="text-xs sm:text-sm text-[#475569] mb-3">
            Have a specialized asset holding, estate succession, or international trade query?
          </p>
          <button
            onClick={() => onOpenConsultation && onOpenConsultation('RAK Offshore Specific Question')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#B8864B] to-[#8C5E28] hover:brightness-105 transition-all cursor-pointer shadow-sm"
          >
            <span>Ask a Corporate Advisory Specialist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default RakFaq;
