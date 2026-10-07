import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, BookOpen } from 'lucide-react';

export const LatestUpdates = () => {
  const shouldReduceMotion = useReducedMotion();

  const articles = [
    {
      title: '10-Year Golden Visa in Dubai through property — property worth AED 2 million or more, 11 steps, 7–14 working days, family included',
      description: 'Golden Visa Dubai Property AED 2M: Cost, Rules & Steps (2026)',
      additionalDescription: 'Golden Visa through Dubai property worth AED 2M+: who qualifies, AED 9,421 government fees, family fees, 3 documents, 11 steps, 7–14 days, work permit OK.',
      authorDate: 'Razeeb Abdulla · 5 Oct 2026',
      badge: 'Golden Visa'
    },
    {
      title: '5-Year Retirement Visa in Dubai through property — age 55 or over, property worth AED 1 million or more, 11 steps, 7–14 working days',
      description: '5-Year Retirement Visa Dubai Property: Cost & Requirements (2026)',
      additionalDescription: 'Dubai 5-year retirement visa through property, age 55+ and AED 1M+: who qualifies, AED 6,311 government fees, family fees, 3 documents, 11 steps, 7–14 days.',
      authorDate: 'Razeeb Abdulla · 5 Oct 2026',
      badge: 'Retirement Visa'
    },
    {
      title: '2-Year Property Investor Visa in Dubai — property under AED 2 million, no minimum value, PCC required, 10–18 working days',
      description: 'Dubai 2-Year Property Investor Visa: Cost & Requirements (2026)',
      additionalDescription: 'Dubai 2-year property investor visa: no minimum value (joint owners AED 400K+ each), AED 9,834 government fees, 10–18 working days, PCC required. 15 steps.',
      authorDate: 'Razeeb Abdulla · 5 Oct 2026',
      badge: 'Investor Visa'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
              DLD Rules & Legal Guides
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight font-heading">
              Latest property visa updates.
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] hover:text-[#976A36] transition-colors"
          >
            <span>All Property Visa articles (6) →</span>
          </Link>
        </div>

        {/* 3 Exact Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {articles.map((item, idx) => (
            <motion.article
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              className="p-6 sm:p-7 rounded-3xl bg-[#FCFAF8] border border-[#DECBB5] shadow-xs hover:border-[#B8864B] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="inline-block text-[10.5px] font-bold text-[#8C6230] uppercase tracking-wider font-heading px-2.5 py-1 rounded-md bg-[#FAF5EC] border border-[#DECBB5]">
                  {item.badge}
                </span>

                <h3 className="font-bold text-base text-[#0F172A] font-heading leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-[#8C6230]">
                  {item.description}
                </p>

                <p className="text-xs text-[#475569] leading-relaxed">
                  {item.additionalDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EBE4D8] flex items-center justify-between text-[11px] text-[#64748B]">
                <div className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>{item.authorDate}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Browse Every Article Link */}
        <div className="text-center pt-2">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0F172A] hover:text-[#B8864B] transition-colors"
          >
            <span>Browse every article →</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LatestUpdates;
