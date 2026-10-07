import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileSearch, 
  BookOpenCheck, 
  FileBadge2, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';

export const ReraHowWeDeliver = () => {
  const deliveryPhases = [
    {
      phase: '01',
      title: 'Profile Audit & Activity Mapping',
      timeframe: 'Day 1',
      icon: FileSearch,
      deliverables: [
        'Free eligibility check of educational degree and UAE residency status',
        'Recommendation on optimal legal structure (Mainland DED vs Freezone agency)',
        'Checklist of required attestations (MOFA & consular legalization)'
      ]
    },
    {
      phase: '02',
      title: 'DREI Enrollment & Exam Preparation',
      timeframe: 'Days 2 - 5',
      icon: BookOpenCheck,
      deliverables: [
        'Direct registration for the certified DREI training module',
        'Provision of BrightLink revision summaries and past question patterns',
        'Dubai Police Certificate of Good Conduct application typing'
      ]
    },
    {
      phase: '03',
      title: 'Exam Clearance & RERA Electronic Filing',
      timeframe: 'Days 6 - 8',
      icon: FileBadge2,
      deliverables: [
        'Assistance with exam scheduling at official testing venues',
        'Immediate DLD system synchronization upon clearing the exam',
        'Drafting of corporate sponsorship agreements or agency linkage'
      ]
    },
    {
      phase: '04',
      title: 'Broker Card Activation & Trakheesi Permits',
      timeframe: 'Days 9 - 12',
      icon: CheckCircle2,
      deliverables: [
        'Generation of your official digital RERA Broker Card with QR verification',
        'Activation on the government Trakheesi property advertising portal',
        'Immediate readiness to list, market, and close Dubai property transactions'
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              Execution Workflow
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-4">
            How We Deliver
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-[#B8864B]">
            Structured, transparent, and completely managed from end to end.
          </p>
        </div>

        {/* 4 Delivery Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {deliveryPhases.map((phase, idx) => {
            const PhaseIcon = phase.icon;
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-[#EFEAE2] hover:border-[#B8864B]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Horizontal connector on desktop */}
                {idx < deliveryPhases.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-[2px] bg-[#E6D7C3] z-10" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl sm:text-4xl font-extrabold font-heading text-[#B8864B]/35 group-hover:text-[#B8864B] transition-colors">
                      {phase.phase}
                    </span>

                    <div className="w-11 h-11 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center group-hover:bg-[#B8864B] group-hover:text-white transition-all shadow-2xs">
                      <PhaseIcon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#976A36] mb-2 bg-[#FAF5EC] px-2.5 py-1 rounded-md border border-[#E6D7C3]/60">
                    <Clock className="w-3 h-3" />
                    <span>{phase.timeframe}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#222222] mb-3 leading-snug group-hover:text-[#B8864B] transition-colors">
                    {phase.title}
                  </h3>

                  <div className="space-y-2 pt-3 border-t border-neutral-100">
                    {phase.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                        <span className="text-[12px] text-[#555555] leading-relaxed">
                          {d}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
