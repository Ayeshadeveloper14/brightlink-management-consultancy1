import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';

export const FAQ = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      question: 'What is Tasheel?',
      answer: 'Tasheel is an official institutional service system established under the UAE Ministry of Human Resources & Emiratisation (MOHRE). It provides a standardized electronic platform for employers and commercial establishments to manage labour-related government transactions, work permits, and employment documentation.'
    },
    {
      question: 'What Tasheel services does Brightlink provide?',
      answer: 'Brightlink assists employers with work permit issuance and renewals, standard electronic labour contracts and amendments, labour card processing, company establishment file management, visa quota applications, e-signature card updates, and Wage Protection System (WPS) compliance guidance.'
    },
    {
      question: 'Who can use Tasheel services?',
      answer: 'Tasheel services are primarily utilized by corporate employers, business owners, HR managers, PROs, and authorized signatories operating in the UAE who need to register or manage employees under MOHRE jurisdiction.'
    },
    {
      question: 'What documents are required for a Tasheel transaction?',
      answer: 'Requirements depend on the specific transaction. General requirements typically include the company trade licence, establishment card, authorized signatory e-signature credentials, employee passport copy, passport photo, signed job offer/contract, and attested educational certificates for skilled positions.'
    },
    {
      question: 'How long does a Tasheel transaction take?',
      answer: 'Processing timelines depend on the nature of the application and required ministry reviews. Electronic work permits and labour contracts are typically processed by MOHRE within standard ministerial working windows, provided all submitted papers meet regulatory criteria.'
    },
    {
      question: 'Can Brightlink handle the process on my behalf?',
      answer: 'Yes. Brightlink acts as your professional corporate liaison. Our team reviews your documentation, types and submits the electronic applications through authorized portals, monitors application status, and delivers approved permits directly to you.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#F1EBE1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Tasheel & MOHRE FAQs
          </h2>

          <p className="text-base text-[#666666] leading-relaxed">
            Clear answers to common questions regarding UAE labour transactions, employer responsibilities, and procedural requirements.
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
                    ? 'bg-[#FCFAF8] border-[#B8864B]/40 shadow-xs'
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

        {/* Small Bottom Contact Prompt */}
        <div className="mt-10 p-5 rounded-2xl bg-[#FAF5EC] border border-[#E6D7C3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span className="text-[#555555]">
            Have a question about a specific MOHRE transaction or company fine?
          </span>
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Tasheel FAQ Direct Inquiry')}
            className="shrink-0 px-4 py-2 rounded-full bg-[#B8864B] text-white font-bold hover:bg-[#9E723E] transition-colors cursor-pointer flex items-center gap-1.5"
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
