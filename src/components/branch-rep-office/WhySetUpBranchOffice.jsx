import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Share2, 
  Globe2, 
  TrendingUp, 
  Users, 
  Compass, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const WhySetUpBranchOffice = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const benefits = [
    {
      icon: Share2,
      title: 'Parent Company Control',
      summary: 'Maintain a direct, unbroken governance connection between the UAE presence and the existing corporate headquarters.',
      detail: 'The branch is legally part of the parent company. All operational strategies, executive appointments, and corporate directives remain anchored with your global board of directors without third-party local equity partners.'
    },
    {
      icon: Building2,
      title: 'Brand Continuity & Identity',
      summary: 'Operate in Dubai under the exact established corporate name, branding, and commercial identity of the parent company.',
      detail: 'Protect and leverage decades of hard-earned goodwill. A branch office legally carries the parent’s exact trade name (e.g., "Parent Company Inc. - Dubai Branch"), reinforcing international credibility among local clients.'
    },
    {
      icon: Globe2,
      title: 'UAE Market Presence',
      summary: 'Build a tangible physical commercial presence in Dubai to engage with domestic clients and regional opportunities.',
      detail: 'Establishing an onshore office allows your teams to hold face-to-face meetings, obtain certified Ejari premises, and interface directly with local corporate stakeholders and government entities.'
    },
    {
      icon: TrendingUp,
      title: 'Strategic Regional Expansion',
      summary: 'Use the UAE office as a centralized launchpad for wider expansion across the GCC, Middle East, and North Africa (MENA).',
      detail: 'Dubai’s world-class logistics infrastructure, pro-business regulatory environment, and double-tax treaty network make it the premier hub for multinational corporations directing regional commerce.'
    },
    {
      icon: Users,
      title: 'Relationship & Partner Building',
      summary: 'Develop strategic, direct partnerships with local clients, authorized distributors, regulatory bodies, and supply chains.',
      detail: 'Managing client engagements directly from Dubai builds trust, accelerates contract negotiation cycles, and eliminates dependency on intermediary sponsorship agents.'
    },
    {
      icon: Compass,
      title: 'Structured Market Entry',
      summary: 'Choose a setup structure calibrated to your company’s immediate and long-term expansion objectives.',
      detail: 'Select a full commercial Branch Office for immediate onshore contracting, or start with a Representative Office to conduct market research and promotional outreach before committing full operational capital.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Strategic Value</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Why Set Up a Branch or Representative Office?
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            Expand into the UAE with corporate integrity. A branch structure preserves total parent company governance while granting complete operational legitimacy in Dubai.
          </p>
        </div>

        {/* 6 Structured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="bg-[#FAF7F0] rounded-2xl p-6 sm:p-7 border border-[#DECBB5] hover:border-[#B8864B] shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#DECBB5] text-[#8C5E28] group-hover:bg-[#B8864B] group-hover:text-white transition-colors flex items-center justify-center mb-5 shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading mb-2 group-hover:text-[#8C5E28] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#8C5E28] mb-2.5 leading-snug">
                    {item.summary}
                  </p>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DECBB5]/60 flex items-center justify-between text-xs font-semibold text-[#8C5E28]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                    Corporate Value Pillar
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B8864B] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0F172A] text-white shadow-xl border border-[#DECBB5]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold text-[#F5D7A1] uppercase tracking-wider flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F5D7A1]" />
              Multinational Corporate Advisory
            </span>
            <h4 className="text-lg sm:text-xl font-bold font-heading text-white">
              Planning to extend your parent company into Dubai Mainland?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl">
              Our legal and licensing consultants coordinate international document attestations, Ministry of Economy filings, and Dubai Department of Economy and Tourism (DET) approvals.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Parent Company Expansion Consultation')}
            className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white text-xs font-bold hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-md"
          >
            Request Corporate Expansion Review
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhySetUpBranchOffice;
