import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShoppingBag, 
  Boxes, 
  Briefcase, 
  FileCode2, 
  ShoppingCart, 
  UserCheck, 
  Factory, 
  Ship, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck,
  Building
} from 'lucide-react';

export const UaqActivitiesAndLicences = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const licenceCategories = [
    {
      id: 'commercial-trading',
      title: 'Commercial / Trading Licence',
      badge: 'Commodities & Goods Distribution',
      icon: ShoppingBag,
      meaning: 'Authorizes the buying, selling, storage, and wholesale distribution of specific designated commercial goods or defined product families.',
      examples: 'Building material suppliers, electronics wholesalers, apparel distributors, automotive parts merchants, and consumer goods traders.',
      restrictions: 'Trading is limited strictly to approved activity codes and harmonized customs categories. Physical goods entered into the UAE mainland require customs clearance and a mainland distributor or branch.',
      matchingRule: 'Actual invoice descriptions and customs bill of lading declarations must align precisely with the licensed product categories listed on the trade licence.'
    },
    {
      id: 'general-trading',
      title: 'General Trading Licence',
      badge: 'Broad Multi-Commodity Trade',
      icon: Boxes,
      meaning: 'Permits a commercial enterprise to trade, import, and export multiple unrelated categories of consumer, industrial, and commercial goods under a single umbrella licence.',
      examples: 'Diversified trading houses, export-import conglomerates, multi-sector merchants, and international procurement agencies.',
      restrictions: 'Subject to higher authority licence fees than single-group trading licences. Certain restricted commodities (weapons, pharmaceuticals, chemicals, hazardous materials) are excluded and require special ministerial clearances.',
      matchingRule: 'Essential for companies that cannot predict exact merchandise streams or intend to deal across disparate product verticals.'
    },
    {
      id: 'service-licence',
      title: 'Service Licence',
      badge: 'Corporate & Operational Services',
      icon: Briefcase,
      meaning: 'Enables companies to perform specialized professional, technical, and operational services for corporate and individual clients.',
      examples: 'IT infrastructure providers, logistics coordinators, marketing and PR agencies, human resource recruitment, and facility services.',
      restrictions: 'Does not authorize the physical buying, selling, or inventory storage of tangible merchandise. Direct service delivery in mainland public venues may require local municipal notifications.',
      matchingRule: 'Client contracts and scopes of work must correspond to the specific service sub-types authorized by UAQ FTZ.'
    },
    {
      id: 'consultancy-activities',
      title: 'Consultancy Licence',
      badge: 'Advisory & Strategic Guidance',
      icon: FileCode2,
      meaning: 'Covers intellectual, advisory, and expert analytical services rendered across management, business strategy, technology, finance, and human capital.',
      examples: 'Management consultants, corporate restructuring advisors, fintech consultants, environmental evaluators, and educational advisors.',
      restrictions: 'Regulated professions such as legal practice, statutory financial auditing, and medical consulting require specialized UAE federal board credentials.',
      matchingRule: 'Directors and consultants must possess relevant academic or professional backgrounds to satisfy licensing review.'
    },
    {
      id: 'ecommerce-activities',
      title: 'E-Commerce Licence',
      badge: 'Digital Commerce & Online Stores',
      icon: ShoppingCart,
      meaning: 'Authorizes the operation of electronic commerce portals, digital marketplaces, online retail websites, and social commerce platforms.',
      examples: 'Direct-to-consumer (D2C) web stores, dropshipping enterprises, electronic software portals, and digital subscription providers.',
      restrictions: 'Physical parcel delivery within the UAE mainland must be handled via licensed UAE courier and logistics networks; direct retail storefront sales are prohibited.',
      matchingRule: 'The digital domain, payment gateway merchant account, and customer checkout flow must reflect the registered corporate trade name.'
    },
    {
      id: 'freelance-options',
      title: 'Freelance & Individual Business Permits',
      badge: 'Solo Professionals & Creatives',
      icon: UserCheck,
      meaning: 'Designed for independent solo professionals, creative practitioners, media specialists, and technology contractors operating under their personal legal identity.',
      examples: 'Copywriters, graphic designers, digital marketers, software developers, creative photographers, and independent business coaches.',
      restrictions: 'Restricted to individual personal operation; freelancers cannot hire employees or sponsor staff under a company establishment quota.',
      matchingRule: 'Must match recognized creative, technical, or media freelance activity lists published by UAQ FTZ.'
    },
    {
      id: 'industrial-licence',
      title: 'Industrial & Manufacturing Licence',
      badge: 'Manufacturing, Assembly & Processing',
      icon: Factory,
      meaning: 'Authorizes the processing, refining, packaging, assembly, and fabrication of raw materials and semi-finished goods into final industrial products.',
      examples: 'Packaging plants, metal fabrication units, consumer goods assemblers, and plastic extrusion processors.',
      restrictions: 'Requires physical inspection, pre-lease of suitable industrial warehouse or land space in UAQ FTZ, and environmental and Civil Defense safety clearances.',
      matchingRule: 'Energy loads, waste management, and environmental compliance documentation must strictly match actual factory output.'
    },
    {
      id: 'import-export',
      title: 'Import & Export Activities',
      badge: 'International Logistics & Transshipment',
      icon: Ship,
      meaning: 'Explicit commercial authorization facilitating international cargo movement, bonded transshipment, customs code registration, and cross-border logistics.',
      examples: 'Freight consolidators, international trading intermediaries, transshipment operators, and re-export merchants.',
      restrictions: 'Companies must obtain a UAE customs code through the relevant port or emirate customs authority; mainland UAE release requires standard 5% customs duties.',
      matchingRule: 'All cargo transit documents, certificates of origin, and commercial invoices must maintain full cross-border customs conformity.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Boxes className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>LICENCE CATEGORIES & SCOPE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            UAQ Free Zone Business Activities & Licensing Options
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            UAQ FTZ provides tailored licensing categories suited to trade, services, technology, online commerce, and industry. Selecting the exact activity code is crucial for banking approval, regulatory compliance, and smooth day-to-day operations.
          </p>
        </div>

        {/* 8 Licence Types Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {licenceCategories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="bg-[#FAF7F0]/30 rounded-2xl border border-[#E6D7C3] p-7 shadow-2xs hover:shadow-sm hover:border-[#DECBB5] transition-all flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                          {item.title}
                        </h3>
                        <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider text-[#B8864B] bg-white px-2 py-0.5 rounded border border-[#E6D7C3]">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Meaning */}
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    {item.meaning}
                  </p>

                  {/* Structured Details */}
                  <div className="space-y-3 pt-3 border-t border-[#EFEAE2]">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                      <div className="text-xs text-[#475569]">
                        <strong className="text-[#1E293B]">Typical Businesses: </strong>
                        {item.examples}
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-[#8C5E28] shrink-0 mt-0.5" />
                      <div className="text-xs text-[#475569]">
                        <strong className="text-[#1E293B]">Key Scope & Limits: </strong>
                        {item.restrictions}
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <div className="text-xs text-[#475569]">
                        <strong className="text-[#1E293B]">Operational Matching: </strong>
                        {item.matchingRule}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA to verify activity */}
                <div className="mt-6 pt-4 border-t border-[#EFEAE2] flex items-center justify-between">
                  <span className="text-[11px] text-[#64748B]">Verify your activity code with an advisor</span>
                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenConsultation) {
                        onOpenConsultation(`UAQ Activity Verification - ${item.title}`);
                      } else {
                        window.open(`https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20to%20verify%20the%20activity%20code%20for%20${encodeURIComponent(item.title)}%20in%20UAQ%20Free%20Zone.`, '_blank');
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] hover:text-[#976A36] group cursor-pointer transition-colors"
                  >
                    <span>Confirm Activity</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Advisory Box on Activity Matching */}
        <div className="p-6 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] space-y-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#B8864B]" />
            <h4 className="font-bold text-sm text-[#1E293B] font-heading">
              Why Matching Your Licensed Activity to Real Operations Is Vital
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            In the UAE, conducting commercial or advisory operations outside your authorized licence schedule violates federal and free zone commercial regulations. Furthermore, UAE corporate banks carefully review your licensed activities against the contracts, invoices, and supplier descriptions you submit during account opening. Brightlink cross-examines your operational plan to ensure 100% harmony between your registered activities and your day-to-day transactions.
          </p>
        </div>

      </div>
    </section>
  );
};
