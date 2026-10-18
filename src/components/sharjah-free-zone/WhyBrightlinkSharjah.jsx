import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Compass, 
  FileText, 
  Users, 
  CreditCard, 
  Coins, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Building
} from 'lucide-react';

export const WhyBrightlinkSharjah = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const servicePillars = [
    {
      icon: Compass,
      title: 'Unbiased Authority Comparison',
      description: 'We objectively evaluate SAIF Zone, SHAMS, SPC Free Zone, Hamriyah Free Zone, and SRTIP to identify the best jurisdiction for your industry, budget, and expansion plans.'
    },
    {
      icon: FileText,
      title: 'Activity Grouping & Licence Optimisation',
      description: 'Sharjah free zones allow combining distinct activity clusters (services, e-commerce, trade). We structure your application to maximize commercial privileges without unnecessary extra licence fees.'
    },
    {
      icon: ShieldCheck,
      title: 'Fast-Track Documentation & Drafting',
      description: 'Our legal specialists draft compliant Articles of Association, board resolutions, and power of attorney documents, coordinating foreign document attestations through UAE MOFA.'
    },
    {
      icon: Users,
      title: 'In-House Amer & Visa Processing',
      description: 'Benefit from Brightlink’s direct typing center operations for VIP medical test bookings, Emirates ID biometric scheduling, and expedited residence visa issuance for shareholders and staff.'
    },
    {
      icon: CreditCard,
      title: 'Corporate Bank Account Assistance',
      description: 'We prepare your business dossier, source of funds substantiation, and AML compliance profiles to facilitate commercial banking reviews with leading UAE financial institutions.'
    },
    {
      icon: Coins,
      title: 'Transparent Pricing with Zero Hidden Costs',
      description: 'Receive itemized official fee breakdowns covering authority registration, trade name reservation, workspace leases, and visa quotas upfront with zero hidden charges.'
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>BRIGHTLINK CONSULTANCY ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Why Partner with Brightlink for Sharjah Free Zone Setup
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            From initial jurisdiction evaluation and activity licensing to visa processing and corporate banking, our experienced UAE business setup consultants guide you at every step.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {servicePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-[#FAF7F0] rounded-2xl p-6 border border-[#E6D7C3] hover:border-[#B8864B]/60 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#DECBB5] flex items-center justify-center text-[#B8864B] mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] font-heading mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DECBB5]/60 flex items-center gap-2 text-xs font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Brightlink Verified Support</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Support Strip */}
        <div className="bg-[#0F172A] rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B8864B]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B]">
                Personalized Consultation
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-heading">
                Ready to Form Your Sharjah Free Zone Company?
              </h4>
              <p className="text-sm text-slate-300 max-w-xl">
                Get an unbiased comparison of fees, activity allowances, and visa options across SAIF Zone, SHAMS, SPC, HFZA, and SRTIP.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenConsultation('Sharjah Free Zone Setup Consultation')}
                className="px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#8C5E28] text-white font-bold text-sm transition-all duration-200 shadow-md cursor-pointer"
              >
                Book Free Consultation
              </button>
              <a
                href="https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20to%20consult%20regarding%20Sharjah%20Free%20Zone%20Business%20Setup"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all duration-200 border border-white/20"
              >
                WhatsApp Consultant
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
