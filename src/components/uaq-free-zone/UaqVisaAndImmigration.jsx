import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  CreditCard, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Building, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

export const UaqVisaAndImmigration = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const visaCategories = [
    {
      title: 'Investor & Partner Visas (2 Years)',
      desc: 'Issued to registered company shareholders holding qualifying equity in an FZE or FZC. Confers full UAE residence rights, freedom to reside in any emirate, tax residency certificate eligibility, and family sponsorship privileges.',
      eligibility: 'Shareholder status documented on the UAQ FTZ commercial licence and share certificate.'
    },
    {
      title: 'Employee Residence Visas',
      desc: 'Enables companies to legally recruit and sponsor executives, operational specialists, technical professionals, and administrative staff under the company’s corporate immigration file.',
      eligibility: 'Subject to company visa quota allocation, authenticated employment contracts, and academic credential verification where required.'
    },
    {
      title: 'Family & Dependent Sponsorship',
      desc: 'Once the primary investor or employee residence visa is issued and stamped, holders can sponsor their spouse, dependent children, and parents under standard UAE immigration criteria.',
      eligibility: 'Requires registered UAE tenancy contract (Ejari or equivalent), attested marriage/birth certificates, and verified monthly income.'
    }
  ];

  const immigrationSteps = [
    { step: '01', title: 'Establishment Card', desc: 'Activate the company immigration file with the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP).' },
    { step: '02', title: 'Entry Permit Issuance', desc: 'Apply for the electronic entry permit or in-country status change for the applicant.' },
    { step: '03', title: 'Medical Fitness Exam', desc: 'Complete mandatory blood test and chest X-ray screening at an authorized UAE medical fitness centre.' },
    { step: '04', title: 'Emirates ID Biometrics', desc: 'Attend the designated ICP service centre for biometric fingerprint scanning and digital photograph capture.' },
    { step: '05', title: 'Residence Visa Stamping', desc: 'Final residency endorsement and digital Emirates ID card issuance delivering full legal status.' }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <CreditCard className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>RESIDENCY & IMMIGRATION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            UAQ Free Zone Visa & Immigration Framework
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            A UAQ Free Trade Zone company formation can serve as the legal foundation for securing UAE residency for yourself, your business partners, and your team.
          </p>
        </div>

        {/* 3 Visa Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visaCategories.map((vc, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="bg-[#FAF7F0]/30 rounded-2xl border border-[#E6D7C3] p-6 flex flex-col justify-between hover:border-[#DECBB5] transition-all"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                  <Users className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-[#0F172A] font-heading">
                  {vc.title}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed">
                  {vc.desc}
                </p>

                <div className="p-3 rounded-xl bg-white border border-[#EFEAE2] text-xs text-[#334155]">
                  <strong className="text-[#8C5E28]">Key Requirement: </strong>
                  {vc.eligibility}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#EFEAE2] text-[11px] text-[#64748B] flex items-center justify-between">
                <span>2-Year Renewable Residency</span>
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 5-Step Immigration Journey */}
        <div className="bg-[#FAF7F0]/40 rounded-3xl border border-[#E6D7C3] p-8 sm:p-10 space-y-8">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading">
              The UAE Residence Visa Application Journey
            </h3>
            <p className="text-xs sm:text-sm text-[#475569]">
              Brightlink’s dedicated PRO team oversees each mandatory milestone to ensure smooth, compliant processing:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {immigrationSteps.map((st, sIdx) => (
              <div key={sIdx} className="bg-white rounded-xl p-4 border border-[#EFEAE2] space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#B8864B] font-heading">
                    {st.step}
                  </span>
                  <Clock className="w-3.5 h-3.5 text-[#8C5E28]" />
                </div>
                <h4 className="text-xs font-bold text-[#0F172A] font-heading">
                  {st.title}
                </h4>
                <p className="text-[11px] text-[#475569] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Facility & Visa Link Notice */}
          <div className="p-4 rounded-xl bg-white border border-[#DECBB5] flex items-start gap-3">
            <Building className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
            <div className="text-xs text-[#475569] leading-relaxed">
              <strong className="text-[#1E293B]">Facility Linkage: </strong>
              The total visa allocation granted to a UAQ FTZ company is directly governed by the physical facility package selected. Basic flexi-desk packages typically support 1 to 3 visas, while dedicated physical offices and warehouses enable expanded allocations based on square footage.
            </div>
          </div>
        </div>

        {/* Essential Legal Clarification */}
        <div className="p-6 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-[#8C5E28] shrink-0 mt-0.5" />
          <div className="space-y-1.5 text-xs sm:text-sm text-[#475569] leading-relaxed">
            <h4 className="font-bold text-[#1E293B]">
              Immigration Approval & Authority Discretion
            </h4>
            <p>
              Company incorporation in UAQ FTZ does not constitute a guaranteed visa approval. All residence visa applications are subject to independent security clearance, medical fitness certification, and approval by the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP). Allocation limits, nationality requirements, and administrative procedures remain subject to current federal immigration policies.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
