import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  Scale, 
  Receipt, 
  FileText, 
  Building2, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  HelpCircle
} from 'lucide-react';

export const FujairahTaxAndCompliance = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const taxRules = [
    {
      title: 'UAE Corporate Tax (Federal Decree-Law No. 47/2022)',
      desc: 'All UAE free zone companies must register for corporate tax with the Federal Tax Authority (FTA) and obtain a Tax Registration Number (TRN). A standard rate of 9% applies to taxable profits exceeding AED 375,000, unless qualifying for QFZP relief.'
    },
    {
      title: 'Qualifying Free Zone Person (QFZP) 0% Relief',
      desc: 'An FFZA company may benefit from a 0% corporate tax rate strictly on its "Qualifying Income" provided it maintains adequate economic substance, derives income from permitted qualifying activities or transactions with other free zone persons, prepares audited financial statements, and complies with arm’s length transfer pricing rules.'
    },
    {
      title: 'Value Added Tax (VAT) Regulations',
      desc: 'Free zone companies conducting domestic taxable supplies must register for VAT if taxable supplies exceed the mandatory threshold of AED 375,000 within 12 months (voluntary registration is available at AED 187,500). Designated zones operate specific customs bonded rules for goods in transit.'
    },
    {
      title: 'Mandatory Bookkeeping & Annual Financial Audit',
      desc: 'Companies registered in Fujairah Free Zone are legally obligated to maintain proper books of accounts, ledgers, and supporting commercial documentation for a minimum of 5 years. Qualifying Free Zone Persons must undergo an annual statutory audit by a certified UAE auditor.'
    }
  ];

  const mainlandOperations = [
    {
      title: 'International & Zone-to-Zone Commerce',
      desc: '100% unrestricted right to sell, contract, and deliver goods and services internationally across the world and to other UAE Free Zone entities without local customs duty.',
      status: 'Fully Permitted'
    },
    {
      title: 'Selling Goods into UAE Mainland',
      desc: 'Goods shipped from Fujairah Free Zone into mainland UAE territory are treated as foreign imports. They must clear UAE Customs, pay applicable customs duties (typically 5%), and be distributed through an appointed local commercial agent, mainland distributor, or your own mainland branch.',
      status: 'Customs & Distributor Required'
    },
    {
      title: 'Delivering Professional Services Onshore',
      desc: 'Providing services to mainland commercial clients generally requires clear B2B contracting. Certain regulated sectors may require onshore municipal permits, or establishing a dual-licence / mainland branch to contract directly on mainland territory.',
      status: 'Subject to Activity Rules'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Scale className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>TAXATION, STATUTORY OBLIGATIONS & MARKET ACCESS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            UAE Corporate Tax, Compliance & Mainland Operations
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Navigating UAE corporate taxation, Value Added Tax (VAT), and ongoing statutory compliance requires clear, qualified guidance. Understand how your Fujairah Free Zone licence interacts with federal tax legislation and mainland UAE trade channels.
          </p>
        </div>

        {/* Part 1: Corporate Tax & Compliance Breakdown */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-[#0F172A] font-heading flex items-center gap-2">
            <Receipt className="w-5 h-5 text-[#B8864B]" />
            UAE Corporate Tax & Financial Compliance Framework
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {taxRules.map((rule, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-[#FCFAF8] border border-[#DECBB5] space-y-3 shadow-2xs hover:border-[#B8864B] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#FAF5EC] text-[#8C5E28] font-bold text-xs flex items-center justify-center font-heading border border-[#DECBB5]">
                    {idx + 1}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-[#0F172A] font-heading">
                    {rule.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed pl-8">
                  {rule.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 2: Mainland Business Operations & Customs Clearances */}
        <div className="rounded-2xl border border-[#DECBB5] bg-[#FAF8F5] p-6 sm:p-8 lg:p-10 space-y-6 shadow-sm">
          <div className="space-y-2 max-w-3xl">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#B8864B]" />
              Operating in the UAE Mainland Market
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              A Fujairah Free Zone licence does not grant automatic, unrestricted retail trading rights inside the onshore UAE mainland without complying with federal customs protocols. Review the three primary operational channels:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainlandOperations.map((item, mIdx) => (
              <div
                key={mIdx}
                className="p-5 rounded-xl bg-white border border-[#E6D7C3] shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FAF5EC] text-[#8C5E28] border border-[#DECBB5] uppercase">
                      {item.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#0F172A] font-heading">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Qualified Tax & Legal Disclaimer Box */}
          <div className="p-4 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-start gap-3 text-xs text-[#6D4518]">
            <AlertTriangle className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Professional Tax Advisory Note:</strong> Not all free zone entities automatically qualify for 0% corporate tax or VAT exemption. Tax eligibility is determined by your specific transaction streams, customer residency, accounting accuracy, and compliance with FTA executive regulations. Brightlink recommends securing business-specific tax advisory to optimize your corporate structure.
            </p>
          </div>

          {/* Action CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#DECBB5]">
            <span className="text-xs text-[#64748B]">
              Need help structuring mainland distribution or qualifying for 0% Corporate Tax?
            </span>
            <button
              type="button"
              onClick={() => onOpenConsultation('Tax and Mainland Trade Guidance')}
              className="px-5 py-2.5 rounded-xl bg-[#8C5E28] hover:bg-[#6D4518] text-white text-xs font-bold cursor-pointer transition-colors shadow-xs flex items-center gap-1.5"
            >
              <span>Schedule Compliance Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
