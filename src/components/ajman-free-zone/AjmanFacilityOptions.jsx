import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building, 
  Laptop, 
  Factory, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Layers
} from 'lucide-react';

export const AjmanFacilityOptions = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const facilities = [
    {
      icon: Laptop,
      title: 'Smart Desks & Co-Working Spaces',
      desc: 'Shared flexible workstations situated in modern AFZ business centres. Includes high-speed Wi-Fi, electricity, communal reception, and meeting room access.',
      bestFor: 'Startups, digital nomads, freelancers, e-commerce retailers, and international consultants seeking low overhead.',
      visaAllocation: 'Typically 1 to 2 residence visa quotas depending on package.',
      badge: 'Most Cost-Effective'
    },
    {
      icon: Building,
      title: 'Executive Offices & Private Suites',
      desc: 'Fully furnished or unfurnished private corporate offices with professional interiors, dedicated signage, telecom connectivity, and pantry facilities.',
      bestFor: 'Commercial trading enterprises, marketing agencies, law and accounting consultancies, and established SMEs.',
      visaAllocation: '3 to 5+ residence visa quotas based on office square footage (approx. 9 m² per visa).',
      badge: 'Corporate Standard'
    },
    {
      icon: Factory,
      title: 'Pre-Built Industrial Warehouses',
      desc: 'Modern light industrial and storage units ranging from 100 m² to 2,000+ m² featuring high ceilings, heavy-duty concrete flooring, loading bays, 3-phase electricity, and built-in administrative offices.',
      bestFor: 'Light manufacturing, assembly plants, packaging operations, FMCG storage, and bulk import/export distribution.',
      visaAllocation: 'Substantial visa quotas commensurate with operational facility size.',
      badge: 'Industrial & Logistics'
    },
    {
      icon: MapPin,
      title: 'Industrial Land Plots & Open Yards',
      desc: 'Zoned industrial plots with utility infrastructure, direct marine access, and heavy transport connectivity available on long-term renewable commercial leases.',
      bestFor: 'Heavy industry, maritime repair yards, metal fabrication plants, and customized manufacturing facilities.',
      visaAllocation: 'Extensive workforce quota determined by project master plan and municipal approvals.',
      badge: 'Custom Construction'
    }
  ];

  return (
    <section id="ajman-facilities" className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-xs">
            <Building className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>COMMERCIAL WORKSPACE INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Ajman Free Zone Workspace & Facility Options
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            From flexible hot desks for solopreneurs to large-scale maritime industrial plots, Ajman Free Zone provides diverse commercial real estate solutions tailored to your operational scale.
          </p>
        </div>

        {/* 4 Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {facilities.map((fac, index) => {
            const Icon = fac.icon;
            return (
              <motion.div
                key={fac.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-[#E6D7C3] hover:border-[#B8864B]/60 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C5E28] bg-[#FAF5EC] px-2 py-0.5 rounded-full border border-[#DECBB5]">
                      {fac.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {fac.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    {fac.desc}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#F1E8DC] text-xs text-[#0F172A]">
                    <div>
                      <strong className="text-[#8C5E28] block text-[11px] uppercase tracking-wider font-heading">Best Suited For:</strong>
                      <span className="text-slate-600">{fac.bestFor}</span>
                    </div>
                    <div className="pt-1">
                      <strong className="text-[#8C5E28] block text-[11px] uppercase tracking-wider font-heading">Visa Eligibility:</strong>
                      <span className="text-slate-600">{fac.visaAllocation}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F1E8DC]">
                  <button
                    onClick={() => onOpenConsultation(`Inquire for ${fac.title}`)}
                    className="w-full py-2.5 rounded-xl bg-[#FAF7F0] hover:bg-[#B8864B] text-[#8C5E28] hover:text-white border border-[#DECBB5] hover:border-transparent font-bold text-xs font-heading transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Check Availability</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Regulatory Facility Guidance */}
        <div className="rounded-2xl bg-white border border-[#DECBB5] p-6 text-xs sm:text-sm text-[#475569] leading-relaxed flex items-start gap-3 shadow-xs">
          <ShieldCheck className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <span>
            <strong className="text-[#0F172A]">Facility Compliance Note:</strong> Certain licensed activities (e.g. food packaging, chemical handling, general trading with physical stock) legally mandate dedicated warehouse space and cannot operate from virtual or smart-desk packages. Brightlink ensures your chosen facility satisfies municipal and civil defense clearance requirements.
          </span>
        </div>

      </div>
    </section>
  );
};
