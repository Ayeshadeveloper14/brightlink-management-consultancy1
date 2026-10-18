import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Users, 
  Landmark, 
  Globe2, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Scale
} from 'lucide-react';

export const AjmanLegalStructures = ({ onOpenConsultation }) => {
  const [selectedStructure, setSelectedStructure] = useState('fze');
  const shouldReduceMotion = useReducedMotion();

  const structures = [
    {
      id: 'fze',
      code: 'FZE',
      name: 'Free Zone Establishment',
      tagline: 'Single Shareholder Legal Entity (100% Individual or Corporate)',
      icon: Building2,
      shareholders: 'Exactly 1 shareholder (can be an individual entrepreneur or a corporate entity).',
      liability: 'Limited liability to the extent of the owner’s invested share capital in the establishment.',
      legalPersonality: 'Distinct legal personality with independent corporate identity from its owner.',
      governance: 'Managed by an appointed Manager or Director (who can also be the sole shareholder).',
      bestSuitedFor: 'Solopreneurs, individual founders, independent trading professionals, or a corporate entity seeking a 100% wholly owned subsidiary.',
      capitalRule: 'Standard share capital requirement is nominal, as determined by authority guidelines.'
    },
    {
      id: 'fzc',
      code: 'FZC',
      name: 'Free Zone Company',
      tagline: 'Multi-Shareholder Entity (2 to 50 Shareholders)',
      icon: Users,
      shareholders: 'Between 2 and 50 shareholders (combinations of individual and corporate shareholders allowed).',
      liability: 'Limited liability; shareholders are protected and liabilities are limited to the company’s capital.',
      legalPersonality: 'Full corporate body status with capacity to enter contracts, own property, and open bank accounts.',
      governance: 'Governed by a formal Memorandum & Articles of Association (MOA/AOA) with appointed Directors.',
      bestSuitedFor: 'Joint ventures, business partnerships, co-founded startups, and growing commercial syndicates.',
      capitalRule: 'Divided into equal value shares; capital distribution clearly defined in the registered MOA.'
    },
    {
      id: 'branch-uae',
      code: 'Branch - Local',
      name: 'Branch of a UAE Company',
      tagline: 'Extension of Mainland or Free Zone Parent Entity',
      icon: Landmark,
      shareholders: '100% owned by the parent UAE company (mainland LLC or another UAE free zone company).',
      liability: 'Full liability is borne by the parent UAE company; the branch is not an independent legal entity.',
      legalPersonality: 'Shares the identical legal personality, brand identity, and financial standing of the parent.',
      governance: 'Managed by an authorized Manager appointed via a notarized Board Resolution from the parent.',
      bestSuitedFor: 'Established UAE companies seeking to expand operations into Ajman Free Zone or utilize Ajman Port facilities.',
      capitalRule: 'Zero separate share capital required; operates under parent company capitalization.'
    },
    {
      id: 'branch-foreign',
      code: 'Branch - Foreign',
      name: 'Branch of a Foreign Company',
      tagline: 'Regional Presence for International Corporations',
      icon: Globe2,
      shareholders: '100% owned by the foreign parent corporation registered outside the UAE.',
      liability: 'Full liability is borne by the overseas parent company.',
      legalPersonality: 'Extension of the foreign corporation; must conduct business activities matching the parent’s scope.',
      governance: 'Managed by an appointed General Manager designated via legalized foreign Board Resolution and POA.',
      bestSuitedFor: 'Multinational corporations, international distributors, and foreign manufacturers entering the UAE/GCC market.',
      capitalRule: 'No separate share capital required; foreign corporate documents must be legalized up to UAE MOFA.'
    }
  ];

  const current = structures.find(s => s.id === selectedStructure) || structures[0];

  return (
    <section id="ajman-legal-structures" className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Scale className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>CORPORATE JURISPRUDENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Ajman Free Zone Company Legal Structures
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Selecting the appropriate legal structure determines ownership boundaries, constitutional documentation, shareholder liability, and managerial powers.
          </p>
        </div>

        {/* Structure Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {structures.map((s) => {
            const Icon = s.icon;
            const isSelected = selectedStructure === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedStructure(s.id)}
                className={`p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'border-[#B8864B] bg-[#FAF7F0] shadow-sm text-[#0F172A]'
                    : 'border-[#E6D7C3] bg-white hover:border-[#DECBB5] text-[#475569]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-[#B8864B] text-white' : 'bg-[#FAF5EC] text-[#8C5E28]'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C5E28] bg-white px-2 py-0.5 rounded-full border border-[#DECBB5]">
                    {s.code}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold font-heading text-[#0F172A] mb-0.5">
                    {s.name}
                  </h4>
                  <p className="text-[11px] text-[#64748B] line-clamp-1">
                    {s.tagline.split('(')[0]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Structure Detailed Display */}
        <div className="bg-[#FAF7F0] rounded-3xl p-8 sm:p-10 border border-[#E6D7C3] shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#DECBB5] mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E28] font-heading block mb-1">
                Legal Structure Analysis
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-heading">
                {current.name} ({current.code})
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] mt-1">
                {current.tagline}
              </p>
            </div>

            <button
              onClick={() => onOpenConsultation(`Structure Inquiry: ${current.name}`)}
              className="px-5 py-2.5 rounded-xl bg-[#B8864B] hover:bg-[#8C5E28] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              <span>Consult on {current.code}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-5 rounded-2xl bg-white border border-[#DECBB5] space-y-2">
              <span className="text-xs font-bold text-[#8C5E28] uppercase tracking-wider font-heading block">
                Shareholder Count
              </span>
              <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
                {current.shareholders}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#DECBB5] space-y-2">
              <span className="text-xs font-bold text-[#8C5E28] uppercase tracking-wider font-heading block">
                Liability & Risk Protection
              </span>
              <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
                {current.liability}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#DECBB5] space-y-2">
              <span className="text-xs font-bold text-[#8C5E28] uppercase tracking-wider font-heading block">
                Legal Personality
              </span>
              <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
                {current.legalPersonality}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#DECBB5] space-y-2">
              <span className="text-xs font-bold text-[#8C5E28] uppercase tracking-wider font-heading block">
                Managerial Governance
              </span>
              <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
                {current.governance}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#DECBB5] space-y-2">
              <span className="text-xs font-bold text-[#8C5E28] uppercase tracking-wider font-heading block">
                Capitalisation Rules
              </span>
              <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
                {current.capitalRule}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#DECBB5] space-y-2">
              <span className="text-xs font-bold text-[#8C5E28] uppercase tracking-wider font-heading block">
                Ideal Application
              </span>
              <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
                {current.bestSuitedFor}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
