import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  Layers, 
  Compass, 
  CheckCircle2, 
  AlertCircle, 
  Scale, 
  ArrowRight,
  TrendingUp,
  Briefcase
} from 'lucide-react';

export const UaqIntroduction = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const coreDimensions = [
    {
      title: 'Geographic Context & Transit Links',
      description: 'Umm Al Quwain Free Trade Zone (UAQ FTZ) is situated in the Emirate of Umm Al Quwain, positioned along the northern maritime corridor of the United Arab Emirates. Directly linked to the E11 and E311 arterial highways, UAQ FTZ offers straightforward road transit to Sharjah, Ajman, Ras Al Khaimah, and Dubai (approx. 45–55 minutes from Dubai International Airport).',
      icon: MapPin
    },
    {
      title: 'What Setup in UAQ FTZ Entails',
      description: 'Incorporation involves establishing a distinct legal corporate persona (such as an FZE, FZC, or Branch) registered directly under the authority of UAQ FTZ. The company is issued an official trade licence, a registered address or facility tenancy lease, and official constitutive corporate resolutions enabling corporate bank account applications and residency visa filings.',
      icon: Building2
    },
    {
      title: 'Comparing UAE Free Zones Thoughtfully',
      description: 'Entrepreneurs frequently compare UAQ FTZ with alternatives in Dubai, Sharjah, Ras Al Khaimah, and Ajman. While UAQ FTZ is widely recognized for accessible starter packages and sensible overheads, no single free zone is universally ideal for all business models. Jurisdiction selection must be measured against customer location, banking profile, facility needs, and long-term expansion goals.',
      icon: Scale
    }
  ];

  const setupFactors = [
    {
      label: 'Activity Classification',
      detail: 'The chosen commercial, service, or industrial activities dictate the exact licence class and determine whether external ministerial permits are required.'
    },
    {
      label: 'Licence Scope & Groups',
      detail: 'Standard commercial licences cover specific product classes, whereas broad merchandising across unrelated items requires specialized general trading provisions.'
    },
    {
      label: 'Facility & Workspace Model',
      detail: 'Options range from shared flexi-desks to dedicated executive suites or industrial warehousing; physical storage operations cannot be conducted from shared desks.'
    },
    {
      label: 'Shareholder Hierarchy',
      detail: 'Single-owner formations (FZE) follow streamlined personal KYC, whereas multi-partner (FZC) and corporate branch entities require corporate resolutions and attestations.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-[#E6D7C3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#8C5E28] text-xs font-bold uppercase tracking-wider font-heading">
            <Compass className="w-3.5 h-3.5 text-[#B8864B]" />
            <span>JURISDICTION CONTEXT & OVERVIEW</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] font-heading tracking-tight">
            Understanding Umm Al Quwain Free Trade Zone (UAQ FTZ)
          </h2>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-sans">
            Backed by the Government of Umm Al Quwain, UAQ FTZ provides a structured, modern commercial environment for international investors, regional commercial firms, and emerging entrepreneurs seeking an autonomous corporate presence in the UAE.
          </p>
        </div>

        {/* 3 Overview Dimension Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreDimensions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#FAF7F0]/30 rounded-2xl border border-[#E6D7C3] p-7 flex flex-col justify-between hover:border-[#DECBB5] hover:shadow-sm transition-all"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAF5EC] to-[#EFEAE2] border border-[#DECBB5] flex items-center justify-center text-[#B8864B] shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] font-heading">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EFEAE2] text-[11px] font-semibold text-[#8C5E28] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Verified Authority Standards</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Determinants of Setup: How Choice Affects Outcome */}
        <div className="bg-[#FAF7F0]/40 rounded-3xl border border-[#E6D7C3] p-8 sm:p-10 space-y-8">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] font-heading">
              How Setup Factors Influence Your UAQ FTZ Company
            </h3>
            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              Company registration is not a one-size-fits-all transaction. Key architectural decisions directly impact your ongoing administrative obligations, facility overhead, and banking viability:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {setupFactors.map((factor, fIdx) => (
              <div key={fIdx} className="bg-white rounded-xl p-5 border border-[#EFEAE2] space-y-2 shadow-2xs">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#B8864B] bg-[#FAF5EC] px-2 py-0.5 rounded border border-[#DECBB5]">
                  Factor 0{fIdx + 1}
                </span>
                <h4 className="text-sm font-bold text-[#0F172A] font-heading mt-1">
                  {factor.label}
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {factor.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Balanced Caution Notice */}
          <div className="p-4 rounded-xl bg-white border border-[#DECBB5] flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#8C5E28] shrink-0 mt-0.5" />
            <div className="text-xs text-[#475569] leading-relaxed">
              <strong className="text-[#1E293B]">Objective Advisory Principle: </strong>
              Brightlink does not assert that UAQ FTZ is the optimal solution for every business venture. While it presents an economical, welcoming framework for numerous digital, advisory, and cross-border commercial ventures, businesses requiring high-street retail storefronts in mainland cities or specific localized municipal permits may be better served by mainland licensing or alternative specialized free zones.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
