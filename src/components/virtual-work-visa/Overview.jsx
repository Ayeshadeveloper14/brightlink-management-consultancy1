import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Laptop, 
  ShieldAlert, 
  Calendar, 
  DollarSign, 
  HeartHandshake, 
  CheckCircle2, 
  Info,
  Layers,
  Sparkles
} from 'lucide-react';

export const Overview = () => {
  const shouldReduceMotion = useReducedMotion();

  const positioningCards = [
    {
      label: 'Self-sponsored residence',
      value: 'Self-sponsored',
      description: 'You sponsor your own residence without needing a local corporate sponsor or employment contract.',
      icon: Building2,
      accent: 'border-[#E6D7C3] bg-white'
    },
    {
      label: 'Remote employment',
      value: 'Work remotely for an employer or business outside the UAE',
      description: 'Your employer, overseas company, or clients must be registered outside the United Arab Emirates.',
      icon: Laptop,
      accent: 'border-[#E6D7C3] bg-white'
    },
    {
      label: 'Local employment restriction',
      value: 'Does not authorise employment with a UAE-based entity',
      description: 'Working for a mainland or freezone UAE company requires a standard employment visa & MoHRE permit.',
      icon: ShieldAlert,
      accent: 'border-[#F2DAC6] bg-[#FFFDFB]'
    },
    {
      label: 'Validity',
      value: 'One year',
      description: 'Issued for 12 months with full renewal eligibility by fresh application with updated proofs.',
      icon: Calendar,
      accent: 'border-[#E6D7C3] bg-white'
    },
    {
      label: 'Income threshold',
      value: 'USD 3,500/month minimum',
      description: 'Or the equivalent in foreign currency, verified through salary slips and recent bank statements.',
      icon: DollarSign,
      accent: 'border-[#E6D7C3] bg-white'
    },
    {
      label: 'Insurance',
      value: 'Valid UAE health insurance required',
      description: 'Comprehensive long-term health insurance policy providing active coverage inside the UAE.',
      icon: HeartHandshake,
      accent: 'border-[#E6D7C3] bg-white'
    }
  ];

  return (
    <section id="overview-section" className="py-16 lg:py-24 bg-[#FFFFFF] relative border-b border-[#F1EBE1]">
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
              Programme Overview
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-6 font-heading">
            What the UAE Virtual Work Visa Covers and Who It Is For
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-[#555555] leading-relaxed font-normal">
            <p>
              The UAE virtual work visa is a one-year renewable residence permit that allows foreign nationals to live in the country while working remotely for an employer or business registered outside the UAE. Holders enter the UAE under self-sponsorship and work in line with the terms and conditions issued with the visa.
            </p>
            <p>
              This visa is designed for remote employees, freelancers, and business owners who earn a minimum of USD 3,500 per month and hold valid health insurance in the UAE. It does not authorise employment with any UAE-based entity.
            </p>
            <p>
              The virtual work visa grants access to essential resident services, including accommodation, telecommunications, banking, and schooling, without requiring a local employer or sponsor.
            </p>
            <p className="text-sm sm:text-base text-[#666666] bg-[#FAF8F5] p-5 rounded-2xl border border-[#EFEAE2]">
              The programme was introduced in 2020 as part of the UAE Virtual Working Programme and has since expanded across all emirates. In Dubai, applications are processed by the General Directorate of Residency and Foreigners Affairs (GDRFA). In all other emirates, applications are handled by the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP).
            </p>
          </div>
        </motion.div>

        {/* Section 5: Important Visa Positioning Cards */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#B8864B]" />
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#222222] font-heading">
              Key Visa Positioning & Operational Parameters
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positioningCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className={`rounded-2xl p-6 border shadow-xs flex flex-col justify-between ${card.accent}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#888888]">
                        Param 0{idx + 1}
                      </span>
                    </div>

                    <span className="text-xs font-semibold text-[#888888] uppercase tracking-wide block mb-1">
                      {card.label}
                    </span>

                    <h4 className="text-base font-bold text-[#222222] font-heading mb-2 leading-snug">
                      {card.value}
                    </h4>

                    <p className="text-xs text-[#666666] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Informational Notice / Authority Qualification */}
        <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EFEAE2] flex items-start gap-3 text-xs text-[#666666]">
          <Info className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
          <span>
            These criteria reflect the general regulatory framework of the UAE Virtual Working Programme. They do not constitute a guarantee of eligibility or approval. All applications remain subject to review, background clearance, and discretion of the relevant authority (GDRFA or ICP).
          </span>
        </div>

      </div>
    </section>
  );
};
