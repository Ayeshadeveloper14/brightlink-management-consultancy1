import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Reviews = () => {
  const shouldReduceMotion = useReducedMotion();

  const reviewList = [
    {
      initials: 'SM',
      author: 'Sadiq M.',
      routeInfo: "Parents' Golden Visa via property · May 2026",
      text: "The team handled my parents' Golden Visa via property from start to finish. The calculator helped me budget before starting — zero surprises."
    },
    {
      initials: 'AK',
      author: 'Aisha K.',
      routeInfo: 'Property visa · May 2026',
      text: 'I used the property visa calculator first to compare typing centres — FamilyVisa.ae was the most honest about government fee vs service charge. Refreshing.'
    },
    {
      initials: 'RP',
      author: 'Robert P.',
      routeInfo: '5-Year Retirement Visa · May 2026',
      text: 'Smooth Retirement Visa process. They walked me through the DLD valuation and confirmed eligibility before charging anything.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Rating Display */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-[#DECBB5]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
              Verified Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
              Google Rating
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-white p-4 px-5 rounded-2xl border border-[#DECBB5] shadow-xs shrink-0">
            <div className="text-3xl font-bold text-[#0F172A] font-heading">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-[#B8864B] mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#475569] block">
                Based on 625+ verified reviews
              </span>
            </div>
          </div>
        </div>

        {/* 3 Unique Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewList.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#DECBB5] shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#B8864B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F1EBE1] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] text-[#8C6230] font-bold text-xs flex items-center justify-center font-heading shrink-0">
                  {rev.initials}
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0F172A] font-heading">
                    {rev.author}
                  </h4>
                  <p className="text-[10.5px] text-[#8C6230]">
                    {rev.routeInfo}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
