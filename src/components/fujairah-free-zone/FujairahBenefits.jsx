import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Percent, 
  Globe2, 
  Anchor, 
  Warehouse, 
  Factory, 
  Users, 
  Coins, 
  ShieldCheck, 
  Layers, 
  FileCheck2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const FujairahBenefits = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const benefits = [
    {
      title: '100% Foreign Equity Ownership',
      desc: 'Full foreign equity ownership for international corporate and individual investors without requiring a local UAE national shareholder.',
      icon: Percent
    },
    {
      title: 'Strait of Hormuz Bypass',
      desc: 'Direct maritime access on the Gulf of Oman and Indian Ocean, avoiding maritime insurance surcharges and navigation through the Strait of Hormuz.',
      icon: Anchor
    },
    {
      title: 'Cost-Competitive Setup & Leases',
      desc: 'Significantly lower land lease, warehouse rental, utility rates, and administrative fees compared to western UAE metropolitan centres.',
      icon: Coins
    },
    {
      title: 'Custom Industrial & Manufacturing Land',
      desc: 'Extensive plots of undeveloped and pre-serviced industrial land available for bespoke manufacturing factories, storage yards, and refinery support.',
      icon: Factory
    },
    {
      title: 'Bonded Warehousing Infrastructure',
      desc: 'Immediate access to bonded warehouses adjacent to Port of Fujairah with integrated customs clearance and multi-modal freight transport.',
      icon: Warehouse
    },
    {
      title: 'Zero Customs Duty on Re-Exports',
      desc: '0% customs duty on goods imported into the free zone for manufacturing, packaging, assembly, bulk storage, or international re-export.',
      icon: Globe2
    },
    {
      title: 'Investor & Employee Residence Visas',
      desc: 'Eligibility to sponsor UAE residence visas for company shareholders, directors, managers, and operational workforce based on facility scale.',
      icon: Users
    },
    {
      title: 'Potential 0% Corporate Tax for QFZPs',
      desc: 'Potential 0% UAE Corporate Tax rate on qualifying income for Qualifying Free Zone Persons (QFZP) that meet statutory economic substance criteria.',
      icon: ShieldCheck
    },
    {
      title: 'Full Capital & Profit Repatriation',
      desc: '100% freedom to repatriate both invested capital and earned profits internationally without currency exchange restrictions.',
      icon: FileCheck2
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>VALUE PROPOSITION & ADVANTAGES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Key Benefits of Fujairah Free Zone Formation
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Fujairah Free Zone combines cost efficiency, maritime logistics, and flexible licensing to support global commercial operations, trading ventures, and industrial manufacturers.
          </p>
        </div>

        {/* 9-Card Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-[#FCFAF8] border border-[#E6D7C3] hover:border-[#B8864B] transition-all shadow-xs flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Qualified Guidance Disclaimer Box */}
        <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#DECBB5] space-y-3 text-xs sm:text-sm text-[#475569]">
          <h4 className="font-bold text-[#0F172A] font-heading text-sm">
            Important Regulatory Notice Regarding Incentives & Entitlements
          </h4>
          <p className="leading-relaxed text-[#64748B]">
            All business formation benefits, tax treatments, visa quotas, and licensing permissions remain subject to current UAE federal legislation, Fujairah Free Zone Authority executive regulations, and official ministerial approvals. Specific corporate tax relief applies exclusively where the entity satisfies the criteria for a Qualifying Free Zone Person (QFZP) under Federal Decree-Law No. 47 of 2022. No business outcomes, bank account approvals, or visa issuances are guaranteed.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenConsultation('Fujairah Benefits Assessment')}
              className="text-[#8C5E28] hover:text-[#6D4518] font-bold inline-flex items-center gap-1.5 cursor-pointer text-xs"
            >
              <span>Consult with Brightlink on Fujairah Tax & Licensing Eligibility</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
