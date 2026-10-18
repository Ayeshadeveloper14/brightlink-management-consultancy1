import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Globe, 
  Landmark, 
  FileCheck2, 
  Layers, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const WhatIsDubaiFreeZone = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const keyFacts = [
    {
      icon: Globe,
      title: 'Designated Economic Zones',
      description: 'Special jurisdictions established across Dubai offering distinct customs, regulatory, and corporate tax regulations outside traditional mainland frameworks.'
    },
    {
      icon: Landmark,
      title: 'Dedicated Authorities (FZAs)',
      description: 'Each free zone is governed by its own independent Free Zone Authority (e.g., IFZA, DMCC, DAFZA) responsible for issuing licenses and setting bylaws.'
    },
    {
      icon: FileCheck2,
      title: 'Flexible Legal Structures',
      description: 'Incorporate as a Free Zone Establishment (FZE - single shareholder), Free Zone Company (FZ-LLC - multiple shareholders), or a Branch of an existing entity.'
    },
    {
      icon: Layers,
      title: 'Specialized Industry Ecosystems',
      description: 'Clusters tailored for commodities, international trading, fintech, media, creative arts, aviation logistics, software engineering, and consulting.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>FOUNDATIONAL OVERVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            What is a Dubai Free Zone?
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            A Dubai Free Zone (also known as a free trade zone) is a designated geographical jurisdiction within the Emirate of Dubai engineered to attract international foreign investment, simplify business incorporation, and stimulate global trade through competitive tax, regulatory, and ownership incentives.
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
              Autonomous Governance and Global Commercial Connectivity
            </h3>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Unlike mainland companies that are governed uniformly by the Dubai Department of Economy and Tourism (DET), free zones operate under separate regulatory frameworks established by autonomous Free Zone Authorities. This allows free zones to offer industry-specific advantages, streamlined digital registration processes, and specialized infrastructure tailored to sectors like tech startups, commodities, e-commerce, and multimodal freight.
            </p>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Companies formed within Dubai Free Zones are legally permitted to conduct international business, trade with other free zones across the UAE, provide global consulting services, and interact with the UAE mainland through licensed distributors, commercial agents, or mainland branch extensions.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenConsultation('Dubai Free Zone Business Setup - Overview Inquiry')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#8C5E28] hover:text-[#B8864B] transition-colors cursor-pointer group"
              >
                <span>Speak with a Free Zone Setup Advisor</span>
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
                  KEY CORPORATE STRUCTURES
                </span>
                <span className="text-sm font-extrabold text-[#0F172A]">
                  Entity Types in Dubai Free Zones
                </span>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="p-3.5 bg-white/90 rounded-xl border border-[#DECBB5]/70 shadow-2xs">
                <span className="font-bold text-[#0F172A] block mb-0.5">Free Zone Establishment (FZE)</span>
                <span className="text-[#64748B]">Single individual or corporate shareholder with limited liability protection.</span>
              </div>

              <div className="p-3.5 bg-white/90 rounded-xl border border-[#DECBB5]/70 shadow-2xs">
                <span className="font-bold text-[#0F172A] block mb-0.5">Free Zone Company (FZ-LLC / FZC)</span>
                <span className="text-[#64748B]">Multiple individual or corporate shareholders (typically up to 50 members) with distributed share capital.</span>
              </div>

              <div className="p-3.5 bg-white/90 rounded-xl border border-[#DECBB5]/70 shadow-2xs">
                <span className="font-bold text-[#0F172A] block mb-0.5">Branch of a Foreign or UAE Company</span>
                <span className="text-[#64748B]">Extension of an existing parent company without requiring separate share capital.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyFacts.map((fact, index) => {
            const Icon = fact.icon;
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
                  {fact.title}
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {fact.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
