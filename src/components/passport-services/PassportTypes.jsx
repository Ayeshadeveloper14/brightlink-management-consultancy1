import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const PassportTypes = () => {
  return (
    <section>
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">
          Passport & Consular Typing Services
        </h2>
        <p className="text-sm text-[#666666]">
          Authorized application typing conforming to exact embassy formatting rules.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#FCFAF8] border border-neutral-200 hover:border-[#B8864B]/50 transition-all shadow-xs">
          <span className="px-2.5 py-0.5 rounded-full bg-[#B8864B] text-white text-[10px] font-bold uppercase">
            High Demand
          </span>
          <h3 className="text-lg font-bold text-[#222222] mt-3">Indian Passport Renewal</h3>
          <p className="text-xs text-[#666666] mt-1 mb-4">BLS International Center Typing in Dubai</p>

          <ul className="space-y-2 text-xs text-[#444444] border-t border-neutral-200/70 pt-4">
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
              <span>Normal Renewal (36 pages) & Jumbo (60 pages)</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
              <span><strong>Tatkal Express Service:</strong> 2 to 3 days turnaround</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
              <span>Name addition/deletion, spouse endorsement</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-[#FCFAF8] border border-neutral-200 hover:border-[#B8864B]/50 transition-all shadow-xs">
          <span className="px-2.5 py-0.5 rounded-full bg-[#F5F1EB] text-[#8C6230] text-[10px] font-bold uppercase">
            Family & Minors
          </span>
          <h3 className="text-lg font-bold text-[#222222] mt-3">Minor Child Passports</h3>
          <p className="text-xs text-[#666666] mt-1 mb-4">Newborn registration & child renewal</p>

          <ul className="space-y-2 text-xs text-[#444444] border-t border-neutral-200/70 pt-4">
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
              <span>Annexure D & C drafting with parent signatures</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
              <span>Consular birth registration within 1 year</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
              <span>Valid for 5 years or until child reaches 18</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-[#FCFAF8] border border-neutral-200 hover:border-[#B8864B]/50 transition-all shadow-xs">
          <span className="px-2.5 py-0.5 rounded-full bg-[#F5F1EB] text-[#8C6230] text-[10px] font-bold uppercase">
            Global Travel
          </span>
          <h3 className="text-lg font-bold text-[#222222] mt-3">PCC & Damage Replacement</h3>
          <p className="text-xs text-[#666666] mt-1 mb-4">Police Clearance Certificate & Lost Cases</p>

          <ul className="space-y-2 text-xs text-[#444444] border-t border-neutral-200/70 pt-4">
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
              <span>Police Clearance Certificate (PCC) for migration</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
              <span>Lost or damaged passport police report guidance</span>
            </li>
            <li className="flex items-start gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
              <span>Annexure F legal declaration typing</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PassportTypes;
