import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Globe2, 
  ShieldCheck, 
  Layers, 
  Landmark, 
  Users, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const WhyChooseMainlandLlc = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const benefits = [
    {
      icon: Globe2,
      title: 'UAE Market Access',
      tag: 'Onshore Reach',
      summary: 'Operate and serve clients across the entire UAE within the scope of your licensed activities.',
      detail: 'Unlike free zone businesses that face commercial limitations when distributing goods onshore without a local agent, an LLC holds unrestricted authority to trade directly with domestic distributors, retail customers, and commercial partners across all seven Emirates.'
    },
    {
      icon: ShieldCheck,
      title: 'Foreign Ownership',
      tag: '100% Equity',
      summary: 'Eligible activities can allow 100% foreign ownership, subject to applicable regulations.',
      detail: 'Reforms to the UAE Commercial Companies Law have opened thousands of commercial trading, industrial manufacturing, and professional activities to 100% foreign investor ownership without requiring mandatory local partner shareholding.'
    },
    {
      icon: Layers,
      title: 'Business Flexibility',
      tag: 'Multi-Activity',
      summary: 'Suitable for a wide range of trading, commercial, industrial, and service businesses.',
      detail: 'An LLC can accommodate single or multiple commercial and service activities under one license. From general trading and consumer retail to IT consulting and specialized contracting, the structure flexes with your market strategy.'
    },
    {
      icon: Landmark,
      title: 'Corporate Opportunities',
      tag: 'Tenders & RFPs',
      summary: 'A mainland structure can support relationships with private and eligible government-sector clients.',
      detail: 'Government ministries, municipal departments, semi-government authorities, and top-tier multinational corporations regularly mandate that vendor suppliers hold a registered mainland commercial trade license to participate in procurement bids.'
    },
    {
      icon: Users,
      title: 'Visa Support',
      tag: 'Quotas & Family',
      summary: 'The company structure can support relevant investor and employee visa processes subject to requirements.',
      detail: 'LLC partners and shareholders can obtain 2-year renewable investor/partner visas and sponsor spouses, children, and parents. Furthermore, companies can recruit skilled domestic and international workers under Ministry of Human Resources (MOHRE) quotas.'
    },
    {
      icon: TrendingUp,
      title: 'Business Growth',
      tag: 'Scalable Entity',
      summary: 'Create a structure that can grow with additional staff, activities, or operational requirements.',
      detail: 'As your commercial volumes expand, you can seamlessly open domestic branches in Abu Dhabi, Sharjah, or other Emirates, upgrade physical warehousing facilities, increase capital, and bring in new corporate or individual partners.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] border-b border-[#E6D7C3]/60 relative overflow-hidden">
      
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#B8864B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#E6D7C3]/25 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Commercial Advantages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Why Choose a Mainland LLC?
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            A Mainland LLC delivers corporate credibility, unlimited geographical reach, and personal liability insulation, establishing a solid foundation for sustainable growth in the UAE.
          </p>
        </div>

        {/* 6 Structured Cards in a 2x3 or 3x2 Grid */}
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
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DECBB5] hover:border-[#B8864B] shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF5EC] text-[#8C5E28] group-hover:bg-[#B8864B] group-hover:text-white transition-colors flex items-center justify-center shadow-2xs">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#B8864B] bg-[#FAF7F0] px-2.5 py-1 rounded-full border border-[#DECBB5]/70">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading mb-1.5 group-hover:text-[#8C5E28] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#8C5E28] mb-2.5 leading-snug">
                    {item.summary}
                  </p>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F5F1EB] flex items-center justify-between text-xs font-semibold text-[#8C5E28]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                    Core LLC Benefit
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
              Strategic Business Advisory
            </span>
            <h4 className="text-lg sm:text-xl font-bold font-heading text-white">
              Planning to establish an LLC with multiple commercial activities?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl">
              Our specialists confirm activity compatibility with DET circulars, draft appropriate shareholder agreements, and structure optimal manager authorities.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('LLC Multi-Activity Review')}
            className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white text-xs font-bold hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-md"
          >
            Review Your Activity Plan
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseMainlandLlc;
