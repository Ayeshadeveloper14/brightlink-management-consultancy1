import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Building2, 
  ShieldCheck, 
  Landmark, 
  FileCheck2, 
  Sparkles,
  Clock,
  Send,
  Lock
} from 'lucide-react';

export const RakProcessTimeline = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Structural Architecture Consultation',
      duration: 'Day 1',
      summary: 'Define your entity’s precise strategic mission, share capital structure, and corporate officers.',
      details: [
        'Evaluation of intended holding assets (real estate, operational subsidiaries, or international trade).',
        'Selection of company type (Company Limited by Shares, Guarantee, or Segregated Portfolio Company).',
        'Determination of authorized share capital and division into distinct share classes (voting, non-voting, preference).',
        'Structuring appointments for Directors, Secretary, and Ultimate Beneficial Owners (UBO).'
      ]
    },
    {
      number: '02',
      title: 'Trade Name Reservation & KYC Pre-Check',
      duration: 'Day 1 - 2',
      summary: 'Secure corporate name approval and perform initial anti-money laundering compliance screening.',
      details: [
        'Submission of 3 preferred corporate names ending in "Limited" or "Ltd." to RAK ICC registry.',
        'Name screening against restricted terminology and existing registry duplicates.',
        'Initial AML/CFT and sanctions database verification by Brigitlink compliance officers.',
        'Issuance of formal Name Reservation Certificate.'
      ]
    },
    {
      number: '03',
      title: 'MOA Drafting & Registered Agent Appointment',
      duration: 'Day 2 - 3',
      summary: 'Bespoke drafting of constitutional documents and statutory agent mandate.',
      details: [
        'Customization of Memorandum and Articles of Association (MOA/AOA) tailored to client requirements.',
        'Drafting of official UBO Declaration and Register of Directors in statutory RAK ICC format.',
        'Formal execution of Brigitlink Registered Agent representation agreement.',
        'Digital client signing protocols with zero requirement for physical presence.'
      ]
    },
    {
      number: '04',
      title: 'Registry Filing & Statutory Review',
      duration: 'Day 3 - 4',
      summary: 'Submission of formal electronic dossier to RAK ICC government portal.',
      details: [
        'Official submission through accredited Registered Agent portal.',
        'Verification of shareholder passports, utility bills, and bank reference documentation.',
        'Government statutory review and compliance clearance.',
        'Payment of government incorporation fees.'
      ]
    },
    {
      number: '05',
      title: 'Certificate of Incorporation Issuance',
      duration: 'Day 4 - 5',
      summary: 'Entity officially brought into legal existence under RAK ICC statutory seal.',
      details: [
        'Issuance of digital and verified Certificate of Incorporation with official QR registry code.',
        'Provision of stamped Memorandum and Articles of Association (MOA/AOA).',
        'Delivery of official Register of Members and Register of Directors.',
        'Issuance of Registered Office Certificate verifying legal domicile.'
      ]
    },
    {
      number: '06',
      title: 'Bank Introduction & Asset Onboarding',
      duration: 'Post-Formation',
      summary: 'Strategic onboarding to multi-currency banking and asset registration platforms.',
      details: [
        'Preparation of corporate banking profile dossiers and transaction narratives.',
        'Introduction to premier UAE banks (Emirates NBD, Mashreq, Wio) and international corporate banking providers.',
        'Integration with Dubai Land Department (DLD) for property purchase title deed registration.',
        'Assistance with corporate tax registration and compliance filing roadmap.'
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>SWIFT & STRUCTURED WORKFLOW</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            The RAK ICC <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Incorporation Journey</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            By law, RAK ICC offshore companies must be formed and maintained through a licensed Registered Agent. Brigitlink provides end-to-end representation from drafting to bank onboarding.
          </p>
        </div>

        {/* Stepper Progression Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {steps.map((step, idx) => {
            const isCurrent = idx === activeStep;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-2xl text-left border transition-all cursor-pointer relative ${
                  isCurrent 
                    ? 'bg-white border-[#B8864B] shadow-md ring-2 ring-[#B8864B]/20' 
                    : 'bg-white/80 border-[#E6D7C3] hover:border-[#DECBB5] hover:bg-white shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[11px] font-extrabold ${isCurrent ? 'text-[#B8864B]' : 'text-[#94A3B8]'}`}>
                    STEP {step.number}
                  </span>
                  <span className="text-[10px] font-semibold text-[#64748B] bg-[#FAF7F0] px-2 py-0.5 rounded-md border border-[#E6D7C3]/60">
                    {step.duration}
                  </span>
                </div>
                <div className={`text-xs font-bold line-clamp-2 ${isCurrent ? 'text-[#0F172A]' : 'text-[#475569]'}`}>
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl border border-[#DECBB5] p-6 sm:p-10 shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-8 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#F5E8D4] border border-[#DECBB5] flex items-center justify-center font-extrabold text-[#8C5E28] font-heading text-base">
                      {steps[activeStep].number}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading">
                        {steps[activeStep].title}
                      </h3>
                      <span className="text-xs text-[#8C5E28] font-semibold">
                        Estimated Turnaround: {steps[activeStep].duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[#475569] leading-relaxed">
                    {steps[activeStep].summary}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                      Key Milestone Deliverables:
                    </div>
                    {steps[activeStep].details.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-3 flex-wrap">
                    <button
                      onClick={() => onOpenConsultation && onOpenConsultation(`Initiate Step ${steps[activeStep].number}: ${steps[activeStep].title}`)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#B8864B] to-[#8C5E28] hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-sm"
                    >
                      <span>Start This Step</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <span className="text-xs text-[#64748B]">
                      Zero physical travel needed. Processed 100% digitally.
                    </span>
                  </div>
                </div>

                {/* Right Visual Highlight */}
                <div className="lg:col-span-4 bg-[#FAF7F0] rounded-2xl p-6 border border-[#E6D7C3] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#8C5E28] uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
                    <span>Statutory Agent Representation</span>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    Brigitlink acts as your accredited representative, handling all liaison with the Registrar, statutory registries, registered address filing, and official compliance notices.
                  </p>

                  <div className="p-3.5 rounded-xl bg-white border border-[#DECBB5] space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Overall Timeline:</span>
                      <span className="font-bold text-[#0F172A]">3 – 5 Working Days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Investor Presence:</span>
                      <span className="font-bold text-emerald-700">Remote / Not Required</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#64748B]">Registry Body:</span>
                      <span className="font-bold text-[#8C5E28]">RAK ICC Government</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default RakProcessTimeline;
