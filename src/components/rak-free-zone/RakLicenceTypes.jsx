import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShoppingBag, 
  Briefcase, 
  Factory, 
  ShoppingCart, 
  Tv, 
  GraduationCap, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Building
} from 'lucide-react';

export const RakLicenceTypes = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const licenceTypes = [
    {
      id: 'commercial-licence',
      title: 'Commercial Licence (Trading & General Trading)',
      badge: 'High Demand for Goods & Commerce',
      icon: ShoppingBag,
      purpose: 'Authorizes the import, export, warehousing, packaging, and distribution of specified physical merchandise (Standard Commercial Licence) or multiple unrestricted categories of goods (General Trading Licence).',
      suits: 'Wholesalers, commodity distributors, consumer goods importers, capital equipment dealers, and international traders.',
      limitations: 'Merchandise traded into mainland UAE requires local customs declaration and either a registered UAE mainland commercial distributor or a mainland branch setup.',
      facility: 'Flexi-desk, dedicated serviced office, or on-site warehouse in RAKEZ Business or Industrial zones.',
      approvals: 'Standard products require standard RAKEZ registration; regulated categories (foodstuff, chemicals, pharmaceuticals) require external federal ministerial clearances (MOIAT, MOHAP, or Municipality).'
    },
    {
      id: 'services-consultancy',
      title: 'Services & Professional Consultancy Licence',
      badge: 'Advisory, Tech & Professional Firms',
      icon: Briefcase,
      purpose: 'Permits individuals and corporate entities to render expert advisory, management consultancy, IT and software development, digital marketing, recruitment, and project management services.',
      suits: 'Management consultants, corporate strategists, software developers, PR agencies, HR recruiters, and engineering consultancies.',
      limitations: 'Services rendered physically in mainland consumer spaces or direct regulated local markets may require mainland branch registration.',
      facility: 'Shared coworking workstations, private executive offices, or multi-desk corporate headquarters.',
      approvals: 'Most consulting categories require only RAKEZ review; specialized medical, legal, or educational consultancies may require ministry attestation.'
    },
    {
      id: 'industrial-licence',
      title: 'Industrial & Manufacturing Licence',
      badge: 'Heavy, Light & Assembly Production',
      icon: Factory,
      purpose: 'Enables manufacturing, processing, assembly, refining, and industrial packaging of raw materials and intermediate goods using dedicated industrial facilities.',
      suits: 'Metal fabricators, chemical blenders, packaging plants, consumer electronics assemblers, and building materials producers.',
      limitations: 'All production activities must be conducted within an authorized industrial facility with appropriate environmental controls.',
      facility: 'Pre-built standard industrial warehouses (150 sqm to 2,000+ sqm) or long-term industrial plots with heavy power allocation and road connectivity.',
      approvals: 'Environmental Impact Assessment (EIA), Civil Defense safety certificates, and Ministry of Industry and Advanced Technology (MOIAT) industrial registry.'
    },
    {
      id: 'ecommerce-licence',
      title: 'E-Commerce Licence',
      badge: 'Online Retail & Digital Platforms',
      icon: ShoppingCart,
      purpose: 'Authorizes companies to trade products or digital services online through e-commerce marketplaces, customized web stores, and social commercial platforms.',
      suits: 'Online retailers, dropshipping founders, digital service providers, direct-to-consumer (D2C) brands, and marketplace operators.',
      limitations: 'Delivery of physical goods to UAE consumers requires partnership with licensed courier logistics carriers or a mainland logistics partner.',
      facility: 'Flexi-desk coworking or dedicated commercial unit with optional storage in RAKEZ logistics facilities.',
      approvals: 'Standard RAKEZ e-commerce activity approvals and payment gateway registration readiness.'
    },
    {
      id: 'media-licence',
      title: 'Media Licence',
      badge: 'Creative & Digital Media Production',
      icon: Tv,
      purpose: 'Permits media production, broadcast equipment operation, content creation, digital publishing, animation, sound engineering, and creative communications.',
      suits: 'Production houses, digital media agencies, freelance creatives, publishers, animation studios, and branding agencies.',
      limitations: 'Broadcasting and public print circulation within the UAE must comply with UAE National Media Council / Media Regulatory Office standards.',
      facility: 'Creative coworking spaces, serviced offices, or custom production soundstages.',
      approvals: 'RAKEZ Media Zone authorization; specific broadcast frequencies require Telecommunications and Digital Government Regulatory Authority (TDRA) permits.'
    },
    {
      id: 'educational-licence',
      title: 'Educational Licence',
      badge: 'Academies & Professional Training',
      icon: GraduationCap,
      purpose: 'Authorizes educational institutions, vocational training providers, corporate skills academies, and tutoring organizations to establish centers in RAKEZ Academic Zone.',
      suits: 'Higher education branch campuses, professional training institutes, language academies, and corporate development centers.',
      limitations: 'Curriculums conferring formal academic degrees must comply with UAE Ministry of Education (MOE) or local accreditation bodies.',
      facility: 'RAKEZ Academic Zone campus buildings, dedicated training suites, or academic lecture halls.',
      approvals: 'Educational quality standards review and relevant UAE academic licensing approvals.'
    }
  ];

  return (
    <section id="rak-licences-section" className="py-20 bg-[#FAF7F0]/40 border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Layers className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>LICENSING ARCHITECTURE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            RAK Free Zone Business Licence Categories
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            RAKEZ features over 500 permissible business activities organized under targeted licence classes, allowing entrepreneurs to select the precise commercial, industrial, or professional scope required for their UAE operations.
          </p>
        </div>

        {/* Licence Types Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {licenceTypes.map((licence, idx) => {
            const Icon = licence.icon;
            return (
              <motion.div
                key={licence.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-[#E6D7C3] p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center shrink-0 text-[#B8864B]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading">
                          {licence.title}
                        </h3>
                        <span className="inline-block mt-1 text-[11px] font-bold uppercase tracking-wider text-[#B8864B] bg-[#FAF5EC] px-2.5 py-0.5 rounded-md border border-[#E6D7C3]">
                          {licence.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Core Description */}
                  <p className="text-sm text-[#334155] leading-relaxed">
                    {licence.purpose}
                  </p>

                  {/* Key Operational Details */}
                  <div className="space-y-3 pt-2 border-t border-[#F1EAE0]">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                      <div className="text-xs text-[#475569]">
                        <strong className="text-[#1E293B]">Ideal For:</strong> {licence.suits}
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Building className="w-4 h-4 text-[#B8864B] shrink-0 mt-0.5" />
                      <div className="text-xs text-[#475569]">
                        <strong className="text-[#1E293B]">Eligible Facility:</strong> {licence.facility}
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-[#8C5E28] shrink-0 mt-0.5" />
                      <div className="text-xs text-[#475569]">
                        <strong className="text-[#1E293B]">Territorial Scope:</strong> {licence.limitations}
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <div className="text-xs text-[#475569]">
                        <strong className="text-[#1E293B]">Regulatory Approvals:</strong> {licence.approvals}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 pt-4 border-t border-[#F1EAE0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-xs font-semibold text-[#8C5E28]">
                    Full activity schedule tailored to your business
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenConsultation) {
                        onOpenConsultation(`RAK Free Zone - ${licence.title}`);
                      } else {
                        window.open(`https://wa.me/971566556645?text=Hello%2C%20I%20want%20to%20inquire%20about%20${encodeURIComponent(licence.title)}%20in%20RAK%20Free%20Zone`, '_blank');
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B8864B] hover:text-[#976A36] group cursor-pointer transition-colors shrink-0"
                  >
                    <span>Check Activity Code</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
