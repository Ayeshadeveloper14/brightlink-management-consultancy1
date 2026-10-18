import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Globe2, 
  Building, 
  CheckCircle2, 
  Scale, 
  ShieldCheck, 
  HelpCircle,
  FileCheck2,
  ArrowRight
} from 'lucide-react';

export const UaqLegalStructures = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const structures = [
    {
      code: 'FZE',
      title: 'Free Zone Establishment (FZE)',
      subtitle: 'Single Shareholder Corporate Entity',
      shareholders: 'Exactly 1 Shareholder (Individual Natural Person or Single Corporate Entity)',
      directors: 'Minimum 1 Director and 1 Manager (may be the same individual)',
      liability: 'Limited to the subscribed share capital of the establishment',
      capital: 'Declared nominal share capital (standard practice AED 10,000 to AED 50,000 depending on activity scope)',
      features: [
        'Complete 100% solo equity holding without partner disputes',
        'Distinct corporate legal personality recognized across UAE banking',
        'Efficient decision-making without board resolution formalities',
        'Full eligibility for UAE investor residence visa sponsorship'
      ],
      idealFor: 'Solo founders, independent professionals, digital entrepreneurs, and single parent companies creating a wholly-owned subsidiary.'
    },
    {
      code: 'FZC',
      title: 'Free Zone Company (FZC)',
      subtitle: 'Multiple Shareholder Corporate Entity',
      shareholders: '2 to 50 Shareholders (Individuals, Corporate Bodies, or Combination)',
      directors: 'Minimum 1 Director, 1 General Manager, and 1 Secretary',
      liability: 'Limited to the nominal value of each shareholder’s registered equity',
      capital: 'Divided into equal shares of designated par value among registered partners',
      features: [
        'Structured equity participation for partners, co-founders, and angel investors',
        'Customized Memorandum & Articles of Association (MOA/AOA) tailored to internal governance',
        'Ability to appoint independent professional board directors and executive officers',
        'Streamlined mechanism for admitting new partners or transferring shares'
      ],
      idealFor: 'Joint ventures, multi-founder startups, business syndicates, family enterprises, and co-owned commercial ventures.'
    },
    {
      code: 'UAE Branch',
      title: 'Branch of an Existing UAE Company',
      subtitle: 'Domestic Mainland or Free Zone Extension',
      shareholders: 'Parent UAE Entity (Wholly owned corporate extension)',
      directors: 'Appointed Branch Manager authorized under parent board resolution',
      liability: 'Joint and several liability with the parent UAE entity (not a separate legal entity)',
      capital: 'No separate minimum share capital required beyond the parent entity’s capital',
      features: [
        'Enables established UAE firms to establish a secondary Northern Emirates presence',
        'Consolidated tax filing and corporate reporting under UAE Corporate Tax regulations',
        'Must mirror activities permitted on the parent company’s active trade licence',
        'Streamlined formation using verified UAE commercial registry records'
      ],
      idealFor: 'Existing Dubai, Abu Dhabi, or Sharjah companies establishing northern distribution or operational hubs.'
    },
    {
      code: 'Foreign Branch',
      title: 'Branch of a Foreign Enterprise',
      subtitle: 'International Corporate Presence',
      shareholders: 'Overseas Parent Corporation (100% corporate branch extension)',
      directors: 'Appointed Branch Manager with Power of Attorney (POA) from overseas board',
      liability: 'Full financial and legal liability borne by the overseas parent company',
      capital: 'No separate minimum share capital required in UAQ FTZ',
      features: [
        'Establishes a legitimate Middle East regional headquarters for foreign multinational corporations',
        'Operates under the established brand, commercial track record, and balance sheet of the parent company',
        'Direct authorization to invoice Middle East regional clients and sign commercial agreements',
        'Parent company documents require legalization up to UAE Embassy and MOFA'
      ],
      idealFor: 'Overseas corporations, international engineering firms, foreign manufacturers, and established global brands.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Scale className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>LEGAL ENTITY FORMATS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            UAQ Free Zone Legal Entity Structures
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Selecting the appropriate legal entity structure establishes your corporate governance, determines shareholder liability, and dictates the required constitutive documentation.
          </p>
        </div>

        {/* 4 Entity Structure Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {structures.map((item, idx) => (
            <motion.div
              key={item.code}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-[#FAF7F0]/30 rounded-2xl border border-[#E6D7C3] p-7 flex flex-col justify-between hover:border-[#DECBB5] hover:shadow-sm transition-all"
            >
              <div className="space-y-6">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#B8864B] bg-white px-2.5 py-1 rounded-md border border-[#E6D7C3]">
                      {item.code}
                    </span>
                    <h3 className="text-xl font-bold text-[#0F172A] font-heading mt-2">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#8C5E28]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Governance Summary Grid */}
                <div className="bg-white rounded-xl p-4 border border-[#EFEAE2] space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-[#1E293B]">Shareholders: </span>
                    <span className="text-[#475569]">{item.shareholders}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#1E293B]">Management: </span>
                    <span className="text-[#475569]">{item.directors}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#1E293B]">Liability: </span>
                    <span className="text-[#475569]">{item.liability}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#1E293B]">Share Capital: </span>
                    <span className="text-[#475569]">{item.capital}</span>
                  </div>
                </div>

                {/* Key Advantages */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                    Key Structural Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-[#334155] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best Suited For */}
                <div className="p-3.5 rounded-xl bg-[#FAF5EC] border border-[#EFEAE2] text-xs text-[#475569]">
                  <strong className="text-[#8C5E28]">Recommended Application: </strong> 
                  {item.idealFor}
                </div>

              </div>

              {/* Bottom Consultation Link */}
              <div className="mt-6 pt-4 border-t border-[#EFEAE2] flex items-center justify-between">
                <span className="text-xs text-[#64748B]">Legal guidance by Brightlink</span>
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenConsultation) {
                      onOpenConsultation(`Legal Structure Assessment - ${item.title}`);
                    } else {
                      window.open(`https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20guidance%20on%20choosing%20between%20${encodeURIComponent(item.title)}%20in%20UAQ%20Free%20Zone.`, '_blank');
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] hover:text-[#976A36] group cursor-pointer transition-colors"
                >
                  <span>Select Structure</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
