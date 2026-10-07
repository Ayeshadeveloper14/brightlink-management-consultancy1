import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';

export const FAQ = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      question: 'What is the minimum income required for the UAE virtual work visa?',
      answer: 'Applicants must demonstrate a minimum monthly income of USD 3,500 or the equivalent in foreign currency. This requirement is set by the GDRFA for Dubai and by the ICP for other emirates. Proof is typically provided through a salary certificate and recent bank statements.'
    },
    {
      question: 'Can I sponsor my family on the virtual work visa?',
      answer: 'Yes. The GDRFA confirms that virtual work visa holders may sponsor their spouse and children for the same residency duration. Dependents must have valid health insurance covering the UAE, and additional documentation may be required.'
    },
    {
      question: 'How long does the virtual work visa take to process?',
      answer: 'The GDRFA estimates a processing time of 48 hours for visa issuance, provided all documents are complete. Additional time is required for the medical fitness test and Emirates ID registration after arrival or status change.'
    },
    {
      question: 'Can I switch from the virtual work visa to an employment visa?',
      answer: 'Yes. If a virtual work visa holder receives a valid job offer from a UAE employer, they may apply for an employment visa. The employer must obtain a MoHRE work permit and sponsor the applicant\'s residency. The virtual work visa does not convert automatically.'
    },
    {
      question: 'Does the virtual work visa allow me to work for UAE clients?',
      answer: 'No. The virtual work visa permits residency in the UAE while working exclusively for employers or clients outside the country. Working for UAE-based entities requires a different visa and a MoHRE work permit. Freelancers seeking to serve UAE clients should consider a freelance permit or business licence.'
    },
    {
      question: 'What happens if my virtual work visa expires?',
      answer: 'A 60-day grace period applies after the visa expires or is cancelled. During this period, the holder must apply for a new visa, obtain a different residence category, or leave the UAE. Overstaying beyond the grace period results in fines.'
    },
    {
      question: 'Can I apply for the virtual work visa from outside the UAE?',
      answer: 'Yes. The application can be submitted online through the GDRFA or ICP digital platforms. Upon approval, an entry permit is issued. The applicant then has 60 days to enter the UAE and complete the residency procedures, including the medical fitness test and Emirates ID biometrics.'
    },
    {
      question: 'Is the virtual work visa the same as the Dubai digital nomad visa?',
      answer: 'The terms “virtual work visa,” “remote work visa,” and “digital nomad visa” are commonly used to describe the UAE Virtual Working Programme. The official terminology used by the relevant authorities should be followed when submitting an application.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] relative border-b border-[#F1EBE1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Essential facts, income proofs, and procedural clarifications regarding the UAE Virtual Working Programme.
          </p>
        </motion.div>

        {/* Accordion Cards */}
        <div className="space-y-3.5 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-colors ${
                  isOpen
                    ? 'border-[#B8864B]/50 bg-white shadow-xs'
                    : 'border-[#EFEAE2] bg-white hover:border-[#DECBB5]'
                }`}
              >
                <button
                  type="button"
                  id={`virtual-faq-btn-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`virtual-faq-ans-${index}`}
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
                      id={`virtual-faq-ans-${index}`}
                      role="region"
                      aria-labelledby={`virtual-faq-btn-${index}`}
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

        {/* Advisory Action Button */}
        <div className="text-center p-6 rounded-2xl bg-white border border-[#EFEAE2] shadow-xs">
          <h3 className="text-sm font-bold text-[#222222] mb-1 font-heading">
            Have specific remote employment documentation questions?
          </h3>
          <p className="text-xs text-[#666666] mb-4">
            Our government typing specialists review salary certificates, overseas employment letters, and bank statements before submission.
          </p>
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Virtual Work Visa FAQ Inquiry')}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#976A36] hover:bg-[#B8864B] hover:text-white font-bold text-xs transition-all cursor-pointer"
          >
            <span>Consult an immigration specialist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
