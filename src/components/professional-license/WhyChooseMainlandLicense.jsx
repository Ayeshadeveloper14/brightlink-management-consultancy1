import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Globe2, 
  ShieldCheck, 
  FileCheck2, 
  Building2, 
  Users, 
  TrendingUp, 
  Landmark, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const WhyChooseMainlandLicense = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const benefits = [
    {
      icon: Globe2,
      title: 'Direct UAE Mainland Market Access',
      description: 'Engage with corporate clients, government institutions, and private individuals across Dubai and all other Emirates without intermediary agents, local branch restrictions, or third-party sponsorship fees.',
      tag: 'Market Expansion'
    },
    {
      icon: ShieldCheck,
      title: '100% Foreign Ownership Rights',
      description: 'Retain 100% legal ownership, operational sovereignty, and full dividend distribution rights. In activities requiring a Local Service Agent (LSA), the LSA holds zero equity, operational power, or managerial authority.',
      tag: 'Total Ownership'
    },
    {
      icon: Landmark,
      title: 'Government & Corporate Tender Eligibility',
      description: 'Mainland companies possess statutory standing to bid on lucrative public sector projects, federal government tenders, municipal assignments, and top-tier multinational corporation supplier panels.',
      tag: 'Public Sector Contracts'
    },
    {
      icon: Building2,
      title: 'Flexible Office & Flexi-Desk Options',
      description: 'Choose the work arrangement that fits your business model: cost-effective shared desk in an approved business center, virtual office solutions, or physical commercial lease with a certified Ejari.',
      tag: 'Workplace Agility'
    },
    {
      icon: Users,
      title: 'Unrestricted Investor & Employee Visas',
      description: 'Sponsor investor residency visas for yourself and business partners, recruit skilled overseas staff under MOHRE quotas, and sponsor family dependents (spouse, children, and parents) with ease.',
      tag: 'Residency & Staff'
    },
    {
      icon: TrendingUp,
      title: 'Broad Scalability & Flexible Structure',
      description: 'Incorporate as a Sole Establishment, Civil Company (partnership of professionals), or single-owner Limited Liability Company (LLC). Add complementary service activities as your practice grows.',
      tag: 'Strategic Growth'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] border-b border-[#E6D7C3]/60 relative overflow-hidden">
      
      {/* Decorative Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#B8864B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E6D7C3]/30 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>Strategic Advantages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Why Choose a Mainland Professional License?
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
            Mainland incorporation unlocks unrestricted commercial freedom across the UAE, providing your professional practice with credibility, enterprise-grade banking options, and long-term corporate security.
          </p>
        </div>

        {/* Benefits Grid: 6 Distinctive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DECBB5] hover:border-[#B8864B] shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF5EC] text-[#8C5E28] group-hover:bg-[#B8864B] group-hover:text-white transition-colors flex items-center justify-center shadow-2xs">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#B8864B] bg-[#FAF7F0] px-2.5 py-1 rounded-full border border-[#DECBB5]/70">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading mb-2.5 group-hover:text-[#8C5E28] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F5F1EB] flex items-center justify-between text-xs font-semibold text-[#8C5E28]">
                  <span>Key Mainland Benefit</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B8864B] group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Comparison Highlight Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#0F172A] text-white shadow-xl border border-[#DECBB5]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold text-[#F5D7A1] uppercase tracking-wider flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F5D7A1]" />
              Mainland vs. Free Zone Advisory
            </span>
            <h4 className="text-lg sm:text-xl font-bold font-heading text-white">
              Unsure whether Mainland or Free Zone suits your target market?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl">
              Our business setup consultants compare licensing costs, physical office requirements, and operational boundaries so you make an informed choice.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Mainland vs Free Zone Comparison')}
            className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white text-xs font-bold hover:brightness-105 active:scale-98 transition-all cursor-pointer shadow-md"
          >
            Compare Setup Routes
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseMainlandLicense;
