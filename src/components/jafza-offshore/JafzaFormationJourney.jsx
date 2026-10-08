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
  Lock,
  Layers,
  Award
} from 'lucide-react';

export const JafzaFormationJourney = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Structure Planning',
      sub: 'Review ownership, objectives and intended use.',
      details: [
        'Comprehensive assessment of asset types (real estate, equity stakes, IP, or global trading).',
        'Determination of share capital denominations (AED, USD, EUR, GBP) and corporate officers.',
        'Structuring appointments for Directors, Company Secretary, and Ultimate Beneficial Owners (UBO).',
        'Customizing Memorandum and Articles of Association (MOA/AOA) bylaws.'
      ]
    },
    {
      num: '02',
      title: 'Company Name Selection',
      sub: 'Select and approve the company name.',
      details: [
        'Submission of 3 preferred corporate names ending in "Limited" or "Ltd." to JAFZA authority.',
        'Screening against restricted terms (banking, insurance, emirate names) and existing registry records.',
        'Pre-clearance of trade name within JAFZA official portal.',
        'Formal issuance of Trade Name Reservation voucher.'
      ]
    },
    {
      num: '03',
      title: 'Documentation Preparation',
      sub: 'Prepare shareholder, director and compliance documents.',
      details: [
        'Drafting of constitutional Memorandum & Articles of Association (MOA/AOA) per JAFZA standards.',
        'Compilation of shareholder passport scans, proof of residential address (<3 months), and CVs.',
        'Preparation of corporate shareholder resolutions and good standing certificates where applicable.',
        'Specimen signature verification and registered agent mandate drafting.'
      ]
    },
    {
      num: '04',
      title: 'UBO & KYC Review',
      sub: 'Complete beneficial ownership and due diligence requirements.',
      details: [
        'Execution of statutory Ultimate Beneficial Ownership (UBO) declaration under UAE Cabinet Resolution.',
        'Internal AML/CFT risk screening and source of funds narrative validation.',
        'Collection of bank reference letters or certified statements from ultimate beneficiaries.',
        'Pre-submission compliance auditing by Brightlink registered agent team.'
      ]
    },
    {
      num: '05',
      title: 'Registered Agent Filing',
      sub: 'Submit incorporation through the authorized registered agent.',
      details: [
        'Official electronic dossier lodgement through Brightlink’s authorized JAFZA agent portal.',
        'Statutory registered office address assignment within Dubai territory.',
        'Payment of official JAFZA government incorporation fees and registration dues.',
        'Direct coordination with JAFZA Registry inspection officers.'
      ]
    },
    {
      num: '06',
      title: 'Registry Approval',
      sub: 'Application review and approval process.',
      details: [
        'Security screening and formal statutory review by JAFZA offshore regulatory division.',
        'Cross-verification of corporate objects and international activity disclosures.',
        'Verification of legalized parent company documents for corporate holdings.',
        'Final clearance issued by JAFZA Registrar.'
      ]
    },
    {
      num: '07',
      title: 'Incorporation Documents Issued',
      sub: 'Receive incorporation certificate and company documents.',
      details: [
        'Issuance of official Certificate of Incorporation stamped by JAFZA Authority.',
        'Delivery of verified Memorandum and Articles of Association (MOA/AOA).',
        'Issuance of statutory Register of Members, Register of Directors, and Share Certificates.',
        'Compilation of complete Offshore Corporate File kit.'
      ]
    },
    {
      num: '08',
      title: 'Banking Preparation',
      sub: 'Prepare supporting documentation for corporate banking requirements.',
      details: [
        'Drafting of corporate business profile narrative, projected cash flows, and counterparties.',
        'Direct introduction to premier UAE commercial banks (Emirates NBD, Mashreq, Wio, ADCB).',
        'Facilitation of compliance interviews and source-of-wealth documentation review.',
        'Support with multi-currency IBAN setup (AED, USD, EUR, GBP).'
      ]
    },
    {
      num: '09',
      title: 'Ongoing Compliance',
      sub: 'Maintain annual renewals and corporate records.',
      details: [
        'Statutory annual renewal filing with JAFZA before anniversary date.',
        'Continuous maintenance of statutory registered office and agent representation.',
        'Filing of annual UBO updates and 7-year accounting record archiving.',
        'UAE Corporate Tax registration and return submission advisory.'
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>STRUCTURED NINE-STAGE PROTOCOL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            JAFZA Offshore <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Formation Journey</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            By statutory mandate, JAFZA Offshore entities must be incorporated through an authorized Registered Agent. Brightlink guides you seamlessly across all nine milestones.
          </p>
        </div>

        {/* Milestone Grid / Stepper Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-2.5 mb-10">
          {steps.map((st, i) => {
            const isSelected = i === selectedStep;
            return (
              <button
                key={i}
                onClick={() => setSelectedStep(i)}
                className={`p-3 rounded-2xl text-left border transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md ring-2 ring-[#B8864B]/30' 
                    : 'bg-[#FCFAF8] border-[#E6D7C3] hover:border-[#DECBB5] hover:bg-white text-[#475569]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[11px] font-extrabold font-heading ${isSelected ? 'text-[#F5D7A1]' : 'text-[#8C5E28]'}`}>
                    {st.num}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#F5D7A1]' : 'bg-[#DECBB5]'}`} />
                </div>
                <div className={`text-[11px] font-bold leading-tight line-clamp-2 ${isSelected ? 'text-white' : 'text-[#0F172A]'}`}>
                  {st.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedStep}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-[#FAF7F0] via-[#FFFFFF] to-[#FAF5EC] rounded-3xl border border-[#DECBB5] p-6 sm:p-10 shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-8 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider">
                    <span>MILESTONE {steps[selectedStep].num} OF 09</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-heading">
                    {steps[selectedStep].title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed">
                    {steps[selectedStep].sub}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                    Operational Requirements & Scope:
                  </div>
                  {steps[selectedStep].details.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-4 flex-wrap">
                  <button
                    onClick={() => onOpenConsultation && onOpenConsultation(`JAFZA Milestone Inquiry: Stage ${steps[selectedStep].num} - ${steps[selectedStep].title}`)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#B8864B] to-[#8C5E28] hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-sm"
                  >
                    <span>Inquire About This Stage</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <span className="text-xs text-[#64748B]">
                    Authorized Registered Agent Representation
                  </span>
                </div>
              </div>

              {/* Right Summary Badge */}
              <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-[#DECBB5] shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8C5E28] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
                  <span>Brightlink Execution Standards</span>
                </div>

                <div className="space-y-2 text-xs text-[#475569]">
                  <p>
                    Every stage is overseen by our specialized corporate secretarial team in Dubai to ensure compliance with JAFZA Offshore Companies Regulations.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FAF7F0] border border-[#DECBB5] space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">Registry Authority:</span>
                    <span className="font-bold text-[#0F172A]">JAFZA (Dubai)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">Target Incorporation:</span>
                    <span className="font-bold text-[#8C5E28]">5 – 8 Working Days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#64748B]">Remote Procedure:</span>
                    <span className="font-bold text-emerald-700">Fully Supported</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default JafzaFormationJourney;
