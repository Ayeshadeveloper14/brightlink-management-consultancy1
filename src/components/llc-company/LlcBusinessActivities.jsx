import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShoppingBag, 
  Store, 
  Wrench, 
  Compass, 
  Monitor, 
  Megaphone, 
  Scale, 
  Ship, 
  Building2, 
  Sparkles,
  ArrowRight,
  Info,
  CheckCircle2
} from 'lucide-react';

export const LlcBusinessActivities = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const activitySectors = [
    {
      icon: ShoppingBag,
      title: 'Commercial Trading',
      examples: 'General trading, consumer electronics, textiles, apparel, building materials, and foodstuff distribution.',
      badge: 'High Volume'
    },
    {
      icon: Store,
      title: 'Retail & Showrooms',
      examples: 'Physical storefronts, luxury boutiques, consumer showrooms, supermarket chains, and multi-brand outlets.',
      badge: 'Retail'
    },
    {
      icon: Ship,
      title: 'Import & Export',
      examples: 'Cross-border cargo trade, international freight distribution, customs client code registration, and bonded logistics.',
      badge: 'Global Trade'
    },
    {
      icon: Monitor,
      title: 'Technology & Digital Solutions',
      examples: 'IT infrastructure, computer systems networking, hardware wholesale, telecommunications equipment, and software licensing.',
      badge: 'Tech & IT'
    },
    {
      icon: Wrench,
      title: 'General Services & Maintenance',
      examples: 'Building maintenance, facilities management, technical contracting, MEP installations, and commercial cleaning.',
      badge: 'Operations'
    },
    {
      icon: Compass,
      title: 'Consulting & Corporate Advisory',
      examples: 'Business management advisory, human resources consultancy, marketing strategy, and organizational transformation.',
      badge: 'Advisory'
    },
    {
      icon: Megaphone,
      title: 'Marketing & Media Operations',
      examples: 'Advertising agencies, public relations, event management, media production, and digital brand management.',
      badge: 'Media'
    },
    {
      icon: Scale,
      title: 'Professional & Technical Services',
      examples: 'Specialized technical consultancy, project feasibility studies, accounting representation, and legal translation.',
      badge: 'Professional'
    },
    {
      icon: Building2,
      title: 'Contracting & Commercial Works',
      examples: 'Building contracting, fit-out works, steel construction, interior joinery, and specialized civil engineering.',
      badge: 'Contracting'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Permitted Commercial Sectors</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Commercial Activities Supported Under an LLC
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            The Dubai Department of Economy and Tourism (DET) classifies thousands of commercial, trading, and service activities eligible for incorporation under the Mainland LLC framework.
          </p>
        </div>

        {/* Feature Showcase: Editorial Visual Box + Activity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Column: Visual Showcase Box */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#DECBB5] shadow-lg relative min-h-[380px] lg:min-h-full flex flex-col justify-end p-6 sm:p-8 text-white group">
            <img
              src="/images/llc_commercial_activities.jpg"
              alt="Dubai commercial enterprise office and global trade headquarters"
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
                Onshore Commercial Legitimacy
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white leading-snug">
                From Local Distribution to Global Cross-Border Trade
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                An LLC provides the legal standing to register Dubai Customs client codes, secure import/export permits, open physical corporate showrooms, and lease mainland storage facilities.
              </p>
              
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenConsultation && onOpenConsultation('LLC Activity Suitability Check')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B8864B] hover:bg-[#976A36] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  <span>Verify Your Activity Code</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Activities Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activitySectors.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <motion.div
                  key={idx}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: idx * 0.03 }}
                  className="p-4 rounded-2xl bg-[#FAF7F0] border border-[#DECBB5] hover:border-[#B8864B] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#DECBB5] text-[#8C5E28] flex items-center justify-center">
                        <Icon className="w-4 h-4 stroke-[1.8]" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8864B] bg-white px-2 py-0.5 rounded-full border border-[#DECBB5]/60">
                        {sec.badge}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-[#0F172A] font-heading mb-1.5">
                      {sec.title}
                    </h4>
                    <p className="text-xs text-[#64748B] leading-relaxed">
                      {sec.examples}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#DECBB5]/60 flex items-center gap-1.5 text-[11px] font-semibold text-[#8C5E28]">
                    <CheckCircle2 className="w-3 h-3 text-[#B8864B] shrink-0" />
                    <span>DET Commercial Category</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Mandatory Official Activity Restriction Disclaimer */}
        <div className="p-5 rounded-2xl bg-[#FCFAF8] border border-[#DECBB5] flex items-start gap-3.5 max-w-4xl mx-auto shadow-2xs">
          <Info className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-[#0F172A] font-heading">
              Licensing Scope & Activity Restrictions:
            </h4>
            <p className="text-xs text-[#475569] leading-relaxed font-sans">
              <strong>The appropriate license and approvals depend on the selected business activity.</strong> Not every commercial, industrial, and service activity can automatically operate under the same license; DET rules dictate whether activities belong to compatible categories or require separate licensing and distinct external approvals.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LlcBusinessActivities;
