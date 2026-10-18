import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  Percent, 
  Coins, 
  Boxes, 
  Building, 
  Users, 
  Globe2,
  Sparkles,
  CheckCircle2,
  Network,
  Scale
} from 'lucide-react';

export const AbuDhabiBenefits = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Potential for 100% Foreign Ownership',
      badge: 'Full Equity',
      summary: 'Opportunity to retain complete foreign company ownership without requiring a local UAE national partner, subject to the selected jurisdiction and licensed activity.'
    },
    {
      icon: Network,
      title: 'Sector-Focused Ecosystems',
      badge: 'Industry Clusters',
      summary: 'Operate alongside global market leaders in purpose-built clusters dedicated to financial markets, green technology, industrial manufacturing, or digital media.'
    },
    {
      icon: Building,
      title: 'Tailored Operational Facilities',
      badge: 'Diverse Workspaces',
      summary: 'Access infrastructure matched to your scale—ranging from cost-effective flexi-desks and green-certified offices to high-bay industrial warehouses and heavy land plots.'
    },
    {
      icon: Globe2,
      title: 'Cross-Border Trade & Logistics',
      badge: 'Global Gateway',
      summary: 'Conduct global commercial operations with direct connectivity to Khalifa Port, international air freight corridors, and inter-emirate highway networks.'
    },
    {
      icon: Coins,
      title: 'Repatriation of Capital and Profits',
      badge: 'Capital Mobility',
      summary: 'Freedom to repatriate 100% of business earnings and invested capital to overseas accounts under applicable UAE financial regulations.'
    },
    {
      icon: Scale,
      title: 'Autonomous Regulatory Support',
      badge: 'Efficient Registry',
      summary: 'Streamlined company registration and licensing handled directly by specialized authority departments with dedicated corporate support services.'
    },
    {
      icon: Users,
      title: 'Possible UAE Visa Eligibility',
      badge: 'Residency Access',
      summary: 'Opportunity to sponsor 2-year renewable investor/partner visas, employee visas, and dependent family visas, depending on the licence, facility, and immigration rules.'
    },
    {
      icon: Percent,
      title: 'Potential Tax Advantages',
      badge: 'Federal Tax Rules',
      summary: 'Potential access to a 0% corporate tax rate on Qualifying Income for eligible Qualifying Free Zone Persons (QFZPs) that fulfill statutory economic substance requirements.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E6D7C3]/50">
      
      {/* Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8864B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#DECBB5]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>STRATEGIC ADVANTAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Benefits of Abu Dhabi Free Zone Formation
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Establishing a presence in the UAE capital combines institutional prestige and modern regulatory structures with sector-specific operational infrastructure.
          </p>
        </div>

        {/* 8 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-[#FAF7F0]/50 rounded-2xl p-6 border border-[#E6D7C3] shadow-xs hover:shadow-xl hover:border-[#DECBB5] hover:bg-white transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors duration-200 shadow-2xs">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-[#8C5E28] border border-[#DECBB5]/60 font-heading">
                      {benefit.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {benefit.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Subject to Jurisdiction Rules</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Responsible Corporate Tax Transparency Banner */}
        <div className="rounded-2xl bg-[#FAF7F0] border border-[#E6D7C3] p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E28] font-heading block">
              UAE CORPORATE TAX COMPLIANCE NOTICE
            </span>
            <p className="text-sm font-semibold text-[#0F172A]">
              Free zone status alone does not guarantee an automatic zero corporate tax rate.
            </p>
            <p className="text-xs text-[#64748B] max-w-3xl">
              Corporate tax treatment is governed by UAE Federal Decree-Law No. 47 of 2022. Companies must meet statutory criteria as a Qualifying Free Zone Person (QFZP)—including maintaining adequate substance, deriving qualifying income, and preparing audited accounts—to benefit from a 0% rate on qualifying income. Non-qualifying income is subject to the standard 9% tax rate.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation('Abu Dhabi Free Zone - Tax & Structuring Advisory')}
            className="px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer shrink-0 font-heading"
          >
            Inquire About Tax Eligibility
          </button>
        </div>

      </div>
    </section>
  );
};
