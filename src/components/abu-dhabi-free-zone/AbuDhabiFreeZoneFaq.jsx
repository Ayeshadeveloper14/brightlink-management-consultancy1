import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare, PhoneCall } from 'lucide-react';

export const FAQ_DATA_ABU_DHABI_FREE_ZONE = [
  {
    q: 'What is an Abu Dhabi Free Zone?',
    a: 'An Abu Dhabi free zone is a designated special economic jurisdiction in the Emirate of Abu Dhabi governed by its own regulatory authority (such as ADGM, KEZAD, Masdar City, or CMA). These zones offer incentives including foreign ownership, customized legal frameworks (civil or common law), industry-specific facilities, and independent licensing.'
  },
  {
    q: 'Can a foreign investor own 100% of a free zone company?',
    a: 'Yes. Up to 100% foreign equity ownership is permitted in Abu Dhabi free zones, subject to the chosen jurisdiction and licensed business activity, without the requirement of a mandatory local Emirati shareholder or partner.'
  },
  {
    q: 'Which Abu Dhabi free zone is suitable for my business?',
    a: 'Suitability depends on your sector: Abu Dhabi Global Market (ADGM) is tailored for financial institutions, wealth management, professional advisory, and holding entities under English common law. KEZAD specializes in industrial manufacturing, logistics, and trading. Masdar City focuses on clean technology, AI, and sustainability. The Creative Media Authority (CMA) / twofour54 serves media, entertainment, and digital gaming.'
  },
  {
    q: 'What is the difference between ADGM and KEZAD?',
    a: 'ADGM is an international financial centre operating under an independent English Common Law legal system with its own courts and financial regulator (FSRA), ideal for financial services, holding companies, and consulting. In contrast, KEZAD is a vast industrial and maritime logistics hub operating under civil law frameworks, located directly next to Khalifa Port with deepwater berths and heavy manufacturing facilities.'
  },
  {
    q: 'What types of businesses can be established in Abu Dhabi free zones?',
    a: 'Eligible businesses include management consultancies, international trading companies, light and heavy manufacturers, software developers, artificial intelligence labs, logistics operators, media production houses, holding companies, and regulated financial firms. Permitted activities vary strictly by the chosen free zone.'
  },
  {
    q: 'What documents are required for company formation?',
    a: 'Standard requirements include passport copies of shareholders and directors, passport photographs, proposed trade names, and proof of address. Corporate shareholders or foreign parent companies must also provide certified Certificates of Incorporation, MOA/AOA, and board resolutions legalized up to the UAE Embassy and MOFA. The exact document list depends on the chosen authority and activity.'
  },
  {
    q: 'How much does Abu Dhabi Free Zone company formation cost?',
    a: 'Setup costs vary significantly based on the chosen jurisdiction (e.g. ADGM vs KEZAD or Masdar City), the number of activities, the workspace option (flexi-desk vs executive office or warehouse), visa allocations, and external government approvals. Because fees are determined by individual authority tariffs, Brightlink provides customized, itemized proposals reflecting verified fees.'
  },
  {
    q: 'How long does the company formation process take?',
    a: 'Processing timelines depend on the free zone authority, activity complexity, and external approvals. While standard commercial or service licences in zones like Masdar City can often be processed within 5 to 10 working days, specialized setups such as FSRA-regulated financial firms in ADGM or industrial facilities in KEZAD require additional regulatory reviews and facility approvals.'
  },
  {
    q: 'Can I apply for a UAE residence visa through my company?',
    a: 'Yes. Eligible free zone companies can establish an immigration file and sponsor 2-year renewable UAE residence visas for shareholders (investor/partner visas) and employees, as well as subsequent dependent sponsorship for family members. Visa quotas depend on your licensed workspace size and authority package.'
  },
  {
    q: 'Can a free zone company open a UAE corporate bank account?',
    a: 'Yes. A registered Abu Dhabi free zone licence, Certificate of Incorporation, registered lease, and shareholder Emirates IDs enable you to apply for a corporate account with UAE commercial banks. Account approval remains subject to the bank’s independent compliance, AML/CFT risk review, and background vetting.'
  },
  {
    q: 'Does a free zone company automatically qualify for 0% corporate tax?',
    a: 'No. Free zone status alone does not guarantee an automatic 0% corporate tax rate. Under UAE Federal Corporate Tax law, a company must meet the strict legal criteria of a Qualifying Free Zone Person (QFZP)—including maintaining adequate substance, earning qualifying income, and preparing audited accounts—to benefit from 0% on qualifying income. Non-qualifying income is taxed at the standard 9% rate.'
  },
  {
    q: 'Can a free zone company conduct business in the UAE mainland?',
    a: 'A free zone company can trade globally and with other free zone entities. To sell physical goods directly to the UAE mainland retail market or bid on federal government contracts, free zone entities generally operate through a mainland commercial agent or licensed local distributor, or establish a formal mainland branch under a dual license framework.'
  },
  {
    q: 'Is a physical office required?',
    a: 'Requirements vary: many service, consulting, and digital activities permit flexible workspace solutions (such as flexi-desks or shared smart desks). However, regulated financial entities, businesses requiring larger visa quotas, and industrial or warehousing operations mandate dedicated physical offices or facilities.'
  },
  {
    q: 'Are licence renewals and ongoing compliance necessary?',
    a: 'Yes. Free zone licences, registered facility leases, and corporate establishment files must be renewed annually with the respective authority. Entities must also comply with UAE Corporate Tax filings, VAT obligations (if meeting statutory thresholds), and annual audited financial statement submissions where mandated.'
  }
];

export const AbuDhabiFreeZoneFaq = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="abu-dhabi-faq" className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B8864B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>AUTHORITATIVE ANSWERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Comprehensive answers to critical questions regarding Abu Dhabi free zone jurisdictions, licensing, visas, and regulatory compliance.
          </p>
        </div>

        {/* Accordion List (All 14 questions) */}
        <div className="space-y-3.5">
          {FAQ_DATA_ABU_DHABI_FREE_ZONE.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                className="rounded-2xl border border-[#E6D7C3] bg-white overflow-hidden shadow-xs hover:border-[#DECBB5] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#B8864B] transition-colors font-heading leading-snug">
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#FAF5EC] text-[#B8864B] rotate-180' : 'bg-neutral-50 text-neutral-400 group-hover:text-[#B8864B]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
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
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-neutral-100/80">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Question Footprint CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-[#E6D7C3] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <span className="text-xs font-bold text-[#0F172A] block font-heading">
              Have a specific question about an Abu Dhabi authority?
            </span>
            <span className="text-xs text-[#64748B] block">
              Our setup advisors can clarify jurisdiction rules, activity codes, and facility requirements.
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenConsultation('Abu Dhabi Free Zone FAQ Enquiry')}
              className="px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer font-heading"
            >
              Ask an Advisor
            </button>
            <a
              href="https://wa.me/971566556645?text=Hello%2C%20I%20have%20a%20question%20about%20Abu%20Dhabi%20Free%20Zone%20Business%20Setup."
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] font-bold text-xs border border-[#25D366]/30 transition-colors flex items-center gap-1.5 cursor-pointer font-heading"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
