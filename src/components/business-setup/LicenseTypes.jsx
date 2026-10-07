import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const LicenseTypes = ({ onOpenConsultation }) => {
  const jurisdictions = [
    {
      title: 'Dubai Mainland (DED)',
      desc: 'Trade anywhere across the UAE and globally without local partner ownership constraints.',
      highlights: [
        '100% foreign business ownership',
        'Trade directly with UAE local mainland market & government tenders',
        'No restriction on number of employee visa quotas',
        'Physical office or virtual Ejari flexible leasing'
      ],
      price: 'Starting from AED 12,500',
      popular: true
    },
    {
      title: 'UAE Freezones (IFZA, DMCC, Meydan)',
      desc: 'Cost-effective tax advantages with 0% personal tax, rapid setup, and 100% profit repatriation.',
      highlights: [
        '100% foreign ownership & 0% personal tax',
        'Fast-track setup in 3 to 5 business days',
        'No mandatory physical office required (Flexi-desk)',
        'Investor and employee residency visas included'
      ],
      price: 'Starting from AED 10,900',
      popular: false
    },
    {
      title: 'Offshore Companies',
      desc: 'International asset protection, holding structures, and worldwide tax-efficient trade.',
      highlights: [
        'International commercial trading authorization',
        'Zero corporate tax on foreign profits',
        'Multi-currency corporate bank account eligibility',
        'Confidential shareholder register'
      ],
      price: 'Starting from AED 8,500',
      popular: false
    }
  ];

  return (
    <div>
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">
          Choose Your Company Jurisdiction
        </h2>
        <p className="text-sm text-[#666666]">
          Our corporate advisors will match your business model with the optimal legal structure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {jurisdictions.map((j, i) => (
          <div
            key={i}
            className={`p-7 rounded-2xl border transition-all flex flex-col justify-between ${
              j.popular
                ? 'border-[#B8864B] bg-[#FCFAF8] shadow-md relative'
                : 'border-neutral-200 bg-white shadow-xs'
            }`}
          >
            {j.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#B8864B] text-white text-[10px] font-bold uppercase tracking-wider">
                Most Popular for UAE Trade
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold text-[#222222]">{j.title}</h3>
              <p className="text-xs text-[#666666] mt-2 mb-6 leading-relaxed">{j.desc}</p>
              
              <div className="space-y-2.5 mb-8">
                {j.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-[#444444]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-neutral-200/60">
              <div className="text-xs font-bold text-[#B8864B] mb-3">{j.price}</div>
              <button
                onClick={() => onOpenConsultation(`Setup Inquiry: ${j.title}`)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#222222] hover:bg-[#B8864B] text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Inquire About {j.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LicenseTypes;
