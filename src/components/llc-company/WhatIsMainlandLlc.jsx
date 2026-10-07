import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Scale, 
  Globe2, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

export const WhatIsMainlandLlc = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const coreAttributes = [
    {
      icon: Scale,
      title: 'Limited Liability Protection',
      description: 'The financial liability of shareholders is strictly limited to their individual capital contribution in the company, shielding personal assets and private wealth from commercial liabilities.'
    },
    {
      icon: Globe2,
      title: 'Direct Mainland & Federal Access',
      description: 'Unlike Free Zone companies that face geographic trading restrictions, a Mainland LLC can conduct commercial activities, tender bids, and retail sales directly across Dubai and all seven Emirates.'
    },
    {
      icon: Building2,
      title: 'Private & Government Contracts',
      description: 'Mainland LLCs are statutory commercial entities qualified to enter procurement rosters and contract directly with UAE government ministries, semi-government authorities, and multinational corporations.'
    },
    {
      icon: Users,
      title: 'Flexible Ownership Structure',
      description: 'An LLC can be formed by 1 to 50 shareholders (incorporating as a Single-Owner LLC or multi-partner LLC), accommodating both individual entrepreneurs and corporate holding entities.'
    },
    {
      icon: ShieldCheck,
      title: 'Foreign Ownership Opportunities',
      description: 'Under the amended UAE Commercial Companies Law, foreign investors can hold 100% legal ownership across thousands of commercial, trading, and industrial activities, subject to statutory regulations.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth & Expansion',
      description: 'Open domestic branches across any Emirate, expand commercial activities, lease commercial showrooms or warehouses, and sponsor employee visa quotas directly tied to your facility size.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Corporate Structure & Scope</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            What is a Mainland LLC in Dubai?
          </h2>
          <p className="mt-4 text-base text-[#475569] leading-relaxed">
            A <strong className="text-[#0F172A]">Limited Liability Company (LLC)</strong> is the foundational and most widely adopted corporate structure in the UAE onshore economy. Regulated by the Dubai Department of Economy and Tourism (DET) and the UAE Federal Commercial Companies Law, an LLC provides businesses with unrestricted onshore trading authority, institutional banking access, and personal liability insulation.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coreAttributes.map((attr, idx) => {
            const Icon = attr.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#DECBB5] shadow-xs flex flex-col justify-between hover:border-[#B8864B] transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-[#F5D7A1] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading mb-2">
                    {attr.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {attr.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#DECBB5]/70 flex items-center gap-1.5 text-xs font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Mainland Statutory Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Informative Regulatory Notice */}
        <div className="p-6 rounded-2xl bg-white border border-[#B8864B]/40 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] font-heading flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#B8864B]" />
              <span>Ownership & Regulatory Consideration</span>
            </h4>
            <p className="text-xs text-[#64748B] leading-relaxed max-w-3xl">
              Foreign ownership allowances and specific licensing requirements depend on your intended business activity and applicable federal circulars. While the majority of commercial activities permit 100% expatriate equity, strategic or regulated sectors may require specific national participation or ministerial pre-approvals.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('LLC Ownership & Activity Assessment')}
            className="shrink-0 px-4 py-2.5 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] hover:bg-[#B8864B] hover:text-white font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Verify Your Activity Equity</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhatIsMainlandLlc;
