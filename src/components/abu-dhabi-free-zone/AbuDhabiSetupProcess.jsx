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
  AlertCircle
} from 'lucide-react';

export const AbuDhabiSetupProcess = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      number: '01',
      title: 'Business Consultation and Activity Assessment',
      icon: Search,
      description: 'We examine your proposed business model, target market, intended transactions, and commercial activities to identify the correct activity classifications under official authority lists.'
    },
    {
      number: '02',
      title: 'Select the Right Free Zone',
      icon: Compass,
      description: 'Compare Abu Dhabi jurisdictions—such as ADGM, KEZAD, Masdar City, or CMA—based on regulatory governance, sector alignment, operational facilities, and overall budget.'
    },
    {
      number: '03',
      title: 'Choose Legal Structure and Trade Name',
      icon: PenTool,
      description: 'Determine the appropriate legal form (FZE, FZC/FZ-LLC, or Branch) and prepare three compliant company trade names for official reservation with the chosen authority.'
    },
    {
      number: '04',
      title: 'Prepare Documents and Applications',
      icon: FolderCheck,
      description: 'Compile shareholder identification, proof of address, corporate resolutions (for holding entities), and activity descriptions. Identify any external government or sector-specific approvals.'
    },
    {
      number: '05',
      title: 'Submit the Licence Application',
      icon: Send,
      description: 'Submit your formal registration and licensing dossier to the free zone authority’s portal, coordinate with compliance officers, and respond promptly to any authority inquiries.'
    },
    {
      number: '06',
      title: 'Complete Registration & Facility Requirements',
      icon: Building,
      description: 'Settle official authority fees, finalize workspace arrangements (flexi-desk, office lease, or warehouse agreement), and receive the Certificate of Incorporation and Business Licence.'
    },
    {
      number: '07',
      title: 'Visa and Immigration Assistance',
      icon: UserCheck,
      description: 'Establish the corporate immigration file (Establishment Card) and coordinate investor, employee, or dependent visa applications—including entry permits, medical tests, and Emirates ID biometrics.'
    },
    {
      number: '08',
      title: 'Corporate Bank Account Guidance',
      icon: CreditCard,
      description: 'Assemble a robust corporate banking dossier (UBO details, commercial background, business plan, and anticipated turnover) to present to leading UAE commercial banks.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>STEP-BY-STEP FORMATION JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Step-by-Step Abu Dhabi Company Formation Process
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Our structured 8-stage methodology provides clarity and steady progress from initial activity mapping to operational licensing and banking preparation.
          </p>
        </div>

        {/* 8-Stage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                  <span>Brightlink Assisted Stage</span>
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
                Regulatory Decision-Making Disclaimer
              </h4>
              <p className="text-xs text-[#64748B] max-w-3xl leading-relaxed">
                Licence approvals, processing durations, visa issuances, and corporate bank account openings remain under the sole legal discretion of the respective Free Zone Authorities, the General Directorate of Residency and Foreigners Affairs (GDRFA), and individual commercial banking compliance departments. Brightlink facilitates documentation, compliance dossiers, and coordination without issuing unverified guarantees.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation('Abu Dhabi Formation Process Consultation')}
            className="px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer shrink-0 font-heading"
          >
            Start Your Setup
          </button>
        </div>

      </div>
    </section>
  );
};
