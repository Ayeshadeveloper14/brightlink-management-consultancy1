import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Layers, 
  FileText, 
  Stamp, 
  FileCheck2, 
  CreditCard, 
  Sparkles,
  ChevronRight,
  Share2,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

export const BranchSetupJourney = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const journeySteps = [
    {
      number: '01',
      title: 'Business & Eligibility Review',
      shortTitle: 'Eligibility Review',
      icon: Layers,
      summary: 'Review parent company structure, legal standing, operating history, and proposed UAE scope.',
      detailedDescription: 'We perform a comprehensive pre-audit of the parent company’s Certificate of Incorporation, operating history, shareholder composition, and constitutional charter. We verify that the intended UAE operations match DET commercial activity codes and Ministry of Economy guidelines.',
      deliverables: [
        'Parent company legal standing & operating history evaluation',
        'Proposed UAE business activities mapping to DET codes',
        'Preliminary licensing feasibility & authority pre-check',
        'Custom roadmap for international parent company documentation'
      ]
    },
    {
      number: '02',
      title: 'Structure Selection',
      shortTitle: 'Structure Selection',
      icon: Share2,
      summary: 'Determine whether a Branch Office or Representative Office matches your strategic objectives.',
      detailedDescription: 'Our advisors help your leadership evaluate whether a commercial Branch Office (capable of executing contracts and generating revenue) or a Representative Office (restricted to promotional liaison and marketing) is the optimal and legally compliant vehicle for your expansion plan.',
      deliverables: [
        'Commercial Branch vs. Representative Office feasibility analysis',
        'Revenue generation parameters & activity restriction review',
        'Local Service Agent (LSA) requirements advisory where applicable',
        'Governance model & manager signing authority framework'
      ]
    },
    {
      number: '03',
      title: 'Document Preparation',
      shortTitle: 'Document Prep',
      icon: FileText,
      summary: 'Prepare parent company corporate resolutions, financial records, and representative appointments.',
      detailedDescription: 'We assist in drafting the required Parent Company Board Resolution officially authorizing the establishment of the UAE branch, approving the capital/budget, appointing the UAE General Manager, and defining operational Powers of Attorney (POA).',
      deliverables: [
        'Parent Board Resolution authorizing Dubai establishment',
        'Parent Certificate of Incorporation & Memorandum (MOA/AOA)',
        'Certificate of Good Standing from parent country registry',
        'Power of Attorney appointing the General Manager in the UAE'
      ]
    },
    {
      number: '04',
      title: 'Attestation & Legalisation',
      shortTitle: 'Attestation & MOFA',
      icon: Stamp,
      summary: 'Complete international document legalisation, embassy authentication, and MOFA translation.',
      detailedDescription: 'Parent corporate documents must undergo formal legalisation: notarization in the home jurisdiction, certification by the foreign ministry of foreign affairs, authentication by the UAE Embassy in the parent country, and final attestation by the UAE Ministry of Foreign Affairs (MOFA) along with certified MOJ Arabic translation.',
      deliverables: [
        'Home-country notary & foreign affairs apostille/legalisation',
        'UAE Embassy authentication in the parent country',
        'UAE Ministry of Foreign Affairs (MOFA) super-legalisation',
        'Ministry of Justice (MOJ) certified legal translation into Arabic'
      ]
    },
    {
      number: '05',
      title: 'Initial Approval',
      shortTitle: 'Initial Approval',
      icon: FileCheck2,
      summary: 'Submit the application dossier and secure initial approval from DET & Ministry of Economy.',
      detailedDescription: 'We submit the attested corporate files, trade name reservation (which legally mirrors the parent company name), and parent credentials to the Dubai Department of Economy and Tourism (DET) and the UAE Ministry of Economy (MOE) to secure formal Initial Approval.',
      deliverables: [
        'Trade Name Reservation certificate matching parent company',
        'Initial Approval Certificate (Mowafaqat Mabdaeia) from DET',
        'Ministry of Economy (MOE) preliminary registration clearance',
        'Security clearances and manager approval documents'
      ]
    },
    {
      number: '06',
      title: 'Office & Tenancy (Ejari)',
      shortTitle: 'Office & Ejari',
      icon: Building2,
      summary: 'Arrange required Dubai commercial premises and complete registered tenancy documentation.',
      detailedDescription: 'Every mainland branch or representative office requires a verified physical commercial address in Dubai. Depending on your operational footprint, we coordinate physical office leasing, executive business center suites, and official Ejari attestation with the Dubai Land Department (DLD).',
      deliverables: [
        'Commercial lease contract execution in Dubai',
        'Dubai Land Department (DLD) certified Ejari certificate',
        'Dubai Municipality inspection clearance if applicable',
        'Premises readiness verification for staff visa quota allocation'
      ]
    },
    {
      number: '07',
      title: 'License Issuance',
      shortTitle: 'License Issuance',
      icon: ShieldCheck,
      summary: 'Complete licensing formalities and collect the official Branch or Representative Office license.',
      detailedDescription: 'The final file — including the attested parent dossier, initial approval, MOE clearance, and Ejari — is submitted to DET. Upon settlement of the government voucher, the official Dubai Commercial Trade License and Commercial Register are issued.',
      deliverables: [
        'Official Dubai Commercial License (Branch of Foreign Company)',
        'Dubai Commercial Register document',
        'Dubai Chamber of Commerce & Industry membership certificate',
        'Ministry of Economy official branch registration entry'
      ]
    },
    {
      number: '08',
      title: 'Staffing & Business Activation',
      shortTitle: 'Activation & Visas',
      icon: UserCheck,
      summary: 'Support applicable establishment cards, manager/staff visas, banking, and tax onboarding.',
      detailedDescription: 'Following license issuance, Brightlink activates your operational capacity: issuing GDRFA Immigration and MOHRE Establishment Cards, processing the General Manager and international staff residency visas, preparing corporate bank account applications, and registering with the FTA.',
      deliverables: [
        'GDRFA Immigration & MOHRE Corporate Establishment Cards',
        'General Manager & expatriate employee 2-year residency visas',
        'Corporate bank account opening dossier and bank introductions',
        'Federal Tax Authority (FTA) Corporate Tax registration support'
      ]
    }
  ];

  const current = journeySteps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] border-b border-[#E6D7C3]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Parent Company → UAE Branch Journey</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Branch Setup Journey in Dubai
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            From parent company constitutional document preparation and cross-border embassy legalisation to DET licensing and immigration establishment cards, Brightlink navigates all 8 phases.
          </p>
        </div>

        {/* Desktop 8-Step Navigation Bar */}
        <div className="hidden lg:grid grid-cols-8 gap-1.5 mb-10 p-2 rounded-2xl bg-white border border-[#DECBB5] shadow-xs">
          {journeySteps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`py-3 px-2 rounded-xl text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-[#FAF5EC] shadow-xs border border-[#B8864B]'
                    : 'hover:bg-neutral-50 border border-transparent text-[#475569]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-extrabold font-heading ${isSelected ? 'text-[#B8864B]' : 'text-[#8C5E28]/70'}`}>
                    STEP {step.number}
                  </span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8864B]" />
                  )}
                </div>
                <div className={`text-[11px] font-bold line-clamp-1 ${isSelected ? 'text-[#0F172A]' : 'text-[#475569]'}`}>
                  {step.shortTitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Display Card */}
        <div className="bg-white rounded-3xl border border-[#DECBB5] p-6 sm:p-8 lg:p-12 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Number, Title, Detailed Description */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#B8864B] font-heading">
                  {current.number}
                </span>
                <div className="h-7 w-[1px] bg-[#DECBB5]" />
                <div className="p-2 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] shadow-2xs">
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
                  onClick={() => onOpenConsultation && onOpenConsultation(`Branch Step ${current.number}: ${current.title}`)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-[#B8864B] text-white text-xs font-bold transition-colors cursor-pointer shadow-xs"
                >
                  <span>Inquire About Stage {current.number}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Deliverables Card */}
            <div className="lg:col-span-5 bg-[#FAF7F0] rounded-2xl p-6 border border-[#DECBB5] shadow-xs">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#DECBB5]/60">
                <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider font-heading">
                  Phase Deliverables
                </span>
                <span className="text-[11px] font-semibold text-[#8C5E28] bg-white px-2.5 py-0.5 rounded-full border border-[#DECBB5]/70">
                  Brightlink Execution
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
              <div className="mt-6 pt-4 border-t border-[#DECBB5]/60 flex items-center justify-between text-xs font-bold">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className={`px-3 py-1.5 rounded-lg border transition-colors ${
                    activeStep === 0
                      ? 'border-neutral-200 text-neutral-300 cursor-not-allowed'
                      : 'border-[#DECBB5] bg-white text-[#475569] hover:bg-[#FAF5EC] cursor-pointer'
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
        <div className="lg:hidden mt-8 space-y-2.5">
          <div className="text-xs font-bold text-[#8C5E28] uppercase tracking-wider mb-2">
            Tap any phase to view details:
          </div>
          {journeySteps.map((step, idx) => (
            <div
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-white border-[#B8864B] shadow-xs'
                  : 'bg-white border-[#EFEAE2]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-extrabold text-[#B8864B] font-heading">
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

export default BranchSetupJourney;
