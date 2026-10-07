import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  Receipt, 
  Scale, 
  Clock, 
  Users, 
  FileText, 
  Lock, 
  Sparkles,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const LlcComplianceAndSetup = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const complianceDuties = [
    {
      icon: Clock,
      title: 'Annual License & Ejari Renewal',
      desc: 'Renew your DET Commercial Trade License, Chamber of Commerce membership, and Ejari tenancy agreement annually prior to expiry to avoid municipal fines or bank account freezes.',
      tag: 'Annual Renewal'
    },
    {
      icon: Receipt,
      title: 'UAE Corporate Tax Obligations',
      desc: 'All incorporated mainland LLCs must register for Corporate Tax with the Federal Tax Authority (FTA). A standard 9% rate applies on taxable net profits exceeding AED 375,000 per financial year.',
      tag: 'Mandatory FTA Tax'
    },
    {
      icon: Scale,
      title: 'Value Added Tax (VAT) Compliance',
      desc: 'Mandatory VAT registration (5%) applies when taxable supplies and imports exceed AED 375,000 within a 12-month period (voluntary at AED 187,500), accompanied by quarterly tax filings.',
      tag: 'Quarterly Filings'
    },
    {
      icon: Lock,
      title: 'Ultimate Beneficial Owner (UBO)',
      desc: 'Maintain and regularly update an official UBO Register detailing real beneficial owners in compliance with UAE Cabinet resolutions, reporting any shareholding changes within 15 days.',
      tag: 'Governance'
    },
    {
      icon: ShieldCheck,
      title: 'AML & KYC Compliance (DNFBPs)',
      desc: 'Entities involved in designated sectors (real estate brokerage, precious metals, corporate service providers) must register on the goAML portal and comply with national AML/CFT regulations.',
      tag: 'Sector-Specific'
    },
    {
      icon: Users,
      title: 'Employee & Visa Compliance (WPS)',
      desc: 'Disburse employee salaries through the UAE Central Bank’s Wage Protection System (WPS), fulfill mandatory health insurance coverage, and maintain valid MOHRE labor contracts.',
      tag: 'Labor Compliance'
    },
    {
      icon: FileText,
      title: 'Bookkeeping & Commercial Records',
      desc: 'UAE Federal Commercial Companies Law mandates that all LLCs maintain complete financial accounts, general ledgers, invoices, and audited financial statements for a minimum of 5 years.',
      tag: '5-Year Retention'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Post-Formation Responsibilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Compliance & After-Setup Responsibilities
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            Operating a Mainland LLC in Dubai requires adherence to federal statutory duties. Brigitlink provides ongoing PRO, tax liaison, and corporate governance retainers to keep your entity fully compliant.
          </p>
        </div>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {complianceDuties.slice(0, 6).map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="bg-[#FAF7F0] rounded-2xl p-6 border border-[#DECBB5] shadow-xs flex flex-col justify-between hover:border-[#B8864B] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#DECBB5] text-[#8C5E28] flex items-center justify-center shadow-2xs">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8864B] bg-white px-2.5 py-1 rounded-full border border-[#DECBB5]/60">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#DECBB5]/60 flex items-center gap-1.5 text-xs font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Brigitlink Corporate PRO Support</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 7th Item Wide Highlight Banner */}
        <div className="p-6 rounded-2xl bg-[#FCFAF8] border border-[#DECBB5] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#0F172A] text-[#F5D7A1] flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0F172A] font-heading">
                Bookkeeping, Invoicing & 5-Year Accounting Records
              </h4>
              <p className="text-xs text-[#64748B] mt-1 max-w-2xl">
                Commercial Companies Law requires mainland LLCs to maintain proper financial books. We introduce certified auditors and accountants to maintain compliant records.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('LLC Annual Compliance Retainer')}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Inquire About Corporate Retainers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default LlcComplianceAndSetup;
