import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Users, 
  CreditCard, 
  CheckCircle2, 
  AlertCircle, 
  Building, 
  UserCheck 
} from 'lucide-react';

export const SharjahVisaAndBanking = ({ onOpenConsultation }) => {
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
    <section className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Part A: Visa and Immigration Assistance */}
        <div>
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-2xs">
              <UserCheck className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>RESIDENCY & IMMIGRATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
              Sharjah Free Zone Visa and Immigration Assistance
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              We guide business founders, executive teams, employees, and their families through every phase of the UAE residence visa process—from immigration file registration to medical examinations and Emirates ID biometrics.
            </p>
          </div>

          {/* 3 Visa Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {visaServices.map((vs, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-[#E6D7C3] flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shadow-2xs">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0F172A] font-heading">
                      {vs.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {vs.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 text-[11px] text-[#8C5E28] font-medium">
                  <span><strong>Allocation Rule:</strong> {vs.criteria}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visa Disclaimer */}
          <div className="rounded-2xl bg-white border border-[#E6D7C3] p-5 text-xs text-[#64748B] flex items-start gap-3 shadow-xs">
            <AlertCircle className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
            <p>
              <strong>Notice:</strong> Visa eligibility and quotas depend on the chosen authority, facility lease, Ministry of Human Resources & Emiratisation (MOHRE) rules where applicable, and General Directorate of Residency and Foreigners Affairs (GDRFA) security vetting. Brightlink facilitates documentation, medical appointments, and typing without guaranteeing fixed quotas or approval outcomes.
            </p>
          </div>
        </div>

        {/* Part B: Corporate Bank Account Guidance */}
        <div className="pt-10 border-t border-[#E6D7C3]/60">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-2xs">
              <CreditCard className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>FINANCIAL COMPLIANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
              Corporate Bank Account Guidance
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Opening a corporate bank account for a Sharjah free zone entity requires comprehensive compliance preparation. Brightlink helps founders assemble compliant dossiers for introduction to reputable UAE commercial banks.
            </p>
          </div>

          {/* 6 Banking Requirement Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {bankingDossier.map((req, idx) => (
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

          {/* Independent Bank Approval Disclaimer */}
          <div className="rounded-3xl bg-white border border-[#E6D7C3] p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1 text-center sm:text-left">
              <strong className="text-sm sm:text-base font-bold text-[#0F172A] font-heading block">
                Independent Bank Assessment Disclosure
              </strong>
              <p className="text-xs text-[#64748B] max-w-2xl leading-relaxed">
                Corporate bank account approvals remain strictly under the independent assessment, compliance policies, and risk review of individual commercial banking institutions (such as Emirates NBD, Mashreq, Wio Bank, or Sharjah Islamic Bank). Brightlink provides professional document compilation and procedural guidance without guaranteeing account opening.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenConsultation('Sharjah Corporate Banking Guidance')}
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
