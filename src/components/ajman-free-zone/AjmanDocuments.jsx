import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCheck2, 
  User, 
  Building2, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle,
  FileText,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export const AjmanDocuments = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState('individual');
  const shouldReduceMotion = useReducedMotion();

  const individualDocs = [
    { title: 'Color Passport Copy', desc: 'Valid for a minimum of 6 months, clear high-resolution scanned page showing photo, personal details, and signature.' },
    { title: 'Passport-Sized Photographs', desc: 'Recent color photographs with white background in high-resolution digital format.' },
    { title: 'UAE Entry Stamp / Visa Copy', desc: 'For individuals residing in or previously visiting the UAE: tourist visa, visit visa, or current residency visa.' },
    { title: 'Emirates ID Copy (If Resident)', desc: 'Front and back color copy of current Emirates ID card for UAE residents.' },
    { title: 'Proposed Company Trade Names', desc: 'At least 3 preferred trade names in order of priority following AFZ nomenclature rules.' },
    { title: 'Shareholder & Manager Contact Details', desc: 'Residential address, email, contact telephone number, and brief biographical summary.' }
  ];

  const corporateDocs = [
    { title: 'Certificate of Incorporation', desc: 'Certified copy of the parent company’s Certificate of Incorporation or commercial registration.' },
    { title: 'Memorandum & Articles of Association (MOA/AOA)', desc: 'Official constitutional documents detailing company ownership, capital, and operational objects.' },
    { title: 'Notarized Board Resolution', desc: 'Official resolution from the parent board approving the formation of the AFZ entity or branch and appointing the General Manager.' },
    { title: 'Power of Attorney (POA)', desc: 'Authorizing the appointed Manager or Brightlink representative to execute formation procedures.' },
    { title: 'Good Standing Certificate / Commercial Register', desc: 'Official certificate from the home registry confirming active operational legal standing.' },
    { title: 'Passports of Directors & Appointed Manager', desc: 'Clear passport copies and photographs of all appointed corporate directors and the designated branch manager.' }
  ];

  const conditionalDocs = [
    { title: 'No-Objection Certificate (NOC)', desc: 'Required only for UAE residents currently employed on an onshore employment visa if required by their current visa sponsor.' },
    { title: 'Professional Business Plan', desc: 'Required for industrial manufacturing projects, maritime operations, and specific specialized service activities.' },
    { title: 'Attested Educational Degrees', desc: 'Mandatory for regulated professional services including management consultancy, accounting, or architectural engineering.' },
    { title: 'External Government Approvals', desc: 'Ministry of Health for pharmaceutical goods, Ministry of Industry for heavy manufacturing, or Civil Defense for specialized storage.' },
    { title: 'Lease Agreement / Tenancy Contract', desc: 'For dedicated offices or warehouses, registered tenancy contracts are required prior to final licence issuance.' },
    { title: 'MOFA Attestation (Foreign Documents)', desc: 'Corporate documents issued outside the UAE must be notarized, attested by the UAE Embassy in the home country, and legalized by UAE MOFA.' }
  ];

  return (
    <section id="ajman-documents" className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-xs">
            <FileCheck2 className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>APPLICATION DOSSIER REQUIREMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Documents Required for Ajman Free Zone Setup
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            The documentation required varies depending on whether shareholders are private individuals, existing UAE businesses, or foreign corporations.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('individual')}
            className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider font-heading transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activeTab === 'individual'
                ? 'bg-[#B8864B] text-white shadow-sm'
                : 'bg-white text-[#475569] border border-[#DECBB5] hover:border-[#B8864B]'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Individual Shareholders</span>
          </button>

          <button
            onClick={() => setActiveTab('corporate')}
            className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider font-heading transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activeTab === 'corporate'
                ? 'bg-[#B8864B] text-white shadow-sm'
                : 'bg-white text-[#475569] border border-[#DECBB5] hover:border-[#B8864B]'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Corporate Shareholders & Branches</span>
          </button>

          <button
            onClick={() => setActiveTab('conditional')}
            className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider font-heading transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activeTab === 'conditional'
                ? 'bg-[#B8864B] text-white shadow-sm'
                : 'bg-white text-[#475569] border border-[#DECBB5] hover:border-[#B8864B]'
            }`}
          >
            <AlertCircle className="w-4 h-4" />
            <span>Conditional & Specialized Requirements</span>
          </button>
        </div>

        {/* Documents Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {(activeTab === 'individual' ? individualDocs : activeTab === 'corporate' ? corporateDocs : conditionalDocs).map((doc, idx) => (
            <motion.div
              key={doc.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="bg-white rounded-2xl p-6 border border-[#E6D7C3] hover:border-[#B8864B]/60 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C5E28] bg-[#FAF5EC] px-2 py-0.5 rounded-full border border-[#DECBB5]">
                    Doc #{idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                  {doc.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {doc.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F1E8DC] text-[11px] font-semibold text-[#8C5E28] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                <span>{activeTab === 'conditional' ? 'Conditional Requirement' : 'Mandatory Document'}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Document Assistance Box */}
        <div className="rounded-2xl bg-white border border-[#DECBB5] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0F172A] font-heading mb-1">
                Need Help with MOA Drafting or Foreign Attestations?
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Brightlink assists with drafting compliant bilingual Board Resolutions, constitutional MOA/AOAs, and coordinating UAE Ministry of Foreign Affairs (MOFA) document legalizations.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenConsultation('Ajman Document Preparation Help')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#8C5E28] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs whitespace-nowrap cursor-pointer shrink-0"
          >
            Review My Documents
          </button>
        </div>

      </div>
    </section>
  );
};
