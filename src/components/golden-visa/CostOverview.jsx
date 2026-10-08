import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CountUp } from '../shared/CountUp.jsx';
import { 
  CreditCard, 
  Building2, 
  Receipt, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';

export const CostOverview = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const pricingTiers = [
    {
      title: 'Real Estate Investor Pathway',
      thresholdLabel: 'Property Equity Requirement',
      thresholdAmount: 2000000,
      thresholdPrefix: 'AED ',
      thresholdSuffix: '+',
      feeBreakdown: [
        { label: 'DLD Title Deed Valuation & Verification', amount: 'AED 4,020' },
        { label: 'GDRFA Entry Permit & Status Amendment', amount: 'AED 1,150' },
        { label: 'VIP Medical Fitness & Emirates ID (10-Yr)', amount: 'AED 1,850' },
        { label: 'Brightlink End-to-End VIP Concierge Typing', amount: 'AED 2,500' }
      ],
      totalEstimate: 'From AED 9,520 (all-inclusive gov & typing)',
      highlight: 'Fastest 3-5 Working Day Turnaround'
    },
    {
      title: 'Skilled Professional & Executive Pathway',
      thresholdLabel: 'Minimum Monthly Salary',
      thresholdAmount: 30000,
      thresholdPrefix: 'AED ',
      thresholdSuffix: ' / Mo',
      feeBreakdown: [
        { label: 'ICP / GDRFA Nomination Approval', amount: 'AED 2,850' },
        { label: 'In-Country Status Amendment (if inside UAE)', amount: 'AED 650' },
        { label: '10-Year Emirates ID & VIP Medical Screening', amount: 'AED 1,750' },
        { label: 'Brightlink Document Attestation & Legal Typing', amount: 'AED 2,500' }
      ],
      totalEstimate: 'From AED 7,750 (all-inclusive gov & typing)',
      highlight: 'High Approval Rate for C-Level & Tech'
    },
    {
      title: 'Family & Dependent Sponsorship Add-On',
      thresholdLabel: 'Per Family Member',
      thresholdAmount: 3850,
      thresholdPrefix: 'AED ',
      thresholdSuffix: ' / Person',
      feeBreakdown: [
        { label: '10-Year Residency Stamping (Spouse / Child)', amount: 'AED 2,250' },
        { label: '10-Year Emirates ID Typing & Delivery', amount: 'AED 1,050' },
        { label: 'Medical Fitness (Adult Dependents >18)', amount: 'AED 350' },
        { label: 'Brightlink Family File Opening & Attestation', amount: 'AED 750' }
      ],
      totalEstimate: 'From AED 3,850 per dependent',
      highlight: 'Covers Spouse, Sons, Daughters & Domestic Staff'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2] relative border-b border-[#F1EBE1]">
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
              Transparent Pricing
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Cost & Investment Overview
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Clear, transparent breakdown of statutory government charges, VIP medical examinations, Emirates ID cards, and Brightlink concierge PRO management. Zero hidden surprises.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EBE4D8] hover:border-[#B8864B] shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FAF5EC] text-[#B8864B] border border-[#E6D7C3]">
                    {tier.highlight}
                  </span>
                  <Sparkles className="w-4 h-4 text-[#B8864B]" />
                </div>

                <h3 className="text-lg font-bold text-[#222222] font-heading mb-1">
                  {tier.title}
                </h3>
                <span className="text-xs text-[#888888] block mb-4">
                  {tier.thresholdLabel}
                </span>

                {/* Animated Counter for Main Metric */}
                <div className="mb-6 p-4 rounded-xl bg-[#FAF8F5] border border-[#EFEAE2]">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#976A36] font-heading">
                    <CountUp 
                      end={tier.thresholdAmount} 
                      duration={2200}
                      prefix={tier.thresholdPrefix}
                      suffix={tier.thresholdSuffix}
                      separator=","
                    />
                  </div>
                  <span className="text-[11px] text-[#777777] block mt-1">
                    Statutory qualifying threshold
                  </span>
                </div>

                {/* Fee Breakdown List */}
                <div className="space-y-3 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#222222] font-heading block">
                    Estimated Cost Components:
                  </span>
                  {tier.feeBreakdown.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start justify-between gap-2 text-xs py-1 border-b border-[#F5EFE6]">
                      <span className="text-[#555555]">{item.label}</span>
                      <span className="font-bold text-[#222222] shrink-0 font-heading">{item.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="p-3 rounded-xl bg-[#FAF5EC] border border-[#E6D7C3] text-xs font-bold text-[#7A4B1A] mb-5 text-center">
                  {tier.totalEstimate}
                </div>

                <button
                  type="button"
                  onClick={() => onOpenConsultation && onOpenConsultation(tier.title)}
                  className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white font-bold text-xs shadow-md shadow-[#B8864B]/20 hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request Custom Fee Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cost Transparency Guarantee Box */}
        <div className="p-6 rounded-2xl bg-white border border-[#EBE4D8] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#FAF5EC] text-[#B8864B] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#222222] font-heading mb-1">
                Zero Hidden Charges Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                All statutory government vouchers (GDRFA, ICP, DLD, DHA) are invoiced at official cost with original government receipts provided. You only pay the agreed PRO file management fee.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Golden Visa Fee Calculator')}
            className="shrink-0 px-5 py-2.5 rounded-full bg-[#FAF5EC] border border-[#DECBB5] text-[#976A36] hover:bg-[#B8864B] hover:text-white font-bold text-xs transition-all cursor-pointer"
          >
            Calculate Exact Fees
          </button>
        </div>

      </div>
    </section>
  );
};
