import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCheck2, 
  UserCheck, 
  Building2, 
  FileSignature, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';

export const LlcDocumentsRequired = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState('all');
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    { id: 'all', label: 'All Documents' },
    { id: 'shareholders', label: 'Shareholders & Manager' },
    { id: 'corporate', label: 'Corporate Shareholders' },
    { id: 'company', label: 'Company & Premises' }
  ];

  const documentList = [
    {
      category: 'shareholders',
      title: 'Shareholder Passport Copies',
      desc: 'Clear color copies of valid passports for all intended shareholders (minimum 6 months remaining validity).',
      tag: 'Shareholder ID',
      mandatory: true
    },
    {
      category: 'shareholders',
      title: 'UAE Visa / Entry Stamp & UID',
      desc: 'Copy of existing UAE Residence Visa and Emirates ID if resident; or tourist visa with entry stamp and unified number (UID) if non-resident.',
      tag: 'Immigration',
      mandatory: true
    },
    {
      category: 'shareholders',
      title: 'Appointed Manager Identification',
      desc: 'Passport copy, residential address proof, and contact details for the designated company manager authorized to run daily operations.',
      tag: 'Management',
      mandatory: true
    },
    {
      category: 'shareholders',
      title: 'Residential & Contact Details',
      desc: 'Full residential address, phone numbers, email addresses, and mother’s maiden name for all partners as required by DET registration.',
      tag: 'Shareholder Bio',
      mandatory: true
    },
    {
      category: 'company',
      title: 'Trade Name Preferences (3 Options)',
      desc: 'List of 3 proposed commercial names in order of preference, conforming to DET naming rules and transliterated into Arabic.',
      tag: 'Company Identity',
      mandatory: true
    },
    {
      category: 'company',
      title: 'Proposed Business Activities & Codes',
      desc: 'Specified commercial, trading, or service activity codes matching your operational model for DET initial approval.',
      tag: 'Licensing Scope',
      mandatory: true
    },
    {
      category: 'company',
      title: 'Shareholding Structure & Capital Allocation',
      desc: 'Agreed equity ownership breakdown among partners and nominal share capital distribution for incorporation in the MOA.',
      tag: 'Governance',
      mandatory: true
    },
    {
      category: 'company',
      title: 'Premises Lease Agreement & Ejari',
      desc: 'Certified tenancy contract (Ejari) for a physical commercial office, showroom, warehouse, or approved business center flexi-desk.',
      tag: 'Premises Proof',
      mandatory: true
    },
    {
      category: 'corporate',
      title: 'Certificate of Incorporation & Good Standing',
      desc: 'If an existing parent foreign or UAE company holds shares: Certificate of Incorporation, Memorandum and Articles of Association (MOA/AOA), and Good Standing.',
      tag: 'Corporate Parent',
      mandatory: false
    },
    {
      category: 'corporate',
      title: 'Board Resolution & Shareholder Authorization',
      desc: 'Official board resolution approving establishment of the Dubai LLC, allocating capital, and authorizing legal signatory.',
      tag: 'Corporate Resolution',
      mandatory: false
    },
    {
      category: 'corporate',
      title: 'Power of Attorney (POA)',
      desc: 'Notarized and attested Power of Attorney if an authorized representative or Brightlink legal consultant executes filings on the owners’ behalf.',
      tag: 'Legal Representation',
      mandatory: false
    },
    {
      category: 'company',
      title: 'MOA Drafting & Notarization Dossier',
      desc: 'Bilingual Memorandum of Association (MOA) detailing capital, manager powers, and dispute resolution for Dubai Courts notary authentication.',
      tag: 'Statutory MOA',
      mandatory: true
    }
  ];

  const filtered = activeTab === 'all'
    ? documentList
    : documentList.filter(d => d.category === activeTab);

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Filing Preparation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Documents Required for Mainland LLC Formation
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            Ensure an efficient setup by gathering the required documents. Brightlink audits every file prior to government submission to ensure zero delays.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'bg-white border border-[#DECBB5] text-[#475569] hover:bg-[#FAF5EC]'
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
              className="bg-white rounded-2xl p-5 border border-[#DECBB5] shadow-xs flex flex-col justify-between hover:border-[#B8864B] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8C5E28] bg-[#FAF5EC] px-2.5 py-1 rounded-md border border-[#DECBB5]/70">
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

              <div className="mt-4 pt-3 border-t border-[#F5F1EB] flex items-center justify-between text-[11px] text-[#64748B]">
                <span>Registry Requirement</span>
                <span className="text-[#8C5E28] font-bold">DET Verified Dossier</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mandatory Official Disclaimer Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-[#B8864B]/40 shadow-xs flex items-start gap-3.5 max-w-4xl mx-auto">
          <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-[#0F172A] font-heading">
              Statutory Documentation Notice:
            </h4>
            <p className="text-xs text-[#475569] leading-relaxed font-sans">
              <strong>Exact document requirements may vary depending on the shareholders, business activity, legal structure and authority requirements.</strong> For corporate-owned subsidiaries or specialized commercial activities, additional ministry approvals, attestations, or translations may apply.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center mt-8">
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('LLC Document Audit')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white text-xs font-bold hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-md shadow-[#B8864B]/20"
          >
            <span>Request Complimentary LLC Document Review</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default LlcDocumentsRequired;
