import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Globe2, 
  Landmark, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck,
  Scale
} from 'lucide-react';

export const FujairahLegalStructures = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const structures = [
    {
      id: 'fze',
      title: 'Free Zone Establishment (FZE)',
      badge: 'Single Shareholder Entity',
      icon: Building2,
      shareholders: '1 Shareholder (Individual or Corporate Entity)',
      description: 'An independent limited liability corporate entity formed with a single shareholder. The owner’s financial liability is strictly limited to the contributed share capital of the company.',
      highlights: [
        'Complete 100% individual or corporate holding',
        'Distinct legal identity with independent assets and liabilities',
        'Direct authority to enter commercial leases, hire staff, and hold bank accounts',
        'Standard minimum share capital as determined by authority activity rules'
      ],
      idealFor: 'Solo entrepreneurs, individual investors, or international parent companies establishing a wholly-owned UAE subsidiary.'
    },
    {
      id: 'fzc',
      title: 'Free Zone Company (FZC)',
      badge: 'Multi-Shareholder Entity',
      icon: Users,
      shareholders: '2 to 50 Shareholders (Individuals and/or Corporate Bodies)',
      description: 'A multi-shareholder corporate entity structured similar to a private limited liability partnership or company. Accommodates co-founders, joint venture syndicates, and institutional partners.',
      highlights: [
        'Flexible shareholding distribution with customized share certificates',
        'Formal Memorandum and Articles of Association (MOA/AOA)',
        'Governance accommodates multiple board directors, general managers, and corporate officers',
        'Limited liability protection shielding personal assets of all partners'
      ],
      idealFor: 'Partnerships, joint ventures, international investment syndicates, and businesses with multiple equity co-founders.'
    },
    {
      id: 'branch-foreign',
      title: 'Branch of a Foreign Company',
      badge: 'International Extension',
      icon: Globe2,
      shareholders: 'Parent Overseas Corporation (100% Ownership)',
      description: 'A registered operational presence of an existing company incorporated outside the UAE. The branch operates as an extension of the overseas parent company without creating a separate legal entity.',
      highlights: [
        'Maintains identical corporate name, brand identity, and legal heritage',
        'Parent company retains full operational control and ultimate liability',
        'No separate share capital required (relies on parent corporate balance sheet)',
        'Parent documents must undergo notarization, MOFA attestation, and UAE embassy legalization'
      ],
      idealFor: 'Multinational shipping corporations, international commodity traders, and established foreign manufacturers expanding into the UAE.'
    },
    {
      id: 'branch-uae',
      title: 'Branch of a UAE Company',
      badge: 'Domestic UAE Expansion',
      icon: Landmark,
      shareholders: 'Parent UAE Mainland (DED) or UAE Free Zone Entity',
      description: 'An extension of an existing company already incorporated in another UAE emirate or free zone jurisdiction, designed to establish physical facilities and operations in Fujairah.',
      highlights: [
        'Fast-track documentation using existing UAE commercial registration records',
        'Enables mainland or Dubai/Sharjah/Ajman companies to access Port of Fujairah maritime facilities',
        'No separate capitalization required; shares parent company governance',
        'Leverages parent company credit history and established UAE bank accounts'
      ],
      idealFor: 'Existing UAE corporate entities needing dedicated warehousing, bunkering, or manufacturing facilities at Port of Fujairah.'
    }
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Scale className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>CORPORATE LEGAL FORMS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Company Legal Structures in Fujairah Free Zone
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Fujairah Free Zone Authority offers flexible legal formations suited to single entrepreneurs, multi-party joint ventures, and international corporate expansions. Review the available legal forms to match your governance and liability preferences.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {structures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="p-7 sm:p-8 rounded-2xl bg-white border border-[#DECBB5] hover:border-[#B8864B] transition-all shadow-xs flex flex-col justify-between group space-y-6"
              >
                <div className="space-y-4">
                  
                  {/* Top Badge & Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#FAF5EC] text-[#8C5E28] text-xs font-bold border border-[#DECBB5] font-heading">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#0F172A] font-heading">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#8C5E28]">
                      Shareholder Requirement: {item.shareholders}
                    </div>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-[#F1E8DC]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A] block font-heading">
                      Structural Highlights:
                    </span>
                    <ul className="space-y-2">
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-[#334155]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For Box */}
                  <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EFEAE2] text-xs text-[#475569]">
                    <strong className="text-[#0F172A] font-heading block mb-0.5">Recommended For:</strong>
                    <span>{item.idealFor}</span>
                  </div>

                </div>

                {/* Bottom CTA Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(`Structure Consultation: ${item.title}`)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#FAF5EC] border border-[#DECBB5] hover:border-[#B8864B] text-[#0F172A] hover:text-[#8C5E28] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <span>Consult on {item.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Regulatory Governance Note */}
        <div className="p-5 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-start gap-3.5 text-xs sm:text-sm text-[#6D4518]">
          <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-[#8C5E28]">
              Eligibility & Share Capital Rule
            </p>
            <p className="text-[#6D4518] leading-relaxed">
              Legal structure eligibility, shareholder limits, and minimum capital requirements depend on the chosen activity class and FFZA board regulations. Branches do not require independent share capital, whereas FZEs and FZCs must allocate approved share capital in their incorporation documents.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
