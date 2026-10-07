import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'What is the minimum salary required to sponsor my spouse and children in Dubai?',
    answer: 'Under current UAE immigration regulations, the minimum monthly salary required to sponsor your spouse and children is AED 4,000, or AED 3,000 if your employer provides accommodation. You will need to provide an official MOHRE contract (for mainland private companies) or a salary certificate (for free zone or government entities) accompanied by a registered Ejari tenancy contract.'
  },
  {
    question: 'Can a female resident sponsor her husband and children in the UAE?',
    answer: 'Yes. A female resident holding a valid UAE residence visa can legally sponsor her husband and children. If she is employed in specialized fields such as engineering, medicine (doctor/nurse), teaching, or academia, the salary threshold is typically AED 3,000 – 4,000 plus housing. For other professions, immigration requires a minimum monthly salary of AED 10,000 or special approval from the GDRFA humanitarian committee.'
  },
  {
    question: 'Up to what age can I sponsor my son and daughter under the updated laws?',
    answer: 'Under the new UAE Advanced Visa System, expatriate parents can sponsor their sons up to 25 years of age (expanded from the previous age cap of 18). Unmarried daughters can be sponsored at any age with no upper age limit, provided they are not legally married. Children of determination (with special needs) receive lifetime residence permits without age limits.'
  },
  {
    question: 'Can I sponsor only one parent if both are alive?',
    answer: 'No. Under standard UAE immigration law, expatriates must sponsor both parents together. Sponsoring a single parent is only permitted on strict humanitarian grounds with attested legal proof that one parent is deceased (death certificate) or that parents are legally divorced with custody judgment, or if the sponsor is an only child.'
  },
  {
    question: 'What are the accommodation and salary requirements for sponsoring parents?',
    answer: 'To sponsor parents in Dubai, the sponsor must earn a minimum salary of AED 20,000 per month (or AED 19,000 plus a 2-bedroom accommodation provided by the employer). Furthermore, you must provide a registered 2-bedroom tenancy contract (Ejari), purchase mandatory comprehensive private health insurance, and submit a consular dependency certificate.'
  },
  {
    question: 'Can my family change their visa status without doing an Oman border run or airport flight?',
    answer: 'Yes. If your family members are already in the UAE on a visit visa, tourist visa, or cancelled residence visa, BrightLink can process an in-country Change of Status directly through the GDRFA electronic portal. There is no need for them to exit the country or make a border run.'
  },
  {
    question: 'Who is required to take the DHA medical fitness test?',
    answer: 'The medical fitness examination is mandatory for all dependents aged 18 and older. Children below 18 are completely exempt from blood tests and chest X-rays. For adults, the test screens for HIV, Hepatitis B & C, and pulmonary tuberculosis.'
  },
  {
    question: 'What happens if a dependent has an old scar on their chest X-ray?',
    answer: 'In the UAE, applicants found with inactive or old pulmonary tuberculosis scars are not immediately deported. Under current humanitarian health regulations, they may be placed on a preventive treatment program and issued a 1-year residency visa with periodic medical follow-ups.'
  },
  {
    question: 'How long does the entire family visa process take from start to finish?',
    answer: 'Standard processing takes 3 to 5 business days from file opening to residency approval. If you opt for express VIP services (VIP 4-hour Smart Salem medical and fast-track biometric typing), the entire procedure can be finalized in 2 to 3 working days.'
  },
  {
    question: 'Can I sponsor stepchildren from my spouse’s previous marriage?',
    answer: 'Yes, stepchildren can be sponsored subject to approval from the GDRFA director. You must present an attested No-Objection Certificate (NOC) from the biological father, certified court custody documents legally translated into Arabic, and place a refundable security deposit.'
  }
];

export const FamilyVisaFaqSection = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#EFEAE2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#B8864B]/20 text-[#8C6230] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight font-heading">
            Frequently Asked Questions
          </h2>

          <p className="text-sm text-[#4B5563] leading-relaxed">
            Essential answers on UAE salary criteria, Ejari documentation, age restrictions, and health insurance rules.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-[#FCFAF8] rounded-xl border border-[#E6D7C3] transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-bold text-[#111827] leading-snug">
                    {item.question}
                  </span>
                  
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#B8864B] text-white'
                        : 'bg-[#FAF5EC] text-[#8C6230]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#EFEAE2]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-12 text-center p-6 bg-[#FAF7F2] rounded-2xl border border-[#E6D7C3]">
          <h4 className="text-sm font-bold text-[#111827] mb-1">
            Have a unique family scenario or question?
          </h4>
          <p className="text-xs text-[#6B7280] mb-4">
            Our Business Bay typing managers are available to review your labor contract and documents with zero obligation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onOpenConsultation('Family Visa FAQ Inquiry')}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#B8864B] hover:bg-[#A07038] shadow-xs cursor-pointer transition-colors"
            >
              Ask an Immigration Specialist
            </button>
            <a
              href="https://wa.me/971500000000?text=Hello%20BrightLink,%20I%20have%20a%20question%20about%20Family%20Visa%20sponsorship."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#111827] bg-white border border-[#DECBB5] hover:bg-[#FAF5EC] shadow-2xs cursor-pointer transition-colors inline-flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FamilyVisaFaqSection;
