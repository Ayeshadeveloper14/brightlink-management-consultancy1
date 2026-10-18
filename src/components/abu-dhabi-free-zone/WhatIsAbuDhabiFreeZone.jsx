import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Globe, 
  Landmark, 
  FileCheck2, 
  Layers, 
  HelpCircle,
  ArrowRight,
  ShieldAlert,
  Scale
} from 'lucide-react';

export const WhatIsAbuDhabiFreeZone = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const corePillars = [
    {
      icon: Landmark,
      title: 'Institutional Capital & Economic Scale',
      description: 'As the federal capital of the UAE, Abu Dhabi manages substantial sovereign wealth and provides deep institutional stability, making it an attractive destination for high-growth enterprises and international conglomerates.'
    },
    {
      icon: Scale,
      title: 'Dual Legal Frameworks',
      description: 'Abu Dhabi hosts both English Common Law jurisdictions (ADGM with its own independent courts) and civil law specialized economic zones (KEZAD, Masdar City, CMA), catering to diverse corporate structuring needs.'
    },
    {
      icon: Layers,
      title: 'Distinct Regulatory Authorities',
      description: 'Each Abu Dhabi free zone operates under its own legal mandate, governing registry, and licensing framework. Requirements, minimum capital rules, and facility obligations are specific to each authority.'
    },
    {
      icon: Globe,
      title: 'Global Intermodal Connectivity',
      description: 'Direct access to Khalifa Port (one of the region’s most advanced deepwater container ports), Zayed International Airport, and major highway networks connecting to Saudi Arabia and the wider GCC.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>UNDERSTANDING THE CAPITAL’S JURISDICTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Introduction to Abu Dhabi Free Zones
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Free zones in Abu Dhabi are designated economic jurisdictions engineered to stimulate international investment, foster specialized industrial and knowledge clusters, and offer investors tailored regulatory environments.
          </p>
        </div>

        {/* Narrative & Authority Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-5"
          >
            <h3 className="text-2xl font-bold font-heading text-[#0F172A] leading-snug">
              How Free Zone Company Formation Works in Abu Dhabi
            </h3>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              In Abu Dhabi, free zones operate under authority-specific legislation rather than a single unified municipal framework. When incorporating a business, company registration, licensing, and ongoing governance are administered directly by the corresponding Free Zone Authority—such as the ADGM Registration Authority, the KEZAD Group, the Masdar City Free Zone Authority, or the Creative Media Authority.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Because each free zone has been designed to nurture a dedicated sector—from global asset management and maritime logistics to clean energy innovation and digital media—regulations, eligible business activities, permitted facility types, and fee schedules differ significantly from one zone to another.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Selecting the appropriate jurisdiction requires an in-depth assessment of your target market, the nature of your commercial contracts, required physical facilities (e.g., flexi-desk vs. bonded warehouse), shareholder residency, and operational budget.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenConsultation('Abu Dhabi Free Zone - Jurisdiction Evaluation')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#8C5E28] hover:text-[#B8864B] transition-colors cursor-pointer group"
              >
                <span>Request a Free Zone Jurisdiction Assessment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#B8864B]" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 bg-gradient-to-br from-[#FAF7F0] to-[#F5EFE6] rounded-3xl p-7 sm:p-8 border border-[#E6D7C3] shadow-md space-y-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#b8864b] text-white flex items-center justify-center shadow-xs">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E28] block font-heading">
                  KEY CONSIDERATIONS
                </span>
                <span className="text-sm font-extrabold text-[#0F172A]">
                  Why Jurisdiction Selection Matters
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="p-3.5 bg-white/90 rounded-xl border border-[#DECBB5]/70 shadow-2xs">
                <span className="font-bold text-[#0F172A] block mb-0.5">Activity Eligibility & Scope</span>
                <span className="text-[#64748B]">Certain activities (e.g. fund management or heavy manufacturing) are restricted to specialized zones with tailored regulatory oversight.</span>
              </div>

              <div className="p-3.5 bg-white/90 rounded-xl border border-[#DECBB5]/70 shadow-2xs">
                <span className="font-bold text-[#0F172A] block mb-0.5">Facility & Workspace Requirements</span>
                <span className="text-[#64748B]">Jurisdictions mandate specific workspace options—from flexible business center desks to multi-acre land plots and industrial yards.</span>
              </div>

              <div className="p-3.5 bg-white/90 rounded-xl border border-[#DECBB5]/70 shadow-2xs">
                <span className="font-bold text-[#0F172A] block mb-0.5">Applicable Legal System</span>
                <span className="text-[#64748B]">Choose between English common law courts (ADGM) or UAE civil law frameworks, depending on financing and dispute resolution needs.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-[#FAF7F0]/60 border border-[#E6D7C3] hover:border-[#DECBB5] hover:bg-white hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E6D7C3] flex items-center justify-center text-[#B8864B] mb-4 shadow-2xs">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
