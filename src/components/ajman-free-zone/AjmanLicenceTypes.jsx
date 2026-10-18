import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileText, 
  ShoppingBag, 
  Briefcase, 
  Factory, 
  UserCheck, 
  Globe, 
  CheckCircle2, 
  AlertCircle, 
  Building, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const AjmanLicenceTypes = ({ onOpenConsultation }) => {
  const [selectedLicence, setSelectedLicence] = useState('commercial');
  const shouldReduceMotion = useReducedMotion();

  const licences = [
    {
      id: 'commercial',
      title: 'Commercial Licence',
      icon: ShoppingBag,
      purpose: 'Authorizes the holder to import, export, store, and distribute specialized product lines and merchandise.',
      bestFor: 'Regional distributors, importers, commodity traders, equipment suppliers, and FMCG wholesalers.',
      restrictions: 'Restricted strictly to the product categories enumerated on the licence (typically up to 3 related activity codes).',
      workspaceRequirement: 'Smart desk, shared office, private commercial office, or storage warehouse depending on visa needs.',
      externalApprovals: 'General consumer goods require standard customs registration; regulated goods (e.g. medical, chemical) require federal ministry NOCs.',
      visaQuota: '1 to 5+ visas depending on leased workspace size and package tier.'
    },
    {
      id: 'general-trading',
      title: 'General Trading Licence',
      icon: FileText,
      purpose: 'Provides broad-spectrum commercial freedom to import, export, and wholesale diverse, non-related merchandise under one licence.',
      bestFor: 'Multinational trading conglomerates, diversified retail distributors, and international import-export houses.',
      restrictions: 'Covers virtually all legal commercial commodities. Does not cover regulated or controlled substances (pharmaceuticals, arms, tobacco) without special permits.',
      workspaceRequirement: 'Dedicated executive office or warehouse facility.',
      externalApprovals: 'Ministry of Economy clearance where applicable and standard UAE seaport customs registration.',
      visaQuota: 'Higher visa quotas available in accordance with physical office or warehouse lease agreements.'
    },
    {
      id: 'services',
      title: 'Services Licence',
      icon: Briefcase,
      purpose: 'Authorizes companies to render specialized professional, technical, creative, and consulting services.',
      bestFor: 'Management consultants, IT firms, software developers, marketing agencies, HR advisors, and design studios.',
      restrictions: 'Trading, importing, or warehousing of physical goods is strictly prohibited under a pure services licence.',
      workspaceRequirement: 'Smart desk, flexi-desk, or private business centre office.',
      externalApprovals: 'Specialized professions (e.g. engineering consultancy, accounting) require attested academic degrees of directors.',
      visaQuota: 'Flexible visa options (0 to 4+ visas based on desk or office package).'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Licence',
      icon: Globe,
      purpose: 'Permits digital commercial operations, web store management, electronic marketplaces, and online intermediary platforms.',
      bestFor: 'Online retail merchants, digital platform operators, social media sellers, and software-as-a-service (SaaS) providers.',
      restrictions: 'Physical inventory storage in the UAE requires leased free zone warehouse space or an authorized third-party logistics (3PL) contract.',
      workspaceRequirement: 'Smart desk, shared office, or dedicated digital workstation.',
      externalApprovals: 'Telecommunications and Digital Government Regulatory Authority (TDRA) guidelines compliance.',
      visaQuota: '1 to 3 visas typically standard under entry-level digital packages.'
    },
    {
      id: 'industrial',
      title: 'Industrial Licence',
      icon: Factory,
      purpose: 'Authorizes light to heavy manufacturing, raw material processing, assembly lines, packaging, and product fabrication.',
      bestFor: 'Manufacturing firms, food processing plants, plastics and packaging factories, metal fabrication, and textile producers.',
      restrictions: 'Must operate strictly within designated industrial zones and adhere to certified environmental, civil defense, and safety codes.',
      workspaceRequirement: 'Mandatory pre-built industrial warehouse (100 m² to 2,000+ m²) or leased industrial land plot.',
      externalApprovals: 'Ajman Municipality, Civil Defense, Ministry of Industry & Advanced Technology (MoIAT), and Environmental Protection Agency.',
      visaQuota: 'High visa quotas proportional to factory size and approved operational workforce requirements.'
    },
    {
      id: 'freelance',
      title: 'Freelance Permit / Licence',
      icon: UserCheck,
      purpose: 'Enables solo practitioners and independent talent to legally operate and sponsor their individual UAE residence visa.',
      bestFor: 'Freelance writers, digital content creators, independent IT engineers, graphic artists, translators, and media specialists.',
      restrictions: 'Issued in the personal name of the individual. Cannot hire employees, sponsor dependent work visas, or establish corporate branches.',
      workspaceRequirement: 'Business centre access, hot desks, and meeting rooms on demand.',
      externalApprovals: 'Portfolio review or resume validation; educational credentials for certain technical categories.',
      visaQuota: 'Single residency visa for the permit holder only.'
    }
  ];

  const currentLicence = licences.find(l => l.id === selectedLicence) || licences[0];

  return (
    <section id="ajman-licences" className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Building className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>OFFICIAL LICENSING CATEGORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Ajman Free Zone Licence Types
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Every business established in Ajman Free Zone must obtain a trade licence aligned with its planned operations. Review the 6 official licence types, their parameters, and operational criteria.
          </p>
        </div>

        {/* Licence Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {licences.map((lic) => {
            const Icon = lic.icon;
            const isSelected = selectedLicence === lic.id;
            return (
              <button
                key={lic.id}
                onClick={() => setSelectedLicence(lic.id)}
                className={`p-4 rounded-2xl border text-center transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-2 ${
                  isSelected
                    ? 'border-[#B8864B] bg-[#FAF7F0] shadow-sm text-[#0F172A]'
                    : 'border-[#E6D7C3] bg-white hover:border-[#DECBB5] text-[#475569]'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  isSelected ? 'bg-[#B8864B] text-white' : 'bg-[#FAF5EC] text-[#8C5E28]'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold font-heading line-clamp-1">
                  {lic.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Detailed Selected Licence Card */}
        <div className="bg-[#FAF7F0] rounded-3xl p-8 sm:p-10 border border-[#E6D7C3] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Overview */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-xs font-bold text-[#8C5E28] uppercase tracking-wider font-heading">
                <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
                <span>Selected Licence Breakdown</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] font-heading">
                {currentLicence.title}
              </h3>

              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                {currentLicence.purpose}
              </p>

              <div className="p-4 rounded-2xl bg-white border border-[#DECBB5] space-y-2">
                <span className="text-xs font-bold text-[#8C5E28] block uppercase tracking-wider font-heading">
                  Ideal Business Profile:
                </span>
                <p className="text-xs sm:text-sm text-[#0F172A] font-medium leading-relaxed">
                  {currentLicence.bestFor}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#8C5E28]">
                <ShieldCheck className="w-4 h-4 text-[#B8864B]" />
                <span>Available with 1-Year or Multi-Year Registration</span>
              </div>
            </div>

            {/* Right Criteria Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-white border border-[#DECBB5] space-y-2">
                <div className="flex items-center gap-2 text-[#0F172A] font-bold font-heading text-sm">
                  <AlertCircle className="w-4 h-4 text-[#B8864B]" />
                  <span>Activity Restrictions</span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {currentLicence.restrictions}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#DECBB5] space-y-2">
                <div className="flex items-center gap-2 text-[#0F172A] font-bold font-heading text-sm">
                  <Building className="w-4 h-4 text-[#B8864B]" />
                  <span>Workspace Consideration</span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {currentLicence.workspaceRequirement}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#DECBB5] space-y-2">
                <div className="flex items-center gap-2 text-[#0F172A] font-bold font-heading text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
                  <span>Visa Eligibility</span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {currentLicence.visaQuota}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#DECBB5] space-y-2">
                <div className="flex items-center gap-2 text-[#0F172A] font-bold font-heading text-sm">
                  <FileText className="w-4 h-4 text-[#B8864B]" />
                  <span>External Approvals</span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {currentLicence.externalApprovals}
                </p>
              </div>

            </div>

          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-[#DECBB5] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#475569] text-center sm:text-left">
              Official licence fees depend on chosen activity codes, facility leasing, and visa numbers.
            </span>
            <button
              onClick={() => onOpenConsultation(`Inquire for ${currentLicence.title}`)}
              className="px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#8C5E28] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs cursor-pointer flex items-center gap-2"
            >
              <span>Get Quote for {currentLicence.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
