import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  Percent, 
  Coins, 
  Boxes, 
  Zap, 
  Building, 
  Users, 
  Globe2,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const FreeZoneBenefits = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const benefits = [
    {
      icon: ShieldCheck,
      title: '100% Foreign Ownership',
      badge: 'Full Equity',
      summary: 'Retain complete equity and ultimate control over your enterprise without any mandatory local UAE partner or sponsor.'
    },
    {
      icon: Percent,
      title: '0% Personal Income Tax',
      badge: 'Tax Efficiency',
      summary: 'Zero personal tax on executive salaries, shareholder dividends, capital gains, and investment returns.'
    },
    {
      icon: Coins,
      title: '100% Profit Repatriation',
      badge: 'Financial Freedom',
      summary: 'Repatriate 100% of your business capital and earnings to your home country with zero currency exchange controls.'
    },
    {
      icon: Boxes,
      title: 'Customs Duty Exemptions',
      badge: 'Import / Export',
      summary: 'Enjoy 0% customs duties when importing goods into the designated free zone for re-export or local processing.'
    },
    {
      icon: Zap,
      title: 'Fast-Track Remote Setup',
      badge: 'Speed & Ease',
      summary: 'Incorporate your company quickly with digital document submission, often without needing immediate UAE physical presence.'
    },
    {
      icon: Building,
      title: 'Flexible Office Facilities',
      badge: 'Low Overhead',
      summary: 'Choose cost-effective flexi-desks, dedicated co-working memberships, executive office suites, or industrial warehouses.'
    },
    {
      icon: Users,
      title: 'UAE Residence Visas',
      badge: 'Residency Access',
      summary: 'Secure 2-year renewable investor/partner visas for shareholders, key executives, staff, and family dependents.'
    },
    {
      icon: Globe2,
      title: 'Global Trade Hub',
      badge: 'Strategic Reach',
      summary: 'Access major international shipping lanes, air freight corridors, and multi-currency corporate banking relationships.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B8864B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#DECBB5]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>COMMERCIAL ADVANTAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Key Benefits of Dubai Free Zone Setup
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Dubai’s free zones deliver an unmatched combination of legal security, financial flexibility, and international prestige designed to maximize investor profitability.
          </p>
        </div>

        {/* 8 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-[#E6D7C3] shadow-xs hover:shadow-xl hover:border-[#DECBB5] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] group-hover:bg-[#B8864B] group-hover:text-white transition-colors duration-200 shadow-2xs">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF5EC] text-[#8C5E28] border border-[#DECBB5]/60 font-heading">
                      {benefit.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {benefit.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Brightlink Assisted Service</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Note on Corporate Tax */}
        <div className="rounded-2xl bg-white border border-[#E6D7C3] p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E28] font-heading block">
              UAE FEDERAL CORPORATE TAX NOTE
            </span>
            <p className="text-sm font-semibold text-[#0F172A]">
              Under UAE Federal Corporate Tax, Qualifying Free Zone Persons (QFZPs) can benefit from a 0% corporate tax rate on qualifying income.
            </p>
            <p className="text-xs text-[#64748B]">
              Brightlink’s advisors assist with eligibility criteria, audited financial compliance, and Corporate Tax registration.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation('Dubai Free Zone - Tax & Benefits Consultation')}
            className="px-6 py-3 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors cursor-pointer shrink-0 font-heading"
          >
            Ask About Tax Relief
          </button>
        </div>

      </div>
    </section>
  );
};
