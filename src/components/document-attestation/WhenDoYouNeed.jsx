import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Users, BookOpenCheck, Building2 } from 'lucide-react';

export const WhenDoYouNeed = () => {
  const useCases = [
    {
      title: 'Employment & Work Visas',
      desc: 'Attested educational or professional certificates are required by MOHRE and Free Zones for skilled employment contracts and professional licensing.',
      icon: UserCheck,
      pill: 'Skilled Labour & MOHRE'
    },
    {
      title: 'Family & Spouse Visas',
      desc: 'Attested marriage and birth certificates are mandatory for GDRFA & ICP family sponsorship, dependent residence visas, and school enrolments.',
      icon: Users,
      pill: 'Spouse & Children Sponsorship'
    },
    {
      title: 'Education Admissions',
      desc: 'UAE schools, colleges, and accredited universities require attested prior certificates, diplomas, and official academic transcripts.',
      icon: BookOpenCheck,
      pill: 'School & University Admission'
    },
    {
      title: 'Business & Commercial Use',
      desc: 'Trade documents, company papers, MOAs, and powers of attorney require attestation for corporate banking, DED licensing, and commercial tenders.',
      icon: Building2,
      pill: 'DED, Banking & Free Zones'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.18em] text-[#B8864B] uppercase font-heading block mb-2">
            Key Scenarios
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight mb-3">
            When Do You Need Document Attestation?
          </h2>
          <p className="text-sm sm:text-base text-[#666666]">
            Legalization confirms the authenticity of foreign-issued papers so UAE government bodies, employers, and financial institutions accept them with complete legal standing.
          </p>
        </div>

        {/* Four Visual Blocks in a 2x2 Clean Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {useCases.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#FCFAF8] border border-[#EAE1D3] hover:border-[#DECBB5] hover:shadow-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#E4D7C4] text-[#976A36] flex items-center justify-center group-hover:bg-[#B8864B] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-medium text-[#8B6B3E] bg-[#F5EDE1] px-2.5 py-0.5 rounded-full">
                      {item.pill}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#222222] mb-1.5 group-hover:text-[#976A36] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
