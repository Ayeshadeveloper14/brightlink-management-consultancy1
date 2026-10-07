import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Landmark, 
  Globe2, 
  ShieldCheck, 
  Scale, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const JafzaVsRak = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const comparisonRows = [
    {
      criterion: 'Registry Location',
      jafza: 'Emirate of Dubai (Jebel Ali Free Zone Authority)',
      rak: 'Emirate of Ras Al Khaimah (RAK ICC Registry)'
    },
    {
      criterion: 'Dubai Property Ownership',
      jafza: 'Pioneer offshore entity officially permitted to own Dubai freehold property since 2003 under direct DLD protocols.',
      rak: 'Permitted under bilateral Memorandum of Understanding (MoU) signed with Dubai Land Department.'
    },
    {
      criterion: 'Asset Ownership & Holding',
      jafza: 'Widely favored for holding shares in Dubai mainland companies, regional enterprises, and institutional assets.',
      rak: 'Highly flexible holding chassis for international assets, intellectual property, and diversified investments.'
    },
    {
      criterion: 'International Reputation',
      jafza: 'Commands supreme prestige as a Dubai-domiciled free zone offshore entity with decades of established global standing.',
      rak: 'Modern Common Law registry adhering to FATF and OECD transparency with progressive corporate bylaws.'
    },
    {
      criterion: 'Banking Perception',
      jafza: 'Often perceived favorably by tier-1 Dubai commercial banks and global private wealth institutions.',
      rak: 'Recognized by major UAE and digital banking institutions, backed by structured business profiles.'
    },
    {
      criterion: 'Cost & Formation Dynamics',
      jafza: 'Premium government fee schedule reflecting Dubai jurisdiction status and rigorous vetting.',
      rak: 'Highly cost-effective with flexible capital structures and streamlined administrative overhead.'
    },
    {
      criterion: 'Core Offshore Objectives',
      jafza: 'Best for investors prioritizing a prestigious Dubai legal address and deep ties to Dubai real estate and corporate holdings.',
      rak: 'Best for international traders, multi-currency holding vehicles, and cost-optimized global asset protection.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Scale className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>OBJECTIVE JURISDICTION EVALUATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            JAFZA Offshore vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">RAK Offshore</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Both jurisdictions operate under world-class UAE offshore frameworks. Compare the key differences to align with your corporate holding objectives.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="bg-[#FCFAF8] rounded-3xl border border-[#E6D7C3] p-6 sm:p-10 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#DECBB5]">
                  <th className="py-4 px-4 font-bold text-[#0F172A] uppercase tracking-wider text-[11px] w-1/4">
                    Comparison Metric
                  </th>
                  <th className="py-4 px-5 font-bold text-[#8C5E28] bg-[#FAF5EC] rounded-t-xl uppercase tracking-wider text-[11px] w-[37.5%] border-t border-l border-r border-[#DECBB5]/70">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#B8864B]" />
                      <span>JAFZA Offshore (Dubai)</span>
                    </div>
                  </th>
                  <th className="py-4 px-5 font-bold text-[#475569] uppercase tracking-wider text-[11px] w-[37.5%]">
                    <div className="flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-[#8C5E28]" />
                      <span>RAK Offshore (RAK ICC)</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5F1EB]">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/80 transition-colors">
                    <td className="py-4 px-4 font-bold text-[#0F172A] whitespace-normal">
                      {row.criterion}
                    </td>
                    <td className="py-4 px-5 text-[#1E293B] bg-[#FAF5EC]/50 font-medium leading-relaxed border-l border-r border-[#DECBB5]/40">
                      {row.jafza}
                    </td>
                    <td className="py-4 px-5 text-[#475569] leading-relaxed">
                      {row.rak}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Neutral Advisory Footnote */}
          <div className="mt-8 pt-6 border-t border-[#DECBB5]/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
            <p>
              Both structures deliver 100% foreign ownership, statutory privacy, and zero physical office mandates.
            </p>
            <button
              onClick={() => onOpenConsultation && onOpenConsultation('Comparing JAFZA vs RAK Offshore Jurisdictions')}
              className="font-bold text-[#8C5E28] hover:text-[#B8864B] flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>Get Personalized Jurisdiction Guidance</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JafzaVsRak;
