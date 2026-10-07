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
  UserCheck
} from 'lucide-react';

export const JafzaOverview = () => {
  const shouldReduceMotion = useReducedMotion();

  const primaryPurposes = [
    {
      title: 'Asset Holding & Protection',
      desc: 'Secure high-value global assets, intellectual capital, and private investment portfolios under an internationally recognized Dubai entity.'
    },
    {
      title: 'Investment Ownership',
      desc: 'Hold equities, venture stakes, mutual funds, and international securities with full corporate autonomy and flexibility.'
    },
    {
      title: 'Shareholding Structures',
      desc: 'Act as a structured shareholder in UAE onshore companies (Mainland LLCs or Free Zone firms) and foreign operating entities.'
    },
    {
      title: 'International Business Operations',
      desc: 'Facilitate cross-border merchant transactions, commercial invoicing, and international consulting contracts outside the UAE.'
    },
    {
      title: 'Intellectual Property Ownership',
      desc: 'Centralize software rights, patents, brand trademarks, and international royalty-bearing contracts within a secure corporate wrapper.'
    },
    {
      title: 'Corporate Holding Companies',
      desc: 'Consolidate multiple worldwide subsidiaries into a singular, prestigious Dubai holding company for streamlined governance.'
    }
  ];

  const structuralRules = [
    {
      title: 'No UAE Mainland Trading',
      detail: 'Cannot conduct direct retail commerce or local services within the UAE domestic mainland market.',
      type: 'rule',
      icon: XCircle,
      iconColor: 'text-rose-500',
      bgColor: 'bg-rose-50/60 border-rose-100'
    },
    {
      title: 'No Visa Sponsorship',
      detail: 'Non-operational structure that does not grant or issue UAE residence or employment visas to staff.',
      type: 'rule',
      icon: XCircle,
      iconColor: 'text-rose-500',
      bgColor: 'bg-rose-50/60 border-rose-100'
    },
    {
      title: 'Zero Physical Office Mandate',
      detail: 'No physical commercial office lease or Ejari required; operates legally via Registered Agent address.',
      type: 'benefit',
      icon: CheckCircle2,
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50/60 border-emerald-100'
    },
    {
      title: 'Mandatory Registered Agent',
      detail: 'Incorporation and annual filings must be conducted through an authorized UAE Registered Agent.',
      type: 'statute',
      icon: ShieldCheck,
      iconColor: 'text-[#B8864B]',
      bgColor: 'bg-[#FAF7F0] border-[#DECBB5]'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>DUBAI OFFSHORE REGISTRY FRAMEWORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            What Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">JAFZA Offshore?</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Established under the Jebel Ali Free Zone Authority Offshore Companies Regulations 2003, JAFZA Offshore is the only offshore corporate entity officially based directly within the Emirate of Dubai. It provides global investors with a prestigious, highly reputable corporate wrapper designed specifically for international operations and asset management.
          </p>
        </div>

        {/* Primary Operational Purposes Grid */}
        <div className="mb-14">
          <div className="text-xs font-bold text-[#8C5E28] uppercase tracking-wider mb-6 text-center font-heading">
            Common Strategic Uses of a JAFZA Offshore Structure
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryPurposes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-[#E6D7C3] shadow-xs hover:shadow-md hover:border-[#B8864B]/60 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#F5E8D4] border border-[#DECBB5] flex items-center justify-center text-[#8C5E28] shrink-0 group-hover:scale-105 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-[#B8864B]" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-sm sm:text-base font-bold text-[#0F172A] font-heading group-hover:text-[#8C5E28] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Distinct Operational Rules & Parameters */}
        <div className="bg-white rounded-3xl border border-[#DECBB5] p-6 sm:p-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading">
              Core Operational Parameters at a Glance
            </h3>
            <p className="text-xs text-[#64748B]">
              Clear statutory boundaries define the non-operational nature of offshore entities in the UAE domestic market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {structuralRules.map((rule, i) => {
              const Icon = rule.icon;
              return (
                <div 
                  key={i} 
                  className={`p-4 rounded-2xl border ${rule.bgColor} space-y-2`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${rule.iconColor} shrink-0`} />
                    <span className="text-xs font-bold text-[#0F172A]">{rule.title}</span>
                  </div>
                  <p className="text-[11px] text-[#64748B] leading-relaxed">
                    {rule.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default JafzaOverview;
