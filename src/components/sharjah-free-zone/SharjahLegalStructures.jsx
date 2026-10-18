import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Share2, 
  Globe, 
  Scale, 
  AlertCircle,
  Sparkles
} from 'lucide-react';

export const SharjahLegalStructures = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const structures = [
    {
      icon: Users,
      title: 'Free Zone Establishment (FZE)',
      badge: 'Single Shareholder',
      shareholders: '1 Shareholder (Individual or Corporate)',
      overview: 'A limited liability corporate vehicle incorporated by a single shareholder (individual person or holding company). Isolates the founder’s personal liability strictly to the subscribed share capital of the enterprise.',
      suitability: 'Popular among individual entrepreneurs, sole traders, single-owner trading companies, and dedicated holding companies.'
    },
    {
      icon: Building2,
      title: 'Free Zone Company (FZC / FZ-LLC)',
      badge: 'Multiple Shareholders',
      shareholders: '2 to 50 Shareholders',
      overview: 'A limited liability entity formed by two or more corporate or individual partners. Shareholdings, management structures, and board voting mechanisms are defined via the Memorandum & Articles of Association (MOA/AOA).',
      suitability: 'Standard choice for commercial joint ventures, multi-partner agencies, industrial manufacturing firms, and venture-backed startups.'
    },
    {
      icon: Share2,
      title: 'Branch of a UAE Company',
      badge: 'Domestic Branch',
      shareholders: '100% Owned by UAE Parent',
      overview: 'A registered operational branch of an existing UAE mainland or UAE free zone entity. The branch shares the legal identity of its parent company and does not require standalone paid-up capital.',
      suitability: 'Enables existing UAE companies to leverage Sharjah’s deepwater ports, air cargo facilities, or lower operating costs.'
    },
    {
      icon: Globe,
      title: 'Branch of a Foreign Company',
      badge: 'International Branch',
      shareholders: '100% Owned by Foreign Parent',
      overview: 'Allows a business incorporated outside the UAE to establish a direct corporate branch in a Sharjah free zone under the constitutional governance of its overseas parent company.',
      suitability: 'Ideal for multinational corporations establishing regional logistics, trading, or manufacturing hubs in the Middle East.'
    },
    {
      icon: Sparkles,
      title: 'Dual Licence Structure',
      badge: 'Mainland & Free Zone Reach',
      shareholders: 'Available in Select Hubs (e.g. SPC)',
      overview: 'A specialized framework allowing an entity to hold both a free zone licence and a formal mainland branch branch licence, enabling direct commercial engagement onshore without separate foreign capital deposits.',
      suitability: 'Favoured by businesses trading both internationally through the free zone and serving retail/contract clients onshore in Sharjah.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Scale className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>CORPORATE VEHICLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Company Legal Structures in Sharjah Free Zones
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Sharjah free zone authorities offer multiple legal entity options. The choice of structure determines shareholder liability, capital requirements, and governance formalities.
          </p>
        </div>

        {/* Structures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {structures.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-[#FAF7F0]/40 rounded-2xl p-6 border border-[#E6D7C3] hover:border-[#DECBB5] hover:bg-white hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors duration-200 shadow-2xs">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-[#8C5E28] border border-[#DECBB5]/60 font-heading">
                      {st.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {st.title}
                  </h3>
                  
                  <div className="mb-3 text-[11px] font-semibold text-[#8C5E28]">
                    <span>Ownership: {st.shareholders}</span>
                  </div>

                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {st.overview}
                  </p>

                  <div className="pt-3 border-t border-neutral-200/60 text-xs text-[#475569]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] font-heading block mb-1">
                      Ideal Suitability
                    </span>
                    <span className="text-[11px] text-[#475569] leading-relaxed block">
                      {st.suitability}
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100">
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(`Legal Structure - ${st.title}`)}
                    className="w-full py-2 px-3 rounded-xl bg-white hover:bg-[#FAF5EC] text-[#8C5E28] hover:text-[#0F172A] font-bold text-xs border border-[#E6D7C3] transition-colors flex items-center justify-center gap-1.5 cursor-pointer font-heading"
                  >
                    <span>Consult on this Structure</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Share Capital & Procedural Notice */}
        <div className="rounded-2xl bg-[#FAF7F0] border border-[#E6D7C3] p-6 sm:p-8 text-xs sm:text-sm text-[#475569] flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-[#0F172A] font-heading block">
              Share Capital and Documentation Variations
            </strong>
            <p className="leading-relaxed">
              Legal structure availability, minimum capital requirements, and required constitutional documentation vary by authority. While digital consulting packages in SHAMS or SPC Free Zone often require no upfront paid-up capital deposit, heavy manufacturing setups in Hamriyah or aviation logistics in SAIF Zone may specify minimum capital thresholds.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
