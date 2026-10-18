import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Globe, 
  Anchor, 
  FileCheck2, 
  Layers, 
  HelpCircle,
  ArrowRight,
  TrendingUp,
  MapPin
} from 'lucide-react';

export const WhatIsSharjahFreeZone = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const corePillars = [
    {
      icon: Anchor,
      title: 'Strategic Dual-Coast Location',
      description: 'Sharjah is the only UAE Emirate possessing coastlines on both the Arabian Gulf and the Gulf of Oman (Indian Ocean via Khorfakkan Port), providing exceptional maritime trade advantages.'
    },
    {
      icon: TrendingUp,
      title: 'Industrial & Cultural Backbone',
      description: 'Recognized as the UAE’s industrial powerhouse, Sharjah accounts for a major share of the nation’s manufacturing output while fostering specialized global hubs in publishing, arts, and digital media.'
    },
    {
      icon: Layers,
      title: 'Distinct Regulatory Authorities',
      description: 'Sharjah operates multiple autonomous Free Zone Authorities (including SAIF Zone, Hamriyah Free Zone, SHAMS, and SPC), each with independent licensing bylaws, fee structures, and facility guidelines.'
    },
    {
      icon: Building2,
      title: 'Operational Cost Competitiveness',
      description: 'Businesses benefit from lower warehousing, leasing, and utility overheads compared to neighboring commercial centers, without sacrificing immediate logistical proximity to Dubai and GCC highways.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>FOUNDATIONAL PERSPECTIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Introduction to Sharjah Free Zone Company Formation
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Sharjah free zones are purpose-built economic jurisdictions created to stimulate foreign investment, promote cross-border commerce, and support specialized industrial, digital media, and publishing ecosystems.
          </p>
        </div>

        {/* Narrative & Authority Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-5"
          >
            <h3 className="text-2xl font-bold font-heading text-[#0F172A] leading-snug">
              How Company Formation Works in the Emirate of Sharjah
            </h3>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              When establishing an enterprise in a Sharjah free zone, your company is registered and licensed directly under the legislative framework of the specific authority chosen—such as the Sharjah Airport International Free Zone Authority (SAIF Zone), Hamriyah Free Zone Authority (HFZA), Sharjah Media City (SHAMS), or Sharjah Publishing City (SPC Free Zone).
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Each authority regulates its own commercial activities, determines its own facility requirements (from flexi-desks to heavy industrial land), sets visa quotas, and issues trade licences. Because the jurisdictions differ in technical infrastructure, physical premises, and compliance regimes, selecting the right zone requires careful alignment with your core trade, operational budget, and customer location.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              <strong>Free Zone vs. Mainland Scope:</strong> A company incorporated within a Sharjah free zone is authorized to trade internationally, transact with other free zone businesses across the UAE, and deliver cross-border services. Direct commercial operations or retail sales within the UAE mainland territory require established arrangements such as a local distributor, commercial agent, or an approved mainland branch licence.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenConsultation('Sharjah Free Zone - Jurisdiction Evaluation')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#8C5E28] hover:text-[#B8864B] transition-colors cursor-pointer group"
              >
                <span>Request a Sharjah Free Zone Assessment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#B8864B]" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 bg-gradient-to-br from-[#FAF7F0] to-[#F5EFE6] rounded-3xl p-7 sm:p-8 border border-[#E6D7C3] shadow-md space-y-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#b8864b] text-white flex items-center justify-center shadow-xs">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E28] block font-heading">
                  SELECTION CRITERIA
                </span>
                <span className="text-sm font-extrabold text-[#0F172A]">
                  Guiding Your Choice of Free Zone
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="p-3.5 bg-white/90 rounded-xl border border-[#DECBB5]/70 shadow-2xs">
                <span className="font-bold text-[#0F172A] block mb-0.5">Primary Activity & Sector Fit</span>
                <span className="text-[#64748B]">Matching your operational model with specialized zones (e.g. heavy industry in Hamriyah vs digital media in SHAMS or publishing in SPC).</span>
              </div>

              <div className="p-3.5 bg-white/90 rounded-xl border border-[#DECBB5]/70 shadow-2xs">
                <span className="font-bold text-[#0F172A] block mb-0.5">Facility & Workspace Requirements</span>
                <span className="text-[#64748B]">Choosing between flexible digital desks, shared coworking spaces, executive office suites, bonded warehouses, or open industrial land.</span>
              </div>

              <div className="p-3.5 bg-white/90 rounded-xl border border-[#DECBB5]/70 shadow-2xs">
                <span className="font-bold text-[#0F172A] block mb-0.5">Visa Allocations & Expansion Plans</span>
                <span className="text-[#64748B]">Ensuring the license package and leased premises support the residency visa quotas necessary for your team and future growth.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-[#FAF7F0]/60 border border-[#E6D7C3] hover:border-[#DECBB5] hover:bg-white hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E6D7C3] flex items-center justify-center text-[#B8864B] mb-4 shadow-2xs">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
