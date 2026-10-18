import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Award, 
  ShieldCheck, 
  Clock, 
  Users, 
  Landmark, 
  CheckCircle2, 
  HeartHandshake, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const WhyBrightlinkRak = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const reasons = [
    {
      title: 'Authorized UAE Business Setup & PRO Network',
      desc: 'With over 20 years of continuous presence in the UAE, Brightlink maintains direct government portal access and experienced PRO liaisons with RAKEZ and federal departments.',
      icon: Award
    },
    {
      title: 'Fast-Track 3 to 5 Day Incorporation',
      desc: 'Pre-cleared activity templates and digital document execution enable us to secure your trade licence, certificate of incorporation, and lease agreement in record time.',
      icon: Clock
    },
    {
      title: '100% Price Transparency & Fixed Fees',
      desc: 'We provide itemized government fee breakdowns with zero hidden administrative markups. Your renewal costs are clearly outlined before you spend a single dirham.',
      icon: ShieldCheck
    },
    {
      title: 'High-Success Corporate Banking Assistance',
      desc: 'We don’t just hand over documents; our dedicated banking advisors prepare your full KYC dossier, business plan, and represent your profile directly to UAE tier-1 bankers.',
      icon: Landmark
    },
    {
      title: 'Complete Lifecycle Support',
      desc: 'From investor residency visas and medical typing to annual licence renewals, VAT filing, corporate tax registration, and office upgrades, we support your company through every stage.',
      icon: HeartHandshake
    },
    {
      title: 'Multilingual Corporate Advisors',
      desc: 'Our experienced consultants communicate fluently in English, Arabic, Urdu/Hindi, Russian, and French, ensuring seamless communication without language barriers.',
      icon: Users
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F0]/40 border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>THE BRIGHTLINK ADVANTAGE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Why Form Your RAK Free Zone Company with Brightlink
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Navigating UAE licensing, immigration procedures, and banking compliance requires local expertise. Discover why over 10,000 international investors and business leaders trust Brightlink.
          </p>
        </div>

        {/* 6 Advantage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-[#E6D7C3] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F1EAE0] flex items-center justify-between text-xs text-[#8C5E28] font-semibold">
                  <span>Verified Client Satisfaction</span>
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
