import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Clock, 
  FileCheck2, 
  Layers, 
  ShieldCheck, 
  Scale, 
  Sparkles,
  Info,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const BranchEligibilitySection = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const eligibilityFactors = [
    {
      icon: Building2,
      title: 'Parent Company Legal Status',
      desc: 'The parent entity must be a duly registered, active legal corporate body in its home country (e.g. Corporation, Limited Company, LLC, or Joint Stock Company).'
    },
    {
      icon: Clock,
      title: 'Operating History Track Record',
      desc: 'Certain commercial activities or specific licensing authorities may review the parent company’s operational longevity (often requiring 1 to 2 years of active commercial standing).'
    },
    {
      icon: ShieldCheck,
      title: 'Certificate of Good Standing',
      desc: 'The parent entity must maintain unencumbered legal standing with its native commercial registry, free from insolvency proceedings or statutory suspensions.'
    },
    {
      icon: Layers,
      title: 'Alignment of Business Activities',
      desc: 'The proposed UAE operations must conform to or remain within the authorized objects and business activities set forth in the parent company’s constitutional charter.'
    },
    {
      icon: FileCheck2,
      title: 'Corporate Documentation Readiness',
      desc: 'Capacity to furnish complete constitutional documents, board resolutions, audited financial statements where applicable, and attested managerial Powers of Attorney.'
    },
    {
      icon: Scale,
      title: 'Applicable Authority Requirements',
      desc: 'Compliance with specific guidelines set forth by the Dubai Department of Economy and Tourism (DET), UAE Ministry of Economy (MOE), and relevant specialized regulators.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Statutory Criteria</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Eligibility & Corporate Requirements
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            Eligibility for establishing a branch or representative office in Dubai is evaluated on a case-by-case basis depending on your parent company's legal status, home jurisdiction, and proposed UAE operational scope.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {eligibilityFactors.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-[#DECBB5] shadow-xs flex flex-col justify-between hover:border-[#B8864B] transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] text-[#8C5E28] flex items-center justify-center mb-4 shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#F5F1EB] flex items-center gap-1.5 text-xs font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Authority Evaluation Metric</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Universal Disclaimer */}
        <div className="p-5 rounded-2xl bg-white border border-[#B8864B]/40 shadow-xs flex items-start gap-3.5 max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-[#0F172A] font-heading">
              Variable Regulatory Evaluation:
            </h4>
            <p className="text-xs text-[#475569] leading-relaxed font-sans">
              Eligibility criteria can vary depending on whether the parent company is based in a GCC, European, Asian, or American jurisdiction, as well as whether you select a commercial Branch Office or non-trading Representative Office. Our corporate advisory team pre-qualifies your parent enterprise directly against DET and Ministry of Economy standards before initiating costly attestations.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Pre-Qualify Parent Company')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white text-xs font-bold transition-colors cursor-pointer shadow-md"
          >
            <span>Pre-Qualify Your Parent Entity</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default BranchEligibilitySection;
