import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Clock, Calendar, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const Timeline = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] border-b border-[#F1EBE1]">
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
            1 · Know the timeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-4">
            You have 120 days from your baby's birth.
          </h2>
          <p className="text-base text-[#475569] leading-relaxed font-sans">
            UAE immigration gives parents a 120-day grace period from the date of birth to obtain the passport and stamp the residence visa. Start early — once the grace period expires, daily overstay fines apply. The good news: the whole journey fits comfortably inside 120 days when each phase is handled in order.
          </p>
        </motion.div>

        {/* 2 Highlighted Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: 120-Day Grace Period */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45 }}
            className="p-7 sm:p-8 rounded-3xl bg-white border border-[#DECBB5] shadow-xs space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5]">
                From the birth date
              </span>
              <Calendar className="w-5 h-5 text-[#B8864B]" />
            </div>

            <h3 className="text-2xl font-bold text-[#0F172A] font-heading">
              120-Day Grace Period
            </h3>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Counted from your baby's birth date, not from when you collect documents. It covers the entire process — birth certificate → MOFA → passport → Emirates ID → visa. Daily fines apply after Day 121, so it's safest to start within the first 2 weeks.
            </p>
          </motion.div>

          {/* Card 2: Sponsor Salary */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="p-7 sm:p-8 rounded-3xl bg-white border border-[#DECBB5] shadow-xs space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C6230] font-heading px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5]">
                AED 4,000 minimum
              </span>
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>

            <h3 className="text-2xl font-bold text-[#0F172A] font-heading">
              Sponsor Salary
            </h3>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              The sponsoring parent must earn at least AED 4,000/month — or AED 3,000 plus employer-provided accommodation. A mother can sponsor the newborn directly; no NOC from the father is required.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Timeline;
