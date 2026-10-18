import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileText, 
  ShoppingBag, 
  Briefcase, 
  Factory, 
  Laptop, 
  Tv, 
  BookOpen, 
  Truck, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export const SharjahLicenceTypes = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const licenceCategories = [
    {
      icon: ShoppingBag,
      title: 'Commercial & General Trading',
      tag: 'Trading & Wholesale',
      description: 'Authorizes companies to import, export, store, and distribute specified categories of physical goods, or carry out multi-product general trading.',
      examples: 'Building materials, consumer products, electronics, food & beverage, textiles, and household goods.',
      jurisdictions: 'SAIF Zone, Hamriyah, SPC Free Zone'
    },
    {
      icon: Briefcase,
      title: 'Consultancy & Professional Services',
      tag: 'Knowledge Services',
      description: 'Ideal for expert consultants, corporate advisors, management analysts, designers, legal consultants, and technical service providers.',
      examples: 'Management consulting, HR advisory, engineering consultancy, marketing strategy, accounting, and educational advisory.',
      jurisdictions: 'SHAMS, SPC Free Zone, SAIF Zone'
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce Licence',
      tag: 'Online Retailing',
      description: 'Permits selling products and digital services through online websites, mobile apps, dropshipping channels, and social media marketplaces.',
      examples: 'Online retail portals, digital marketplaces, electronic payment solutions, and third-party fulfillment services.',
      jurisdictions: 'SHAMS, SPC Free Zone, SAIF Zone'
    },
    {
      icon: Factory,
      title: 'Industrial & Manufacturing Licence',
      tag: 'Production & Heavy Industry',
      description: 'Mandatory for companies engaged in assembling, processing, packaging, fabricating, and manufacturing goods within industrial complexes.',
      examples: 'Structural steel fabrication, petrochemical blending, food processing, plastics manufacturing, and machinery assembly.',
      jurisdictions: 'Hamriyah Free Zone, SAIF Zone'
    },
    {
      icon: BookOpen,
      title: 'Publishing & Printing Licence',
      tag: 'Editorial & Printing',
      description: 'Specialized licence category covering book editing, typesetting, on-demand printing, copyright distribution, translation, and journalism.',
      examples: 'Book and magazine publishing, digital printing, translation bureaus, literary agency, and copyright management.',
      jurisdictions: 'Sharjah Publishing City (SPC Free Zone)'
    },
    {
      icon: Tv,
      title: 'Media & Creative Services',
      tag: 'Content & Entertainment',
      description: 'Aimed at media agencies, production houses, freelance creative directors, animators, photographers, and advertising firms.',
      examples: 'Digital content creation, film/video production, photography studios, advertising agencies, and event management.',
      jurisdictions: 'Sharjah Media City (SHAMS)'
    },
    {
      icon: Truck,
      title: 'Logistics & Warehousing Licence',
      tag: 'Freight & Supply Chain',
      description: 'Designed for freight forwarders, cargo handlers, 3PL providers, and bonded storage operators needing proximity to air and sea hubs.',
      examples: 'Air freight cargo handling, deepwater port logistics, cold-chain distribution, and customs bonded warehousing.',
      jurisdictions: 'SAIF Zone, Hamriyah Free Zone'
    },
    {
      icon: Laptop,
      title: 'IT & Technology Services',
      tag: 'Software & Cloud',
      description: 'Engineered for technology startups, software developers, cybersecurity experts, IT network integrators, and cloud platform providers.',
      examples: 'Custom software development, mobile application programming, cloud management, and cybersecurity advisory.',
      jurisdictions: 'SHAMS, SAIF Zone, SPC Free Zone'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-2xs">
            <FileText className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>LICENSING SCOPE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Sharjah Business Activities and Licence Types
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Permitted business activities and licence categories depend on the chosen authority. Certain activities require dedicated facilities, equipment inspections, or external government approvals.
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
                        Key Authorities
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
                    onClick={() => onOpenConsultation(`Sharjah Licence - ${lic.title}`)}
                    className="w-full py-2 px-3 rounded-xl bg-[#FAF7F0] hover:bg-[#FAF5EC] text-[#8C5E28] hover:text-[#0F172A] font-bold text-xs border border-[#E6D7C3] transition-colors flex items-center justify-center gap-1.5 cursor-pointer font-heading"
                  >
                    <span>Check Activity Suitability</span>
                    <ArrowRight className="w-3 h-3 text-[#B8864B]" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Regulatory Note */}
        <div className="rounded-3xl bg-white border border-[#E6D7C3] p-7 sm:p-9 shadow-sm">
          <div className="flex flex-col md:flex-row items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
              <ShieldAlert className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div className="space-y-2">
              <h4 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading">
                Specialized Approvals & Facility Requirements
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Not all activities are available across all free zones. For example, heavy manufacturing and petrochemical operations require industrial land or warehouse facilities in Hamriyah with Civil Defence approvals, while media and publishing activities require specific content compliance with national regulatory bodies.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
