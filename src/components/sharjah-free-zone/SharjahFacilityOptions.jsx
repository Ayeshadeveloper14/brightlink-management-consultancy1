import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building, 
  Laptop, 
  Warehouse, 
  Factory, 
  Users, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';

export const SharjahFacilityOptions = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const facilities = [
    {
      icon: Laptop,
      title: 'Smart Desks & Flexi-Workspaces',
      tag: 'Low Overhead',
      suitability: 'Startups, digital agencies, solo consultants, and e-commerce founders seeking a cost-effective presence without physical office overheads.',
      visaImpact: 'Typically supports 0 to 3 visa allocations depending on the package (widely available in SHAMS, SPC, and SAIF Zone).',
      features: ['Shared business lounge access', 'High-speed internet & meeting rooms', 'Official registered trade licence address', 'Flexible month-to-month or annual terms']
    },
    {
      icon: Building,
      title: 'Dedicated Executive Offices',
      tag: 'Corporate Substance',
      suitability: 'Established consultancies, regional trading offices, and enterprises requiring dedicated physical workspaces and professional meeting rooms.',
      visaImpact: 'Visa allocation is directly calculated based on physical square footage (generally 1 visa per ~80-100 sq. ft.).',
      features: ['Private furnished or unfurnished suites', 'Individual corporate signage & direct telephone', 'Dedicated parking and 24/7 security access', 'Enhanced commercial banking credibility']
    },
    {
      icon: Warehouse,
      title: 'Pre-Built Storage & Logistics Warehouses',
      tag: 'Trading & Light Industry',
      suitability: 'Freight forwarders, FMCG distributors, electronics importers, and light industrial assemblers requiring immediate operational facilities.',
      visaImpact: 'Substantial visa allocations accommodating warehouse supervisors, logistics coordinators, and operational staff.',
      features: ['Sizes from 125 sq. m. to 600+ sq. m.', 'Integrated ground-floor office space', 'Heavy power capacity, loading bays & wide doors', 'Located within bonded customs areas (SAIF & Hamriyah)']
    },
    {
      icon: Factory,
      title: 'Industrial Land Plots',
      tag: 'Heavy Manufacturing',
      suitability: 'Heavy industrial operators, steel fabricators, petrochemical plants, recycling facilities, and maritime construction companies.',
      visaImpact: 'High-density visa quotas tailored to large industrial workforces and engineering teams.',
      features: ['Plots from 2,500 sq. m. to multi-acre parcels', 'Direct deepwater berth access (Hamriyah Port)', 'High-voltage industrial electrical grids', 'Long-term lease agreements with build-to-suit rights']
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Building className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>PREMISES & INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Sharjah Free Zone Facility & Workspace Options
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Workspace solutions vary by free zone authority and commercial activity. The facility you select directly determines your physical presence and corporate residence visa eligibility.
          </p>
        </div>

        {/* 4 Facility Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-[#FAF7F0]/40 rounded-2xl p-6 border border-[#E6D7C3] hover:border-[#DECBB5] hover:bg-white hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors duration-200 shadow-2xs">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white text-[#8C5E28] border border-[#DECBB5]/60 font-heading">
                      {fac.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {fac.title}
                  </h3>
                  
                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {fac.suitability}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-neutral-200/60 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] font-heading block mb-1">
                      Key Facility Features
                    </span>
                    {fac.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-[#475569]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-200/60 text-[11px] text-[#8C5E28] font-semibold">
                  <div className="flex items-start gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span>{fac.visaImpact}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Facility Distribution Note */}
        <div className="rounded-2xl bg-[#FAF7F0] border border-[#E6D7C3] p-6 sm:p-8 text-xs sm:text-sm text-[#475569] flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-[#0F172A] font-heading block">
              Authority Facility Scope
            </strong>
            <p className="leading-relaxed">
              Not every free zone offers every type of facility. For instance, heavy industrial land and harbour berths are concentrated exclusively in Hamriyah Free Zone, while modern digital media desks and coworking pods are the focus of SHAMS and SPC Free Zone. Brightlink confirms physical availability before submitting applications.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
