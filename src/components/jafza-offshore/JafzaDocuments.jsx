import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCheck2, 
  UserCheck, 
  Building2, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  Info,
  FolderOpen
} from 'lucide-react';

export const JafzaDocuments = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState('individual');

  const categories = [
    { id: 'individual', label: 'Individual Shareholders', icon: UserCheck },
    { id: 'corporate', label: 'Corporate Shareholders', icon: Building2 },
    { id: 'additional', label: 'Additional Requirements', icon: FolderOpen }
  ];

  const documentData = {
    individual: [
      {
        title: 'Valid Passport Copy',
        detail: 'High-resolution color scan with at least 6 months validity remaining.'
      },
      {
        title: 'Proof of Residential Address',
        detail: 'Recent utility bill (water/electricity/gas) or bank statement dated within the last 3 months, showing full name and permanent residential address.'
      },
      {
        title: 'Contact Details & Profile',
        detail: 'Current mobile number, verified email address, and professional CV or resume outlining business background.'
      },
      {
        title: 'Signature Specimen',
        detail: 'Official signature specimen sheet verified and witnessed as required by JAFZA registration protocols.'
      }
    ],
    corporate: [
      {
        title: 'Certificate of Incorporation',
        detail: 'Legalized and attested (or apostilled where applicable) Certificate of Incorporation of the parent corporate shareholder.'
      },
      {
        title: 'Memorandum & Articles of Association (MOA/AOA)',
        detail: 'Certified copy of the parent entity’s constitutional charter and governance bylaws.'
      },
      {
        title: 'Board Resolution',
        detail: 'Formal resolution passed by the board of directors authorizing the formation of the JAFZA Offshore subsidiary and appointing authorized signatories.'
      },
      {
        title: 'Certificate of Good Standing / Incumbency',
        detail: 'Official registry certificate confirming the parent entity remains in active legal standing and enumerating current officers.'
      },
      {
        title: 'Ownership Structure Chart',
        detail: 'Signed organizational hierarchy diagram tracing ownership from the parent corporate body up to the ultimate natural person beneficiaries.'
      }
    ],
    additional: [
      {
        title: 'Source of Funds Information',
        detail: 'Documented narrative and evidence explaining the origin of capital deployed for investment or asset acquisition.'
      },
      {
        title: 'Intended Business Purpose Disclosure',
        detail: 'Detailed operational summary explaining whether the entity will hold real estate, hold shares, manage IP, or execute cross-border billing.'
      },
      {
        title: 'Asset or Investment Information',
        detail: 'Details of target assets (e.g. Dubai property title information, subsidiary company details, or IP registrations).'
      },
      {
        title: 'Banking Objectives & Turnover Projections',
        detail: 'Expected monthly transaction volumes, geographic counterparties, and anticipated corporate banking requirements.'
      }
    ]
  };

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <FileCheck2 className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>KYC & STATUTORY DOSSIER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Required Documents for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">JAFZA Offshore Setup</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            JAFZA maintains rigorous due diligence standards to protect the international reputation of its Dubai registry. Review the required documentation below.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 bg-[#FAF7F0] border border-[#DECBB5] rounded-2xl inline-flex gap-2 shadow-2xs flex-wrap justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0F172A] text-white shadow-sm'
                      : 'text-[#475569] hover:text-[#0F172A]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#F5D7A1]' : 'text-[#8C5E28]'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Document Checklist Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#FCFAF8] rounded-3xl border border-[#E6D7C3] p-6 sm:p-10 shadow-sm space-y-4">
            
            <div className="flex items-center justify-between border-b border-[#DECBB5]/70 pb-4">
              <span className="text-sm font-bold text-[#0F172A] font-heading">
                {categories.find(c => c.id === activeCategory)?.label} Checklist
              </span>
              <span className="text-xs text-[#8C5E28] font-semibold">
                Verified Electronic Scans
              </span>
            </div>

            <div className="divide-y divide-[#F5F1EB]">
              {documentData[activeCategory].map((doc, idx) => (
                <div key={idx} className="py-4 flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#0F172A]">{doc.title}</span>
                      <span className="text-[10px] uppercase font-bold text-[#B8864B] bg-[#FAF5EC] px-1.5 py-0.5 rounded border border-[#DECBB5]">
                        Required
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {doc.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mandatory Regulatory Disclaimer */}
            <div className="mt-6 p-4 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
              <div className="text-xs text-[#475569] leading-relaxed space-y-1">
                <span className="font-bold text-[#0F172A] block">
                  Important Regulatory Note
                </span>
                <p className="font-medium text-[#785425]">
                  Requirements may vary depending on ownership structure, compliance review and regulatory requirements.
                </p>
                <p className="text-[#64748B]">
                  Brigitlink’s compliance team assists in drafting board resolutions, ownership charts, and registered agent authorizations.
                </p>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                onClick={() => onOpenConsultation && onOpenConsultation('JAFZA Document Pre-Verification Review')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#B8864B] to-[#8C5E28] hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-sm"
              >
                <span>Request Document Verification Review</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default JafzaDocuments;
