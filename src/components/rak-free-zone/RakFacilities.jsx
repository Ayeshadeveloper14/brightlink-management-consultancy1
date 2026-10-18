import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Warehouse, 
  Laptop, 
  Layers, 
  Users, 
  Zap, 
  CheckCircle2, 
  MapPin, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const RakFacilities = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const facilities = [
    {
      id: 'flexi-desk',
      title: 'Flexi-Desk (Coworking Workstation)',
      badge: 'Best Value for Startups',
      icon: Laptop,
      size: 'Shared Workstation Access',
      visaQuota: 'Up to 2 - 3 Residence Visas',
      features: [
        'Affordable entry point ideal for digital nomads, solo consultants, and e-commerce traders',
        'Access to business center facilities, high-speed Wi-Fi, and communal meeting rooms',
        'Official registered corporate address for licensing, banking, and government compliance',
        'Low upfront cost with zero maintenance and utility overheads'
      ],
      suits: 'Freelancers, consultants, online service providers, and early-stage entrepreneurs.'
    },
    {
      id: 'dedicated-desk',
      title: 'Dedicated Desk Workstation',
      badge: 'Fixed Workstation',
      icon: Users,
      size: 'Allocated Personal Workstation',
      visaQuota: 'Up to 3 - 4 Residence Visas',
      features: [
        'Permanently reserved desk within a premier RAKEZ business center',
        'Lockable storage unit for physical files and computing hardware',
        'High-speed business internet and professional reception greeting services',
        'Access to executive boardrooms and audio-visual meeting facilities'
      ],
      suits: 'Professional consultants, software architects, and boutique advisory firms requiring daily office access.'
    },
    {
      id: 'serviced-office',
      title: 'Serviced Executive Office',
      badge: 'Ready-to-Move Private Suites',
      icon: Building2,
      size: '10 sqm to 50+ sqm Private Offices',
      visaQuota: '4 to 8+ Visas (scaled to floor area)',
      features: [
        'Fully furnished, lockable private executive suites with ergonomic furniture',
        'Dedicated landline telephone number, high-speed internet, and daily housekeeping',
        'Professional bilingual reception, courier handling, and visitor reception',
        'Complimentary monthly meeting room hours and executive lounge access'
      ],
      suits: 'Established consulting firms, regional sales teams, corporate branches, and investment advisors.'
    },
    {
      id: 'shell-core',
      title: 'Shell & Core Commercial Offices',
      badge: 'Custom Corporate Headquarters',
      icon: Layers,
      size: '100 sqm to 1,000+ sqm Open Layouts',
      visaQuota: 'Generous quota based on 9 sqm per visa',
      features: [
        'Unfurnished open floor plates ready for bespoke interior design and branding',
        'Multiple floor plate configurations within high-grade commercial office towers',
        'Dedicated high-capacity utility connections and telecommunications infrastructure',
        'Reserved basement parking allocations for executive management and staff'
      ],
      suits: 'Medium-to-large enterprises, regional headquarters, technology hubs, and corporate group offices.'
    },
    {
      id: 'warehouses',
      title: 'Standard & Bonded Warehouses',
      badge: 'Logistics, Storage & Light Assembly',
      icon: Warehouse,
      size: '150 sqm to 2,000+ sqm Units',
      visaQuota: 'High quota aligned with operational capacity',
      features: [
        'Pre-built insulated warehouse units equipped with built-in ground/mezzanine office suites',
        'Dedicated heavy electrical load allocations (3-phase power up to 100+ kW)',
        'Heavy-duty concrete loading docks, motorized roller shutter access, and wide maneuvering aprons',
        'Integrated Civil Defense fire sprinkler and smoke detection infrastructure'
      ],
      suits: 'Import/export wholesalers, freight forwarders, third-party logistics (3PL), and light assembly manufacturers.'
    },
    {
      id: 'industrial-land',
      title: 'Industrial Land Plots',
      badge: 'Heavy Production & Large Scale',
      icon: Zap,
      size: '5,000 sqm to 100,000+ sqm Plots',
      visaQuota: 'Custom allocation based on project blueprint',
      features: [
        'Direct proximity to Saqr Port and main UAE highway networks (E311 / E611)',
        'Customizable long-term lease terms with dedicated power, industrial gas, and water connections',
        'Zoned specifically for heavy manufacturing, marine fabrication, mineral processing, and recycling',
        'Comprehensive environmental and industrial planning support from RAKEZ engineering teams'
      ],
      suits: 'Heavy manufacturing plants, chemical processing facilities, maritime engineering yards, and regional factories.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Building2 className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>COMMERCIAL & INDUSTRIAL INFRASTRUCTURE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            RAK Free Zone Office, Warehouse & Land Facilities
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            From single-desk coworking packages to 2,000 sqm bonded logistics warehouses and waterfront industrial plots, RAKEZ provides modular commercial spaces designed for financial efficiency and long-term scalability.
          </p>
        </div>

        {/* 6 Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <motion.div
                key={fac.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-[#FAF7F0]/30 rounded-2xl border border-[#E6D7C3] p-6 flex flex-col justify-between hover:border-[#DECBB5] hover:shadow-md transition-all"
              >
                <div className="space-y-5">
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8864B] bg-white px-2 py-0.5 rounded border border-[#E6D7C3]">
                      {fac.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                      {fac.title}
                    </h3>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
                      <span>{fac.size}</span>
                      <span>•</span>
                      <span className="text-[#8C5E28] font-semibold">{fac.visaQuota}</span>
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 border-t border-[#EFEAE2] pt-4">
                    {fac.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-[#334155] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Best Suited For */}
                  <div className="p-3 rounded-lg bg-white border border-[#EFEAE2] text-xs text-[#475569]">
                    <strong className="text-[#1E293B]">Suited for:</strong> {fac.suits}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 pt-4 border-t border-[#EFEAE2] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-[#8C5E28]">Inspect Availability</span>
                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenConsultation) {
                        onOpenConsultation(`Facility Inquiry - ${fac.title}`);
                      } else {
                        window.open(`https://wa.me/971566556645?text=Hello%2C%20I%20am%20interested%20in%20leasing%20a%20${encodeURIComponent(fac.title)}%20in%20RAK%20Free%20Zone.`, '_blank');
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] hover:text-[#976A36] group cursor-pointer transition-colors shrink-0"
                  >
                    <span>Check Rates</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
