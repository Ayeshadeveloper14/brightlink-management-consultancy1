import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare, PhoneCall } from 'lucide-react';

export const FAQ_DATA_SHARJAH_FREE_ZONE = [
  {
    q: 'What is a Sharjah Free Zone and what are its key advantages?',
    a: 'A Sharjah free zone is a designated special economic jurisdiction in the Emirate of Sharjah that operates under its own legal framework and regulatory authority. Key benefits include 100% foreign business ownership, 0% personal income tax, complete repatriation of capital and profits, zero customs duty on re-exported goods, cost-effective licensing packages, fast setup timelines, and dual-licensing opportunities with the Sharjah Economic Development Department (SEDD).'
  },
  {
    q: 'Which is the best Sharjah free zone for my business?',
    a: 'The right free zone depends on your operational model: Sharjah Media City (SHAMS) is ideal for media, marketing, digital agencies, consultancies, and creative startups. Sharjah Publishing City (SPC Free Zone) offers ultra-fast setup, publishing, printing, e-commerce, and combined commercial licences. Sharjah Airport International Free Zone (SAIF Zone) is best for air cargo, aviation logistics, international trade, and warehousing. Hamriyah Free Zone Authority (HFZA) excels in heavy and light manufacturing, maritime operations, petrochemicals, and deepwater port logistics. Sharjah Research Technology and Innovation Park (SRTIP) focuses on tech incubators, renewable energy, and R&D.'
  },
  {
    q: 'Can a foreign national own 100% of a Sharjah free zone company?',
    a: 'Yes. Foreign entrepreneurs and international corporations can own 100% of the equity in any Sharjah free zone entity without the need for a local UAE national sponsor, shareholder, or service agent.'
  },
  {
    q: 'How much does it cost to set up a Sharjah Free Zone company?',
    a: 'Sharjah is known as one of the most cost-effective emirates for company formation. Zero-visa licence packages in digital zones like SHAMS or SPC Free Zone typically start from approximately AED 5,750 to AED 11,500. Packages including one to three UAE residence visa allocations generally range between AED 13,000 and AED 23,000+, depending on whether flexi-desk, dedicated office, or warehouse premises are leased. Brightlink provides transparent, itemized quotes reflecting all official authority tariffs.'
  },
  {
    q: 'How quickly can a Sharjah Free Zone licence be issued?',
    a: 'Licence issuance in Sharjah is remarkably rapid. Digital free zones such as SPC Free Zone and SHAMS can issue initial licences within 2 to 4 working hours once shareholder documents and trade names are approved. Industrial setups in SAIF Zone or HFZA requiring physical warehouses, environmental clearance, or civil defense approvals typically take 5 to 10 working days.'
  },
  {
    q: 'Can a Sharjah Free Zone company trade with the UAE mainland?',
    a: 'Yes, but under defined legal channels. Free zone entities can trade freely internationally and with other UAE free zones. To sell physical goods directly into the UAE mainland, a company can work through a licensed mainland distributor/agent or obtain a dual licence through the Sharjah Economic Development Department (SEDD). Digital services, consulting, and B2B professional services can be delivered across the UAE subject to UAE VAT and corporate tax regulations.'
  },
  {
    q: 'Can I obtain UAE residence visas through a Sharjah Free Zone company?',
    a: 'Yes. A registered Sharjah free zone company can establish an immigration file and sponsor 2-year renewable UAE investor/partner visas for shareholders, as well as employment visas for staff and dependent visas for family members. Visa quotas depend on your chosen authority package and registered workspace size (e.g. co-working desk, executive office, or warehouse).'
  },
  {
    q: 'Can a Sharjah Free Zone company open a UAE corporate bank account?',
    a: 'Yes. With your official trade licence, Certificate of Incorporation, registered lease agreement, and shareholder Emirates IDs, your company is eligible to open a corporate bank account with major UAE banks (such as Emirates NBD, Mashreq, Wio, FAB, or ADCB). Brightlink assists with business profile drafting and compliance dossier preparation to satisfy bank KYC and AML requirements.'
  },
  {
    q: 'Does a Sharjah Free Zone company have to pay UAE Corporate Tax?',
    a: 'Sharjah free zone companies are required to register for UAE Corporate Tax with the Federal Tax Authority (FTA). Companies that meet statutory Qualifying Free Zone Person (QFZP) conditions enjoy a 0% corporate tax rate on Qualifying Income. Non-qualifying income or taxable transactions with non-free zone businesses are subject to the standard 9% federal corporate tax rate.'
  },
  {
    q: 'Are annual audits mandatory for Sharjah Free Zone companies?',
    a: 'Audit requirements vary by authority. Sharjah Airport International Free Zone (SAIF Zone) and Hamriyah Free Zone Authority (HFZA) require companies to submit annual audited financial statements prepared by an accredited UAE auditor during licence renewal. Free zones like SHAMS and SPC do not mandate audit submission at renewal, though maintaining accurate books of account for at least 5 years is compulsory under UAE Federal Corporate Tax law.'
  },
  {
    q: 'Can I combine multiple activities under one Sharjah Free Zone licence?',
    a: 'Yes. Sharjah free zones—especially SPC Free Zone and SHAMS—are renowned for flexible activity combination rules, allowing businesses to combine up to 5 to 7 diverse activities from commercial, consulting, and e-commerce categories under a single trade licence without incurring separate licence fees.'
  },
  {
    q: 'Is a physical office mandatory for company registration in Sharjah?',
    a: 'No, a dedicated physical office is not mandatory for startups, freelancers, or service providers. Free zones offer cost-effective virtual desk, flexi-desk, and shared co-working solutions that satisfy legal registration and visa quota requirements. Dedicated offices or warehouses are required for trading entities with inventory, manufacturing operations, or companies requiring large visa quotas.'
  }
];

export const SharjahFreeZoneFaq = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sharjah-faq-section" className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Frequently Asked Questions: Sharjah Free Zone Setup
          </h2>
          <p className="text-base text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Find clear, verified answers to common inquiries regarding Sharjah free zone jurisdictions, licence costs, processing times, banking, visas, and tax regulations.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4 mb-14">
          {FAQ_DATA_SHARJAH_FREE_ZONE.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#B8864B] bg-[#FAF7F0] shadow-sm'
                    : 'border-[#E6D7C3] bg-white hover:border-[#DECBB5]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-[#0F172A] font-heading leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#B8864B] text-white rotate-180'
                        : 'bg-[#FAF5EC] text-[#8C5E28] border border-[#DECBB5]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={shouldReduceMotion ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={shouldReduceMotion ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#475569] leading-relaxed border-t border-[#DECBB5]/40 mt-1">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="rounded-2xl bg-[#FAF7F0] border border-[#DECBB5] p-6 text-center space-y-3">
          <p className="text-sm font-semibold text-[#0F172A]">
            Have a specific activity or free zone in mind?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation('Sharjah Free Zone FAQ Inquiry')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#B8864B] hover:bg-[#8C5E28] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-xs cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask Our Consultants</span>
            </button>
            <a
              href="https://wa.me/971566556645?text=Hello%2C%20I%20have%20questions%20about%20Sharjah%20Free%20Zone%20Business%20Setup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#DECBB5] text-[#8C5E28] hover:text-[#0F172A] font-bold text-xs tracking-wider uppercase transition-colors shadow-xs"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
