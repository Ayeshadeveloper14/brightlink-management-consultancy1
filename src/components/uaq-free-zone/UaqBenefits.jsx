import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Percent, 
  Coins, 
  Layers, 
  ShoppingBag, 
  Briefcase, 
  ShoppingCart, 
  Building, 
  Users, 
  Globe2, 
  ShieldCheck, 
  ArrowRight,
  AlertCircle,
  FileCheck2
} from 'lucide-react';

export const UaqBenefits = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const benefits = [
    {
      title: '100% Foreign Equity Ownership',
      desc: 'Expatriates and international investors maintain complete, autonomous ownership of corporate shares without requiring an Emirati national shareholder or local service sponsor.',
      icon: Percent
    },
    {
      title: 'Capital & Profit Repatriation',
      desc: 'Foreign shareholders may freely repatriate 100% of invested capital, accrued corporate profits, and dividend disbursements to overseas accounts, subject to standard banking compliance.',
      icon: Coins
    },
    {
      title: 'Diverse Activity Scheduling',
      desc: 'Accommodates hundreds of permitted activities across commercial trading, advisory consultancy, technological engineering, industrial manufacturing, and media.',
      icon: Layers
    },
    {
      title: 'Commercial & Cross-Border Trade',
      desc: 'Enables companies to engage in international merchant trade, import/export shipments, transshipment logistics, and wholesale commodity distribution worldwide.',
      icon: ShoppingBag
    },
    {
      title: 'Professional Service & Advisory',
      desc: 'Structured licensing frameworks for management consultants, software architects, corporate advisors, marketing strategists, and specialized service professionals.',
      icon: Briefcase
    },
    {
      title: 'E-Commerce & Digital Commerce',
      desc: 'Dedicated activity structures designed for electronic stores, online marketplaces, web service portals, and cross-border digital fulfillment.',
      icon: ShoppingCart
    },
    {
      title: 'Modular Workspace & Facility Solutions',
      desc: 'Flexible facility allocations ranging from cost-conscious shared flexi-desks and dedicated coworking to private serviced office suites and industrial warehouses.',
      icon: Building
    },
    {
      title: 'Support for Startups & Small Enterprises',
      desc: 'Economical corporate tiers, sensible compliance demands, and accessible starter packages tailored specifically to lean budgets and early-stage entrepreneurs.',
      icon: Users
    },
    {
      title: 'International Operational Reach',
      desc: 'Trade effortlessly across GCC, Middle Eastern, Asian, and European corridors using an internationally recognized UAE corporate legal personality.',
      icon: Globe2
    },
    {
      title: 'Proactive Administrative Ecosystem',
      desc: 'Digital document submission, transparent government interaction, and responsive client service protocols designed to expedite licensing workflows.',
      icon: FileCheck2
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F0]/40 border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>COMMERCIAL ADVANTAGES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Key Benefits of UAQ Free Trade Zone
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Explore the core structural advantages that make UAQ FTZ a compelling consideration for cost-conscious entrepreneurs, international traders, and growing corporate ventures.
          </p>
        </div>

        {/* 10 Benefits Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="bg-white rounded-2xl border border-[#E6D7C3] p-6 shadow-2xs hover:shadow-sm hover:border-[#DECBB5] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] font-heading">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F1EAE0] flex items-center justify-between text-[11px] text-[#8C5E28] font-semibold">
                  <span>Subject to Current Rules</span>
                  <span className="text-[#B8864B]">✓</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compliance & Regulatory Clarification Notice */}
        <div className="p-6 rounded-2xl bg-white border border-[#DECBB5] shadow-xs flex flex-col md:flex-row items-start gap-4">
          <AlertCircle className="w-6 h-6 text-[#8C5E28] shrink-0 mt-0.5" />
          <div className="space-y-2 text-xs sm:text-sm text-[#475569] leading-relaxed">
            <h4 className="font-bold text-[#1E293B]">
              Balanced Regulatory & Fiscal Guidance
            </h4>
            <p>
              While UAQ FTZ offers exceptional operational flexibility, regulatory obligations apply to all UAE free zone entities. Company formation does not imply automatic exemption from UAE Corporate Tax or Value Added Tax (VAT); fiscal benefits depend on qualifying income criteria and statutory compliance. Similarly, visa issuance, financial audit mandates, and bank account onboarding are subject to independent government and financial institution reviews rather than blanket guarantees.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
