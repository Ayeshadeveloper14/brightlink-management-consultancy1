import React from 'react';
import { 
  CreditCard, 
  Smartphone, 
  ShieldCheck, 
  Clock, 
  Car, 
  Calendar 
} from 'lucide-react';

export const UaeDriverLicenseOverviewSection = () => {
  return (
    <section className="space-y-6 pt-6 border-t border-[#EFEAE2]">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B8864B]">
            Section 03
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] tracking-tight">
          UAE Driver's License Overview
        </h2>
        <p className="text-sm text-[#555555] mt-1 leading-relaxed">
          The UAE driving license is a secure, biometric document issued by the Roads and Transport Authority (RTA) in Dubai. It gives you full legal entitlement to operate private and commercial vehicles throughout the seven Emirates.
        </p>
      </div>

      {/* Grid of Key License Specs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-[#EFEAE2] space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 block">
            Expat Validity Term
          </span>
          <h4 className="text-base font-bold text-[#222222]">
            2 Years (Initial)
          </h4>
          <p className="text-xs text-[#666666] leading-relaxed">
            First-time expatriate licenses are valid for 2 years, renewable for 5-year periods thereafter.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#EFEAE2] space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center">
            <Car className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 block">
            Primary Category
          </span>
          <h4 className="text-base font-bold text-[#222222]">
            Light Vehicle (Cat 3)
          </h4>
          <p className="text-xs text-[#666666] leading-relaxed">
            Permits driving passenger cars, SUVs, and light transport vans up to 2.5 tons carrying up to 8 passengers.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#EFEAE2] space-y-2">
          <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center">
            <Smartphone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 block">
            Digital Wallet
          </span>
          <h4 className="text-base font-bold text-[#222222]">
            Smart Digital License
          </h4>
          <p className="text-xs text-[#666666] leading-relaxed">
            Synced directly to Apple Wallet and the Dubai Drive app, officially accepted during all road checks.
          </p>
        </div>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-[#EFEAE2] flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
        <p className="text-xs text-[#555555] leading-relaxed">
          <strong className="text-[#222222] font-semibold">Federal Portability: </strong>
          A driving license issued in Dubai is fully valid across Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah without requiring inter-emirate endorsement.
        </p>
      </div>
    </section>
  );
};
