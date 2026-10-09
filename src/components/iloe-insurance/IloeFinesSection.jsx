import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  AlertTriangle, 
  ShieldAlert, 
  DollarSign, 
  CheckCircle2, 
  FileWarning, 
  Ban, 
  CreditCard,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

export const IloeFinesSection = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const fineTypes = [
    {
      amount: 'AED 400',
      label: 'Non-Subscription Penalty',
      trigger: 'Failure to subscribe within legal deadline',
      details: 'Assessed if an employee fails to subscribe to the ILOE scheme within 4 months of their new work permit issuance or after the federal grace deadline passed on October 1, 2023.'
    },
    {
      amount: 'AED 200',
      label: 'Default on Installments',
      trigger: 'Unpaid premium installments for >3 months',
      details: 'Assessed if a subscribed employee fails to pay their scheduled installment (quarterly or semi-annually) for more than three months past the payment due date.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#F1EBE1]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Scroll Reveal */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-[#E8DFC8] pb-6 mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#B8864B] font-heading block mb-2">
            MOHRE Compliance & Penalties
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            ILOE Fines & Non-Compliance Penalties
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed font-sans">
            The UAE Ministry of Human Resources and Emiratisation strictly enforces automated financial penalties for non-compliance with the ILOE scheme.
          </p>
        </motion.div>

        {/* Content Body */}
        <div className="space-y-10 text-neutral-800 font-sans leading-relaxed text-sm sm:text-base">
          
          {/* Two Main Fine Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fineTypes.map((fine, idx) => (
              <motion.div 
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={shouldReduceMotion ? {} : { y: -3 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#FCFAF8] border border-red-200/80 shadow-xs hover:border-red-300 hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-full font-heading">
                    {fine.label}
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-red-600 font-heading">
                    {fine.amount}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                  {fine.trigger}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {fine.details}
                </p>
              </motion.div>
            ))}
          </div>

          {/* How Fines are Enforced & Deducted */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading">
              How MOHRE Collects Unpaid ILOE Fines
            </h3>
            <p className="text-sm text-[#475569]">
              Unlike elective charges, ILOE fines are directly integrated with federal labor management systems:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              <div className="border-t-2 border-[#B8864B] pt-4 space-y-2">
                <span className="text-xs font-bold uppercase text-[#B8864B] font-heading">WPS Salary Deduction</span>
                <h4 className="font-bold text-[#0F172A] text-sm">Automated Recovery</h4>
                <p className="text-xs text-[#64748B]">
                  MOHRE can deduct outstanding fine amounts directly from your salary through the Wages Protection System (WPS) or end-of-service gratuity.
                </p>
              </div>

              <div className="border-t-2 border-[#B8864B] pt-4 space-y-2">
                <span className="text-xs font-bold uppercase text-[#B8864B] font-heading">Work Permit Block</span>
                <h4 className="font-bold text-[#0F172A] text-sm">Labor Card Renewal Freeze</h4>
                <p className="text-xs text-[#64748B]">
                  No new UAE work permits will be issued, renewed, or transferred to another company until accumulated ILOE penalties are settled in full.
                </p>
              </div>

              <div className="border-t-2 border-[#B8864B] pt-4 space-y-2">
                <span className="text-xs font-bold uppercase text-[#B8864B] font-heading">Cancellation Hold</span>
                <h4 className="font-bold text-[#0F172A] text-sm">Visa Cancellation Clearance</h4>
                <p className="text-xs text-[#64748B]">
                  When cancelling residency to exit the UAE or switch sponsors, MOHRE clearance requires full payment of any unpaid ILOE fines.
                </p>
              </div>
            </div>
          </motion.div>

          {/* FamilyVisa / Brightlink Fine Settlement Assistance Banner */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.985 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#FAF5EC] to-[#F5EFE6] border border-[#DECBB5] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-2 max-w-xl">
              <h4 className="text-xl font-bold text-[#0F172A] font-heading">
                Need Help Clearing an ILOE Fine or Work Permit Block?
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Our authorized government typing specialists can audit your MOHRE labor file, verify whether fines can be appealed under administrative grace periods, and settle outstanding balances instantly to release work permit holds.
              </p>
            </div>

            <div className="shrink-0">
              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.015 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={() => onOpenConsultation('ILOE Fine Settlement & Labor Clearance')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#C5985B]" />
                <span>Clear Fine via Typing Center</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default IloeFinesSection;
