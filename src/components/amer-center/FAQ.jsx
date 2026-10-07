import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, ArrowRight, HelpCircle, ShieldCheck } from 'lucide-react';

export const FAQ = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      question: 'What is the role of an Amer Center and what services are provided?',
      answer: 'An Amer Center is an authorized government service provider operating under the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai). Amer Centers process all visa and residency transactions, entry permits, visa renewals, status amendments, cancellations, Emirates ID typing, and fine settlements for both individuals and corporate entities.'
    },
    {
      question: 'Can Brigitlink handle Amer Center submissions completely online?',
      answer: 'Yes. You do not need to physically visit an Amer branch. Through Brigitlink, you can submit your scanned documents digitally. Our certified officers audit your papers, submit them directly through electronic GDRFA portals, process official government fees, and coordinate all appointments and deliveries on your behalf.'
    },
    {
      question: 'What is an In-Country Status Change and how does it work?',
      answer: 'An In-Country Status Change allows you to switch your legal residency status (such as moving from a tourist visa, visit visa, or previous employment visa to a new residence permit) without exiting the UAE. Once your new entry permit is issued, Amer processes the status amendment electronically, eliminating the need to take an airport or border run.'
    },
    {
      question: 'What are the basic salary requirements to sponsor family members?',
      answer: 'To sponsor your spouse and children in Dubai through Amer, a male or female sponsor must earn a minimum monthly salary of AED 4,000, or AED 3,000 plus company-provided accommodation. To sponsor parents, the minimum salary threshold is typically AED 20,000 per month (or AED 19,000 plus two-bedroom accommodation), subject to humanitarian approval.'
    },
    {
      question: 'How long does it take to process a residency visa through Amer Center?',
      answer: 'Electronic entry permits are typically approved within 24 to 48 hours. Medical fitness tests can be expedited with VIP 30-minute to 2-hour turnaround through Smart Salem, and biometric appointments are arranged promptly. Once biometrics and medical results are cleared, electronic residency stamping is finalized in 2 to 4 working days.'
    },
    {
      question: 'How does Amer Center handle Emirates ID registration and renewal?',
      answer: 'Amer Centers are integrated with the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP). When you process your residence visa, your Emirates ID electronic typing is synchronized simultaneously, generating your official PRAN application registration number and appointment confirmation.'
    },
    {
      question: 'What happens if my visa expires before I renew it through Amer?',
      answer: 'The UAE Government grants a 30-day grace period following residency visa expiration to renew your visa or exit the country without penalty. If you exceed the grace period, a statutory fine of AED 50 per day applies. Brigitlink tracks expiration deadlines in advance to ensure your renewal is filed safely within the grace period.'
    },
    {
      question: 'Are government fees for Amer services standardized?',
      answer: 'Yes. Official government charges are fixed by GDRFA, MOHRE, and ICP. Brigitlink provides complete financial transparency: every transaction includes official government e-vouchers showing the exact ministerial fee breakdown, with no hidden surcharges.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative border-b border-[#F1EBE1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Amer Center Guidance & FAQs
          </h2>

          <p className="text-base text-[#666666] leading-relaxed">
            Everything you need to know about GDRFA immigration rules, online application processing, family sponsorship, and fees.
          </p>
        </motion.div>

        {/* Modern Accordion List */}
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

        {/* Bottom Contact Pill */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#FAF5EC] to-[#F5ECE0] border border-[#E6D7C3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#B8864B]/15 flex items-center justify-center text-[#B8864B] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#222222]">
                Need immediate help with a stalled GDRFA file or fine?
              </h4>
              <p className="text-xs text-[#666666]">
                Speak directly with an accredited Amer Center consultant.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Amer Center Urgent FAQ Assistance')}
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#B8864B] text-white font-bold text-xs hover:bg-[#9E723E] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Consult an Expert</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
