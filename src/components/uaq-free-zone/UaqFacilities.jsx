import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Warehouse, 
  Laptop, 
  Users, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const UaqFacilities = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const facilities = [
    {
      id: 'flexi-desk',
      title: 'Flexi-Desk (Shared Workspace)',
      badge: 'Budget-Efficient Entry',
      icon: Laptop,
      footprint: 'Shared Workstation Access',
      visaQuota: 'Typically 1 to 3 Residence Visas',
      features: [
        'Cost-effective solution ideal for digital startups, consultants, and remote traders',
        'Official registered business address for legal incorporation and compliance',
        'Access to shared business center amenities and meeting rooms on scheduled hours',
        'Low operational overhead with utilities and cleaning included in the package'
      ],
      idealFor: 'Solo founders, international entrepreneurs, freelance permit holders, and online businesses.'
    },
    {
      id: 'dedicated-desk',
      title: 'Dedicated Workstation',
      badge: 'Fixed Workstation',
      icon: Users,
      footprint: 'Permanently Assigned Desk',
      visaQuota: 'Typically 2 to 4 Residence Visas',
      features: [
        'Reserved personal workstation situated within a modern UAQ FTZ business facility',
        'Lockable document storage cabinet for corporate files and hardware',
        'High-speed business internet connectivity and shared administrative reception services',
        'Professional business address for banking correspondence and client meetings'
      ],
      idealFor: 'Small advisory teams, software contractors, and boutique agencies requiring routine office presence.'
    },
    {
      id: 'serviced-office',
      title: 'Private Serviced Office',
      badge: 'Private Executive Suite',
      icon: Building2,
      footprint: 'Self-Contained Lockable Suite',
      visaQuota: 'Expanded Quota Based on Square Footage',
      features: [
        'Fully furnished private executive office space with contemporary ergonomic fittings',
        'Dedicated corporate signage and individual executive security keycard access',
        'Meeting room hours, visitor greeting reception, and postal courier management',
        'Stronger physical operational footprint supporting enhanced corporate bank compliance'
      ],
      idealFor: 'Established commercial enterprises, corporate branches, and regional sales teams.'
    },
    {
      id: 'warehouses',
      title: 'Warehousing & Industrial Units',
      badge: 'Storage, Logistics & Light Assembly',
      icon: Warehouse,
      footprint: 'Industrial Pre-Built Units',
      visaQuota: 'Custom Quota Aligned with Operational Scale',
      features: [
        'Dedicated storage and light industrial units equipped with built-in office spaces',
        'High electrical power load allocations and wide vehicular access for loading trucks',
        'Compliant with UAE Civil Defense fire, smoke, and industrial safety standards',
        'Proximity to major northern UAE transit routes facilitating overland cargo distribution'
      ],
      idealFor: 'Import/export trading companies, freight handlers, consumer goods distributors, and light assembly plants.'
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F0]/40 border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Building2 className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>COMMERCIAL SPACES & FACILITIES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            UAQ Free Zone Workspace & Facility Options
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Every business has distinct workspace needs. UAQ FTZ offers a spectrum of physical infrastructure—from agile shared coworking desks to private executive offices and dedicated industrial warehouses.
          </p>
        </div>

        {/* 4 Facility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <motion.div
                key={fac.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-[#E6D7C3] p-7 shadow-2xs hover:shadow-sm hover:border-[#DECBB5] transition-all flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8864B] bg-[#FAF5EC] px-2.5 py-0.5 rounded border border-[#DECBB5]">
                      {fac.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                      {fac.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
                      <span>{fac.footprint}</span>
                      <span>•</span>
                      <span className="text-[#8C5E28] font-semibold">{fac.visaQuota}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 border-t border-[#F1EAE0] pt-4">
                    {fac.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-[#334155] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#EFEAE2] text-xs text-[#475569]">
                    <strong className="text-[#1E293B]">Recommended Application: </strong>
                    {fac.idealFor}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F1EAE0] flex items-center justify-between">
                  <span className="text-xs text-[#64748B]">Subject to current availability</span>
                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenConsultation) {
                        onOpenConsultation(`Facility Assessment - ${fac.title}`);
                      } else {
                        window.open(`https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(fac.title)}%20options%20in%20UAQ%20Free%20Zone.`, '_blank');
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] hover:text-[#976A36] group cursor-pointer transition-colors"
                  >
                    <span>Check Options</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Facility & Operational Reality Notice */}
        <div className="p-6 rounded-2xl bg-white border border-[#DECBB5] shadow-xs flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-[#8C5E28] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#475569] leading-relaxed space-y-1">
            <h4 className="font-bold text-[#1E293B]">
              Matching Facility Choice with Operational Scale
            </h4>
            <p>
              Please note that physical storage, freight offloading, and industrial processing cannot legally take place within shared flexi-desk facilities. If your company handles physical commercial stock, customs bonded warehousing or dedicated commercial storage space is required. Brightlink helps you select the exact facility package that meets both your immediate licensing needs and your long-term bank compliance expectations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
