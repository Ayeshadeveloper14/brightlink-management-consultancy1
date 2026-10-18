import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare, PhoneCall } from 'lucide-react';

export const FAQ_DATA_DUBAI_FREE_ZONE = [
  {
    q: 'Can a Dubai Free Zone company do business in the UAE mainland?',
    a: 'Yes, but through established regulatory channels. A Dubai Free Zone entity can conduct direct business globally and with other free zones throughout the UAE. To trade physical goods directly within the UAE mainland, the company can work through a locally licensed distributor or commercial agent, or obtain a mainland branch license or dual license.'
  },
  {
    q: 'Do I need to live in the UAE to own a Dubai Free Zone company?',
    a: 'No, you do not need to reside in the UAE or hold a UAE residence visa to own shares in a Dubai Free Zone company. 100% foreign ownership is permitted for non-residents. However, if you wish to reside in Dubai, open a local personal bank account, or sponsor family members, your free zone company entitles you to apply for a 2-year renewable UAE investor/partner residence visa.'
  },
  {
    q: 'How long does it take to establish a Dubai Free Zone company?',
    a: 'Typically, free zone trade license issuance takes between 3 to 7 working days once all required KYC documentation and passport copies are submitted to the chosen Free Zone Authority. Following license issuance, the Immigration Establishment Card takes approximately 2 to 3 working days, and residence visa processing (including medical fitness and Emirates ID biometrics) takes another 5 to 7 working days.'
  },
  {
    q: 'What is the difference between an FZE and an FZ-LLC?',
    a: 'A Free Zone Establishment (FZE) is formed with a single shareholder (which can be an individual person or a corporate entity). A Free Zone Limited Liability Company (FZ-LLC or FZC) is formed with two or more shareholders (up to 50 shareholders). Both entity types provide limited liability protection insulating shareholders’ personal assets to their invested capital.'
  },
  {
    q: 'How many residence visas can my free zone company obtain?',
    a: 'Visa quotas are directly tied to your chosen license package and workspace facility. Modern packages range from zero-visa (virtual license) up to 1 to 6 visas on flexible desk / smart office packages. If you require larger teams (10 to 50+ visas), you can lease dedicated physical office spaces or warehouses, where quotas are typically allocated based on square footage.'
  },
  {
    q: 'Are Dubai Free Zone companies subject to UAE Federal Corporate Tax?',
    a: 'Under the UAE Corporate Tax law, all UAE entities (including free zone companies) must register for Corporate Tax with the Federal Tax Authority (FTA). However, entities that meet the statutory criteria of a "Qualifying Free Zone Person" (QFZP) can benefit from a 0% corporate tax rate on Qualifying Income. Income derived from non-qualifying activities is taxed at the standard federal rate of 9%.'
  },
  {
    q: 'Do I need a physical office, or is a flexi-desk sufficient?',
    a: 'For most service consultancies, digital marketing firms, IT specialists, and e-commerce companies, a flexi-desk, smart desk, or shared coworking facility is fully acceptable and legally compliant with the Free Zone Authority. Physical offices are generally only required for high visa counts, specialized trading with physical inspections, or industrial operations.'
  },
  {
    q: 'Can I open a corporate bank account with a Dubai Free Zone license?',
    a: 'Yes. A Dubai Free Zone trade license, Certificate of Incorporation, Memorandum of Association (MOA), and active Emirates ID enable you to open corporate bank accounts with leading UAE and international commercial banks (such as Emirates NBD, Mashreq, Wio Bank, and FAB). Brightlink prepares your comprehensive banking dossier to streamline compliance approvals.'
  },
  {
    q: 'Can I sponsor my family members under my Free Zone visa?',
    a: 'Yes. Once you have received your 2-year investor/partner residence visa and Emirates ID, you can sponsor your spouse, children, and parents for UAE residence visas. Brightlink’s in-house typing center handles all family visa paperwork, document translation, and medical appointments directly.'
  },
  {
    q: 'Can multiple business activities be combined under one Free Zone license?',
    a: 'Yes. Most Dubai free zone authorities (including IFZA, DMCC, and Meydan) permit multiple commercial and professional activities to be combined under a single trade license, provided the activities belong to compatible categories or are approved by the authority.'
  }
];

export const DubaiFreeZoneFaq = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="dubai-free-zone-faq" className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B8864B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>EXPERT ANSWERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#475569] leading-relaxed max-w-2xl mx-auto">
            Clear, authoritative answers to common questions regarding Dubai Free Zone company formation, tax residency, and operational regulations.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA_DUBAI_FREE_ZONE.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
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

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-[#E6D7C3] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <span className="text-xs font-bold text-[#0F172A] block font-heading">
              Have a specific question about your activity or jurisdiction?
            </span>
            <span className="text-xs text-[#64748B] block">
              Our setup advisors are ready to assist with customized regulatory guidance.
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenConsultation('Dubai Free Zone FAQ Question')}
              className="px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer font-heading"
            >
              Ask an Advisor
            </button>
            <a
              href="https://wa.me/971566556645?text=Hello%2C%20I%20have%20a%20question%20about%20Dubai%20Free%20Zone%20Business%20Setup."
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
