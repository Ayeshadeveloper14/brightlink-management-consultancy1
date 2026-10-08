import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  Globe2, 
  Lock, 
  Coins, 
  Building2, 
  Landmark, 
  Scale, 
  Sparkles, 
  CheckCircle2, 
  Zap,
  FileCheck2,
  Users
} from 'lucide-react';

export const RakBenefits = () => {
  const shouldReduceMotion = useReducedMotion();

  const benefitsList = [
    {
      icon: Users,
      title: '100% Foreign Equity Ownership',
      desc: 'Complete control and ownership for foreign nationals or international corporate bodies without requiring a UAE local sponsor or national partner.'
    },
    {
      icon: Lock,
      title: 'High Statutory Confidentiality',
      desc: 'Director and shareholder registers remain confidential with the registered agent and registry, safeguarding your privacy from public internet databases.'
    },
    {
      icon: Scale,
      title: 'English Common Law Standards',
      desc: 'Governance disputes can be referred to world-class Common Law courts (DIFC Courts or ADGM Courts), offering familiar international legal precedents.'
    },
    {
      icon: Coins,
      title: 'Zero Paid-Up Capital Mandate',
      desc: 'Flexibility to determine your authorized share capital without locking up paid-up cash deposits in local escrow or registry bank accounts.'
    },
    {
      icon: Building2,
      title: 'Zero UAE Physical Office Lease',
      desc: 'Operate strictly via your licensed Registered Agent address. No commercial tenancy contracts (Ejari) or physical office rent outlays required.'
    },
    {
      icon: Landmark,
      title: 'DLD Freehold Property Rights',
      desc: 'Direct eligibility to register freehold residential and commercial real estate titles with the Dubai Land Department under corporate name.'
    },
    {
      icon: Zap,
      title: '100% Remote Incorporation',
      desc: 'Complete the entire incorporation process remotely through Brightlink without needing to physically travel to the UAE for licensing signatures.'
    },
    {
      icon: ShieldCheck,
      title: 'International OECD & FATF Compliance',
      desc: 'Operating within the UAE’s white-listed regulatory environment ensuring your corporate vehicle complies with international tax transparency standards.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FCFAF8] relative overflow-hidden border-b border-[#E6D7C3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold tracking-wider uppercase font-heading shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>INSTITUTIONAL ADVANTAGES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
            Key Benefits of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B8864B] via-[#976A36] to-[#8C5E28]">RAK ICC Incorporation</span>
          </h2>

          <p className="text-base text-[#475569] leading-relaxed">
            Engineered to deliver supreme asset protection, contractual liberty, and international reputational standing for sophisticated global investors.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="bg-white rounded-2xl p-6 border border-[#E6D7C3] shadow-xs hover:shadow-md hover:border-[#B8864B]/60 transition-all duration-300 group flex flex-col justify-between"
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
                  <span>Brightlink Advisory Guarantee</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default RakBenefits;
