import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, ArrowRight, HelpCircle, ShieldCheck } from 'lucide-react';

export const FAQ = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      question: 'How much does an Emirates ID cost in the UAE?',
      answer: 'Official government fees issued by the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) depend on the validity duration of your residence visa. The government charge is AED 100 per year of visa validity, plus electronic typing and smart services fees (approximately AED 70–140). For a 2-year employment visa, total costs typically range from AED 270 to AED 370. For a 10-Year Golden Visa, official fees are approximately AED 1,070.'
    },
    {
      question: 'How long does the Emirates ID processing take from start to delivery?',
      answer: 'Once your residence visa is approved and biometric capture is complete, standard electronic Emirates ID generation occurs within 24 to 48 hours. The physical chip card is then manufactured by ICP and dispatched via Empost, taking 3 to 5 business days for delivery. With our Urgent VIP Fast-Track service, cards can be expedited within 24 hours.'
    },
    {
      question: 'How do I renew my Emirates ID and when should I start the process?',
      answer: 'You can initiate your Emirates ID renewal up to 30 days prior to its expiry date, or within the official 30-day post-expiration grace period. Brightlink reviews your renewed residency visa, submits the electronic renewal typing to ICP, and arranges biometric waivers if your fingerprint data is already active in the federal database.'
    },
    {
      question: 'What happens if I lose or damage my Emirates ID card?',
      answer: 'If your card is lost or stolen, you must report it immediately to deactivate its smart chip and prevent unauthorized usage. Brightlink can immediately file a replacement request through the ICP portal without requiring you to retake biometrics. A new replacement card is printed with the exact same ID number and delivered to your doorstep within 48–72 hours.'
    },
    {
      question: 'Do newborn babies and children require an Emirates ID in the UAE?',
      answer: 'Yes. Every child residing in the UAE, including newborn infants, is legally required to hold an Emirates ID. For children under 15 years old, physical biometric fingerprinting and iris scanning are not required; parents only need to submit the child’s attested birth certificate, passport copy, sponsor visa, and high-resolution passport photo.'
    },
    {
      question: 'How can I track the status of my Emirates ID application?',
      answer: 'Upon submission, an official PRAN (Application Request Number) or Application ID is generated. You can track this in real-time on the official ICP smart services portal (icp.gov.ae) or through the UAE ICP mobile app. Brightlink also monitors your application around the clock and sends WhatsApp milestone alerts when your card enters printing and courier transit.'
    },
    {
      question: 'Can I travel or use government services while waiting for my physical card?',
      answer: 'Yes. Once your residency and Emirates ID application are approved by ICP, a digital version of your Emirates ID is immediately generated. You can access and display this digital card on the UAE ICP mobile application, GDRFA app, and UAE Pass. It holds the same legal validity as the physical plastic card for government transactions, bank KYC updates, and domestic procedures.'
    },
    {
      question: 'What is the penalty for late renewal of an Emirates ID?',
      answer: 'Under ICP regulations, late renewal attracts a statutory penalty of AED 20 per day, accruing after the official 30-day grace period has passed, up to a maximum cap of AED 1,000. Brightlink helps clients file early to eliminate all late fees and can request penalty exemption waivers for eligible emergency cases.'
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
            Emirates ID Guidance & FAQs
          </h2>

          <p className="text-base text-[#666666] leading-relaxed">
            Clear answers to common questions about ICP typing, processing timelines, lost cards, biometrics, children requirements, and government fees.
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

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#FAF5EC] to-[#F5ECE0] border border-[#E6D7C3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#B8864B]/15 flex items-center justify-center text-[#B8864B] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#222222]">
                Have a question regarding your specific application or fine?
              </h4>
              <p className="text-xs text-[#666666]">
                Speak directly with an accredited Brightlink identity consultant.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Emirates ID FAQ Help Request')}
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#B8864B] text-white font-bold text-xs hover:bg-[#9E723E] transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <span>Ask an Advisor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
