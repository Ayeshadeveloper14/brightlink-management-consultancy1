import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

export const Reviews = () => {
  const shouldReduceMotion = useReducedMotion();

  const reviews = [
    {
      initials: 'HP',
      author: 'Hannah & Marc P.',
      date: '22 May 2026',
      quote: "Our daughter's entire visa was done before she was 8 weeks old. The team handled MOFA pickup, embassy paperwork, everything. We just enjoyed the newborn phase."
    },
    {
      initials: 'PS',
      author: 'Priya S.',
      date: '15 May 2026',
      quote: 'Used the calculator on day 3 after the birth. Got the exact government cost upfront — no service-fee surprises later. Honest, transparent pricing.'
    },
    {
      initials: 'AK',
      author: 'Ahmed K.',
      date: '8 May 2026',
      quote: "Smooth MOFA door-to-door pickup, and the WhatsApp updates kept us informed. Our son's Emirates ID arrived within the 120-day window with weeks to spare."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] border-b border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-[#DECBB5]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
              5 · Real parents
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading mb-2">
              Real parents, real stories — May 2026
            </h2>
            <p className="text-sm text-[#64748B]">
              Verified reviews from parents who used our service.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 px-5 rounded-2xl border border-[#DECBB5] shadow-xs shrink-0">
            <span className="text-2xl font-bold text-[#0F172A] font-heading">4.9</span>
            <div>
              <div className="flex items-center gap-0.5 text-[#B8864B] mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs text-[#64748B] block">
                625 verified reviews · last 12 months
              </span>
            </div>
          </div>
        </div>

        {/* 3 Unique Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-[#DECBB5] shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#B8864B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed italic">
                  "{rev.quote}"
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
                    {rev.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read all links */}
        <div className="text-center pt-2 text-xs text-[#64748B]">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-[#0F172A] hover:text-[#B8864B] transition-colors"
          >
            <span>Read all 625 reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
