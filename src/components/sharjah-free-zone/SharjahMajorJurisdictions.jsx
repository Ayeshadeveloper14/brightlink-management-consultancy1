import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building, 
  MapPin, 
  Sparkles, 
  Check, 
  ArrowRight,
  Plane,
  Anchor,
  Tv,
  BookOpen,
  Scale,
  ShieldAlert
} from 'lucide-react';

export const SharjahMajorJurisdictions = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const jurisdictions = [
    {
      id: 'saif-zone',
      name: 'Sharjah Airport International Free Zone (SAIF Zone)',
      badge: 'Aviation, Logistics & Industrial Hub',
      established: 'Established 1995',
      location: 'Adjacent to Sharjah International Airport',
      icon: Plane,
      color: 'from-[#0F172A] to-[#1E293B]',
      accentColor: '#B8864B',
      overview: 'SAIF Zone is one of the UAE’s oldest and most renowned free zones. Positioned immediately adjacent to Sharjah International Airport and freight cargo terminals, it serves as a global commercial nerve center for import/export, aviation support, electronics, consumer goods, and light manufacturing.',
      permittedFocus: 'Aviation services, freight forwarding, consumer goods trading, IT hardware distribution, industrial packaging, assembly, and specialized professional consultancies.',
      facilities: 'Pre-built scalable warehouses (125 to 600+ sq. m.), light industrial units, dedicated executive offices, packaged desk spaces, and land plots for custom development.',
      keyPoints: [
        'Immediate proximity to Sharjah International Airport cargo terminals',
        'Direct road access to Emirates Road (E611) and Sheikh Mohammed Bin Zayed Road (E311)',
        'On-site customs department for fast air-freight cargo clearance',
        'Round-the-clock security and industrial utility support'
      ],
      notice: 'Eligibility notice: Industrial activities require specific warehouse or plot leasing and may be subject to Sharjah Civil Defence and environmental safety reviews.',
      cta: 'Explore SAIF Zone Setup'
    },
    {
      id: 'hamriyah',
      name: 'Hamriyah Free Zone (HFZA)',
      badge: 'Maritime, Heavy Industry & Petrochemicals',
      established: 'Deepwater Port Integration',
      location: 'Hamriyah Deepwater Port, Sharjah',
      icon: Anchor,
      color: 'from-[#0F172A] to-[#1E293B]',
      accentColor: '#B8864B',
      overview: 'Hamriyah Free Zone is a premier industrial and commercial trade hub anchored by a 14-meter deepwater port. Spanning over 26 million square meters, it is home to thousands of international enterprises across steel manufacturing, oil & gas, petrochemicals, maritime logistics, and food processing.',
      permittedFocus: 'Heavy and light industrial manufacturing, oil & gas services, maritime engineering, structural steel fabrication, timber processing, bulk commodity trading, and multi-acre logistics.',
      facilities: 'Deepwater berths, harbour front land plots, heavy-duty pre-built warehouses, open storage yards, and fully serviced executive offices.',
      keyPoints: [
        'Direct maritime access via 14m deepwater port and dedicated harbour berths',
        'Large-scale industrial land plots with heavy electrical power capacity',
        'Specialized zones for steel, petrochemicals, recycling, and marine fabrication',
        'Dedicated investor service center for streamlined licensing and visa processing'
      ],
      notice: 'Facility requirement: Heavy industrial and manufacturing licences mandate appropriate land or warehouse facilities and are subject to Environmental Agency clearances.',
      cta: 'Explore Hamriyah Free Zone Setup'
    },
    {
      id: 'shams',
      name: 'Sharjah Media City (SHAMS)',
      badge: 'Media, Creative & Digital Startups',
      established: 'Creative Digital Hub',
      location: 'Al Messaned, Sharjah',
      icon: Tv,
      color: 'from-[#0F172A] to-[#1E293B]',
      accentColor: '#B8864B',
      overview: 'Sharjah Media City (SHAMS) is a modern, dynamic free zone engineered for the creative, digital, media, and technology industries. It is particularly popular among startups, digital agencies, e-commerce brands, and professional consultants seeking cost-effective and flexible company formation.',
      permittedFocus: 'Digital media, marketing agencies, content creation, software engineering, e-commerce, advertising, PR, event management, and business consultancy.',
      facilities: 'Shared desk spaces, dedicated smart desks, serviced creative offices, and private corporate suites with flexible lease commitments.',
      keyPoints: [
        'Cost-effective company setup packages tailored for digital founders and freelancers',
        '100% digital incorporation process with minimal paperwork',
        'Ability to combine multiple business activities under a single trade licence',
        'Flexible visa allocations connected to smart desk and shared office facilities'
      ],
      notice: 'Jurisdiction scope: SHAMS is focused primarily on media, consultancy, and digital services; it does not offer heavy industrial or port-bonded facilities.',
      cta: 'Explore SHAMS Company Formation'
    },
    {
      id: 'spc-free-zone',
      name: 'Sharjah Publishing City (SPC Free Zone)',
      badge: 'Publishing, Printing & Modern Commerce',
      established: 'Global Publishing Capital',
      location: 'Sheikh Mohammed Bin Zayed Road (E311)',
      icon: BookOpen,
      color: 'from-[#0F172A] to-[#1E293B]',
      accentColor: '#B8864B',
      overview: 'Sharjah Publishing City (SPC Free Zone) is the world’s first dedicated publishing and printing free zone. In addition to its specialized printing and editorial ecosystem, SPC has evolved into a premier commercial hub offering fast multi-activity licensing for trading, consulting, and e-commerce enterprises.',
      permittedFocus: 'Book publishing, digital printing, copyright distribution, translation services, general commercial trading, consulting, and dual-licensing with Sharjah mainland.',
      facilities: 'Modern furnished offices, flexi-desks, on-demand printing facilities, climate-controlled storage, and scalable commercial spaces.',
      keyPoints: [
        'Fast-track trade licence issuance (often completed within 1 to 3 working days)',
        'Dual-licence facility allowing businesses to operate both in the free zone and mainland',
        'Over 1,500 permitted business activities across commercial, service, and trading sectors',
        'Flexible visa packages supporting up to 6+ visas on shared office solutions'
      ],
      notice: 'Licence scope: While historically centered on printing and publishing, SPC offers broad commercial and service licensing subject to authority approvals.',
      cta: 'Explore SPC Free Zone Setup'
    }
  ];

  return (
    <section id="sharjah-jurisdictions" className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      
      {/* Decorative Ambient Accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#B8864B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#DECBB5]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-2xs">
            <Building className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>MAJOR AUTHORITIES DIRECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Explore the Major Sharjah Free Zones
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Sharjah offers specialized free zone environments designed for distinct commercial sectors. Review the core focus, facilities, and operational considerations of each jurisdiction below.
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
                      <span>{j.established}</span>
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

                  {/* Structured Details */}
                  <div className="space-y-3 pt-3 border-t border-neutral-100 mb-5 text-xs text-[#475569]">
                    <div>
                      <strong className="text-[#0F172A] block mb-0.5">Permitted Business Sectors:</strong>
                      <span>{j.permittedFocus}</span>
                    </div>

                    <div>
                      <strong className="text-[#0F172A] block mb-0.5">Workspace & Facilities:</strong>
                      <span>{j.facilities}</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-2 border-t border-neutral-100 mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] font-heading block">
                      Authority Highlights
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
                  onClick={() => onOpenConsultation(`Sharjah Setup - ${j.name}`)}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#FAF7F0] to-[#FAF5EC] hover:from-[#FAF5EC] hover:to-[#F5E8D4] text-[#8C5E28] hover:text-[#0F172A] font-bold text-xs uppercase tracking-wider border border-[#DECBB5] transition-all flex items-center justify-center gap-2 cursor-pointer font-heading shadow-2xs"
                >
                  <span>{j.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B8864B]" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Accuracy Rule Clarification Banner */}
        <div className="rounded-2xl bg-white border border-[#E6D7C3] p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E28] font-heading block">
              SEPARATE REGULATORY JURISDICTIONS
            </span>
            <p className="text-sm font-semibold text-[#0F172A]">
              SAIF Zone, Hamriyah, SHAMS, and SPC Free Zone operate under distinct regulatory bylaws.
            </p>
            <p className="text-xs text-[#64748B]">
              Do not assume that all facilities, activities, fee schedules, or visa allocations are identical. Brightlink assesses your exact business model to identify the most suitable authority.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation('Sharjah Free Zone Authority Comparison')}
            className="px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer shrink-0 font-heading"
          >
            Compare Sharjah Free Zones
          </button>
        </div>

      </div>
    </section>
  );
};
