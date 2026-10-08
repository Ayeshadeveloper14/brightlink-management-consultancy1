import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Calendar, 
  FileText, 
  Lock, 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  Scale, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const AjmanCompliance = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const complianceObligations = [
    {
      icon: Calendar,
      title: 'Annual Renewal',
      desc: 'Renew the company registration annually through your authorized registered agent prior to the anniversary date to prevent registry suspension or fines.'
    },
    {
      icon: FileText,
      title: 'Accounting Records',
      desc: 'Maintain financial transactions, invoices, and accounting records for at least 7 years at the registered office to accurately substantiate the company’s position.'
    },
    {
      icon: Lock,
      title: 'UBO Information Maintenance',
      desc: 'Keep beneficial ownership records accurate and updated, filing any structural change (>25% ownership) with the registry within 15 days.'
    },
    {
      icon: ShieldCheck,
      title: 'KYC & Sanctions Checks',
      desc: 'Promptly respond to periodic compliance, source of funds, and due-diligence verifications required under UAE anti-money laundering regulations.'
    },
    {
      icon: Building2,
      title: 'Corporate Records Custody',
      desc: 'Ensure statutory registers of members, directors, and corporate resolutions are safely maintained in the official company register.'
    },
    {
      icon: Scale,
      title: 'Offshore Limitations Adherence',
      desc: 'Strictly observe permitted operational boundaries, avoiding domestic mainland retail commerce without appropriate onshore licensing.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Scale className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>STATUTORY GOVERNANCE & LIFECYCLE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Compliance & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Annual Renewal</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Maintaining an active offshore vehicle in good standing requires consistent compliance. Brightlink oversees all statutory deadlines to ensure continuous corporate protection.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {complianceObligations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-[#FCFAF8] rounded-2xl p-6 border border-[#E6D7C3] shadow-xs hover:shadow-md hover:border-[#B8864B]/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#F5E8D4] border border-[#DECBB5] flex items-center justify-center text-[#8C5E28] mb-4">
                    <Icon className="w-5 h-5 text-[#B8864B]" />
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] mb-2 font-heading">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F5F1EB] flex items-center gap-1.5 text-[11px] font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Mandatory Statutory Obligation</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Good Standing Reminder Callout */}
        <div className="bg-[#FAF7F0] rounded-2xl border border-[#DECBB5] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#B8864B] shrink-0" />
            <span className="text-xs sm:text-sm text-[#334155] font-medium">
              Brightlink provides automated 60-day renewal alerts and issues official Certificates of Good Standing upon request.
            </span>
          </div>

          <button
            onClick={() => onOpenConsultation && onOpenConsultation('Ajman Offshore Annual Renewal Support')}
            className="text-xs font-bold text-[#8C5E28] hover:text-[#B8864B] flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>Request Compliance Schedule</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default AjmanCompliance;
