import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  FileCheck2, 
  Headphones, 
  Scale, 
  ArrowRight, 
  Building2, 
  CheckCircle2 
} from 'lucide-react';

export const ReraWhyChooseUs = ({ onOpenConsultation }) => {
  const pillars = [
    {
      title: '10+ Years Direct DLD & DED Liaison',
      description: 'Our in-house government relations officers interact directly with Dubai Land Department and DED examiners every single day, expediting initial approvals and resolving system queries in minutes.',
      icon: Building2
    },
    {
      title: 'High First-Attempt Exam Pass Rate',
      description: 'We supply proprietary DREI syllabus study summaries, practical test sample questions, and legal contract formula revision sheets to ensure our candidates clear the RERA examination on their first attempt.',
      icon: Award
    },
    {
      title: 'Zero-Error Document Pre-Audit',
      description: 'Every educational degree attestation, police certificate, passport copy, and tenancy contract is verified against current DLD criteria before submission, preventing costly rejections or appointment delays.',
      icon: FileCheck2
    },
    {
      title: 'Complete Trakheesi System Integration',
      description: 'We do not stop at broker card issuance. We configure your company profile on the DLD Trakheesi portal, set up advertising credentials, and instruct your team on generating mandatory ad permits.',
      icon: ShieldCheck
    },
    {
      title: 'Transparent Government Fee Structure',
      description: 'No hidden administrative markups. We provide an itemized breakdown of official Dubai Land Department, DREI, Dubai Police, and DED licensing fees with official government receipts.',
      icon: Scale
    },
    {
      title: 'Dedicated Corporate Real Estate PRO',
      description: 'Whether you are an individual consultant or a 50-broker multinational firm, you have a designated senior typing consultant managing broker visa renewals, Ejari filings, and quota expansions.',
      icon: Headphones
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-4">
            Why Brightlink for RERA Licensing
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-[#B8864B] mb-3">
            Trusted by 3,500+ real estate brokers and 280+ agencies across Dubai.
          </p>

          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Real estate licensing in Dubai demands precision. A single discrepancy between your educational degree attestation, DED commercial activity, and RERA approval code can stall your company launch for weeks. Brightlink eliminates the friction.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#FCFAF8] rounded-3xl p-7 border border-[#EFEAE2] hover:border-[#B8864B]/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center mb-6 shadow-xs group-hover:bg-[#B8864B] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#222222] mb-3 leading-snug group-hover:text-[#B8864B] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#555555] leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Corporate Partnership Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1C1A17] via-[#24211D] to-[#141311] text-white border border-[#B8864B]/30 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#B8864B]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-2 max-w-2xl">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#F5D7A1] block">
              Brokerage Agency Support
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Establishing a New Brokerage Firm in Dubai?
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed font-normal">
              From trade name reservation and 100% foreign ownership Mainland LLC structuring to commercial Ejari, RERA manager licensing, and bulk agent onboarding — we deliver the entire enterprise turnkey.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-3.5">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenConsultation?.('Real Estate Brokerage Setup Inquiry')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] hover:brightness-105 text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#B8864B]/25 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Schedule Agency Setup Call</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
};
