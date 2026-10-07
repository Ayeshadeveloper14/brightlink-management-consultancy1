import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Building2, 
  ShieldCheck, 
  FileCheck, 
  CreditCard, 
  Sparkles,
  ChevronRight,
  Clock,
  Layers
} from 'lucide-react';

export const SetupJourneyTimeline = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const journeySteps = [
    {
      number: '01',
      title: 'Business Activity & Structure',
      shortTitle: 'Activity & Structure',
      icon: Layers,
      summary: 'Review intended business activity, shareholders, manager, and the optimal legal form.',
      detailedDescription: 'Our advisors analyze your service offering against official DET activity codes. We determine the ideal legal form — whether a Sole Establishment, Civil Company (partnership of professionals), or single-owner LLC — to ensure 100% foreign ownership compliance and optimal tax structuring.',
      deliverables: [
        'DET activity code mapping (single or multiple codes)',
        'Legal structure selection (Sole Proprietorship / Civil / LLC)',
        'Shareholding and Manager appointment resolution',
        'Initial eligibility and regulatory pre-check'
      ]
    },
    {
      number: '02',
      title: 'Trade Name & Initial Approval',
      shortTitle: 'Name & Initial Approval',
      icon: FileText,
      summary: 'Reserve the official trade name and secure initial clearance from DET.',
      detailedDescription: 'We submit your preferred company trade name adhering to DET naming regulations (avoiding trademark infringements, religious terms, or misleading suffixes). Once approved, we file the Initial Approval application, confirming the Dubai government permits you to proceed with establishment.',
      deliverables: [
        'Trade Name Reservation Certificate from DET',
        'Initial Approval Certificate (Mowafaqat Mabdaeia)',
        'External government NOCs application (if regulated activity)',
        'Validity monitoring during the setup window'
      ]
    },
    {
      number: '03',
      title: 'Documentation & Agreements',
      shortTitle: 'Documentation & MOA',
      icon: FileCheck,
      summary: 'Draft required company documents, agreements, attestations, and approvals where applicable.',
      detailedDescription: 'We draft and legally translate all foundational documentation, including the Memorandum of Association (MOA) or Local Service Agent (LSA) Agreement if required for your specific activity. Documents are authenticated before the Dubai Court Notary Public or completed via official digital notarization.',
      deliverables: [
        'MOA or LSA Agreement drafting in Arabic & English',
        'Court notary signing & digital e-Notary attestation',
        'Shareholder passport/visa legal verification',
        'Power of Attorney representation where requested'
      ]
    },
    {
      number: '04',
      title: 'Premises / Office Arrangement',
      shortTitle: 'Premises & Ejari',
      icon: Building2,
      summary: 'Arrange appropriate premises, flexi-desk or physical commercial office with certified Ejari.',
      detailedDescription: 'Every mainland license requires a registered physical address in Dubai. Depending on your business model, we connect you with approved business center flexi-desks, co-working facilities, or private commercial offices and register the official Ejari tenancy with the Dubai Land Department (DLD).',
      deliverables: [
        'Commercial lease contract execution',
        'Official Ejari attestation via Dubai Land Department (DLD)',
        'Dubai Municipality inspection clearance if applicable',
        'Physical workspace verification for visa quota allocation'
      ]
    },
    {
      number: '05',
      title: 'License Issuance & Payment Voucher',
      shortTitle: 'License Issuance',
      icon: ShieldCheck,
      summary: 'Submit final dossiers and follow through until the mainland Professional License is issued.',
      detailedDescription: 'All verified approvals, Ejari certificates, notarized agreements, and shareholder files are submitted to DET. We review the official DET payment voucher, settle government fees, and collect the final Mainland Professional License and Commercial Register.',
      deliverables: [
        'Official DET Professional License certificate',
        'Dubai Commercial Register certificate',
        'Dubai Chamber of Commerce membership registration',
        'Official company seal and corporate pack'
      ]
    },
    {
      number: '06',
      title: 'Business Activation & Operations',
      shortTitle: 'Business Activation',
      icon: CreditCard,
      summary: 'Establishment cards, corporate bank account guidance, residency visas, and tax onboarding.',
      detailedDescription: 'Licensing is just day one. Brigitlink handles the critical operational follow-ups: issuing your GDRFA and MOHRE Establishment Cards, processing investor and employee residency visas with VIP medical typing, and guiding your corporate bank account application.',
      deliverables: [
        'GDRFA Immigration & MOHRE Establishment Cards',
        'Shareholder/Investor 2-year residency visas & Emirates IDs',
        'Corporate bank account opening dossier and introduction',
        'Corporate Tax and VAT registration guidance with the FTA'
      ]
    }
  ];

  const current = journeySteps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#E6D7C3]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Turnkey Roadmap</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Professional License Setup Journey
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            From initial business activity selection to corporate banking and visa issuance, Brigitlink manages each milestone through an orderly, transparent 6-stage lifecycle.
          </p>
        </div>

        {/* Desktop/Tablet Horizontal Stage Selector */}
        <div className="hidden lg:grid grid-cols-6 gap-2 mb-10 p-2 rounded-2xl bg-[#FAF7F0] border border-[#DECBB5]">
          {journeySteps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`py-3 px-3 rounded-xl text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-white shadow-md border border-[#B8864B]'
                    : 'hover:bg-white/60 border border-transparent text-[#475569]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[11px] font-extrabold font-heading ${isSelected ? 'text-[#B8864B]' : 'text-[#8C5E28]/70'}`}>
                    STEP {step.number}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#B8864B]" />
                  )}
                </div>
                <div className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-[#0F172A]' : 'text-[#475569]'}`}>
                  {step.shortTitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Display Card */}
        <div className="bg-[#FAF7F0] rounded-3xl border border-[#DECBB5] p-6 sm:p-8 lg:p-12 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Number, Title, Detailed Description */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#B8864B] font-heading">
                  {current.number}
                </span>
                <div className="h-7 w-[1px] bg-[#DECBB5]" />
                <div className="p-2 rounded-xl bg-white border border-[#DECBB5] text-[#8C5E28] shadow-2xs">
                  <CurrentIcon className="w-5 h-5 stroke-[1.8]" />
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading mb-2">
                  {current.title}
                </h3>
                <p className="text-sm text-[#8C5E28] font-semibold">
                  {current.summary}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {current.detailedDescription}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenConsultation && onOpenConsultation(`Journey Step ${current.number}: ${current.title}`)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                >
                  <span>Inquire About Stage {current.number}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Deliverables Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-[#DECBB5] shadow-xs">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F5F1EB]">
                <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider font-heading">
                  Stage Deliverables
                </span>
                <span className="text-[11px] font-semibold text-[#8C5E28] bg-[#FAF5EC] px-2.5 py-0.5 rounded-full border border-[#DECBB5]/60">
                  Brigitlink Execution
                </span>
              </div>

              <ul className="space-y-3">
                {current.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Step Navigation Controls */}
              <div className="mt-6 pt-4 border-t border-[#F5F1EB] flex items-center justify-between text-xs font-bold">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className={`px-3 py-1.5 rounded-lg border transition-colors ${
                    activeStep === 0
                      ? 'border-neutral-200 text-neutral-300 cursor-not-allowed'
                      : 'border-[#DECBB5] text-[#475569] hover:bg-[#FAF5EC] cursor-pointer'
                  }`}
                >
                  ← Previous
                </button>

                <span className="text-[#8C5E28]">
                  Step {activeStep + 1} of {journeySteps.length}
                </span>

                <button
                  type="button"
                  disabled={activeStep === journeySteps.length - 1}
                  onClick={() => setActiveStep(prev => Math.min(journeySteps.length - 1, prev + 1))}
                  className={`px-3 py-1.5 rounded-lg border transition-colors ${
                    activeStep === journeySteps.length - 1
                      ? 'border-neutral-200 text-neutral-300 cursor-not-allowed'
                      : 'border-[#B8864B] bg-[#FAF5EC] text-[#8C5E28] hover:bg-[#B8864B] hover:text-white cursor-pointer'
                  }`}
                >
                  Next Stage →
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Mobile Accordion View for Small Screens */}
        <div className="lg:hidden mt-8 space-y-3">
          <div className="text-xs font-bold text-[#8C5E28] uppercase tracking-wider mb-2">
            Tap any milestone to view details:
          </div>
          {journeySteps.map((step, idx) => (
            <div
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-[#FAF5EC] border-[#B8864B]'
                  : 'bg-white border-[#EFEAE2]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-sm font-extrabold text-[#B8864B] font-heading">
                    {step.number}
                  </span>
                  <span className="text-xs font-bold text-[#0F172A]">
                    {step.title}
                  </span>
                </div>
                <ChevronRight className={`w-4 h-4 text-[#B8864B] transition-transform ${activeStep === idx ? 'rotate-90' : ''}`} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SetupJourneyTimeline;
