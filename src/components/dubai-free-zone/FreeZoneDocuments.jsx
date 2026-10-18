import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCheck, 
  User, 
  Building2, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  Download
} from 'lucide-react';

export const FreeZoneDocuments = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState('individual');

  const individualDocs = [
    {
      title: 'Valid Passport Copy',
      description: 'Clear color copy of the photo and bio-data page with minimum 6 months validity remaining.',
      required: true
    },
    {
      title: 'UAE Visa / Entry Stamp Copy',
      description: 'Current tourist visa, visit visa with entry stamp, or existing residence visa page (if applicable).',
      required: true
    },
    {
      title: 'Passport-Sized Photograph',
      description: 'Recent high-resolution digital photograph taken against a clean white background for visa file.',
      required: true
    },
    {
      title: '3 Proposed Trade Names',
      description: 'Three unique trade name choices in order of preference adhering to UAE naming guidelines.',
      required: true
    },
    {
      title: 'Emirates ID Copy (For UAE Residents)',
      description: 'Both front and back copies of Emirates ID if the applicant is already a resident of the UAE.',
      required: false,
      note: 'Only applicable to existing UAE residents'
    },
    {
      title: 'No Objection Certificate (NOC)',
      description: 'Written NOC from current employer if currently employed in the UAE. (Many modern free zones waive this requirement).',
      required: false,
      note: 'Varies by chosen Free Zone Authority'
    }
  ];

  const corporateDocs = [
    {
      title: 'Certificate of Incorporation',
      description: 'Official incorporation or registration certificate of the parent company issued by its home registrar.',
      required: true
    },
    {
      title: 'Memorandum & Articles of Association (MOA/AOA)',
      description: 'Complete constitutional documents detailing parent company ownership, governance, and powers.',
      required: true
    },
    {
      title: 'Board Resolution',
      description: 'Formal resolution passed by the board of directors approving the incorporation of the Dubai Free Zone entity.',
      required: true
    },
    {
      title: 'Power of Attorney (POA)',
      description: 'Legal authorization empowering the appointed general manager or Brightlink legal representative.',
      required: true
    },
    {
      title: 'Passports & Bio-Data of Directors',
      description: 'Passport copies and contact credentials for all appointed directors, managers, and legal signatories.',
      required: true
    },
    {
      title: 'UAE MOFA & Embassy Legalization',
      description: 'Corporate documents issued outside the UAE must be notarized and attested by the UAE Embassy and Ministry of Foreign Affairs (MOFA).',
      required: true,
      note: 'Brightlink provides in-house legal attestation'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-2xs">
            <FileCheck className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>DOCUMENTATION CHECKLIST</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Required Documents for Dubai Free Zone Setup
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Dubai free zones are renowned for straightforward and minimal paperwork. Review the required documentation depending on whether you are incorporating as an individual or a corporate holding company.
          </p>

          {/* Tab Selector */}
          <div className="flex items-center justify-center pt-4">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#E6D7C3] shadow-xs">
              <button
                type="button"
                onClick={() => setActiveTab('individual')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer font-heading ${
                  activeTab === 'individual'
                    ? 'bg-[#B8864B] text-white shadow-xs'
                    : 'text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Individual Shareholders</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('corporate')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer font-heading ${
                  activeTab === 'corporate'
                    ? 'bg-[#B8864B] text-white shadow-xs'
                    : 'text-[#475569] hover:text-[#0F172A]'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Corporate Shareholding / Subsidiary</span>
              </button>
            </div>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {(activeTab === 'individual' ? individualDocs : corporateDocs).map((doc, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-[#E6D7C3] shadow-xs hover:border-[#DECBB5] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] border border-[#DECBB5] text-[#B8864B] flex items-center justify-center font-bold text-xs font-heading">
                    0{idx + 1}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    doc.required 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {doc.required ? 'Mandatory' : 'Conditional'}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#0F172A] font-heading mb-1.5">
                  {doc.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {doc.description}
                </p>
              </div>

              {doc.note && (
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] text-[#8C5E28] font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0 text-[#B8864B]" />
                  <span>{doc.note}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Document Assistance Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E6D7C3] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
              <CheckCircle2 className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#0F172A] font-heading">
                Need Help with Legal Translations or MOFA Attestation?
              </h4>
              <p className="text-xs text-[#64748B] max-w-2xl leading-relaxed">
                Brightlink operates certified in-house legal translation and Ministry of Foreign Affairs (MOFA) attestation services, ensuring all foreign documents are compliant with UAE Free Zone Authorities without delays.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation('Dubai Free Zone Document Verification')}
            className="px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0 font-heading shadow-xs"
          >
            Verify My Documents
          </button>
        </div>

      </div>
    </section>
  );
};
