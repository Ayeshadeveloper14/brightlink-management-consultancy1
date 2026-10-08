import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  Globe2, 
  Layers, 
  Lock, 
  Coins, 
  CheckCircle2, 
  Sparkles,
  CreditCard,
  PieChart
} from 'lucide-react';

export const AjmanAdvantages = () => {
  const shouldReduceMotion = useReducedMotion();

  const advantages = [
    {
      icon: Globe2,
      title: '100% Foreign Ownership',
      desc: 'Complete equity autonomy for foreign national investors and international entities without requiring a local UAE partner or national sponsor.'
    },
    {
      icon: ShieldCheck,
      title: 'Asset Holding Capability',
      desc: 'Suitable for holding international real estate, liquid investments, and private capital assets within a discrete legal corporate entity.'
    },
    {
      icon: Layers,
      title: 'International Business Structure',
      desc: 'Engineered for cross-border commercial arrangements, foreign trade billing, and international consulting contracts outside the UAE mainland.'
    },
    {
      icon: PieChart,
      title: 'Investment Structures',
      desc: 'Can serve as a flexible investment vehicle for private equity allocations, syndicate venture capital, and holding securities portfolios.'
    },
    {
      icon: Lock,
      title: 'Intellectual Property Custody',
      desc: 'Isolate proprietary brand trademarks, software copyright, and patented designs, licensing rights to commercial operating companies.'
    },
    {
      icon: Building2,
      title: 'Corporate Ownership & Group Holdings',
      desc: 'Supports shareholding across group subsidiaries, acting as an overarching parent holding entity for regional and foreign firms.'
    },
    {
      icon: Coins,
      title: 'No Traditional Office Requirement',
      desc: 'The offshore structure does not mandate a physical commercial office lease or Ejari in the UAE, operating legally via an authorized Registered Agent address.'
    },
    {
      icon: CreditCard,
      title: 'Banking Preparation Support',
      desc: 'Brightlink assists in preparing bank-ready corporate documentation and business profiles, subject to commercial bank compliance review and formal approval.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>STRUCTURAL HIGHLIGHTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Key Advantages of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">Ajman Offshore</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            A balanced, cost-effective corporate framework tailored for global entrepreneurs, asset managers, and cross-border commercial operators.
          </p>
        </div>

        {/* 8 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-[#FCFAF8] rounded-2xl p-6 border border-[#E6D7C3] shadow-xs hover:shadow-md hover:border-[#B8864B]/60 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#F5E8D4] border border-[#DECBB5] flex items-center justify-center text-[#8C5E28] mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-[#B8864B]" />
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
                  <span>Statutory Feature</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AjmanAdvantages;
