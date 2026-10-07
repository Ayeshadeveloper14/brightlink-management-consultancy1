import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCheck2, 
  Building2, 
  Stamp, 
  UserCheck, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Share2
} from 'lucide-react';

export const BranchRequiredDocuments = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState('all');
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    { id: 'all', label: 'All Documents' },
    { id: 'parent', label: 'Parent Corporate Files' },
    { id: 'manager', label: 'Representative & Manager' },
    { id: 'branch', label: 'UAE Branch & Premises' }
  ];

  const documents = [
    {
      category: 'parent',
      title: 'Parent Certificate of Incorporation',
      desc: 'Official Certificate of Registration / Incorporation from the home country corporate registry, attested up to UAE MOFA.',
      tag: 'Legal Origin',
      mandatory: true
    },
    {
      category: 'parent',
      title: 'Parent Commercial License & Good Standing',
      desc: 'Valid operating license or Certificate of Good Standing verifying that the parent enterprise is actively trading in its home country.',
      tag: 'Operating Standing',
      mandatory: true
    },
    {
      category: 'parent',
      title: 'Parent Memorandum & Articles (MOA/AOA)',
      desc: 'Certified copy of the constitutional charter, bylaws, and articles of association detailing parent entity objects and corporate governance.',
      tag: 'Constitutional',
      mandatory: true
    },
    {
      category: 'parent',
      title: 'Parent Board Resolution',
      desc: 'Official resolution from the parent board approving the establishment of the UAE branch/representative office, allocating funds, and appointing the General Manager.',
      tag: 'Corporate Mandate',
      mandatory: true
    },
    {
      category: 'parent',
      title: 'Audited Financial Statements (2 Years)',
      desc: 'Recent balance sheets and audited financial statements of the parent company where mandated by licensing authorities to confirm solvency.',
      tag: 'Financial Standing',
      mandatory: false
    },
    {
      category: 'parent',
      title: 'Corporate Profile & Activity Overview',
      desc: 'Comprehensive company profile detailing parent corporate background, global operations, and proposed commercial activities in Dubai.',
      tag: 'Business Scope',
      mandatory: true
    },
    {
      category: 'manager',
      title: 'Power of Attorney (POA) for Manager',
      desc: 'Notarized and attested Power of Attorney executed by the parent company granting executive authority to the appointed UAE General Manager.',
      tag: 'Legal Authority',
      mandatory: true
    },
    {
      category: 'manager',
      title: 'Representative Passport Copies & Bio',
      desc: 'Color passport copies (minimum 6 months remaining validity), resume, and contact details for the designated UAE General Manager.',
      tag: 'Manager ID',
      mandatory: true
    },
    {
      category: 'manager',
      title: 'Representative UAE Residency / Entry Info',
      desc: 'Copy of existing UAE Residence Visa and Emirates ID if current resident, or tourist entry stamp with unified number (UID) if overseas.',
      tag: 'Immigration',
      mandatory: true
    },
    {
      category: 'branch',
      title: 'Proposed UAE Office Lease & Ejari',
      desc: 'Commercial tenancy contract and certified Ejari certificate for an approved physical office suite or dedicated commercial facility in Dubai.',
      tag: 'Physical Ejari',
      mandatory: true
    },
    {
      category: 'branch',
      title: 'Local Service Agent (LSA) Agreement',
      desc: 'Notarized Local Service Agent contract where mandated by specific activity regulations solely for administrative government liaison.',
      tag: 'Statutory Liaison',
      mandatory: false
    },
    {
      category: 'branch',
      title: 'Ministry of Economy Clearance Dossier',
      desc: 'Registration application and supporting documents filed with the UAE Ministry of Economy (MOE) for formal foreign branch registration.',
      tag: 'Federal Entry',
      mandatory: true
    }
  ];

  const filtered = activeTab === 'all'
    ? documents
    : documents.filter(d => d.category === activeTab);

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>International Filing Checklist</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Required Documents for Branch Setup
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            International branch filings require cross-border legalisation. Brigitlink audits every parent corporate document prior to submission to ensure compliance with UAE Ministry of Economy and DET requirements.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'bg-[#FAF7F0] border border-[#DECBB5] text-[#475569] hover:bg-[#FAF5EC]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((doc, idx) => (
            <motion.div
              key={doc.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              className="bg-[#FAF7F0] rounded-2xl p-5 border border-[#DECBB5] shadow-xs flex flex-col justify-between hover:border-[#B8864B] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8C5E28] bg-white px-2.5 py-1 rounded-md border border-[#DECBB5]/70">
                    {doc.tag}
                  </span>
                  {doc.mandatory ? (
                    <span className="text-[10px] font-bold text-[#B8864B] flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-[#B8864B]" />
                      Mandatory
                    </span>
                  ) : (
                    <span className="text-[10px] font-medium text-[#64748B]">
                      Where Applicable
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#0F172A] font-heading mb-2">
                  {doc.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {doc.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#DECBB5]/60 flex items-center justify-between text-[11px] text-[#64748B]">
                <span>Attestation Requirement</span>
                <span className="text-[#8C5E28] font-bold">MOFA Legalised</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mandatory Official Disclaimer Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-[#FCFAF8] border border-[#B8864B]/40 shadow-xs flex items-start gap-3.5 max-w-4xl mx-auto">
          <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-[#0F172A] font-heading">
              Cross-Border Regulatory Notice:
            </h4>
            <p className="text-xs text-[#475569] leading-relaxed font-sans">
              <strong>Exact requirements may vary depending on the jurisdiction, parent company, activity and applicable authority regulations.</strong> Corporate documentation issued outside the UAE must be attested by the UAE Embassy in the parent jurisdiction and by the UAE Ministry of Foreign Affairs (MOFA), accompanied by certified Arabic legal translation.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center mt-8">
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Parent Document Attestation Audit')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white text-xs font-bold hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-md shadow-[#B8864B]/20"
          >
            <span>Request Parent Company Document Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default BranchRequiredDocuments;
