import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Calculator, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Receipt, 
  Building2, 
  FileCheck2, 
  CreditCard, 
  Sparkles,
  Info
} from 'lucide-react';

export const CostAndTimelineSection = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const costFactors = [
    {
      title: 'Business Activity Category',
      desc: 'Standard commercial service codes vs. regulated activities requiring specialized ministerial oversight (e.g. DHA, KHDA, RERA).'
    },
    {
      title: 'Government Authority Fees',
      desc: 'Official DET voucher fees, trade name reservation, initial approval, and Dubai Chamber of Commerce membership charges.'
    },
    {
      title: 'Premises & Ejari Selection',
      desc: 'Annual rental fees for business center flexi-desks, co-working suites, or dedicated commercial offices, plus the 2.5% market fee.'
    },
    {
      title: 'Visa Quotas & Processing',
      desc: 'Investor residency visa applications, MOHRE establishment card fees, VIP medical fitness tests, and Emirates ID biometric processing.'
    },
    {
      title: 'Documentation & Notarization',
      desc: 'MOA drafting, official MOJ certified Arabic translation, Dubai Court notarization, and foreign document attestations where applicable.'
    },
    {
      title: 'External Approvals (If Applicable)',
      desc: 'Government regulatory approvals, security background clearances, or professional board inspection fees for specialized sectors.'
    }
  ];

  const processFlow = [
    { step: '01', title: 'Authority Fees', desc: 'Trade name & Initial approval payment vouchers' },
    { step: '02', title: 'Premises', desc: 'Flexi-desk lease or commercial Ejari registration' },
    { step: '03', title: 'Documentation', desc: 'MOA drafting & Court Notary authentication' },
    { step: '04', title: 'License Issuance', desc: 'Final DET voucher clearance & Commercial Register' },
    { step: '05', title: 'Business Activation', desc: 'Establishment cards, investor visas & banking' }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Transparent Evaluation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Cost Determinants & Realistic Timeline
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            Every business has distinct operational requirements. Rather than quoting arbitrary fixed rates, we outline the exact regulatory components that constitute your total investment.
          </p>
        </div>

        {/* Visual Sequential Flow: Authority Fees → Premises → Documentation → License Issuance → Business Activation */}
        <div className="mb-16">
          <div className="bg-[#FAF7F0] rounded-3xl p-6 sm:p-8 border border-[#DECBB5] shadow-xs">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#DECBB5]/70 flex-wrap gap-2">
              <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider font-heading">
                Sequential Capital Allocation Flow
              </span>
              <span className="text-xs text-[#8C5E28] font-semibold">
                Transparent Step-by-Step Payment Milestone Structure
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {processFlow.map((item, idx) => (
                <div key={idx} className="relative bg-white rounded-xl p-4 border border-[#DECBB5] shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-extrabold text-[#B8864B] font-heading">
                        {item.step}
                      </span>
                      {idx < processFlow.length - 1 && (
                        <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-[#DECBB5]" />
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-[#0F172A] font-heading mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#64748B] leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Left Cost Factors, Right Timeline Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: What Shapes the Total Cost (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading flex items-center gap-2">
              <Receipt className="w-5 h-5 text-[#B8864B]" />
              <span>What Determines the Total Setup Cost?</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Mainland formation fees consist of statutory government tariffs, workplace lease commitments, and professional typing services. The key variables include:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {costFactors.map((factor, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#FCFAF8] border border-[#EFEAE2] hover:border-[#DECBB5] transition-colors">
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
                Brigitlink provides an itemized, line-by-line official quotation before you commit, separating official government vouchers from professional service fees.
              </p>
            </div>
          </div>

          {/* Right: Realistic Timeline Expectations (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-[#FAF7F0] rounded-2xl p-6 sm:p-7 border border-[#DECBB5] shadow-xs space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#0F172A] text-[#F5D7A1] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading">
                  Setup Timeline Overview
                </h3>
                <span className="text-xs text-[#8C5E28] font-semibold">
                  Realistic expectations, no false promises
                </span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs text-[#475569] leading-relaxed">
              <div className="p-3.5 rounded-xl bg-white border border-[#DECBB5]">
                <strong className="block text-xs font-bold text-[#0F172A] font-heading mb-1 text-emerald-800">
                  Standard Professional Activities: ~3 to 7 Working Days
                </strong>
                <span>
                  When shareholder passport copies, proposed trade names, and tenancy/flexi-desk documents are readily available, initial approvals and license issuance can proceed rapidly through DET smart systems.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#DECBB5]">
                <strong className="block text-xs font-bold text-[#0F172A] font-heading mb-1 text-amber-800">
                  Regulated Activities: ~2 to 4 Weeks
                </strong>
                <span>
                  Activities requiring external regulatory approvals (e.g., engineering consultancy, legal advisory, healthcare, education) depend on specific ministry inspection cycles and academic certificate attestations.
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#DECBB5]/70">
              <button
                type="button"
                onClick={() => onOpenConsultation && onOpenConsultation('Itemized Fee & Timeline Quote')}
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

export default CostAndTimelineSection;
