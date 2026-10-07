import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageSquare } from 'lucide-react';

const PRODUCT_FAQS = [
  {
    question: 'Is product registration mandatory before importing goods into Dubai?',
    answer: 'Yes. Under UAE federal and Dubai municipal consumer protection laws, all regulated items (including cosmetics, perfumes, food products, health supplements, detergents, electronics, and children’s toys) must be registered in the Dubai Municipality Montaji system or MoIAT before customs clearance and domestic distribution. Unregistered shipments are stopped at customs and subject to re-exportation orders.'
  },
  {
    question: 'How long is a Dubai Municipality (Montaji) product registration valid?',
    answer: 'A standard Product Registration Certificate issued by Dubai Municipality Montaji is valid for 5 continuous years from the date of approval. You can import recurring commercial shipments during this 5-year period without reapplying, provided the product formulation and manufacturing address remain identical.'
  },
  {
    question: 'Can a foreign company register products without an active UAE trade license?',
    answer: 'No foreign entity can register products directly in the Montaji portal without an active UAE commercial entity. However, FamilyVisa / BrightLink provides complete Local Commercial Agency and Distributor representation, allowing international brand owners to register products under our licensed establishment without setting up a costly physical company in Dubai.'
  },
  {
    question: 'What is the difference between Dubai Municipality Montaji and MoIAT ECAS?',
    answer: 'Dubai Municipality (Montaji) governs public health, hygiene, and chemical consumer goods (cosmetics, perfumes, food, supplements, biocides, detergents). The Ministry of Industry and Advanced Technology (MoIAT) oversees the Emirates Conformity Assessment Scheme (ECAS) for technical products, electrical home appliances, automotive parts, and energy efficiency standards.'
  },
  {
    question: 'Do I need separate registrations for different sizes, shades, or scents?',
    answer: 'Products sharing the exact identical chemical formulation and brand name but sold in different packaging sizes (e.g. 50ml, 100ml, 200ml) can often be bundled under a single product family application with separate barcodes. However, variants with distinct chemical ingredients, colors, or active fragrance oils require separate individual product registrations.'
  },
  {
    question: 'What are the mandatory requirements for Arabic labeling on product packaging?',
    answer: 'UAE GSO standard 1943 requires all consumer goods to display clear bilingual labeling in both Arabic and English. Key elements that must appear in Arabic include: product name, brief function/usage instructions, country of origin, precautions/storage conditions, and distributor details. Ingredients (INCI) can remain in English/Latin.'
  },
  {
    question: 'How long does the entire product registration process take?',
    answer: 'Under normal processing, standard product registration takes approximately 10 to 15 business days from the date of document submission and fee clearance. If municipal laboratory chemical testing or heavy metal screening is requested, testing takes an additional 5 to 7 days. Expedited fast-track processing is available for urgent cargo.'
  },
  {
    question: 'What is a Certificate of Free Sale (CFS) and why is it required?',
    answer: 'A Certificate of Free Sale (CFS) is an official document issued by the ministry of health, chamber of commerce, or food and drug authority in the country where the product is manufactured. It certifies that the product is legally produced, safe for human consumption or topical use, and freely sold in its home country. It must be attested by the UAE Embassy in that country.'
  },
  {
    question: 'What happens if I sell unregistered products on Amazon.ae, Noon, or retail shops?',
    answer: 'Both Amazon.ae and Noon.com strictly audit product documentation and will instantly suspend un-gated seller accounts that cannot produce official Montaji certificates. In physical retail stores, municipal inspectors issue heavy fines starting from AED 10,000 to AED 100,000, confiscate merchandise, and can shut down commercial premises.'
  },
  {
    question: 'Can FamilyVisa / BrightLink handle label artwork design and Arabic translation?',
    answer: 'Yes. Our in-house compliance specialists review your current packaging artwork, translate all mandatory claims into approved Arabic, verify barcode placement, and provide print-ready sticker/label proofs that comply with Dubai Municipality GSO guidelines before you initiate bulk packaging runs.'
  }
];

export const ProductFaqAccordion = ({ onOpenConsultation }) => {
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
            <span>Registration Inquiries Answered</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed font-sans">
            Clear, authoritative answers to common questions about registering cosmetics, food, perfumes, and consumer goods in Dubai.
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
          {PRODUCT_FAQS.map((item, idx) => {
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
            Have a product formula with unusual botanical extracts or special customs questions?
          </p>
          <motion.button
            type="button"
            whileHover={shouldReduceMotion ? {} : { y: -1.5, scale: 1.02 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            onClick={() => onOpenConsultation('Product Registration Pre-Screening')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#B8864B] hover:text-[#976A36] uppercase tracking-wider cursor-pointer transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Request a Free Formula & Label Pre-Screening →</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductFaqAccordion;
