import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  Info, 
  DollarSign, 
  MessageSquare,
  Sparkles,
  Plus,
  Minus
} from 'lucide-react';

export const FamilyVisaPricingCalculator = ({ onOpenConsultation }) => {
  // Calculator state
  const [spouseCount, setSpouseCount] = useState(1);
  const [childrenUnder18, setChildrenUnder18] = useState(1);
  const [adultChildren, setAdultChildren] = useState(0);
  const [parentsCount, setParentsCount] = useState(0);
  const [isInsideUAE, setIsInsideUAE] = useState(true);
  const [useVipMedical, setUseVipMedical] = useState(false);

  // Pricing constants in AED
  // Base package averages
  const PRICE_SPOUSE_BASE = 2800; // Entry permit, EID 2-yr, Residency Stamping, Typing
  const PRICE_CHILD_BASE = 2450;  // No medical
  const PRICE_ADULT_CHILD_BASE = 2800;
  const PRICE_PARENT_BASE = 3650; // 1-year residency + humanitarian typing

  // Medical fees
  const FEE_STD_MEDICAL = 320;
  const FEE_VIP_MEDICAL = 820;

  // In-country status change fee per person
  const FEE_STATUS_CHANGE = 650;

  // Calculations
  const adultCount = (spouseCount > 0 ? 1 : 0) + adultChildren + parentsCount;
  const totalPersons = spouseCount + childrenUnder18 + adultChildren + parentsCount;

  const medicalPerPerson = useVipMedical ? FEE_VIP_MEDICAL : FEE_STD_MEDICAL;
  const medicalTotal = adultCount * medicalPerPerson;

  const statusChangeTotal = isInsideUAE ? totalPersons * FEE_STATUS_CHANGE : 0;

  const baseServiceTotal = 
    (spouseCount * PRICE_SPOUSE_BASE) +
    (childrenUnder18 * PRICE_CHILD_BASE) +
    (adultChildren * PRICE_ADULT_CHILD_BASE) +
    (parentsCount * PRICE_PARENT_BASE);

  const estimatedTotal = baseServiceTotal + medicalTotal + statusChangeTotal;
  const refundableSecurityDeposit = parentsCount * 5000;

  const packages = [
    {
      name: 'Spouse 2-Year Residency',
      price: 'AED 3,450',
      duration: '2 Years Renewable',
      bestFor: 'Husband or Wife',
      includes: [
        'Electronic Entry Permit',
        'In-Country Status Change typing',
        'Standard DHA Medical Fitness screening',
        '2-Year Emirates ID typing & processing',
        'Digital Residence Visa stamping',
        'Dedicated PRO Case Manager'
      ]
    },
    {
      name: 'Child (Under 18) Package',
      price: 'AED 2,850',
      duration: '2 Years Renewable',
      bestFor: 'Sons & Daughters < 18',
      popular: true,
      includes: [
        'Electronic Entry Permit',
        'In-Country Status Change typing',
        'Exempt from Medical Screening',
        '2-Year Emirates ID typing & issuance',
        'Digital Residence Visa approval',
        'Attestation verification assistance'
      ]
    },
    {
      name: 'Parents (1-Year Renewable)',
      price: 'AED 4,650',
      duration: '1 Year Renewable',
      bestFor: 'Mother & Father Together',
      includes: [
        'GDRFA Humanitarian File Opening',
        'Electronic Entry Permit & Status Change',
        'Senior DHA Medical Screening',
        '1-Year Emirates ID typing',
        'Consular Dependency Review',
        '+ AED 5,000 Refundable Govt Deposit'
      ]
    }
  ];

  return (
    <section id="family-pricing-calculator" className="py-20 lg:py-24 bg-white border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8C6230]">
              Transparent Pricing
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight font-heading">
            Family Visa Fees & Interactive Cost Calculator
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
            No surprise add-ons or hidden charges. Review standard government package costs or calculate your exact family sponsorship investment with our live estimation tool.
          </p>
        </div>

        {/* 3 Featured Packages Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-7 border transition-all flex flex-col justify-between ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EC] border-[#B8864B] shadow-md relative'
                  : 'bg-[#FCFAF8] border-neutral-200/80 hover:border-[#B8864B]/40 shadow-xs'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#B8864B] text-white text-[10px] font-extrabold uppercase px-3.5 py-0.5 rounded-full shadow-xs">
                  Most Requested
                </div>
              )}

              <div className="space-y-4">
                <div className="border-b border-neutral-200/60 pb-3">
                  <span className="text-xs font-bold text-[#8C6230]">
                    {pkg.bestFor}
                  </span>
                  <h3 className="text-lg font-bold text-[#111827] mt-0.5">
                    {pkg.name}
                  </h3>
                </div>

                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#111827] font-heading">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-neutral-500">/ person</span>
                  </div>
                  <span className="text-[11px] text-[#6B7280]">
                    Validity: {pkg.duration}
                  </span>
                </div>

                <div className="space-y-2 pt-2 text-xs text-[#374151]">
                  {pkg.includes.map((inc, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-200/60">
                <button
                  type="button"
                  onClick={() => onOpenConsultation(`Package Quote: ${pkg.name}`)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    pkg.popular
                      ? 'bg-[#B8864B] hover:bg-[#A07038] text-white shadow-xs'
                      : 'bg-white hover:bg-[#FAF5EC] hover:text-[#8C6230] text-[#111827] border border-neutral-200/80 shadow-2xs'
                  }`}
                >
                  Choose {pkg.name.split(' ')[0]} Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Interactive Cost Calculator Panel */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E6D7C3] shadow-sm">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#DECBB5] pb-5 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#B8864B] text-white flex items-center justify-center shadow-xs">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#111827] font-heading">
                  Interactive Family Visa Cost Estimator
                </h3>
                <p className="text-xs text-[#6B7280]">
                  Configure your dependents to calculate an accurate estimation for budgeting
                </p>
              </div>
            </div>

            <span className="text-xs font-bold text-[#8C6230] bg-white px-3 py-1.5 rounded-lg border border-[#DECBB5]">
              Updated 2026 Government Tariffs
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left 7 cols: Controls / Inputs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Stepper Grid for Family Members */}
              <div className="space-y-4">
                <label className="block text-xs font-bold text-[#111827] uppercase tracking-wider">
                  Number of Dependents
                </label>

                {/* Stepper 1: Spouse */}
                <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-[#E6D7C3]">
                  <div>
                    <h4 className="text-xs font-bold text-[#111827]">Spouse (Wife or Husband)</h4>
                    <p className="text-[11px] text-neutral-500">Requires medical screening & 2-year ID</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSpouseCount(Math.max(0, spouseCount - 1))}
                      className="w-8 h-8 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center font-bold text-sm cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center font-bold text-sm text-[#111827]">{spouseCount}</span>
                    <button
                      type="button"
                      onClick={() => setSpouseCount(Math.min(1, spouseCount + 1))}
                      className="w-8 h-8 rounded-lg bg-[#FAF5EC] hover:bg-[#F3EAD9] text-[#8C6230] flex items-center justify-center font-bold text-sm cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Stepper 2: Children Under 18 */}
                <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-[#E6D7C3]">
                  <div>
                    <h4 className="text-xs font-bold text-[#111827]">Children Under 18 Years</h4>
                    <p className="text-[11px] text-neutral-500">Exempt from medical screening</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setChildrenUnder18(Math.max(0, childrenUnder18 - 1))}
                      className="w-8 h-8 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center font-bold text-sm cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center font-bold text-sm text-[#111827]">{childrenUnder18}</span>
                    <button
                      type="button"
                      onClick={() => setChildrenUnder18(Math.min(6, childrenUnder18 + 1))}
                      className="w-8 h-8 rounded-lg bg-[#FAF5EC] hover:bg-[#F3EAD9] text-[#8C6230] flex items-center justify-center font-bold text-sm cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Stepper 3: Adult Children (18 - 25) */}
                <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-[#E6D7C3]">
                  <div>
                    <h4 className="text-xs font-bold text-[#111827]">Adult Children (Sons 18-25 & Daughters)</h4>
                    <p className="text-[11px] text-neutral-500">Requires medical test & biometrics</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setAdultChildren(Math.max(0, adultChildren - 1))}
                      className="w-8 h-8 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center font-bold text-sm cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center font-bold text-sm text-[#111827]">{adultChildren}</span>
                    <button
                      type="button"
                      onClick={() => setAdultChildren(Math.min(4, adultChildren + 1))}
                      className="w-8 h-8 rounded-lg bg-[#FAF5EC] hover:bg-[#F3EAD9] text-[#8C6230] flex items-center justify-center font-bold text-sm cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Stepper 4: Parents */}
                <div className="flex items-center justify-between p-3.5 bg-white rounded-xl border border-[#E6D7C3]">
                  <div>
                    <h4 className="text-xs font-bold text-[#111827]">Parents (Mother & Father)</h4>
                    <p className="text-[11px] text-neutral-500">1-year renewable humanitarian visa</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setParentsCount(Math.max(0, parentsCount - 1))}
                      className="w-8 h-8 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center font-bold text-sm cursor-pointer"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center font-bold text-sm text-[#111827]">{parentsCount}</span>
                    <button
                      type="button"
                      onClick={() => setParentsCount(Math.min(2, parentsCount + 1))}
                      className="w-8 h-8 rounded-lg bg-[#FAF5EC] hover:bg-[#F3EAD9] text-[#8C6230] flex items-center justify-center font-bold text-sm cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Toggles: Location & Medical Tier */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-3.5 rounded-xl border border-[#E6D7C3]">
                  <span className="block text-[11px] font-bold text-[#111827] mb-2">
                    Current Location of Family
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 text-xs">
                    <button
                      type="button"
                      onClick={() => setIsInsideUAE(true)}
                      className={`py-1.5 px-2 rounded-lg font-semibold border transition-all cursor-pointer ${
                        isInsideUAE 
                          ? 'bg-[#FAF5EC] border-[#B8864B] text-[#8C6230]' 
                          : 'bg-neutral-50 border-neutral-200 text-neutral-600'
                      }`}
                    >
                      Inside UAE
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsInsideUAE(false)}
                      className={`py-1.5 px-2 rounded-lg font-semibold border transition-all cursor-pointer ${
                        !isInsideUAE 
                          ? 'bg-[#FAF5EC] border-[#B8864B] text-[#8C6230]' 
                          : 'bg-neutral-50 border-neutral-200 text-neutral-600'
                      }`}
                    >
                      Outside UAE
                    </button>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-[#E6D7C3]">
                  <span className="block text-[11px] font-bold text-[#111827] mb-2">
                    Medical Fitness Speed
                  </span>
                  <div className="grid grid-cols-2 gap-1.5 text-xs">
                    <button
                      type="button"
                      onClick={() => setUseVipMedical(false)}
                      className={`py-1.5 px-2 rounded-lg font-semibold border transition-all cursor-pointer ${
                        !useVipMedical 
                          ? 'bg-[#FAF5EC] border-[#B8864B] text-[#8C6230]' 
                          : 'bg-neutral-50 border-neutral-200 text-neutral-600'
                      }`}
                    >
                      Standard (48h)
                    </button>
                    <button
                      type="button"
                      onClick={() => setUseVipMedical(true)}
                      className={`py-1.5 px-2 rounded-lg font-semibold border transition-all cursor-pointer ${
                        useVipMedical 
                          ? 'bg-[#FAF5EC] border-[#B8864B] text-[#8C6230]' 
                          : 'bg-neutral-50 border-neutral-200 text-neutral-600'
                      }`}
                    >
                      VIP Smart (4h)
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Right 5 cols: Itemized Live Summary Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-[#DECBB5] shadow-md space-y-5">
              
              <div className="border-b border-neutral-100 pb-3">
                <span className="text-[11px] font-bold text-[#8C6230] uppercase tracking-wider block mb-0.5">
                  Calculation Breakdown
                </span>
                <h4 className="text-base font-bold text-[#111827]">
                  Estimated Investment ({totalPersons} {totalPersons === 1 ? 'Dependent' : 'Dependents'})
                </h4>
              </div>

              {/* Line items */}
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-[#6B7280]">Govt Entry Permits & Stamping:</span>
                  <span className="font-bold text-[#111827]">AED {baseServiceTotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-[#6B7280]">
                    DHA Medical Screening ({adultCount} {adultCount === 1 ? 'Adult' : 'Adults'}):
                  </span>
                  <span className="font-bold text-[#111827]">AED {medicalTotal.toLocaleString()}</span>
                </div>

                {isInsideUAE && (
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-[#6B7280]">In-Country Status Change Fee:</span>
                    <span className="font-bold text-[#111827]">AED {statusChangeTotal.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-[#6B7280]">Emirates ID Typing & Processing:</span>
                  <span className="font-bold text-emerald-700">Included in Package</span>
                </div>

                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-[#6B7280]">Senior Case PRO Oversight:</span>
                  <span className="font-bold text-emerald-700">Included (Free)</span>
                </div>
              </div>

              {/* Total Box */}
              <div className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E6D7C3] space-y-1">
                <span className="text-[11px] text-[#6B7280] font-semibold">Estimated Total Cost (All-Inclusive)</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-[#111827] font-heading">
                    AED {estimatedTotal.toLocaleString()}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">approx.</span>
                </div>
                <p className="text-[10px] text-[#78716C] pt-1">
                  *Excludes mandatory health insurance policy and attestations if not already completed.
                </p>
              </div>

              {/* Parent refundable deposit note if applicable */}
              {refundableSecurityDeposit > 0 && (
                <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 text-[11px] text-amber-900 space-y-0.5">
                  <p className="font-bold">Refundable Government Deposit Notice:</p>
                  <p>Parent sponsorship requires a refundable deposit of <strong>AED {refundableSecurityDeposit.toLocaleString()}</strong> to GDRFA, returned when the visa is cancelled or converted.</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenConsultation(`Family Visa Quote: ${totalPersons} Dependents (AED ${estimatedTotal})`)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#B8864B] hover:bg-[#A07038] shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Free Consultation for this Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/971500000000?text=Hello%20BrightLink,%20I%20used%20your%20calculator%20for%20${totalPersons}%20family%20members%20estimated%20at%20AED%20${estimatedTotal}.%20Can%20you%20confirm%20details?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#1E293B] bg-white border border-[#D5C2A5] hover:bg-[#FAF6F0] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Receive Detailed Breakdown via WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FamilyVisaPricingCalculator;
