import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare, PhoneCall } from 'lucide-react';

export const FAQ_DATA_AJMAN_FREE_ZONE = [
  {
    q: 'What is Ajman Free Zone?',
    a: 'Ajman Free Zone (AFZ) is an autonomous special economic zone established in 1988 in the Emirate of Ajman, United Arab Emirates. It operates under its own legal and regulatory framework, offering domestic and international entrepreneurs an independent jurisdiction for incorporating companies, leasing commercial facilities, obtaining trade licences, and sponsoring UAE residence visas.'
  },
  {
    q: 'What are the main benefits of setting up a business in Ajman Free Zone?',
    a: 'Key advantages include up to 100% foreign equity ownership, 0% personal income tax, 100% repatriation of capital and profits, exemption from import/export customs duties within the free zone, cost-effective setup and renewal tariffs, direct proximity to Ajman Port container terminal, diverse facility options from smart desks to industrial warehouses, and fast 24-48 hour digital processing.'
  },
  {
    q: 'Can foreign investors own 100% of a company in Ajman Free Zone?',
    a: 'Yes. Foreign nationals and international corporations are legally entitled to 100% foreign equity ownership in Ajman Free Zone entities (both Free Zone Establishments and Free Zone Companies) without requiring a local UAE national partner, sponsor, or service agent.'
  },
  {
    q: 'Which licence types are available in Ajman Free Zone?',
    a: 'Ajman Free Zone offers six primary licence categories: Commercial / Trading Licences (for specific product lines), General Trading Licences (broad-spectrum commercial commodities), Services Licences (consulting, advisory, and technical activities), Industrial / Manufacturing Licences (production, assembly, and processing), E-Commerce Licences (digital portals and online sales), and Freelance Permits for independent solopreneurs.'
  },
  {
    q: 'Is Ajman Free Zone suitable for e-commerce businesses?',
    a: 'Yes. AFZ provides dedicated E-Commerce licences tailored for online retail stores, digital marketplaces, and electronic trading platforms. These packages provide legal business identity, payment gateway integration readiness, courier/fulfilment contractual capacity, and residence visa eligibility with low overhead costs.'
  },
  {
    q: 'Can I establish a consultancy or service business in Ajman Free Zone?',
    a: 'Yes. AFZ permits a comprehensive range of professional, administrative, management, IT, marketing, HR, educational, and creative consulting activities under its Services Licence category. Certain specialized activities (such as engineering, legal consultancy, or accounting) require attested academic degrees for the appointed manager.'
  },
  {
    q: 'What documents are required for company registration?',
    a: 'For individual shareholders, standard requirements include color passport copies (valid for at least 6 months), passport photographs, UAE entry stamp/visa copies (if applicable), Emirates ID (for UAE residents), and 3 proposed trade names. Corporate shareholders or branch setups require parent company incorporation certificates, Memorandum & Articles of Association, and a notarized Board Resolution legalized up to UAE MOFA.'
  },
  {
    q: 'How much does Ajman Free Zone company formation cost?',
    a: 'Total setup costs vary based on your licence category, number of activities, facility type (smart desk vs private office vs warehouse), visa quota requirements, and external approvals. Zero-visa smart desk packages typically start from economical introductory tiers, while packages with residence visa allocations and dedicated workspaces scale accordingly. Brightlink provides transparent, itemized quotes reflecting all official authority tariffs.'
  },
  {
    q: 'How long does the registration process take?',
    a: 'Standard commercial, services, and e-commerce companies with smart desks or business centre offices are typically processed and licensed within 24 to 48 working hours following document submission. Industrial operations requiring warehouse leasing, civil defense inspections, or environmental clearances take approximately 7 to 10 working days.'
  },
  {
    q: 'Can I apply for a UAE residence visa through my company?',
    a: 'Yes. Eligible Ajman Free Zone companies can establish a corporate immigration file and sponsor 2-year renewable UAE residence visas for shareholders (Investor/Partner visa) and employees, as well as subsequent family sponsorships (spouse, children, parents). The number of available visas depends on the chosen package and leased workspace square footage.'
  },
  {
    q: 'Can I open a UAE corporate bank account for an Ajman Free Zone company?',
    a: 'Yes. A registered AFZ trade licence, Certificate of Incorporation, tenancy contract, and shareholder Emirates IDs enable your company to apply for a corporate account with major UAE commercial and digital banks (such as Emirates NBD, Mashreq, Wio, FAB, or ADCB). Final approval is subject to the bank’s independent compliance, AML/CFT risk review, and background vetting.'
  },
  {
    q: 'Does a free zone company automatically qualify for 0% corporate tax?',
    a: 'No. Free zone incorporation does not confer an automatic 0% tax rate. Under UAE Federal Corporate Tax Law (Federal Decree-Law No. 47 of 2022), an entity must satisfy the statutory criteria of a Qualifying Free Zone Person (QFZP)—including maintaining adequate substance, earning qualifying income, and preparing audited accounts—to benefit from 0% on qualifying income. Non-qualifying income is taxed at the standard 9% rate.'
  },
  {
    q: 'Can an Ajman Free Zone company sell to mainland UAE customers?',
    a: 'Free zone companies can trade freely internationally and with other UAE free zone entities. To sell physical merchandise directly into the UAE mainland retail market, a company must either distribute through a licensed mainland distributor/agent or establish an onshore mainland branch with the Department of Economic Development (DED). B2B consulting services can be rendered directly to mainland corporate clients subject to VAT rules.'
  },
  {
    q: 'Do I need an office or warehouse in Ajman Free Zone?',
    a: 'Workspace requirements depend on your licensed activity. Service, consulting, and e-commerce companies can utilize affordable shared Smart Desks or flexi-desks in AFZ business centres. General trading businesses, logistics operators, and manufacturing entities legally require physical executive offices, pre-built warehouses, or industrial land plots to meet customs and licensing regulations.'
  },
  {
    q: 'Can I add or change business activities later?',
    a: 'Yes. Ajman Free Zone allows registered entities to amend their trade licence, add complementary business activity codes, or remove obsolete activities by submitting a formal amendment application and paying the applicable authority amendment fees, subject to authority review and regulatory approval.'
  },
  {
    q: 'What is the difference between a free zone company and an offshore company?',
    a: 'An Ajman Free Zone company is an active operational legal entity entitled to lease physical/smart offices, conduct commercial trade, hire staff, obtain UAE residence visas, and open local operational bank accounts. In contrast, an Ajman Offshore company is strictly a non-resident holding vehicle designed for holding international assets, shares, or real estate; it cannot lease local workspace, sponsor visas, or trade within the UAE.'
  },
  {
    q: 'Are annual licence renewals required in Ajman Free Zone?',
    a: 'Yes. Trade licences and registered facility leases (smart desk, office, or warehouse tenancy) must be renewed annually prior to their expiry date. Operating with an expired licence results in authority financial penalties, freezing of bank accounts, and suspension of immigration files.'
  },
  {
    q: 'Which Ajman Free Zone licence may suit my business?',
    a: 'Suitability depends on your commercial model: choose a Commercial Licence for specific product trading and distribution; a General Trading Licence for unrestricted multi-commodity trade; a Services Licence for professional consulting, tech, or creative advisory; an E-Commerce Licence for digital stores and internet platforms; an Industrial Licence for manufacturing or assembly; or a Freelance Permit for individual solopreneurs. Brightlink can review your planned operations to determine the exact fit.'
  }
];

export const AjmanFreeZoneFaq = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="ajman-faq" className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Frequently Asked Questions: Ajman Free Zone
          </h2>
          <p className="text-base text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Find clear, verified answers to the 18 most important questions regarding Ajman Free Zone licences, costs, procedures, facilities, banking, and statutory compliance.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4 mb-14">
          {FAQ_DATA_AJMAN_FREE_ZONE.map((faq, index) => {
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
                    {index + 1}. {faq.q}
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
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#DECBB5]/40 mt-1">
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
            Have a specific scenario or complex activity inquiry?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation('Ajman Free Zone FAQ Inquiry')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#B8864B] hover:bg-[#8C5E28] text-white font-bold text-xs tracking-wider uppercase transition-colors shadow-xs cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask Our Consultants</span>
            </button>
            <a
              href="https://wa.me/971566556645?text=Hello%2C%20I%20have%20questions%20about%20Ajman%20Free%20Zone%20Business%20Setup"
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
