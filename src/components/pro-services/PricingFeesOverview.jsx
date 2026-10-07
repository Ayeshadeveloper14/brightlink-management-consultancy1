import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CountUp } from '../shared/CountUp.jsx';
import { 
  CreditCard, 
  Building2, 
  Receipt, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const PricingFeesOverview = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const pricingModels = [
    {
      title: 'Pay-Per-Transaction Retainer',
      subtitle: 'Best for Small Businesses & Startups',
      description: 'Ideal for companies with intermittent or occasional visa filings. Pay strictly as you go per application without monthly commitments.',
      counterAmount: 450,
      counterPrefix: 'From AED ',
      counterSuffix: ' / Service',
      highlights: [
        'No monthly retainer contracts required',
        'Transparent official government receipts provided',
        'Standard 48-hour document turnaround',
        'Dedicated account manager support'
      ],
      popular: false
    },
    {
      title: 'Monthly Corporate PRO Retainer',
      subtitle: 'Best for Growing Companies (10–50 Staff)',
      description: 'Complete outsourced PRO department managing all employee quotas, labour cards, renewals, and trade licence compliance on an ongoing basis.',
      counterAmount: 2200,
      counterPrefix: 'From AED ',
      counterSuffix: ' / Month',
      highlights: [
        'Unlimited visa and work permit typing',
        'Dedicated senior PRO officer assigned',
        'Monthly WPS compliance & salary audits',
        'Free document pickup & delivery courier'
      ],
      popular: true
    },
    {
      title: 'Enterprise High-Volume Agreement',
      subtitle: 'For Large Enterprises (50+ Staff)',
      description: 'Custom corporate framework covering large workforces with priority on-site support, bulk onboarding, and dedicated liaison officers.',
      counterAmount: 4800,
      counterPrefix: 'From AED ',
      counterSuffix: ' / Month',
      highlights: [
        'Dedicated on-site & field PRO specialist',
        'Priority VIP medical & biometric escorts',
        'Bespoke SLA guarantee with penalty clauses',
        'Executive C-suite Golden Visa advisory'
      ],
      popular: false
    }
  ];

  const statutoryFeeEstimates = [
    { item: 'MOHRE Initial Work Permit Approval', cost: 'AED 250–350' },
    { item: 'MOHRE Electronic Labour Card (2 Years)', cost: 'AED 300–3,200 (by company tier)' },
    { item: 'GDRFA Residence Entry Permit (Employment)', cost: 'AED 350–550' },
    { item: 'In-Country Change of Status (Inside UAE)', cost: 'AED 550–680' },
    { item: 'Standard / VIP Medical Fitness Test', cost: 'AED 320–850' },
    { item: 'Emirates ID Biometric Card (2 Years)', cost: 'AED 370' }
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
              Transparent Costs
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Pricing & Government Fees Overview
          </h2>
          <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
            Choose between flexible per-transaction processing or full-service monthly retainer packages. Every government fee is charged at official cost with original receipts.
          </p>
        </motion.div>

        {/* 3 Pricing Models Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {pricingModels.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`rounded-2xl p-6 sm:p-8 border flex flex-col justify-between transition-all relative ${
                plan.popular
                  ? 'bg-[#FCFAF8] border-[#B8864B] shadow-md shadow-[#B8864B]/10 ring-1 ring-[#B8864B]/30'
                  : 'bg-white border-[#EBE4D8] hover:border-[#DECBB5] shadow-xs'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#B8864B] text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                  Most Popular for UAE Businesses
                </div>
              )}

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#222222] font-heading mb-1">
                  {plan.title}
                </h3>
                <span className="text-xs text-[#888888] font-medium block mb-4">
                  {plan.subtitle}
                </span>

                <div className="p-4 rounded-xl bg-white border border-[#EFEAE2] mb-5">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#976A36] font-heading">
                    <CountUp 
                      end={plan.counterAmount} 
                      duration={2000}
                      prefix={plan.counterPrefix}
                      suffix={plan.counterSuffix}
                      separator=","
                    />
                  </div>
                  <span className="text-[11px] text-[#777777] block mt-1">
                    Excludes official statutory government fees
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#222222] font-heading block">
                    What is Included:
                  </span>
                  {plan.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#444444]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => onOpenConsultation && onOpenConsultation(`PRO Package: ${plan.title}`)}
                  className={`w-full py-3 px-4 rounded-full font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white shadow-md shadow-[#B8864B]/20 hover:brightness-105 active:scale-98'
                      : 'bg-[#FAF5EC] text-[#976A36] hover:bg-[#B8864B] hover:text-white'
                  }`}
                >
                  <span>Inquire About Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Typical Statutory Government Fees Table */}
        <div className="rounded-2xl bg-[#FAF8F5] border border-[#EFEAE2] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#222222] font-heading">
                Typical UAE Government Fees Reference (MOHRE & Immigration)
              </h3>
              <p className="text-xs text-[#666666]">
                Actual government vouchers depend on company classification tier (Category 1, 2, or 3) and nationality quotas.
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-white border border-[#E6D7C3] text-[#B8864B] shrink-0 self-start md:self-auto">
              Direct Government Pass-Through
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {statutoryFeeEstimates.map((f, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#EBE4D8] flex items-center justify-between gap-3 text-xs">
                <span className="text-[#555555] font-medium">{f.item}</span>
                <span className="font-bold text-[#222222] shrink-0 font-heading">{f.cost}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
