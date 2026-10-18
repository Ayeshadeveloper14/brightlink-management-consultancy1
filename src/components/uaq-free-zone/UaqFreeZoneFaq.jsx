import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  HelpCircle, 
  ChevronDown, 
  PhoneCall, 
  MessageSquare, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const FAQ_DATA_UAQ_FREE_ZONE = [
  {
    q: '1. What is UAQ Free Trade Zone?',
    a: 'Umm Al Quwain Free Trade Zone (UAQ FTZ) is an established governmental economic zone located in the Emirate of Umm Al Quwain, United Arab Emirates. It provides international investors, commercial traders, independent consultants, and emerging entrepreneurs with a structured corporate framework enabling 100% foreign equity ownership, commercial licensing, modular workspace options, and UAE residency visa eligibility.'
  },
  {
    q: '2. Is UAQ Free Zone the same as UAQ FTZ?',
    a: 'Yes. “UAQ Free Zone” and “UAQ FTZ” are interchangeable designations commonly used by business consultants, government bodies, and international entrepreneurs to refer to the Umm Al Quwain Free Trade Zone authority.'
  },
  {
    q: '3. Who can establish a company in UAQ FTZ?',
    a: 'Foreign individual entrepreneurs, expatriate residents, international corporations, and existing UAE mainland or free zone companies can establish corporate entities in UAQ FTZ, subject to standard authority compliance, anti-money laundering (AML) screening, and security clearance.'
  },
  {
    q: '4. What types of licences are available?',
    a: 'UAQ FTZ offers several licensing categories, including Commercial/Trading Licences (for designated merchandise), General Trading Licences (for multi-commodity trade), Service Licences (for professional technical and operational services), Consultancy Licences (for expert advisory and strategy), E-Commerce Licences (for digital stores and online portals), Freelance Permits (for solo practitioners), and Industrial Licences (for manufacturing and assembly).'
  },
  {
    q: '5. Can I establish an e-commerce company in UAQ FTZ?',
    a: 'Yes. UAQ FTZ provides dedicated e-commerce licensing activities that authorize entrepreneurs to sell consumer goods or digital services through customized online storefronts, electronic marketplaces, and social commercial platforms. Delivery of physical merchandise inside the UAE mainland must be handled via licensed domestic courier logistics partners.'
  },
  {
    q: '6. Can foreign investors own a UAQ FTZ company?',
    a: 'Yes. International investors and expatriates are permitted 100% foreign equity ownership of UAQ FTZ companies without the requirement of an Emirati national partner, sponsor, or local service agent.'
  },
  {
    q: '7. What is the difference between an FZE and an FZC?',
    a: 'A Free Zone Establishment (FZE) is formed with exactly one shareholder (either an individual natural person or a single corporate body). A Free Zone Company (FZC) is structured for multiple shareholders (between 2 and 50 partners), accommodating co-founders, corporate joint ventures, or investment syndicates.'
  },
  {
    q: '8. What documents are required?',
    a: 'For individual shareholders, standard requirements include high-resolution passport copies (valid for at least 6 months), UAE visa/entry stamp (if applicable), Emirates ID copy (for UAE residents), passport photos, proof of residential address (utility bill or bank statement), and three proposed company names. Corporate shareholders require notarized and attested certificates of incorporation, memorandum of association (MOA), board resolutions, and UBO disclosures.'
  },
  {
    q: '9. How much does UAQ Free Zone company formation cost?',
    a: 'Total setup costs depend on the chosen licence category (commercial, service, general trading, or industrial), the number of registered activities, the workspace package selected (flexi-desk vs dedicated office vs warehouse), establishment card fees, and the number of residence visas required. Brightlink provides transparent, itemized quotes distinguishing official government authority fees from facility leases and PRO service costs.'
  },
  {
    q: '10. How long does company formation take?',
    a: 'Standard trade licence issuance typically takes between 3 to 5 business days following complete document submission and security review. Setting up the company immigration file, electronic entry permit, medical test, and Emirates ID biometric processing takes an additional 5 to 7 business days. Corporate bank account opening depends on independent bank due diligence (typically 2 to 4 weeks).'
  },
  {
    q: '11. Can a UAQ FTZ company apply for UAE residence visas?',
    a: 'Yes, provided the company registers an active Establishment Card with the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) and maintains an eligible facility package. Eligible entities can apply for 2-year renewable investor/partner visas, employee visas, and subsequent family dependent sponsorship.'
  },
  {
    q: '12. Is an office required?',
    a: 'Every registered company in UAQ FTZ must maintain an official physical presence or registered facility lease under UAE regulations. For lean businesses, remote consultants, and digital traders, an economical flexi-desk (shared workspace) lease satisfies statutory requirements. Companies handling physical inventory or larger staff require private offices or warehouses.'
  },
  {
    q: '13. Can I open a UAE corporate bank account?',
    a: 'Yes. UAQ FTZ trade licences are recognized across UAE Central Bank-regulated financial institutions, including Emirates NBD, Mashreq, Abu Dhabi Commercial Bank (ADCB), First Abu Dhabi Bank (FAB), RAKBANK, and digital neobanks like Wio Bank. Approval is independently determined by each bank following strict AML/KYC review of your business model, source of funds, and transaction history.'
  },
  {
    q: '14. Can a UAQ FTZ company trade with mainland customers?',
    a: 'Yes, through compliant commercial channels. For physical merchandise, goods must undergo formal customs clearance and 5% duty payment, distributed via a licensed UAE mainland distributor, commercial agent, or mainland branch entity. For professional services and software consulting, UAQ FTZ companies can directly contract with UAE mainland corporate clients on a B2B basis.'
  },
  {
    q: '15. Does a UAQ FTZ company automatically qualify for 0% corporate tax?',
    a: 'No. Free zone companies do not automatically receive 0% corporate tax across all revenue. Under UAE Federal Corporate Tax law, a 0% rate applies strictly to “Qualifying Income” earned by a Qualifying Free Zone Person (QFZP) that maintains adequate economic substance, conducts eligible activities, and complies with transfer pricing rules. Taxable non-qualifying income exceeding AED 375,000 is taxed at the standard 9% rate. All companies must register for Corporate Tax with the FTA.'
  },
  {
    q: '16. Are annual licence renewal fees applicable?',
    a: 'Yes. All UAE free zone licences must be renewed annually. Renewal fees encompass authority licence maintenance, workspace or facility lease extension, and establishment card validity. Brightlink provides advance renewal reminders and transparent fee breakdowns.'
  },
  {
    q: '17. Can an existing foreign company open a branch?',
    a: 'Yes. Foreign multinational enterprises and existing overseas companies can establish a registered Branch of a Foreign Company in UAQ FTZ. The branch operates under the legal personality of the parent company, which must provide attested constitutive documents and board resolutions.'
  },
  {
    q: '18. Can I add or change business activities later?',
    a: 'Yes. UAQ FTZ allows licensees to amend their business licence post-incorporation by adding new approved activity codes, removing obsolete activities, or upgrading to general trading, subject to authority review, amended MOA filing, and standard administrative fees.'
  },
  {
    q: '19. Are audit requirements applicable to UAQ FTZ companies?',
    a: 'UAE corporate regulations and tax compliance frameworks require companies to maintain standard accounting books and records compliant with IFRS. Furthermore, entities claiming Qualifying Free Zone Person (QFZP) status for 0% corporate tax must prepare and submit annual audited financial statements certified by an accredited UAE auditor. Brightlink connects clients with certified audit partners.'
  },
  {
    q: '20. How can Brightlink help me set up a UAQ FTZ company?',
    a: 'Brightlink provides comprehensive end-to-end guidance: from initial commercial feasibility review and activity classification to document attestation, authority application submission, trade name reservation, workspace leasing, establishment card activation, residence visa processing, and corporate bank account dossier preparation.'
  }
];

export const UaqFreeZoneFaq = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [openIdx, setOpenIdx] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>AUTHORITATIVE GUIDANCE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Frequently Asked Questions: UAQ Free Zone Setup
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Detailed, accurate answers addressing licensing rules, legal entity differences, corporate tax compliance, visas, and banking procedures in UAQ FTZ.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA_UAQ_FREE_ZONE.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                className="bg-[#FAF7F0]/30 rounded-2xl border border-[#E6D7C3] overflow-hidden transition-all duration-200 hover:border-[#DECBB5]"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] font-heading">
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-xl bg-white border border-[#E6D7C3] flex items-center justify-center shrink-0 text-[#B8864B] transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#FAF5EC]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-7 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#F1EAE0]/70 font-sans">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Further Consultation Assistance */}
        <div className="text-center pt-8 border-t border-[#E6D7C3]/60 space-y-4">
          <p className="text-sm font-semibold text-[#1E293B]">
            Have a specific activity code or unique shareholder structure in mind?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                if (onOpenConsultation) {
                  onOpenConsultation('UAQ Free Zone Specific Inquiries');
                } else {
                  window.open('https://wa.me/971566556645?text=Hello%2C%20I%20have%20specific%20questions%20regarding%20company%20formation%20in%20UAQ%20Free%20Zone.', '_blank');
                }
              }}
              className="px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white text-xs font-bold transition-all shadow-md shadow-[#B8864B]/20 cursor-pointer inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss My Business Activity</span>
            </button>
            <a
              href="tel:+971566556645"
              className="px-6 py-3 rounded-xl bg-white hover:bg-[#FAF6F0] text-[#0F172A] border border-[#DECBB5] text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#B8864B]" />
              <span>Call +971 56 655 6645</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
