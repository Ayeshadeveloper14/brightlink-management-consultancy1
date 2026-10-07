import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  Globe2, 
  ShieldCheck, 
  Layers, 
  Lock, 
  Coins, 
  Users, 
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const JafzaSuitableFor = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const userProfiles = [
    {
      icon: Layers,
      title: 'Holding Companies',
      subtitle: 'Corporate Group Hierarchy',
      desc: 'Conglomerates and enterprise groups seeking a central Dubai-domiciled parent entity to consolidate shareholdings across multi-national subsidiaries.'
    },
    {
      icon: Coins,
      title: 'International Investors',
      subtitle: 'Portfolio & Capital Management',
      desc: 'Private investors managing cross-border portfolios in real estate, private equity, debt instruments, and securities under a recognized legal umbrella.'
    },
    {
      icon: ShieldCheck,
      title: 'Wealth & Asset Holding Structures',
      subtitle: 'Inheritance & Risk Shielding',
      desc: 'High-net-worth individuals and family offices requiring a robust corporate ring-fence to protect physical real estate and financial liquid assets.'
    },
    {
      icon: Building2,
      title: 'Shareholding Companies',
      subtitle: 'Operating Equity Ownership',
      desc: 'Entities designed solely to own shares in UAE onshore companies (Mainland LLCs or Free Zone firms) or foreign corporate enterprises.'
    },
    {
      icon: Lock,
      title: 'Intellectual Property Ownership',
      subtitle: 'Trademarks, Patents & Software',
      desc: 'Technology developers, licensors, and brand houses looking to isolate intangible IP, software codebases, and global franchise royalties from trading risks.'
    },
    {
      icon: Globe2,
      title: 'International Trading Structures',
      subtitle: 'Cross-Border Commercial Invoicing',
      desc: 'Global merchants and trade intermediaries conducting third-country commodity or commercial sales outside the UAE territory.'
    },
    {
      icon: Users,
      title: 'Family Investment Structures',
      subtitle: 'Multi-Generational Legacy',
      desc: 'Family enterprises seeking structured succession planning, customized share classes, and streamlined transfer of family-owned wealth.'
    },
    {
      icon: Briefcase,
      title: 'Global Entrepreneurs',
      subtitle: 'Decentralized International Ventures',
      desc: 'Founders running global digital consultancies, SaaS platforms, or decentralized businesses that require a world-class Dubai corporate presence.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Users className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>TARGET INVESTOR PROFILES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Who Is It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Suitable For?</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            The JAFZA Offshore structure is engineered for sophisticated legal and corporate applications. Here are the core profiles that benefit most from this structure.
          </p>
        </div>

        {/* 8 Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {userProfiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-[#E6D7C3] shadow-xs hover:shadow-md hover:border-[#B8864B]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#F5E8D4] border border-[#DECBB5] flex items-center justify-center text-[#8C5E28] mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-[#B8864B]" />
                  </div>

                  <span className="text-[10px] font-bold text-[#8C5E28] uppercase tracking-wider block mb-1">
                    {profile.subtitle}
                  </span>

                  <h3 className="text-base font-bold text-[#0F172A] mb-2 font-heading group-hover:text-[#8C5E28] transition-colors">
                    {profile.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {profile.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F5F1EB] flex items-center justify-between text-xs">
                  <span className="text-[#8C5E28] font-semibold text-[11px]">Structured Domicile</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Strategic Inquire Card */}
        <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold font-heading text-white">
              Unsure if JAFZA Offshore Matches Your Investment Goal?
            </h4>
            <p className="text-xs text-neutral-300 max-w-xl">
              Our senior advisors analyze your asset portfolio, banking targets, and holding goals to recommend the ideal UAE jurisdiction.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation && onOpenConsultation('JAFZA Offshore Profile Suitability Review')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-[#0F172A] bg-gradient-to-r from-[#F5D7A1] to-[#E5C07B] hover:brightness-105 active:scale-98 transition-all shrink-0 cursor-pointer shadow-md"
          >
            <span>Request Suitability Analysis</span>
            <ArrowRight className="w-4 h-4 text-[#0F172A]" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default JafzaSuitableFor;
