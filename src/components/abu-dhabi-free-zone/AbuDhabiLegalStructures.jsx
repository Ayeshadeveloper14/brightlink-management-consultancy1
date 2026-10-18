import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Share2, 
  Globe, 
  Landmark, 
  Scale, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const AbuDhabiLegalStructures = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const structures = [
    {
      icon: Users,
      title: 'Free Zone Establishment (FZE)',
      badge: 'Single Shareholder',
      shareholders: '1 Shareholder (Individual or Corporate)',
      overview: 'A separate legal entity formed by a single individual or corporate shareholder. Offers limited liability protection, ensuring shareholder liability is strictly limited to contributed share capital.',
      considerations: 'Commonly utilized in KEZAD and Masdar City for solo entrepreneurs, holding entities, and single-owner corporate setups.'
    },
    {
      icon: Building2,
      title: 'Free Zone Company (FZ-LLC / FZC / Ltd.)',
      badge: 'Multiple Shareholders',
      shareholders: '2 to 50 Shareholders',
      overview: 'Incorporated by two or more individual or corporate shareholders. In ADGM, this structure corresponds to a Private Company Limited by Shares (Ltd). Shares and governance can be structured flexibly through the Articles of Association.',
      considerations: 'Preferred for corporate joint ventures, partnership ventures, commercial agencies, and VC-backed technology startups.'
    },
    {
      icon: Share2,
      title: 'Branch of a UAE Company',
      badge: 'Domestic Extension',
      shareholders: '100% Owned by UAE Parent',
      overview: 'An operational extension of an existing UAE mainland or UAE free zone company. The branch does not have separate legal personality from its parent company and does not require standalone share capital.',
      considerations: 'Facilitates business expansion into Abu Dhabi free zone ecosystems without creating a separate legal subsidiary.'
    },
    {
      icon: Globe,
      title: 'Branch of a Foreign Company',
      badge: 'International Entity',
      shareholders: '100% Owned by Foreign Parent',
      overview: 'Permits an overseas corporate entity registered outside the UAE to establish a direct registered branch presence in an Abu Dhabi free zone under parent company governance.',
      considerations: 'Parent company corporate documents must be legalized, notarized, and attested up to the UAE Ministry of Foreign Affairs (MOFA).'
    },
    {
      icon: Landmark,
      title: 'Special Purpose Vehicle (SPV) & Foundations',
      badge: 'ADGM Specialized',
      shareholders: 'Subject to ADGM Regulations',
      overview: 'ADGM offers specialized corporate vehicles including Special Purpose Vehicles (SPVs) for holding assets, intellectual property, and real estate, alongside ADGM Foundations for family wealth management and succession planning.',
      considerations: 'Available primarily within the ADGM legal framework under English Common Law regulations.'
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
            Company Legal Structures in Abu Dhabi Free Zones
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Legal forms, terminology, minimum capital requirements, and shareholder eligibility vary depending on the chosen free zone authority. Explore the available legal structures below.
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
                      Key Consideration
                    </span>
                    <span className="text-[11px] text-[#475569] leading-relaxed block">
                      {st.considerations}
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

        {/* Capital & Governance Clarification */}
        <div className="rounded-2xl bg-[#FAF7F0] border border-[#E6D7C3] p-6 sm:p-8 text-xs sm:text-sm text-[#475569] flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-[#0F172A] font-heading block">
              Share Capital and Governance Notice
            </strong>
            <p className="leading-relaxed">
              Minimum share capital requirements vary by authority. While many free zone service packages require no upfront paid-up capital deposit, specific activities (such as financial services in ADGM or heavy manufacturing in KEZAD) prescribe mandatory capital thresholds and financial audit submissions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
