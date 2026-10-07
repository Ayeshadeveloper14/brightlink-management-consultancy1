import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Calculator, 
  Clock, 
  ShieldCheck, 
  Receipt, 
  Building2, 
  FileCheck2, 
  CreditCard, 
  Sparkles,
  Info,
  ArrowRight
} from 'lucide-react';

export const AjmanCostTimeline = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const costFactors = [
    {
      icon: Receipt,
      title: 'Authority Fees',
      desc: 'Government charges assessed by the Ajman Free Zone Authority, covering corporate name reservation, formal registry incorporation, and annual government renewal dues.'
    },
    {
      icon: Building2,
      title: 'Registered Agent Fees',
      desc: 'Mandatory professional fees for statutory registered agent representation, provision of official registered office address, and annual statutory compliance maintenance.'
    },
    {
      icon: FileCheck2,
      title: 'Professional Services',
      desc: 'Bespoke corporate structuring, custom MOA/AOA drafting, board resolution preparation, and legalization or certified translation coordination where applicable.'
    },
    {
      icon: CreditCard,
      title: 'Banking Support',
      desc: 'Preparation of bank-ready corporate dossiers, compliance business narratives, source-of-wealth organization, and banker introductions.'
    }
  ];

  const timingVariables = [
    'Document readiness and prompt submission by shareholders',
    'Legalization and embassy attestation requirements for foreign corporate bodies',
    'Internal compliance, PEP, and sanctions database screening',
    'Complexity of the proposed corporate ownership hierarchy (individual vs. corporate tiers)',
    'Depth of regulatory compliance review and source of funds verification',
    'Registered agent processing and official registry workload'
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Calculator className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>TRANSPARENT FINANCIAL & TIMELINE OVERVIEW</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Setup Cost Factors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Indicative Timelines</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Every offshore holding structure has distinct requirements. Discover the transparent components that influence total investment and turnaround times.
          </p>
        </div>

        {/* 2-Column Grid: Cost Factors on Left, Timeline on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: 4 Cost Drivers */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-[#0F172A] font-heading mb-2">
              Primary Elements Influencing Setup Investment
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {costFactors.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="p-5 rounded-2xl bg-white border border-[#E6D7C3] shadow-xs space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#8C5E28]">
                      <Icon className="w-4 h-4 text-[#B8864B]" />
                    </div>
                    <h4 className="text-sm font-bold text-[#0F172A] font-heading">{f.title}</h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Timeline Variables & Indicative Frame */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#DECBB5] shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#8C5E28]">
                <Clock className="w-5 h-5 text-[#B8864B]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#0F172A] font-heading">Indicative Turnaround Overview</h4>
                <span className="text-xs text-[#8C5E28] font-semibold">Standard processing: 3 – 5 Working Days*</span>
              </div>
            </div>

            <p className="text-xs text-[#64748B] leading-relaxed">
              *While simple individual setups generally finalize within 3 to 5 working days following document verification, actual incorporation timing depends on several dynamic factors:
            </p>

            <div className="space-y-2">
              {timingVariables.map((v, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B8864B] mt-1.5 shrink-0" />
                  <span className="text-xs text-[#334155] leading-relaxed">{v}</span>
                </div>
              ))}
            </div>

            {/* Disclaimer Callout */}
            <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#DECBB5] text-[11px] text-[#64748B] leading-relaxed flex items-start gap-2">
              <Info className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
              <span>
                <strong>Please Note:</strong> Brigitlink does not guarantee statutory timeframes. Timeframes are presented strictly as indicative guidelines, as actual review intervals vary based on registry and banking compliance checks.
              </span>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={() => onOpenConsultation && onOpenConsultation('Ajman Offshore Fee Schedule Request')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#B8864B] to-[#8C5E28] hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-sm"
          >
            <span>Request Customized Fee Breakdown</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default AjmanCostTimeline;
