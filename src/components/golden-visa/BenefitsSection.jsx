import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Calendar, 
  Users, 
  Building2, 
  Coins, 
  Anchor, 
  Globe2, 
  Sparkles, 
  Home, 
  CheckCircle2,
  Crown
} from 'lucide-react';

export const BenefitsSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const benefits = [
    {
      title: '10-Year Residency',
      description: 'Renewable long-term residence permit issued directly under your own name with complete autonomy from employer or national sponsor.',
      icon: Calendar,
      tag: 'Self-Sponsored'
    },
    {
      title: 'Family Sponsorship',
      description: 'Sponsor your spouse and children of any age (no 25-year-old cap for sons), plus unlimited domestic helpers, cooks, and drivers.',
      icon: Users,
      tag: 'All Ages Included'
    },
    {
      title: 'Business Freedom',
      description: '100% commercial and enterprise ownership in mainland Dubai and across all UAE free zones with zero local partner requirement.',
      icon: Building2,
      tag: '100% Foreign Control'
    },
    {
      title: 'Tax Advantages',
      description: '0% personal income tax, 0% capital gains tax, and 0% wealth tax on worldwide earnings, maximizing net investment returns.',
      icon: Coins,
      tag: 'Fiscal Efficiency'
    },
    {
      title: 'Long-Term Stability',
      description: 'Remain outside the UAE for more than 6 continuous months without your visa being invalidated or cancelled.',
      icon: Anchor,
      tag: 'No 6-Month Stay Rule'
    },
    {
      title: 'Global Connectivity',
      description: 'Position yourself in a premier global aviation hub connecting Europe, Asia, Africa, and the Americas within an 8-hour flight radius.',
      icon: Globe2,
      tag: 'Strategic Nexus'
    },
    {
      title: 'Premium Lifestyle',
      description: 'Access premier private healthcare facilities, British and IB international schools, Michelin dining, and rank #1 global public safety.',
      icon: Sparkles,
      tag: 'World-Class Living'
    },
    {
      title: 'Property Ownership',
      description: 'Acquire high-yield freehold luxury real estate in Dubai with expedited title deed attestation and bank financing privileges.',
      icon: Home,
      tag: 'Prime Real Estate'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFFFFF] relative border-b border-[#F1EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-4">
            <Crown className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Exclusive Privileges
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Why Choose the UAE Golden Visa?
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            The Golden Visa represents the gold standard of global residency programmes, engineered to provide high-net-worth investors, executives, and top talents with unparalleled security and lifestyle freedom.
          </p>
        </motion.div>

        {/* 8 Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-[#FCFAF8] rounded-2xl p-6 border border-[#EFEAE2] hover:border-[#DECBB5] hover:bg-white transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] text-[#B8864B] border border-[#E6D7C3] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 stroke-[1.9]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white border border-[#E6D7C3] text-[#B8864B]">
                      {b.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#222222] font-heading mb-2">
                    {b.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F5EFE6] flex items-center gap-1.5 text-xs font-semibold text-[#B8864B]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>10-Year Guarantee</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Esaad Privilege Card Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#222222] to-[#332A20] text-white p-6 sm:p-8 shadow-lg border border-black/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-[#F5D7A1] flex items-center justify-center shrink-0 border border-white/15">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white mb-1 font-heading">
                  Complimentary Dubai Police Esaad Privilege Card
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
                  Every Golden Visa holder residing in Dubai receives the coveted Esaad discount card, offering substantial reductions at over 7,237 brands, private hospitals, Emirates airline flights, five-star hotel stays, and luxury retail across the UAE and worldwide.
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold text-white/95">
              <span>Automatic Inclusion</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
