import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Compass, 
  FileText, 
  PenTool, 
  Building, 
  Award, 
  CreditCard,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const FreeZoneSetupProcess = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      step: '01',
      title: 'Jurisdiction & Activity Selection',
      icon: Compass,
      description: 'Consult with Brightlink advisors to determine the ideal free zone authority matching your commercial activities, visa requirements, and budget.',
      deliverables: ['Activity code mapping', 'Authority cost comparison', 'Optimal visa quota planning']
    },
    {
      step: '02',
      title: 'Trade Name Reservation',
      icon: FileText,
      description: 'Submit your three preferred trade names to the Free Zone Authority for compliance checking, approval, and official reservation.',
      deliverables: ['Trade name pre-approval', 'KYC & passport screening', 'Initial authority registry clearance']
    },
    {
      step: '03',
      title: 'Legal Structuring & MOA Signing',
      icon: PenTool,
      description: 'Draft the Memorandum of Association (MOA) and Articles of Association. Shareholders complete electronic or physical document signing.',
      deliverables: ['Digital MOA execution', 'Shareholder allocation agreement', 'Director/Manager appointment']
    },
    {
      step: '04',
      title: 'Workspace & Facility Allocation',
      icon: Building,
      description: 'Finalize your registered office facility. Choose from flexi-desks, dedicated coworking passes, executive office suites, or warehousing.',
      deliverables: ['Lease / flexi-desk agreement', 'Official registered business address', 'Ejari / tenancy contract (where applicable)']
    },
    {
      step: '05',
      title: 'Trade License & Certificate Issuance',
      icon: Award,
      description: 'Upon authority approval and payment clearance, your official Dubai Free Zone Trade License and Certificate of Formation are generated.',
      deliverables: ['Free Zone Trade License', 'Certificate of Incorporation', 'Share Register & Articles']
    },
    {
      step: '06',
      title: 'Visas & Corporate Bank Account',
      icon: CreditCard,
      description: 'We process your Immigration Establishment Card, UAE residence visas (medical fitness & Emirates ID), and introduce you to premier UAE banks.',
      deliverables: ['Immigration Establishment Card', '2-Year UAE Residence Visas & Emirates IDs', 'Corporate bank account introduction']
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Compass className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>STEP-BY-STEP ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            How to Set Up a Dubai Free Zone Business
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Brightlink guides you through a clear, systematic 6-stage formation journey. We handle all paperwork, government submissions, and post-licensing services.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="rounded-2xl p-6 bg-[#FAF7F0]/60 border border-[#E6D7C3] hover:border-[#DECBB5] hover:bg-white hover:shadow-xl transition-all duration-200 flex flex-col justify-between group relative"
              >
                {/* Step Number Top Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E6D7C3] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors duration-200 shadow-2xs">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <span className="text-2xl font-black text-[#DECBB5] font-heading group-hover:text-[#B8864B] transition-colors">
                    {st.step}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] font-heading mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {st.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-neutral-200/60">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C5E28] font-heading block mb-1">
                      Key Deliverables
                    </span>
                    {st.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-[#475569]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                        <span className="leading-snug">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-semibold text-[#8C5E28]">
                  <span>Phase {idx + 1} of 6</span>
                  <span className="text-[#B8864B]">Managed by Brightlink</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline Bottom CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0F172A] to-[#1E293B] p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#F5D7A1] text-xs font-bold uppercase tracking-wider">
              Fast-Track Processing
            </span>
            <h3 className="text-2xl font-extrabold font-heading text-white">
              Ready to Initiate Your Dubai Free Zone Company?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
              From trade name reservation to trade license issuance and UAE residence visa processing, our legal specialists ensure zero bureaucratic delays.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation('Dubai Free Zone Setup - Process Consultation')}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 active:scale-98 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer shrink-0 font-heading"
          >
            Start Setup Process
          </button>
        </div>

      </div>
    </section>
  );
};
