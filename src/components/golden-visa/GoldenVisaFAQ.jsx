import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, ArrowRight, HelpCircle } from 'lucide-react';

export const GoldenVisaFAQ = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      question: 'Can I apply for the Golden Visa if my property is mortgaged?',
      answer: 'Yes. Under current Dubai Land Department (DLD) regulations, mortgaged properties are eligible provided your total paid-up equity in the property is at least AED 2,000,000. You must obtain an official Non-Objection Certificate (NOC) and statement of paid amount from your lending bank in the UAE.'
    },
    {
      question: 'Can I sponsor my family members under the 10-Year Golden Visa?',
      answer: 'Yes. A primary Golden Visa holder can sponsor their spouse and children of any age (there is no 25-year-old age restriction for unmarried sons, and daughters remain eligible until marriage). You may also sponsor domestic staff such as maids, nannies, and private chauffeurs with no numerical limit, subject to accommodation rules.'
    },
    {
      question: 'What is the minimum salary requirement for skilled professionals and executives?',
      answer: 'Skilled professionals must have an active UAE employment contract with a minimum monthly salary of AED 30,000 (basic salary plus allowances), hold an attested Bachelor degree or higher, and belong to MOHRE Occupational Level 1 (Managers/Executives) or Level 2 (Professionals in science, engineering, tech, medicine, education, etc.).'
    },
    {
      question: 'Do I need to stay in the UAE every 6 months to keep my Golden Visa active?',
      answer: 'No. Unlike standard UAE residency visas which automatically cancel if you remain outside the UAE for more than 180 continuous days, the 10-Year Golden Visa exempts holders from this rule. You can stay outside the UAE for any duration without your residency being invalidated.'
    },
    {
      question: 'How long does the entire Golden Visa process take with Brightlink?',
      answer: 'The complete process generally takes 3 to 7 working days once your core documents are ready. In-country status change, priority VIP medical fitness examination (with results in 30 minutes via Smart Salem), and Emirates ID biometrics are scheduled seamlessly to ensure maximum speed.'
    },
    {
      question: 'Can I switch from a normal UAE employment visa to a 10-Year Golden Visa?',
      answer: 'Yes. You can cancel your current employment or partner residency visa and transition smoothly to the 10-Year Golden Visa via an in-country status amendment without exiting the UAE. Your current employer does not have to act as your sponsor.'
    },
    {
      question: 'What happens to my dependents if the primary sponsor passes away?',
      answer: 'In the unfortunate event of the primary Golden Visa holder’s demise, sponsored family members are legally permitted to remain in the UAE until the full conclusion of their 10-year residency term without interruption.'
    },
    {
      question: 'What is the Esaad card and how do I receive it?',
      answer: 'The Esaad card is an exclusive government privilege loyalty card issued by the Dubai Police General Headquarters. All Dubai Golden Visa holders are eligible to receive it complimentary, unlocking discounts at hotels, airlines, schools, hospitals, automotive dealerships, and luxury boutiques across the UAE and globally.'
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Got Questions About the Golden Visa?
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Essential facts, mortgage eligibility, family sponsorship terms, and procedural guidelines for the UAE 10-Year Residency program.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? 'border-[#B8864B]/60 bg-[#FCFAF8] shadow-xs'
                    : 'border-[#EFEAE2] bg-white hover:border-[#DECBB5]'
                }`}
              >
                <button
                  type="button"
                  id={`gv-faq-btn-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`gv-faq-ans-${index}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left py-4 px-5 sm:py-5 sm:px-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8864B] rounded-2xl"
                >
                  <span className={`text-sm sm:text-base font-bold font-heading transition-colors ${
                    isOpen ? 'text-[#976A36]' : 'text-[#222222]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-[#B8864B] text-white' : 'bg-[#FAF5EC] text-[#B8864B]'
                  }`}>
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
                      id={`gv-faq-ans-${index}`}
                      role="region"
                      aria-labelledby={`gv-faq-btn-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#F1EBE1]/60">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Custom Assessment Box */}
        <div className="text-center p-6 rounded-2xl bg-[#FAF8F5] border border-[#EFEAE2]">
          <h3 className="text-sm font-bold text-[#222222] mb-1 font-heading">
            Have a unique asset, off-plan portfolio, or specialized talent?
          </h3>
          <p className="text-xs text-[#666666] mb-4">
            Our senior immigration lawyers review complex titles, multi-property portfolios, and overseas qualifications with discretion.
          </p>
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Golden Visa Custom Assessment')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#976A36] hover:bg-[#B8864B] hover:text-white font-bold text-xs transition-all cursor-pointer"
          >
            <span>Ask our legal consultants</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
