import React from 'react';
import { Sparkles } from 'lucide-react';

export const VisaRequirements = ({ onOpenConsultation }) => {
  return (
    <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-[#1C1A17] to-[#2E2820] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
      <div className="space-y-2 max-w-xl text-center md:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#F5D7A1] text-xs font-bold uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Instant Cost Estimator</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Calculate Exact Government Fees
        </h3>
        <p className="text-neutral-300 text-sm leading-relaxed">
          Estimate government ministerial fees, medical typing, Emirates ID, and BrightLink service rates for your specific visa category.
        </p>
      </div>
      
      <button
        onClick={() => onOpenConsultation('Fee Estimation Request')}
        className="py-3.5 px-6 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white font-bold text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
      >
        Get Itemized Cost Sheet
      </button>
    </div>
  );
};

export default VisaRequirements;
