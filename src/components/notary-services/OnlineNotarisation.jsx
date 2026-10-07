import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Video, FileCheck2, Info, ArrowRight } from 'lucide-react';

export const OnlineNotarisation = () => {
  const steps = [
    {
      num: '01',
      title: 'Identity Verification',
      desc: 'Digital verification of UAE Pass or original passport/ID credentials prior to the scheduled session.',
      icon: UserCheck
    },
    {
      num: '02',
      title: 'Secure Video Call & Signing',
      desc: 'Live interactive video appearance with the authorized notary to confirm understanding, voluntary consent, and electronic signature.',
      icon: Video
    },
    {
      num: '03',
      title: 'Notarised Document',
      desc: 'Issuance of the officially sealed electronic notary document verified via digital ministry QR verification.',
      icon: FileCheck2
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white border-t border-[#F0E8DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Remote & Digital Verification
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3 font-heading">
            Online Notarisation
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Where supported by current UAE official procedures, remote electronic notarisation enables principals to execute Powers of Attorney and declarations securely without physical attendance.
          </p>
        </div>

        {/* 3-Step Visual Container */}
        <div className="relative mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-[#FCFAF8] rounded-2xl p-6 border border-[#E8DEC9] text-center flex flex-col items-center justify-between relative group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border-2 border-[#D8C7B0] text-[#976A36] group-hover:border-[#B8864B] group-hover:text-[#B8864B] flex items-center justify-center mb-4 shadow-xs transition-colors">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <span className="text-xs font-extrabold text-[#B8864B] uppercase tracking-widest font-heading mb-1">
                    Step {step.num}
                  </span>

                  <h3 className="text-base font-bold text-[#1A1A1A] mb-2 font-heading">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#555555] leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Grounded Procedural Notice Panel */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] p-5 flex items-start gap-3.5 text-xs text-[#666666]">
          <Info className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Procedural Availability Notice:</strong> Online remote notarisation eligibility depends on the specific document category, the issuing emirate (e.g., Dubai Courts or Ministry of Justice portals), principal residency status, and applicable UAE regulatory requirements. Certain transactions may still necessitate in-person attendance or specific ministerial clearances.
          </p>
        </div>

      </div>
    </section>
  );
};
