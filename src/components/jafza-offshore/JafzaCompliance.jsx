import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  Scale, 
  Calendar, 
  FileText, 
  Lock, 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  AlertCircle
} from 'lucide-react';

export const JafzaCompliance = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const compliancePoints = [
    {
      icon: Calendar,
      title: 'Annual Renewal',
      desc: 'Offshore entities must renew their JAFZA corporate registration and registered agent representation annually prior to the incorporation anniversary.'
    },
    {
      icon: Lock,
      title: 'UBO Updates',
      desc: 'Strict adherence to UAE Cabinet Resolution on Ultimate Beneficial Ownership. Any change in beneficial ownership (>25% shareholding) must be reported within 15 days.'
    },
    {
      icon: ShieldCheck,
      title: 'KYC Compliance',
      desc: 'Maintenance of valid, up-to-date passport copies, residential address proofs, and compliance declarations for all directors and shareholders.'
    },
    {
      icon: FileText,
      title: 'Corporate Records Maintenance',
      desc: 'Statutory registers of members, directors, officers, and charges must be continuously maintained and archived at the registered office.'
    },
    {
      icon: Building2,
      title: 'Registered Agent Requirements',
      desc: 'Entities are legally mandated to retain an accredited, licensed UAE Registered Agent at all times to serve as the official statutory domicile.'
    },
    {
      icon: Scale,
      title: 'Accounting Record Maintenance',
      desc: 'Maintenance of financial statements, invoices, and bank records for a minimum of 7 years to verify the financial standing of the entity.'
    },
    {
      icon: Sparkles,
      title: 'Regulatory Updates & Tax Filings',
      desc: 'Timely filing of UAE Corporate Tax registrations and annual returns, as well as adherence to Anti-Money Laundering (AML/CFT) updates.'
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
            Compliance & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Annual Renewals</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Maintaining a JAFZA Offshore entity in pristine legal standing requires disciplined statutory adherence. Brigitlink oversees your annual maintenance so your corporate vehicle remains fully protected and legally robust.
          </p>
        </div>

        {/* Concise Compliance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
          {compliancePoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="bg-white rounded-2xl p-5 border border-[#E6D7C3] shadow-xs hover:shadow-md hover:border-[#B8864B]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#F5E8D4] border border-[#DECBB5] flex items-center justify-center text-[#8C5E28] mb-4">
                    <Icon className="w-5 h-5 text-[#B8864B]" />
                  </div>

                  <h3 className="text-sm font-bold text-[#0F172A] mb-1.5 font-heading">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#F5F1EB] flex items-center gap-1.5 text-[11px] font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Managed by Brigitlink</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Short & Professional Reassurance Callout */}
        <div className="bg-white rounded-2xl border border-[#DECBB5] p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#B8864B] shrink-0" />
            <span className="text-xs sm:text-sm text-[#334155] font-medium">
              Automated 60-day renewal notices ensure your corporate entity never lapses into government penalty status.
            </span>
          </div>

          <button
            onClick={() => onOpenConsultation && onOpenConsultation('JAFZA Offshore Annual Renewal Assistance')}
            className="text-xs font-bold text-[#8C5E28] hover:text-[#B8864B] flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>Request Annual Compliance Schedule</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default JafzaCompliance;
