import React from 'react';
import { 
  Globe2, 
  CheckCircle2, 
  Award, 
  FileText, 
  Eye, 
  CreditCard, 
  ArrowRight 
} from 'lucide-react';

export const LicenseExchangeSection = () => {
  const eligibleRegions = [
    {
      region: 'GCC Countries',
      countries: 'Saudi Arabia, Kuwait, Bahrain, Oman, Qatar'
    },
    {
      region: 'Western & Northern Europe',
      countries: 'United Kingdom, Germany, France, Italy, Spain, Switzerland, Netherlands, Belgium, Austria, Sweden, Norway, Denmark, Ireland, Portugal, Greece, Finland, Luxembourg, Poland, Romania'
    },
    {
      region: 'North America',
      countries: 'United States of America, Canada (provinces with mutual recognition)'
    },
    {
      region: 'Asia-Pacific & Others',
      countries: 'Australia, New Zealand, Japan, South Korea, Singapore, China, Hong Kong, Turkey, South Africa'
    }
  ];

  return (
    <section className="space-y-6 pt-6 border-t border-[#EFEAE2]">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B8864B]">
            Section 05
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] tracking-tight">
          Exchange of Foreign Driving Licenses (Direct Swap)
        </h2>
        <p className="text-sm text-[#555555] mt-1 leading-relaxed">
          Citizens and residents holding valid driver’s licenses from over <strong>40 recognized countries</strong> can convert their foreign license directly into an official UAE driving license without undertaking driving lessons or road exams.
        </p>
      </div>

      {/* Eligible Country Groups */}
      <div className="bg-white rounded-2xl border border-[#EFEAE2] p-5 sm:p-6 space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#222222] flex items-center gap-2">
          <Globe2 className="w-4 h-4 text-[#B8864B]" />
          <span>Recognized Countries for Direct License Conversion</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {eligibleRegions.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-[#FCFAF8] border border-[#EFEAE2]">
              <span className="text-[11px] font-bold text-[#B8864B] uppercase block mb-1">
                {item.region}
              </span>
              <p className="text-xs text-[#444444] leading-relaxed">
                {item.countries}
              </p>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-neutral-400">
          *Note: The applicant must be a citizen of the issuing country or hold documented residency in that country when the foreign license was issued.
        </p>
      </div>

      {/* Golden Visa Direct Road Test Exemption Card */}
      <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#1C1A17] via-[#24211D] to-[#141311] text-white border border-[#B8864B]/30 shadow-md space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#B8864B]/30 text-[#F5D7A1] flex items-center justify-center border border-[#B8864B]/40">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#F5D7A1] block">
              Golden Visa Fast-Track Privilege
            </span>
            <h3 className="text-sm sm:text-base font-bold text-white">
              Direct Road Test Without Mandatory Classes
            </h3>
          </div>
        </div>

        <p className="text-xs text-neutral-300 leading-relaxed">
          If you hold a <strong>10-Year UAE Golden Visa</strong> and possess a valid driving license from a country not on the direct swap list (e.g., India, Pakistan, Philippines, Egypt, etc.), RERA and RTA regulations permit you to <strong>skip all mandatory 20+ hours of driving school classes</strong> and proceed directly to the final RTA road test!
        </p>
      </div>

      {/* Exchange Document Checklist */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EFEAE2] space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#222222]">
          Documents Required for Direct License Swap
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#555555]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
            <span>Original valid foreign driving license</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
            <span>Certified legal translation (if not in English/Arabic)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
            <span>RTA-approved eye test certificate (AED 140 - 180)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
            <span>Original Emirates ID & Passport with valid residency</span>
          </div>
        </div>
      </div>
    </section>
  );
};
