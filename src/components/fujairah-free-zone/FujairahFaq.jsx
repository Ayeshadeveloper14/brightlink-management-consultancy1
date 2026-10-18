import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

export const FAQ_DATA_FUJAIRAH_FREE_ZONE = [
  {
    q: 'What is Fujairah Free Zone?',
    a: 'Fujairah Free Zone (FFZA) is an autonomous free trade enclave established under Emiri Decree No. 6 of 1987 in the Emirate of Fujairah, United Arab Emirates. Located strategically on the UAE’s eastern coast bordering the Gulf of Oman and Indian Ocean, the free zone provides an international business hub for trading, warehousing, industrial manufacturing, logistics, marine services, and professional consultancies operating adjacent to the world-renowned Port of Fujairah.'
  },
  {
    q: 'What are the benefits of establishing a company in Fujairah Free Zone?',
    a: 'Key advantages include 100% foreign equity ownership, complete exemption from import and export customs duties on re-exported goods, direct access to the Indian Ocean bypassing the Strait of Hormuz, cost-effective warehouse and industrial land lease rates, streamlined authority registration, visa sponsorship eligibility, full capital and profit repatriation, and potential 0% Corporate Tax for Qualifying Free Zone Persons (QFZP).'
  },
  {
    q: 'Can a foreign investor own 100% of a company?',
    a: 'Yes. Under Fujairah Free Zone regulations, foreign corporate and individual investors are permitted 100% equity ownership across all approved licence categories without the requirement of an Emirati local partner, sponsor, or national shareholder.'
  },
  {
    q: 'What types of business licences are available?',
    a: 'FFZA issues several official licence categories including Commercial Trading Licences (specific product codes), General Trading Licences (broad unrestricted consumer and commercial items), Warehousing Licences (storage and distribution), Manufacturing / Industrial Licences (processing and assembly), and Service / Professional Consultancy Licences (management, engineering, IT, and advisory services).'
  },
  {
    q: 'Is Fujairah Free Zone suitable for trading and import/export?',
    a: 'Yes, it is exceptionally well-suited. With direct quayside and bonded access to Port of Fujairah, shipping lines and trading firms can offload, inspect, store, package, and re-export global commodities to Africa, the Indian Subcontinent, and Europe without paying domestic customs duties.'
  },
  {
    q: 'Can I establish a manufacturing or processing business?',
    a: 'Yes. Unlike many service-only free zones, Fujairah Free Zone actively licenses light, medium, and heavy manufacturing and processing plants. The authority provides pre-built factory units and open leasehold industrial land equipped with heavy electrical power feeds, industrial water, and road connectivity.'
  },
  {
    q: 'Are warehouses and industrial facilities available?',
    a: 'Yes. FFZA offers pre-constructed, high-ceiling bonded warehouses starting from approximately 500 square meters, equipped with loading bays, fire protection, and office mezzanines. Additionally, large industrial land plots (2,500 sqm to 50,000+ sqm) are available for customized industrial construction on long-term renewable leases.'
  },
  {
    q: 'What documents are required for company registration?',
    a: 'For individual investors: passport copies (valid for at least 6 months), passport-sized photographs, completed FFZA registration forms, resume/CV of the manager, and UAE visa/Emirates ID copies if already a resident. For corporate entities: parent certificate of incorporation, trade licence, MOA/AOA, board resolution approving the Fujairah branch/entity, power of attorney, UBO declaration, and foreign document attestations (MOFA/Embassy).'
  },
  {
    q: 'How much does Fujairah Free Zone company formation cost?',
    a: 'Total expenditure varies depending on the licence category, number of permitted activities, legal structure (FZE, FZC, or Branch), chosen physical facility (flexi-desk, executive office, warehouse, or land plot), and required visa allocations. Brightlink provides complete, itemized cost breakdowns based on current official authority tariff schedules.'
  },
  {
    q: 'How long does the company registration process take?',
    a: 'Standard commercial and consultancy registrations generally complete within 3 to 7 business days following document verification and trade name approval. Specialized manufacturing, maritime, or industrial licences requiring environmental impact assessments (EIA) or Civil Defense clearances may require additional time for site inspections and engineering approvals.'
  },
  {
    q: 'Can a company apply for UAE residence visas?',
    a: 'Yes. Upon issuance of the trade licence and corporate Establishment Card from Fujairah immigration (GDRFA/ICP), the company is eligible to sponsor UAE residence visas for shareholders, directors, managers, and operational staff according to the company’s leased facility visa quota.'
  },
  {
    q: 'Can a company open a UAE corporate bank account?',
    a: 'Yes. A legally registered Fujairah Free Zone entity can apply for corporate multi-currency bank accounts with major UAE national and international banks. Account opening remains subject to each bank’s independent compliance, AML risk assessment, source of funds verification, and transaction profile.'
  },
  {
    q: 'Does a free zone company automatically qualify for 0% corporate tax?',
    a: 'No. Under UAE Federal Corporate Tax Law (Decree-Law No. 47/2022), free zone companies must register with the Federal Tax Authority (FTA). To benefit from the 0% rate, the company must satisfy all conditions of a Qualifying Free Zone Person (QFZP), including maintaining adequate economic substance, earning qualifying income, and preparing audited financial statements.'
  },
  {
    q: 'Can a Fujairah Free Zone company sell to mainland UAE customers?',
    a: 'Yes, but through compliant channels. A free zone company cannot conduct direct onshore retail sales from the free zone without clearing customs. Goods entering the mainland must clear UAE Customs, pay applicable tariffs (typically 5%), and be distributed via an appointed mainland commercial agent, local distributor, or your own mainland branch.'
  },
  {
    q: 'What legal structures are available?',
    a: 'Available legal forms include Free Zone Establishment (FZE) with a single individual or corporate shareholder; Free Zone Company (FZC) with 2 to 50 shareholders; Branch of a Foreign Company; and Branch of an existing UAE mainland or free zone entity.'
  },
  {
    q: 'Do I need an office or warehouse?',
    a: 'Yes. FFZA regulations require every registered business to maintain a physical presence within the free zone enclave. Service and consultancy businesses can utilize shared flexi-desks or executive offices, whereas trading, logistics, warehousing, and manufacturing ventures require dedicated bonded warehouses or industrial plots.'
  },
  {
    q: 'Are licence renewals required?',
    a: 'Yes. Business licences and physical facility leases must be renewed annually with Fujairah Free Zone Authority. Renewal involves submitting the renewal application, updating commercial insurance, renewing the tenancy contract, and paying the annual government licence renewal fees.'
  },
  {
    q: 'Can existing foreign companies establish a branch?',
    a: 'Yes. Foreign corporate entities incorporated outside the UAE can establish a registered Branch in Fujairah Free Zone. The branch retains 100% parent foreign ownership, operates under the parent company’s legal name, and does not require separate initial share capital.'
  },
  {
    q: 'Do manufacturing businesses need additional approvals?',
    a: 'Yes. Manufacturing, chemical, and industrial processing operations must obtain an Environmental Impact Assessment (EIA) clearance from the Fujairah Municipality Environmental Department, Civil Defense fire and life safety approval, and Ministry of Industry and Advanced Technology (MOIAT) industrial registry notifications.'
  },
  {
    q: 'How can I get a tailored company setup quotation?',
    a: 'You can request a free, customized quotation directly through Brightlink. Contact our corporate setup advisors via our online consultation form, phone, or WhatsApp (+971 56 655 6645) with details of your proposed business activity, facility preferences, and visa requirements.'
  }
];

export const FujairahFaq = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_DATA_FUJAIRAH_FREE_ZONE.filter(item => 
    item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>OFFICIAL KNOWLEDGE BASE & FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Frequently Asked Questions: Fujairah Free Zone
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Comprehensive, authoritative answers to key regulatory, licensing, immigration, taxation, and operational queries regarding Fujairah Free Zone Authority (FFZA).
          </p>

          {/* Search Filter Input */}
          <div className="relative max-w-md mx-auto pt-2">
            <Search className="w-4 h-4 text-[#8C5E28] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 20 Fujairah Free Zone FAQs..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DECBB5] bg-[#FAF8F5] text-xs sm:text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#B8864B]/40 focus:border-[#B8864B] transition-all"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'border-[#B8864B] bg-[#FCFAF8] shadow-xs' 
                      : 'border-[#E6D7C3] bg-white hover:border-[#DECBB5]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-sm sm:text-base text-[#0F172A] font-heading flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-[#FAF5EC] text-[#8C5E28] text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span>{faq.q}</span>
                    </span>
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#8C5E28] text-white' : 'bg-[#FAF5EC] text-[#8C5E28]'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1E8DC]/80 pl-13">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 p-6 rounded-xl bg-[#FAF8F5] border border-[#DECBB5] space-y-2">
              <p className="text-sm font-semibold text-[#0F172A]">No matching questions found.</p>
              <p className="text-xs text-[#64748B]">Try searching for trading, visas, warehouses, cost, or taxes.</p>
            </div>
          )}
        </div>

        {/* Still Have Questions Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#8C5E28] font-heading">
              Have a Specific Regulatory or Activity Question?
            </h4>
            <p className="text-xs sm:text-sm text-[#6D4518]">
              Our advisory team is ready to review your exact activity list, facility needs, and corporate structure.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation('Fujairah FAQ Unresolved Question')}
            className="px-6 py-2.5 rounded-xl bg-[#8C5E28] hover:bg-[#6D4518] text-white text-xs font-bold whitespace-nowrap cursor-pointer transition-colors shadow-xs"
          >
            Ask a Specialist
          </button>
        </div>

      </div>
    </section>
  );
};
