import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Building2, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutVisa = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            About this visa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-6">
            What Is the Investor Visa?
          </h2>
        </motion.div>

        {/* 2 Exact Content Paragraphs with Editorial Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-sm sm:text-base text-[#475569] leading-relaxed font-sans mb-12">
          
          <div className="p-7 rounded-3xl bg-[#FCFAF8] border border-[#DECBB5] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] font-bold">
              01
            </div>
            <p>
              The UAE Investor Visa (also called Partner Visa) is issued to shareholders and directors of UAE-registered Free Zone or Mainland companies. It grants the right to live and work in the UAE, open bank accounts, sponsor family members, obtain a driver's license, and become a UAE tax resident. Standard validity is 2 years for Mainland investors and 3 years for Free Zone investors, fully renewable.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-[#FCFAF8] border border-[#DECBB5] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] font-bold">
              02
            </div>
            <p>
              The Investor Visa is the default path for entrepreneurs setting up a UAE company — it is bundled with the incorporation process. Compared to the Golden Visa it is faster and cheaper (no AED 2M investment requirement) but offers shorter validity. Most clients open their UAE company AND get the Investor Visa in one combined process taking 4-6 weeks total.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutVisa;
