import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building, 
  Globe2, 
  Store, 
  Briefcase, 
  CheckCircle2, 
  AlertCircle, 
  Scale, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const UaqMainlandTrading = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const tradingScenarios = [
    {
      title: '1. Transactions Within Free Zones & Global Trade',
      badge: 'Unrestricted Authorization',
      desc: 'UAQ FTZ companies can trade freely with other entities located within UAQ FTZ, other UAE free zones, and international commercial entities worldwide with 0% customs duties.',
      icon: Globe2
    },
    {
      title: '2. Selling Physical Goods to Mainland UAE',
      badge: 'Regulated Customs Procedure',
      desc: 'To sell physical merchandise directly to consumers or retailers on the UAE mainland, goods must pass through UAE customs clearance with standard 5% customs duties paid, distributed via a licensed UAE mainland distributor, commercial agent, or mainland branch entity.',
      icon: Store
    },
    {
      title: '3. Delivering Professional & B2B Services',
      badge: 'Corporate B2B Services',
      desc: 'Consultancy and service licence holders can contract directly with UAE mainland corporate clients to deliver remote advice, digital software, and business-to-business consulting services.',
      icon: Briefcase
    },
    {
      title: '4. Establishing a Mainland Branch Office',
      badge: 'Direct Mainland Presence',
      desc: 'If direct storefront retail sales or localized physical operations across the UAE mainland become necessary, a UAQ FTZ entity can establish a licensed Branch of a Free Zone Company with the relevant Department of Economy and Tourism (DET).',
      icon: Building
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F0]/40 border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Scale className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>TERRITORIAL JURISDICTION & SCOPE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Can a UAQ Free Zone Company Trade on the UAE Mainland?
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Understanding the legal boundary between free zone jurisdictions and the UAE mainland is critical to avoiding regulatory non-compliance, customs penalties, or commercial disputes.
          </p>
        </div>

        {/* 4 Trading Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tradingScenarios.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-[#E6D7C3] p-7 shadow-2xs hover:shadow-sm hover:border-[#DECBB5] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8864B] bg-[#FAF5EC] px-2.5 py-0.5 rounded border border-[#DECBB5]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F1EAE0] flex items-center justify-between text-xs text-[#8C5E28] font-semibold">
                  <span>Structured Commercial Route</span>
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Regulatory Summary Box */}
        <div className="p-6 rounded-2xl bg-white border border-[#DECBB5] shadow-xs flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-[#8C5E28] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#475569] leading-relaxed space-y-1">
            <h4 className="font-bold text-[#1E293B]">
              Regulatory Boundary Summary
            </h4>
            <p>
              A UAQ FTZ licence does not grant unrestricted rights to open brick-and-mortar storefronts, hire field sales teams on mainland city streets, or distribute untaxed physical stock directly into the mainland without customs clearance. Brightlink advises on the precise commercial structuring required—whether via a local mainland distributor agreement, an e-commerce courier partnership, or dual-licensing.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
