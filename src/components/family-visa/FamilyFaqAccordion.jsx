import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';

const FAMILY_FAQS = [
  {
    question: 'What is the minimum salary required to sponsor a wife and children in Dubai?',
    answer: 'Under current UAE immigration regulations, a male resident must earn a minimum monthly salary of AED 4,000 (or AED 3,000 if the employer provides verified company accommodation) to sponsor his wife and children. Sponsoring multiple family members does not increase the salary threshold, though adequate registered Ejari accommodation is required.'
  },
  {
    question: 'Can a working mother or female resident sponsor her husband and children?',
    answer: 'Yes. A female expatriate can sponsor her husband and children if her basic salary is at least AED 10,000 per month (or AED 8,000 plus company accommodation). Specialized professionals such as doctors, engineers, university professors, nurses, and corporate executives receive straightforward approval. Other professions are subject to approval by the GDRFA / ICP committee.'
  },
  {
    question: 'Up to what age can I sponsor my sons in the UAE?',
    answer: 'Under the latest UAE residency reforms, male residents can sponsor their unmarried sons up to the age of 25 (extended from age 18 previously). If the son is enrolled in university or pursuing higher education, sponsorship can continue until graduation. Sons of determination (with special needs / disabilities) can be sponsored with no age limit whatsoever.'
  },
  {
    question: 'What are the rules and requirements for sponsoring parents in the UAE?',
    answer: 'To sponsor parents, expatriate sponsors must earn a verified monthly basic salary of at least AED 20,000 (or AED 19,000 + a 2-bedroom registered Ejari apartment). Both father and mother must be sponsored together, unless one is deceased or divorced with certified legal documentation. A refundable humanitarian security deposit and comprehensive private health insurance are mandatory.'
  },
  {
    question: 'What happens if I fail to register and stamp my newborn baby’s visa within 120 days?',
    answer: 'The UAE grants a statutory grace period of 120 days from the date of birth to obtain the child’s passport, attested birth certificate, and residence visa. If the visa is not stamped by the 120th day, an initial fine of AED 100 is charged on day 121, followed by a compounding overstay fine of AED 50 per day thereafter until the visa is finalized.'
  },
  {
    question: 'Can I sponsor my family if I rent a studio apartment?',
    answer: 'Generally, Dubai Municipality and GDRFA require a minimum of a registered 1-bedroom apartment (Ejari contract in the sponsor’s name) to sponsor a spouse and child. For larger families (3 or more children) or parents, a minimum 2-bedroom apartment is required during municipal address verification.'
  },
  {
    question: 'Do my family members need to leave the UAE to change their visa status?',
    answer: 'No. If your spouse or children are already inside the country on a tourist visa, visit visa, or cancelled residency, we execute an "In-Country Status Change" (Status Amendment). This legally transitions them into sponsored family residency without the expense or inconvenience of an airport exit run.'
  },
  {
    question: 'How long is a UAE family residence visa valid?',
    answer: 'The validity of the family residence visa is linked to the sponsor’s residency permit. If the sponsor holds a standard 2-year private sector employment or mainland LLC visa, dependents receive a 2-year visa. If the sponsor holds a 3-year Free Zone visa or a 10-year Golden Visa, family members are issued matching multi-year residency permits.'
  },
  {
    question: 'What medical tests are required for family visa applicants?',
    answer: 'All sponsored dependents aged 18 and above must undergo mandatory medical fitness screening at an accredited DHA or EHS health center. The screening includes a blood test for infectious conditions (including HIV) and a chest X-ray screening for active pulmonary tuberculosis. Children under 18 years of age are completely exempt from medical fitness testing.'
  },
  {
    question: 'Which documents need UAE Ministry of Foreign Affairs (MOFA) attestation?',
    answer: 'All foreign relationship documents—including your Marriage Certificate (for spouse sponsorship) and Birth Certificates (for children sponsorship)—must be legalized by the Ministry of Foreign Affairs in the issuing country, the UAE Embassy in that country, and finally electronically stamped by the UAE Ministry of Foreign Affairs (MOFA) in Dubai, followed by certified legal Arabic translation.'
  }
];

export const FamilyFaqAccordion = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] border-t border-[#F1EBE1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Scroll Reveal */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#B8864B]/30 text-[#8C6230] text-[11px] font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Family Sponsorship Clarified</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed font-sans">
            Authoritative answers on salary requirements, female sponsors, parents sponsorship, and newborn procedures in the UAE.
          </p>
        </motion.div>

        {/* Clean Accordion Layout with Smooth Height + Opacity Transition */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="divide-y divide-[#EBE4D8] border-y border-[#EBE4D8]"
        >
          {FAMILY_FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex items-start justify-between gap-4 cursor-pointer group"
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors font-heading ${
                    isOpen ? 'text-[#B8864B]' : 'text-[#0F172A] group-hover:text-[#B8864B]'
                  }`}>
                    {item.question}
                  </span>
                  
                  {/* Plus / Minus with smooth rotation transition */}
                  <motion.div 
                    animate={shouldReduceMotion ? {} : { rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isOpen 
                        ? 'bg-[#B8864B] border-[#B8864B] text-white' 
                        : 'border-[#DECBB5] text-[#8C6230] bg-white group-hover:border-[#B8864B]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </motion.div>
                </button>

                {/* Animated content expansion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={shouldReduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ 
                        height: { duration: shouldReduceMotion ? 0 : 0.32, ease: [0.04, 0.62, 0.23, 0.98] },
                        opacity: { duration: shouldReduceMotion ? 0 : 0.25, delay: shouldReduceMotion ? 0 : 0.05 }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 pr-10 text-sm sm:text-base text-[#475569] leading-relaxed font-sans">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* Bottom Help Prompt */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          className="mt-12 text-center p-6 rounded-2xl bg-white border border-[#EBE4D8] shadow-xs hover:border-[#B8864B]/40 transition-colors"
        >
          <p className="text-sm text-[#475569] mb-3">
            Have a unique situation such as stepchildren sponsorship or complex salary structures?
          </p>
          <motion.button
            type="button"
            whileHover={shouldReduceMotion ? {} : { y: -1.5, scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            onClick={() => onOpenConsultation('Specialized Family Sponsorship Inquiry')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#B8864B] hover:text-[#976A36] uppercase tracking-wider cursor-pointer transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consult Our Senior Immigration PRO →</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default FamilyFaqAccordion;
