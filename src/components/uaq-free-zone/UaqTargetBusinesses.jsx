import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Users, 
  Briefcase, 
  UserCheck, 
  ShoppingCart, 
  Store, 
  Ship, 
  Boxes, 
  Cpu, 
  Rocket, 
  Globe2, 
  Factory, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';

export const UaqTargetBusinesses = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const businessProfiles = [
    {
      title: 'Consultants & Service Providers',
      desc: 'Independent strategists, HR advisors, marketing professionals, and corporate consultants seeking a recognized UAE corporate vehicle with minimal physical office overhead.',
      considerations: 'Evaluate whether clients are primarily international, free zone based, or require physical on-site service delivery on the UAE mainland.',
      icon: Briefcase
    },
    {
      title: 'Freelancers & Independent Creatives',
      desc: 'Eligible solo professionals in tech, media, and design seeking legal freelance status, residency visa sponsorship, and freedom to bill corporate clients.',
      considerations: 'Confirm that your specific freelance activity is on the approved schedule and that you do not require employee hiring quotas.',
      icon: UserCheck
    },
    {
      title: 'E-Commerce Businesses & Digital Brands',
      desc: 'Direct-to-consumer e-commerce entrepreneurs selling online products, software-as-a-service (SaaS), digital products, or managed marketplace stores.',
      considerations: 'Ensure fulfillment and physical delivery inside the UAE are handled through licensed domestic courier partners.',
      icon: ShoppingCart
    },
    {
      title: 'Online Sellers & Marketplace Merchants',
      desc: 'Amazon, Noon, and international marketplace merchants requiring an authorized UAE commercial entity for merchant gateway and platform verification.',
      considerations: 'Verify warehousing needs—inventory stored physically in third-party fulfillment centers (FBA/FBN) requires commercial inventory coordination.',
      icon: Store
    },
    {
      title: 'Import & Export Enterprises',
      desc: 'International trading houses moving merchandise between overseas suppliers and regional buyers across the Middle East, Africa, and Central Asia.',
      considerations: 'Review customs clearance procedures and ensure bonded warehouse or port logistics agreements are established where needed.',
      icon: Ship
    },
    {
      title: 'General & Specialised Trading Firms',
      desc: 'Wholesale distributors and merchants dealing in capital goods, electronics, textiles, machinery, and non-regulated commercial commodities.',
      considerations: 'Confirm whether products require external ministerial permits (such as food, medical devices, or chemical items).',
      icon: Boxes
    },
    {
      title: 'IT & Digital Service Companies',
      desc: 'Software development firms, cyber security analysts, mobile application studios, and cloud infrastructure contractors serving global remote clients.',
      considerations: 'Capitalize on flexible flexi-desk and serviced office tiers while maintaining appropriate bank compliance for cross-border software revenue.',
      icon: Cpu
    },
    {
      title: 'Startups & Lean Micro-Enterprises',
      desc: 'Early-stage founders seeking to establish proof-of-concept, test regional customer appetite, and secure residency with prudent initial capital outlay.',
      considerations: 'Evaluate total annual maintenance expenses including mandatory accounting, corporate tax registration, and annual renewal fees.',
      icon: Rocket
    },
    {
      title: 'International Expanding Enterprises',
      desc: 'Overseas corporate holding companies and family offices looking to establish a secure Middle Eastern holding or operational branch presence in the UAE.',
      considerations: 'Prepare required parent company documentation, board resolutions, and international apostille / UAE Embassy attestations in advance.',
      icon: Globe2
    },
    {
      title: 'Industrial & Light Assembly Ventures',
      desc: 'Producers, light fabricators, packaging operations, and assembly businesses requiring dedicated factory floor space and utility allocations.',
      considerations: 'Verify physical warehouse availability, power supply capacity, and Civil Defense environmental safety clearances prior to lease commitment.',
      icon: Factory
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F0]/40 border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Users className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>COMMERCIAL SUITABILITY ASSESSMENT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Which Businesses May Consider UAQ FTZ?
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            UAQ Free Trade Zone caters to a broad cross-section of industries. Review the key profiles and operational considerations below to evaluate how your venture aligns with this jurisdiction.
          </p>
        </div>

        {/* 10 Business Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessProfiles.map((biz, idx) => {
            const Icon = biz.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="bg-white rounded-2xl border border-[#E6D7C3] p-6 shadow-2xs hover:shadow-sm hover:border-[#DECBB5] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0F172A] font-heading">
                      {biz.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {biz.desc}
                  </p>

                  <div className="p-3 rounded-xl bg-[#FAF7F0] border border-[#EFEAE2] space-y-1">
                    <div className="text-[11px] font-bold text-[#8C5E28] uppercase tracking-wider flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-[#B8864B]" />
                      <span>Review Before Choosing:</span>
                    </div>
                    <p className="text-xs text-[#334155] leading-relaxed">
                      {biz.considerations}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F1EAE0] flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#64748B]">Personalized evaluation</span>
                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenConsultation) {
                        onOpenConsultation(`Suitability Assessment - ${biz.title}`);
                      } else {
                        window.open(`https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20to%20evaluate%20suitability%20for%20${encodeURIComponent(biz.title)}%20in%20UAQ%20Free%20Zone.`, '_blank');
                      }
                    }}
                    className="text-xs font-bold text-[#B8864B] hover:text-[#976A36] cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>Assess Fit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Evaluation Checklist Banner */}
        <div className="p-8 rounded-3xl bg-white border border-[#DECBB5] shadow-sm space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-heading">
            Comprehensive Six-Point Pre-Incorporation Checklist
          </h3>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            Prior to submitting your registration application in UAQ FTZ, Brightlink systematically evaluates six core operational dimensions:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            {[
              { label: 'Customer Base', desc: 'Mainland, Free Zone, or Global' },
              { label: 'Activity Codes', desc: 'Permitted vs External Permits' },
              { label: 'Physical Space', desc: 'Flexi-Desk vs Warehouse' },
              { label: 'Visa Needs', desc: 'Investor, Partner & Staff' },
              { label: 'Banking Profile', desc: 'KYC & Transactional Scope' },
              { label: 'Total Budget', desc: 'Incorporation & Annual Renewals' }
            ].map((chk, cIdx) => (
              <div key={cIdx} className="p-3.5 rounded-xl bg-[#FAF5EC] border border-[#EFEAE2] text-center space-y-1">
                <div className="text-xs font-bold text-[#0F172A]">{chk.label}</div>
                <div className="text-[10px] text-[#8C5E28] font-medium">{chk.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
