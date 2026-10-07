import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export const ReraFurtherReading = () => {
  const articles = [
    {
      id: 'dld-trustee-guide',
      title: 'Dubai Property Trustee Support: Full Transaction & Fee Guide',
      category: 'Property & Support',
      path: '/services/dld-trustee',
      date: 'October 04, 2026',
      readTime: '6 min read',
      image: '/images/process_bg_skyline_1790959277672.jpg',
      excerpt: 'How Dubai Land Department registration trustee offices operate, 4% transfer fee calculations, required manager cheques, and developer NOC coordination.'
    },
    {
      id: 'golden-visa-guide',
      title: 'UAE Golden Visa: AED 2M Real Estate Investment Pathway',
      category: 'Golden Visa',
      path: '/services/golden-visa-10-year',
      date: 'October 02, 2026',
      readTime: '7 min read',
      image: '/images/service_golden_visa_1790842391749.jpg',
      excerpt: 'Comprehensive blueprint for securing the 10-year Golden Visa via off-plan or secondary freehold property investments, title deed audits, and family sponsorship.'
    },
    {
      id: 'mainland-brokerage-setup',
      title: 'Starting a Real Estate Brokerage in Dubai: Mainland LLC vs Freezone',
      category: 'Business Setup',
      path: '/business-setup',
      date: 'September 28, 2026',
      readTime: '8 min read',
      image: '/images/why_experienced_team_1790842362837.jpg',
      excerpt: 'A critical analysis of 100% foreign ownership Mainland real estate brokerages versus IFZA or Meydan Freezone setups, visa quotas, and commercial office costs.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#B8864B]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
                Further Reading
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight">
              Dubai Real Estate Knowledge Base
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#B8864B] hover:text-[#976A36] transition-colors group self-start sm:self-auto"
          >
            <span>Explore all articles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Featured Guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="bg-[#FCFAF8] rounded-3xl border border-[#EFEAE2] hover:border-[#B8864B]/60 transition-all duration-300 shadow-xs hover:shadow-xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-neutral-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-[#8C6230] uppercase tracking-wider shadow-xs">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-center gap-3 text-[11px] text-neutral-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors line-clamp-2 mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <Link
                  to={item.path}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] group-hover:text-[#976A36] transition-colors"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
