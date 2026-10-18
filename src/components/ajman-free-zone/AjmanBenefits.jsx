import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  Coins, 
  Building2, 
  Anchor, 
  Zap, 
  Users, 
  Percent, 
  Globe2,
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

export const AjmanBenefits = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const benefits = [
    {
      icon: ShieldCheck,
      title: '100% Foreign Equity Ownership',
      desc: 'Retain complete capital ownership and managerial autonomy without the requirement of a local Emirati shareholder or national sponsor.'
    },
    {
      icon: Coins,
      title: 'Low Overhead & Scalable Packages',
      desc: 'Benefit from some of the most competitive incorporation and annual trade licence renewal tariffs in the UAE, lowering your operational hurdle.'
    },
    {
      icon: Anchor,
      title: 'Direct Port & Logistics Adjacency',
      desc: 'Immediate proximity to Ajman Port container terminal provides direct maritime import, export, and regional transit customs efficiency.'
    },
    {
      icon: Building2,
      title: 'Comprehensive Facility Options',
      desc: 'Access a spectrum of operational spaces from flexi Smart Desks and business centre offices to pre-built light industrial warehouses and open land plots.'
    },
    {
      icon: Zap,
      title: 'Rapid Digital Incorporation',
      desc: 'Modernized authority digital portal enables seamless online application processing, fast-track pre-approvals, and trade licence generation in 24 to 48 hours.'
    },
    {
      icon: Users,
      title: 'Investor & Employee Residence Visas',
      desc: 'Eligible companies can obtain UAE establishment files and sponsor 2-year renewable residence visas for shareholders, executives, staff, and family members.'
    },
    {
      icon: Percent,
      title: 'Tax & Customs Advantages',
      desc: '0% personal income tax and 0% customs duties on goods imported into the free zone or re-exported globally, with potential 0% Corporate Tax under QFZP criteria.'
    },
    {
      icon: Globe2,
      title: 'Full Capital & Profit Repatriation',
      desc: 'Unrestricted repatriation of 100% of your company’s profits, capital, and foreign exchange revenues with zero currency exchange restrictions.'
    }
  ];

  return (
    <section id="ajman-benefits" className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>COMMERCIAL & STRATEGIC ADVANTAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Key Benefits of Setting Up in Ajman Free Zone
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            From sole freelancers to international maritime traders, Ajman Free Zone delivers practical incentives designed to minimize startup barriers and support commercial growth.
          </p>
        </div>

        {/* 8 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((b, index) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="bg-white rounded-2xl p-6 border border-[#E6D7C3] hover:border-[#B8864B]/60 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {b.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#F1E8DC] text-[11px] font-semibold text-[#8C5E28] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Verified Advantage</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Regulatory Qualification Note */}
        <div className="rounded-2xl bg-white border border-[#DECBB5] p-6 text-xs sm:text-sm text-[#475569] leading-relaxed flex items-start gap-3 shadow-xs">
          <ShieldCheck className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <span>
            <strong className="text-[#0F172A]">Important Compliance Disclosure:</strong> Exact entitlements, visa quotas, facility options, and tax treatment depend strictly upon the applicant's chosen licence category, business activity, leased workspace square footage, and compliance with UAE Federal Corporate Tax regulations. Formation does not constitute a blanket exemption from statutory laws or guarantee banking approvals.
          </span>
        </div>

      </div>
    </section>
  );
};
