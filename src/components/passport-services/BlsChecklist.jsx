import React from 'react';
import { Camera } from 'lucide-react';

export const BlsChecklist = () => {
  return (
    <section className="bg-[#FCFAF8] p-8 sm:p-10 rounded-3xl border border-neutral-200">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-[#F5F1EB] text-[#B8864B] flex items-center justify-center shrink-0">
          <Camera className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#222222]">Strict Photo Compliance Guidelines</h3>
          <p className="text-xs text-[#666666]">Over 40% of DIY passport applications are delayed by non-compliant photos.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div className="bg-white p-4 rounded-xl border border-neutral-200">
          <span className="font-bold text-[#222222] block mb-1">Exact 51 x 51 mm (2x2 Inches)</span>
          <p className="text-[#555555]">Dimensions must strictly measure 2x2 inches with 75% to 80% face coverage.</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-neutral-200">
          <span className="font-bold text-[#222222] block mb-1">Pure White Background</span>
          <p className="text-[#555555]">No off-white, cream, or shaded background. Both ears must be clearly visible.</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-neutral-200">
          <span className="font-bold text-[#222222] block mb-1">Dark Clothing Recommended</span>
          <p className="text-[#555555]">Wear dark colored clothing for sharp contrast against the pure white background.</p>
        </div>
      </div>
    </section>
  );
};

export default BlsChecklist;
