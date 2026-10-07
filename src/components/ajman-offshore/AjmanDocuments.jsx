import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCheck2, 
  UserCheck, 
  Building2, 
  Coins, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export const AjmanDocuments = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState('individual');

  const categories = [
    { id: 'individual', label: 'Individual Shareholders & Directors', icon: UserCheck },
    { id: 'corporate', label: 'Corporate Shareholders', icon: Building2 },
    { id: 'sourceOfFunds', label: 'Source of Funds Evidence', icon: Coins },
    { id: 'businessPurpose', label: 'Business Purpose & Assets', icon: Briefcase },
    { id: 'agentForms', label: 'Registered Agent & KYC Forms', icon: ShieldCheck }
  ];

  const documentData = {
    individual: [
      {
        title: 'Clear Passport Copies',
        note: 'High-resolution color scan with at least 6 months validity remaining.'
      },
      {
        title: 'Specimen Signatures',
        note: 'Official signature specimen sheet for all proposed directors and authorized signatories.'
      },
      {
        title: 'Verified Contact Details',
        note: 'Current contact information, email, phone, and professional CV outlining business experience.'
      },
      {
        title: 'Recent Proof of Residential Address',
        note: 'Utility bill (electricity, water, gas) or bank statement dated within the last 3 months showing permanent address.'
      }
    ],
    corporate: [
      {
        title: 'Certificate of Incorporation',
        note: 'Certified and legalized (or apostilled where applicable) Certificate of Incorporation of parent company.'
      },
      {
        title: 'Memorandum & Articles of Association (MOA/AOA)',
        note: 'Certified true copy of parent company constitutional bylaws and charter.'
      },
      {
        title: 'Certificate of Good Standing / Incumbency',
        note: 'Current certificate from home registry verifying active legal standing and current listing of corporate directors.'
      },
      {
        title: 'Board Resolution Authorizing Setup',
        note: 'Formal corporate resolution authorizing the Ajman Offshore formation and designating appointed signatory.'
      },
      {
        title: 'Corporate Ownership Structure Chart',
        note: 'Signed group hierarchy diagram identifying all equity tiers up to ultimate natural person beneficiaries.'
      }
    ],
    sourceOfFunds: [
      {
        title: 'Personal or Corporate Bank Statements',
        note: 'Bank statements for the previous 3 to 6 months confirming account conduct and transaction stability.'
      },
      {
        title: 'Wealth & Source-of-Funds Evidence',
        note: 'Supporting documentation explaining the origin of capital (e.g. dividends, business earnings, property sale) where required by compliance.'
      }
    ],
    businessPurpose: [
      {
        title: 'Intended Use of the Company',
        note: 'Clear operational summary describing whether entity will hold real estate, hold shares, manage IP, or engage in cross-border trade.'
      },
      {
        title: 'Asset Information',
        note: 'Documentation on target assets to be held (e.g. property details in approved areas, subsidiary company registration details).'
      },
      {
        title: 'International Business / Trading Flow Information',
        note: 'Details on geographic counterparties, expected suppliers, foreign clients, and trade flow where applicable.'
      }
    ],
    agentForms: [
      {
        title: 'Statutory KYC Questionnaires',
        note: 'Standard compliance onboarding forms completed by all beneficial owners and directors.'
      },
      {
        title: 'UBO Beneficial Ownership Declaration',
        note: 'Statutory disclosure form under UAE Cabinet Resolution detailing natural persons with >25% control.'
      },
      {
        title: 'Sanctions & PEP Screening Disclosures',
        note: 'Mandatory declaration confirming non-involvement in politically exposed or sanctioned categories.'
      },
      {
        title: 'Risk & Compliance Questionnaires',
        note: 'Standard risk profile questionnaire provided by Brigitlink registered agent team.'
      }
    ]
  };

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <FileCheck2 className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>COMPLIANCE & ONBOARDING DOSSIER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Required Documents for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Ajman Offshore</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Review the structured checklist of documentation required for individual shareholders, corporate parents, source of funds, and statutory compliance.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="p-1.5 bg-white border border-[#DECBB5] rounded-2xl inline-flex gap-2 shadow-2xs flex-wrap justify-center">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeTab;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0F172A] text-white shadow-sm'
                      : 'text-[#475569] hover:text-[#0F172A]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#F5D7A1]' : 'text-[#8C5E28]'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Checklist Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-[#E6D7C3] p-6 sm:p-10 shadow-sm space-y-4">
            
            <div className="flex items-center justify-between border-b border-[#DECBB5]/70 pb-4">
              <span className="text-sm font-bold text-[#0F172A] font-heading">
                {categories.find(c => c.id === activeTab)?.label} Checklist
              </span>
              <span className="text-xs text-[#8C5E28] font-semibold">
                Electronic & Verified Copies
              </span>
            </div>

            <div className="divide-y divide-[#F5F1EB]">
              {documentData[activeTab].map((doc, idx) => (
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
                      {doc.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Note Required by Prompt */}
            <div className="mt-6 p-4 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
              <div className="text-xs text-[#475569] leading-relaxed space-y-1">
                <span className="font-bold text-[#0F172A] block">
                  Important Compliance Notice
                </span>
                <p className="font-medium text-[#785425]">
                  Exact requirements may vary depending on the ownership structure, company purpose, compliance review and registered agent requirements.
                </p>
                <p className="text-[#64748B]">
                  Brigitlink guides you through all drafting, certified translations, and legalization coordination.
                </p>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                onClick={() => onOpenConsultation && onOpenConsultation('Ajman Offshore Document Pre-Check')}
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

export default AjmanDocuments;
