import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'Can I check my UAE visa status using only my passport number?',
    answer: 'Yes. Both the Federal ICP smart services system and GDRFA Dubai allow visa holders, tourists, and prospective travelers to verify visa validity using their passport number, issuing nationality, and date of birth. You do not need an active UAE Pass or physical Emirates ID to conduct this inquiry.'
  },
  {
    question: 'How do I know if my visa was issued by GDRFA Dubai or ICP Federal?',
    answer: 'Look at your visa document or previous entry stamp. If your File Number starts with "201" or mentions the Government of Dubai, your visa is administered by GDRFA Dubai. If your visa was issued in Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, or UAQ, it falls under the Federal ICP authority.'
  },
  {
    question: 'What is the penalty for overstaying in the UAE in 2025/2026?',
    answer: 'Under standardized federal immigration decrees, the overstay fine is unified at AED 50 per day for all categories (including visit/tourist visas and expired residency permits) once your legal grace period has elapsed. When leaving the country, an additional outpass/exit permit fee of AED 250 - 320 is required.'
  },
  {
    question: 'How long is the grace period after my UAE visa expires or is cancelled?',
    answer: 'The grace period depends on your visa category: Golden Visa holders receive 180 days (6 months); Green Visa holders and skilled professionals (MOHRE levels 1-3) receive 60 to 90 days; standard employment, partner, and family residence visas receive 30 days. Tourist visas typically have a 10-day grace period, though some emirates calculate fines immediately upon expiration.'
  },
  {
    question: 'Can I check if I have a travel ban or immigration absconding block?',
    answer: 'Basic portal checks verify active validity and accumulated fines. However, criminal, civil financial, or employer absconding circulars (travel bans) require an official judicial clearance check through the Dubai Police, Abu Dhabi Judicial Department, or GDRFA legal portals. BrightLink can run a confidential comprehensive ban inquiry on your behalf.'
  },
  {
    question: 'Can overstay fines be reduced, waived, or settled with a discount?',
    answer: 'Yes. The UAE government provides humanitarian and legal avenues for fine reductions. Individuals who accumulated fines due to sponsor absconding, medical incapacity, company liquidation, or labor disputes can submit an official "Fine Reduction Mercy Application" to the GDRFA/ICP committee. BrightLink regularly secures fine discounts between 50% and 90% or full waivers.'
  },
  {
    question: 'Why does the portal return "No Record Found" when I enter my passport details?',
    answer: 'This is usually caused by: (1) querying ICP for a Dubai visa or vice versa, (2) recently renewed passport where your visa is linked to your old passport number, (3) extra space in the passport field, or (4) a slight spelling difference in your registered name. Contact our typing specialists to cross-reference your record using your Unified Identification (UID) number.'
  },
  {
    question: 'Can employers check the visa validity of their employees?',
    answer: 'Yes. Employers and HR managers can utilize the passport check tool or their corporate MOHRE/ICP establishment accounts to audit team visa expirations, labor card validity, and ensure all renewals are completed before fines incur.'
  },
  {
    question: 'How long does the status verification take through WhatsApp?',
    answer: 'Our WhatsApp verification service is handled in real time. Once you message your passport information page, our licensed typing specialists verify your file against the government server and respond with an official status report within 5 to 15 minutes during business hours.'
  }
];

export const VisaFaqAccordion = ({ onOpenConsultation }) => {
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
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed font-sans">
            Everything you need to know about checking your UAE visa validity, grace periods, and resolving overstay issues.
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
          {FAQ_ITEMS.map((item, idx) => {
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

        {/* Bottom Help Prompt with subtle lift on hover */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          className="mt-12 text-center p-6 rounded-2xl bg-white border border-[#EBE4D8] shadow-xs hover:border-[#B8864B]/40 transition-colors"
        >
          <p className="text-sm text-[#475569] mb-3">
            Have a unique question regarding an existing immigration file or travel restrictions?
          </p>
          <motion.button
            type="button"
            whileHover={shouldReduceMotion ? {} : { y: -1.5, scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            onClick={() => onOpenConsultation('General Visa Inquiry')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#B8864B] hover:text-[#976A36] uppercase tracking-wider cursor-pointer transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Speak With a Senior PRO Consultant →</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default VisaFaqAccordion;
