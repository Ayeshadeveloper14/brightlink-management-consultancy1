import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQ = ({ onOpenConsultation }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is Tawjeeh?',
      a: 'Tawjeeh is an official orientation and training program initiated by the UAE Ministry of Human Resources and Emiratisation (MOHRE). It aims to educate employers and workers regarding UAE labour law regulations, employment contracts, occupational health and safety standards, and respective legal rights and responsibilities.'
    },
    {
      q: 'Who needs Tawjeeh?',
      a: 'Tawjeeh orientation primarily applies to new employees joining UAE mainland private-sector entities, companies registering or updating their MOHRE establishment files, and workers transferring between employers where orientation certification is mandated by ministerial guidelines.'
    },
    {
      q: 'What does a Tawjeeh session cover?',
      a: 'Sessions cover essential topics under UAE Federal Decree-Law on Employment Relations, including employment contract terms and probation, statutory working hours and overtime, annual leave, end-of-service gratuity, health and safety obligations, Wage Protection System (WPS) rules, and official grievance and dispute settlement channels.'
    },
    {
      q: 'Can Tawjeeh be completed online?',
      a: 'Virtual Tawjeeh sessions are available for eligible worker categories through official MOHRE platforms, while other categories are required to attend in person at accredited Tawjeeh service centers. Eligibility depends on the specific job classification, skill level, and current ministerial guidelines.'
    },
    {
      q: 'What documents may be required?',
      a: 'Commonly requested documents include the employee\'s original passport copy, valid UAE entry permit or visa status paper, signed MOHRE job offer or electronic employment contract, and the company\'s commercial trade license and establishment card. Specific document requirements may vary depending on the employee\'s transaction type.'
    },
    {
      q: 'How long does the Tawjeeh session take?',
      a: 'A standard Tawjeeh orientation session typically lasts between 1 to 2 hours, depending on whether it is conducted individually or as part of a group orientation. Once the session is concluded and verified, the official completion certificate is processed through the MOHRE system.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF7F2] border-t border-[#EFE5D7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Clear Answers
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Key answers regarding UAE Tawjeeh orientation sessions, requirements, and compliance.
          </p>
        </div>

        {/* Clean Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-[#E8DEC9] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF6F0] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#222222]">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 text-[#B8864B] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#F2ECE2]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center text-xs text-[#777777]">
          Have specific employee onboarding questions?{' '}
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Tawjeeh Question')}
            className="text-[#976A36] font-semibold underline underline-offset-2 hover:text-[#B8864B] cursor-pointer"
          >
            Speak with our PRO team
          </button>
        </div>

      </div>
    </section>
  );
};
