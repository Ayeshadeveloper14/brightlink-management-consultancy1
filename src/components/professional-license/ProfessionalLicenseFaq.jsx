import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

export const FAQ_DATA_PROFESSIONAL_LICENSE = [
  {
    q: 'What is a Professional License in Dubai?',
    a: 'A Professional License is an official commercial permit issued by the Dubai Department of Economy and Tourism (DET) dedicated to businesses that provide expertise, intellectual services, specialized consultancy, crafts, or skills rather than tangible goods trading or industrial manufacturing.'
  },
  {
    q: 'Who can apply for a Mainland Professional License?',
    a: 'Any individual expatriate, UAE national, or foreign corporate entity with the appropriate vocational skill, academic background, or professional capability can apply. Suitable applicants range from solo consultants and tech specialists to digital marketing agencies, creative design studios, and corporate advisory practices.'
  },
  {
    q: 'Can foreigners own a professional business in Dubai?',
    a: 'Yes. Following the UAE Commercial Companies Law updates, 100% foreign ownership is available for the vast majority of professional and service activities. In specific legacy categories where a Local Service Agent (LSA) is required, the LSA holds zero equity, operational power, or share of corporate profits.'
  },
  {
    q: 'Do I need an office for a Professional License?',
    a: 'Yes, mainland regulations require every registered business to have a certified physical address with an Ejari tenancy certificate. However, this does not require renting a large private office; many service businesses fulfill this requirement cost-effectively through an approved business center flexi-desk or dedicated workstation.'
  },
  {
    q: 'What documents are required?',
    a: 'Standard filings include passport copies of all shareholders and managers, UAE visa/entry stamp details, contact details, proposed company trade names, and tenancy/flexi-desk details. Regulated activities may also require attested educational degree certificates, board resolutions (for corporate owners), or external government clearances.'
  },
  {
    q: 'How long does the setup process take?',
    a: 'Standard, non-regulated professional licenses typically take between 3 to 7 working days once shareholder documents, trade name approvals, and premises contracts are prepared. Regulated activities requiring external ministry inspections or professional clearances (such as health, education, or engineering) may take 2 to 4 weeks.'
  },
  {
    q: 'Can I add more business activities later?',
    a: 'Yes. You can add complementary professional activities to your existing license at any time through DET amendment procedures. Adding related service codes within the same license category is straightforward and usually does not require restructuring your company.'
  },
  {
    q: 'Can a Professional License support employee or investor visas?',
    a: 'Yes. A Mainland Professional License entitles the owners to apply for 2-year UAE Investor/Partner residency visas and allows the company to open an establishment card with MOHRE and immigration to hire international and local employees under standard visa quotas.'
  },
  {
    q: 'Are professional qualifications required for every activity?',
    a: 'No. While general consulting, marketing, IT, and design activities usually do not mandate attested university degrees, specialized and regulated professions (such as engineering, legal consultancy, healthcare advisory, auditing, and specialized education) legally require attested qualifications.'
  },
  {
    q: 'What ongoing compliance requirements should I consider?',
    a: 'Key ongoing obligations include annual DET license and Ejari renewals, UAE Corporate Tax registration and annual return filing (9% over AED 375,000 threshold), quarterly VAT returns (if exceeding registration thresholds), maintaining the Ultimate Beneficial Owner (UBO) register, and maintaining commercial bookkeeping records for at least 5 years.'
  }
];

export const ProfessionalLicenseFaq = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const shouldReduceMotion = useReducedMotion();

  const filteredFaqs = FAQ_DATA_PROFESSIONAL_LICENSE.filter(item =>
    item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Mainland Professional License FAQs
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Clear, authoritative answers to common questions regarding company formation, foreign ownership, office mandates, and compliance in Dubai.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-xl mx-auto">
          <Search className="w-4 h-4 text-[#8C5E28] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search questions (e.g., ownership, office, timeline, visas)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DECBB5] bg-[#FAF7F0] text-xs sm:text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#B8864B] focus:bg-white transition-all shadow-2xs"
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
                    ? 'border-[#B8864B] bg-[#FAF5EC]/40 shadow-xs'
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
            <div className="text-center py-10 bg-[#FAF7F0] rounded-2xl border border-[#DECBB5] p-6">
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
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#FAF7F0] border border-[#DECBB5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#0F172A] font-heading">
              Have a question specific to your proposed business activity?
            </h4>
            <p className="text-xs text-[#64748B] mt-0.5">
              Our business setup consultants can check your DET activity codes and licensing regulations immediately.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Specific Professional License Question')}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Ask Our Consultants</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProfessionalLicenseFaq;
