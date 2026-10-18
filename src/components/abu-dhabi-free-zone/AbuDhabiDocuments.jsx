import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCheck, 
  User, 
  Building2, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';

export const AbuDhabiDocuments = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState('individual');

  const individualDocs = [
    {
      title: 'Valid Passport Copy',
      description: 'Clear color copy of the photo and personal details page with at least 6 months validity remaining.',
      nature: 'Typically Required'
    },
    {
      title: 'Passport-Sized Photograph',
      description: 'Recent high-resolution color photograph with a white background for visa and registry files.',
      nature: 'Typically Required'
    },
    {
      title: 'Three Proposed Trade Names',
      description: 'Three distinct name options ranked in order of preference complying with authority naming rules.',
      nature: 'Typically Required'
    },
    {
      title: 'Emirates ID & UAE Visa Copy',
      description: 'Front and back copies of Emirates ID and residency visa page (only if the applicant currently resides in the UAE).',
      nature: 'Conditional (Residents)'
    },
    {
      title: 'Proof of Residential Address',
      description: 'Recent utility bill or official bank statement showing residential address (frequently requested by ADGM).',
      nature: 'Conditional (Authority-Specific)'
    },
    {
      title: 'Brief Business Plan / CV',
      description: 'Summary of commercial activities, shareholder background, and operational projections (required for ADGM, tech hubs, and industrial zones).',
      nature: 'Conditional (Activity-Specific)'
    }
  ];

  const corporateDocs = [
    {
      title: 'Certificate of Incorporation',
      description: 'Official registration certificate of the parent company issued by its home government registry.',
      nature: 'Required for Corporate Entities'
    },
    {
      title: 'Memorandum & Articles of Association (MOA/AOA)',
      description: 'Certified constitutional documents detailing parent company ownership, governance, and operating rules.',
      nature: 'Required for Corporate Entities'
    },
    {
      title: 'Board Resolution for Abu Dhabi Setup',
      description: 'Formal corporate resolution passed by parent directors approving the new entity and appointing an authorized signatory.',
      nature: 'Required for Corporate Entities'
    },
    {
      title: 'Power of Attorney (POA)',
      description: 'Legal authorization granting powers to the appointed general manager or Brightlink legal representative.',
      nature: 'Required for Corporate Entities'
    },
    {
      title: 'Director & Ultimate Beneficial Owner (UBO) Passports',
      description: 'Passport copies and identification documents for all appointed directors, managers, and ultimate owners.',
      nature: 'Required for Corporate Entities'
    },
    {
      title: 'UAE MOFA & Embassy Legalization',
      description: 'For corporate entities established outside the UAE, constitutional documents must be notarized and attested up to the UAE Embassy and Ministry of Foreign Affairs (MOFA).',
      nature: 'Mandatory for Overseas Parents'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <FileCheck className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>DOCUMENTATION FRAMEWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Documents Required for Abu Dhabi Free Zone Setup
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Document requirements vary depending on the chosen free zone authority, your legal structure, whether the shareholder is an individual or an existing corporate entity, and the specific business activity.
          </p>

          {/* Tab Selector */}
          <div className="flex items-center justify-center pt-4">
            <div className="inline-flex p-1.5 rounded-2xl bg-[#FAF7F0] border border-[#E6D7C3] shadow-xs">
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
                <span>Corporate Shareholder / Branch</span>
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
              className="bg-[#FAF7F0]/40 rounded-2xl p-6 border border-[#E6D7C3] shadow-xs hover:border-[#DECBB5] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#DECBB5] text-[#B8864B] flex items-center justify-center font-bold text-xs font-heading">
                    0{idx + 1}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white text-[#8C5E28] border border-[#DECBB5]/70">
                    {doc.nature}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#0F172A] font-heading mb-1.5">
                  {doc.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center gap-1.5 text-[11px] text-[#475569]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
                <span>Verified by Brightlink Review</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Qualifier Notice */}
        <div className="bg-[#FAF7F0] rounded-3xl p-6 sm:p-8 border border-[#E6D7C3] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
              <AlertCircle className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#0F172A] font-heading">
                Tailored Document Checklist Based on Your Circumstances
              </h4>
              <p className="text-xs text-[#64748B] max-w-2xl leading-relaxed">
                Not every document listed above is mandatory for every applicant. For example, ADGM holding entities follow distinct compliance criteria compared to light manufacturing in KEZAD or creative permits in twofour54. Contact Brightlink for a custom requirements checklist.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation('Abu Dhabi Document Checklist Verification')}
            className="px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0 font-heading shadow-xs"
          >
            Get Custom Checklist
          </button>
        </div>

      </div>
    </section>
  );
};
