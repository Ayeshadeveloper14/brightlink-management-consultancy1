import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShoppingBag, 
  Globe, 
  Briefcase, 
  Factory, 
  UserCheck, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Layers,
  FileCheck2,
  AlertCircle
} from 'lucide-react';

export const AjmanBusinessActivities = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState('all');
  const shouldReduceMotion = useReducedMotion();

  const activityCategories = [
    {
      id: 'commercial',
      tag: 'Category A',
      icon: ShoppingBag,
      title: 'Commercial & Trading Businesses',
      subtitle: 'Import, Export, Distribution & Wholesale Operations',
      overview: 'Ideal for regional distributors, commodity traders, and consumer product merchants leveraging Ajman Port’s maritime infrastructure.',
      keyAspects: [
        'Specific Trading: Licensing for 1 to 3 distinct product categories (e.g. textiles, building materials, electronics).',
        'General Trading: Broad-spectrum licensing permitting unrestricted import, export, and wholesale of diverse goods.',
        'Customs Code Issuance: Immediate allocation of a UAE Free Zone Customs Code for seaport and airport clearances.',
        'Product Restrictions: Regulated products (chemicals, pharmaceuticals, foodstuff) require specialized ministry approvals.'
      ],
      workspaceFit: 'Smart desk, shared office, dedicated commercial office, or storage warehouse.',
      advisoryNote: 'Physical sale of goods directly to retail consumers in the UAE mainland requires an authorized local distributor or a mainland branch.'
    },
    {
      id: 'ecommerce',
      tag: 'Category B',
      icon: Globe,
      title: 'E-Commerce & Digital Ventures',
      subtitle: 'Online Portals, Marketplaces & Digital Storefronts',
      overview: 'Engineered for internet entrepreneurs, drop-shippers, digital retail brands, and electronic transaction platforms.',
      keyAspects: [
        'Online Selling: Authorization to establish proprietary web stores or trade via regional marketplaces (Amazon, Noon).',
        'Payment Gateway Readiness: Trade licence structure tailored to meet UAE merchant acquirer and payment processor standards.',
        'Logistics & Fulfilment: Permitted integration with third-party logistics (3PL) couriers across the UAE.',
        'Consumer Protection Compliance: Mandatory adherence to UAE consumer protection laws, return policies, and data security.'
      ],
      workspaceFit: 'Smart desk or shared co-working station (cost-efficient for online founders).',
      advisoryNote: 'An e-commerce licence does not automatically permit operating physical storefronts in mainland shopping malls without mainland permits.'
    },
    {
      id: 'professional',
      tag: 'Category C',
      icon: Briefcase,
      title: 'Professional & Consultancy Services',
      subtitle: 'Advisory, Technical, IT & Management Solutions',
      overview: 'Designed for knowledge-based professionals, corporate advisory firms, software engineers, and creative agencies.',
      keyAspects: [
        'Permitted Consulting: Business management, marketing consultancy, HR advisory, software development, and graphic design.',
        'Degree Attestations: Certain specialized activities (legal consultancy, accounting, engineering) require attested educational qualifications.',
        '100% Service Freedom: Deliver B2B advisory solutions to clients locally, regionally across the GCC, and internationally.',
        'Flexible Operational Setup: Low-cost operational overhead with scalable flexi-desk or private corporate offices.'
      ],
      workspaceFit: 'Flexi-desk, business centre executive suite, or leased private office.',
      advisoryNote: 'Regulated professions such as healthcare, civil engineering, or formal legal advocacy require additional sector-specific approvals.'
    },
    {
      id: 'industrial',
      tag: 'Category D',
      icon: Factory,
      title: 'Industrial & Manufacturing Enterprises',
      subtitle: 'Production, Processing, Assembly & Packaging',
      overview: 'Tailored for light and heavy industrial operators requiring dedicated manufacturing plants, high electricity loads, and direct marine berths.',
      keyAspects: [
        'Production Scope: Processing of raw materials, manufacturing of finished goods, assembly lines, and industrial packaging.',
        'Facility Leases: Pre-built light industrial warehouses ranging from 100 m² to 2,000 m² with built-in office space and loading bays.',
        'Industrial Land: Open land plots for custom facility construction on long-term renewable leases.',
        'Statutory Clearances: Requires environmental impact clearances, civil defense approvals, and municipal health and safety vetting.'
      ],
      workspaceFit: 'Mandatory pre-built warehouse or custom industrial plot.',
      advisoryNote: 'High electrical load requirements and waste management protocols must be pre-approved by Ajman utility authorities.'
    },
    {
      id: 'freelance',
      tag: 'Category E',
      icon: UserCheck,
      title: 'Freelancers & Independent Professionals',
      subtitle: 'Solo Practitioners, Tech Specialists & Creatives',
      overview: 'Cost-effective individual authorization for solopreneurs seeking a legal UAE freelance residency permit without corporate overhead.',
      keyAspects: [
        'Eligible Sectors: Media producers, copywriters, digital marketing specialists, web developers, lifestyle trainers, and consultants.',
        'Individual Status: Issued directly to the individual practitioner rather than establishing a separate corporate legal entity.',
        'Residency Eligibility: Entitles the holder to sponsor a 2-year UAE residence visa and apply for an Emirates ID.',
        'Lower Cost Burden: Minimal annual fees and zero requirement for leased physical office premises or share capital.'
      ],
      workspaceFit: 'Access to business centre hot desks and meeting rooms as needed.',
      advisoryNote: 'Freelance permits cannot hire employees or sponsor additional staff visas; they are intended strictly for individual sole practitioners.'
    },
    {
      id: 'offshore',
      tag: 'Category F',
      icon: ShieldAlert,
      title: 'Offshore Company Structures (Distinction)',
      subtitle: 'Asset Holding, International Trade & IP Protection',
      overview: 'Important legal clarity on the operational boundary between Ajman Free Zone operational companies and Ajman Offshore holding vehicles.',
      keyAspects: [
        'Non-Operational Status: Offshore entities are strictly non-resident holding vehicles designed for holding global assets, shares, and IP.',
        'No Physical Office in UAE: Offshore companies do not lease commercial offices, warehouses, or flexi-desks in the UAE.',
        'No UAE Residence Visas: Offshore incorporation does not confer UAE residence visas, establishment cards, or Emirates IDs.',
        'No UAE Domestic Trading: Offshore companies cannot conduct commercial trade or render physical services within the UAE market.'
      ],
      workspaceFit: 'Registered agent address only (no physical premises).',
      advisoryNote: 'An offshore structure is not interchangeable with an operational free zone company. If you need UAE visas, an office, or local operations, an AFZ free zone licence is required.'
    }
  ];

  const filteredCategories = activeTab === 'all' 
    ? activityCategories 
    : activityCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="ajman-activities" className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>AUTHORITY-PERMITTED ACTIVITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Business Activities Available in Ajman Free Zone
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Ajman Free Zone accommodates over 1,000 commercial, consulting, e-commerce, and industrial activities. Explore the core business categories and their licensing parameters below.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-heading transition-all duration-200 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#B8864B] text-white shadow-xs'
                : 'bg-white text-[#475569] border border-[#DECBB5] hover:border-[#B8864B]'
            }`}
          >
            All Activities (6 Categories)
          </button>
          {activityCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-heading transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-[#B8864B] text-white shadow-xs'
                  : 'bg-white text-[#475569] border border-[#DECBB5] hover:border-[#B8864B]'
              }`}
            >
              {cat.title.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Activity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-white rounded-3xl p-7 border border-[#E6D7C3] hover:border-[#B8864B]/60 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#8C5E28] bg-[#FAF5EC] px-3 py-1 rounded-full border border-[#DECBB5]">
                      {cat.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] font-heading mb-1">
                    {cat.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#8C5E28] mb-3">
                    {cat.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                    {cat.overview}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-2.5 mb-6">
                    <span className="text-xs font-bold text-[#0F172A] block uppercase tracking-wider font-heading">
                      Key Operational Parameters:
                    </span>
                    {cat.keyAspects.map((aspect, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#475569] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                        <span>{aspect}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Workspace & Advisory Note */}
                <div className="pt-4 border-t border-[#F1E8DC] space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#0F172A]">
                    <Layers className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
                    <span><strong>Workspace:</strong> {cat.workspaceFit}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF5EC] border border-[#DECBB5]/70 text-[11px] text-[#8C5E28] leading-normal flex items-start gap-2">
                    <AlertCircle className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                    <span>{cat.advisoryNote}</span>
                  </div>

                  <button
                    onClick={() => onOpenConsultation(`Ajman Free Zone Activity: ${cat.title}`)}
                    className="w-full mt-2 py-2.5 rounded-xl bg-[#FAF7F0] hover:bg-[#B8864B] text-[#8C5E28] hover:text-white border border-[#DECBB5] hover:border-transparent font-bold text-xs font-heading transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Check Activity Suitability</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-2xl bg-white border border-[#DECBB5] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading">
              Have a niche activity not listed above?
            </h4>
            <p className="text-xs sm:text-sm text-[#475569]">
              Brightlink can cross-reference the official AFZ master activity classification directory to map your exact commercial operations.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation('Ajman Free Zone Custom Activity Search')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#8C5E28] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm whitespace-nowrap cursor-pointer shrink-0"
          >
            Request Activity Review
          </button>
        </div>

      </div>
    </section>
  );
};
