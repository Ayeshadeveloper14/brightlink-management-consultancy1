import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileWarning, 
  HeartHandshake, 
  Building, 
  Scale, 
  Ban, 
  AlertCircle 
} from 'lucide-react';

export const Considerations = () => {
  const shouldReduceMotion = useReducedMotion();

  const considerations = [
    {
      title: 'Incomplete applications',
      description: 'If the submitted documentation is incomplete or does not meet requirements, the GDRFA returns the application for correction. Applicants should confirm the resubmission window directly with the GDRFA at the time of submission.',
      icon: FileWarning,
      highlight: 'Timely resubmission required'
    },
    {
      title: 'Health insurance requirements',
      description: 'Travel insurance is not accepted. Applicants must hold a long-term health insurance policy from a provider offering UAE coverage. Each dependent must be covered under a separate or family policy.',
      icon: HeartHandshake,
      highlight: 'Annual comprehensive policy only'
    },
    {
      title: 'Banking and accommodation',
      description: 'While the virtual work visa entitles the holder to open a bank account and lease property, individual banks and landlords may apply their own eligibility criteria and request additional documentation.',
      icon: Building,
      highlight: 'Third-party KYC & Ejari checks'
    },
    {
      title: 'Tax obligations abroad',
      description: "The virtual work visa does not affect tax obligations in the applicant's country of residence or citizenship. Applicants should confirm their tax position with a qualified adviser before relocating.",
      icon: Scale,
      highlight: 'Home country tax laws remain active'
    },
    {
      title: 'No local work authorisation',
      description: 'The visa strictly prohibits employment with UAE-based entities. Accepting local employment requires obtaining a separate work permit and employment visa through the Ministry of Human Resources and Emiratisation (MoHRE).',
      icon: Ban,
      highlight: 'Exclusive remote work mandate'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Practical Advice
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Common Issues and Practical Considerations
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Avoid procedural delays and regulatory oversights by reviewing these practical compliance factors before lodging your submission.
          </p>
        </motion.div>

        {/* 5 Considerations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {considerations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EBE4D8] hover:border-[#DECBB5] transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center">
                      <Icon className="w-5 h-5 stroke-[1.9]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8864B] px-2.5 py-1 rounded-md bg-[#FAF5EC]">
                      Advisory 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#222222] font-heading mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F5EFE6] text-xs font-semibold text-[#888888] flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>{item.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
