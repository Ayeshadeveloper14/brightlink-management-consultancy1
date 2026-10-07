import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, User } from 'lucide-react';

export const Articles = () => {
  const shouldReduceMotion = useReducedMotion();

  const articles = [
    {
      title: 'Dubai Newborn Baby Visa Complete Step-by-Step Guide',
      desc: 'How to register hospital birth notification, order DHA birth certificates and complete 120-day UAE visa stamping without penalties.',
      date: 'May 2026',
      readTime: '4 min read'
    },
    {
      title: 'Birth Certificate Attestation in Dubai: MOFA & Legal Translation',
      desc: 'Everything expatriate parents need to know about getting foreign embassy and UAE MOFA attestation stamps for international passports.',
      date: 'April 2026',
      readTime: '5 min read'
    },
    {
      title: 'Mother Sponsoring a Newborn Child in Dubai: Rules & Salary',
      desc: 'Comprehensive legal breakdown of maternal sponsorship rules, salary certificate criteria, and required hospital discharge papers.',
      date: 'March 2026',
      readTime: '3 min read'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
              From our desk
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight font-heading">
              Recent articles
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] hover:text-[#976A36] transition-colors"
          >
            <span>Browse all articles →</span>
          </Link>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((item, idx) => (
            <motion.article
              key={idx}
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              className="p-6 rounded-3xl bg-white border border-[#DECBB5] shadow-xs hover:border-[#B8864B] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="inline-block text-[10px] font-bold text-[#8C6230] uppercase tracking-wider font-heading px-2 py-0.5 rounded-md bg-[#FAF5EC]">
                  Newborn Guide
                </span>
                <h3 className="font-bold text-base text-[#0F172A] font-heading leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F1EBE1] flex items-center justify-between text-[11px] text-[#64748B]">
                <span>{item.date}</span>
                <span>{item.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Articles;
