import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Globe2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Layers
} from 'lucide-react';

export const JurisdictionComparisonSection = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const jurisdictions = [
    {
      title: 'Mainland UAE (DED / DET)',
      badge: 'Primary Focus',
      highlight: true,
      tagline: 'Direct Onshore Presence & Local Market Operations',
      overview: 'Best suited for established companies seeking direct, unrestricted UAE market presence, physical commercial offices across Dubai, and the authority to contract with private and government clients nationwide.',
      points: [
        'Unrestricted trade across Dubai and all seven Emirates',
        'Direct contracting with UAE government & local corporations',
        'Physical office or commercial premises anywhere in Dubai',
        'Subject to DET licensing and Ministry of Economy registration'
      ],
      ctaText: 'Explore Mainland Branch Setup'
    },
    {
      title: 'Free Zone Jurisdiction',
      badge: 'Alternative Option',
      highlight: false,
      tagline: 'Designated Free Zone Clusters & Industry Hubs',
      overview: 'May be suitable for companies whose operations and strategic objectives align strictly with a specific free zone hub (e.g. tech, commodities, media) and who do not require direct onshore mainland trading.',
      points: [
        'Operations restricted to the designated Free Zone or international markets',
        'Cannot invoice onshore mainland clients without a local distributor',
        'Regulated under specific Free Zone Authority frameworks',
        'Office premises must be situated within the Free Zone boundaries'
      ],
      ctaText: 'Inquire About Free Zone Routes'
    },
    {
      title: 'Offshore Jurisdiction',
      badge: 'Holding Structures',
      highlight: false,
      tagline: 'International Structuring & Asset Protection',
      overview: 'May suit certain international holding, asset protection, or regional equity holding objectives, but is strictly prohibited from conducting active physical commercial trading in the UAE.',
      points: [
        'No physical office or resident employee visas in the UAE',
        'Prohibited from commercial trading or local business operations',
        'Primarily used for global holding, property holding, or IP ownership',
        'Minimal physical presence required'
      ],
      ctaText: 'Inquire About Offshore Structuring'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Jurisdictional Context</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Mainland vs. Alternative Branch Jurisdictions
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            While UAE Free Zones and Offshore registries provide specialized structures, a <strong className="text-[#0F172A]">Mainland Branch Office</strong> delivers the legal authority required to engage directly with the UAE domestic economy.
          </p>
        </div>

        {/* 3 Jurisdiction Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {jurisdictions.map((j, idx) => (
            <motion.div
              key={j.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                j.highlight
                  ? 'bg-white border-2 border-[#B8864B] shadow-xl relative'
                  : 'bg-[#FAF7F0] border border-[#DECBB5] shadow-xs'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    j.highlight
                      ? 'bg-[#B8864B] text-white shadow-xs'
                      : 'bg-white text-[#8C5E28] border border-[#DECBB5]/70'
                  }`}>
                    {j.badge}
                  </span>
                  {j.highlight && (
                    <span className="text-xs font-bold text-[#B8864B] flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
                      Recommended Route
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] font-heading mb-1.5">
                  {j.title}
                </h3>
                
                <p className="text-xs font-semibold text-[#8C5E28] mb-3 leading-snug">
                  {j.tagline}
                </p>

                <p className="text-xs text-[#475569] leading-relaxed mb-6">
                  {j.overview}
                </p>

                {/* Key Points */}
                <div className="space-y-2.5 text-xs text-[#334155] border-t border-[#DECBB5]/50 pt-4 mb-6">
                  {j.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${j.highlight ? 'text-[#B8864B]' : 'text-[#8C5E28]'}`} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-[#DECBB5]/50">
                <button
                  type="button"
                  onClick={() => onOpenConsultation && onOpenConsultation(`Jurisdiction Inquiry: ${j.title}`)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    j.highlight
                      ? 'bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white hover:brightness-105 shadow-md shadow-[#B8864B]/20'
                      : 'bg-white border border-[#DECBB5] text-[#8C5E28] hover:bg-[#B8864B] hover:text-white'
                  }`}
                >
                  <span>{j.ctaText}</span>
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

export default JurisdictionComparisonSection;
