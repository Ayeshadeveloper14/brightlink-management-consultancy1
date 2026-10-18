import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  FileText, 
  ShoppingBag, 
  Briefcase, 
  Factory, 
  UserCheck, 
  Share2, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export const FreeZoneLicenseTypes = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const licenses = [
    {
      icon: Briefcase,
      title: 'Service / Professional License',
      tag: 'High Demand',
      description: 'Ideal for consultants, software developers, marketing agencies, designers, HR specialists, and professional service providers offering skilled expertise.',
      activities: [
        'Management & business consultancy',
        'Information technology & software development',
        'Digital marketing, media & PR services',
        'Financial advisory, accounting & auditing'
      ]
    },
    {
      icon: ShoppingBag,
      title: 'Commercial / Trading License',
      tag: 'Import & Export',
      description: 'Permits the import, export, storage, distribution, and wholesale trading of specified product categories or multi-product general trading.',
      activities: [
        'Import & re-export of physical commodities',
        'B2B wholesale distribution & storage',
        'Specialized product trade (electronics, textiles, food)',
        'General trading encompassing multiple goods'
      ]
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce License',
      tag: 'Digital Retail',
      description: 'Engineered specifically for digital entrepreneurs selling physical goods online, software-as-a-service (SaaS), digital content, and e-marketplaces.',
      activities: [
        'Online retail portal & marketplace operations',
        'Digital goods & SaaS subscription distribution',
        'Dropshipping & third-party fulfillment logistics',
        'Electronic payment gateway integration'
      ]
    },
    {
      icon: Factory,
      title: 'Industrial License',
      tag: 'Manufacturing',
      description: 'Designed for companies engaged in light manufacturing, packaging, assembly, and industrial processing within designated industrial and port zones.',
      activities: [
        'Light industrial assembly & product packaging',
        'Raw material processing & manufacturing',
        'Warehouse storage & bulk cargo handling',
        'Testing, quality control & engineering labs'
      ]
    },
    {
      icon: UserCheck,
      title: 'Freelance Permit',
      tag: 'Independent Solo',
      description: 'A cost-effective individual permit for independent creative professionals, media specialists, tech contractors, and educational tutors.',
      activities: [
        'Freelance copywriters, photographers & designers',
        'Independent software programmers & UI/UX developers',
        'Personal fitness trainers & wellness coaches',
        'Corporate trainers & educational tutors'
      ]
    },
    {
      icon: Share2,
      title: 'Dual License / Branch Extension',
      tag: 'Mainland Reach',
      description: 'Allows a registered Dubai Free Zone company to open a formal operational branch in Dubai Mainland to serve onshore domestic clients directly.',
      activities: [
        'Onshore UAE client contracting & retail presence',
        'Participation in local government procurement',
        'Unified corporate identity across free zone & mainland',
        'No requirement for separate foreign share capital'
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <FileText className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>LICENSING CATEGORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Dubai Free Zone License Types
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Free zone authorities offer flexible licensing structures designed to match your specific commercial activities. Brightlink ensures your business activities are classified accurately under official codes.
          </p>
        </div>

        {/* Licenses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {licenses.map((lic, idx) => {
            const Icon = lic.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="rounded-2xl p-6 bg-[#FAF7F0]/50 border border-[#E6D7C3] hover:border-[#DECBB5] hover:bg-white hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E6D7C3] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors duration-200 shadow-2xs">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-[#8C5E28] border border-[#DECBB5]/70 font-heading">
                      {lic.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] font-heading mb-2">
                    {lic.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed mb-4">
                    {lic.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-neutral-200/60 mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F172A] font-heading block">
                      Common Permitted Activities
                    </span>
                    {lic.activities.map((act, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-1.5 text-[11px] text-[#475569]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                        <span className="leading-snug">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenConsultation(`Dubai Free Zone License - ${lic.title}`)}
                  className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-[#FAF5EC] text-[#8C5E28] hover:text-[#0F172A] font-bold text-xs border border-[#E6D7C3] transition-colors flex items-center justify-center gap-1.5 cursor-pointer font-heading"
                >
                  <span>Apply for {lic.title.split(' ')[0]} License</span>
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
