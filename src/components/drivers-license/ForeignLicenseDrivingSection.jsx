import React from 'react';
import { 
  AlertTriangle, 
  Plane, 
  UserCheck, 
  ShieldAlert, 
  FileX, 
  CheckCircle2 
} from 'lucide-react';

export const ForeignLicenseDrivingSection = () => {
  return (
    <section className="space-y-6 pt-6 border-t border-[#EFEAE2]">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B8864B]">
            Section 04
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#222222] tracking-tight">
          Driving with a Foreign License: Tourists vs. Residents
        </h2>
        <p className="text-sm text-[#555555] mt-1 leading-relaxed">
          The legal authorization to drive on a foreign license depends strictly on your current immigration status in the United Arab Emirates.
        </p>
      </div>

      {/* Two Column Comparison: Tourist vs Resident */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* Tourist Card */}
        <div className="p-5 rounded-2xl bg-white border border-[#EFEAE2] space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center">
              <Plane className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#976A36] block">
                Visit / Tourist Visa Holders
              </span>
              <h3 className="text-sm font-bold text-[#222222]">
                Driving Permitted (Rental Cars)
              </h3>
            </div>
          </div>

          <p className="text-xs text-[#555555] leading-relaxed">
            Tourists visiting Dubai may legally drive <strong>rental vehicles</strong> using their valid home country driver’s license (if issued by an approved nation) or an International Driving Permit (IDP) accompanied by their passport and entry tourist visa.
          </p>

          <div className="space-y-1.5 pt-2 border-t border-neutral-100 text-[11px] text-[#444444]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
              <span>Rental cars permitted</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Private cars restricted unless first-degree relative</span>
            </div>
          </div>
        </div>

        {/* Resident Card */}
        <div className="p-5 rounded-2xl bg-[#FAF5EC]/80 border border-[#B8864B] space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#B8864B] text-white flex items-center justify-center">
              <UserCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#B8864B] block">
                UAE Residence Visa Holders
              </span>
              <h3 className="text-sm font-bold text-[#222222]">
                Foreign License Prohibited
              </h3>
            </div>
          </div>

          <p className="text-xs text-[#555555] leading-relaxed">
            The moment your UAE residence visa is issued and Emirates ID is approved, <strong>you are legally prohibited from driving on a foreign license or IDP</strong>. You must immediately convert your foreign license or pass the RTA driving test.
          </p>

          <div className="space-y-1.5 pt-2 border-t border-[#E6D7C3] text-[11px] text-[#444444]">
            <div className="flex items-center gap-2">
              <FileX className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Foreign licenses invalid for residents</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
              <span>Auto insurance void if driving without UAE license</span>
            </div>
          </div>
        </div>

      </div>

      {/* Critical Legal Warning Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border-l-4 border-red-500 border-y border-r border-[#EFEAE2] flex items-start gap-3.5">
        <ShieldAlert className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-xs font-bold text-[#222222] uppercase tracking-wider">
            Important Insurance & Legal Warning for New Residents
          </h4>
          <p className="text-xs text-[#555555] leading-relaxed">
            If you are involved in a traffic accident as a UAE resident without an official UAE driving license, your motor insurance policy is completely nullified. You will be held personally liable for all civil damages and face criminal penalties for operating a vehicle unlicensed.
          </p>
        </div>
      </div>
    </section>
  );
};
