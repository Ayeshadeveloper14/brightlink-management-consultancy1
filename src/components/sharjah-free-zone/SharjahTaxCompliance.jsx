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
  HelpCircle 
} from 'lucide-react';

export const SharjahTaxCompliance = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const complianceTopics = [
    {
      icon: Percent,
      title: 'UAE Corporate Tax & QFZP Regime',
      badge: 'Federal Decree-Law No. 47 of 2022',
      details: 'Sharjah free zone companies must register for UAE Corporate Tax with the Federal Tax Authority (FTA) and obtain a Tax Registration Number (TRN). Companies fulfilling statutory criteria can qualify as a Qualifying Free Zone Person (QFZP) to benefit from 0% corporate tax on Qualifying Income. Non-qualifying revenue or transactions with mainland individuals are subject to standard 9% corporate tax.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Value Added Tax (VAT 5%)',
      badge: 'Federal Tax Authority (FTA)',
      details: 'Companies whose annual taxable supplies and imports exceed the mandatory threshold of AED 375,000 must register for UAE VAT. Voluntary registration is available for revenues exceeding AED 187,500. Designated zones (such as designated fenced areas in SAIF Zone and HFZA) have special customs VAT treatment for non-consumed goods.'
    },
    {
      icon: BookOpen,
      title: 'Accounting Records & Statutory Audits',
      badge: 'Mandatory Maintenance',
      details: 'Sharjah free zone entities are legally required to maintain audited books and accounting ledgers for a minimum of 5 years. Authorities like SAIF Zone and Hamriyah Free Zone require annual submission of audited financial statements prepared by an FTA-registered UAE auditor upon annual licence renewal.'
    },
    {
      icon: CalendarCheck,
      title: 'Annual Licence & Facility Lease Renewal',
      badge: 'Annual Obligation',
      details: 'All Sharjah trade licences and accompanying registered workspace leases (flexi-desk, office, or warehouse tenancy) must be renewed annually. Delaying renewal incurs monthly authority late penalties, immigration file freezing, and bank compliance holds.'
    },
    {
      icon: ShieldCheck,
      title: 'Economic Substance & Ultimate Beneficial Ownership (UBO)',
      badge: 'Regulatory Substance',
      details: 'Entities performing relevant activities must satisfy Economic Substance Regulations (ESR) demonstrating adequate operational presence, local management, and expenditures in Sharjah, while maintaining updated Ultimate Beneficial Owner (UBO) registers.'
    },
    {
      icon: AlertTriangle,
      title: 'Activity Scope Adherence & Dual Licensing',
      badge: 'Operational Perimeter',
      details: 'Companies must conduct operations strictly in accordance with their licensed activity codes. Selling goods or delivering consumer services directly into the UAE mainland requires either operating through an authorized mainland distributor or securing a Sharjah SEDD dual licence.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>REGULATORY GOVERNANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Sharjah Free Zone Taxation, VAT & Compliance Requirements
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Understanding UAE statutory regulations is essential for running a compliant, penalty-free business. Review corporate tax obligations, audit rules, and ongoing annual filings.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {complianceTopics.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
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
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] font-heading mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.details}
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
                Need Help with Corporate Tax Registration or Accounting in Sharjah?
              </h4>
              <p className="text-sm text-[#475569]">
                Brightlink assists with FTA corporate tax filings, TRN issuance, VAT returns, and connecting you with approved auditors.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenConsultation('Sharjah Free Zone Tax & Compliance Consultation')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#8C5E28] text-white font-bold text-sm transition-colors shadow-sm whitespace-nowrap cursor-pointer"
          >
            Consult Compliance Advisor
          </button>
        </div>

      </div>
    </section>
  );
};
