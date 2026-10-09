import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Download, 
  Printer, 
  ArrowRight, 
  FileCheck2, 
  Globe2, 
  HelpCircle,
  AlertCircle,
  FileSignature
} from 'lucide-react';

export const FamilyDocumentChecklist = ({ onOpenConsultation }) => {
  const [selectedProfile, setSelectedProfile] = useState('spouse');

  const checklists = {
    spouse: {
      title: 'Spouse (Wife or Husband) Visa Documents',
      sponsorDocs: [
        { name: 'Sponsor Passport Copy with valid UAE Residence Visa', required: true, note: 'Must have at least 6 months validity' },
        { name: 'Original Sponsor Emirates ID Card', required: true, note: 'Physical card needed for digital verification' },
        { name: 'Attested Salary Certificate (Free Zone/Govt) or MOHRE Contract (Mainland)', required: true, note: 'Showing minimum salary AED 4,000 / month' },
        { name: 'Registered Tenancy Contract (Ejari Certificate)', required: true, note: 'Under sponsor or spouse’s name' },
        { name: 'Recent DEWA Electricity & Water Bill', required: true, note: 'Dated within last 2 months' },
        { name: 'Bank Account Statement (3 months)', required: false, note: 'Required if requested by immigration officer' }
      ],
      dependentDocs: [
        { name: 'Original Dependent Passport', required: true, note: 'Minimum 6 months validity prior to application' },
        { name: '4 Passport-Size Photographs', required: true, note: 'White background, 35x45mm, compliant with ICP guidelines' },
        { name: 'Attested Original Marriage Certificate', required: true, note: 'Home Country MOFA + UAE Embassy + MOFA UAE' },
        { name: 'Certified Legal Arabic Translation of Marriage Certificate', required: true, note: 'Ministry of Justice (MOJ) stamp required' },
        { name: 'Current UAE Visa / Tourist Visa / Cancellation Paper (if inside UAE)', required: true, note: 'Needed for in-country status change' }
      ]
    },
    children: {
      title: 'Children (Sons up to 25 & Daughters) Documents',
      sponsorDocs: [
        { name: 'Sponsor Passport Copy & Valid Residence Visa', required: true, note: 'Active UAE residency status' },
        { name: 'Original Sponsor Emirates ID', required: true, note: 'For ICP digital verification' },
        { name: 'Valid MOHRE Employment Contract or Salary Certificate', required: true, note: 'Minimum AED 4,000 / month' },
        { name: 'Registered Tenancy Contract (Ejari)', required: true, note: 'Valid residential apartment or villa' },
        { name: 'Recent DEWA / Utility Bill', required: true, note: 'Active utility connection' }
      ],
      dependentDocs: [
        { name: 'Original Child Passport', required: true, note: 'Minimum 6 months validity' },
        { name: '4 Passport Photographs (White Background)', required: true, note: 'High resolution digital copy acceptable' },
        { name: 'Attested Original Birth Certificate', required: true, note: 'Showing both parents’ names matching passports' },
        { name: 'Certified Arabic Legal Translation of Birth Certificate', required: true, note: 'MOJ accredited translator stamp' },
        { name: 'College / University Continuation Letter (for Sons 18-25)', required: true, note: 'Proves current student enrollment or single status declaration' },
        { name: 'Undertaking of Singlehood (for Daughters above 18)', required: true, note: 'Signed declaration confirming unmarried status' }
      ]
    },
    parents: {
      title: 'Parents (Both Mother & Father) Visa Documents',
      sponsorDocs: [
        { name: 'Sponsor Passport Copy & Valid UAE Visa', required: true, note: 'Senior executive, investor, or employee' },
        { name: 'Original Sponsor Emirates ID', required: true, note: 'Physical ID verification' },
        { name: 'Official Salary Certificate / MOHRE Contract', required: true, note: 'Showing minimum basic + allowances of AED 20,000 / month' },
        { name: 'Original Bank Statements (Last 6 Months)', required: true, note: 'Stamped by UAE bank showing regular salary credits' },
        { name: 'Registered 2-Bedroom Tenancy Contract (Ejari)', required: true, note: 'Mandatory minimum 2-bedroom accommodation' },
        { name: 'Recent DEWA Electricity Bill', required: true, note: 'Confirming residence occupancy' }
      ],
      dependentDocs: [
        { name: 'Original Passports for Both Mother and Father', required: true, note: 'Must sponsor both parents together' },
        { name: 'White Background Photographs (4 each)', required: true, note: '35x45mm ICP compliant' },
        { name: 'Attested Relationship Proof (Sponsor’s Birth Certificate)', required: true, note: 'Proving biological relationship to both parents' },
        { name: 'Consular Sole Dependency Certificate / Affidavit', required: true, note: 'Issued by Home Country Embassy/Consulate in UAE' },
        { name: 'Proof of Death / Divorce Certificate (if sponsoring single parent)', required: false, note: 'Fully attested by MOFA if one parent is deceased/divorced' },
        { name: 'Comprehensive Private Health Insurance Policy', required: true, note: 'Mandatory senior coverage for Dubai residency' }
      ]
    },
    newborn: {
      title: 'Newborn Baby (Born in the UAE) Documents',
      sponsorDocs: [
        { name: 'Father Passport Copy & Emirates ID', required: true, note: 'Sponsor legal identity' },
        { name: 'Mother Passport Copy & Emirates ID', required: true, note: 'Mother residency documents' },
        { name: 'Registered Tenancy Contract (Ejari)', required: true, note: 'Family home registration' },
        { name: 'MOHRE Contract / Salary Certificate', required: true, note: 'Active income verification' }
      ],
      dependentDocs: [
        { name: 'Official UAE Ministry of Health Birth Certificate', required: true, note: 'Original bilingual certificate in Arabic & English' },
        { name: 'Original Attested Marriage Certificate of Parents', required: true, note: 'Legalized by MOFA UAE' },
        { name: 'Child Passport issued by Embassy / Consulate in UAE', required: true, note: 'Issued within 120 days from birth' },
        { name: '4 Passport-Size Photographs with White Background', required: true, note: 'Newborn compliant format' }
      ]
    }
  };

  const currentData = checklists[selectedProfile];

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F2] border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8C6230]">
              Documentation & Legalization
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight font-heading">
            Required Documents Checklist
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#4B5563] leading-relaxed">
            Select the family member you intend to sponsor to view the precise document requirements. Brightlink pre-audits all documents free of charge before submitting to GDRFA or ICP to guarantee zero rejection.
          </p>
        </div>

        {/* Profile Filter Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex flex-wrap p-1 bg-white rounded-xl border border-[#E6D7C3] shadow-xs">
            <button
              type="button"
              onClick={() => setSelectedProfile('spouse')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedProfile === 'spouse'
                  ? 'bg-[#B8864B] text-white shadow-xs'
                  : 'text-[#4B5563] hover:text-[#111827]'
              }`}
            >
              Spouse Visa
            </button>
            <button
              type="button"
              onClick={() => setSelectedProfile('children')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedProfile === 'children'
                  ? 'bg-[#B8864B] text-white shadow-xs'
                  : 'text-[#4B5563] hover:text-[#111827]'
              }`}
            >
              Children & Daughters
            </button>
            <button
              type="button"
              onClick={() => setSelectedProfile('parents')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedProfile === 'parents'
                  ? 'bg-[#B8864B] text-white shadow-xs'
                  : 'text-[#4B5563] hover:text-[#111827]'
              }`}
            >
              Parents Visa
            </button>
            <button
              type="button"
              onClick={() => setSelectedProfile('newborn')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedProfile === 'newborn'
                  ? 'bg-[#B8864B] text-white shadow-xs'
                  : 'text-[#4B5563] hover:text-[#111827]'
              }`}
            >
              Newborn Baby
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#4B5563] bg-white border border-[#E6D7C3] rounded-lg hover:bg-neutral-50 shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>Print Checklist</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenConsultation(`Document Pre-Check for ${currentData.title}`)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#B8864B] hover:bg-[#A07038] rounded-lg shadow-xs cursor-pointer"
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Free Document Audit</span>
            </button>
          </div>
        </div>

        {/* Two-Column Documents Table / List */}
        <div className="bg-white rounded-2xl border border-[#E6D7C3] shadow-sm p-6 sm:p-8 space-y-8">
          
          <div className="flex items-center justify-between border-b border-[#EFEAE2] pb-4">
            <div>
              <span className="text-[11px] font-bold text-[#8C6230] uppercase tracking-wider">
                Tailored Requirements
              </span>
              <h3 className="text-lg font-bold text-[#111827]">
                {currentData.title}
              </h3>
            </div>
            <span className="hidden sm:inline-block text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              Official GDRFA 2026 Criteria
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Column 1: Sponsor's Required Documents */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center font-bold text-xs">
                  A
                </div>
                <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wider font-heading">
                  Sponsor’s Documents (You)
                </h4>
              </div>

              <div className="space-y-2.5">
                {currentData.sponsorDocs.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#FCFAF8] border border-[#EFEAE2] hover:border-[#DECBB5] transition-all flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-[#1F2937]">
                          {item.name}
                        </span>
                        {item.required ? (
                          <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 shrink-0">
                            Required
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded shrink-0">
                            Optional
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#6B7280] mt-0.5">
                        {item.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Dependent's Required Documents */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center font-bold text-xs">
                  B
                </div>
                <h4 className="text-sm font-bold text-[#111827] uppercase tracking-wider font-heading">
                  Dependent’s Documents (Family Member)
                </h4>
              </div>

              <div className="space-y-2.5">
                {currentData.dependentDocs.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#FCFAF8] border border-[#EFEAE2] hover:border-[#DECBB5] transition-all flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-[#1F2937]">
                          {item.name}
                        </span>
                        {item.required ? (
                          <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 shrink-0">
                            Required
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded shrink-0">
                            Optional
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#6B7280] mt-0.5">
                        {item.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Attestation Chain Visual Infographic */}
          <div className="pt-6 border-t border-[#EFEAE2] bg-[#FAF5EC] rounded-xl p-5 border border-[#DECBB5]/60">
            <div className="flex items-center gap-2 mb-3">
              <Globe2 className="w-4 h-4 text-[#B8864B]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8C6230]">
                Official 4-Step Document Legalization Chain
              </h4>
            </div>

            <p className="text-xs text-[#555555] leading-relaxed mb-4">
              All non-UAE documents (Marriage certificates, birth certificates, custody orders) must complete this exact verification chain before immigration typing:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="bg-white p-3.5 rounded-lg border border-[#E6D7C3] space-y-1">
                <span className="text-[10px] font-black text-[#B8864B]">STEP 1</span>
                <p className="font-bold text-[#111827]">Home Country Notary & MOFA</p>
                <p className="text-[11px] text-[#666666]">Authenticated by Ministry of Foreign Affairs in country of origin.</p>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-[#E6D7C3] space-y-1">
                <span className="text-[10px] font-black text-[#B8864B]">STEP 2</span>
                <p className="font-bold text-[#111827]">UAE Embassy Abroad</p>
                <p className="text-[11px] text-[#666666]">Legalized by the UAE diplomatic mission located in home country.</p>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-[#E6D7C3] space-y-1">
                <span className="text-[10px] font-black text-[#B8864B]">STEP 3</span>
                <p className="font-bold text-[#111827]">UAE MOFA in Dubai</p>
                <p className="text-[11px] text-[#666666]">Electronic stamp verification by Ministry of Foreign Affairs UAE.</p>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-[#E6D7C3] space-y-1">
                <span className="text-[10px] font-black text-[#B8864B]">STEP 4</span>
                <p className="font-bold text-[#111827]">Legal Arabic Translation</p>
                <p className="text-[11px] text-[#666666]">Certified Ministry of Justice (MOJ) legal translation into Arabic.</p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#DECBB5] flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#6B7280]">
              <span>Documents not yet attested? Brightlink handles the entire MOFA and embassy legalization process for you.</span>
              <button
                type="button"
                onClick={() => onOpenConsultation('Document Attestation & Translation Assistance')}
                className="font-bold text-[#8C6230] hover:text-[#B8864B] underline cursor-pointer"
              >
                Inquire About Attestation Services →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FamilyDocumentChecklist;
