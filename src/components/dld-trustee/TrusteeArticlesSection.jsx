import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const TrusteeArticlesSection = () => {
  // Existing verified articles from Brightlink data source
  const recentArticles = [
    {
      id: 'golden-visa-guide-2026',
      title: 'UAE Golden Visa 2026: Complete Real Estate, Salary & Nomination Guide',
      category: 'Golden Visa',
      date: 'October 02, 2026',
      readTime: '6 min read',
      image: '/images/service_golden_visa_1790842391749.jpg',
      excerpt: 'Comprehensive roadmap to securing the coveted 10-year Golden Visa in Dubai: AED 2M property investment, AED 30,000 executive salary threshold, and VIP processing.'
    },
    {
      id: 'family-sponsorship-dubai',
      title: 'How to Sponsor Your Family in Dubai: Salary, Ejari & Attestation Checklist',
      category: 'Family Visa',
      date: 'September 28, 2026',
      readTime: '5 min read',
      image: '/images/family_hero_1790966803470.jpg',
      excerpt: 'Everything UAE expatriates must know regarding minimum salary thresholds, Ejari tenancy registration, MOFA certificate attestation, and VIP medical fitness.'
    },
    {
      id: 'mainland-vs-freezone-dubai',
      title: 'Dubai Mainland vs Freezone: Which Business License is Right for You in 2026?',
      category: 'Business Setup',
      date: 'September 21, 2026',
      readTime: '7 min read',
      image: '/images/why_experienced_team_1790842362837.jpg',
      excerpt: 'Detailed comparison of Mainland (DED) vs Freezone (IFZA, DMCC, Meydan) covering 100% foreign ownership, commercial market access, visa quotas, and tax compliance.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header & Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
                From our desk
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight">
              Recent articles
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#B8864B] hover:text-[#976A36] transition-colors group self-start sm:self-auto"
          >
            <span>Browse all articles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Existing Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentArticles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-neutral-200/80 hover:border-[#B8864B]/60 transition-all duration-300 shadow-xs hover:shadow-lg overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-neutral-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-[#8C6230] uppercase tracking-wider shadow-xs">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-neutral-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors line-clamp-2 mb-3 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#666666] line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#B8864B] group-hover:text-[#9F7038] transition-colors"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
