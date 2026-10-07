import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

export const FAQ_DATA_LLC = [
  {
    q: 'What is a Mainland LLC in Dubai?',
    a: 'A Mainland Limited Liability Company (LLC) is an onshore corporate legal structure incorporated under the Dubai Department of Economy and Tourism (DET) and the UAE Federal Commercial Companies Law. It allows businesses to trade freely across Dubai, all seven Emirates, and internationally, providing shareholders with limited liability protection up to their capital contribution.'
  },
  {
    q: 'Who can establish a Mainland LLC?',
    a: 'Any individual foreign expatriate, UAE national, or international corporate entity can establish a Mainland LLC. An LLC can be structured with 1 to 50 shareholders, allowing for both Single-Owner LLCs (LLC-SO) and multi-partner enterprises.'
  },
  {
    q: 'Can foreigners own 100% of a Mainland LLC?',
    a: 'Yes. In accordance with the amended UAE Commercial Companies Law, foreign expatriates and international investors can own 100% of a Mainland LLC across thousands of commercial, trading, and industrial activities, eliminating the previous requirement for a 51% local Emirati partner on eligible activities.'
  },
  {
    q: 'Do I need an office for a Mainland LLC?',
    a: 'Yes, mainland statutory regulations require every registered LLC to possess a verified physical address in Dubai supported by an official Ejari tenancy certificate. Depending on your operational requirements, this can range from a flexible desk in an approved business center to a private corporate office, retail showroom, or warehouse.'
  },
  {
    q: 'What documents are required?',
    a: 'Standard documents include passport copies of all shareholders and managers, UAE visa or entry stamp details with unified number (UID), manager identification and contact details, 3 trade name preferences, shareholding breakdown, and an Ejari tenancy contract. Corporate shareholders must additionally supply attested corporate certificates and a board resolution.'
  },
  {
    q: 'How long does LLC formation take?',
    a: 'Straightforward commercial LLC applications typically take between 4 to 8 working days once shareholder documentation, trade name approval, and premises contracts are ready. Regulated activities requiring external approvals from specialized government departments (such as Civil Defense or Municipality) may require 2 to 4 weeks.'
  },
  {
    q: 'What is the difference between an LLC and a Professional License?',
    a: 'An LLC is primarily designed for commercial trading, wholesale, retail, contracting, and industrial activities where physical goods or high-liability operations take place, granting limited liability to shareholders. A Professional License is dedicated to intellectual, vocational, and consultancy services where individual expertise is the primary capital.'
  },
  {
    q: 'Can an LLC sponsor investor and employee visas?',
    a: 'Yes. An LLC entitles shareholders and company partners to apply for 2-year renewable UAE Investor/Partner residency visas. Furthermore, following establishment card setup with GDRFA and MOHRE, the company can hire international and domestic employees under standard ministry visa quotas.'
  },
  {
    q: 'Can I add or change business activities later?',
    a: 'Yes. You can add or modify commercial activities on your trade license at any time through DET license amendment procedures. As long as new activities belong to compatible commercial groups, amendments can be completed smoothly through an updated license voucher.'
  },
  {
    q: 'What are the ongoing compliance requirements?',
    a: 'Ongoing duties include annual DET trade license and Ejari renewals, annual Chamber of Commerce membership renewal, Corporate Tax registration and annual filing with the FTA, quarterly VAT returns where applicable, maintaining the Ultimate Beneficial Owner (UBO) register, and retaining financial accounting records for a minimum of 5 years.'
  },
  {
    q: 'Do I need VAT registration?',
    a: 'VAT registration (5%) is mandatory for businesses whose taxable turnover and imports exceed AED 375,000 within a 12-month period. Voluntary registration is available once turnover exceeds AED 187,500. Registered entities must file periodic VAT returns with the Federal Tax Authority (FTA).'
  },
  {
    q: 'What are the Corporate Tax requirements?',
    a: 'All mainland LLCs must register for UAE Corporate Tax with the Federal Tax Authority (FTA) and obtain a Corporate Tax Registration Number (TRN). A standard rate of 9% applies on annual taxable net profits exceeding AED 375,000, with annual tax returns due within 9 months of the financial year-end.'
  }
];

export const LlcFaqAccordion = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const shouldReduceMotion = useReducedMotion();

  const filteredFaqs = FAQ_DATA_LLC.filter(item =>
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
            Mainland LLC Company Formation FAQs
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Comprehensive answers regarding foreign ownership, limited liability, office space, tax compliance, and visa allocations in Dubai.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-xl mx-auto">
          <Search className="w-4 h-4 text-[#8C5E28] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions (e.g., ownership, 100%, office, tax, visas)..."
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
              Have a question regarding your specific commercial trading activity?
            </h4>
            <p className="text-xs text-[#64748B] mt-0.5">
              Our business setup consultants can check your DET activity codes and licensing regulations immediately.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Specific LLC Question')}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Ask Our Advisors</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default LlcFaqAccordion;
