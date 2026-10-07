import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Home, 
  Store, 
  Map, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle 
} from 'lucide-react';

export const RevaluationServiceCards = () => {
  const propertyCategories = [
    {
      id: 'ready-residential',
      title: 'Ready Residential Properties',
      subtitle: 'Apartments, Penthouses, Townhouses & Luxury Villas',
      description: 'Comprehensive physical on-site evaluation for completed residential units across Dubai freeholds including Downtown, Dubai Marina, Palm Jumeirah, and Emirates Hills.',
      icon: Home,
      features: [
        'Title deed status verification',
        'Interior upgrades & finishes assessed',
        'Community market transaction matching',
        'Golden Visa eligibility appraisal'
      ],
      turnaround: '3 - 5 Working Days'
    },
    {
      id: 'off-plan-residential',
      title: 'Off-Plan & Under-Construction Units',
      subtitle: 'Oqood Registered Projects & Primary Developer Units',
      description: 'Valuation of off-plan properties with registered Oqood certificates, assessing escrow payments, construction completion percentages, and developer NOC clearance.',
      icon: Building,
      features: [
        'DLD escrow account statement review',
        'Official contractor completion percentage',
        'Contract payment schedule audit',
        'Interim registration valuation'
      ],
      turnaround: '4 - 7 Working Days'
    },
    {
      id: 'commercial-industrial',
      title: 'Commercial & Industrial Real Estate',
      subtitle: 'Offices, Retail Showrooms, Warehouses & Commercial Buildings',
      description: 'Certified appraisal for corporate commercial properties, rental yield capitalization, office towers in Business Bay/DIFC, and industrial warehouses in Dubai South and Al Quoz.',
      icon: Store,
      features: [
        'Ejari corporate tenancy schedule audit',
        'Commercial zoning & civil defense status',
        'Capitalization rate & income analysis',
        'Bank equity release & auditing compliance'
      ],
      turnaround: '5 - 7 Working Days'
    },
    {
      id: 'land-plots',
      title: 'Freehold Land Plots & Development Sites',
      subtitle: 'Residential, Commercial & Mixed-Use Land Parcels',
      description: 'Specialized valuation of vacant land plots, villa master-development plots, and mixed-use commercial land reflecting master developer masterplans and GFA limits.',
      icon: Map,
      features: [
        'Gross Floor Area (GFA) verification',
        'Permitted land use & building height ratio',
        'Affection plan & municipal site analysis',
        'Market comparable land transaction benchmarking'
      ],
      turnaround: '4 - 7 Working Days'
    }
  ];

  const handleInquiry = (title) => {
    const query = encodeURIComponent(`Hello BrightLink, I would like to inquire about Property Valuation for: ${title}.`);
    window.open(`https://wa.me/971566556645?text=${query}`, '_blank');
  };

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              Asset Scope
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-4">
            Property Categories We Value
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-[#B8864B] mb-3">
            Accredited valuations across every freehold real estate sector in Dubai.
          </p>

          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Every property type is assessed by licensed Dubai Land Department valuation specialists using standardized RERA valuation algorithms, real transaction histories, and physical municipal inspections.
          </p>
        </div>

        {/* 4 Cards Grid - 2x2 on Desktop for comfortable width and readability */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {propertyCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-[#EFEAE2] hover:border-[#B8864B]/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center group-hover:bg-[#B8864B] group-hover:text-white transition-all shadow-2xs">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <span className="text-xs font-bold text-[#976A36] bg-[#FAF5EC] px-3 py-1 rounded-full border border-[#E6D7C3]">
                      {item.turnaround}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#222222] mb-1 group-hover:text-[#B8864B] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#B8864B] mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-neutral-100 mb-6">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                        <span className="text-xs text-[#444444] font-medium">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => handleInquiry(item.title)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#B8864B] hover:text-[#7A5424] transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire for this category</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[11px] text-neutral-400 font-medium">
                    DLD Certified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
