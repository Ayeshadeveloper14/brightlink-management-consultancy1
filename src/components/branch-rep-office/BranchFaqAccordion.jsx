import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

export const FAQ_DATA_BRANCH = [
  {
    q: 'What is a Branch Office in Dubai?',
    a: 'A Branch Office is a legally registered onshore extension of an existing parent company incorporated under the Dubai Department of Economy and Tourism (DET) and the UAE Ministry of Economy. It carries the exact corporate name and constitution of the parent entity and is legally authorized to execute commercial contracts, render services, and generate revenue.'
  },
  {
    q: 'What is a Representative Office?',
    a: 'A Representative Office is an outpost established by a foreign company to conduct marketing, brand promotion, relationship building, and market feasibility research in the UAE. It cannot engage in direct commercial sales or earn local revenue, and its operational outlays must be remitted by the parent headquarters.'
  },
  {
    q: 'What is the difference between a Branch and Representative Office?',
    a: 'The key distinction is commercial revenue generation. A Branch Office can enter contracts, bill local clients, and generate revenue within the scope of its licensed activities. A Representative Office is strictly limited to non-commercial promotional outreach, partner liaison, and market study.'
  },
  {
    q: 'Can a foreign company open a Branch Office in Dubai?',
    a: 'Yes. Established foreign commercial entities, international corporations, and regional companies can establish a Mainland Branch in Dubai, provided the parent company is in active good standing and fulfills the documentation and legalisation requirements.'
  },
  {
    q: 'Does a Branch Office operate under the parent company?',
    a: 'Yes. A Branch Office is legally the same corporate persona as the parent entity and operates under the identical corporate name. It does not possess a separate legal identity or distinct share capital, and the parent company remains fully responsible for its liabilities.'
  },
  {
    q: 'Can a Representative Office generate revenue?',
    a: 'No. UAE regulations strictly prohibit Representative Offices from invoicing clients, concluding commercial sales, or receiving local customer payments. Any commercial billing requires establishing a commercial Branch Office or a Mainland LLC.'
  },
  {
    q: 'What documents are required?',
    a: 'Key requirements include the parent company’s Certificate of Incorporation, Commercial License, Memorandum of Association (MOA/AOA), Board Resolution authorizing the UAE branch, Certificate of Good Standing, 2 years of audited financial statements (where required), and a Power of Attorney appointing the General Manager.'
  },
  {
    q: 'Is an office/premises required?',
    a: 'Yes. Mainland statutory regulations require every Branch or Representative Office to maintain a certified physical commercial address in Dubai registered with an official Ejari certificate from the Dubai Land Department (DLD).'
  },
  {
    q: 'How long does setup take?',
    a: 'Once all parent company documents are attested by the UAE Embassy in the home country and super-legalised by UAE MOFA, licensing through DET and the Ministry of Economy typically takes between 1 to 2 weeks. International attestation in the home jurisdiction typically requires 1 to 3 weeks prior to submission.'
  },
  {
    q: 'Is a local service agent or sponsor required?',
    a: 'Under updated UAE Commercial Companies Law, many commercial branch activities do not require a local sponsor or service agent. Where specific regulated activities still mandate a Local Service Agent (LSA), the LSA acts purely as a government liaison with zero equity, zero operational control, and no profit entitlement.'
  },
  {
    q: 'Can a Branch Office hire employees and process visas?',
    a: 'Yes. Upon license issuance, the Branch Office opens corporate establishment files with the General Directorate of Residency and Foreigners Affairs (GDRFA) and the Ministry of Human Resources and Emiratisation (MOHRE), allowing it to sponsor investor and employee residency visas.'
  },
  {
    q: 'Can a Representative Office later expand into commercial operations?',
    a: 'Yes. If market research demonstrates strong commercial viability, the parent company can establish a commercial Branch Office or incorporate a Mainland LLC to begin contracting and generating onshore revenue.'
  },
  {
    q: 'What are the ongoing compliance requirements?',
    a: 'Ongoing responsibilities include annual renewal of the DET Commercial License, Ministry of Economy registration, and office Ejari lease; Corporate Tax registration and annual return filing with the FTA; WPS payroll compliance; and retaining branch financial accounting records for at least 5 years.'
  },
  {
    q: 'Which structure is suitable for my company?',
    a: 'If you intend to bill UAE clients, execute contracts, and deliver commercial services, a Branch Office is the required structure. If you wish only to evaluate local market potential, promote parent brand awareness, and interface with regional partners without selling locally, a Representative Office is appropriate.'
  }
];

export const BranchFaqAccordion = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const shouldReduceMotion = useReducedMotion();

  const filteredFaqs = FAQ_DATA_BRANCH.filter(item =>
    item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Branch & Representative Office FAQs
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Clear, authoritative answers regarding cross-border corporate extensions, foreign parent governance, revenue restrictions, and ministerial approvals.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-xl mx-auto">
          <Search className="w-4 h-4 text-[#8C5E28] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions (e.g., revenue, parent, documents, visas, timeline)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DECBB5] bg-white text-xs sm:text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#B8864B] transition-all shadow-2xs"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#B8864B] bg-white shadow-xs'
                    : 'border-[#EFEAE2] bg-white hover:border-[#DECBB5]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <span className={`text-sm sm:text-base font-bold font-heading transition-colors ${
                    isOpen ? 'text-[#8C5E28]' : 'text-[#0F172A]'
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#B8864B] text-white' : 'bg-[#FAF5EC] text-[#8C5E28]'
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
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#DECBB5]/40 font-sans">
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-10 bg-white rounded-2xl border border-[#DECBB5] p-6">
              <p className="text-sm text-[#475569]">No questions matched your search query.</p>
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="mt-3 text-xs font-bold text-[#B8864B] hover:underline"
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </div>

        {/* Bottom CTA within FAQ */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-[#DECBB5] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#0F172A] font-heading">
              Have specific questions regarding your foreign parent company?
            </h4>
            <p className="text-xs text-[#64748B] mt-0.5">
              Our international corporate formation consultants are available to evaluate your home jurisdiction requirements.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Specific Branch Office Question')}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Ask an Advisor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default BranchFaqAccordion;
