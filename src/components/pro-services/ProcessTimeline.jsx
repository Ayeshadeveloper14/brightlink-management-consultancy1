import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  MessageSquare, 
  FileCheck2, 
  Send, 
  Clock, 
  CheckCircle2, 
  Award, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';

export const ProcessTimeline = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      step: '01',
      title: 'Consultation',
      subtitle: 'Corporate Needs Assessment',
      description: 'We review your business licensing requirements, staffing quotas, and upcoming employee visa deadlines to map out an exact compliance plan.',
      duration: 'Day 1',
      icon: MessageSquare
    },
    {
      step: '02',
      title: 'Document Collection',
      subtitle: 'Digital Pre-Verification',
      description: 'You upload the necessary company papers, trade licence copies, and employee credentials to our secure client portal. Our team audits them for complete accuracy.',
      duration: 'Day 1–2',
      icon: FileCheck2
    },
    {
      step: '03',
      title: 'Government Submission',
      subtitle: 'Official Filing',
      description: 'We lodge the applications directly into the relevant government portals — MOHRE for work permits, GDRFA for entry permits, and DED for licensing amendments.',
      duration: 'Day 2–3',
      icon: Send
    },
    {
      step: '04',
      title: 'Processing',
      subtitle: 'Expedited Coordination',
      description: 'Our field PROs follow up with government authorities, arrange VIP medical fitness screening for employees, and manage biometrics scheduling.',
      duration: 'Day 3–4',
      icon: Clock
    },
    {
      step: '05',
      title: 'Approval',
      subtitle: 'Official Clearance Granted',
      description: 'Government approvals, labour contracts, and residence permits are authorized. Official government vouchers and fee receipts are provided immediately.',
      duration: 'Day 4–5',
      icon: CheckCircle2
    },
    {
      step: '06',
      title: 'Completion',
      subtitle: 'Doorstep Delivery & Archiving',
      description: 'Stamped electronic permits, original labour cards, and physical Emirates IDs are hand-delivered to your corporate office or dispatched via courier.',
      duration: 'Day 5',
      icon: Award
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Structured Execution
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            How Our PRO Process Works
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            A frictionless, six-step framework engineered to keep your corporate filings compliant, timely, and completely stress-free.
          </p>
        </motion.div>

        {/* 6 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBE4D8] hover:border-[#B8864B] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] text-[#B8864B] border border-[#E6D7C3] flex items-center justify-center font-bold text-lg font-heading group-hover:scale-105 transition-transform">
                      {item.step}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF8F5] text-[#888888] border border-[#EFEAE2]">
                      {item.duration}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-[#B8864B] uppercase tracking-wider block mb-1">
                    Step {item.step}
                  </span>

                  <h3 className="text-lg font-bold text-[#222222] font-heading mb-1">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#777777] mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F5EFE6] flex items-center gap-1.5 text-xs font-semibold text-[#B8864B]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Brigitlink SLA Guarantee</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="p-6 rounded-2xl bg-white border border-[#EBE4D8] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#B8864B] shrink-0" />
            <div>
              <span className="text-sm font-bold text-[#222222] font-heading block">
                Have urgent employment visas or expiry deadlines?
              </span>
              <span className="text-xs text-[#666666]">
                Our dedicated PRO team offers same-day express filing for critical corporate transactions.
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Urgent PRO Process Consultation')}
            className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white font-bold text-xs shadow-md shadow-[#B8864B]/20 hover:brightness-105 active:scale-98 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Speak With a PRO Officer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
