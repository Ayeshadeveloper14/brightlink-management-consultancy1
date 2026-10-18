import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building, 
  MapPin, 
  Sparkles, 
  Check, 
  ArrowRight,
  Landmark,
  Factory,
  Leaf,
  Tv,
  Scale,
  ShieldAlert
} from 'lucide-react';

export const AbuDhabiJurisdictions = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const jurisdictions = [
    {
      id: 'adgm',
      name: 'Abu Dhabi Global Market (ADGM)',
      badge: 'International Financial Centre',
      jurisdictionType: 'English Common Law Framework',
      location: 'Al Maryah Island & Al Reem Island',
      icon: Landmark,
      color: 'from-[#0F172A] to-[#1E293B]',
      accentColor: '#B8864B',
      overview: 'ADGM is an award-winning international financial centre operating under an independent English Common Law legal framework. It is globally recognized for private banking, wealth & asset management, fintech, holding companies, family offices, and specialized professional services.',
      permittedFocus: 'Regulated financial institutions, investment funds, family offices, Special Purpose Vehicles (SPVs), technology startups, legal firms, accounting practices, and corporate holding entities.',
      regulatoryBody: 'Registration Authority (RA), Financial Services Regulatory Authority (FSRA), and ADGM Courts.',
      facilities: 'Grade-A commercial office towers on Al Maryah Island (Abu Dhabi Global Market Square) and Al Reem Island, co-working suites, and executive private offices.',
      keyPoints: [
        'Direct application of English Common Law with independent courts',
        'Tier-1 financial regulatory regime administered by the FSRA',
        'Highly flexible Special Purpose Vehicles (SPVs) for holding assets',
        'Strict economic substance, compliance, and AML/CFT verification'
      ],
      notice: 'Eligibility notice: Not all general commercial or industrial activities can be licensed in ADGM. Activities are subject to regulatory approval and suitability assessment.'
    },
    {
      id: 'kezad',
      name: 'Khalifa Economic Zones Abu Dhabi (KEZAD)',
      badge: 'Industrial, Logistics & Trade Hub',
      jurisdictionType: 'Civil Law Industrial Economic Zone',
      location: 'Adjacent to Khalifa Port, Al Taweelah',
      icon: Factory,
      color: 'from-[#0F172A] to-[#1E293B]',
      accentColor: '#B8864B',
      overview: 'Part of AD Ports Group, KEZAD represents the largest integrated trade, logistics, and industrial hub in the region. Directly integrated with the deepwater Khalifa Port, KEZAD provides world-class infrastructure for heavy manufacturing, food processing, automotive, polymers, and multimodal logistics.',
      permittedFocus: 'Industrial manufacturing, assembling, commercial trading, wholesale distribution, cold-chain storage, pharmaceuticals, metal fabrication, and freight forwarding.',
      regulatoryBody: 'KEZAD Authority (AD Ports Group) under Abu Dhabi economic and customs regulations.',
      facilities: 'Pre-built warehouses, light industrial units (LIUs), bonded logistics parks, modular offices, and expansive master-planned industrial land plots.',
      keyPoints: [
        'Direct deepwater berth access and container terminal at Khalifa Port',
        'Integration with national rail corridors (Etihad Rail) and GCC road networks',
        'Heavy-duty industrial utilities (high power capacity, industrial gas & water)',
        'Dual-licensing options to serve UAE mainland markets via formal branches'
      ],
      notice: 'Facility requirement: Industrial and manufacturing licenses require appropriate warehouse leases or land allocation subject to environmental and safety approvals.'
    },
    {
      id: 'masdar',
      name: 'Masdar City Free Zone',
      badge: 'Clean-Tech, AI & Sustainability',
      jurisdictionType: 'Sustainability-Focused Innovation Zone',
      location: 'Masdar City (Adjacent to Abu Dhabi Airport)',
      icon: Leaf,
      color: 'from-[#0F172A] to-[#1E293B]',
      accentColor: '#B8864B',
      overview: 'Masdar City Free Zone is a global benchmark for clean-tech innovation, sustainable urban development, renewable energy, and advanced scientific research. It serves as a thriving destination for tech startups, artificial intelligence labs, energy consultancies, and green-technology developers.',
      permittedFocus: 'Renewable energy, clean technology, artificial intelligence, robotics, environmental consultancy, urban mobility, healthcare tech, and sustainability advisory.',
      regulatoryBody: 'Masdar City Free Zone Authority.',
      facilities: 'Green-certified low-carbon office spaces, the Catalyst startup accelerator, flexi-desk packages, and specialized research laboratory spaces.',
      keyPoints: [
        'Dedicated ecosystem for sustainable innovation and green tech ventures',
        'Proximity to Mohammed bin Zayed University of Artificial Intelligence (MBZUAI)',
        'Cost-effective startup packages with flexible desk solutions',
        'Comprehensive community networking with global sustainability leaders'
      ],
      notice: 'Sector alignment: While diverse professional services are welcomed, businesses with clear research, technology, or sustainability components gain the greatest ecosystem benefit.'
    },
    {
      id: 'cma',
      name: 'Creative Media Authority (CMA) / twofour54',
      badge: 'Media, Gaming & Digital Content',
      jurisdictionType: 'Creative & Digital Media Ecosystem',
      location: 'Yas Creative Hub, Yas Island',
      icon: Tv,
      color: 'from-[#0F172A] to-[#1E293B]',
      accentColor: '#B8864B',
      overview: 'Abu Dhabi’s media and entertainment landscape is regulated by the Creative Media Authority (CMA), which oversees licensing and content compliance, with twofour54 providing the vibrant commercial campus, flagship production studios, and business community at Yas Creative Hub.',
      permittedFocus: 'Film & television production, digital animation, gaming & esports development, digital content creation, journalism, publishing, advertising, PR, and individual creative freelance activities.',
      regulatoryBody: 'Creative Media Authority (CMA - Regulatory Body) in collaboration with twofour54 (Operating Community).',
      facilities: 'Yas Creative Hub private offices, customized editing suites, sound stages, backlots, podcast recording studios, and shared media coworking spaces.',
      keyPoints: [
        'Specialized media regulatory framework with dedicated creative activity codes',
        'Access to Abu Dhabi Film Commission’s 30%+ cash rebate for eligible productions',
        'Subsidized setup options and flexible freelance permits for independent talent',
        'Collaborative creative community hosting major global broadcast and gaming brands'
      ],
      notice: 'Jurisdiction note: The Creative Media Authority serves as the regulatory and licensing entity, while twofour54 operates the Yas Creative Hub physical community and infrastructure.'
    }
  ];

  return (
    <section id="abu-dhabi-jurisdictions" className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#B8864B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#DECBB5]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-2xs">
            <Building className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>SPECIALIZED FREE ZONE HUBS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Abu Dhabi Free Zone Jurisdictions
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Abu Dhabi’s free zones are not one-size-fits-all. Each jurisdiction maintains independent laws, dedicated facilities, distinct fee schedules, and specialized sector ecosystems. Explore the key options below.
          </p>
        </div>

        {/* 4 In-Depth Jurisdiction Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {jurisdictions.map((j, idx) => {
            const Icon = j.icon;
            return (
              <motion.div
                key={j.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E6D7C3] shadow-sm hover:shadow-xl hover:border-[#DECBB5] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header Card Info */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shadow-2xs">
                        <Icon className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#8C5E28] block font-heading">
                          {j.badge}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading leading-tight">
                          {j.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FAF7F0] border border-[#DECBB5]/70 text-[#0F172A] font-semibold">
                      <Scale className="w-3.5 h-3.5 text-[#B8864B]" />
                      <span>{j.jurisdictionType}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FAF7F0] border border-[#DECBB5]/70 text-[#64748B] font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#B8864B]" />
                      <span>{j.location}</span>
                    </span>
                  </div>

                  {/* Overview */}
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                    {j.overview}
                  </p>

                  {/* Structured Details Grid */}
                  <div className="space-y-3 pt-3 border-t border-neutral-100 mb-5 text-xs text-[#475569]">
                    <div>
                      <strong className="text-[#0F172A] block mb-0.5">Primary Focus Activities:</strong>
                      <span>{j.permittedFocus}</span>
                    </div>

                    <div>
                      <strong className="text-[#0F172A] block mb-0.5">Governing Authority:</strong>
                      <span>{j.regulatoryBody}</span>
                    </div>

                    <div>
                      <strong className="text-[#0F172A] block mb-0.5">Available Facilities:</strong>
                      <span>{j.facilities}</span>
                    </div>
                  </div>

                  {/* Key Points */}
                  <div className="space-y-2 pt-2 border-t border-neutral-100 mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] font-heading block">
                      Jurisdiction Highlights
                    </span>
                    {j.keyPoints.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-[11px] sm:text-xs text-[#475569]">
                        <Check className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Regulatory Scope Notice */}
                  <div className="p-3 rounded-xl bg-[#FAF5EC]/80 border border-[#DECBB5]/60 text-[11px] text-[#8C5E28] leading-relaxed mb-6">
                    <ShieldAlert className="w-3.5 h-3.5 inline mr-1.5 text-[#B8864B]" />
                    <span>{j.notice}</span>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <button
                  type="button"
                  onClick={() => onOpenConsultation(`Abu Dhabi Setup - ${j.name}`)}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#FAF7F0] to-[#FAF5EC] hover:from-[#FAF5EC] hover:to-[#F5E8D4] text-[#8C5E28] hover:text-[#0F172A] font-bold text-xs uppercase tracking-wider border border-[#DECBB5] transition-all flex items-center justify-center gap-2 cursor-pointer font-heading shadow-2xs"
                >
                  <span>Discuss {j.name.split(' ')[0]} Setup Options</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B8864B]" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Informative Comparison Note */}
        <div className="rounded-2xl bg-white border border-[#E6D7C3] p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E28] font-heading block">
              ACCURACY AND REGULATORY INTEGRITY
            </span>
            <p className="text-sm font-semibold text-[#0F172A]">
              Abu Dhabi free zones do not share uniform fees, legal frameworks, or licensing rules.
            </p>
            <p className="text-xs text-[#64748B]">
              Brightlink helps you navigate the specific bylaws of ADGM, KEZAD, Masdar City, and CMA to verify exact activity codes, facility leases, and authority application processes.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation('Abu Dhabi Free Zone Comparison Assessment')}
            className="px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer shrink-0 font-heading"
          >
            Compare All Jurisdictions
          </button>
        </div>

      </div>
    </section>
  );
};
