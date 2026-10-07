import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  Globe2, 
  Landmark, 
  Scale, 
  FileCheck2, 
  ArrowRight,
  Lock,
  Layers,
  Sparkles,
  TrendingUp,
  Coins
} from 'lucide-react';

export const RakOverview = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const architecturalPillars = [
    {
      icon: Scale,
      title: 'Common Law Regulatory Framework',
      subtitle: 'International Commercial Standards',
      description: 'RAK ICC operates under world-class international corporate regulations, allowing access to English Common Law legal principles via ADGM and DIFC Courts for governance and dispute resolution.'
    },
    {
      icon: Lock,
      title: 'Confidentiality & Asset Security',
      subtitle: 'Non-Public Shareholder Register',
      description: 'Maintains maximum statutory privacy. Registers of directors, officers, and beneficial owners are filed securely with the registrar and are not accessible to public internet registries.'
    },
    {
      icon: Landmark,
      title: 'Dubai Real Estate Ownership',
      subtitle: 'Official DLD Memorandum of Understanding',
      description: 'One of the select offshore jurisdictions officially recognized by the Dubai Land Department (DLD), permitting foreign investors to legally own freehold property in Dubai through an offshore corporate wrapper.'
    },
    {
      icon: Globe2,
      title: 'Seamless Global Structuring',
      subtitle: 'Cross-Border Holding & Trading',
      description: 'Ideal holding vehicle for overseas operating subsidiaries, international trade invoicing outside the UAE, patent and trademark custody, and multi-generational family estate succession.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] relative overflow-hidden border-b border-[#E6D7C3]/60">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8864B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DECBB5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>GLOBAL CORPORATE ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            What is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">RAK ICC Offshore Entity?</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            The Ras Al Khaimah International Corporate Centre (RAK ICC) is a globally recognized company registry designed specifically for international entrepreneurs, high-net-worth investors, and corporate conglomerates seeking a robust, compliant, and cost-effective offshore jurisdiction within the United Arab Emirates.
          </p>
        </div>

        {/* Highlight Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {architecturalPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-[#E6D7C3] shadow-sm hover:shadow-md hover:border-[#B8864B]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#F5E8D4] border border-[#DECBB5] flex items-center justify-center text-[#8C5E28] mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-[#B8864B]" />
                  </div>
                  
                  <div className="text-[11px] font-bold tracking-wider uppercase text-[#B8864B] font-heading mb-1">
                    {pillar.subtitle}
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] mb-3 group-hover:text-[#8C5E28] transition-colors font-heading">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F5F1EB] flex items-center gap-1 text-xs font-semibold text-[#8C5E28]">
                  <span>Statutory compliance</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B8864B]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Narrative Banner: Mainland vs Free Zone vs Offshore Concept */}
        <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#B8864B]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F5D7A1] text-xs font-bold uppercase tracking-wider">
                <Globe2 className="w-3.5 h-3.5 text-[#F5D7A1]" />
                Strategic Jurisdiction Insight
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                An Offshore Entity Engineered for International Scope
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl">
                Unlike a Dubai Mainland LLC or Free Zone company that conducts physical commercial operations or employs staff inside the UAE domestic market, a RAK ICC offshore entity is designed to conduct business exclusively <strong className="text-white">outside the UAE</strong> or act as a passive holding structure. It eliminates costly physical office mandates while delivering internationally enforceable corporate status.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={() => onOpenConsultation && onOpenConsultation('RAK Offshore Strategic Evaluation')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#0F172A] bg-gradient-to-r from-[#F5D7A1] to-[#E5C07B] hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-md"
              >
                <span>Structure Your Holding</span>
                <ArrowRight className="w-4 h-4 text-[#0F172A]" />
              </button>
              
              <div className="text-center lg:text-left text-[11px] text-neutral-400">
                100% Confidential Consultation with Brigitlink Corporate Advisors
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RakOverview;
