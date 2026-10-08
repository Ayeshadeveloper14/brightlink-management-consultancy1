import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileEdit, 
  Stamp, 
  Globe2, 
  Building2, 
  ShieldCheck, 
  Info 
} from 'lucide-react';

export const AttestationJourney = () => {
  const stages = [
    {
      num: '01',
      title: 'Document Preparation',
      location: 'Issuing Authority / University',
      desc: 'Obtaining verified originals, official duplicate transcripts, or certified true copies required for legal validation.',
      icon: FileEdit
    },
    {
      num: '02',
      title: 'Notarisation & Verification',
      location: 'State Notary / Home Department',
      desc: 'Authentication by a registered public notary, state education department, or regional home department.',
      icon: Stamp
    },
    {
      num: '03',
      title: 'Home Foreign Ministry',
      location: 'MEA / FCDO / State Department',
      desc: 'National government foreign affairs verification or Apostille stamp according to international treaty status.',
      icon: Globe2
    },
    {
      num: '04',
      title: 'UAE Embassy Legalization',
      location: 'UAE Embassy / Consulate Abroad',
      desc: 'Consular certification validating the home-country foreign ministry seals for use within the UAE.',
      icon: Building2
    },
    {
      num: '05',
      title: 'UAE MOFA Final Attestation',
      location: 'Ministry of Foreign Affairs (UAE)',
      desc: 'Final official electronic sticker or stamp rendering the document fully recognized by all UAE authorities.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] relative overflow-hidden">
      {/* Subtle warm glow background */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[400px] bg-gradient-to-r from-[#B8864B]/5 via-[#FAF4EA]/40 to-[#B8864B]/5 blur-3xl pointer-events-none rounded-full" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B8864B]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#B8864B] uppercase font-heading">
              THE LEGALIZATION PATHWAY
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1A1A1A] tracking-tight mb-4">
            From Your Document to Final Attestation
          </h2>
          <p className="text-sm sm:text-base text-[#666666] leading-relaxed">
            Follow the journey of how an international certificate transitions from foreign issuance into full legal validity across the UAE.
          </p>
        </div>

        {/* Desktop Connected Journey (Horizontal on lg+, Vertical on mobile/tablet) */}
        <div className="relative mb-12">
          
          {/* Desktop Connected Gradient Line */}
          <div 
            aria-hidden="true" 
            className="hidden lg:block absolute top-[52px] left-[7%] right-[7%] h-[3px] bg-gradient-to-r from-[#D8C7B0] via-[#B8864B] to-[#976A36] z-0 shadow-xs" 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center lg:items-center relative group"
                >
                  {/* Step Node with Stage Number & Icon */}
                  <div className="relative mb-5 flex items-center justify-center">
                    <div className="w-[72px] h-[72px] rounded-2xl bg-white border-2 border-[#D8C7B0] group-hover:border-[#B8864B] text-[#976A36] group-hover:text-[#B8864B] flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105">
                      <Icon className="w-7 h-7 stroke-[1.8]" />
                    </div>
                    <span className="absolute -top-2.5 -right-2 bg-gradient-to-br from-[#C5985B] to-[#976A36] text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full shadow-xs">
                      {stage.num}
                    </span>
                  </div>

                  {/* Stage Title */}
                  <h3 className="text-base font-bold text-[#1A1A1A] mb-1 leading-snug font-heading group-hover:text-[#976A36] transition-colors">
                    {stage.title}
                  </h3>

                  {/* Location / Authority Subtitle */}
                  <span className="text-[11px] font-semibold text-[#B8864B] uppercase tracking-wider block mb-2">
                    {stage.location}
                  </span>

                  {/* Description */}
                  <p className="text-xs text-[#555555] leading-relaxed max-w-[220px]">
                    {stage.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Crucial Variation Disclaimer Panel */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#FCFAF8] border border-[#DECBB5] p-5 sm:p-6 flex items-start gap-4 shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-[#FAF3E8] border border-[#EAE0D1] text-[#976A36] flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-4 h-4" />
          </div>
          <div className="space-y-1 text-xs sm:text-sm text-[#555555] leading-relaxed">
            <span className="font-bold text-[#222222] block font-heading">
              Important: Jurisdictional Requirements Differ
            </span>
            <p>
              The exact legalization steps vary depending on the <strong>country of document origin</strong> (e.g., Hague Apostille signatory vs. non-signatory nations), <strong>document type</strong> (educational, personal, or corporate), <strong>intended use</strong>, and specific criteria mandated by the requesting UAE ministry or authority. Brightlink provides upfront verification of the exact requirements before initiating processing.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
