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
  Layers,
  FileSignature,
  Landmark,
  UserCheck
} from 'lucide-react';

export const LlcFormationJourney = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const journeySteps = [
    {
      number: '01',
      title: 'Business Activity & Structure',
      shortTitle: 'Activity & Structure',
      icon: Layers,
      summary: 'Understand the intended activity, shareholders, manager, and appropriate LLC structure.',
      detailedDescription: 'We assess your commercial, trading, or industrial operations against the Department of Economy and Tourism (DET) activity matrix. We determine the exact legal form — such as a Single Owner LLC (LLC-SO) or standard multi-partner LLC — and structure shareholder equity ratios, manager authorities, and corporate governance.',
      deliverables: [
        'DET commercial activity code selection & cross-checking',
        'Shareholding composition (individual & corporate entities)',
        'Manager powers and legal signatory designation',
        'Foreign ownership eligibility verification'
      ]
    },
    {
      number: '02',
      title: 'Trade Name Reservation',
      shortTitle: 'Trade Name',
      icon: FileText,
      summary: 'Select and reserve a suitable company name according to authority requirements.',
      detailedDescription: 'We submit your preferred company names adhering to DET trade name standards (avoiding prohibited religious or governmental terms, restricted geographical words, and existing trademarks). The approved trade name certificate is issued with the mandatory LLC suffix.',
      deliverables: [
        'Submission of 3 distinct trade name preferences',
        'DET Trade Name Reservation Certificate',
        'English & Arabic transliteration verification',
        'Brand conflict and trademark preliminary check'
      ]
    },
    {
      number: '03',
      title: 'Initial Approval',
      shortTitle: 'Initial Approval',
      icon: FileCheck,
      summary: 'Submit the required information and obtain the relevant initial approval.',
      detailedDescription: 'The Initial Approval Certificate (Mowafaqat Mabdaeia) confirms that the Dubai government has reviewed the shareholders and manager backgrounds and has granted official authorization to proceed with company incorporation and office leasing.',
      deliverables: [
        'Initial Approval application filing via DET smart portal',
        'Security background clearance coordination where applicable',
        'Receipt of official Initial Approval Certificate',
        'Application for external ministry NOCs if regulated'
      ]
    },
    {
      number: '04',
      title: 'MOA Preparation & Notarization',
      shortTitle: 'MOA Preparation',
      icon: FileSignature,
      summary: 'Prepare and complete the Memorandum of Association and required notarization.',
      detailedDescription: 'Our corporate legal team drafts the bilingual Memorandum of Association (MOA) in Arabic and English, detailing profit/loss distributions, manager authorizations, and shareholder rights. The MOA is executed via Dubai Court Notary Public or electronic digital signing (e-Notary).',
      deliverables: [
        'Bilingual MOA drafted in accordance with UAE Companies Law',
        'Special management clauses and signing authority articles',
        'Dubai Courts digital notary public authentication (e-Notary)',
        'Power of Attorney representation where requested'
      ]
    },
    {
      number: '05',
      title: 'Premises / Office Arrangement',
      shortTitle: 'Premises & Ejari',
      icon: Building2,
      summary: 'Arrange required premises or office according to the business activity and regulations.',
      detailedDescription: 'Every mainland LLC requires a registered physical premises in Dubai. Based on your activity (commercial trading vs. retail showroom vs. warehousing), we assist in securing an approved business center flexi-desk, physical office, or warehouse, followed by official Ejari registration with the Dubai Land Department (DLD).',
      deliverables: [
        'Commercial lease contract execution',
        'Official Ejari attestation via Dubai Land Department (DLD)',
        'Dubai Municipality inspection clearance if applicable',
        'Workstation verification for staff visa quota allocation'
      ]
    },
    {
      number: '06',
      title: 'License Issuance',
      shortTitle: 'License Issuance',
      icon: ShieldCheck,
      summary: 'Complete the final application and obtain the Mainland trade license.',
      detailedDescription: 'All verified dossiers — initial approval, notarized MOA, Ejari certificate, and shareholder approvals — are submitted for final DET audit. Upon settling the official government payment voucher, the Dubai Mainland Commercial Trade License and Commercial Register are officially issued.',
      deliverables: [
        'Dubai Commercial Trade License (LLC) certificate',
        'Dubai Commercial Register document',
        'Dubai Chamber of Commerce & Industry membership',
        'Official corporate file and authorization certificate'
      ]
    },
    {
      number: '07',
      title: 'Establishment & Immigration Setup',
      shortTitle: 'Establishment Cards',
      icon: UserCheck,
      summary: 'Complete relevant establishment and immigration registrations required for visa processing.',
      detailedDescription: 'To activate your corporate capacity to hire personnel and issue investor residencies, we register your company with the General Directorate of Residency and Foreigners Affairs (GDRFA) and the Ministry of Human Resources and Emiratisation (MOHRE) for establishment cards.',
      deliverables: [
        'GDRFA Immigration Establishment Card issuance',
        'MOHRE Corporate Labor File registration',
        'Company electronic signature card setup',
        'Initial labor quota allocation review'
      ]
    },
    {
      number: '08',
      title: 'Business Activation & Operations',
      shortTitle: 'Business Activation',
      icon: CreditCard,
      summary: 'Support next steps such as banking, VAT registration, visas, and ongoing compliance.',
      detailedDescription: 'Brightlink provides complete post-licensing activation. We prepare the corporate bank account dossier and bank introductions, process 2-year partner and employee residency visas with VIP medical fitness tests, and assist with FTA Corporate Tax and VAT registration.',
      deliverables: [
        'Corporate bank account application pack and introductions',
        'Shareholder/Partner 2-year UAE residency visas & Emirates IDs',
        'Federal Tax Authority (FTA) Corporate Tax registration',
        'Ongoing corporate PRO & annual renewal assistance'
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
            <span>Turnkey LLC Lifecycle</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            LLC Formation Journey in Dubai
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            From initial business activity selection to banking introductions and immigration establishment cards, Brightlink navigates all 8 phases of mainland incorporation.
          </p>
        </div>

        {/* Desktop 8-Step Navigation Bar */}
        <div className="hidden lg:grid grid-cols-8 gap-1.5 mb-10 p-2 rounded-2xl bg-[#FAF7F0] border border-[#DECBB5]">
          {journeySteps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`py-3 px-2 rounded-xl text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-white shadow-md border border-[#B8864B]'
                    : 'hover:bg-white/60 border border-transparent text-[#475569]'
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
                  onClick={() => onOpenConsultation && onOpenConsultation(`LLC Step ${current.number}: ${current.title}`)}
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
                  Phase Deliverables
                </span>
                <span className="text-[11px] font-semibold text-[#8C5E28] bg-[#FAF5EC] px-2.5 py-0.5 rounded-full border border-[#DECBB5]/60">
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
        <div className="lg:hidden mt-8 space-y-2.5">
          <div className="text-xs font-bold text-[#8C5E28] uppercase tracking-wider mb-2">
            Tap any milestone to view details:
          </div>
          {journeySteps.map((step, idx) => (
            <div
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-[#FAF5EC] border-[#B8864B]'
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

export default LlcFormationJourney;
