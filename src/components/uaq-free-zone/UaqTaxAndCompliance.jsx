import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Scale, 
  FileCheck2, 
  Percent, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  BookOpen,
  ArrowRight
} from 'lucide-react';

export const UaqTaxAndCompliance = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const compliancePillars = [
    {
      title: 'UAE Corporate Tax (0% vs 9%)',
      badge: 'Federal Decree-Law No. 47 of 2022',
      desc: 'Free zone companies in the UAE are within the scope of federal corporate tax. An entity may benefit from a 0% tax rate strictly on “Qualifying Income” provided it meets all criteria of a Qualifying Free Zone Person (QFZP)—including maintaining adequate economic substance in the UAE, conducting qualifying activities, and adhering to transfer pricing rules. Non-qualifying taxable profits exceeding AED 375,000 are subject to standard 9% corporate tax.',
      requirement: 'Mandatory Corporate Tax registration with the Federal Tax Authority (FTA) is required for all active UAQ FTZ entities regardless of income level.'
    },
    {
      title: 'Value Added Tax (VAT 5%)',
      badge: 'Federal Tax Authority (FTA)',
      desc: 'The standard 5% VAT rate applies to taxable goods and professional services supplied within the UAE. Certain transactions involving designated customs zones or exported services outside the GCC may be zero-rated or out-of-scope under specific conditions.',
      requirement: 'Mandatory VAT registration applies once taxable turnover exceeds AED 375,000 over the preceding 12-month period (voluntary registration threshold is AED 187,500).'
    },
    {
      title: 'Statutory Books & Accounting Records',
      badge: 'IFRS Compliance',
      desc: 'All UAE corporate entities are legally required to maintain formal accounting books and financial records compliant with International Financial Reporting Standards (IFRS) for a minimum statutory period of 5 to 7 years.',
      requirement: 'Companies must maintain an auditable ledger of all revenues, business expenses, bank statements, and commercial contracts.'
    },
    {
      title: 'Ultimate Beneficial Owner (UBO) & AML',
      badge: 'Cabinet Resolution No. 109 of 2023',
      desc: 'Companies must maintain an updated UBO register detailing the identity of any natural person who ultimately owns or controls 25% or more of the company’s capital, along with adherence to Anti-Money Laundering (AML/CFT) filing requirements.',
      requirement: 'Failure to file or maintain the corporate UBO register can result in administrative fines imposed by the licensing authority.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Scale className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>STATUTORY TAX & COMPLIANCE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            UAQ Free Zone Corporate Tax, VAT & Compliance
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Operating a UAE free zone business requires adherence to federal tax standards and corporate transparency regulations. Review the key statutory obligations applicable to UAQ FTZ licensees.
          </p>
        </div>

        {/* 4 Compliance Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {compliancePillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-[#FAF7F0]/30 rounded-2xl border border-[#E6D7C3] p-7 flex flex-col justify-between hover:border-[#DECBB5] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8864B] bg-white px-2 py-0.5 rounded border border-[#DECBB5] shrink-0">
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {item.desc}
                </p>

                <div className="p-3.5 rounded-xl bg-white border border-[#EFEAE2] flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#334155] leading-relaxed font-medium">
                    {item.requirement}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EFEAE2] flex items-center justify-between text-xs text-[#64748B]">
                <span>Statutory UAE Compliance</span>
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Crucial Educational Notice on 0% Tax Claims */}
        <div className="p-6 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] space-y-2">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-[#8C5E28]" />
            <h4 className="font-bold text-sm text-[#1E293B] font-heading">
              Important Guidance Regarding Corporate Tax Claims
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Prospective investors are advised to disregard outdated marketing claims asserting that UAE free zone companies are automatically 100% tax-free under all conditions. While significant tax advantages exist for Qualifying Free Zone Persons, entitlement to a 0% rate is conditional upon strict adherence to federal qualifying income guidelines, economic substance, and statutory audit filings. Brightlink coordinates with qualified UAE tax practitioners to ensure your business structure remains completely compliant with Federal Tax Authority mandates.
          </p>
        </div>

      </div>
    </section>
  );
};
