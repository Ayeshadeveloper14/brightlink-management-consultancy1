import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Briefcase, 
  Building, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  Scale
} from 'lucide-react';

export const LlcVsOtherStructures = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const structures = [
    {
      title: 'Mainland LLC',
      badge: 'Most Popular',
      highlight: true,
      typicalUse: 'Commercial trading, retail, e-commerce, general services, contracting, and manufacturing.',
      ownership: '1 to 50 shareholders. Up to 100% foreign ownership on thousands of eligible commercial activities.',
      liability: 'Limited to the capital shares contributed by each partner. Personal assets protected.',
      businessScope: 'Full commercial trade, wholesale, distribution, onshore contracting, retail, and services across UAE.',
      suitability: 'Founders, trading companies, expanding international enterprises, and commercial multi-partner firms.'
    },
    {
      title: 'Professional / Civil Company',
      badge: 'Service Focus',
      highlight: false,
      typicalUse: 'Consultancy, IT services, design studios, marketing, accounting, educational, and legal services.',
      ownership: '100% foreign ownership. May require a Local Service Agent (LSA) solely for administrative liaison.',
      liability: 'Unlimited liability for professional partners (or single establishment liability unless incorporated as LLC-SO).',
      businessScope: 'Intellectual, vocational, and professional service deliverables only; tangible goods trading excluded.',
      suitability: 'Individual professionals, consultants, digital agencies, and specialized technical practices.'
    },
    {
      title: 'Branch / Representative Office',
      badge: 'Corporate Parent',
      highlight: false,
      typicalUse: 'Extending an existing foreign or UAE parent company into the Dubai onshore market.',
      ownership: '100% owned by the foreign or UAE parent corporate entity. No distinct share capital required.',
      liability: 'Full liability is borne by the parent corporate entity (not a legally separate domestic company).',
      businessScope: 'Conducting authorized parent company operations (Branch) or marketing and promotional presence only (Rep Office).',
      suitability: 'Established international conglomerates and foreign parent companies entering the UAE.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Structural Comparison</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Mainland LLC vs. Other Corporate Structures
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            Understanding the distinction between an LLC, a Professional Company, and a Corporate Branch ensures you select the correct corporate vehicle for your operational goals.
          </p>
        </div>

        {/* 3 Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {structures.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all ${
                s.highlight
                  ? 'bg-white border-2 border-[#B8864B] shadow-xl relative'
                  : 'bg-white border border-[#DECBB5] shadow-sm'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    s.highlight
                      ? 'bg-[#B8864B] text-white shadow-xs'
                      : 'bg-[#FAF5EC] text-[#8C5E28] border border-[#DECBB5]/70'
                  }`}>
                    {s.badge}
                  </span>
                  {s.highlight && (
                    <span className="text-xs font-bold text-[#B8864B] flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
                      Recommended
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] font-heading mb-4">
                  {s.title}
                </h3>

                {/* Attributes List */}
                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-[11px] font-bold text-[#8C5E28] uppercase tracking-wider block mb-1">
                      Typical Use
                    </span>
                    <p className="text-[#475569] leading-relaxed">
                      {s.typicalUse}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F5F1EB]">
                    <span className="text-[11px] font-bold text-[#8C5E28] uppercase tracking-wider block mb-1">
                      Ownership & Structure
                    </span>
                    <p className="text-[#475569] leading-relaxed">
                      {s.ownership}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F5F1EB]">
                    <span className="text-[11px] font-bold text-[#8C5E28] uppercase tracking-wider block mb-1">
                      Liability Protection
                    </span>
                    <p className="text-[#475569] leading-relaxed font-semibold text-[#0F172A]">
                      {s.liability}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F5F1EB]">
                    <span className="text-[11px] font-bold text-[#8C5E28] uppercase tracking-wider block mb-1">
                      Commercial Scope
                    </span>
                    <p className="text-[#475569] leading-relaxed">
                      {s.businessScope}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F5F1EB]">
                    <span className="text-[11px] font-bold text-[#8C5E28] uppercase tracking-wider block mb-1">
                      Best Suited For
                    </span>
                    <p className="text-[#475569] leading-relaxed">
                      {s.suitability}
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Action Button */}
              <div className="mt-6 pt-5 border-t border-[#F5F1EB]">
                <button
                  type="button"
                  onClick={() => onOpenConsultation && onOpenConsultation(`Structure Comparison: ${s.title}`)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    s.highlight
                      ? 'bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white hover:brightness-105 shadow-md shadow-[#B8864B]/20'
                      : 'bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] hover:bg-[#B8864B] hover:text-white'
                  }`}
                >
                  <span>Select {s.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LlcVsOtherStructures;
