import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: 'How much capital do I need for an Investor Visa?',
    answer: 'Minimum capital requirements vary by jurisdiction. Many UAE Free Zones have no minimum paid-up capital requirement (or set it around AED 50,000), while Dubai Mainland LLC companies typically require a minimum share capital reflected in your Memorandum of Association (MOA) of AED 50,000 to AED 300,000.'
  },
  {
    question: 'Can I sponsor my family on an Investor Visa?',
    answer: 'Yes. Once your Investor residence visa is approved and your Emirates ID is issued, you can sponsor your spouse, children (sons up to 25, unmarried daughters of any age), and parents under standard UAE family sponsorship rules.'
  },
  {
    question: 'How long does the Investor Visa process take?',
    answer: 'For an existing active UAE business license, the visa process takes approximately 10–15 business days (entry permit, status change, medical, biometrics, and electronic stamping). When bundled with new company incorporation, the full process takes 4–6 weeks.'
  },
  {
    question: 'Do I need to stay in the UAE to keep my Investor Visa?',
    answer: 'Yes. Standard 2-year and 3-year Investor Visa holders must enter the UAE at least once every 180 days (6 months) to prevent their residency permit from automatically lapsing.'
  },
  {
    question: 'Can I have an Investor Visa from multiple UAE companies?',
    answer: 'No. You can only hold one residence visa sticker in your passport at a time. However, you can hold shares, directorships, and trade licenses across multiple Mainland and Free Zone companies simultaneously.'
  },
  {
    question: "What's the difference between Investor Visa and Partner Visa?",
    answer: 'In the UAE, the terms are legally interchangeable. In Mainland companies with multiple shareholders, the designation is typically "Partner", whereas sole establishments or specific Free Zones designate it as "Investor". Both grant identical residency, banking, and sponsorship rights.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#F1EBE1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Investor Visa — Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="divide-y divide-[#EBE4D8] border-y border-[#EBE4D8]">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5 transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-start justify-between gap-4 cursor-pointer group"
                >
                  <span className={`text-base sm:text-lg font-bold transition-colors font-heading ${
                    isOpen ? 'text-[#B8864B]' : 'text-[#0F172A] group-hover:text-[#B8864B]'
                  }`}>
                    {item.question}
                  </span>
                  
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                    isOpen 
                      ? 'bg-[#B8864B] border-[#B8864B] text-white rotate-180' 
                      : 'border-[#DECBB5] text-[#8C6230] bg-[#FCFAF8] group-hover:border-[#B8864B]'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={shouldReduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 pr-10 text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
