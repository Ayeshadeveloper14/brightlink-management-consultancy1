import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';

export const ArticleCatalog = ({ onSelectArticle }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Golden Visa', 'Family Visa', 'Business Setup', 'Immigration Rules', 'Passport & BLS'];

  const articles = [
    {
      id: 'golden-visa-guide-2026',
      title: 'UAE Golden Visa 2026: Complete Real Estate, Salary & Nomination Guide',
      category: 'Golden Visa',
      date: 'October 02, 2026',
      readTime: '6 min read',
      author: 'Senior Immigration Consultant',
      image: '/images/service_golden_visa_1790842391749.jpg',
      excerpt: 'Comprehensive roadmap to securing the coveted 10-year Golden Visa in Dubai: AED 2M property investment, AED 30,000 executive salary threshold, and VIP processing.',
      content: `The UAE Golden Visa remains the gold standard in long-term Middle East residency. Under current ICP and GDRFA circulars, foreign investors, skilled professionals, and entrepreneurs can secure 10-year independent residency without needing an Emirati national sponsor.

Key Qualifying Categories:
1. Real Estate Investors: Purchase property worth at least AED 2,000,000 (mortgaged properties accepted with a bank NOC letter). Off-plan properties from master developers (Emaar, Nakheel, Sobha) with Oqood registration also qualify.
2. Senior Executives & Specialists: Professionals holding an attested Bachelor degree with an active UAE labor contract earning a minimum basic salary of AED 30,000 per month.
3. Entrepreneurs & Business Owners: Ownership of an audited business entity with minimum annual revenue or capital valuation of AED 2 Million.
4. Outstanding Students & PhDs: Top graduates from recognized UAE universities or top 100 global institutions.

Core Benefits:
- 100% self-sponsored residency for 10 full years.
- Right to remain outside the UAE for longer than 6 months without automatic visa cancellation.
- Unlimited sponsorship of spouse, children of any age, and domestic staff.`
    },
    {
      id: 'family-sponsorship-dubai',
      title: 'How to Sponsor Your Family in Dubai: Salary, Ejari & Attestation Checklist',
      category: 'Family Visa',
      date: 'September 28, 2026',
      readTime: '5 min read',
      author: 'Residency Services Desk',
      image: '/images/family_hero_1790966803470.jpg',
      excerpt: 'Everything UAE expatriates must know regarding minimum salary thresholds, Ejari tenancy registration, MOFA certificate attestation, and VIP medical fitness.',
      content: `Bringing your spouse and dependents to live in Dubai is a streamlined process when documentation is verified in advance.

Mandatory Requirements:
1. Sponsor Salary Threshold: A minimum monthly salary of AED 4,000, or AED 3,000 plus company-provided accommodation.
2. Registered Accommodation (Ejari): An active Tenancy Contract registered through the Dubai Land Department (Ejari) showing adequate residential space.
3. Attested Relationships: Original Marriage Certificate (for spouse) and Birth Certificates (for children) fully legalized from the home country Ministry of Foreign Affairs, UAE Embassy, and local MOFA in the UAE.

Step-by-Step Procedure:
- File opening & Entry Permit issuance.
- In-country status change.
- VIP Medical Fitness Examination (DHA/EHS) blood test & chest X-ray.
- Federal ICP Emirates ID biometrics appointment and card delivery.`
    },
    {
      id: 'mainland-vs-freezone-dubai',
      title: 'Dubai Mainland vs Freezone: Which Business License is Right for You in 2026?',
      category: 'Business Setup',
      date: 'September 21, 2026',
      readTime: '7 min read',
      author: 'Corporate Formation Team',
      image: '/images/why_experienced_team_1790842362837.jpg',
      excerpt: 'Detailed comparison of Mainland (DED) vs Freezone (IFZA, DMCC, Meydan) covering 100% foreign ownership, commercial market access, visa quotas, and tax compliance.',
      content: `Choosing between a Dubai Department of Economy and Tourism (DED) Mainland license and a specialized Freezone entity is the fundamental decision for every new entrepreneur in the UAE.

Mainland Highlights:
- Unrestricted capability to trade with the local UAE market and submit bids for government tenders.
- Ability to lease physical commercial premises anywhere across Dubai mainland.
- Unlimited visa quota scalability based on square footage.
- 100% foreign ownership on over 1,000+ commercial and industrial activities.

Freezone Highlights:
- 0% corporate tax benefits for qualifying Freezone persons under UAE Corporate Tax law.
- 100% profit repatriation and exemption from customs duties within free zones.
- Flexible virtual office and flexi-desk lease options without expensive physical rents.
- Faster, simplified registration often concluded in 3 to 5 business days.`
    },
    {
      id: 'check-visa-validity-online',
      title: 'Guide to Checking UAE Visa Validity and Overstay Fines Online (ICP & GDRFA)',
      category: 'Immigration Rules',
      date: 'September 14, 2026',
      readTime: '4 min read',
      author: 'Legal Typing Department',
      image: '/images/why_fast_process_1790842377870.jpg',
      excerpt: 'Step-by-step instructions on checking entry permit validity, residency expiration dates, and daily fines directly on official GDRFA Dubai and Federal ICP portals.',
      content: `Staying compliant with UAE immigration rules is effortless using the unified digital platforms provided by the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) and the General Directorate of Residency and Foreigners Affairs (GDRFA Dubai).

How to Check via GDRFA Dubai:
1. Navigate to the official GDRFA Smart Services portal.
2. Select "File Validity" inquiry.
3. Enter your Passport Number, Nationality, and Date of Birth.
4. Instantly view your current residence file status and expiry date.

Overstay Fine Calculations:
- Overstay fines are unified at AED 50 per day following the expiration of your valid grace period.
- For applicants facing significant overstay due to unforeseen events, BrightLink prepares legal fine waiver petitions for official committee review.`
    },
    {
      id: 'bls-indian-passport-renewal',
      title: 'BLS Indian Passport Renewal in Dubai: Tatkal vs Normal, Fees & Documents',
      category: 'Passport & BLS',
      date: 'September 07, 2026',
      readTime: '5 min read',
      author: 'Consular Services Desk',
      image: '/images/passport_hero_1790966832173.jpg',
      excerpt: 'Essential checklist for Indian expatriates renewing passports at BLS centers in Dubai: photo specifications, annexure preparation, Tatkal timelines, and fees.',
      content: `The Consulate General of India in Dubai and BLS International manage all Indian passport renewal services for UAE residents.

Service Categories:
1. Normal Renewal (36 or 60 pages): Standard processing turnaround between 7 to 10 working days.
2. Tatkal Express Renewal: Urgent renewal processed within 2 to 3 working days for emergency travel.

Key Documents Checklist:
- Current original Indian passport with clear copies of first, last, and valid UAE residence visa page.
- Original Emirates ID of the applicant.
- Online consular application form typed with high precision to avoid rejection.
- Two recent 2x2 inch studio photographs on plain white background adhering to Indian passport specifications.`
    },
    {
      id: 'green-visa-freelance-residency',
      title: 'UAE Green Visa Explained: 5-Year Residency for Freelancers & Skilled Talents',
      category: 'Immigration Rules',
      date: 'August 29, 2026',
      readTime: '5 min read',
      author: 'BrightLink Immigration Advisory',
      image: '/images/about_visa_consultant_1790842347102.jpg',
      excerpt: 'Explore the 5-year self-sponsored Green Visa pathway designed for independent freelancers, skilled employees, and small business owners in the UAE.',
      content: `Introduced under the UAE's Advanced Visa System, the Green Visa bridges the gap between standard 2-year employment visas and the 10-year Golden Visa.

Who Qualifies?
- Freelancers and Self-Employed individuals holding a valid freelance/self-employment permit from the Ministry of Human Resources and Emiratisation (MOHRE).
- Skilled Employees classified under occupational levels 1, 2, or 3 with a minimum monthly salary of AED 15,000.
- Investors establishing commercial or industrial businesses.

Key Advantages:
- 5-year self-sponsored residence without requiring an employer sponsor.
- Extended 6-month grace period after visa cancellation to transition or renew.
- Direct sponsorship of first-degree relatives for the full 5-year tenure.`
    }
  ];

  const filteredArticles = articles.filter(art => {
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          art.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search visa guides, rules..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-neutral-200 text-xs bg-neutral-50 focus:outline-none focus:border-[#B8864B] focus:bg-white transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#B8864B] text-white shadow-xs'
                  : 'bg-neutral-100 text-[#555555] hover:bg-neutral-200/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <motion.article
            key={article.id}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#FCFAF8] rounded-2xl border border-neutral-200/80 hover:border-[#B8864B]/60 transition-all duration-300 shadow-xs hover:shadow-lg overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="relative h-48 overflow-hidden">
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

                <p className="text-xs text-[#555555] line-clamp-3 leading-relaxed mb-4">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-neutral-200/60 mt-auto flex items-center justify-between">
              <span className="text-[11px] text-neutral-400 font-medium">
                By {article.author}
              </span>

              <button
                onClick={() => onSelectArticle(article)}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#B8864B] hover:text-[#9F7038] cursor-pointer"
              >
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-16">
          <p className="text-neutral-500 text-sm">No articles found matching "{searchTerm}". Try a different keyword.</p>
        </div>
      )}
    </>
  );
};

export default ArticleCatalog;
