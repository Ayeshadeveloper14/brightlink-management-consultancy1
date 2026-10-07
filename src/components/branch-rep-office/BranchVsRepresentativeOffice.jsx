import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Briefcase,
  Share2,
  TrendingUp,
  XCircle,
  HelpCircle
} from 'lucide-react';

export const BranchVsRepresentativeOffice = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const handleSelectStructure = (structureName) => {
    if (onOpenConsultation) {
      onOpenConsultation(`Structure Evaluation: ${structureName}`);
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#E6D7C3]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Structural Distinction</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Branch Office vs. Representative Office
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            While both structures operate as extensions of an established parent company, their statutory scope of activity, commercial capabilities, and revenue generation authorizations differ significantly.
          </p>
        </div>

        {/* Two Matching Side-by-Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Card 1: Branch Office */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="rounded-3xl p-7 sm:p-9 bg-white border-2 border-[#B8864B] shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36]" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] text-[#8C5E28] flex items-center justify-center shadow-xs">
                  <Building2 className="w-6 h-6 stroke-[1.8]" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF5EC] text-[#8C5E28] border border-[#DECBB5]/70">
                  Full Commercial Capacity
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#0F172A] font-heading mb-2">
                Branch Office
              </h3>
              
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                A <strong className="text-[#0F172A]">Branch Office</strong> is a direct legal extension of an existing parent company that operates under the exact corporate name and constitution of the parent entity. It is fully empowered to execute commercial contracts, render services, and generate revenue within the scope of its licensed activities.
              </p>

              {/* Core Features List */}
              <div className="space-y-3.5 text-xs text-[#334155] mb-6">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block font-heading">Direct Parent Company Connection</strong>
                    <span>Operates as the same legal entity as the parent; no separate local share capital is required.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block font-heading">Onshore Commercial Operations</strong>
                    <span>Authorized to invoice local clients, deliver contracted services, engage in trade, and conduct business in Dubai.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block font-heading">Permitted Commercial Activities</strong>
                    <span>Activities must mirror or remain within the licensed scope of the established parent company.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block font-heading">Direct Headquarters Governance</strong>
                    <span>100% managed by the parent board of directors with an appointed general manager in Dubai.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block font-heading">Applicable Licensing Requirements</strong>
                    <span>Licensed via DET and registered with the UAE Ministry of Economy (MOE) where applicable.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="pt-6 border-t border-[#F5F1EB]">
              <button
                type="button"
                onClick={() => handleSelectStructure('Mainland Branch Office')}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <span>Establish a Branch Office</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Representative Office */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="rounded-3xl p-7 sm:p-9 bg-white border border-[#DECBB5] shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#DECBB5]" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] text-[#8C5E28] flex items-center justify-center shadow-xs">
                  <Search className="w-6 h-6 stroke-[1.8]" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF7F0] text-[#8C5E28] border border-[#DECBB5]/70">
                  Liaison & Marketing Only
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#0F172A] font-heading mb-2">
                Representative Office
              </h3>
              
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6 font-normal">
                A <strong className="text-[#0F172A]">Representative Office</strong> is structured to serve as an official marketing, promotional, and liaison outpost in the UAE for an overseas parent enterprise. It explores local market dynamics and nurtures client relationships without conducting direct commercial transactions.
              </p>

              {/* Core Features List */}
              <div className="space-y-3.5 text-xs text-[#334155] mb-6">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8C5E28] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block font-heading">Market Research & Feasibility</strong>
                    <span>Gather intelligence, assess regional opportunities, and conduct industry research for the headquarters.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8C5E28] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block font-heading">Brand Presence & Promotion</strong>
                    <span>Market parent company capabilities, display corporate credentials, and foster brand prestige across the UAE.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8C5E28] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block font-heading">Relationship & Partner Building</strong>
                    <span>Interface directly with regional business partners, distributors, suppliers, and prospective corporate clients.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-900 block font-heading">Strict Non-Revenue Restriction</strong>
                    <span>Strictly prohibited from invoicing clients, earning local revenue, or executing direct sales in the UAE.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8C5E28] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F172A] block font-heading">Parent-Funded Operations</strong>
                    <span>All operational expenses and office outlays are fully remitted and funded directly by the overseas parent company.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="pt-6 border-t border-[#F5F1EB]">
              <button
                type="button"
                onClick={() => handleSelectStructure('Mainland Representative Office')}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-[#0F172A] bg-[#FAF5EC] border border-[#DECBB5] hover:bg-[#B8864B] hover:text-white transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Establish a Representative Office</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>

        {/* Subtle Comparative Banner / Selector CTA */}
        <div className="p-6 rounded-2xl bg-[#FAF7F0] border border-[#DECBB5] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#0F172A] font-heading flex items-center justify-center sm:justify-start gap-2">
              <HelpCircle className="w-4 h-4 text-[#B8864B]" />
              <span>Which Structure Is Right for You?</span>
            </h4>
            <p className="text-xs text-[#64748B]">
              If you plan to bill local clients and execute deliverables onshore, a <strong>Branch Office</strong> is mandatory. If you only intend to assess market feasibility and coordinate promotional liaison, a <strong>Representative Office</strong> is the compliant route.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Structure Suitability Assessment')}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Compare Your Objectives</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default BranchVsRepresentativeOffice;
