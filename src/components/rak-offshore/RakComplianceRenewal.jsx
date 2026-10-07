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
  Lock,
  Building2,
  Calendar
} from 'lucide-react';

export const RakComplianceRenewal = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const compliancePillars = [
    {
      icon: Calendar,
      title: 'Annual License & Registry Renewal',
      timeline: 'Every 12 Months',
      desc: 'Offshore companies must renew their corporate registration with RAK ICC prior to their incorporation anniversary date. This includes government statutory renewal fees and licensed Registered Agent maintenance.',
      action: 'Automated 60-day renewal reminders via Brigitlink.'
    },
    {
      icon: Building2,
      title: 'Statutory Registered Office & Agent',
      timeline: 'Continuous Obligation',
      desc: 'Under RAK ICC regulations, every offshore entity must continuously maintain an accredited Registered Agent with a verified physical UAE address for receipt of official notices and legal service.',
      action: 'Full statutory representation provided by Brigitlink.'
    },
    {
      icon: FileText,
      title: 'Maintenance of Accounting Records',
      timeline: 'Minimum 7-Year Retention',
      desc: 'Entities are legally mandated to maintain financial books, underlying contracts, and bank statements that sufficiently explain transactions and determine company financial position.',
      action: 'Cloud bookkeeping & accounting archiving support.'
    },
    {
      icon: Lock,
      title: 'UBO & Shareholder Register Filings',
      timeline: 'Within 15 Days of Any Change',
      desc: 'Strict compliance with UAE Cabinet Resolution No. (109) on Ultimate Beneficial Ownership. Changes in shareholding or control must be officially updated on the statutory register.',
      action: 'Dedicated compliance officer filing support.'
    },
    {
      icon: Receipt,
      title: 'UAE Corporate Tax Compliance',
      timeline: 'Annual Tax Period Filing',
      desc: 'Offshore entities are subject to UAE Federal Decree-Law on Corporate Tax. Entities must obtain a Tax Registration Number (TRN) and file an annual tax return, even if applying for 0% foreign income treatment or qualifying holding exemptions.',
      action: 'Corporate tax profiling and return submission.'
    },
    {
      icon: Scale,
      title: 'AML / CFT Statutory Reporting',
      timeline: 'Ongoing Screening',
      desc: 'Entities must maintain adherence to UAE Anti-Money Laundering and Counter-Terrorist Financing rules, ensuring all incoming capital and trading counterparties undergo legitimate compliance checks.',
      action: 'Ongoing transaction due diligence guidance.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Scale className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>STATUTORY GOVERNANCE & LIFECYCLE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Annual Renewal & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Compliance Obligations</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Maintaining an active, good-standing RAK ICC offshore entity requires structured statutory adherence. Brigitlink oversees your annual maintenance so your corporate vehicle remains fully protected and legally bulletproof.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {compliancePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white rounded-2xl p-6 border border-[#E6D7C3] shadow-xs hover:shadow-md hover:border-[#B8864B]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#F5E8D4] border border-[#DECBB5] flex items-center justify-center text-[#8C5E28] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-[#B8864B]" />
                    </div>
                    <span className="text-[10px] font-bold text-[#8C5E28] bg-[#FAF5EC] px-2 py-0.5 rounded-md border border-[#DECBB5]">
                      {pillar.timeline}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] mb-2 font-heading group-hover:text-[#8C5E28] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F5F1EB] flex items-center gap-1.5 text-[11px] font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
                  <span>{pillar.action}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Good Standing Callout */}
        <div className="bg-white rounded-3xl border border-[#DECBB5] p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center shrink-0 text-[#8C5E28]">
              <ShieldCheck className="w-6 h-6 text-[#B8864B]" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#0F172A] font-heading">
                Need a Certificate of Good Standing or Incumbency?
              </h4>
              <p className="text-xs text-[#64748B] max-w-xl leading-relaxed">
                We issue official RAK ICC Certificates of Good Standing, official registered agent incumbency letters, and apostilled extracts for global banks and real estate transactions within 48 hours.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenConsultation && onOpenConsultation('RAK ICC Renewal or Good Standing Request')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#0F172A] hover:bg-[#1E293B] active:scale-98 transition-all shrink-0 cursor-pointer shadow-sm"
          >
            <span>Request Corporate Services</span>
            <ArrowRight className="w-4 h-4 text-[#F5D7A1]" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default RakComplianceRenewal;
