import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';

export const Articles = () => {
  const shouldReduceMotion = useReducedMotion();

  // Using existing articles from the project's ArticleCatalog
  const articles = [
    {
      id: 'family-sponsorship-dubai',
      title: 'How to Sponsor Your Family in Dubai: Salary, Ejari & Attestation Checklist',
      category: 'Family Visa',
      date: 'September 28, 2026',
      readTime: '5 min read',
      author: 'Residency Services Desk',
      image: '/images/family_hero_1790966803470.jpg',
      excerpt: 'Everything UAE expatriates must know regarding minimum salary thresholds, Ejari tenancy registration, MOFA certificate attestation, and VIP medical fitness.'
    },
    {
      id: 'golden-visa-guide-2026',
      title: 'UAE Golden Visa 2026: Complete Real Estate, Salary & Nomination Guide',
      category: 'Golden Visa',
      date: 'October 02, 2026',
      readTime: '6 min read',
      author: 'Senior Immigration Consultant',
      image: '/images/service_golden_visa_1790842391749.jpg',
      excerpt: 'Comprehensive roadmap to securing the coveted 10-year Golden Visa in Dubai: AED 2M property investment, AED 30,000 executive salary threshold, and VIP processing.'
    },
    {
      id: 'mainland-vs-freezone-dubai',
      title: 'Dubai Mainland vs Freezone: Which Business License is Right for You in 2026?',
      category: 'Business Setup',
      date: 'September 21, 2026',
      readTime: '7 min read',
      author: 'Corporate Formation Team',
      image: '/images/why_experienced_team_1790842362837.jpg',
      excerpt: 'Detailed comparison of Mainland (DED) vs Freezone (IFZA, DMCC, Meydan) covering 100% foreign ownership, commercial market access, visa quotas, and tax compliance.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#EBE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-6 border-b border-[#EBE4D8]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
              From our desk
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
              Recent articles
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] hover:text-[#976A36] transition-colors group shrink-0"
          >
            <span>Browse all articles</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="rounded-3xl bg-[#FCFAF8] border border-[#DECBB5] overflow-hidden flex flex-col justify-between hover:border-[#B8864B] hover:shadow-md transition-all group"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = 'https://website-imges.vercel.app/why_fast_process_1790842377870.jpg';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-bold text-[#8C6230] border border-[#DECBB5]">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#64748B] mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {item.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] font-heading line-clamp-2 mb-2 group-hover:text-[#B8864B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#64748B] line-clamp-2 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] group-hover:text-[#976A36]"
                >
                  <span>Read full guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Articles;
