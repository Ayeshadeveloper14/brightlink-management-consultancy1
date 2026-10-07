import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, ArrowRight, HelpCircle, ShieldCheck } from 'lucide-react';

export const ProServicesFAQ = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      question: 'What is a PRO (Public Relations Officer) in the UAE and what do they do?',
      answer: 'A Public Relations Officer (PRO) is an accredited government liaison specialist who manages all official administrative and legal filings between your company and UAE ministerial departments. This includes the Department of Economy and Tourism (DET / DED), Ministry of Human Resources & Emiratisation (MOHRE), General Directorate of Residency and Foreigners Affairs (GDRFA), Federal Authority for Identity, Citizenship, Customs and Port Security (ICP), and Dubai Municipality.'
    },
    {
      question: 'Why should our company outsource PRO services instead of hiring an in-house PRO?',
      answer: 'Hiring an in-house PRO requires paying a fixed monthly salary (AED 8,000–18,000+), annual flights, medical insurance, gratuity, and company vehicle expenses. Outsourcing to Brigitlink gives you a complete team of senior PRO officers at a fraction of the cost (from AED 2,200/month or pay-per-transaction), guarantees 100% SLA uptime with no sick days or holidays, and provides direct ministerial network connections across all Emirates.'
    },
    {
      question: 'What is an Establishment Card and why does my business need one?',
      answer: 'An Establishment Card (also known as a Company Immigration Card or Labour Establishment Card) is a mandatory document registered with the GDRFA and MOHRE. It registers your company in the federal immigration system, enabling you to issue work permits, sponsor employee visas, apply for partner visas, and hire foreign staff in the UAE.'
    },
    {
      question: 'How does Brigitlink protect our company from late renewal fines and compliance penalties?',
      answer: 'We provide automated compliance tracking for all your trade licenses, establishment cards, employee visas, labor cards, and tenancy contracts (Ejari). Our system triggers milestone renewal alerts at 60, 30, and 15 days before expiration, initiating processing before deadline cut-offs to eliminate expensive ministerial delay fines.'
    },
    {
      question: 'How fast can an employee work permit and employment visa be processed?',
      answer: 'Under our express corporate routing, entry permits are typically issued within 24 to 48 hours. Medical fitness tests can be expedited with VIP 30-minute to 2-hour turnaround times through Smart Salem centers, and biometric Emirates ID capture is scheduled on the same or next business day, completing full stamping in 3 to 5 working days.'
    },
    {
      question: 'Can Brigitlink handle quota increases and Tawjeeh training sessions?',
      answer: 'Yes. We prepare and submit company quota increase applications to MOHRE, including office inspection clearance and required commercial justifications. We also coordinate mandatory Tawjeeh orientation bookings for newly recruited workers to ensure full compliance with UAE Labor Law.'
    },
    {
      question: 'Do you provide services across Free Zones and UAE Mainland?',
      answer: 'Yes. We support Mainland companies across all Emirates (Dubai DET, Abu Dhabi ADDED, Sharjah SEDD) as well as all major Free Zones including DMCC, DIFC, DWTC, DAFZA, JAFZA, IFZA, Meydan, RAKEZ, and Shams.'
    },
    {
      question: 'How are official government fees billed and tracked?',
      answer: 'Brigitlink operates on total transparency. Every government transaction is backed by the official government electronic receipt (e-voucher / sadad receipt) reflecting the exact ministerial fee. Clients can opt for an advance deposit corporate escrow account or direct reimbursement per application with itemized monthly statements.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FFFFFF] relative border-b border-[#F1EBE1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Corporate PRO Services FAQ
          </h2>
          <p className="text-base text-[#666666] leading-relaxed">
            Everything you need to know about outsourcing corporate PRO operations, government fee structures, compliance requirements, and employee visa processing in Dubai and the UAE.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FCFAF8] border-[#B8864B]/40 shadow-sm'
                    : 'bg-[#FFFFFF] border-[#EFEAE2] hover:border-[#D9C4A9]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[#222222]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#B8864B] text-white'
                        : 'bg-[#FAF5EC] text-[#B8864B]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
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
                      <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#555555] leading-relaxed border-t border-[#F1EBE1]/70">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Assistance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#FAF5EC] to-[#F5ECE0] border border-[#E6D7C3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#B8864B]/15 flex items-center justify-center text-[#B8864B] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#222222]">
                Have a specific government compliance question?
              </h4>
              <p className="text-xs text-[#666666]">
                Speak directly with an accredited UAE corporate PRO specialist.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Corporate PRO FAQ Assistance')}
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#B8864B] text-white font-bold text-xs hover:bg-[#9E723E] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Ask an Expert</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProServicesFAQ;
