import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Percent, 
  Globe2, 
  Building2, 
  Warehouse, 
  Factory, 
  ShoppingCart, 
  Users, 
  TrendingUp, 
  FileCheck2, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const RakFreeZoneBenefits = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const benefits = [
    {
      title: '100% Foreign Equity Ownership',
      desc: 'International investors and expatriate entrepreneurs retain full 100% ownership of their corporate capital and business assets without requiring a local UAE national partner.',
      icon: Percent
    },
    {
      title: 'Cost-Competitive Setup & Leases',
      desc: 'Economical administrative charges, transparent licence fees, and affordable facility lease rates that keep early-stage operational overhead significantly lower than other emirates.',
      icon: TrendingUp
    },
    {
      title: 'Diverse Activity Licensing',
      desc: 'Comprehensive licensing frameworks supporting commercial trading, professional advisory, digital e-commerce, light to heavy manufacturing, media, and education.',
      icon: FileCheck2
    },
    {
      title: 'E-Commerce & Digital Commerce',
      desc: 'Dedicated e-commerce activity categories allowing online retail, dropshipping, cross-border fulfillment, and digital services with flexible workspace arrangements.',
      icon: ShoppingCart
    },
    {
      title: 'Heavy & Light Industrial Facilities',
      desc: 'Customized industrial land, high-power pre-built factories, and industrial plots connected to major transit highways and Saqr Port for manufacturing enterprises.',
      icon: Factory
    },
    {
      title: 'Scalable Workspace Solutions',
      desc: 'Tiered options from budget-friendly coworking desks and shared executive offices to private commercial suites and 1,000+ sqm bonded logistics warehouses.',
      icon: Warehouse
    },
    {
      title: 'One-Stop Business Support Center',
      desc: 'Integrated government client service centers providing fast-track visa issuance, licensing approvals, Emirates ID typing, and dedicated customer relationship managers.',
      icon: Building2
    },
    {
      title: 'Strategic Regional & Global Access',
      desc: 'Direct access to northern UAE road arteries, Ras Al Khaimah International Airport, and Saqr Port, facilitating rapid overland distribution to GCC and global maritime lanes.',
      icon: Globe2
    },
    {
      title: 'Smooth Scalability for Growing SMEs',
      desc: 'Easily upgrade your legal structure, expand warehouse footprint, add shareholder partners, or increase employee visa quotas as your business revenue expands.',
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>ADVANTAGES & STRATEGIC VALUE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Why Choose RAK Free Zone for Your UAE Business?
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            RAKEZ blends affordability with international-grade corporate infrastructure, making it a natural choice for startups, global trading houses, digital businesses, and heavy industrial operations.
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

        {/* Reassurance Disclaimer */}
        <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#DECBB5] space-y-3 text-xs sm:text-sm text-[#475569]">
          <h4 className="font-bold text-[#0F172A] font-heading text-sm flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
            Regulatory Compliance Notice
          </h4>
          <p className="leading-relaxed text-[#64748B]">
            All business formation benefits, tax treatments, visa allocations, and licensing approvals remain subject to applicable UAE federal legislation, RAKEZ authority regulations, and official ministerial requirements. Specific corporate tax relief applies strictly where the company fulfills the statutory requirements of a Qualifying Free Zone Person (QFZP). Brightlink provides honest, verified guidance to help you make an informed decision.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onOpenConsultation('RAKEZ Benefits Guidance')}
              className="text-[#8C5E28] hover:text-[#6D4518] font-bold inline-flex items-center gap-1.5 cursor-pointer text-xs"
            >
              <span>Speak with a Brightlink Specialist on RAK Free Zone Suitability</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
