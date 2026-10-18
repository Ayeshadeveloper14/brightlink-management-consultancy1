import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Layers, 
  Scale, 
  MapPin, 
  Anchor, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  TrendingUp,
  Cpu
} from 'lucide-react';

export const WhatIsRakFreeZone = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const corePillars = [
    {
      title: 'Consolidated Economic Powerhouse',
      description: 'Established in 2017 by the Government of Ras Al Khaimah, RAKEZ consolidated two major legacy investment bodies: RAK Free Trade Zone (RAK FTZ, est. 2000) and RAK Investment Authority (RAKIA, est. 2005). Today, it houses over 15,000 multinational and regional enterprises across specialized business, academic, media, and industrial parks.',
      icon: Layers
    },
    {
      title: 'Cost-Effective Commercial Scalability',
      description: 'Ras Al Khaimah offers among the most cost-efficient operational environments in the UAE. Businesses benefit from lower office and warehouse lease rates, economical residency visa fees, and competitive living costs for staff while retaining full connectivity to Dubai (approx. 45–60 minutes away).',
      icon: TrendingUp
    },
    {
      title: 'Industrial & Maritime Heavyweight',
      description: 'Home to Saqr Port—the largest bulk-handling port in the Middle East—RAKEZ serves as a premier industrial and logistics hub for heavy manufacturing, maritime fabrication, mineral processing, chemical packaging, and bulk goods transshipment.',
      icon: Anchor
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Building2 className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>JURISDICTION OVERVIEW & CONTEXT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Introduction to RAK Free Zone (RAKEZ)
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Ras Al Khaimah Economic Zone (RAKEZ) is one of the UAE’s largest and most established investment hubs, connecting foreign entrepreneurs and international corporations to regional and global markets through adaptable, cost-conscious licensing solutions.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {corePillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-7 rounded-2xl bg-[#FCFAF8] border border-[#E6D7C3] hover:border-[#B8864B] transition-all shadow-xs flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Free Zone vs Mainland Comparison */}
        <div className="rounded-2xl border border-[#DECBB5] bg-[#FAF8F5] p-6 sm:p-8 lg:p-10 space-y-8">
          
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading">
              Comparing RAKEZ Free Zone vs. UAE Mainland
            </h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Deciding between a RAK Free Zone entity and an onshore UAE Mainland (DED) company depends on your target clients, physical premises needs, and international trade scope.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Free Zone Box */}
            <div className="p-6 rounded-xl bg-white border border-[#DECBB5] shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#F1E8DC]">
                <h4 className="text-base font-bold text-[#8C5E28] font-heading flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#B8864B]" />
                  RAKEZ Free Zone Entity
                </h4>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#FAF5EC] text-[#8C5E28] border border-[#DECBB5]">
                  Free Zone Regulation
                </span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#334155]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>100% Foreign Ownership:</strong> Full equity holding without requiring a local UAE national partner.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>Customs Exemption:</strong> 0% customs duty on goods imported into the zone for re-export or manufacturing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>Versatile Facilities:</strong> Options from shared coworking desks to 10,000+ sqm industrial manufacturing factories.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>Domestic Mainland Access:</strong> Direct international & zone-to-zone trade; selling onshore to UAE mainland retail consumers requires a local distributor, agent, or branch permit.</span>
                </li>
              </ul>
            </div>

            {/* Mainland Box */}
            <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <h4 className="text-base font-bold text-[#0F172A] font-heading flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#64748B]" />
                  UAE Mainland Entity (DED)
                </h4>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-neutral-100 text-[#475569]">
                  Onshore Structure
                </span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#334155]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#64748B] shrink-0 mt-0.5" />
                  <span><strong>Unrestricted Domestic Trade:</strong> Can contract and deliver services directly to local mainland consumers anywhere in the UAE.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#64748B] shrink-0 mt-0.5" />
                  <span><strong>Government Tenders:</strong> Eligible to bid on federal, municipal, and state-owned commercial contracts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#64748B] shrink-0 mt-0.5" />
                  <span><strong>Physical Premises:</strong> Requires physical commercial office lease (Ejari) located in mainland territory.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#64748B] shrink-0 mt-0.5" />
                  <span><strong>Standard Tariffs:</strong> Standard 5% customs duties apply upon initial entry of goods into UAE territory.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Activity Matching Advice */}
          <div className="p-5 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-start gap-3.5 text-xs sm:text-sm text-[#6D4518]">
            <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold text-[#8C5E28]">
                Which Business Models Are Best Suited for RAKEZ?
              </p>
              <p className="text-[#6D4518] leading-relaxed">
                RAKEZ is particularly popular among international traders, e-commerce sellers, manufacturers, engineering contractors, digital consultants, logistics operators, and startups looking to keep overhead costs low while establishing a verified legal base in the UAE. Brightlink evaluates your commercial model to recommend the optimal balance of licence, facility, and visa allocation.
              </p>
            </div>
          </div>

          {/* Bottom Interactive CTA */}
          <div className="pt-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-[#DECBB5]">
            <p className="text-xs text-[#64748B] min-w-0">
              Uncertain whether a RAKEZ Free Zone licence or an Onshore Mainland structure matches your business model?
            </p>
            <button
              type="button"
              onClick={() => onOpenConsultation('RAKEZ vs Mainland Evaluation')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#8C5E28] hover:bg-[#6D4518] text-white text-xs font-bold whitespace-normal sm:whitespace-nowrap cursor-pointer transition-colors shadow-xs shrink-0 text-center"
            >
              Request Jurisdiction Assessment
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
