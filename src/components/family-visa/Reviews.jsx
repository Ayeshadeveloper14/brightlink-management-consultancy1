import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, ExternalLink, Heart, CheckCircle2 } from 'lucide-react';

export const Reviews = () => {
  const shouldReduceMotion = useReducedMotion();

  const testimonialQuotes = [
    {
      author: 'Sameer & Hina K.',
      title: 'Wife & 2 Kids Stamped in 4 Days',
      quote: 'We sent our marriage certificate and passports on WhatsApp at 9 PM. By 10 AM next morning, 800 DOCS had our entry permits ready. Medical booked at Smart Salem, zero queue.'
    },
    {
      author: 'David R.',
      title: 'Elderly Parents Sponsorship',
      quote: 'Sponsoring both parents in Dubai can be stressful with the Ejari and humanitarian deposit requirements. The team walked us through every step and returned our passports stamped to our villa in Arabian Ranches.'
    },
    {
      author: 'Fatima Z.',
      title: 'Newborn Visa within 120 Days',
      quote: 'Clear, transparent pricing with no hidden charges. Received every government receipt directly. Highly recommend for any family in Dubai.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-t border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-6 border-b border-[#DECBB5]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
              06 — Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
              Rated 4.9 by the families we've filed for.
            </h2>
          </div>

          {/* Rating Display */}
          <div className="flex items-center gap-4 bg-white p-4 px-5 rounded-2xl border border-[#DECBB5] shadow-xs shrink-0">
            <div className="text-3xl font-black text-[#0F172A] font-heading">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-[#B8864B] mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#475569] block">
                550 Google reviews
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonialQuotes.map((t, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-[#DECBB5] shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center gap-1 text-[#B8864B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <h4 className="font-bold text-sm text-[#0F172A] font-heading">
                  {t.title}
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-[#8C6230]">
                {t.author}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting text & Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs text-[#64748B]">
          <span>Across all 800 DOCS services in Dubai</span>
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-[#0F172A] hover:text-[#B8864B] transition-colors"
          >
            <span>Read reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
