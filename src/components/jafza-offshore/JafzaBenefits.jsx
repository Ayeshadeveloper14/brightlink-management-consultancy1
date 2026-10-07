import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  Globe2, 
  Landmark, 
  Layers, 
  Coins, 
  Lock, 
  CheckCircle2, 
  Sparkles,
  PieChart,
  Award,
  CreditCard
} from 'lucide-react';

export const JafzaBenefits = () => {
  const shouldReduceMotion = useReducedMotion();

  const benefitsList = [
    {
      icon: Award,
      title: 'Dubai-Based Offshore Registry',
      desc: 'The only offshore corporate regime domiciled directly in the Emirate of Dubai, offering unparalleled international prestige, trust, and legal standing.'
    },
    {
      icon: ShieldCheck,
      title: '100% Foreign Ownership',
      desc: 'Complete equity ownership and operational independence for international shareholders with zero requirement for local UAE partners or sponsors.'
    },
    {
      icon: Globe2,
      title: 'International Business Structure',
      desc: 'A robust corporate chassis designed specifically to execute cross-border commerce, contractual agreements, and international transactions worldwide.'
    },
    {
      icon: Lock,
      title: 'Asset Protection & Ownership',
      desc: 'Isolate sensitive private assets, intellectual property, and equities from commercial liabilities and risks associated with operating subsidiaries.'
    },
    {
      icon: Layers,
      title: 'Corporate Holding Structure',
      desc: 'Ideal parent vehicle for structuring multi-tier corporate hierarchies, holding operating shares in UAE Mainland, Free Zone, or foreign companies.'
    },
    {
      icon: PieChart,
      title: 'Investment Ownership',
      desc: 'Freedom to hold, trade, and manage global venture capital, private equity portfolios, real estate funds, and multi-currency securities.'
    },
    {
      icon: Landmark,
      title: 'Dubai Property Ownership Opportunities',
      desc: 'One of the historically recognized offshore structures permitted by the Dubai Land Department (DLD) to own freehold real estate in designated Dubai areas.'
    },
    {
      icon: CreditCard,
      title: 'International Banking Preparation',
      desc: 'Enhanced institutional credibility with premier UAE commercial banks and global financial institutions that value JAFZA’s established compliance regime.'
    },
    {
      icon: Building2,
      title: 'No Physical Office Requirement',
      desc: 'Zero commercial office lease or Ejari required. The company’s legal registered office address is maintained by your licensed Registered Agent.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>INSTITUTIONAL VALUE PROPOSITION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">JAFZA Offshore?</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            For global family offices, international enterprises, and private investors seeking a Dubai corporate domicile with supreme reputational integrity.
          </p>
        </div>

        {/* Benefits 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsList.map((item, idx) => {
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
                  <span>JAFZA Offshore Regulation</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default JafzaBenefits;
