import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  ShieldCheck, 
  Building2, 
  Globe2, 
  FileText, 
  ArrowRight,
  Sparkles,
  Info
} from 'lucide-react';

export const RakLimitationsComparison = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const permittedActivities = [
    { text: 'Owning shares in UAE Mainland LLCs, UAE Free Zone entities, and overseas foreign companies.', allowed: true },
    { text: 'Holding Dubai freehold residential and commercial real estate through official Dubai Land Department (DLD) registration.', allowed: true },
    { text: 'Operating multi-currency corporate bank accounts with premier UAE and international banking institutions.', allowed: true },
    { text: 'Conducting cross-border international trade and commerce entirely outside the territory of the UAE.', allowed: true },
    { text: 'Holding and licensing patents, software, trademarks, copyright, and global intellectual property assets.', allowed: true },
    { text: 'Serving as an international Special Purpose Vehicle (SPV) or family succession wealth planning wrapper.', allowed: true }
  ];

  const restrictedActivities = [
    { text: 'Cannot directly trade, sell physical goods, or provide localized retail services within the UAE domestic mainland market without an onshore agent.', allowed: false },
    { text: 'Cannot rent or lease physical commercial office space or warehouse facilities within the UAE mainland.', allowed: false },
    { text: 'Cannot directly sponsor or issue UAE residence or employment visas to staff (no Ministry of Human Resources quota).', allowed: false },
    { text: 'Cannot conduct regulated banking, insurance, or deposit-taking activities without specialized central bank licenses.', allowed: false },
    { text: 'Cannot operate without a licensed UAE Registered Agent who maintains the statutory registered office address.', allowed: false }
  ];

  const comparisonData = [
    {
      feature: 'Primary Strategic Focus',
      offshore: 'Asset protection, holding equities & global trade',
      freezone: '100% foreign owned regional hub & services',
      mainland: 'Domestic UAE market access & government tenders'
    },
    {
      feature: 'UAE Mainland Commercial Trading',
      offshore: 'Via licensed onshore agent / distributor only',
      freezone: 'Within Free Zone or via mainland distributor',
      mainland: 'Direct & unrestricted across all 7 Emirates'
    },
    {
      feature: 'Physical Office Mandate',
      offshore: 'Zero (Operates via Registered Agent)',
      freezone: 'Flexi-desk or dedicated office space',
      mainland: 'Physical mainland premises with Ejari required'
    },
    {
      feature: 'UAE Residence Visas',
      offshore: 'Not available directly through offshore entity',
      freezone: 'Available based on visa quota',
      mainland: 'Available based on office size / quota'
    },
    {
      feature: 'Dubai Freehold Real Estate Holding',
      offshore: 'Directly supported via DLD MoU',
      freezone: 'Select designated free zones only (e.g. JAFZA)',
      mainland: 'Permitted directly by mainland entity'
    },
    {
      feature: 'Public Registry Transparency',
      offshore: 'Private / Confidential (Non-public registers)',
      freezone: 'Varies by free zone authority',
      mainland: 'Standard public commercial register'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Info className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>TRANSPARENT REGULATORY CLARITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Scope, Permitted Activities & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Statutory Boundaries</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            At Brightlink, we believe in radical transparency. Understanding exactly what an offshore entity is designed to accomplish ensures you select the correct corporate structure from day one.
          </p>
        </div>

        {/* Permitted vs Restricted 2-Column Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Permitted Card */}
          <div className="bg-[#FAFDF9] rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] font-heading">What RAK ICC Can Do</h3>
                  <span className="text-xs text-emerald-700 font-semibold">Statutorily Permitted Capabilities</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {permittedActivities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#334155] leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-100 text-xs text-emerald-800 font-medium">
              Ideal for international holding, asset protection, and global billing.
            </div>
          </div>

          {/* Restricted Card */}
          <div className="bg-[#FEF9F8] rounded-2xl p-6 sm:p-8 border border-rose-200 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] font-heading">What RAK ICC Cannot Do</h3>
                  <span className="text-xs text-rose-700 font-semibold">Statutory Offshore Restrictions</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                {restrictedActivities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#334155] leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-100 text-xs text-rose-800 font-medium flex items-center justify-between">
              <span>Need UAE onshore market access or visas?</span>
              <button
                onClick={() => onOpenConsultation && onOpenConsultation('Comparing Offshore vs Mainland LLC')}
                className="font-bold underline text-rose-900 hover:text-rose-700 cursor-pointer"
              >
                Explore Mainland LLC →
              </button>
            </div>
          </div>

        </div>

        {/* Structural Comparison Matrix */}
        <div className="bg-[#FCFAF8] rounded-3xl border border-[#E6D7C3] p-6 sm:p-8 shadow-sm">
          <div className="mb-6 space-y-1">
            <h3 className="text-xl font-bold text-[#0F172A] font-heading">
              Jurisdiction Comparison: Offshore vs Free Zone vs Mainland
            </h3>
            <p className="text-xs text-[#64748B]">
              How RAK ICC compares side-by-side with other UAE corporate registration structures.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#DECBB5]">
                  <th className="py-3 px-4 font-bold text-[#0F172A] uppercase tracking-wider text-[11px]">Feature / Attribute</th>
                  <th className="py-3 px-4 font-bold text-[#8C5E28] bg-[#FAF5EC] rounded-t-lg uppercase tracking-wider text-[11px]">RAK ICC Offshore</th>
                  <th className="py-3 px-4 font-bold text-[#475569] uppercase tracking-wider text-[11px]">UAE Free Zone</th>
                  <th className="py-3 px-4 font-bold text-[#475569] uppercase tracking-wider text-[11px]">Dubai Mainland LLC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5F1EB]">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/60 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-[#0F172A] whitespace-nowrap">{row.feature}</td>
                    <td className="py-3.5 px-4 font-bold text-[#8C5E28] bg-[#FAF5EC]/70">{row.offshore}</td>
                    <td className="py-3.5 px-4 text-[#475569]">{row.freezone}</td>
                    <td className="py-3.5 px-4 text-[#475569]">{row.mainland}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RakLimitationsComparison;
