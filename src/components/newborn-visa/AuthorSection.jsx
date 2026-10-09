import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Quote, Award, ShieldCheck } from 'lucide-react';

export const AuthorSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 lg:py-20 bg-[#FFFFFF] border-b border-[#F1EBE1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-3xl bg-[#FCFAF8] border border-[#DECBB5] shadow-xs relative overflow-hidden"
        >
          <Quote className="absolute right-6 bottom-6 w-24 h-24 text-[#DECBB5]/20 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            
            {/* Avatar / Monogram */}
            <div className="w-16 h-16 rounded-2xl bg-[#0F172A] text-[#F5D7A1] font-black text-xl flex items-center justify-center font-heading shrink-0 shadow-xs">
              RA
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-xs font-bold text-[#8C6230] uppercase tracking-wider block font-heading">
                  Razeeb Abdulla, CEO of FamilyVisa.ae
                </span>
                <h4 className="text-lg font-bold text-[#0F172A] font-heading">
                  Written by Razeeb Abdulla
                </h4>
                <p className="text-xs text-[#64748B] font-medium font-heading">
                  CEO · FamilyVisa.ae · 800 DOCS LLC SOC
                </p>
              </div>

              <blockquote className="text-xs sm:text-sm text-[#475569] leading-relaxed italic font-sans">
                "Newborn visas are time-sensitive, and parents shouldn't feel confused about the process. This page explains the steps, documents and cost clearly — based on how applications are actually handled in Dubai. Last reviewed: 11 June 2026."
              </blockquote>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AuthorSection;
