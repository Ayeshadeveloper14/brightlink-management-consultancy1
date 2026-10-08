import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

export const FAQ_DATA_JAFZA_OFFSHORE = [
  {
    q: 'What is JAFZA Offshore?',
    a: 'JAFZA Offshore is an offshore corporate entity established under the Jebel Ali Free Zone Authority Offshore Companies Regulations 2003 in Dubai. It is designed for holding global assets, owning freehold real estate in Dubai, holding company shares, managing intellectual property, and conducting international business outside the UAE domestic market.'
  },
  {
    q: 'Who can establish a JAFZA Offshore company?',
    a: 'Any individual investor, entrepreneur, or corporate entity of any nationality can incorporate a JAFZA Offshore company, subject to standard international KYC and anti-money laundering compliance screening. 100% foreign ownership is fully permitted without a local UAE partner.'
  },
  {
    q: 'Can JAFZA Offshore trade within the UAE?',
    a: 'No. JAFZA Offshore companies cannot directly trade goods or provide services within the UAE domestic mainland market. If local commercial trading is required, the entity can conduct business through an authorized onshore distributor/agent or establish an onshore Dubai Mainland LLC or Free Zone subsidiary.'
  },
  {
    q: 'Can JAFZA Offshore sponsor visas?',
    a: 'No. A JAFZA Offshore entity is a non-operational entity within the UAE domestic labor market and is not granted residence or employment visa quotas by immigration authorities. Investors requiring UAE residence visas may explore property investment visas, Golden Visas, or onshore company setup.'
  },
  {
    q: 'Is office space required?',
    a: 'No physical office or Ejari tenancy contract is required in the UAE. By law, the company’s legal registered office address is maintained by an authorized, licensed Registered Agent (such as Brightlink).'
  },
  {
    q: 'What documents are required?',
    a: 'For individual shareholders, standard requirements include passport copies (valid >6 months), proof of residential address (<3 months), contact details, CV, and specimen signatures. Corporate shareholders require legalized Certificates of Incorporation, MOA/AOA, Board Resolutions, and beneficial ownership hierarchy charts.'
  },
  {
    q: 'Can a JAFZA Offshore company own shares in UAE companies?',
    a: 'Yes. A JAFZA Offshore company is fully authorized to act as a corporate shareholder in UAE Mainland Limited Liability Companies (LLCs), UAE Free Zone entities, as well as foreign overseas corporations.'
  },
  {
    q: 'Can a JAFZA Offshore company own property?',
    a: 'Yes. JAFZA Offshore is the pioneer offshore jurisdiction officially permitted by the Dubai Land Department (DLD) to directly purchase, hold, and register title deeds for freehold residential and commercial properties in designated Dubai freehold areas.'
  },
  {
    q: 'How long does incorporation take?',
    a: 'Once all verified KYC documentation is submitted and reviewed, the JAFZA Offshore incorporation process generally takes approximately 5 to 8 working days from name reservation to the issuance of the Certificate of Incorporation.'
  },
  {
    q: 'What are annual renewal requirements?',
    a: 'A JAFZA Offshore company must renew its corporate registration annually with the JAFZA Authority prior to its incorporation anniversary. Renewal requires payment of government fees, renewal of the Registered Agent representation, and maintaining updated UBO and accounting records.'
  },
  {
    q: 'What is a registered agent?',
    a: 'A Registered Agent is a licensed, authorized UAE corporate service firm (such as Brightlink) mandated by JAFZA regulations to represent the offshore company. The agent prepares constitutional documents, files applications, maintains the statutory registered office, and handles official government liaison.'
  },
  {
    q: 'Can a JAFZA Offshore company open a bank account?',
    a: 'Yes. JAFZA Offshore companies can open multi-currency corporate bank accounts with UAE commercial banks as well as international financial institutions. Account opening is subject to bank compliance review, which assesses the beneficial owner’s profile, source of wealth, and business transaction narrative.'
  }
];

export const JafzaFaq = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_DATA_JAFZA_OFFSHORE.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>EXPERT KNOWLEDGE BASE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Frequently Asked Questions on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">JAFZA Offshore</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Essential factual answers regarding Dubai property holding, registered agent requirements, banking, and statutory compliance.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative max-w-xl mx-auto">
          <Search className="w-4 h-4 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. property, banking, registered agent, visas)..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-[#DECBB5] text-xs sm:text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#B8864B] focus:ring-2 focus:ring-[#B8864B]/20 transition-all shadow-2xs"
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
              No questions matched your search query. Contact our corporate advisory team directly for immediate assistance.
            </div>
          )}
        </div>

        {/* Bottom Support Prompt */}
        <div className="mt-12 text-center bg-white border border-[#E6D7C3] rounded-2xl p-6">
          <p className="text-xs sm:text-sm text-[#475569] mb-3">
            Have a specialized holding, Dubai real estate, or banking structuring question?
          </p>
          <button
            onClick={() => onOpenConsultation && onOpenConsultation('JAFZA Offshore FAQ Inquiry')}
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

export default JafzaFaq;
