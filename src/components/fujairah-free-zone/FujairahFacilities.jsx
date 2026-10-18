import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Warehouse, 
  Factory, 
  Layers, 
  Compass, 
  CheckCircle2, 
  AlertCircle, 
  Zap, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const FujairahFacilities = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const facilities = [
    {
      title: 'Trading Offices & Flexi-Desks',
      category: 'Commercial Workspace',
      desc: 'Furnished executive offices, partitioned commercial units, and flexible business desks within the FFZA administrative complex. Ideal for international trading firms, commercial liaisons, and professional consultancies.',
      features: [
        'Furnished suites with high-speed internet and telecom infrastructure',
        'Includes official registered business address inside the free zone',
        'Flexible annual lease contracts renewable with your trade licence',
        'Eligible for 1 to 3 UAE residence visa allocations depending on office tier'
      ],
      icon: Building2
    },
    {
      title: 'Pre-Built Business Units',
      category: 'Turnkey Commercial Units',
      desc: 'Modular hybrid units combining ground-floor showroom or light storage with upstairs administrative office space. Designed for technical service agencies, equipment distributors, and light assembly firms.',
      features: [
        'Dedicated loading bay with roller-shutter access',
        'Integrated office mezzanine with air conditioning and restrooms',
        'Immediate occupancy with pre-installed electrical and telecommunication connections',
        'Higher visa quota allocations proportional to leased unit area'
      ],
      icon: Layers
    },
    {
      title: 'Bonded Warehouses',
      category: 'Storage & Logistics',
      desc: 'High-ceiling industrial storage units ranging from 500 sqm upwards, situated immediately adjacent to Port of Fujairah. Built for bulk storage, cargo palletizing, packaging, and multimodal logistics.',
      features: [
        'Direct connection to Port Customs bonded transit corridors',
        'Heavy floor-loading capacity accommodating heavy machinery and high-bay racking',
        'Built-in fire protection systems approved by Fujairah Civil Defense',
        'Substantial visa allocations to accommodate warehouse operational workforce'
      ],
      icon: Warehouse
    },
    {
      title: 'Industrial Land Plots',
      category: 'Bespoke Industrial Development',
      desc: 'Open industrial land available on long-term renewable leases for custom factory construction, refinery support infrastructure, heavy manufacturing plants, or bulk storage yards.',
      features: [
        'Plots ranging from 2,500 sqm to tens of thousands of square meters',
        'Heavy utility infrastructure with high-voltage electrical substation connections',
        'Direct road and corridor links to Port of Fujairah maritime quayside and bunkering berths',
        'Long-term lease agreements (typically 15 to 25 years with renewal provisions)'
      ],
      icon: Factory
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Warehouse className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>INFRASTRUCTURE & PHYSICAL ASSETS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Office, Warehouse & Industrial Facilities
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Fujairah Free Zone provides scalable physical spaces from executive corporate offices to 500+ sqm bonded warehouses and heavy industrial land plots directly connected to maritime and highway arteries.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-7 sm:p-8 rounded-2xl bg-[#FCFAF8] border border-[#DECBB5] hover:border-[#B8864B] transition-all shadow-xs flex flex-col justify-between group space-y-6"
              >
                <div className="space-y-4">
                  
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-[#8C5E28] border border-[#DECBB5] font-heading">
                      {fac.category}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#0F172A] font-heading">
                      {fac.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-[#F1E8DC]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A] block font-heading">
                      Facility Inclusions:
                    </span>
                    <ul className="space-y-2">
                      {fac.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-[#334155]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(`Facility Assessment: ${fac.title}`)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#FAF5EC] border border-[#DECBB5] hover:border-[#B8864B] text-[#0F172A] hover:text-[#8C5E28] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <span>Check {fac.title} Availability</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Facility Selection & Budget Notice */}
        <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#DECBB5] space-y-3 text-xs sm:text-sm text-[#475569]">
          <h4 className="font-bold text-[#0F172A] font-heading text-sm flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#B8864B]" />
            Activity-Facility Mandatory Pairing Rules
          </h4>
          <p className="leading-relaxed text-[#64748B]">
            Under FFZA regulations, your licensed business activity dictates the minimum acceptable facility type. Trading and consultancy activities can operate from flexi-desks or executive offices, whereas warehousing, manufacturing, and industrial assembly strictly mandate physical warehouse units or dedicated industrial land. Facility lease expenses form a core component of your initial and annual setup budget.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenConsultation('Facility Matching Guidance')}
              className="text-[#8C5E28] hover:text-[#6D4518] font-bold inline-flex items-center gap-1.5 cursor-pointer text-xs"
            >
              <span>Verify Facility Requirements for Your Proposed Activity with Brightlink</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
