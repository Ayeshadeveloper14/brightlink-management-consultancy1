import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Coins, 
  Building2, 
  Receipt, 
  FileCheck2, 
  ShieldCheck, 
  Users, 
  Warehouse, 
  ArrowRight,
  AlertCircle,
  HelpCircle,
  FileSpreadsheet
} from 'lucide-react';

export const FujairahCostOverview = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const costFactors = [
    {
      title: 'Company Registration & Incorporation Fee',
      category: 'One-Time Authority Fee',
      desc: 'One-off government filing and incorporation fee payable to Fujairah Free Zone Authority for recording the new FZE, FZC, or Branch in the official commercial registry.',
      icon: Receipt
    },
    {
      title: 'Annual Trade Licence Fee',
      category: 'Annual Renewal Fee',
      desc: 'Annual licensing charge determined by the primary licence class (Commercial Trading, General Trading, Warehousing, Industrial Manufacturing, or Professional Consultancy).',
      icon: FileCheck2
    },
    {
      title: 'Selected Activities & Category Scope',
      category: 'Activity Scaling',
      desc: 'Base licences include a standard number of permitted business activities under one group. Adding extra unrelated activities or requesting a General Trading permit incurs supplementary licensing fees.',
      icon: Coins
    },
    {
      title: 'Physical Workspace or Facility Lease',
      category: 'Property & Facility Lease',
      desc: 'Annual rental cost for the chosen workspace: Flexi-desk, dedicated trading office, pre-built warehouse, or long-term leasehold industrial land plot.',
      icon: Warehouse
    },
    {
      title: 'Establishment Card & Immigration Portal',
      category: 'Immigration Infrastructure',
      desc: 'Initial issuance and annual renewal of the company Establishment Card with Fujairah GDRFA / ICP, enabling the company to apply for foreign worker residency permits.',
      icon: Users
    },
    {
      title: 'Residence Visa Application & Medical Typing',
      category: 'Per-Applicant Fee',
      desc: 'Government entry permit, VIP medical fitness test, Emirates ID biometric typing, status change, and passport residency visa stamping for shareholders and employees.',
      icon: Users
    },
    {
      title: 'External Ministerial & Security Approvals',
      category: 'Conditional Clearances',
      desc: 'Specialized industrial or maritime activities requiring external clearance from Fujairah Municipality, Civil Defense, Port Authority, or federal ministries (MOIAT/MOHAP).',
      icon: ShieldCheck
    },
    {
      title: 'Operational Insurance & Ongoing Compliance',
      category: 'Statutory Safeguards',
      desc: 'Mandatory third-party liability insurance, warehouse fire safety policies, annual corporate tax filing, VAT registration where eligible, and statutory book auditing.',
      icon: Building2
    }
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Coins className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>TRANSPARENT FINANCIAL STRUCTURING</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Fujairah Free Zone Business Setup Cost
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Company formation in Fujairah Free Zone is recognized for cost effectiveness, but total capital expenditure varies based on legal structure, facility requirements, activity classifications, and visa quotas. Review the primary cost factors below.
          </p>
        </div>

        {/* 8-Card Cost Factor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {costFactors.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-white border border-[#DECBB5] hover:border-[#B8864B] transition-all shadow-xs flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF8F5] text-[#8C5E28] border border-[#E6D7C3] uppercase">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#0F172A] font-heading leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing Policy & Tailored Quotation Box */}
        <div className="rounded-2xl border border-[#DECBB5] bg-white p-6 sm:p-8 lg:p-10 shadow-sm space-y-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#F1E8DC]">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
                Transparent Advisory Guarantee
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading">
                Request an Itemized Fujairah Setup Quotation
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Brightlink does not publish speculative package rates or hidden starting fees. We calculate your exact expenditure based on current FFZA tariff schedules, required warehouse or office square footage, trade name clearance, and visa requirements.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenConsultation('Fujairah Itemized Cost Quotation')}
              className="px-6 py-3.5 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs sm:text-sm font-bold whitespace-nowrap cursor-pointer transition-colors shadow-md hover:shadow-lg flex items-center gap-2 shrink-0"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Get Your Custom Cost Breakdown</span>
            </button>
          </div>

          {/* Pricing Inclusions Checkpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-[#334155]">
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>Direct FFZA official receipts with zero undisclosed brokerage markups</span>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>Includes pre-audit of shareholder documents to prevent application rejections</span>
            </div>
            <div className="flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
              <span>Clear explanation of recurring annual renewal fees from year two onwards</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-5 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] text-xs text-[#6D4518] flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            All government tariffs, licence charges, lease values, and immigration fees are determined directly by Fujairah Free Zone Authority and federal immigration departments. Official fees are subject to periodic regulatory updates.
          </p>
        </div>

      </div>
    </section>
  );
};
