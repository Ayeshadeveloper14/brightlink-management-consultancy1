import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

export const FAQ_DATA_AJMAN_OFFSHORE = [
  {
    q: 'What is Ajman Offshore?',
    a: 'Ajman Offshore is an offshore corporate entity established under the statutory offshore regulations of the Ajman Free Zone Authority in the UAE. It is designed for cross-border international business, holding corporate assets, IP protection, and multi-tier group holding structures without requiring physical office premises.'
  },
  {
    q: 'What is an Ajman Offshore company used for?',
    a: 'An Ajman Offshore company is commonly utilized for holding shares in regional or international operating entities, owning intellectual property, structuring private equity investments, holding real estate assets in approved areas, and facilitating international commercial trade outside the UAE.'
  },
  {
    q: 'Can foreigners own an Ajman Offshore company?',
    a: 'Yes. Ajman Offshore permits 100% foreign equity ownership for international individuals and foreign corporate bodies, with zero requirement for a local UAE national shareholder or sponsor.'
  },
  {
    q: 'Can an Ajman Offshore company trade inside the UAE?',
    a: 'No. An Ajman Offshore entity cannot directly conduct commercial retail trade or provide domestic services within the UAE mainland. Domestic trading requires an onshore distributor/agent or an onshore Dubai Mainland LLC / Free Zone operating entity.'
  },
  {
    q: 'Can an Ajman Offshore company own assets?',
    a: 'Yes. An Ajman Offshore company can hold tangible and intangible international assets, including equity shares in foreign companies, intellectual property rights, and eligible financial securities.'
  },
  {
    q: 'Can it own property in the UAE?',
    a: 'An Ajman Offshore company may hold UAE property in designated freehold areas, subject to specific authority approvals and applicable land department policies (such as in Ajman and other approved Emirates where registered).'
  },
  {
    q: 'Can an Ajman Offshore company own shares in UAE companies?',
    a: 'Yes. Where permitted by relevant economic licensing authorities, an Ajman Offshore company can act as a corporate shareholder holding equity in UAE Mainland LLCs or Free Zone operating businesses.'
  },
  {
    q: 'Does Ajman Offshore provide a UAE residence visa?',
    a: 'No. Offshore companies are non-operational holding structures and are not granted residence or employment visa quotas by UAE immigration or labor authorities. If visas are required, investors should consider Mainland, Free Zone, or Golden Visa pathways.'
  },
  {
    q: 'Is an office required?',
    a: 'No physical commercial office lease or Ejari is required in the UAE. The company operates legally through the registered office address provided by its licensed Registered Agent.'
  },
  {
    q: 'What documents are required?',
    a: 'For individual shareholders, required documents include passport copies (valid >6 months), specimen signatures, proof of residential address (<3 months), contact details, and a professional CV. Corporate shareholders require legalized Certificates of Incorporation, MOA/AOA, and board resolutions.'
  },
  {
    q: 'What is a registered agent?',
    a: 'A Registered Agent is a licensed, authorized UAE corporate service provider (such as Brightlink) legally appointed to represent the offshore company before the registry, submit filings, and provide the official statutory address.'
  },
  {
    q: 'How long does incorporation take?',
    a: 'Once all verified KYC documentation is assembled and verified, the indicative incorporation timeframe is approximately 3 to 5 working days, though actual turnaround varies depending on registry review and compliance checks.'
  },
  {
    q: 'What are the annual renewal requirements?',
    a: 'The company must renew its corporate registration annually through its Registered Agent, paying government registry dues, maintaining updated UBO records, and keeping proper 7-year accounting records.'
  },
  {
    q: 'Can an Ajman Offshore company open a UAE bank account?',
    a: 'Yes. An Ajman Offshore entity can apply for multi-currency corporate bank accounts with UAE and international banks. Account approval is subject to the bank’s compliance review, background checks, and verification of business transactions.'
  },
  {
    q: 'Is Ajman Offshore suitable for a holding company?',
    a: 'Yes, absolutely. Ajman Offshore is widely recognized as a cost-effective, compliant parent holding company structure for consolidating shares in subsidiaries and organizing multi-jurisdictional investments.'
  }
];

export const AjmanFaq = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_DATA_AJMAN_OFFSHORE.filter(
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
            <span>KNOWLEDGE BASE & GUIDANCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Frequently Asked Questions on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Ajman Offshore</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Concise, factual answers regarding ownership, registered agent representation, UAE property holding, banking, and statutory compliance.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative max-w-xl mx-auto">
          <Search className="w-4 h-4 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. holding company, banking, property, visas)..."
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
              No questions matched your search query. Contact our advisory team directly for immediate assistance.
            </div>
          )}
        </div>

        {/* Bottom Support Prompt */}
        <div className="mt-12 text-center bg-[#FCFAF8] border border-[#E6D7C3] rounded-2xl p-6">
          <p className="text-xs sm:text-sm text-[#475569] mb-3">
            Have a specialized holding structure or international cross-border trade question?
          </p>
          <button
            onClick={() => onOpenConsultation && onOpenConsultation('Ajman Offshore FAQ Specialist Advice')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#B8864B] to-[#8C5E28] hover:brightness-105 transition-all cursor-pointer shadow-sm"
          >
            <span>Consult Our Registered Agent Specialists</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default AjmanFaq;
