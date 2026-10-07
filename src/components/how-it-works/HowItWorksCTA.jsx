import React from 'react';

export const HowItWorksCTA = ({ onOpenConsultation }) => {
  return (
    <div className="mt-16 bg-[#FAF7F0] rounded-3xl p-8 sm:p-10 border border-[#B8864B]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
      <div className="space-y-1 text-center md:text-left">
        <h3 className="text-xl font-bold text-[#222222]">
          Ready to begin Step 01?
        </h3>
        <p className="text-xs sm:text-sm text-[#666666]">
          Upload your files for a free document audit and immediate eligibility evaluation.
        </p>
      </div>
      <button
        onClick={() => onOpenConsultation('Step 01 Free Case Audit')}
        className="px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs font-bold transition-all shadow-md shadow-[#B8864B]/20 cursor-pointer whitespace-nowrap"
      >
        Start Free Case Audit
      </button>
    </div>
  );
};

export default HowItWorksCTA;
