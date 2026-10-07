import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  Globe2, 
  Landmark, 
  Layers, 
  FileCheck2, 
  Lock, 
  Sparkles, 
  CheckCircle2, 
  XCircle,
  Briefcase,
  AlertCircle
} from 'lucide-react';

export const AjmanOverview = () => {
  const shouldReduceMotion = useReducedMotion();

  const suitableUses = [
    {
      title: 'Holding Companies',
      desc: 'Centralize global investments, regional operating assets, and shareholding across multiple corporate entities.'
    },
    {
      title: 'Asset Ownership',
      desc: 'Isolate and safeguard international capital, physical assets, and private wealth within a distinct legal entity.'
    },
    {
      title: 'Intellectual Property Ownership',
      desc: 'Hold trademarks, brand copyrights, patents, and software licenses, licensing them to operating subsidiaries.'
    },
    {
      title: 'Investment Vehicles',
      desc: 'Deploy venture capital, private equity, securities, or syndicated finance through a structured corporate chassis.'
    },
    {
      title: 'International Business Structures',
      desc: 'Execute international commercial agreements, cross-border invoicing, and foreign consulting outside the UAE.'
    },
    {
      title: 'Cross-Border Trading Arrangements',
      desc: 'Facilitate trade between third-party jurisdictions without goods physically entering or clearing UAE mainland customs.'
    }
  ];

  const structuralBoundaries = [
    {
      title: 'No UAE Onshore Trading',
      desc: 'Cannot sell goods directly to local consumers or conduct domestic commercial services within the UAE mainland.',
      icon: XCircle,
      isAllowed: false
    },
    {
      title: 'No Visa Attached to License',
      desc: 'Offshore companies do not receive employment or residence visa quotas from immigration or labor authorities.',
      icon: XCircle,
      isAllowed: false
    },
    {
      title: 'No Conventional Physical Office Lease',
      desc: 'Does not require physical office premises or commercial Ejari; operates legally via its licensed Registered Agent.',
      icon: CheckCircle2,
      isAllowed: true
    },
    {
      title: 'Permitted Offshore Activity Framework',
      desc: 'All commercial operations, counterparties, and transactions must remain strictly within permitted statutory offshore parameters.',
      icon: ShieldCheck,
      isAllowed: true
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>CORPORATE STRUCTURING OVERVIEW</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            What Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Ajman Offshore?</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Ajman Offshore is a flexible, cost-effective corporate vehicle established under the statutory offshore regulations of the Ajman Free Zone Authority in the United Arab Emirates. It is engineered for entrepreneurs, family offices, and cross-border businesses seeking an efficient corporate wrapper for asset ownership, international operations, and holding activities.
          </p>
        </div>

        {/* 6 Suitable Uses Cards */}
        <div className="mb-14">
          <div className="text-xs font-bold text-[#8C5E28] uppercase tracking-wider mb-6 text-center font-heading">
            Primary Structural Applications of an Ajman Offshore Entity
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suitableUses.map((item, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-[#E6D7C3] shadow-xs hover:shadow-md hover:border-[#B8864B]/60 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#F5E8D4] border border-[#DECBB5] flex items-center justify-center text-[#8C5E28] mb-4 group-hover:scale-105 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-[#B8864B]" />
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] mb-2 font-heading group-hover:text-[#8C5E28] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F5F1EB] flex items-center gap-1.5 text-[11px] font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Statutorily Suitable</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statutory Limitations & Important Boundary Callout */}
        <div className="bg-white rounded-3xl border border-[#DECBB5] p-6 sm:p-8 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading">
              Important Limitations & Permitted Scope
            </h3>
            <p className="text-xs text-[#64748B]">
              Offshore vehicles operate under clear statutory parameters to separate non-operational holding structures from onshore domestic trading.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {structuralBoundaries.map((b, i) => {
              const Icon = b.icon;
              return (
                <div 
                  key={i} 
                  className={`p-4 rounded-2xl border ${b.isAllowed ? 'bg-emerald-50/60 border-emerald-100' : 'bg-rose-50/60 border-rose-100'} space-y-2`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${b.isAllowed ? 'text-emerald-600' : 'text-rose-500'} shrink-0`} />
                    <span className="text-xs font-bold text-[#0F172A]">{b.title}</span>
                  </div>
                  <p className="text-[11px] text-[#64748B] leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Conditional Rights Note on Property & Shares */}
          <div className="p-4 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
            <div className="text-xs text-[#475569] leading-relaxed space-y-1">
              <span className="font-bold text-[#0F172A] block">
                UAE Property & Domestic Share Ownership Notice
              </span>
              <p>
                Subject to applicable regulatory requirements and specific authority approvals, an Ajman Offshore company may hold UAE property in approved designated areas and own shares in UAE onshore entities. These rights are subject to applicable land department policies, specific transaction vetting, and relevant master developer guidelines, rather than being universal automatic rights.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AjmanOverview;
