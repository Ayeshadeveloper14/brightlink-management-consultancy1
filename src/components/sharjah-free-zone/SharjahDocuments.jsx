import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCheck, 
  User, 
  Building2, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';

export const SharjahDocuments = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState('individual');

  const individualDocs = [
    {
      title: 'Valid Passport Copy',
      description: 'Clear color copy of the passport bio-data and photo page with minimum 6 months validity remaining.',
      nature: 'Typically Required'
    },
    {
      title: 'Passport-Sized Photograph',
      description: 'Recent digital color photograph against a clean white background for visa and registry records.',
      nature: 'Typically Required'
    },
    {
      title: 'Three Proposed Trade Names',
      description: 'Three unique trade name choices in order of preference complying with authority naming bylaws.',
      nature: 'Typically Required'
    },
    {
      title: 'Emirates ID & UAE Visa Copy',
      description: 'Copies of Emirates ID and residency visa page (only applicable if the applicant currently resides in the UAE).',
      nature: 'Conditional (Residents)'
    },
    {
      title: 'Brief Business Plan / Activity Description',
      description: 'Overview of commercial operations, target clients, and projected workflow (frequently required for industrial or publishing setups).',
      nature: 'Conditional (Activity-Specific)'
    },
    {
      title: 'No Objection Certificate (NOC)',
      description: 'Written NOC from current employer if employed in the UAE (waived by many modern digital packages in SHAMS and SPC).',
      nature: 'Conditional (Authority-Specific)'
    }
  ];

  const corporateDocs = [
    {
      title: 'Certificate of Incorporation',
      description: 'Official incorporation or registration certificate of the parent company issued by its home government registry.',
      nature: 'Required for Corporate Entities'
    },
    {
      title: 'Memorandum & Articles of Association (MOA/AOA)',
      description: 'Certified constitutional documents detailing parent company ownership, governance, and powers.',
      nature: 'Required for Corporate Entities'
    },
    {
      title: 'Board Resolution for Sharjah Formation',
      description: 'Formal corporate resolution passed by parent directors approving the new entity and appointing an authorized signatory.',
      nature: 'Required for Corporate Entities'
    },
    {
      title: 'Power of Attorney (POA)',
      description: 'Legal authorization granting powers to the appointed general manager or Brightlink legal representative.',
      nature: 'Required for Corporate Entities'
    },
    {
      title: 'Director & UBO Passports & Profiles',
      description: 'Passport copies, CVs, and contact credentials for all appointed directors, managers, and ultimate beneficial owners.',
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
            <span>DOCUMENTATION REQUIREMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Documents Required for Sharjah Free Zone Formation
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            The documentation required depends on the selected free zone, company legal structure, shareholder profile, and business activity. Review the standard requirements below.
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
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                <span>Verified by Brightlink Review</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tailored Checklist Notice */}
        <div className="bg-[#FAF7F0] rounded-3xl p-6 sm:p-8 border border-[#E6D7C3] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
              <AlertCircle className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#0F172A] font-heading">
                Tailored Requirements for Your Specific Setup
              </h4>
              <p className="text-xs text-[#64748B] max-w-2xl leading-relaxed">
                Not all items above apply to every setup. A media consultant registering with SHAMS has different requirements than a manufacturing plant leasing a warehouse in Hamriyah or a publisher in SPC. Brightlink prepares an exact, customized checklist based on your profile.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation('Sharjah Document Checklist Request')}
            className="px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shrink-0 font-heading shadow-xs"
          >
            Get Custom Checklist
          </button>
        </div>

      </div>
    </section>
  );
};
