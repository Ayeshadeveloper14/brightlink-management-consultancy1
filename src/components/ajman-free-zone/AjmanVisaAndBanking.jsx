import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Users, 
  CreditCard, 
  CheckCircle2, 
  AlertCircle, 
  Building, 
  UserCheck, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  FileCheck2
} from 'lucide-react';

export const AjmanVisaAndBanking = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const visaServices = [
    {
      title: 'Investor & Partner Visas',
      description: 'Provides company shareholders and partners with a 2-year renewable UAE residence visa, entitling holders to an Emirates ID, local personal banking, and long-term residency rights.',
      criteria: 'Issued upon trade licence generation and verified company registration.'
    },
    {
      title: 'Employee Residency Visas',
      description: 'Enables your company to sponsor executives, technical personnel, administrative staff, and warehouse managers from abroad or transfer locally residing candidates.',
      criteria: 'Number of visa quotas is bound by your leased workspace square footage and authority limits.'
    },
    {
      title: 'Dependent & Family Sponsorship',
      description: 'Once the investor or employee visa is active and the sponsor satisfies monthly statutory income requirements, family sponsorship for spouse, children, and parents is initiated.',
      criteria: 'Handled through Brightlink’s in-house typing center and approved medical screening facilities.'
    }
  ];

  const bankingDossier = [
    {
      title: 'Company Formation Dossier',
      details: 'Trade licence, Certificate of Incorporation, Memorandum & Articles of Association (MOA/AOA), share certificates, and registered lease agreement.'
    },
    {
      title: 'Shareholder & Signatory Identification',
      details: 'Valid passport copies, UAE entry stamps or residence visas, Emirates IDs, and comprehensive CVs detailing relevant industry expertise.'
    },
    {
      title: 'Commercial Activity & Transaction Profile',
      details: 'Detailed narrative explaining daily operations, core product/service offerings, key geographical markets, and projected monthly turnover volumes.'
    },
    {
      title: 'Source of Funds & Wealth Substantiation',
      details: 'Recent personal or corporate bank statements (typically 3 to 6 months) substantiating initial working capital and lawful origin of funds.'
    },
    {
      title: 'Commercial Evidence & Contracts',
      details: 'Supplier agreements, client contracts, letters of intent (LOIs), or sample commercial invoices demonstrating genuine commercial intent.'
    },
    {
      title: 'Bank Compliance & AML/CFT Vetting',
      details: 'Rigorous Know-Your-Customer (KYC) review by commercial bank risk officers adhering to UAE Central Bank anti-money laundering regulations.'
    }
  ];

  return (
    <section id="ajman-visa-banking" className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Users className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>OPERATIONAL ACTIVATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            UAE Residence Visas & Corporate Bank Account Guidance
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Securing residency visas for your key personnel and establishing a robust corporate bank account are critical milestones in launching your enterprise.
          </p>
        </div>

        {/* Part 1: Residence Visas */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0F172A] font-heading">
                UAE Residency & Immigration Services
              </h3>
              <p className="text-xs sm:text-sm text-[#475569]">
                Facilitated directly through Brightlink’s in-house typing center and approved medical examination facilities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visaServices.map((vs, idx) => (
              <div
                key={vs.title}
                className="bg-[#FAF7F0] rounded-2xl p-6 border border-[#E6D7C3] hover:border-[#B8864B]/60 transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C5E28] bg-white px-2.5 py-0.5 rounded-full border border-[#DECBB5] font-heading mb-3 inline-block">
                    Visa Stream #{idx + 1}
                  </span>
                  <h4 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {vs.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    {vs.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#DECBB5]/60 text-xs text-[#8C5E28] font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
                  <span>{vs.criteria}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Corporate Banking Guidance */}
        <div className="rounded-3xl bg-[#FAF7F0] p-8 sm:p-10 border border-[#E6D7C3] shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0F172A] font-heading">
                Corporate Bank Account Assistance
              </h3>
              <p className="text-xs sm:text-sm text-[#475569]">
                Connecting your business with leading UAE financial institutions (e.g. Emirates NBD, Mashreq, Wio, FAB, ADCB).
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-8 max-w-3xl">
            Opening a commercial bank account in the UAE requires stringent adherence to anti-money laundering (AML) and Counter Financing of Terrorism (CFT) compliance protocols mandated by the UAE Central Bank. Brightlink assists you in assembling a robust compliance dossier.
          </p>

          {/* Banking Dossier 6-Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {bankingDossier.map((item, bIdx) => (
              <div key={bIdx} className="bg-white rounded-2xl p-5 border border-[#DECBB5] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0F172A] font-heading">
                  <FileCheck2 className="w-4 h-4 text-[#B8864B] shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}
          </div>

          {/* Mandatory Bank Disclaimer */}
          <div className="p-4 rounded-xl bg-white border border-[#DECBB5] text-xs text-[#475569] flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
            <span>
              <strong className="text-[#0F172A]">Independent Bank Authority Disclaimer:</strong> Brightlink provides document preparation and advisory support. The ultimate decision to approve or decline any corporate account application rests solely with the commercial bank's internal compliance committee and risk assessment officers. Company incorporation does not guarantee automatic bank account approval.
            </span>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => onOpenConsultation('Ajman Banking & Visa Support')}
              className="px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#8C5E28] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs cursor-pointer flex items-center gap-2"
            >
              <span>Discuss Banking & Visa Strategy</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
