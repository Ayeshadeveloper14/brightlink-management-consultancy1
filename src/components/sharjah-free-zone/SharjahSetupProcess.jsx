import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Compass, 
  Search, 
  PenTool, 
  FolderCheck, 
  Send, 
  Building, 
  CreditCard,
  UserCheck,
  CheckCircle2,
  AlertCircle,
  FileBadge
} from 'lucide-react';

export const SharjahSetupProcess = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      number: '01',
      title: 'Initial Business Consultation',
      icon: Search,
      description: 'We analyze your commercial activity, target market, operational scale, visa requirements, and budget to establish a clear formation roadmap.'
    },
    {
      number: '02',
      title: 'Select the Appropriate Free Zone',
      icon: Compass,
      description: 'Compare SAIF Zone, Hamriyah Free Zone, SHAMS, and SPC Free Zone based on activity compatibility, logistics needs, and facility availability.'
    },
    {
      number: '03',
      title: 'Choose Licence and Legal Structure',
      icon: PenTool,
      description: 'Determine the correct licence category (Commercial, Professional, Industrial, or E-commerce) and legal structure (FZE, FZC, or Branch).'
    },
    {
      number: '04',
      title: 'Reserve the Company Name',
      icon: FileBadge,
      description: 'Prepare three proposed trade names meeting authority naming guidelines and submit them for official registry checking and reservation.'
    },
    {
      number: '05',
      title: 'Prepare the Required Documents',
      icon: FolderCheck,
      description: 'Compile shareholder identification, proof of address, corporate resolutions (for holding companies), and activity descriptions.'
    },
    {
      number: '06',
      title: 'Submit Registration Application',
      icon: Send,
      description: 'Submit the formal application dossier to the free zone authority’s portal, coordinate with compliance officers, and manage any authority requests.'
    },
    {
      number: '07',
      title: 'Complete Licensing & Facility Requirements',
      icon: Building,
      description: 'Finalize official authority payments, execute lease arrangements (flexi-desk, office, or warehouse), and receive the Certificate of Formation and Trade Licence.'
    },
    {
      number: '08',
      title: 'Visa & Immigration Assistance',
      icon: UserCheck,
      description: 'Establish the company’s corporate immigration file (Establishment Card) and coordinate investor, employee, and dependent residency visa applications.'
    },
    {
      number: '09',
      title: 'Corporate Bank Account Guidance',
      icon: CreditCard,
      description: 'Compile a comprehensive corporate banking dossier (UBO profiles, business model description, and source of funds) for introduction to UAE banks.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>9-STAGE FORMATION TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Step-by-Step Sharjah Company Formation Process
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Our structured 9-stage methodology guides you smoothly from initial activity assessment through licensing, workspace allocation, visa processing, and banking preparation.
          </p>
        </div>

        {/* 9-Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="bg-white rounded-2xl p-6 border border-[#E6D7C3] hover:border-[#DECBB5] hover:shadow-xl transition-all duration-200 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors duration-200 shadow-2xs">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-2xl font-black text-[#DECBB5] font-heading group-hover:text-[#B8864B] transition-colors">
                      {st.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2 leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {st.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Brightlink Guided Stage</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Authority Discretion Disclaimer Banner */}
        <div className="rounded-3xl bg-white border border-[#E6D7C3] p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
              <AlertCircle className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#0F172A] font-heading">
                Authority Processing Discretion
              </h4>
              <p className="text-xs text-[#64748B] max-w-3xl leading-relaxed">
                Registration approvals, licence issuance durations, visa allocations, and corporate bank account approvals remain under the sole legal authority of the chosen Free Zone Authority, Sharjah Immigration, and independent banking compliance departments. Brightlink provides complete administrative preparation and procedural coordination without issuing false guarantees.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation('Sharjah Setup Process Consultation')}
            className="px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer shrink-0 font-heading"
          >
            Start Setup Process
          </button>
        </div>

      </div>
    </section>
  );
};
