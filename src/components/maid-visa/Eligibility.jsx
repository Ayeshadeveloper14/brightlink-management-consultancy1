import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { AlertCircle, Building2, Users, DollarSign, Home, CheckCircle2 } from 'lucide-react';

export const Eligibility = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-16 lg:py-20 bg-[#FAF7F2] border-t border-[#EBE4D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-white border-2 border-[#DECBB5] p-8 sm:p-10 shadow-sm relative overflow-hidden"
        >
          {/* Accent Ribbon */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#B8864B] via-[#C5985B] to-[#976A36]" />

          <div className="flex items-start gap-4 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
              <AlertCircle className="w-5 h-5 text-[#B8864B]" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6230] font-heading block mb-1">
                Sponsorship Criteria
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] font-heading tracking-tight">
                Important: salary & accommodation rules
              </h2>
            </div>
          </div>

          {/* Exact Provided Content */}
          <div className="p-6 rounded-2xl bg-[#FCFAF8] border border-[#EBE4D8] mb-6">
            <p className="text-base sm:text-lg text-[#1E293B] leading-relaxed font-sans font-medium">
              To sponsor a maid in Dubai, the sponsor needs a minimum monthly salary of AED 25,000 (or AED 22,000 with company-provided accommodation). Bachelors cannot sponsor a domestic worker — you must be living with your family, in a home with at least two bedrooms.
            </p>
          </div>

          {/* Quick Key Highlights for Visual Clarity without altering any rules */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3.5 rounded-xl bg-white border border-[#EBE4D8] flex items-center gap-2.5">
              <DollarSign className="w-4 h-4 text-[#B8864B] shrink-0" />
              <span className="font-semibold text-[#0F172A]">AED 25,000 / AED 22,000</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#EBE4D8] flex items-center gap-2.5">
              <Users className="w-4 h-4 text-[#B8864B] shrink-0" />
              <span className="font-semibold text-[#0F172A]">Living with family</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-[#EBE4D8] flex items-center gap-2.5">
              <Home className="w-4 h-4 text-[#B8864B] shrink-0" />
              <span className="font-semibold text-[#0F172A]">Min. 2-bedroom home</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Eligibility;
