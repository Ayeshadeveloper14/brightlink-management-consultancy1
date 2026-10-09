import React from 'react';

export const Milestones = () => {
  const milestones = [
    { year: '2006', title: 'Founded in Dubai', desc: 'Started as a boutique typing center handling labor and immigration files.' },
    { year: '2012', title: 'Federal ICP Accreditation', desc: 'Authorized for direct electronic UAE entry permits and status adjustments.' },
    { year: '2019', title: 'Golden Visa Specialist', desc: 'Pioneered 10-year Golden Visa application pathways for investors & executives.' },
    { year: '2026', title: 'Expanded to Crystal Tower', desc: 'State-of-the-art Business Bay headquarters with VIP client lounge and express services.' }
  ];

  return (
    <div className="mt-20 pt-16 border-t border-neutral-200/60">
      <h3 className="text-2xl font-bold text-center text-[#222222] mb-12">
        Our Journey in the Emirates
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {milestones.map((m, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-5 border border-neutral-200/80 shadow-xs space-y-2">
            <span className="text-2xl font-black text-[#B8864B]">
              {m.year}
            </span>
            <h4 className="text-sm font-bold text-[#222222]">
              {m.title}
            </h4>
            <p className="text-xs text-[#666666] leading-relaxed">
              {m.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;
