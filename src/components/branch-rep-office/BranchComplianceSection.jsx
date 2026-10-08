import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  Clock, 
  Receipt, 
  FileText, 
  AlertTriangle, 
  Building2, 
  Users, 
  Sparkles,
  CheckCircle2,
  Lock
} from 'lucide-react';

export const BranchComplianceSection = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const complianceDuties = [
    {
      icon: Clock,
      title: 'Annual License & Ejari Renewal',
      desc: 'Annual renewal of the DET Commercial License, Ministry of Economy registration, and physical office Ejari lease before statutory expiration to maintain active legal standing.',
      tag: 'Annual Renewal'
    },
    {
      icon: Receipt,
      title: 'Corporate Tax Registration & Filing',
      desc: 'Foreign branches in the UAE constitute a Permanent Establishment (PE) under UAE Corporate Tax Law and must register with the Federal Tax Authority (FTA) and submit annual tax filings.',
      tag: 'Federal Tax Authority'
    },
    {
      icon: Lock,
      title: 'Parent Good Standing Maintenance',
      desc: 'The branch’s legal authority in Dubai is directly contingent upon the continued active, solvent registration of the foreign parent company in its native home country.',
      tag: 'Parent Standing'
    },
    {
      icon: Users,
      title: 'WPS & Labor File Compliance',
      desc: 'Full compliance with Ministry of Human Resources and Emiratisation (MOHRE) regulations, including employee salary disbursements via the Wage Protection System (WPS).',
      tag: 'Labor Compliance'
    },
    {
      icon: FileText,
      title: 'Maintaining Corporate & Branch Books',
      desc: 'Maintaining dedicated accounting records, expense ledgers, and transaction files reflecting the financial activities of the Dubai branch for a minimum statutory period of 5 years.',
      tag: 'Financial Records'
    },
    {
      icon: ShieldCheck,
      title: 'Ongoing Authority Reporting',
      desc: 'Notification to the Ministry of Economy and DET within statutory deadlines regarding any parent corporate changes, amendments to board resolutions, or replacement of the General Manager.',
      tag: 'Corporate Governance'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Statutory Duties</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Compliance & Ongoing Regulatory Obligations
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            Operating an international branch in the UAE requires continuous alignment with both federal commercial guidelines and the active status of your foreign parent company.
          </p>
        </div>

        {/* 6 Structured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {complianceDuties.map((item, idx) => {
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
                  <span>Managed under Brightlink Corporate PRO</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Prominent Activity Limitation Warning for Representative Offices */}
        <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-300/80 shadow-xs flex items-start gap-4 max-w-4xl mx-auto">
          <AlertTriangle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <h4 className="text-sm font-bold text-amber-950 font-heading">
              Strict Activity Limitations for Representative Offices:
            </h4>
            <p className="text-xs text-amber-900 leading-relaxed font-sans">
              <strong>Permitted activities must be strictly followed.</strong> A Representative Office is authorized solely for marketing, brand outreach, liaison, and industry research. It is legally prohibited from executing local commercial sales, generating revenue onshore, or invoicing UAE clients directly. All expenses must be funded exclusively via remittances from the parent headquarters.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BranchComplianceSection;
