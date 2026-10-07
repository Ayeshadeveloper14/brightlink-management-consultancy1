import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Globe2, 
  Share2, 
  TrendingUp, 
  Users, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Briefcase
} from 'lucide-react';

export const WhoIsThisForBranch = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const companyProfiles = [
    {
      title: 'Multinational Corporations & Global Brands',
      description: 'Foreign enterprises seeking to formalize an onshore presence in Dubai while keeping global brand naming and direct equity ties to the parent headquarters intact.',
      intent: 'Regional Headquarters & Corporate Expansion'
    },
    {
      title: 'Established Regional Trading & Contracting Firms',
      description: 'GCC or overseas companies wanting to bid directly on Dubai and UAE infrastructure tenders and deliver contracted works through their existing parent corporate entity.',
      intent: 'Mainland Onshore Contract Execution'
    },
    {
      title: 'International Professional Service & Advisory Practices',
      description: 'Foreign consultancies, legal firms, architectural bureaus, and engineering practices delivering cross-border expertise to UAE corporate and government clients.',
      intent: 'Institutional Consulting & Service Delivery'
    },
    {
      title: 'Overseas Exporters & Global Manufacturers',
      description: 'International producers establishing a dedicated corporate liaison outpost to oversee UAE distributor networks, product registration, and regional logistics.',
      intent: 'Channel Management & Market Oversight'
    },
    {
      title: 'Companies Exploring UAE Market Feasibility',
      description: 'Enterprises that require a compliant, government-registered promotional outpost to evaluate commercial opportunities before committing substantial capital.',
      intent: 'Market Research & Brand Promotion'
    },
    {
      title: 'UAE Companies Expanding Across Emirates',
      description: 'Existing UAE mainland or free zone entities establishing a formal mainland Dubai branch to broaden onshore trade and access local Dubai municipal clients.',
      intent: 'Domestic Inter-Emirate Branch Expansion'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Target Enterprises</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Who is a Branch or Representative Office For?
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            Tailored specifically for established domestic and international enterprises looking to build an authentic onshore footprint in Dubai without incorporating a separate local standalone entity.
          </p>
        </div>

        {/* Feature Split Layout: Left Image Card, Right Clean Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Visual Highlight Box */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#DECBB5] shadow-lg relative min-h-[380px] lg:min-h-full flex flex-col justify-end p-6 sm:p-8 text-white group">
            <img
              src="/images/branch_expansion_visual.jpg"
              alt="Dubai international corporate parent company expansion office"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                const target = e.currentTarget;
                target.src = '/images/why_experienced_team_1790842362837.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/60 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#B8864B]/25 via-transparent to-black/40 pointer-events-none mix-blend-overlay" />

            <div className="relative z-10 space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-[#F5D7A1] border border-white/20">
                Cross-Border Corporate Extension
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white leading-snug">
                Preserve Established Brand Equity
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                Leverage your parent entity’s operational history, balance sheet credibility, and established international reputation to win business across the UAE and GCC.
              </p>
              
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenConsultation && onOpenConsultation('Check Parent Company Eligibility')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B8864B] hover:bg-[#976A36] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  <span>Evaluate Parent Eligibility</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Visual Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {companyProfiles.map((prof, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className="p-5 rounded-2xl bg-white border border-[#DECBB5] hover:border-[#B8864B] transition-colors flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A] font-heading mb-1.5">
                    {prof.title}
                  </h4>
                  <p className="text-xs text-[#475569] leading-relaxed mb-3">
                    {prof.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-[#F5F1EB] flex items-center gap-1.5 text-[11px] font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0" />
                  <span className="truncate">{prof.intent}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhoIsThisForBranch;
