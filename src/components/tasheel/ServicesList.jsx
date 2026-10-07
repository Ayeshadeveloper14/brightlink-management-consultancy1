import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileText, 
  FileCheck2, 
  CreditCard, 
  Building2, 
  Users, 
  WalletCards, 
  KeyRound, 
  Scale, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const ServicesList = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      num: '01',
      title: 'Work Permit Services',
      span: 'lg:col-span-7', // Wider card
      subtitle: 'Issuance, Renewal & Mission Permits',
      description: 'Full processing and renewal support for electronic work permits under MOHRE. Covers standard full-time employee permits, temporary work permits, mission work permits, and part-time employee authorisations.',
      features: ['New Electronic Work Permits', 'Permit Renewals & Extensions', 'Temporary & Mission Permits'],
      icon: FileCheck2
    },
    {
      num: '02',
      title: 'Labour Contract Services',
      span: 'lg:col-span-5', // Standard card
      subtitle: 'Drafting, Submission & Amendments',
      description: 'Assistance with standard MOHRE electronic employment contracts, initial job offer letters, contract renewals, wage adjustments, and official modifications.',
      features: ['Standard MOHRE Job Offer Letters', 'Contract Terms Amendments', 'Ministry Signature Stamping'],
      icon: FileText
    },
    {
      num: '03',
      title: 'Labour Card Services',
      span: 'lg:col-span-5', // Standard card
      subtitle: 'Issuance, Renewal & Loss Replacement',
      description: 'Support with electronic labour card issuances, modifications to employee job titles, renewal filing before cut-off deadlines, and replacement of misplaced cards.',
      features: ['Electronic Labour Card Issuance', 'Job Designation Updates', 'Timely Renewal Clearance'],
      icon: CreditCard
    },
    {
      num: '04',
      title: 'Establishment Services',
      span: 'lg:col-span-7', // Wider card
      subtitle: 'Registration, Updates & Cancellations',
      description: 'Comprehensive assistance with your company’s MOHRE establishment file. We handle new establishment registration, updating trade license amendments, address relocations, partner modifications, and file cancellation upon company liquidation.',
      features: ['New Establishment File Opening', 'Trade Licence Data Alignment', 'Official File Cancellation'],
      icon: Building2
    },
    {
      num: '05',
      title: 'Visa Quota Services',
      span: 'lg:col-span-6',
      subtitle: 'Quota Allocation & Expansions',
      description: 'Support with requesting, expanding, or modifying company employee visa quotas. We coordinate commercial space verifications, activity justifications, and MOHRE compliance audits.',
      features: ['New Visa Quota Applications', 'Office Space Expansion Quotas', 'Category Quota Adjustments'],
      icon: Users
    },
    {
      num: '06',
      title: 'WPS (Wage Protection System) Services',
      span: 'lg:col-span-6',
      subtitle: 'Payroll Compliance & Account Setup',
      description: 'Guidance and administrative facilitation for UAE Wage Protection System compliance. Assistance with bank salary routing, WPS account registration, and resolving salary blockages or alerts.',
      features: ['WPS Registration & Bank Linking', 'MOHRE Salary File Monitoring', 'Compliance Audits & Fine Aversion'],
      icon: WalletCards
    },
    {
      num: '07',
      title: 'E-Signature & Signatory Updates',
      span: 'lg:col-span-6',
      subtitle: 'Authorized Personnel Management',
      description: 'Assistance with issuing and renewing the company PRO e-signature card, adding authorized signatories, and biometric verification coordination for corporate legal representatives.',
      features: ['E-Signature Card Issuance', 'Signatory Name Updates', 'Digital Power of Attorney Filing'],
      icon: KeyRound
    },
    {
      num: '08',
      title: 'Labour Dispute & Settlement Filings',
      span: 'lg:col-span-6',
      subtitle: 'Amicable Settlement & Regulatory Typing',
      description: 'Official typing and submission for amicable labour settlements, cancellation of work permits following employment termination, and resolving administrative labour notices.',
      features: ['Mutual Termination Filings', 'Clearance Documentation', 'Absconding Reporting & Cancellation'],
      icon: Scale
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              MOHRE Regulated Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Our Tasheel Services
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Professional facilitation for core Ministry of Human Resources & Emiratisation (MOHRE) transactions. Accurate, compliant, and handled by experienced UAE PRO consultants.
          </p>
        </motion.div>

        {/* Asymmetric Staggered Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {services.map((srv, index) => {
            const Icon = srv.icon;

            return (
              <motion.div
                key={srv.num}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={`${srv.span} group p-7 sm:p-8 rounded-2xl bg-white border border-[#EFEAE2] hover:border-[#DECBB5] hover:shadow-lg transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Top Bar with Number and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-bold font-heading text-[#B8864B] bg-[#FAF5EC] border border-[#E6D7C3] px-2.5 py-1 rounded-md">
                      SERVICE {srv.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#222222] mb-1 group-hover:text-[#976A36] transition-colors">
                    {srv.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#B8864B] mb-3">
                    {srv.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-5">
                    {srv.description}
                  </p>

                  {/* Feature checklist */}
                  <div className="space-y-2 pt-2 border-t border-[#F5EFE6]">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#666666]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F5EFE6] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onOpenConsultation && onOpenConsultation(`Tasheel Service - ${srv.title}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] group-hover:text-[#976A36] cursor-pointer"
                  >
                    <span>Inquire About Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <span className="text-[10px] text-neutral-400 font-medium">MOHRE Compliant</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesList;
