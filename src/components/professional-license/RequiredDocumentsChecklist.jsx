import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCheck2, 
  UserCheck, 
  Building2, 
  GraduationCap, 
  MapPin, 
  FileSignature, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const RequiredDocumentsChecklist = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const shouldReduceMotion = useReducedMotion();

  const documentCategories = [
    { id: 'all', label: 'All Documents' },
    { id: 'individual', label: 'Individual Shareholders' },
    { id: 'corporate', label: 'Corporate Entity' },
    { id: 'premises', label: 'Premises & Approvals' }
  ];

  const documents = [
    {
      category: 'individual',
      title: 'Valid Passport Copies',
      description: 'Color copies of passports for all intended partners, shareholders, and appointed managers (minimum 6 months remaining validity).',
      mandatory: true,
      tag: 'Primary ID'
    },
    {
      category: 'individual',
      title: 'UAE Visa & Emirates ID (or Entry Stamp)',
      description: 'Copy of existing UAE Residence Visa and Emirates ID if current resident; or copy of UAE Tourist Visa with official entry stamp and UID number if international applicant.',
      mandatory: true,
      tag: 'Immigration'
    },
    {
      category: 'individual',
      title: 'Residential Address & Contact Info',
      description: 'Official residential address proof, email address, mobile number, and mother’s maiden name for official DET shareholder registration.',
      mandatory: true,
      tag: 'Shareholder Bio'
    },
    {
      category: 'individual',
      title: 'Attested Professional Qualifications',
      description: 'Degree or diploma certificate attested by UAE MOFA and translated into Arabic where mandated for regulated professions (e.g. engineering, medical, legal, accounting).',
      mandatory: false,
      tag: 'Activity-Specific'
    },
    {
      category: 'corporate',
      title: 'Certificate of Incorporation / Commercial Register',
      description: 'If a foreign or UAE corporate entity holds shares: Certificate of Incorporation, Memorandum & Articles of Association (MOA/AOA), and Certificate of Good Standing.',
      mandatory: false,
      tag: 'Corporate Shareholder'
    },
    {
      category: 'corporate',
      title: 'Board Resolution & Shareholder Authorization',
      description: 'Official board resolution approving company establishment in Dubai, specifying capital subscription, and authorizing legal signatory.',
      mandatory: false,
      tag: 'Corporate Signatory'
    },
    {
      category: 'corporate',
      title: 'Power of Attorney (POA)',
      description: 'Notarized Power of Attorney if an authorized representative or Brightlink legal consultant executes filings and signing on behalf of owners.',
      mandatory: false,
      tag: 'Legal Representation'
    },
    {
      category: 'premises',
      title: 'Commercial Lease Agreement & Certified Ejari',
      description: 'Tenancy contract for physical office or approved business center flexi-desk agreement registered with Dubai Land Department (DLD).',
      mandatory: true,
      tag: 'Premises Proof'
    },
    {
      category: 'premises',
      title: 'External Ministry Clearances (If Regulated)',
      description: 'NOC or preliminary approval from relevant government authorities if applicable (e.g. KHDA for training, DHA for health advisory, RERA for property advisory).',
      mandatory: false,
      tag: 'External Regulators'
    }
  ];

  const filteredDocs = activeCategory === 'all' 
    ? documents 
    : documents.filter(doc => doc.category === activeCategory);

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Filing Requirements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Required Documents Checklist
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            Prepare your paperwork with confidence. Brightlink reviews and pre-audits all dossiers prior to DET submission to eliminate delays.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {documentCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
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
          {filteredDocs.map((doc, idx) => (
            <motion.div
              key={doc.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
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
                  {doc.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F5F1EB] flex items-center justify-between text-[11px] text-[#64748B]">
                <span>Document Verification</span>
                <span className="text-[#8C5E28] font-bold">Standard DET Record</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mandatory Official Disclaimer Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-[#B8864B]/40 shadow-xs flex items-start gap-3.5 max-w-4xl mx-auto">
          <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-[#0F172A] font-heading">
              Important Regulatory Note:
            </h4>
            <p className="text-xs text-[#475569] leading-relaxed font-sans">
              <strong>Exact requirements may vary depending on the business activity, ownership structure and authority requirements.</strong> Our corporate legal team verifies the exact checklist for your chosen activity before initiating any government filings.
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center mt-8">
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Document Review & Verification')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white text-xs font-bold hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-md shadow-[#B8864B]/20"
          >
            <span>Request Complimentary Document Audit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default RequiredDocumentsChecklist;
