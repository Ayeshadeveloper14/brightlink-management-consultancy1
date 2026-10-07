import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  FileText, 
  Scale, 
  Clock, 
  Users, 
  Sparkles,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export const WhatAreProServices = () => {
  const shouldReduceMotion = useReducedMotion();

  const corePillars = [
    {
      title: 'What Are PRO Services?',
      subtitle: 'Public Relations Officer Functions',
      description: 'A PRO (Public Relations Officer) handles all governmental liaison and legal administrative procedures required by the UAE Government. This includes corporate trade licensing with the Department of Economy and Tourism (DET), ministry approvals, visa typing, and statutory labor filings.',
      icon: FileText,
      badge: 'Definition & Scope'
    },
    {
      title: 'Why UAE Businesses Need PRO Services',
      subtitle: 'Legal Compliance & Risk Mitigation',
      description: 'Operating in the UAE requires navigating strict ministerial mandates across MOHRE, GDRFA, Civil Defence, and Municipalities. Professional PRO management ensures timely renewals, averts administrative penalties, protects quotas, and secures legal employee employment.',
      icon: Scale,
      badge: 'Statutory Obligation'
    },
    {
      title: 'How Brigitlink Assists Companies',
      subtitle: 'Outsourced Turnkey Corporate PRO',
      description: 'Instead of hiring expensive in-house PROs with company cars and visas, Brigitlink acts as your dedicated corporate liaison department. We provide electronic document tracking, priority government queues, transparent fee vouchers, and doorstep courier pickup.',
      icon: Building2,
      badge: 'Brigitlink Advantage'
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
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Corporate Governance
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            What Are Corporate PRO Services in Dubai?
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Public Relations Officer (PRO) services are the vital bridge between your business enterprise and UAE government entities, ensuring continuous operational legality and seamless staff management.
          </p>
        </motion.div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-[#FCFAF8] rounded-2xl p-6 sm:p-8 border border-[#EFEAE2] hover:border-[#DECBB5] hover:bg-white transition-all shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] text-[#B8864B] border border-[#E6D7C3] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 stroke-[1.9]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-[#E6D7C3] text-[#B8864B]">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#222222] font-heading mb-1">
                    {pillar.title}
                  </h3>

                  <span className="text-xs font-semibold text-[#888888] block mb-3">
                    {pillar.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F5EFE6] flex items-center gap-1.5 text-xs font-semibold text-[#B8864B]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Essential Corporate Pillar</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Regulatory Authorities Covered Callout Banner */}
        <div className="rounded-2xl bg-[#FAF8F5] border border-[#EFEAE2] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#222222] font-heading mb-1.5">
                Government Authorities Managed on Your Behalf
              </h4>
              <p className="text-xs text-[#666666] leading-relaxed max-w-2xl">
                We represent your business directly with the Ministry of Human Resources & Emiratisation (MOHRE), General Directorate of Residency and Foreigners Affairs (GDRFA), Department of Economy and Tourism (DET), Federal Tax Authority (FTA), and Dubai Health Authority (DHA).
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {['MOHRE', 'GDRFA', 'DET / DED', 'ICP', 'DHA', 'Dubai Courts'].map((auth) => (
                <span
                  key={auth}
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#E6D7C3] text-xs font-bold text-[#444444]"
                >
                  {auth}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
