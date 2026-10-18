import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Users, 
  Landmark, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  FileCheck2,
  Clock,
  Sparkles,
  UserCheck
} from 'lucide-react';

export const FujairahVisaAndBanking = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const visaServices = [
    {
      title: 'Company Establishment Card',
      desc: 'Registration of the corporate entity with the Fujairah General Directorate of Residency and Foreigners Affairs (GDRFA) and Federal Authority for Identity, Citizenship, Customs and Port Security (ICP).'
    },
    {
      title: 'Investor & Partner Residence Visas',
      desc: '2-year or multi-year renewable UAE residence visas for company shareholders, founders, and equity partners registered on the FFZA commercial licence.'
    },
    {
      title: 'Employee & Technical Staff Visas',
      desc: 'Work residency permits for managers, corporate executives, skilled technicians, and warehouse operational staff matched to your facility visa quota.'
    },
    {
      title: 'Family & Dependent Sponsorship',
      desc: 'Guidance and document typing for primary visa holders wishing to sponsor their spouse, children, and parents under UAE immigration family laws.'
    },
    {
      title: 'VIP Medical Fitness & Biometrics Typing',
      desc: 'Priority coordination for mandatory government medical screening (blood test & chest X-ray) and Emirates ID biometric fingerprint typing at authorized typing centers.'
    }
  ];

  const bankingCriteria = [
    {
      title: 'Constitutive Corporate Records',
      desc: 'Original Fujairah Free Zone Trade Licence, Certificate of Formation, Share Certificate, and fully endorsed Memorandum & Articles of Association.'
    },
    {
      title: 'Director & Shareholder Identification',
      desc: 'Valid passport copies, valid UAE residence visas, Emirates IDs, and comprehensive professional curriculum vitae (CVs) of all beneficial owners.'
    },
    {
      title: 'Verified Proof of Source of Funds',
      desc: 'Personal or parent corporate bank statements for the preceding 6 months demonstrating legitimate initial capitalization and liquidity.'
    },
    {
      title: 'Operational Business Evidence',
      desc: 'Draft or executed commercial agreements, supplier quotations, client letters of intent, utility contracts, and a detailed business profile.'
    },
    {
      title: 'Bank AML / KYC Due Diligence',
      desc: 'Preparation for bank compliance interviews covering anticipated transaction volumes, key trading counterparties, and international remittance channels.'
    }
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Users className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>OPERATIONAL READINESS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Visa Assistance & Corporate Banking Guidance
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Securing your trade licence is only the first step. Brightlink assists with full immigration onboarding for your team and structured corporate banking portfolio preparation with leading UAE and international financial institutions.
          </p>
        </div>

        {/* 2-Column Split: Visas on Left, Banking on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Column 1: Visa & Immigration Assistance */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#DECBB5] shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#F1E8DC]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                    Visa & Immigration Support
                  </h3>
                  <span className="text-xs text-[#8C5E28] font-semibold">
                    Turnkey Residency & Work Permit Processing
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Visa quota allocations correlate directly with your chosen physical workspace: flexi-desks typically allow 1 to 3 visas, while larger commercial offices, warehouses, and factories unlock higher headcount quotas.
            </p>

            <ul className="space-y-3 pt-2">
              {visaServices.map((item, idx) => (
                <li key={idx} className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#F1E8DC] space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <h4 className="text-xs font-bold text-[#0F172A] font-heading">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-[#475569] pl-6 leading-relaxed">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] text-xs text-[#6D4518] flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Visa approvals, security clearances, and residency issuance remain under the sovereign authority of the UAE Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) and Fujairah GDRFA. No third party can guarantee visa approvals.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenConsultation('Fujairah Visa Processing')}
              className="w-full py-2.5 px-4 rounded-xl bg-[#8C5E28] hover:bg-[#6D4518] text-white text-xs font-bold transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Calculate Your Visa Quota Needs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Column 2: Corporate Bank Account Guidance */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#DECBB5] shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#F1E8DC]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                    Corporate Banking Guidance
                  </h3>
                  <span className="text-xs text-[#8C5E28] font-semibold">
                    Comprehensive Banking Dossier Preparation
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              UAE financial institutions enforce strict Anti-Money Laundering (AML) and Know-Your-Customer (KYC) requirements. Brightlink helps you build a solid, credible corporate application dossier to present to compliance officers.
            </p>

            <ul className="space-y-3 pt-2">
              {bankingCriteria.map((item, idx) => (
                <li key={idx} className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#F1E8DC] space-y-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                    <h4 className="text-xs font-bold text-[#0F172A] font-heading">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-[#475569] pl-6 leading-relaxed">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] text-xs text-[#6D4518] flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Bank account opening is subject to the independent underwriting, compliance risk review, and final approval of the selected banking institution. Brightlink provides expert advisory, document optimization, and direct introductions without claiming guaranteed bank account opening.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenConsultation('Corporate Banking Dossier Preparation')}
              className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#FAF5EC] border border-[#DECBB5] hover:border-[#B8864B] text-[#0F172A] hover:text-[#8C5E28] text-xs font-bold transition-colors shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Consult on Banking Readiness</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
