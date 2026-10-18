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
  Building2,
  PhoneCall
} from 'lucide-react';

export const WhyBrightlinkAjman = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const servicePillars = [
    {
      icon: Compass,
      title: 'Licence & Activity Selection Guidance',
      description: 'We evaluate your business goals and match them with official Ajman Free Zone activity codes, preventing costly activity amendments or licensing delays later.'
    },
    {
      icon: FileText,
      title: 'End-to-End Documentation Preparation',
      description: 'Our team prepares and reviews your shareholder identification, bilingual constitutional documents (MOA/AOA), board resolutions, and power of attorney forms.'
    },
    {
      icon: ShieldCheck,
      title: 'Direct Application Management',
      description: 'We submit and track your company registration directly through the authority portals, responding promptly to authority queries and security clearances.'
    },
    {
      icon: Users,
      title: 'In-House Visa & Immigration Support',
      description: 'Through Brightlink’s established typing operations, we manage Establishment Card registrations, entry permits, VIP medical examination bookings, and Emirates ID processing.'
    },
    {
      icon: CreditCard,
      title: 'Corporate Bank Account Readiness',
      description: 'We help you prepare a comprehensive compliance dossier, business plan, and shareholder profile tailored to meet the strict KYC and AML requirements of UAE banks.'
    },
    {
      icon: Coins,
      title: 'Transparent Pricing & Ongoing Compliance',
      description: 'We provide itemized estimates of authority tariffs, workspace rents, and visa costs upfront, while advising on annual licence renewals, Corporate Tax, and VAT obligations.'
    }
  ];

  return (
    <section id="why-brightlink" className="py-20 lg:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-[#E6D7C3]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>PRACTICAL CONSULTANCY SUPPORT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading leading-tight">
            Why Choose Brightlink for Ajman Free Zone Setup
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Our corporate consultancy delivers hands-on assistance across each stage of company formation, document vetting, workspace leasing, and operational readiness.
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
                className="bg-white rounded-2xl p-6 border border-[#E6D7C3] hover:border-[#B8864B]/60 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] font-heading mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F1E8DC] flex items-center gap-2 text-xs font-semibold text-[#8C5E28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Brightlink Practical Service</span>
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
              <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
                Dedicated Setup Advisors
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-heading">
                Speak with an Ajman Business Setup Specialist Today
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Get an objective review of your activities, document requirements, licence options, and visa quota needs.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenConsultation('Why Brightlink Ajman Setup Consultation')}
                className="px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#8C5E28] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer"
              >
                Book Free Consultation
              </button>
              <a
                href="https://wa.me/971566556645?text=Hello%2C%20I%20would%20like%20to%20consult%20regarding%20Ajman%20Free%20Zone%20Business%20Setup"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 border border-white/20"
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
