import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Landmark, 
  Scale, 
  LineChart, 
  Handshake, 
  Gift, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

export const RevaluationApplicationsSection = () => {
  const applications = [
    {
      id: 'golden-visa',
      title: 'UAE 10-Year Golden Visa',
      subtitle: 'Proving ≥ AED 2,000,000 Equity Threshold',
      description: 'If you purchased your property years ago or off-plan for less than AED 2M, but market appreciation now places its value at or above AED 2M, an official DLD Valuation Certificate qualifies you and your entire family for the 10-Year Golden Visa.',
      icon: Award
    },
    {
      id: 'mortgage-refinancing',
      title: 'Mortgage Refinancing & Equity Release',
      subtitle: 'Bank Underwriting & Loan Restructuring',
      description: 'Required by UAE mortgage lenders and Islamic finance banks to assess Loan-to-Value (LTV) ratios, consolidate debts, or release equity from appreciated residential and commercial properties.',
      icon: Landmark
    },
    {
      id: 'dispute-resolution',
      title: 'Dubai Courts & Judicial Settlement',
      subtitle: 'Estate Partition & Commercial Dispute Valuation',
      description: 'Accepted as definitive evidentiary appraisal by Dubai Courts, Rental Dispute Settlement Centre (RDSC), and international legal entities for probate inheritance, divorce asset division, and partnership liquidations.',
      icon: Scale
    },
    {
      id: 'corporate-accounting',
      title: 'Corporate Audit & Asset Revaluation',
      subtitle: 'IFRS Compliance & Corporate Balance Sheets',
      description: 'Assisting Mainland LLCs and Freezone corporations in reflecting actual fair value adjustments of real estate holdings under International Financial Reporting Standards (IFRS) for annual statutory audits.',
      icon: LineChart
    },
    {
      id: 'fair-market-benchmark',
      title: 'Sale Benchmark & Pricing Protection',
      subtitle: 'Independent Sovereign Valuation Prior to Transfer',
      description: 'Establishes a certified government benchmark between private buyers and institutional sellers to negotiate with total confidence before booking the DLD Registration Trustee office appointment.',
      icon: Handshake
    },
    {
      id: 'gift-transfer',
      title: 'Family Gift Transfer (Hiba) Base',
      subtitle: 'Reduced 0.125% DLD Transfer Fee Calculation',
      description: 'When transferring real estate between first-degree relatives (parents, spouses, children), DLD calculates the 0.125% gift fee based strictly on an official DLD Property Valuation Certificate.',
      icon: Gift
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#EFEAE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EC] border border-[#E6D7C3] mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B8864B]">
              Multi-Purpose Utility
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#222222] tracking-tight mb-4">
            One Certificate, Many Applications
          </h2>

          <p className="text-lg sm:text-xl font-semibold text-[#B8864B] mb-3">
            Where and why the official DLD Property Valuation Certificate is utilized.
          </p>

          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            An official Dubai Land Department Valuation Certificate is a recognized sovereign document across every government ministry, judicial tribunal, commercial bank, and immigration department in the United Arab Emirates.
          </p>
        </div>

        {/* 6 Cards Grid - 3 columns on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {applications.map((app, index) => {
            const AppIcon = app.icon;
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#FCFAF8] rounded-3xl p-7 sm:p-8 border border-[#EFEAE2] hover:border-[#B8864B]/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E6D7C3] text-[#B8864B] flex items-center justify-center mb-6 shadow-xs group-hover:bg-[#B8864B] group-hover:text-white transition-all">
                    <AppIcon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#222222] mb-1 group-hover:text-[#B8864B] transition-colors leading-snug">
                    {app.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#B8864B] mb-3">
                    {app.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                    {app.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-200/60 flex items-center gap-2 text-xs font-bold text-[#976A36]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B]" />
                  <span>Officially Endorsed Report</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
