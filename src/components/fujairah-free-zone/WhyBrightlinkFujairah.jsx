import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ShieldCheck, 
  FileCheck2, 
  Building2, 
  Scale, 
  Warehouse, 
  Users, 
  Landmark, 
  Coins,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const WhyBrightlinkFujairah = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const services = [
    {
      title: 'Activity Selection & Code Alignment',
      desc: 'Expert guidance in identifying and selecting the precise activity codes from the FFZA registry that align with your operational model without paying for redundant licences.',
      icon: FileCheck2
    },
    {
      title: 'Document Audit & Assembly',
      desc: 'Rigorous pre-submission audit of shareholder passports, corporate board resolutions, MOA drafting, and powers of attorney to ensure zero administrative delays.',
      icon: ShieldCheck
    },
    {
      title: 'Company Legal Structure Advisory',
      desc: 'Neutral analysis of whether an FZE, FZC, or corporate branch best accommodates your liability exposure, foreign governance, and banking profile.',
      icon: Scale
    },
    {
      title: 'Facility Matching & Lease Coordination',
      desc: 'Assistance evaluating flexi-desks, executive trading offices, standard bonded warehouses, or open industrial land to satisfy mandatory activity criteria.',
      icon: Warehouse
    },
    {
      title: 'Visa & Immigration Administration',
      desc: 'Turnkey handling of establishment cards, entry permits, VIP medical fitness scheduling, biometrics typing, and investor residency visa endorsements.',
      icon: Users
    },
    {
      title: 'Corporate Bank Account Portfolio Preparation',
      desc: 'Structured organization of commercial agreements, source of funds, business profile, and transaction forecasts for submission to UAE banking compliance teams.',
      icon: Landmark
    },
    {
      title: 'Clear Cost Explanations & Budgeting',
      desc: 'Complete, upfront breakdown of all authority fees, leasing expenses, visa charges, and recurring annual renewal costs with zero hidden charges.',
      icon: Coins
    },
    {
      title: 'Ongoing Statutory & Tax Compliance',
      desc: 'Guidance on Corporate Tax registration, QFZP economic substance guidelines, Value Added Tax (VAT) filings, and annual trade licence renewal management.',
      icon: Building2
    }
  ];

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Sparkles className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>PRACTICAL CONSULTING SUPPORT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Why Choose Brightlink for Fujairah Setup?
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Establishing a company outside metropolitan Dubai or Abu Dhabi requires dedicated operational knowledge of local authority workflows, customs corridors, and facility criteria. Brightlink provides transparent, professional guidance at every stage.
          </p>
        </div>

        {/* 8 Practical Support Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-white border border-[#DECBB5] hover:border-[#B8864B] transition-all shadow-xs flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0F172A] font-heading leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance Action Card */}
        <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#DECBB5] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-base sm:text-lg font-bold text-[#0F172A] font-heading">
              Ready to Discuss Your Fujairah Free Zone Formation?
            </h4>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              Connect directly with our senior business setup consultants for a transparent evaluation of your activity codes, workspace leasing options, and formation roadmap.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation('Why Brightlink Consultation')}
            className="px-6 py-3 rounded-xl bg-[#B8864B] hover:bg-[#9F7038] text-white text-xs sm:text-sm font-bold tracking-wide transition-colors shadow-xs flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Speak with a Consultant</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
