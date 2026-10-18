import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  Percent, 
  FileCheck2, 
  Scale, 
  AlertCircle, 
  CheckCircle2, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const RakTaxAndCompliance = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const compliancePillars = [
    {
      title: 'UAE Corporate Tax (0% vs 9%)',
      badge: 'Federal Tax Authority (FTA)',
      desc: 'Under UAE Federal Decree-Law No. 47 of 2022, RAKEZ companies can benefit from a 0% Corporate Tax rate on Qualifying Income if they meet Qualifying Free Zone Person (QFZP) standards—including maintaining economic substance and complying with transfer pricing rules. Taxable non-qualifying net profits exceeding AED 375,000 are subject to standard 9% corporate tax.',
      mandate: 'Mandatory Corporate Tax registration with FTA is required for every registered RAKEZ company regardless of income level.'
    },
    {
      title: 'Value Added Tax (VAT 5%)',
      badge: '5% Standard Rate',
      desc: 'RAKEZ free zones are subject to UAE VAT rules. Goods entering designated bonded customs zones can benefit from specific tax suspensions, while commercial services and supplies inside the UAE market are subject to the standard 5% VAT rate.',
      mandate: 'Mandatory VAT registration applies once taxable turnover exceeds AED 375,000 over the preceding 12 months (voluntary registration at AED 187,500).'
    },
    {
      title: 'Audited Financial Statements',
      badge: 'Annual Accounting Requirement',
      desc: 'RAKEZ regulations require registered entities to maintain standard accounting books and records compliant with IFRS. Companies must prepare annual audited financial statements certified by an approved UAE auditor for submission at licence renewal.',
      mandate: 'Brightlink accounting partners manage full bookkeeping, IFRS ledger structuring, and year-end audit liaison.'
    },
    {
      title: 'UBO & AML/CFT Compliance',
      badge: 'Federal Compliance Standard',
      desc: 'All RAKEZ licensees must maintain an up-to-date Ultimate Beneficial Ownership (UBO) register disclosing any individual holding 25% or more equity, alongside strict Anti-Money Laundering / Counter Financing of Terrorism (AML/CFT) filing on goAML portals where applicable.',
      mandate: 'Non-compliance can incur substantial administrative penalties; Brightlink ensures automated compliance filing.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Scale className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>TAX & REGULATORY OBLIGATIONS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            RAK Free Zone Tax, Audit & Annual Compliance
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Operating in RAKEZ offers exceptional fiscal advantages while remaining fully aligned with UAE federal tax laws, international OECD transparency standards, and local regulatory mandates.
          </p>
        </div>

        {/* 4 Compliance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {compliancePillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-[#FAF7F0]/30 rounded-2xl border border-[#E6D7C3] p-7 flex flex-col justify-between hover:border-[#DECBB5] hover:shadow-sm transition-all"
            >
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                    {item.title}
                  </h3>
                  <span className="self-start sm:self-auto text-[10px] font-bold uppercase tracking-wider text-[#B8864B] bg-white px-2 py-0.5 rounded border border-[#DECBB5] whitespace-normal break-words">
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.desc}
                </p>

                <div className="p-3.5 rounded-xl bg-white border border-[#EFEAE2] flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#334155] leading-relaxed font-medium">
                    {item.mandate}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EFEAE2] flex items-center justify-between text-xs text-[#64748B]">
                <span>Full compliance management by Brightlink</span>
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tax Registration Assistance Notice */}
        <div className="bg-[#FAF5EC] rounded-2xl border border-[#DECBB5] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left min-w-0">
            <h4 className="font-bold text-sm sm:text-base text-[#1E293B]">
              Need Corporate Tax or VAT Registration for your RAKEZ company?
            </h4>
            <p className="text-xs sm:text-sm text-[#475569]">
              Brightlink certified tax agents handle your FTA Corporate Tax registration, tax returns, and annual financial audit filings seamlessly.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              if (onOpenConsultation) {
                onOpenConsultation('RAKEZ Corporate Tax & VAT Support');
              } else {
                window.open('https://wa.me/971566556645?text=Hello%2C%20I%20need%20assistance%20with%20Corporate%20Tax%20and%20VAT%20compliance%20for%20my%20RAK%20Free%20Zone%20company.', '_blank');
              }
            }}
            className="px-5 py-2.5 rounded-xl bg-[#B8864B] hover:bg-[#976A36] text-white text-xs font-bold transition-all shrink-0 cursor-pointer inline-flex items-center gap-2"
          >
            <span>Consult Tax Specialist</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
