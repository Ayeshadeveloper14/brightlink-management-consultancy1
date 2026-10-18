import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Percent, 
  FileSpreadsheet, 
  BookOpen, 
  CalendarCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const AjmanTaxCompliance = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const complianceTopics = [
    {
      icon: Percent,
      title: 'UAE Corporate Tax & QFZP Regime',
      badge: 'Federal Decree-Law No. 47 of 2022',
      details: 'All Ajman Free Zone entities must register for UAE Corporate Tax with the Federal Tax Authority (FTA) and obtain a Tax Registration Number (TRN). Companies fulfilling strict statutory criteria can qualify as a Qualifying Free Zone Person (QFZP) to benefit from 0% corporate tax on Qualifying Income. Non-qualifying revenue or business conducted with mainland individuals is taxed at the standard 9% federal rate.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Value Added Tax (VAT 5%)',
      badge: 'Federal Tax Authority (FTA)',
      details: 'Businesses whose annual taxable turnover exceeds the statutory threshold of AED 375,000 must register for UAE VAT. Voluntary registration is available for revenues exceeding AED 187,500. Standard supplies in the UAE are subject to 5% VAT, while eligible international exports and certain cross-border services may be zero-rated.'
    },
    {
      icon: BookOpen,
      title: 'Mandatory Bookkeeping & Accounting Records',
      badge: '5-Year Record Keeping',
      details: 'UAE Corporate Tax legislation mandates that all free zone entities maintain comprehensive accounting records, audited financial statements, and supporting invoices for a minimum of 5 years. Preparing accounts in accordance with IFRS or IFRS for SMEs is an essential requirement for maintaining QFZP status.'
    },
    {
      icon: CalendarCheck,
      title: 'Annual Licence & Workspace Lease Renewal',
      badge: 'Yearly Maintenance',
      details: 'AFZ trade licences and registered workspace tenancy agreements (smart desk, office, or warehouse) must be renewed annually before expiration. Operating with an expired licence results in authority financial penalties, freezing of corporate bank accounts, and suspension of immigration files.'
    },
    {
      icon: ShieldCheck,
      title: 'Economic Substance & UBO Compliance',
      badge: 'Corporate Governance',
      details: 'Companies performing relevant activities must satisfy Economic Substance Regulations (ESR) demonstrating adequate operational presence, core income-generating activities (CIGA), and management in the UAE, while keeping an updated Ultimate Beneficial Owner (UBO) register.'
    },
    {
      icon: AlertTriangle,
      title: 'Licence Perimeter & Activity Boundaries',
      badge: 'Operational Compliance',
      details: 'Ajman Free Zone companies must operate strictly within the commercial activity codes explicitly authorized on their trade licence. Expanding into new lines of business requires submitting formal activity addition applications to AFZ.'
    }
  ];

  return (
    <section id="ajman-tax-compliance" className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>STATUTORY & REGULATORY GOVERNANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            UAE Corporate Tax, VAT & Statutory Compliance
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Operating a lawful, penalty-free business in the UAE requires continuous adherence to federal taxation, VAT thresholds, accounting standards, and annual authority renewals.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {complianceTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={topic.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-[#E6D7C3] hover:border-[#B8864B]/60 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#8C5E28] bg-[#FAF5EC] px-2.5 py-1 rounded-full border border-[#DECBB5]">
                      {topic.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] font-heading mb-2">
                    {topic.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {topic.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F1E8DC] flex items-center gap-1.5 text-xs font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Mandatory Statutory Compliance</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Advisory Banner */}
        <div className="rounded-2xl bg-white border border-[#DECBB5] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0 mt-0.5">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0F172A] font-heading mb-1">
                Need Professional Tax Registration or Bookkeeping in Ajman?
              </h4>
              <p className="text-xs sm:text-sm text-[#475569]">
                Brightlink assists with FTA Corporate Tax TRN generation, VAT filings, accounting system setup, and connecting you with accredited UAE auditors.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenConsultation('Ajman Tax & Compliance Consultation')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#8C5E28] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm whitespace-nowrap cursor-pointer shrink-0"
          >
            Consult Compliance Advisor
          </button>
        </div>

      </div>
    </section>
  );
};
