import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  MessageSquare, 
  Search, 
  FileCheck2, 
  Send, 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const ProcessTimeline = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      step: '01',
      title: 'Consultation',
      subtitle: 'Free Initial Strategy Session',
      description: 'Discuss your background, investment assets, or executive role with our senior UAE immigration counsel to identify your strongest Golden Visa route.',
      timeline: 'Day 1',
      icon: MessageSquare
    },
    {
      step: '02',
      title: 'Eligibility Assessment',
      subtitle: 'Document Pre-Audit',
      description: 'Our legal team audits your title deed, bank statements, salary certificates, and degrees against active GDRFA/ICP criteria to guarantee approval before filing.',
      timeline: 'Day 1–2',
      icon: Search
    },
    {
      step: '03',
      title: 'Documentation',
      subtitle: 'Attestation & Translation',
      description: 'We handle Ministry of Foreign Affairs (MOFA) degree attestations, certified Arabic translations, and Dubai Land Department (DLD) property valuation certificates.',
      timeline: 'Day 2–3',
      icon: FileCheck2
    },
    {
      step: '04',
      title: 'Application Submission',
      subtitle: 'Official Nomination Filing',
      description: 'We lodge your official nomination and entry permit application directly into the GDRFA Smart Channels or Federal ICP immigration portal.',
      timeline: 'Day 3–4',
      icon: Send
    },
    {
      step: '05',
      title: 'Government Processing',
      subtitle: 'VIP Medical & Biometrics',
      description: 'Escorted VIP medical fitness screening (Smart Salem results in 30 minutes) and expedited 10-year Emirates ID biometrics appointment.',
      timeline: 'Day 4–5',
      icon: Clock
    },
    {
      step: '06',
      title: 'Golden Visa Approval',
      subtitle: 'Residency Issuance & Delivery',
      description: 'Your 10-year electronic Golden Visa residency permit is issued, and your physical Emirates ID is dispatched via express courier to your doorstep.',
      timeline: 'Day 5–7',
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
              End-to-End Workflow
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            How It Works: 6-Step Fast Track Process
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            From your very first conversation to receiving your physical 10-year Emirates ID card, Brigitlink manages every government interaction with white-glove precision.
          </p>
        </motion.div>

        {/* Timeline Grid */}
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
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBE4D8] hover:border-[#B8864B] shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] text-[#B8864B] border border-[#E6D7C3] flex items-center justify-center font-bold text-lg font-heading group-hover:scale-105 transition-transform">
                      {item.step}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF8F5] text-[#888888] border border-[#EFEAE2]">
                      {item.timeline}
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
                  <span>Managed by Brigitlink Concierge</span>
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
                Ready to take Step 1?
              </span>
              <span className="text-xs text-[#666666]">
                Our consultants will assess your papers confidentially on WhatsApp or phone within 15 minutes.
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Step 1 Golden Visa Consultation')}
            className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white font-bold text-xs shadow-md shadow-[#B8864B]/20 hover:brightness-105 active:scale-98 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Start Free Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
