import React from 'react';
import { motion } from 'framer-motion';
import { 
  Key, 
  Paintbrush, 
  Zap, 
  FileSpreadsheet, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';

export const RevaluationPreparationSection = () => {
  const preparationPoints = [
    {
      title: 'Coordinate Key & Gate Access',
      description: 'Ensure keys, access cards, and building security passes are ready. If tenanted, provide ample notice to ensure entry is guaranteed on the inspection date.',
      icon: Key
    },
    {
      title: 'Highlight Premium Upgrades',
      description: 'Prepare contractor invoices or photographic evidence for renovated kitchens, Italian marble flooring, smart home automation, or landscaped gardens.',
      icon: Paintbrush
    },
    {
      title: 'Confirm Active DEWA Utilities',
      description: 'Ensure water and electricity meters are connected. Inspectors must test lighting and electrical fittings to confirm the property is fully operational.',
      icon: Zap
    },
    {
      title: 'Assemble Tenancy & Yield Proof',
      description: 'If the property is rented, have your registered Ejari and recent rental payment cheques accessible. Strong rental yields support higher market capitalization values.',
      icon: FileSpreadsheet
    },
    {
      title: 'Ensure Clean Interior Presentation',
      description: 'A well-maintained, tidy property photographs better for the DLD digital registry dossier and establishes positive maintenance status.',
      icon: Sparkles
    },
    {
      title: 'Verify Modification NOCs',
      description: 'If structural additions (pergolas, extensions, interior wall removals) were executed, ensure master developer modification permits are on hand.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              Valuation Readiness
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-4">
            How to Prepare for the DLD Inspection
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-[#B8864B] mb-3">
            Maximize your property's valuation potential with these practical steps.
          </p>

          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            The surveyor's visual inspection and photographic report directly influence the valuation committee's final figure. Preparing the unit properly ensures no delays or lower condition scores.
          </p>
        </div>

        {/* 6 Preparation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {preparationPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#FCFAF8] rounded-3xl p-7 sm:p-8 border border-[#EFEAE2] hover:border-[#B8864B]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center mb-6 shadow-xs group-hover:bg-[#B8864B] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#222222] mb-3 leading-snug group-hover:text-[#B8864B] transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                    {point.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-200/60 flex items-center gap-2 text-xs font-semibold text-[#976A36]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Preparation Checklist Item</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
