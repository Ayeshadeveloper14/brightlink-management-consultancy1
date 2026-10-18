import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Scale, 
  Check, 
  HelpCircle, 
  ArrowRight,
  Globe,
  Building2
} from 'lucide-react';

export const FreeZoneVsMainland = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const comparisonRows = [
    {
      feature: 'Foreign Ownership',
      freeZone: '100% foreign equity across all activities and sectors.',
      mainland: '100% foreign ownership on most commercial activities; selective strategic sectors may require local participation.',
      highlight: true
    },
    {
      feature: 'Geographical Scope of Trading',
      freeZone: 'Unrestricted international trade and B2B transactions with other free zones. Onshore UAE trade requires a local distributor, agent, or dual license.',
      mainland: 'Direct, unrestricted trade across all seven UAE Emirates, government procurement, and international markets.',
      highlight: false
    },
    {
      feature: 'Office Space Requirement',
      freeZone: 'Highly flexible: Flexi-desks, smart desks, shared coworking spaces, or dedicated physical offices.',
      mainland: 'Mandatory registered physical commercial space (minimum requirement varies by activity) with an attested Ejari lease.',
      highlight: false
    },
    {
      feature: 'Customs Duties on Imported Goods',
      freeZone: '0% customs duties for goods stored, processed, or re-exported from designated free zone areas.',
      mainland: 'Standard 5% UAE customs duty applies upon clearing customs into mainland territory.',
      highlight: true
    },
    {
      feature: 'Visa Quota Allocation',
      freeZone: 'Allocated based on chosen license package and workspace square footage (e.g., 0 to 6+ visas on flexi-desk packages).',
      mainland: 'Allocated primarily based on physical office size (typically 1 visa per ~80-100 sq. ft. of commercial space) approved by MOHRE.',
      highlight: false
    },
    {
      feature: 'Governing Regulatory Authority',
      freeZone: 'Governed independently by individual Free Zone Authorities (e.g., IFZA, DMCC, DAFZA, DWTC).',
      mainland: 'Governed centrally by the Dubai Department of Economy and Tourism (DET / DED) and MOHRE.',
      highlight: false
    },
    {
      feature: 'Corporate Tax Regime',
      freeZone: 'Eligible for 0% corporate tax rate on Qualifying Income as a Qualifying Free Zone Person (QFZP); 9% on non-qualifying income.',
      mainland: 'Standard 9% corporate tax on taxable profits exceeding AED 375,000 (0% on profits up to AED 375,000).',
      highlight: true
    },
    {
      feature: 'Government Tender Eligibility',
      freeZone: 'Generally restricted from direct federal/municipal government contracts unless partnering with a mainland licensee or dual license.',
      mainland: 'Full eligibility to bid directly on federal, municipal, and semi-government procurement tenders.',
      highlight: false
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Scale className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>COMPARATIVE ANALYSIS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Dubai Free Zone vs. Mainland LLC
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Selecting the ideal jurisdiction depends on your business model, target market, office requirements, and trade scope. Compare key parameters below to make an informed decision.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-[#E6D7C3] bg-white shadow-xl overflow-hidden"
        >
          {/* Table Headers */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-gradient-to-r from-[#FAF7F0] via-[#FAF5EC] to-[#F5EFE6] border-b border-[#E6D7C3] p-4 sm:p-6 text-left items-center">
            <div className="md:col-span-4 text-xs font-bold uppercase tracking-wider text-[#8C5E28] font-heading mb-2 md:mb-0">
              Parameter
            </div>
            <div className="md:col-span-4 flex items-center gap-2 text-sm font-bold text-[#0F172A] font-heading mb-2 md:mb-0">
              <div className="w-6 h-6 rounded-md bg-[#B8864B] text-white flex items-center justify-center shrink-0">
                <Globe className="w-3.5 h-3.5" />
              </div>
              <span>Dubai Free Zone</span>
            </div>
            <div className="md:col-span-4 flex items-center gap-2 text-sm font-bold text-[#0F172A] font-heading">
              <div className="w-6 h-6 rounded-md bg-[#0F172A] text-white flex items-center justify-center shrink-0">
                <Building2 className="w-3.5 h-3.5" />
              </div>
              <span>Dubai Mainland (LLC)</span>
            </div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-[#E6D7C3]/60 text-xs sm:text-sm">
            {comparisonRows.map((row, idx) => (
              <div 
                key={idx}
                className={`grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 gap-3 md:gap-4 items-start transition-colors ${
                  row.highlight ? 'bg-[#FCFAF7]' : 'bg-white hover:bg-[#FAF7F0]/30'
                }`}
              >
                {/* Feature Name */}
                <div className="md:col-span-4 font-bold text-[#0F172A] font-heading flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8864B] shrink-0" />
                  <span>{row.feature}</span>
                </div>

                {/* Free Zone Detail */}
                <div className="md:col-span-4 text-[#475569] leading-relaxed pl-3 md:pl-0 border-l md:border-l-0 border-[#B8864B]/30">
                  <span className="md:hidden font-bold text-[11px] text-[#B8864B] uppercase block mb-1">
                    Free Zone:
                  </span>
                  {row.freeZone}
                </div>

                {/* Mainland Detail */}
                <div className="md:col-span-4 text-[#475569] leading-relaxed pl-3 md:pl-0 border-l md:border-l-0 border-[#0F172A]/20">
                  <span className="md:hidden font-bold text-[11px] text-[#0F172A] uppercase block mb-1">
                    Mainland:
                  </span>
                  {row.mainland}
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer Callout */}
          <div className="p-6 bg-[#FAF7F0] border-t border-[#E6D7C3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#64748B] text-center sm:text-left">
              <strong className="text-[#0F172A]">Unsure which structure fits best?</strong> Brightlink assesses your intended business activities and target clientele to recommend the ideal jurisdiction.
            </div>

            <button
              type="button"
              onClick={() => onOpenConsultation('Free Zone vs Mainland Assessment')}
              className="px-6 py-2.5 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0 font-heading shadow-xs"
            >
              Get Free Comparison Assessment
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
