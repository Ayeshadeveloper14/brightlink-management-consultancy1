import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Calculator, 
  Clock, 
  Receipt, 
  Building2, 
  Stamp, 
  CreditCard, 
  Sparkles,
  ArrowRight,
  Info,
  ShieldCheck
} from 'lucide-react';

export const BranchCostAndTimeline = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const costFactors = [
    {
      title: 'Structure Selected (Branch vs. Rep Office)',
      desc: 'Commercial branch licensing fees differ from non-commercial representative office tariffs at both DET and Ministry of Economy levels.'
    },
    {
      title: 'Authority & Commercial Registration Fees',
      desc: 'Official DET voucher charges, Ministry of Economy (MOE) foreign branch registration, and Dubai Chamber of Commerce membership fees.'
    },
    {
      title: 'Document Attestation & MOFA Legalisation',
      desc: 'Home-country notary, foreign ministry apostille, UAE Embassy authentication, and UAE Ministry of Foreign Affairs (MOFA) super-legalisation.'
    },
    {
      title: 'Certified Arabic Legal Translation',
      desc: 'Ministry of Justice (MOJ) certified translation fees for multi-page parent company certificates, bylaws, and board resolutions.'
    },
    {
      title: 'Commercial Office Premises & Ejari',
      desc: 'Annual commercial office rent in Dubai and corresponding municipal market fees (2.5% of annual lease) registered through Ejari.'
    },
    {
      title: 'Local Service Agent (LSA) where Applicable',
      desc: 'Annual statutory service agreement fee for a UAE national service agent if mandated by specific activity regulations.'
    },
    {
      title: 'Visa Quotas & Residence Processing',
      desc: 'General Manager and staff residency visas, establishment card fees with GDRFA and MOHRE, medical fitness, and Emirates ID processing.'
    },
    {
      title: 'Professional Legal & PRO Coordination',
      desc: 'Comprehensive application drafting, ministerial liaison, document compilation, and corporate banking preparation services.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Investment & Schedule Parameters</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Cost Determinants & Realistic Timeline
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            Establishing an international branch requires cross-border legalisation and multi-authority registrations. We provide transparent, itemized estimates without fictitious fixed packages.
          </p>
        </div>

        {/* Two-Column Layout: Left Cost Factors, Right Realistic Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: What Shapes Total Costs (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading flex items-center gap-2">
              <Receipt className="w-5 h-5 text-[#B8864B]" />
              <span>What Determines the Total Setup Cost?</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Branch and representative office setup fees consist of cross-border document legalisations, statutory UAE ministerial tariffs, office leasing, and visa allocations:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {costFactors.map((factor, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#DECBB5] hover:border-[#B8864B] transition-colors shadow-2xs">
                  <h4 className="text-xs font-bold text-[#0F172A] font-heading mb-1">
                    {factor.title}
                  </h4>
                  <p className="text-[11px] text-[#64748B] leading-relaxed">
                    {factor.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-start gap-2.5 text-xs text-[#64748B]">
              <Info className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
              <p>
                Brightlink prepares a comprehensive, line-by-line financial projection prior to commencement, distinguishing official government and embassy vouchers from professional legal advisory fees.
              </p>
            </div>
          </div>

          {/* Right Column: Realistic Timeline Expectations (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-[#DECBB5] shadow-xs space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#0F172A] text-[#F5D7A1] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading">
                  Setup Timeline Overview
                </h3>
                <span className="text-xs text-[#8C5E28] font-semibold">
                  Realistic expectations, no arbitrary promises
                </span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs text-[#475569] leading-relaxed">
              <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#DECBB5]">
                <strong className="block text-xs font-bold text-[#0F172A] font-heading mb-1 text-[#8C5E28]">
                  Phase 1: Parent Document Attestation (1 to 3 Weeks)
                </strong>
                <span>
                  The duration depends primarily on how quickly home-country notaries, foreign ministries, and the UAE Embassy in the parent jurisdiction authenticate corporate documents.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#DECBB5]">
                <strong className="block text-xs font-bold text-[#0F172A] font-heading mb-1 text-emerald-800">
                  Phase 2: UAE Ministry & DET Licensing (1 to 2 Weeks)
                </strong>
                <span>
                  Once attested documents arrive in the UAE and certified Arabic translation is completed, initial approval, Ministry of Economy filing, and license issuance typically progress in 5 to 10 working days.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#DECBB5]">
                <strong className="block text-xs font-bold text-[#0F172A] font-heading mb-1 text-amber-800">
                  Phase 3: Visas & Banking Activation (2 to 3 Weeks)
                </strong>
                <span>
                  Establishment card issuance, General Manager residency typing, medical fitness, and corporate bank account documentation follow licensing.
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#F5F1EB]">
              <button
                type="button"
                onClick={() => onOpenConsultation && onOpenConsultation('Branch Setup Cost & Timeline Assessment')}
                className="w-full py-3 px-4 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
              >
                <Calculator className="w-4 h-4 text-[#F5D7A1]" />
                <span>Request Custom Cost & Timeline Quote</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BranchCostAndTimeline;
