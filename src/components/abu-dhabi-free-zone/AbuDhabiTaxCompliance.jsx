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

export const AbuDhabiTaxCompliance = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const complianceTopics = [
    {
      icon: Percent,
      title: 'UAE Corporate Tax & QFZP Rules',
      badge: 'Federal Decree-Law No. 47 of 2022',
      details: 'All free zone entities must register for UAE Corporate Tax with the Federal Tax Authority (FTA). Companies that satisfy strict statutory conditions may qualify as a Qualifying Free Zone Person (QFZP), benefiting from a 0% rate on Qualifying Income. Non-qualifying income is taxed at the standard 9% rate.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Value Added Tax (VAT) Registration',
      badge: 'Federal Tax Authority (FTA)',
      details: 'Companies whose taxable supplies and imports exceed the mandatory threshold of AED 375,000 must register for UAE VAT (standard 5% rate). Voluntary registration is permitted once taxable supplies exceed AED 187,500. Designated zones are subject to specific customs VAT rules.'
    },
    {
      icon: BookOpen,
      title: 'Bookkeeping & Audited Accounts',
      badge: 'Statutory Obligation',
      details: 'UAE Corporate Tax legislation and specific free zone authorities (including ADGM and KEZAD) mandate maintaining complete financial books and records for at least 5 years. Many authorities require submission of annual audited financial statements prepared by an accredited UAE auditor.'
    },
    {
      icon: CalendarCheck,
      title: 'Annual Licence Renewal & Lease',
      badge: 'Yearly Maintenance',
      details: 'Business licences and facility leases must be renewed annually before expiration. Operating with an expired licence results in authority financial penalties, freezing of the corporate bank account, and immigration file suspension.'
    },
    {
      icon: ShieldCheck,
      title: 'Economic Substance & AML/CFT',
      badge: 'Regulatory Substance',
      details: 'Entities must ensure their operational substance (adequate staff, physical workspace, and expenditure in the free zone) reflects their registered commercial activities, with rigorous adherence to UAE Anti-Money Laundering and Counter-Terrorism Financing laws.'
    },
    {
      icon: AlertTriangle,
      title: 'Activity Scope Adherence',
      badge: 'Licence Boundaries',
      details: 'Companies are legally authorized to engage solely in activities explicitly stipulated on their trade licence. Expanding into new lines of trade requires formal authority amendments and potentially external government approvals.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-2xs">
            <Percent className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>STATUTORY OBLIGATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Tax and Compliance Considerations in Abu Dhabi
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Maintaining regulatory good standing in the UAE requires understanding tax registrations, audited financial records, annual renewals, and statutory compliance.
          </p>
        </div>

        {/* 6 Compliance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {complianceTopics.map((topic, idx) => {
            const Icon = topic.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-[#E6D7C3] shadow-xs hover:border-[#DECBB5] hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shadow-2xs">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FAF5EC] text-[#8C5E28] border border-[#DECBB5]/60 font-heading">
                      {topic.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {topic.details}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] text-[#475569]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Brightlink Advisory Supported</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer on Professional Tax Advice */}
        <div className="rounded-3xl bg-white border border-[#E6D7C3] p-7 sm:p-9 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E28] font-heading block">
              PROFESSIONAL TAX ADVISORY RECOMMENDATION
            </span>
            <p className="text-sm font-semibold text-[#0F172A]">
              Tax laws evolve and their application depends on your business model and transactions.
            </p>
            <p className="text-xs text-[#64748B] max-w-2xl leading-relaxed">
              The above information is provided for educational and guidance purposes. Brightlink encourages all founders to engage certified tax practitioners and legal counsels to confirm their exact Corporate Tax, VAT, and economic substance obligations under current UAE Federal Tax Authority decrees.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation('Abu Dhabi Tax & Compliance Review')}
            className="px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer shrink-0 font-heading"
          >
            Review Compliance Checklist
          </button>
        </div>

      </div>
    </section>
  );
};
