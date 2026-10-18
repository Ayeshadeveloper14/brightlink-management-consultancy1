import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShoppingBag, 
  Boxes, 
  Briefcase, 
  ShoppingCart, 
  Factory, 
  Tv, 
  GraduationCap, 
  Cpu, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const CommonLicenceTypes = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const licenceTypes = [
    {
      title: 'Commercial / Trading Licence',
      badge: 'Physical Goods & Distribution',
      desc: 'Authorizes the buying, selling, import, export, and storage of designated commercial products and specified commodity categories.',
      examples: 'Electronics importers, textile distributors, consumer packaged goods merchants, equipment wholesalers.',
      guidance: 'Must align with official customs classification codes. Direct retail on the UAE mainland requires a mainland distributor or branch.'
    },
    {
      title: 'General Trading Licence',
      badge: 'Multi-Sector Trade',
      desc: 'Allows an enterprise to trade across multiple unrelated product categories under one umbrella licence without restricting operations to a single commodity group.',
      examples: 'Diversified trading houses, export-import conglomerates, multi-category e-commerce sellers.',
      guidance: 'Carries higher authority fees than single-commodity trading. Restricted goods (firearms, chemicals, pharmaceuticals) require external ministerial permits.'
    },
    {
      title: 'Professional / Service Licence',
      badge: 'Advisory & Technical Services',
      desc: 'Permits individuals and corporate entities to render expert advisory, management consulting, accounting, marketing, and professional contracting services.',
      examples: 'Management consultants, corporate strategists, PR agencies, human resource recruiters, project managers.',
      guidance: 'Regulated professions (legal, medical, statutory audit) require recognized professional board certifications.'
    },
    {
      title: 'E-Commerce Licence',
      badge: 'Digital Commerce & Marketplaces',
      desc: 'Authorizes the commercial operation of online storefronts, digital retail platforms, subscription portals, and online marketplace seller accounts.',
      examples: 'Direct-to-consumer (D2C) online shops, dropshipping operations, digital marketplace vendors.',
      guidance: 'Physical parcel distribution across mainland UAE addresses must be conducted in partnership with licensed courier logistics carriers.'
    },
    {
      title: 'Industrial & Manufacturing Licence',
      badge: 'Production & Assembly',
      desc: 'Enables the processing, refining, packaging, assembly, and industrial fabrication of raw materials and intermediate goods into finished merchandise.',
      examples: 'Food processing plants, metal fabricators, chemical blenders, electronics assembly units.',
      guidance: 'Requires pre-lease of physical industrial warehouse or land with adequate power and environmental / Civil Defense clearances.'
    },
    {
      title: 'Media Licence',
      badge: 'Creative & Digital Media',
      desc: 'Covers media production, digital content creation, publishing, advertising agency services, broadcast operations, and music production.',
      examples: 'Production houses, digital marketing agencies, animation studios, sound engineering firms.',
      guidance: 'Public print distribution and public broadcasting inside the UAE require UAE Media Regulatory Office compliance.'
    },
    {
      title: 'Technology & Software Licence',
      badge: 'Software, AI & Cloud',
      desc: 'Tailored for software development, cloud infrastructure architecture, artificial intelligence research, data analytics, and cyber security services.',
      examples: 'SaaS platforms, mobile app developers, AI researchers, IT systems integrators.',
      guidance: 'Widely supported across tech-focused zones (DIC, DSO, Dtec) with modular coworking or private office packages.'
    },
    {
      title: 'Educational Licence',
      badge: 'Academies & Corporate Training',
      desc: 'Authorizes academic institutions, vocational training providers, executive development academies, and tutoring organizations to deliver educational programs.',
      examples: 'Professional training institutes, language academies, corporate coaching centres, university branch campuses.',
      guidance: 'Conferring formal academic degrees or school curriculums requires UAE Ministry of Education (MOE) or local knowledge authority accreditation.'
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F0]/40 border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Briefcase className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>LICENSING ARCHITECTURE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Common UAE Free Zone Licence Categories
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            While specific terminology and package bundles vary across authorities, most UAE free zones structure their permissible business activities under eight primary licence classes:
          </p>
        </div>

        {/* 8 Licence Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {licenceTypes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="bg-white rounded-2xl border border-[#E6D7C3] p-6 shadow-2xs hover:shadow-sm hover:border-[#DECBB5] transition-all flex flex-col justify-between"
            >
              <div className="space-y-3.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8864B] bg-[#FAF5EC] px-2 py-0.5 rounded border border-[#DECBB5]">
                  {item.badge}
                </span>

                <h3 className="text-base font-bold text-[#0F172A] font-heading">
                  {item.title}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed">
                  {item.desc}
                </p>

                <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#EFEAE2] text-xs text-[#334155] space-y-1">
                  <div className="font-bold text-[#8C5E28] text-[11px] uppercase tracking-wider">Example Ventures:</div>
                  <div className="text-[11px] text-[#475569] leading-relaxed">{item.examples}</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F1EAE0] text-[11px] text-[#64748B] flex items-center justify-between">
                <span>Subject to Authority Approval</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Licence Name Confirmation Disclaimer */}
        <div className="p-6 rounded-2xl bg-white border border-[#DECBB5] shadow-xs flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-[#8C5E28] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#475569] leading-relaxed space-y-1">
            <strong className="text-[#1E293B] block">
              Authority Specificity & Activity Harmonization:
            </strong>
            <span>
              Not every free zone offers every licence category. For instance, common-law financial hubs (DIFC, ADGM) operate under specialized financial regulatory regimes, whereas maritime free zones (JAFZA, Fujairah Free Zone, Hamriyah) offer advanced port and industrial licences not found in creative media clusters. Brightlink cross-references your exact commercial requirements against the active schedules of each candidate authority.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
