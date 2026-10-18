import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileText, 
  ShoppingBag, 
  Briefcase, 
  Factory, 
  Laptop, 
  Tv, 
  Truck, 
  Landmark, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export const AbuDhabiLicenceTypes = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const licenceCategories = [
    {
      icon: Briefcase,
      title: 'Professional & Consultancy Services',
      tag: 'Service Sector',
      description: 'Permitted across multiple zones (such as Masdar City, ADGM non-financial, and KEZAD). Tailored for specialized advisory, corporate consulting, project management, and intellectual services.',
      examples: 'Management consulting, engineering advisory, legal consulting (ADGM), environmental advisory, HR services, and corporate strategy.',
      jurisdictions: 'Masdar City, ADGM, KEZAD'
    },
    {
      icon: ShoppingBag,
      title: 'Commercial & Trading Licences',
      tag: 'Wholesale & B2B',
      description: 'Permits the import, export, storage, and cross-border distribution of specified physical product lines or general commercial merchandise.',
      examples: 'Wholesale equipment trading, building materials, consumer goods, food products, raw industrial commodities, and re-export.',
      jurisdictions: 'KEZAD, Masdar City'
    },
    {
      icon: Factory,
      title: 'Industrial & Manufacturing Licences',
      tag: 'Production & Assembly',
      description: 'Specifically designated for companies carrying out physical production, assembling, processing, packaging, and heavy or light fabrication within designated industrial parks.',
      examples: 'Metal fabrication, polymer manufacturing, food packaging, chemical processing, automotive assembly, and renewable energy components.',
      jurisdictions: 'Primarily KEZAD'
    },
    {
      icon: Laptop,
      title: 'Technology & IT Services',
      tag: 'Digital & Software',
      description: 'Aimed at software development firms, artificial intelligence research labs, fintech innovators, cloud infrastructure providers, and hardware engineers.',
      examples: 'Software development, AI and machine learning labs, cybersecurity systems, data analytics, and green-technology solutions.',
      jurisdictions: 'Masdar City, ADGM, twofour54'
    },
    {
      icon: Tv,
      title: 'Media & Creative Licences',
      tag: 'Entertainment & Content',
      description: 'Regulated by the Creative Media Authority (CMA) for content creators, game development studios, television networks, advertising agencies, and freelance talent.',
      examples: 'Digital content creation, film and video production, esports, gaming development, journalism, PR, and independent creative permits.',
      jurisdictions: 'Creative Media Authority / twofour54'
    },
    {
      icon: Truck,
      title: 'Logistics & Warehousing Licences',
      tag: 'Supply Chain',
      description: 'Designed for logistics operators, supply chain managers, 3PL/4PL freight forwarders, and bonded distribution facilities adjacent to ports and transport corridors.',
      examples: 'Freight forwarding, bonded customs warehousing, cold-chain distribution, multimodal cargo handling, and container storage.',
      jurisdictions: 'Primarily KEZAD'
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce Licences',
      tag: 'Online Portals',
      description: 'Permits digital sales through electronic web portals, software-as-a-service platforms, and consumer online marketplaces with physical or dropship fulfillment.',
      examples: 'Online retail marketplaces, digital service portals, electronic payment facilitation, and dropshipping distribution networks.',
      jurisdictions: 'Masdar City, KEZAD, ADGM'
    },
    {
      icon: Landmark,
      title: 'Regulated Financial Services',
      tag: 'Financial Markets',
      description: 'Strictly restricted to eligible financial firms operating under the comprehensive regulatory oversight of ADGM’s Financial Services Regulatory Authority (FSRA).',
      examples: 'Asset management, private equity, hedge funds, brokerage, digital asset exchanges, corporate finance, and private banking.',
      jurisdictions: 'Exclusively ADGM'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-2xs">
            <FileText className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>ACTIVITIES & LICENSING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Abu Dhabi Business Activities and Licence Types
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Available business activities and licence categories depend strictly on the chosen free zone authority. Each authority establishes its own activity classifications and external approval requirements.
          </p>
        </div>

        {/* Licences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {licenceCategories.map((lic, idx) => {
            const Icon = lic.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="rounded-2xl p-6 bg-white border border-[#E6D7C3] hover:border-[#DECBB5] hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors duration-200 shadow-2xs">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FAF5EC] text-[#8C5E28] border border-[#DECBB5]/60 font-heading">
                      {lic.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2 leading-snug">
                    {lic.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {lic.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-neutral-100 text-xs">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] font-heading block mb-0.5">
                        Typical Activities
                      </span>
                      <span className="text-[11px] text-[#475569] leading-relaxed block">
                        {lic.examples}
                      </span>
                    </div>

                    <div className="pt-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C5E28] font-heading block mb-0.5">
                        Applicable Zones
                      </span>
                      <span className="text-[11px] text-[#0F172A] font-semibold block">
                        {lic.jurisdictions}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100">
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(`Abu Dhabi Licence - ${lic.title}`)}
                    className="w-full py-2 px-3 rounded-xl bg-[#FAF7F0] hover:bg-[#FAF5EC] text-[#8C5E28] hover:text-[#0F172A] font-bold text-xs border border-[#E6D7C3] transition-colors flex items-center justify-center gap-1.5 cursor-pointer font-heading"
                  >
                    <span>Check Activity Eligibility</span>
                    <ArrowRight className="w-3 h-3 text-[#B8864B]" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* External Approvals Notice Box */}
        <div className="rounded-3xl bg-white border border-[#E6D7C3] p-7 sm:p-9 shadow-sm">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
              <ShieldAlert className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div className="space-y-2">
              <h4 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading">
                Specialized Permissions & External Government Approvals
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Certain business activities in Abu Dhabi require third-party clearances beyond the free zone authority itself. For example:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#475569] pt-1">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                  <span><strong>Financial & Investment Services:</strong> Subject to FSRA approvals and capital adequacy requirements in ADGM.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                  <span><strong>Industrial & Chemical Facilities:</strong> Require Environment Agency – Abu Dhabi (EAD) and Civil Defence permits in KEZAD.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                  <span><strong>Port & Critical Infrastructure Access:</strong> May require CICPA security security clearance passes for operational personnel.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                  <span><strong>Broadcasting & Media Distribution:</strong> Subject to Media Regulatory Office / CMA content guidelines.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
