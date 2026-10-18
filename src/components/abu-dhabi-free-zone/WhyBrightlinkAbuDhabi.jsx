import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Compass, 
  FileText, 
  Users, 
  CreditCard, 
  Coins, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Building
} from 'lucide-react';

export const WhyBrightlinkAbuDhabi = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const servicePillars = [
    {
      icon: Compass,
      title: 'Jurisdiction Comparison & Alignment',
      description: 'We evaluate the legal frameworks, operational facilities, and cost structures of ADGM, KEZAD, Masdar City, and twofour54 to help you choose the zone that directly fits your commercial model.'
    },
    {
      icon: FileText,
      title: 'Activity Mapping & Licensing Guidance',
      description: 'We analyze your intended business lines and align them accurately with official authority classification codes to prevent licensing delays or post-incorporation activity disputes.'
    },
    {
      icon: ShieldCheck,
      title: 'Document Dossier Preparation',
      description: 'From drafting standard corporate resolutions and reviewing foreign power-of-attorney documents to coordinating required MOFA attestations, we ensure your application meets authority criteria.'
    },
    {
      icon: Users,
      title: 'Immigration & Visa Coordination',
      description: 'Our in-house typing center coordinates Establishment Card registrations, entry permits, medical examination appointments, and Emirates ID biometric processing for shareholders and staff.'
    },
    {
      icon: CreditCard,
      title: 'Corporate Banking Preparation',
      description: 'We guide founders in structuring clear business plans, source of funds documentation, and customer profiles necessary for thorough compliance reviews by UAE commercial banks.'
    },
    {
      icon: Coins,
      title: 'Transparent Requirement & Cost Clarification',
      description: 'We provide itemized estimates of government tariffs, facility leases, and ongoing renewal obligations upfront, with no hidden processing surcharges or surprise fees.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>BRIGHTLINK CONSULTANCY SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Why Work with Brightlink for Abu Dhabi Business Setup
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Our corporate consultancy delivers practical, service-driven support through every phase of planning, authority submission, and operational licensing.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {servicePillars.map((sp, idx) => {
            const Icon = sp.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-[#FAF7F0]/40 rounded-2xl p-6 border border-[#E6D7C3] hover:border-[#DECBB5] hover:bg-white hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors duration-200 shadow-2xs mb-4">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {sp.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {sp.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Dedicated Process Support</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
