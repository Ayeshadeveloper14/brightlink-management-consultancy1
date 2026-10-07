import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Landmark, 
  Globe2, 
  Scale, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AjmanTriComparison = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const triComparison = [
    {
      metric: 'Jurisdiction Registry',
      ajman: 'Emirate of Ajman (AFZA Offshore)',
      rak: 'Emirate of Ras Al Khaimah (RAK ICC)',
      jafza: 'Emirate of Dubai (JAFZA Offshore)'
    },
    {
      metric: 'General Positioning',
      ajman: 'Cost-effective, streamlined holding and cross-border commercial vehicle',
      rak: 'Internationally recognized Common Law corporate holding and trading chassis',
      jafza: 'Premium Dubai-domiciled offshore vehicle commanding highest international prestige'
    },
    {
      metric: 'Typical Purpose',
      ajman: 'Asset holding, IP custody, cross-border trading, and simple holding entities',
      rak: 'Global asset holding, international trade, IP protection, and multi-tier SPVs',
      jafza: 'Corporate holding parent, Dubai freehold real estate custody, and group consolidation'
    },
    {
      metric: 'Property Considerations',
      ajman: 'May hold UAE property in approved designated areas subject to relevant authority approvals',
      rak: 'Directly supported via bilateral Memorandum of Understanding (MoU) with Dubai Land Department',
      jafza: 'Pioneer offshore entity officially permitted by Dubai Land Department (DLD) to own Dubai real estate'
    },
    {
      metric: 'Office Requirement',
      ajman: 'None (Via Registered Agent)',
      rak: 'None (Via Registered Agent)',
      jafza: 'None (Via Registered Agent)'
    },
    {
      metric: 'Visa Availability',
      ajman: 'No visas attached to license',
      rak: 'No visas attached to license',
      jafza: 'No visas attached to license'
    },
    {
      metric: 'Banking Perception',
      ajman: 'Supported by UAE and digital banks based on verified KYC profiles',
      rak: 'Widely recognized by UAE and international corporate banking partners',
      jafza: 'High institutional recognition among tier-1 UAE commercial and private banks'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Scale className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>UAE OFFSHORE COMPARATIVE MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Ajman Offshore vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">RAK & JAFZA</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            The UAE provides three established offshore jurisdictions. Review this comparative evaluation to understand the unique characteristics of each option.
          </p>
        </div>

        {/* 3-Column Comparative Matrix */}
        <div className="bg-[#FCFAF8] rounded-3xl border border-[#E6D7C3] p-6 sm:p-10 shadow-sm mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#DECBB5]">
                  <th className="py-4 px-4 font-bold text-[#0F172A] uppercase tracking-wider text-[11px] w-1/5">
                    Metric
                  </th>
                  <th className="py-4 px-4 font-bold text-[#8C5E28] bg-[#FAF5EC] rounded-t-xl uppercase tracking-wider text-[11px] w-[27%] border-t border-l border-r border-[#DECBB5]/70">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
                      <span>Ajman Offshore</span>
                    </div>
                  </th>
                  <th className="py-4 px-4 font-bold text-[#475569] uppercase tracking-wider text-[11px] w-[26%]">
                    <div className="flex items-center gap-1.5">
                      <Globe2 className="w-4 h-4 text-[#8C5E28]" />
                      <span>RAK Offshore (RAK ICC)</span>
                    </div>
                  </th>
                  <th className="py-4 px-4 font-bold text-[#475569] uppercase tracking-wider text-[11px] w-[27%]">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-[#8C5E28]" />
                      <span>JAFZA Offshore (Dubai)</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5F1EB]">
                {triComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/70 transition-colors">
                    <td className="py-4 px-4 font-bold text-[#0F172A]">
                      {row.metric}
                    </td>
                    <td className="py-4 px-4 text-[#1E293B] bg-[#FAF5EC]/50 font-medium leading-relaxed border-l border-r border-[#DECBB5]/40">
                      {row.ajman}
                    </td>
                    <td className="py-4 px-4 text-[#475569] leading-relaxed">
                      {row.rak}
                    </td>
                    <td className="py-4 px-4 text-[#475569] leading-relaxed">
                      {row.jafza}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mandatory Guideline Note from Prompt */}
          <div className="mt-8 pt-6 border-t border-[#DECBB5]/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
            <p className="font-semibold text-[#0F172A]">
              The appropriate offshore jurisdiction depends on the company's ownership, assets, business purpose and banking requirements.
            </p>
            
            <div className="flex items-center gap-4 shrink-0">
              <Link to="/business-setup/offshore/rak-offshore" className="font-bold text-[#8C5E28] hover:text-[#B8864B]">
                RAK Offshore →
              </Link>
              <Link to="/business-setup/offshore/jafza-offshore" className="font-bold text-[#8C5E28] hover:text-[#B8864B]">
                JAFZA Offshore →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AjmanTriComparison;
