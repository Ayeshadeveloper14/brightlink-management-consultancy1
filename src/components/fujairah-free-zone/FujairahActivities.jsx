import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  ShoppingBag, 
  Warehouse, 
  Factory, 
  Wrench, 
  Anchor, 
  Plane, 
  Briefcase, 
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  ChevronRight
} from 'lucide-react';

export const FujairahActivities = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedActivityIndex, setSelectedActivityIndex] = useState(0);

  const activities = [
    {
      id: 'trading-import-export',
      title: 'A. Trading, Import and Export',
      shortTitle: 'Trading & Re-Export',
      icon: ShoppingBag,
      tagline: 'Global Commodity & Commercial Merchandise Distribution',
      summary: 'Ideal for international trading firms, import/export operators, and distribution enterprises seeking to move goods between Asia, Africa, Europe, and the Middle East without UAE mainland customs duty.',
      details: [
        'International trade across consumer goods, building materials, textiles, electronics, metals, and industrial hardware.',
        'Zero customs duty on goods imported into the free zone for storage, packaging, or re-export.',
        'Customs bill of entry and bonded warehouse transit documentation managed directly at FFZA Port Customs.',
        'Product-specific approvals required for specialized goods (foodstuffs require municipal hygiene clearance; chemicals require civil defense audit).'
      ],
      facilityRequirement: 'Trading office, flexi-desk, or bonded warehouse unit.',
      licenceType: 'Commercial Trading Licence or General Trading Licence'
    },
    {
      id: 'warehousing-distribution',
      title: 'B. Warehousing and Distribution',
      shortTitle: 'Warehousing & Storage',
      icon: Warehouse,
      tagline: 'Strategic Regional Inventory Hub & Fulfillment Centers',
      summary: 'Designed for logistics aggregators, 3PL providers, and wholesale distributors requiring climate-controlled or dry bulk storage adjacent to deep-water berths.',
      details: [
        'Bonded warehousing facilities supporting cross-docking, long-term stockpiling, and break-bulk logistics.',
        'Custom packing, re-labeling, palletizing, and cargo consolidation operations permitted inside authorized units.',
        'High floor-load capacity with dedicated loading docks, container staging zones, and articulated truck access.',
        'Applicable customs transit clearance protocols for seamless transshipment across GCC road networks.'
      ],
      facilityRequirement: 'Pre-built standard warehouse (from 500 sqm) or customized logistics depot.',
      licenceType: 'Warehousing Licence or Logistics Commercial Licence'
    },
    {
      id: 'manufacturing-processing',
      title: 'C. Manufacturing and Processing',
      shortTitle: 'Manufacturing & Processing',
      icon: Factory,
      tagline: 'Light, Medium & Heavy Industrial Production Facilities',
      summary: 'Fujairah Free Zone actively supports industrial ventures, processing facilities, chemical packaging, and precision fabrication with heavy power and utility infrastructure.',
      details: [
        'Assembly, refining, mixing, processing, and downstream manufacturing operations.',
        'Substantial industrial plots with high-voltage electricity feeds, high-capacity water supply, and gas connections.',
        'Mandatory environmental impact assessments (EIA) and Civil Defense fire-safety approvals before commissioning.',
        'Workforce accommodation, factory floor specifications, and comprehensive plant insurance required.'
      ],
      facilityRequirement: 'Industrial plot (leasehold land) or pre-engineered factory unit.',
      licenceType: 'Manufacturing / Industrial Licence'
    },
    {
      id: 'engineering-technical',
      title: 'D. Engineering and Technical Businesses',
      shortTitle: 'Engineering & Technical',
      icon: Wrench,
      tagline: 'Specialized Industrial, Marine & Mechanical Technical Services',
      summary: 'Suitable for engineering consultancies, mechanical testing laboratories, structural design firms, and specialized technical maintenance providers serving regional industries.',
      details: [
        'Marine engineering, offshore structure maintenance, pipeline services, and electrical instrumentation.',
        'Technical service licensing accommodating certified engineers, technicians, and specialized tooling equipment.',
        'Pre-approvals from relevant technical bodies and municipal engineering departments where applicable.',
        'Option to combine engineering consultancy with light assembly or field service dispatch facilities.'
      ],
      facilityRequirement: 'Engineering office or service workshop unit with tool staging.',
      licenceType: 'Service Licence / Technical Service Licence'
    },
    {
      id: 'logistics-marine',
      title: 'E. Logistics and Marine-Related Businesses',
      shortTitle: 'Logistics & Marine Services',
      icon: Anchor,
      tagline: 'Port Proximity, Ship Chandlery, Bunkering & Maritime Freight',
      summary: 'Capitalize on Fujairah’s status as the world’s second-largest ship refueling (bunkering) anchorage with dedicated marine supply and freight support licensing.',
      details: [
        'Ship chandlery, marine spare parts supply, vessel crew transfers, and maritime agency services.',
        'Freight forwarding, sea-air multimodal transit, and container freight station operations.',
        'Direct access to Port of Fujairah berths, oil terminals, and anchorage service coordination.',
        'Port Authority permits, harbor master clearances, and maritime insurance documentation required.'
      ],
      facilityRequirement: 'Maritime service office, container yard, or port-side warehouse depot.',
      licenceType: 'Commercial Marine Licence or Service Licence'
    },
    {
      id: 'aviation-related',
      title: 'F. Aviation-Related Businesses',
      shortTitle: 'Aviation Support',
      icon: Plane,
      tagline: 'Aero-Logistics, Aircraft Maintenance & Aviation Parts Supply',
      summary: 'Proximity to Fujairah International Airport (FMA) offers eligible opportunities for aircraft components trading, aviation consultancy, air cargo charter support, and maintenance logistics.',
      details: [
        'Aviation spare parts distribution, avionics warehousing, and ground-support equipment maintenance.',
        'Clearly distinguished: Ordinary commercial trading licences differ from flight-operations air operator certificates (AOC).',
        'Regulatory interface with General Civil Aviation Authority (GCAA) where regulated aero-components are handled.',
        'Air cargo consolidation and express courier forwarding via Fujairah Airport cargo terminal.'
      ],
      facilityRequirement: 'Airport-adjacent commercial office or secure bonded aero-parts warehouse.',
      licenceType: 'Aviation Service Licence or Specialized Commercial Trading Licence'
    },
    {
      id: 'consultancy-professional',
      title: 'G. Consultancy and Professional Services',
      shortTitle: 'Consultancy & Services',
      icon: Briefcase,
      tagline: 'Corporate, Financial, Management & Technology Advisory',
      summary: 'Designed for individual consultants, international advisory firms, IT specialists, project managers, and marketing agencies delivering regional expertise.',
      details: [
        'Management consultancy, international business advisory, HR consulting, IT architecture, and marketing strategy.',
        'Simplified document checklist and flexible office solutions with zero physical stock requirements.',
        'Professional indemnity insurance and accredited university degree attestation for designated managers.',
        'Professional service activities eligible for residence visa quotas matched to office workspace scale.'
      ],
      facilityRequirement: 'Executive office, serviced business desk, or flexi-workspace.',
      licenceType: 'Professional / Consultancy Service Licence'
    },
    {
      id: 'other-permitted',
      title: 'H. Other Permitted Activities',
      shortTitle: 'Other Permitted Sectors',
      icon: Layers,
      tagline: 'Cold Chain, Agri-Commodities & Energy Infrastructure',
      summary: 'FFZA maintains an extensive official activity catalogue covering specialized sectors that leverage Fujairah’s energy, food security, and regional transit corridors.',
      details: [
        'Agricultural commodity processing, grains warehousing, and bulk fertilizer bagging operations.',
        'Cold-chain storage facilities for perishable food items and pharmaceutical supplies.',
        'Waste management, scrap metal recycling, and environmental recycling technologies.',
        'Activity inclusion is subject to FFZA committee review and municipal environmental health certifications.'
      ],
      facilityRequirement: 'Specialized industrial or temperature-controlled warehousing unit.',
      licenceType: 'Specialized Activity Licence'
    }
  ];

  const active = activities[selectedActivityIndex];
  const ActiveIcon = active.icon;

  return (
    <section id="fujairah-activities" className="py-20 bg-[#FAF8F5] border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Layers className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>BUSINESS SECTORS & PERMITTED ACTIVITIES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Industry Opportunities in Fujairah Free Zone
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Fujairah Free Zone Authority offers a comprehensive activity registry spanning international trading, bonded warehousing, heavy industrial processing, marine services, and professional consultancy. Review the official sector categories below to evaluate activity requirements.
          </p>
        </div>

        {/* Interactive Desktop / Tablet Tab Selector & Mobile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sector Buttons */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block mb-2 px-2">
              Select Sector Category:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {activities.map((item, idx) => {
                const ItemIcon = item.icon;
                const isSelected = selectedActivityIndex === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedActivityIndex(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#8C5E28] border-[#8C5E28] text-white shadow-md'
                        : 'bg-white border-[#E6D7C3] text-[#334155] hover:bg-[#FAF5EC] hover:border-[#DECBB5]'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#FAF5EC] text-[#B8864B]'
                      }`}>
                        <ItemIcon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold truncate">
                        {item.shortTitle}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-white translate-x-0.5' : 'text-[#DECBB5]'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Activity Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DECBB5] shadow-md space-y-6"
              >
                {/* Card Top Title & Tagline */}
                <div className="space-y-2 pb-5 border-b border-[#F1E8DC]">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
                      Activity Category
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FAF5EC] text-[#8C5E28] text-[11px] font-bold border border-[#DECBB5]">
                      {active.licenceType}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] font-heading flex items-center gap-2.5">
                    <ActiveIcon className="w-6 h-6 text-[#B8864B] shrink-0" />
                    <span>{active.title}</span>
                  </h3>
                  <p className="text-sm font-semibold text-[#8C5E28]">
                    {active.tagline}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  {active.summary}
                </p>

                {/* Key Operational Coverage Points */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] font-heading">
                    Operational Requirements & Scope
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {active.details.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] bg-[#FAF8F5] p-3 rounded-lg border border-[#F1E8DC]">
                        <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Facility & Approval Spec Footer */}
                <div className="p-4 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] space-y-2 text-xs text-[#6D4518]">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                    <div>
                      <strong>Required Workspace / Facility:</strong> {active.facilityRequirement}
                    </div>
                  </div>
                  <p className="text-[11px] text-[#8C5E28] pl-6 leading-relaxed">
                    Note: Actual activity authorization depends on FFZA commercial approval, warehouse lease compliance, and relevant federal or municipal clearances where regulated goods are involved.
                  </p>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#64748B]">
                    Want to combine multiple activities under one Fujairah licence?
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(`Activity Consultation: ${active.title}`)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xs transition-colors"
                  >
                    <span>Check Activity Feasibility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
