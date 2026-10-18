import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Globe, 
  Landmark, 
  Anchor, 
  Layers, 
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MapPin
} from 'lucide-react';

export const WhatIsAjmanFreeZone = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const coreFacets = [
    {
      icon: Anchor,
      title: 'Direct Maritime Port Gateway',
      description: 'Situated immediately adjacent to the natural creek and container terminal of Ajman Port, granting industrial, logistics, and trading firms direct deepwater vessel docking and expedited customs clearance.'
    },
    {
      icon: Landmark,
      title: 'Decades of Regulatory Stability',
      description: 'Founded in 1988 by Emiri Decree, Ajman Free Zone Authority (AFZ) boasts over 35 years of regulatory evolution, offering entrepreneurs an established, tested, and reliable business environment.'
    },
    {
      icon: Layers,
      title: 'Pragmatic & Accessible Formations',
      description: 'Celebrated for flexible payment instalment options, low initial capital deposit requirements, and accessible workspace packages tailored for emerging startups and international SMEs.'
    },
    {
      icon: Globe,
      title: 'Inter-Emirate Highway Connectivity',
      description: 'Direct transit links to Sheikh Mohammed Bin Zayed Road (E311) and Emirates Road (E611), placing Dubai International Airport within 30 minutes and Sharjah International Airport within 20 minutes.'
    }
  ];

  return (
    <section id="what-is-ajman-free-zone" className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Building2 className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>SPECIAL ECONOMIC JURISDICTION OVERVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Understanding Ajman Free Zone Company Formation
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Ajman Free Zone is an autonomous economic jurisdiction governed by its own regulatory authority, engineered to provide domestic and international investors with agile, cost-competitive business solutions.
          </p>
        </div>

        {/* Narrative & Insight Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#475569] leading-relaxed">
            <p>
              Established under Emiri Decree No. 3 of 1988 and bolstered by subsequent legislation, <strong className="text-[#0F172A]">Ajman Free Zone (AFZ)</strong> serves as one of the cornerstone commercial ecosystems in the Northern Emirates. It operates as an independent regulatory enclave, empowering business founders to incorporate legal entities, obtain trade licences, sponsor employees, and manage facilities without requiring a local Emirati sponsor.
            </p>
            <p>
              Unlike standard UAE mainland licensing under the Department of Economic Development (DED), company registration within Ajman Free Zone is executed directly under the authority’s unified portal. Businesses benefit from 100% foreign equity ownership, zero personal income taxation, and exemption from import and export tariffs for goods brought into the free zone or re-exported globally.
            </p>
            <p>
              Whether you are launching an e-commerce brand, establishing an international consultancy, trading industrial machinery through Ajman Port, or operating a manufacturing facility, selecting the appropriate licence category, workspace, and legal structure is the foundation of long-term operational success and compliance.
            </p>
            
            <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#DECBB5] flex items-start gap-3 text-xs sm:text-sm text-[#0F172A]">
              <HelpCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
              <span>
                <strong>Free Zone vs. Mainland Perimeter:</strong> AFZ licences authorize companies to conduct business globally and within the free zone. Delivering physical products directly to mainland UAE consumers or bidding on onshore government tenders requires working through licensed mainland distributors or setting up a mainland branch.
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0F172A] p-7 text-white space-y-6 relative overflow-hidden border border-[#B8864B]/30 shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#B8864B]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#B8864B] uppercase tracking-wider font-heading">
                  Quick Facts at a Glance
                </span>
                <h3 className="text-xl font-bold font-heading text-white">
                  Why Global Investors Choose AFZ
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span><strong>Over 35 Years:</strong> Established track record housing thousands of operational companies from 140+ nations.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span><strong>Port Adjacency:</strong> Immediate access to 1.5 million metric tons of annual cargo capacity at Ajman Port.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span><strong>Flexible Workspaces:</strong> Scalable options from affordable Smart Desks to 2,000+ m² pre-built industrial warehouses.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                  <span><strong>Expedited Turnaround:</strong> Digital submission, pre-approvals, and trade licence generation within 24 to 48 hours.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Need expert guidance?</span>
                <button
                  onClick={() => onOpenConsultation('Ajman Free Zone Overview Inquiry')}
                  className="text-xs text-[#F5D7A1] hover:text-white font-bold flex items-center gap-1 cursor-pointer"
                >
                  <span>Consult Specialist</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFacets.map((facet, index) => {
            const Icon = facet.icon;
            return (
              <motion.div
                key={facet.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-[#FAF7F0] rounded-2xl p-6 border border-[#E6D7C3] hover:border-[#B8864B]/60 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {facet.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {facet.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#DECBB5]/60 text-[11px] font-semibold text-[#8C5E28] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Authority Verified Feature</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
