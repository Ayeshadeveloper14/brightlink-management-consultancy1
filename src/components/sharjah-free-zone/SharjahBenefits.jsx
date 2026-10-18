import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  Percent, 
  Coins, 
  Building, 
  Users, 
  Globe2, 
  Sparkles, 
  CheckCircle2, 
  Boxes,
  Factory
} from 'lucide-react';

export const SharjahBenefits = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const benefits = [
    {
      icon: ShieldCheck,
      title: 'Potential for 100% Foreign Ownership',
      badge: 'Full Equity',
      summary: 'Opportunity to retain complete foreign company ownership without requiring a local UAE national partner, subject to the chosen authority’s regulations.'
    },
    {
      icon: Factory,
      title: 'Integrated Industrial Ecosystems',
      badge: 'Manufacturing Hub',
      summary: 'Direct access to robust industrial supply chains, heavy machinery support, raw materials, and skilled labor in the UAE’s industrial capital.'
    },
    {
      icon: Building,
      title: 'Diverse Operational Facilities',
      badge: 'Scalable Spaces',
      summary: 'Select workspace that matches your operational footprint—from modern flexi-desks and private offices to pre-built warehouses and deepwater port land.'
    },
    {
      icon: Globe2,
      title: 'Regional & Global Trade Networks',
      badge: 'Dual Coastline',
      summary: 'Connect seamlessly with Arabian Gulf shipping lanes, the Indian Ocean via Khorfakkan Container Terminal, and major international air corridors.'
    },
    {
      icon: Coins,
      title: 'Repatriation of Capital and Profits',
      badge: 'Financial Flow',
      summary: 'Ability to repatriate 100% of invested business capital and corporate profits back to home country bank accounts subject to UAE banking laws.'
    },
    {
      icon: Boxes,
      title: 'Flexible Licensing Options',
      badge: 'Multi-Activity',
      summary: 'Wide selection of commercial, professional, industrial, and e-commerce licences, with select authorities allowing multi-activity bundling.'
    },
    {
      icon: Users,
      title: 'Possible Residence Visa Eligibility',
      badge: 'Visa Quotas',
      summary: 'Potential to sponsor 2-year renewable investor/partner visas, staff employment visas, and dependent family residency based on facility scale.'
    },
    {
      icon: Percent,
      title: 'Potential Tax Advantages',
      badge: 'UAE Tax Rules',
      summary: 'Opportunity to benefit from a 0% corporate tax rate on Qualifying Income for eligible Qualifying Free Zone Persons (QFZPs) meeting statutory criteria.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E6D7C3]/50">
      
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8864B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#DECBB5]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>COMMERCIAL INCENTIVES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Benefits of Setting Up a Company in Sharjah
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Sharjah offers an optimal balance of cost-efficiency, deep industrial capacity, and geographic connectivity for enterprises seeking a competitive base in the UAE.
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
                  <span>Subject to Authority Bylaws</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Responsible Corporate Tax Transparency Banner */}
        <div className="rounded-2xl bg-[#FAF7F0] border border-[#E6D7C3] p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E28] font-heading block">
              UAE CORPORATE TAX & COMPLIANCE DISCLOSURE
            </span>
            <p className="text-sm font-semibold text-[#0F172A]">
              Free zone registration does not provide an automatic or blanket exemption from UAE Corporate Tax.
            </p>
            <p className="text-xs text-[#64748B] max-w-3xl">
              Under Federal Decree-Law No. 47 of 2022, companies that satisfy the statutory conditions of a Qualifying Free Zone Person (QFZP)—such as maintaining economic substance, earning qualifying income, and preparing annual audited financial statements—can benefit from a 0% tax rate on qualifying income. Non-qualifying income is taxed at the standard 9% rate.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation('Sharjah Free Zone - Tax & Structuring Advisory')}
            className="px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer shrink-0 font-heading"
          >
            Inquire About Tax Eligibility
          </button>
        </div>

      </div>
    </section>
  );
};
