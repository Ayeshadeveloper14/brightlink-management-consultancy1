import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  Coins, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Headphones,
  Compass
} from 'lucide-react';

export const RakWhyBrightlink = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const reasons = [
    {
      icon: ShieldCheck,
      title: 'Accredited Registered Agent Channels',
      desc: 'Direct, authorized access to the RAK ICC governmental registry platform, ensuring rapid document lodgement and priority statutory processing.'
    },
    {
      icon: Compass,
      title: 'Cross-Jurisdictional Holding Expertise',
      desc: 'We don’t just register a shell entity; we engineer cohesive structures linking your offshore company to Dubai Land Department title deeds or onshore operational subsidiaries.'
    },
    {
      icon: Clock,
      title: '3-to-5 Day Swift Incorporation',
      desc: 'Optimized digital workflows mean your Memorandum & Articles of Association and incorporation certificate are prepared and issued in days, not weeks.'
    },
    {
      icon: Coins,
      title: 'Transparent Fixed Fees, Zero Surprises',
      desc: 'Clear upfront breakdown of RAK ICC government fees, statutory registered agent costs, and annual maintenance charges with zero hidden line items.'
    },
    {
      icon: Users,
      title: 'High-Touch Senior Corporate Advisors',
      desc: 'Work directly with seasoned UAE corporate advisors who understand international cross-border tax treaties, common law bylaws, and multi-tier share classes.'
    },
    {
      icon: Headphones,
      title: 'End-to-End Banking & Lifecycle Care',
      desc: 'From initial trade name clearance to multi-currency bank account opening, annual renewals, and UBO register filings, Brightlink stays with you for the long term.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Award className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>THE BRIGHTLINK DIFFERENCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Why Partner with Brightlink for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">RAK Offshore</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Offshore company formation requires precision drafting, regulatory compliance, and reliable ongoing agent representation. Discover why international clients trust Brightlink.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white rounded-2xl p-6 border border-[#E6D7C3] shadow-xs hover:shadow-md hover:border-[#B8864B]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#F5E8D4] border border-[#DECBB5] flex items-center justify-center text-[#8C5E28] mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-[#B8864B]" />
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] mb-2 font-heading group-hover:text-[#8C5E28] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F5F1EB] flex items-center gap-1.5 text-[11px] font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Verified Corporate Governance</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RakWhyBrightlink;
