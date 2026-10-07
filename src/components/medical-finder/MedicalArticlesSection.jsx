import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export const MedicalArticlesSection = () => {
  const articles = [
    {
      id: 'medical-screening-guide',
      title: 'UAE Medical Fitness Screening: Complete Blood Test, Chest X-Ray & Exemptions Guide',
      category: 'Medical Fitness',
      date: 'October 04, 2026',
      readTime: '6 min read',
      image: '/images/medical_hero_1790966817427.jpg',
      excerpt: 'Everything UAE expatriates and investors need to know about DHA/MOHAP infectious disease screening protocols, Smart Salem VIP speed options, and pregnancy X-ray exemptions.'
    },
    {
      id: 'family-sponsorship-dubai',
      title: 'How to Sponsor Your Family in Dubai: Salary, Ejari & Attestation Checklist',
      category: 'Family Visa',
      date: 'September 28, 2026',
      readTime: '5 min read',
      image: '/images/family_hero_1790966803470.jpg',
      excerpt: 'Essential checklist covering minimum salary requirements, tenancy contract (Ejari), certified marriage and birth certificate legalizations, and fast-track VIP medical exams.'
    },
    {
      id: 'golden-visa-guide-2026',
      title: 'UAE Golden Visa 2026: Complete Real Estate, Salary & Nomination Guide',
      category: 'Golden Visa',
      date: 'October 02, 2026',
      readTime: '6 min read',
      image: '/images/service_golden_visa_1790842391749.jpg',
      excerpt: 'Comprehensive roadmap to securing 10-year Golden Visa residency in Dubai, including executive VIP medical fitness fast-track lanes and direct Emirates ID issuance.'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#FCFAF8] rounded-3xl border border-[#EFEAE2] my-16 p-6 sm:p-10">
      {/* Header & Link */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              From our desk
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#222222] tracking-tight">
            Recent Articles & Screening Guides
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] mt-1">
            Authoritative insights and procedural breakdowns from our senior immigration typing desk.
          </p>
        </div>

        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] hover:text-[#976A36] transition-colors group self-start sm:self-auto shrink-0"
        >
          <span>Browse all articles</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Article Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, idx) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="bg-white rounded-2xl border border-[#EFEAE2] hover:border-[#B8864B]/60 transition-all duration-300 shadow-xs hover:shadow-lg overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-44 overflow-hidden bg-neutral-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-[#8C6230] uppercase tracking-wider shadow-xs">
                  {article.category}
                </div>
              </div>

              <div className="p-5">
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

                <h3 className="text-sm font-bold text-[#222222] group-hover:text-[#B8864B] transition-colors leading-snug line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs text-[#555555] mt-2 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-2">
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] group-hover:text-[#976A36] transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default MedicalArticlesSection;
