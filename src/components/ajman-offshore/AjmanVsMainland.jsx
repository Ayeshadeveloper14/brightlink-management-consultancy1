import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Globe2, 
  Scale, 
  CheckCircle2, 
  ArrowRight,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const AjmanVsMainland = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const comparisonData = [
    {
      feature: 'Structural Purpose',
      offshore: 'International asset holding, IP ownership & cross-border commercial arrangements',
      mainland: 'Domestic UAE business operations, local retail, and direct commercial contracts'
    },
    {
      feature: 'UAE Domestic Market Access',
      offshore: 'No direct onshore trading in mainland UAE; trade occurs via distributor or agent',
      mainland: 'Full, unrestricted commercial trading rights across all seven Emirates'
    },
    {
      feature: 'Physical Premises Requirement',
      offshore: 'No physical commercial office lease or Ejari required (Registered Agent address)',
      mainland: 'Physical premises or commercial Ejari lease required by economic department'
    },
    {
      feature: 'UAE Residence Visas',
      offshore: 'No residence visas attached directly to the offshore corporate license',
      mainland: 'Investor and employee residence visa quotas available subject to premises size'
    },
    {
      feature: 'Regulatory Framework',
      offshore: 'Statutory offshore regime administered through licensed Registered Agents',
      mainland: 'Department of Economy and Tourism (DET / DED) commercial licensing'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Scale className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>EDUCATIONAL STRUCTURAL ANALYSIS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Ajman Offshore vs <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Mainland Company</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Comparing an international offshore holding vehicle with an onshore commercial mainland entity helps identify the right structure for your business roadmap.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl border border-[#DECBB5] p-6 sm:p-10 shadow-sm mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#DECBB5]">
                  <th className="py-4 px-4 font-bold text-[#0F172A] uppercase tracking-wider text-[11px] w-1/4">
                    Key Attribute
                  </th>
                  <th className="py-4 px-5 font-bold text-[#8C5E28] bg-[#FAF5EC] rounded-t-xl uppercase tracking-wider text-[11px] w-[37.5%] border-t border-l border-r border-[#DECBB5]/70">
                    <div className="flex items-center gap-2">
                      <Globe2 className="w-4 h-4 text-[#B8864B]" />
                      <span>Ajman Offshore Structure</span>
                    </div>
                  </th>
                  <th className="py-4 px-5 font-bold text-[#475569] uppercase tracking-wider text-[11px] w-[37.5%]">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#8C5E28]" />
                      <span>UAE Mainland LLC Entity</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5F1EB]">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF7F0]/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-[#0F172A]">
                      {row.feature}
                    </td>
                    <td className="py-4 px-5 text-[#1E293B] bg-[#FAF5EC]/40 font-medium leading-relaxed border-l border-r border-[#DECBB5]/40">
                      {row.offshore}
                    </td>
                    <td className="py-4 px-5 text-[#475569] leading-relaxed">
                      {row.mainland}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-[#DECBB5]/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
            <p>
              Both vehicles serve distinct legal purposes in the UAE corporate ecosystem.
            </p>
            <Link
              to="/business-setup/mainland/llc-company"
              className="font-bold text-[#8C5E28] hover:text-[#B8864B] flex items-center gap-1 shrink-0 cursor-pointer"
            >
              <span>Explore Dubai Mainland LLC Setup</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AjmanVsMainland;
