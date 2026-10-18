import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Users, 
  CreditCard, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  ShieldCheck, 
  ArrowRight,
  UserCheck
} from 'lucide-react';

export const AbuDhabiVisaAndBanking = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const visaCategories = [
    {
      title: 'Investor & Partner Visas',
      description: 'Available for company shareholders holding registered equity. Typically granted for a 2-year renewable term, providing formal UAE residency status and enabling the holder to obtain an Emirates ID and open personal bank accounts.',
      quotaFactor: 'Requires active shareholder status and valid trade license registration.'
    },
    {
      title: 'Executive & Employee Visas',
      description: 'Enables your Abu Dhabi company to recruit executive managers, technical professionals, and administrative staff from overseas or transfer existing UAE residents.',
      quotaFactor: 'Number of visa quotas is determined by your chosen workspace square footage and authority package.'
    },
    {
      title: 'Family & Dependent Sponsorship',
      description: 'Shareholders and employees who hold a valid UAE residence visa and meet statutory monthly income thresholds can sponsor their spouses, children, and parents.',
      quotaFactor: 'Processed through in-house typing following issuance of the principal applicant’s Emirates ID.'
    }
  ];

  const bankingRequirements = [
    {
      title: 'Company Incorporation Dossier',
      details: 'Trade licence, Certificate of Incorporation, Memorandum & Articles of Association (MOA/AOA), share certificate, and registered lease agreement.'
    },
    {
      title: 'Shareholder & Signatory Identification',
      details: 'Valid passport copies, UAE entry stamps or residence visas, Emirates IDs, and comprehensive CVs detailing relevant commercial experience.'
    },
    {
      title: 'Business Activity & Transaction Profile',
      details: 'Detailed narrative explaining daily operations, core product/service offerings, key geographical markets, and projected monthly turnover volumes.'
    },
    {
      title: 'Source of Funds & Wealth Evidence',
      details: 'Recent personal or corporate bank statements (typically 3 to 6 months) substantiating initial working capital and lawful source of funds.'
    },
    {
      title: 'Supporting Commercial Agreements',
      details: 'Supplier agreements, client contracts, letters of intent (LOIs), or sample commercial invoices demonstrating genuine commercial intent.'
    },
    {
      title: 'Bank Compliance & AML/CFT Vetting',
      details: 'Rigorous Know-Your-Customer (KYC) review by commercial bank risk officers adhering to UAE Central Bank anti-money laundering regulations.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Part A: Visa Assistance */}
        <div>
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
              <UserCheck className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>RESIDENCY & IMMIGRATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
              Abu Dhabi Free Zone Visa Assistance
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Company formation in an Abu Dhabi free zone can provide eligibility for UAE residence visas for founders, executive teams, staff, and family members. Visa allocations and approval criteria depend strictly on the authority, facility lease, and UAE immigration rules.
            </p>
          </div>

          {/* Visa Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visaCategories.map((v, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-[#FAF7F0]/40 rounded-2xl p-6 border border-[#E6D7C3] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shadow-2xs">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0F172A] font-heading">
                      {v.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {v.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-200/60 text-[11px] text-[#8C5E28] font-medium">
                  <span><strong>Eligibility Factor:</strong> {v.quotaFactor}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visa Disclaimer */}
          <div className="rounded-2xl bg-[#FAF7F0] border border-[#E6D7C3] p-5 text-xs text-[#64748B] flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
            <p>
              <strong>Notice:</strong> Visa quotas are not automatic or fixed; they are subject to authority facility limits, Ministry of Human Resources & Emiratisation (MOHRE) guidelines where applicable, and General Directorate of Residency and Foreigners Affairs (GDRFA) security vetting. Brightlink assists with typing, medicals, and biometrics without promising unverified quotas.
            </p>
          </div>
        </div>

        {/* Part B: Corporate Bank Account Guidance */}
        <div className="pt-10 border-t border-[#E6D7C3]/60">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
              <CreditCard className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>FINANCIAL COMPLIANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
              Corporate Bank Account Guidance
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Opening a corporate bank account in the UAE involves comprehensive compliance due diligence. Brightlink guides business owners through dossier compilation and bank introduction to ensure adherence to UAE Central Bank standards.
            </p>
          </div>

          {/* 6 Banking Requirement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {bankingRequirements.map((req, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="bg-white rounded-2xl p-6 border border-[#E6D7C3] shadow-xs hover:border-[#DECBB5] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#FAF5EC] text-[#B8864B] border border-[#DECBB5] flex items-center justify-center text-xs font-bold font-heading">
                      0{idx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#0F172A] font-heading">
                      {req.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {req.details}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] text-[#475569]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Document dossier review</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bank Independent Assessment Disclaimer */}
          <div className="rounded-3xl bg-[#FAF7F0] border border-[#E6D7C3] p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <strong className="text-sm sm:text-base font-bold text-[#0F172A] font-heading block">
                Independent Banking Assessment Disclosure
              </strong>
              <p className="text-xs text-[#64748B] max-w-2xl leading-relaxed">
                Final approval for any corporate bank account rests solely with the compliance committee of the chosen commercial banking institution (such as Emirates NBD, FAB, Abu Dhabi Commercial Bank - ADCB, or Mashreq). Brightlink provides advisory and document preparation without guaranteeing account opening.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenConsultation('Abu Dhabi Corporate Banking Guidance')}
              className="px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer shrink-0 font-heading"
            >
              Discuss Banking Requirements
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
