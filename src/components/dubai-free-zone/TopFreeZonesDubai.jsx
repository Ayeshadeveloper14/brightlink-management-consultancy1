import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building, 
  MapPin, 
  Sparkles, 
  Check, 
  ArrowRight,
  Plane,
  Laptop,
  Coins,
  Anchor,
  Factory
} from 'lucide-react';

export const TopFreeZonesDubai = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();
  const [selectedFilter, setSelectedFilter] = useState('All');

  const freeZones = [
    {
      id: 'ifza',
      name: 'IFZA Dubai',
      fullTitle: 'International Free Zone Authority',
      location: 'Dubai Silicon Oasis / Digital Park',
      category: 'Consulting & E-Commerce',
      icon: Sparkles,
      tag: 'Fast Digital Setup',
      description: 'One of Dubai’s fastest-growing and most cost-effective free zones for modern consultancies, marketing agencies, service providers, and digital e-commerce businesses.',
      strengths: [
        'Cost-effective multi-activity licensing',
        'Streamlined remote incorporation',
        'Flexible visa allocation packages',
        'No mandatory paid-up capital deposit'
      ]
    },
    {
      id: 'dmcc',
      name: 'DMCC Dubai',
      fullTitle: 'Dubai Multi Commodities Centre',
      location: 'Jumeirah Lakes Towers (JLT)',
      category: 'Commodities & Tech',
      icon: Coins,
      tag: 'Global Flagship Hub',
      description: 'Crowned Global Free Zone of the Year multiple times. Home to over 24,000 businesses across precious metals, commodities, blockchain/crypto, fintech, and multinational headquarters.',
      strengths: [
        'World-renowned global reputation & prestige',
        'Specialized DMCC Crypto & Gaming centres',
        'Direct connection to Dubai metro & highways',
        'Prime commercial office towers in JLT'
      ]
    },
    {
      id: 'dafza',
      name: 'DAFZA',
      fullTitle: 'Dubai Airport Freezone Authority',
      location: 'Adjacent to Dubai International Airport (DXB)',
      category: 'Logistics & Aviation',
      icon: Plane,
      tag: 'Express Air Freight',
      description: 'Strategically integrated with DXB airport. The premier destination for aerospace, pharmaceuticals, high-value electronics, freight forwarding, and international logistics.',
      strengths: [
        'Direct ramp and tarmac airport access',
        'On-site customs and cargo processing',
        'Dedicated cold-chain & pharmaceutical storage',
        'Exceptional air connectivity for re-export'
      ]
    },
    {
      id: 'dwtc',
      name: 'DWTC Authority',
      fullTitle: 'Dubai World Trade Centre Authority',
      location: 'Sheikh Zayed Road / One Central',
      category: 'Finance & Media',
      icon: Building,
      tag: 'Prime Downtown Location',
      description: 'Positioned at the epicentre of Dubai’s central business district. Favoured by top management consultancies, legal firms, financial services, and event management groups.',
      strengths: [
        'Unbeatable central Sheikh Zayed Road address',
        'Proximity to Dubai International Financial Centre (DIFC)',
        'Dual-licensing framework with Dubai mainland',
        'Prestigious grade-A One Central offices'
      ]
    },
    {
      id: 'dubai-south',
      name: 'Dubai South',
      fullTitle: 'Dubai South (DWC / Al Maktoum Airport)',
      location: 'Al Maktoum International Airport & Expo City',
      category: 'Logistics & Aviation',
      icon: Plane,
      tag: 'Megaproject Hub',
      description: 'Dubai’s largest master-planned economic corridor connecting Al Maktoum Airport, Jebel Ali Seaport, and Expo City Dubai. Optimized for logistics, aerospace, and e-commerce fulfillment.',
      strengths: [
        'Seamless sea-to-air multimodal logistics corridor',
        'Direct proximity to Al Maktoum International Airport',
        'Scalable industrial warehouses and plots',
        'High-density e-commerce distribution parks'
      ]
    },
    {
      id: 'meydan',
      name: 'Meydan Free Zone',
      fullTitle: 'Meydan Free Zone (MFZ)',
      location: 'Meydan Hotel / Nad Al Sheba',
      category: 'Consulting & E-Commerce',
      icon: Sparkles,
      tag: 'Centrally Located',
      description: 'Situated only 15 minutes from Downtown Dubai. Offers modern digital entrepreneur licenses, shared workspaces at the Meydan Hotel, and easy corporate bank account setups.',
      strengths: [
        'Prime location close to Business Bay and Downtown',
        '100% digital trade license registration',
        'Flexible desk and luxury hotel workspaces',
        'Expansive range of permitted business activities'
      ]
    },
    {
      id: 'dtec',
      name: 'DTEC / DSO',
      fullTitle: 'Dubai Silicon Oasis Technology Entrepreneur Campus',
      location: 'Dubai Silicon Oasis (DSO)',
      category: 'Technology & Startups',
      icon: Laptop,
      tag: 'Tech & Startup Ecosystem',
      description: 'The largest technology entrepreneurship hub in the MENA region. Engineered for software developers, venture-backed startups, AI labs, robotics, and hardware innovators.',
      strengths: [
        'Specialized tech incubator & accelerator programs',
        'Subsidized startup packages for founders',
        'Venture capital & angel investor networking',
        'High-speed fiber-optic & cloud computing infrastructure'
      ]
    },
    {
      id: 'jafza',
      name: 'JAFZA',
      fullTitle: 'Jebel Ali Free Zone Authority (DP World)',
      location: 'Jebel Ali Seaport & Industrial Zone',
      category: 'Industrial & Trade',
      icon: Anchor,
      tag: 'Global Maritime Hub',
      description: 'The world’s leading port-centric free zone, integrated directly with DP World’s Jebel Ali Port. The undisputed standard for heavy manufacturing, bulk commodity trading, and international shipping.',
      strengths: [
        'Direct deep-water berth access at Jebel Ali Port',
        'Heavy industrial power, gas & chemical infrastructure',
        'Custom-built bonded warehouses & assembly units',
        'Customs clearance directly within port boundaries'
      ]
    }
  ];

  const filterCategories = ['All', 'Consulting & E-Commerce', 'Commodities & Tech', 'Logistics & Aviation', 'Technology & Startups', 'Industrial & Trade'];

  const filteredZones = selectedFilter === 'All' 
    ? freeZones 
    : freeZones.filter(z => z.category === selectedFilter || (selectedFilter === 'Logistics & Aviation' && z.category.includes('Logistics')));

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#B8864B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#DECBB5]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-2xs">
            <Building className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>AUTHORITIES DIRECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Top Dubai Free Zones for Business Setup
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            With over 30 specialized free zones in Dubai, matching your operational requirements with the right authority is crucial. Brightlink helps you select the optimal jurisdiction based on activity, budget, and expansion goals.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-[#B8864B] text-white shadow-xs'
                    : 'bg-white text-[#475569] hover:bg-[#FAF5EC] border border-[#E6D7C3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Free Zone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredZones.map((zone, idx) => {
            const Icon = zone.icon;
            return (
              <motion.div
                key={zone.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-[#E6D7C3] shadow-xs hover:shadow-xl hover:border-[#DECBB5] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shadow-2xs group-hover:bg-[#B8864B] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF5EC] text-[#8C5E28] border border-[#DECBB5]/60 font-heading">
                      {zone.tag}
                    </span>
                  </div>

                  {/* Titles */}
                  <h3 className="text-lg font-bold text-[#0F172A] font-heading mb-1">
                    {zone.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#8C5E28] font-medium mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
                    <span>{zone.location}</span>
                  </div>

                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {zone.description}
                  </p>

                  {/* Key Strengths */}
                  <div className="space-y-2 pt-2 border-t border-neutral-100 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] font-heading block">
                      Key Highlights
                    </span>
                    {zone.strengths.map((str, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-1.5 text-[11px] text-[#475569]">
                        <Check className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                        <span className="leading-snug">{str}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenConsultation(`Dubai Free Zone Setup - ${zone.name}`)}
                  className="w-full mt-2 py-2 px-3 rounded-xl bg-[#FAF7F0] hover:bg-[#FAF5EC] text-[#8C5E28] hover:text-[#0F172A] font-bold text-xs border border-[#E6D7C3] transition-colors flex items-center justify-center gap-1.5 cursor-pointer font-heading"
                >
                  <span>Inquire About {zone.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B8864B]" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
