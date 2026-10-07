import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Calculator, 
  Clock, 
  Receipt, 
  Building2, 
  FileCheck2, 
  CreditCard, 
  Sparkles,
  ArrowRight,
  Info,
  ShieldCheck
} from 'lucide-react';

export const LlcCostAndTimeline = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const visualFlowSteps = [
    { num: '01', title: 'Activity', desc: 'Commercial codes & structure' },
    { num: '02', title: 'Approval', desc: 'Trade name & initial approval' },
    { num: '03', title: 'MOA', desc: 'Court notarization & drafting' },
    { num: '04', title: 'Premises', desc: 'Office lease & Ejari' },
    { num: '05', title: 'License', desc: 'DET trade license issuance' },
    { num: '06', title: 'Establishment', desc: 'Immigration & labor files' },
    { num: '07', title: 'Banking & Visas', desc: 'Corporate account & residencies' }
  ];

  const costDrivers = [
    {
      title: 'Business Activity Category',
      desc: 'Standard commercial trading vs. general trading vs. regulated activities requiring specialized ministerial clearances (e.g., Civil Defense, Municipality).'
    },
    {
      title: 'Government Authority Fees',
      desc: 'Official DET voucher fees, commercial registration, trade name reservation, and Dubai Chamber of Commerce membership fees.'
    },
    {
      title: 'Trade Name Classification',
      desc: 'Standard Arabic or regional names carry standard tariffs, whereas foreign trade names, non-Arabic words, or trademarked references entail statutory DET foreign name fees.'
    },
    {
      title: 'Premises & Ejari Selection',
      desc: 'Annual rent for an approved business center flexi-desk, private commercial office, retail showroom, or industrial warehouse, plus the 2.5% market fee.'
    },
    {
      title: 'Establishment & Immigration Cards',
      desc: 'Immigration establishment card (GDRFA) and MOHRE labor card registrations required before any investor or employee visas can be typed.'
    },
    {
      title: 'Visa Allocations & Typing',
      desc: 'Number of shareholder/investor 2-year residency visas, employee work permits, VIP medical fitness screening, and Emirates ID biometric processing.'
    },
    {
      title: 'External Ministry Approvals',
      desc: 'Industry-specific permits from authorities such as Dubai Customs, Dubai Municipality, Telecommunications and Digital Government Regulatory Authority (TDRA), etc.'
    },
    {
      title: 'Professional & Legal Services',
      desc: 'Bilingual MOA drafting, court notary public attestation fees, legal translation, and dedicated PRO application coordination.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Investment & Duration Transparency</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Cost Determinants & Realistic Timeline
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            Mainland LLC formation costs and timelines vary based on business activity, office choice, and visa requirements. We provide itemized, honest assessments without misleading fixed package rates.
          </p>
        </div>

        {/* Visual Sequential Flow: Activity → Approval → MOA → Premises → License → Establishment → Banking & Visas */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DECBB5] shadow-xs">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F5F1EB] flex-wrap gap-2">
              <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider font-heading">
                Sequential Formation Lifecycle
              </span>
              <span className="text-xs text-[#8C5E28] font-semibold">
                Activity → Approval → MOA → Premises → License → Establishment → Banking & Visas
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {visualFlowSteps.map((step, idx) => (
                <div key={idx} className="relative bg-[#FCFAF8] rounded-xl p-3.5 border border-[#DECBB5] shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-extrabold text-[#B8864B] font-heading">
                        {step.num}
                      </span>
                      {idx < visualFlowSteps.length - 1 && (
                        <ArrowRight className="hidden lg:block w-3 h-3 text-[#DECBB5]" />
                      )}
                    </div>
                    <h4 className="text-xs font-bold text-[#0F172A] font-heading mb-0.5">
                      {step.title}
                    </h4>
                    <p className="text-[10px] text-[#64748B] leading-tight">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Left Cost Drivers, Right Realistic Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: What Shapes LLC Costs (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading flex items-center gap-2">
              <Receipt className="w-5 h-5 text-[#B8864B]" />
              <span>What Determines the Total LLC Formation Cost?</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Total setup fees are determined by official government tariffs, your chosen office premises lease, visa allocations, and statutory notary fees:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {costDrivers.map((driver, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#EFEAE2] hover:border-[#DECBB5] transition-colors">
                  <h4 className="text-xs font-bold text-[#0F172A] font-heading mb-1">
                    {driver.title}
                  </h4>
                  <p className="text-[11px] text-[#64748B] leading-relaxed">
                    {driver.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-start gap-2.5 text-xs text-[#64748B]">
              <Info className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
              <p>
                Brigitlink provides an itemized, line-by-line official quotation before you commence, clearly separating official government payment vouchers from professional consultation fees.
              </p>
            </div>
          </div>

          {/* Right Column: Realistic Timeline (lg:col-span-5) */}
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
                  Realistic timelines, no false guarantees
                </span>
              </div>
            </div>

            <div className="space-y-3.5 text-xs text-[#475569] leading-relaxed">
              <div className="p-3.5 rounded-xl bg-[#FCFAF8] border border-[#DECBB5]">
                <strong className="block text-xs font-bold text-[#0F172A] font-heading mb-1 text-emerald-800">
                  Standard Commercial LLCs: ~4 to 8 Working Days
                </strong>
                <span>
                  When shareholder passports, trade name preferences, and tenancy or business center flexi-desk documents are readily prepared, licensing can progress swiftly through DET smart processing.
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FCFAF8] border border-[#DECBB5]">
                <strong className="block text-xs font-bold text-[#0F172A] font-heading mb-1 text-amber-800">
                  Regulated Activities: ~2 to 4 Weeks
                </strong>
                <span>
                  Activities requiring special municipal health inspections, Civil Defense approvals, or external ministry oversight can extend the timeframe based on agency inspection schedules.
                </span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#F5F1EB]">
              <button
                type="button"
                onClick={() => onOpenConsultation && onOpenConsultation('LLC Custom Quote Inquiry')}
                className="w-full py-3 px-4 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white font-bold text-xs transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
              >
                <Calculator className="w-4 h-4 text-[#F5D7A1]" />
                <span>Request Custom Cost & Timeline Assessment</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LlcCostAndTimeline;
