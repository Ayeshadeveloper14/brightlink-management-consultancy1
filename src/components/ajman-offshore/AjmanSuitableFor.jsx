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
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const AjmanSuitableFor = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const profiles = [
    {
      icon: Layers,
      title: 'Holding Companies',
      desc: 'Corporate entities structured to consolidate ownership of subsidiaries, equities, and real estate assets across multiple jurisdictions.'
    },
    {
      icon: Coins,
      title: 'International Investors',
      desc: 'Global investors seeking a recognized, cost-effective corporate vehicle to manage diversified foreign portfolios and capital allocations.'
    },
    {
      icon: ShieldCheck,
      title: 'Asset Holding Structures',
      desc: 'Private high-net-worth individuals and family estates seeking to isolate tangible and intangible assets from trading liabilities.'
    },
    {
      icon: Lock,
      title: 'IP Owners',
      desc: 'Creators, tech innovators, and copyright holders seeking to house proprietary trademarks, codebases, and global licensing rights.'
    },
    {
      icon: Building2,
      title: 'Investment Vehicles',
      desc: 'Syndicates, private equity groups, and venture founders needing a dedicated Special Purpose Vehicle (SPV) for discrete capital deployments.'
    },
    {
      icon: Briefcase,
      title: 'International Entrepreneurs',
      desc: 'Founders running location-independent digital consultancies, marketing agencies, or international advisory businesses outside the UAE.'
    },
    {
      icon: Users,
      title: 'Group / Corporate Structures',
      desc: 'Multi-entity corporate groups seeking a clean, compliant parent company tier to organize shareholding and inter-company contracts.'
    },
    {
      icon: Globe2,
      title: 'Cross-Border Businesses',
      desc: 'Merchants and distributors conducting commerce between foreign countries without importing goods into the domestic UAE territory.'
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
            Who Is Ajman Offshore <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Suitable For?</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            The Ajman Offshore regime is tailored for entrepreneurs and investors who require a compliant, internationally recognized UAE corporate wrapper without mainland retail overhead.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {profiles.map((profile, idx) => {
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

                  <h3 className="text-base font-bold text-[#0F172A] mb-2 font-heading group-hover:text-[#8C5E28] transition-colors">
                    {profile.title}
                  </h3>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {profile.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F5F1EB] flex items-center justify-between text-xs">
                  <span className="text-[#8C5E28] font-semibold text-[11px]">Structured Holding</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Assessment Banner */}
        <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] rounded-3xl p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold font-heading text-white">
              Evaluate Your Holding Structure with Brigitlink
            </h4>
            <p className="text-xs text-neutral-300 max-w-xl">
              We review your asset types, target banking institutions, and planned transactions to confirm if Ajman Offshore is the optimal fit for your goals.
            </p>
          </div>

          <button
            onClick={() => onOpenConsultation && onOpenConsultation('Ajman Offshore Structure Assessment')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-[#0F172A] bg-gradient-to-r from-[#F5D7A1] to-[#E5C07B] hover:brightness-105 active:scale-98 transition-all shrink-0 cursor-pointer shadow-md"
          >
            <span>Request Structure Review</span>
            <ArrowRight className="w-4 h-4 text-[#0F172A]" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default AjmanSuitableFor;
