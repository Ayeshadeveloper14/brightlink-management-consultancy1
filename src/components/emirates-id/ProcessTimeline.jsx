import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  MessageSquare, 
  FileCheck2, 
  Send, 
  Fingerprint, 
  Clock, 
  CreditCard, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Info
} from 'lucide-react';

export const ProcessTimeline = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      step: '01',
      title: 'Consultation',
      subtitle: 'Eligibility & Requirements Audit',
      description: 'We assess your current visa status, determine whether biometric capture is required, calculate government fees, and outline exact timelines.',
      duration: 'Day 1',
      icon: MessageSquare
    },
    {
      step: '02',
      title: 'Document Collection',
      subtitle: 'Secure Digital Verification',
      description: 'You provide passport scans, entry permit or residence visa copy, and a biometric photo. Our certified specialists audit all specifications before submission.',
      duration: 'Day 1',
      icon: FileCheck2
    },
    {
      step: '03',
      title: 'Application Submission',
      subtitle: 'ICP Portal Electronic Filing',
      description: 'We type and lodge your official application into the ICP system. You immediately receive your official PRAN application registration number and fee receipt.',
      duration: 'Day 1–2',
      icon: Send
    },
    {
      step: '04',
      title: 'Biometrics Appointment',
      subtitle: 'Fingerprints & Iris Scan',
      description: 'For first-time applicants, we schedule a convenient VIP appointment at an authorized ICP Customer Happiness Center for biometric capture and facial photo.',
      duration: 'Day 2–3',
      icon: Fingerprint
    },
    {
      step: '05',
      title: 'ICP Processing',
      subtitle: 'Security Clearance & Verification',
      description: 'ICP reviews your biometrics and validates your residency visa. Digital Emirates ID becomes instantly accessible on the ICP app and UAE Pass.',
      duration: 'Day 3–4',
      icon: Clock
    },
    {
      step: '06',
      title: 'Card Issuance & Delivery',
      subtitle: 'Physical Smart Card Dispatch',
      description: 'Your physical high-security chip card is minted, dispatched via Empost courier, and securely delivered directly to your home or office address in the UAE.',
      duration: 'Day 4–5',
      icon: CreditCard
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FCFAF8] relative border-b border-[#F1EBE1]">
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
              Step-by-Step Roadmap
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            How the Emirates ID Process Works
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Our streamlined 6-step roadmap ensures rapid processing with zero errors, prompt biometric coordination, and timely delivery of your official identity card.
          </p>
        </motion.div>

        {/* 6-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group relative p-7 rounded-2xl bg-white border border-[#EFEAE2] hover:border-[#DECBB5] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Duration */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-extrabold text-[#B8864B]/30 font-heading group-hover:text-[#B8864B] transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-bold text-[#976A36] bg-[#FAF5EC] border border-[#E6D7C3] px-2.5 py-1 rounded-md">
                      {item.duration}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-11 h-11 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors duration-300 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#222222] mb-1">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-[#B8864B] mb-2.5">
                    {item.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F5EFE6] flex items-center gap-1.5 text-xs text-[#777777]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Managed by Brightlink</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Biometrics Advisory Notice */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 rounded-2xl bg-[#FFFFFF] border border-[#E6D7C3] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 border border-[#DECBB5]">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm sm:text-base text-[#222222] mb-0.5">
                Biometric Registration Requirement Notice
              </h4>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed max-w-2xl">
                Biometric capture (fingerprints and iris scan) is mandatory for first-time applicants aged 15 and above. Existing residents renewing their card are typically exempt if their biometrics are already registered in the ICP database.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Emirates ID Biometrics Scheduling Assistance')}
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#B8864B] text-white text-xs font-bold hover:bg-[#9E723E] transition-colors cursor-pointer shadow-xs flex items-center gap-1.5"
          >
            <span>Book Biometric Slot</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProcessTimeline;
