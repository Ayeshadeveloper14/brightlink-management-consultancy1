import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';

export const TrustBar = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-8 bg-[#FAF7F2] border-y border-[#EBE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          {/* As featured in */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-center md:text-left">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#8C6230] font-heading">
              As featured in
            </span>
            <div className="h-4 w-px bg-[#DECBB5] hidden sm:block" />
            <div className="flex items-center gap-6 text-[#0F172A] font-serif font-bold tracking-wider text-base sm:text-lg">
              <span className="hover:text-[#B8864B] transition-colors">Gulf News</span>
              <span className="text-[#DECBB5]">·</span>
              <span className="hover:text-[#B8864B] transition-colors">Khaleej Times</span>
            </div>
          </div>

          {/* Rating */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-[#DECBB5] shadow-2xs"
          >
            <span className="text-2xl font-bold text-[#0F172A] font-heading leading-none">
              4.9
            </span>
            <div className="flex flex-col">
              <div className="flex items-center text-[#B8864B] gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#B8864B] text-[#B8864B]" />
                ))}
              </div>
              <span className="text-[11px] font-semibold text-[#64748B] mt-0.5">
                Based on 625 reviews
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TrustBar;
