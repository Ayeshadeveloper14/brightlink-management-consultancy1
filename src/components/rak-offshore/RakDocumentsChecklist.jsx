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
  Download,
  FileText
} from 'lucide-react';

export const RakDocumentsChecklist = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeTier, setActiveTier] = useState('individual');

  const individualDocs = [
    {
      title: 'Valid Passport Copy',
      note: 'High-resolution color scan with at least 6 months validity remaining.',
      required: true
    },
    {
      title: 'Proof of Residential Address',
      note: 'Recent utility bill (water, electricity, gas) or bank statement dated within the last 3 months, showing full residential street address.',
      required: true
    },
    {
      title: 'Professional Profile / Curriculum Vitae (CV)',
      note: 'Summary of business background, professional qualifications, and commercial experience.',
      required: true
    },
    {
      title: 'Bank Reference Letter or Recent Bank Statement',
      note: 'Issued by reputable commercial bank confirming satisfactory account conduct.',
      required: true
    },
    {
      title: 'Ultimate Beneficial Owner (UBO) Declaration',
      note: 'Standard RAK ICC statutory disclosure form prepared by Brigitlink for client signature.',
      required: true
    }
  ];

  const corporateDocs = [
    {
      title: 'Certificate of Incorporation of Parent Company',
      note: 'Duly legalized / attested up to UAE Embassy in jurisdiction of origin, or apostilled per applicable treaty.',
      required: true
    },
    {
      title: 'Memorandum & Articles of Association (MOA/AOA)',
      note: 'Certified copy of parent company constitutional bylaws and charter.',
      required: true
    },
    {
      title: 'Certificate of Good Standing / Incumbency',
      note: 'Current certificate confirming active legal standing and current listing of corporate directors.',
      required: true
    },
    {
      title: 'Board Resolution & Power of Attorney',
      note: 'Formal resolution authorizing formation of the RAK ICC entity, capital allocation, and appointing legal signatory.',
      required: true
    },
    {
      title: 'Group Corporate Hierarchy Chart',
      note: 'Signed diagram mapping equity ownership from parent entity down to ultimate natural person owners (>25% equity).',
      required: true
    },
    {
      title: 'KYC for Parent Directors & Beneficial Owners',
      note: 'Passports, proof of address, and CVs for all individual officers and ultimate beneficiaries.',
      required: true
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <FileCheck2 className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>DUE DILIGENCE & COMPLIANCE DOSSIER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Required Documents for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">RAK ICC Formation</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            As an OECD-compliant jurisdiction, RAK ICC enforces strict KYC and AML verification while keeping administrative requirements lean and digital.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 bg-[#FAF7F0] border border-[#DECBB5] rounded-2xl inline-flex gap-2 shadow-2xs">
            <button
              onClick={() => setActiveTier('individual')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTier === 'individual'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              <UserCheck className="w-4 h-4 text-[#B8864B]" />
              <span>Individual Shareholder Structure</span>
            </button>

            <button
              onClick={() => setActiveTier('corporate')}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTier === 'corporate'
                  ? 'bg-[#0F172A] text-white shadow-sm'
                  : 'text-[#475569] hover:text-[#0F172A]'
              }`}
            >
              <Building2 className="w-4 h-4 text-[#B8864B]" />
              <span>Corporate Parent / Holding Structure</span>
            </button>
          </div>
        </div>

        {/* Checklist Cards */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#FCFAF8] rounded-3xl border border-[#E6D7C3] p-6 sm:p-10 shadow-sm space-y-4">
            
            <div className="flex items-center justify-between border-b border-[#DECBB5]/70 pb-4">
              <span className="text-sm font-bold text-[#0F172A] font-heading">
                {activeTier === 'individual' ? 'Documents Required from Natural Persons' : 'Documents Required for Corporate Shareholder Entity'}
              </span>
              <span className="text-xs text-[#8C5E28] font-semibold">
                Digital Scans Accepted
              </span>
            </div>

            <div className="divide-y divide-[#F5F1EB]">
              {(activeTier === 'individual' ? individualDocs : corporateDocs).map((item, idx) => (
                <div key={idx} className="py-4 flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#0F172A]">{item.title}</span>
                      {item.required && (
                        <span className="text-[10px] uppercase font-bold text-[#B8864B] bg-[#FAF5EC] px-1.5 py-0.5 rounded border border-[#DECBB5]">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Advisory Note */}
            <div className="mt-6 p-4 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
              <div className="text-xs text-[#475569] leading-relaxed space-y-1">
                <span className="font-bold text-[#0F172A] block">
                  Brigitlink Document Preparation Assistance
                </span>
                <p>
                  Don't worry if you don't have standard board resolutions or UBO charts ready. Brigitlink provides pre-drafted statutory templates and guides you through certified translation or attestation where required.
                </p>
              </div>
            </div>

            <div className="pt-4 flex justify-center">
              <button
                onClick={() => onOpenConsultation && onOpenConsultation('RAK ICC Document Pre-Check')}
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

export default RakDocumentsChecklist;
