import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileCheck, 
  Clock, 
  CreditCard, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const IloeHowToClaim = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const claimSteps = [
    {
      stepNum: '01',
      title: 'Involuntary Job Loss Notice',
      subtitle: 'Qualifying Reason',
      description: 'Your employment must be terminated by your employer for involuntary reasons (e.g. corporate downsizing, economic redundancy, or company closure). Resignations or disciplinary dismissals under Article 44 are ineligible.'
    },
    {
      stepNum: '02',
      title: 'Submit Claim Within 30 Days',
      subtitle: 'Strict Time Window',
      description: 'Submit your claim through the official ILOE portal (iloe.ae) or mobile app within 30 calendar days from the date of termination. Upload your termination notice, valid Emirates ID, and active UAE bank IBAN.'
    },
    {
      stepNum: '03',
      title: 'Receive Monthly Cash Payouts',
      subtitle: 'Direct Bank Transfer',
      description: 'Once verified by Dubai Insurance and MOHRE, your 60% basic salary compensation (up to AED 10,000 for Cat A or AED 20,000 for Cat B) is transferred into your UAE bank account monthly for up to 3 consecutive months.'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FCFAF8] border-t border-[#F1EBE1]">
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
            Claim Procedure & Eligibility
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            How to claim your ILOE compensation
          </h2>
          <p className="mt-3 text-base text-[#64748B] leading-relaxed font-sans">
            Follow the formal procedure set by the UAE Unemployment Insurance Scheme to ensure your compensation claim is processed and disbursed without administrative delay.
          </p>
        </motion.div>

        {/* 3 Numbered Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {claimSteps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={shouldReduceMotion ? {} : { y: -3 }}
              className="p-6 rounded-2xl bg-white border border-[#EBE4D8] shadow-xs hover:border-[#B8864B]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] text-[#8C6230] font-black text-sm flex items-center justify-center font-heading">
                    {step.stepNum}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8864B] font-heading">
                    {step.subtitle}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] font-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#0F172A]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Legally Guaranteed</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Claim Criteria & Disqualification Rules */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.985 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-2xl bg-white border border-[#DECBB5] shadow-xs space-y-4"
        >
          <div className="flex items-center gap-2 text-[#0F172A]">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
            <h4 className="font-bold text-base sm:text-lg font-heading">
              Key Requirements & Exclusions for ILOE Payouts:
            </h4>
          </div>
          
          <ul className="text-xs sm:text-sm text-[#475569] space-y-2 list-disc list-inside leading-relaxed pl-1">
            <li><strong>12 Consecutive Months:</strong> You must have maintained an active, uninterrupted ILOE subscription for at least 12 months prior to the date of unemployment.</li>
            <li><strong>No Resignation Claims:</strong> Voluntary resignations, early retirement, or mutual contract terminations do not qualify for compensation.</li>
            <li><strong>UAE Residency:</strong> You must remain legally present inside the UAE during the compensation period; payments cease if you leave the country permanently or obtain new employment.</li>
            <li><strong>30-Day Hard Deadline:</strong> Claims submitted more than 30 days after the official employment termination notice date will be rejected by Dubai Insurance.</li>
          </ul>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 text-xs text-slate-500">
            <span>Need guidance preparing supporting documentation for an ILOE claim?</span>
            <button
              type="button"
              onClick={() => onOpenConsultation('ILOE Claim Documentation Guidance')}
              className="font-bold text-[#B8864B] hover:text-[#976A36] underline cursor-pointer"
            >
              Consult our immigration specialists →
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default IloeHowToClaim;
