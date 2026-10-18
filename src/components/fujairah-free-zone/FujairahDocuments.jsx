import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  FileCheck2, 
  UserCheck, 
  Building2, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  Download,
  FileText
} from 'lucide-react';

export const FujairahDocuments = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState('individual');

  const individualDocs = [
    { title: 'Clear Passport Copy', desc: 'Valid for at least 6 months with clear photograph and bio-data page.' },
    { title: 'Recent Passport-Sized Photographs', desc: 'White background digital photos conforming to UAE ICA immigration standards.' },
    { title: 'FFZA Application & Investor Information Form', desc: 'Completed and signed authority application outlining proposed trade name and activities.' },
    { title: 'Current UAE Visa & Emirates ID (if resident)', desc: 'For existing UAE residents, copies of current residence visa and Emirates ID card.' },
    { title: 'No Objection Certificate (NOC) (if applicable)', desc: 'Required from current UAE employer/sponsor only if the applicant is employed on a mainland/freezone work visa.' },
    { title: 'Manager / Director Identification', desc: 'Passport copy, resume (CV), and specimen signature for the designated General Manager.' },
    { title: 'Bank Reference Letter or Financial Records (if requested)', desc: 'Applicable for specialized activities or industrial accounts where requested by the authority.' }
  ];

  const corporateDocs = [
    { title: 'Certificate of Incorporation / Registration', desc: 'Official certificate evidencing legal existence of the overseas or UAE parent corporation.' },
    { title: 'Memorandum & Articles of Association (MOA/AOA)', desc: 'Constitutive corporate charter and governance statutes of the parent company.' },
    { title: 'Board Resolution Approving Fujairah Entity', desc: 'Formal resolution passed by parent board resolving to establish an FZE, FZC, or Branch in Fujairah Free Zone and appointing the authorized manager.' },
    { title: 'Power of Attorney (POA)', desc: 'Legalized POA authorizing the designated representative to sign contracts and negotiate with FFZA.' },
    { title: 'Ultimate Beneficial Ownership (UBO) Declaration', desc: 'Complete organizational hierarchy identifying natural person beneficial owners holding ≥ 25% equity.' },
    { title: 'Certificate of Good Standing (or Incumbency)', desc: 'Confirming company is actively trading and up to date with registry filings.' },
    { title: 'Audited Financial Statements (where applicable)', desc: 'Latest financial accounts for the parent company, particularly for industrial or banking facilities.' },
    { title: 'Notarization, MOFA Attestation & Legalization', desc: 'Foreign documents must be notarized in the home jurisdiction, attested by the UAE Embassy, and legalized by the UAE Ministry of Foreign Affairs (MOFA).' }
  ];

  const specializedDocs = [
    { title: 'Comprehensive Business Feasibility Plan', desc: 'Required for industrial, manufacturing, packaging, and large-scale maritime warehousing facilities.' },
    { title: 'Machinery, Equipment & Power Requirements Specification', desc: 'Detailed technical load schedules for high-voltage electricity, industrial water, and environmental effluent.' },
    { title: 'Environmental Impact Assessment (EIA)', desc: 'Submitted for industrial factories, refining, or chemical processing to secure Fujairah Municipality Environmental Department approval.' },
    { title: 'Civil Defense Life Safety & Hazardous Goods Approvals', desc: 'Required for facilities storing or handling volatile, flammable, or pressurized commodities.' },
    { title: 'Port Authority Harbor Clearances (for Marine Activities)', desc: 'Port of Fujairah Harbour Master pre-clearance for ship chandlery, bunkering support, and marine vessel agency operations.' }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <FileText className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>DOCUMENTATION & COMPLIANCE REQUIREMENTS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Documents Required for Registration
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Documentation criteria vary based on whether your entity is established by individual shareholders, an existing parent corporation, or involves specialized industrial or maritime activities.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2.5 border-b border-[#E6D7C3] pb-3">
          <button
            type="button"
            onClick={() => setActiveTab('individual')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'individual'
                ? 'bg-[#8C5E28] text-white shadow-xs'
                : 'bg-white text-[#475569] hover:bg-[#FAF5EC] border border-[#E6D7C3]'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Individual Shareholders</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('corporate')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'corporate'
                ? 'bg-[#8C5E28] text-white shadow-xs'
                : 'bg-white text-[#475569] hover:bg-[#FAF5EC] border border-[#E6D7C3]'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Corporate Shareholders & Branches</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('specialized')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'specialized'
                ? 'bg-[#8C5E28] text-white shadow-xs'
                : 'bg-white text-[#475569] hover:bg-[#FAF5EC] border border-[#E6D7C3]'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Specialized Industrial & Marine Approvals</span>
          </button>
        </div>

        {/* Active Checklist Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(activeTab === 'individual' 
                ? individualDocs 
                : activeTab === 'corporate' 
                ? corporateDocs 
                : specializedDocs
              ).map((doc, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#FCFAF8] border border-[#DECBB5] hover:border-[#B8864B] transition-all flex items-start gap-3.5 group shadow-2xs"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center shrink-0 text-[#B8864B] group-hover:scale-105 transition-transform mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#0F172A] font-heading">
                      {doc.title}
                    </h4>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {doc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Verification & Legalization Support */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#DECBB5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#0F172A] font-heading flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
                  Need MOFA Document Attestation or Legal Translation?
                </h4>
                <p className="text-xs text-[#64748B]">
                  Brightlink coordinates certified legal translation, embassy attestation, and Ministry of Foreign Affairs (MOFA) legalization for foreign corporate papers.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onOpenConsultation(`Document Audit: ${activeTab}`)}
                className="px-5 py-2.5 rounded-xl bg-[#8C5E28] hover:bg-[#6D4518] text-white text-xs font-bold whitespace-nowrap cursor-pointer transition-colors shadow-xs shrink-0 flex items-center gap-1.5"
              >
                <span>Request Document Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Qualification Disclaimer */}
        <div className="p-5 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] text-xs text-[#6D4518] flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-[#8C5E28]">
              Documentary Specificity Notice
            </p>
            <p className="leading-relaxed">
              Not every applicant must submit every document listed. The exact paperwork depends on whether the shareholder is an individual or corporate body, the licence activity category, and whether external environmental, municipal, or security clearances are mandated.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
