import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  CheckCircle2, 
  Send, 
  RotateCcw, 
  ExternalLink,
  ShieldCheck, 
  FileText, 
  Star,
  ArrowRight,
  Globe,
  Sparkles,
  Info
} from 'lucide-react';

export const VisaStatusCheckerHero = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  // Wizard state: 1, 2, 3, or 'result'
  const [step, setStep] = useState(1);
  const [selectedEmirate, setSelectedEmirate] = useState('');
  const [selectedVisaType, setSelectedVisaType] = useState('');
  const [selectedDetailType, setSelectedDetailType] = useState('');

  const emirates = [
    { id: 'dubai', name: 'Dubai', authority: 'GDRFA' },
    { id: 'abu-dhabi', name: 'Abu Dhabi', authority: 'ICP' },
    { id: 'sharjah', name: 'Sharjah', authority: 'ICP' },
    { id: 'ajman', name: 'Ajman', authority: 'ICP' },
    { id: 'ras-al-khaimah', name: 'Ras Al Khaimah', authority: 'ICP' },
    { id: 'fujairah', name: 'Fujairah', authority: 'ICP' },
    { id: 'umm-al-quwain', name: 'Umm Al Quwain', authority: 'ICP' },
    { id: 'not-sure', name: 'Not sure', authority: 'UNKNOWN' }
  ];

  const visaTypes = [
    'Residence Visa (Employment / Partner)',
    'Golden Visa (10-Year Investor/Specialist)',
    'Family / Dependent Visa',
    'Tourist / Visit Visa',
    'Green / Freelance Visa',
    'Not sure / Other'
  ];

  const detailTypes = [
    'Passport Number & Nationality',
    'Unified Number (UID)',
    'GDRFA / ICP File Number',
    'Emirates ID Number'
  ];

  const handleSelectEmirate = (emirate) => {
    setSelectedEmirate(emirate);
    setStep(2);
  };

  const handleSelectVisaType = (type) => {
    setSelectedVisaType(type);
    setStep(3);
  };

  const handleSelectDetailType = (detail) => {
    setSelectedDetailType(detail);
    setStep(4); // result
  };

  const handleReset = () => {
    setStep(1);
    setSelectedEmirate('');
    setSelectedVisaType('');
    setSelectedDetailType('');
  };

  const isDubai = selectedEmirate?.toLowerCase() === 'dubai';
  const isNotSure = selectedEmirate?.toLowerCase() === 'not sure';

  const portalInfo = isDubai
    ? {
        name: 'GDRFA Dubai Smart Portal',
        subname: 'General Directorate of Residency & Foreigners Affairs Dubai',
        url: 'https://smart.gdrfad.gov.ae',
        badge: 'Official Dubai Portal',
        tagline: 'All Dubai issued visas & entry permits are verified directly on GDRFA.',
        steps: [
          'Choose "File Validity" or "Application Tracking".',
          'Select Search By: "Passport Information" or "File Details".',
          'Input your passport number, nationality, and birth date.',
          'Solve the captcha to view active validity, grace period & fines.'
        ]
      }
    : isNotSure
    ? {
        name: 'GDRFA Dubai or ICP Smart Services',
        subname: 'Identify by Visa File Prefix',
        url: 'https://smartservices.icp.gov.ae',
        badge: 'Federal & Local Portals',
        tagline: 'Your residency file number shows the issuing emirate:',
        steps: [
          'If file starts with 201/ — It is Dubai (Check on GDRFA).',
          'If file starts with 101/ — It is Abu Dhabi (Check on ICP).',
          'If file starts with 301/ — It is Sharjah (Check on ICP).',
          'If file starts with 401/ — It is Ajman (Check on ICP).'
        ]
      }
    : {
        name: 'ICP Federal Smart Services',
        subname: 'Federal Authority for Identity, Citizenship & Customs',
        url: 'https://smartservices.icp.gov.ae',
        badge: 'Official Federal Portal',
        tagline: `Visas issued in ${selectedEmirate} are registered with the Federal ICP authority.`,
        steps: [
          'Navigate to "Public Services" > "File Validity".',
          'Select Search by: "Passport Information" and choose "Visa".',
          'Enter your Passport Number, Nationality & Passport Expiry Date.',
          'Click Search to see file validity, issue date, and expiry.'
        ]
      };

  const waCheckMessage = encodeURIComponent(
    `Hello Brightlink, I would like a free check for my UAE visa status and file validity.\n\n` +
    (selectedEmirate ? `Emirate: ${selectedEmirate}\n` : '') +
    (selectedVisaType ? `Visa Type: ${selectedVisaType}\n` : '') +
    (selectedDetailType ? `Available Document: ${selectedDetailType}\n` : '') +
    `Please assist me in checking my active record.`
  );

  const waGeneralUrl = 'https://wa.me/971566556645?text=' + encodeURIComponent(
    'Hello Brightlink, I would like to check my UAE visa status and file validity.'
  );

  const waPassportUrl = 'https://wa.me/971566556645?text=' + encodeURIComponent(
    'Hello Brightlink, here are my passport details for a free visa status check.'
  );

  return (
    <section id="visa-checker-tool" className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-20 bg-gradient-to-b from-[#FAF7F2] via-[#FFFFFF] to-[#FAF7F2] overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#B8864B 0.6px, transparent 0.6px)`,
            backgroundSize: '32px 32px',
            opacity: 0.12
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ================= LEFT COLUMN ================= */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#B8864B]/30 text-[#8C6230] text-xs font-bold tracking-wide shadow-2xs">
              <FileText className="w-3.5 h-3.5 text-[#B8864B]" />
              <span>Free visa status check</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-tight leading-[1.15] font-heading">
              UAE visa status check{' '}
              <span className="text-[#B8864B] block mt-1">and file validity</span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed max-w-xl">
              Is your visa still active, already cancelled or past its end date? Use the checker to see which official portal holds your file and exactly what to type in. If you would rather not deal with the portals, send us your passport details on WhatsApp and our team looks it up for you, free.
            </p>

            {/* 3 Key Benefits with Green Checkmarks */}
            <div className="space-y-3 pt-1">
              {[
                'Validity and expiry date of your file',
                'Days of grace period you have left',
                'Overstay fines, if any are due'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-sm font-semibold text-[#0F172A]">{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* WhatsApp Primary Button */}
              <a
                href={waGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-bold shadow-md shadow-[#25D366]/20 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Ask us to check on WhatsApp</span>
              </a>

              {/* Send passport details button */}
              <button
                type="button"
                onClick={() => {
                  if (onOpenConsultation) {
                    onOpenConsultation('Free Visa Status Check');
                  } else {
                    window.open(waPassportUrl, '_blank');
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white border border-[#DECBB5] hover:border-[#B8864B] text-[#0F172A] hover:text-[#B8864B] text-sm font-semibold transition-all shadow-2xs hover:-translate-y-0.5 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#B8864B]" />
                <span>Send my passport details</span>
              </button>
            </div>

            {/* 3 Trust micro-badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-[#64748B]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EBE4D8] shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                No UAE PASS login needed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EBE4D8] shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                Nothing saved on this website
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EBE4D8] shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                Free of charge
              </span>
            </div>

            {/* Rating / Social Proof */}
            <div className="flex items-center gap-3 pt-3">
              <span className="text-2xl font-black text-[#0F172A] font-heading leading-none">
                4.8
              </span>
              <div className="flex flex-col">
                <div className="flex items-center text-[#B8864B] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#B8864B] text-[#B8864B]" />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-[#64748B] mt-0.5">
                  36 Google reviews
                </span>
              </div>
            </div>

            {/* Disclaimer Text */}
            <p className="text-[11px] text-[#94A3B8] leading-relaxed pt-2 max-w-xl border-t border-[#EBE4D8]/60">
              Brightlink Management Consultancy L.L.C. is licensed by Dubai's Department of Economy and Tourism. We are a private service provider, not a government authority. This page does not connect directly to GDRFA or ICP: visa records are held only by those authorities, and our team reads them on the official portals when you ask us to.
            </p>
          </motion.div>

          {/* ================= RIGHT COLUMN: INTERACTIVE WIDGET ================= */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-6 w-full"
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-[#DECBB5] overflow-hidden">
              
              {/* Card Header (Dark with Brand Gold Top Line) */}
              <div className="bg-[#0F172A] border-t-4 border-[#B8864B] px-6 py-4.5 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#B8864B] flex items-center justify-center text-white shadow-xs">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold font-heading text-white leading-tight">
                      Visa Validity Checker
                    </h2>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-extrabold uppercase tracking-wider border border-white/10">
                  PORTAL FINDER
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7">
                <AnimatePresence mode="wait">
                  
                  {/* ====== STEP 1: WHICH EMIRATE ====== */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="space-y-1">
                        <span className="text-[11px] font-extrabold text-[#B8864B] tracking-wider uppercase font-heading">
                          QUESTION 1 OF 3
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-[#0F172A] font-heading">
                          Which emirate issued the visa?
                        </h3>
                        <p className="text-xs text-[#64748B]">
                          It is printed on the visa page or e-visa. Pick "Not sure" if you cannot tell.
                        </p>
                      </div>

                      {/* 2-Column Options Grid */}
                      <div className="grid grid-cols-2 gap-2.5 pt-2">
                        {emirates.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleSelectEmirate(item.name)}
                            className="group flex items-center gap-2.5 p-3 rounded-2xl border border-[#E2E8F0] hover:border-[#B8864B] bg-[#FAFAF9] hover:bg-[#FAF5EC] text-left transition-all cursor-pointer"
                          >
                            <span className="w-4 h-4 rounded-full border-2 border-[#CBD5E1] group-hover:border-[#B8864B] flex items-center justify-center shrink-0 transition-colors">
                              <span className="w-2 h-2 rounded-full bg-transparent group-hover:bg-[#B8864B] transition-colors" />
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-[#0F172A] group-hover:text-[#8C6230] transition-colors">
                              {item.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* ====== STEP 2: VISA CATEGORY ====== */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-extrabold text-[#B8864B] tracking-wider uppercase font-heading">
                            QUESTION 2 OF 3
                          </span>
                          <span className="text-[11px] font-semibold text-[#8C6230] bg-[#FAF5EC] px-2.5 py-0.5 rounded-full border border-[#B8864B]/30">
                            {selectedEmirate}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-[#0F172A] font-heading">
                          What type of UAE visa do you hold?
                        </h3>
                        <p className="text-xs text-[#64748B]">
                          Select your visa category to determine the exact verification portal.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {visaTypes.map((type, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleSelectVisaType(type)}
                            className="group flex items-center gap-2.5 p-3 rounded-2xl border border-[#E2E8F0] hover:border-[#B8864B] bg-[#FAFAF9] hover:bg-[#FAF5EC] text-left transition-all cursor-pointer"
                          >
                            <span className="w-4 h-4 rounded-full border-2 border-[#CBD5E1] group-hover:border-[#B8864B] flex items-center justify-center shrink-0 transition-colors">
                              <span className="w-2 h-2 rounded-full bg-transparent group-hover:bg-[#B8864B] transition-colors" />
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-[#0F172A] group-hover:text-[#8C6230] transition-colors">
                              {type}
                            </span>
                          </button>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs font-semibold text-[#64748B] hover:text-[#0F172A] pt-2 flex items-center gap-1 cursor-pointer"
                      >
                        ← Back to emirates
                      </button>
                    </motion.div>
                  )}

                  {/* ====== STEP 3: DETAILS AVAILABLE ====== */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -12 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-extrabold text-[#B8864B] tracking-wider uppercase font-heading">
                            QUESTION 3 OF 3
                          </span>
                          <span className="text-[11px] font-semibold text-[#8C6230] bg-[#FAF5EC] px-2.5 py-0.5 rounded-full border border-[#B8864B]/30">
                            {selectedEmirate}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-[#0F172A] font-heading">
                          What details do you have with you?
                        </h3>
                        <p className="text-xs text-[#64748B]">
                          This determines which verification method to use on the official portal.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {detailTypes.map((detail, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleSelectDetailType(detail)}
                            className="group flex items-center gap-2.5 p-3 rounded-2xl border border-[#E2E8F0] hover:border-[#B8864B] bg-[#FAFAF9] hover:bg-[#FAF5EC] text-left transition-all cursor-pointer"
                          >
                            <span className="w-4 h-4 rounded-full border-2 border-[#CBD5E1] group-hover:border-[#B8864B] flex items-center justify-center shrink-0 transition-colors">
                              <span className="w-2 h-2 rounded-full bg-transparent group-hover:bg-[#B8864B] transition-colors" />
                            </span>
                            <span className="text-xs sm:text-sm font-bold text-[#0F172A] group-hover:text-[#8C6230] transition-colors">
                              {detail}
                            </span>
                          </button>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-xs font-semibold text-[#64748B] hover:text-[#0F172A] pt-2 flex items-center gap-1 cursor-pointer"
                      >
                        ← Back to visa type
                      </button>
                    </motion.div>
                  )}

                  {/* ====== STEP 4: RESULT SCREEN ====== */}
                  {step === 4 && (
                    <motion.div
                      key="result"
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-4"
                    >
                      {/* Matched Portal Banner */}
                      <div className="p-4 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#8C6230]">
                            RECOMMENDED OFFICIAL PORTAL
                          </span>
                          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#B8864B] text-white">
                            {portalInfo.badge}
                          </span>
                        </div>
                        <h4 className="text-lg font-black text-[#0F172A] font-heading">
                          {portalInfo.name}
                        </h4>
                        <p className="text-xs text-[#475569]">
                          {portalInfo.tagline}
                        </p>
                      </div>

                      {/* Instructions List */}
                      <div className="p-4 rounded-2xl bg-white border border-[#E2E8F0] space-y-2">
                        <span className="text-xs font-extrabold text-[#0F172A] block">
                          How to check your record:
                        </span>
                        <ol className="space-y-1.5 text-xs text-[#64748B]">
                          {portalInfo.steps.map((st, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-4 h-4 rounded-full bg-[#FAF5EC] text-[#8C6230] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                                {i + 1}
                              </span>
                              <span>{st}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-2 pt-1">
                        <a
                          href={portalInfo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer"
                        >
                          <Globe className="w-4 h-4 text-[#B8864B]" />
                          <span>Open Official Portal Directly</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                        </a>

                        <a
                          href={'https://wa.me/971566556645?text=' + waCheckMessage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold transition-all shadow-xs cursor-pointer"
                        >
                          <span>Ask Brightlink on WhatsApp</span>
                          <span className="text-[11px] font-normal opacity-90">(+971 56 655 6645)</span>
                        </a>
                      </div>

                      {/* Restart / Back */}
                      <div className="flex items-center justify-between pt-1">
                        <button
                          type="button"
                          onClick={handleReset}
                          className="text-xs font-bold text-[#8C6230] hover:text-[#B8864B] flex items-center gap-1.5 cursor-pointer"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                          <span>Check another visa</span>
                        </button>
                        <span className="text-[11px] text-[#94A3B8]">
                          {selectedEmirate} • {selectedVisaType}
                        </span>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Card Footer Note */}
              <div className="px-6 py-3.5 bg-[#FAF7F2] border-t border-[#EBE4D8] text-[11px] text-[#64748B] flex items-center gap-2">
                <Info className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
                <span>This checker does not read your record. It shows where your file is held and how to look it up yourself.</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisaStatusCheckerHero;
