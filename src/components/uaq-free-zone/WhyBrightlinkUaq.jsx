import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Award, 
  ShieldCheck, 
  Clock, 
  Users, 
  Landmark, 
  CheckCircle2, 
  HeartHandshake, 
  Sparkles,
  ArrowRight,
  FileCheck2,
  PhoneCall
} from 'lucide-react';

export const WhyBrightlinkUaq = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      title: 'Initial Business Consultation',
      desc: 'Objective feasibility assessments examining your commercial model, customer footprint, and operational goals to determine whether UAQ FTZ is the right jurisdiction for your enterprise.',
      icon: Users
    },
    {
      title: 'Activity & Licence Code Matching',
      desc: 'Expert navigation through official UAQ FTZ activity schedules to pinpoint the exact licence codes that support your planned operations and facilitate bank onboarding.',
      icon: FileCheck2
    },
    {
      title: 'Corporate Legal Structuring',
      desc: 'Tailored advice on selecting between FZE (single owner), FZC (partners), and corporate Branch entities, including drafting compliant Memorandum and Articles of Association (MOA).',
      icon: ShieldCheck
    },
    {
      title: 'Complete Document Preparation',
      desc: 'End-to-end management of shareholder identification, certified legal translations, corporate board resolutions, and ministry attestations required for official registry filing.',
      icon: Clock
    },
    {
      title: 'Residency Visa & Immigration PRO',
      desc: 'Comprehensive execution of company establishment cards, investor entry permits, VIP medical fitness scheduling, and Emirates ID biometric processing across UAE typing centres.',
      icon: Award
    },
    {
      title: 'Banking Preparation & Compliance Dossier',
      desc: 'Compilation of comprehensive business profiles, financial projections, client/supplier contracts, and AML/KYC source of funds documentation for UAE corporate bank applications.',
      icon: Landmark
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>THE BRIGHTLINK COMMITMENT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Why Partner with Brightlink for UAQ Company Formation?
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Navigating company formation in the UAE requires accurate legal guidance, transparent fee structures, and hands-on PRO support. Brightlink manages the administrative complexity so you can focus on building your enterprise.
          </p>
        </div>

        {/* 6 Core Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="bg-[#FAF7F0]/30 rounded-2xl border border-[#E6D7C3] p-6 shadow-2xs hover:shadow-sm hover:border-[#DECBB5] transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] font-heading">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#EFEAE2] flex items-center justify-between text-xs text-[#8C5E28] font-semibold">
                  <span>Brightlink Dedicated Advisory</span>
                  <CheckCircle2 className="w-4 h-4 text-[#B8864B]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
