import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Users, 
  Building2, 
  Crown, 
  CreditCard, 
  Stamp, 
  ArrowRightLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  FileText,
  ChevronRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const MostRequestedServices = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedPanel, setSelectedPanel] = useState(0);

  const panels = [
    {
      id: 'family-visa',
      title: 'Family Residence Visa',
      category: 'Sponsorship',
      tag: 'Spouse & Children',
      icon: Users,
      turnaround: '2–3 Working Days',
      headline: 'Sponsor Your Spouse, Children & Parents in Dubai',
      overview: 'Turnkey residency sponsorship under Dubai GDRFA guidelines. We handle file opening, entry permit issuance, VIP medical typing, biometric scheduling, and final residency visa issuance.',
      keyPoints: [
        'Minimum sponsor salary: AED 4,000 or AED 3,000 + accommodation',
        'Valid Ejari tenancy certificate required in sponsor name',
        'MOFA attested marriage and birth certificates prepared',
        'Digital residency card activated instantly upon GDRFA approval'
      ],
      image: 'https://website-imges.vercel.app/family_visa_dubai.jpg'
    },
    {
      id: 'employment-visa',
      title: 'Corporate Employment Visa',
      category: 'Workforce',
      tag: 'New Hires & Staff',
      icon: Building2,
      turnaround: '3–5 Working Days',
      headline: 'End-to-End Expatriate Employee Work Residency',
      overview: 'Complete corporate workforce processing bridging MOHRE and GDRFA. From quota application and electronic work permit typing to residency stamping and labour card issuance.',
      keyPoints: [
        'Mainland DED and Free Zone corporate company sponsorship',
        'MOHRE electronic job offer letter and quota clearance',
        'Fast-track medical fitness and Emirates ID biometric escort',
        'Comprehensive labor card typing and contract legalization'
      ],
      image: 'https://website-imges.vercel.app/about_visa_consultant_1790842347102.jpg'
    },
    {
      id: 'golden-visa',
      title: '10-Year Golden Visa',
      category: 'Long-Term',
      tag: 'Investors & Talents',
      icon: Crown,
      turnaround: '3–7 Working Days',
      headline: 'Prestigious Self-Sponsored 10-Year UAE Residency',
      overview: 'Dedicated Amer Center fast-track channel for property owners (AED 2M+), entrepreneurs, senior executives (AED 30k+ salary), doctors, and exceptional talents with unlimited family sponsorship.',
      keyPoints: [
        '100% self-sponsored: no local employer or sponsor required',
        'Sponsor spouse, children of any age, and domestic staff',
        'Stay outside the UAE indefinitely without visa cancellation',
        'Complimentary Dubai Police Esaad loyalty discount card'
      ],
      image: 'https://website-imges.vercel.app/service_golden_visa_1790842391749.jpg'
    },
    {
      id: 'emirates-id',
      title: 'Emirates ID Typing & Biometrics',
      category: 'Identity',
      tag: 'ICP Registration',
      icon: CreditCard,
      turnaround: 'Same-Day / 24 Hrs',
      headline: 'Federal Identity Card Registration & Fast Renewal',
      overview: 'Official electronic ICP typing for new residents, renewals, and lost card replacements. Includes biometric slot reservations at Customer Happiness Centers and express courier hand-delivery.',
      keyPoints: [
        'Unified 15-digit identity number linked to UAE Pass',
        'Priority appointment reservation at authorized biometric centers',
        'Instant digital card generation accessible on mobile apps',
        'Secure courier delivery of physical smart card to your address'
      ],
      image: 'https://website-imges.vercel.app/service_golden_visa_1790842391749.jpg'
    },
    {
      id: 'visa-stamping',
      title: 'Electronic Visa Stamping',
      category: 'Documentation',
      tag: 'Residency Issuance',
      icon: Stamp,
      turnaround: '24–48 Hours',
      headline: 'Official GDRFA Electronic Residence Stamping',
      overview: 'Following medical clearance and biometric capture, we complete electronic residence visa stamping with GDRFA Dubai, issuing your official electronic residency document linked to your passport.',
      keyPoints: [
        'Official digital residency file registered with GDRFA and ICP',
        'Seamless integration with airport Smart Gates and immigration',
        'Immediate verification barcode for bank KYC and tenancy contracts',
        'Valid for 1, 2, or 3-year periods according to your sponsorship category'
      ],
      image: 'https://website-imges.vercel.app/process_bg_skyline_1790959277672.jpg'
    },
    {
      id: 'status-change',
      title: 'In-Country Status Change',
      category: 'Amendments',
      tag: 'No Airport Exit',
      icon: ArrowRightLeft,
      turnaround: 'Same-Day / Instant',
      headline: 'Switch Visas Locally Without Leaving the UAE',
      overview: 'Transition smoothly from tourist visa, visit visa, or cancelled residency to a new residence permit without costly airport border runs or international flights.',
      keyPoints: [
        'Avoid expensive flights and border travel disruptions',
        'Immediate legal activation of your new entry permit inside UAE',
        'Seamless transfer between employers without exiting the country',
        'Official GDRFA electronic status change certificate issued instantly'
      ],
      image: 'https://website-imges.vercel.app/hero_dubai_skyline_1790842330436.jpg'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] relative border-b border-[#F1EBE1]">
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
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              High-Demand Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Most Requested Amer Center Services
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Explore detailed specifications, turnaround benchmarks, and government requirements for our 6 most frequently requested immigration solutions.
          </p>
        </motion.div>

        {/* Horizontal Split Layout: Left selector pills, Right active wide panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Horizontal / Vertical Nav Panels */}
          <div className="lg:col-span-5 space-y-3">
            {panels.map((panel, idx) => {
              const Icon = panel.icon;
              const isActive = selectedPanel === idx;

              return (
                <button
                  key={panel.id}
                  type="button"
                  onClick={() => setSelectedPanel(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#FAF5EC] border-[#B8864B] shadow-sm'
                      : 'bg-[#FCFAF8] border-[#EFEAE2] hover:border-[#DECBB5]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-[#B8864B] text-white shadow-xs'
                        : 'bg-white border border-[#E6D7C3] text-[#B8864B] group-hover:bg-[#FAF5EC]'
                    }`}>
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className={`font-heading font-bold text-sm sm:text-base ${
                          isActive ? 'text-[#976A36]' : 'text-[#222222] group-hover:text-[#B8864B]'
                        }`}>
                          {panel.title}
                        </h3>
                      </div>
                      <span className="text-xs text-[#777777]">
                        {panel.tag} • {panel.turnaround}
                      </span>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isActive ? 'text-[#B8864B] translate-x-1' : 'text-neutral-400 group-hover:text-[#B8864B]'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Wide Detailed Horizontal Showcase Panel */}
          <div className="lg:col-span-7">
            {(() => {
              const active = panels[selectedPanel];
              const ActiveIcon = active.icon;

              return (
                <motion.div
                  key={active.id}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-3xl p-6 sm:p-8 bg-[#FCFAF8] border border-[#E6D7C3] shadow-lg shadow-black/5 flex flex-col justify-between"
                >
                  {/* Top Bar with Badge & SLA */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#EFEAE2] mb-6">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] flex items-center justify-center text-[#B8864B]">
                        <ActiveIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#B8864B] font-heading block">
                          {active.category} Category
                        </span>
                        <h4 className="font-heading font-bold text-lg text-[#222222]">
                          {active.title}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E6D7C3] text-xs font-bold text-[#976A36]">
                      <Clock className="w-3.5 h-3.5 text-[#B8864B]" />
                      <span>{active.turnaround}</span>
                    </div>
                  </div>

                  {/* Headline & Overview */}
                  <div className="space-y-4 mb-6">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#222222] leading-snug">
                      {active.headline}
                    </h3>
                    <p className="text-sm text-[#555555] leading-relaxed">
                      {active.overview}
                    </p>
                  </div>

                  {/* Key Points Bullet List */}
                  <div className="space-y-2.5 mb-8 p-5 rounded-2xl bg-white border border-[#EFEAE2]">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#976A36] mb-2 font-heading">
                      GDRFA Regulatory Framework:
                    </div>
                    {active.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#444444]">
                        <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Bar */}
                  <div className="pt-4 border-t border-[#EFEAE2] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-[#777777]">
                      <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
                      <span>Authorized Amer GDRFA Clearance</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenConsultation && onOpenConsultation(`Most Requested Amer - ${active.title}`)}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white text-xs font-bold hover:brightness-105 transition-all cursor-pointer shadow-md shadow-[#B8864B]/20 flex items-center justify-center gap-2"
                    >
                      <span>Apply for {active.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
};

export default MostRequestedServices;
