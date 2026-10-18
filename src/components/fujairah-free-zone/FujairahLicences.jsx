import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCheck2, 
  ShoppingBag, 
  Boxes, 
  Factory, 
  Briefcase, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Building
} from 'lucide-react';

export const FujairahLicences = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const licenceTypes = [
    {
      id: 'commercial-trading',
      title: 'Trading & General Trading Licence',
      badge: 'Most Popular for Commerce',
      icon: ShoppingBag,
      purpose: 'Authorizes the import, export, storage, and distribution of specified commercial commodities (Trading Licence) or multiple unrestricted categories of goods (General Trading Licence).',
      suits: 'Commodity merchants, consumer goods distributors, equipment importers, wholesale traders, and cross-border e-commerce ventures.',
      limitations: 'Products must match approved customs codes. Direct retail sales to mainland UAE consumers require a local commercial agent, onshore distributor, or mainland branch licence.',
      facility: 'Flexi-desk, executive office suite, or dedicated bonded warehouse depending on physical inventory handling.',
      approvals: 'Standard items require only FFZA clearance. Specialized commodities (food, pharmaceuticals, medical equipment, chemicals) require federal ministry approvals (MOHAP, MOIAT, or Municipality).'
    },
    {
      id: 'warehousing-licence',
      title: 'Warehousing Licence',
      badge: 'Logistics & 3PL Hubs',
      icon: Boxes,
      purpose: 'Permits leaseholder to utilize large-scale storage units for warehousing, cross-docking, cargo packaging, consolidation, and regional distribution.',
      suits: 'Third-party logistics (3PL) providers, shipping freight consolidators, inventory storage managers, and bulk cargo distribution depots.',
      limitations: 'Restricted to storage, packaging, and handling operations; retail storefront activities from the warehouse are prohibited.',
      facility: 'Mandatory standard warehouse (minimum built-up area as specified by FFZA) with Civil Defense safety systems.',
      approvals: 'Civil Defense fire and life safety certificate, Port of Fujairah Customs bonded registration, and insurance policies.'
    },
    {
      id: 'manufacturing-licence',
      title: 'Manufacturing / Industrial Licence',
      badge: 'Industrial Production',
      icon: Factory,
      purpose: 'Authorizes the processing, refining, assembly, fabrication, and packaging of raw materials or semi-finished goods into final industrial products.',
      suits: 'Steel fabricators, chemical packaging plants, marine equipment builders, food processing units, and electronics assemblers.',
      limitations: 'Operations must be conducted within the approved industrial premises with strictly compliant environmental emissions and waste management.',
      facility: 'Pre-built factory unit or long-term leasehold industrial land plot with dedicated high-voltage power and water supply.',
      approvals: 'Mandatory Environmental Impact Assessment (EIA), Ministry of Industry and Advanced Technology (MOIAT) notifications, Civil Defense industrial clearance.'
    },
    {
      id: 'service-consultancy',
      title: 'Service & Professional Consultancy Licence',
      badge: 'Advisory & Services',
      icon: Briefcase,
      purpose: 'Permits registered professionals, engineers, and firms to deliver specialized advice, management consultancy, technical evaluations, and service contracting.',
      suits: 'Management consultants, marine surveyors, engineering designers, software and IT architects, marketing agencies, and project managers.',
      limitations: 'Strictly service-based; does not authorize physical trading, importing, or warehousing of commercial goods under this specific licence.',
      facility: 'Flexi-desk workspace, business center executive office, or standard leased commercial office suite.',
      approvals: 'Attested academic credentials and professional CVs for key managers. Regulated professions (e.g., legal, accounting, healthcare) may require sector-specific regulatory endorsements.'
    }
  ];

  return (
    <section id="fujairah-licences-section" className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <FileCheck2 className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>OFFICIAL LICENSING FRAMEWORK</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Fujairah Free Zone Licence Categories
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Fujairah Free Zone Authority issues specific licence classes aligned with your corporate activity, required workspace, and operational model. Each licence category has distinct regulatory criteria, facility requirements, and operational parameters.
          </p>
        </div>

        {/* 4 Detailed Licence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {licenceTypes.map((lic, idx) => {
            const Icon = lic.icon;
            return (
              <motion.div
                key={lic.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-7 sm:p-8 rounded-2xl bg-[#FCFAF8] border border-[#DECBB5] hover:border-[#B8864B] transition-all shadow-xs flex flex-col justify-between group space-y-6"
              >
                <div className="space-y-5">
                  
                  {/* Top Badge & Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white text-[#8C5E28] text-xs font-bold border border-[#DECBB5] shadow-2xs font-heading">
                      {lic.badge}
                    </span>
                  </div>

                  {/* Title & Purpose */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#0F172A] font-heading">
                      {lic.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                      {lic.purpose}
                    </p>
                  </div>

                  {/* Operational Criteria Breakdown */}
                  <div className="space-y-3 pt-2 border-t border-[#F1E8DC] text-xs">
                    
                    <div className="space-y-1">
                      <span className="font-bold text-[#0F172A] block uppercase tracking-wider text-[11px]">
                        Suitable For:
                      </span>
                      <p className="text-[#475569] leading-snug">
                        {lic.suits}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="font-bold text-[#8C5E28] block uppercase tracking-wider text-[11px]">
                        Activity Limitations:
                      </span>
                      <p className="text-[#475569] leading-snug">
                        {lic.limitations}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="font-bold text-[#0F172A] block uppercase tracking-wider text-[11px]">
                        Workspace / Lease Requirement:
                      </span>
                      <p className="text-[#475569] leading-snug">
                        {lic.facility}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="font-bold text-[#64748B] block uppercase tracking-wider text-[11px]">
                        External Approvals:
                      </span>
                      <p className="text-[#64748B] leading-snug">
                        {lic.approvals}
                      </p>
                    </div>

                  </div>

                </div>

                {/* Bottom Action Button */}
                <div className="pt-4 border-t border-[#F1E8DC]">
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(`Licence Inquiry: ${lic.title}`)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#FAF5EC] border border-[#DECBB5] hover:border-[#B8864B] text-[#0F172A] hover:text-[#8C5E28] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <span>Request Licensing Assessment</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Informative Guidance Banner */}
        <div className="p-6 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-[#8C5E28] font-heading flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
              Need Multiple Activities Across Trading and Services?
            </h4>
            <p className="text-xs text-[#6D4518] leading-relaxed">
              FFZA permits multi-activity licensing under compatible activity groups subject to authority approval. Brightlink evaluates your business model to determine whether a consolidated licence or multi-tier corporate structure provides the best cost efficiency.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenConsultation('Multi-Activity Assessment')}
            className="px-5 py-2.5 rounded-xl bg-[#8C5E28] hover:bg-[#6D4518] text-white text-xs font-bold whitespace-nowrap cursor-pointer transition-colors shadow-xs shrink-0"
          >
            Review Activity Compatibility
          </button>
        </div>

      </div>
    </section>
  );
};
