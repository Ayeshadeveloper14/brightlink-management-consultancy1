import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CountUp } from '../shared/CountUp.jsx';
import { 
  CreditCard, 
  RefreshCw, 
  Search, 
  Zap, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const CostOverview = ({ onOpenConsultation }) => {
  const shouldReduceMotion = useReducedMotion();

  const pricingCards = [
    {
      title: 'New Application',
      subtitle: 'First-time UAE Residents',
      counterAmount: 270,
      counterPrefix: 'From AED ',
      validityNote: 'Per year of residence visa validity',
      description: 'Official ICP typing fee, government smart service charge, and physical card manufacturing for new visa holders.',
      features: [
        'Electronic ICP application typing',
        'SMS & digital tracking number issued',
        'VIP biometrics appointment booking',
        'Physical smart card printing included'
      ],
      popular: false
    },
    {
      title: 'Emirates ID Renewal',
      subtitle: 'Expiring Resident Cards',
      counterAmount: 270,
      counterPrefix: 'From AED ',
      validityNote: 'Per year of renewal validity',
      description: 'Seamless renewal filing before or within the 30-day post-expiration grace period to eliminate late registration fines.',
      features: [
        'Proactive expiry & grace period audit',
        'Biometrics waiver verification (if exempt)',
        'Immediate digital Emirates ID renewal',
        'Couriers doorstep physical card delivery'
      ],
      popular: true
    },
    {
      title: 'Lost / Damaged Replacement',
      subtitle: 'Card Reprint Service',
      counterAmount: 370,
      counterPrefix: 'From AED ',
      validityNote: 'Standard replacement reprint fee',
      description: 'Direct ICP incident logging, immediate card blocking to prevent unauthorized use, and rapid new card generation.',
      features: [
        'Immediate security status deactivation',
        'Priority reissue submission to ICP',
        'No new biometric appointment required',
        'Express dispatch via Empost delivery'
      ],
      popular: false
    },
    {
      title: 'Urgent Express VIP Processing',
      subtitle: 'Same-Day / 24-Hr Turnaround',
      counterAmount: 520,
      counterPrefix: 'From AED ',
      validityNote: 'Fast-track priority queue fee',
      description: 'Priority government track for urgent travel, immediate bank account unfreezing, or legal contract deadlines.',
      features: [
        'VIP priority ministerial queue jump',
        'Digital card activated within 2–4 hours',
        'Physical card minted within 24 hours',
        'Dedicated VIP liaison coordinator'
      ],
      popular: false
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
            <CreditCard className="w-3.5 h-3.5 text-[#B8864B]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#B8864B] font-heading">
              Transparent Government Fees
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mb-4 font-heading">
            Emirates ID Cost & Fee Overview
          </h2>

          <p className="text-base sm:text-lg text-[#666666] leading-relaxed">
            Clear, transparent fee breakdown for official ICP processing. Official electronic payment receipts are provided with every transaction.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                card.popular
                  ? 'bg-[#FAF5EC] border-2 border-[#B8864B] shadow-md'
                  : 'bg-[#FCFAF8] border border-[#EFEAE2] hover:border-[#DECBB5]'
              }`}
            >
              {card.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#B8864B] text-white shadow-xs">
                    Most Requested
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-[#222222] mb-1">
                  {card.title}
                </h3>
                <div className="text-xs font-medium text-[#777777] mb-4">
                  {card.subtitle}
                </div>

                {/* Animated Price Counter */}
                <div className="mb-2 flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#B8864B] font-heading">
                    {card.counterPrefix}
                    <CountUp end={card.counterAmount} duration={1800} />
                  </span>
                </div>
                <div className="text-[11px] text-[#888888] mb-4">
                  {card.validityNote}
                </div>

                <p className="text-xs text-[#555555] leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2.5 mb-6 text-xs text-[#444444]">
                  {card.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B8864B] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onOpenConsultation && onOpenConsultation(`Emirates ID Quote - ${card.title}`)}
                className={`w-full py-3 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                  card.popular
                    ? 'bg-gradient-to-r from-[#C5985B] via-[#B8864B] to-[#976A36] text-white hover:brightness-105 shadow-md shadow-[#B8864B]/20'
                    : 'bg-white text-[#222222] border border-[#DECBB5] hover:bg-[#FAF5EC]'
                }`}
              >
                <span>Select Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Regulatory Note / Fine Notice */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 rounded-2xl bg-[#FCFAF8] border border-[#EFEAE2] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
          <div className="flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-[#B8864B] shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-[#555555] leading-relaxed">
              <strong className="text-[#222222] font-semibold">Important Fee & Penalty Notice: </strong>
              Official ICP fees vary depending on your visa category and validity term (1 year, 2 years, 3 years, 5 years, or 10 years for Golden Visas). Late renewal applications attract a statutory fine of <strong>AED 20 per day</strong> up to a maximum penalty of AED 1,000. Apply promptly within the 30-day grace window.
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenConsultation && onOpenConsultation('Emirates ID Fine Check & Waiver')}
            className="shrink-0 px-4 py-2 rounded-full bg-[#FAF5EC] text-[#976A36] border border-[#DECBB5] text-xs font-bold hover:bg-[#F5ECE0] transition-colors cursor-pointer"
          >
            Check Late Fines
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default CostOverview;
