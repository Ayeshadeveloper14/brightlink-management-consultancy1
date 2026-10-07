import React from 'react';

export const SetupProcess = () => {
  const steps = [
    { num: '01', title: 'Activity Selection & Trade Name', desc: 'Selection of approved DED / Freezone business activities and official trademark reservation.' },
    { num: '02', title: 'Initial Approvals & Security Clearance', desc: 'Coordination with government authorities for statutory approvals and security registry.' },
    { num: '03', title: 'MOA Drafting & Lease (Ejari)', desc: 'Notarization of the Memorandum of Association and tenancy contract agreement registration.' },
    { num: '04', title: 'Commercial License Issuance', desc: 'Delivery of official Trade License, Chamber of Commerce certificate, and establishment card.' },
    { num: '05', title: 'Investor Visas & Corporate Bank Account', desc: '10-Year or 2-Year residency stamping, Emirates ID typing, and introduction to top UAE tier-1 banks.' }
  ];

  return (
    <div className="bg-[#FCFAF8] p-8 sm:p-12 rounded-3xl border border-neutral-200/70">
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">
          5-Step Streamlined Formation Timeline
        </h2>
        <p className="text-xs sm:text-sm text-[#666666]">
          From first name reservation to opening your corporate bank account.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {steps.map((st, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-neutral-200/70 flex flex-col justify-between">
            <div>
              <span className="text-2xl font-bold text-[#B8864B]/30">{st.num}</span>
              <h4 className="font-bold text-xs text-[#222222] mt-2 mb-1.5 leading-snug">{st.title}</h4>
              <p className="text-[11px] text-[#666666] leading-relaxed">{st.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetupProcess;
