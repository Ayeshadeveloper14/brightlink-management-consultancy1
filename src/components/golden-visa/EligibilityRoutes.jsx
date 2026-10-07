import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Briefcase, 
  TrendingUp, 
  GraduationCap, 
  FlaskConical, 
  Palette, 
  Stethoscope, 
  UserCheck, 
  Crown,
  CheckCircle2, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

export const EligibilityRoutes = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    {
      id: 'property-investor',
      tag: 'investor',
      title: 'Property Investor',
      criteria: 'Property value ≥ AED 2,000,000',
      description: 'Purchase one or more properties in Dubai or UAE freeholds with an aggregate valuation of AED 2M or more. Mortgaged properties are accepted with bank NOC.',
      icon: Building2,
      highlights: ['Freehold or leasehold properties', 'Mortgages allowed with bank NOC', 'Joint spouse title deeds accepted']
    },
    {
      id: 'business-owner',
      tag: 'business',
      title: 'Business Owner',
      criteria: 'Capital share ≥ AED 2,000,000',
      description: 'Founders or partners in UAE companies contributing at least AED 2M in equity capital, or paying government taxes of at least AED 250,000 annually.',
      icon: TrendingUp,
      highlights: ['Audited financial balance sheet', 'Commercial trade licence proof', 'Federal Tax Authority (FTA) letter']
    },
    {
      id: 'entrepreneur',
      tag: 'business',
      title: 'Entrepreneur',
      criteria: 'SME project ≥ AED 500,000',
      description: 'Founders of an innovative technical or economic project approved by an official UAE incubator, Ministry of Economy, or recognized authority.',
      icon: Crown,
      highlights: ['Accredited UAE incubator approval', 'Auditor valuation certificate', 'Previous project exit of ≥ AED 7M']
    },
    {
      id: 'skilled-professional',
      tag: 'professional',
      title: 'Skilled Professional',
      criteria: 'Monthly salary ≥ AED 30,000',
      description: 'Specialized employees across science, engineering, IT, business administration, education, law, and social sciences with MOHRE Level 1 or 2 classification.',
      icon: Briefcase,
      highlights: ['Attested Bachelor degree or higher', 'Active UAE employment contract', '6-month bank salary statements']
    },
    {
      id: 'executive-director',
      tag: 'professional',
      title: 'Executive Director',
      criteria: 'Senior executive earning ≥ AED 30,000/mo',
      description: 'C-suite officers, general managers, and managing directors holding university degrees and a minimum of 5 years senior executive track record.',
      icon: UserCheck,
      highlights: ['C-level title on labour contract', 'Company organizational chart', '5+ years experience verification']
    },
    {
      id: 'outstanding-student',
      tag: 'talent',
      title: 'Outstanding Student',
      criteria: 'GPA ≥ 3.8 or high school top 95%+',
      description: 'Exceptional high school toppers in UAE schools, or university graduates from accredited UAE universities or the world top 100 QS-ranked global universities.',
      icon: GraduationCap,
      highlights: ['Minimum GPA of 3.8 / 4.0', 'MOE equivalency certificate', 'Graduation within past 2 years']
    },
    {
      id: 'scientist',
      tag: 'talent',
      title: 'Scientist',
      criteria: 'Emirates Scientists Council endorsement',
      description: 'Researchers and scientists with significant scientific achievements, citations, and recommendation from the Emirates Scientists Council.',
      icon: FlaskConical,
      highlights: ['PhD or Master from top university', 'Major peer-reviewed publications', 'Scientists Council recommendation']
    },
    {
      id: 'creative-talent',
      tag: 'talent',
      title: 'Creative Talent',
      criteria: 'Dubai Culture / Ministry endorsement',
      description: 'Distinguished innovators and creators in culture, fine arts, literature, performing arts, heritage, design, and museum curation.',
      icon: Palette,
      highlights: ['Dubai Culture NOC letter', 'Portfolio of international awards', 'Media coverage & exhibits']
    },
    {
      id: 'specialized-experts',
      tag: 'professional',
      title: 'Specialized Experts',
      criteria: 'Doctors, AI experts, engineers & athletes',
      description: 'Licensed medical doctors, clinical specialists, software architects, AI innovators, data scientists, and elite athletes with ministerial recognition.',
      icon: Stethoscope,
      highlights: ['DHA / MOHAP medical licence', 'Patent ownership or awards', 'Direct priority ministry track']
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'All 9 Categories' },
    { id: 'investor', label: 'Real Estate' },
    { id: 'business', label: 'Business & Founders' },
    { id: 'professional', label: 'Skilled & Executives' },
    { id: 'talent', label: 'Talent & Academia' }
  ];

  const filteredCategories = activeCategory === 'all'
    ? categories
    : categories.filter(c => c.tag === activeCategory);

  const handleConsult = (categoryTitle) => {
    if (onOpenConsultation) {
      onOpenConsultation(`Golden Visa - ${categoryTitle}`);
    }
  };

  return (
    <section id="eligibility-routes" className="py-16 lg:py-24 bg-[#FFFFFF] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Eligibility Pathways
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            What Qualifies You for a UAE Golden Visa?
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            The UAE federal residency decree establishes 9 distinct pathways for investors, entrepreneurs, executives, scientists, and exceptional talents. Select your category below to review qualification thresholds.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#B8864B] text-white shadow-md shadow-[#B8864B]/20'
                  : 'bg-[#FAF8F5] text-[#555555] hover:bg-[#F3EAD9] hover:text-[#222222] border border-[#EFEAE2]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 9 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-[#FCFAF8] rounded-2xl p-6 sm:p-7 border border-[#EFEAE2] hover:border-[#B8864B]/50 hover:bg-white transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] text-[#B8864B] border border-[#E6D7C3] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 stroke-[1.9]" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-[#E6D7C3] text-[#B8864B]">
                      {item.criteria}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#222222] font-heading mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#888888] block">
                      Core Prerequisites:
                    </span>
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#444444]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F1EBE1]">
                  <button
                    type="button"
                    onClick={() => handleConsult(item.title)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#FAF5EC] text-[#976A36] hover:bg-[#B8864B] hover:text-white transition-all flex items-center justify-between cursor-pointer"
                  >
                    <span>Check {item.title} Eligibility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
