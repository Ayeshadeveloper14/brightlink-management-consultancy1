import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';

const ILOE_FAQS = [
  {
    question: 'Is ILOE insurance mandatory for all employees in the UAE?',
    answer: 'Yes. Under Federal Decree-Law No. 13 of 2022, the Involuntary Loss of Employment (ILOE) scheme is mandatory for all workers in the UAE, including private sector employees (mainland and participating Free Zones) and federal government staff, regardless of nationality. Only 100% business owners/investors, domestic workers, temporary workers, and juveniles under 18 are exempt.'
  },
  {
    question: 'What is the penalty if I fail to subscribe to ILOE?',
    answer: 'The Ministry of Human Resources and Emiratisation (MOHRE) imposes an automated fine of AED 400 for failing to subscribe within the legal deadline (or within 4 months of issuing a new work permit). An additional fine of AED 200 is assessed if you fail to pay due installment premiums for more than 3 months.'
  },
  {
    question: 'Are Free Zone employees required to subscribe to ILOE?',
    answer: 'Yes. While the scheme was initially launched for mainland MOHRE employees, mandatory compliance has been expanded to cover employees working across UAE Free Zones (including DIFC, ADGM, DMCC, JAFZA, DAFZA, and others). All employees with an active UAE residency visa and labor permit must subscribe to avoid penalties.'
  },
  {
    question: 'How much does ILOE cost per year?',
    answer: 'For Category A (basic salary of AED 16,000 or below), the premium is AED 5/month (+ VAT), totaling AED 60/year. For Category B (basic salary above AED 16,000), the premium is AED 10/month (+ VAT), totaling AED 120/year. Subscriptions can be paid annually, semi-annually, or quarterly.'
  },
  {
    question: 'What is the compensation payout if I lose my job?',
    answer: 'The scheme pays 60% of your average basic salary for up to 3 consecutive months. For Category A, the maximum monthly payout is capped at AED 10,000 (up to AED 30,000 total). For Category B, the maximum monthly payout is capped at AED 20,000 (up to AED 60,000 total).'
  },
  {
    question: 'Can I claim ILOE compensation if I resign voluntarily?',
    answer: 'No. The scheme strictly covers involuntary loss of employment (such as company downsizing, economic redundancy, employer termination, or corporate liquidation). Voluntary resignations, mutual separations, or dismissals for disciplinary causes under Article 44 of the UAE Labor Law are not eligible for compensation.'
  },
  {
    question: 'How long do I need to be subscribed before I can claim benefits?',
    answer: 'You must have maintained an active, continuous subscription to the ILOE scheme for at least 12 consecutive months without policy interruptions or defaulted payments prior to the date of unemployment.'
  },
  {
    question: 'How are ILOE fines collected by the UAE government?',
    answer: 'MOHRE collects outstanding ILOE fines through automated salary deductions via the Wages Protection System (WPS) or from end-of-service benefits. Additionally, unpaid fines result in an administrative freeze on work permit renewals, transfers to new employers, or visa cancellation clearance.'
  },
  {
    question: 'How long does it take to receive the unemployment claim payout?',
    answer: 'Once you submit your termination notice, valid Emirates ID, and bank IBAN through the official ILOE portal within 30 days of job loss, Dubai Insurance verifies the claim within 14 business days. Approved compensation is transferred directly into your UAE bank account on a monthly basis for up to 3 months.'
  },
  {
    question: 'Can FamilyVisa / BrightLink help me subscribe or settle my ILOE fines?',
    answer: 'Yes. Our licensed typing specialists can verify your current ILOE policy status, check whether any MOHRE fines have been assessed, clear outstanding balances through official government channels, and register you or your corporate workforce for multi-year compliance.'
  }
];

export const IloeFaqAccordion = ({ onOpenConsultation }) => {
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
            <span>Got Questions About ILOE?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed font-sans">
            Everything you need to know about the UAE Involuntary Loss of Employment scheme, eligibility, fines, and claims.
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
          {ILOE_FAQS.map((item, idx) => {
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
            Have a specific fine or work permit lock that needs immediate resolution?
          </p>
          <motion.button
            type="button"
            whileHover={shouldReduceMotion ? {} : { y: -1.5, scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            onClick={() => onOpenConsultation('ILOE Fine Settlement & Labor Advice')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#B8864B] hover:text-[#976A36] uppercase tracking-wider cursor-pointer transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Speak With an ILOE Specialist →</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default IloeFaqAccordion;
