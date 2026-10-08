import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  Scale, 
  Receipt, 
  FileText, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Lock
} from 'lucide-react';

export const ComplianceObligations = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const complianceItems = [
    {
      icon: Clock,
      title: 'Annual License & Ejari Renewal',
      description: 'Your DET Professional License and tenancy Ejari must be renewed annually before their expiration date to avoid municipal penalties, freeze of establishment cards, or bank account suspension.',
      timeline: 'Annual Frequency'
    },
    {
      icon: Receipt,
      title: 'UAE Corporate Tax Compliance',
      description: 'All mainland commercial entities must register with the Federal Tax Authority (FTA). Under UAE Federal Decree-Law, a 9% corporate tax applies on annual taxable net profits exceeding AED 375,000.',
      timeline: 'Mandatory FTA Registration'
    },
    {
      icon: Scale,
      title: 'Value Added Tax (VAT) Filing',
      description: 'Mandatory VAT registration (5%) applies once your taxable supplies exceed AED 375,000 over a 12-month period (voluntary registration available at AED 187,500), followed by quarterly filings.',
      timeline: 'Quarterly FTA Returns'
    },
    {
      icon: Lock,
      title: 'Ultimate Beneficial Ownership (UBO)',
      description: 'Under UAE Cabinet Resolution, companies must maintain up-to-date Ultimate Beneficial Owner (UBO) registers and notify DET within 15 days of any changes in ownership or shareholding control.',
      timeline: 'Continuous Governance'
    },
    {
      icon: ShieldCheck,
      title: 'AML & KYC Obligations (DNFBPs)',
      description: 'Service entities categorized under Designated Non-Financial Businesses and Professions (such as legal consultants, auditors, and corporate service providers) must register on goAML and maintain strict KYC.',
      timeline: 'Sector-Specific'
    },
    {
      icon: FileText,
      title: 'Bookkeeping & Commercial Records',
      description: 'UAE Commercial Companies Law mandates that all incorporated businesses maintain comprehensive financial accounting books, invoices, and supporting financial records for a minimum of 5 years.',
      timeline: '5-Year Statutory Retention'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Post-Licensing Governance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Ongoing Corporate & Tax Compliance
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            Maintaining a mainland company in Dubai requires staying aligned with federal and local statutory duties. Brightlink provides continuous PRO and corporate advisory support so your company operates with zero compliance penalties.
          </p>
        </div>

        {/* 6-Card Grid of Compliance Responsibilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complianceItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-[#DECBB5] shadow-xs flex flex-col justify-between hover:border-[#B8864B] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] text-[#8C5E28] flex items-center justify-center shadow-2xs">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8864B] bg-[#FAF7F0] px-2.5 py-1 rounded-full border border-[#DECBB5]/60">
                      {item.timeline}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#F5F1EB] flex items-center gap-1.5 text-xs font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Managed Under Brightlink Corporate PRO</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#DECBB5] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-[#0F172A] font-heading">
              Need ongoing Corporate Tax, Bookkeeping, or License Renewal retainers?
            </h4>
            <p className="text-xs text-[#64748B]">
              Our dedicated corporate services team assists with annual renewal reminders, FTA filings, and mandatory corporate register maintenance.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Compliance & Tax Support')}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] hover:bg-[#B8864B] hover:text-white font-bold text-xs transition-colors cursor-pointer"
          >
            Ask a Compliance Specialist
          </button>
        </div>

      </div>
    </section>
  );
};

export default ComplianceObligations;
