import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Layers, 
  FileCheck2, 
  Building2, 
  ShieldCheck, 
  Landmark, 
  Users, 
  KeyRound,
  FileSignature,
  FileSearch,
  CreditCard,
  Building
} from 'lucide-react';

export const FujairahSetupProcess = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      step: 1,
      title: 'Business Consultation',
      subtitle: 'Model, Ownership, Activity & Budget Scoping',
      desc: 'Our corporate advisors evaluate your proposed commercial model, target markets, required shareholding hierarchy, operational facility needs, and overall budget to structure the optimal Fujairah formation roadmap.',
      icon: Users
    },
    {
      step: 2,
      title: 'Select the Business Activity',
      subtitle: 'Permitted Activity Code Verification',
      desc: 'Identify and cross-check your intended operations against the official Fujairah Free Zone Authority activity list. We verify whether specialized external ministerial approvals (e.g., MOIAT, Civil Defense, or Municipality) are required.',
      icon: FileSearch
    },
    {
      step: 3,
      title: 'Choose the Company Structure',
      subtitle: 'FZE, FZC, or Corporate Branch Determination',
      desc: 'Determine whether a single-shareholder Free Zone Establishment (FZE), multi-shareholder Free Zone Company (FZC), or a Branch of a foreign or domestic UAE entity best serves your governance and liability goals.',
      icon: Building2
    },
    {
      step: 4,
      title: 'Prepare Trade Name & Application',
      subtitle: 'Trade Name Reservation & Authority Filing',
      desc: 'Submit proposed legal trade names complying with UAE naming guidelines. Complete and submit the formal initial application dossier to Fujairah Free Zone Authority for name clearance.',
      icon: FileSignature
    },
    {
      step: 5,
      title: 'Prepare Required Documents',
      subtitle: 'KYC, Attestations, MOA & Business Plans',
      desc: 'Compile comprehensive shareholder identification, passport copies, proof of residence, specimen signatures, drafted Memorandum of Association (MOA), and activity-specific business plans or project proposals.',
      icon: FileCheck2
    },
    {
      step: 6,
      title: 'Obtain Initial Approval',
      subtitle: 'FFZA Review & Security Clearance',
      desc: 'The authority conducts administrative pre-screening and security reviews. Brightlink responds directly to any requests for supplementary details, technical clarifications, or pre-requisite approvals.',
      icon: ShieldCheck
    },
    {
      step: 7,
      title: 'Complete Registration & Payments',
      subtitle: 'Statutory Fee Settlement & MOA Signing',
      desc: 'Execute formal incorporation documents, approve standard bylaws, and settle the official authority registration, commercial licence, and administrative charges.',
      icon: CreditCard
    },
    {
      step: 8,
      title: 'Arrange the Required Facility',
      subtitle: 'Office, Warehouse, or Industrial Lease Finalization',
      desc: 'Formalize your lease agreement for a flexi-desk, executive office, bonded warehouse, or industrial plot inside the free zone enclave, issuing official tenancy and utility registrations.',
      icon: Building
    },
    {
      step: 9,
      title: 'Licence Issuance',
      subtitle: 'Commercial Trade Licence & Certificate Release',
      desc: 'Upon validation of all lease and registration payments, Fujairah Free Zone Authority officially issues the Trade Licence, Certificate of Formation, and Share Certificate(s).',
      icon: KeyRound
    },
    {
      step: 10,
      title: 'Visa & Operational Preparation',
      subtitle: 'Establishment Card, Corporate Banking & Tax Setup',
      desc: 'Issue the company immigration establishment card, process investor and employee UAE residence visas, initiate corporate bank account opening files, register for UAE Corporate Tax/VAT, and establish ongoing accounting systems.',
      icon: Landmark
    }
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Clock className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>10-STAGE INCORPORATION ROADMAP</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Step-by-Step Company Formation Process
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Brightlink provides structured end-to-end guidance from initial activity evaluation through facility leasing, trade licence release, residency visas, and corporate banking preparation.
          </p>
        </div>

        {/* 10-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((item) => {
            const Icon = item.icon;
            const isCurrent = activeStep === item.step;
            return (
              <motion.div
                key={item.step}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: item.step * 0.04 }}
                onClick={() => setActiveStep(item.step)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                  isCurrent
                    ? 'bg-white border-[#B8864B] shadow-md ring-2 ring-[#B8864B]/20'
                    : 'bg-white/80 border-[#E6D7C3] hover:bg-white hover:border-[#DECBB5] shadow-xs'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-heading ${
                      isCurrent ? 'bg-[#8C5E28] text-white' : 'bg-[#FAF5EC] text-[#8C5E28]'
                    }`}>
                      {item.step}
                    </span>
                    <Icon className={`w-4 h-4 ${isCurrent ? 'text-[#B8864B]' : 'text-[#64748B]'}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0F172A] font-heading leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#8C5E28] mt-0.5 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#F1E8DC] text-[10px] font-bold text-[#8C5E28] uppercase tracking-wider flex items-center justify-between">
                  <span>Stage {item.step} of 10</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Step Spotlight Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DECBB5] shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              <span>Detailed Breakdown</span>
              <span>•</span>
              <span>Step {steps[activeStep - 1].step}: {steps[activeStep - 1].title}</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading">
              {steps[activeStep - 1].subtitle}
            </h4>
            <p className="text-sm text-[#475569] leading-relaxed">
              {steps[activeStep - 1].desc}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation(`Process Step ${activeStep}: ${steps[activeStep - 1].title}`)}
            className="px-6 py-3 rounded-xl bg-[#8C5E28] hover:bg-[#6D4518] text-white text-xs font-bold whitespace-nowrap cursor-pointer transition-colors shadow-xs shrink-0 flex items-center gap-2"
          >
            <span>Start Step {activeStep} with Brightlink</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Realistic Timelines Disclaimer */}
        <div className="p-5 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] text-xs text-[#6D4518] space-y-1">
          <p className="font-bold text-[#8C5E28]">
            Timeline and Documentation Integrity
          </p>
          <p className="leading-relaxed">
            Actual incorporation timelines, authority approvals, and required documentary submissions depend on the specific business activity, completeness of shareholder identity verification, physical facility lease signing, and the responsiveness of external regulatory departments. Brightlink audits all records prior to submission to eliminate unnecessary delays.
          </p>
        </div>

      </div>
    </section>
  );
};
